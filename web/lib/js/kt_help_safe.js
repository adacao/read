Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#MenuApp_Help_use").append(getTagTextFromXmlDoc("menuHelp"));
	$("#URLfilter").append(getTagTextFromXmlDoc("URLfilterCtx"));
	$("#URLfilterHelpTitle1").append(getTagTextFromXmlDoc("URLfilterHelpTitle1Ctx"));
	$("#URLfilter1").append(getTagTextFromXmlDoc("URLfilter1Ctx"));
	$("#URLfilterEnableHelp").append(getTagTextFromXmlDoc("URLfilterEnableHelpCtx"));
	$("#URLfilterTypeHelp").append(getTagTextFromXmlDoc("URLfilterTypeHelpCtx"));
	$("#URLfilterAddressHelp").append(getTagTextFromXmlDoc("URLfilterAddressHelpCtx"));
	$("#URLfilterPortHelp").append(getTagTextFromXmlDoc("URLfilterPortHelpCtx"));

	$("#Firewall").append(getTagTextFromXmlDoc("FirewallCtx"));
	$("#Firewall1").append(getTagTextFromXmlDoc("Firewall1Ctx"));
	$("#FirewalllevelHelp").append(getTagTextFromXmlDoc("FirewalllevelHelpCtx"));
	$("#FirewalllevelInfoHelp").append(getTagTextFromXmlDoc("FirewalllevelInfoHelpCtx"));
	$("#DDOSHelp").append(getTagTextFromXmlDoc("DDOSHelpCtx"));
	$("#DDOSEnableHelp").append(getTagTextFromXmlDoc("DDOSEnableHelpCtx"));

	$("#macAddressFilter").append(getTagTextFromXmlDoc("macAddressFilterCtx"));
	$("#macAddressFilterHelpTitle1").append(getTagTextFromXmlDoc("macAddressFilterHelpTitle1Ctx"));
	$("#macFilterInfoHelp").append(getTagTextFromXmlDoc("macFilterInfoHelpCtx"));
	$("#macFilterEnableHelp").append(getTagTextFromXmlDoc("macFilterEnableHelpCtx"));
	$("#macFilterModeHelp").append(getTagTextFromXmlDoc("macFilterModeHelpCtx"));
	$("#macFilterProtocolTypeHelp").append(getTagTextFromXmlDoc("macFilterProtocolTypeHelpCtx"));
	$("#macFilterPPPoEHelp").append(getTagTextFromXmlDoc("macFilterPPPoEHelpCtx"));
	$("#macFilterIPv4orIPv6Help").append(getTagTextFromXmlDoc("macFilterIPv4orIPv6HelpCtx"));
	$("#macFilterAppleTalkHelp").append(getTagTextFromXmlDoc("macFilterAppleTalkHelpCtx"));
	$("#macFilterIPXHelp").append(getTagTextFromXmlDoc("macFilterIPXHelpCtx"));
	$("#macFilterNetBEUIHelp").append(getTagTextFromXmlDoc("macFilterNetBEUIHelpCtx"));
	$("#macFilterIGMPHelp").append(getTagTextFromXmlDoc("macFilterIGMPHelpCtx"));
	$("#macFilterMACAddressHelp").append(getTagTextFromXmlDoc("macFilterMACAddressHelpCtx"));

	$("#ipAddressFilter").append(getTagTextFromXmlDoc("ipAddressFilterCtx"));
	$("#ipAddressFilterHelpTitle1").append(getTagTextFromXmlDoc("ipAddressFilterHelpTitle1Ctx"));		
	$("#ipAddressFilter1").append(getTagTextFromXmlDoc("ipAddressFilter1Ctx"));
	$("#IPFilteEnableHelp").append(getTagTextFromXmlDoc("IPFilteEnableHelpCtx"));
	$("#IPFilteSelectFilterTypeHelp").append(getTagTextFromXmlDoc("IPFilteSelectFilterTypeHelpCtx"));
	$("#IPFilteaddBlacklistHelp").append(getTagTextFromXmlDoc("IPFilteaddBlacklistHelpCtx"));
	$("#IPFiltedelBlacklistHelp").append(getTagTextFromXmlDoc("IPFiltedelBlacklistHelpCtx"));
	$("#IPFilteaddWhitelistHelp").append(getTagTextFromXmlDoc("IPFilteaddWhitelistHelpCtx"));
	$("#IPFiltedelWhitelistHelp").append(getTagTextFromXmlDoc("IPFiltedelWhitelistHelpCtx"));
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
    this.basicClassFile = "./kt_help_safe.js";
    this.customLv1File = "./kt_help_safe_customlv1.js";
    this.customLv2File = "./kt_help_safe_customlv2.js";
    this.customLv3File = "./kt_help_safe_customlv3.js";
}