Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#IGMP_AppIgmpSnopping").append(getTagTextFromXmlDoc("menuAppIgmpSnopping"));
	$("#IGMP_AppIgmpProxy").append(getTagTextFromXmlDoc("menuAppIgmpProxy"));
	$("#IGMP_Text_IgmpSnopping").append(getTagTextFromXmlDoc("menuAppIgmpSnopping"));
	$("#IGMP_Text_IgmpProxy").append(getTagTextFromXmlDoc("menuAppIgmpProxy"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
	$("#BTN_ApplyNo").attr("value", getTagTextFromXmlDoc("saveApplyNo")); 
}
this.btnApply= function(jsonObj)
{
	var postData;
	jsonObjInit();
	$.each($("input[name='pName']"), function(idx, proxyElm){									
	if (proxyElm.checked)
    {
    	jsonObjPush(proxyElm.value, "1");
	}
	else
	{
		jsonObjPush(proxyElm.value,"0" );
	}
	
	});
	
	postData = jsonObjEnd();
	setCfg("igmpProxySet.cmd", postData, updateAllCfg);

}

this.btnApplyTwo= function()
{
	var postData;

	jsonObjInit();
		
	if ($("#IGMP_SnoppingEnableTh").attr("checked")==undefined)
    {
    	jsonObjPush("igmpSnoopingEnable", "0");
	}
	else
	{
		jsonObjPush("igmpSnoopingEnable", "1");
		jsonObjPush("igmpSnoopingMode", $("input[name='IGMP_RADIO_SnoopingMode']:checked").val());
	}
	
	postData = jsonObjEnd();
	setCfg("igmpSnoopingSet.cmd", postData, updateAllCfg);
}

this.btnApplyNo=function(){
	$("#IGMP_SnoppingEnableTh").attr("checked","checked");
	$("#IGMP_ProxyIntfTh").attr("checked","checked");

}
this.updateigmpproxyCfg= function(jsonObj)
{	
	
}
this.updateigmpSnoopingCfg= function(jsonObj)
{	
	
}

this.registerEvent= function()
{
	$("#BTN_Apply").click(function()
	{
		currentPageInst.btnApply();
		currentPageInst.btnApplyTwo();
	});
	$("#BTN_ApplyNo").click(function()
	{
		currentPageInst.btnApplyNo();
	});

}

}  // End Page


function updateigmpproxyCfg(jsonObj)
{
    currentPageInst.updateigmpproxyCfg(jsonObj);
}

function updateigmpSnoopingCfg(jsonObj)
{
    currentPageInst.updateigmpSnoopingCfg(jsonObj);
}


function updateAllCfg()
{
	getCfg("igmpProxyGet.json", "", updateigmpproxyCfg);
	getCfg("igmpSnoopingGet.json", "", updateigmpSnoopingCfg);

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
    this.basicClassFile = "./kt_igmp_proxy.js";
    this.customLv1File = "./kt_igmp_proxy_customlv1.js";
    this.customLv2File = "./kt_igmp_proxy_customlv2.js";
    this.customLv3File = "./kt_igmp_proxy_customlv3.js";
}

