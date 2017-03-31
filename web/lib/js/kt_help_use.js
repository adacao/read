Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#MenuApp_Help_use").append(getTagTextFromXmlDoc("menuHelp"));
	$("#Help_status").append(getTagTextFromXmlDoc("menuHelpStatus"));
	$("#Help_internet").append(getTagTextFromXmlDoc("menuHelpNet"));
	$("#Help_safe").append(getTagTextFromXmlDoc("menuHelpSec"));
	$("#Help_serve").append(getTagTextFromXmlDoc("menuHelpApply"));
	$("#Help_system").append(getTagTextFromXmlDoc("menuHelpManage"));
	$("#Help_exit").append(getTagTextFromXmlDoc("menuHelpDiag"));
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
    this.basicClassFile = "./kt_help_use.js";
    this.customLv1File = "./kt_help_use_customlv1.js";
    this.customLv2File = "./kt_help_use_customlv2.js";
    this.customLv3File = "./kt_help_use_customlv3.js";
}

