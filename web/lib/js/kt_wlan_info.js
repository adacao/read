

Page = function()
{

// JavaScript Document

this.initHtmlText= function()
{
	$("#MENU_STS_USER_WLAN").append(getTagTextFromXmlDoc("menuStatWlanInfo"));
	$("#MENU_STS_USER_ETH").append(getTagTextFromXmlDoc("menuStatUserInfo"));
	$("#WLINFO_TD_ConnStatus").append(getTagTextFromXmlDoc("wlanInfoConnStatus"));
	$("#WLINFO_TD_Channel").append(getTagTextFromXmlDoc("wlanInfoChannel"));
	$("#WLINFO_TD_HeadIndex").append(getTagTextFromXmlDoc("wlanInfoIndex"));
	$("#WLINFO_TD_HeadSsid1").append(getTagTextFromXmlDoc("wlanInfoSsid1"));
	$("#WLINFO_TD_AutoMode2").append(getTagTextFromXmlDoc("wlanInfoAutoMode2"));
	$("#WLINFO_TD_HeadAutoMode").append(getTagTextFromXmlDoc("wlanInfoAutoMode"));
	$("#LAN_TD_StatusMac").append(getTagTextFromXmlDoc("macAddrCtx"));
	$("#LAN_TD_StatusIP").append(getTagTextFromXmlDoc("ipAddrCtx"));
	$("#LAN_StatusIp").append(getTagTextFromXmlDoc("ipAddrCtx"));
	$("#LAN_StatusLeaseTime").append(getTagTextFromXmlDoc("lanStatsLeaseTime"));
	$("#LAN_TD_StatusMac2").append(getTagTextFromXmlDoc("macAddrCtx"));
	$("#LAN_StatusDeviceType").append(getTagTextFromXmlDoc("lanStatsDeviceType"));
	$("#LAN_StatusRX").append(getTagTextFromXmlDoc("lanStatsRX"));
	$("#LAN_StatusTX").append(getTagTextFromXmlDoc("lanStatsTX"));
	$("#WLINFO_TD_Rx").append(getTagTextFromXmlDoc("wlanInfoRx"));
	$("#WLINFO_TD_Tx").append(getTagTextFromXmlDoc("wlanInfoTx"));
}

this.updateWlanCfgElm= function(jsonObj)
{
	var wlanCfg = jsonObj.wlanCfg;
	
	$("#WLINFO_TD_Enabled").empty();
	$("#WLINFO_TD_Enabled").append(getTagTextFromXmlDoc((wlanCfg.wlEnabled == "1") ? "enableCtx" : "disableCtx"));
	
	$("#WLINFO_TD_CurrChannel").empty();
	$("#WLINFO_TD_CurrChannel").append(wlanCfg.currChannel);
	
	$("#WLINFO_TD_Ssid1").empty();
	$("#WLINFO_TD_Ssid1").append(wlanCfg.wlssid);

	$("#WLINFO_TD_SsidIndex").empty();
	$("#WLINFO_TD_SsidIndex").append(wlanCfg.wlEnabled);

	$("#WLINFO_TD_SsidSecret").empty();
	$("#WLINFO_TD_SsidSecret").append(wlanCfg.wlBSSID);
	
	$("#WLINFO_TD_AutoMode").empty();
	if (wlanCfg.wlanAuthMode == "open")
	{
		$("#WLINFO_TD_AutoMode").append(getTagTextFromXmlDoc("wlanSecAuthOpen"));
	}
	else if (wlanCfg.wlanAuthMode == "shared")
	{
		$("#WLINFO_TD_AutoMode").append(getTagTextFromXmlDoc("wlanSecAuthShare"));
	}
	else if (wlanCfg.wlanAuthMode == "psk")
	{
		$("#WLINFO_TD_AutoMode").append("WPA-PSK");
	}
	else if (wlanCfg.wlanAuthMode == "psk2")
	{
		$("#WLINFO_TD_AutoMode").append("WPA2-PSK");
	}
	else if (wlanCfg.wlanAuthMode == "psk psk2")
	{
		$("#WLINFO_TD_AutoMode").append("Mixed WPA2/WPA-PSK");
	}
	else
	{
		$("#WLINFO_TD_AutoMode").append("Unkown");
	}
}

this.updateWlanStatisticElm= function(jsonObj)
{
	var wlanStatistic = jsonObj.wlanStatistic;
	var htmlDoc = "";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].totalBytesReceived +"</td>";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].totalPacketsReceived +"</td>";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].XBCMRxErrors +"</td>";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].XBCMRxDrops +"</td>";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].totalBytesSent +"</td>";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].totalPacketsSent+"</td>";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].XBCMTxErrors +"</td>";
	htmlDoc += "<td>&nbsp;"+ wlanStatistic[0].XBCMTxDrops +"</td>";
	
	$("#WLINFO_TR_Statistics").empty();
	$("#WLINFO_TR_Statistics").append(htmlDoc);
}

this.updateAllElm= function(jsonObj)
{
	this.updateWlanCfgElm(jsonObj);
	this.updateWlanStatisticElm(jsonObj);
	this.registerEvent();

}

	WLINFO_TD_Ssid1
{
    updateAllCfg();
}

this.registerEvent= function()
{
	setInterval(updateStatistic, 5000);
}

}  // End Page

//用户侧状态信息
function updateAll(jsonObj)
{
	$("#lanStatsEthMac").empty();
	$("#lanStatsEthMac").append(jsonObj.lanInfo.ethMac);

	$("#lanStatsEthIp").empty();
	$("#lanStatsEthIp").append(jsonObj.lanInfo.ipv4);

	if ('1' == jsonObj.loginedType){
		appendTable2(jsonObj);
	}
	appendTable3(jsonObj);
}

function appendTable2(jsonObj)
{
	var tempHtml = "";
	var lanEthStats=jsonObj.lanEthStats;
	var rows = lanEthStats.length;
	var i = 0;
	var bytesReceived = 0;
	var packetsReceived = 0;
	var rxErrors = 0;
	var rxDrops = 0;
	var bytesSent = 0;
	var packetsSent = 0;
	var txErrors = 0;
	var txDrops = 0;

	for (i = 0; i < rows; i++)
	{
		bytesReceived = bytesReceived + lanEthStats[i].bytesReceived;
		packetsReceived = packetsReceived + lanEthStats[i].packetsReceived;
		rxErrors = rxErrors + lanEthStats[i].rxErrors;
		rxDrops = rxDrops + lanEthStats[i].rxDrops;
		bytesSent = bytesSent + lanEthStats[i].bytesSent;
		packetsSent = packetsSent + lanEthStats[i].packetsSent;
		txErrors = txErrors + lanEthStats[i].txErrors;
		txDrops = txDrops + lanEthStats[i].txDrops;
	};

	tempHtml += "<tr>";
	tempHtml += "<td>&nbsp;"+ bytesReceived +"</td>";
	tempHtml += "<td>&nbsp;"+ packetsReceived +"</td>";
	tempHtml += "<td>&nbsp;"+ rxErrors +"</td>";
	tempHtml += "<td>&nbsp;"+ rxDrops +"</td>";
	tempHtml += "<td>&nbsp;"+ bytesSent +"</td>";
	tempHtml += "<td>&nbsp;"+ packetsSent +"</td>";
	tempHtml += "<td>&nbsp;"+ txErrors +"</td>";
	tempHtml += "<td>&nbsp;"+ txDrops +"</td>";
	tempHtml += "</tr>";

	$("#LAN_NeedAppend2").empty();
	$("#LAN_NeedAppend2").append(tempHtml);
}

function appendTable3(jsonObj)
{
	var tempHtml = "";
	var lanDeviceInfo=jsonObj.lanDeviceInfo;
	var rows = lanDeviceInfo.length;
	var i = 0;

	for (i = 0; i < rows; i++)
	{
		tempHtml += "<tr>";
		if ('STB' == lanDeviceInfo[i].type)
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsSTB") + "</td>";
		}
		else if('Camera' == lanDeviceInfo[i].type)
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsCamera") + "</td>";
		}
		else if ('IP Phone' == lanDeviceInfo[i].type)
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsIPPhone") + "</td>";
		}
		else if('PC' == lanDeviceInfo[i].type)
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsPC") + "</td>";
		}
		else if('Pad' == lanDeviceInfo[i].type)
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsPad") + "</td>";
		}
		else
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsOther") + "</td>";
		}
		tempHtml += "<td>" + lanDeviceInfo[i].ipAddr + "</td><td>" + lanDeviceInfo[i].macAddr + "</td>";

		if(lanDeviceInfo[i].leaseTime == 0)
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsStatic") + "</td>";
		}
		else
		{
			tempHtml += "<td>" + getTagTextFromXmlDoc("lanStatsActive") + "</td>";
		}
		tempHtml += "</tr>";
	};

	$("#LAN_NeedAppend3").empty();
	$("#LAN_NeedAppend3").append(tempHtml);
}
// End 用户侧状态信息


function updateWlanStatisticElm(jsonObj)
{
    currentPageInst.updateWlanStatisticElm(jsonObj);
}

function updateStatistic()
{
     var sel_card;

    sel_card = $("#WLINFO_SEL_ChoiceCard").val();

    if(sel_card == "wlan0")
    {
	    getCfg("wlanInfoGet.json", {"wlanStatistic":"1"}, updateWlanStatisticElm);
    }
    else if(sel_card == "wlan1")
    {
	    getCfg("wlanInfoGet.json", {"wlanStatistic":"1", "ifName":"wl1"}, updateWlanStatisticElm);
    }
    else
	    getCfg("wlanInfoGet.json", {"wlanStatistic":"1"}, updateWlanStatisticElm);
}

function updateAllElm(jsonObj)
{
    currentPageInst.updateAllElm(jsonObj);
}

function updateAllTimeOut()
{
	getCfg("wlanInfoGet.json", {"wlanCfg":"1","wlanStatistic":"1"}, updateAllElm);
}

function updateAllCfg()
{

	getCfg("wlanInfoGet.json", {"wlanCfg":"1","wlanStatistic":"1"}, updateAllElm);
	getCfg("lanStatsGet.json", {"lanInfo":"1", "lanEthStats":"1", "lanDeviceInfo":"1"}, updateAll);
    
    setTimeout(updateAllTimeOut, 5000);
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
    this.basicClassFile = "./kt_wlan_info.js";
    this.customLv1File = "./kt_wlan_info_customlv1.js";
    this.customLv2File = "./kt_wlan_info_customlv2.js";
    this.customLv3File = "./kt_wlan_info_customlv3.js";
}

