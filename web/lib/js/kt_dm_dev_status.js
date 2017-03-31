Page = function()
{
this.clearIntervalFun=null;

this.initHtmlText= function()
{
	$("#MainLeftStatus").append(getTagTextFromXmlDoc("menuStatStatus"));
	$("#DM_StatusUpT").append(getTagTextFromXmlDoc("upTime"));
	$("#DM_StatusLocalT").append(getTagTextFromXmlDoc("currentLocalTime"));
	$("#DM_StatusProductClass").append(getTagTextFromXmlDoc("ProductClass"));
	$("#DM_StatusDevId").append(getTagTextFromXmlDoc("manufacturerOUI"));
	$("#DM_StatusHardware").append(getTagTextFromXmlDoc("hardwareVersion"));
	$("#DM_StatusSoftware").append(getTagTextFromXmlDoc("softwareVersion"));
	$("#DM_StatusTitle").append(getTagTextFromXmlDoc("ctInfoTitle"));
}


this.updateDeviceInfo= function(jsonObj)
{
	$("#DM_StatusProdcut").empty();
	$("#DM_StatusManuOUI").empty();
	$("#DM_StatusHardwareVer").empty();
	$("#DM_StatusSoftwareVer").empty();
	$("#DM_StatusLocalTime").empty();
	$("#DM_StatusUpTime").empty();
	$("#DM_StatusPONregister").empty();

	$("#DM_StatusProdcut").append(jsonObj.productClass);
	$("#DM_StatusManuOUI").append(jsonObj.manufacturerOUI + "-" + jsonObj.serialNumber);
	$("#DM_StatusHardwareVer").append(jsonObj.hardwareVersion);
	$("#DM_StatusSoftwareVer").append(jsonObj.softwareVersion);
	$("#DM_StatusLocalTime").append(jsonObj.localTime);
	$("#DM_StatusUpTime").append(jsonObj.upTime);
	$("#DM_StatusPONregister").append("OLT:"+jsonObj.PONregisterstatus+"\t "+"TCMS:"+jsonObj.InformStatus);


}


this.registerEvent=function () {
	if(!this.clearIntervalFun)
		this.clearIntervalFun=setInterval(updateAllCfg,1000);
}

}  // End Page


function updateDeviceInfo(jsonObj)
{
    currentPageInst.updateDeviceInfo(jsonObj);
}

function updateAllCfg()
{
	getCfg("deviceInfoGet.json", "", updateDeviceInfo);
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
    this.basicClassFile = "./kt_dm_dev_status.js";
    this.customLv1File = "./kt_dm_dev_status_customlv1.js";
    this.customLv2File = "./kt_dm_dev_status_customlv2.js";
    this.customLv3File = "./kt_dm_dev_status_customlv3.js";
}

