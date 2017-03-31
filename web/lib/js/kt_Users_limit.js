Page = function()
{
this.initHtmlText= function()
{
	$("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuNetBandUser"));
	$("#mandatory").append(getTagTextFromXmlDoc("menuNetBandMode"));
    $("#mwbandenable").append(getTagTextFromXmlDoc("SystemLogEnableCtx"));
    $("#mwbanddisable").append(getTagTextFromXmlDoc("SystemLogDisableCtx"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("applyCtx"));  
    $("#BTN_Calcel").attr("value", getTagTextFromXmlDoc("cancelCtx"));
}

this.updateElm= function(mwbandJsonObj)
{
    if(mwbandJsonObj.wanTerminalEnable == 1)
    {
        $("#mwband").attr("value", $("#mwbandenable").val());
    }
    else
    {
        $("#mwband").attr("value", $("#mwbanddisable").val());
    }
}

this.buttonApply= function()
{
    var postData;
    var str = $("#mwband").val();
    jsonObjInit();

    if(str == $("#mwbandenable").val())
    {  
        jsonObjPush("wanTerminalEnable", 1);
    }
    else
    {
        jsonObjPush("wanTerminalEnable", 0);       
    }
    postData = jsonObjEnd();
    setCfg("wanTerminalSet.cmd", postData, updateAllCfg);
}

this.registerEvent= function()
{
    $("#BTN_Apply").click(function(){
		currentPageInst.buttonApply();
	});
    
    $("#BTN_Calcel").click(function(){
		pageJump("kt_Users_limit.html");
	});
}
}  // End Page

function updateElm(jsonObj)
{   
	currentPageInst.updateElm(jsonObj);
}

function updateAllCfg()
{
	getCfg("wanTerminalGet.json", "", updateElm);
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
    this.basicClassFile = "./kt_Users_limit.js";
    this.customLv1File = "./kt_Users_limit_customlv1.js";
    this.customLv2File = "./kt_Users_limit_customlv2.js";
    this.customLv3File = "./kt_Users_limit_customlv3.js";
}

