Page = function()
{
//globle vars
var currLangType;
this.initHtmlText= function()
{
    $("select[name='langType']").val(currLangType);
    $("#Menu_Language").append(getTagTextFromXmlDoc("menuLanguage"));
    $("#mainLangCh").append(getTagTextFromXmlDoc("mainLangCh"));
	$("#mainLangEn").append(getTagTextFromXmlDoc("mainLangEn"));
}
this.registerEvent = function()
{
	$("select[name='langType']").change(function(){setLangType(this)});
}
}

function getCurrLangType()
{
	return currLangType;
}
/*function getLangXmlDoc()
{
	return langXmlDoc;
}*/
function getLangDoc()
{
	window.parent.location.reload();
	
}
function setLangType(elm)
{
	setCfg("langTypeSet.cmd", {"langType": elm.value}, getLangDoc);
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
    this.basicClassFile = "kt_change_language.js";
    this.customLv1File = "kt_change_language_customlv1.js";
    this.customLv2File = "kt_change_language_customlv2.js";
    this.customLv3File = "kt_change_language_customlv3.js";
}