Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#MenuApp_Help_use").append(getTagTextFromXmlDoc("menuHelp"));
	$("#HELP_StatusDevTitle").append(getTagTextFromXmlDoc("devicehelpInfoTitleCtx"));
	$("#HELP_StatusDevDec").append(getTagTextFromXmlDoc("deviceStatusHelpMiddleCtx"));
	$("#HELP_StatusDevInfo").append(getTagTextFromXmlDoc("deviceStatusHelpInfoCtx"));

	$("#HELP_StatusWanTitle").append(getTagTextFromXmlDoc("netWorkhelpInfoTitleCtx"));
	$("#HELP_StatusWanV4Title").append(getTagTextFromXmlDoc("deviceNetHelpInfoMddileinf"));
	$("#HELP_StatusWanV4Info").append(getTagTextFromXmlDoc("deviceNetHelpInfoCtx"));
	$("#HELP_StatusWanV6Title").append(getTagTextFromXmlDoc("deviceNetHelpInfoMddileinf6"));
	$("#HELP_StatusWanV6Info").append(getTagTextFromXmlDoc("deviceNetHelpipv6"));
	$("#HELP_StatusWanGponTitle").append(getTagTextFromXmlDoc("deviceNetHelpgpinfo6"));
	$("#HELP_StatusGponGponInfo").append(getTagTextFromXmlDoc("deviceNetHelpgpinf"));	
	$("#HELP_StatusDdnsTitle").append(getTagTextFromXmlDoc("deviceNetHelpDdnsTitle"));
	$("#HELP_StatusDdnsInfo").append(getTagTextFromXmlDoc("deviceNetHelpDdnsInfo"));

	$("#HELP_StatusLanTitle").append(getTagTextFromXmlDoc("userhelpInfoTitleCtx"));
	$("#HELP_StatusLanWlanTitle").append(getTagTextFromXmlDoc("deviceUserHelpInfo1Ctx"));
	$("#HELP_StatusLanWlanInfo").append(getTagTextFromXmlDoc("deviceUserHelpInfoCtx"));
	$("#HELP_StatusLanEthTitle").append(getTagTextFromXmlDoc("deviceUserHelpInfo2"));
	$("#HELP_StatusLanEthInfo").append(getTagTextFromXmlDoc("deviceethHelpInforCtx"));
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
    this.basicClassFile = "./kt_help_status.js";
    this.customLv1File = "./kt_help_status_customlv1.js";
    this.customLv2File = "./kt_help_status_customlv2.js";
    this.customLv3File = "./kt_help_status_customlv3.js";
}

