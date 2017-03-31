Page = function()
{
//初始化
this.initHtmlText= function()
{
	$("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuAppNatAlg"));
	$("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("menuAppNatDmz"));
	$("#ALG_Title").append(getTagTextFromXmlDoc("algTitleCtx"));
	//$("#dmzip").append(getTagTextFromXmlDoc("menuAppdmzip"));
	//$("#dmzinterface").append(getTagTextFromXmlDoc("interfaceCtx"));
	$("#ALG_Desc").append(getTagTextFromXmlDoc("algShow"));
	$("#ALG_LB_H323Enable").append(getTagTextFromXmlDoc("enalbeh323Ctx"));
	$("#ALG_LB_RtspEnable").append(getTagTextFromXmlDoc("enalbeRtspCtx"));
	$("#ALG_LB_PptpEnable").append(getTagTextFromXmlDoc("enalbePptpCtx"));
	$("#ALG_LB_IpsecEnable").append(getTagTextFromXmlDoc("enableIpsecCtx"));
	$("#ALG_LB_SipEnable").append(getTagTextFromXmlDoc("enablesipCtx"));
	$("#ALG_SipPort1").append(getTagTextFromXmlDoc("sipPort1Ctx"));
	$("#ALG_SipPort2").append(getTagTextFromXmlDoc("sipPort2Ctx"));
	$("#ALG_SipPort3").append(getTagTextFromXmlDoc("sipPort3Ctx"));
	$("#ALG_LB_L2tpEnable").append(getTagTextFromXmlDoc("enalbeL2tpCtx"));
	$("#ALG_LB_FtpEnable").append(getTagTextFromXmlDoc("enalbeFtpCtx"));
	$("#DMZ_TEXT_Enable").append(getTagTextFromXmlDoc("enalbedmzCtx"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
	$("#BTN_cancle").attr("value", getTagTextFromXmlDoc("cancelCtx")); 
	$("#DMZ_AddTip").append(getTagTextFromXmlDoc("dmzPrompt1"));
	$("#DMZ_ClearTip").append(getTagTextFromXmlDoc("dmzPrompt2"));
	$("#DMZ_InputTip").append(getTagTextFromXmlDoc("dmzIpAddr") + ":");

}
this.btnApply= function()
{
	var postData;

	jsonObjInit();
	
	if (!checkValid())
	{
		return;
	}
	
	jsonObjPush("sipPort1", $("#ALG_TEXT_SipPort1").val());	
	jsonObjPush("sipPort2", $("#ALG_TEXT_SipPort2").val());
	jsonObjPush("sipPort3", $("#ALG_TEXT_SipPort3").val());
	
	if ($("#ALG_CHX_SipEnable").attr("checked")== undefined)
    {
    	jsonObjPush("enableSip", "0");
	}
	else
	{
		jsonObjPush("enableSip", "1");
	}
		
	if ($("#ALG_CHX_FtpEnable").attr("checked")== undefined)
	{
     	jsonObjPush("enalbeFtp", "0");
	}
	else
	{
		jsonObjPush("enalbeFtp", "1");
	}
		
	if ($("#ALG_CHX_H323Enable").attr("checked")==undefined)
    {
    	jsonObjPush("enalbeh323", "0");
	}
	else
	{
		jsonObjPush("enalbeh323", "1");
	}
	
	if ($("#ALG_CHX_RtspEnable").attr("checked")==undefined)
	{
		jsonObjPush("enalbeRts", "0");
	}
	else
	{
		jsonObjPush("enalbeRts", "1");
	}

	if ($("#ALG_CHX_PptpEnable").attr("checked")==undefined)
	{
		jsonObjPush("enalbePptp", "0");
	}
	else
	{
		jsonObjPush("enalbePptp", "1");
	}

	if ($("#ALG_CHX_IpsecEnable").attr("checked")==undefined)
	{
		jsonObjPush("enalbeIpsec", "0");
	}
	else
	{
		jsonObjPush("enalbeIpsec", "1");
	}

	if($("#ALG_CHX_L2tpEnable").attr("checked")==undefined)
	{
		jsonObjPush("enalbeL2tp", "0");
	}
	else
	{
		jsonObjPush("enalbeL2tp", "1");
	}
   
	postData = jsonObjEnd();
	setCfg("ctAlgSet.cmd", postData, updateAllCfg);
}


this.portChange= function(elm)
{
	if (elm.value != "")
	{
		if (false == isValidServerPort(elm.value))
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("algPortWarn"));
		}
		else
		{
			warnMsgHide(elm);
		}
	}
	else
	{
		warnMsgHide(elm);
	}
}

this.registerEvent= function()
{
	$("#BTN_Apply").click(function()
	{
		currentPageInst.btnApply();
		currentPageInst.btnApplyTwo();
	});
	
	$("#ALG_TEXT_SipPort1").change(function(){
		currentPageInst.portChange(this);
	});
	
	$("#ALG_TEXT_SipPort2").change(function(){
		currentPageInst.portChange(this);
	});
	
	$("#ALG_TEXT_SipPort3").change(function(){
		currentPageInst.portChange(this);
	});

	$("#DMZ_CHX_Enable").click(function(){
		currentPageInst.enableDmz();
	});

	$("#DMZ_TEXT_Host").change(function(){
		currentPageInst.ipChange(this);
	});
}


this.updateAlgCfg= function(jsonObj)
{
	$("#ALG_TEXT_SipPort1").val(jsonObj.port1);
	$("#ALG_TEXT_SipPort2").val(jsonObj.port2);
	$("#ALG_TEXT_SipPort3").val(jsonObj.port3);

	if (jsonObj.enblAlgSip == '1')
	{
		$("#ALG_CHX_SipEnable").attr("checked", true);
	}
	else
	{
		$("#ALG_CHX_SipEnable").attr("checked", undefined);
	}
	
	if (jsonObj.enblAlgFtp == '1')
	{
		$("#ALG_CHX_FtpEnable").attr("checked", true);
	}
	else
	{
		$("#ALG_CHX_FtpEnable").attr("checked", undefined);
	}
	
	if(jsonObj.enblAlgH323 == '1')
	{
		$("#ALG_CHX_H323Enable").attr("checked", true);
	}
	else
	{
		$("#ALG_CHX_H323Enable").attr("checked", undefined);
	}
	
	if (jsonObj.enblAlgRtsp == '1')
	{
		$("#ALG_CHX_RtspEnable").attr("checked", true);
	}
	else
	{
		$("#ALG_CHX_RtspEnable").attr("checked", undefined);
	}

	if (jsonObj.enblAlgPptp == '1')
	{
		$("#ALG_CHX_PptpEnable").attr("checked", true);
	}
	else
	{
		$("#ALG_CHX_PptpEnable").attr("checked", undefined);
	}
	
	if(jsonObj.enblAlgL2tp == '1')
	{
		$("#ALG_CHX_L2tpEnable").attr("checked", true);
	}
	else
	{
		$("#ALG_CHX_L2tpEnable").attr("checked", undefined);
	}
	
	if(jsonObj.enblAlgIPsec == '1')
	{
		$("#ALG_CHX_IpsecEnable").attr("checked", true);
	}
	else
	{
		$("#ALG_CHX_IpsecEnable").attr("checked", undefined);
	}
}


this.updateDmzCfg= function(jsonObj)
{
	if (jsonObj.enblDmz == '1')
	{
		$("#DMZ_CHX_Enable").attr("checked", true);
		$("#DMZ_Config").show();
		$("#DMZ_TEXT_Host").val(jsonObj.addr)
	}
	else
	{
		$("#DMZ_CHX_Enable").attr("checked", undefined);
		$("#DMZ_Config").hide();
	}
}

this.enableDmz= function()
{
	if ($("#DMZ_CHX_Enable").attr("checked")== undefined)
	{
		$("#DMZ_Config").hide();
	}
	else
	{
		$("#DMZ_Config").show();
	}
}

this.btnApplyTwo= function()
{
	var postData;
	jsonObjInit();
	if (!checkValid())
	{
		return;
	}
	if ($("#DMZ_CHX_Enable").attr("checked") == undefined)
	{
		jsonObjPush("enable", "0");
	}
	else
	{
		jsonObjPush("enable", "1");
	}
	jsonObjPush("address", $("#DMZ_TEXT_Host").val());
	postData = jsonObjEnd();
	setCfg("ctDmzSetCfg.cmd", postData, updateAllCfg);
}

this.ipChange= function(elm)
{
	if (elm.value != "")
	{
		if (false == isValidIpAddress(elm.value))
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("dmzIpWarn"));
		}
		else
		{
			warnMsgHide(elm);
		}
	}
	else
	{
		warnMsgHide(elm);
	}
}

}  // End Page

function updateAlgCfg(jsonObj)
{
    currentPageInst.updateAlgCfg(jsonObj);
}

function updateDmzCfg(jsonObj)
{
    currentPageInst.updateDmzCfg(jsonObj);
}

function updateAllCfg()
{
	getCfg("ctAlgGet.json", "", updateAlgCfg);
	getCfg("ctDmzGetCfg.json", "", updateDmzCfg);
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
    this.basicClassFile = "./kt_alg_setup.js";
    this.customLv1File = "./kt_alg_setup_customlv1.js";
    this.customLv2File = "./kt_alg_setup_customlv2.js";
    this.customLv3File = "./kt_alg_setup_customlv3.js";
}

