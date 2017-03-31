/**
 * Created by caoxiaofei on 2017/2/24.
 */
Page = function()
{
this.ns4 = (document.layers) ? true : false;
this.ie4 = (document.all) ? true : false;


this.initHtmlText= function()
{
    $("#WFG_Start").append(getTagTextFromXmlDoc("wizardWiFiStart"));
    $("#WFG_Advice").append(getTagTextFromXmlDoc("wizardWiFiAdvice"));
    $("#WFG_Check_span").append(getTagTextFromXmlDoc("wizardWiFiRouteModeLable1"));
    $("#fisrt_span").append(getTagTextFromXmlDoc("wizardWiFiSsidLable"));
    $("#secont_span").append(getTagTextFromXmlDoc("wizardWiFiPwdLable"));

}

this.popUpWindow= function(URLStr, left, top, width, height)
{
    if (this.popUpWin)
    {
        if (!this.popUpWin.closed)
            this.popUpWin.close();
    }
    this.popUpWin = open(URLStr,'_self', 'toolbar=yes,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');
}


this.checkUser=function () {

    var setName=$("#WFG_Name").val();

    if(setName.length>32){
        alert(getTagTextFromXmlDoc("WiFiNameWarn"));
        return false;
    }
    if(setName.indexOf("sxbctv-")!=0){
        alert(getTagTextFromXmlDoc("WiFiManagementWarn1"));
        return false;
    }
    return true;
}


this.checkRepwd=function () {

    var setName=$("#WFG_Password").val();
    if(!setName.match(/^\w{8,32}/)){
        alert(getTagTextFromXmlDoc("WiFiPasswordWarn"));
        return false;
    }
    return true;

}


this.deviceRegister= function(){
    var postData;

    jsonObjInit();
    if(this.checkUser() && this.checkRepwd()){
        jsonObjPush("setName", $("#WFG_Name").val());
        jsonObjPush("setPassword", $("#WFG_Password").val());

        if($("#WFG_Check").checked)
        {
            jsonObjPush("setIdentical",1);
        }
        else
        {
            jsonObjPush("setIdentical",0);
        }
        postData=jsonObjEnd();
        setCfg("wifiGuideSet.cmd", postData, null);
        this.popUpWindow('login.html', 200,200,800,600);
    }
}

this.keyDown= function(e)
{
    if (!e)
        e = window.event;
    if (13 == (e.keyCode | e.which | e.charCode) )
    {
        currentPageInst.deviceRegister();
        return 13;
    }

    return 0;
}

this.myKeyDown= function(e)
{
    return currentPageInst.keyDown(e);
}

document.onkeydown = this.myKeyDown;

if(this.ns4)
{
    document.captureEvents(Event.KEYDOWN);
}

this.updateWiFiElm = function(jsonObj)
{
    $("#WFG_Name").focus();

    $("#WFG_Name").val(jsonObj.ssidName);
    $("#WFG_Password").val(jsonObj.ssidPassword);

}

this.registerEvent= function()
{
    $("#WFG_Next").click(function(){currentPageInst.deviceRegister();});
}

}  // End Page


function updateWiFiElm(jsonObj)
{
    currentPageInst.updateWiFiElm(jsonObj);
}

function updateAllCfg()
{
    getCfg("wifiGuideGet.json", null, updateWiFiElm);
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
    this.basicClassFile = "kt_wifi_guide.js";
    this.customLv1File = "kt_wifi_guide_customlv1.js";
    this.customLv2File = "kt_wifi_guide_customlv2.js";
    this.customLv3File = "kt_wifi_guide_customlv3.js";
}

