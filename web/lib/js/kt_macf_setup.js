Page = function()
{

// JavaScript Document
this.buildIpv6 = 0;
this.macfltCfg;
this.macfltRule;

this.initHtmlText= function()
{
	$("#MACF_FilterTitle").append(getTagTextFromXmlDoc("macFltAddRuleTitle"));
	$("#MACF_FilterTip").append(getTagTextFromXmlDoc("macFltCtx")+":");
	$("#MACF_LB_EnableTip").append(getTagTextFromXmlDoc("enableCtx"));
	$("#MACF_LB_DisableTip").append(getTagTextFromXmlDoc("disableCtx"));
	$("#MACF_ModeTip").append(getTagTextFromXmlDoc("filterModeCtx")+":");
	$("#MACF_LB_BlackListTip").append(getTagTextFromXmlDoc("blacklistCtx"));
	$("#MACF_LB_WhiteListTip").append(getTagTextFromXmlDoc("whitelistCtx"));
	$("#MACF_SrcTip").append(getTagTextFromXmlDoc("macSrcAddrCtx")+":");
	$("#MACF_DestTip").append(getTagTextFromXmlDoc("macDestAddrCtx")+":");
	$("#MACF_SrcAddrTip").append(getTagTextFromXmlDoc("macSrcAddrCtx"));
	$("#MACF_DestAddrTip").append(getTagTextFromXmlDoc("macDestAddrCtx"));
	$("#MACF_DelCheckBoxTip").append(getTagTextFromXmlDoc("delCtx"));
	$("#BTN_Add").val(getTagTextFromXmlDoc("addCtx"));
	$("#BTN_Del").val(getTagTextFromXmlDoc("delCtx"));
	$("#BTN_Back").val(getTagTextFromXmlDoc("backCtx"));
	$("#BTN_Confirm").val(getTagTextFromXmlDoc("ensureCtx"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
	$("#BTN_Cancel").attr("value", getTagTextFromXmlDoc("cancelCtx"));
    
	$("#MACF_ModeChangeTitle").append(getTagTextFromXmlDoc("macFltModeChangeTitile"));
	$("#MACF_ModeChangeTip").append(getTagTextFromXmlDoc("macfltNotice1"));
	$("#MACF_MenuSecMacList").append(getTagTextFromXmlDoc("menuSecMacList"));
}

/* set disable/enable or show/hide */
this.setElmStatus= function(flag){
	if (flag)
	{
        $("#MACF_DIV_Config").show();
		$("input[name='MACF_RADIO_Mode']:eq(0)").attr("disabled", false);
		$("input[name='MACF_RADIO_Mode']:eq(1)").attr("disabled", false);
		$("#MACF_TEXT_SrcAddr").attr("disabled", false);
		$("#MACF_TEXT_DestAddr").attr("disabled", false);
		$("#BTN_Add").attr("disabled", false);
		$("#MACF_TB_RuleDiv").show();
		$("#MACF_TEXT_SrcAddr").focus();
		$("#MACF_TEXT_SrcAddr").val("");
		$("#MACF_TEXT_DestAddr").val("");
		$("#MACF_TB_DelBtnDiv").show();
		$("#MACF_DIV_ConfigDiv").show();
	}
	else
	{
		$("#MACF_DIV_Config").hide();		
		$("input[name='MACF_RADIO_Mode']:eq(0)").attr("disabled", true);
		$("input[name='MACF_RADIO_Mode']:eq(1)").attr("disabled", true);
		$("#MACF_TEXT_SrcAddr").attr("disabled", true);
		$("#MACF_TEXT_DestAddr").attr("disabled", true);
		$("#MACF_TEXT_SrcAddr").val("");
		$("#MACF_TEXT_DestAddr").val("");
		$("#BTN_Add").attr("disabled", true);
		$("#MACF_TB_RuleDiv").hide();
		$("#MACF_TB_DelBtnDiv").hide();
		$("#MACF_DIV_ConfigDiv").hide();
	}
}

this.updateMacfltCfgElm= function(jsonObj)
{
	this.macfltCfg = jsonObj.macfltCfg;
	if (this.macfltCfg.enable == '1')
	{
        $("#MACF_CHX_Enable").attr("checked", true);
		this.setElmStatus(true);
	}
	else
	{
		$("#MACF_CHX_Enable").attr("checked", undefined);
		this.setElmStatus(false);
	}
	
	if (this.macfltCfg.mode == "0")
	{
		$("input[name='MACF_RADIO_Mode']:eq(0)").attr("checked",'checked');
	}
	else
	{
		$("input[name='MACF_RADIO_Mode']:eq(1)").attr("checked",'checked');
	}
}

this.updateMacfltRuleElm= function(jsonObj)
{
	var i;
	var htmlLabel = "";
	
	this.macfltRule = jsonObj.macfltRule;
	
	if (0 == this.macfltRule.length)
	{
		$("#MACF_FilterRuleList").empty();
		return;
	}
	$.each(this.macfltRule, function(i, list){
		htmlLabel += "<tr align='center'>";
		htmlLabel = htmlLabel + "<td>&nbsp;"+ list.srcMac + "</td>";
		htmlLabel = htmlLabel + "<td>&nbsp;"+ list.destMac + "</td>";
		htmlLabel = htmlLabel + "<td><input type='checkbox' name='rml' value='" + list.protocol;
		if ("" == list.srcMac)
		{
			htmlLabel = htmlLabel + "|" + " "; 
		}
		else
		{
			htmlLabel = htmlLabel + "|" + list.srcMac;
		}

		if ("" == list.destMac)
		{
			htmlLabel = htmlLabel + "|" + " "; 
		}
		else
		{
			htmlLabel = htmlLabel + "|" + list.destMac;
		}
		
		htmlLabel = htmlLabel + "'></td>";
		htmlLabel += "</tr>";
	});
	$("#MACF_FilterRuleList").empty();
	$("#MACF_FilterRuleList").append(htmlLabel);
	$("#MACF_TEXT_SrcAddr").val("");
	$("#MACF_TEXT_DestAddr").val("");
}

this.updateAll= function(jsonObj)
{
	this.updateMacfltCfgElm(jsonObj);
	this.updateMacfltRuleElm(jsonObj);
}

this.displayMacflt= function(elm)
{
    if(elm.checked)
    {
        this.setElmStatus(true);
    }
    else
    {
        this.setElmStatus(false);
    }   
    
}

this.enableMacflt= function()
{
	var postData;
	//this.setElmStatus(true);
	jsonObjInit();
	jsonObjPush("action","change");
	jsonObjPush("enable","1");
	postData = jsonObjEnd();
	
	setCfg("ctMacfltSet.cmd",postData, updateMacfltCfg);
}

this.disableMacflt= function()
{
	var postData;
	//this.setElmStatus(false);
	jsonObjInit();
	jsonObjPush("action","change");
	jsonObjPush("enable","0");
	postData = jsonObjEnd();
	
	setCfg("ctMacfltSet.cmd",postData, null, true);
}

this.buttonApply= function()
{
    if ($("#MACF_CHX_Enable").attr("checked")== undefined)
    {
        this.disableMacflt();
    }
    else
    {
        this.enableMacflt(); 
    }
}

this.changeMacfltMode= function()
{
	$("#MACF_FROM_ModeChange").show();
	$("#MACF_FilterTitle").hide();
	$("#MACF_FORM_Config").hide();
	
	var warnStr;
	if($("input[name='MACF_RADIO_Mode']:eq(0)").attr("checked"))
	{
		warnStr = getTagTextFromXmlDoc("macfltEnsureCtx") + "? (<font color='red'>"+getTagTextFromXmlDoc("whitelistCtx")+"</font> "+getTagTextFromXmlDoc("macfltChangeTo")+" <font color='green'>"+getTagTextFromXmlDoc("blacklistCtx")+"</font>)";
	}
	else
	{
		warnStr = getTagTextFromXmlDoc("macfltEnsureCtx") + "? (<font color='green'>"+getTagTextFromXmlDoc("blacklistCtx")+"</font> "+getTagTextFromXmlDoc("macfltChangeTo")+" <font color='red'>"+getTagTextFromXmlDoc("whitelistCtx")+"</font>)";
	}
	$("#MACF_ModeChangeConfirm").empty();
	$("#MACF_ModeChangeConfirm").append(warnStr);
	$("#MACF_TEXT_SrcAddr").val("");
	$("#MACF_TEXT_DestAddr").val("");
}

this.changeMacfltModeCancel= function()
{
	$("#MACF_FROM_ModeChange").hide();
	$("#MACF_FilterTitle").show();
	$("#MACF_FORM_Config").show();
	if($("input[name='MACF_RADIO_Mode']:eq(0)").attr("checked"))
	{
		$("input[name='MACF_RADIO_Mode']:eq(1)").attr("checked",'checked');
	}
	else
	{
		$("input[name='MACF_RADIO_Mode']:eq(0)").attr("checked",'checked');
	}

	this.macAddrOnchange();
	$("#MACF_TEXT_SrcAddr").focus();
}

this.changeMacfltModeEnsure= function()
{
    this.enableMacflt();
    
	var postData;
	$("#MACF_FROM_ModeChange").hide();
	$("#MACF_FilterTitle").show();
	$("#MACF_FORM_Config").show();
	jsonObjInit();
	jsonObjPush("action","change");
	jsonObjPush("changepolicy","1");
	jsonObjPush("enable",this.macfltCfg.enable);
	postData = jsonObjEnd();
	
	setCfg("ctMacfltSet.cmd", postData, updateAllCfg);
}

this.addMacfltRule= function()
{
	if (!checkValid())
	{
		return;
	}

	var srcMac = $("#MACF_TEXT_SrcAddr").val();
	var destMac = $("#MACF_TEXT_DestAddr").val();
	
	var postData;
	jsonObjInit();
	jsonObjPush("action","add");
	jsonObjPush("protocol", "None");
	jsonObjPush("srcMac", srcMac);
	jsonObjPush("destMac", destMac);
	postData = jsonObjEnd();
	
	setCfg("ctMacfltSet.cmd", postData, updateMacfltRule);
}

this.delMacfltRule= function()
{
	var rmlObj = $("input[name='rml']");
	var rmlStr = "";
	var postData;
	
	$.each(rmlObj, function(i,n ){
		if (n.checked)
		{
			rmlStr = rmlStr + n.value +",";
		}
	});
	if ("" != rmlStr)
	{
		jsonObjInit();
		jsonObjPush("action","remove");
		jsonObjPush("rmLst", rmlStr);
		postData = jsonObjEnd();
	}
	
	setCfg("ctMacfltSet.cmd", postData, updateMacfltRule);
}

this.macAddrOnchange= function()
{
	var srcMac = $("#MACF_TEXT_SrcAddr").val();
	var destMac = $("#MACF_TEXT_DestAddr").val();

	if (("" != srcMac) && ("" != destMac))
	{
		if (false == isValidMacAddress(srcMac))
		{
			warnMsgShow($("#MACF_TEXT_SrcAddr")[0], srcMac + getTagTextFromXmlDoc("macfltWarn1"));
		}
		else
		{
			warnMsgHide($("#MACF_TEXT_SrcAddr")[0]);
		}

		if (false == isValidMacAddress(destMac))
		{
			warnMsgShow($("#MACF_TEXT_DestAddr")[0], destMac + getTagTextFromXmlDoc("macfltWarn1"));
		}
		else
		{
			warnMsgHide($("#MACF_TEXT_DestAddr")[0]);
		}
		
		if (srcMac == destMac)
		{
			alert(getTagTextFromXmlDoc("macFltWarn"));
			return ;
		}
	}
	else if (("" == srcMac) && ("" != destMac))
	{
		warnMsgHide($("#MACF_TEXT_SrcAddr")[0]);

		if (false == isValidMacAddress(destMac))
		{
			warnMsgShow($("#MACF_TEXT_DestAddr")[0], destMac + getTagTextFromXmlDoc("macfltWarn1"));
		}
		else
		{
			warnMsgHide($("#MACF_TEXT_DestAddr")[0]);
		}
	}
	else if (("" != srcMac) && ("" == destMac))
	{
		warnMsgHide($("#MACF_TEXT_DestAddr")[0]);

		if (false == isValidMacAddress(srcMac))
		{
			warnMsgShow($("#MACF_TEXT_SrcAddr")[0], srcMac + getTagTextFromXmlDoc("macfltWarn1"));
		}
		else
		{
			warnMsgHide($("#MACF_TEXT_SrcAddr")[0]);
		}
	}
	else
	{
		warnMsgHide($("#MACF_TEXT_SrcAddr")[0]);
		warnMsgHide($("#MACF_TEXT_DestAddr")[0]);
	}
}

this.registerEvent= function()
{
	$("#MACF_CHX_Enable").click(function(){
		currentPageInst.displayMacflt(this);
	});
	
	$("input[name='MACF_RADIO_Mode']:eq(0)").click(function(){
		currentPageInst.changeMacfltMode();
	});
	$("input[name='MACF_RADIO_Mode']:eq(1)").click(function(){
		currentPageInst.changeMacfltMode();
	});
	
	$("#BTN_Add").click(function(){
		currentPageInst.addMacfltRule();
	});
	
	$("#BTN_Del").click(function(){
		currentPageInst.delMacfltRule();
	});
	
	$("#BTN_Back").click(function(){
		currentPageInst.changeMacfltModeCancel();
	});
	$("#BTN_Confirm").click(function(){
		currentPageInst.changeMacfltModeEnsure();
	});
    
    $("#BTN_Apply").click(function(){
		currentPageInst.buttonApply();
        currentPageInst.addMacfltRule();
	});
	$("#BTN_Cancel").click(function(){
		pageJump("kt_macf_setup.html");
	});
    
   	//onchange event
	$("#MACF_TEXT_SrcAddr").change(function(){
		currentPageInst.macAddrOnchange();
	});
	$("#MACF_TEXT_DestAddr").change(function(){
		currentPageInst.macAddrOnchange();
	});
}


}  // End Page


function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllCfg()
{
	getCfg("ctMacfltGet.json", {"ctrlCfg":"1", "macfltCfg":"1", "macfltRule":"1"}, updateAll);
}

function updateMacfltCfgElm(jsonObj)
{
    currentPageInst.updateMacfltCfgElm(jsonObj);
}

function updateMacfltCfg()
{
	getCfg("ctMacfltGet.json", {"ctrlCfg":"1", "macfltCfg":"1"}, updateMacfltCfgElm);
}

function updateMacfltRuleElm(jsonObj)
{
    currentPageInst.updateMacfltRuleElm(jsonObj);
}

function updateMacfltRule()
{
	getCfg("ctMacfltGet.json", {"macfltRule":"1"}, updateMacfltRuleElm);
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
    this.basicClassFile = "./macf_setup.js";
    this.customLv1File = "./macf_setup_customlv1.js";
    this.customLv2File = "./macf_setup_customlv2.js";
    this.customLv3File = "./macf_setup_customlv3.js";
}

