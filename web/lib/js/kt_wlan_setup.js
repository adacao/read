var isSupport5G;

Page = function()
{
this.checkedfun = function(){
    if($("#WLAN_CHX_Enbl").attr("checked")){
        $("#ableSSID").show();
    }
    else{
        $("#ableSSID").hide();
    }
}
this.checkedfirstfun = function(){
 
    if($("#WLAN_CHX_Enbl1").attr("checked")){
        $(".NET6CO").show();
        $(".ETHINFO").show();
     }
    else {
         $(".NET6CO").hide();
         $(".ETHINFO").hide();
     }
}


//globle vars
this.loginLevel;
this.wlPhyType;
this.channel;
this.wlanCfg;
this.wlanMultiCfg;
this.g_initFlag = true;
this.customer;
this.productType;
this.ispType;
this.wlanSecCfg;
this.wlanSecMultiCfg;
this.initGlobleVars= function(jsonObj)
{
	this.loginLevel = jsonObj.ctrlCfg.loginLevel;
    this.wlanMultiCfg = jsonObj.wlanMultiCfg;
    this.wlanCfg = jsonObj.wlanCfg;
    this.customer = jsonObj.ctrlCfg.customer;
    this.wlPhyType = this.wlanCfg.wlPhyType;
    this.channel  = this.wlanCfg.wlChannel;
    this.productType = jsonObj.ctrlCfg.productType;
    this.ispType = jsonObj.ctrlCfg.ispType;
    isSupport5G = jsonObj.wlanCfg.isSupport5gWlan;
}

this.initHtmlText= function()
{
    $("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuNetWlanUse"));
	$("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("menuNetWlanSet"));
    $("#MENU_WAN_ETH_INFO").append(getTagTextFromXmlDoc("menuNetWlanSafe"));
    $("#WLSEC_SSIDindex").append(getTagTextFromXmlDoc("wlanInfoIndex"));
     $("#WLAN_TD_SsidSel").append(getTagTextFromXmlDoc("wlanSsidSel"));
    $("#WLAN_OPT_PreambleLong").append(getTagTextFromXmlDoc("wlanPreambleTypeLONG"));
    $("#WLAN_OPT_PreambleShort").append(getTagTextFromXmlDoc("wlanPreambleTypeSHORT"));
    $("#WLAN_TD_SPEED").append(getTagTextFromXmlDoc("wlanNMmcSPEED"));
    $("#WLAN_TYPE_AUTO").append(getTagTextFromXmlDoc("dhcpLanDnsAuto"));
    $("#WLSEC_TD_SSIDenable").append(getTagTextFromXmlDoc("wanWLanSSIDenable"));
    $("#WLSEC_TD_SSIDdisable").append(getTagTextFromXmlDoc("wanWLanSSIDdisable"));
    $("#WLSEC_WPSenable").append(getTagTextFromXmlDoc("wlanWPSenable"));
    $("#WLSEC_WPS_TYPE").append(getTagTextFromXmlDoc("wlanWPSmode"));
    $("#WLSEC_TD_PreShareKeyCtx").append(getTagTextFromXmlDoc("wlanSecPreShareKeyCtx"));
    $("#WLAN_LB_Enbl1").append(getTagTextFromXmlDoc("wlanEnable"));
    $("#WLAN_NET_TYPE").append(getTagTextFromXmlDoc("wlannettype"));
    $("#WLAN_TD_Channel").append(getTagTextFromXmlDoc("wlanChannel"));
    $("#WLSEC_TD_GTKRekeyCtx").append(getTagTextFromXmlDoc("wlanSecGTKRekeyCtx"));
    $("#WLWSC_SEL_Wscdisable").append(getTagTextFromXmlDoc("SystemLogDisableCtx"));
    $("#WLWSC_SEL_Wscenable").append(getTagTextFromXmlDoc("SystemLogEnableCtx"));
    $("#WLAN_TD_Band").append(getTagTextFromXmlDoc("wlanBand"));
    $("#WLAN_TD_NBwCap").append(getTagTextFromXmlDoc("wlanNBwCap"));
    $("#wlanCurNbw").append(getTagTextFromXmlDoc("wlanCurNbw"));
    $("#WLAN_TD_NCtrlsb").append(getTagTextFromXmlDoc("wlanNCtrlsb"));
    $("#WLAN_OPT_NCtrlsbOptUp").append(getTagTextFromXmlDoc("upCtx"));
    $("#WLAN_OPT_NCtrlsbOptDown").append(getTagTextFromXmlDoc("downCtx"));
    $("#wlanCurNCtrlsb").append(getTagTextFromXmlDoc("wlanCurNCtrlsb"));
    $("#WLAN_TD_NMmcsidx").append(getTagTextFromXmlDoc("wlanNMmcsidx"));
    $("#WLAN_TD_NProtection").append(getTagTextFromXmlDoc("wlanNProtection"));
    $("#WLAN_TD_NReqd").append(getTagTextFromXmlDoc("wlanNReqd"));
    
    $("#WLAN_TD_FrgThrshld").append(getTagTextFromXmlDoc("wlanwlFrgThrshld"));
    $("#WLAN_TD_RtsThrshld").append(getTagTextFromXmlDoc("wlanRtsThrshld"));
    $("#WLAN_TD_DtmIntvl").append(getTagTextFromXmlDoc("wlanDtmIntvl"));
    $("#WLAN_TD_BcnIntvl").append(getTagTextFromXmlDoc("wlanBcnIntvl"));
    $("#WLAN_TD_GlobalMaxAssoc").append(getTagTextFromXmlDoc("wlanGlobalMaxAssoc"));
    
    $("#WLAN_TD_GModeSel").append(getTagTextFromXmlDoc("wlanGModeSel")+":");
    $("#WLAN_TD_Protection").append(getTagTextFromXmlDoc("wlanProtection")+":");
    $("#WLAN_TD_RegMode").append(getTagTextFromXmlDoc("wlanRegMode")+":");
    $("#WLAN_TD_DfsPreIsm").append(getTagTextFromXmlDoc("wlanDfsPreIsm")+":");
    $("#WLAN_TD_DfsPostIsm").append(getTagTextFromXmlDoc("wlanDfsPostIsm")+":");
    $("#WLAN_TD_TpcDb").append(getTagTextFromXmlDoc("wlanTpcDb")+":");
    $("#WLAN_TD_AfterBurner").append(getTagTextFromXmlDoc("wlanAfterBurner")+":");
    $("#WLAN_OPT_AfterBurnerDisable").append(getTagTextFromXmlDoc("disableCtx"));
    $("#WLAN_OPT_AfterBurnerEnable").append(getTagTextFromXmlDoc("enableCtx"));
    $("#WLAN_CHX_Endisable").append(getTagTextFromXmlDoc("disableCtx"));
    $("#WLAN_CHX_Enenable").append(getTagTextFromXmlDoc("enableCtx"));
    
    $("#WLAN_TD_PreambleType").append(getTagTextFromXmlDoc("wlanPreambleType"));
    $("#WLAN_TD_TxPower").append(getTagTextFromXmlDoc("wlanTxPower"));
    $("#WLAN_TD_Wme").append(getTagTextFromXmlDoc("wlanWme")+":");
    $("#WLAN_OPT_WmeAuto").append(getTagTextFromXmlDoc("autoCtx"));
    $("#WLAN_OPT_WmeEnable").append(getTagTextFromXmlDoc("enableCtx"));
    $("#WLAN_OPT_WmeDisable").append(getTagTextFromXmlDoc("disableCtx"));
    
    $("#WLAN_TD_WmeNoAck").append(getTagTextFromXmlDoc("wlanWmeNoAck")+":");
    $("#WLAN_OPT_WmeNoAckDisable").append(getTagTextFromXmlDoc("disableCtx"));
    $("#WLAN_OPT_WmeNoAckEnable").append(getTagTextFromXmlDoc("enableCtx"));

    $("#WLAN_TD_WmeApsd").append(getTagTextFromXmlDoc("wlanWmeApsd")+":");
    $("#WLAN_OPT_WmeApsdDisable").append(getTagTextFromXmlDoc("disableCtx"));
    $("#WLAN_OPT_WmeApsdEnable").append(getTagTextFromXmlDoc("enableCtx"));
    
    $("#BTN_Apply").val(getTagTextFromXmlDoc("saveApplyCtx"));
    $("#btncancle").val(getTagTextFromXmlDoc("cancelCtx"));
    $("#wlanSecurityTitle").append(getTagTextFromXmlDoc("wlanSecTitle"));
	$("#WLSEC_P_Comment").append(getTagTextFromXmlDoc("wlanSecComment"));

	$("#WLSEC_OPT_AuthOpen").append(getTagTextFromXmlDoc("wlanSecAuthOpen"));
	$("#WLSEC_OPT_AuthShare").append(getTagTextFromXmlDoc("wlanSecAuthShare"));
	
	$("#WLSEC_OPT_PreauthDisable").append(getTagTextFromXmlDoc("disableCtx"));
	$("#WLSEC_OPT_PreauthEnable").append(getTagTextFromXmlDoc("enableCtx"));

	$("#WLSEC_LB_ShowCtx").append(getTagTextFromXmlDoc("wlSecShowCtx"));
	$("#WLSEC_TD_WepCtx").append(getTagTextFromXmlDoc("wlanSecWepCtx"));
	$("#WLSEC_TD_KeyLen").append(getTagTextFromXmlDoc("wlanSecKeyLen"));
	$("#WLSEC_TD_KeyIdx").append(getTagTextFromXmlDoc("wlanSecKeyIdx"));
	$("#WLSEC_TD_WepNotice").append(getTagTextFromXmlDoc("wlanSecWepNotice"));
	
	$("#BTN_BACK").attr("value", getTagTextFromXmlDoc("cancelCtx"));
	$("#BTN_SAVE").attr("value", getTagTextFromXmlDoc("saveApplyCtx"));

    $("#WLWSC_TB_DisableWscWarn").text(getTagTextFromXmlDoc("disableWscWarn"));
	$("#WLWSC_TD_WscMethod").append(getTagTextFromXmlDoc("wlanWPSmode"));
	$("#WLWSC_RADIO_WscMethodPBC").text(getTagTextFromXmlDoc("wpsButton"));
	$("#WLWSC_RADIO_WscMethodAPPIN").append(getTagTextFromXmlDoc("wlanAPPIN"));
	$("#WLWSC_RADIO_WscMethodSTAPIN").append(getTagTextFromXmlDoc("wlanSTAPIN"));
	$("#wlanWsCTitle").append(getTagTextFromXmlDoc("wlanWPSTitle"));
	$("#WLWSC_P_Comment").append(getTagTextFromXmlDoc("WLWSCComment"));
	$("#BTN_REBUILT").attr("value", getTagTextFromXmlDoc("wlanWPSRebuild"));
	$("#BTN_RESET").attr("value", getTagTextFromXmlDoc("wlanWPSDefault"));
	$("#BTN_SAVEWPS").attr("value", getTagTextFromXmlDoc("wlanSaveWPS"));
    $("#WLAN_LB_Hide").append(getTagTextFromXmlDoc("wanWLanSSIDdisable"));
    $("#WLAN_LB_Enbl").append(getTagTextFromXmlDoc("wanWLanSSIDenable"));
    $("#WLAN_OPT_Card4G").append(getTagTextFromXmlDoc("wlanCard4G"));
    $("#WLAN_OPT_Card5G").append(getTagTextFromXmlDoc("wlanCard5G"));
}
this.updateWlBand= function()
{
    var wlanBandOptTag;
    $("#WLAN_SEL_Band").empty();
    if (this.wlanCfg.wlBands == "3")
    {
        wlanBandOptTag ="<option value='2'>2.4GHz</option><option value='1'>5GHz</option>";
    }
    else if (this.wlanCfg.wlBands == "1")
    {
        wlanBandOptTag = "<option value='1'>5GHz</option>";
    }
    else
    {
        wlanBandOptTag = "<option value='2'>2.4GHz</option>";
    }
    
    $("#WLAN_SEL_Band").append(wlanBandOptTag);
    setSelectVal($("#WLAN_SEL_Band"), this.wlanCfg.wlBand);
}
this.updateSecondStageElm= function(jsonObj)
{
    var str;
    str = getTagTextFromXmlDoc("wlanCurrChannel") + ":" + jsonObj.wlanCurrInfo.currChannel;
    $("#WLAN_TD_CurrChannel").empty();
    $("#WLAN_TD_CurrChannel").append(str);
    
    str = getTagTextFromXmlDoc("wlanCurNbw") + ":" + jsonObj.wlanCurrInfo.currBw+" Mbps";
    $("#WLAN_TD_CurrNbw").empty();
    $("#WLAN_TD_CurrNbw").append(str);
    
    str = getTagTextFromXmlDoc("wlanCurNCtrlsb")+":"+ jsonObj.wlanCurrInfo.currSb;
    $("#WLAN_TD_CurrNCtrlsb").empty();
    $("#WLAN_TD_CurrNCtrlsb").append(str);
}

this.initWlNBwCapOptTag= function(wlanCfg)
{
}

this.updateChannelListOption= function(jsonObj)
{
	var channelList = jsonObj.wlanChannelList.channelList;
	var listArray = channelList.split(" ");
	//var wlNModeSel;
	var wlNBwCapSel;
	//var wlNCtrlsbSel;
	$("#WLAN_SEL_Channel").empty();
	$("#WLAN_SEL_Channel").append("<option value='0'>Auto</option>");
	for (var i in listArray)
	{
		if (listArray[i] != "")
		{
			if(this.productType == "EOC")
			{
				//wlNModeSel = $("#WLAN_SEL_Nmode").val();
				wlNBwCapSel = $("#WLAN_SEL_NBwCap").val();
				//wlNCtrlsbSel = $("#WLAN_SEL_NCtrlsb").val()

				// if(wlNModeSel == "auto")
				// {
					if(wlNBwCapSel == 1 && wlNCtrlsbSel == -1)
					{
						if(i > 3)
							$("#WLAN_SEL_Channel").append("<option value='"+listArray[i]+"'>"+listArray[i]+"</option>");
					}
					else if(wlNBwCapSel == 1 && wlNCtrlsbSel == 1)
					{
						if(i < 9)
							$("#WLAN_SEL_Channel").append("<option value='"+listArray[i]+"'>"+listArray[i]+"</option>");
					}
					else if (wlNBwCapSel == 0)
					{
						$("#WLAN_SEL_Channel").append("<option value='"+listArray[i]+"'>"+listArray[i]+"</option>");
					}
				// }
				// else
				// {
				// 	$("#WLAN_SEL_Channel").append("<option value='"+listArray[i]+"'>"+listArray[i]+"</option>");
				// }
			}
			else
			{
				$("#WLAN_SEL_Channel").append("<option value='"+listArray[i]+"'>"+listArray[i]+"</option>");				
			}
		}
	}

	if (1&&this.wlanCfg)//(this.g_initFlag)
	{
		setSelectVal($("#WLAN_SEL_Channel"), this.wlanCfg.wlChannel);
	}
	else
	{
		if ($("#WLAN_SEL_NBwCap").val() == "1")
		{
			$("#WLAN_SEL_Channel")[0].selectedIndex = 1;
		}
	}
	this.g_initFlag = false;

	//if(this.productType != "EOC")
		//$("#WLAN_SEL_NCtrlsb").attr("disabled", ($("#WLAN_SEL_Channel").val() == '0') ? true : false);
}


this.getBwValue= function()
{
    if ($("#WLAN_SEL_Channel").val() == '0')
    {
        return '0';
    }
    else
    {
        var sel_band = $("#WLAN_SEL_Band").val();
        var sel_nbw_cap = $("#WLAN_SEL_NBwCap").val();
        if (((sel_band == "1") && ((sel_nbw_cap == "1") || (sel_nbw_cap == "2"))) || 
        ((sel_band == "2") && (sel_nbw_cap == "1"))) 
        {
            bw = "40";
        }
        else
        {
            bw = "20";
        }
    }
    return bw;
}

/* for nPhy rate*/
this.updateNrateList= function()
{
    var mcsRateTab = {
        // ['6.5','13.5'],  /* MCS  0 */
        // ['13','27'],  /* MCS  1 */
        // ['19.5','40.5'],  /* MCS  2 */
        // ['26','54'],  /* MCS  3 */
        // ['39','81'],  /* MCS  4 */
        // ['52','108'], /* MCS  5 */
        // ['58.5','121.5'], /* MCS  6 */
        // ['65','135'], /* MCS  7 */
        // ['13','27'],  /* MCS  8 */
        // ['26','54'],  /* MCS  9 */
        // ['39','81'],  /* MCS 10 */
        // ['52','108'], /* MCS 11 */
        // ['78','162'], /* MCS 12 */
        // ['104','216'], /* MCS 13 */
        // ['117','243'], /* MCS 14 */
        // ['130','270'], /* MCS 15 */
        // ['19.5','40.5'],  /* MCS 16 */
        // ['39','81'],  /* MCS 17 */
        // ['58.5','121.5'], /* MCS 18 */
        // ['78','172'], /* MCS 19 */
        // ['117','243'], /* MCS 20 */
        // ['156','324'], /* MCS 21 */
        // ['175.5','364.5'], /* MCS 22 */
        // ['195','405'], /* MCS 23 */
        // ['26','54'],  /* MCS 24 */
        // ['52','108'], /* MCS 25 */
        // ['78','162'], /* MCS 26 */
        // ['104','216'], /* MCS 27 */
        // ['156','324'], /* MCS 28 */
        // ['208','432'], /* MCS 29 */
        // ['234','486'], /* MCS 30 */
        // ['260','540'], /* MCS 31 */
        // ['0','6']  /* MCS 32 */
};
    var mcsidx = [-1, -2, 0, 1, 2, 3, 4, 5, 6];
    var bw = this.getBwValue();
    
    $("#WLAN_SEL_NMmcsidx").empty();
    $("#WLAN_SEL_NMmcsidx").append("<option value='-1'>Auto</option>");
    for (var i in mcsidx)
    {
         if ((6 == mcsidx[i]) && ('20' == bw || '0' == bw))
        {
            continue;
        }
        if (-2 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='-2'>MSC0</option>");
        }
        else if (0 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='0'>MSC1</option>");
        }
        else if (1 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='1'>MSC2</option>");
        }
        else if (2 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='2'>MSC3</option>");
        }
        else if (3 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='3'>MSC4</option>");
        }
        else if (4 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='4'>MSC5</option>");
        }
        else if (5 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='5'>MSC6</option>");
        }
        else if (6 == mcsidx[i])
        {
            $("#WLAN_SEL_NMmcsidx").append("<option value='6'>MSC7</option>");
        }
        // else
        // {
        //     $("#WLAN_SEL_NMmcsidx").append("<option value='"+mcsidx[i]+"'>"+"</option>");
        // }

        // if ((6 == mcsidx[i]) && ('20' == bw || '0' == bw))
        // {
        //     continue;
        // }
        // if (-2 == mcsidx[i])
        // {
        //     $("#WLAN_SEL_NMmcsidx").append("<option value='-2'>MSC0</option>");
        // }
        // else
        // {
        //     if ((mcsidx[i] < 0) || (mcsidx[i] > 6))
        //         continue ;

        //     var optVal;
        //     if (bw == '40')
        //     {
        //         optVal = mcsRateTab[mcsidx[i]][1]+" Mbps";
        //     }
        //     else if (bw == '20')
        //     {
        //         optVal = mcsRateTab[mcsidx[i]][0]+" Mbps";
        //     }
        //     else if (bw == '0')
        //     {
        //         optVal = mcsRateTab[mcsidx[i]][0]+" Mbps or "+mcsRateTab[mcsidx[i]][1]+" Mbps";
        //     }
        //     $("#WLAN_SEL_NMmcsidx").append("<option value='"+mcsidx[i]+"'>"+optVal+"</option>");
        // }
    }
}
this.hideAllElements= function()
{
	$("#WLSEC_TB_WpaD").hide();
	$("#WLSEC_TB_WpaPreShareKey").hide();
	$("#WLSEC_TB_ShowPassword").hide();
	$("#WLSEC_TB_WpaGTKRekey").hide();
	$("#WLSEC_TB_Radius").hide();
	$("#WLSEC_TB_Preauth").hide();
	$("#WLSEC_TB_NetReauth").hide();
	$("#WLSEC_TB_WepD").hide();
	$("#WLSEC_TB_KeyInfo").hide();
	$("#WLSEC_DIV_WscAddClient").hide();
	$("#WLSEC_TB_WscStaPin").hide();
}

this.updateWlWpaOption= function(arrayItem)
{
	$("#WLSEC_SEL_Wpa").empty();
	for (var i in arrayItem) {	
		$("#WLSEC_SEL_Wpa").append("<option value='"+arrayItem[i].toLowerCase()+"'>"+arrayItem[i]+"</option>");
	}
}

this.encrypChange= function()
{
	var cwep =  $("#WLSEC_SEL_Wep").val();
	var authMode = $("#WLSEC_SEL_SecAuthMode").val();
	if (cwep == "enabled") 
	{
		this.hideWlKeysWarn(false);
		$("#WLSEC_TB_KeyInfo").show();
		if (authMode != "open" && authMode != "shared") 
		{
			$("input[name='WLSEC_TEXT_Keys']").attr("disabled", true);	
		}
		else 
		{
			$("input[name='WLSEC_TEXT_Keys']").attr("disabled", false);

			
		}
	} 
	else 
	{
		this.hideWlKeysWarn(true);
		$("#WLSEC_TB_KeyInfo").hide();
	}
}

this.updateAuthMode= function(initFlag)
{
	var disableWepD = false;
	var authMode = $("#WLSEC_SEL_SecAuthMode").val();
	var i, algos;
	
	this.hideAllElements();	
	switch (authMode) 
	{
		case 'open':
            $("#WLSEC_TB_WepD").show();
			$("#WLSEC_TB_KeyInfo").show();
			this.hideWlRadiusKeyWarn(true);
			this.hideWlKeysWarn(false);
			break;
		case 'shared':
			$("#WLSEC_TB_WepD").show();
			$("#WLSEC_TB_KeyInfo").show();
			this.hideWlRadiusKeyWarn(true);
			this.hideWlKeysWarn(false);
			break;
		
		case 'radius':
			$("#WLSEC_TB_Radius").show();
			$("#WLSEC_TB_WepD").show();
			break;
		
		case 'wpa2':		
		case 'wpa wpa2':
			$("#WLSEC_TB_Preauth").show();
			$("#WLSEC_TB_NetReauth").show();
			break;
		
		case 'wpa':
			$("#WLSEC_TB_WpaD").show();
			$("#WLSEC_TB_Radius").show();
			$("#WLSEC_TB_WpaGTKRekey").show();
			disableWepD = true;
			break;		
		
		case 'psk2':		
		case 'psk psk2': 
		case 'psk':	
			$("#WLSEC_TB_WpaD").show();
			$("#WLSEC_TB_WpaGTKRekey").show();
			$("#WLSEC_TB_WpaPreShareKey").show();
			$("#WLSEC_TB_ShowPassword").show();
			this.hideWlRadiusKeyWarn(false);
			this.hideWlKeysWarn(true);
			disableWepD = true;
			break;					
	}
	
	//advice default cipher selection,remove if not desired
	if(initFlag == 0) {
		if((authMode == "wpa" || authMode == "psk") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off"))
		{
			var algos = new Array("AES", "TKIP+AES");
			this.updateWlWpaOption(algos);
			setSelectVal($("#WLSEC_SEL_Wpa"), "aes");
		}
		else if((authMode == "wpa2" || authMode == "psk2") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off"))
		{
			var algos = new Array("TKIP", "AES", "TKIP+AES");
			this.updateWlWpaOption(algos);
			setSelectVal($("#WLSEC_SEL_Wpa"), "aes");
		}
		else if((authMode == "wpa wpa2" || authMode == "psk psk2") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off"))
		{
			var algos = new Array("TKIP", "AES", "TKIP+AES");
			this.updateWlWpaOption(algos);
			setSelectVal($("#WLSEC_SEL_Wpa"), "tkip+aes");
		}
		this.wlanSecCfg.wlWpa=$("#WLSEC_SEL_Wpa").val();
		
	}	
	else if(initFlag == 1)
	{
		if (this.wlanSecCfg.wlCoreRev >= 3)
		{
			if ((this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode != "off") || ((authMode == "wpa" || authMode == "psk") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off")))
			{
				algos = new Array("AES", "TKIP+AES");
			}
			else
			{
				algos = new Array("TKIP", "AES", "TKIP+AES");
			}
		}
		else
		{
			algos = new Array("TKIP");		
		}
		this.updateWlWpaOption(algos);
		setSelectVal($("#WLSEC_SEL_Wpa"), this.wlanSecCfg.wlWpa);
	}
	else if (initFlag == 2)
	{
		
		
		this.wlanSecCfg.wlWep = "enabled";
	}
		
	// wep options
	$("#WLSEC_SEL_Wep").empty();
	if (authMode == "shared" || authMode == "radius") 
	{	// shared and radius must have wep on
		$("#WLSEC_SEL_Wep").append("<option value='enabled'>"+getTagTextFromXmlDoc("enableCtx")+"</option>");
	}
	else 
	{
		$("#WLSEC_SEL_Wep").append("<option value='disabled'>"+getTagTextFromXmlDoc("disableCtx")+"</option>");
		$("#WLSEC_SEL_Wep").append("<option value='enabled'>"+getTagTextFromXmlDoc("enableCtx")+"</option>");
	
		if ((authMode.indexOf("wpa") != -1 || authMode.indexOf("psk")!= -1) && (this.wlanSecCfg.wlAuthMode == "open" || this.wlanSecCfg.wlAuthMode == "shared" || this.wlanSecCfg.wlAuthMode == "radius")) 
		{ // set wep off if switch to wpa modes
			setSelectVal($("#WLSEC_SEL_Wep"), "disabled");
		}
		else if (this.wlanSecCfg.wlWep == "enabled") 
		{
			setSelectVal($("#WLSEC_SEL_Wep"), "enabled");
		}
		else 
		{
			setSelectVal($("#WLSEC_SEL_Wep"), "disabled");
		}
	}
	
	this.encrypChange();
}


// this.changeSsidSel= function(elm){
// 	var idx = parseInt(elm.value);
// 	$("#WLSEC_SEL_SecAuthMode").val(this.wlanSecMultiCfg[idx].wlAuthMode);
// 	$("#WLSEC_PWD_SecWpaPsk").val(this.wlanSecMultiCfg[idx].wlWpaPsk);
// 	$("#WLSEC_TEXT_WpaGtkRekey").val(this.wlanSecMultiCfg[idx].wlWpaGTKRekey);
// 	$("#WLSEC_TEXT_RadiusIPAddr").val(this.wlanSecMultiCfg[idx].wlRadiusServerIP);
// 	$("#WLSEC_TEXT_RadiusPort").val(this.wlanSecMultiCfg[idx].wlRadiusPort);
// 	$("#WLSEC_PWD_RadiusKey").val(this.wlanSecMultiCfg[idx].wlRadiusKey);
	

// 	$("#WLSEC_SEL_SecPreauth").val(this.wlanSecMultiCfg[idx].wlPreauth);
// 	$("#WLSEC_TEXT_SecNetReauth").val(this.wlanSecMultiCfg[idx].wlNetReauth);
	
// 	$("input[name='WLSEC_TEXT_Keys']:eq(0)").val(this.wlanSecMultiCfg[idx].wlKey1);
// 	$("input[name='paWscDevPin']").val(this.wlanSecMultiCfg[idx].wlWscDevPin);
// 	$("input[name='paWscStaPin']").val(this.wlanSecMultiCfg[idx].wlWscStaPin);
// 	this.updateAuthMode(0);
// }

this.updateWlanSecElmCore= function()
{
    if (this.wlanSecCfg) {
        $("#WLSEC_SEL_SecAuthMode").val(this.wlanSecCfg.wlAuthMode);
        $("#WLSEC_PWD_SecWpaPsk").val(this.wlanSecCfg.wlWpaPsk);
        $("#WLSEC_TEXT_WpaGtkRekey").val(this.wlanSecCfg.wlWpaGTKRekey);
        $("#WLSEC_TEXT_RadiusIPAddr").val(this.wlanSecCfg.wlRadiusServerIP);
        $("#WLSEC_TEXT_RadiusPort").val(this.wlanSecCfg.wlRadiusPort);
        $("#WLSEC_PWD_RadiusKey").val(this.wlanSecCfg.wlRadiusKey);

        $("#WLSEC_SEL_SecPreauth").val(this.wlanSecCfg.wlPreauth);
        $("#WLSEC_TEXT_SecNetReauth").val(this.wlanSecCfg.wlNetReauth);
        
        $("input[name='WLSEC_TEXT_Keys']:eq(0)").val(this.wlanSecCfg.wlKey1);
        $("input[name='paWscDevPin']").val(this.wlanSecCfg.wlWscDevPin);
        $("input[name='paWscStaPin']").val(this.wlanSecCfg.wlWscStaPin);
    }
	this.updateAuthMode(1);
}


this.wlanSecSaveCfg= function()
{
	if (!checkValid())
	{
		return;
	}
	
	var postData;
	jsonObjInit();
	
	var ssidIndex = $("#WLAN_SEL_SsidSel option:selected").val();
	jsonObjPush("ifName", ssidIndex);
	var authMode = $("#WLSEC_SEL_SecAuthMode").val();
	if ( (authMode == 'psk') || (authMode == 'psk2')	|| (authMode == 'psk psk2'))
	{
			jsonObjPush("wl_wsc_mode", "enabled");
	}
	else
	{
			jsonObjPush("wl_wsc_mode", "disabled");
	}
	
	jsonObjPush("wlWep", $("#WLSEC_SEL_Wep").val());
	jsonObjPush("wlAuthMode", authMode);
	
	if (authMode == 'shared') 
	{
		jsonObjPush("wlAuth", "1");
	}
	else
	{
		jsonObjPush("wlAuth", "0");
	}
	
	if (authMode.indexOf("psk")!= -1)
	{
		jsonObjPush("wlWpaPsk", $("#WLSEC_PWD_SecWpaPsk").val());
	}
	
	if (authMode.indexOf("wpa")!= -1 || authMode.indexOf("psk")!= -1)
	{
		jsonObjPush("wlWpaGtkRekey",$("#WLSEC_TEXT_WpaGtkRekey").val());
	}
	jsonObjPush("wlNetReauth",$("#WLSEC_TEXT_SecNetReauth").val());
	
	if (authMode.indexOf("wpa")!= -1 || authMode == 'radius') 
	{
		jsonObjPush("wlRadiusServerIP",$("#WLSEC_TEXT_RadiusIPAddr").val());
		jsonObjPush("wlRadiusPort",$("#WLSEC_TEXT_RadiusPort").val());
		jsonObjPush("wlRadiusKey",$("#WLSEC_PWD_RadiusKey").val());
	}
    if ($("#WLSEC_SEL_Wep").val() == "enabled")
	{
		jsonObjPush("wlKeyIndex",$("#WLSEC_SEL_KeyIndex").val());
		$.each($("input[name='WLSEC_TEXT_Keys']"), function(idx, wepKeyObj)
		{
			jsonObjPush("wlKey"+(idx+1), wepKeyObj.value);
		});
	}
	jsonObjPush("wlWpa",$("#WLSEC_SEL_Wpa").val());
	postData = jsonObjEnd();
	setCfg("wlanSecCfgSet.cmd", postData);
}

this.isValidWPAPskKey= function(val) {
	var ret = false;
	var len = val.length;
	var maxSize = 64;
	var minSize = 8;

	if( isValidNameString( val ) == false )
		return false;

	if ( len >= minSize && len < maxSize )
		ret = true;
	else if ( len == maxSize ) {
		for ( i = 0; i < maxSize; i++ )
		if ( isHexaDigit(val.charAt(i)) == false )
			break;
		if ( i == maxSize )
		ret = true;
	} else
		ret = false;

	return ret;
}

this.preShareKeyChange= function(elm)
{
	if (!this.isValidWPAPskKey(elm.value)) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecWpaWarn"));
	}
	else
	{
		warnMsgHide(elm);
	}
	return;
}

this.preShareKeyShow= function(val)
{
	var wlWpaPsk = $("#WLSEC_PWD_SecWpaPsk").val();
	$("#wlSecClickShowCtx").empty();
	if (val)

	{
		$("#WLSEC_PWD_SecWpaPsk").replaceWith("<input type='text' id='WLSEC_PWD_SecWpaPsk' size='20' >");
		$("#WLSEC_PWD_SecWpaPsk").val(wlWpaPsk);
		$("#wlSecClickShowCtx").append(getTagTextFromXmlDoc("wlSecClickHideCtx"));
		wpaPwdShowFlag = true;
	}
	else
	{
		$("#WLSEC_PWD_SecWpaPsk").replaceWith("<input type='password' id='WLSEC_PWD_SecWpaPsk' size='20' >");
		$("#WLSEC_PWD_SecWpaPsk").val(wlWpaPsk);
		$("#wlSecClickShowCtx").append(getTagTextFromXmlDoc("wlSecClickShowCtx"));
		wpaPwdShowFlag = false;
	}
	$("#WLSEC_PWD_SecWpaPsk").change(function(){currentPageInst.preShareKeyChange(this);});
}

this.wpaGtkRekeyChange= function(elm)
{
	var value = elm.value;
	if (isNaN(value) || value < 0 || value > 0x7fffffff ) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecWpaReKeyWarn"));
		return;
	}
	warnMsgHide(elm);
}

this.netReauthChange= function(elm)
{
	var value = elm.value;
	if (isNaN(value) || value < 0 || value > 0x7fffffff ) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecNetReauthWarn"));
		return;
	}
	warnMsgHide(elm);
}

this.wlRadiusServerChange= function(elm)
{
	if (isValidIpAddress(elm.value) == false ) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecRadiusWarn"));
		return;
	}
	warnMsgHide(elm);
}


this.checkAllWepKey= function()
{
	$.each($("input[name='WLSEC_TEXT_Keys']"), function(idx, wepKeyObj)
		{
			this.wlWepKeyChange(wepKeyObj, idx+1);
		});
}

this.hideWlKeysWarn= function(hide)
{
	if (hide)
	{
		$.each($("input[name='WLSEC_TEXT_Keys']"), function(i, elm){
				warnMsgHide(elm);
			});
	}
	else
	{
		$.each($("input[name='WLSEC_TEXT_Keys']"), function(i, elm){
				$(elm).change();
			});
	}
}

this.hideWlRadiusKeyWarn= function(hide)
{
	if (hide)
	{
		warnMsgHide($("#WLSEC_PWD_SecWpaPsk")[0]);
	}
	else
	{
		$("#WLSEC_PWD_SecWpaPsk").change();
	}
}

 this.wlSsidSelectchange= function(elm)
{
	this.wlanSecCfg = this.wlanSecMultiCfg[elm.selectedIndex];
	this.updateWlanSecElmCore();
 }


this.hideUnuse= function()
{
    $("#WLAN_TR_CsScan_timer").hide();
    $("#WLAN_TB_Thrshld").hide();
    $("#WLAN_TB_Afb").hide();
}

this.updateModeShow= function(phyType)
{
    if (phyType == "n") 
    {
        $("#WLAN_TR_NmodeSelDiv").show();
        $("#WLAN_TB_NmodeDiv").show();
        $("#WLAN_TB_GmodeDiv").hide();
    }
    else 
    {
        $("#WLAN_TR_NmodeSelDiv").hide();
        $("#WLAN_TB_NmodeDiv").hide();
        $("#WLAN_TB_GmodeDiv").show();
    }
}
this.updateNmodeSel= function(initFlag)
{
    var nModeSel;
    var sel_nbw_cap;
    if(initFlag) 
    {
        nModeSel = this.wlanCfg.wlNmode;
        sel_nbw_cap = this.wlanCfg.wlNBwCap;
        $("#WLAN_SEL_Nmode").val(nModeSel);
        $("#WLAN_TR_Standard").val(this.wlanCfg.wlStandard);
        $("#WLAN_SEL_NBwCap").val(this.wlanCfg.wlNBwCap);
        
        if (this.wlanCfg.wlNCtrlsb != "1" && this.wlanCfg.wlNCtrlsb != "-1")
        {
            $("#WLAN_SEL_NCtrlsb").val("-1");
        }
        else
        {
            $("#WLAN_SEL_NCtrlsb").val(this.wlanCfg.wlNCtrlsb);
        }
    } 
    else 
    {
        nModeSel = $("#WLAN_SEL_Nmode").val();
        sel_nbw_cap = $("#WLAN_SEL_NBwCap").val();
    }

    $("#WLAN_TR_NmodeSelDiv").show();

    if (nModeSel == "auto")
    {
        //for n mode
        $("#WLAN_TB_NmodeDiv").show();
        $("#WLAN_TB_GmodeDiv").hide();


        if(isSupport5G == '1')
        {
            var sel_card = $("#WLAN_SEL_ChoiceCard").val();
            if (!sel_card)
            {
                sel_card = "wlan0";
            }

            if(sel_card == "wlan1")
            {
                $("#WLAN_TR_NmodeSelDiv").hide();
            }
        }
        
        this.updateNrateList();
        
        $("#WLAN_SEL_NProtection").val(this.wlanCfg.wlNProtection);
        //$("#WLAN_SEL_NReqd").val(this.wlanCfg.wlNReqd);
        
        //enable nmode elm && disable bg mode elm
        $("#WLAN_SEL_NBwCap").attr("disabled", false);
        if (sel_nbw_cap == "1" || sel_nbw_cap == "2")
        {
            $("#WLAN_SEL_NCtrlsb").attr("disabled", false);
        }
        $("#WLAN_SEL_NMmcsidx").attr("disabled", false);
        $("#WLAN_SEL_NProtection").attr("disabled", false);
        
        $("#WLAN_SEL_Protection").attr("disabled", true);
        
        $("#WLAN_SEL_Rate").attr("disabled", true);
        
    }
    else
    {
        //for bg
        $("#WLAN_TB_NmodeDiv").hide();
        $("#WLAN_TB_GmodeDiv").show();
        
        $("#WLAN_SEL_GModeSel").val(this.wlanCfg.wlgMode);
        $("#WLAN_TD_Protection").val(this.wlanCfg.wlProtection);
        
        //enable bg mode elm && disable n mode elm 
        $("#WLAN_SEL_Protection").attr("disabled", false);
        
        $("#WLAN_SEL_NBwCap").attr("disabled", true);
        $("#WLAN_SEL_NCtrlsb").attr("disabled", true);
        $("#WLAN_SEL_NMmcsidx").attr("disabled", true);
        $("#WLAN_SEL_NProtection").attr("disabled", true);
        
        $("#WLAN_SEL_Rate").attr("disabled", false);
    }
    
    if (!initFlag)
    {
        this.updateGmode(false);
        this.updateAfterburner(false);
    }
}

this.updateNmodeSel= function(initFlag)
{
    var nModeSel;
    var sel_nbw_cap;
    if(initFlag) 
    {
        nModeSel = this.wlanCfg.wlNmode;
        sel_nbw_cap = this.wlanCfg.wlNBwCap;
        
        $("#WLAN_SEL_NBwCap").val(this.wlanCfg.wlNBwCap);
        
        if (this.wlanCfg.wlNCtrlsb != "1" && this.wlanCfg.wlNCtrlsb != "-1")
        {
            $("#WLAN_SEL_NCtrlsb").val("-1");
        }
        else
        {
            $("#WLAN_SEL_NCtrlsb").val(this.wlanCfg.wlNCtrlsb);
        }
    } 
    else 
    {
        sel_nbw_cap = $("#WLAN_SEL_NBwCap").val();
    }
    
    if (nModeSel == "auto")
    {
        //for n mode
        $("#WLAN_TB_NmodeDiv").show();
        $("#WLAN_TB_GmodeDiv").hide();
        
        this.updateNrateList();
        
        $("#WLAN_SEL_NProtection").val(this.wlanCfg.wlNProtection);
        //$("#WLAN_SEL_NReqd").val(this.wlanCfg.wlNReqd);
        
        //enable nmode elm && disable bg mode elm
        $("#WLAN_SEL_NBwCap").attr("disabled", false);
        if (sel_nbw_cap == "1")
        {
            $("#WLAN_SEL_NCtrlsb").attr("disabled", false);
        }
        $("#WLAN_SEL_NMmcsidx").attr("disabled", false);
        $("#WLAN_SEL_NProtection").attr("disabled", false);
        //$("#WLAN_SEL_NReqd").attr("disabled", false);
        
        $("#WLAN_SEL_GModeSel").attr("disabled", true);
        $("#WLAN_SEL_Protection").attr("disabled", true);
        
        $("#WLAN_SEL_Rate").attr("disabled", true);
        
    }
    else
    {
        //for bg
        $("#WLAN_TB_NmodeDiv").hide();
        $("#WLAN_TB_GmodeDiv").show();
        
        $("#WLAN_SEL_GModeSel").val(this.wlanCfg.wlgMode);
        $("#WLAN_TD_Protection").val(this.wlanCfg.wlProtection);
        
        //enable bg mode elm && disable n mode elm 
        $("#WLAN_SEL_GModeSel").attr("disabled", false);
        $("#WLAN_SEL_Protection").attr("disabled", false);
        
        $("#WLAN_SEL_NBwCap").attr("disabled", true);
        $("#WLAN_SEL_NCtrlsb").attr("disabled", true);
        $("#WLAN_SEL_NMmcsidx").attr("disabled", true);
        $("#WLAN_SEL_NProtection").attr("disabled", true);
        //$("#WLAN_SEL_NReqd").attr("disabled", true);
        
        $("#WLAN_SEL_Rate").attr("disabled", false);
    }
    
    if (!initFlag)
    {
        this.updateGmode(false);
        this.updateAfterburner(false);
    }
}

this.updateNBwCap= function(initFlag)
{
    var wlNBwCap;
    if(initFlag) 
    {
        wlNBwCap = this.wlanCfg.wlNBwCap;
        $("#WLAN_SEL_NBwCap").val(wlNBwCap);
    } 
    else 
    {
        wlNBwCap = $("#WLAN_SEL_NBwCap").val();
    }
    
    if (wlNBwCap == "0")
    {
        $("#WLAN_SEL_NCtrlsb").attr("disabled", true);
    }
    else
    {
        $("#WLAN_SEL_NCtrlsb").attr("disabled", false);
    }
}

this.updateNMmcsidx= function(initFlag)
{
    var sel_nmcsidx;
    var sel_nmode;
    
    if(this.wlPhyType != "n")
        return;

    if(initFlag) 
    {
        sel_nmcsidx = this.wlanCfg.wlNMcsidx;
        sel_nmode = this.wlanCfg.wlNmode;

        $("#WLAN_SEL_NMmcsidx").val(sel_nmcsidx);
    } 
    else 
    {
        sel_nmcsidx = $("#WLAN_SEL_NMmcsidx").val();
        sel_nmode = $("#WLAN_SEL_GModeSel").val(); 
    }       
    
    /* If using 'legacy rate' then enable */
    if (sel_nmcsidx == "-2")
    {
        $("#WLAN_SEL_Rate").attr("disabled", false);
    }
    else
    {
        $("#WLAN_SEL_Rate").attr("disabled", true);
    }
}

this.updateAfterburner= function(initFlag)
{
    var hideAB = false;
    var enableABSel = true; 
    var hideWarning = true;
    var sel_nmode;
    
    if(initFlag) 
    {
        sel_nmode = this.wlanCfg.wlNmode;
    } 
    else 
    {
        
    }
    
    if(this.wlPhyType == "n" && sel_nmode == "auto") 
    {
        hideAB = true;      
    }
            
    if (parseInt(sel_nmode = $("#WLAN_TEXT_FrgThrshld").val()) != 2346 )
    {
        enableABSel = false; 
        hideWarning = false;            
    }
    
    if ($("#WLAN_SEL_Wme").val() != "0")
    {
            enableABSel = false; 
    }
        
    if (hideAB ||!enableABSel) 
    {
        $("#WLAN_SEL_AfterBurnerEn").val("off");
    }    
}

this.updateGmode= function(initFlag)
{
    var sel_band;
    var sel_gmode;
    var sel_pro;
    var sel_pre;
    var sel_nmode;
            
    /* save selected */ 
    if(initFlag) 
    {       
        sel_band = this.wlanCfg.wlBand;
        sel_gmode = this.wlanCfg.wlgMode;
        sel_pro = this.wlanCfg.wlProtection;
        sel_nmode = this.wlanCfg.wlNmode;
    } 
    else 
    {
        sel_band = $("#WLAN_SEL_Band").val();
        sel_gmode = $("#WLAN_SEL_GModeSel").val();
        sel_pro = $("#WLAN_SEL_Protection").val();

    }

    $("#WLAN_TB_PreambleType").hide();                                  
    if (this.wlPhyType == "n" && sel_nmode != "off") 
    {
         $("#WLAN_TB_PreambleType").show();
    }
}

this.updateRegMode= function(initFlag)
{
    var sel_band;
        
    /* save selected */     
    if(initFlag) 
    {
        sel_band = this.wlanCfg.wlBand;
    }       
    else 
    {
        sel_band = $("#WLAN_SEL_Band").val();
        
    }
    
    if (sel_band == "2") 
    {
        $("#WLAN_TB_RegMode").hide();
    }
    else 
    {
        $("#WLAN_TB_RegMode").show();       
    }
    
    if ($("#WLAN_SEL_RegMode").val() == "1")
    {
        $("#WLAN_TEXT_DfsPreIsm").attr("disabled", false);
        $("#WLAN_TEXT_DfsPostIsm").attr("disabled", false);
        $("#WLAN_TD_TpcDb").attr("disabled", false);
    }
    else
    {
        $("#WLAN_TEXT_DfsPreIsm").attr("disabled", true);
        $("#WLAN_TEXT_DfsPostIsm").attr("disabled", true);
        $("#WLAN_TD_TpcDb").attr("disabled", true);
    }
}

this.updateGeneric= function()
{
    
    $("#WLAN_SEL_TxPower").val(this.wlanCfg.wlTxPwrPcnt);
    $("#WLAN_SEL_RegMode").val(this.wlanCfg.wlRegMode);
    $("#WLAN_TEXT_DfsPreIsm").val(this.wlanCfg.wlDfsPreIsm);
    $("#WLAN_TEXT_DfsPostIsm").val(this.wlanCfg.wlDfsPostIsm);
    $("#WLAN_SEL_TpcDb").val(this.wlanCfg.wlTpcDb);
    $("#WLAN_SEL_PreambleType").val(this.wlanCfg.wlPreambleType);
    
}

this.updateWme= function(initFlag)
{
    if(initFlag) 
    {
        if (this.wlanCfg.wlHasWme)
        {
            $("#WLAN_TB_WMM").show();
            $("#WLAN_TB_WMMNOACK").show();
            $("#WLAN_TB_WMMAPSD").show();
        }
        else
        {
            $("#WLAN_TB_WMM").hide();
            $("#WLAN_TB_WMMNOACK").hide();
            $("#WLAN_TB_WMMAPSD").hide();
        }
        
        $("#WLAN_SEL_Wme").val(this.wlanCfg.wlWme);
        $("#WLAN_SEL_WmeNoAck").val(this.wlanCfg.wlWmeNoAck);
        $("#WLAN_SEL_WmeApsd").val(this.wlanCfg.wlWmeApsd);
    }
    
    if ($("#WLAN_SEL_Wme").val() == "0")
    {
        $("#WLAN_SEL_WmeNoAck").attr("disabled", false);
        $("#WLAN_SEL_WmeApsd").attr("disabled", false);
    }
    else
    {
        $("#WLAN_SEL_WmeNoAck").attr("disabled", true);
        $("#WLAN_SEL_WmeApsd").attr("disabled", true);
    }                               
}
this.updateRateList= function(initFlag)
{
    var sel_band;
    var sel_rate;
    var idx;
    var sel_nmode;
    var sel_gmode;
        
    /* save selected */
    if(initFlag) 
    {
        sel_band = this.wlanCfg.wlBand;
        sel_rate = this.wlanCfg.wlRate;
        sel_nmode = this.wlanCfg.wlNmode;
        sel_gmode = this.wlanCfg.wlgMode;
    }
    else 
    {
        sel_band = $("#WLAN_SEL_Band").val();
        sel_rate = $("#WLAN_SEL_Rate").val();
        sel_nmode = $("#WLAN_SEL_Nmode").val();
        sel_gmode = $("#WLAN_SEL_GModeSel").val();
    }
    
    if(this.wlPhyType != "n") 
    {
        sel_nmode = "off";
    }
    $("#WLAN_SEL_Rate").empty();
    
    if (sel_band == "2") 
    { //2.4G
        if (this.wlPhyType == "b" || 
            (this.wlanCfg.wlCountry == "JP" && $("#WLAN_SEL_Channel").val() == 14) ||
            (sel_nmode == "off" && sel_gmode == "0")) 
        {
            $("#WLAN_SEL_Rate").append("<option value='0'>Auto</option>");
            $("#WLAN_SEL_Rate").append("<option value='1000000'>1 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='2000000'>2 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='5500000'>5.5 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='11000000'>11 Mbps</option>");
        }
        else 
        {
            $("#WLAN_SEL_Rate").append("<option id='sb' value='0'>Auto</option>");
            $("#WLAN_SEL_Rate").append("<option value='1000000'>1 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='2000000'>2 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='5500000'>5.5 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='6000000'>6 Mbps</option>")
            $("#WLAN_SEL_Rate").append("<option value='11000000'>11 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='12000000'>12 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='18000000'>18 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='24000000'>24 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='36000000'>36 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='48000000'>48 Mbps</option>");
            $("#WLAN_SEL_Rate").append("<option value='54000000'>54 Mbps</option>");
        }
    }
    else if (sel_band == "1") 
    { // 5G
        $("#WLAN_SEL_Rate").append("<option value='0'>Auto</option>");
        $("#WLAN_SEL_Rate").append("<option value='6000000'>6 Mbps</option>")
        $("#WLAN_SEL_Rate").append("<option value='9000000'>9 Mbps</option>");
        $("#WLAN_SEL_Rate").append("<option value='12000000'>12 Mbps</option>");
        $("#WLAN_SEL_Rate").append("<option value='18000000'>18 Mbps</option>");
        $("#WLAN_SEL_Rate").append("<option value='24000000'>24 Mbps</option>");
        $("#WLAN_SEL_Rate").append("<option value='36000000'>36 Mbps</option>");
        $("#WLAN_SEL_Rate").append("<option value='48000000'>48 Mbps</option>");
        $("#WLAN_SEL_Rate").append("<option value='54000000'>54 Mbps</option>");
    }
    else
    {
        $("#WLAN_SEL_Rate").append("<option value='0'>Auto</option>");
    }
    
    if(sel_nmode != "off") 
    {
        /* exclude auto for 802.11a/b/g (Legacy) rates if 11n is enabled */
        $("#WLAN_SEL_Rate option[value='0']").remove();
    }
    
    setSelectVal($("#WLAN_SEL_Rate"), sel_rate);
}
this.updateMcastRateList= function(initFlag)
{
    var sel_band;
    var sel_rate;
    var idx;
    var sel_nmode;
    var sel_gmode;
        
    /* save selected */
    if(initFlag) 
    {
        sel_band = this.wlanCfg.wlBand;
        sel_rate = this.wlanCfg.wlMCastRate;
        sel_nmode = this.wlanCfg.wlNmode;
        sel_gmode = this.wlanCfg.wlgMode;
    }
    else 
    {
        sel_band = $("#WLAN_SEL_Band").val();
        sel_rate = $("#WLAN_SEL_Rate").val();
        sel_nmode = $("#WLAN_SEL_Nmode").val();
        sel_gmode = $("#WLAN_SEL_GModeSel").val();
    }
    
    if(this.wlPhyType != "n") 
    {
        sel_nmode = "off";
    }
    $("#WLAN_SEL_MCastRate").empty();
    
    if (sel_band == "2") 
    { //2.4G
        if (this.wlPhyType == "b" || 
            (this.wlanCfg.wlCountry == "JP" && $("#WLAN_SEL_Channel").val() == 14) ||
            (sel_nmode == "off" && sel_gmode == "0")) 
        {
            $("#WLAN_SEL_MCastRate").append("<option value='0'>Auto</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='1000000'>1 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='2000000'>2 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='5500000'>5.5 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='11000000'>11 Mbps</option>");
        }
        else 
        {
            $("#WLAN_SEL_MCastRate").append("<option id='sb' value='0'>Auto</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='1000000'>1 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='2000000'>2 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='5500000'>5.5 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='6000000'>6 Mbps</option>")
            $("#WLAN_SEL_MCastRate").append("<option value='11000000'>11 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='12000000'>12 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='18000000'>18 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='24000000'>24 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='36000000'>36 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='48000000'>48 Mbps</option>");
            $("#WLAN_SEL_MCastRate").append("<option value='54000000'>54 Mbps</option>");
        }
    }
    else if (sel_band == "1") 
    { // 5G
        $("#WLAN_SEL_MCastRate").append("<option value='0'>Auto</option>");
        $("#WLAN_SEL_MCastRate").append("<option value='6000000'>6 Mbps</option>")
        $("#WLAN_SEL_MCastRate").append("<option value='9000000'>9 Mbps</option>");
        $("#WLAN_SEL_MCastRate").append("<option value='12000000'>12 Mbps</option>");
        $("#WLAN_SEL_MCastRate").append("<option value='18000000'>18 Mbps</option>");
        $("#WLAN_SEL_MCastRate").append("<option value='24000000'>24 Mbps</option>");
        $("#WLAN_SEL_MCastRate").append("<option value='36000000'>36 Mbps</option>");
        $("#WLAN_SEL_MCastRate").append("<option value='48000000'>48 Mbps</option>");
        $("#WLAN_SEL_MCastRate").append("<option value='54000000'>54 Mbps</option>");
    }
    else
    {
        $("#WLAN_SEL_MCastRate").append("<option value='0'>Auto</option>");
    }
    setSelectVal($("#WLAN_SEL_MCastRate"), sel_rate);
}
this.updateBasicRateList= function(initFlag)
{
    var sel_band;
    var sel_rate;
    var idx;
    
    if(initFlag) 
    {
        sel_band = this.wlanCfg.wlBand;
        sel_rate = this.wlanCfg.wlBasicRate;
    }
    else 
    {
        sel_band = $("#WLAN_SEL_Band").val();
        sel_rate = $("#WLAN_SEL_Rate").val();
    }
    
    $("#WLAN_SEL_BasicRate").empty();
    if (sel_band == "2") 
    { // 2.4G
        $("#WLAN_SEL_BasicRate").append("<option value='defalut'>Default</option>");
        $("#WLAN_SEL_BasicRate").append("<option value='all'>All</option>")
        $("#WLAN_SEL_BasicRate").append("<option value='12'>1 & 2 Mbps</option>");

        if (this.wlPhyType != "b") 
        {
            $("#WLAN_SEL_BasicRate").append("<option value='wifi2'>1 & 2 & 5.5 & 6 & 11 & 12 & 24 Mbps</option>");
        }
    }
    else if (sel_band == "1") 
    { // 5G
        $("#WLAN_SEL_BasicRate").append("<option value='defalut'>Default</option>");
        $("#WLAN_SEL_BasicRate").append("<option value='all'>All</option>")
        $("#WLAN_SEL_BasicRate").append("<option value='12'>1 & 2 Mbps</option>");
        $("#WLAN_SEL_BasicRate").append("<option value='wifi2'>6 & 12 & 24 Mbps</option>");
    }
    else 
    {
        $("#WLAN_SEL_BasicRate").append("<option value='0'>Default</option>");
    }
    setSelectVal($("#WLAN_SEL_BasicRate"), sel_rate);
}
this.updateBasicCfg= function()
{
    $("#WLSEC_SEL_SsidSel").val(this.wlanCfg.wlssid);
    $("#WLAN_CHX_Enbl").attr("checked", (this.wlanCfg.wlEnb == "1") ? true : false);
    this.wlEnableOnchange($("#WLAN_CHX_Enbl")[0]);
     $("#WLAN_CHX_Enbl").attr("disabled", (this.wlanCfg.enable_attr == '1') ? true : false);
    $("#WLAN_SSID_Hide").attr("checked",((this.wlanCfg.wlHide == "1") ? true : false));
    this.wldisableOnchange($("#WLAN_SSID_Hide"));

 
    // this.wlEnbl1Onchange($("#WLAN_CHX_Enbl1")[0]);
}

/**
 * @param elm {Element}
*/
// this.wlEnbl1Onchange= function(elm)
// {
//     elm.checked ? $(".ETHINFO").show(); $(".NET6CO").show() : $(".ETHINFO").hide(); $(".NET6CO").hide();
    
//     if($("#WLAN_SEL_SsidSel").get(0).selectedIndex > 0)
//     {
//         $("#WLAN_DIV_Bottom").hide();
//     }
//     else
//     {
//         $("#WLAN_DIV_Bottom").show();
//     }
//     if (elm.checked) {
//         $('#ableSSID').show();
//     } else {
//         $('#ableSSID').hide();
//     }
// }
this.wlEnableOnchange= function(elm)
{
    elm.checked ? $(".ETHINFO").show() : $(".ETHINFO").hide();
    
    if($("#WLAN_SEL_SsidSel").get(0).selectedIndex > 0)
    {
        $("#WLAN_DIV_Bottom").hide();
    }
    else
    {
        $("#WLAN_DIV_Bottom").show();
    }
    if (elm.checked) {
        $('#ableSSID').show();
    } else {
        $('#ableSSID').hide();
    }
}
this.wldisableOnchange= function(elm)
{
    elm.checked ? $(".ETHINFO").hide() : $(".ETHINFO").show();
}
this.updateTxPrower= function()
{
    var i;
    var m=0;

    $("#WLAN_SEL_TxPower").empty();
    for(i=0;i<4;i++)
    {
        m = m + 25;
        $("#WLAN_SEL_TxPower").append("<option value='"+m+"'>"+m+"%"+"</option>");
    }

    setSelectVal($("#WLAN_SEL_TxPower"), 100);
}



// this.upateWlanCfgElmCore= function()
// {
//     this.updateBasicCfg();
//     this.updateWlBand(this.wlanCfg);

//     this.hideUnuse();
//     this.updateNmodeSel(true);
//     if (this.wlanCfg.wlNmode != "off")
//     {
//         this.updateNBwCap(true);
//         this.updateNMmcsidx(true);
//     }
//     //this.updateNrateList();
//     this.updateRateList(true);
//     this.updateMcastRateList(true);
//     this.updateBasicRateList(true);

//     this.updateAfterburner(true);
//     this.updateGmode(true);
//     this.updateRegMode(true);
//     if(this.productType == "EOC")
//     {
//         this.updateTxPrower();
//     }
//     this.updateGeneric();
//     this.updateWme(true);
	
// 	if ($.browser.msie && $.browser.version=="6.0")
// 	{
// 		this.adjustIe6ForSelSsid();
// 	}
//     this.wlStandardOnchange();

//     if (this.wlanCfg.wlNmode != "off")
//     {
//         this.updateNMmcsidx(true);
//     }
// }
this.upateWlanCfgElmCore= function()
{
    this.updateBasicCfg();
    this.updateWlBand(this.wlanCfg);
    this.updatewps(this.wlanSecCfg);
    this.updateChannelList(true);
    this.hideUnuse();
    this.updateNmodeSel(true);
    if (this.wlanCfg.wlNmode != "off")
    {
        this.updateNBwCap(true);
        this.updateNMmcsidx(true);
    }
    //this.updateNrateList();
    this.updateRateList(true);
    this.updateMcastRateList(true);
    this.updateBasicRateList(true);

    this.updateAfterburner(true);
    this.updateGmode(true);
    this.updateRegMode(true);
    if(this.productType == "EOC")
    {
        this.updateTxPrower();
    }
    this.updateGeneric();
    this.updateWme(true);
	
	if ($.browser.msie && $.browser.version=="6.0")
	{
		this.adjustIe6ForSelSsid();
	}
}

this.wlSsidSelOnchange= function(elm)
{
    this.wlanCfg = this.wlanMultiCfg[elm.selectedIndex];
    this.upateWlanCfgElmCore();
}

this.wlBandOnchange= function(elm)
{
    //todo?
 
    this.updateRateList(false);
    this.updateMcastRateList(false);
    this.updateBasicRateList(false);
}

this.wlChannelOnchange= function(elm)
{
	if ($("#WLAN_SEL_NBwCap").val() == "0")
	{
		$("#WLAN_SEL_NCtrlsb").attr("disabled", true);
	}
	else
	{
		if(this.productType != "EOC")
			$("#WLAN_SEL_NCtrlsb").attr("disabled", (elm.value == '0') ? true : false);
	}
}

this.wlNmodeOnchange= function()
{
	/*if(this.productType == "EOC")
	{
		this.updateChannelList(false);
	}*/
	this.updateNmodeSel(false);
}

this.wlNBwCapOnchange= function(elm)
{
    //this.updateChannelList(false);
    this.updateNBwCap(false);
}

/*this.wlNCtrlsbOnchange= function(elm)
{
    this.updateChannelList(false);
}*/

this.wlNMmcsidxOnchange= function()
{
    this.updateNMmcsidx(false);
}

this.wlGModeSelOnchange= function()
{
    this.updateGmode(false);
}

this.wlRegModeOnchange= function()
{
    this.updateRegMode(false);
}

this.wlWmeOnchange= function()
{
    this.updateWme(false);
}

this.checkSSIDName= function(elm)
{
    if ("EOC" == this.productType)
    {
	    if(this.customer == "donyan")
	    {
	        var ssidname = this.wlanCfg.wlssid.indexOf("CMCC_");
	        if(ssidname >= 0)
	        {
	            var place = elm.value.indexOf("CMCC_");
	            if(place == -1)
	            {
	                warnMsgShow(elm, 'SSID is not begining with CMCC_');
	                return ;
	            }
	            else
	            {
	                warnMsgHide(elm);
	            }

	            if(elm.value.length <= 0)
	            {
	                warnMsgShow(elm, 'SSID can not be null');
	            }
	            
	            if(elm.value.length > 11)
	            {
	                warnMsgShow(elm, 'SSID Length can not be more than 11');
	            }
	        }

	        var ssidname2 = this.wlanCfg.wlssid.indexOf("GCable");
	        if(ssidname2 >= 0)
	        {
	            var place = elm.value.indexOf("GCable");
	            if(place == -1)
	            {
	                warnMsgShow(elm, 'SSID2 is not begining with GCable' ); 
	                return ;
	            }
	            else
	            {
	                warnMsgHide(elm);
	            }

	            if(elm.value.length > 11)
	            {
	                warnMsgShow(elm, 'SSID Length can not be more than 11');
	            }
	        }
	    }
    }
    else if("OVERSEA" == this.ispType)
    {
        return ;
    }
    else if ("CU" == this.ispType)
    {
        return;
    }
	else
    {
        var place = elm.value.indexOf("ChinaNet-");
        if(place == -1)
        {
            warnMsgShow(elm, 'SSID ' + getTagTextFromXmlDoc("wlanSsidWarn4")); //not start with chinaNet-
            return ;
        }
        else
        {
            warnMsgHide(elm);
        }
    }
}

this.wlSsidOnchange= function(elm)
{
    if (elm.value == "")
    {
        warnMsgShow(elm, 'SSID ' + getTagTextFromXmlDoc("wlanSsidWarn1"));
        return;
    }
    
    if (elm.value.length > 32) 
    {
        warnMsgShow(elm, 'SSID ' + getTagTextFromXmlDoc("wlanSsidWarn3"));              
        return;
    }

    warnMsgHide(elm);

    this.checkSSIDName(elm);
}

this.wlDfsPreIsmOnchange= function(elm)
{
    if($("#WLAN_SEL_RegMode").val() == "1") 
    {
        var DfsPreIsmNum = parseInt(elm.value);
        if (isNaN(DfsPreIsmNum) == true || DfsPreIsmNum < 0 || DfsPreIsmNum > 99 ) 
        {
            warnMsgShow(elm, getTagTextFromXmlDoc("wlanRegmodeWarn1"));
            return;

        }
    }
    warnMsgHide(elm);
}

this.wlDfsPostIsmOnchange= function(elm)
{
    if($("#WLAN_SEL_RegMode").val() == "1") 
    {
        var DfsPostIsmNum = parseInt(elm.value);
        if (isNaN(DfsPostIsmNum) == true || DfsPostIsmNum < 10 || DfsPostIsmNum > 99 ) 
        {
            warnMsgShow(elm, getTagTextFromXmlDoc("wlanRegmodeWarn2"));
            return;
        }
    }
    warnMsgHide(elm);
}

this.wlChoiceCardOnchange= function()
{
    this.g_initFlag = true;
    updateSecondStage();
}

this.wlanSaveCfg= function()
{
    if (!checkValid())
    {
        return;
    }
    
    var postData;
    var ssidExist = false;
    jsonObjInit();
    var ssidIndex = $("#WLAN_SEL_SsidSel option:selected").val();
	jsonObjPush("ifName", ssidIndex);
    jsonObjPush("wlSsid", $("#WLSEC_SEL_SsidSel").val());
    if ($("#WLAN_CHX_Enbl").attr("checked"))
    {
        if("OVERSEA" == this.ispType)
        {
           
            if (ssidExist == true)
            {
                alert(getTagTextFromXmlDoc("wlanRegmodeWarn3"));
                return;
            }
        }   
        $("#WLAN_SEL_NMmcsidx").removeAttr("disable");
        var sel_nmcsidx = $("#WLAN_SEL_NMmcsidx").val();
        
        //var sel_nmode = $("#WLAN_SEL_Nmode").val();
        jsonObjPush("wlEnbl","1");  
        jsonObjPush("wlHide",$("#WLAN_SSID_Hide").attr("checked") ? "1" : "0");
        jsonObjPush("wlEnable",$("#WLAN_CHX_Enbl").attr("checked") ? "1" : "0");
        jsonObjPush("wlChannel",$("#WLAN_SEL_Channel").val());
        //jsonObjPush("wlNReqd",$("#WLAN_SEL_NReqd").val());
        jsonObjPush("wlBand",$("#WLAN_SEL_Band").val());
        //jsonObjPush("wlMCastRate",$("#WLAN_SEL_MCastRate").val());
        //jsonObjPush("wlBasicRate",$("#WLAN_SEL_BasicRate").val());
    
        /* rate */
         if (this.wlPhyType != "n" || (this.wlPhyType == "n" && sel_nmcsidx == -2))
         {
             jsonObjPush("wlRate",$("#WLAN_SEL_NMmcsidx").val());
         }
         
         /* b/g mode */
        // if (this.wlanCfg.wlBand == '2') 
        // { // 2.4G
        //     if (this.wlPhyType == "b") 
        //     { // 802.11b
        //         //jsonObjPush("wlPreambleType",$("#WLAN_SEL_PreambleType").val());
        //     } 
        //     else if ((this.wlPhyType == "n" && sel_nmode == "off") || this.wlPhyType == "g" || this.wlPhyType == "a") 
        //     { // 802.11g
        //         var wlGmode = $("#WLAN_SEL_GModeSel").val();
        //         jsonObjPush("wlgMode", wlGmode);
        //         jsonObjPush("wlProtection",$("#WLAN_SEL_Protection").val());
        //         if (wlGmode == "0" || wlGmode == "3") 
        //         {
        //              //jsonObjPush("wlPreambleType",$("#WLAN_SEL_PreambleType").val());
        //         }
        //     }       
        // }
        
        jsonObjPush("wlTxPwrPcnt",$("#WLAN_SEL_TxPower").val());
       // jsonObjPush("wlRegMode",$("#WLAN_SEL_RegMode").val());
        
        if(this.wlPhyType == "n") 
        {
            
            var wlNbwCap = $("#WLAN_SEL_NBwCap").val();
            jsonObjPush("wlNBwCap", wlNbwCap);
        
            // if((wlBand == "1" && wlNbwCap == "0") ||
            // (wlBand == "2" && ((wlNbwCap == "0") || (wlNbwCap == "2"))))
            // {
            //     jsonObjPush("wlNCtrlsb", "0");
            // }
            // else    
            // {
            //     jsonObjPush("wlNCtrlsb", $("#WLAN_SEL_NCtrlsb").val());
            // }
        
            jsonObjPush("wlNMcsidx", $("#WLAN_SEL_NMmcsidx").val());
            //jsonObjPush("wlNProtection", $("#WLAN_SEL_NProtection").val());
	        jsonObjPush("wlPreambleType",$("#WLAN_SEL_PreambleType").val());
        }
        
        if($("#WLAN_SEL_RegMode").val == "1") 
        {
            //jsonObjPush("wlDfsPreIsm", $("#WLAN_TEXT_DfsPreIsm").val());
            //jsonObjPush("wlDfsPostIsm", $("#WLAN_TEXT_DfsPostIsm").val());
            //jsonObjPush("wlTpcDb", $("#WLAN_SEL_TpcDb").val());
        }   
        
        //jsonObjPush("wlWme", $("#WLAN_SEL_Wme").val());
        //jsonObjPush("wlWmeNoAck", $("#WLAN_SEL_WmeNoAck").val());
        //jsonObjPush("wlWmeApsd", $("#WLAN_SEL_WmeApsd").val());  
    }
    else
    {
        jsonObjPush("wlEnbl","0");
    }
   
    postData = jsonObjEnd();
    
    hideLoadIconFlag = false;
    setCfg("wlanCfgSet.cmd", postData, updateData);
}
// 无线使能
this.wlanWIFI= function()
{
    if (!checkValid())
    {
        return;
    }

    jsonObjPush("wlanAble",$("#WLAN_CHX_Enbl1").attr("checked") ? "1" : "0"); 
    postData = jsonObjEnd();
    setCfg("", postData, updateAllCfg);
}

this.hideAllElements= function()
{
	$("#WLSEC_TB_WpaD").hide();
	$("#WLSEC_TB_WpaPreShareKey").hide();
	$("#WLSEC_TB_ShowPassword").hide();
	$("#WLSEC_TB_WpaGTKRekey").hide();
	$("#WLSEC_TB_Radius").hide();
	$("#WLSEC_TB_Preauth").hide();
	$("#WLSEC_TB_NetReauth").hide();
	$("#WLSEC_TB_WepD").hide();
	$("#WLSEC_TB_KeyInfo").hide();
	//$("#WLSEC_DIV_WscAddClient").hide();
	//$("#WLSEC_TB_WscStaPin").hide();
}

this.updateWlWpaOption= function(arrayItem)
{
	$("#WLSEC_SEL_Wpa").empty();
	for (var i in arrayItem) {	
		$("#WLSEC_SEL_Wpa").append("<option value='"+arrayItem[i].toLowerCase()+"'>"+arrayItem[i]+"</option>");
	}
}

this.encrypChange= function()
{
	var cwep =  $("#WLSEC_SEL_Wep").val();
	var authMode = $("#WLSEC_SEL_SecAuthMode").val();
	if (cwep == "enabled") 
	{
		this.hideWlKeysWarn(false);
		$("#WLSEC_TB_KeyInfo").show();
		if (authMode != "open" && authMode != "shared") 
		{
			$("input[name='WLSEC_TEXT_Keys']:eq(0)").attr("disabled", true);
			$("input[name='WLSEC_TEXT_Keys']:eq(1)").attr("disabled", false);
			$("input[name='WLSEC_TEXT_Keys']:eq(2)").attr("disabled", false);
			$("input[name='WLSEC_TEXT_Keys']:eq(3)").attr("disabled", true);
			
			$("#WLSEC_SEL_KeyIndex").empty();
			$("#WLSEC_SEL_KeyIndex").append("<option value='2'>2</option>");
			$("#WLSEC_SEL_KeyIndex").append("<option value='3'>3</option>");
			
			setSelectVal($("#WLSEC_SEL_KeyIndex"), this.wlanSecCfg.wlKeyIndex);
		}
		else 
		{
			$("input[name='WLSEC_TEXT_Keys']:eq(0)").attr("disabled", false);
			$("input[name='WLSEC_TEXT_Keys']:eq(1)").attr("disabled", false);
			$("input[name='WLSEC_TEXT_Keys']:eq(2)").attr("disabled", false);
			$("input[name='WLSEC_TEXT_Keys']:eq(3)").attr("disabled", false);
		
			$("#WLSEC_SEL_KeyIndex").empty();
			$("#WLSEC_SEL_KeyIndex").append("<option value='1'>1</option>");
			$("#WLSEC_SEL_KeyIndex").append("<option value='2'>2</option>");
			$("#WLSEC_SEL_KeyIndex").append("<option value='3'>3</option>");
			$("#WLSEC_SEL_KeyIndex").append("<option value='4'>4</option>");
			setSelectVal($("#WLSEC_SEL_KeyIndex"), this.wlanSecCfg.wlKeyIndex);
		}
	} 
	else 
	{
		this.hideWlKeysWarn(true);
		$("#WLSEC_TB_KeyInfo").hide();
	}
}

this.wpsEnableChange= function()
{
	if ($("#WLWSC_SEL_WscEnbl").attr("checked")) 
	{
		$("#WLSEC_1").show();
        $("#WLWSC_SEL_WscEnbl").attr("value","enabled");
        this.changeWscMode();
        this.updatewps();
	} 
	else 
	{
		$("#WLSEC_1").hide();
        $("#WLWSC_SEL_WscEnbl").attr("value","disabled");
	}
}

this.wlanSecRebuiltPin= function()
{
    var num = "";
    var PIN = 0;
    var accum = 0;
    var digit = 0;
    for (var i = 0; i < 7; i++)
    {
        num += Math.floor(Math.random()*10);
    }
    PIN = parseInt(num);
    PIN *= 10;

    accum += 3 * (Math.floor(PIN / 10000000) % 10); 
    accum += 1 * (Math.floor(PIN / 1000000) % 10); 
    accum += 3 * (Math.floor(PIN / 100000) % 10); 
    accum += 1 * (Math.floor(PIN / 10000) % 10); 
    accum += 3 * (Math.floor(PIN / 1000) % 10); 
    accum += 1 * (Math.floor(PIN / 100) % 10);
    accum += 3 * (Math.floor(PIN / 10) % 10);

    digit = (accum % 10);
    accum = (10 - digit) % 10;
    PIN += accum;

    $("input[name='paWscDevPin']").val(PIN);
}

this.wlanSecResetPin= function()
{
    var num = "12345670";//A temporary solution, The right should be in the nvram(wps_device_pin)
    $("input[name='paWscDevPin']").val(num);
}

this.changeWscMode= function(mode)
{
    $("input[name='WLWSC_RADIO_WscMethod'][value='"+mode+"']").attr("checked", "checked"); //select 
    if(mode=="0")
    {
        $("#WLSEC_TB_WscStaPin").hide();
        $("#WLSEC_TB_WscApPin").hide();
    }
    else if(mode=="1")
    {
        $("#WLSEC_TB_WscStaPin").show();
        $("#WLSEC_TB_WscApPin").hide();
    }
    else
    {
        $("#WLSEC_TB_WscStaPin").hide();
        $("#WLSEC_TB_WscApPin").show();
    }
}

this.updateAuthMode= function(initFlag)
{
	var disableWepD = false;
	var authMode = $("#WLSEC_SEL_SecAuthMode").val();
	var i, algos;
	
	this.hideAllElements();	
	switch (authMode) 
	{
		case 'open':
            $("#WLSEC_TB_WepD").show();
			$("#WLSEC_TB_KeyInfo").show();
			this.hideWlRadiusKeyWarn(true);
			this.hideWlKeysWarn(false);
			break;
		case 'shared':
			$("#WLSEC_TB_WepD").show();
			$("#WLSEC_TB_KeyInfo").show();
			this.hideWlRadiusKeyWarn(true);
			this.hideWlKeysWarn(false);
			break;
		
		case 'radius':
			$("#WLSEC_TB_Radius").show();
			$("#WLSEC_TB_WepD").show();
			break;
		
		case 'wpa2':		
		case 'wpa wpa2':
			$("#WLSEC_TB_Preauth").show();
			$("#WLSEC_TB_NetReauth").show();
			break;
		
		case 'wpa':
			$("#WLSEC_TB_WpaD").show();
			$("#WLSEC_TB_Radius").show();
			$("#WLSEC_TB_WpaGTKRekey").show();
			disableWepD = true;
			break;		
		
		case 'psk2':		
		case 'psk psk2': 
		case 'psk':	
			$("#WLSEC_TB_WpaD").show();
			$("#WLSEC_TB_WpaGTKRekey").show();
			$("#WLSEC_TB_WpaPreShareKey").show();
			$("#WLSEC_TB_ShowPassword").show();
			this.hideWlRadiusKeyWarn(false);
			this.hideWlKeysWarn(true);
			disableWepD = true;
			break;					
	}
	
	//advice default cipher selection,remove if not desired
    if (this.wlanSecCfg) {
        $("#WLWSC_SEL_WscEnbl").attr("checked", (this.wlanSecCfg.wlWscMode == "enabled") ? true : false);
        this.wpsEnableChange();
        if(initFlag == 0) {
            if((authMode == "wpa" || authMode == "psk") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off"))
            {
                var algos = new Array("AES", "TKIP+AES");
                this.updateWlWpaOption(algos);
                setSelectVal($("#WLSEC_SEL_Wpa"), "aes");
            }
            else if((authMode == "wpa2" || authMode == "psk2") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off"))
            {
                var algos = new Array("TKIP", "AES", "TKIP+AES");
                this.updateWlWpaOption(algos);
                setSelectVal($("#WLSEC_SEL_Wpa"), "aes");
            }
            else if((authMode == "wpa wpa2" || authMode == "psk psk2") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off"))
            {
                var algos = new Array("TKIP", "AES", "TKIP+AES");
                this.updateWlWpaOption(algos);
                setSelectVal($("#WLSEC_SEL_Wpa"), "tkip+aes");
            }
            this.wlanSecCfg.wlWpa=$("#WLSEC_SEL_Wpa").val();
            
        }	
        else if(initFlag == 1)
        {
            if (this.wlanSecCfg.wlCoreRev >= 3)
            {
                if ((this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode != "off") || ((authMode == "wpa" || authMode == "psk") && (this.wlanSecCfg.wlPhyType=='n' && this.wlanSecCfg.wlNmode == "off")))
                {
                    algos = new Array("AES", "TKIP+AES");
                }
                else
                {
                    algos = new Array("TKIP", "AES", "TKIP+AES");
                }
            }
            else
            {
                algos = new Array("TKIP");		
            }
            this.updateWlWpaOption(algos);
            setSelectVal($("#WLSEC_SEL_Wpa"), this.wlanSecCfg.wlWpa);
        }
        else if (initFlag == 2)
        {
            if($("#WLSEC_SEL_KeyBit").val() == "0")
            {
                if (this.wlanSecCfg.wlKeyBit == "0")
                {
                    $("input[name='WLSEC_TEXT_Keys']:eq(0)").val(this.wlanSecCfg.wlKey1);
                    $("input[name='WLSEC_TEXT_Keys']:eq(1)").val(this.wlanSecCfg.wlKey2);
                    $("input[name='WLSEC_TEXT_Keys']:eq(2)").val(this.wlanSecCfg.wlKey3);
                    $("input[name='WLSEC_TEXT_Keys']:eq(3)").val(this.wlanSecCfg.wlKey4);
                }
                else
                {	
                    $.each($("input[name='WLSEC_TEXT_Keys']"), function(idx, wlKey)
                        {
                            wlKey.value = "1234567890123";
                        });
                }
            }
            else if($("#WLSEC_SEL_KeyBit").val() == "1"){
                if (this.wlanSecCfg.wlKeyBit == "1")
                {
                    $("input[name='WLSEC_TEXT_Keys']:eq(0)").val(this.wlanSecCfg.wlKey1);
                    $("input[name='WLSEC_TEXT_Keys']:eq(1)").val(this.wlanSecCfg.wlKey2);
                    $("input[name='WLSEC_TEXT_Keys']:eq(2)").val(this.wlanSecCfg.wlKey3);
                    $("input[name='WLSEC_TEXT_Keys']:eq(3)").val(this.wlanSecCfg.wlKey4);
                }
                else
                {
                    $.each($("input[name='WLSEC_TEXT_Keys']"), function(idx, wlKey)
                        {
                            wlKey.value = "0123456789";
                        });
                }
            }
            this.wlanSecCfg.wlWep = "enabled";
        }
            
    }

	// wep options
	$("#WLSEC_SEL_Wep").empty();
	if (authMode == "shared" || authMode == "radius") 
	{	// shared and radius must have wep on
		$("#WLSEC_SEL_Wep").append("<option value='enabled'>"+getTagTextFromXmlDoc("enableCtx")+"</option>");
	}
	else if (authMode == "open" && this.wlanSecCfg && this.wlanSecCfg.wlNmode == "auto")
	{
		$("#WLSEC_SEL_Wep").append("<option value='disabled'>"+getTagTextFromXmlDoc("disableCtx")+"</option>");
	}
	else 
	{
		$("#WLSEC_SEL_Wep").append("<option value='disabled'>"+getTagTextFromXmlDoc("disableCtx")+"</option>");
		$("#WLSEC_SEL_Wep").append("<option value='enabled'>"+getTagTextFromXmlDoc("enableCtx")+"</option>");
	
		if ((authMode.indexOf("wpa") != -1 || authMode.indexOf("psk")!= -1) && this.wlanSecCfg &&(this.wlanSecCfg.wlAuthMode == "open" || this.wlanSecCfg.wlAuthMode == "shared" || this.wlanSecCfg.wlAuthMode == "radius")) 
		{ // set wep off if switch to wpa modes
			setSelectVal($("#WLSEC_SEL_Wep"), "disabled");
		}
		else if (this.wlanSecCfg && this.wlanSecCfg.wlWep == "enabled") 
		{
			setSelectVal($("#WLSEC_SEL_Wep"), "enabled");
		}
		else 
		{
			setSelectVal($("#WLSEC_SEL_Wep"), "disabled");
		}
	}

	this.encrypChange();
}


this.updateSsidListOption= function(ssidListObj)
 {
    //$("#WLSEC_SEL_SsidSel").empty();
     $.each(ssidListObj.ssidList, function(idx, ssidObj)
     {
         //$("#WLSEC_SEL_SsidSel").append("<option value='"+idx+"'>"+ssidObj.ssid+"</option>")
         $("#WLSEC_SEL_SsidSel").val(ssidObj.ssid);
     });
    //setSelectVal($("#WLSEC_SEL_SsidSel"), this.wlanSecCfg.ssidIdx);
 }
this.updatewps= function()
  {
    if(this.wlanSecCfg){
        if(this.wlanSecCfg.wlWscConfig=="pbc"){
         $("input[name='WLWSC_RADIO_WscMethod']").eq(0).attr("checked",true);
         showhide('WLSEC_TB_WscStaPin', 0);
         showhide('WLSEC_TB_WscApPin', 0);
     }
     else if(this.wlanSecCfg.wlWscConfig=="staPin"){
        $("input[name='WLWSC_RADIO_WscMethod']").eq(1).attr("checked",true);
        showhide('WLSEC_TB_WscStaPin', 1);
        showhide('WLSEC_TB_WscApPin', 0);
     }
     else if(this.wlanSecCfg.wlWscConfig=="apPin"){
        $("input[name='WLWSC_RADIO_WscMethod']").eq(2).attr("checked",true);
        showhide('WLSEC_TB_WscStaPin', 0);
        showhide('WLSEC_TB_WscApPin', 1);
         }     
    }
     
  }

// this.changeSsidSel= function(elm){
// 	var idx = parseInt(elm.value);
// 	$("#WLSEC_SEL_SecAuthMode").val(this.wlanSecMultiCfg[idx].wlAuthMode);
// 	$("#WLSEC_PWD_SecWpaPsk").val(this.wlanSecMultiCfg[idx].wlWpaPsk);
// 	$("#WLSEC_TEXT_WpaGtkRekey").val(this.wlanSecMultiCfg[idx].wlWpaGTKRekey);
// 	$("#WLSEC_TEXT_RadiusIPAddr").val(this.wlanSecMultiCfg[idx].wlRadiusServerIP);
// 	$("#WLSEC_TEXT_RadiusPort").val(this.wlanSecMultiCfg[idx].wlRadiusPort);
// 	$("#WLSEC_PWD_RadiusKey").val(this.wlanSecMultiCfg[idx].wlRadiusKey);
	
// 	$("#WLSEC_SEL_KeyBit").val(this.wlanSecMultiCfg[idx].wlKeyBit);
// 	$("#WLSEC_SEL_SecPreauth").val(this.wlanSecMultiCfg[idx].wlPreauth);
// 	$("#WLSEC_TEXT_SecNetReauth").val(this.wlanSecMultiCfg[idx].wlNetReauth);
	
// 	$("input[name='WLSEC_TEXT_Keys']:eq(0)").val(this.wlanSecMultiCfg[idx].wlKey1);
// 	$("input[name='WLSEC_TEXT_Keys']:eq(1)").val(this.wlanSecMultiCfg[idx].wlKey2);
// 	$("input[name='WLSEC_TEXT_Keys']:eq(2)").val(this.wlanSecMultiCfg[idx].wlKey3);
// 	$("input[name='WLSEC_TEXT_Keys']:eq(3)").val(this.wlanSecMultiCfg[idx].wlKey4);

// 	$("#WLWSC_SEL_WscEnbl").val(this.wlanSecMultiCfg[idx].wlWscMode);
// 	$("input[name='paWscDevPin']").val(this.wlanSecMultiCfg[idx].wlWscDevPin);
// 	$("input[name='paWscStaPin']").val(this.wlanSecMultiCfg[idx].wlWscStaPin);
//     this.changeWscMode(this.wlanSecMultiCfg[idx].wlWscConfig);
// 	this.updateAuthMode(0);
// }

this.updateWlanSecElmCore= function()
{
    if (this.wlanSecCfg) {
        //$("#WLSEC_SEL_SsidSel").val(this.wlanSecCfg.ssidIdx);
        $("#WLSEC_SEL_SecAuthMode").val(this.wlanSecCfg.wlAuthMode);
        $("#WLSEC_PWD_SecWpaPsk").val(this.wlanSecCfg.wlWpaPsk);
        $("#WLSEC_TEXT_WpaGtkRekey").val(this.wlanSecCfg.wlWpaGTKRekey);
        $("#WLSEC_TEXT_RadiusIPAddr").val(this.wlanSecCfg.wlRadiusServerIP);
        $("#WLSEC_TEXT_RadiusPort").val(this.wlanSecCfg.wlRadiusPort);
        $("#WLSEC_PWD_RadiusKey").val(this.wlanSecCfg.wlRadiusKey);
        
        $("#WLSEC_SEL_KeyBit").val(this.wlanSecCfg.wlKeyBit);
        $("#WLSEC_SEL_SecPreauth").val(this.wlanSecCfg.wlPreauth);
        $("#WLSEC_TEXT_SecNetReauth").val(this.wlanSecCfg.wlNetReauth);
        
        $("input[name='WLSEC_TEXT_Keys']:eq(0)").val(this.wlanSecCfg.wlKey1);

        $("#WLWSC_SEL_WscEnbl").val(this.wlanSecCfg.wlWscMode);
        $("input[name='paWscDevPin']").val(this.wlanSecCfg.wlWscDevPin);
        $("input[name='paWscStaPin']").val(this.wlanSecCfg.wlWscStaPin);
        this.changeWscMode(this.wlanSecCfg.wlWscConfig);
        this.updatewps(this.wlanSecCfg.wlWscConfig);
    }
	this.updateAuthMode(1);
}

this.updateWlanSecElm= function(jsonObj)
{
	this.wlanSecMultiCfg = jsonObj.wlanSecMultiCfg;
	this.wlanSecCfg = this.wlanSecMultiCfg[0];
	updateSsidList();
	this.updateWlanSecElmCore();
}


// this.wlanSecSaveCfg= function()
// {
// 	if (!checkValid())
// 	{
// 		return;
// 	}
	
// 	var postData;
// 	jsonObjInit();
	
// 	//var ssidIndex = $("#WLSEC_SEL_SsidSel").val();

// 	//jsonObjPush("ifName", this.wlanSecMultiCfg[ssidIndex]);
//     var ssidIndex = $("#WLAN_SEL_SsidSel option:seclected").val();
//     alert(ssidIndex);

// 	var authMode = $("#WLSEC_SEL_SecAuthMode").val();
// 	if ( (authMode == 'psk') || (authMode == 'psk2')	|| (authMode == 'psk psk2'))
// 	{
// 			jsonObjPush("wl_wsc_mode", "enabled");
// 	}
// 	else
// 	{
// 			jsonObjPush("wl_wsc_mode", "disabled");
// 	}
	
// 	jsonObjPush("wlWep", $("#WLSEC_SEL_Wep").val());
// 	jsonObjPush("wlAuthMode", authMode);
	
// 	if (authMode == 'shared') 
// 	{
// 		jsonObjPush("wlAuth", "1");
// 	}
// 	else
// 	{
// 		jsonObjPush("wlAuth", "0");
// 	}
	
// 	if (authMode.indexOf("psk")!= -1)
// 	{
// 		jsonObjPush("wlWpaPsk", $("#WLSEC_PWD_SecWpaPsk").val());
// 	}
	
// 	if (authMode.indexOf("wpa")!= -1 || authMode.indexOf("psk")!= -1)
// 	{
// 		jsonObjPush("wlWpaGtkRekey",$("#WLSEC_TEXT_WpaGtkRekey").val());
// 	}
// 	jsonObjPush("wlNetReauth",$("#WLSEC_TEXT_SecNetReauth").val());
	
// 	if (authMode.indexOf("wpa")!= -1 || authMode == 'radius') 
// 	{
// 		jsonObjPush("wlRadiusServerIP",$("#WLSEC_TEXT_RadiusIPAddr").val());
// 		jsonObjPush("wlRadiusPort",$("#WLSEC_TEXT_RadiusPort").val());
// 		jsonObjPush("wlRadiusKey",$("#WLSEC_PWD_RadiusKey").val());
// 	}
	
// 	jsonObjPush("wlWpa",$("#WLSEC_SEL_Wpa").val());
// 	jsonObjPush("wlKeyBit",$("#WLSEC_SEL_KeyBit").val());
// 	jsonObjPush("wlPreauth",$("#WLSEC_SEL_KeyBit").val());
	
// 	if ($("#WLSEC_SEL_Wep").val() == "enabled")
// 	{
// 		jsonObjPush("wlKeyIndex",$("#WLSEC_SEL_KeyIndex").val());
// 		$.each($("input[name='WLSEC_TEXT_Keys']"), function(idx, wepKeyObj)
// 		{
// 			jsonObjPush("wlKey"+(idx+1), wepKeyObj.value);
// 		});
// 	}

// 	jsonObjPush("wlWscMode",$("#WLWSC_SEL_WscEnbl").val());

//     if(($("input[name='WLWSC_RADIO_WscMethod']:eq(0)").attr("checked")))
// 	{
// 		jsonObjPush("wlWscConfig","0");
// 	}
// 	else if(($("input[name='WLWSC_RADIO_WscMethod']:eq(1)").attr("checked")))
// 	{
// 		jsonObjPush("wlWscConfig","1");
// 		var stapin = $("#WLSEC_TEXT_WscStaPin").val();
//         if (this.checkStapin(stapin))
//         {
// 		    jsonObjPush("wlWscStaPin",stapin.replace(/[^0-9]/ig,""));
//         }
//         else
//         {
//             window.confirm('Input sta pin error, please check');
//             return;
//         }
//     }
// 	else if(($("input[name='WLWSC_RADIO_WscMethod']:eq(2)").attr("checked")))
// 	{
// 		jsonObjPush("wlWscConfig","2");
// 		jsonObjPush("wlWscDevPin",$("#WLSEC_TEXT_WscDevPin").val());
// 	}
    
// 	postData = jsonObjEnd();
// 	setCfg("wlanSecCfgSet.cmd", postData, updateAllCfg);
// }


this.wlanWpsAddClient= function()
{
	var authMode = $("#WLSEC_SEL_SecAuthMode").val();
	if (authMode == 'open')
	{
        if(window.confirm('The current encryption method for open, whether to continue'))
        {
            //alert("OK");
            //return;
        }
        else
        {
            return;
        }
	}

	var postData;
	jsonObjInit();
	
	var ssidIndex = $("#WLAN_SEL_SsidSel option:selected").val();

	jsonObjPush("ifName", ssidIndex);

	jsonObjPush("wlWscMode",$("#WLWSC_SEL_WscEnbl").val());
    jsonObjPush("wlssid",$("#WLSEC_SEL_SsidSel").val());
    if(($("input[name='WLWSC_RADIO_WscMethod']:eq(0)").attr("checked")))
	{
		jsonObjPush("wlWscConfig","pbc");
	}
	else if(($("input[name='WLWSC_RADIO_WscMethod']:eq(1)").attr("checked")))
	{
		jsonObjPush("wlWscConfig","staPin");
		var stapin = $("#WLSEC_TEXT_WscStaPin").val();
        // if (this.checkStapin(stapin))
        // {
		    jsonObjPush("wlWscStaPin",stapin.replace(/[^0-9]/ig,""));
        // }
        // else
        // {
        //     window.confirm('Input sta pin error, please check');
        //     return;
        // }
	}
	else if(($("input[name='WLWSC_RADIO_WscMethod']:eq(2)").attr("checked")))
	{
		jsonObjPush("wlWscConfig","apPin");
		jsonObjPush("wlWscDevPin",$("#WLSEC_TEXT_WscDevPin").val());
	}
    
	postData = jsonObjEnd();
	setCfg("wlanWpsAddClient.cmd", postData, updateAllCfg);
}

this.checkStapin= function(elm){
    var ret = false;

    var len = elm.length;
    if ((4 == len) && (isOnlyDigit(elm)))
    {
        ret = true;
    }
    else if ((8 == len) && (isOnlyDigit(elm)))
    {
        if (this.checkPinValid(elm))
        {
            ret = true;
        }
    }
    else if (9 == len)
    {
        if (' ' == elm[4] || '-' == elm[4])
        {
            elm = elm.substring(0, 4) + elm.substring(4 + 1, len);
            if (isOnlyDigit(elm) && this.checkPinValid(elm))
            {
                ret = true;
            }
        }
    }
 
    return ret;
}

this.checkPinValid= function(elm){
    var accum = 0;
    var PIN = 0;

    PIN = parseInt(elm);

    accum += 3 * (Math.floor(PIN / 10000000) % 10); 
    accum += 1 * (Math.floor(PIN / 1000000) % 10); 
    accum += 3 * (Math.floor(PIN / 100000) % 10); 
    accum += 1 * (Math.floor(PIN / 10000) % 10); 
    accum += 3 * (Math.floor(PIN / 1000) % 10); 
    accum += 1 * (Math.floor(PIN / 100) % 10);
    accum += 3 * (Math.floor(PIN / 10) % 10);
    accum += 1 * (Math.floor(PIN / 1) % 10); 

   if (0 == (accum % 10))
      return true; //valid
   else
      return false; //unvalid
}


this.isValidWPAPskKey= function(val) {
	var ret = false;
	var len = val.length;
	var maxSize = 64;
	var minSize = 8;

	if( isValidNameString( val ) == false )
		return false;

	if ( len >= minSize && len < maxSize )
		ret = true;
	else if ( len == maxSize ) {
		for ( i = 0; i < maxSize; i++ )
		if ( isHexaDigit(val.charAt(i)) == false )
			break;
		if ( i == maxSize )
		ret = true;
	} else
		ret = false;

	return ret;
}

this.preShareKeyChange= function(elm)
{
	if (!this.isValidWPAPskKey(elm.value)) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecWpaWarn"));
	}
	else
	{
		warnMsgHide(elm);
	}
	return;
}

this.preShareKeyShow= function(val)
{
	var wlWpaPsk = $("#WLSEC_PWD_SecWpaPsk").val();
	$("#wlSecClickShowCtx").empty();
	if (val)
	{
		$("#WLSEC_PWD_SecWpaPsk").replaceWith("<input type='text' id='WLSEC_PWD_SecWpaPsk' size='20' >");
		$("#WLSEC_PWD_SecWpaPsk").val(wlWpaPsk);
		$("#wlSecClickShowCtx").append(getTagTextFromXmlDoc("wlSecClickHideCtx"));
		wpaPwdShowFlag = true;
	}
	else
	{
		$("#WLSEC_PWD_SecWpaPsk").replaceWith("<input type='password' id='WLSEC_PWD_SecWpaPsk' size='20' >");
		$("#WLSEC_PWD_SecWpaPsk").val(wlWpaPsk);
		$("#wlSecClickShowCtx").append(getTagTextFromXmlDoc("wlSecClickShowCtx"));
		wpaPwdShowFlag = false;
	}
	$("#WLSEC_PWD_SecWpaPsk").change(function(){currentPageInst.preShareKeyChange(this);});
}

this.wpaGtkRekeyChange= function(elm)
{
	var value = elm.value;
	if (isNaN(value) || value < 0 || value > 0x7fffffff ) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecWpaReKeyWarn"));
		return;
	}
	warnMsgHide(elm);
}

this.netReauthChange= function(elm)
{
	var value = elm.value;
	if (isNaN(value) || value < 0 || value > 0x7fffffff ) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecNetReauthWarn"));
		return;
	}
	warnMsgHide(elm);
}

this.wlRadiusServerChange= function(elm)
{
	if (isValidIpAddress(elm.value) == false ) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecRadiusWarn"));
		return;
	}
	warnMsgHide(elm);
}

this.wlWepKeyChange= function(elm)
{
	if ($("#WLSEC_SEL_KeyBit").val() == "0") //128 bit
	{
		if (!isValidKey(elm.value, 13))
		{
			warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecWepkey128Warn"));
		}
		else
		{
			warnMsgHide(elm);
		}
	}
	else if ($("#WLSEC_SEL_KeyBit").val() == "1") //64 bit
	{
		if (!isValidKey(elm.value, 5))
		{
			warnMsgShow(elm, getTagTextFromXmlDoc("wlanSecWepkey64Warn"));
		}
		else
		{
			warnMsgHide(elm);
		}
	}
}

this.checkAllWepKey= function()
{
	$.each($("input[name='WLSEC_TEXT_Keys']"), function(idx, wepKeyObj)
		{
			this.wlWepKeyChange(wepKeyObj, idx+1);
		});
}

this.hideWlKeysWarn= function(hide)
{
	if (hide)
	{
		$.each($("input[name='WLSEC_TEXT_Keys']"), function(i, elm){
				warnMsgHide(elm);
			});
	}
	else
	{
		$.each($("input[name='WLSEC_TEXT_Keys']"), function(i, elm){
				$(elm).change();
			});
	}
}
this.updateWlanCfgElm= function(jsonObj)
{
    var sel_card;

    this.initGlobleVars(jsonObj);

    if (this.loginLevel != "admin" && this.customer != "jinqianmao")
    {
        $("#WLAN_TR_AboutChannel").hide();
        $("#wlNmodeSel").hide();
    }

    if(this.customer == "donyan")
    {
        if (this.loginLevel != "admin")
        {
            $("#BTN_Adv").hide();
        }
        else
        {
            $("#BTN_Adv").show();
        }
    }

    if(("OVERSEA" == this.ispType) || ("CU" == this.ispType && this.loginLevel == "admin"))
    {
        $("#WLAN_TB_MultiSsid").show();
         this.updateSsidList();
        //updateSsidList();
    }
    else
    {
        $("#WLAN_TB_MultiSsid").hide();
    }

    if(isSupport5G == '1')
    {
        $("#WLAN_TB_ChoiceCard").show();

        sel_card = $("#WLAN_SEL_ChoiceCard").val();

        if(sel_card == "wlan0")
        {
            $("#WLAN_SEL_ChoiceCard").get(0).selectedIndex = 0;
        }
        else if(sel_card == "wlan1")
        {
            $("#WLAN_SEL_ChoiceCard").get(0).selectedIndex = 1;
        }
    }
    else
    {
        $("#WLAN_TB_ChoiceCard").hide();
        // $("#WLAN_SEL_ChoiceCard").get(0).selectedIndex = 0;
    }
    
    this.upateWlanCfgElmCore();
}
this.hideWlRadiusKeyWarn= function(hide)
{
	if (hide)
	{
		warnMsgHide($("#WLSEC_PWD_SecWpaPsk")[0]);
	}
	else
	{
		$("#WLSEC_PWD_SecWpaPsk").change();
	}
}
this.updateChannelList = function(flag){
	updateChannelList(flag);
}
this.updateSsidList= function()
{
    $("#WLAN_SEL_SsidSel").empty();
    $.each(this.wlanMultiCfg, function(idx, wlCfg)
    {
        $("#WLAN_SEL_SsidSel").append("<option value='"+wlCfg.name+"'>"+wlCfg.wlssid+"</option>")
    });
    //setSelectVal($("#WLAN_SEL_SsidSel"), 0);
}
this.changeStandard = function(){
    if($("#WLAN_TR_Standard option:selected").val()=="b"||$("#WLAN_TR_Standard option:selected").val()=="g"||$("#WLAN_TR_Standard option:selected").val()=="b,g"){
        $("#WLAN_SEL_NMmcsidx").attr("disabled","disabled");    
    }
    else if($("#WLAN_TR_Standard option:selected").val()=="n"||$("#WLAN_TR_Standard option:selected").val()=="b,g,n"){
        $("#WLAN_SEL_NMmcsidx").removeAttr("disabled");
    }
}

this.registerEvent= function()
{
    $("#WLAN_TR_Standard").change(function(){currentPageInst.changeStandard();});
    $("#WLAN_SEL_SsidSel").change(function(){currentPageInst.wlSsidSelOnchange(this)});
	//$("#WLSEC_SEL_SsidSel").change(function(){currentPageInst.changeSsidSel(this);});
	// $("#WLSEC_SEL_SsidSel").change(function(){currentPageInst.wlSsidSelectchange(this)});
    $("#WLAN_SEL_Band").change(function(){currentPageInst.wlBandOnchange(this)});
	$("#WLSEC_SEL_SecAuthMode").change(function(){
        currentPageInst.updateAuthMode(0);
    });
	$("#WLSEC_SEL_KeyBit").change(function(){currentPageInst.updateAuthMode(2);this.checkAllWepKey();});
	
	$("#WLSEC_SEL_Wpa").change(function(){currentPageInst.encrypChange();});
	$("#WLSEC_SEL_Wep").change(function(){currentPageInst.encrypChange();});
	$("#WLSEC_PWD_SecWpaPsk").change(function(){currentPageInst.preShareKeyChange(this);});
	$("#WLSEC_CHX_SecPreKeyShow").click(function(){currentPageInst.preShareKeyShow(this.checked);});
	
	$("#WLSEC_TEXT_WpaGtkRekey").change(function(){currentPageInst.wpaGtkRekeyChange(this);});
	$("#WLSEC_TEXT_SecNetReauth").change(function(){currentPageInst.netReauthChange(this);});
	$("#WLSEC_TEXT_RadiusIPAddr").change(function(){currentPageInst.wlRadiusServerChange(this);});
	
	$.each($("input[name='WLSEC_TEXT_Keys']"), function(idx, wepKeyObj)
		{
			$(wepKeyObj).change(function(){currentPageInst.wlWepKeyChange(this);});
		});
	$("#BTN_REBUILT").click(function(){currentPageInst.wlanSecRebuiltPin();});
	$("#BTN_RESET").click(function(){currentPageInst.wlanSecResetPin();});

	$("#WLWSC_SEL_WscEnbl").change(function(){currentPageInst.wpsEnableChange();});
    $("input[name='WLWSC_RADIO_WscMethod']").click(function(){currentPageInst.changeWscMode(this.value)});
	//$("#BTN_SAVEWPS").click(function(){currentPageInst.wlanWpsAddClient();});
	$("#BTN_SAVE").click(function(){
        
        currentPageInst.wlanSecSaveCfg();
        currentPageInst.wlanSaveCfg();
        currentPageInst.wlanWpsAddClient();
        //currentPageInst.wlanWIFI();
      
    });
     $("#WLAN_CHX_Enbl").change(function(){currentPageInst.checkedfun();});
     $("#WLAN_CHX_Enbl1").click(function(){currentPageInst.checkedfirstfun(this)});
    $("#WLAN_SEL_Channel").change(function(){currentPageInst.wlChannelOnchange(this)});
    $("#WLAN_SEL_NBwCap").change(function(){currentPageInst.wlNBwCapOnchange(this)});
    $("#WLAN_SEL_NCtrlsb").change(function(){currentPageInst.wlNCtrlsbOnchange(this)});
    $("#WLAN_SEL_NMmcsidx").change(function(){currentPageInst.wlNMmcsidxOnchange()});
    $("#WLAN_SEL_GModeSel").change(function(){currentPageInst.wlGModeSelOnchange()});
    $("#WLAN_SEL_RegMode").change(function(){currentPageInst.wlRegModeOnchange()});
    $("#WLAN_SEL_Wme").change(function(){currentPageInst.wlWmeOnchange()});
    $("#WLAN_TEXT_DfsPreIsm").change(function(){currentPageInst.wlDfsPreIsmOnchange(this);});
    $("#WLAN_TEXT_DfsPostIsm").change(function(){currentPageInst.wlDfsPostIsmOnchange(this);});
    $("#BTN_Apply").click(function(){currentPageInst.wlanSaveCfg();});
	$("#WLSEC_TD_SsidSelCtx").append(getTagTextFromXmlDoc("wlanInfoSsid2"));
	$("#WLSEC_TD_AuthModeCtx").append(getTagTextFromXmlDoc("wlanSecAuthModeCtx"));
	$("#WLSEC_TD_PreauthCtx").append(getTagTextFromXmlDoc("wlanSecPreauthCtx"));
	$("#WLSEC_OPT_PreauthDisable").append(getTagTextFromXmlDoc("disableCtx"));
	$("#WLSEC_OPT_PreauthEnable").append(getTagTextFromXmlDoc("enableCtx"));
	$("#WLSEC_TD_ReauthCtx").append(getTagTextFromXmlDoc("wlanSecReauthCtx"));
	$("#WLSEC_TD_RadiusIpCtx").append(getTagTextFromXmlDoc("wlanSecRadiusIpCtx"));
	$("#WLSEC_TD_RadiusPortCtx").append(getTagTextFromXmlDoc("wlanSecRadiusPortCtx"));
	$("#WLSEC_TD_RadiusPwdCtx").append(getTagTextFromXmlDoc("wlanSecRadiusPwdCtx"));
	$("#WLSEC_TD_WpaCtx").append(getTagTextFromXmlDoc("wlanSecWpaCtx"));
	$("#WLSEC_TD_Key1").append(getTagTextFromXmlDoc("wlanSecKey1"));
    $("#WLSEC_TD_Key2").append(getTagTextFromXmlDoc("wlanSecKey2"));
    $("#WLSEC_TD_Key3").append(getTagTextFromXmlDoc("wlanSecKey3"));
    $("#WLSEC_TD_Key4").append(getTagTextFromXmlDoc("wlanSecKey4"));
    //$("#WLSEC_SEL_SecAuthMode").change(function(){currentPageInst.updateAuthMode(this)});
}

}  // End Page
function updateWlanCfgElm(jsonObj)
{
    currentPageInst.updateWlanCfgElm(jsonObj);
}
function updateChannelList(initFlag)
{
    var sel_ch;
    var sel_band;
    var sel_nbw_cap;
    var sel_sb;
    var sel_nmode;
    var idx;
    var sel_card;
    var wlPhyType = currentPageInst.wlPhyType;
    /* save selected */ 
    if(initFlag&&this.wlanCfg) 
    {       
        sel_ch = currentPageInst.wlanCfg.wlChannel;
        sel_band = currentPageInst.wlanCfg.wlBand;
        sel_nbw_cap =  currentPageInst.wlanCfg.wlNBwCap;
        sel_sb = currentPageInst.wlanCfg.wlNCtrlsb;
        sel_nmode = currentPageInst.wlanCfg.wlNmode;
    } 
    else 
    {
        sel_ch = $("#WLAN_SEL_Channel").val();
        sel_band = $("#WLAN_SEL_Band").val();
        sel_nbw_cap = $("#WLAN_SEL_NBwCap").val();
        sel_sb = $("#WLAN_SEL_NCtrlsb").val();
        sel_nmode = $("#WLAN_SEL_Nmode").val();
    }

    sel_card = $("#WLAN_SEL_ChoiceCard").val();
    if (!sel_card)
    {
        sel_card = "wlan0";
    }

    //get list data from server.
    if ((sel_band == "2") && ((wlPhyType != "n") || (sel_nmode == "off"))) 
    {
        //<%ejGetWl(wlChannelList, b)%>
        if(sel_card == "wlan0")
        {
            getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBand":"b"}, updateChannelListOption);
        }
        else if(sel_card == "wlan1")
        {
            getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBand":"b", "ifName":"wl1"}, updateChannelListOption);
        }
    }
    else if ((sel_band == "1") && ((wlPhyType != "n") || (sel_nmode == "off"))) 
    {
        //<%ejGetWl(wlChannelList, a)%>
        if(sel_card == "wlan0")
        {
            getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBand":"a"}, updateChannelListOption);
        }
        else if(sel_card == "wlan1")
        {
            getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBand":"a", "ifName":"wl1"}, updateChannelListOption);
        }
    }
    else if ((sel_band == "2") && (wlPhyType == "n")) 
    {
        if(sel_nbw_cap == "1") 
        {
            if(sel_sb == 1) 
            {
                //<%ejGetWl(wlChannelList, n, b, 40, "upper")%>
                if(sel_card == "wlan0")
                {
                    getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanPhyType":"n","wlanBand":"b","wlanBw":"40","wlanCsb":"upper"}, updateChannelListOption);
                }
                else if(sel_card == "wlan1")
                {
                    getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanPhyType":"n","wlanBand":"b","wlanBw":"40","wlanCsb":"upper", "ifName":"wl1"}, updateChannelListOption);
                }
            } 
            else    
            {
                //<%ejGetWl(wlChannelList, n, b, 40, "lower")%>     
                if(sel_card == "wlan0")
                {
                    getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanPhyType":"n","wlanBand":"b","wlanBw":"40","wlanCsb":"lower"}, updateChannelListOption);
                }
                else if(sel_card == "wlan1")
                {
                    getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanPhyType":"n","wlanBand":"b","wlanBw":"40","wlanCsb":"lower", "ifName":"wl1"}, updateChannelListOption);
                }
            }           
        } 
        else if(sel_nbw_cap == "0" || sel_nbw_cap == "2")
        {       
            //<%ejGetWl(wlChannelList, n, b, 20 )%>
            if(sel_card == "wlan0")
            {
                getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanPhyType":"n","wlanBand":"b","wlanBw":"20"}, updateChannelListOption);
            }
            else if(sel_card == "wlan1")
            {
                getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanPhyType":"n","wlanBand":"b","wlanBw":"20", "ifName":"wl1"}, updateChannelListOption);
            }
        }       
    }
    else if ((sel_band == "1") && (wlPhyType == "n")) 
    {   
        if(sel_nbw_cap == "1" || sel_nbw_cap == "2") 
        {
                if(sel_sb == 1) 
                {
                    //<%ejGetWl(wlChannelList, n, a, 40, "upper")%>
                    if(sel_card == "wlan0")
                    {
                        getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBw":"40","wlanCsb":"upper"}, updateChannelListOption);
                    }
                    else if(sel_card == "wlan1")
                    {
                        getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBw":"40","wlanCsb":"upper", "wlanBand":"a", "wlanPhyType":"n", "ifName":"wl1"}, updateChannelListOption);
                    }
                } 
                else 
                {
                    //<%ejGetWl(wlChannelList, n, a, 40, "lower")%>     
                    if(sel_card == "wlan0")
                    {
                        getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBw":"40","wlanCsb":"lower"}, updateChannelListOption);
                    }
                    else if(sel_card == "wlan1")
                    {
                        getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBw":"40","wlanCsb":"lower", "wlanBand":"a", "wlanPhyType":"n", "ifName":"wl1"}, updateChannelListOption);
                    }
                }   
         } 
         else if (sel_nbw_cap == "0") 
         {
               //<%ejGetWl(wlChannelList, n, a, 20 )%>
            if(sel_card == "wlan0")
            {
                getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBw":"20"}, updateChannelListOption);
            }
            else if(sel_card == "wlan1")
            {
                getCfg("wlanCfgGet.json", {"wlanChannelList":"1","wlanBw":"20", "wlanBand":"a", "wlanPhyType":"n", "ifName":"wl1"}, updateChannelListOption);

            }
         }      
    }       
    else 
    {
        $("#WLAN_SEL_Channel").empty();
        $("#WLAN_SEL_Channel").append("<option value='0'>Auto</option>");
    }
}

function updateWlanCfg()
{
    // JavaScript Document
    /* data model
    *  {
        "ctrlCfg":{"loginLevel":"xx"},
        "wlCfg":{"wlHide":"0", ...},
        "otherCfg":{"tianyimao":%s".}
    *  }
    */
    //getCfg("wlanCfgGet.json", {"ctrlCfg":"1", "wlanCfg":"1", "ifName":"wl0"}, updateWlanCfgElm);
    if(isSupport5G == '1')
    {
        var sel_card;

        sel_card = $("#WLAN_SEL_ChoiceCard").val();
        if (!sel_card)
        {
            sel_card = "wlan0";
        }
        if(sel_card == "wlan0")
        {
            //$("#WLAN_SEL_ChoiceCard").get(0).selectedIndex = 0;
            getCfg("wlanCfgGet.json", {"ctrlCfg":"1", "wlanCfg":"1", "ifName":"wl0"}, updateWlanCfgElm);
        }
        else if(sel_card == "wlan1")
        {
            //$("#WLAN_SEL_ChoiceCard").get(0).selectedIndex = 1;
            getCfg("wlanCfgGet.json", {"ctrlCfg":"1", "wlanCfg":"1", "ifName":"wl1"}, updateWlanCfgElm);
        }
    }
    else 
    {   
        //$("#WLAN_SEL_ChoiceCard").get(0).selectedIndex = 0;
        getCfg("wlanCfgGet.json", {"ctrlCfg":"1", "wlanCfg":"1", "ifName":"wl0"}, updateWlanCfgElm);
    }
}
function updateSsidListOption(jsonObj)
{
    currentPageInst.updateSsidListOption(jsonObj);
}

function updateSsidList()
{
	getCfg("wlanSecCfgGet.json", {"ssidList":"1"}, updateSsidListOption);
}
function updateWlanSecElm(jsonObj)
{
    currentPageInst.updateWlanSecElm(jsonObj);
}
function updateData()
{
    hideLoadIconFlag = true;
    currentPageInst.g_initFlag = true;
    setTimeout(updateSecondStage, 5000); //wait for 5 sec for update current information
    setTimeout(updateSecondStage, 8000); //wait for 8 sec for update current information (if failed last setp)
}

function updateChannelListOption(jsonObj)
{
    currentPageInst.updateChannelListOption(jsonObj);
}

function updateSecondStageElm(jsonObj)
{
    currentPageInst.updateSecondStageElm(jsonObj);
}

function updateSecondStage()
{
    var sel_card;



    if(sel_card == "wlan0")
    {
        getCfg("wlanCfgGet.json", {"wlanCurrInfo":"1"}, updateSecondStageElm);
    }
    else if(sel_card == "wlan1")
    {
        getCfg("wlanCfgGet.json", {"wlanCurrInfo":"1", "ifName":"wl1"}, updateSecondStageElm);
    }
    else
    {
        getCfg("wlanCfgGet.json", {"wlanCurrInfo":"1"}, updateSecondStageElm);
    }
}
// function updateSsidListOption(jsonObj)
// {
//     currentPageInst.updateSsidListOption(jsonObj);
// }

// function updateSsidList()
// {
// 	getCfg("wlanSecCfgGet.json", {"ssidList":"1"}, updateSsidListOption);
// }

// function updateWlanSecElm(jsonObj)
// {
//     currentPageInst.updateWlanSecElm(jsonObj);
// }
function updateAllCfg()
{
    updateWlanCfg();
    updateSecondStage();
    getCfg("wlanSecCfgGet.json", {"wlanSecCfg":"1"}, updateWlanSecElm);
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
    this.basicClassFile = "kt_wlan_setup.js";
    this.customLv1File = "kt_wlan_setup_customlv1.js";
    this.customLv2File = "kt_wlan_setup_customlv2.js";
    this.customLv3File = "kt_wlan_setup_customlv3.js";

}

