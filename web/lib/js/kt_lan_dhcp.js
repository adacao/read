Page = function()
{

this.dhcpLease = 0;
this.buildOpton60 = "";
this.profileType = "";
this.ReservedIp = 0;
this.maxReserveIP = 10;
this.dnsRelay = 0;
this.dnsAddr1 = "";
this.dnsAddr2 = "";
this.isLanAddrWriteable = 1;
this.gwdomain = "";

this.isLanAddrWriteable = 1;

this.NetEnable = "";

this.initHtmlText= function()
{
	$("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuNetLanSet"));
	$("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("menuNetLanDHCP"));
	$("#MENU_WAN_ETH_INFO").append(getTagTextFromXmlDoc("menuNetLanDNS"));
	$("#LAN_TD_dhcpIpAddr").append(getTagTextFromXmlDoc("ipAddrCtx") + ":");
	$("#LAN_TD_DhcpSubnetMask").append(getTagTextFromXmlDoc("dhcpSubnetMask") + ":");
	$("#LAN_TD_DhcpDomain").append(getTagTextFromXmlDoc("dhcpDomain") + ":");
	$("#LAN_TD_DhcpStpDisable").append(getTagTextFromXmlDoc("dhcpStpDisable"));
	$("#LAN_TD_DhcpStpEnable").append(getTagTextFromXmlDoc("dhcpStpEnabel"));
	$("#LAN_TD_DhcpDisable").append(getTagTextFromXmlDoc("dhcpDisable"));
	$("#LAN_TD_DhcpEnable").append(getTagTextFromXmlDoc("dhcpEnable"));
	$("#LAN_TD_DhcpLeaseTime").append(getTagTextFromXmlDoc("dhcpLeaseTime") + ":");
	$("#LAN_TD_DhcpRelayEnable").append(getTagTextFromXmlDoc("dhcpRelayEnable"));
	$("#LAN_TD_DhcpServerIpAddr").append(getTagTextFromXmlDoc("dhcpServerIpAddr"));
	// $("#LAN_DhcpReserveIpAddr").append(getTagTextFromXmlDoc("dhcpReserveIpAddr"));
	// $("#LAN_DhcpReserveIpComment").append(getTagTextFromXmlDoc("dhcpReserveIpComment") + "." +"<br />"+getTagTextFromXmlDoc("dhcpReserveIpNotice") + ".");
	$("#LAN_TD_DhcpMacAddr").append(getTagTextFromXmlDoc("macAddrCtx"));
	$("#LAN_TD_DhcpStIpAddr").append(getTagTextFromXmlDoc("ipAddrCtx"));
	$("#LAN_TD_DelCtx").append(getTagTextFromXmlDoc("delCtx"));
	$("#LAN_TD_DhcpPcStartCtx").append(getTagTextFromXmlDoc("dhcpPCStart") + ":");
	$("#LAN_TD_DhcpPcEndCtx").append(getTagTextFromXmlDoc("dhcpPCEnd") + ":");
	$("#LAN_TD_DhcpCameraStartAddrCtx").append(getTagTextFromXmlDoc("dhcpCamerastartAddr") + ":");
	$("#LAN_TD_DhcpCameraEndAddrCtx").append(getTagTextFromXmlDoc("dhcpCameraendAddr") + ":");
	$("#LAN_TD_DhcpStbStartAddrCtx").append(getTagTextFromXmlDoc("dhcpSTBstartAddr") + ":");
	$("#LAN_TD_DhcpStbEndAddrCtx").append(getTagTextFromXmlDoc("dhcpSTBendAddr") + ":");
	$("#LAN_TD_DhcpSipPhoneStartAddrCtx").append(getTagTextFromXmlDoc("dhcpSIPPhonestartAddr") + ":");
	$("#LAN_TD_DhcpSipPhoneEndAddrCtx").append(getTagTextFromXmlDoc("dhcpSIPPhoneendAddr") + ":");
	$("#LAN_TD_DhcpEthStartCtx").append(getTagTextFromXmlDoc("dhcpEthStart") + ":");
	$("#LAN_TD_DhcpEthEndCtx").append(getTagTextFromXmlDoc("dhcpEthEnd") + ":");
	$("#LAN_TD_DhcpDnsRelay").append(getTagTextFromXmlDoc("dhcpLanDnsRelayEnable") + ":");
	$("option[value='auto']").append(getTagTextFromXmlDoc("dhcpLanDnsAuto"));
	$("option[value='manual']").append(getTagTextFromXmlDoc("dhcpLanDnsManual"));	
	$("#LAN_TD_DhcpLanDns1Ctx").append(getTagTextFromXmlDoc("dhcpLanDns1") + ":");
	$("#LAN_TD_DhcpLanDns2Ctx").append(getTagTextFromXmlDoc("dhcpLanDns2") + ":");
	$("option[value='minute']").append(getTagTextFromXmlDoc("dhcpOneMinute"));
	$("option[value='hour']").append(getTagTextFromXmlDoc("dhcpOneHour"));
	$("option[value='day']").append(getTagTextFromXmlDoc("dhcpOneDay"));
	$("option[value='week']").append(getTagTextFromXmlDoc("dhcpOneWeek"));

	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx"));
    $("#BTN_Cancel").attr("value", getTagTextFromXmlDoc("cancelCtx"));
	$("#BTN_Add").attr("value", getTagTextFromXmlDoc("addCtx"));
	$("#BTN_Del").attr("value", getTagTextFromXmlDoc("delCtx"));

	this.exInitHtmlText();
}

this.exInitHtmlText= function()
{
	
}

this.hideDhcpWarn= function(hide)
{
	if (hide)
	{
		if (this.buildOpton60)
		{
			$.each($("input[name='LAN_DhpcOpt60IpAddr']"), function(i, elm){
				warnMsgHide(elm);
			});
		}
		else
		{
			$.each($("input[name='LAN_DhpcIpAddr']"), function(i, elm){
				warnMsgHide(elm);
			});
		}
	}
	else
	{
		if (this.buildOpton60)
		{
			$.each($("input[name='LAN_DhpcOpt60IpAddr']"), function(i, elm){
				$(elm).change();
			});
		}
		else
		{
			$.each($("input[name='LAN_DhpcIpAddr']"), function(i, elm){
				$(elm).change();
			});
		}
		
	}
}

this.hideDhcpRelayWarn= function(hide)
{
	if (hide)
	{
		//alert($("#LAN_TEXT_DhcpSrvAddr"));
		warnMsgHide($("#LAN_TEXT_DhcpSrvAddr")[0]);
	}
	else
	{
		$("#LAN_TEXT_DhcpSrvAddr").change();
	}
}

this.registerEvent= function()
{
	/*$("#LAN_CHX_DhcpSrvType").click(function(){
		currentPageInst.DhcpClickOnDisable();
		currentPageInst.hideDhcpWarn(true);
		currentPageInst.hideDhcpRelayWarn(true);
	});*/
	
	$("#LAN_CHX_DhcpSrvType").click(function(){		
        currentPageInst.EnableorDisableDhcpServer(this);
	});
    
    $("#LAN_CHX_DNSEnable").click(function(){
        currentPageInst.EnableorDisableDNS(this);
	});
	
	/*$("#LAN_CHX_DhcpSrvType").click(function(){
		currentPageInst.DhcpClickOnRelay();
		currentPageInst.hideDhcpRelayWarn(false);
		currentPageInst.hideDhcpWarn(true);
	});*/
	
	$("input[name='LAN_RADIO_StpSrvType']:eq(0)").click(function(){
		currentPageInst.enableStp(0);
	});
	
	$("input[name='LAN_RADIO_StpSrvType']:eq(1)").click(function(){
		currentPageInst.enableStp(1);
	});
	
	$("#BTN_Apply").click(function(){
		currentPageInst.checkAndSubmit();
	})
	
	$("#BTN_Add").click(function(){
		currentPageInst.addStIp();
	})
	
	$("#BTN_Del").click(function(){
		currentPageInst.removeStIp(this.form.rml);
	})
	
	$("#LAN_SEL_StbDhcpLeasedTime").click(function(){
		currentPageInst.setdhcpLease(this.value);
	})
	
	$("#LAN_SEL_DnsRelayMode").click(function(){
		currentPageInst.setlanDnsRelay(this.value);
	})
	
	$("#LAN_TEXT_EthIpAdress").change(function(){
		if (currentPageInst.checkEthIpAddress(this))
		{
			currentPageInst.setDhcpAddresses(this.value);
		}
	});
	
	$("#LAN_TEXT_EthSubnetMask").change(function(){
		currentPageInst.checkEthSubnetMask(this);
	});

	if('1' == this.gwdomain)
	{
		$("#LAN_TEXT_EthDomain").change(function(){
			currentPageInst.checkEthDomain(this);
		});
	}
	
	$(".LAN_CLS_IpAddr").change(function(){currentPageInst.checkIpAddrAfterChange(this);});
	$(".LAN_CLS_IpLeasedTime").change(function(){currentPageInst.setDhcpLeasedTime(this);});
	
	this.exRegisterEvent();
}

this.exRegisterEvent= function()
{

}

this.addStIp= function() 
{
    if (this.ReservedIp < this.maxReserveIP)
    {
        var loc = 'ctStaticIpAdd.html';
        var code = 'location=\"' + loc + '\"';
        eval(code);
    }
    else
    {
        alert(getTagTextFromXmlDoc("dhcpReservWarn"))
    }
}
    
this.removeStIp= function(rml) 
{
	var lst = '';
	var postData;
	jsonObjInit();
	
	if (rml.length > 0)
	{
		for (i = 0; i < rml.length; i++) 
		{
			if ( rml[i].checked == true )
                        {
				lst += rml[i].value + ', ';
                                --this.ReservedIp;
		        }
		}
	}
	else if ( rml.checked == true )
	{
		lst = rml.value;
                --this.ReservedIp;
	}

	jsonObjPush("action","remove");
	jsonObjPush("rmLst",lst);
	
	postData = jsonObjEnd();
	
	setCfg("dhcpdstaticlease.cmd", postData, renewStaticLeaseIpTable);
}

this.EnableorDisableDhcpServer= function(elm)
{
   if ($("#LAN_CHX_DhcpSrvType").attr("checked")== undefined) 
   {
       	currentPageInst.DhcpClickOnDisable();
		currentPageInst.hideDhcpWarn(true);
		currentPageInst.hideDhcpRelayWarn(true);
   }
   else
   {
        currentPageInst.DhcpClickOnEnable();
		currentPageInst.hideDhcpWarn(false);
		currentPageInst.hideDhcpRelayWarn(true);
		if (isValidIpAddress($("#LAN_TEXT_EthIpAdress").val()))
		{
			currentPageInst.setDhcpAddresses($("#LAN_TEXT_EthIpAdress").val());
		}
   }
}

this.EnableorDisableDNS= function(elm)
{
    if ($("#LAN_CHX_DNSEnable").attr("checked")== undefined) 
    {
        $("#LAN_TB_DnsRelay").hide();
        this.setlanDnsRelay("auto");
    }
    else
    {
        $("#LAN_TB_DnsRelay").show();
        this.setlanDnsRelay("manual");
    }
}

this.DhcpClickOnDisable= function()
{
	this.hideDhcpAdvCfg();
	this.hideRealyAdvCfg();

}

this.DhcpClickOnEnable= function()
{
	this.showDhcpAdvCfg();
	this.hideRealyAdvCfg();
}

this.DhcpClickOnRelay= function()
{
	this.hideDhcpAdvCfg();
	this.showRealyAdvCfg();
}

this.enableStp= function(isEnable)
{
	var postData;
	jsonObjInit();
	
	if(isEnable)
	{
		jsonObjPush("action","enable");
		postData = jsonObjEnd();
	}
	else
	{
		jsonObjPush("action","disable");
		postData = jsonObjEnd();
	}
	
	setCfg("toggleStp.cmd", postData, renewStpCfg);
}



this.checkIpAddrAfterChange= function(elm)
{
	if (!isValidIpAddress_dhcpDevice(elm.value))
	{
		warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("dhcpWarn1"));
	}
	else
	{
		warnMsgHide(elm);
	}
}

this.checkEthIpAddress= function(elm)
{
	if (!isValidIpAddress(elm.value))
	{
		warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("dhcpWarn1"));
		return 0;
	}
	else
	{
		warnMsgHide(elm);
		return 1;
	}
}

this.checkEthSubnetMask= function(elm)
{
	if (!isValidSubnetMask(elm.value))
	{
		warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("dhcpWarn7"));
	}
	else
	{
		warnMsgHide(elm);
	}
}


this.checkEthDomain= function(elm)
{
	if (!isValidUrl(elm.value))
	{
		warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("dhcpWarn9"));
	}
	else
	{
		warnMsgHide(elm);
	}
}
	
this.setDhcpAddresses= function(lanIp) 
{
	var dhcpEthStart = "";
	var dhcpEthEnd = "";
	var dhcpPCStart = "";
	var dhcpPCEnd = "";
	var CamerastartAddr = "";
	var CameraendAddr = "";
	var STBstartAddr = "";
	var STBendAddr = "";
	var SIPPhonestartAddr = "";
	var SIPPhoneendAddr = "";
	var ethSubnetMask = "";
	//window.alert(13);
	var addrParts = lanIp.split('.');
	
	t1 = parseInt(addrParts[3]) + 1;
	
	if(this.buildOpton60=='1')
	{
		//��Ӵ���
		
		addrLastParts = new Array();
		addrLastParts[0] = $("#LAN_TEXT_DhcpPcStart").val().split('.')[3];
		addrLastParts[1] = $("#LAN_TEXT_DhcpPcEnd").val().split('.')[3];
		addrLastParts[2] = $("#LAN_TEXT_CameraStartAddr").val().split('.')[3];
		addrLastParts[3] = $("#LAN_TEXT_CameraEndAddr").val().split('.')[3];
		addrLastParts[4] = $("#LAN_TEXT_StbStartAddr").val().split('.')[3];
		addrLastParts[5] = $("#LAN_TEXT_StbEndAddr").val().split('.')[3];
		
		if(this.profileType != 'CT_E8_B'	)
		{
			addrLastParts[6] = $("#LAN_TEXT_SipPhoneStartAddr").val().split('.')[3];
			addrLastParts[7] = $("#LAN_TEXT_SipPhoneEndAddr").val().split('.')[3];
		}
		
		//ethSubnetMask.value = "255.255.255.0";
						
		for(i = 0; i < 3; i++)
		{
			dhcpPCStart = dhcpPCStart + addrParts[i] + ".";
			dhcpPCEnd = dhcpPCEnd + addrParts[i] + ".";
			
			CamerastartAddr = CamerastartAddr + addrParts[i] + ".";
			CameraendAddr = CameraendAddr + addrParts[i] + ".";
			
			STBstartAddr = STBstartAddr + addrParts[i] + ".";
			STBendAddr = STBendAddr + addrParts[i] + ".";
			
			if(this.profileType != 'CT_E8_B'	)
			{
				SIPPhonestartAddr = SIPPhonestartAddr + addrParts[i] + ".";
				SIPPhoneendAddr = SIPPhoneendAddr + addrParts[i] + ".";
			}
		}
		
		dhcpPCStart = dhcpPCStart + addrLastParts[0];
		dhcpPCEnd = dhcpPCEnd + addrLastParts[1];
		
		CamerastartAddr = CamerastartAddr + addrLastParts[2];
		CameraendAddr = CameraendAddr + addrLastParts[3];
		
		STBstartAddr = STBstartAddr + addrLastParts[4];
		STBendAddr = STBendAddr + addrLastParts[5];

		$("#LAN_TEXT_DhcpPcStart").attr("value", dhcpPCStart);
		$("#LAN_TEXT_DhcpPcEnd").attr("value", dhcpPCEnd);
		$("#LAN_TEXT_CameraStartAddr").attr("value", CamerastartAddr);
		$("#LAN_TEXT_CameraEndAddr").attr("value", CameraendAddr);
		$("#LAN_TEXT_StbStartAddr").attr("value", STBstartAddr);
		$("#LAN_TEXT_StbEndAddr").attr("value", STBendAddr);

		if(this.profileType != 'CT_E8_B'	)
		{
			SIPPhonestartAddr = SIPPhonestartAddr + addrLastParts[6];
			SIPPhoneendAddr = SIPPhoneendAddr + addrLastParts[7];
			
			$("#LAN_TEXT_SipPhoneStartAddr").attr("value", SIPPhonestartAddr);
			$("#LAN_TEXT_SipPhoneEndAddr").attr("value", SIPPhoneendAddr);
		}
	}
	else
	{
		for (i = 0; i < 3; i++) 
		{
			dhcpEthStart = dhcpEthStart + addrParts[i] + ".";
			dhcpEthEnd = dhcpEthEnd + addrParts[i] + ".";
			ethSubnetMask = ethSubnetMask + "255" + ".";//LGD_FOR_TR098		
		}
	
		dhcpEthStart = dhcpEthStart + t1;
		dhcpEthEnd = dhcpEthEnd + 254;
		ethSubnetMask = ethSubnetMask + "0";
		
		$("#LAN_TEXT_DhcpEthStart").attr("value", dhcpEthStart);
		$("#LAN_TEXT_DhcpEthEnd").attr("value", dhcpEthEnd);
		$("#LAN_TEXT_EthSubnetMask").attr("value", ethSubnetMask);
	}
}

this.setDhcpLeasedTime= function(LeasedTime) 
{
    $("#LAN_SEL_StbDhcpLeasedTime").val(LeasedTime.value);
    $("#LAN_SEL_SipPhoneDhcpLeasedTime").val(LeasedTime.value);
    $("#LAN_SEL_CameraDhcpLeasedTime").val(LeasedTime.value);
    $("#LAN_SEL_DhcpPcLeasedTime").val(LeasedTime.value);
}

this.isEndGTEStart= function(EndIp, StartIp)
{
	var addrEnd = EndIp.split('.');
	var addrStart = StartIp.split('.');
	var E = parseInt(addrEnd[3]) + 1;
	var S = parseInt(addrStart[3]) + 1;
	
	if (E < S) 
	{
		return false;
	}
	
	return true;
}

this.checkAndSubmit= function()
{
	var ethIpAddress = $("#LAN_TEXT_EthIpAdress").val();
	var ethSubnetMask = $("#LAN_TEXT_EthSubnetMask").val();
	var dhcpSrvAddr = $("#LAN_TEXT_DhcpSrvAddr").val();
	var errorStr = "";
	var postData;
	jsonObjInit();
	
	if (!checkValid(getTagTextFromXmlDoc("dhcpWarn6")))
	{
		return;
	}
	
	jsonObjPush("ethIpAddress",ethIpAddress);
	jsonObjPush("ethSubnetMask",ethSubnetMask);	
	jsonObjPush("ethDomain",$("#LAN_TEXT_EthDomain").val());	

	if ($("#LAN_CHX_DhcpSrvType").attr("checked"))
	{
		jsonObjPush("enblDhcpSrv","1");
		
		if (this.buildOpton60)
		{
			var dhcpPCStart = $("#LAN_TEXT_DhcpPcStart").val();
			var dhcpPCEnd = $("#LAN_TEXT_DhcpPcEnd").val();
			var CamerastartAddr = $("#LAN_TEXT_CameraStartAddr").val();
			var CameraendAddr = $("#LAN_TEXT_CameraEndAddr").val();
			var STBstartAddr = $("#LAN_TEXT_StbStartAddr").val();
			var STBendAddr = $("#LAN_TEXT_StbEndAddr").val();
            if(this.dnsRelay)
            {
                this.dnsAddr1 = $("#LAN_TEXT_DhcpLanDns1").val();
                this.dnsAddr2 = $("#LAN_TEXT_DhcpLanDns2").val();
                
                if (this.dnsAddr1 == this.dnsAddr2)
                {
                     alert(getTagTextFromXmlDoc("dhcpWarn9"));
                     return;
                }
            }
			if (!isSameSubNet(dhcpPCStart, ethSubnetMask, dhcpPCEnd, ethSubnetMask))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpPCPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn2") + ".";
				alert(errorStr);
				return;
			}
			else if(!this.isEndGTEStart(dhcpPCEnd, dhcpPCStart))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpPCPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn3") + ".";
				alert(errorStr);
				return;
			}
			
			if (!isSameSubNet(CamerastartAddr, ethSubnetMask, CameraendAddr, ethSubnetMask))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpCameraPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn2") + ".";
				alert(errorStr);
				return;
			}
			else if(!this.isEndGTEStart(CameraendAddr, CamerastartAddr))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpCameraPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn3") + ".";
				alert(errorStr);
				return;
			}
			
			if (!isSameSubNet(STBstartAddr, ethSubnetMask, STBendAddr, ethSubnetMask))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSTBPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn2") + ".";
				alert(errorStr);
				return;
			}
			else if(!this.isEndGTEStart(STBendAddr, STBstartAddr))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSTBPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn3") + ".";
				alert(errorStr);
				return;
			}
			
			if ("CT_E8_B" != this.profileType)
			{
				var SIPPhonestartAddr = $("#LAN_TEXT_SipPhoneStartAddr").val();
				var SIPPhoneendAddr = $("#LAN_TEXT_SipPhoneEndAddr").val();
				
				if (!isSameSubNet(SIPPhonestartAddr, ethSubnetMask, SIPPhoneendAddr, ethSubnetMask))
				{
					errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSIPPhonePool") + "\"," + getTagTextFromXmlDoc("dhcpWarn2") + ".";
					alert(errorStr);
					return;
				}
				else if(!this.isEndGTEStart(SIPPhoneendAddr, SIPPhonestartAddr))
				{
					errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSIPPhonePool") + "\"," + getTagTextFromXmlDoc("dhcpWarn3") + ".";
					alert(errorStr);
					return;
				}
				
				if (!isInValidDhcpPool(dhcpPCStart, dhcpPCEnd, SIPPhonestartAddr, SIPPhoneendAddr))
				{
					errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSIPPhonePool") + "\"," + "\"" + getTagTextFromXmlDoc("dhcpPCPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn4") + ".";
					alert(errorStr);
					return;
				}
				else if(!isInValidDhcpPool(CamerastartAddr, CameraendAddr, SIPPhonestartAddr, SIPPhoneendAddr))
				{
					errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSIPPhonePool") + "\"," + "\"" + getTagTextFromXmlDoc("dhcpCameraPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn4") + ".";
					alert(errorStr);
					return;
				}
				else if(!isInValidDhcpPool(STBstartAddr, STBendAddr, SIPPhonestartAddr, SIPPhoneendAddr))
				{
					errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSIPPhonePool") + "\"," + "\"" + getTagTextFromXmlDoc("dhcpSTBPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn4") + ".";
					alert(errorStr);
					return;
				}
				
				jsonObjPush("dhcpEthStart",dhcpPCStart);
				jsonObjPush("dhcpEthEnd",dhcpPCEnd);
				jsonObjPush("CamerastartAddr",CamerastartAddr);
				jsonObjPush("CameraendAddr",CameraendAddr);
				jsonObjPush("STBstartAddr",STBstartAddr);
				jsonObjPush("STBendAddr",STBendAddr);
				jsonObjPush("SIPPhonestartAddr",SIPPhonestartAddr);
				jsonObjPush("SIPPhoneendAddr",SIPPhoneendAddr);
			}
			
			if (!isInValidDhcpPool(dhcpPCStart, dhcpPCEnd, CamerastartAddr, CameraendAddr))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpCameraPool") + "\"," + "\"" + getTagTextFromXmlDoc("dhcpPCPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn4") + ".";
				alert(errorStr);
				return;
			}
			else if(!isInValidDhcpPool(CamerastartAddr, CameraendAddr, STBstartAddr, STBendAddr))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpSTBPool") + "\"," + "\"" + getTagTextFromXmlDoc("dhcpCameraPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn4") + ".";
				alert(errorStr);
				return;
			}
			else if(!isInValidDhcpPool(STBstartAddr, STBendAddr, dhcpPCStart, dhcpPCEnd))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpPCPool") + "\"," + "\"" + getTagTextFromXmlDoc("dhcpSTBPool") + "\"," + getTagTextFromXmlDoc("dhcpWarn4") + ".";
				alert(errorStr);
				return;
			}
			
			jsonObjPush("ethIpAddress",ethIpAddress);
			jsonObjPush("ethSubnetMask",ethSubnetMask);
			jsonObjPush("dhcpEthStart",dhcpPCStart);
			jsonObjPush("dhcpEthEnd",dhcpPCEnd);
			jsonObjPush("CamerastartAddr",CamerastartAddr);
			jsonObjPush("CameraendAddr",CameraendAddr);
			jsonObjPush("STBstartAddr",STBstartAddr);
			jsonObjPush("STBendAddr",STBendAddr);
			jsonObjPush("enblLanDnsRelay",this.dnsRelay);
			jsonObjPush("dhcpLanDns1",this.dnsAddr1);
			jsonObjPush("dhcpLanDns2",this.dnsAddr2);
		}
		else
		{
			var dhcpEthStart = $("#LAN_TEXT_DhcpEthStart").val();
			var dhcpEthEnd = $("#LAN_TEXT_DhcpEthEnd").val();
			
			if (!isSameSubNet(dhcpEthStart, ethSubnetMask, dhcpEthEnd, ethSubnetMask))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpEthStart") + "\"," + getTagTextFromXmlDoc("dhcpWarn2") + ".";
				alert(errorStr);
				return;
			}
			else if(!this.isEndGTEStart(dhcpEthEnd, dhcpEthStart))
			{
				errorStr = getTagTextFromXmlDoc("dhcpWarn5") + ":\"" + getTagTextFromXmlDoc("dhcpEthStart") + "\"," + getTagTextFromXmlDoc("dhcpWarn3") + ".";
				alert(errorStr);
				return;
			}
			
			jsonObjPush("ethIpAddress",ethIpAddress);
			jsonObjPush("ethSubnetMask",ethSubnetMask);
			jsonObjPush("dhcpEthStart",dhcpEthStart);
			jsonObjPush("dhcpEthEnd",dhcpEthEnd);
		}
		
		jsonObjPush("dhcpLeasedTime", $("input[name='LAN_DhpcLeasedTime']").val());
	}
	else if(($("input[name='LAN_CHX_DhcpSrvType']:eq(2)").attr("checked")))
	{
		if (this.NetEnable == '1')
		{
			alert(getTagTextFromXmlDoc("dhcpRelayWarn"));
		}
		else
		{
			jsonObjPush("enblDhcpSrv","2");
			jsonObjPush("dhcpRelayServer",dhcpSrvAddr);
		}
	}
	else if(($("#LAN_CHX_DhcpSrvType").attr("checked")) == undefined)
	{
		jsonObjPush("enblDhcpSrv","0");
	}
	
	postData = jsonObjEnd();
	setCfg("dhcpSet.cmd", postData, renewDhcpCfg);
}

this.updateCfgBeforeHook = function(){
	//resolved for customize;
}

this.updateAll= function(jsonObj)
{
	this.updateCfgBeforeHook();
	this.buildOpton60 = jsonObj.dhcpBackgroundCfg.buildOpton60;
	this.profileType = jsonObj.dhcpBackgroundCfg.profileType;
	this.gwdomain = jsonObj.dhcpBackgroundCfg.gwdomain;
	this.isLanAddrWriteable = jsonObj.dhcpBackgroundCfg.isLanAddrWriteable;

	if('1' != this.gwdomain)
	{
		$("#LAN_DhcpDomainAll").hide();
	}

	this.updateStpCfgElm(jsonObj);
	this.updateDhcpCfgElm(jsonObj);
	this.updateStaticLeaseIpTable(jsonObj);
	
	this.exUpdateAll(jsonObj);		
}

this.updateStaticLeaseIpTable= function(jsonObj)
{
	var htmlTable = "";
        this.ReservedIp = 0;
	$.each(jsonObj.staticLeaseIp, function(i, list){
			htmlTable += "<tr>";
			htmlTable = htmlTable + "<td>&nbsp;"+ list.mac + "</td>";
			htmlTable = htmlTable + "<td>&nbsp;"+ list.ip +"</td>";
			htmlTable = htmlTable + "<td align='center'><input type='checkbox' name='rml' value='" + list.mac + "'></td>";
			htmlTable += "</tr>";
                        ++this.ReservedIp;
	});
	
	if ("" == htmlTable)
	{
		$("#BTN_Del").hide();
	}
	else
	{
		$("#BTN_Del").show();
	}
	
	$("#staticLeaseIpTable").empty();
	$("#staticLeaseIpTable").append(htmlTable);

}

this.exUpdateAll= function(jsonObj)
{
	
}

this.updateStpCfgElm= function(jsonObj)
{
	if(jsonObj.stpCfg.stpConfigInfo == '0')
	{
		$("input[name='LAN_RADIO_StpSrvType']:eq(0)").attr("checked",'cheecked');
	}
	else
	{
		$("input[name='LAN_RADIO_StpSrvType']:eq(1)").attr("checked",'cheecked');
	}
}

this.setdhcpLease= function(chooseValue)
{
	//window.alert(3);
	if (chooseValue=="minute")
		this.dhcpLease=0;
	if (chooseValue=="hour")
		this.dhcpLease=1;
	if (chooseValue=="day")
		this.dhcpLease=24;
	if (chooseValue=="week")
		this.dhcpLease=168;
}

this.setlanDnsRelay= function(chooseValue)
{
	//window.alert(3);
	if (chooseValue=="auto")
	{
		this.dnsRelay=0;
		$("#LAN_TEXT_DhcpLanDns1").attr("disabled",true);
		$("#LAN_TEXT_DhcpLanDns2").attr("disabled",true);
		$("#LAN_TEXT_DhcpLanDns1").attr("value","N/A");
		$("#LAN_TEXT_DhcpLanDns2").attr("value","N/A");
	}
	if (chooseValue=="manual")
	{
		this.dnsRelay=1;
		$("#LAN_TEXT_DhcpLanDns1").attr("disabled",false);
		$("#LAN_TEXT_DhcpLanDns2").attr("disabled",false);
		$("#LAN_TEXT_DhcpLanDns1").attr("value",this.dnsAddr1);
		$("#LAN_TEXT_DhcpLanDns2").attr("value",this.dnsAddr2);
	}
}

this.updateDhcpCfgElm= function(jsonObj)
{
	this.dnsAddr1 = jsonObj.dhcpCfg.dhcpLanDns1;
	this.dnsAddr2 = jsonObj.dhcpCfg.dhcpLanDns2;
	$("#LAN_TEXT_EthIpAdress").attr("value", jsonObj.dhcpCfg.ethIpAddress);
	$("#LAN_TEXT_EthSubnetMask").attr("value", jsonObj.dhcpCfg.ethSubnetMask);
	if('1' == this.gwdomain)
	{
		$("#LAN_TEXT_EthDomain").attr("value", jsonObj.dhcpCfg.ethDomain);
	}
	
	$("#LAN_TEXT_EthIpAdress").attr("value", jsonObj.dhcpCfg.ethIpAddress);
	$("#LAN_TEXT_EthSubnetMask").attr("value", jsonObj.dhcpCfg.ethSubnetMask);

	if (0 == this.isLanAddrWriteable)
	{
		$("#LAN_TEXT_EthIpAdress").attr("disabled", true);
		$("LAN_TEXT_EthSubnetMask").attr("disabled", true);
	}
    
    $("#LAN_SEL_StbDhcpLeasedTime").val(jsonObj.dhcpCfg.dhcpLeasedTime);
    $("#LAN_SEL_SipPhoneDhcpLeasedTime").val(jsonObj.dhcpCfg.dhcpLeasedTime);
    $("#LAN_SEL_CameraDhcpLeasedTime").val(jsonObj.dhcpCfg.dhcpLeasedTime);
    $("#LAN_SEL_DhcpPcLeasedTime").val(jsonObj.dhcpCfg.dhcpLeasedTime);
	
	if(jsonObj.dhcpBackgroundCfg.buildOpton60=='1')
	{
		$("#LAN_TEXT_DhcpPcStart").attr("value",jsonObj.dhcpCfg.dhcpEthStart);
		$("#LAN_TEXT_DhcpPcEnd").attr("value",jsonObj.dhcpCfg.dhcpEthEnd);

		$("#LAN_TEXT_CameraStartAddr").attr("value",jsonObj.dhcpCfg.CamerastartAddr);
		$("#LAN_TEXT_CameraEndAddr").attr("value",jsonObj.dhcpCfg.CameraendAddr);

		$("#LAN_TEXT_StbStartAddr").attr("value",jsonObj.dhcpCfg.STBstartAddr);
		$("#LAN_TEXT_StbEndAddr").attr("value",jsonObj.dhcpCfg.STBendAddr);
        if(this.getDnsRelayMode(jsonObj.dhcpCfg) == "auto")
        {
            $("#LAN_SEL_DnsRelayMode").attr("checked", undefined);
            $("#LAN_TB_DnsRelay").hide();
        }
		
		if (jsonObj.dhcpCfg.enblLanDnsRelay == 1)
		{
			$("#LAN_TEXT_DhcpLanDns1").attr("disabled",false);
			$("#LAN_TEXT_DhcpLanDns2").attr("disabled",false);
			$("#LAN_TEXT_DhcpLanDns1").attr("value",this.dnsAddr1);
			$("#LAN_TEXT_DhcpLanDns2").attr("value",this.dnsAddr2);
		}
		else
		{
			$("#LAN_TEXT_DhcpLanDns1").attr("disabled",true);
			$("#LAN_TEXT_DhcpLanDns2").attr("disabled",true);
			$("#LAN_TEXT_DhcpLanDns1").attr("value","N/A");
			$("#LAN_TEXT_DhcpLanDns2").attr("value","N/A");
		}

		if (jsonObj.dhcpCfg.profileType!='CT_E8_B')
		{
			$("#LAN_TEXT_SipPhoneStartAddr").attr("value",jsonObj.dhcpCfg.SIPPhonestartAddr);
			$("#LAN_TEXT_SipPhoneEndAddr").attr("value",jsonObj.dhcpCfg.SIPPhoneendAddr);
		}
	}
	else
	{
		$("#LAN_TEXT_DhcpEthStart").attr("value",jsonObj.dhcpCfg.dhcpEthStart);
		$("#LAN_TEXT_DhcpEthEnd").attr("value",jsonObj.dhcpCfg.dhcpEthEnd);
	}
	
	$("#LAN_TEXT_DhcpSrvAddr").attr("value",jsonObj.dhcpCfg.dhcpRelayServer);

	// if any protocol has NAT enabled then
	// don't show DHCP relay
	if (jsonObj.dhcpBackgroundCfg.natEnbl == '1') 
	{
		this.NetEnable = '1';
		$("input[name='LAN_CHX_DhcpSrvType']:eq(2)").attr("display",'none');
		$("#LAN_DIV_UseDHCPRelay").hide();
		if (jsonObj.dhcpCfg.enblDhcpSrv == '1')
		{
			$("#LAN_CHX_DhcpSrvType").attr("checked", true);
			this.showDhcpAdvCfg();
		}
		else 
		{
			$("#LAN_CHX_DhcpSrvType").attr("checked", undefined);
			this.hideDhcpAdvCfg();
		}
	} 
	else 
	{
		this.NetEnable = '0';
		$("input[name='LAN_CHX_DhcpSrvType']:eq(2)").attr("display",'block');
		if (jsonObj.dhcpCfg.enblDhcpSrv == '1') 
		{
			$("#LAN_CHX_DhcpSrvType").attr("checked", true);
			this.DhcpClickOnEnable();
		} 
		else if (jsonObj.dhcpCfg.enblDhcpSrv == '2') 
		{
			$("input[name='LAN_CHX_DhcpSrvType']:eq(2)").attr("checked",'checked');
			this.DhcpClickOnRelay();
		} 
		else 
		{
			$("#LAN_CHX_DhcpSrvType").attr("checked", undefined);
			this.DhcpClickOnDisable();
		}
	}
}

this.showDhcpAdvCfg= function()
{
	this.showAllDhcpAdvCfg();
	
	if (this.buildOpton60)
	{
		$("#LAN_TB_PoolPartThree").hide();
		
		if ("CT_E8_B" == this.profileType)
		{
			$("#LAN_TB_PoolPartTwo").hide();
		}
	}
	else
	{
		$("#LAN_TB_PoolPartOne").hide();
		$("#LAN_TB_PoolPartTwo").hide();
	}
}

this.hideDhcpAdvCfg= function()
{
	this.hideAllDhcpAdvCfg();
}

this.showRealyAdvCfg= function()
{
	$("#LAN_DIV_UseDHCPRelay").show();
}

this.hideRealyAdvCfg= function()
{
	$("#LAN_DIV_UseDHCPRelay").hide();
}

this.showAllDhcpAdvCfg= function()
{
	$("#LAN_TB_PoolPartOne").show();
	$("#LAN_TB_PoolPartTwo").show();
	$("#LAN_TB_PoolPartThree").show();
	$("#LAN_TB_PoolPartFour").show();
	//$("#LAN_TB_DnsRelay").show();
}

this.hideAllDhcpAdvCfg= function()
{
	$("#LAN_TB_PoolPartOne").hide();
	$("#LAN_TB_PoolPartTwo").hide();
	$("#LAN_TB_PoolPartThree").hide();
	$("#LAN_TB_PoolPartFour").hide();
	//$("#LAN_TB_DnsRelay").hide();
}

this.getdhcpLease= function(dhcpCfg)
{
	//window.alert(2);
	var leaseValue='';
	
	this.dhcpLease = dhcpCfg.dhcpLeasedTime;
	
	if(dhcpCfg.dhcpLeasedTime==1)
		leaseValue='hour';
	else if (dhcpCfg.dhcpLeasedTime==24)
		leaseValue='day';
	else if(dhcpCfg.dhcpLeasedTime==168)
		leaseValue='week';
	else 
		leaseValue='minute';
	return leaseValue;
}



this.getDnsRelayMode= function(dhcpCfg)
{
	var modeValue='';
	
	if(dhcpCfg.enblLanDnsRelay ==1)
		modeValue='manual';
	else 
		modeValue='auto';
	return modeValue;
}

this.showNoticeMsg= function(msg)
{
	/* hide curent content */
	$("h3").hide();
	$("p").hide();
	$("form").hide();
	
	/* add new content */
	$("body").prepend("<div class='notice'>"+msg+"</div>");
}

}  // End Page


function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllCfg()
{
	getCfg("dhcpGet.json", {"dhcpBackgroundCfg":"1", "stpCfg":"1", "dhcpCfg":"1", "staticLeaseIp":"1"}, updateAll);
}

function updateStaticLeaseIpTable(jsonObj)
{
    currentPageInst.updateStaticLeaseIpTable(jsonObj);
}

function renewStaticLeaseIpTable()
{
	getCfg("dhcpGet.json", {"dhcpBackgroundCfg":"0", "stpCfg":"0", "dhcpCfg":"0", "staticLeaseIp":"1"}, updateStaticLeaseIpTable);
}

function updateStpCfgElm(jsonObj)
{
    currentPageInst.updateStpCfgElm(jsonObj);
}

function renewStpCfg()
{
	getCfg("dhcpGet.json", {"dhcpBackgroundCfg":"0", "stpCfg":"1", "dhcpCfg":"0", "staticLeaseIp":"0"}, updateStpCfgElm);
}

function updateDhcpCfgElm(jsonObj)
{
    currentPageInst.updateDhcpCfgElm(jsonObj);
}

function renewDhcpCfg()
{
	getCfg("dhcpGet.json", {"dhcpBackgroundCfg":"1", "stpCfg":"0", "dhcpCfg":"1", "staticLeaseIp":"0"}, updateDhcpCfgElm);
	
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
    this.basicClassFile = "kt_lan_dhcp.js";
    this.customLv1File = "kt_lan_dhcp_customlv1.js";
    this.customLv2File = "kt_lan_dhcp_customlv2.js";
    this.customLv3File = "kt_lan_dhcp_customlv3.js";
}

