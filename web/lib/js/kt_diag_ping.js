Page = function()
{

// JavaScript Document
this.wanIpConn = null;
this.wanPppConn = null;
this.commone8b = 0;
this.buildIpv6 = 0;
this.wanConn = null;
this.wanConnName = new Array();
this.g_textHandle = null;
this.g_timerHandle = null;
this.refreshNum = 0;

this.initHtmlText= function()
{
	$("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuDiagNetLine"));
	$("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("menuDiagNetPing"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("check")); 	
}

this.updateIntfOpt= function()
{
	var optStr = "";
	$.each(this.wanIpConn, function(idx, wanConn){
		if (wanConn.connType != '3')
		{
			if ((wanConn.IPv6Enabled == '1' && (wanConn.IPv6connectionStatus == 'Connected' || (wanConn.IPv6connectionStatus == 'Connecting' && wanConn.IPv6ExternalAddress != ''))) ||  wanConn.connectionStatus == "Connected")
			{
				//ipv4 已经连接则显示接口名称，ipv6,存在地址就显示，而不去管连接状态。
				var name = wanConn.Name +"/"+ wanConn.IfName;
				optStr = optStr + '<option value="'+wanConn.IfName+'">'+name+'</option>'
			}
		}
	});
	
	$.each(this.wanPppConn, function(idx, wanConn){
		if (wanConn.connType != '3')
		{
			if ((wanConn.IPv6Enabled == '1' && (wanConn.IPv6connectionStatus == 'Connected' || (wanConn.IPv6connectionStatus == 'Connecting' && wanConn.IPv6ExternalAddress != ''))) ||  wanConn.connectionStatus == "Connected")
			{
				//ipv4 已经连接则显示接口名称，ipv6,存在地址就显示，而不去管连接状态。
				var name = wanConn.Name +"/"+ wanConn.IfName;
				optStr = optStr + '<option value="'+wanConn.IfName+'">'+name+'</option>'
			}
		}
	});
	

	if(this.commone8b == '0')
	{
		optStr = optStr + "<option value='br0'> LAN/br0</option>";
	}
	else
	{
		//wan 未生效
	}

	$("#WAN_SEL_WanLinkName").empty();
	$("#WAN_SEL_WanLinkName").append(optStr);
}

this.updatePingCfg= function(jsonObj)
{
	this.wanIpConn = jsonObj.wanInfo.wanIpConn;
	this.wanPppConn = jsonObj.wanInfo.wanPppConn;
	this.commone8b = jsonObj.ctrlCfg.commone8b;
	this.buildIpv6 = jsonObj.ctrlCfg.buildIpv6;
	
	this.updateIntfOpt();
}

this.updatePingRes= function(txt)
{
	/*format: content$errorcode
	 */
	waitNoticeEnd();
	var text = txt.split("$");
	
	$("#DIAG_DIV_PingResult").append(encodeStrToHtml(text[0]));
	
	if (parseInt(text[1]) >= 256)
	{
		//ping return val
		$("#DIAG_DIV_PingResult")[0].className = "deactiveRed";
	}
	else
	{
		$("#DIAG_DIV_PingResult")[0].className = "activeGreen";
	}
}

this.UpdateTraceResult= function(txt)
{
	/*format: content$errorcode*/
	var text = txt.split("$");

	if (this.g_textHandle != txt)
	{
		/* If the current result is different from the last one, means that the tracert not finish, save it to "g_textHandle"  */
		this.refreshNum = 0;
		this.g_textHandle = txt;
	}
	else
	{
		/* If the  current result equal to the last one, do more refresh, to avoid the tracert not really finish */
		this.refreshNum++;
		if ((this.refreshNum == 30) && (null != this.g_timerHandle))
		{
			window.clearInterval(this.g_timerHandle);
		}
	}

	$("#DIAG_DIV_PingResult").empty();
	$("#DIAG_DIV_PingResult").append(encodeStrToHtml(text[0]));

	/* if it can not resolve hostName, set the tracert result font in red  */
	if (parseInt(text[1]) >= 256)
	{
		$("#DIAG_DIV_PingResult")[0].className = "deactiveRed";
	}
	else
	{
		$("#DIAG_DIV_PingResult")[0].className = "activeGreen";
	}
}

this.btnStart= function()
{
	/* check valid */
	$("#DIAG_TEXT_PingIpaddr").change();
	if (!checkValid())
	{
		return false;
	}
	
	if($("#type").val() =="ping"){
		var postData;
		jsonObjInit();	
		jsonObjPush("action", "test");
		jsonObjPush("interface", $("#WAN_SEL_WanLinkName").val());
		jsonObjPush("ipaddr", $("#DIAG_TEXT_PingIpaddr").val());
		postData = jsonObjEnd();
	
		$("#DIAG_DIV_PingResult").empty();
		$("#DIAG_PingTestInfo").show();
		waitNoticeStart($("#waitNotice"), getTagTextFromXmlDoc("diagnosticMsg2"), 1000);
	
		disableSubmit($("#BTN_Apply"));
		setCfg("diagPingStart.txt", postData, updatePingRes); //do ping cmd && wait respont message
		}
	else{
		this.g_textHandle = null;
		var postData;
		jsonObjInit();	
		jsonObjPush("action", "test");
		jsonObjPush("interface", $("#WAN_SEL_WanLinkName").val());
		jsonObjPush("ipaddr", $("#DIAG_TEXT_PingIpaddr").val());
		postData = jsonObjEnd();
	
		$("#DIAG_DIV_PingResult").empty();
		$("#DIAG_PingTestInfo").show();
	
		disableSubmit($("#BTN_Apply"));
		setCfg("diagTracertStart.txt", postData, null);
		
		this.g_timerHandle = setInterval(getTraceConfig, 2000);
	}
}

this.checkIpOrHost= function(elm)
{
	if (elm.value.length == 0)
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("diagInputHostIpWarn")); //"请输入目的IP地址或者主机名"
		return false;
	}
	if(!checkRegStrForUrl(elm.value))
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpValidStrWarn")); //"目的IP地址或者主机名不应包括特殊字符"
		return false;
	}
	
	var addrParts = elm.value.split('.');
	var ipv6addrParts = elm.value.split(':');

	var tempk;
	/*初步检查类型23.23/23.23.23/23.23.23.23.23之类的ip地址*/
	if(addrParts.length > 0 && addrParts.length != 4)
	{
		for(tempk = 0; tempk < addrParts.length; tempk++)
		{
			if(isNaN(Number(addrParts[tempk])))
			{
				break;
			}
		}

		if(tempk == addrParts.length)
		{
			warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn")); //目的IP地址或者主机名不合法
			return false;
		}
	}
	
	//如果是IP地址
	if((4 == addrParts.length) & !isNaN(parseInt(addrParts[3])))
	{
		if( (parseInt(addrParts[0]) > parseInt('223')) & (parseInt(addrParts[0]) < parseInt('240')))
		{
			warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn2")); //不能输入组播地址
			return false;
		}
			
		var addrHeadParts = elm.value.split("://");
		if(addrHeadParts.length > 1)
		{
			if(!isValidIpAddress(addrHeadParts[1]))
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn")); //目的IP地址或者主机名不合法
				return false;
			}
		}
		else
		{
			if(!isValidIpAddress(addrHeadParts[0]))
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn")); //目的IP地址或者主机名不合法
				return false;
			}
		}
 	}
	else if(addrParts.length>1 && !isValidUrl(elm.value))
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn")); //目的IP地址或者主机名不合法
		return false;
	}
	else if(ipv6addrParts.length >2)
	{
		if(this.buildIpv6 == '1')
		{			
			if((parseInt(ipv6addrParts[0], 16) & 0xf000) == 0xf000)
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn3")); //不能输入本地链路地址、组播地址
				return false;
		
			}
			if (isValidIpAddress6(elm.value))
					ipversion=6;
			else 
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn")); //目的IP地址或者主机名不合法
				return false;
			}
		}
		else 
		{
			warnMsgShow(elm, getTagTextFromXmlDoc("diagHostIpInvalidWarn")); //目的IP地址或者主机名不合法
			return false;
		}			
	}

	warnMsgHide(elm);
	return true;
}

this.registerEvent= function()
{
	$("#BTN_Apply").click(function(){currentPageInst.btnStart();});
	$("#DIAG_TEXT_PingIpaddr").change(function(){currentPageInst.checkIpOrHost(this)});
	
	$("#DIAG_TEXT_PingIpaddr").keydown(function(){if(event.keyCode==13){currentPageInst.btnStart();return false;}});
}



}  // End Page


function getTraceConfig()
{
	setCfg("diagTracertStart.txt", {"action":"getResult"}, UpdateTraceResult);
}

function UpdateTraceResult(text)
{
	currentPageInst.UpdateTraceResult(text);
}

function updatePingRes(text)
{
	currentPageInst.updatePingRes(text);
}

function updatePingCfg(jsonObj)
{
    currentPageInst.updatePingCfg(jsonObj);
}

function updateAllCfg()
{
	getCfg("ctDiagPingGet.json", "", updatePingCfg);
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
    this.basicClassFile = "./kt_diag_ping.js";
    this.customLv1File = "./kt_diag_ping_customlv1.js";
    this.customLv2File = "./kt_diag_ping_customlv2.js";
    this.customLv3File = "./kt_diag_ping_customlv3.js";
}

