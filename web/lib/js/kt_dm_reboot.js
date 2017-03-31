Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#DM_RebootTitle").append(getTagTextFromXmlDoc("ClickRebootCtx"));
	$("#DM_BTN_Reboot").attr("value", getTagTextFromXmlDoc("rebootBtnCtx")); 
	$("#DM_rebootBtnCtx").append(getTagTextFromXmlDoc("rebootBtnCtx"));
}

this.btnApply= function()
{
	var postData;

	jsonObjInit();
	
	postData = jsonObjEnd();
	setCfg("deviceRestart.cmd", postData, null);
}

this.registerEvent= function()
{
	$("#DM_BTN_Reboot").click(function()
	{
		currentPageInst.btnApply();
	});
}

}  // End Page



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
    this.basicClassFile = "./kt_dm_reboot.js";
    this.customLv1File = "./kt_dm_reboot_customlv1.js";
    this.customLv2File = "./kt_dm_reboot_customlv2.js";
    this.customLv3File = "./kt_dm_reboot_customlv3.js";
}

