Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#ROUTE_Title").append(getTagTextFromXmlDoc("rtRouteCfg"));
	$("#ROUTE_CfgNote").append(getTagTextFromXmlDoc("rtRouteCfgNote"));
	$("#ROUTE_CfgHelp").append(getTagTextFromXmlDoc("rtRouteCfgHelp"));
	$("#ROUTE_IpVersion").append(getTagTextFromXmlDoc("ipVersion"));
	$("#ROUTE_DstIp").append(getTagTextFromXmlDoc("dstIp"));
	$("#ROUTE_Gateway").append(getTagTextFromXmlDoc("gateway"));
	$("#ROUTE_MetricHead").append(getTagTextFromXmlDoc("metricnumber"));
	$("#ROUTE_InterfaceHead").append(getTagTextFromXmlDoc("interfaceCtx"));
	$("#ROUTE_Del").append(getTagTextFromXmlDoc("delCtx"));
	$("#BTN_Add").attr("value", getTagTextFromXmlDoc("addCtx")); 
	$("#BTN_Del").attr("value", getTagTextFromXmlDoc("delCtx")); 

	$("#ROUTE_DstIpAddr").append(getTagTextFromXmlDoc("dstIp") + ":");
	$("#ROUTE_IpMask").append(getTagTextFromXmlDoc("ipMaskCtx") + ":");
    $("#ROUTE_Metric").append(getTagTextFromXmlDoc("metricnumber")  + ":");
	$("#ROUTE_GateWay").append(getTagTextFromXmlDoc("gateway1") + ":");
	$("#ROUTE_Interface").append(getTagTextFromXmlDoc("interfaceUse") + ":");
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
}

this.btnApply= function() {
	var loc = '';
	jsonObjInit();

	with ( document.forms[0] ) {
		jsonObjPush("ipver", "4");
		jsonObjPush("dstAddr", $("#ROUTE_TEXT_DstAddr").val());
		jsonObjPush("dstMask", $("#ROUTE_TEXT_DstMask").val());

		if ($("#ROUTE_CHX_GateWay").attr("checked")) {         
			jsonObjPush("dstGtwy", $("#ROUTE_TEXT_GateWay").val());
		} else
			jsonObjPush("dstGtwy", "0.0.0.0");
		if ($("#ROUTE_CHX_Interface").attr("checked")) {
			var ifc = $("#ROUTE_SEL_DstWanIf").val();
			jsonObjPush("dstWanIf", ifc);
		}
		else 
			jsonObjPush("dstWanIf", "");
		jsonObjPush("metric",  $("#ROUTE_TEXT_Metric").val());
	}

	postData = jsonObjEnd();
	setCfg("rtRouteCfgSet.cmd", postData, updateAllCfg);
}

this.updateRouteCfg= function(jsonObj)
{
	var optStr = "";
	this.displayRouteViewPage();

		$("#ROUTE_CfgTbody").empty();
		$.each(jsonObj.routeCfg, function(idx, route){	
			var tbodyHtml = "";
			var checkVal;

			tbodyHtml += "<tr align='center'>";
			tbodyHtml = tbodyHtml + "<td>4</td>";
			tbodyHtml = tbodyHtml + "<td>" + route.dstIp + "</td>";
			tbodyHtml = tbodyHtml + "<td>" + route.gateway + "</td>";
			tbodyHtml = tbodyHtml + "<td>" + route.ifName + "</td>";
			tbodyHtml = tbodyHtml + "<td>" + route.metric + "</td>";
			tbodyHtml = tbodyHtml + "<td align='center'><input type='checkbox' name='rml' value='" + route.dstIp + "|" + route.subMask + "'></td>";
			tbodyHtml += "</tr>";

			$("#ROUTE_CfgTbody").append(tbodyHtml);
		});

	var interfaces = jsonObj.ifNameList.split('|');
	for ( i = 0; i < interfaces.length-1; i++ ) {
		var intfName = interfaces[i].split('/');
		optStr = optStr + "<option value='"+intfName[1]+"'>"+interfaces[i]+"</option>";
	} 
	optStr = optStr + "<option value='br0'>LAN/br0</option>";

	$("#ROUTE_SEL_DstWanIf").empty();
	$("#ROUTE_SEL_DstWanIf").append(optStr);

}

this.displayRouteAddPage= function()
{
	$("#ROUTE_DIV_View").hide();
        $("#ROUTE_TEXT_DstAddr").val("");
        $("#ROUTE_TEXT_DstMask").val("");
        $("#ROUTE_TEXT_Metric").val("");
        $("#ROUTE_CHX_GateWay").attr("checked",false);
        $("#ROUTE_TEXT_GateWay").val("");
	$("#ROUTE_DIV_ADD").show();

	//resetBlackListAddForm();
}

this.displayRouteViewPage= function()
{
	$("#ROUTE_DIV_View").show();
	$("#ROUTE_DIV_ADD").hide();

	//resetBlackListAddForm();
}

this.removeClick= function(rml)
{
	var lst = '';
	jsonObjInit();

	if (rml.length > 0)
		for (i = 0; i < rml.length; i++) {
			if (rml[i].checked == true)
				lst += rml[i].value + ', ';
		}
	else if (rml.checked == true)
		lst = rml.value;
	jsonObjPush("rmLst", lst)
	postData = jsonObjEnd();
	setCfg("rtRouteCfgSet.cmd", postData, updateAllCfg);
}

this.registerEvent= function()
{
	$("#BTN_Add").click(function(){currentPageInst.displayRouteAddPage();});
	$("#BTN_Del").click(function(){currentPageInst.removeClick(this.form.rml);});
	$("#BTN_Apply").click(function()
	{
		currentPageInst.btnApply();
	});

}

}  // End Page


function updateRouteCfg(jsonObj)
{
    currentPageInst.updateRouteCfg(jsonObj);
}

function updateAllCfg()
{
	getCfg("rtRouteCfgGet.json", "", updateRouteCfg);
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
    this.basicClassFile = "./kt_route_static_v4_setup.js";
    this.customLv1File = "./kt_route_static_v4_setup_customlv1.js";
    this.customLv2File = "./kt_route_static_v4_setup_customlv2.js";
    this.customLv3File = "./kt_route_static_v4_setup_customlv3.js";
}

