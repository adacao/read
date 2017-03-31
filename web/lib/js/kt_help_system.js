Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#MenuApp_Help_use").append(getTagTextFromXmlDoc("menuHelp"));
	$("#SystemlogHelpTitle").append(getTagTextFromXmlDoc("SystemlogHelpTitleCtx"));
	$("#Systemlog1").append(getTagTextFromXmlDoc("Systemlog1Ctx"));	
	$("#loglevelSettingHelpTitle").append(getTagTextFromXmlDoc("loglevelSettingHelpTitleCtx"));
	$("#loglevelSettingHelpComment").append(getTagTextFromXmlDoc("loglevelSettingHelpCommentCtx"));
	$("#loglevelSettingHelpEnable").append(getTagTextFromXmlDoc("loglevelSettingHelpEnableCtx"));
	$("#loglevelSettingHelp").append(getTagTextFromXmlDoc("loglevelSettingHelpCtx"));
	$("#loglevelDisplayHelp").append(getTagTextFromXmlDoc("loglevelDisplayHelpCtx"));
	$("#loglevelModeHelp").append(getTagTextFromXmlDoc("loglevelModeHelpCtx"));
	$("#loglevelRemoteIPHelp").append(getTagTextFromXmlDoc("loglevelRemoteIPHelpCtx"));
	$("#loglevelRemotePortHelp").append(getTagTextFromXmlDoc("loglevelRemotePortHelpCtx"));
	$("#LogLevelInfoHelp").append(getTagTextFromXmlDoc("LogLevelInfoHelpCtx"));
	$("#LogLevelInfoHelpComment").append(getTagTextFromXmlDoc("LogLevelInfoHelpCommentCtx"));
	$("#logInfoAccessRecordHelp").append(getTagTextFromXmlDoc("logInfoAccessRecordHelpCtx"));
	$("#logInfoSafetyRecordHelp").append(getTagTextFromXmlDoc("logInfoSafetyRecordHelpCtx"));
	$("#logInfoCreatLogFileHelp").append(getTagTextFromXmlDoc("logInfoCreatLogFileHelpCtx"));
	$("#logInfoClearHistoryHelp").append(getTagTextFromXmlDoc("logInfoClearHistoryHelpCtx"));

	$("#deviceManagement").append(getTagTextFromXmlDoc("deviceManagementCtx"));
    $("#deviceManagement1Title").append(getTagTextFromXmlDoc("deviceManagement1TitleCtx"));
    $("#deviceManagement2Title").append(getTagTextFromXmlDoc("deviceManagement2TitleCtx"));
    $("#deviceManagement4Title").append(getTagTextFromXmlDoc("deviceManagement4TitleCtx"));
    $("#deviceManagement1").append(getTagTextFromXmlDoc("deviceManagement1Ctx"));
    $("#deviceManagement2").append(getTagTextFromXmlDoc("deviceManagement2Ctx"));
    $("#deviceManagement4").append(getTagTextFromXmlDoc("deviceManagement4Ctx"));

    $("#UserInfoHelpTitle").append(getTagTextFromXmlDoc("UserInfoHelpTitleCtx"));
	$("#helpManageDisplay").append(getTagTextFromXmlDoc("helpManageDisplayCtx"));
	$("#ModifyUserPasswordHelp").append(getTagTextFromXmlDoc("ModifyUserPasswordHelpCtx"));
	$("#ModifyadminPasswordHelp").append(getTagTextFromXmlDoc("MModifyadminPasswordHelpCtx"));

	$("#menuHelpManageMaintain").append(getTagTextFromXmlDoc("menuHelpManageMaintain"));
    $("#MaintenanceHelp").append(getTagTextFromXmlDoc("Maintenancereported1Ctx"));

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
    this.basicClassFile = "./kt_help_system.js";
    this.customLv1File = "./kt_help_system_customlv1.js";
    this.customLv2File = "./kt_help_system_customlv2.js";
    this.customLv3File = "./kt_help_system_customlv3.js";
}