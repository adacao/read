Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#MenuApp_Help_use").append(getTagTextFromXmlDoc("menuHelp"));
	$("#IGMP").append(getTagTextFromXmlDoc("IGMPCtx"));
	$("#IGMPDisplay").append(getTagTextFromXmlDoc("IGMPDisplayCtx"));
	$("#IGMPSnoopingHelp").append(getTagTextFromXmlDoc("IGMPSnoopingHelpCtx"));
	$("#IGMPSnoopingEnableHelp").append(getTagTextFromXmlDoc("IGMPSnoopingEnableHelpCtx"));
	$("#IGMPProxyHelp").append(getTagTextFromXmlDoc("IGMPProxyHelpCtx"));
	$("#IGMPProxyEnableHelp").append(getTagTextFromXmlDoc("IGMPProxyEnableHelpCtx"));

	$("#NATDMZHost").append(getTagTextFromXmlDoc("NATDMZHostCtx"));
	$("#NATDMZHost1").append(getTagTextFromXmlDoc("NATDMZHost1Ctx"));
	$("#DMZ").append(getTagTextFromXmlDoc("DMZCtx"));
	$("#DMZ1").append(getTagTextFromXmlDoc("DMZ1Ctx"))
	$("#NATServerSet").append(getTagTextFromXmlDoc("NATServerSetCtx"));
	$("#NATServerSet1").append(getTagTextFromXmlDoc("NATServerSet1Ctx"));
	$("#NATServerSet2").append(getTagTextFromXmlDoc("NATServerSet2Ctx"));
	$("#NATServerSet3").append(getTagTextFromXmlDoc("NATServerSet3Ctx"));
	$("#NATServerSet4").append(getTagTextFromXmlDoc("NATServerSet4Ctx"));
	$("#NATServerSet5").append(getTagTextFromXmlDoc("NATServerSet5Ctx"));
	$("#NATServerSet6").append(getTagTextFromXmlDoc("NATServerSet6Ctx"));
	$("#NATALG").append(getTagTextFromXmlDoc("NATALGCtx"));
	$("#NATALG1").append(getTagTextFromXmlDoc("NATALG1Ctx"));
	$("#H323").append(getTagTextFromXmlDoc("H323Ctx"));
	$("#RTSP").append(getTagTextFromXmlDoc("RTSPCtx"));
	$("#IPSEC").append(getTagTextFromXmlDoc("IPSECCtx"));
	$("#SIP").append(getTagTextFromXmlDoc("SIPCtx"));
	$("#L2TP").append(getTagTextFromXmlDoc("L2TPCtx"));
	$("#FTP").append(getTagTextFromXmlDoc("FTPCtx"));
	$("#DMZIP").append(getTagTextFromXmlDoc("DMZIPCtx"));
	$("#Selectwanconnection").append(getTagTextFromXmlDoc("SelectwanconnectionCtx"));
	$("#LocalStartIPAddress").append(getTagTextFromXmlDoc("LocalStartIPAddressCtx"));
	$("#LocalEndIPAddress").append(getTagTextFromXmlDoc("LocalEndIPAddressCtx"));
	$("#PublicIPAddress").append(getTagTextFromXmlDoc("PublicIPAddressCtx"));
	$("#MultiNAT").append(getTagTextFromXmlDoc("MultiNATCtx"));
	$("#NATHelp").append(getTagTextFromXmlDoc("NATHelpCtx"));
	$("#NATHelp1").append(getTagTextFromXmlDoc("NATHelp1Ctx"));

	$("#homeStorage").append(getTagTextFromXmlDoc("homeStorageCtx"));
	$("#homeStorage1").append(getTagTextFromXmlDoc("homeStorage1Ctx"));

	$("#UPnP").append(getTagTextFromXmlDoc("UPnPCtx"));
	$("#UPnPDisplay").append(getTagTextFromXmlDoc("UPnPDisplayCtx"));
	$("#UPnPServiceHelp").append(getTagTextFromXmlDoc("UPnPServiceHelpCtx"));
	$("#UPnPStartIPHelp").append(getTagTextFromXmlDoc("UPnPStartIPHelpCtx"));
	$("#UPnPEndIPHelp").append(getTagTextFromXmlDoc("UPnPEndIPHelpCtx"));
	$("#UPnPBlockIPlistHelp").append(getTagTextFromXmlDoc("UPnPBlockIPlistHelpCtx"));
	$("#UPnPTitle").append(getTagTextFromXmlDoc("UPnPTitletHelpCtx"));

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
    this.basicClassFile = "./kt_help_serve.js";
    this.customLv1File = "./kt_help_serve_customlv1.js";
    this.customLv2File = "./kt_help_serve_customlv2.js";
    this.customLv3File = "./kt_help_serve_customlv3.js";
}