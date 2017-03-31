Page = function()
{

// JavaScript Document
this.g_maxtimes;
this.g_currtimes;
this.g_currTimer;

this.initHtmlText= function()
{
	$("#RE_Report").append(getTagTextFromXmlDoc("menuReport"));
	$("#reportbtn").attr("value", getTagTextFromXmlDoc("menuReportbtn")); 

}

this.updateInformStatus= function(jsonObj)
{
	
}

this.showDiagInformRes= function(jsonObj)
{
	$("#DIAG_InformDiagInformRes").empty();
	
	if (jsonObj.InformStatus == '0')
	{
		if (jsonObj.StatusMessage == '0')
		{
			$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69Statusmsg1"));
		}
		else if (jsonObj.StatusMessage == '1')
		{
			$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69Statusmsg2"));
		}
		else if (jsonObj.StatusMessage == '2')
		{
			$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69Statusmsg3"));
		}
		else if (jsonObj.StatusMessage == '3')
		{
			$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69Statusmsg4"));
		}
		else if (jsonObj.StatusMessage == '4')
		{
			$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69Statusmsg5"));
		}
		else if (jsonObj.StatusMessage == '5')
		{
			$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69Statusmsg6"));
		}
		else
		{
			$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69Statusmsg7"));
		}
	}
	else if (jsonObj.InformStatus == '1')
	{
		$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69InformStatus1"));
	}
	else if (jsonObj.InformStatus == '2')
	{
		$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69InformStatus2"));
	}
	else if (jsonObj.InformStatus == '3')
	{
		$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69InformStatus3"));
	}
	else
	{
		$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("tr69InformStatus4"));
	}

}


this.updateElm= function()
{}

this.changeWidth = function()
{
	currentPageInst.g_currtimes++;

	if (200 > ((200/currentPageInst.g_maxtimes)*currentPageInst.g_currtimes))
	{
		$("#DIAG_DIV_InformProgressInBar").css("width", (200/currentPageInst.g_maxtimes)*currentPageInst.g_currtimes);
	}
	else
	{
		$("#DIAG_DIV_InformProgressInBar").css("width", 200);
	}
	
	if(currentPageInst.g_currtimes == currentPageInst.g_maxtimes)
	{
		clearInterval(currentPageInst.g_currTimer);
		$("#reportbtn").attr("disabled", false);
		getResult();
	}
}

this.btnStart= function()
{
	var postData;
	
	this.g_maxtimes = 120;
	this.g_currtimes = 0;
	
	jsonObjInit();
	postData = jsonObjEnd();
	
	setCfg("diagInformTest.cmd", postData, null);
	
	$("#DIAG_InformDiagInfoRes").show();
	$("#DIAG_DIV_InformFrameBar").show();
	$("#DIAG_InformDiagInformRes").empty();
	$("#DIAG_InformDiagInformRes").append(getTagTextFromXmlDoc("diagnosticMsg"));

	$("#reportbtn").attr("disabled", true);
	this.g_currTimer = setInterval(this.changeWidth, 100);
}

this.registerEvent= function()
{
	$("#reportbtn").click(function()
	{
		currentPageInst.btnStart();
	});
}

}  // End Page


function showDiagInformRes(jsonObj)
{
    currentPageInst.showDiagInformRes(jsonObj);
}

function getResult()
{
	getCfg("ctTr69InfoGet.json", "", showDiagInformRes);
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
    this.basicClassFile = "./kt_reporting.js";
    this.customLv1File = "./kt_reporting_customlv1.js";
    this.customLv2File = "./kt_reporting_customlv2.js";
    this.customLv3File = "./kt_reporting_customlv3.js";
}
