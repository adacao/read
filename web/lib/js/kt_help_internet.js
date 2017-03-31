Page = function()
{
// JavaScript Document
this.initHtmlText = function()
{
	$("#MenuApp_Help_use").append(getTagTextFromXmlDoc("menuHelp"));
	$("#internetSetHelp").append(getTagTextFromXmlDoc("internetSetHelpCtx"));
	$("#internetSetHelp1").append(getTagTextFromXmlDoc("internetSetHelpCtx1"));
	$("#internetSetHelpConnectedName").append(getTagTextFromXmlDoc("internetSetHelpConnectedNameCtx"));
	$("#internetSetHelpMode").append(getTagTextFromXmlDoc("internetSetHelpModeCtx"));
	$("#internetSetHelpHDCPorPPPOE").append(getTagTextFromXmlDoc("internetSetHelpHDCPorPPPOECtx"));
	$("#internetSetHelpServerMode").append(getTagTextFromXmlDoc("internetSetHelpServerModeCtx"));
	$("#internetSetHelpIpModeCtx").append(getTagTextFromXmlDoc("internetSetHelpIpModeCtx"));
	$("#internetSetHelpIpaddModeCtx").append(getTagTextFromXmlDoc("internetSetHelpIpaddModeCtx"));
	$("#internetSetHelpMtuCtx").append(getTagTextFromXmlDoc("internetSetHelpMtuCtx"));
	$("#internetSetHelpNATCtx").append(getTagTextFromXmlDoc("internetSetHelpNATCtx"));
	$("#internetSetHelpVLANCtx").append(getTagTextFromXmlDoc("internetSetHelpVLANCtx"));
	$("#internetSetHelp8021pCtx").append(getTagTextFromXmlDoc("internetSetHelp8021pCtx"));
	$("#internetSetHelpBindPort").append(getTagTextFromXmlDoc("internetSetHelpBindPort"));
	$("#internetSetHelpIPv6Getaddress").append(getTagTextFromXmlDoc("internetSetHelpIPv6Getaddress"));
	$("#internetSetHelpIPv6GetPrefix").append(getTagTextFromXmlDoc("internetSetHelpIPv6GetPrefix"));
	$("#internetSetHelpIPv6DSlite").append(getTagTextFromXmlDoc("internetSetHelpIPv6DSlite"));
	$("#internetSetHelpIPv4IPaddress").append(getTagTextFromXmlDoc("internetSetHelpIPv4IPaddress"));
	$("#internetSetHelpIPv4Subnetmask").append(getTagTextFromXmlDoc("internetSetHelpIPv4Subnetmask"));
	$("#internetSetHelpIPv4DefaultGateway").append(getTagTextFromXmlDoc("internetSetHelpIPv4DefaultGateway"));
	$("#internetSetHelpIPv4PrimaryDNS").append(getTagTextFromXmlDoc("internetSetHelpIPv4PrimaryDNS"));
	$("#internetSetHelpIPv4SecondaryDNS").append(getTagTextFromXmlDoc("internetSetHelpIPv4SecondaryDNS"));
	$("#internetSetHelpIPv6WANAddress").append(getTagTextFromXmlDoc("internetSetHelpIPv6WANAddress"));
	$("#internetSetHelpIPv6Address").append(getTagTextFromXmlDoc("internetSetHelpIPv6Address"));
	$("#internetSetHelpIPv6PrefixLength").append(getTagTextFromXmlDoc("internetSetHelpIPv6PrefixLength"));
	$("#internetSetHelpIPv6PrimaryDNS").append(getTagTextFromXmlDoc("internetSetHelpIPv6PrimaryDNS"));
	$("#internetSetHelpIPv6SecondaryDNS").append(getTagTextFromXmlDoc("internetSetHelpIPv6SecondaryDNS"));
	$("#internetSetHelpIPv6ManualconfigDSlite").append(getTagTextFromXmlDoc("internetSetHelpIPv6ManualconfigDSlite"));
	$("#internetSetHelpIPv6DSliteoppositeaddresses").append(getTagTextFromXmlDoc("internetSetHelpIPv6DSliteoppositeaddresses"));
	$("#internetSetHelpBindata").append(getTagTextFromXmlDoc("internetSetHelpBindata"));
	$("#internetSetHelpUsername").append(getTagTextFromXmlDoc("internetSetHelpUsername"));
	$("#internetSetHelpPassword").append(getTagTextFromXmlDoc("internetSetHelpPassword"));
	$("#internetSetHelpServicename").append(getTagTextFromXmlDoc("internetSetHelpServicename"));
	$("#internetSetHelpDialmode").append(getTagTextFromXmlDoc("internetSetHelpDialmode"));
	$("#MulticastVLANHelp").append(getTagTextFromXmlDoc("MulticastVLANHelpCtx"));
	$("#MulticastVlanConnNameHelp").append(getTagTextFromXmlDoc("MulticastVlanConnNameHelpCtx"));
	$("#MulticastVlanIDHelp").append(getTagTextFromXmlDoc("MulticastVlanIDHelpCtx"))

	$("#lanIPv4Setting").append(getTagTextFromXmlDoc("lanIPv4SettingCtx"));
	$("#ipaddress").append(getTagTextFromXmlDoc("ipaddressCtx"));
	$("#ipaddressn1").append(getTagTextFromXmlDoc("ipaddressCtxn1"));
	$("#Subnetmask").append(getTagTextFromXmlDoc("SubnetmaskCtx"))
	$("#lanIPv4EnableCirControl").append(getTagTextFromXmlDoc("lanIPv4EnableCirControlCtx"));
	$("#lanIPv4EnableDHCPServer").append(getTagTextFromXmlDoc("lanIPv4EnableDHCPServerCtx"));
	$("#ipaddressPCStart").append(getTagTextFromXmlDoc("ipaddressPCStartCtx"));
	$("#ipaddressPCEnd").append(getTagTextFromXmlDoc("ipaddressPCEndCtx"));
	$("#ipaddressOtherStart").append(getTagTextFromXmlDoc("ipaddressOtherStartCtx"));
	$("#ipaddressOtherSEnd").append(getTagTextFromXmlDoc("ipaddressOtherSEndCtx"));
	$("#leaseTime").append(getTagTextFromXmlDoc("leaseTimeCtx"));
	$("#ipv4DNSRelay").append(getTagTextFromXmlDoc("ipv4DNSRelayCtx"));
	$("#ipv4DHCPRelay").append(getTagTextFromXmlDoc("ipv4DHCPRelayCtx"));
	$("#DHCPClient").append(getTagTextFromXmlDoc("DHCPClientCtx"));
	$("#DHCPClientDisplay").append(getTagTextFromXmlDoc("DHCPClientDisplayCtx"));
	$("#IPv4ReservedIpAddress").append(getTagTextFromXmlDoc("IPv4ReservedIpAddressCtx"));
	$("#IPv4ReservedIpAddressshow").append(getTagTextFromXmlDoc("IPv4ReservedIpAddressshowCtx"));
	$("#macaddress").append(getTagTextFromXmlDoc("macaddressCtx"));
	$("#ReservedipaddressForPC").append(getTagTextFromXmlDoc("ReservedipaddressForPCCtx"));
	$("#lanIPv6SettingHelp").append(getTagTextFromXmlDoc("lanIPv6SettingHelpCtx"));
	$("#lanipv6localAddress").append(getTagTextFromXmlDoc("lanipv6localAddressCtx"));
	$("#ipv6radvdConfiguration").append(getTagTextFromXmlDoc("ipv6radvdConfigurationCtx"));
	$("#ipv6EnableDHCPv6Server").append(getTagTextFromXmlDoc("ipv6EnableDHCPv6ServerCtx"));
	$("#ipv6LANaddressConfigMode").append(getTagTextFromXmlDoc("ipv6LANaddressConfigModeCtx"));
	$("#ipv6StatefullAddressMode").append(getTagTextFromXmlDoc("ipv6StatefullAddressModeCtx"));
	$("#ipv6DNSRelay").append(getTagTextFromXmlDoc("ipv6DNSRelayCtx"));
	$("#ipv6GetPrefixMode").append(getTagTextFromXmlDoc("ipv6GetPrefixModeCtx"));

	$("#HLEP_NetItmsServer").append(getTagTextFromXmlDoc("ITMSServerCtx"));
	$("#HLEP_NetItmsServer1").append(getTagTextFromXmlDoc("ITMSServer1Ctx"));
	$("#HLEP_NetItmsIpAddress").append(getTagTextFromXmlDoc("ipAddressCtx"));
	$("#HLEP_NetItmsIpAddress1").append(getTagTextFromXmlDoc("ipAddress1Ctx"));
	$("#HLEP_NetItmsPort").append(getTagTextFromXmlDoc("portHelpCtx"));
	$("#HLEP_NetItmsPort1").append(getTagTextFromXmlDoc("port1Ctx"));
	$("#HLEP_NetOLTcertification").append(getTagTextFromXmlDoc("OLTcertificationCtx"));
	$("#HLEP_NetOLTcertification1").append(getTagTextFromXmlDoc("OLTcertification1Ctx"));
	$("#HLEP_NetOLTcertification2").append(getTagTextFromXmlDoc("OLTcertification2Ctx"));
	$("#HLEP_NetOLTcertification3").append(getTagTextFromXmlDoc("OLTcertification3Ctx"));

	$("#QosHelp").append(getTagTextFromXmlDoc("QosHelpCtx"));
	$("#QosHelpn1").append(getTagTextFromXmlDoc("QosHelpCtxn1"));
	$("#QosHelp1").append(getTagTextFromXmlDoc("QosHelp1Ctx"));
	$("#QoSEnableHelp").append(getTagTextFromXmlDoc("QoSEnableHelpCtx"));
	$("#QoSUSbandwidthHelp").append(getTagTextFromXmlDoc("QoSUSbandwidthHelpCtx"));
	$("#QoSPolicyHelp").append(getTagTextFromXmlDoc("QoSPolicyHelpCtx"));
	$("#QoSDSCPMarkHelp").append(getTagTextFromXmlDoc("QoSDSCPMarkHelpCtx"));
	$("#QoSTCMarkHelp").append(getTagTextFromXmlDoc("QoSTCMarkHelpCtx"));
	$("#QoS8021PMarkHelp").append(getTagTextFromXmlDoc("QoS8021PMarkHelpCtx"));
	$("#QoSPQqueueTableHelp").append(getTagTextFromXmlDoc("QoSPQqueueTableHelpCtx"));
	$("#QoSAppqueueTableHelp").append(getTagTextFromXmlDoc("QoSAppqueueTableHelpCtx"));
	$("#QoSTrafficqueueTableHelp").append(getTagTextFromXmlDoc("QoSTrafficqueueTableHelpCtx"));
	$("#QoSForcedBandwidthHelp").append(getTagTextFromXmlDoc("QoSForcedBandwidthHelpCtx"));
	$("#QoSWRRqueueTableHelp").append(getTagTextFromXmlDoc("QoSWRRqueueTableHelpCtx"));
	$("#QoSCARFlowControlHelp").append(getTagTextFromXmlDoc("QoSCARFlowControlHelpCtx"));
	$("#QoSHowtoaddPQruleHelp").append(getTagTextFromXmlDoc("QoSHowtoaddPQruleHelpCtx"));
	$("#QoSHowtodelPQruleHelp").append(getTagTextFromXmlDoc("QoSHowtodelPQruleHelpCtx"));
	$("#QoSHowtoeditPQruleHelp").append(getTagTextFromXmlDoc("QoSHowtoeditPQruleHelpCtx"));
	$("#QoSHowtoaddWRRruleHelp").append(getTagTextFromXmlDoc("QoSHowtoaddWRRruleHelpCtx"));
	$("#QoSHowtodelWRRruleHelp").append(getTagTextFromXmlDoc("QoSHowtodelWRRruleHelpCtx"));
	$("#QoSHowtoeditWRRruleHelp").append(getTagTextFromXmlDoc("QoSHowtoeditWRRruleHelpCtx"));
	$("#QoSHowtoaddCARruleHelp").append(getTagTextFromXmlDoc("QoSHowtoaddCARruleHelpCtx"));
	$("#QoSHowtodelCARruleHelp").append(getTagTextFromXmlDoc("QoSHowtodelCARruleHelpCtx"));
	$("#QoSPQFlowParameterHelp").append(getTagTextFromXmlDoc("QoSPQFlowParameterHelpCtx"));
	$("#QoSPQFlowQueueHelp").append(getTagTextFromXmlDoc("QoSPQFlowQueueHelpCtx"));
	$("#QoSPQFlowIPmodeHelp").append(getTagTextFromXmlDoc("QoSPQFlowIPmodeHelpCtx"));
	$("#QoSPQFlowClassificationHelp").append(getTagTextFromXmlDoc("QoSPQFlowClassificationHelpCtx"));
	$("#QoSPQFlowMinimumHelp").append(getTagTextFromXmlDoc("QoSPQFlowMinimumHelpCtx"));
	$("#QoSPQFlowMaximumHelp").append(getTagTextFromXmlDoc("QoSPQFlowMaximumHelpCtx"));
	$("#QoSPQFlowProtocolHelp").append(getTagTextFromXmlDoc("QoSPQFlowProtocolHelpCtx"));
	$("#QoSCARFlowParameterHelp").append(getTagTextFromXmlDoc("QoSCARFlowParameterHelpCtx"));
	$("#QoSCARFlowIPmodeHelp").append(getTagTextFromXmlDoc("QoSCARFlowIPmodeHelpCtx"));
	$("#QoSCARFlowProtocolHelp").append(getTagTextFromXmlDoc("QoSCARFlowProtocolHelpCtx"));
	$("#QoSCARFlowInterfaceHelp").append(getTagTextFromXmlDoc("QoSCARFlowInterfaceHelpCtx"));
	$("#QoSCARFlowSrcIPHelp").append(getTagTextFromXmlDoc("QoSCARFlowSrcIPHelpCtx"));
	$("#QoSCARFlowSrcSubnetMaskHelp").append(getTagTextFromXmlDoc("QoSCARFlowSrcSubnetMaskHelpCtx"));
	$("#QoSCARFlowDestIPHelp").append(getTagTextFromXmlDoc("QoSCARFlowDestIPHelpCtx"));
	$("#QoSCARFlowDestSubnetMaskHelp").append(getTagTextFromXmlDoc("QoSCARFlowDestSubnetMaskHelpCtx"));
	$("#QoSCARFlowSrcPortHelp").append(getTagTextFromXmlDoc("QoSCARFlowSrcPortHelpCtx"));
	$("#QoSCARFlowDestPortHelp").append(getTagTextFromXmlDoc("QoSCARFlowDestPortHelpCtx"));
	$("#QoSCARFlowUplinkrateHelp").append(getTagTextFromXmlDoc("QoSCARFlowUplinkrateHelpCtx"));

	$("#timeManageHelp").append(getTagTextFromXmlDoc("timeManageHelpCtx"));
	$("#timeManageHelp1").append(getTagTextFromXmlDoc("timeManageHelp1Ctx"));
	$("#NTPServer").append(getTagTextFromXmlDoc("NTPServerCtx"));
	$("#Interva").append(getTagTextFromXmlDoc("IntervaCtx"));
	$("#FirstNTPtime").append(getTagTextFromXmlDoc("FirstNTPtimeCtx"));
	$("#SecondNTPtime").append(getTagTextFromXmlDoc("SecondNTPtimeCtx"));
	$("#ThirdNTPtime").append(getTagTextFromXmlDoc("ThirdNTPtimeCtx"));
	$("#FourthNTPtime").append(getTagTextFromXmlDoc("FourthNTPtimeCtx"));
	$("#FifthNTPtime").append(getTagTextFromXmlDoc("FifthNTPtimeCtx"));
	$("#Timeoffset").append(getTagTextFromXmlDoc("TimeoffsetCtx"));
	$("#TimeHelp").append(getTagTextFromXmlDoc("TimeHelpCtx"));
	$("#TimeHelpn1").append(getTagTextFromXmlDoc("TimeHelpn1Ctx"));
	$("#TimeHelp1").append(getTagTextFromXmlDoc("TimeHelp1Ctx"));

	$("#Dyrouting").append(getTagTextFromXmlDoc("DyroutingCtx"));
	$("#Dyrouting1").append(getTagTextFromXmlDoc("Dyrouting1Ctx"));
	$("#Ipv4Starouting").append(getTagTextFromXmlDoc("Ipv4StaroutingCtx"));
	$("#Ipv4Dest").append(getTagTextFromXmlDoc("Ipv4DestCtx"));
	$("#Ipv4Mask").append(getTagTextFromXmlDoc("Ipv4MaskCTx"));
	$("#Ipv4Gateway").append(getTagTextFromXmlDoc("Ipv4GatewayCtx"));
	$("#IPv4Interface").append(getTagTextFromXmlDoc("IPv4InterfaceCtx"));
	$("#Ipv6Starouting").append(getTagTextFromXmlDoc("Ipv6StaroutingCtx"));
	$("#Ipv6Dest").append(getTagTextFromXmlDoc("Ipv6DestCtx"));
	$("#Ipv6Prefix").append(getTagTextFromXmlDoc("Ipv6PrefixCtx"));
	$("#Ipv6Gateway").append(getTagTextFromXmlDoc("Ipv6GatewayCtx"));
	$("#IPv6Interface").append(getTagTextFromXmlDoc("IPv6InterfaceCtx"));
	$("#Metric").append(getTagTextFromXmlDoc("MetricCtx"));
	$("#Routehelp").append(getTagTextFromXmlDoc("RoutehelpCtx"));
	$("#Routehelp1").append(getTagTextFromXmlDoc("Routehelp1Ctx"));
}


}

function initHtmlText()
{
    currentPageInst.initHtmlText();
}

var pageCustomObj = new function()
{
    this.basicClassFile = "kt_help_internet.js";
    this.customLv1File = "kt_help_internet_customlv1.js";
    this.customLv2File = "kt_help_internet_customlv2.js";
    this.customLv3File = "kt_help_internet_customlv3.js";
}