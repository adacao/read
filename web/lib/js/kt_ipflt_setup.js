Page = function()
{

this.buildIpv6;




this.updateAll= function(jsonObj)
{
	this.buildIpv6 = jsonObj.buildIpv6;
	
	if (0 == jsonObj.wanInfo.length)
	{
		$("#IPF_DIV_BasicCfg").hide();
		return;
	}
	else
	{
		$("#IPF_DIV_BasicCfg").show();
		this.perpareIpfltState(jsonObj);
		this.appendSelectList(jsonObj);
		this.appendBlackListTable(jsonObj);
		this.appendWhiteListTable(jsonObj);
		this.appendIfList(jsonObj);
	}
}


this.hideInputOfBlackPort= function()
{
	$("#IPF_SrcPort").hide();
	$("#IPF_DstPort").hide();
}


this.hideInputOfWhitePort= function()
{
	$("#IPF_SrcPort2").hide();
	$("#IPF_DstPort2").hide();
}


this.showInputOfBlackPort= function()
{
	$("#IPF_SrcPort").show();
	$("#IPF_DstPort").show();
}


this.showInputOfWhitePort= function()
{
	$("#IPF_SrcPort2").show();
	$("#IPF_DstPort2").show();
}


this.perpareIpfltState= function(jsonObj)
{
	if (1 == jsonObj.ipfltState)
	{
		$("input[name='IPF_RADIO_switch']:eq(0)").attr("checked", "checked");
		this.enableBWSwitchButton(1);
		this.initTheWhileDiv(1);
	}
	else
	{
		$("input[name='IPF_RADIO_switch']:eq(1)").attr("checked", "checked");
		this.enableBWSwitchButton(0);
		this.initTheWhileDiv(0);
	}
}


this.enableBWSwitchButton= function(enable)
{
	if (1 == enable)
	{
		$("#IPF_SEL_Type").removeAttr("disabled");
	}
	else
	{
		$("#IPF_SEL_Type").attr("disabled", "disabled");
	}
}


this.appendSelectList= function(jsonObj)
{
	var tempHtml;
	
	if (1 == jsonObj.buildIpv6)
	{
		tempHtml = "<td>" + getTagTextFromXmlDoc("ipfltIpVersion") + "</td>";
		tempHtml += "<td><select name=\"ipversion1\" style=\"width:160px\" size=\"1\">";
		tempHtml += "<option value=\"4\">IPv4</option>";
		tempHtml += "<option value=\"6\">IPv6</option>";
		tempHtml += "</select></td>";
		tempHtml += "<td></td>";
		
		$("#IPF_SelectNeedAppend").empty();
		$("#IPF_SelectNeedAppend").append(tempHtml);
		
		tempHtml = "<td>" + getTagTextFromXmlDoc("ipfltIpVersion") + "</td>";
		tempHtml += "<td><select name=\"ipversion2\" style=\"width:160px\" size=\"1\">";
		tempHtml += "<option value=\"4\">IPv4</option>";
		tempHtml += "<option value=\"6\">IPv6</option>";
		tempHtml += "</select></td>";
		tempHtml += "<td></td>";
		
		$("#IPF_SelectNeedAppend2").empty();
		$("#IPF_SelectNeedAppend2").append(tempHtml);
		
		$("select[name='ipversion1']").change(function(){this.maskOrprefixBlack(this)});
		$("select[name='ipversion2']").change(function(){this.maskOrprefixWhite(this)});
	}
	else
	{
		$("#IPF_SelectNeedAppend").empty();
		$("#IPF_SelectNeedAppend2").empty();
	}
}


this.maskOrprefixBlack= function(elm)
{
	if ("4" == elm.value)
	{
		$("#IPF_SourceMask").empty();
		$("#IPF_DestMask").empty();
		$("#IPF_SourceMask").append(getTagTextFromXmlDoc("ipfltSourceMask"));
		$("#IPF_DestMask").append(getTagTextFromXmlDoc("ipfltDestMask"));
	}
	else if("6" == elm.value)
	{
		$("#IPF_SourceMask").empty();
		$("#IPF_DestMask").empty();
		$("#IPF_SourceMask").append(getTagTextFromXmlDoc("ipfltPrefixLength"));
		$("#IPF_DestMask").append(getTagTextFromXmlDoc("ipfltPrefixLength"));
	}
	
	//warnMsgHide($("#IPF_TEXT_SrcMask2")[0]);
	//warnMsgHide($("#IPF_TEXT_DstMask2")[0]);
	
	$("#IPF_TEXT_SrcMask2").change();
	$("#IPF_TEXT_DstMask2").change();

	$("#IPF_TEXT_StartSrcAddr2").change();
	$("#IPF_TEXT_EndSrcAddr2").change();
	$("#IPF_TEXT_StartDstAddr2").change();
	$("#IPF_TEXT_EndDstAddr2").change();
}


this.maskOrprefixWhite= function(elm)
{
	if ("4" == elm.value)
	{
		$("#IPF_SourceMask4").empty();
		$("#IPF_DestMask4").empty();
		$("#IPF_SourceMask4").append(getTagTextFromXmlDoc("ipfltSourceMask"));
		$("#IPF_DestMask4").append(getTagTextFromXmlDoc("ipfltDestMask"));
	}
	else if("6" == elm.value)
	{
		$("#IPF_SourceMask4").empty();
		$("#IPF_DestMask4").empty();
		$("#IPF_SourceMask4").append(getTagTextFromXmlDoc("ipfltPrefixLength"));
		$("#IPF_DestMask4").append(getTagTextFromXmlDoc("ipfltPrefixLength"));
	}
	
	//warnMsgHide($("#IPF_TEXT_SrcMask4")[0]);
	//warnMsgHide($("#IPF_TEXT_DstMask4")[0]);
	
	$("#IPF_TEXT_SrcMask4").change();
	$("#IPF_TEXT_DstMask4").change();

	$("#IPF_TEXT_StartSrcAddr4").change();
	$("#IPF_TEXT_EndSrcAddr4").change();
	$("#IPF_TEXT_StartDstAddr4").change();
	$("#IPF_TEXT_EndDstAddr4").change();
}



this.appendBlackListTable= function(jsonObj)
{
	var tempHtml = "";
	
	if (0 == jsonObj.blackList.length)
	{
		$("#BTN_Remove").attr("disabled", "disabled");
	}
	else
	{
		$("#BTN_Remove").removeAttr("disabled");
	}
	
	$.each(jsonObj.blackList, function(i, elm){
		tempHtml += currentPageInst.prepareOneline(elm);
	});
	
	$("#IPF_BlackListNeedAppend").empty();
	$("#IPF_BlackListNeedAppend").append(tempHtml);
}


this.appendWhiteListTable= function(jsonObj)
{
	var tempHtml = "";
	
	if ((0 == jsonObj.ipWhiteList.length) && (0 == jsonObj.pppWhiteList.length))
	{
		$("#BTN_Remove3").attr("disabled", "disabled");
	}
	else
	{
		$("#BTN_Remove3").removeAttr("disabled");
	}
	
	$.each(jsonObj.ipWhiteList, function(i, elm){
		tempHtml += currentPageInst.prepareOneline(elm);
	});
	
	$.each(jsonObj.pppWhiteList, function(i, elm){
		tempHtml += currentPageInst.prepareOneline(elm);
	});
	
	$("#IPF_WhiteListNeedAppend").empty();
	$("#IPF_WhiteListNeedAppend").append(tempHtml);
}


this.prepareOneline= function(elm)
{
	var tempHtml;
	var interface = "";
	var srcIpAndMask ="";
	var srcPort ="";
	var dstIpAndMask ="";
	var dstPort ="";
	var protocol = "";
	
	if (("None" == elm.protocol) || ("NONE" == elm.protocol) || ("none" == elm.protocol))
	{
		protocol = "All";
	}
	else
	{
		protocol = elm.protocol;
	}
	
	srcIpAndMask = this.prepareSrcIpAndMask(elm);
	dstIpAndMask = this.prepareDstIpAndMask(elm);

	if ((('0' == elm.srcPortStart) || ('' == elm.srcPortStart))
	 && (('0' == elm.srcPortEnd) || ('' == elm.srcPortEnd)))
	{
		srcPort = '&nbsp;';
	}
	else if(('0' == elm.srcPortEnd) || ('' == elm.srcPortEnd))
	{
		srcPort = elm.srcPortStart;
	}
	else
	{
		srcPort = elm.srcPortStart + "-" + elm.srcPortEnd;
	}
	
	if ((('0' == elm.dstPortStart) || ('' == elm.dstPortStart))
	 && (('0' == elm.dstPortEnd) || ('' == elm.dstPortEnd)))
	{
		dstPort = '&nbsp;';
	}
	else if(('0' == elm.dstPortEnd) || ('' == elm.dstPortEnd))
	{
		dstPort = elm.dstPortStart;
	}
	else
	{
		dstPort = elm.dstPortStart + "-" + elm.dstPortEnd;
	}
	
	tempHtml = "<tr>";
	tempHtml += "<td>" + elm.filterName + "</td>";
	if (undefined != elm.wanIf)
	{
		tempHtml +=  "<td>" + elm.wanIf + "</td>";
	}
	tempHtml += "<td>" + elm.ipVersion + "</td>";
	tempHtml += "<td>" + protocol + "</td>";
	tempHtml += "<td>" + srcIpAndMask + "</td>";
	tempHtml += "<td>" + srcPort + "</td>";
	tempHtml += "<td>" + dstIpAndMask + "</td>";
	tempHtml += "<td>" + dstPort + "</td>";
	tempHtml += "<td align='center'><input type='checkbox' name='rml' value='" + elm.filterName + "' ></td>";
	tempHtml += "</tr>";
	
	return tempHtml;
}


this.prepareSrcIpAndMask= function(elm)
{
	var srcIpAndMask = '';
	
	if ('' != elm.srcAddr)
	{
		srcIpAndMask += elm.srcAddr;
	}
	
	if('' != elm.endSrcAddr)
	{
		srcIpAndMask += "-";
		srcIpAndMask += elm.endSrcAddr;
	}
	
	if ('' != elm.srcMask)
	{
		srcIpAndMask += "/";
		srcIpAndMask += elm.srcMask;
	}
	
	if ('' == srcIpAndMask)
	{
		srcIpAndMask = '&nbsp;';
	}
	
	return srcIpAndMask;
}


this.prepareDstIpAndMask= function(elm)
{
	var dstIpAndMask = '';
	
	if ('' != elm.dstAddr)
	{
		dstIpAndMask += elm.dstAddr;
	}
	
	if('' != elm.endDstAddr)
	{
		dstIpAndMask += "-";
		dstIpAndMask += elm.endDstAddr;
	}
	
	if ('' != elm.dstMask)
	{
		dstIpAndMask += "/";
		dstIpAndMask += elm.dstMask;
	}
	
	if ('' == dstIpAndMask)
	{
		dstIpAndMask = '&nbsp;';
	}
	
	return dstIpAndMask;
}


this.appendIfList= function(jsonObj)
{
	var tempHtml='';
	
	$.each(jsonObj.wanInfo, function(i, elm){
			tempHtml += "<tr><td> <input type='checkbox' name='ifChk' checked  class='checkboxs' value='" + 
                       elm.wanIfName + "'></td>" + "<td>&nbsp;&nbsp;" + elm.name + "/" + elm.wanIfName + "</td></tr>";
	});
	
	$("#IPF_IfListNeedAppend").empty();
	$("#IPF_IfListNeedAppend").append(tempHtml);
}


this.initHtmlText= function()
{
	var tempHtml;
	$("#IPF_Server").append(getTagTextFromXmlDoc("ipfltServer"));
	$("#IPF_Enable").append(getTagTextFromXmlDoc("enableCtx"));
	$("#IPF_Disable").append(getTagTextFromXmlDoc("disableCtx"));
	$("#IPF_ListType").append(getTagTextFromXmlDoc("ipfltListType"));
	
	tempHtml = "<option value='black' selected='selected'>" + getTagTextFromXmlDoc("ipfltBListButton");
	tempHtml += "<option value='white'>" + getTagTextFromXmlDoc("ipfltWListButton");
	$("#IPF_SEL_Type").empty();
	$("#IPF_SEL_Type").append(tempHtml);
	tempHtml = '';
	
	$("#IPF_BLVTitle").append(getTagTextFromXmlDoc("ipfltBLVTitle"));
	$("#IPF_BLVComment1").append(getTagTextFromXmlDoc("ipfltBLVComment1"));
	$("#IPF_BLVComment2").append(getTagTextFromXmlDoc("ipfltBLVComment2"));
	$("#IPF_FlterName").append(getTagTextFromXmlDoc("ipfltFlterName"));
	$("#IPF_IpVersion").append(getTagTextFromXmlDoc("ipfltIpVersion"));
	$("#IPF_Protocol").append(getTagTextFromXmlDoc("ipfltProtocol"));
	$("#IPF_SourceIpAndMask").append(getTagTextFromXmlDoc("ipfltSourceIpAndMask"));
	$("#IPF_SourcePort").append(getTagTextFromXmlDoc("ipfltSourcePort"));
	$("#IPF_DestIpAndMask").append(getTagTextFromXmlDoc("ipfltDestIpAndMask"));
	$("#IPF_DestPort").append(getTagTextFromXmlDoc("ipfltDestPort"));
	$("#IPF_Del").append(getTagTextFromXmlDoc("delCtx"));
	$("#BTN_Add").val(getTagTextFromXmlDoc("addCtx"));
	$("#BTN_Remove").val(getTagTextFromXmlDoc("delCtx"));
	
	$("#IPF_BLATitle").append(getTagTextFromXmlDoc("ipfltBLATitle"));
	$("#IPF_BLAComment").append(getTagTextFromXmlDoc("ipfltBLAComment"));
	$("#IPF_FilterName2").append(getTagTextFromXmlDoc("ipfltFlterName"));
	$("#IPF_Protocol2").append(getTagTextFromXmlDoc("ipfltProtocol"));
	
	tempHtml = "<option value='5' selected='selected'>" + getTagTextFromXmlDoc("ipfltProSelect1");
	tempHtml += "<option value='0'>" + getTagTextFromXmlDoc("ipfltProSelect2");
	tempHtml += "<option value='1'>" + getTagTextFromXmlDoc("ipfltProSelect3");
	tempHtml += "<option value='2'>" + getTagTextFromXmlDoc("ipfltProSelect4");
	tempHtml += "<option value='3'>" + getTagTextFromXmlDoc("ipfltProSelect5");
	$("#IPF_SEL_protocol2").empty();
	$("#IPF_SEL_Protocol4").empty();
	$("#IPF_SEL_protocol2").append(tempHtml);
	$("#IPF_SEL_Protocol4").append(tempHtml);
	tempHtml = '';
	
	$("#IPF_SourceIp").append(getTagTextFromXmlDoc("ipfltSourceIp"));
	$("#IPF_SourceMask").append(getTagTextFromXmlDoc("ipfltSourceMask"));
	$("#IPF_SourcePort2").append(getTagTextFromXmlDoc("ipfltSourcePortNote"));
	$("#IPF_DestIp").append(getTagTextFromXmlDoc("ipfltDestIp"));
	$("#IPF_DestMask").append(getTagTextFromXmlDoc("ipfltDestMask"));
	$("#IPF_DestPort2").append(getTagTextFromXmlDoc("ipfltDestPortNote"));
	$("#BTN_Apply2").val(getTagTextFromXmlDoc("saveApplyCtx"));
	
	$("#IPF_WLVTitle").append(getTagTextFromXmlDoc("ipfltWLVTitle"));
	$("#IPF_WLVComment1").append(getTagTextFromXmlDoc("ipfltWLVComment1"));
	$("#IPF_WLVComment2").append(getTagTextFromXmlDoc("ipfltWLVComment2"));
	$("#IPF_FilterName3").append(getTagTextFromXmlDoc("ipfltFlterName"));
	$("#IPF_Interface3").append(getTagTextFromXmlDoc("interfaceCtx"));
	$("#IPF_IpVersion3").append(getTagTextFromXmlDoc("ipfltIpVersion"));
	$("#IPF_Protocol3").append(getTagTextFromXmlDoc("ipfltProtocol"));
	$("#IPF_SourceIpAndMask3").append(getTagTextFromXmlDoc("ipfltSourceIpAndMask"));
	$("#IPF_SourcePort3").append(getTagTextFromXmlDoc("ipfltSourcePort"));
	$("#IPF_DestIpAndMask3").append(getTagTextFromXmlDoc("ipfltDestIpAndMask"));
	$("#IPF_DestPort3").append(getTagTextFromXmlDoc("ipfltDestPort"));
	$("#IPF_Del3").append(getTagTextFromXmlDoc("delCtx"));
	$("#BTN_Add3").val(getTagTextFromXmlDoc("addCtx"));
	$("#BTN_Remove3").val(getTagTextFromXmlDoc("delCtx"));
	
	$("#IPF_WLATitle").append(getTagTextFromXmlDoc("ipfltWLATitle"));
	$("#IPF_WLAComment").append(getTagTextFromXmlDoc("ipfltWLAComment"));
	$("#IPF_FilterName4").append(getTagTextFromXmlDoc("ipfltFlterName"));
	$("#IPF_Protocol4").append(getTagTextFromXmlDoc("ipfltProtocol"));
	$("#IPF_SourceIp4").append(getTagTextFromXmlDoc("ipfltSourceIp"));
	$("#IPF_SourceMask4").append(getTagTextFromXmlDoc("ipfltSourceMask"));
	$("#IPF_SourcePort4").append(getTagTextFromXmlDoc("ipfltSourcePortNote"));
	$("#IPF_DestIp4").append(getTagTextFromXmlDoc("ipfltDestIp"));
	$("#IPF_DestMask4").append(getTagTextFromXmlDoc("ipfltDestMask"));
	$("#IPF_DestPort4").append(getTagTextFromXmlDoc("ipfltDestPortNote"));
	$("#IPF_WLATitle2").append(getTagTextFromXmlDoc("ipfltWLATitle2"));
	$("#IPF_WLAComment2").append(getTagTextFromXmlDoc("ipfltWLAComment2"));
	//$("#BTN_ChkAll").val(getTagTextFromXmlDoc("ipfltSelectAll"));
	$("#IPF_SelectAll").append(getTagTextFromXmlDoc("ipfltSelectAll"));
	$("#BTN_Apply4").val(getTagTextFromXmlDoc("saveApplyCtx"));

	$("#IPF_MenuSecIpList").append(getTagTextFromXmlDoc("menuSecIpList"));

}


this.registerEvent= function()
{
	$("input[name='IPF_RADIO_switch']:eq(0)").click(function(){currentPageInst.enableIpflt(1);});
	$("input[name='IPF_RADIO_switch']:eq(1)").click(function(){currentPageInst.enableIpflt(0);});
	
	$("#IPF_SEL_Type").change(function(){currentPageInst.changeViewPage();});
	
	$("#IPF_SEL_protocol2").change(function(){currentPageInst.displayBPortOrNot(this);});
	$("#IPF_SEL_Protocol4").change(function(){currentPageInst.displayWPortOrNot(this);});
	
	$("#BTN_Add").click(function(){currentPageInst.displayBlistAddPage();});
	$("#BTN_Remove").click(function(){currentPageInst.removeClick(this.form.rml, "black");});
	
	$("#BTN_Add3").click(function(){currentPageInst.displayWlistAddPage();});
	$("#BTN_Remove3").click(function(){currentPageInst.removeClick(this.form.rml, "white");});
	
	$("#BTN_Apply2").click(function(){currentPageInst.checkAndSubmitBRule();});
	$("#BTN_Apply4").click(function(){currentPageInst.checkAndSubmitWRule();});
	
	$("#BTN_ChkAll").click(function(){currentPageInst.checkedAllWanIf(this);});
	
	$("#IPF_TEXT_FltName2").change(function(){currentPageInst.checkFltName(this);});
	$("#IPF_TEXT_StartSrcAddr2").change(function(){currentPageInst.checkIp(this,"black");});
	$("#IPF_TEXT_EndSrcAddr2").change(function(){currentPageInst.checkIp(this,"black");});
	$("#IPF_TEXT_SrcMask2").change(function(){currentPageInst.checkMask(this,"black");});
	$("#IPF_TEXT_SrcPort2").change(function(){currentPageInst.checkPort(this);});
	$("#IPF_TEXT_StartDstAddr2").change(function(){currentPageInst.checkIp(this,"black");});
	$("#IPF_TEXT_EndDstAddr2").change(function(){currentPageInst.checkIp(this,"black");});
	$("#IPF_TEXT_DstMask2").change(function(){currentPageInst.checkMask(this,"black");});
	$("#IPF_TEXT_DstPort2").change(function(){currentPageInst.checkPort(this);});
	
	$("#IPF_TEXT_FltName4").change(function(){currentPageInst.checkFltName(this);});
	$("#IPF_TEXT_StartSrcAddr4").change(function(){currentPageInst.checkIp(this,"white");});
	$("#IPF_TEXT_EndSrcAddr4").change(function(){currentPageInst.checkIp(this,"white");});
	$("#IPF_TEXT_SrcMask4").change(function(){currentPageInst.checkMask(this,"white");});
	$("#IPF_TEXT_SrcPort4").change(function(){currentPageInst.checkPort(this);});
	$("#IPF_TEXT_StartDstAddr4").change(function(){currentPageInst.checkIp(this,"white");});
	$("#IPF_TEXT_EndDstAddr4").change(function(){currentPageInst.checkIp(this,"white");});
	$("#IPF_TEXT_DstMask4").change(function(){currentPageInst.checkMask(this,"white");});
	$("#IPF_TEXT_DstPort4").change(function(){currentPageInst.checkPort(this);});
}


this.changeViewPage= function()
{
	var pageType = $("#IPF_SEL_Type").val();
	
	if ("white" == pageType)
	{
		this.displayWlistViewPage();
	}
	else
	{
		this.displayBlistViewPage();
	}
}


this.checkedAllWanIf= function(elm)
{
	if (true == elm.checked)
	{
		$.each($("input[name='ifChk']"), function(i, list){list.checked = true;})
	}
	else
	{
		$.each($("input[name='ifChk']"), function(i, list){list.checked = false;})
	}
}


this.checkFltName= function(elm)
{
	if (('' == elm.value) || (!isValidName(elm.value)))
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn1"));
		return 0;
	}
	else
	{
		warnMsgHide(elm);
		return 1;
	}
}


this.checkIp= function(elm, type)
{
	if (1 == this.buildIpv6)
	{
		if (("black" == type) && ('6' == $("select[name='ipversion1']").val()))
		{
			if (('' != elm.value) && (!isValidIpAddress6(elm.value)))
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn2"));
				return 0;
			}
			else
			{
				warnMsgHide(elm);
				return 1;
			}
		}
		else if (("white" == type) && ('6' == $("select[name='ipversion2']").val()))
		{
			if (('' != elm.value) && (!isValidIpAddress6(elm.value)))
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn2"));
				return 0;
			}
			else
			{
				warnMsgHide(elm);
				return 1;
			}
		}
	}

	if (('' != elm.value) && (!isValidNetIpAddress(elm.value)))
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn3"));
		return 0;
	}
	else
	{
		warnMsgHide(elm);
		return 1;
	}
}


this.checkMask= function(elm, type)
{
	if (1 == this.buildIpv6)
	{
		if (("black" == type) && ('6' == $("select[name='ipversion1']").val()))
		{
			if (('' != elm.value) && (!isValidPrefixLength(elm.value)))
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn10"));
				return 0;
			}
			else
			{
				warnMsgHide(elm);
				return 1;
			}
		}
		else if (("white" == type) && ('6' == $("select[name='ipversion2']").val()))
		{
			if (('' != elm.value) && (!isValidPrefixLength(elm.value)))
			{
				warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn10"));
				return 0;
			}
			else
			{
				warnMsgHide(elm);
				return 1;
			}
		}
	}
	
	
	if (('' != elm.value) && (!isValidSubnetMask(elm.value)))
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn4"));
		return 0;
	}
	else
	{
		warnMsgHide(elm);
		return 1;
	}
}


this.checkPort= function(elm)
{
	if (('' != elm.value) && (!isValidPort(elm.value)))
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("ipfltWarn5"));
		return 0;
	}
	else
	{
		warnMsgHide(elm);
		return 1;
	}
}


this.checkAndSubmitBRule= function()
{
	var postData;
	var ipver = '4';
	var objArray = new Array();
	var protocol = $("#IPF_SEL_protocol2").val();
	
	objArray.push($("#IPF_TEXT_FltName2")); 
	objArray.push($("#IPF_TEXT_StartSrcAddr2"));
	objArray.push($("#IPF_TEXT_EndSrcAddr2"));
	objArray.push($("#IPF_TEXT_SrcMask2"));
	objArray.push($("#IPF_TEXT_StartDstAddr2"));
	objArray.push($("#IPF_TEXT_EndDstAddr2"));
	objArray.push($("#IPF_TEXT_DstMask2"));
	if (('5' != $("#IPF_SEL_protocol2").val()) && ('3' != $("#IPF_SEL_protocol2").val()))
	{
		objArray.push($("#IPF_TEXT_SrcPort2"));
		objArray.push($("#IPF_TEXT_DstPort2"));
	}
	
	if (!checkValid(getTagTextFromXmlDoc("ipfltWarn6"), objArray))
	{
		return;
	}
	
	if (('' == $("#IPF_TEXT_StartSrcAddr2").val())
	 && ('' == $("#IPF_TEXT_SrcMask2").val())
	 && ('' == $("#IPF_TEXT_SrcPort2").val())
	 && ('' == $("#IPF_TEXT_StartDstAddr2").val())
	 && ('' == $("#IPF_TEXT_DstMask2").val())
	 && ('' == $("#IPF_TEXT_DstPort2").val())
	 && ('5' == $("#IPF_SEL_protocol2").val()))
	{
		alert(getTagTextFromXmlDoc("ipfltWarn10"));
		return;
	}
	
	if (('' == $("#IPF_TEXT_StartSrcAddr2").val()) && ('' != $("#IPF_TEXT_SrcMask2").val()))
	{
		alert(getTagTextFromXmlDoc("ipfltWarn11"));
		return;
	}
	
	if (('' == $("#IPF_TEXT_StartDstAddr2").val()) && ('' != $("#IPF_TEXT_DstMask2").val()))
	{
		alert(getTagTextFromXmlDoc("ipfltWarn12"));
		return;
	}
	
	if (('1' == this.buildIpv6) && ('6' == $("select[name='ipversion1']").val()))
	{
		ipver = '6';
	}
	else
	{
		if (('' != $("#IPF_TEXT_StartSrcAddr2").val()) && ('' != $("#IPF_TEXT_EndSrcAddr2").val()))
		{
			if (!isValidIpAddressRange($("#IPF_TEXT_StartSrcAddr2").val(), $("#IPF_TEXT_EndSrcAddr2").val()))
			{
				alert(getTagTextFromXmlDoc("ipfltWarn7"));
				return;
			}
		}
		
		if (('' != $("#IPF_TEXT_StartDstAddr2").val()) && ('' != $("#IPF_TEXT_EndDstAddr2").val()))
		{
			if (!isValidIpAddressRange($("#IPF_TEXT_StartDstAddr2").val(), $("#IPF_TEXT_EndDstAddr2").val()))
			{
				alert(getTagTextFromXmlDoc("ipfltWarn8"));
				return;
			}
		}
	}
	
	disableSubmit($("#BTN_Apply2"));
	
	jsonObjInit();
	jsonObjPush("action","add");
	jsonObjPush("fltName",encodeUrl($("#IPF_TEXT_FltName2").val()));
	jsonObjPush("IPVersion",ipver);
	jsonObjPush("protocol",protocol);
	jsonObjPush("srcAddr",$("#IPF_TEXT_StartSrcAddr2").val());
	jsonObjPush("endSrcAddr",$("#IPF_TEXT_EndSrcAddr2").val());
	jsonObjPush("srcMask",$("#IPF_TEXT_SrcMask2").val());
	jsonObjPush("dstAddr",$("#IPF_TEXT_StartDstAddr2").val());
	jsonObjPush("endDstAddr",$("#IPF_TEXT_EndDstAddr2").val());
	jsonObjPush("dstMask",$("#IPF_TEXT_DstMask2").val());
	
	if (('5' == protocol) || ('3' == protocol))
	{
		//jsonObjPush("srcPort","0");
		//jsonObjPush("dstPort","0");
	}
	else
	{
		jsonObjPush("srcPort",$("#IPF_TEXT_SrcPort2").val());
		jsonObjPush("dstPort",$("#IPF_TEXT_DstPort2").val());
	}
	
	postData = jsonObjEnd();
	setCfg("scoutflt.cmd", postData, finishAddBRule);
}


this.checkAndSubmitWRule= function(elm)
{
	var postData;
	var ipver = '4';
	var objArray = new Array();
	var protocol = $("#IPF_SEL_Protocol4").val();
	var wanIf = '';
	var first = true;
	
	objArray.push($("#IPF_TEXT_FltName4")); 
	objArray.push($("#IPF_TEXT_StartSrcAddr4"));
	objArray.push($("#IPF_TEXT_EndSrcAddr4"));
	objArray.push($("#IPF_TEXT_SrcMask4"));
	objArray.push($("#IPF_TEXT_StartDstAddr4"));
	objArray.push($("#IPF_TEXT_EndDstAddr4"));
	objArray.push($("#IPF_TEXT_DstMask4"));
	if (('5' != $("#IPF_SEL_Protocol4").val()) && ('3' != $("#IPF_SEL_Protocol4").val()))
	{
		objArray.push($("#IPF_TEXT_SrcPort4"));
		objArray.push($("#IPF_TEXT_DstPort4"));
	}
	
	if (!checkValid(getTagTextFromXmlDoc("ipfltWarn6"), objArray))
	{
		return;
	}
	
	if (('' == $("#IPF_TEXT_StartSrcAddr4").val())
	 && ('' == $("#IPF_TEXT_SrcMask4").val())
	 && ('' == $("#IPF_TEXT_SrcPort4").val())
	 && ('' == $("#IPF_TEXT_StartDstAddr4").val())
	 && ('' == $("#IPF_TEXT_DstMask4").val())
	 && ('' == $("#IPF_TEXT_DstPort4").val())
	 && ('5' == $("#IPF_SEL_Protocol4").val()))
	{
		alert(getTagTextFromXmlDoc("ipfltWarn10"));
		return;
	}
	
	if (('' == $("#IPF_TEXT_StartSrcAddr4").val()) && ('' != $("#IPF_TEXT_SrcMask4").val()))
	{
		alert(getTagTextFromXmlDoc("ipfltWarn11"));
		return;
	}
	
	if (('' == $("#IPF_TEXT_StartDstAddr4").val()) && ('' != $("#IPF_TEXT_DstMask4").val()))
	{
		alert(getTagTextFromXmlDoc("ipfltWarn12"));
		return;
	}
	
	if (('1' == this.buildIpv6) && ('6' == $("select[name='ipversion2']").val()))
	{
		ipver = '6';
	}
	else
	{
		if (('' != $("#IPF_TEXT_StartSrcAddr4").val()) && ('' != $("#IPF_TEXT_EndSrcAddr4").val()))
		{
			if (!isValidIpAddressRange($("#IPF_TEXT_StartSrcAddr4").val(), $("#IPF_TEXT_EndSrcAddr4").val()))
			{
				alert(getTagTextFromXmlDoc("ipfltWarn7"));
				return;
			}
		}
		
		if (('' != $("#IPF_TEXT_StartDstAddr4").val()) && ('' != $("#IPF_TEXT_EndDstAddr4").val()))
		{
			if (!isValidIpAddressRange($("#IPF_TEXT_StartDstAddr4").val(), $("#IPF_TEXT_EndDstAddr4").val()))
			{
				alert(getTagTextFromXmlDoc("ipfltWarn8"));
				return;
			}
		}
	}
	
	if (0 == $("input[name='ifChk'][checked='checked']").length)
	{
		alert(getTagTextFromXmlDoc("ipfltWarn9"));
		return;
	}
	
	disableSubmit($("#BTN_Apply4"));
	
	for (i = 0; i < $("input[name='ifChk']").length; i++)
	{
		if (true == $("input[name='ifChk']")[i].checked)
		{
			if (!first)
			{
				wanIf += '|';
			}
			wanIf += $("input[name='ifChk']")[i].value;
			first = false;
		}
	}
	
	jsonObjInit();
	jsonObjPush("action","add");
	jsonObjPush("fltName",encodeUrl($("#IPF_TEXT_FltName4").val()));
	jsonObjPush("IPVersion",ipver);
	jsonObjPush("protocol",protocol);
	jsonObjPush("srcAddr",$("#IPF_TEXT_StartSrcAddr4").val());
	jsonObjPush("endSrcAddr",$("#IPF_TEXT_EndSrcAddr4").val());
	jsonObjPush("srcMask",$("#IPF_TEXT_SrcMask4").val());
	jsonObjPush("dstAddr",$("#IPF_TEXT_StartDstAddr4").val());
	jsonObjPush("endDstAddr",$("#IPF_TEXT_EndDstAddr4").val());
	jsonObjPush("dstMask",$("#IPF_TEXT_DstMask4").val());
	
	jsonObjPush("wanIf",wanIf);
	
	if (('5' == protocol) || ('3' == protocol))
	{
		//jsonObjPush("srcPort","0");
		//jsonObjPush("dstPort","0");
	}
	else
	{
		jsonObjPush("srcPort",$("#IPF_TEXT_SrcPort4").val());
		jsonObjPush("dstPort",$("#IPF_TEXT_DstPort4").val());
	}
	
	postData = jsonObjEnd();
	setCfg("scinflt.cmd", postData, finishAddWRule);
}


this.removeClick= function(rml, page) {
   	var lst = '';
	var postData;
	
   	if (rml.length > 0)
	{
	      	for (i = 0; i < rml.length; i++)
		{
	         	if ( rml[i].checked == true )
			{
	            		lst += rml[i].value + ', ';
			}
	      	}
	}
   	else if ( rml.checked == true )
	{
      		lst = rml.value;
	}

	if (lst == '')
	{
		alert(getTagTextFromXmlDoc("ipfltWarn13"));
		return;
	}
	disableSubmit($("#BTN_Remove"));

	jsonObjInit();
	
	jsonObjPush("action", "remove");
	jsonObjPush("rmLst", lst);
	
	postData = jsonObjEnd();
	
	if ("black" == page)
	{
		setCfg("scoutflt.cmd", postData, renewBlackListTable);
	}
	else
	{
		setCfg("scinflt.cmd", postData, renewWhiteListTable);
	}
}






this.displayBPortOrNot= function(elm)
{
	if ((5 != elm.value) && (3 != elm.value))
	{
		this.showInputOfBlackPort();
		
		//$("#IPF_TEXT_SrcPort2").change();
		//$("#IPF_TEXT_DstPort2").change();
	}
	else
	{
		this.hideInputOfBlackPort();
		
		//warnMsgHide($("#IPF_TEXT_SrcPort2")[0]);
		//warnMsgHide($("#IPF_TEXT_DstPort2")[0]);
	}
}


this.displayWPortOrNot= function(elm)
{
	if ((5 != elm.value) && (3 != elm.value))
	{
		this.showInputOfWhitePort();
		
		//$("#IPF_TEXT_SrcPort4").change();
		//$("#IPF_TEXT_DstPort4").change();
	}
	else
	{
		this.hideInputOfWhitePort();
		
		//warnMsgHide($("#IPF_TEXT_SrcPort4")[0]);
		//warnMsgHide($("#IPF_TEXT_DstPort4")[0]);
	}
}


this.displayBlistAddPage= function()
{
	$("#IPF_DIV_BlackListView").hide();
	$("#IPF_DIV_BlackListAdd").show();
	$("#IPF_DIV_WhiteListView").hide();
	$("#IPF_DIV_WhiteListAdd").hide();
	
	this.resetBlackListAddForm();
}


this.displayWlistAddPage= function()
{
	$("#IPF_DIV_BlackListView").hide();
	$("#IPF_DIV_BlackListAdd").hide();
	$("#IPF_DIV_WhiteListView").hide();
	$("#IPF_DIV_WhiteListAdd").show();
	
	this.resetWhiteListAddForm();
}


this.displayBlistViewPage= function()
{
	$("#IPF_DIV_BlackListView").show();
	$("#IPF_DIV_BlackListAdd").hide();
	$("#IPF_DIV_WhiteListView").hide();
	$("#IPF_DIV_WhiteListAdd").hide();
	//this.removeWarnFromEachPage();
}


this.displayWlistViewPage= function()
{
	$("#IPF_DIV_BlackListView").hide();
	$("#IPF_DIV_BlackListAdd").hide();
	$("#IPF_DIV_WhiteListView").show();
	$("#IPF_DIV_WhiteListAdd").hide();
	//this.removeWarnFromEachPage();
}


this.enableIpflt= function(enable)
{
	var postData;
	jsonObjInit();
	
	disableSubmit($(".mayBeDisabled"));
	
	jsonObjPush("action", "change");
	jsonObjPush("enable", enable);
	
	postData = jsonObjEnd();
	setCfg("scoutflt.cmd", postData, renewIpfltState);
}




this.updateIpfltState= function(jsonObj)
{
	this.perpareIpfltState(jsonObj);
	this.resetBlackListAddForm();
	this.resetWhiteListAddForm();
}


this.resetBlackListAddForm= function()
{
	this.emptyAllInput("black");
	this.removeWarnFromEachPage();
	this.hideInputOfBlackPort();
}


this.resetWhiteListAddForm= function()
{
	this.emptyAllInput("white");
	this.removeWarnFromEachPage();
	this.hideInputOfWhitePort();
}


this.removeWarnFromEachPage= function()
{
	$.each($(".bListInputText"), function(i, list){warnMsgHide(list);});
	$.each($(".wListInputText"), function(i, list){warnMsgHide(list);});
}


this.emptyAllInput= function(form)
{
	if ("black" == form)
	{
		$(".bListInputText").val("");
		$("#IPF_SEL_protocol2").val("5");
		
		if (1 == this.buildIpv6)
		{
			$("select[name='ipversion1']").val("4");
			$("#IPF_SourceMask").val("");
			$("#IPF_DestMask").val("");
			$("#IPF_SourceMask").empty();
			$("#IPF_DestMask").empty();
			$("#IPF_SourceMask").append(getTagTextFromXmlDoc("ipfltSourceMask"));
			$("#IPF_DestMask").append(getTagTextFromXmlDoc("ipfltDestMask"));
		}
	}
	else if("white" == form)
	{
		$(".wListInputText").val("");
		$("#IPF_SEL_Protocol4").val("5");
		
		if (1 == this.buildIpv6)
		{
			$("select[name='ipversion2']").val("4");
			$("#IPF_SourceMask4").val("");
			$("#IPF_DestMask4").val("");
			$("#IPF_SourceMask4").empty();
			$("#IPF_DestMask4").empty();
			$("#IPF_SourceMask4").append(getTagTextFromXmlDoc("ipfltSourceMask"));
			$("#IPF_DestMask4").append(getTagTextFromXmlDoc("ipfltDestMask"));
		}
		
		$(".checkboxs").attr("checked", "checked");
	}
}


this.initTheWhileDiv= function(show)
{
	if (1 == show)
	{
		if ('white' == $("#IPF_SEL_Type").val())
		{
			this.displayWlistViewPage();
		}
		else
		{
			this.displayBlistViewPage();
		}
	}
	else
	{
		$("#IPF_DIV_BlackListView").hide();
		$("#IPF_DIV_BlackListAdd").hide();
		$("#IPF_DIV_WhiteListView").hide();
		$("#IPF_DIV_WhiteListAdd").hide();
	}
}


// JavaScript Document
}  // End Page


function finishAddWRule()
{
	renewWhiteListTable();
	currentPageInst.displayWlistViewPage();
}


function finishAddBRule()
{
	renewBlackListTable();
	currentPageInst.displayBlistViewPage();
}


function updateAll(jsonObj)
{
    currentPageInst.updateAll(jsonObj);
}

function updateAllCfg()
{
	getCfg("ipfltGet.json", {"wanInfo":"1", "ipfltState":"1", "buildIpv6":"1", "blackList":"1", "ipWhiteList":"1", "pppWhiteList":"1"}, updateAll);
}

function appendBlackListTable(jsonObj)
{
    currentPageInst.appendBlackListTable(jsonObj);
}

function renewBlackListTable()
{
	getCfg("ipfltGet.json", {"wanInfo":"0", "ipfltState":"0", "buildIpv6":"0", "blackList":"1", "ipWhiteList":"0", "pppWhiteList":"0"}, appendBlackListTable);
}

function appendWhiteListTable(jsonObj)
{
    currentPageInst.appendWhiteListTable(jsonObj);
}

function renewWhiteListTable()
{
	getCfg("ipfltGet.json", {"wanInfo":"0", "ipfltState":"0", "buildIpv6":"0", "blackList":"0", "ipWhiteList":"1", "pppWhiteList":"1"}, appendWhiteListTable);
}

function updateIpfltState(jsonObj)
{
    currentPageInst.updateIpfltState(jsonObj);
}

function renewIpfltState()
{
	getCfg("ipfltGet.json", {"wanInfo":"0", "ipfltState":"1", "buildIpv6":"0", "blackList":"0", "ipWhiteList":"0", "pppWhiteList":"0"}, updateIpfltState);
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
    this.basicClassFile = "./kt_ipflt_setup.js";
    this.customLv1File = "./kt_ipflt_setup_customlv1.js";
    this.customLv2File = "./kt_ipflt_setup_customlv2.js";
    this.customLv3File = "./kt_ipflt_setup_customlv3.js";
}

