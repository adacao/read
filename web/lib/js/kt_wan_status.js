Page = function()
{

// JavaScript Document
this.g_loginedType;
this.wanCfg = null;
this.obj_wanConStatusFlag = 0;
this.initHtmlText= function()
{
	$("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuStatBroadbandAccount"));
	$("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("menuStatNetInfoMessage"));
	$("#MENU_WAN_ETH_INFO").append(getTagTextFromXmlDoc("menuStatGponUpInfo"));
	$("#MENU_WAN_EPON_INFO").append(getTagTextFromXmlDoc("menuStatService"));
	$("#WAN_TD_NetDefGw").append(getTagTextFromXmlDoc("wanNetDefGw"));
	$("#WAN_TD_NetSubMask").append(getTagTextFromXmlDoc("wanNetSubMask"));
	$("#WAN_TD_NetPriDns").append(getTagTextFromXmlDoc("wanNetPriDns"));
	$("#WAN_TD_NetSecDns").append(getTagTextFromXmlDoc("wanNetSecDns"));
	$("#MENU_STA_SER_TR069").append(getTagTextFromXmlDoc("menuStatServiceTRO69"));
	$("#MENU_STA_SER_INTERNET").append(getTagTextFromXmlDoc("menuStatServiceINTERNET"));
	$("#MENU_STA_SER_OTHER").append(getTagTextFromXmlDoc("menuStatServiceOTHER"));
	$("#WAN_INFO_START").append(getTagTextFromXmlDoc("wanInfoStat"));
	$("#WAN_INFO_STYLE").append(getTagTextFromXmlDoc("wanInfoStat"));
	$("#LOGIN_USER_NAME").append(getTagTextFromXmlDoc("loginUserName"));
	$("#LOGIN_PASSWOERD").append(getTagTextFromXmlDoc("loginPwd"));
	$("#WAN_NET_INFO_NAME").append(getTagTextFromXmlDoc("wanNetInfoTitle"));
	$("#WAN_NET_INFO_TITLE").append(getTagTextFromXmlDoc("wanNetInfoTitle"));
	$("#WAN_INFO_IPADDR").append(getTagTextFromXmlDoc("wanInfoIpAddr"));
    $("#PON_TD_ConnStat").append(getTagTextFromXmlDoc("wanGponConnStat"));
    $("#PON_TD_LoidAuth").append(getTagTextFromXmlDoc("wanGponLoidAuthStat"));
    $("#PON_TD_Rx").append(getTagTextFromXmlDoc("wanGponRx"));
    $("#PON_TD_Tx").append(getTagTextFromXmlDoc("wanGponTx"));
    $("#PON_TD_Temperature").append(getTagTextFromXmlDoc("wanGponTemperature"));
    $("#PON_TD_TxPower").append(getTagTextFromXmlDoc("wanGponTxPower"));
    $("#PON_TD_RxPower").append(getTagTextFromXmlDoc("wanGponRxPower"));
    $("#PON_TD_LoidTime").append(getTagTextFromXmlDoc("wanGponTime"));
    $("#PON_TD_CLS").append(getTagTextFromXmlDoc("wanGponAlertMsgTitle"));


    $("#BTN_Refresh").val(getTagTextFromXmlDoc("refreshCtx"));
    $(".mainBody").css("overflow","auto");
    $(".mainBody>div>form").css("width","618px");
}

this.updateWanNetCon=function () {
	var wanPppConn = this.wanCfg.wanPppConn;
	var rows = wanPppConn.length;
	var i = 0;

	for (i = 0; i < rows; i++) {
		if ( $("#WAN_USER_NAME").html() == '' && $("#WAN_USER_PASSWORD").html() == ''){
			if (wanPppConn[i].connectionStatus == 'Unconfigured'){
				$("#WAN_CONNECT_STATUS").empty();
				$("#WAN_CONNECT_STATUS").append("Disconnected");
			}else{
				$("#WAN_CONNECT_STATUS").empty();
				$("#WAN_CONNECT_STATUS").append(wanPppConn[i].connectionStatus);
			}
			$("#WAN_USER_NAME").empty();
			$("#WAN_USER_PASSWORD").empty();
			$("#WAN_USER_NAME").append((wanPppConn[i].userName));
			$("#WAN_USER_PASSWORD").attr("innerText",wanPppConn[i].userPassword);
		}

	}
}

this.updateWanConnTbody= function()
{
	 var tbodyHtml = "";
	 var wanIpConn = this.wanCfg.wanIpConn;
	 var wanPppConn = this.wanCfg.wanPppConn;

	 var rows = wanIpConn.length;
	 var i = 0;

	 for (i = 0; i < rows; i++)
	 {
		 if (wanIpConn[i].IPV4Enable == '' || wanIpConn[i].IPV4Enable == '1') {
			 tbodyHtml += "<tr align='center'>";
			 tbodyHtml = tbodyHtml + "<td>"+ wanIpConn[i].Name +"</td>";

			 if(wanIpConn[i].connectionStatus=='Unconfigured')
			    tbodyHtml += "<td>Disconnected</td>";
			 else
			    tbodyHtml = tbodyHtml + "<td>"+  wanIpConn[i].connectionStatus +"</td>";

			 if(wanIpConn[i].ExternalIPAddress){
			    tbodyHtml = tbodyHtml + "<td>"+ wanIpConn[i].ExternalIPAddress +"</td>";
			 }else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			 }

			 if(wanIpConn[i].defalutSubMask){
			    tbodyHtml = tbodyHtml + "<td>"+ wanIpConn[i].defalutSubMask +"</td>";
			 }else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			 }

			 tbodyHtml += "</tr>";
		 }
	 }//end for
	 
	rows = wanPppConn.length;
	
	for (i = 0; i < rows; i++)
	{
		if (wanPppConn[i].IPV4Enable == '' || wanPppConn[i].IPV4Enable == '1') {
			 tbodyHtml += "<tr align='center'>";
			 tbodyHtml = tbodyHtml + "<td>"+ wanPppConn[i].Name +"</td>";

			 if(wanPppConn[i].connectionStatus=='Unconfigured')
			    tbodyHtml += "<td>Disconnected</td>";
			 else
			    tbodyHtml = tbodyHtml + "<td>"+  wanPppConn[i].connectionStatus +"</td>";

			 if(wanPppConn[i].ExternalIPAddress){
			    tbodyHtml = tbodyHtml + "<td>"+ wanPppConn[i].ExternalIPAddress +"</td>";
			 }else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			 }

			 if(wanPppConn[i].defalutSubMask){
			    tbodyHtml = tbodyHtml + "<td>"+ wanPppConn[i].defalutSubMask +"</td>";
			 }else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			 }

			tbodyHtml += "</tr>";
		}
	}//end for


	 $("#WAN_InfoTbody").empty();
	 $("#WAN_InfoTbody").append(tbodyHtml);

	 if (this.obj_wanConStatusFlag) {
	    updateWanNetInfo();
	 }
}

 this.updateWanConnSecTbody= function()
{
	 var tbodyHtml = "";
	 var wanIpConn = this.wanCfg.wanIpConn;
	 var wanPppConn = this.wanCfg.wanPppConn;

	 var rows = wanIpConn.length;
	 var i = 0;
	
	for (i = 0; i < rows; i++)
	{
		if (wanIpConn[i].IPV4Enable == '' || wanIpConn[i].IPV4Enable == '1')
		{
			tbodyHtml += "<tr align='center'>";
			tbodyHtml = tbodyHtml + "<td>"+ wanIpConn[i].Name +"</td>";

			if(wanIpConn[i].defaultGateway){
			    tbodyHtml = tbodyHtml + "<td>"+ wanIpConn[i].defaultGateway +"</td>";
			}else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			}

			if((wanIpConn[i].FirstDns) || (wanIpConn[i].SecondeDns)){
			    tbodyHtml = tbodyHtml + "<td>"+ wanIpConn[i].FirstDns+"</td>";
			    tbodyHtml = tbodyHtml + "<td>"+wanIpConn[i].SecondeDns +"</td>";
			}else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			}

			tbodyHtml += "</tr>";
		}
	}//end for
	
	rows = wanPppConn.length;
	for (i = 0; i < rows; i++)
	{
		if (wanPppConn[i].IPV4Enable == '' || wanPppConn[i].IPV4Enable == '1')
		{
			tbodyHtml += "<tr align='center'>";
			tbodyHtml = tbodyHtml + "<td>"+ wanPppConn[i].Name +"</td>";

			if(wanPppConn[i].defaultGateway){
			    tbodyHtml = tbodyHtml + "<td>"+ wanPppConn[i].defaultGateway +"</td>";
			}else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			}

			if((wanPppConn[i].FirstDns) || (wanPppConn[i].SecondeDns)){
			    tbodyHtml = tbodyHtml + "<td>"+ wanPppConn[i].FirstDns+"</td>";
			    tbodyHtml = tbodyHtml + "<td>"+wanPppConn[i].SecondeDns +"</td>";
			}else{
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			    tbodyHtml = tbodyHtml + "<td>"+ "&nbsp" +"</td>";
			}

			tbodyHtml += "</tr>";
		}
	}//end for

	 $("#WAN_InfoSecTbody").empty();
	 $("#WAN_InfoSecTbody").append(tbodyHtml);

	 if (this.obj_wanConStatusFlag)
	 {
        updateWanNetInfo();
	 }
}


this.updateWanInfoElm= function(jsonObj)
{
	this.wanCfg = jsonObj.wanInfo;
	this.g_loginedType = jsonObj.loginedType;
	this.updateWanConnTbody();
	this.updateWanConnSecTbody();
	this.updateWanNetCon();

	if(jsonObj.loginedType==1){
		$("#NETCON").show();
	}else {
		$("#NETCON").hide();
	}


}

this.updateWanNetInfoElm= function(jsonObj)
{
//
}

this.registerEvent= function()
{
	$("#BTN_Refresh").click(function(){updateAllCfg();});
}

//wan_gpon
this.updateGponLinkInfoElm= function(gponLinkInfo)
{
	$("#PON_TD_LinkState").empty();
	$("#PON_TD_LinkState").append(gponLinkInfo.gponLinkStat);

	/* 0:初始状态
	 * 1:认证成功
	 × 2：LOID不存在
	 × 3：PASSWORLD错误
	 × 4：LOID冲突
	 × 5：认证失败
	 */
	$("#PON_TD_LoidAuthState").empty();
	if ((gponLinkInfo.loidAuthStat >= 0) && (gponLinkInfo.loidAuthStat <= 4))
	{
		$("#PON_TD_LoidAuthState").append(getTagTextFromXmlDoc("wanGponLoidAuthStat"+gponLinkInfo.loidAuthStat));
	}
	else
	{
		$("#PON_TD_LoidAuthState").append(getTagTextFromXmlDoc("wanGponLoidAuthStat5"));
	}

	$("#PON_TD_upTime").empty();
	$("#PON_TD_upTime").append(gponLinkInfo.LinkTimeHour +"："+gponLinkInfo.LinkTimeMinute +"："+gponLinkInfo.LinkTimeSecond);

}

this.updateGponOpticalInfoElm= function(gponOpticalInfo)
{
	$("#PON_TD_TemperatureInfo").empty();
	$("#PON_TD_TemperatureInfo").append(gponOpticalInfo.gponOpticalTemperature2+"℃");

	$("#PON_TD_VoltageInfo").empty();
	$("#PON_TD_VoltageInfo").append(gponOpticalInfo.gponOpticalVolt1+"("+gponOpticalInfo.gponOpticalVolt2+"V)");

	$("#PON_TD_CurrentInfo").empty();
	$("#PON_TD_CurrentInfo").append(gponOpticalInfo.gponOpticalCurent1+"("+gponOpticalInfo.gponOpticalCurent2+"mA)");

	$("#PON_TD_TxPowerInfo").empty();
	$("#PON_TD_TxPowerInfo").append(gponOpticalInfo.gponOpticalTxPower1+"("+gponOpticalInfo.gponOpticalTxPower2+"dbm)");

	$("#PON_TD_RxPowerInfo").empty();
	$("#PON_TD_RxPowerInfo").append(gponOpticalInfo.gponOpticalRxPower1+"("+gponOpticalInfo.gponOpticalRxPower2+"dbm)");

}

this.updateGponStatisticInfoElm= function(gponStatisticInfo)
{
	$("#PON_TD_PonRxBytes").empty();
	$("#PON_TD_PonRxBytes").append(gponStatisticInfo[0].rxBytes);
	$("#PON_TD_PonTxBytes").empty();
	$("#PON_TD_PonTxBytes").append(gponStatisticInfo[0].txBytes);


}

this.updateGponAlarmInfoElm= function(gponAlarmInfo)
{
	$.each(gponAlarmInfo, function(idx, alarmInfo)
	{
		$($(".PON_CLS_PonAlarmInfo")[idx]).empty();
		$($(".PON_CLS_PonAlarmInfo")[idx]).append(getTagTextFromXmlDoc((alarmInfo.flag == "enabled") ? "enableCtxAlarm" : "disableCtxAlarm"));
	});
}

this.updateWanGponInfoElm= function(jsonObj)
{
	var loginedType = jsonObj.loginedType;
	var gponLinkInfo = jsonObj.gponLinkInfo;
	this.updateGponLinkInfoElm(gponLinkInfo);

	if (loginedType == 1){
		$("#PON_Rx_id").show();
		$("#PON_Tx_id").show();
		$("#PON_CLS_id").show();
	}

	var gponOpticalInfo = jsonObj.gponOpticalInfo;
	this.updateGponOpticalInfoElm(gponOpticalInfo);

	var gponStatisticInfo = jsonObj.gponStatisticInfo;
	this.updateGponStatisticInfoElm(gponStatisticInfo);

	var gponAlarmInfo = jsonObj.gponAlarmInfo;
	this.updateGponAlarmInfoElm(gponAlarmInfo);
}


}  // End Page


function updateWanInfoElm(jsonObj)
{
    currentPageInst.updateWanInfoElm(jsonObj);
}

function updateAllCfg()
{
	getCfg("gponInfoGet.json", null, updateWanGponInfoElm);
	getCfg("wanInfoGet.json", null, updateWanInfoElm);
}

function updateWanNetInfoElm(jsonObj)
{
	currentPageInst.updateWanNetInfoElm(jsonObj);
}

function updateWanGponInfoElm(jsonObj)
{
	currentPageInst.updateWanGponInfoElm(jsonObj);
}

function updateWanNetInfo()
{
	getCfg("gponInfoGet.json", null, updateWanGponInfoElm);
    getCfg("wanInfoGet.json", {"wanNetInfo":"1"}, updateWanNetInfoElm);
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
    this.basicClassFile = "./kt_wan_status.js";
    this.customLv1File = "./kt_wan_status_customlv1.js";
    this.customLv2File = "./kt_wan_status_customlv2.js";
    this.customLv3File = "./kt_wan_status_customlv3.js";

}

