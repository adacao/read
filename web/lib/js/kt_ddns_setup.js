Page = function()
{

this.initHtmlText= function()
{
    $("#MainLeftStatus").append(getTagTextFromXmlDoc("menuAppDdnslist"));
    $("#Isstatus").append(getTagTextFromXmlDoc("menuAppDdnsstatus"));
    $("#provider").append(getTagTextFromXmlDoc("menuAppDdnscom"));
    $("#hostname").append(getTagTextFromXmlDoc("menuAppDdnshost"));
    $("#domainname").append(getTagTextFromXmlDoc("menuAppDdnsdomain"));
    $("#username").append(getTagTextFromXmlDoc("menuAppDdnsuser"));
    $("#password").append(getTagTextFromXmlDoc("menuAppDdnspassword"));
    $("#dinterface").append(getTagTextFromXmlDoc("menuAppDdnsinterface"));
    $("#add").attr("value", getTagTextFromXmlDoc("addCtx"));
    $("#dremove").append(getTagTextFromXmlDoc("menuAppDdnsdel"));
    $("#apply").attr("value", getTagTextFromXmlDoc("applyCtx"));  
    $("#delet").attr("value", getTagTextFromXmlDoc("delCtx"));
    $("#DDNS_InterfaceAdd").append(getTagTextFromXmlDoc("interfaceCtx")+":");
    $("#DDNS_AddTitle").append(getTagTextFromXmlDoc("ddnsAddTitleCtx"));
    $("#DDNS_AddTitleDesc").append(getTagTextFromXmlDoc("ddnsAddShowCtx1"));
    $("#DDNS_Provider").append(getTagTextFromXmlDoc("ddnsAddShowCtx2")+":");
    $("#DDNS_Htpc").append(getTagTextFromXmlDoc("ddnsAddHtpc")+":");
    $("#DDNS_AddHostName").append(getTagTextFromXmlDoc("ddnsDomainCtx")+":");
    $("#DDNS_DynPassword").append(getTagTextFromXmlDoc("ddnsPasswordCtx")+":");
    $("#DDNS_AddTzo").append(getTagTextFromXmlDoc("ddnsAddTzoCtx"));
    $("#DDNS_DynUsername").append(getTagTextFromXmlDoc("ddnsUsernameCtx")+":");
    $("#DDNS_OrayLable").append(getTagTextFromXmlDoc("ddnsOrayLable"));
    $("#DDNS_OrayUsername").append(getTagTextFromXmlDoc("ddnsUsernameCtx")+":");
    $("#DDNS_OrayPassword").append(getTagTextFromXmlDoc("ddnsPasswordCtx")+":");
    $("#DDNS_TzoEmail").append(getTagTextFromXmlDoc("ddnsAddTzoEmailCtx")+":");
    $("#DDNS_TzoKey").append(getTagTextFromXmlDoc("ddnsAddTzoKeyCtx")+":");
    $("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
    $("#BTN_BACK").attr("value", getTagTextFromXmlDoc("backCtx"));

    if ($("#DDNS_SEL_Mode").val() == "oray")
    {
        $("#DDNS_TB_OrayInfo").show();
        $("#DDNS_TB_DynInfo").hide();
        $("#DDNS_TB_TzoInfo").hide();
    }
    else if ($("#DDNS_SEL_Mode").val() == "dyndns")
    {
        $("#DDNS_TB_DynInfo").show();
        $("#DDNS_TB_TzoInfo").hide();
        $("#DDNS_TB_OrayInfo").hide();
    }
    else
    {
        $("#DDNS_TB_DynInfo").hide();
        $("#DDNS_TB_TzoInfo").show();
        $("#DDNS_TB_OrayInfo").hide();
    }
    
    $("#DDNS_DIV_Title").show();
    $("#DDNS_DIV_AddTitle").hide();
}

this.addDdnsCfg= function()
{
    $("#DDNS_FORM_ADD").show();
    $("#DDNS_FORM_Mngr").hide();
    $("#DDNS_DIV_Title").hide();
    $("#DDNS_DIV_AddTitle").show();

    $("#DDNS_TEXT_HostName").attr("value","");
	
    if ($("#DDNS_SEL_Mode").val() == "oray")
    {
        $("#DDNS_TEXT_OrayUsername").attr("value","");
        $("#DDNS_PWD_OrayPassword").attr("value","");
    }
    else if ($("#DDNS_SEL_Mode").val() == "dyndns")
    {
        $("#DDNS_TEXT_DynUsername").attr("value","");
        $("#DDNS_PWD_DynPassword").attr("value","");
    }
    else    
    {
        $("#DDNS_TEXT_TzoEmail").attr("value","");
        $("#DDNS_PWD_TzoKey").attr("value","");
    }
}


this.delDdnsCfg= function()
{
    var rmlObj = $("input[name='rml']");
    var rmlStr = "";
    var postData;

    $.each(rmlObj, function(i,n){
        if (n.checked)
        {
            rmlStr = rmlStr + n.value +",";
        }
    });
    
    if ("" != rmlStr)
    {
        jsonObjInit();
        jsonObjPush("action","remove");
        jsonObjPush("rmLst", rmlStr);
        postData = jsonObjEnd();
    }

    setCfg("ctDdnsSetCfg.cmd", postData, updateAll);
}

this.is_comma= function(host)
{
    var i;
    
    if (host.length == 0)
    {
        return true;
    }
    
    for (i = 0; i < host.length; i++) 
    {
        if (host.charAt(i) == ',')               
            return true;
    }

    return false;
}


this.btnApply= function()
{
    var postData;
    
    if (!checkValid())
    {
        return;
    }
    
    jsonObjInit();
    jsonObjPush("action", "add");
    
    if ($("#DDNS_SEL_Interface").find("option:selected").text() == "")
    {
        alert("Interface is NULL!");
        return;
    }
    
    jsonObjPush("iface", $("#DDNS_SEL_Interface").find("option:selected").text());

    if ( $("#DDNS_TEXT_HostName").val() == "")
    {
        alert("Domain can not be NULL");
        return;
    }
    
    jsonObjPush("hostname", trim($("#DDNS_TEXT_HostName").val()));
    jsonObjPush("service", $("#DDNS_SEL_Mode").val());

    if ($("#DDNS_SEL_Mode").val() == "oray")
    {
        jsonObjPush("username", $("#DDNS_TEXT_OrayUsername").val());
        jsonObjPush("password", $("#DDNS_PWD_OrayPassword").val());
    }
    else if ($("#DDNS_SEL_Mode").val() == "dyndns")
    {
        jsonObjPush("username", $("#DDNS_TEXT_DynUsername").val());
        jsonObjPush("password", $("#DDNS_PWD_DynPassword").val());
    }
    else
    {
        jsonObjPush("username", $("#DDNS_TEXT_TzoEmail").val());
        jsonObjPush("password", $("#DDNS_PWD_TzoKey").val());
    }
    
    postData = jsonObjEnd();
    setCfg("ctDdnsSetCfg.cmd", postData, updateDdnsAdd);
}

this.domaincheck= function(elm)
{
    if (elm.value != "")
    {
        if (true == this.is_comma(elm.value))
        {
            warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("ddnsWarn"));
        }
        else
        {
            warnMsgHide(elm);
        }
    }
    else
    {
        warnMsgHide(elm);
    }
}
    

this.registerEvent= function()
{
    $("#add").click(function(){
        $("#add").hide();
        $("#delet").hide();
        $("#apply").hide();
        currentPageInst.addDdnsCfg();
    });
    
    $("#delet").click(function(){
        currentPageInst.delDdnsCfg();
    });

    /*$("#apply").click(function(){         //DDNS页面的应用是起什么作用
        currentPageInst.btnApply();
    });*/

    $("#BTN_Apply").click(function(){       
        currentPageInst.btnApply();
    });
    
    $("#DDNS_SEL_Mode").change(function(){
        currentPageInst.changeMode();
    });
    
    $("#DDNS_TEXT_HostName").change(function(){
        currentPageInst.domaincheck(this);
    });
        
    $("#BTN_BACK").click(function(){pageJump("kt_ddns_setup.html");});
}

//新增  下拉框变化 内容变化
this.changeMode= function()
{
    if ($("#DDNS_SEL_Mode").val()== "oray")
    {
        $("#DDNS_TB_OrayInfo").show();
        $("#DDNS_TB_DynInfo").hide();
        $("#DDNS_TB_TzoInfo").hide();
    }
    else if ($("#DDNS_SEL_Mode").val()== "dyndns")
    {
        $("#DDNS_TB_DynInfo").show();
        $("#DDNS_TB_TzoInfo").hide();
        $("#DDNS_TB_OrayInfo").hide();
    }
    else    
    {
        $("#DDNS_TB_DynInfo").hide();
        $("#DDNS_TB_TzoInfo").show();
        $("#DDNS_TB_OrayInfo").hide();
    }
}


this.setDdnsEnable= function(jsonDdnsEnable)
{
    if(jsonDdnsEnable.enable == '1')
    {
        $("#DDNS_CHK_Enable").attr("checked", true);
        $("#DDNS_TB_ConfigDiv").show();
        $("#DDNS_TB_DelBtnDiv").show();
        $("#DDNS_ConfigShow").show();
    }
    else
    {
       $("#DDNS_CHK_Enable").attr("checked", undefined);
       $("#DDNS_TB_ConfigDiv").hide();
       $("#DDNS_TB_DelBtnDiv").hide();
       $("#DDNS_ConfigShow").hide();
    }
}
//获取数据
this.setDdnsCfg= function(jsonObj)
{
    var i;
    var htmlLabel = "";
    if (0 == jsonObj.length)
    {
        $("#DDNS_TBODY_Config").empty();
        $(".hidediv").show();
        return;
    }
    
    $.each(jsonObj, function(i,ddnscfg){
        htmlLabel += "<tr>";
        htmlLabel = htmlLabel + "<td align='center'><input type='checkbox' name='status' ></td>"; 
        htmlLabel = htmlLabel + "<td>&nbsp;"+ ddnscfg.providerName +"</td>";
        htmlLabel = htmlLabel + "<td>&nbsp;"+ ddnscfg.host + "</td>";
        htmlLabel = htmlLabel + "<td>&nbsp;"+ ddnscfg.userName +"</td>";    
        htmlLabel = htmlLabel + "<td>&nbsp;"+ ddnscfg.ifName + "</td>";
        htmlLabel = htmlLabel + "<td align='center'><input type='checkbox' name='rml' value='" + ddnscfg.host + "|" + ddnscfg.ifName + "'></td>"; 
        htmlLabel += "</tr>";
    })
    
    $("#DDNS_TBODY_Config").empty();
    $("#DDNS_TBODY_Config").append(htmlLabel);
}

this.updateDdnsCfg= function(jsonObj)
{
    this.setDdnsEnable(jsonObj.ddnsEnable);
    this.setDdnsCfg(jsonObj.ddnsCfg);
}

this.updateInterface= function(jsonObj)
{
    var i;
    
    if (0 == jsonObj.length)
    {
        $("#DDNS_SEL_Interface").empty();
        return;
    }

    for(i = 0; i <jsonObj.length; i++)
    {
        $("#DDNS_SEL_Interface").append("<option value="+ i + ">" + jsonObj[i].name + "/" + jsonObj[i].ifName + "</option>");
    }
}


}  // End Page


function updateDdnsCfg(jsonObj)
{
    currentPageInst.updateDdnsCfg(jsonObj);
}

function updateAll()
{
    getCfg("ctDdnsGetCfg.json", {"ddnsEnable":"1", "ddnsCfg":"1"}, updateDdnsCfg);
}

function setDdnsEnable(jsonObj)
{
    currentPageInst.setDdnsEnable(jsonObj);
}

function updateDdnsEnable()
{
    getCfg("ctDdnsGetCfg.json", {"ddnsEnable":"1"}, setDdnsEnable);
}

function updateDdnsCfg(jsonObj)
{
    currentPageInst.updateDdnsCfg(jsonObj);
}

function updateDdnsAdd()
{
    $("#DDNS_FORM_ADD").hide();
    $("#DDNS_FORM_Mngr").show(); 
    $("#DDNS_DIV_Title").show();
    $("#DDNS_DIV_AddTitle").hide();
    
    getCfg("ctDdnsGetCfg.json", {"ddnsEnable":"1", "ddnsCfg":"1"}, updateDdnsCfg);

}

function updateInterface(jsonObj)
{
    currentPageInst.updateInterface(jsonObj);
}

function updateAllCfg()
{
    getCfg("ctDdnsGetCfg.json", {"ddnsEnable":"1", "ddnsCfg":"1"}, updateDdnsCfg);
    getCfg("ctGetIfName.json", {"route":"1"}, updateInterface);
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
    this.basicClassFile = "./kt_ddns_setup.js";
    this.customLv1File = "./kt_ddns_setup_customlv1.js";
    this.customLv2File = "./kt_ddns_setup_customlv2.js";
    this.customLv3File = "./kt_ddns_setup_customlv3.js";
}

