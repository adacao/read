Page = function()
{

this.urlfltRule = null;
this.maxUrlRule;
this.itemNum = 0;

this.initHtmlText= function()
{
	$("#URLF_SetupTitle").append(getTagTextFromXmlDoc("urlTitle"));
	$("#URLF_AddEntryTitle").append(getTagTextFromXmlDoc("urlAddTitle"));
	$("#URLF_EnableCtx").append(getTagTextFromXmlDoc("urlFilterChoose")+":");
	$("#URLF_TypeCtx").append(getTagTextFromXmlDoc("urlTypeChoose")+":");
	$("#URLF_LB_Blacklist").append(getTagTextFromXmlDoc("blacklistCtx"));
	$("#URLF_LB_Whitelist").append(getTagTextFromXmlDoc("whitelistCtx"));
	$("#URLF_LB_Disable").append(getTagTextFromXmlDoc("disableCtx"));	
	$("#URLF_Urladdr").append(getTagTextFromXmlDoc("urlAddrCtx"));
	$("#URLF_Port").append(getTagTextFromXmlDoc("portCtx"));
	$("#URLF_Del").append(getTagTextFromXmlDoc("delCtx"));
	$("#URLF_AddEntryDesc").append(getTagTextFromXmlDoc("urlAddShow"));
	$("#URLF_AddEntryPort").append(getTagTextFromXmlDoc("portCtx")+":");
	$("#URLF_AddEntryAddr").append(getTagTextFromXmlDoc("urlAddrCtx")+":");
	$("#URLF_AddEntryDefPort").append(getTagTextFromXmlDoc("urlPortShow"));
	$("#URLF_MenuSecUrlList").append(getTagTextFromXmlDoc("menuSecUrlList"));

	$("#BTN_Add").attr("value", getTagTextFromXmlDoc("addCtx"));
	$("#BTN_Del").attr("value", getTagTextFromXmlDoc("delCtx"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
	$("#BTN_Cancel").attr("value", getTagTextFromXmlDoc("cancelCtx"));
	
	$("#urlFltBase").show();
	$("#URLF_DIV_AddEntryTitle").hide();
	$("#URLF_DIV_SetupTitle").show();
	$("#URLF_FORM_AddEntry").hide();
	
	if ($("input[name='URLF_RADIO_Type']:eq(1)").attr("checked") == 'checked')
	{
		$("#BTN_Add").attr("disabled", true);	
		$("#BTN_Del").attr("disabled", true);
		$("#URLF_DIV_Config").hide();
	}
	else
	{
		$("#BTN_Add").attr("disabled", false);	
		$("#BTN_Del").attr("disabled", false);
		$("#URLF_DIV_Config").show();
	}
}




this.updateUrlfltRuleElm= function(urlRule)
{
	var i;
	var htmlLabel = "";
	var itemNum = 0;
	
	this.urlfltRule = urlRule;
	if (0 == urlRule.length)
	{
		this.itemNum = 0;
		$("#URLF_RuleEntryTbody").empty();
		$("#BTN_Add").attr("disabled", false);	
		$("#BTN_Del").attr("disabled", true);	
		return;
	}
	
	$("#BTN_Del").attr("disabled", false);	
	
	$.each(urlRule, function(i, list)
	{
		itemNum += 1;
		
		htmlLabel += "<tr align='center'>";
		htmlLabel = htmlLabel + "<td>"+ list.url + "</td>";
		htmlLabel = htmlLabel + "<td>"+ list.Interface +"</td>";
		htmlLabel = htmlLabel + "<td><input type='checkbox' name='rml' value='" + list.url + "'></td>";
		htmlLabel += "</tr>";
	});
	this.itemNum = itemNum;
	
	$("#BTN_Add").attr("disabled", (this.itemNum < this.maxUrlRule) ? false : true);
	
	$("#URLF_RuleEntryTbody").empty();
	$("#URLF_RuleEntryTbody").append(htmlLabel);
}


this.updateAll= function(jsonObj)
{
	this.itemNum = 0; //init this.itemNum; 
	this.updateTitle(jsonObj.cturlCfg);
	this.updateUrlfltElm(jsonObj.cturlCfg);
	this.updateUrlfltRuleElm(jsonObj.urlfltRule);
}


this.setElmStatus= function(flag)
{
	if (flag)
	{
		$("#URLF_DIV_Config").show();
		$("input[name='URLF_RADIO_Type']:eq(0)").attr("disabled", false);
		$("input[name='URLF_RADIO_Type']:eq(1)").attr("disabled", false);
	}
	else
	{
		$("#URLF_DIV_Config").hide();
		$("input[name='URLF_RADIO_Type']:eq(0)").attr("disabled", true);
		$("input[name='URLF_RADIO_Type']:eq(1)").attr("disabled", true);
	}
	
	$("#BTN_Add").attr("disabled", (this.itemNum < this.maxUrlRule) ? false : true);
	$("#BTN_Del").attr("disabled", (this.itemNum > 0) ? false : true);
}


this.updateTitle= function(urlfltCfg)
{
	var htmlLabel = "";
	
	this.maxUrlRule = urlfltCfg.maxUrlFlt;
	htmlLabel = getTagTextFromXmlDoc("urlItem1");
	htmlLabel += this.maxUrlRule + getTagTextFromXmlDoc("urlItem2");

	$("#URLF_SetupDesc").empty();
	$("#URLF_SetupDesc").append(htmlLabel);
}




this.updateUrlflt= function(jsonObj)
{
	this.updateUrlfltElm(jsonObj.cturlCfg);
}


this.updateUrlfltElm= function(urlfltCfg)
{
	if (urlfltCfg.enable == '1')
	{
        $("#URLF_CHX_EnableId").attr("checked", true);
		this.setElmStatus(true);

		if (urlfltCfg.mode == "Include")
		{
			$("input[name='URLF_RADIO_Type']:eq(1)").attr("checked",'checked');
		}
		else
		{
			$("input[name='URLF_RADIO_Type']:eq(0)").attr("checked",'checked');
		}
	}
	else
	{	
		$("#URLF_CHX_EnableId").attr("checked", undefined);
		this.setElmStatus(false);
	}
}

this.displyUrl= function(elm)
{
    if(elm.checked )
    {
        this.setElmStatus(true);
    }
    else
    {
        this.setElmStatus(false);
    }   
}

this.enableUrl= function()
{
	var postData;
	
	//this.setElmStatus(true);
	jsonObjInit();
	jsonObjPush("action", "save");
	jsonObjPush("urlenable", "1");
	
	if ($("input[name='URLF_RADIO_Type']:eq(1)").attr("checked") == 'checked')
	{
		jsonObjPush("listtype", "Include")
	}
	else
	{
		jsonObjPush("listtype", "Exclude")
	}
	
	postData = jsonObjEnd();
	setCfg("ctUrlfltSet.cmd", postData, updateUrlfltCfg);
}	

this.disableUrl= function()
{
	var postData;
	
	//this.setElmStatus(false);
	jsonObjInit();
	jsonObjPush("action", "save");
	jsonObjPush("enable", "0");

	if ($("input[name='listtype']:eq(1)").attr("checked") == 'checked')
	{
		jsonObjPush("listtype", "Include")
	}
	else
	{
		jsonObjPush("listtype", "Exclude")
	}
	
	postData = jsonObjEnd();
	setCfg("ctUrlfltSet.cmd", postData, null , true);
}


this.changeToBlack= function()
{
	var postData;
	
	jsonObjInit();
	jsonObjPush("action","save");
	jsonObjPush("urlenable","1");
	jsonObjPush("listtype","Exclude");
	postData = jsonObjEnd();
	
	setCfg("ctUrlfltSet.cmd", postData, null, true);
}


this.changeToWhite= function()
{
	var postData;
	
	jsonObjInit();	
	jsonObjPush("action", "save");
	jsonObjPush("urlenable", "1");
	jsonObjPush("listtype", "Include");
	postData = jsonObjEnd();
	
	setCfg("ctUrlfltSet.cmd", postData, null, true);
}


this.buttonAdd= function()
{	
	$("#URLF_FORM_Setup").hide();
	$("#URLF_DIV_SetupTitle").hide();

	$("#URLF_DIV_AddEntryTitle").show();
	$("#URLF_FORM_AddEntry").show();
}


this.displayInit= function()
{	
	$("#URLF_DIV_SetupTitle").show();
	$("#URLF_FORM_Setup").show();
	$("#URLF_DIV_AddEntryTitle").hide();
	$("#URLF_FORM_AddEntry").hide();	
	$("#URLF_TEXT_AddEntryAddr").val("");
	$("#URLF_TEXT_AddEntryPort").val("");
}

this.checkSameEntry= function()
{
	var found = false;
	var url = $("#URLF_TEXT_AddEntryAddr").val();
	var port =  $("#URLF_TEXT_AddEntryPort").val();
	
	if (port == "")
	{
		port = "80";
	}
	
	if (null == this.urlfltRule)
	{
		return false;
	}
	
	$.each(this.urlfltRule, function(i, list)
	{
		if ((url == list.url) && (port == list.Interface))
		{
			found = true;
		}
	});
	
	return found;
}

this.buttonApply= function()
{
    if ($("#URLF_CHX_EnableId").attr("checked")== undefined)
    {
        this.disableUrl();
        return;
    }
    else
    {
        this.enableUrl(); 
    }
    
	var postData;

	if (!checkValid())
	{
		return;
	}
	
	if ($("#URLF_TEXT_AddEntryAddr").val()=="")
	{
		alert(getTagTextFromXmlDoc("urlEmptyWarn"));
		return;
	}
	
	/* check for if same */
	if (this.checkSameEntry())
	{
		alert(getTagTextFromXmlDoc("urlSameEntryWarn"));
        return;
	}

	jsonObjInit();
	
	jsonObjPush("action", "set_url");
	jsonObjPush("TodUrlAdd", $("#URLF_TEXT_AddEntryAddr").val());
	
	if ($("#URLF_TEXT_AddEntryPort").val()== "")
	{
		jsonObjPush("port_num", 80);
	}
	else
	{
		jsonObjPush("port_num", $("#URLF_TEXT_AddEntryPort").val());
	}
	
	postData = jsonObjEnd();
	
	setCfg("ctUrlfltSet.cmd", postData, update);
}




this.updateUrlfltRules= function(jsonObj)
{
	this.updateUrlfltRuleElm(jsonObj.urlfltRule);
}


this.delUrlRule= function()
{
	var rmlObj = $("input[name='rml']");
    var rmlStr = "";
    var postData;
	
    $.each(rmlObj, function(i,n){
		if (n.checked)
		{
			rmlStr = rmlStr + n.value +",";
		}
    });

    if (rmlStr == '')
    {
         alert(getTagTextFromXmlDoc("urlWarn1"));
         return;
    }

    if ("" != rmlStr)
    {
        jsonObjInit();
        jsonObjPush("action", "remove_url");
        jsonObjPush("rmLst", rmlStr);
        postData = jsonObjEnd();
    }
	
	this.itemNum = 0;
	setCfg("ctUrlfltSet.cmd", postData, updateUrlFltRule);
}


this.portChange= function(elm)
{
	if (elm.value != "")
	{
		if (false == isValidPort(elm.value))
		{
			warnMsgShow(elm, elm.value+getTagTextFromXmlDoc("portWarn"));
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


this.urlChange= function(elm)
{

	if (elm.value != "")
	{
		if (false == isValidUrl(elm.value))
		{
			warnMsgShow(elm, getTagTextFromXmlDoc("urlWarn"));
			return;
		}
		
		if (elm.value.length > 128)
		{
			warnMsgShow(elm, getTagTextFromXmlDoc("urlMaxLenWarn"));
			return;
		}
	}
	warnMsgHide(elm);
}


this.registerEvent= function()
{
	$("#URLF_CHX_EnableId").click(function(){
		currentPageInst.displyUrl(this);
	});
	
	$("input[name='URLF_RADIO_Type']:eq(0)").click(function(){
		currentPageInst.changeToBlack();
	});
	
	$("input[name='URLF_RADIO_Type']:eq(1)").click(function(){
		currentPageInst.changeToWhite();
	});
	
	$("#BTN_Add").click(function(){
		currentPageInst.buttonAdd();
	});
	
	$("#BTN_Del").click(function(){
		currentPageInst.delUrlRule();
	});
	
	$("#BTN_Apply").click(function(){
		currentPageInst.buttonApply();
	});
	
	$("#BTN_Cancel").click(function(){
		pageJump("kt_urlf_setup.html");
	});
	
	$("#URLF_TEXT_AddEntryAddr").change(function(){
		currentPageInst.urlChange(this);
	});
	
	$("#URLF_TEXT_AddEntryPort").change(function(){
		currentPageInst.portChange(this);
	});
}

}  // End Page


function update()
{
	currentPageInst.displayInit();
	updateAllCfg();
}


function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllCfg()
{
	getCfg("ctUrlfltGet.json", {"cturlCfg":"1", "urlfltRule":"1"}, updateAll);
}

function updateUrlflt(jsonObj)
{
    currentPageInst.updateUrlflt(jsonObj);
}

function updateUrlfltCfg()
{
	getCfg("ctUrlfltGet.json", {"cturlCfg":"1", "urlfltRule":"0"}, updateUrlflt);
}

function updateUrlfltRules(jsonObj)
{
    currentPageInst.updateUrlfltRules(jsonObj);
}

function updateUrlFltRule()
{
	getCfg("ctUrlfltGet.json", {"cturlCfg":"0", "urlfltRule":"1"}, updateUrlfltRules);	
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
    this.basicClassFile = "./urlf_setup.js";
    this.customLv1File = "./urlf_setup_customlv1.js";
    this.customLv2File = "./urlf_setup_customlv2.js";
    this.customLv3File = "./urlf_setup_customlv3.js";
}

