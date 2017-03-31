Page = function()
{

// JavaScript Document

this.g_mcVlanObj = null;
this.g_iptvEnable = false;


this.initHtmlText= function()
{
    $("#MenuApp_Daily_use").append(getTagTextFromXmlDoc("menuAppDailyuse"));
	$("#IPTV_Enable").append(getTagTextFromXmlDoc("iptvEnableCtx")+":");
	$("#IPTV_PubVlanTitle").append(getTagTextFromXmlDoc("mcVlanTitle"));
	$("#IPTV_PubVlanDesc").append(getTagTextFromXmlDoc("mcVlanComment"));
	$("#IPTV_PubVlanDesc2").append(getTagTextFromXmlDoc("mcVlanComment2"));
	$("#IPTV_WanConnName").append(getTagTextFromXmlDoc("wanConnectName"));
	$("#IPTV_PubMcVlan").append(getTagTextFromXmlDoc("mcVlanId"));
	$("#BTN_Apply").val(getTagTextFromXmlDoc("saveApplyCtx"));
	$("#BTN_ApplyNo").val(getTagTextFromXmlDoc("saveApplyNo"));
}

this.updateIptvCfg= function(jsonObj)
{
	if (jsonObj.iptvEnable == "1")
	{
		$("#IPTV_CHX_Enable").attr("checked", true);
		this.g_iptvEnable = true;
	}
	else
	{
		$("#IPTV_CHX_Enable").attr("checked", false);
		this.g_iptvEnable = false;
	}
	
	this.enableIptv($("#IPTV_CHX_Enable")[0]);
}

this.updateMcVlanCfg= function(jsonObj)
{
	this.g_mcVlanObj = jsonObj;
	this.updateSelectList(jsonObj);
	this.updateMcVlanValue($("#IPTV_SEL_WanConnName")[0]);
}


this.updateSelectList= function(jsonObj)
{
	var tempHtml = "";
	
	$.each(jsonObj.wanIpCfg, function(i, list){
		if (list.Name.indexOf("INTERNET") != -1 || list.Name.indexOf("OTHER") != -1 || 
			list.Name.indexOf("Other") != -1 || list.Name.indexOf("IPTV") != -1)
		{
			tempHtml += "<option value='"+ list.Name +"' >" + list.Name + "</option>";	
		}
	});
	
	$.each(jsonObj.wanPppCfg, function(i, list){
		if (list.Name.indexOf("INTERNET") != -1 || list.Name.indexOf("OTHER") != -1 || 
			list.Name.indexOf("Other") != -1 || list.Name.indexOf("IPTV") != -1)
		{
			tempHtml += "<option value='"+ list.Name +"' >" + list.Name + "</option>";	
		}
	});
	
	if ("" == tempHtml)
	{
		tempHtml += "<option value='' >" + getTagTextFromXmlDoc("mcVlanNoWanConnect") + "</option>";
		$("#IPTV_SEL_WanConnName").attr("disabled", "disabled");
		$("#BTN_Apply").attr("disabled", "disabled");
		$("#IPTV_TEXT_PubMcVlan").attr("disabled", "disabled");
	}
	else
	{
		$("#IPTV_SEL_WanConnName").attr("disabled", false);
		$("#BTN_Apply").attr("disabled", false);
		$("#IPTV_TEXT_PubMcVlan").attr("disabled", false);
	}
		
	$("#IPTV_SEL_WanConnName").empty();
	$("#IPTV_SEL_WanConnName").append(tempHtml);
}


this.updateMcVlanValue= function(elm)
{
	var end = 0;
	$.each(this.g_mcVlanObj.wanIpCfg, function(i, list){
		if (list.Name == elm.value)
		{
			$("#IPTV_TEXT_PubMcVlan").val(list.MulticastVlan);
			end = 1;
			return false;
		}
	});
	
	if (1 == end)
	{
		return;
	}
	
	$.each(this.g_mcVlanObj.wanPppCfg, function(i, list){
		if (list.Name == elm.value)
		{
			$("#IPTV_TEXT_PubMcVlan").val(list.MulticastVlan);
			end = 1;
			return false;
		}
	});
}

this.enableIptv= function(elm)
{
	if (elm.checked)
	{
		$("#IPTV_DIV_PubVlan").show();
	}
	else
	{
		$("#IPTV_DIV_PubVlan").hide();
	}
	
	if (this.g_iptvEnable != elm.checked)
	{
		this.setIptvCfg();
	}
}

this.setIptvCfg= function()
{
	var postData;
	jsonObjInit();
	
	if ($("#IPTV_CHX_Enable").attr("checked"))
	{
		jsonObjPush("iptvEnable", "1");
	}
	else
	{
		jsonObjPush("iptvEnable", "0");
	}
	
	postData = jsonObjEnd();
	setCfg("iptvSetCfg.cmd", postData, updateIptv);
}


this.registerEvent= function()
{
	$("#IPTV_CHX_Enable").click(function(){currentPageInst.enableIptv(this)});
	$("#IPTV_SEL_WanConnName").change(function(){currentPageInst.updateMcVlanValue(this);});
	
	$("#BTN_Apply").click(function(){currentPageInst.checkAndSubmit();});
	$("#IPTV_TEXT_PubMcVlan").change(function(){currentPageInst.checkMcVlanValue(this);});

	$("#BTN_ApplyNo").click(function(){currentPageInst.checkAndSubmitNo();});

}


this.checkMcVlanValue= function(elm)
{
	if (elm.value == '')
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("mcVlanWarn1"));
		return false;
	}
	else if (isNaN(elm.value) || parseInt(elm.value) < -1 || parseInt(elm.value) > 4095)
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("mcVlanWarn2"));
		return false;
	}
    else
    {
        var conName = $("#IPTV_SEL_WanConnName").val();
        var conNameChip = ('' + conName).split('_');
        var wanVlan = ~~conNameChip[conNameChip.length - 1];
        if (wanVlan === ~~elm.value)
        {
            warnMsgShow(elm, getTagTextFromXmlDoc("mcVlanWVlanRepeat"));
            return false;
        }
    }
	
	warnMsgHide(elm);
	return true;
}


this.checkAndSubmit= function()
{
	var postData;
	jsonObjInit();
	
	$("#IPTV_TEXT_PubMcVlan").change();
	
	if (!checkValid())
	{
		return;
	}
	
	jsonObjPush("conName", $("#IPTV_SEL_WanConnName").val());
	jsonObjPush("mcVlan", $("#IPTV_TEXT_PubMcVlan").val());
	
	postData = jsonObjEnd();
	setCfg("multicastvlan.cmd", postData, updateMcVlan);
}

this.checkAndSubmitNo=function(){
	$("#IPTV_CHX_Enable").attr("checked", false);
	$("#IPTV_DIV_PubVlan").hide();
	

}
}  // End Page


function updateIptvCfg(jsonObj)
{
    currentPageInst.updateIptvCfg(jsonObj);
}

function updateIptv()
{
	getCfg("iptvGet.json", null, updateIptvCfg);
}

function updateMcVlanCfg(jsonObj)
{
    currentPageInst.updateMcVlanCfg(jsonObj);
}

function updateMcVlan()
{
	getCfg("mcVlanGet.json", {"wanIpCfg":"1", "wanPppCfg":"1"}, updateMcVlanCfg);
}

function updateAllCfg()
{
	updateIptv();
	updateMcVlan();
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
    this.basicClassFile = "./kt_daily_use.js";
    this.customLv1File = "./kt_daily_use_customlv1.js";
    this.customLv2File = "./kt_daily_use_customlv2.js";
    this.customLv3File = "./kt_daily_use_customlv3.js";
}

