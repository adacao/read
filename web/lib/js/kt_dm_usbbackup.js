Page = function(){

// JavaScript Document
this.initHtmlText = function()
{
    $("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("USBApplysideset"));
	$("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("USBApplyupdate"));
    $("#setdoc").append(getTagTextFromXmlDoc("USBApplyDoc"));
	$("#setbtn").attr("value", getTagTextFromXmlDoc("USBApplyBtnset"));
    $("#setchange").append(getTagTextFromXmlDoc("resdefsetBtnCtx"));
    $("#changebtn").attr("value", getTagTextFromXmlDoc("USBApplydebtnfalut"));
    $("#restorefile").append(getTagTextFromXmlDoc("USBReApplyrestorefile"));
    $("#restorebtn").attr("value", getTagTextFromXmlDoc("USBReApplyrestorebtn"));
    $("#savechange").append(getTagTextFromXmlDoc("USBReApplysavechange"));
    $("#fixedfile").append(getTagTextFromXmlDoc("USBReApplyfixedfile"));
    $("#fixedbtn").attr("value", getTagTextFromXmlDoc("USBReApplyfixedbtn"));
}
this.setbtn = function(){
    var loc = 'backupsettings.conf';
    var code = 'location="' + loc + '"';
    eval(code);
}
this.btnApply = function(jsonObj)
{
    var postData;
    var subarea;
    jsonObjInit();

    jsonObjPush("action","backup");
    jsonObjPush("subarea", $("#DM_SEL_UsbBackupPartionSel").val());
	
    postData = jsonObjEnd();
    setCfg("usbbackup.cmd", postData, currentPageInst.getObjResult);

}

this.getObjResult = function()	
{
    //getCfg("usbbackGet.json", "", currentPageInst.showResult);	
}

this.registerEvent = function()
{
    $("#BTN_Apply").click(function()
    {
        currentPageInst.btnApply();
    });
    $("#setbtn").click(function()
    {
        currentPageInst.setbtn();
    });

}

}  // End Page

function updateAllCfg()
{
    //getCfg("usbbackGet.json", "", setbackupElm);
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
    this.basicClassFile = "./kt_dm_usbbackup.js";
    this.customLv1File = "./kt_dm_usbbackup_customlv1.js";
    this.customLv2File = "./kt_dm_usbbackup_customlv2.js";
    this.customLv3File = "./kt_dm_usbbackup_customlv3.js";
}

