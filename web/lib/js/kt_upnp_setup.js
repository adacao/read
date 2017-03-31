Page = function()
{

this.supportUpnpBlockIp;
this.ethIpAddress;




this.updateAll= function(jsonObj)
{
	this.supportUpnpBlockIp = jsonObj.backgroundSettings.buildUpnpBlockIp;
	this.ethIpAddress = jsonObj.backgroundSettings.ethIpAddress;
	
	this.updateUpnpState(jsonObj);
		
	if (!this.supportUpnpBlockIp)
	{
		$("#UPNP_DIV_Input").hide();
		return;
	}
	else
	{
		$("#UPNP_DIV_Input").show();
		this.prepareInput(jsonObj);
		
		this.makeRulTable(jsonObj);
	}
}


this.prepareInput= function(jsonObj)
{
	if (1 == jsonObj.upnpState.enblUpnp)
	{
		$(".UPNP_CLS_Check").removeAttr("disabled");
		$("#BTN_Add").removeAttr("disabled");
		$("#UPNP_DIV_Rules").show();
	}
	else
	{
		$(".UPNP_CLS_Check").attr("disabled", "disabled");
		$("#BTN_Add").attr("disabled", "disabled");
		$("#UPNP_DIV_Rules").hide();
	}
}


this.updateUpnpState= function(jsonObj)
{
	if (1 == jsonObj.upnpState.enblUpnp)
	{
		$("input[name='UPNP_RADIO_Mode']:eq(0)").attr("checked", "checked");
		
		if (1 == this.supportUpnpBlockIp)
		{
			$(".UPNP_CLS_Check").removeAttr("disabled");
			$("#BTN_Add").removeAttr("disabled");
			$("#UPNP_DIV_Rules").show();
		}
		
	}
	else
	{
		$.each($(".UPNP_CLS_Check"), function(i, list){warnMsgHide(list);$(list).val("");});
		
		$("input[name='UPNP_RADIO_Mode']:eq(1)").attr("checked", "checked");
		
		if (1 == this.supportUpnpBlockIp)
		{
			$(".UPNP_CLS_Check").attr("disabled", "disabled");
			$("#BTN_Add").attr("disabled", "disabled");
			$("#UPNP_DIV_Rules").hide();
		}
	}
	
}


this.makeRulTable= function(jsonObj)
{
	var htmlTable = "";
	
	if (0 == jsonObj.upnpRule.length)
	{
		$("#UPNP_RulesBody").empty();
		$("#BTN_Del").attr("disabled", "disabled");
	}
	else
	{
		$("#BTN_Del").removeAttr("disabled");
	
		$.each(jsonObj.upnpRule, function(i, list){
				htmlTable += "<tr>";
				htmlTable = htmlTable + "<td>&nbsp;"+ list.ipAddrMin + "</td>";
				htmlTable = htmlTable + "<td>&nbsp;"+ list.ipAddrMax +"</td>";
				htmlTable = htmlTable + "<td align='center'><input type='checkbox' name='rml' value='" + i + "'></td>";
				htmlTable += "</tr>";
		});
		
		$("#UPNP_RulesBody").empty();
		$("#UPNP_RulesBody").append(htmlTable);
	}
	
	$(".UPNP_CLS_Check").val("");
}


this.initHtmlText= function()
{
	$("#MainLeftStatus").append(getTagTextFromXmlDoc("upnpTitle"));
	$("#upnp").append(getTagTextFromXmlDoc("upnpup"));
	$("#UPNP_SrvTip").append(getTagTextFromXmlDoc("upnpSwitch"));
	$("#UPNP_LB_Enable").append(getTagTextFromXmlDoc("enableCtx"));
	$("#UPNP_LB_Disable").append(getTagTextFromXmlDoc("disableCtx"));
	$("#UPNP_IpStartTip").append(getTagTextFromXmlDoc("upnpIpStart"));
	$("#UPNP_IpEndTip").append(getTagTextFromXmlDoc("upnpIpEnd"));
	$("#BTN_Add").val(getTagTextFromXmlDoc("addCtx"));
	$("#UPNP_RulesTip").append(getTagTextFromXmlDoc("upnpRuleDiv"));
	$("#UPNP_StartIpTip").append(getTagTextFromXmlDoc("upnpIpStart"));
	$("#UPNP_EndIpTip").append(getTagTextFromXmlDoc("upnpIpEnd"));
	$("#UPNP_DelRuleTip").append(getTagTextFromXmlDoc("delCtx"));
	$("#BTN_Del").val(getTagTextFromXmlDoc("delCtx"));
}

this.registerEvent= function()
{
	$(".UPNP_CLS_Check").change(function(){currentPageInst.checkIp(this);});
	$("input[name='UPNP_RADIO_Mode']:eq(0)").click(function(){currentPageInst.enableUpnp();});
	$("input[name='UPNP_RADIO_Mode']:eq(1)").click(function(){currentPageInst.disableUpnp();});
	$("#BTN_Add").click(function(){currentPageInst.checkAndSubmit();});
	$("#BTN_Del").click(function(){currentPageInst.removeRule(this.form.rml);});
}


this.enableUpnp= function()
{
	var postData;
	jsonObjInit();
	
	disableSubmit($("input[name='UPNP_RADIO_Mode']:eq(0)"), $("input[name='UPNP_RADIO_Mode']:eq(1)"));
	
	jsonObjPush("enblUpnp", "1");
	
	postData = jsonObjEnd();
	setCfg("upnpSet.cmd", postData, renewUpnpState);
}




this.disableUpnp= function()
{
	var postData;
	jsonObjInit();
	
	disableSubmit($("input[name='UPNP_RADIO_Mode']:eq(0)"), $("input[name='UPNP_RADIO_Mode']:eq(1)"));
	
	jsonObjPush("enblUpnp", "0");
	
	postData = jsonObjEnd();
	setCfg("upnpSet.cmd", postData, renewUpnpState);
}


this.checkIp= function(elm)
{
	if ((isValidIpAddress(elm.value) == false)
	 || (isLoopBackIpAddress(elm.value))
	 || (IsValidHostIp(elm.value) == false)
	 || (IpAddrCompare(this.ethIpAddress, elm.value) == 0))
	{
		warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("upnpWarn1"));
		return 0;
	}
	else
	{
		warnMsgHide(elm);
		return 1;
	}
}


this.checkAndSubmit= function()
{
	var postData;
	var startIp = $("#UPNP_TEXT_StartIp").val();
	var endIp = $("#UPNP_TEXT_EndIp").val();
	jsonObjInit();

	$(".UPNP_CLS_Check").change();
	if (!checkValid(getTagTextFromXmlDoc("upnpWarn1")))
	{
		return;
	}
	
	if(IpAddrCompare(startIp, endIp) == 1)
   	{
		alert(getTagTextFromXmlDoc("upnpWarn2"));
		return;
   	}
	
	disableSubmit($("#BTN_Add"));
	
	jsonObjPush("action", "add");
	jsonObjPush("startIp", startIp);
	jsonObjPush("endIp", endIp);
	
	postData = jsonObjEnd();
	setCfg("upnpcfg.cmd", postData, renewUpnpRule);
}




this.removeRule= function(rml)
{		
    var lst = '';
    var i;
	var postData;
	jsonObjInit();
	
    if(rml.length > 0)
    {
        for(i = 0; i < rml.length; i++)
        {
            if(rml[i].checked == true)
            {
                lst += rml[i].value + ' ';
            }   
        }
    }   
    else if(rml.checked == true)
    {
        lst = rml.value;
    }
    
	disableSubmit($("#BTN_Del"));
	
	jsonObjPush("action", "remove");
	jsonObjPush("rmLst", lst);
	postData = jsonObjEnd();
	
	setCfg("upnpcfg.cmd", postData, renewUpnpRule);
}
// JavaScript Document

}  // End Page


function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllCfg()
{
	getCfg("upnpGet.json", {"backgroundSettings":"1", "upnpState":"1", "upnpRule":"1"}, updateAll);
}

function updateUpnpState(jsonObj)
{
    currentPageInst.updateUpnpState(jsonObj);
}

function renewUpnpState()
{
	getCfg("upnpGet.json", {"backgroundSettings":"0", "upnpState":"1", "upnpRule":"0"}, updateUpnpState);
}

function makeRulTable(jsonObj)
{
    currentPageInst.makeRulTable(jsonObj);
}

function renewUpnpRule()
{
	getCfg("upnpGet.json", {"backgroundSettings":"0", "upnpState":"0", "upnpRule":"1"}, makeRulTable);
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
    this.basicClassFile = "./kt_upnp_setup.js";
    this.customLv1File = "./kt_upnp_setup_customlv1.js";
    this.customLv2File = "./kt_upnp_setup_customlv2.js";
    this.customLv3File = "./kt_upnp_setup_customlv3.js";
}

