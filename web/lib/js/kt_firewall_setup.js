Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#FIREWALL_LevelTitle").append(getTagTextFromXmlDoc("firewallLevel"));
	$("#FIREWALL_LB_portScanDetectEnable").append(getTagTextFromXmlDoc("enalbeportScanDetectCtx"));
	$("#FIREWALL_LB_pingofDeathAttackEnable").append(getTagTextFromXmlDoc("enalbepingofDeathAttackCtx"));
	$("#FIREWALL_LB_synFloodAttackEnable").append(getTagTextFromXmlDoc("enalbesynFloodAttackCtx"));
	$("#FIREWALL_LB_winnukeAttackEnable").append(getTagTextFromXmlDoc("enablewinnukeAttackCtx"));
	$("#FIREWALL_LB_smurfAttackEnable").append(getTagTextFromXmlDoc("enablesmurfAttackCtx"));
	$("#FIREWALL_LB_portredirectAttackEnable").append(getTagTextFromXmlDoc("enableportredirectAttackCtx"));
	$("#FIREWALL_LB_menSecFireWallLevel").append(getTagTextFromXmlDoc("menSecFireWallLevel"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx"));
	$("#BTN_ApplyNo").attr("value", getTagTextFromXmlDoc("saveApplyNo"));

}

this.btnApply= function()
{
	var postData;

	jsonObjInit();
	
	if (!checkValid())
	{
		return;
	}
	
	if ($("#FIREWALL_CHX_portScanDetectEnable").attr("checked")== undefined)
    {
    	jsonObjPush("portScanDetectEnable", "0");
	}
	else
	{
		jsonObjPush("portScanDetectEnable", "1");
	}
		
	if ($("#FIREWALL_CHX_pingofDeathAttackEnable").attr("checked")== undefined)
	{
     	jsonObjPush("pingofDeathAttackEnable", "0");
	}
	else
	{
		jsonObjPush("pingofDeathAttackEnable", "1");
	}
		
	if ($("#FIREWALL_CHX_synFloodAttackEnable").attr("checked")==undefined)
    {
    	jsonObjPush("synFloodAttackEnable", "0");
	}
	else
	{
		jsonObjPush("synFloodAttackEnable", "1");
	}
	
	if ($("#FIREWALL_CHX_winnukeAttackEnable").attr("checked")==undefined)
	{
		jsonObjPush("winnukeAttackEnable", "0");
	}
	else
	{
		jsonObjPush("winnukeAttackEnable", "1");
	}

	if ($("#FIREWALL_CHX_smurfAttackEnable").attr("checked")==undefined)
	{
		jsonObjPush("smurfAttackEnable", "0");
	}
	else
	{
		jsonObjPush("smurfAttackEnable", "1");
	}

	if ($("#FIREWALL_CHX_portredirectAttackEnable").attr("checked")==undefined)
	{
		jsonObjPush("portredirectAttackEnable", "0");
	}
	else
	{
		jsonObjPush("portredirectAttackEnable", "1");
	}

	postData = jsonObjEnd();
	setCfg("antiAttackSet.cmd", postData, updateAllCfg); 
}

this.updateFirewallCfg= function(jsonObj)
{
	if (jsonObj.antiDos.portScanDetectEnable == '1')
	{
		$("#FIREWALL_CHX_portScanDetectEnable").attr("checked", true);
	}
	else
	{
		$("#FIREWALL_CHX_portScanDetectEnable").attr("checked", undefined);
	}
	
	if (jsonObj.antiDos.pingofDeathAttackEnable == '1')
	{
		$("#FIREWALL_CHX_pingofDeathAttackEnable").attr("checked", true);
	}
	else
	{
		$("#FIREWALL_CHX_pingofDeathAttackEnable").attr("checked", undefined);
	}
	
	if(jsonObj.antiDos.synFloodAttackEnable == '1')
	{
		$("#FIREWALL_CHX_synFloodAttackEnable").attr("checked", true);
	}
	else
	{
		$("#FIREWALL_CHX_synFloodAttackEnable").attr("checked", undefined);
	}
	
	if (jsonObj.antiDos.winnukeAttackEnable == '1')
	{
		$("#FIREWALL_CHX_winnukeAttackEnable").attr("checked", true);
	}
	else
	{
		$("#FIREWALL_CHX_winnukeAttackEnable").attr("checked", undefined);
	}

	if (jsonObj.antiDos.smurfAttackEnable == '1')
	{
		$("#FIREWALL_CHX_smurfAttackEnable").attr("checked", true);
	}
	else
	{
		$("#FIREWALL_CHX_smurfAttackEnable").attr("checked", undefined);
	}
	
	if(jsonObj.antiDos.portredirectAttackEnable == '1')
	{
		$("#FIREWALL_CHX_portredirectAttackEnable").attr("checked", true);
	}
	else
	{
		$("#FIREWALL_CHX_portredirectAttackEnable").attr("checked", undefined);
	}
	
}

this.registerEvent= function()
{
	$("#BTN_Apply").click(function(){currentPageInst.btnApply();});
	$("#BTN_ApplyNo").click(function(){pageJump("kt_firewall_setup.html");});

}

}  // End Page

function updateFirewallCfg(jsonObj)
{
   currentPageInst.updateFirewallCfg(jsonObj);
}

function updateAllCfg()
{
	getCfg("antiAttackGet.json", {"antiDos":"1"}, updateFirewallCfg);
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
    this.basicClassFile = "./firewall_setup.js";
    this.customLv1File = "./firewall_setup_customlv1.js";
    this.customLv2File = "./firewall_setup_customlv2.js";
    this.customLv3File = "./firewall_setup_customlv3.js";
}

