Page = function()
{

// JavaScript Document
this.initHtmlText= function()
{
	$("#Menu_NetworkMeeting").append(getTagTextFromXmlDoc("Networkmeeting"));
	$("#firstdes").append(getTagTextFromXmlDoc("ping"));
	$("#seconddes").append(getTagTextFromXmlDoc("TraceRoute"));
	$("#port").append(getTagTextFromXmlDoc("Networkport"));
	$("#maincomputer").append(getTagTextFromXmlDoc("Networkmaincomputer"));
	$("#week").append(getTagTextFromXmlDoc("Networkweek"));
	$("#time").append(getTagTextFromXmlDoc("Networktime"));
	$("#Sport").append(getTagTextFromXmlDoc("Networkport"));
	$("#Smaincomputer").append(getTagTextFromXmlDoc("Networkmaincomputer"));
	$("#Sweek").append(getTagTextFromXmlDoc("Networkweek"));
	$("#Stime").append(getTagTextFromXmlDoc("Networktime"));
}
this.updateWanCfgElm= function(jsonObj)
{
	var  list= jsonObj.dataList;
	var sourceNode = document.getElementById("tr"); // 获得被克隆的节点对象
	var p = $(".table .tr").length;
	for(var q=1;q<p;q++){
		sourceNode.parentNode.removeChild(sourceNode.parentNode.lastChild);
	}
	$.each(list, function(i, n){				
		var clonedNode = sourceNode.cloneNode(true); // 克隆节点															
		clonedNode.setAttribute("id", "tr" + i); // 修改一下id 值，避免id 重复 		
		sourceNode.parentNode.appendChild(clonedNode); // 在父节点插入克隆的	
		$("#tr" + i + " #netport" ).text(n.netport);
		$("#tr" + i + " #netmaincomputer" ).text(n.netmaincomputer);
		$("#tr" + i + " #netweek" ).text(n.netweek);
		$("#tr" + i + " #nettime" ).text(n.nettime);

	var  list= jsonObj.dataList;
	var sourceNode = document.getElementById("secondtr"); // 获得被克隆的节点对象
	var p = $(".secondtable .secondtr").length;
	for(var q=1;q<p;q++){
		sourceNode.parentNode.removeChild(sourceNode.parentNode.lastChild);
	}
	$.each(list, function(i, n){				
		var clonedNode = sourceNode.cloneNode(true); // 克隆节点															
		clonedNode.setAttribute("id", "secondtr" + i); // 修改一下id 值，避免id 重复 		
		sourceNode.parentNode.appendChild(clonedNode); // 在父节点插入克隆的	
		$("#secondtr" + i + " #Ssecport" ).text(n.Ssecport);
		$("#secondtr" + i + " #Ssecmaincomputer" ).text(n.Ssecmaincomputer);
		$("#secondtr" + i + " #Ssecweek" ).text(n.Ssecweek);
		$("#secondtr" + i + " #Ssectime" ).text(n.Ssectime);
	})
}

} // End Page
  


function updateAllCfg()
{
    getCfg("", "", updateWanCfgElm);
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
    this.basicClassFile = "./kt_network_monitoring.js";
    this.customLv1File = "./kt_network_monitoring_customlv1.js";
    this.customLv2File = "./kt_network_monitoring_customlv2.js";
    this.customLv3File = "./kt_network_monitoring_customlv3.js";
}

