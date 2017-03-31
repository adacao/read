Page = function()
{

// JavaScript Document
//0:TR069_VOIP_INTERNET 1:TR069 2:TR069_VOIP 3:TR069_INTERNET 4:VOIP 5:VOIP_INTERNET 6:INTERNET 7:OTHER
this.routeServMode = 0;
//  0: default; 0-7; Gpon Epon product
//  1: 1,3,6,7; //   Eoc product
//
this.wanCfg = null;
this.wanUsMode;
this.buildIpv6;
this.lanIfNum = 0;
this.isSupportWlan;
this.isSupport5gWlan;
this.productType;
this.wanConn = null;
this.wanConnName = new Array();
this.wanConnMode;
this.lanBindMode;
this.lanIfcVlanMode = null;
this.lanVlanBindInfo = null;
this.enableVlanBind;
this.unBindLanPortInfo;
this.validEthPort = new Array();
this.setVlanList;

this.availRtPrxyAccnt = 5;
this.supportppp_proxy = "";
this.wanServModeLimit = "0"; 

this.tr069WanIdx = 0;
this.havetr069;
this.voipWanIdx = 0;
this.haveVoip = false;

this.currConnId = 8;
this.maxConnNum = 8;
this.productE8B = "CT_E8_B";
this.productE8C = "CT_E8_C";
this.gponl2inf = 'veip0';
this.lanl2inf = 'eth0';
this.inetBridgeDefMtu;
this.otherBridgeDefMtu;
this.ipRouteDefMtu;
this.pppRouteDefMtu;
this.IfName = new Array();
this.wanDefMtu = 1400;
this.loginLevel;
this.customer;
this.maxPort = 8;
this.lanIfNameList;
this.fixedTr69 = false;
this.enableWan = true;
this.supportcard = 0;
this.bindNum = 0;



this.initHtmlText= function()
{
    $("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuNetBandInternet"));
    $("#NETCON_Netname").append(getTagTextFromXmlDoc("wanNetInfoTitle"));
    $("#NETCON_Portmapping").append(getTagTextFromXmlDoc("menuNetBandmapping"));
    $("#NETCON_Opration").append(getTagTextFromXmlDoc("operate"));
    $(".modify").val(getTagTextFromXmlDoc("menuNetBandmodify"));
    $(".delete").val(getTagTextFromXmlDoc("delCtx"));
    $("#Apply").val(getTagTextFromXmlDoc("applyCtx"));
    $("#BTN_cancle").val(getTagTextFromXmlDoc("cancelCtx"));
    $("#add").val(getTagTextFromXmlDoc("addCtx"));

     $("#WAN_TD_SetUpTitle").append(getTagTextFromXmlDoc("wanCfgTitle"));
    $("#WAN_TD_WanUsMode").append(getTagTextFromXmlDoc("wanUsModeCtx")+":");
    $("#WAN_TD_WanLinkName").append(getTagTextFromXmlDoc("wanLinkNameCtx")+":");
    $("#WAN_TD_WanConnMode").append(getTagTextFromXmlDoc("wanConnModeCtx")+":");
    $("#WAN_TD_WanIpMode").append(getTagTextFromXmlDoc("wanIpModeCtx")+":");
    $("#WAN_TD_WanServerType").append(getTagTextFromXmlDoc("wanAdslServTypeCtx")+":");
    $("#WAN_TD_WanPeakCellRate").append(getTagTextFromXmlDoc("wanPeakCellRateCtx")+":");
    $("#WAN_TD_WanSustainableCellRate").append(getTagTextFromXmlDoc("wanSustainableCellRate")+":");
    $("#WAN_TD_WanMaxBurstSize").append(getTagTextFromXmlDoc("wanMaxBurstSizeCtx")+":");
    $("#WAN_TD_WanPackageMethod").append(getTagTextFromXmlDoc("wanPackageMethodCtx")+":");
    
    $("#WAN_TD_WanDhcpNotice").append(getTagTextFromXmlDoc("wanDhcpNotice"));
    $("#WAN_TD_WanStaticNotice").append(getTagTextFromXmlDoc("wanStaticNotice"));
    $("#WAN_TD_WanPppoeNotice").append(getTagTextFromXmlDoc("wanPppoeNotice"));
    
    $("#WAN_TD_WanPppoeNoProxy").append(getTagTextFromXmlDoc("wanPppoeNoProxyCtx"));
    $("#WAN_TD_WanPppoeProxy").append(getTagTextFromXmlDoc("wanPppoeProxyCtx"));
    $("#WAN_TD_WanPppProxyNumCtx").append(getTagTextFromXmlDoc("wanPppProxyNumCtx")+":");
    $("#WAN_TD_WanPppMaxProxyNumCtx").append(getTagTextFromXmlDoc("wanPppMaxProxyNumCtx")+":");
    $("#WAN_TD_WanPppoeProxyNotice").append(getTagTextFromXmlDoc("wanPppoeProxyNotice"));
    $("#WAN_TD_WanPppoeMixCtx").append(getTagTextFromXmlDoc("wanPppoeMixCtx"));
    
    $("#WAN_TD_WanVlanEnableCtx").append(getTagTextFromXmlDoc("wanVlanEnableCtx")+":");
    
    $("#WAN_TD_WanDialUser").append(getTagTextFromXmlDoc("userCtx")+":");
    $("#WAN_TD_WanDialPasswd").append(getTagTextFromXmlDoc("passwdCtx")+":");
    $("#WAN_TD_WanDialServName").append(getTagTextFromXmlDoc("servNameCtx")+":");
    $("#WAN_TD_WanDialMethodCtx").append(getTagTextFromXmlDoc("wanDialMethodCtx")+":");
    $("#WAN_TD_WanIdleTimeCtx").append(getTagTextFromXmlDoc("wanIdleTimeCtx")+":");
    $("#WAN_TD_IdleTimeUnit").append("("+getTagTextFromXmlDoc("timeUnitMinCtx")+")");
    
    $("#WAN_TD_WanIpAddrCtx").append(getTagTextFromXmlDoc("ipAddrCtx")+":");
    $("#WAN_TD_WanIpMaskCtx").append(getTagTextFromXmlDoc("ipMaskCtx")+":");
    $("#WAN_TD_WanDefGwCtx").append(getTagTextFromXmlDoc("wanDefGwCtx")+":");
    $("#WAN_TD_WanPriDnsCtx").append(getTagTextFromXmlDoc("wanPriDnsCtx")+":");
    $("#WAN_TD_WanSecDnsCtx").append(getTagTextFromXmlDoc("wanSecDnsCtx")+":");
    $("#WAN_TD_WanGw6IpAddrCtx").append(getTagTextFromXmlDoc("wanGw6IpAddrCtx")+":");
    $("#WAN_TD_WanGetIpv6AddrCtx").append(getTagTextFromXmlDoc("wanGetIpv6AddrCtx")+":");
    $("#WAN_TD_WanGetIpv6PrefixCtx").append(getTagTextFromXmlDoc("wanGetIpv6PrefixCtx")+":");
    $("#WAN_TD_WanIpv6AddrCtx").append(getTagTextFromXmlDoc("wanIpv6AddrCtx")+":");
    $("#WAN_TD_WanIpv6PrefixLenCtx").append(getTagTextFromXmlDoc("wanIpv6PrefixLenCtx")+":");
    $("#WAN_TD_WanIpv6FstDnsCtx").append(getTagTextFromXmlDoc("wanIpv6FstDnsCtx")+":");
    $("#WAN_TD_WanIpv6SecDnsCtx").append(getTagTextFromXmlDoc("wanIpv6SecDnsCtx")+":");
    $("#WAN_TD_WanManuDSLiteCtx").append(getTagTextFromXmlDoc("wanManuDSLiteCtx")+":");
    $("#WAN_TD_WanDSLiteRemoteAddrCtx").append(getTagTextFromXmlDoc("wanDSLiteRemoteAddrCtx")+":");
    $("#WAN_TD_WanAutoDSLiteCtx").append(getTagTextFromXmlDoc("wanAutoDSLiteCtx")+":");
    $("#WAN_SEL_WanAutoConn").append(getTagTextFromXmlDoc("wanAutoConnCtx"));
    $("#WAN_SEL_WanOnDemand").append(getTagTextFromXmlDoc("wanOnDemandCtx"));
    $("#BTN_ManualConn").val(getTagTextFromXmlDoc("wanManualConn")); 
    $("#BTN_ManualDisconn").val(getTagTextFromXmlDoc("wanManualDisconn"));

    $(".WAN_CLS_WanServModeCtx").append(getTagTextFromXmlDoc("wanServModeCtx")+":");
    $("#WAN_TD_WanBindPortCtx").append(getTagTextFromXmlDoc("wanBindPortCtx")+":");
    $("#WAN_TD_WanPortBindNotice").append(getTagTextFromXmlDoc("wanPortBindNotice"));
    $("#WAN_TD_WanPortBindWarn").append(getTagTextFromXmlDoc("wanPortBindWarn")+":");
    $("#WAN_TD_WanBindDataCtx").append(getTagTextFromXmlDoc("wanBindDataCtx")+":");
    $("#WAN_TD_WanVlanBindCtx").append(getTagTextFromXmlDoc("wanVlanBindCtx"));
    $("#WAN_TD_WanVlanBindNotice").append(getTagTextFromXmlDoc("wanVlanBindNotice"));
    
    $(".WAN_CLS_WanLanPort1").append(getTagTextFromXmlDoc("wanLanPort1Ctx"));
    $(".WAN_CLS_WanLanPort2").append(getTagTextFromXmlDoc("wanLanPort2Ctx"));
    $(".WAN_CLS_WanLanPort3").append(getTagTextFromXmlDoc("wanLanPort3Ctx"));
    $(".WAN_CLS_WanLanPort4").append(getTagTextFromXmlDoc("wanLanPort4Ctx"));
    $("#WAN_LB_WanWLanPort1").append(getTagTextFromXmlDoc("wanWLanPort1Ctx"));
    $("#WAN_LB_WanWLanPort2").append(getTagTextFromXmlDoc("wanWLanPort2Ctx"));
    $("#WAN_LB_WanWLanPort3").append(getTagTextFromXmlDoc("wanWLanPort3Ctx"));
    $("#WAN_LB_WanWLanPort4").append(getTagTextFromXmlDoc("wanWLanPort4Ctx"));
    $("#WAN_LB_WanWLanPort5").append(getTagTextFromXmlDoc("wanWLanPort5Ctx"));
    $("#WAN_LB_WanWLanPort6").append(getTagTextFromXmlDoc("wanWLanPort6Ctx"));
    $("#WAN_LB_WanWLanPort7").append(getTagTextFromXmlDoc("wanWLanPort7Ctx"));
    $("#WAN_LB_WanWLanPort8").append(getTagTextFromXmlDoc("wanWLanPort8Ctx"));
    $(".mainBody").css("overflow","auto");
    $(".mainBody>div>li").css("position","fixed");

    
}


this.initWanCfgGlb= function(jsonData)
{
    this.buildIpv6 = jsonData.ctrlCfg.buildIpv6;
    this.inetBridgeDefMtu = jsonData.ctrlCfg.inetBridgeDefMtu;
    this.ipRouteDefMtu = jsonData.ctrlCfg.ipRouteDefMtu;
    this.pppRouteDefMtu = jsonData.ctrlCfg.pppRouteDefMtu;
    this.wanCfg = jsonData.wanCfg;
    this.wanUsMode = parseInt(this.wanCfg.wanUsMode);
    this.wanConnMode = this.wanCfg.wanConnMode;
    this.wanConn = this.wanCfg.wanConn;
    this.portBindNum = 0;
    for (i = 0;i< this.wanConn.length;i++)
    {
        this.wanConnName[i] = this.wanConn[i].name;
        this.portBindNum += parseInt(this.wanConn[i].lanInterfaceMask, 10);
    }
    this.bindNum = this.portBindNum;

    this.wanConnName.sort(); 
    
    this.lanIfNum = parseInt(jsonData.ctrlCfg.lanIfNum);
    this.isSupportWlan = (jsonData.ctrlCfg.isSupportWlan == "1") ? true : false;
    this.isSupport5gWlan = (jsonData.ctrlCfg.isSupport5gWlan == "1") ? true : false;
    this.productType = jsonData.ctrlCfg.productType;
    this.maxPort = jsonData.ctrlCfg.maxPort;
    this.isSupportVoip = (jsonData.ctrlCfg.isSupportVoip == "1") ? true : false;
 
    if (this.isSupportVoip == false)
    {
        this.routeServMode = 1;/* Not Support VOIP */
    }   
    if ('EOC' == this.productType)
    {      
        this.IfName[0] = "port0";
        this.IfName[1] = "port1";
        this.IfName[2] = "port2";
        this.IfName[3] = "port3";
    }
    else
    {
        this.IfName[0] = "eth0";
        this.IfName[1] = "eth1";
        this.IfName[2] = "eth2";
        this.IfName[3] = "eth3";
    }
    
    this.lanBindMode =  jsonData.ctrlCfg.lanBindMode;
    if(this.lanBindMode == "1" || this.lanBindMode == "3")
    {
        enalbeVlanBind = true;
    }
    else
    {
        enalbeVlanBind = false;
    }
    
    this.lanIfcVlanMode = this.wanCfg.lanIfcVlanMode;
    this.lanVlanBindInfo = this.wanCfg.lanVlanBindInfo;
    
    this.unBindLanPortInfo = this.wanCfg.unBindLanPortInfo;
    if (this.unBindLanPortInfo == "")
    {
        this.validEthPort.length = 0;
    }
    else
    {
        this.validEthPort = this.unBindLanPortInfo.split("|");
    }
    this.availRtPrxyAccnt = this.wanCfg.availRtPrxyAccnt;
    this.supportppp_proxy = this.wanCfg.supportppp_proxy;
    this.wanServModeLimit = this.wanCfg.wanServModeLimit;
    this.loginLevel = jsonData.ctrlCfg.loginLevel;
    this.customer = jsonData.ctrlCfg.customer;
    this.lanIfNameList = jsonData.ctrlCfg.lanIfNameList;
    
    this.fixedTr69 = jsonData.ctrlCfg.fixedTr69 == "1" ? true : false;

}

this.updateWanUsModeOpt= function()
{
    $("#WAN_SEL_UpStreamMode").empty();
    if(this.wanUsMode & 1)
        $("#WAN_SEL_UpStreamMode").append("<option value='1'>ADSL</option>");
    if(this.wanUsMode & 2)
        $("#WAN_SEL_UpStreamMode").append("<option value='2'>VDSL</option>");
    if(this.wanUsMode & 4)
        $("#WAN_SEL_UpStreamMode").append("<option value='4'>LAN</option>");
    if(this.wanUsMode & 8)
        $("#WAN_SEL_UpStreamMode").append("<option value='8'>GPON</option>");
    if(this.wanUsMode & 16)
        $("#WAN_SEL_UpStreamMode").append("<option value='16'>EOC</option>");
    if(this.wanUsMode & 32)
        $("#WAN_SEL_UpStreamMode").append("<option value='32'>EPON</option>");
    if(this.wanUsMode == 0)
        $("#WAN_SEL_UpStreamMode").append("<option value='0'>NONE</option>");
        
    if (this.wanUsMode & 1) 
    {
        //for adsl
        $("#WAN_TB_Atmpvc").show();
        $("#WAN_TB_ServCategory").show();
        $("#WAN_TB_EncapModel").show();
        $("#WAN_TB_PeakCellhide").show();
    } 
    else
    {
        $("#WAN_TB_Atmpvc").hide();
        $("#WAN_TB_ServCategory").hide();
        $("#WAN_TB_EncapModel").hide();
        $("#WAN_TB_PeakCellhide").hide();
    }
}


this.updateWanLinkNameOpt= function()
{
    $("#WAN_SEL_WanLinkName").empty();

    for (var i = 0; i < this.wanConn.length; i++)
    {
        $("#WAN_SEL_WanLinkName").append("<option value="+i+">"+this.wanConnName[i]+"</option>");
    }
    
    if (i < this.maxConnNum)
    {
        $("#WAN_SEL_WanLinkName").append("<option value='8'>"+getTagTextFromXmlDoc("wanAddNewConnCtx")+"</option>");
    }
}

this.updateWanIpModeOpt= function()
{
    $("#WAN_SEL_WanIpMode").empty();

    if (this.buildIpv6 == "1" && this.wanConnMode == "3")
    {
        $("#WAN_SEL_WanIpMode").append("<option value=0 selected>IPv4</option>");
        $("#WAN_SEL_WanIpMode").append("<option value=1>IPv6</option>");
        $("#WAN_SEL_WanIpMode").append("<option value=2>IPv4/IPv6</option>");
    }
    else if (this.buildIpv6 == "1" && this.wanConnMode == "2")
    {
	  $("#WAN_SEL_WanIpMode").append("<option value=1>IPv6</option>");
    }
    else
    {
        $("#WAN_SEL_WanIpMode").append("<option value=0 selected>IPv4</option>");
    }
}

this.updateRouteServModeOpt= function()
{
    $("#WAN_SEL_ServiceModeRoute").empty();
    if (this.routeServMode == 1)
    {
        $("#WAN_SEL_ServiceModeRoute").append("<option value=1>TR069</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=3>TR069_INTERNET</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=6>INTERNET</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=7>OTHER</option>");
    }
    else
    {
        $("#WAN_SEL_ServiceModeRoute").append("<option value=0>TR069_VOICE_INTERNET</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=1>TR069</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=2>TR069_VOICE</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=3>TR069_INTERNET</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=4>VOICE</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=5>VOICE_INTERNET</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=6>INTERNET</option>");
        $("#WAN_SEL_ServiceModeRoute").append("<option value=7>OTHER</option>");
    }
}

this.getLabelName = function(ifName)
{
    if ((ifName == "eth0") || (ifName == "port0"))
    {
        return getTagTextFromXmlDoc("wanLanPort1Ctx");
    }
    else if ((ifName == "eth1") || (ifName == "port1"))
    {
        return getTagTextFromXmlDoc("wanLanPort2Ctx");
    }
    else if ((ifName == "eth2") || (ifName == "port2"))
    {
        return getTagTextFromXmlDoc("wanLanPort3Ctx");
    }
    else if ((ifName == "eth3") || (ifName == "port3"))
    {
        return getTagTextFromXmlDoc("wanLanPort4Ctx");
    }
    else if (ifName == "wl0")
    {
        return getTagTextFromXmlDoc("wanWLanPort1Ctx");
    }
    else if (ifName == "wl0.1")
    {
        return getTagTextFromXmlDoc("wanWLanPort2Ctx");
    }
    else if (ifName == "wl0.2")
    {
        return getTagTextFromXmlDoc("wanWLanPort3Ctx");
    }
    else if (ifName == "wl0.3")
    {
        return getTagTextFromXmlDoc("wanWLanPort4Ctx");
    }
    else if (ifName == "wl1")
    {
        return getTagTextFromXmlDoc("wanWLanPort5Ctx");
    }
    else if (ifName == "wl1.1")
    {
        return getTagTextFromXmlDoc("wanWLanPort6Ctx");
    }
    else if (ifName == "wl1.2")
    {
        return getTagTextFromXmlDoc("wanWLanPort7Ctx");
    }
    else if (ifName == "wl1.3")
    {
        return getTagTextFromXmlDoc("wanWLanPort8Ctx");
    }
}

this.getPortIdxByPanelIfName = function(panelIfName)
{
	var portIdx = 0;
	if (panelIfName.indexOf("eth") != -1)
	{
	  portIdx = parseInt(panelIfName.substr(panelIfName.length-1))+1;
	}
	else
	{
		//for wlan
	}
	
	return portIdx;
}

this.addBindPortHtml = function()
{
    var htmlStr = "";
    var tmpArray = new Array();
    $.each(this.lanIfNameList, function(idx, lanif){
        tmpArray.push(lanif);
        //lanif.maskMoveBit = idx; //record the mas
    });
    
    
    tmpArray.sort(function(x,y){ return (x.lanPanelIfName > y.lanPanelIfName) || -1});
    $.each(tmpArray, function(idx, lanif){
        if (idx % 2 == 0)
        {
            htmlStr += '<tr>';
        }
        htmlStr += '<td width="110" height="31"><input type="checkbox" value='+ lanif.lanIfName+' data-lanPanelIfName='+lanif.lanPanelIfName+' name="WAN_CHX_LanPort" id="WAN_CHX_LanPort'+idx+'"><label for="WAN_CHX_LanPort'+idx+'">'+currentPageInst.getLabelName(lanif.lanPanelIfName)+'</label></td>';
        
        if (idx % 2 == 1)
        {
            htmlStr += '</tr>';
        }
    });
    
    $("#WAN_PortBindTb").empty();
    $("#WAN_PortBindTb").append(htmlStr);
    //alert(htmlStr);
    
    var num = this.bindNum;
	//register bind event
	$.each($("input[name='WAN_CHX_LanPort']"), function(idx, wanCheckLanPort){
		$(this).change(function(idx){
			var portIdx = currentPageInst.getPortIdxByPanelIfName($(this).attr("data-lanPanelIfName"));
            if (0 == portIdx)
                return;
			if ($(this).attr("checked"))
			{
				currentPageInst.vlanPortDisable(portIdx - 1);
		                if(portIdx == 1)
		                {
		                    if (num & 0x01)
		                    {
		                        alert(getTagTextFromXmlDoc("wanBindPortDuplicate"));
		                    }
		                }
		                else if(portIdx == 2)
		                {
		                    if ((num >> 1) & 0x01)
		                        alert(getTagTextFromXmlDoc("wanBindPortDuplicate"));
		                }
		                else if(portIdx == 3)
		                {
		                    if ((num >> 2) & 0x01)
		                        alert(getTagTextFromXmlDoc("wanBindPortDuplicate"));
		                }
		                else if(portIdx == 4)
		                {
		                    if ((num >> 3) & 0x01)
		                        alert(getTagTextFromXmlDoc("wanBindPortDuplicate"));
		                }
			}
			else
			{
				currentPageInst.vlanPortEnable(portIdx - 1);
			}
		})
	});
	
}

this.setBindPortHide= function()
{
     $("#WAN_TD_PortBindLan1").hide();
     $("#WAN_TD_PortBindLan2").hide();
     $("#WAN_TD_PortBindLan3").hide();
     $("#WAN_TD_PortBindLan4").hide();
     
    $.each(this.lanIfcVlanMode, function(idx, lanif){
        var ifName = lanif.ethIntfName;
        var portIdx = parseInt(ifName.substr(ifName.length-1))+1;
            
        $("#WAN_TD_PortBindLan"+portIdx).show();
        
    });
    
    if (!this.isSupportWlan)
    {
        $("#WAN_TD_ProtBindSSID1").hide();
        $("#WAN_TD_ProtBindSSID2").hide();
        $("#WAN_TD_ProtBindSSID3").hide();
        $("#WAN_TD_ProtBindSSID4").hide();
        $("#WAN_TD_ProtBindSSID5").hide();
        $("#WAN_TD_ProtBindSSID6").hide();
        $("#WAN_TD_ProtBindSSID7").hide();
        $("#WAN_TD_ProtBindSSID8").hide();
    }
    else
    {
        if (!this.isSupport5gWlan)
        {
            $("#WAN_TD_ProtBindSSID5").hide();
            $("#WAN_TD_ProtBindSSID6").hide();
            $("#WAN_TD_ProtBindSSID7").hide();
            $("#WAN_TD_ProtBindSSID8").hide();
        }
    }
    
}

this.setDialMode= function(typeValue)
{
    $("#WAN_SEL_DialMode").val(typeValue);
     if(typeValue == "autoDial")
     {
         $("#WAN_TR_OnDemand").hide();
         $("#WAN_TEXT_DisconnectTime").val("2");
         
         if(this.currConnId > -1 && this.currConnId < 8 && this.wanConn[this.currConnId].dailMode > 0)
         {
             $("#WAN_TEXT_DisconnectTime").val(this.wanConn[this.currConnId].wanConn);
         }
     }
     else
     {
        $("#WAN_TR_OnDemand").show()
     }
}


this.enableNat= function()
{   
    $("#WAN_CHX_FullConeNat").attr("checked", false);
    
    if($("#WAN_CHX_Nat").attr("checked") == "checked")
    {
        $("#WAN_TB_Nat").show();
    }
        
    $("#WAN_TB_FullConeNat").hide();
}


this.enableVlan= function()
{
    $("#WAN_CHX_Vlan").val("");
    $("#WAN_SEL_D8021").val("");
    
    if($("#WAN_CHX_Vlan").attr("checked"))
    {
        $("#WAN_TB_VlanId").show();
        $("#WAN_TB_D8021").show();
        $("#WAN_SEL_D8021").val("0");
    }
    else
    {
        $("#WAN_TB_VlanId").hide();
        $("#WAN_TB_D8021").hide();
        $("#WAN_SEL_D8021").val("");
    }
}

this.checkdialMode= function(typeValue)
{
    $("#WAN_SEL_DialMode").val(typeValue);
    if(typeValue == "autoDial")
    {
        $("#WAN_TR_OnDemand").hide();
        $("#WAN_TEXT_DisconnectTime").val("2");
        
         if(this.currConnId > -1 && this.currConnId < 8 && this.wanConn[this.currConnId].dailMode > 0)
         {
            $("#WAN_TEXT_DisconnectTime").val(this.wanConn[this.currConnId].wanConn);
         }
    }
    else
    {
        $("#WAN_TR_OnDemand").show();
    }
}

this.unSelectLanPort= function(portId)
{
    if (portId == -1)
    {
        $.each( $("input[name='WAN_CHX_LanPort']"), function(idx, elm){
            elm.checked = false;
        });
        /*
        for (var i = 0; i < this.maxPort; i++)
        {
            $("input[name='WAN_CHX_LanPort']")[i].checked = false;
        }
        */
    }
    else if (portId >= 0 && portId < this.maxPort)
    {
        var ifName = this.lanIfNameList[portId].lanIfName;
        $.each( $("input[name='WAN_CHX_LanPort']"), function(idx, elm){
            if (ifName == elm.value)
            {
                elm.checked = false;
            }
        });
        //$("input[name='WAN_CHX_LanPort']")[portId].checked = false;
    }
}

this.selectLanPort= function(portId)
{
    if(portId == -1)
    {
        $.each( $("input[name='WAN_CHX_LanPort']"), function(idx, elm){
            elm.checked = true;
        });
        /*
        for(var i = 0; i < this.maxPort; i++)
        {
            $("input[name='WAN_CHX_LanPort']")[i].checked = true;
        }
        */
    }
    else if(portId >= 0 && portId < this.maxPort)
    {
        var ifName = this.lanIfNameList[portId].lanIfName;
        $.each( $("input[name='WAN_CHX_LanPort']"), function(idx, elm){
            if (ifName == elm.value)
            {
                elm.checked = true;
            }
        });
        /*
        $("input[name='WAN_CHX_LanPort']")[portId].checked = true;
        */
    }
}

this.vlanPortEnable= function(id) 
{
    var index = id;

    if(index != 4)
    {
        $("input[name='WAN_CHX_VlanBind']")[index].disabled = false;
        $("input[name='WAN_CHX_VlanBind']")[index].checked = false;
        $("input[name='WAN_TEXT_BindVlan1']")[index].disabled = false;
        $("input[name='WAN_TEXT_BindVlan1']")[index].value = '';
        $("input[name='WAN_TEXT_BindVlan2']")[index].disabled = false;
        $("input[name='WAN_TEXT_BindVlan2']")[index].value = '';
        $("input[name='WAN_TEXT_BindVlan3']")[index].disabled = false;
        $("input[name='WAN_TEXT_BindVlan3']")[index].value = '';
        $("input[name='WAN_TEXT_BindVlan4']")[index].disabled = false;
        $("input[name='WAN_TEXT_BindVlan4']")[index].value = '';
    }
    else
    {
        var i = 0;
         for (i = 0; i < 4; i++) 
         {
            $("input[name='WAN_CHX_VlanBind']")[i].disabled = false;
            $("input[name='WAN_CHX_VlanBind']")[i].checked = false;
            $("input[name='WAN_TEXT_BindVlan1']")[i].disabled = false;
            $("input[name='WAN_TEXT_BindVlan1']")[i].value = '';
            $("input[name='WAN_TEXT_BindVlan2']")[i].disabled = false;
            $("input[name='WAN_TEXT_BindVlan2']")[i].value = '';
            $("input[name='WAN_TEXT_BindVlan3']")[i].disabled = false;
            $("input[name='WAN_TEXT_BindVlan3']")[i].value = '';
            $("input[name='WAN_TEXT_BindVlan4']")[i].disabled = false;
            $("input[name='WAN_TEXT_BindVlan4']")[i].value = '';
         }
    }
}

this.vlanPortDisable= function(id) 
{
    var index = id;
    
    if(index != 4)
    {
        $("input[name='WAN_CHX_VlanBind']")[index].disabled = true;
        $("input[name='WAN_CHX_VlanBind']")[index].checked = false;
        $("input[name='WAN_TEXT_BindVlan1']")[index].disabled = true;
        $("input[name='WAN_TEXT_BindVlan1']")[index].value = 'x';
        $("input[name='WAN_TEXT_BindVlan2']")[index].disabled = true;
        $("input[name='WAN_TEXT_BindVlan2']")[index].value = 'x';
        $("input[name='WAN_TEXT_BindVlan3']")[index].disabled = true;
        $("input[name='WAN_TEXT_BindVlan3']")[index].value = 'x';
        $("input[name='WAN_TEXT_BindVlan4']")[index].disabled = true;
        $("input[name='WAN_TEXT_BindVlan4']")[index].value = 'x';
    }
    else
    {
        var i = 0;
         for (i = 0; i < 4; i++) 
         {
            $("input[name='WAN_CHX_VlanBind']")[i].disabled = true;
            $("input[name='WAN_CHX_VlanBind']")[i].checked = false;
            $("input[name='WAN_TEXT_BindVlan1']")[i].disabled = true;
            $("input[name='WAN_TEXT_BindVlan1']")[i].value = 'x';
            $("input[name='WAN_TEXT_BindVlan2']")[i].disabled = true;
            $("input[name='WAN_TEXT_BindVlan2']")[i].value = 'x';
            $("input[name='WAN_TEXT_BindVlan3']")[i].disabled = true;
            $("input[name='WAN_TEXT_BindVlan3']")[i].value = 'x';
            $("input[name='WAN_TEXT_BindVlan4']")[i].disabled = true;
            $("input[name='WAN_TEXT_BindVlan4']")[i].value = 'x';
         }
    }
}

this.getPanelIfName = function(ifName)
{
    var panelIfName;
    $.each(this.lanIfcVlanMode, function(idx, lanif){
        if (lanif.ethIntfName == ifName)
        {
            panelIfName = lanif.panelIfName;
        }
    });
    return  panelIfName;
}

this.selectValidVlanPort= function()
{
    if (this.validEthPort.length > 0)
    {
        for (var i = 0; i < this.validEthPort.length; i++)
        {
            this.vlanPortEnable(this.validEthPort[i]);
        }
    }
}

this.portBindCheck= function(iport)
{
    if (this.validEthPort.length > 0)
    {
        for (var i = 0; i < this.validEthPort.length; i++)
        {
            if  (this.validEthPort[i] == iport)
            {
                if ($("input[name='WAN_CHX_LanPort']")[iport].checked)
                {
                    this.vlanPortDisable(iport);
                }
                else
                {
                    this.vlanPortEnable(iport);
                }
            }
        }
    }
        
    if(this.currConnId < 0 || this.currConnId > 7)
    {
        if ($("input[name='WAN_CHX_LanPort']")[iport].checked)
        {
            this.vlanPortDisable(iport);
        }
        else
        {
            this.vlanPortEnable(iport);
        }
        
        var disableVlan = false;
        for (var z = 0; z < 4; z++)
        {
            disableVlan = true;
            for (var i = 0; i < this.validEthPort.length; i++)
            {
                if (this.validEthPort[i] == z)
                {
                    disableVlan = false;
                }
            }
            
            if (disableVlan)
            {
                this.vlanPortDisable(z);
            }
        }
    }
    
    if(this.currConnId > -1 && this.currConnId < 8)
    {
        var intfMask = parseInt(this.wanConn[this.currConnId].lanInterfaceMask);
        for(var i = 0; i < this.maxPort; i++)
        {
             if (intfMask & (1 << i))
             {
                 if (i == iport)
                 {
                     if ($("input[name='WAN_CHX_LanPort']")[iport].checked)
                     {
                         this.vlanPortDisable(iport);
                     }
                     else
                     {
                         this.vlanPortEnable(iport);
                     }
                 }
             }
        }
    }
}

this.vlanBindInfoShow= function() 
{
    var i;
    var index = -1;
    if(this.currConnId > -1 && this.currConnId < 8)
    {
        for(i=0; i<this.lanIfcVlanMode.length; i++)
        {
            if(this.lanIfcVlanMode[i].lanVlanMode == 1)
            {
                var pos1;
                var posVlan1 = 0;
                var posVlan2 = 0;
                var posVlan3 = 0;
                var posVlan4 = 0;
                for(pos1 = 0;pos1 < this.lanVlanBindInfo.length; pos1++)
                {
                    if(this.lanVlanBindInfo[pos1].vlanWanName == this.wanConn[this.currConnId].wanIfName)
                    {
                        var lanIfName = this.lanVlanBindInfo[pos1].lanIfName;
                        var panelIfName = this.getPanelIfName(lanIfName);

                        
                        if(panelIfName == this.IfName[0])
                        {
                            index = 0;
                            $("input[name='WAN_CHX_VlanBind']")[index].checked = true;
                            
                            if(posVlan1 == 0)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan1']")[index].value = tmp1[0];
                                posVlan1++;
                            }
                            else if(posVlan1 == 1)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan2']")[index].value = tmp1[0];
                                posVlan1++;
                            }
                            else if(posVlan1 == 2)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan3']")[index].value = tmp1[0];
                                posVlan1++;
                            }
                            else if(posVlan1 == 3)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan4']")[index].value = tmp1[0];
                                posVlan1++;
                            }
                        }
                        else if(panelIfName == this.IfName[1])
                        {
                            index = 1;
                            $("input[name='WAN_CHX_VlanBind']")[index].checked = true;
                            if(posVlan2 == 0)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan1']")[index].value = tmp1[0];
                                posVlan2++;
                            }
                            else if(posVlan2 == 1)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan2']")[index].value = tmp1[0];
                                posVlan2++;
                            }
                            else if(posVlan2 == 2)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan3']")[index].value = tmp1[0];
                                posVlan2++;
                            }
                            else if(posVlan2 == 3)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan4']")[index].value = tmp1[0];
                                posVlan2++;
                            }
                        }
                        else if(panelIfName == this.IfName[2])
                        {
                            index = 2;
                            $("input[name='WAN_CHX_VlanBind']")[index].checked = true;
                            if(posVlan3 == 0)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan1']")[index].value = tmp1[0];
                                posVlan3++;
                            }
                            else if(posVlan3 == 1)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan2']")[index].value = tmp1[0];
                                posVlan3++;
                            }
                            else if(posVlan3 == 2)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan3']")[index].value = tmp1[0];
                                posVlan3++;
                            }
                            else if(posVlan3 == 3)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan4']")[index].value = tmp1[0];
                                posVlan3++;
                            }
                        }
                        else if(panelIfName == this.IfName[3])
                        {
                            index = 3;
                            $("input[name='WAN_CHX_VlanBind']")[index].checked = true;
                            if(posVlan4 == 0)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan1']")[index].value = tmp1[0];
                                posVlan4++;
                            }
                            else if(posVlan4 == 1)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan2']")[index].value = tmp1[0];
                                posVlan4++;
                            }
                            else if(posVlan4 == 2)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan3']")[index].value = tmp1[0];
                                posVlan4++;
                            }
                            else if(posVlan4 == 3)
                            {
                                var tmp1 = this.lanVlanBindInfo[pos1].lanVlan.split('/');
                                $("input[name='WAN_TEXT_BindVlan4']")[index].value = tmp1[0];
                                posVlan4++;
                            }
                        }
                        
                    }
                }
            }
        }
         
    }

}

//exec when upstreammode changed
this.changeUpStreamMode= function(mode)
{
    if(mode == 2)   //VDSL
    {
        $("#WAN_TB_Vdsl").show();
        $("#WAN_TB_Lan").hide();
        $("#WAN_DIV_Adsl").hide();
        $("#eocTable").hide();
    }
    else if(mode == 4)  //LAN
    {
        $("#WAN_TB_Vdsl").hide();
        $("#WAN_TB_Lan").show();
        $("#WAN_DIV_Adsl").hide();
        $("#eocTable").hide();
    }
    else if(mode == 8)  //GPON
    {
        $("#WAN_TB_Vdsl").hide();
        $("#WAN_TB_Lan").show();
        $("#WAN_DIV_Adsl").hide();
        $("#eocTable").hide();
    }
    else if(mode == 1)  //ADSL
    {
        $("#WAN_TB_Vdsl").hide();
        $("#WAN_TB_Lan").hide();
        $("#WAN_DIV_Adsl").show();
        $("#eocTable").hide();
    }
    else
    {
        $("#WAN_TB_Vdsl").hide();
        $("#WAN_TB_Lan").hide();
        $("#WAN_DIV_Adsl").hide();
        $("#eocTable").show();
    }
}

this.displayVlanBindPort = function(){
    $("#WAN_TR_VlanBindPort1").hide();
    $("#WAN_TR_VlanBindPort2").hide();
    $("#WAN_TR_VlanBindPort3").hide();
    $("#WAN_TR_VlanBindPort4").hide();
     
    $.each(this.lanIfcVlanMode, function(idx, lanif){
        var ifName = lanif.ethIntfName;
        var panelIfName = lanif.panelIfName;
        var portIdx = parseInt(panelIfName.substr(panelIfName.length-1))+1;
        
        $("#WAN_TR_VlanBindPort"+portIdx).show();
        $("#WAN_CHX_WanVlanBindPort"+portIdx).val(ifName);
    });
    
}

this.changeConnMode= function(mode)
{
    if(mode == "bridge")
    {
        $("#WAN_SEL_WanConnMode").get(0).selectedIndex = 0;
        $("#WAN_TB_Nat").hide();
        $("#WAN_TB_IpMode").hide();
        $("#WAN_TB_IpAddr").hide();
        $("#WAB_TB_Dial").hide();
        $("#WAN_TB_PppoeProxy").hide();
        
        $("#WAN_TB_Mtu").show();
        $("#WAN_TB_PortBind").show();
        $("#WAN_TB_PortBindTip").show();
        $("#WAN_TB_PortBindOtherTip").show();
        
        if (enalbeVlanBind)
        {
            $("#WAN_TB_VlanBindOtherTip").show();
            $("#WAN_TB_VlanPortBindTip").show();
            $("#WAN_TB_VlanBind").show();
            
            this.displayVlanBindPort();
            /*
            if (this.lanIfNum == '2')
            {
                $("#WAN_TR_VlanBind3").hide();
                $("#WAN_TR_VlanBind4").hide();
            }
            */
            this.selectValidVlanPort();
            this.vlanBindInfoShow();
        }
        $("#WAN_TR_ServiceModeRoute").hide();
        $("#WAN_TR_ServiceModeBridge").show();
        
        if (this.buildIpv6 == "1")
        {
            $("#WAN_DIV_Gw6").hide();
        }   
        
        $("#WAN_TEXT_Mtu").val(this.inetBridgeDefMtu);
        
        $("#WAN_CHX_Nat").attr("checked", false);
        this.enableNat();
        this.changeServiceMode($("#WAN_SEL_ServiceModeBridge").val());
        if(this.customer == "donyan")
        {
            if (this.loginLevel != "admin")
            {
                $("#WAN_TB_PortBind").hide();
                $("#WAN_TB_ServiceModeBridge").hide();
            }
            else
            {
                $("#WAN_TB_PortBind").show();
                $("#WAN_TB_ServiceModeBridge").show();
            }
        }
        else
        {
            $("#WAN_TB_PortBind").show();
            $("#WAN_TB_ServiceModeBridge").show();
        }
    }
    else
    {
        $("#WAN_SEL_WanConnMode").get(0).selectedIndex = 1;
        
        $("#WAN_TB_IpAddr").hide();
        $("#WAB_TB_Dial").hide();
        $("#WAN_TB_PppoeProxy").hide();
        $("#WAN_TB_PortBindOtherTip").hide();
        
        $("#WAN_TB_Nat").show();
        $("#WAN_TB_IpMode").show();
        $("#WAN_TB_Mtu").show();
        $("#WAN_TB_PortBind").show();
        $("#WAN_TB_PortBindTip").show();
        
        if (enalbeVlanBind)
        {
            this.vlanPortDisable(4);
            $("#WAN_TB_VlanBindOtherTip").hide();
            $("#WAN_TB_VlanPortBindTip").hide();
            $("#WAN_TB_VlanBind").hide();
        }
        $("#WAN_TR_ServiceModeBridge").hide();
        $("#WAN_TR_ServiceModeRoute").show();

        $("#WAN_TEXT_Mtu").val(this.ipRouteDefMtu);

        $("#WAN_CHX_Nat").attr("checked", true);
        this.enableNat();
                    
        this.changeIpMode("dhcp");   
        
        serviceModeRouteVal = $("#WAN_SEL_ServiceModeRoute").val();
        if (this.havetr069)
        {
            if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
            {
                serviceModeRouteVal = 6;
            }
        }
        
        if(this.customer == "donyan")
        {
            if (this.loginLevel != "admin")
            {
                $("#WAN_TB_Nat").hide();
                $("#WAN_TB_PortBind").hide();
                $("#WAN_TB_ServiceModeRoute").hide();
                $("#WAN_CHX_Nat").attr("checked", false);
                this.enableNat();
                $("#WAN_SEL_ServiceModeRoute").get(0).selectedIndex = 2;
                serviceModeRouteVal = 6;
            }
            else
            {
                $("#WAN_TB_Nat").show();
                $("#WAN_TB_PortBind").show();
                $("#WAN_TB_ServiceModeRoute").show();
                $("#WAN_CHX_Nat").attr("checked", true);
                this.enableNat();
            }
        }
        else
        {
            $("#WAN_TB_Nat").show();
            $("#WAN_TB_PortBind").show();
            $("#WAN_TB_ServiceModeRoute").show();
            $("#WAN_CHX_Nat").attr("checked", true);
            this.enableNat();
        }

        if (this.haveVoip)
        {
            if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 2) || (serviceModeRouteVal == 4) ||(serviceModeRouteVal == 5))
            {
                serviceModeRouteVal = 6;
            }
        }
        
        this.changeServiceMode(serviceModeRouteVal);
        currentPageInst.showOrHideAftrManuSet();
    }
}

this.enablePppToBridge= function()
{
    $("#WAN_TR_PppoeProxyNumber").hide();
    
    $("#WAN_CHX_NoPppoeProxy").attr("checked", false);
    $("#WAN_CHX_PppoeProxy").attr("checked", false);
    $("#WAN_CHX_PppToBridge").attr("checked", true);
    $("#WAN_TEXT_PppoeProxyNumber").val("");
    $("input[name='maxProxyUserNums']").val(this.availRtPrxyAccnt);      
}

this.enablePppoeProxy= function()
{
    $("#WAN_TR_PppoeProxyNumber").show();
    $("#WAN_CHX_NoPppoeProxy").attr("checked", false);
    $("#WAN_CHX_PppoeProxy").attr("checked", true);
    $("#WAN_CHX_PppToBridge").attr("checked", false);
    
    var linkNameVal = parseInt($("#WAN_SEL_WanLinkName").val());
    if(linkNameVal < 8)
    {
        var connId = this.getConnId(linkNameVal);
        if(this.wanConn[connId].pppProxyMaxUser == "")
            $("#WAN_TEXT_PppoeProxyNumber").val(this.availRtPrxyAccnt);
        else
            $("#WAN_TEXT_PppoeProxyNumber").val(this.wanConn[connId].pppProxyMaxUser);
    }       
    else
    {
        $("#WAN_TEXT_PppoeProxyNumber").val(this.availRtPrxyAccnt);
    }
    
    $("#WAN_TD_WanAvailPppProxyNum").empty();
    $("#WAN_TD_WanAvailPppProxyNum").append("("+getTagTextFromXmlDoc("wanPppMaxProxyNumCtx")+this.availRtPrxyAccnt+")");
}

this.enableIPv6= function()
{
    var value = $("#WAN_SEL_WanIpMode").val();
    var mode = $("#WAN_SEL_ServiceModeRoute").val();
    var connMode = $("#WAN_SEL_WanConnMode").val();
    
    $("#WAN_TB_Unnumbered").hide();
    $("#WAN_TB_PD").hide();
    $("#WAN_TB_Dsliteauto").show();
	
    if (value > 0 && connMode == "route")
    {
        $("#WAN_DIV_Gw6").show();
        if(value == "1")
        {
            $("#WAN_TB_Nat").hide();
        }
        else
        {
            if(mode == 0 || mode == 3 || mode == 5 || mode == 6)
            {
                $("#WAN_TB_Nat").show()
            }
        }
        
        if ($("input[name='WAN_RADIO_WanIpModeSel']:checked").val() == "static")
        {
            (value == "1") ? $("#WAN_TB_IpAddr").hide() : $("#WAN_TB_IpAddr").show();
        
            $("#WAN_TB_Static6").show();
        }
        else
        {
            $("#WAN_TB_Static6").hide();
        }
    
        if ($("input[name='WAN_RADIO_WanIpModeSel']:checked").val() == "pppoe")
        {
            $("#WAN_TB_Gw6").hide();
            $("#WAN_TB_Unnumbered").show();
            $("#WAN_TB_PD").show();
        }
        else
        {
            $("#WAN_TB_Gw6").show();
        }
    
        if ($("input[name='WAN_RADIO_WanIpModeSel']:checked").val() == "dhcp")
        {
            $("#WAN_TB_Unnumbered").show();
            $("#WAN_TB_PD").show();
        }
        
        currentPageInst.showOrHideAftrManuSet();
    }
    else
    {
        $("#WAN_DIV_Gw6").hide();
        $("#WAN_TB_Static6").hide();
        $("#WAN_TB_Gw6").hide();
        
        if ((value == 0) && connMode == "route")
        {
            if(mode == 0 || mode == 3 || mode == 5 || mode == 6)
            {
                $("#WAN_TB_Nat").show();
            }
            
            if ($("input[name='WAN_RADIO_WanIpModeSel']:checked").val() == "static")
            {
                $("#WAN_TB_IpAddr").show();
            }
        }
    }
}

this.disablePppoeProxy= function()
{
    $("#WAN_TR_PppoeProxyNumber").hide();
    $("#WAN_CHX_NoPppoeProxy").attr("checked", true);
    $("#WAN_CHX_PppoeProxy").attr("checked", false);
    $("#WAN_CHX_PppToBridge").attr("checked", false);
    
    $("#WAN_TEXT_PppoeProxyNumber").val("");
    $("#WAN_TD_WanAvailPppProxyNum").empty();
    $("#WAN_TD_WanAvailPppProxyNum").append("("+getTagTextFromXmlDoc("wanPppMaxProxyNumCtx")+this.availRtPrxyAccnt+")");
}

this.enablePppOnDemand= function()
{
    if ($("input[name='pppoe']").attr("checked") && $("#WAN_SEL_WanConnMode").val() == "route")
    {
        if ($("#WAN_TEXT_DisconnectTime").val() > 0 )
        {
            if(this.currConnId > -1 && this.currConnId < 8 && this.wanConn[this.currConnId].dailMode > 0)
            {
                $("#WAN_SEL_DialMode").val("adaptDial");
                $("#WAN_TR_OnDemand").show();
            }
            else
            {
                $("#WAN_SEL_DialMode").val("autoDial");
                $("#WAN_TR_OnDemand").hide();
            }
        }
        else
        {
            $("#WAN_SEL_DialMode").val("autoDial");
            $("#WAN_TR_OnDemand").hide();
        }
    }
}

this.hideManualConn= function(hide)
{
    $("#WAN_TR_ManualConn").hide();
}

this.changeIpMode= function(mode)
{
    $("input[name='WAN_RADIO_WanIpModeSel'][value='"+mode+"']").attr("checked", "checked"); //select 
    if(mode=="dhcp")
    {
        $("#WAN_TB_IpAddr").hide();
        $("#WAB_TB_Dial").hide();
        $("#WAN_TB_PppoeProxy").hide();
        this.hideManualConn(true);
        $("#WAN_TEXT_Mtu").val(this.ipRouteDefMtu);
        if (this.buildIpv6 == "1")
        {
            $("#WAN_TB_Unnumbered").hide();
            $("#WAN_TB_PD").hide();
            
            if (($("#WAN_SEL_WanIpMode").get(0).selectedIndex > 0)
                && !$("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked"))
            {
                $("#WAN_TB_Gw6").show();
            }
            else
            {
                $("#WAN_TB_Gw6").hide();
            }
        }
    }
    else if(mode=="static")
    {
        if ((this.buildIpv6 == "1") && $("#WAN_SEL_WanIpMode").get(0).selectedIndex == 1)
        {
            $("#WAN_TB_IpAddr").hide();
        }
        else
        {
            $("#WAN_TB_IpAddr").show();
        }
        
        $("#WAB_TB_Dial").hide();
        $("#WAN_TB_PppoeProxy").hide();
        this.hideManualConn(true);
        $("#WAN_TEXT_Mtu").val(this.ipRouteDefMtu);
        
        if (this.buildIpv6 == "1")
        {
            $("#WAN_TB_Unnumbered").hide();
            $("#WAN_TB_PD").hide();
        }
        
        if (($("#WAN_SEL_WanIpMode").get(0).selectedIndex > 0)
                && !$("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked"))
        {
            $("#WAN_TB_Gw6").show();
            $("#WAN_TB_Static6").show();
        }
        else
        {
            $("#WAN_TB_Gw6").hide();
            $("#WAN_TB_Static6").hide();
        }
        
    }
    else
    {
        $("#WAN_TB_IpAddr").hide();
        $("#WAB_TB_Dial").show();
        this.hideManualConn(false);
        var serviceModeRoute = $("#WAN_SEL_ServiceModeRoute").val();
        if (serviceModeRoute == 1 || serviceModeRoute == 2 || serviceModeRoute == 4 || this.supportppp_proxy == "0")
        {
            $("#WAN_TB_PppoeProxy").hide();
        }
        else
        {
            $("#WAN_TB_PppoeProxy").show();
        }
        
        $("#WAN_TEXT_Mtu").val(this.pppRouteDefMtu);    

        this.disablePppoeProxy();    
        this.enablePppOnDemand();
        
    }
    
    if (this.buildIpv6 == "1")
    {
        this.enableIPv6();
    }
}

//0:TR069_VOIP_INTERNET 1:TR069 2:TR069_VOIP 3:TR069_INTERNET 4:VOIP 5:VOIP_INTERNET 6:INTERNET 7:OTHER
this.changeServiceMode= function(mode)
{
    var modeIndex = new Array(8);
    
    if(this.routeServMode == 0)
    {
        var index = "0, 1, 2, 3, 4, 5, 6, 7";
        modeIndex = index.split(",");
    }
    else if(this.routeServMode == 1)
    {
        var index = "0, 0, 0, 1, 0, 0, 2, 3";
        modeIndex = index.split(",");
    }
    
    if ($("#WAN_SEL_WanConnMode").val() == "route")
    {
        $("#WAN_SEL_ServiceModeRoute").get(0).selectedIndex = modeIndex[mode];
        if(mode == 1 || mode == 2 || mode == 4)
        {
            $("#WAN_TB_PppoeProxy").hide();
            $("#WAN_TB_Nat").hide();
            $("#WAN_TB_PortBind").hide();
            $("#WAN_TB_PortBindTip").hide();
            
            $("#WAN_CHX_Nat").attr("checked", false);
            this.enableNat();
            
            this.disablePppoeProxy();
            this.unSelectLanPort(-1);
        }
        else
        {
            if($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") && this.supportppp_proxy == "1")
            {
                $("#WAN_TB_PppoeProxy").show();
                this.disablePppoeProxy();
            }
            else
            {
                $("#WAN_TB_PppoeProxy").hide();
            }
            
            $("#WAN_TB_Nat").show();
            $("#WAN_TB_PortBind").show();
            $("#WAN_TB_PortBindTip").show();
            
            $("#WAN_CHX_Nat").attr("checked", true);
            this.enableNat();
        }
    }
    else
    {
        $("#WAN_SEL_ServiceModeBridge").get(0).selectedIndex =  mode - 6;
        $("#WAN_TB_Nat").hide();
        $("#WAN_CHX_Nat").attr("checked", false);
    }
    
    if (mode == 7 && $("#WAN_SEL_WanConnMode").val() == "bridge")
    {
        $("#WAN_TB_PortBindOtherTip").show();
        
        if (enalbeVlanBind)
        {
            $("#WAN_TB_VlanBindOtherTip").show();
            $("#WAN_TB_VlanPortBindTip").show();
            $("#WAN_TB_VlanBind").show();
            
            /*
            if (this.lanIfNum == "2")
            {
                $("#WAN_TR_VlanBind3").hide();
                $("#WAN_TR_VlanBind4").hide();
            }
            */
            this.displayVlanBindPort();
            this.selectValidVlanPort();
            this.vlanBindInfoShow();
        }
        
        if ($("#WAN_SEL_WanLinkName").val() == 8)
        {
            this.unSelectLanPort(-1);
        }
    }
    else
    {
        $("#WAN_TB_PortBindOtherTip").hide();
        if (enalbeVlanBind)
        {
            this.vlanPortDisable(4);
            $("#WAN_TB_VlanBindOtherTip").hide();
            $("#WAN_TB_VlanPortBindTip").hide();
            $("#WAN_TB_VlanBind").hide();
        }
    }

    if ($("#WAN_SEL_WanIpMode").val() == "1")
    {
        $("#WAN_TB_Nat").hide();
    }
}

//0:TR069_VOIP_INTERNET 1:TR069 2:TR069_VOIP 3:TR069_INTERNET 4:VOIP 5:VOIP_INTERNET 6:INTERNET 7:OTHER
//Change Service Mode do not clear pppoe proxy.
this.changeServiceMode_Service= function(mode)
{
    var modeIndex = new Array(8);
    
    if(this.routeServMode == 0)
    {
        var index = "0, 1, 2, 3, 4, 5, 6, 7";
        modeIndex = index.split(",");
    }
    else if(this.routeServMode == 1)
    {
        var index = "0, 0, 0, 1, 0, 0, 2, 3";
        modeIndex = index.split(",");
    }
    
    if ($("#WAN_SEL_WanConnMode").val() == "route")
    {
        $("#WAN_SEL_ServiceModeRoute").get(0).selectedIndex = modeIndex[mode];
        
        //check for tr69c
        if (this.havetr069 && (this.tr069WanIdx != $("#WAN_SEL_WanLinkName").val()) && (mode == 0 || mode == 1 || mode == 2 || mode == 3))
        {
            warnMsgShow($("#WAN_SEL_ServiceModeRoute")[0], getTagTextFromXmlDoc("wanAddTr69Warn"));
        }
        else
        {
            warnMsgHide($("#WAN_SEL_ServiceModeRoute")[0]);
            
            //check for voip
            if (this.haveVoip && (this.voipWanIdx != $("#WAN_SEL_WanLinkName").val()) && (mode == 0 || mode == 2 || mode == 4 || mode == 5))
            {
                warnMsgShow($("#WAN_SEL_ServiceModeRoute")[0], getTagTextFromXmlDoc("wanAddVoipWarn"));
            }
            else
            {
                warnMsgHide($("#WAN_SEL_ServiceModeRoute")[0]);
            }
        }
        
        if(mode == 1 || mode == 2 || mode == 4)
        {
            $("#WAN_TB_PppoeProxy").hide();
            $("#WAN_TB_Nat").hide();
            $("#WAN_TB_PortBind").hide();
            $("#WAN_TB_PortBindTip").hide();
            
            $("#WAN_CHX_Nat").attr("checked", false);
            this.enableNat();
            
            this.disablePppoeProxy();
            this.unSelectLanPort(-1);
        }
        else
        {
            if ($("#WAN_CHX_PppoeProxy").attr("checked") == "checked")
            {
                /* Change Service Mode do not clear pppoe proxy */
            }
            if($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") && this.supportppp_proxy == "1")
            {
                $("#WAN_TB_PppoeProxy").show();
            }
            else
            {
                $("#WAN_TB_PppoeProxy").hide();
                this.disablePppoeProxy();
            }

            if(this.customer == "donyan")
            {
                if (this.loginLevel != "admin")
                {
                    $("#WAN_TB_Nat").hide();
                    $("#WAN_TB_ServiceModeRoute").hide();
                    $("#WAN_TB_PortBind").hide();
                    $("#WAN_TB_PortBindTip").hide();
                    
                    $("input[name='nat']").attr("checked", false);
                    this.enableNat();
                }
                else
                {
                    $("#WAN_TB_Nat").show();
                    $("#WAN_TB_PortBind").show();
                    $("#WAN_TB_PortBindTip").show();
                    
                    $("#WAN_CHX_Nat").attr("checked", true);
                    this.enableNat();
                }
            }
            else
            {
                $("#WAN_TB_Nat").show();
                $("#WAN_TB_PortBind").show();
                $("#WAN_TB_PortBindTip").show();
                
                $("#WAN_CHX_Nat").attr("checked", true);
                this.enableNat();
            }
            
        }
    }
    else
    {
        $("#WAN_SEL_ServiceModeBridge").get(0).selectedIndex =  mode - 6;
        $("#WAN_TB_Nat").hide();
        $("#WAN_CHX_Nat").attr("checked", false);
    }
    
    if (mode == 7 && $("#WAN_SEL_WanConnMode").val() == "bridge")
    {
        $("#WAN_TB_PortBindOtherTip").show();
        
        if (enalbeVlanBind)
        {
            $("#WAN_TB_VlanBindOtherTip").show();
            $("#WAN_TB_VlanPortBindTip").show();
            $("#WAN_TB_VlanBind").show();
            
            /*
            if (this.lanIfNum == "2")
            {
                $("#WAN_TR_VlanBind3").hide();
                $("#WAN_TR_VlanBind4").hide();
            }*/
            this.displayVlanBindPort();
            this.selectValidVlanPort();
            this.vlanBindInfoShow();
        }
        
        if ($("#WAN_SEL_WanLinkName").val() == 8)
        {
            this.unSelectLanPort(-1);
        }
    }
    else
    {
        $("#WAN_TB_PortBindOtherTip").hide();
        if (enalbeVlanBind)
        {
            this.vlanPortDisable(4);
            $("#WAN_TB_VlanBindOtherTip").hide();
            $("#WAN_TB_VlanPortBindTip").hide();
            $("#WAN_TB_VlanBind").hide();
        }
    }

    if ($("#WAN_SEL_WanIpMode").val() == "1")
    {
        $("#WAN_TB_Nat").hide();
    }
}

this.getFreeConnId= function()
{
    var i;
    
    for(i = 1; i <= this.wanConn.length; i++)
    {
        if(parseInt(this.wanConn[i-1].name.charAt(0)) != i)
        {
            break;
        }
    }
    return i;
}


this.loadDefParam= function()
{
    $("#WAN_SEL_WanConnMode").get(0).selectedIndex = 0;
/*
    if (this.buildIpv6 == "1")
        $("#WAN_SEL_WanIpMode").get(0).selectedIndex = parseInt(this.wanConnMode) - 1;
    else
        $("#WAN_SEL_WanIpMode").get(0).selectedIndex = parseInt(this.wanConnMode) - 1;
*/
    /*default use ipv4*/
    $("#WAN_SEL_WanIpMode").get(0).selectedIndex = 0;
	
    $("#WAN_TB_Nat").hide();
    $("#WAN_TB_FullConeNat").hide();
    $("#WAN_TB_VlanId").hide();
    $("#WAN_TB_FullConeNat").hide();
    $("#WAN_TB_D8021").hide();
    $("#WAN_TB_FullConeNat").hide();
    $("#WAN_TB_IpMode").hide();
    $("#WAN_TB_Mtu").hide();
    $("#WAN_TB_IpAddr").hide();
    $("#WAB_TB_Dial").hide();    
    $("#WAN_TB_PppoeProxy").hide();
    this.setDialMode("autoDial");
    
    if (this.buildIpv6 == "1")
    {
        $("#WAN_CHX_Enblunnumbered").attr("checked", false);
        $("#WAN_CHX_EnblPD").attr("checked", true);// enable ipv6 PrefixDelegation as default
        $("#WAN_DIV_Gw6").hide();
    }
    $("#WAN_CHX_Nat").attr("checked", false);
    this.enableNat();
    
    $("#WAN_CHX_Vlan").attr("checked", false);
    $("#WAN_CHX_Vlan").attr("disabled", false);
    $("#WAN_TEXT_VlanId").val("");
    $("#WAN_TEXT_VlanId").attr("disabled", false);
    this.enableVlan();
    
    if ("route" == $("#WAN_SEL_WanConnMode").val())
    {
        if (this.routeServMode == 1)
        {
            $("#WAN_TEXT_Mtu").val(this.pppRouteDefMtu);
        }
        else
        {
            $("#WAN_TEXT_Mtu").val(this.ipRouteDefMtu);
        }
    }
    else if ("bridge" == $("#WAN_SEL_WanConnMode").val())
    {
        $("#WAN_TEXT_Mtu").val(this.inetBridgeDefMtu);
    }
    else
    {
        $("#WAN_TEXT_Mtu").val(this.ipRouteDefMtu);
    }
    
    if(this.routeServMode == 1)
    {   
        $("#WAN_SEL_ServiceModeRoute").get(0).selectedIndex = 1;
    }
    else if(this.routeServMode == 0)
    {
        $("#WAN_SEL_ServiceModeRoute").get(0).selectedIndex = 0;
    }
    
    $("#WAN_SEL_ServiceModeBridge").get(0).selectedIndex = 0;
    
    this.unSelectLanPort(-1);
    
    $("#WAN_INPUT_UserPassword").attr("disabled", false);
    $("#WAN_INPUT_UserPassword").val("");
    $("#WAN_TEXT_UserName").attr("disabled", false);
    $("#WAN_TEXT_UserName").val("");
    $("#WAN_CHX_PppoeProxy").attr("checked", false);
    $("#WAN_CHX_PppToBridge").attr("checked", false);
    
    this.changeConnMode("bridge");
    
    if (this.wanUsMode & 1) 
    {
        $("#WAN_TB_Atmpvc").show();
        $("#WAN_TB_ServCategory").show();
        $("#WAN_TB_EncapModel").show();
        $("#WAN_TEXT_Vpi").val("0");
        $("#WAN_TEXT_Vci").val("35");
        $("#WAN_SEL_ServiceCat").val("UBR");
        $("#WAN_TB_PeakCellhide").hide();
        $("#WAN_TEXT_PeakCellRate").val("");
        $("#WAN_TEXT_SustainableCellRate").val("");
        $("#WAN_TEXT_MaxBurstSize").val("");
        $("#WAN_SEL_EncSel").val("0");
    } 
    else
    {
        $("#WAN_TB_Atmpvc").hide();
        $("#WAN_TB_ServCategory").hide();
        $("#WAN_TB_EncapModel").hide();
        $("#WAN_TB_PeakCellhide").hide();
    }
}

this.loadIpv6EnableParam= function(connId)
{   
    if(this.wanConn[connId].enableIpv6 == '1')
    {
        if(this.wanConn[connId].enableIpv4 == '1')
            $("#WAN_SEL_WanIpMode").get(0).selectedIndex = 2;
        else
            $("#WAN_SEL_WanIpMode").get(0).selectedIndex = 1;
            
        if(this.wanConn[connId].unnumberedModel == '1')
            $("#WAN_CHX_Enblunnumbered").attr("checked", true);
        else
            $("#WAN_CHX_Enblunnumbered").attr("checked", false);
            
        if(this.wanConn[connId].enablePrefixDelegation == '1')
            $("#WAN_CHX_EnblPD").attr("checked", true);
        else
            $("#WAN_CHX_EnblPD").attr("checked", false);
            
        $("#WAN_TEXT_RemoteAddress6").val(this.wanConn[connId].staticRemoteIpv6Addr);
            
        if(this.wanConn[connId].enableDslit == '1')
        {
            $("#WAN_CHX_Dsliteauto").attr("checked", true);
            if(this.wanConn[connId].dslitMode == '1')
            {
                $("#WAN_CHX_Dslitemanu").attr("checked", true);
            }
            else
            {
                $("#WAN_CHX_Dslitemanu").attr("checked", false);
            }
        }
        else
        {
                $("#WAN_CHX_Dslitemanu").attr("checked", false);
                $("#WAN_CHX_Dsliteauto").attr("checked", false);
        }
                
        $("#WAN_DIV_Gw6").show();

    }
    else
    {   
        $("#WAN_SEL_WanIpMode").get(0).selectedIndex = 0;
        $("#WAN_DIV_Gw6").hide();
    }
}

this.loadPppParam= function(connId)
{
    $("#WAN_TEXT_UserName").val(this.wanConn[connId].userName);
    $("#WAN_INPUT_UserPassword").val(this.wanConn[connId].userPassword);
    $("#WAN_TEXT_ServerName").val(this.wanConn[connId].pppServerName);

    if(parseInt(this.wanConn[connId].pppToBridge))
    {
        this.enablePppToBridge();
    }
    else if(parseInt(this.wanConn[connId].enablePppProxy))
    {
        this.enablePppoeProxy();         
    }
    else
    {
        this.disablePppoeProxy();
    }
    
    $("#WAN_TEXT_UserName").attr("disabled", false);                    
    $("#WAN_INPUT_UserPassword").attr("disabled", false);
        
    if(this.wanConn[connId].dailMode != "0")
    {
        $("#WAN_SEL_DialMode").val("adaptDial");
        $("#WAN_TR_OnDemand").show();
        $("#WAN_TEXT_DisconnectTime").val(this.wanConn[connId].dailMode);
    }
    else
    {
        $("#WAN_SEL_DialMode").val("autoDial");
        $("#WAN_TR_OnDemand").hide();
    }
}

this.loadIpParam= function(connId)
{
    $("#WAN_TEXT_IpAddr").val(this.wanConn[connId].staticIpAddr);
    $("#WAN_TEXT_NetMask").val(this.wanConn[connId].staticNetMask);
    $("#WAN_TEXT_DefGW").val(this.wanConn[connId].staticDefGw);
    $("#WAN_TEXT_FirstDns").val(this.wanConn[connId].staticFirstDns);
    
    if(this.wanConn[connId].staticSecDns == '0.0.0.0')
    {
        $("#WAN_TEXT_SecondDns").val("");
    }
    else
    {
        $("#WAN_TEXT_SecondDns").val(this.wanConn[connId].staticSecDns);
    }
    if (this.buildIpv6 == "1")
    {
        $("#WAN_TB_Unnumbered").hide();
        $("#WAN_TB_PD").hide();
        if (this.wanConn[connId].enableIpv6 == '1')
        {
            $("#WAN_TB_Static6").show();
            $("#WAN_TEXT_WanAddress6").val(this.wanConn[connId].staticWanIpv6Addr);
            $("#WAN_TEXT_WanSubnetPrefixLen").val(parseInt(this.wanConn[connId].staticWanIpv6SubnetPrefixLen));
            if(isNaN($("#WAN_TEXT_WanSubnetPrefixLen").val()))
            {
                $("#WAN_TEXT_WanSubnetPrefixLen").val("");
            }
            
            $("#WAN_TEXT_WanGateway6").val(this.wanConn[connId].wanIpv6Gateway);
            $("#WAN_TEXT_Dns6Primary").val(this.wanConn[connId].staticIpv6DnsPri);
            $("#WAN_TEXT_Dns6Secondary").val(this.wanConn[connId].staticIpv6DnsSec);
            
            $("#WAN_TB_Gw6").show();
        }
        else
        {
            $("#WAN_TB_Gw6").hide();
        }
    }
}


this.loadConnType= function(connType, connId)
{
    var wanConnType = parseInt(connType);

    switch(wanConnType)
    {
    case 0:     //CMS_WAN_TYPE_PPPOE
        this.loadPppParam(connId);
        this.changeConnMode("route");
        this.changeIpMode("pppoe");
        break;

    case 1:     //CMS_WAN_TYPE_PPPOA
        this.changeConnMode("route");
        
        break;

    case 2:     //CMS_WAN_TYPE_DYNAMIC_IPOE
        this.loadIpParam(connId);
        this.changeConnMode("route");
        this.changeIpMode("dhcp");
        break;

    case 3:     //CMS_WAN_TYPE_BRIDGE
        this.changeConnMode("bridge");
        break;

    case 4:     //CMS_WAN_TYPE_PPPOE_RELAY
        this.changeConnMode("route");
        break;

    case 5:     //CMS_WAN_TYPE_IPOA
        this.changeConnMode("route");
        break;

    case 6:     //CMS_WAN_TYPE_STATIC_IPOE
        this.loadIpParam(connId);
        this.changeConnMode("route");
        this.changeIpMode("static");
        break;  

    case 10:    //CMS_WAN_TYPE_STATIC_ETHERNET_IP
        this.loadIpParam(connId);
        this.changeConnMode("route");
        this.changeIpMode("static");
        break;

    case 11:    //CMS_WAN_TYPE_DYNAMIC_ETHERNET_IP
        this.loadIpParam(connId);
        this.changeConnMode("route");
        this.changeIpMode("dhcp");
        break;

    case 12:    //CMS_WAN_TYPE_ETHERNET_PPPOE
        this.loadPppParam(connId);
        this.changeConnMode("route");
        this.changeIpMode("pppoe");
        break;

    case 13:    //CMS_WAN_TYPE_ETHERNET_BRIDGE
        this.changeConnMode("bridge");
        break;  

    default:    //CMS_WAN_TYPE_UNDEFINED
        this.changeConnMode("bridge");
        break;
    }
}

this.loadServMode= function(servMode)
{
    var isTr69 = 0;
    var isInternet = 0;
    var isVoip = 0;
    var isOther = 0;
    var servModeMask = parseInt(servMode);

    for(var i = 0; i < 4; i++)
    {
        if(!(servModeMask & (1 << i)))
        {
            continue;
        }

        switch(i)
        {
        case 0:
            isTr69 = 1;
            break;
            
        case 1:
            isInternet = 1;
            break;
            
        case 2:
            isVoip = 1;
            break;
            
        case 3:
            isOther = 1;
            break;
        }
    }

    if(isTr69 && isInternet && isVoip)
    {
        this.changeServiceMode(0);
    }
    else if(isTr69 && isVoip)
    {
        this.changeServiceMode(2);
    }
    else if(isTr69 && isInternet)
    {
        this.changeServiceMode(3);
    }
    else if(isVoip && isInternet)
    {
        this.changeServiceMode(5);
    }
    else if(isTr69)
    {
        this.changeServiceMode(1);
    }
    else if(isVoip)
    {
        this.changeServiceMode(4);
    }
    else if(isOther)
    {
        this.changeServiceMode(7);
    }
    else
    {
        this.changeServiceMode(6);
    }
}

this.loadBindPort= function(intf)
{
    var intfMask = parseInt(intf);
    
    $.each(this.lanIfNameList, function(idx, lanif){
        if(intfMask & (1 << idx))
        {
            currentPageInst.selectLanPort(idx);
        }
        else
        {
            currentPageInst.unSelectLanPort(idx);
        }
    });
    
    /*
    for(var i = 0; i < this.maxPort; i++)
    {
        if(intfMask & (1 << i))
        {
            this.selectLanPort(i);
        }
        else
        {
            this.unSelectLanPort(i);
        }
    }
    */
}

this.loadNatParam= function(connId)
{   
    if ($("#WAN_SEL_WanIpMode").val() == "1")
    {
        $("#WAN_TB_Nat").hide();
    }
    else
    {
        $("#WAN_CHX_Nat").attr("checked", parseInt(this.wanConn[connId].enableNat) ? true : false);
        this.enableNat();
        $("#WAN_CHX_FullConeNat").attr("checked", parseInt(this.wanConn[connId].enableFullconeNat) ? true : false);
    }
}

this.loadVlanParam= function(connId)
{
    var vlanValue = this.wanConn[connId].vlanId;
    var d8021p  = this.wanConn[connId].priority;
    var vlanIdROAttri;

    //PPPOE or PPPoE Bridge
    if((this.wanConn[connId].wanConType == '0') || (this.wanConn[connId].wanConType == '3') || (this.wanConn[connId].wanConType == '4') || (this.wanConn[connId].wanConType == '12') || (this.wanConn[connId].wanConType == '13'))
    {
        vlanIdROAttri   = this.wanConn[connId].vlanMuxId;
    } 
    else
    {
        vlanIdROAttri   = this.wanConn[connId].vlanId;
    }
    
    if(vlanValue == "-1" || vlanValue == "0")
    {
        $("#WAN_CHX_Vlan").attr("checked", false);
        vlanValue = "";
    }
    else
    {
        $("#WAN_CHX_Vlan").attr("checked", true);
    }
    this.enableVlan();
    
    $("#WAN_TEXT_VlanId").val(vlanValue);
    $("#WAN_SEL_D8021").val(d8021p);    
}

this.loadMtuParam= function(connId)
{
    $("#WAN_TEXT_Mtu").val(parseInt(this.wanConn[connId].mtu));
}

this.loadParam= function(connId)
{

   this.currConnId = connId;

    if(connId < 0 || connId > 8)
    {
        this.loadDefParam();
        return;
    }
    if (this.buildIpv6 == "1")
        this.loadIpv6EnableParam(connId);
        
    this.loadConnType(this.wanConn[connId].wanConType, connId);

    if ($("input[name='WAN_RADIO_WanIpModeSel'][value='static']").attr("checked") == "checked")
    {
        this.showOrHideStaRemIpv6Addr();
    }

    this.loadServMode(this.wanConn[connId].servModeMask);

    if(this.wanConn[connId].wanConType == 0 || this.wanConn[connId].wanConType == 12)
    {
        this.loadPppParam(connId);
    }
    
    this.loadBindPort(this.wanConn[connId].lanInterfaceMask);
    this.loadNatParam(connId);
    
    this.loadVlanParam(connId);  

    this.loadMtuParam(connId);
}

this.EditContents=function(linkNum){
    // console.log(exit);
 
    $(".mainBody>div>form").css("width","618px");
    $("#NETCON_Table").hide();
    $("#NETCON_DIV_Add").hide();
    $("#NETCON_DIV_Button").hide();
    $("#editor").show();

    var connId;
    this.currConnId = linkNum;

    if(linkNum == 8) 
    {
        this.loadDefParam();
        $("#WAN_SEL_UpStreamMode").attr("disabled", true);
        if (this.fixedTr69)
        {
            $("#WAN_SEL_WanConnMode").attr("disabled", false);
            $("#WAN_SEL_WanIpMode").attr("disabled", false);
            $("input[name='WAN_RADIO_WanIpModeSel']").attr("disabled", false);
            $("#WAN_TEXT_Mtu").attr("disabled", false);
            $("#WAN_CHX_Nat").attr("disabled", false);
            $("#WAN_CHX_Vlan").attr("disabled", false);
            $("#WAN_TEXT_VlanId").attr("disabled", false);
            $("#WAN_SEL_D8021").attr("disabled", false);
            $("#WAN_SEL_ServiceModeBridge").attr("disabled", false);
            $("#WAN_SEL_ServiceModeRoute").attr("disabled", false);
            $("#BTN_Apply").attr("disabled", false);
            $("#BTN_Del").attr("disabled", false);
        }
    }

    else
    {
        $("#WAN_SEL_WanLinkName").attr("value",this.currConnId );
        connId = this.getConnId(linkNum); 
        this.loadParam(connId);
        this.changeUpStreamMode(this.wanConn[connId].upStreamMode);
        $("#WAN_SEL_UpStreamMode").attr("disabled", true);
        
        if (this.fixedTr69)
        {
            if (this.wanConnName[linkNum].indexOf("TR069") != -1)
            {
                $("#WAN_SEL_WanConnMode").attr("disabled", true);
                $("#WAN_SEL_WanIpMode").attr("disabled", true);
                $("input[name='WAN_RADIO_WanIpModeSel']").attr("disabled", true);
                $("#WAN_TEXT_Mtu").attr("disabled", true);
                $("#WAN_CHX_Nat").attr("disabled", true);
                $("#WAN_CHX_Vlan").attr("disabled", true);
                $("#WAN_TEXT_VlanId").attr("disabled", true);
                $("#WAN_SEL_D8021").attr("disabled", true);
                $("#WAN_SEL_ServiceModeBridge").attr("disabled", true);
                $("#WAN_SEL_ServiceModeRoute").attr("disabled", true);
                $("#BTN_Apply").attr("disabled", true);
                $("#BTN_Del").attr("disabled", true);
            }
            else
            {
                $("#WAN_SEL_WanConnMode").attr("disabled", false);
                $("#WAN_SEL_WanIpMode").attr("disabled", false);
                $("input[name='WAN_RADIO_WanIpModeSel']").attr("disabled", false);
                $("#WAN_TEXT_Mtu").attr("disabled", false);
                $("#WAN_CHX_Nat").attr("disabled", false);
                $("#WAN_CHX_Vlan").attr("disabled", false);
                $("#WAN_TEXT_VlanId").attr("disabled", false);
                $("#WAN_SEL_D8021").attr("disabled", false);
                $("#WAN_SEL_ServiceModeBridge").attr("disabled", false);
                $("#WAN_SEL_ServiceModeRoute").attr("disabled", false);
                $("#BTN_Apply").attr("disabled", false);
                $("#BTN_Del").attr("disabled", false);
            }
        }
    }
    warnMsgHide($("#WAN_SEL_ServiceModeRoute")[0]); //clear warn msg if exist.
    currentPageInst.showOrHideAftrManuSet();
    
}

this.delContents=function(del){

    $("#WAN_SEL_WanLinkName").attr("value",del );

    if (del == 8) 
    {
        return;
    }
    
    var postData; 
    jsonObjInit();
    
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    var serviceModeRouteVal = $("#WAN_SEL_ServiceModeRoute").val();
    
    if(connModeVal != "bridge" && this.wanServModeLimit == '1')
    {
        if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
        {
            alert(getTagTextFromXmlDoc("wanNotEditTr69Warn")); //"不能编辑TR069相关WAN 连接!"

        }   
        else
        {
            jsonObjPush("wanAction", "remove");
        }
    }
    else if (connModeVal != "bridge" && '1' == this.supportcard)
    {
        if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
        {
            alert(getTagTextFromXmlDoc("wanNotDelTr69Warn"));
        }   
        else
        {
            jsonObjPush("wanAction", "remove");
        }
    }
    else
    {  
        jsonObjPush("wanAction", "remove");
    }
    
    if(!this.saveWanIfName())
    {
        return;
    }   
    
    postData = jsonObjEnd();
    disableSubmit($("#BTN_Apply"), $("#BTN_Del"));
    setCfg("wanCfgSet.cmd", postData, updateAllCfg);


}

this.getConnId= function(linkNum)
{
    for(i = 0; i < 8; i++)
    {   
        if(this.wanConn[i].name == this.wanConnName[linkNum])
        {
            return i;
        }
    }

    return -1;
}


this.changeLink= function(linkNum)
{
    var connId;

    this.currConnId = linkNum;
    
    if(linkNum == 8) //add new
    {
        this.loadDefParam();
        $("#WAN_SEL_UpStreamMode").attr("disabled", true);
        if (this.fixedTr69)
        {
            $("#WAN_SEL_WanConnMode").attr("disabled", false);
            $("#WAN_SEL_WanIpMode").attr("disabled", false);
            $("input[name='WAN_RADIO_WanIpModeSel']").attr("disabled", false);
            $("#WAN_TEXT_Mtu").attr("disabled", false);
            $("#WAN_CHX_Nat").attr("disabled", false);
            $("#WAN_CHX_Vlan").attr("disabled", false);
            $("#WAN_TEXT_VlanId").attr("disabled", false);
            $("#WAN_SEL_D8021").attr("disabled", false);
            $("#WAN_SEL_ServiceModeBridge").attr("disabled", false);
            $("#WAN_SEL_ServiceModeRoute").attr("disabled", false);
            $("#BTN_Apply").attr("disabled", false);
            $("#BTN_Del").attr("disabled", false);
        }
    }
    else
    {
        connId = this.getConnId(linkNum);    
        this.loadParam(connId);
        this.changeUpStreamMode(this.wanConn[connId].upStreamMode);
        $("#WAN_SEL_UpStreamMode").attr("disabled", true);
        
        if (this.fixedTr69)
        {
            if (this.wanConnName[linkNum].indexOf("TR069") != -1)
            {
                $("#WAN_SEL_WanConnMode").attr("disabled", true);
                $("#WAN_SEL_WanIpMode").attr("disabled", true);
                $("input[name='WAN_RADIO_WanIpModeSel']").attr("disabled", true);
                $("#WAN_TEXT_Mtu").attr("disabled", true);
                $("#WAN_CHX_Nat").attr("disabled", true);
                $("#WAN_CHX_Vlan").attr("disabled", true);
                $("#WAN_TEXT_VlanId").attr("disabled", true);
                $("#WAN_SEL_D8021").attr("disabled", true);
                $("#WAN_SEL_ServiceModeBridge").attr("disabled", true);
                $("#WAN_SEL_ServiceModeRoute").attr("disabled", true);
                $("#BTN_Apply").attr("disabled", true);
                $("#BTN_Del").attr("disabled", true);
            }
            else
            {
                $("#WAN_SEL_WanConnMode").attr("disabled", false);
                $("#WAN_SEL_WanIpMode").attr("disabled", false);
                $("input[name='WAN_RADIO_WanIpModeSel']").attr("disabled", false);
                $("#WAN_TEXT_Mtu").attr("disabled", false);
                $("#WAN_CHX_Nat").attr("disabled", false);
                $("#WAN_CHX_Vlan").attr("disabled", false);
                $("#WAN_TEXT_VlanId").attr("disabled", false);
                $("#WAN_SEL_D8021").attr("disabled", false);
                $("#WAN_SEL_ServiceModeBridge").attr("disabled", false);
                $("#WAN_SEL_ServiceModeRoute").attr("disabled", false);
                $("#BTN_Apply").attr("disabled", false);
                $("#BTN_Del").attr("disabled", false);
            }
        }
    }
    warnMsgHide($("#WAN_SEL_ServiceModeRoute")[0]); //clear warn msg if exist.
    currentPageInst.showOrHideAftrManuSet();
}


this.updateWanRuleElm= function(jsonObj)
{
    var i;
    var connId;
    var htmlLabel = "";
    var itemNum = 0;
    var lanIfNum =0;
    var wlIfNum = 0;

    wanRule = jsonObj.wanCfg.wanConn;
    if (0 == wanRule.length)
    {
        this.itemNum = 0;
        $("#NETCON_NetListTbody").empty();  
        return;
    }

    if (typeof(jsonObj.ctrlCfg) != "undefined")
    {
        if (typeof(jsonObj.ctrlCfg.lanIfNameList) != "undefined")
        {
            for (i = 0; i < jsonObj.ctrlCfg.lanIfNameList.length; i++)
            {
                if (jsonObj.ctrlCfg.lanIfNameList[i].lanIfName.indexOf("eth") == 0)
                {
                    lanIfNum++;
                }
                else if (jsonObj.ctrlCfg.lanIfNameList[i].lanIfName.indexOf("wl") == 0)
                {
                    wlIfNum++;
                }
            }
        }
    }
    
    $.each(wanRule, function(a, list)
    {
        $("#NETCON_NetListTbody").empty();

        itemNum += 1;
        
        htmlLabel += "<tr>";
        htmlLabel += "<td class='WanNetName'>"+ list.name + "</td>";
        htmlLabel += "<td>";

        var pText = "";
        if (typeof(list.lanInterfaceMask) != "undefined")
        {
            for (i = 0; i < lanIfNum; i++)
            {
                if (((1 << i) & list.lanInterfaceMask) != 0)
                {
                    if (pText == "")
                    {
                        pText += ("lan" + (i + 1));
                    }
                    else
                    {
                        pText += (",lan" + (i + 1));
                    }
                }
            }

            for (i = 0; i < wlIfNum; i++)
            {
                if (((1 << (i + lanIfNum)) & list.lanInterfaceMask) != 0)
                {
                    if (pText == "")
                    {
                        pText += ("wlan" + (i + 1));
                    }
                    else
                    {
                        pText += (",wlan" + (i + 1));
                    }
                }
            }
        }
        var wanoneId = '';
        var wantwoId = '';
        htmlLabel += pText;
        htmlLabel += "</td>";
        wanoneId = ('wanExitspan' + (itemNum-1));
        wantwoId = ('wanDelspan' + (itemNum-1));
        htmlLabel += "<td><input type='button' class='Wanone' id='"+wanoneId+"' name="+(itemNum-1)+"><input type='button' class='Wantwo' id='"+wantwoId+"' name="+(itemNum-1)+"></td>";
        htmlLabel += "</tr>";
        

    });
    this.itemNum = itemNum;
   
    $("#NETCON_NetListTbody").empty();
    $("#NETCON_NetListTbody").append(htmlLabel);


}

  

this.updateWanCfgElm= function(jsonObj)
{
    this.initWanCfgGlb(jsonObj);

    
    this.updateWanUsModeOpt();
    this.updateWanLinkNameOpt();
    this.updateWanIpModeOpt();
    this.updateRouteServModeOpt();

    $("#NETCON_Table").show();
    $("#NETCON_DIV_Add").show();
    $("#NETCON_DIV_Button").show();
    $("#editor").hide();
    this.updateWanRuleElm(jsonObj);

    
    //loadupStreamMode();
    this.addBindPortHtml();
    //this.setBindPortHide();
    
    if(this.wanConn.length == 0)
    {
        this.currConnId = 8;
        this.loadDefParam();
    }
    else
    {
        this.changeLink(0);
    }
    
    this.havetr069 = false;  
    this.checktr069();
    
    this.haveVoip = false;
    this.checkVoip();

    if ('1' == jsonObj.supportCard)
    {
        this.supportcard = 1;
    }
    else
    {
        this.supportcard = 0;
    }
}



this.checkSameVID= function()
{
    if ($("#WAN_SEL_WanConnMode").val() == "bridge")
    {
        for (var i = 0; i < this.wanConn.length; i++)
        {
            if (this.wanConn[i].wanConType == '3') 
            {
                var temp;
                temp = parseInt($("#WAN_SEL_WanLinkName").val()) + 1 + '_';
                if (($("#WAN_TEXT_VlanId").val() == this.wanConn[i].vlanId))
                {
                    if ((this.wanConn[i].name.indexOf(temp) != -1))
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
            }
        }
    }
    else
    {
        for (var i = 0; i < this.wanConn.length; i++)
        {
            if (this.wanConn[i].wanConType != '3') 
            {
                var temp;
                temp = parseInt($("#WAN_SEL_WanLinkName").val()) + 1 + '_';
                if (($("#WAN_TEXT_VlanId").val() == this.wanConn[i].vlanId))
                {
                    if ((this.wanConn[i].name.indexOf(temp) != -1))
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
            }
        }
    }
    
    return false;
}


this.checkSameInternet= function()
{   
    var vid = "VID";
    var tmp = "_";
    var Mode,value,wanname;
    
    if ($("#WAN_SEL_WanConnMode").val() == "bridge")
    {
        Mode = "B";
        switch(parseInt($("#WAN_SEL_ServiceModeBridge").val()))
        {
            case 6:
                value="INTERNET";
                break;

            case 7:
                value="Other";
                break;
        }
    }
    else
    {
        Mode = "R"
        switch(parseInt($("#WAN_SEL_ServiceModeRoute").val()))
        {
            case 0:
                value="TR069_VOICE_INTERNET";
                break;

            case 1:
                value="TR069";
                break;

            case 2:
                value="TR069_VOICE";
                break;

            case 3:
                value="TR069_INTERNET";
                break;

            case 4:
                value="VOICE";
                break;

            case 5:
                value="VOICE_INTERNET";
                break;

            case 6:
                value="INTERNET";
                break;

            case 7:
                value="Other";
                break;
        }       
    }

    wanname = value.concat(tmp,Mode,tmp,vid,tmp,$("#WAN_TEXT_VlanId").val()); 
    var Interceptenum,Interceptestr;
    for(var i=0;i<this.wanConn.length;i++)
    {
        Interceptestr = this.wanConn[i].name.substr(2);
        if(Interceptestr == wanname)
        {
            return true;
        }
    }
    return false;
}

this.checktr069= function()
{
    for (var i = 0; i < this.wanConn.length; i++)
    {
        if (this.wanConnName[i].indexOf("TR069") != -1)
        {
            this.tr069WanIdx = i;
            this.havetr069 = true;
        }
    }
}

this.checkVoip= function()
{
    for (var i = 0; i < this.wanConn.length; i++)
    {
        if (this.wanConnName[i].indexOf("VOIP") != -1)
        {
            this.voipWanIdx = i;
            this.haveVoip = true;
        }
    }
}



this.checkMtuValid= function(mtuElm)
{
    if (mtuElm.value == "")
    {
        mtuElm.value = this.wanDefMtu;
    }
    
    var mtuVal = parseInt(mtuElm.value);
    
    if (isNaN(mtuElm.value) || mtuVal < 68 || mtuVal > 1500)
    {
        warnMsgShow(mtuElm, getTagTextFromXmlDoc("wanMtuInvalidWarn"));
        return false
    }
    
    warnMsgHide(mtuElm);
    return true;
}
this.checkMtuValid2= function(mtuElm)
{
    if (mtuElm.value == "")
    {
        mtuElm.value = this.wanDefMtu;
    }
    
    var mtuVal = parseInt(mtuElm.value);
    
    if (isNaN(mtuElm.value) || mtuVal < 68 || mtuVal > 1492)
    {
        warnMsgShow(mtuElm, getTagTextFromXmlDoc("wanMtuInvalidWarn2"));
        return false
    }
    
    warnMsgHide(mtuElm);
    return true;
}
this.checkVlanValid= function(vlanElm)
{
    if ($("#WAN_CHX_Vlan").attr("checked") == "checked")
    {
        var vid = parseInt(vlanElm.value);
        if ((vlanElm.value =="") || isNaN(vlanElm.value) || (vid < 1) || (vid > 4094))
        {
            warnMsgShow(vlanElm, getTagTextFromXmlDoc("wanVlanInvalidWarn"));
            return false
        }
    }
    warnMsgHide(vlanElm);
    return true;
}
this.checkVlanCommon= function(elm)
{
	if ($(elm).attr("disabled"))
	{
		return true;
	}
	
    if (elm.value !="")
    {
        var vid = parseInt(elm.value);
        if (isNaN(elm.value) || (vid < 1) || (vid > 4094))
        {
            warnMsgShow(elm, getTagTextFromXmlDoc("wanVlanInvalidWarn"));
            return false
        }
    }
    warnMsgHide(elm);
    return true;
}

this.checkIpAddrValid = function(ipElm)
{
    var canBeNull = false;
    if (ipElm.id == "WAN_TEXT_SecondDns")
    {
        canBeNull = true;
    }
    
    if (!(canBeNull && ipElm.value ==""))
    {
        if(!isValidIpAddress(ipElm.value))
        {
            warnMsgShow(ipElm, getTagTextFromXmlDoc("wanIpAddrInvalidWarn"));
            return false
        }
    }
    
    warnMsgHide(ipElm);
    return true;
}
this.checkIpMaskValid= function(ipMaskElm)
{
    var canBeNull = false;
    if(!isValidSubnetMask(ipMaskElm.value))
    {
        warnMsgShow(ipMaskElm, getTagTextFromXmlDoc("wanIpMaskInvalidWarn"));
        return false
    }
    warnMsgHide(ipMaskElm);
    return true;
}
this.checkIpV6AddrValid= function(ipv6Elm)
{
    var canBeNull = false;
    if (ipv6Elm.id == "WAN_TEXT_Dns6Secondary")
    {
        canBeNull = true;
    }
    
    if (!(canBeNull && ipv6Elm.value ==""))
    {
        if(!isValidIpAddress6(ipv6Elm.value))
        {
            warnMsgShow(ipv6Elm, getTagTextFromXmlDoc("wanIpv6AddrInvalidWarn"));
            return false
        }
    }
    
    warnMsgHide(ipv6Elm);
    return true;
}
this.checkIpv6PreFixLenValid= function(preFixElm)
{
    if (preFixElm.value == "")
    {
        warnMsgShow(preFixElm, getTagTextFromXmlDoc("wanIpv6PreFixLenWarn"));
        return false;
    }
    
    if (!isValidPrefixLength(preFixElm.value))
    {
        warnMsgShow(preFixElm, getTagTextFromXmlDoc("wanIpv6PreFixLenWarn2"));
        return false;
    }
    
    warnMsgHide(preFixElm);
    return true;
}

this.checkPppUserNameValid= function(userNameElm)
{
    var pppUserName = userNameElm.value;
    
    if (pppUserName.length > 64)
    {
        warnMsgShow(userNameElm, getTagTextFromXmlDoc("wanPppExMaxLen64Warn"));
        return false;
    }
    
    if(!isValidPppName(pppUserName))
    {
        warnMsgShow(userNameElm, getTagTextFromXmlDoc("wanInvalidCharWarn"));
        return false;
    }
    
    warnMsgHide(userNameElm);
    return true;
}
this.checkPppPwdValid= function(pwdElm)
{
    var pppPwd = pwdElm.value;
    
    if (pppPwd.length > 32)
    {
        warnMsgShow(pwdElm, getTagTextFromXmlDoc("wanPppExMaxLen32Warn"));
        return false;
    }
    
    if(!isValidPppName(pppPwd))
    {
        warnMsgShow(pwdElm, getTagTextFromXmlDoc("wanInvalidCharWarn"));
        return false;
    }
    
    warnMsgHide(pwdElm);
    return true;
}

this.checkPppServNameValid= function(servNameElm)
{
    var pppServName = servNameElm.value;
    
    if (pppServName.length > 64)
    {
        warnMsgShow(servNameElm, getTagTextFromXmlDoc("wanPppExMaxLen64Warn"));
        return false;
    }
    
    if(!isValidPppName(pppServName))
    {
        warnMsgShow(servNameElm, getTagTextFromXmlDoc("wanInvalidCharWarn"));
        return false;
    }
    
    warnMsgHide(servNameElm);
    return true;
}
this.checkPppProxyNumValid= function(proxyNumElm)
{
    if((proxyNumElm.value == "") || !isNumber(proxyNumElm.value))
    {
        warnMsgShow(proxyNumElm, getTagTextFromXmlDoc("wanPppProxyInvalidWarn"));
        return false;
    }
    var pppProxyNum = proxyNumElm.value;
    var curProxyUserNums = 0;
    if ($("#WAN_SEL_WanLinkName").val() < 8)
    {
        var connId = this.getConnId($("#WAN_SEL_WanLinkName").val());
        curProxyUserNums = parseInt(this.wanConn[connId].pppProxyMaxUser);
        if (!( curProxyUserNums > 0))
            curProxyUserNums = 0;
    }
    else
        curProxyUserNums = 0;
                
    var vaildProxyNum = parseInt(this.availRtPrxyAccnt) + parseInt(curProxyUserNums);

    if(pppProxyNum <= 0 || pppProxyNum > vaildProxyNum)
    {
        warnMsgShow(proxyNumElm, getTagTextFromXmlDoc("wanPppProxyNumRangeWarn")+vaildProxyNum);
        return false;
    }
    
    warnMsgHide(proxyNumElm);
    return true;
}
this.checkPppIdleTimeValid= function(idleTimeElm)
{
    if(idleTimeElm.value == '' || isNumber(idleTimeElm.value) == false)
    {
        warnMsgShow(idleTimeElm, getTagTextFromXmlDoc("wanPppDisconnTimeWarn"));
        return false;
    }
    
    var disConnTime = parseInt(idleTimeElm.value);
    if(disConnTime < 1 || disConnTime > 30)
    {
        warnMsgShow(idleTimeElm, getTagTextFromXmlDoc("wanPppDisconnTimeWarn"));
        return false;
    }

    warnMsgHide(idleTimeElm);
    return true;
}

this.checkVlanIdadd= function() 
{
	var checkObjArray = new Array();
	$.each($(".WAN_CLS_BindVlan"), function(idx, elm){
		checkObjArray.push($(elm));
	});
	if (!checkValid(null, checkObjArray))
	{
		return false;
	}
    var havevaule = 0;
    var rxId;
    var iS;
    var i;
        
    this.setVlanList = "";
    
    for (i = 0; i < 4; i++) 
    {
        havevaule = 0;
        var val = $("input[name='WAN_CHX_VlanBind']")[i].value;
        if (val == "on" || val == "off")
        {
            continue;
        }
        
        var ethifname = "," + val + "|";
        
        /*
        if(i==0)
        {
            ethifname = "," +this.IfName[0]+ "|";
        }
        else if(i==1)
        {
            ethifname = "," +this.IfName[1]+ "|";
        }
        else if(i==2)
        {
            ethifname = "," +this.IfName[2]+ "|";
        }
        else if(i==3)
        {
            ethifname = "," +this.IfName[3]+ "|";
        }
        */

        if($("input[name='WAN_CHX_VlanBind']")[i].checked)
        {
            if($("input[name='WAN_TEXT_BindVlan1']")[i].value != "")
            {
                this.setVlanList += ethifname + $("input[name='WAN_TEXT_BindVlan1']")[i].value + "/" + $("input[name='WAN_TEXT_BindVlan1']")[i].value;
            }

            if($("input[name='WAN_TEXT_BindVlan2']")[i].value != "")
            {
                this.setVlanList += ethifname + $("input[name='WAN_TEXT_BindVlan2']")[i].value + "/" + $("input[name='WAN_TEXT_BindVlan2']")[i].value;
            }

            if($("input[name='WAN_TEXT_BindVlan3']")[i].value != "")
            {
                this.setVlanList += ethifname + $("input[name='WAN_TEXT_BindVlan3']")[i].value + "/" + $("input[name='WAN_TEXT_BindVlan3']")[i].value;
            }
            
            if($("input[name='WAN_TEXT_BindVlan4']")[i].value != "")
            {
                this.setVlanList += ethifname + $("input[name='WAN_TEXT_BindVlan4']")[i].value + "/" + $("input[name='WAN_TEXT_BindVlan4']")[i].value;
            }   
        }
      
   }   
    return true;    
}

this.saveWanIfName= function()
{
    if ($("#WAN_SEL_WanLinkName").val() < 8)
    {
        var connId = this.getConnId($("#WAN_SEL_WanLinkName").val());
        
        if (-1 == connId)
        {
            jsonObjPush("wanIfName", "");
        }
        else
        {
            jsonObjPush("wanIfName", this.wanConn[connId].wanIfName);
        }
    }

    return true;
}

this.saveServMode= function()
{
    var servModeMask = 0;
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    var serviceModeBridgeVal = $("#WAN_SEL_ServiceModeBridge").val();
    var serviceModeRouteVal = $("#WAN_SEL_ServiceModeRoute").val();
    
    if(connModeVal == "bridge")
    {
        if(serviceModeBridgeVal == 7)
        {
            servModeMask = (1 << 3);
        }
        else
        {
            servModeMask = (1 << 1);
        }
    }
    else 
    {           
        switch(parseInt(serviceModeRouteVal))           
        {
            case 0:
                servModeMask = (1 << 0) | (1 << 1) | (1 << 2);
                break;
                
            case 1:
                servModeMask = (1 << 0);
                break;
                
            case 2:
                servModeMask = (1 << 0) | (1 << 2);
                break;
                
            case 3:
                servModeMask = (1 << 0) | (1 << 1);
                break;
                
            case 4:
                servModeMask = (1 << 2);
                break;
                
            case 5:
                servModeMask = (1 << 1) | (1 << 2);
                break;

            case 7:
                servModeMask = (1 << 3);
                break;
                
            default:
                servModeMask = (1 << 1);
                break;              
        }
        
        if((servModeMask & 0x2) && ($("#WAN_SEL_WanIpMode").val() >0))
            jsonObjPush("enblgw6", "1");
        else
            jsonObjPush("enblgw6", "0");
    }
    
    jsonObjPush("servModeMask", servModeMask);
    return true;
}

this.saveBindPort= function()
{
    var i;
    var lanInterfaceMask = 0;
    
    $.each($("input[name='WAN_CHX_LanPort']"), function(idx, elm){
        var maskMoveBits = 0;
        if (elm.checked)
        {
            $.each(currentPageInst.lanIfNameList, function(idx, lanIf){
                if (elm.value == lanIf.lanIfName)
                {
                    maskMoveBits = idx;
                    return ;
                }
            });
            lanInterfaceMask |= (1 << maskMoveBits);
        }
    });
  
    jsonObjPush("lanInterfaceMask", lanInterfaceMask);
    return true;
}

this.saveNat= function()
{
    var enblNat;
    var enblFullcone;
    var enblFirewall = 1;
    
    enblNat =  ($("#WAN_CHX_Nat").attr("checked") == "checked") ? 1 : 0;
    enblFullcone = ($("#WAN_CHX_FullConeNat").attr("checked") == "checked") ? 1 : 0;
    
    jsonObjPush("enblNat", enblNat);
    jsonObjPush("enblFullcone", enblFullcone);
    jsonObjPush("enblFirewall", enblFirewall);

    return true;
}

this.saveVlan= function()
{
	$("#WAN_TEXT_VlanId").change();
	var checkObjArray = new Array();
    checkObjArray.push($("#WAN_TEXT_VlanId"));
	if (!checkValid(null, checkObjArray))
	{
		return false;
	}
	
    var enVlanMux;
    var vlanMuxPr;
    var vlanMuxId;

    enVlanMux = ($("#WAN_CHX_Vlan").attr("checked") == "checked") ? 1 : 0;
    
    if ($("#WAN_TEXT_VlanId").val() == "")
    {
        vlanMuxId = enVlanMux ? 0 : -1;
    }
    else
    {
        vlanMuxId = $("#WAN_TEXT_VlanId").val();
    }

    if ($("#WAN_SEL_D8021").val() == "")
    {
        vlanMuxPr = enVlanMux ? 0 : -1;
    }
    else
    {
        vlanMuxPr = $("#WAN_SEL_D8021").val();
    }
    
    jsonObjPush("enVlanMux", enVlanMux);
    jsonObjPush("vlanMuxId", vlanMuxId);
    jsonObjPush("vlanMuxPr", vlanMuxPr);

    return true;
}

this.saveDhcpParam= function()
{
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    if(connModeVal == "route" && ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked"))
    {
        jsonObjPush("enblDhcpClnt", "1");
    }
    else
    {
        jsonObjPush("enblDhcpClnt", "0");
    }
    
    return true;
}

this.saveIpAddr= function()
{
    var wanIpAddress;
    var wanSubnetMask;
    var defaultGateway;
    var dnsPrimary;
    var dnsSecondary;
    
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    if(connModeVal != "route" || ($("input[name='WAN_RADIO_WanIpModeSel'][value='static']").attr("checked") != "checked"))
    {
        return true;
    }

    wanIpAddress    = $("#WAN_TEXT_IpAddr").val();
    wanSubnetMask   = $("#WAN_TEXT_NetMask").val();
    defaultGateway  = $("#WAN_TEXT_DefGW").val();
    dnsPrimary      = $("#WAN_TEXT_FirstDns").val();
    dnsSecondary    = $("#WAN_TEXT_SecondDns").val();
    
    jsonObjPush("wanIpAddress", wanIpAddress);
    jsonObjPush("wanSubnetMask", wanSubnetMask);
    jsonObjPush("defaultGatewayList", defaultGateway);
    jsonObjPush("dnsPrimary", dnsPrimary);
    jsonObjPush("dnsSecondary", dnsSecondary);
    
    return true;
}

this.savePppParam= function()
{
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    if(connModeVal != "route" || ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") != "checked"))
    {
        return true;
    }
    
    if ($("#WAN_CHX_PppToBridge").attr("checked") == "checked")
    {
        jsonObjPush("pppToBridge", "1");
        jsonObjPush("enblPppRtProxy", "0");
        jsonObjPush("pppProxyMaxUser", "0");
    }
    else if ($("#WAN_CHX_PppoeProxy").attr("checked") == "checked")
    {   
        var i,lanport = false;
        for(i = 0; i < 8; i++)
        {
            if($("input[name='WAN_CHX_LanPort']")[i].checked)
            {
                lanport = true;
                break;
            }
        }
    
        if (!lanport)
        {
            alert(getTagTextFromXmlDoc("wanPppProxyPortBindWarn")); //代理必须绑定端口
            return false;
        }
    
        jsonObjPush("pppToBridge", "0");
        jsonObjPush("enblPppRtProxy", "1");
        jsonObjPush("pppProxyMaxUser", parseInt($("#WAN_TEXT_PppoeProxyNumber").val()));    
    }
    else
    {
        jsonObjPush("pppToBridge", "0");
        jsonObjPush("enblPppRtProxy", "0");
        jsonObjPush("pppProxyMaxUser", "0");
    }

    jsonObjPush("pppUserName", encodeURI($("#WAN_TEXT_UserName").val()));
    jsonObjPush("pppPassword", encodeURI($("#WAN_INPUT_UserPassword").val()));
    jsonObjPush("pppServerName", encodeURI($("#WAN_TEXT_ServerName").val()));
    
    if ($("#WAN_SEL_DialMode").val() == "autoDial")
    {
        jsonObjPush("enblOnDemand", "0");
        jsonObjPush("pppTimeOut", "0");
    }
    else
    {
        jsonObjPush("enblOnDemand", "1");
        jsonObjPush("pppTimeOut", $("#WAN_TEXT_DisconnectTime").val());
    }
    
    return true;
}

this.saveConnType= function()
{
    var wanConnType;
    
    var upStreamModeVal = $("#WAN_SEL_UpStreamMode").val();
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    with (document.forms[0])
    {
        if(upStreamModeVal == 2)    //VDSL
        {
            if(connModeVal == "bridge")
            {
                wanConnType = 3
            }
            else
            {
                if ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") == "checked")
                {
                    wanConnType = 0;
                }
                else if ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked")
                {
                    wanConnType = 2;
                }
                else
                {
                    wanConnType = 6;
                }
            }
        }
        else if(upStreamModeVal == 1)   //ADSL
        {
            if(connModeVal == "bridge")
            {
                wanConnType = 3
            }
            else
            {
                if ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") == "checked")
                {
                    wanConnType = 0;
                }
                else if ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked")
                {
                    wanConnType = 2;
                }
                else
                {
                    wanConnType = 6;
                }
            }
        }
        else if(upStreamModeVal == 4)   //LAN
        {
            if(connModeVal == "bridge")
            {
                wanConnType = 13;
            }
            else
            {
                if ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") == "checked")
                {
                    wanConnType = 12;
                }
                else if ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked")
                {
                    wanConnType = 11;
                }
                else
                {
                    wanConnType = 10;
                }
            }   
            
            jsonObjPush("wanL2IfName", this.lanl2inf);
            jsonObjPush("connMode", "1");       
        }
        else if(upStreamModeVal == 8)   //GPON
        {
            if(connModeVal == "bridge")
            {
                wanConnType = 3
            }
            else
            {
                if ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") == "checked")
                {
                    wanConnType = 0;
                }
                else if ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked")
                {
                    wanConnType = 2;
                }
                else
                {
                    wanConnType = 6;
                }
            }
            
            jsonObjPush("wanL2IfName", this.gponl2inf);
                
            if($("#WAN_CHX_Vlan").attr("checked") == "checked")
            {
                jsonObjPush("connMode", "1");   
            }
            else
            {
                jsonObjPush("connMode", "0");   
            }
        }
        else if(upStreamModeVal == 32)  //EPON
        {
            if(connModeVal == "bridge")
            {
                wanConnType = 3
            }
            else
            {
                if ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") == "checked")
                {
                    wanConnType = 0;
                }
                else if ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked")
                {
                    wanConnType = 2;
                }
                else
                {
                    wanConnType = 6;
                }
            }
            
            jsonObjPush("wanL2IfName", this.gponl2inf);
                
            if($("#WAN_CHX_Vlan").attr("checked") == "checked")
            {
                jsonObjPush("connMode", "1");   
            }
            else
            {
                jsonObjPush("connMode", "0");   
            }
        }
        else if (upStreamModeVal == 16)
        {
            if(connModeVal == "bridge")
            {
                wanConnType = 3
            }
            else
            {
                if ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") == "checked")
                {
                    wanConnType = 0;
                }
                else if ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked")
                {
                    wanConnType = 2;
                }
                else
                {
                    wanConnType = 6;
                }
            }

            jsonObjPush("wanL2IfName", this.lanl2inf);
                
            if($("#WAN_CHX_Vlan").attr("checked") == "checked")
            {
            jsonObjPush("connMode", "1");   
            }
            else
            {
            jsonObjPush("connMode", "0");   
            }       
        }
        else
        {
            alert(getTagTextFromXmlDoc("wanUsInvalidWarn"));
            return 0;
        }
    
        jsonObjPush("upStreamMode", upStreamModeVal);
        
        if(upStreamModeVal == 4)
        {
            jsonObjPush("enblEnetWan", "1");
        }
        else
        {
            jsonObjPush("enblEnetWan", "0");
        }
        
        if(upStreamModeVal == 1)    //ADSL
        {
            /*
            if(0 > vpi.value || 255 < vpi.value)  
            {
                alert("VPI 超出范围[0-255]!");
                return 0;
            }
            if(32 > vci.value || 65535 < vci.value) 
            {
                alert("VCI 超出范围[32-65535]!");
                return 0;
            }
        
            loc += "&atmVpi=" + vpi.value + "&atmVci=" + vci.value;

            loc += "&atmServiceCategory=" + serviceCat.value;
            if (serviceCat.value != 'UBR') {
                if ( isNaN(parseInt(peakCellRate.value)) == true) {
                    alert('峰值信元速率 "' + peakCellRate.value + '" 是非法的.');
                    return;
                }
                peak = parseInt(peakCellRate.value);
                if ( peak <= 9 || peak > pcrMax ) {
                    alert('峰值信元速率 "' + peakCellRate.value + '"超出范围[10-' + pcrMax + '].');
                    return;
                }
                loc += "&atmPeakCellRate=" + peakCellRate.value;
            } 
            else
                loc += "&atmPeakCellRate=0";

            if (serviceCat.value == "VBR-nrt" || serviceCat.value == "VBR-rt") {
                if ( isNaN(parseInt(sustainableCellRate.value)) == true) {
                    alert('持续信元速率 "' + sustainableCellRate.value + '" 是非法的.');
                    return;
                }
                sustainable = parseInt(sustainableCellRate.value);
                if ( sustainable <= 9 || sustainable > pcrMax ) {
                    alert('持续信元速率 "' + sustainableCellRate.value + '" 超出范围[10-' + pcrMax + '].');
                    return;
                }
                if ( sustainable >= peak) {
                    alert('持续信元速率 "' + sustainableCellRate.value + '" 必须小于峰值信元速率');
                    return;
                }
                if ( isNaN(parseInt(maxBurstSize.value)) == true) {
                    alert('最大突发信元大�?"' + maxBurstSize.value + '" 是非法的.');
                    return;
                }
                maximum = parseInt(maxBurstSize.value);
                if ( maximum <= 0 || maximum > 1000000 ) {
                    alert('最大突发信元大�?"' + maxBurstSize.value + '" 超出范围[1-1000000].');
                    return;
                }
                loc += "&atmSustainedCellRate=" + sustainableCellRate.value;
                loc += "&atmMaxBurstSize=" + maxBurstSize.value;
            } 
            else {
                loc += "&atmSustainedCellRate=0";
                loc += "&atmMaxBurstSize=0";
            }

            //封装方式
            loc += "&encapMode=" + encSel.value;
            */

        }
        
        jsonObjPush("ntwkPrtcl", wanConnType);

        if($("#WAN_SEL_WanLinkName").val() < 8)
        {
            var connId = this.getConnId($("#WAN_SEL_WanLinkName").val());
            jsonObjPush("oldNtwkPrtcl", this.wanConn[connId].wanConType);
        }
    }

    return true;
}

this.saveIpv6= function(mode)
{   
    var connId;
    var ipModeVal = $("#WAN_SEL_WanIpMode").val();
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    
    if (connModeVal != "route")
    
    if($("#WAN_SEL_WanLinkName").val() == 8)
    {
        connId = this.getFreeConnId();
    }
    else
    {
        connId = parseInt(("select[name='wanLinkName']").val()) + 1;    
    }
    
    if (ipModeVal > 0)
    {
        if (ipModeVal > 1)
        {
            jsonObjPush("enblv6", "1");
            jsonObjPush("enblv4", "1");
        }
        else
        {
            jsonObjPush("enblv6", "1");
            jsonObjPush("enblv4", "0");
        }
        
        if (($("input[name='WAN_RADIO_WanIpModeSel'][value='static']").attr("checked") == "checked") 
            && connModeVal == "route")
        {
            jsonObjPush("dns6Type", "Static");
            jsonObjPush("dns6Pri", $("#WAN_TEXT_Dns6Primary").val());
            jsonObjPush("dns6Sec", $("#WAN_TEXT_Dns6Secondary").val());
            jsonObjPush("wanAddr6", $("#WAN_TEXT_WanAddress6").val());
            jsonObjPush("wanAddr6PrefixLen", $("#WAN_TEXT_WanSubnetPrefixLen").val());
        }
        else
        {
            jsonObjPush("dns6Type", "DHCP");
            if (($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked") 
             && connModeVal == "route")
            {
                jsonObjPush("wanAddr6Type", "DHCP");
            }
        }

        if ($("#WAN_CHX_Dsliteauto").attr("checked") == "checked")
        {
            jsonObjPush("enabledslite","1");
            if ($("#WAN_CHX_Dslitemanu").attr("checked") == "checked")
            {
                jsonObjPush("dslitemode", "1");
                jsonObjPush("dsliteremodeaddr", $("#WAN_TEXT_RemoteAddress6").val());
            }
			else
            {
                jsonObjPush("dslitemode", "0");
            }
        }
        else
        {
            jsonObjPush("enabledslite","0");
            jsonObjPush("dslitemode", "0");
        }
        
        if ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") != "checked") 
        {
            jsonObjPush("wanGtwy6", $("#WAN_TEXT_WanGateway6").val());
            
            if ($("input[name='WAN_RADIO_WanIpModeSel'][value='dhcp']").attr("checked") == "checked")
            {
                if ($("#WAN_CHX_Enblunnumbered").attr("checked") == "checked")
                {
                    jsonObjPush("unnumberedModel", "1");
                }
                else
                {
                    jsonObjPush("unnumberedModel", "0");
                }
            }
            else
            {
                jsonObjPush("unnumberedModel", "0");
            }
        }
        else
        {
            if ($("#WAN_CHX_Enblunnumbered").attr("checked") == "checked")
            {
                jsonObjPush("unnumberedModel", "1");
            }
            else
            {
                jsonObjPush("unnumberedModel", "0");
            }
            
        }
        
        if ($("#WAN_CHX_EnblPD").attr("checked") == "checked")
        {
            jsonObjPush("enblPD", "1");
        }
        else
        {
            jsonObjPush("enblPD", "0");
        }
            
        jsonObjPush("enblrapid", "0");
        
    }
    else
    {
        jsonObjPush("enblv6", "0");
        jsonObjPush("enblv4", "1");
    }
                
    return true;
}

this.wanCheckValid= function()
{
    var checkObjArray = new Array();
    checkObjArray.push($($("#WAN_TEXT_Mtu")));
    
    if ($("#WAN_CHX_Vlan").attr("checked") == "checked")
    {
        checkObjArray.push($("input[name='vlanId']"));
    }
    
    //check ppppoe
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    if (connModeVal == "route" && ($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked") == "checked"))
    {
        checkObjArray.push($("#WAN_TEXT_UserName"));
        checkObjArray.push($("#WAN_INPUT_UserPassword"));
        checkObjArray.push($("#WAN_TEXT_ServerName"));
        
        if ($("#WAN_CHX_PppoeProxy").attr("checked") == "checked")
        {
            checkObjArray.push($("#WAN_TEXT_PppoeProxyNumber"));
        }

        
        if ($("#WAN_SEL_DialMode").val() == "adaptDial")
        {
            checkObjArray.push($("#WAN_TEXT_DisconnectTime"));
        }
    }
    
    var ipModeVal = $("#WAN_SEL_WanIpMode").val();
    
    if(connModeVal == "route" && ($("input[name='WAN_RADIO_WanIpModeSel'][value='static']").attr("checked") == "checked"))
    {
        if (ipModeVal != 1) 
        {
            checkObjArray.push($("#WAN_TEXT_IpAddr"));
            checkObjArray.push($("#WAN_TEXT_NetMask"));
            checkObjArray.push($("#WAN_TEXT_DefGW"));
            checkObjArray.push($("#WAN_TEXT_FirstDns"));
            checkObjArray.push($("#WAN_TEXT_SecondDns"));
        }
    }

    if (ipModeVal > 0)
    {
        if (($("input[name='WAN_RADIO_WanIpModeSel'][value='static']").attr("checked") == "checked") 
            && connModeVal == "route")
        {
            checkObjArray.push($("#WAN_TEXT_Dns6Primary"));
            checkObjArray.push($("#WAN_TEXT_Dns6Secondary"));
            checkObjArray.push($("#WAN_TEXT_WanAddress6"));
            checkObjArray.push($("#WAN_TEXT_WanSubnetPrefixLen"));
            
            if ($("#WAN_CHX_Dslitemanu").attr("checked") == "checked")
            {
                checkObjArray.push($("#WAN_TEXT_RemoteAddress6"));
            }
        }
    }
    
    return checkValid(null, checkObjArray);
}


this.delWanConnCfg= function()
{
    if (parseInt($("#WAN_SEL_WanLinkName").val()) == 8) 
    {
        return;
    }
    
    var postData; 
    jsonObjInit();
    
    var connModeVal = $("#WAN_SEL_WanConnMode").val();
    var serviceModeRouteVal = $("#WAN_SEL_ServiceModeRoute").val();
    
    if(connModeVal != "bridge" && this.wanServModeLimit == '1')
    {
        if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
        {
            alert(getTagTextFromXmlDoc("wanNotEditTr69Warn")); //"不能编辑TR069相关WAN 连接!"

        }   
        else
        {
            jsonObjPush("wanAction", "remove");
        }
    }
	else if (connModeVal != "bridge" && '1' == this.supportcard)
    {
        if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
        {
            alert(getTagTextFromXmlDoc("wanNotDelTr69Warn"));
        }   
        else
        {
            jsonObjPush("wanAction", "remove");
        }
    }
    else
    {  
        jsonObjPush("wanAction", "remove");
    }
    
    if(!this.saveWanIfName())
    {
        return;
    }   
    
    postData = jsonObjEnd();
    disableSubmit($("#BTN_Apply"), $("#BTN_Del"));
    setCfg("wanCfgSet.cmd", postData, updateAllCfg);
}


this.saveManualConnect = function(connect)
{   
    jsonObjPush("enablWan", "1");   
}


this.saveWanConnCfg= function()
{
    var postData; 
    jsonObjInit();
    var connMode = $("#WAN_SEL_WanConnMode").val();
    var serviceModeRouteVal = $("#WAN_SEL_ServiceModeRoute").val();
    var serviceModeBridgeVal = $("#WAN_SEL_ServiceModeBridge").val();
    
    if(parseInt($("#WAN_SEL_WanLinkName").val()) == 8) //add new
    {
        if(this.checkSameInternet())
        {
            alert(getTagTextFromXmlDoc("wanSameInternetWarn")); //the same wan has exist.
            return;
        }
        
        if (this.checkSameVID())
        {
            alert(getTagTextFromXmlDoc("wanSameVidWarn")); 
            return;
        }

        if(connMode != "bridge" && this.wanServModeLimit == '0' && this.havetr069)
        {
            if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
            {
                alert(getTagTextFromXmlDoc("wanAddTr69Warn")); //can't add more tr069 wan
                return;
            }
        }
        
        if(connMode != "bridge" && this.haveVoip)
        {
            if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 2) || (serviceModeRouteVal == 4) ||(serviceModeRouteVal == 5))
            {
                alert(getTagTextFromXmlDoc("wanAddVoipWarn")); //can't add more Voip wan
                return;
            }
        }
        
        jsonObjPush("wanAction", "add");
    }
    else //edit
    {
        if (this.checkSameVID())
        {
            alert(getTagTextFromXmlDoc("wanSameVidWarn")); 
            return;
        }

        if((connMode != "bridge") && this.wanServModeLimit == '1')
        {
            if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
            {
                alert(getTagTextFromXmlDoc("wanNotEditTr69Warn")); //can't edit tr069 wan
                return;
            }   
        }
        
        if (connMode != "bridge" && this.havetr069 && (this.tr069WanIdx != $("#WAN_SEL_WanLinkName").val()))
        {
            //if tr069 wan has existed, there would be alert when changing other wans to tr069 wan.
            if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 1) || (serviceModeRouteVal == 2) ||(serviceModeRouteVal == 3))
            {
                alert(getTagTextFromXmlDoc("wanAddTr69Warn")); //can't add more tr069 wan
                return;
            }   
        }
        
        if (connMode != "bridge" && this.haveVoip && (this.voipWanIdx != $("#WAN_SEL_WanLinkName").val()))
        {
            //if tr069 wan has existed, there would be alert when changing other wans to tr069 wan.
            if((serviceModeRouteVal == 0) || (serviceModeRouteVal == 2) || (serviceModeRouteVal == 4) ||(serviceModeRouteVal == 5))
            {
                alert(getTagTextFromXmlDoc("wanAddVoipWarn")); //can't add more voip wan
                return;
            }   
        }
        
        jsonObjPush("wanAction", "edit");
    }
    
    if (!this.wanCheckValid())
    {
        return ;
    }
    
    if(!this.saveWanIfName())
    {
        return;
    } 	
    //mtu
    jsonObjPush("maxMtu", $("#WAN_TEXT_Mtu").val());

    if(!this.saveServMode() || !this.saveBindPort())
    {
        return;
    }

    if(!this.saveNat() || !this.saveVlan())
    {
        return;
    }
    
    if (this.buildIpv6 == "1" && $("#WAN_SEL_WanIpMode").val() == 1) //for ipv6
    {
        if(!this.saveDhcpParam() || !this.savePppParam())
        {
            return;
        }
    }
    else 
    {
         if(!this.saveDhcpParam() || !this.saveIpAddr() || !this.savePppParam())
        {
            return;
        }
    }
    
    if(!this.saveConnType())
    {
        return;
    }
    
    if (this.buildIpv6 == "1")
    {
        if(connMode != "bridge") 
        {
            if(!this.saveIpv6(0))
                return;
        }
        else    
        {
            if ($("#WAN_SEL_WanIpMode").val() > 0)
            {
                jsonObjPush("enblv6", "1");
                if ($("#WAN_SEL_WanIpMode").val() > 1)
                    jsonObjPush("enblv4", "1");
                else
                    jsonObjPush("enblv4", "0");
            }
            else 
            {
                jsonObjPush("enblv6", "0");
                jsonObjPush("enblv4", "1");
            }
        }
    }
    else
    {
        if ($("#WAN_SEL_WanIpMode").val() < 0)
        {
            jsonObjPush("enblv4", "0");
        }
        else 
        {
            jsonObjPush("enblv4", "1");
        }
    }
    
    /*add a noBridge & including Internet wan, default enable proxy, or disable proxy*/
    if ($("#WAN_SEL_WanLinkName").val() == 8 && connMode != "bridge")
    {
        if(serviceModeRouteVal == 1 || serviceModeRouteVal == 2 || serviceModeRouteVal == 4)
        {
            jsonObjPush("enblIgmp", "0");
            jsonObjPush("enblMld", "0");
        }
        else
        {
            jsonObjPush("enblIgmp", "1");
            jsonObjPush("enblMld", "1");
        }
    }

    if ($("#WAN_SEL_WanLinkName").val() == 8 && connMode == "bridge")
    {
        jsonObjPush("enblIgmp", "0");
        jsonObjPush("enblMld", "0");
    }
         
    if ($("#WAN_SEL_WanLinkName").val() != 8)
    {
        var Id = this.getConnId($("#WAN_SEL_WanLinkName").val());

        if(connMode != "bridge" && this.wanConn[Id].wanConType == 3)
        {
        /*if wan is changed from bridge to internet route, enable proxy*/
            if(serviceModeRouteVal == 1 || serviceModeRouteVal == 2 || serviceModeRouteVal == 4)
            {
                jsonObjPush("enblIgmp", "0");
                jsonObjPush("enblMld", "0");
            }
            else
            {
                jsonObjPush("enblIgmp", "1");
                jsonObjPush("enblMld", "1");
            }
        }
        else if(connMode != "bridge" && this.wanConn[Id].name.indexOf("INTERNET") == -1)
        {
        /*if wan is changed from tr069 to internet route, enable proxy*/
            if(serviceModeRouteVal == 1 || serviceModeRouteVal == 2 || serviceModeRouteVal == 4)
            {
                jsonObjPush("enblIgmp", "0");
                jsonObjPush("enblMld", "0");
            }
            else
            {
                jsonObjPush("enblIgmp", "1");
                jsonObjPush("enblMld", "1");
            }
        }
        else if (connMode == "bridge")
        {
        /*if wan is changed from route to bridge, disable proxy*/
            jsonObjPush("enblIgmp", "0");
            jsonObjPush("enblMld", "0");
        }
        else
        {
        /*otherwise, read from mdm*/
            jsonObjPush("enblIgmp", this.wanConn[Id].enableIgmp);
            jsonObjPush("enblMld", this.wanConn[Id].enableMld);
        }
    }

    /*add vlan-data-bind to other wan*/
    if(enalbeVlanBind == 1 &&  connMode == "bridge" && serviceModeBridgeVal == 7)
    {
        jsonObjPush("ctLanVlanMode", "1");
        
        if(this.checkVlanIdadd()==false)
        {
            return;
        }

        jsonObjPush("ctLanVlanList", this.setVlanList);
    }
    else 
    {
        jsonObjPush("ctLanVlanMode", "0");
    }
    
    this.saveManualConnect(this.enableWan);
    postData = jsonObjEnd();
    disableSubmit($("#BTN_Apply"), $("#BTN_Del"));
    setCfg("wanCfgSet.cmd", postData, updateAllCfg);

}


this.registerEvent= function()
{
    $("#WAN_SEL_UpStreamMode").change(function(){currentPageInst.changeUpStreamMode(this.value)});
    $("#WAN_SEL_WanLinkName").change(function(){currentPageInst.changeLink(this.value)});
    $("#WAN_SEL_WanConnMode").change(function(){currentPageInst.changeConnMode(this.value)});
    $("#WAN_SEL_WanIpMode").change(function(){currentPageInst.enableIPv6()});
    
    $("input[name='WAN_RADIO_WanIpModeSel']").click(function(){currentPageInst.changeIpMode(this.value)});
    $("#WAN_CHX_NoPppoeProxy").click(function(){currentPageInst.disablePppoeProxy()});
    $("#WAN_CHX_PppoeProxy").click(function(){currentPageInst.enablePppoeProxy()});
    $("#WAN_CHX_PppToBridge").click(function(){currentPageInst.enablePppToBridge(this)});
    
    $("#WAN_CHX_Nat").click(function(){currentPageInst.enableNat();});
    $("#WAN_CHX_Vlan").click(function(){currentPageInst.enableVlan();});
    $("#WAN_TEXT_VlanId").change(function(){currentPageInst.checkVlanValid(this);});
    $("#WAN_TEXT_Mtu").change(function(){
		if($("input[name='WAN_RADIO_WanIpModeSel'][value='pppoe']").attr("checked")&&$("#WAN_SEL_WanConnMode").val() == "route"){
			currentPageInst.checkMtuValid2(this);
		}else{
			currentPageInst.checkMtuValid(this);
		}	
	});	
    
    $(".WAN_CLS_IpAddr").change(function(){currentPageInst.checkIpAddrValid(this)});
    $(".WAN_CLS_IpMask").change(function(){currentPageInst.checkIpMaskValid(this)});
    $(".WAN_CLS_Ipv6Addr").change(function(){currentPageInst.checkIpV6AddrValid(this)});
    $("#WAN_TEXT_WanSubnetPrefixLen").change(function(){currentPageInst.checkIpv6PreFixLenValid(this);});
    $("#WAN_TEXT_WanGateway6").change(function(){currentPageInst.checkIpV6AddrValid(this);});
	
    $.each($("input[name='WAN_CHX_LanPort']"), function(idx, lanPort)
    {
        if (idx < 4)
        {
            $(lanPort).click(function(){currentPageInst.portBindCheck(idx)});
        }  //not regist for wlan port 
    });
    $(".WAN_CLS_bindVlan").change(function(){currentPageInst.checkVlanCommon(this);});
    
    $("#WAN_TEXT_UserName").change(function(){currentPageInst.checkPppUserNameValid(this);});
    $("#WAN_INPUT_UserPassword").change(function(){currentPageInst.checkPppPwdValid(this);});
    $("#WAN_TEXT_ServerName").change(function(){currentPageInst.checkPppServNameValid(this);});
    $("#WAN_TEXT_PppoeProxyNumber").change(function(){currentPageInst.checkPppProxyNumValid(this);});
    $("#WAN_TEXT_DisconnectTime").change(function(){currentPageInst.checkPppIdleTimeValid(this);});
    $("#BTN_ManualConn").click(function(){currentPageInst.manualConnect(true);});    
    $("#BTN_ManualDisconn").click(function(){currentPageInst.manualConnect(false);});  
    
    $("#WAN_SEL_DialMode").change(function(){currentPageInst.checkdialMode(this.value)});
    $("#WAN_SEL_ServiceModeBridge").change(function(){currentPageInst.changeServiceMode(this.value)});
    $("#WAN_SEL_ServiceModeRoute").change(function(){currentPageInst.changeServiceMode_Service(this.value)});
    
    $("#BTN_Apply").click(function(){currentPageInst.saveWanConnCfg();});
    $("#BTN_Del").click(function(){currentPageInst.delWanConnCfg();});
    $("#WAN_CHX_Dsliteauto").click(function(){currentPageInst.showOrHideAftrManuSet();});
    $("#WAN_CHX_Dslitemanu").click(function(){currentPageInst.showOrHideStaRemIpv6Addr();});
    $("#add").click(function(){currentPageInst.buttonAdd();});
    $(".Wanone").live('click', function() {currentPageInst.EditContents(this.name);});
    $(".Wantwo").live('click', function() {currentPageInst.delContents(this.name);});
    $("#BTN_Cancel").click(function(){pageJump("kt_wan_setup.html")});
 
}


this.buttonAdd=function()
{
    $(".mainBody>div>form").css("width","618px");
    $("#NETCON_Table").hide();
    $("#NETCON_DIV_Add").hide();
    $("#NETCON_DIV_Button").hide();
    $("#editor").show();

}

this.showOrHideStaRemIpv6Addr= function()
{
    if ("checked" == $("#WAN_CHX_Dslitemanu").attr("checked"))
    {
        $("#WAN_TR_RemoteAddr6").show();
    }
    else
    {
        $("#WAN_TR_RemoteAddr6").hide();
    }
}

this.showOrHideAftrManuSet= function()
{
    if ("checked" == $("#WAN_CHX_Dsliteauto").attr("checked"))
    {
        $("#WAN_TB_Dslitemanu").show();
        $("#WAN_CHX_Dslitemanu").attr("checked", false);
        $("#WAN_TR_RemoteAddr6").hide()
    }
    else
    {
        $("#WAN_TB_Dslitemanu").hide();
    }
}


} //page end

function updateWanCfgElm(jsonObj)
{
    currentPageInst.updateWanCfgElm(jsonObj);
}

function updateAllCfg()
{
    getCfg("wanCfgGet.json", {"ctrlCfg":"1", "wanCfg":"1"}, updateWanCfgElm);
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
    this.basicClassFile = "./kt_wan_setup.js";
    this.customLv1File = "./kt_wan_setup_customlv1.js";
    this.customLv2File = "./kt_wan_setup_customlv2.js";
    this.customLv3File = "./kt_wan_setup_customlv3.js";
}

