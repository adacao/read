Page = function()
{

this.maxCert;
this.curCertShowName;
this.curCertShowType;


this.initHtmlText= function()
{
    $("#TR69_CertTitle").append(getTagTextFromXmlDoc("CertTitle"));
    $("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("CertImport"));
    $("#TR69_CertDesc").append(getTagTextFromXmlDoc("CertShow1")+"<br />" + getTagTextFromXmlDoc("CertShow2"));
    $("#TR69_CertMax").append(getTagTextFromXmlDoc("CertMaxPre"));
    $("#TR69_TD_CertName").append(getTagTextFromXmlDoc("CertName"));
    $("#TR69_TD_CertType").append(getTagTextFromXmlDoc("CertType"));
    $("#TR69_TD_CertSub").append(getTagTextFromXmlDoc("CertSub"));
    $("#TR69_TD_CertFun").append(getTagTextFromXmlDoc("CertFun"));      
    $("#TR69_CertImportShow").append(getTagTextFromXmlDoc("CertImportShow"));        
    $("#TR69_TD_CertImportName").append(getTagTextFromXmlDoc("CertImportName"));    
    $("#TR69_TD_Cert").append(getTagTextFromXmlDoc("Cert"));    
    $("#TR69_CertImportTitle").append(getTagTextFromXmlDoc("CertImportTitle"));
    $("#TR69_BTN_CertImport").attr("value", getTagTextFromXmlDoc("CertImport1"));
    $("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
    $("#BTN_BACK").attr("value", getTagTextFromXmlDoc("back")); 
    $("#TR69_CertDetailTitle").append(getTagTextFromXmlDoc("CertDetailTitle"));
    
    $("#TR69_DIV_CertDesc").show();
    $("#TR69_FORM_CertView").show();
    $("#TR69_DIV_CertImport").hide();
    $("#TR69_FORM_CertImport").hide();
    $("#TR69_DIV_CertDeta").hide();
    $("#TR69_CertDetail").hide();
}


this.updateTitle= function(jsonObj)
{
    var htmlLabel = "";

    this.curCertShowName = jsonObj.curCertShowName;
    this.curCertShowType = jsonObj.curCertShowType;
    this.maxCert = jsonObj.max;
    htmlLabel = getTagTextFromXmlDoc("CertMaxPre");
    htmlLabel += this.maxCert + getTagTextFromXmlDoc("CertMaxEnd");

    $("#TR69_CertMax").empty();
    $("#TR69_CertMax").append(htmlLabel);    
}


this.updateItem= function(certItem)
{
    var htmlLabel = "";
    
    if (0 == certItem.length)
    {
        $("#TR69_CertCfg").empty();
        return;
    }
    
    $.each(certItem, function(i, list){
        if (list.type == 'ca')
        {
            htmlLabel += "<tr>";
            htmlLabel = htmlLabel + "<td>&nbsp;"+ list.name + "</td>";
            htmlLabel = htmlLabel + "<td>&nbsp;"+ list.subject +"</td>";
            htmlLabel = htmlLabel + "<td>&nbsp;"+ list.type  + "</td>";
            htmlLabel = htmlLabel + "<td align='center'><input class='buttonX' type='button' name='view' value='" + getTagTextFromXmlDoc("viewCtx")+"'></td>";
            htmlLabel = htmlLabel + '<td align="center"><input class="buttonX" type="button" name="rml" value="' + getTagTextFromXmlDoc("delCtx")+'"><input type="hidden"  value="'+list.name+'" id="val'+i+'"></td>';
            htmlLabel += "</tr>";
        }
    });
    
    $("#TR69_CertCfg").empty();
    $("#TR69_CertCfg").append(htmlLabel);        
}

this.updateAll= function(jsonObj)
{
    $("#TR69_DIV_CertDesc").show();
    $("#TR69_FORM_CertView").show();
    $("#TR69_DIV_CertImport").hide();
    $("#TR69_FORM_CertImport").hide();
    $("#TR69_DIV_CertDeta").hide();
    $("#TR69_CertDetail").hide();
   
    this.updateTitle(jsonObj);
    this.updateItem(jsonObj.certItem);
    this.registerEventBtn();
}



this.viewUpdate= function(item)
{
    var htmlLabel = "";

    if (0 == item.length)
    {
        $("#TR69_CertDetailShow").empty();
        return;
    }

    $.each(item, function(i, list){
        if (((currentPageInst.curCertShowType == '2')&&(list.type == 'ca')&&(list.name == currentPageInst.curCertShowName))
         || ((currentPageInst.curCertShowType == '1')&&(list.type == 'ca')&&(list.name == currentPageInst.curCertShowName)))
        {
            htmlLabel += "<tr>";
            htmlLabel =  htmlLabel + "<td>&nbsp;"+ getTagTextFromXmlDoc("CertName")+ "</td>";
            htmlLabel =  htmlLabel + "<td>&nbsp;"+ list.name + "</td>";
            htmlLabel =  htmlLabel + "</tr>";
            
            htmlLabel += "<tr>";
            htmlLabel =  htmlLabel + "<td>&nbsp;"+ getTagTextFromXmlDoc("CertType")+ "</td>";
            htmlLabel =  htmlLabel + "<td>&nbsp;"+ list.type + "</td>";
            htmlLabel =  htmlLabel +"</tr>";
            
            htmlLabel += "<tr>";
            htmlLabel =  htmlLabel + "<td>&nbsp;"+ getTagTextFromXmlDoc("CertSub")+ "</td>";
            htmlLabel =  htmlLabel + "<td>&nbsp;"+ list.subject + "</td>";
            htmlLabel = htmlLabel +"</tr>";
            
            htmlLabel += "<tr>";
            htmlLabel =  htmlLabel + "<td align= 'center'>&nbsp;"+ getTagTextFromXmlDoc("Cert")+ "</td>";
            htmlLabel =  htmlLabel + "<td><textarea cols = '80' rows='20'>"+ String_Replace(list.content, '<br>', "\x0a",0) + "</textarea></td>";
            htmlLabel += "</tr>";

            if (currentPageInst.curCertShowType != '2') 
            {
                htmlLabel += "<tr>";
                htmlLabel =  htmlLabel + "<td align= 'center'>&nbsp;"+ getTagTextFromXmlDoc("PrivateKey")+ "</td>";
                htmlLabel =  htmlLabel + "<td><textarea cols = '80' rows='20'>"+ String_Replace(list.privKey, '<br>', "\x0a",0) + "</textarea></td>";
                htmlLabel += "</tr>";
                
                htmlLabel += "<tr>";
                htmlLabel =  htmlLabel + "<td align= 'center'>&nbsp;"+ getTagTextFromXmlDoc("CertSignReq")+ "</td>";
                htmlLabel =  htmlLabel + "<td><textarea cols = '80' rows='20'>"+ String_Replace(list.reqPub, '<br>', "\x0a",0) + "</textarea></td>";
                htmlLabel += "</tr>";
            }
        }
    });
    
    $("#TR69_CertDetailShow").empty();
    $("#TR69_CertDetailShow").append(htmlLabel);    
}


this.view= function(jsonObj)
{
    this.updateTitle(jsonObj);
    this.viewUpdate(jsonObj.certItem);   
}


this.removeClick= function(idx)
{
    var postData;
    
    jsonObjInit();
    jsonObjPush("action","remove");
    jsonObjPush("certName", $("#val"+idx).val());
    postData = jsonObjEnd();
        
    setCfg("ctCertcaSet.json", postData, updateAllCfg);
}


this.viewClick= function(idx)
{
    var postData;

    jsonObjInit();
    jsonObjPush("action", "show");
    jsonObjPush("certName", $("#val"+idx).val());
    postData = jsonObjEnd();
    
    setCfg("ctCertcaSet.json", postData, updateView);
}


this.importShow= function()
{
    var certstart = '-----BEGIN CERTIFICATE-----';
    var certinsert = '\n<insert certificate here>\n';
    var certend = '-----END CERTIFICATE-----';

    $("#TR69_TEXT_CertImportName").val("acscert");
    $("#TR69_TEXTA_CertPublic").val(certstart + certinsert + certend)
}




this.updateImport= function(jsonObj)
{
    if (jsonObj.enableImport == '1')
    {
        this.importShow();
        $("#TR69_DIV_CertDesc").hide();
        $("#TR69_FORM_CertView").hide();
        $("#TR69_DIV_CertDeta").hide();
        $("#TR69_CertDetail").hide();          
        $("#TR69_DIV_CertImport").show();
        $("#TR69_FORM_CertImport").show();
    }
    else
    {
        alert(getTagTextFromXmlDoc("CertWarn"));
    }
}


this.btnImport= function()
{   
    var postData;
    
    jsonObjInit();  
    jsonObjPush("action", "preimport");
    postData = jsonObjEnd();
    
    setCfg("ctCertcaSet.json", postData, enableImport);     
}


this.btnApply= function()
{
    var postData;
    jsonObjInit();

    jsonObjPush("action", "import");
    jsonObjPush("certName", $("#TR69_TEXT_CertImportName").val()); 
    jsonObjPush("certPublic", encodeURI($("#TR69_TEXTA_CertPublic").val()));  
    postData = jsonObjEnd();

    setCfg("ctCertcaSet.json", postData, updateApply);  
}


this.registerEventBtn= function()
{
    $.each($("input[name='rml']"), function(idx, rmlButton)
    {
        $(rmlButton).click(function(){currentPageInst.removeClick(idx)});
    });
    $.each($("#TR69_FORM_CertView"), function(idx, rmlButton)
    {
        $(rmlButton).click(function(){currentPageInst.viewClick(idx)});
    });
}


this.backApply= function()
{
    $("#TR69_DIV_CertDesc").show();
    $("#TR69_FORM_CertView").show();
    $("#TR69_DIV_CertImport").hide();
    $("#TR69_FORM_CertImport").hide();
    $("#TR69_DIV_CertDeta").hide();
    $("#TR69_CertDetail").hide();
    
    this.updateAllCfg();
}


this.registerEvent= function()
{
    $("#TR69_BTN_CertImport").click(function(){
        currentPageInst.btnImport();
    });

    $("#BTN_Apply").click(function(){
        currentPageInst.btnApply();
    }); 
    
    $("#BTN_BACK").click(function(){
        currentPageInst.backApply();
    }); 
}

}  // End Page


function updateApply()
{
    $("#TR69_DIV_CertImport").hide();
    $("#TR69_FORM_CertImport").hide();
    $("#TR69_DIV_CertDeta").hide();
    $("#TR69_CertDetail").hide();
    $("#TR69_DIV_CertDesc").show();
    $("#TR69_FORM_CertView").show();
    updateAllCfg();
}

function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllCfg()
{
    getCfg("ctCertcaGet.json", "", updateAll);
}

function view(jsonObj)
{
    currentPageInst.view(jsonObj);
}

function updateView()
{
    $("#TR69_DIV_CertDesc").hide();
    $("#TR69_FORM_CertView").hide();
    $("#TR69_DIV_CertImport").hide();
    $("#TR69_FORM_CertImport").hide();
    $("#TR69_DIV_CertDeta").show();
    $("#TR69_CertDetail").show();    
  
    getCfg("ctCertcaGet.json", "", view);
}

function updateImport(jsonObj)
{
    currentPageInst.updateImport(jsonObj);
}

function enableImport(jsonObj)
{
    getCfg("ctCertcaGet.json", "", updateImport);   
}


function initHtmlText()
{
    currentPageInst.initHtmlText();
}

function registerEvent()
{
    currentPageInst.registerEvent();
}

var pageCustomObj = new function()
{
    this.basicClassFile = "./kt_tr69_cert.js";
    this.customLv1File = "./kt_tr69_cert_customlv1.js";
    this.customLv2File = "./kt_tr69_cert_customlv2.js";
    this.customLv3File = "./kt_tr69_cert_customlv3.js";
}

