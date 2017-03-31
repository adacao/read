// JavaScript Document

var srvNum = 0;

function initHtmlText()
{
	$("#MenuAppTelentserver").append(getTagTextFromXmlDoc("menuAppTelentserver"));
	$("#telnet").append(getTagTextFromXmlDoc("menuAppTelentserveruse"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("applyCtx"));  
    $("#BTN_ApplyNo").attr("value", getTagTextFromXmlDoc("cancelCtx"));
}

function updatescsrvcntrCfg(jsonObj)
{
    if ( '1' == jsonObj.srvInfo[2].lanAllow )
    {
        $("#telnetEnable").attr("checked", true);
    }
    else
    {
        $("#telnetEnable").attr("checked", undefined);
    }
    
}


function updateAllCfg()
{
    getCfg("srvcntrInfoGet.json", "", updatescsrvcntrCfg);
}


function btnApply()
{
    var postData;
    var string = '';
    jsonObjInit();
    string += "TELNET";
    string += "=";
    string += $("#telnetEnable").attr("checked") ? "1" : "0";
    string += ";";

    jsonObjPush("srvList", string);
    postData = jsonObjEnd();
    setCfg("srvcntrInfoSet.cmd", postData, updateAllCfg);
}


function registerEvent()
{
    $("#BTN_Apply").click(function(){
        btnApply();
    });
}

