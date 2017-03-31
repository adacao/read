// JavaScript Document
var options = new Array();

/* mainCfg format as follows
 *{
    "superAdmin": "1",
    "supportMultiLang": "0",
    "productType": "CT_E8_C",
	"customer":"test"
    "wanCfg": {
        "support": "1",
        "usMode": "8",
        "WanIpMode": "3"
    },
    "voipCfg": {
        "support": "1",
        "voipProtocol": "SIP"
    },
    "ipv6": {
        "support": "1"
    },
    "ddns": {
        "support": "1"
    },
    "usb": {
        "support": "1"
    },
    "usbxdown": {
        "support": "1"
    },
    "wlan": {
        "support": "1"
    },
    "modem_3g": {
        "support": "0"
    },
    "diagnostics": {
        "support": "0"
    },
    "profileType": ""
}
 *
 */
var mainCfg = null;
var currLangType;

function initHtmlText()
{
	$("select[name='langType']").val(currLangType);
	
	$("#mainLangCh").append(getTagTextFromXmlDoc("mainLangCh"));
	$("#mainLangEn").append(getTagTextFromXmlDoc("mainLangEn"));
	$("#mainProduct").append(getTagTextFromXmlDoc("mainProduct")+":");
	$("#GuideSet").append(getTagTextFromXmlDoc("mainSet"));
	$("#welcome").append(getTagTextFromXmlDoc("mainWelcome"));
	$("#mainGatewayName").append(getTagTextFromXmlDoc("mainGatewayName")+":");
	$("#mainGatewayType").append(getTagTextFromXmlDoc("mainGatewayType"));
	$("#logoutlink").append(getTagTextFromXmlDoc("loginOutCtx"));
	// $("#guide").append(getAttrValFromXmlDoc("menuStatus", "value"));
	// $("#logoutlink").attr("title", getTagTextFromXmlDoc("loginOutCtx"));
}

/* used by son frame*/
function getLangXmlDoc()
{
	return langXmlDoc;
}

function getCurrLangType()
{
	return currLangType;
}

function updateMenuText()
{
	if (typeof(notifyHandler) != 'undefined')
	{
		notifyHandler.init();
	}
	
	initMenuTitle();
	//createCTMenu(options);
	createMenu(mainCfg);
}

function setFrameHeight(height)
{
	$("#mainFrameid").height(height);
	$(".main").height(height);
	$(".mainLeft").height(height);
	$(".mainShadow").height(height);
	$(".mainBody").height(height);

}

$(function(){
$("#mainFrameid").load(function(){
	//init frame height
	setFrameHeight(525);
});
});

function resetIframeSize(){
	var height = window.frames["mainFrame"].document.body.scrollHeight;
	height = (height < 525) ? 525 : height;
	setFrameHeight(height);
}

function updateMainMenu(jsonObj)
{
	mainCfg = jsonObj;
	if ("EOC" == jsonObj.productType)
	{
		$("#mainProductType").append("EOC");
	}
	else if ("GPON" == jsonObj.productType)
	{
		$("#mainProductType").append("E8-C-GPON");
	}
	else if ("EPON" == jsonObj.productType)
	{
		$("#mainProductType").append("E8-C-EPON");
	}
	else
	{
		$("#mainProductType").append(" ");
	}
	options = new Array(jsonObj.curUserName,
							jsonObj.adminUserName,
							'0',
							jsonObj.buildCtWanCfg,
							jsonObj.diagnostics,
							jsonObj.voiceProtocol,
							jsonObj.uiWanUpStreamMode,
							jsonObj.buildIPv6,
							jsonObj.profileType,
							jsonObj.buildDms,
							jsonObj.uiCommonE8B,
							jsonObj.buildDdnsd,
							jsonObj.supportusb,
							jsonObj.supportusbxdown,
							jsonObj.buildwlan,
                            jsonObj.WANConnMode,
							jsonObj.MENU_OPTION_MGT_INFO
							);
	updateMenuText(options);
	
	if (jsonObj.supportMultiLang == "1")
	{
		$("select[name=langType]").show();
	}
}

function getLangDoc()
{
	window.location.reload();
}

function setLangType(elm)
{
	setCfg("langTypeSet.cmd", {"langType": elm.value}, getLangDoc);
}

function registerEvent()
{
	$("select[name='langType']").change(function(){setLangType(this)});
}

function updateAllCfg()
{
	getCfg("mainCfgGet.json", null, updateMainMenu);
}
