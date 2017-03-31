Page = function()
{

this.enblMDW;


this.initHtmlText= function()
{
	$("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuNetTr69Itms"));
	$("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("STUNset"));
	$("#TR69_TD_Inform").append(getTagTextFromXmlDoc("menuNetTr069status"));
	//$("#TR69_CHX_Inform").append(getTagTextFromXmlDoc("tr69Inform"));
	$("#TR69_Enable").append(getTagTextFromXmlDoc("enableCtx"));
	$("#TR69_Disable").append(getTagTextFromXmlDoc("disableCtx"));
	$("#TR69_TD_HrefCert").append(getTagTextFromXmlDoc("tr69HrefCert"));
	$("#TR69_TD_InformInter").append(getTagTextFromXmlDoc("tr69InformInt"));
	$("#TR69_TD_AcsUrl").append(getTagTextFromXmlDoc("AcsAddr"));
	$("#TR69_TD_AcsUserName").append(getTagTextFromXmlDoc("AcsUserName"));
	$("#TR69_TD_function").append(getTagTextFromXmlDoc("tr69Informfunction"));
	$("#maintenancechange").append(getTagTextFromXmlDoc("changeusermain"));
	$("#maintenancechangebtn").attr("value", getTagTextFromXmlDoc("changeusermain"));
	$("#STUNset").append(getTagTextFromXmlDoc("STUNset"));
	$("#TR69_TD_AcsPwd").append(getTagTextFromXmlDoc("AcsPassWord"));
	$("#TR69_TD_ConnReqAuth").append(getTagTextFromXmlDoc("ConnReqAuth"));
	$("#TR69_TD_ConnReqName").append(getTagTextFromXmlDoc("ConnReqUserName"));
	$("#TR69_TD_ConnReqPwd").append(getTagTextFromXmlDoc("ConnReqPassWord"));
	$("#TR69_TD_Mdw").append(getTagTextFromXmlDoc("MiddleWare"));
	$("#TR69_Mldmode1").append(getTagTextFromXmlDoc("EnableMldI"));
	$("#TR69_Mldmode2").append(getTagTextFromXmlDoc("DisableMld"));
	$("#TR69_Mldmode3").append(getTagTextFromXmlDoc("EnableMldE"));
	$("#TR69_TD_MldAddr").append(getTagTextFromXmlDoc("MldServerAddr"));
	$("#TR69_TD_MldPort").append(getTagTextFromXmlDoc("MldServerPort"));
	$("#TR69_BTN_Certificate").attr("value", getTagTextFromXmlDoc("CertImport"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx"));
	$("#BTN_cancle").attr("value", getTagTextFromXmlDoc("cancelCtx"));
}


this.setElmStatus= function(flag)
{
    $("#TR69_TEXT_AcsUrl").attr("disabled", flag);
    $("#TR69_TEXT_AcsUser").attr("disabled", flag);
    $("#TR69_PWD_AcsPwd").attr("disabled", flag);
    $("#TR69_TEXT_ConnReqName").attr("disabled", flag);
    $("#TR69_PWD_ConnReqPwd").attr("disabled", flag);

    $("#TR69_CHX_ConnReqAuth").attr("disabled", flag);
    $("input[name='TR69_CHX_Inform']").attr("disabled", flag);
    $("input[name='TR69_RADIO_Mdw']").attr("disabled", flag);
    $("#TR69_TEXT_MldAddr").attr("disabled", flag);
    $("#TR69_TEXT_MldPort").attr("disabled", flag);
    $("#BTN_Apply").attr("disabled", flag); 
}

this.updateCfgBeforeHook = function(){
	//default we hide ct midlleware div!
	$("#TR69_DIV_Mdw").hide();
	$("#TR69_DIV_Mdw").attr("id", "");
}

this.updateAll= function(jsonObj)
{
	this.updateCfgBeforeHook();
	if (jsonObj.fixedTr69 == '1')
	{
		if(ctrlcfgInst.getCustomer() == "jinqianmao" &&( ctrlcfgInst.getLocation() == "hainan"||ctrlcfgInst.getLocation() == "fujian"))
		{
			this.setElmStatus(false);
		}
		else
		{
			this.setElmStatus(true); 
		}

	}
	else
	{
		this.setElmStatus(false);
	}

	if (jsonObj.bulidMld == '0')
	{
		$("#TR69_DIV_Mdw").hide();
	}
	else
	{
		$("#TR69_DIV_Mdw").show();
	}

	if (jsonObj.enableTr69 == '1')
	{
		$("input[name='TR69_CHX_Inform']").attr("checked",'checked');
	}
	else
	{
		$("input[name='TR69_CHX_Inform']").attr("checked",false);
	}

	if (jsonObj.periodicInformEnable == '1')
	{
		$("#TR69_CHX_PeriodicInformEnable").attr("checked",'checked');
	}
	else
	{
		$("#TR69_CHX_PeriodicInformEnable").attr("checked",undefined);
	}
	
	$("#TR69_TEXT_InformInter").val(jsonObj.informInterval);
	$("#TR69_TEXT_AcsUrl").val(jsonObj.acsURL);
	$("#TR69_TEXT_AcsUser").val(jsonObj.acsUsername);
	$("#TR69_PWD_AcsPwd").val(jsonObj.acsPassword);
	
	if (jsonObj.enableConnReqAuth == '1')
	{
		$("#TR69_CHX_ConnReqAuth").attr("checked", 'checked');
		$("#TR69_DIV_ConnAuth").show();
	}
	else
	{
		$("#TR69_CHX_ConnReqAuth").attr("checked", undefined);
		$("#TR69_DIV_ConnAuth").hide();
	}
	
	$("#TR69_TEXT_ConnReqName").val(jsonObj.connReqUser);
	$("#TR69_PWD_ConnReqPwd").val(jsonObj.connReqPwd);
	
	this.enblMDW = jsonObj.enableMld;
	if (jsonObj.enableMld == '1')
	{
		$("input[name='TR69_RADIO_Mdw']:eq(1)").attr("checked",'checked');
	}
	else if (jsonObj.enableMld == '2')
	{
		$("input[name='TR69_RADIO_Mdw']:eq(2)").attr("checked",'checked');
	}
	else
	{
		$("input[name='TR69_RADIO_Mdw']:eq(0)").attr("checked",'checked');
	}

	$("#TR69_TEXT_MldPort").empty();
	$("#TR69_TEXT_MldAddr").val(jsonObj.MldUrl);
	$("#TR69_TEXT_MldPort").val(jsonObj.MldPort);

	return;
}




this.btnApply= function()
{
	var postData;

	if (!checkValid())
	{
		return;
	}
	
	jsonObjInit();
	if ($("input[name='TR69_CHX_Inform']").attr("checked") == 'checked')
	{
		jsonObjPush("enableTr69", '1');
	}
	else
	{
		jsonObjPush("enableTr69", '0');
	}

	if ($("#TR69_CHX_PeriodicInformEnable").attr("checked"))
	{
		jsonObjPush("periodicInformEnable", '1');
	}
	else
	{
	    jsonObjPush("periodicInformEnable", '0');
	}
	
	jsonObjPush("interval", $("#TR69_TEXT_InformInter").val());
	
	jsonObjPush("acsUrl", $("#TR69_TEXT_AcsUrl").val());
	jsonObjPush("acsName", $("#TR69_TEXT_AcsUser").val());
	jsonObjPush("acsPwd", $("#TR69_PWD_AcsPwd").val());

	if ($("#TR69_CHX_ConnReqAuth").attr("checked") == 'checked')
	{
		jsonObjPush("connReqAuth", '1');
	}
	else
	{
		jsonObjPush("connReqAuth", '0');
	}
	
	jsonObjPush("connReqUser", $("#TR69_TEXT_ConnReqName").val());
	jsonObjPush("connReqPwd", $("#TR69_PWD_ConnReqPwd").val());
	
	if ($("input[name='TR69_RADIO_Mdw']:eq(1)").attr("checked") == ('checked'))
	{
		jsonObjPush("ctMWMode", '1');
	}
	else if ($("input[name='TR69_RADIO_Mdw']:eq(0)").attr("checked") == ('checked'))
	{
		if (this.enblMDW == '2')
		{
			alert(getTagTextFromXmlDoc("MldWarn"));
			$("input[name='TR69_RADIO_Mdw']:eq(2)").attr("checked" ,'checked');
			return;
		}
		else
		{
			jsonObjPush("ctMWMode", '0');
		}
	}
	else
	{
		if (this.enblMDW == '0')
		{
			alert(getTagTextFromXmlDoc("MldWarn"));	
			$("input[name='TR69_RADIO_Mdw']:eq(0)").attr("checked" ,'checked');
			return;
		}
		else
		{
			jsonObjPush("ctMWMode", '2');
		}
	}
	
	jsonObjPush("tr69cMWSURL", $("#TR69_TEXT_MldAddr").val()+":"+ $("#TR69_TEXT_MldPort").val());

	postData = jsonObjEnd();

	setCfg("ctTr69CfgSet.json", postData, updateAllCfg);
}


this.updateConnReq= function()
{
	if ($("#TR69_CHX_ConnReqAuth").attr("checked") == 'checked')
	{
		$("#TR69_DIV_ConnAuth").show();
	}
	else
	{
		$("#TR69_DIV_ConnAuth").hide();
	}
}


this.isvalideInterval= function(elm)
{
	if (isNaN(elm.value)) 
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("tr69IntervalWarn1"));
		return false;
	}
	
	if(elm.value > 2147482 || elm.value < 90)
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("tr69IntervalWarn2"));
		return false;
	}

	return true;
}


this.checkInterval= function(elm)
{	
	if (elm.value != "")
	{
		if (!this.isvalideInterval(elm))
			return;
	}
	
	warnMsgHide(elm);
}


this.checkUrl= function(elm)
{
	if (elm.value != "")
	{
		if (isIncludeInvalidChar(elm.value) || (isValidTr069Url(elm.value) == false))
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("AcsAddrWarn"));
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

this.checkUser= function(elm)
{
	if (elm.value != "")
	{
		if (isIncludeInvalidChar(elm.value) || (elm.value.length > 256) || (filterSpecSymbol(elm.value) == false))
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("AcsUserWarn"));
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

this.checkPassword= function(elm)
{
	if (elm.value != "")
	{
		if (isIncludeInvalidChar(elm.value) || (elm.value.length > 256))
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("AcsUserWarn"));
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

this.checkIpAddr= function(elm)
{
	if (elm.value != "")
	{
		if (false == isValidIpAddress(elm.value))
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("WarnMldServerAddr"));
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

this.checkPort= function(elm)
{
	if (elm.value != "")
	{
		if (!isValidPort(elm.value) || (parseInt(elm.value) == 0) && elm.value.length > 0)
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("AcsUserWarn"));
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


this.jumpToCert= function()
{
	pageJump("kt_tr69_cert.html");
}


this.registerEvent= function()
{		
	$("#BTN_Apply").click(function(){
		currentPageInst.btnApply();
	});
	
	$("#TR69_BTN_Certificate").click(function(){
		currentPageInst.jumpToCert();
	});
	
	$("#TR69_CHX_ConnReqAuth").click(function(){
		currentPageInst.updateConnReq();
	});

	$("#TR69_TEXT_InformInter").change(function(){
		currentPageInst.checkInterval(this);
	});
	
	$("#TR69_TEXT_AcsUrl").change(function(){
		currentPageInst.checkUrl(this);
	});
	
	$("#TR69_TEXT_AcsUser").change(function(){
		currentPageInst.checkUser(this);
	});
	
	$("#TR69_PWD_AcsPwd").change(function(){
		currentPageInst.checkPassword(this);
	});

	$("#TR69_TEXT_ConnReqName").change(function(){
		currentPageInst.checkUser(this);
	});

	$("#TR69_PWD_ConnReqPwd").change(function(){
		currentPageInst.checkPassword(this);
	});
	
	$("#TR69_TEXT_MldAddr").change(function(){
		currentPageInst.checkIpAddr(this);
	});
	
	$("#TR69_TEXT_MldPort").change(function(){
		currentPageInst.checkPort(this);
	});
	 
}

}  // End Page


function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllCfg()
{
	getCfg("ctTr69CfgGet.json", "", updateAll);
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
    this.basicClassFile = "./kt_tr69_setup.js";
    this.customLv1File = "./kt_tr69_setup_customlv1.js";
    this.customLv2File = "./kt_tr69_setup_customlv2.js";
    this.customLv3File = "./kt_tr69_setup_customlv3.js";
}

