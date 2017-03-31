Page = function()
{

this.initHtmlText= function()
{
	$("#MENU_STS_TR_CONN").append(getTagTextFromXmlDoc("menuStatTr69Rep"));
	$("#MENU_STS_TR_OPER").append(getTagTextFromXmlDoc("menuStatTr69TCNS"));
	$("#MENU_STS_TR_SEV").append(getTagTextFromXmlDoc("menuStatTr69Sev"));
	$("#TR69_ConnectInformInfo").append(getTagTextFromXmlDoc("tr69InformInfo"));
	$("#TR69_ConnectItmsReqInfo").append(getTagTextFromXmlDoc("tr69ItmsReqInfro"));
	$("#VOIP_SIPUserNumberTitle").append(getTagTextFromXmlDoc("tr69ViewTitle"));
}


this.updateAll= function(jsonObj)
{
	if (jsonObj.InformStatus == '0')


	{
		if (jsonObj.StatusMessage == '0')
		{
			$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69Statusmsg1"));
		}
		else if (jsonObj.StatusMessage == '1')
		{
			$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69Statusmsg2"));
		}
		else if (jsonObj.StatusMessage == '2')
		{
			$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69Statusmsg3"));

		}
		else if (jsonObj.StatusMessage == '3')
		{
			$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69Statusmsg4"));

		}
		else if (jsonObj.StatusMessage == '4')
		{
			$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69Statusmsg5"));

		}
		else if (jsonObj.StatusMessage == '5')
		{
			$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69Statusmsg6"));

		}
		else
		{
			$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69Statusmsg7"));
		}
	}
	else if (jsonObj.InformStatus == '1')
	{
		$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69InformStatus1"));

	}
	else if (jsonObj.InformStatus == '2')
	{
		$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69InformStatus2"));

	}
	else if (jsonObj.InformStatus == '3')
	{
		$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69InformStatus3"));

	}
	else
	{
		$("#TR69_ConnectInformStatus").append(getTagTextFromXmlDoc("tr69InformStatus4"));

	}

	if (jsonObj.ConnectStatus == '0')
	{
		$("#TR69_ConnectItmsStatus").append(getTagTextFromXmlDoc("tr69ConnStatus1"));

	}
	else if (jsonObj.ConnectStatus == '3')
	{
		$("#TR69_ConnectItmsStatus").append(getTagTextFromXmlDoc("tr69ConnStatus2"));

	}
	else if (jsonObj.ConnectStatus == '2')
	{
		$("#TR69_ConnectItmsStatus").append(getTagTextFromXmlDoc("tr69ConnStatus3"));

	}
	else
	{
		$("#TR69_ConnectItmsStatus").append(getTagTextFromXmlDoc("tr69ConnStatus4"));
	}
}
}  // End Page

this.updateAllTwo= function(jsonObj)
{
	if (jsonObj.result == '0')
	{
		$("#VOIP_SIPUserNumberComment").append(getTagTextFromXmlDoc("tr69RemoteCfg1"));
	}
	else if (jsonObj.result == '1')
	{
		$("#VOIP_SIPUserNumberComment").append(getTagTextFromXmlDoc("tr69RemoteCfg2"));

	}
	else if (jsonObj.result == '2')
	{
		$("#VOIP_SIPUserNumberComment").append(getTagTextFromXmlDoc("tr69RemoteCfg3"));

	}
	else
	{
		$("#VOIP_SIPUserNumberComment").append(getTagTextFromXmlDoc("tr69RemoteCfg4"));

	}
}


function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllTwo(jsonObj)
{
	currentPageInst.updateAllTwo(jsonObj);
}

function updateAllCfg()
{
	getCfg("ctTr69InfoGet.json", "", updateAll);
	getCfg("ctGetTr69Cfg.json", "", updateAllTwo);
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
    this.basicClassFile = "./kt_tr69_connect_status.js";
    this.customLv1File = "./kt_tr69_connect_status_customlv1.js";
    this.customLv2File = "./kt_tr69_connect_status_customlv2.js";
    this.customLv3File = "./kt_tr69_connect_status_customlv3.js";
}

