Page = function()
{
this.initHtmlText= function()
{
	$("#MenuApp_force_user").append(getTagTextFromXmlDoc("menuAppmandatory"));
	$("#mandatory").append(getTagTextFromXmlDoc("menuAppForceUser"));
    $("#portalenable").append(getTagTextFromXmlDoc("SystemLogEnableCtx"));
    $("#portaldisable").append(getTagTextFromXmlDoc("SystemLogDisableCtx"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("applyCtx"));  
    $("#BTN_ApplyNo").attr("value", getTagTextFromXmlDoc("cancelCtx"));
}

this.updateElm= function(PortalJsonObj)
{
    if(PortalJsonObj.PortalManagementEnable == 1)
    {
        $("#portal").attr("value", '启用');
    }
    else
    {
        $("#portal").attr("value", '禁用');
    }
}

this.buttonApply= function()
{
    var postData;
    jsonObjInit();

    if($("#portal").val() == "启用")
    {       
        jsonObjPush("PortalManagementEnable", 1);
    }
    else
    {
        jsonObjPush("PortalManagementEnable", 0);       
    }
    postData = jsonObjEnd();
    setCfg("PortalManagementSet.cmd", postData, updateAllCfg);
}

this.registerEvent= function()
{
    $("#BTN_Apply").click(function(){
		currentPageInst.buttonApply();
	});
}
}  // End Page

function updateElm(jsonObj)
{   
	currentPageInst.updateElm(jsonObj);
}

function updateAllCfg()
{
	getCfg("PortalManagementGet.json", "", updateElm);
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
    this.basicClassFile = "./kt_force_user.js";
    this.customLv1File = "./kt_force_user_customlv1.js";
    this.customLv2File = "./kt_force_user_customlv2.js";
    this.customLv3File = "./kt_force_user_customlv3.js";
}

