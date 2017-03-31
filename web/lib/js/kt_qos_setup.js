Page = function()
{

// JavaScript Document
this.voipSupport;
this.wanmode;
this.buildIPv6;
this.sumrate=0;

this.initCtrlCfgFlag = false;
this.CurQoS = null;

this.templateList = new Array();
this.curMode;
this.curApp;
this.curClass;
this.curQueue;
this.CurCar;

this.WanList;
this.LanList;
this.ClsAddFlag;
this.ClsEditFlag = false;

this.supportEightQunue = false;
this.eightQunueModifyFlag = false;

this.initHtmlText= function()
{
    $("#QOS_SetupTitle").append(getTagTextFromXmlDoc("qosTitle"));
    $("#QOS_SetupDesc").append(getTagTextFromXmlDoc("menuNetQosConf"));
    $("#QOS_List_SetupDesc").append(getTagTextFromXmlDoc("menuNetFcConf"));
    $("#QOS_Business_SetupDesc").append(getTagTextFromXmlDoc("menuNetServiceName"));
    $("#QOS_Kind_Name").append(getTagTextFromXmlDoc("menuNetQosKind"));
    $("#QOS_Kind_Set_Name").append(getTagTextFromXmlDoc("menuNetQosKindSet"));
    $("#QOS_CAR_Set_Name").append(getTagTextFromXmlDoc("menuNetQosCarSet"));

    $("#QOS_RuleTemplate").append(getTagTextFromXmlDoc("qosRuleTemplate"));
    $("#QOS_Enable").append(getTagTextFromXmlDoc("qosEnableCtx"));
    $("#QOS_UsBandWidth").append(getTagTextFromXmlDoc("qosUpBandWidth"));
    $("#QOS_Schedule").append(getTagTextFromXmlDoc("qosSchedule"));
	
	$("#QOS_LABEL_PolicyPQ").append("PQ");
    $("#QOS_ForcedBw").append(getTagTextFromXmlDoc("qosForcedBandWidthEn"));
    $("#QOS_LB_DSCPMark").append(getTagTextFromXmlDoc("qosDscpMarkEn"));
    $("#QOS_LB_8021PMark").append(getTagTextFromXmlDoc("qos802-1pEn"));
    $("#QOS_SEL_8021P0Mark").append(getTagTextFromXmlDoc("qos802-10Mark"));
    $("#QOS_SEL_8021PTransparent").append(getTagTextFromXmlDoc("qos802-10Mark"));
    $("#QOS_SEL_8021PTransparent").append(getTagTextFromXmlDoc("Transparent"));
    $("#QOS_SEL_8021PRemark").append(getTagTextFromXmlDoc("qos802-1Remark"));
    
    $("#QOS_Qunue").append(getTagTextFromXmlDoc("qosQunue"));
    $("#QOS_Priority").append(getTagTextFromXmlDoc("qosPriorityCtx"));
    $("#QOS_EnabledCtx").append(getTagTextFromXmlDoc("qosEnabledCtx"));
    $("#QOS_Highest").append(getTagTextFromXmlDoc("qosHighest"));
    $("#QOS_High").append(getTagTextFromXmlDoc("qosHigh"));
    $("#QOS_Middle").append(getTagTextFromXmlDoc("qosMiddle"));
    $("#QOS_Low").append(getTagTextFromXmlDoc("qosLow"));
    
    $("#QOS_Qunue2").append(getTagTextFromXmlDoc("qosQunue"));
    $("#QOS_WeightCtx").append(getTagTextFromXmlDoc("qosWeightCtx"));
    $("#QOS_EnabledCtx2").append(getTagTextFromXmlDoc("qosEnabledCtx"));
    
    $("#QOS_AppName").append(getTagTextFromXmlDoc("qosProfessionName"));
    $("#QOS_AppQeueu").append(getTagTextFromXmlDoc("qosQunue"));
    $("#QOS_AppDel").append(getTagTextFromXmlDoc("delCtx"));
    $("#QOS_AppEdit").append(getTagTextFromXmlDoc("editCtx"));
    
    
    $("#QOS_FlowClassTitle").append(getTagTextFromXmlDoc("qosFlowClassEdit"));
    $("#QOS_LB_ProfessionEdit").append(getTagTextFromXmlDoc("qosProfessionEdit"));
    $("#QOS_LB_FlowClsEdit").append(getTagTextFromXmlDoc("qosFlowClassEdit"));
    
    $("#Qos_GroupId").append(getTagTextFromXmlDoc("qosGroupId"));
    
    $("#QOS_ProfessionName").append(getTagTextFromXmlDoc("qosProfessionName"));
    $("#QOS_ProfessionQunue").append(getTagTextFromXmlDoc("qosClassQunue"));
    $("#QOS_ClassQunue").append(getTagTextFromXmlDoc("qosClassQunue"));
    $(".QOS_CLS_ClassType").append(getTagTextFromXmlDoc("qosClassType"));
    
    $("#QOS_TypeCommonMin").append(getTagTextFromXmlDoc("qosMinimum"));
    $("#QOS_TypeCommonMax").append(getTagTextFromXmlDoc("qosMaximum"));
    $("#QOS_ProtoType").append(getTagTextFromXmlDoc("qosProtocolType"));
    $("#QOS_DscpValue").append(getTagTextFromXmlDoc("qosDscpValue"));
    $("#QOS_8021PValue").append(getTagTextFromXmlDoc("qos802-1Value"));
    
    $("#QOS_LanIntfMin").append(getTagTextFromXmlDoc("qosMinimum"));
    $("#QOS_WanIntfMin").append(getTagTextFromXmlDoc("qosMinimum"));
    $("#QOS_LanIntfMax").append(getTagTextFromXmlDoc("qosMaximum"));
    $("#QOS_WanIntfMax").append(getTagTextFromXmlDoc("qosMaximum"));
    
    $("#QOS_FlowCtrl").append(getTagTextFromXmlDoc("qosFlowCtrl"));
    $("#QOS_CarProto").append(getTagTextFromXmlDoc("qosProtocol"));
    $("#QOS_CarLanIntf").append(getTagTextFromXmlDoc("qosIntf"));
    $("#QOS_CarSrcIp").append(getTagTextFromXmlDoc("qosSrcIp"));
    $("#QOS_CarSrcSubMask").append(getTagTextFromXmlDoc("qosSrcSubMask"));
    $("#QOS_CarDestIp").append(getTagTextFromXmlDoc("qosDestIp"));
    $("#QOS_CarDestSubMask").append(getTagTextFromXmlDoc("qosDestSubMask"));
    $("#QOS_CarSrcPort").append(getTagTextFromXmlDoc("qosSrcPort"));
    $("#QOS_CarDstPort").append(getTagTextFromXmlDoc("qosDestPort"));
    $("#QOS_CarUsRate").append(getTagTextFromXmlDoc("qosUsRate"));
    
    $("#QOS_ClsIpVer").append(getTagTextFromXmlDoc("qosProtocol"));
    
    $("#QOS_BTN_ClsAdd").val(getTagTextFromXmlDoc("qosAddCls"));
    $("#QOS_BTN_ClsDel").val(getTagTextFromXmlDoc("qosDelCls"));
    
    $("#QOS_CarIpProtTh").append(getTagTextFromXmlDoc("qosCarIpProt"));
    $("#QOS_CarProtTh").append(getTagTextFromXmlDoc("qosProtocol"));
    $("#QOS_CarIntfTh").append(getTagTextFromXmlDoc("qosIntf"));
    $("#QOS_CarSrcIpTh").append(getTagTextFromXmlDoc("qosSrcIp"));
    $("#QOS_CarSrcSubMaskTh").append(getTagTextFromXmlDoc("qosSrcSubMask"));
    $("#QOS_CarDestIpTh").append(getTagTextFromXmlDoc("qosDestIp"));
    $("#QOS_CarDestSubMaskTh").append(getTagTextFromXmlDoc("qosDestSubMask"));
    $("#QOS_CarRateTh").append(getTagTextFromXmlDoc("qosCarRate"));
    $("#QOS_CarDeleteTh").append(getTagTextFromXmlDoc("delCtx"));

    $("#QOS_CarSrcPortTh").append(getTagTextFromXmlDoc("qosSrcPort"));
    $("#QOS_CarDestPortTh").append(getTagTextFromXmlDoc("qosDestPort"));
    
    $("#BTN_Confirm").val(getTagTextFromXmlDoc("ensureCtx"));
    
    $("#BTN_Apply").val(getTagTextFromXmlDoc("applyCtx"));
    $("#BTN_Cancel").val(getTagTextFromXmlDoc("backCtx"));
    $("#BTN_Save").val(getTagTextFromXmlDoc("saveApplyCtx"));
    $("#BTN_No").val(getTagTextFromXmlDoc("saveApplyNo"));  
    $(".mainBody").css("overflow","auto");
}

this.Qos= function(Mode,App,Class,Queue,Car)
{
    this.Mode = Mode;
    this.App = App;
    this.Class = Class;
    this.Queue = Queue;
    this.Car = Car;
}

this.initGlbVar= function(jsonObj)
{
    this.sumrate = 0;
    if (!this.initCtrlCfgFlag)
    {
        this.voipSupport = jsonObj.ctrlCfg.voipSupport;
        this.buildIPv6 = jsonObj.ctrlCfg.buildIpv6;
        this.wanmode = jsonObj.ctrlCfg.wanmode;
		this.supportEightQunue = jsonObj.ctrlCfg.eightqueue == "1" ? true : false;
        this.initCtrlCfgFlag = true;
    }
    
	this.templateList = jsonObj.qosCfg.qosTemplateList;
    this.curMode = jsonObj.qosCfg.qosMode;
    this.curApp = jsonObj.qosCfg.qosApp;
    this.curClass = jsonObj.qosCfg.qosClass;
    this.curQueue =  jsonObj.qosCfg.qosQueue;
    this.CurCar = jsonObj.qosCfg.qosTrafic;
    
    $.each(this.CurCar, function(idx, car){
        currentPageInst.sumrate += parseInt(car.upRate);
    });
    this.CurQoS = new this.Qos(this.curMode, this.curApp, this.curClass, this.curQueue, this.CurCar);
    
    this.WanList = jsonObj.qosCfg.WanList;
    this.LanList = jsonObj.qosCfg.lanIfNameList;
	this.LanList.sort(function(x,y){return (x.lanPanelIfName > y.lanPanelIfName) || -1}); 
    
    initGlbFlag = true;
}

this.updateQosRuleTemplate= function()
{
    var optStr = "";
   
   	$.each(this.templateList, function(idx, templateName){
		optStr += "<option value='"+templateName.name+"'>"+templateName.name+"</option>";
	});
    optStr += "<option value='OTHER' id='qosSelfDefTemplate'>"+getTagTextFromXmlDoc("qosSelfDefTemplate")+"</option>";
    
    $("#QOS_SEL_RuleTemplate").empty();
    $("#QOS_SEL_RuleTemplate").append(optStr);
}

this.updateClassificationIdOpt= function()
{
    var optStr = "";
    var find = 0;
    var ClassidList = new Array();
    
    for(var i=0;i<this.CurQoS.Class.length;i++)
    {
        find=0;
        for(j=0;j<ClassidList.length;j++)
        {
            if(ClassidList[j]==this.CurQoS.Class[i].classId)
            {
                find=1;
                break;
            }
        }
        if(!find)
        {
            ClassidList[ClassidList.length]=this.CurQoS.Class[i].classId;
        }
    }
    
    for(var i=0; i<ClassidList.length; i++)
    {
        optStr = optStr +='<option value="'+ClassidList[i]+'" selected>'+ ClassidList[i] +'</option>';
    }
    
    $("#QOS_SEL_ClassificationID").empty();
    $("#QOS_SEL_ClassificationID").append(optStr);
}

this.updateClsIpVer= function()
{
    var optStr = "";
    
    optStr = optStr + "<option value=0 selected>"+getTagTextFromXmlDoc("qosNewCreateIPv4")+"</option>";
    if (this.buildIPv6)
    {
        optStr = optStr + "<option value=1>"+getTagTextFromXmlDoc("qosNewCreateIPv6")+"</option>";
    }
    $("#QOS_SEL_ClsIpVer").empty();
    $("#QOS_SEL_ClsIpVer").append(optStr);
}

this.updateTcMark= function()
{
    var optStr = "";
    if (this.buildIPv6=="1")
    {
        optStr += "<tr><td width=74>TC：</td>";
        optStr += "<td><input id='QOS_TEXT_TCMarkValue' value='0' maxLength='8' size='10'></td></tr>";
    }
    $("#QOS_TcMarkTbody").empty();
    $("#QOS_TcMarkTbody").append(optStr);
    $("#QOS_TEXT_TCMarkValue").change(function(){currentPageInst.qosTcMarkValueChange(this)});
}

this.writeAppTable= function()
{
    var htmlStr = "";
    $.each(this.CurQoS.App, function(idx, app){
        htmlStr += "<tr align='middle'>"
        htmlStr += "<td align='center'>"+(app.appName=="" ? "&nbsp;" : app.appName) +"</td>";
        htmlStr += "<td align='center'>"+ app.appQueue +"</td>";
        htmlStr += "<td align='center'><input type='checkbox' id='rmapp_"+ idx +"' name='rmapp' value='false' /></td>";
        htmlStr += "<td align='center'><input name='EditApp' style='width:30px' class='buttonY' type='button' id='App_"+ idx + "' onClick='currentPageInst.btnEditApp(this.id)'  value='Edit'/></td>";
        htmlStr += "</tr>";
    });
    
    $("#QOS_AppListTbody").empty();
    $("#QOS_AppListTbody").append(htmlStr);

}

this.GetLanName= function(InterfaceName)
{
    for(i=0,j=1;i<this.LanList.length;i++,j++)
    {
        if(this.LanList[i].lanIfName == "wl0")
        {
            j=1;
        }
        if(InterfaceName == this.LanList[i].lanIfName)
        {
             /* EoC --->port, others---->eth */
        	if((InterfaceName.indexOf("eth") != -1) || (InterfaceName.indexOf("port") != -1))
        	{
        	    return "LAN"+j;
             }
        	else
             {   
        	    return "WLAN"+j;
             }
        }
    }
}

this.getPanelName = function(ifName){
	var paneIfName;
	$.each(this.LanList, function(idx, lanIf){
		if (lanIf.lanIfName == ifName)
		{
			paneIfName = lanIf.lanPanelIfName;
			return;
		}
	});
	return paneIfName;
}


this.writeClsTable= function()
{
    var htmlStr = "";
    htmlStr += '<TR align="center">';
    htmlStr += '<TD class="hd">'+getTagTextFromXmlDoc("qosQunue")+'</TD>';         
    htmlStr += '<TD class="hd">'+getTagTextFromXmlDoc("qosDscpValue")+'</TD>';
    htmlStr += '<TD class="hd">'+getTagTextFromXmlDoc("qos802-1Value")+'</TD>';         
    htmlStr += '<TD class="hd">'+getTagTextFromXmlDoc("editCtx")+'</TD>';
    htmlStr += '</TR>';
    
    if (this.CurQoS.Class == null )
    {
        return;
    }
    
    $.each(this.CurQoS.Class, function(idx, qosClass){
        htmlStr += '<TR align="center">';
        htmlStr += '<TD>' + qosClass.queue + '</TD>';            
        htmlStr += '<TD>' + qosClass.dscpMarkValue + '</TD>';
        htmlStr += '<TD>' + qosClass.qos802_1_P_Value + '</TD>';     
        htmlStr += '<TD><input name="EditCls" class="buttonY" style="width:30px" type="button" id="Cls_'+ idx 
                +'" onClick="currentPageInst.btnEditCls(this.id)" value="Edit"/></td>\n';
        
        htmlStr += '</TR>';
    });

    $("#QOS_ClsTable").empty();
    $("#QOS_ClsTable").append(htmlStr);
}


this.writeCARTable= function()
{

    var htmlStr = "";
    var carCnt = 0;
    
    $.each(this.CurQoS.Car, function(idx, qosCar){
        htmlStr += '<tr align="center">';
        htmlStr += '<td>'+ qosCar.trafficId +'</td>';
        if (currentPageInst.buildIPv6 == "1")
        {
            htmlStr += '<td>'+ ((qosCar.IPVersion == "") ? "&nbsp;" : qosCar.IPVersion) +'</td>';       
        }
        
        htmlStr += '<td>'+ ((qosCar.protocol == "") ? "&nbsp;" : qosCar.protocol) +'</td>'; 
        
        htmlStr += '<td>'+ ((qosCar.interface == "") ? "&nbsp;" : getLanName(qosCar.interface)) +'</td>';
        
        htmlStr += '<td>'+ ((qosCar.srcPort == "") ? "&nbsp;" : qosCar.srcPort) +'</td>';
        
        htmlStr += '<td>'+ ((qosCar.destPort == "") ? "&nbsp;" : qosCar.destPort) +'</td>';
        
        htmlStr += '<td>'+ ((qosCar.srcIp == "") ? "&nbsp;" : qosCar.srcIp) +'</td>';
        htmlStr += '<td>'+ ((qosCar.srcNetmask == "") ? "&nbsp;" : qosCar.srcNetmask) +'</td>';
        
        htmlStr += '<td>'+ ((qosCar.destIp == "") ? "&nbsp;" : qosCar.destIp) +'</td>';
        htmlStr += '<td>'+ ((qosCar.destNetmask == "") ? "&nbsp;" : qosCar.destNetmask) +'</td>';
        
        htmlStr += '<td>'+ ((qosCar.upRate == "") ? "&nbsp;" : qosCar.upRate) +'</td>';
            
        htmlStr += '<td><input type="checkbox" name="rmlcar" value="' + qosCar.trafficId +'"></td>';
        htmlStr += '</tr>';
        
        carCnt++;
    });
    
    $("#QOS_CarTbody").empty();
    $("#QOS_CarTbody").append(htmlStr);      
    
    htmlStr = "";
    $("#QOS_BTN_CARAdd").empty();

    if (carCnt < 10)
    {
         htmlStr += '<input type="button"  class="buttonY" name="qosCarAdd" onClick="currentPageInst.addCarClick()" >';
         $("#QOS_BTN_CARAdd").append(htmlStr);
         $("input[name='qosCarAdd']").val(getTagTextFromXmlDoc("addCtx"));
    }
    
    htmlStr = "";
    if (carCnt > 0)
    {
        htmlStr += '<input type="button" class="buttonY" name="qosCarDel" onClick="currentPageInst.removeCarClick()">';
        $("#QOS_BTN_CARAdd").append(htmlStr);
        $("input[name='qosCarDel']").val(getTagTextFromXmlDoc("delCtx"));
    }
}

this.CurQoSShow= function()
{
    /*判断模板是否被启用，如果启用则则显示模板数据，否则不显示*/
    var bandwidth; 
    
    setSelectVal($("#QOS_SEL_RuleTemplate"), this.CurQoS.Mode.ruleMode);
    $("#QOS_CHX_Enable").val(this.CurQoS.Mode.enable);
    $("#QOS_TEXT_UsBandwidth").val(this.CurQoS.Mode.bandWidth);
    

    if(this.CurQoS.Mode.qosPlan == "priority")
    {
        $("input[name='QOS_RADIO_Policy'][value='priority']").attr("checked", "checked");
    }
    else if(this.CurQoS.Mode.qosPlan == "SP")
    {
        $("input[name='QOS_RADIO_Policy'][value='priority']").attr("checked", "checked");
    }
    else if(this.CurQoS.Mode.qosPlan == "weight")
    {
        $("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked", "checked");
    }
    else
    {
        $("input[name='QOS_RADIO_Policy'][value='car']").attr("checked", "checked");
    }
    
    if (this.CurQoS.Mode.enableForceWeight == "1")
    {
        $("#QOS_CHX_ForcedBw").attr("checked", "checked");
    }
    else
    {
        $("#QOS_CHX_ForcedBw").attr("checked", false);
    }
    
    if (this.CurQoS.Mode.enableDscp == "1")
    {
        $("#QOS_CHX_DSCPMark").attr("checked", "checked");
    }
    else
    {
        $("#QOS_CHX_DSCPMark").attr("checked", false);
    }
    
    if (this.buildIPv6=="1")
    {
        if (this.CurQoS.Mode.enableTc == "1")
        {
            $("#QOS_CHX_TcMark").attr("checked", "checked");
        }
        else
        {
            $("#QOS_CHX_TcMark").attr("checked", false);
        }
    }
    
    $("#QOS_SEL_8021PMark").val(this.CurQoS.Mode.enable802_1_P)
    
    
    if ($("#QOS_CHX_Enable").attr("checked") != "checked")
    {
        $(".QOS_List").hide();
        $(".QOS_BusinessName").hide();
        $(".QOS_Kind").hide();
        $(".QOS_Kind_Set").hide();
        $(".QOS_CAR_Set").hide();
        $("#QOS_Change").hide();
        $(".mainBody>div>form").css("width","638px");
    }
    else 
    {
        if ($("input[name='QOS_RADIO_Policy'][value='priority']").attr("checked") == "checked")
        {
            $(".QOS_List").show();
            $(".QOS_BusinessName").show();
            $(".QOS_Kind").show();
            $(".QOS_Kind_Set").hide();
            $(".QOS_CAR_Set").hide();
            $("#QOS_Change").show();
            $(".mainBody>div>form").css("width","618px");


            $("#QOS_TB_WRREdit").hide();
            $("#QOS_DIV_CARPolicy").hide();
            $("#QOS_TR_ForceBw").hide();
            $("#QOS_DIV_Cls").hide();
	    	$("#QOS_TB_App").show();
            $("#QOS_ClsTable").show();
            $("#QOS_TB_ClsBtn").show();
            $("#QOS_TB_CT").show();
            $("#QOS_DIV_QunueEdit").show();
            $("#QOS_TB_PQEdit").show();
			if (this.supportEightQunue)
			{
				for (var i=5; i<=8; i++)
					$("#QOS_TR_PQQune"+i).show();
				
				//this.reset
			}


        }
        else if ($("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked") == "checked")
        {
            $(".QOS_List").show();
            $(".QOS_BusinessName").show();
            $(".QOS_Kind").show();
            $(".QOS_Kind_Set").hide();
            $(".QOS_CAR_Set").hide();
            $("#QOS_Change").show();
            $(".mainBody>div>form").css("width","618px");

            $("#QOS_TB_PQEdit").hide();
            $("#QOS_DIV_CARPolicy").hide();
            $("#QOS_DIV_Cls").hide();
            $("#QOS_TB_CT").show();
	    	$("#QOS_TB_App").show();
            $("#QOS_ClsTable").show();
            $("#QOS_TB_ClsBtn").show();
            $("#QOS_DIV_QunueEdit").show();
            $("#QOS_TB_WRREdit").show();
            $("#QOS_TR_ForceBw").show();
			if (this.supportEightQunue)
			{
				for (var i=5; i<=8; i++)
					$("#QOS_TR_WrrQ"+i).show();
			}


        }
        else if ($("input[name='QOS_RADIO_Policy'][value='car']").attr("checked") == "checked")
        {
            $(".QOS_List").hide();
            $(".QOS_BusinessName").hide();
            $(".QOS_Kind").hide();
            $(".QOS_Kind_Set").hide();
            $(".QOS_CAR_Set").show();
            $("#QOS_Change").show();
            $(".mainBody>div>form").css("width","638px");

            $("#QOS_TB_PQEdit").hide();
            $("#QOS_TB_WRREdit").hide();
            $("#QOS_TB_CT").hide();
            $("#QOS_DIV_QunueEdit").hide();
            $("#QOS_TB_App").hide();
            $("#QOS_ClsTable").hide();
            $("#QOS_DIV_Cls").hide();
            $("#QOS_TB_ClsBtn").hide();
            $("#QOS_DIV_CARAdd").hide();
            $("#QOS_TR_ForceBw").hide();
            $("#QOS_DIV_CARPolicy").show();
            $("#QOS_TB_Global").show();        
        }

    }
    
    if(this.CurQoS.Queue)
    {
        $("#QOS_CHX_Q1Enable").attr("checked", (this.CurQoS.Queue[0].enableQosQueue == "1") ? "checked" : false);
        $("#QOS_CHX_Q2Enable").attr("checked", (this.CurQoS.Queue[1].enableQosQueue == "1") ? "checked" : false);
        $("#QOS_CHX_Q3Enable").attr("checked", (this.CurQoS.Queue[2].enableQosQueue == "1") ? "checked" : false);
        $("#QOS_CHX_Q4Enable").attr("checked", (this.CurQoS.Queue[3].enableQosQueue == "1") ? "checked" : false);
		if (this.supportEightQunue)
		{
			$("#QOS_CHX_Q5Enable").attr("checked", (this.CurQoS.Queue[4].enableQosQueue == "1") ? "checked" : false);
        	$("#QOS_CHX_Q6Enable").attr("checked", (this.CurQoS.Queue[5].enableQosQueue == "1") ? "checked" : false);
        	$("#QOS_CHX_Q7Enable").attr("checked", (this.CurQoS.Queue[6].enableQosQueue == "1") ? "checked" : false);
        	$("#QOS_CHX_Q8Enable").attr("checked", (this.CurQoS.Queue[7].enableQosQueue == "1") ? "checked" : false);
		}
        $("#QOS_CHX_WRRQ1Enable").attr("checked", (this.CurQoS.Queue[0].enableQosQueue == "1") ? "checked" : false);
        $("#QOS_CHX_WRRQ2Enable").attr("checked", (this.CurQoS.Queue[1].enableQosQueue == "1") ? "checked" : false);
        $("#QOS_CHX_WRRQ3Enable").attr("checked", (this.CurQoS.Queue[2].enableQosQueue == "1") ? "checked" : false);
        $("#QOS_CHX_WRRQ4Enable").attr("checked", (this.CurQoS.Queue[3].enableQosQueue == "1") ? "checked" : false);
		if (this.supportEightQunue)
		{
			$("#QOS_CHX_WRRQ5Enable").attr("checked", (this.CurQoS.Queue[4].enableQosQueue == "1") ? "checked" : false);
        	$("#QOS_CHX_WRRQ6Enable").attr("checked", (this.CurQoS.Queue[5].enableQosQueue == "1") ? "checked" : false);
        	$("#QOS_CHX_WRRQ7Enable").attr("checked", (this.CurQoS.Queue[6].enableQosQueue == "1") ? "checked" : false);
        	$("#QOS_CHX_WRRQ8Enable").attr("checked", (this.CurQoS.Queue[7].enableQosQueue == "1") ? "checked" : false);
		}
        
        $("#QOS_TEXT_Q1Weight").val(this.CurQoS.Queue[0].qosQueueWeight);
        $("#QOS_TEXT_Q2Weight").val(this.CurQoS.Queue[1].qosQueueWeight);
        $("#QOS_TEXT_Q3Weight").val(this.CurQoS.Queue[2].qosQueueWeight);
        $("#QOS_TEXT_Q4Weight").val(this.CurQoS.Queue[3].qosQueueWeight);
		if (this.supportEightQunue)
		{
			$("#QOS_TEXT_Q5Weight").val(this.CurQoS.Queue[4].qosQueueWeight);
        	$("#QOS_TEXT_Q6Weight").val(this.CurQoS.Queue[5].qosQueueWeight);
        	$("#QOS_TEXT_Q7Weight").val(this.CurQoS.Queue[6].qosQueueWeight);
        	$("#QOS_TEXT_Q8Weight").val(this.CurQoS.Queue[7].qosQueueWeight);
		}
        
        $("#QOS_TEXT_Q1Weight").attr("disabled", ($("#QOS_CHX_WRRQ1Enable").attr("checked") == "checked") ? false : true);
        $("#QOS_TEXT_Q2Weight").attr("disabled", ($("#QOS_CHX_WRRQ2Enable").attr("checked") == "checked") ? false : true);
        $("#QOS_TEXT_Q3Weight").attr("disabled", ($("#QOS_CHX_WRRQ3Enable").attr("checked") == "checked") ? false : true);
        $("#QOS_TEXT_Q4Weight").attr("disabled", ($("#QOS_CHX_WRRQ4Enable").attr("checked") == "checked") ? false : true);
		if (this.supportEightQunue)
		{
			$("#QOS_TEXT_Q5Weight").attr("disabled", ($("#QOS_CHX_WRRQ5Enable").attr("checked") == "checked") ? false : true);
        	$("#QOS_TEXT_Q6Weight").attr("disabled", ($("#QOS_CHX_WRRQ6Enable").attr("checked") == "checked") ? false : true);
        	$("#QOS_TEXT_Q7Weight").attr("disabled", ($("#QOS_CHX_WRRQ7Enable").attr("checked") == "checked") ? false : true);
        	$("#QOS_TEXT_Q8Weight").attr("disabled", ($("#QOS_CHX_WRRQ8Enable").attr("checked") == "checked") ? false : true);
		}
    }
    /*
        AppCnt = this.CurQoS.App.length - 1;
        ClsCnt = this.CurQoS.Class.length - 1;
        QueueCnt = this.CurQoS.Queue.length - 1;
        CARCnt = this.CurQoS.Car.length ;
    */
    this.writeAppTable();
    this.writeClsTable();
    this.writeCARTable();
	
	if (this.supportEightQunue)
	{
		if (!this.eightQunueModifyFlag)
		{
			//append opt str
			var selOptStr ="<OPTION value=5>5</OPTION><OPTION value=6>6</OPTION><OPTION value=7>7</OPTION><OPTION value=8>8</OPTION>";
			$("#QOS_SEL_AppQueue").append(selOptStr);
			$("#QOS_SEL_ClassQuenue").append(selOptStr);
			
			//modify PQ pri
			 $("#QOS_Highest").empty();
			 $("#QOS_High").empty();
			 $("#QOS_Middle").empty();
			 $("#QOS_Low").empty();


			 $("#QOS_Highest").append(getTagTextFromXmlDoc("qosMiddleLow"));
	    		 $("#QOS_High").append(getTagTextFromXmlDoc("qosLow"));
	    		 $("#QOS_Middle").append(getTagTextFromXmlDoc("qosLower"));
	    		 $("#QOS_Low").append(getTagTextFromXmlDoc("qosLowest"));
			 
			 $("#QOS_PQq5Pri").append(getTagTextFromXmlDoc("qosMiddleHigh"));
			 $("#QOS_PQq6Pri").append(getTagTextFromXmlDoc("qosHigh"));
			 $("#QOS_PQq7Pri").append(getTagTextFromXmlDoc("qosHigher"));
			 $("#QOS_PQq8Pri").append(getTagTextFromXmlDoc("qosHighest"));
						
			
			this.eightQunueModifyFlag = true;
		}
	}

}

this.qosIpverChange= function(elm)
{
	if (elm.value == '6')
	{
		$("#QOS_CarSrcSubMask").hide();
		$("#QOS_CarDestSubMask").hide();
		$("#QOS_TEXT_CarSrcNetmast").hide();
		$("#QOS_TEXT_CarDstNetmast").hide();
	}
	else
	{
		$("#QOS_CarSrcSubMask").show();
		$("#QOS_CarDestSubMask").show();
		$("#QOS_TEXT_CarSrcNetmast").show();
		$("#QOS_TEXT_CarDstNetmast").show();
	}
	this.updateCarProtOpt();
}

this.updateCarIpModeTr= function()
{
    var htmlStr = "";
    if (this.buildIPv6=="1")
    { 
        htmlStr += "<td>IP Mode</td>";
        htmlStr += "<td><select id='QOS_SEL_CarIpVer' >";
        htmlStr += "<option value='4'>IPV4</option>";
        htmlStr += "<option value='6'>IPV6</option>";
        htmlStr += "</select></td>";
    }
    
    $("#QOS_CarIpModeTr").empty();
    $("#QOS_CarIpModeTr").append(htmlStr);
	
    $("#QOS_SEL_CarIpVer").change(function(){currentPageInst.qosIpverChange(this)});
    $("#QOS_SEL_CarIpVer").change();
}

this.updateCarProtOpt= function()
{
    if(($("#QOS_SEL_CarIpVer").val() == "6")&&(this.buildIPv6=="1"))
    {
    	var optStr = "<option value='TCP'>TCP</option><option value='UDP'>UDP</option><option value='ICMPV6'>ICMPV6</option>";
    }
    else
    {
    	var optStr = "<option value='TCP'>TCP</option><option value='UDP'>UDP</option><option value='ICMP'>ICMP</option>";
    }

    optStr += "<option value='NONE'>NONE</option>";

    $("#QOS_SEL_CarProto").empty();
    $("#QOS_SEL_CarProto").append(optStr);

}

this.updateCarLanIntf= function()
{
    var lanIntfOptStr = "";
    if(this.LanList!=null)
    {
        $.each(this.LanList, function(idx, lanIntf){
			lanIntfOptStr +=  '<option value="'+lanIntf.lanIfName+'">'+ getLanName(lanIntf.lanPanelIfName) +'</option>';
        });
    }

    $("#QOS_SEL_CarLanIntf").empty();           
    $("#QOS_SEL_CarLanIntf").append(lanIntfOptStr);  

}

this.QosShowInit= function()
{
    if(this.CurQoS == null)
    {
        alert("Get Data Error!");
        return;
    }

    this.CurQoSShow();
    //LoadFrame();
}

this.updateQosElm= function(jsonObj)
{

    this.initGlbVar(jsonObj);
    
    this.updateQosRuleTemplate();

    $("#QOS_CHX_Enable").attr("checked", (this.CurQoS.Mode.enable == "1") ? "checked" : false);
    
    $("#QOS_RateUnit").empty();
    $("#QOS_RateUnit").append((this.wanmode == 1 /* ADSL */) ? "(0-1024)kbps" : "kbps");
    
    if (this.buildIPv6)
    {
        $("#QOS_LB_TcMark").empty();
        $("#QOS_LB_TcMark").append(getTagTextFromXmlDoc("qosTcMarkEn")+":");
        
        $("#QOS_CHX_TcMark").click(function(){currentPageInst.qosEnableTcMark(this)});
    }
    
    this.QosShowInit();
    
    var htmlStr = "";
    htmlStr +=  "<option value='TR069'>TR069</option>";
    if (this.voipSupport == "1")
   {   
        htmlStr +=  "<option value='VOIP'>VOIP</option>";
    }
    //add here for more option 
    //htmlStr += "<option value=null selected='select'>&nbsp;</option>";
        
    $("#QOS_SEL_AppName").empty();
    $("#QOS_SEL_AppName").append(htmlStr);
    
    this.updateClassificationIdOpt();
    this.updateClsIpVer();
    this.updateTcMark();
    
    if (this.CurQoS.Mode.qosPlan == "car")
    {
        this.updateCarIpModeTr();
        this.updateCarProtOpt();
        this.updateCarLanIntf();

    }
}


this.qosEnableTcMark= function(tcElm)
{
    if (tcElm.checked)
    {
        $("#QOS_TcMarkTbody").show();
    }
    else
    {
        $("#QOS_TcMarkTbody").hide();
    }
}

this.changeQosRuleTemplate= function(elmVal)
{
    var postData; 
    jsonObjInit();
    
    var qosEnable = ($("#QOS_CHX_Enable").attr("checked") == "checked") ? "1" : "0";
    var qosRuleMode = elmVal;
    var qosBindWidth = $("#QOS_TEXT_UsBandwidth").val();
    
    jsonObjPush("Enable", qosEnable);
    jsonObjPush("Mode", qosRuleMode);
    jsonObjPush("Bandwidth", qosBindWidth);
    
    if ($("input[name='QOS_RADIO_Policy'][value='car']").attr("checked") == "checked")
    {
        jsonObjPush("Plan", "car");
    }
    else
    {
        if ($("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked") == "checked")
        {
            jsonObjPush("Plan", "weight");
        }
        else
        {
            jsonObjPush("Plan", "priority");
        }
        
        if ($("#QOS_CHX_ForcedBw").attr("checked") == "checked")
        {
            jsonObjPush("EnableForceWeight", "1");
        }
        else
        {
            jsonObjPush("EnableForceWeight", "0");
        }
        
        if ($("#QOS_CHX_DSCPMark").attr("checked") == "checked")
        {
            jsonObjPush("EnableDSCPMark", "1");
        }
        else
        {
            jsonObjPush("EnableDSCPMark", "0");
        }
        
        jsonObjPush("Enable802-1_P", $("#QOS_SEL_8021PMark").val());
    }
    
    postData = jsonObjEnd();
    
    setCfg("qosSetCfg.cmd", postData, updatQosCfg);
}

this.qosEnable= function(enableElm)
{
    if(enableElm.checked)
    {
        if (!confirm(getTagTextFromXmlDoc("qosConfirmEnable"))) //是否启用QOS
        { 
            enableElm.checked = false;
            return;
        }
        this.CurQoSShow();
        
    }
    else
    {

        if (!confirm(getTagTextFromXmlDoc("qosConfirmDisable"))) //是否禁用sQOS
        {
            enableElm.checked = true;
            return;
        }
        this.CurQoSShow();
    }
        
    this.QosSubmit();
}


this.initCarTable= function()
{
    $("#QOS_TEXT_CarPortStart").val("");
    $("#QOS_TEXT_CarPortEnd").val("");
    $("#QOS_TEXT_CarSrcIp").val("");
    $("#QOS_TEXT_CarDstIp").val("");
    $("#QOS_TEXT_CarSrcNetmast").val("");
    $("#QOS_TEXT_CarDstNetmast").val("");
    $("#QOS_TEXT_CarUsRate").val("");  
}

this.addCarClick= function() 
{
    $(".mainBody>div>form").css("width","618px");
    $("#QOS_DIV_CARAdd").show();
    this.initCarTable();
}

this.backCarClick= function() {
    $("#QOS_DIV_CARAdd").hide();
    $(".mainBody>div>form").css("width","638px");
}

this.applyCarClick= function(){
    this.applyCarClickSubmit();
}

this.removeCarClick= function() {
    var postData; 
    var lst = '';
    
    rmlCarObj = $("input[name='rmlcar']");
    //if (rmlCarObj.length > 0)
    {
        for (var i=0; i < rmlCarObj.length; i++)
        {
            if (rmlCarObj[i].checked)
            {
                lst = i;
                jsonObjInit();
                jsonObjPush("action", "remove");
                
                if (this.CurQoS.Car[lst].protocol != '')
                    jsonObjPush("protocol", this.CurQoS.Car[i].protocol);
                if ((this.CurQoS.Car[lst].srcPort != '') && (this.CurQoS.Car[lst].srcPort != '0'))
                    jsonObjPush("portstart", this.CurQoS.Car[lst].srcPort);
                if ((this.CurQoS.Car[lst].destPort != '') && (this.CurQoS.Car[lst].destPort != '0'))
                    jsonObjPush("portend", this.CurQoS.Car[lst].destPort);
                if (this.CurQoS.Car[lst].srcIp != '')
                    jsonObjPush("srcIp", this.CurQoS.Car[lst].srcIp);
                if (this.CurQoS.Car[lst].srcNetmask != '')
                    jsonObjPush("srcNetmask", this.CurQoS.Car[lst].srcNetmask);
                if (this.CurQoS.Car[lst].destIp != '')
                    jsonObjPush("destIp", this.CurQoS.Car[lst].destIp);
                if (this.CurQoS.Car[lst].destNetmask != '')
                    jsonObjPush("destNetmask", this.CurQoS.Car[lst].destNetmask);
                if (this.CurQoS.Car[lst].upRate != '')
                    jsonObjPush("uprate", this.CurQoS.Car[lst].upRate);
                if (this.CurQoS.Car[lst].interface != '')
                    jsonObjPush("InterfaceName", this.CurQoS.Car[lst].interface);
                    
                if (this.buildIPv6=="1")
                {
                    if (this.CurQoS.Car[lst].interface != '')
                        jsonObjPush("InterfaceName", this.CurQoS.Car[lst].interface);
                    if (this.CurQoS.Car[lst].IPVersion != '')
                        jsonObjPush("ipver", this.CurQoS.Car[lst].IPVersion+"|");
                }
                else
                {
                    if (this.CurQoS.Car[lst].interface != '')
                        jsonObjPush("InterfaceName", this.CurQoS.Car[lst].interface+ "|");
                }
                
                postData = jsonObjEnd();
                setCfg("qosSetTraffictl.cmd", postData, updatQosCfg);
            }
        }
    }
}


this.qosScheduleChange= function()
{
    if(!confirm(getTagTextFromXmlDoc("qosconfirmSchedule"))) //是否使用该策略
    {
        if(this.CurQoS.Mode.qosPlan == "priority")
        {
            $("input[name='QOS_RADIO_Policy'][value='priority']").attr("checked", "checked");
        }
        else if(this.CurQoS.Mode.qosPlan == "SP")
        {
            $("input[name='QOS_RADIO_Policy'][value='priority']").attr("checked", "checked");
        }
        else if(this.CurQoS.Mode.qosPlan == "weight")
        {
            $("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked", "checked");
        }
        else
        {
            $("input[name='QOS_RADIO_Policy'][value='car']").attr("checked", "checked")
        }
        return;
    }
    else
    {
        var postData; 
        jsonObjInit();

        if ($("#QOS_CHX_Enable").attr("checked") == "checked")
        {
            jsonObjPush("Enable", "1");
        }
        
        jsonObjPush("Mode", $("#QOS_SEL_RuleTemplate").val());
        jsonObjPush("Bandwidth", $("#QOS_TEXT_UsBandwidth").val());
            
        if ($("input[name='QOS_RADIO_Policy'][value='car']").attr("checked") == "checked")
        {
            jsonObjPush("Plan", "car");
        }
        else
        {
            if ($("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked") == "checked")
            {
                jsonObjPush("Plan", "weight");
            }
            else
            {
                jsonObjPush("Plan", "priority");
            }
        
            if ($("#QOS_CHX_ForcedBw").attr("checked") == "checked")
            {
                jsonObjPush("EnableForceWeight", "1");
            }
            else
            {
                jsonObjPush("EnableForceWeight", "0");
            }
        
            if ($("#QOS_CHX_DSCPMark").attr("checked") == "checked")
            {
                jsonObjPush("EnableDSCPMark", "1");
            }
            else
            {
                jsonObjPush("EnableDSCPMark", "0");
            }
        
            jsonObjPush("Enable802-1_P", $("#QOS_SEL_8021PMark").val());
        }
        
        postData = jsonObjEnd();
        setCfg("qosSetCfg.cmd", postData, updatQosCfg);
    }
}

this.qosEnableDscpMark= function(dscpMarkElm)
{
    if(dscpMarkElm.checked)
    {
        $("#QOS_TB_DSCPMark").show();
    }
    else
    {
        $("#QOS_TB_DSCPMark").hide()
    }
}

this.qos8021pChange= function(qos8021pElm)
{
    if(qos8021pElm.selectedIndex == 2 )
    {
        //setDisplay('8021pmark',1);//secStaticItems.style.display = "none";
        $("#QOS_TB_8021PMark").show();
    }
    else
    {
        //setDisplay('8021pmark',0);//secStaticItems.style.display = "none";
        $("#QOS_TB_8021PMark").hide()
    }
}

this.ClsTypeChange= function()
{   
    $(".QOS_Kind_Set").show();
    $("#QOS_DIV_Cls").show();
    if (this.ClsAddFlag)
    {
        $("#QOS_TEXT_TypeCommonMin").val(0);
        $("#QOS_TEXT_TypeCommonMax").val(0);
        $("#QOS_TB_ClsSel").show();
        
        $("#QOS_TR_ClsId").hide();
        $("#QOS_TR_ClsIpVer").show();
    }
    else
    {
        $("#QOS_TB_ClsSel").hide();
        
        $("#QOS_TR_ClsId").show();
        $("#QOS_TR_ClsIpVer").show();
    }

    if ($("input[name='Qos_RADIO_ProfessionEdit']:eq(0)").attr("checked") == "checked")
    {
        $("#QOS_DIV_ClsEdit").hide();
        $("#QOS_DIV_AppEdit").show();
    }
    
    if ($("input[name='Qos_RADIO_ProfessionEdit']:eq(1)").attr("checked") == "checked")
    {
        $("#QOS_DIV_ClsEdit").show();
        $("#QOS_DIV_AppEdit").hide();
        
        if ($("#QOS_CHX_DSCPMark").attr("checked") == "checked")
        {
            $("#QOS_TB_DSCPMark").show();
        }
        else
        {
            $("#QOS_TB_DSCPMark").hide();
        }
        
        if (this.buildIPv6=="1")
        {
            if ($("#QOS_CHX_TcMark").attr("checked") == "checked")
            {
                $("#QOS_TcMarkTbody").show();
            }
            else
            {
                $("#QOS_TcMarkTbody").hide();
            }
        }
        
        if ($("#QOS_SEL_8021PMark").get(0).selectedIndex == 2)
        {
            $("#QOS_TB_8021PMark").show();
        }
        else
        {
            $("#QOS_TB_8021PMark").hide();
        }
    }
    
    /* IP version cannot be changed while editing Cls items,it's unnecessary to do qosClsIpVerChange */
    if (!this.ClsEditFlag)
    {
        this.qosClsIpVerChange(true);
    }
}

this.btnEditCls= function(index)
{
    $(".QOS_Kind_Set").show();
    CurEditClsIndex = index.substr(index.indexOf('_') + 1);//get the rowIndex hohoho

    this.ClsAddFlag  = false;
    this.ClsEditFlag  = true;

    $("input[name='Qos_RADIO_ProfessionEdit']:eq(1)").attr("checked", "checked");
    $("#QOS_SEL_ClassQuenue").val(this.CurQoS.Class[CurEditClsIndex].queue);
    
    var typeName = this.CurQoS.Class[CurEditClsIndex].classifyType;
    if (this.CurQoS.Class[CurEditClsIndex].ipVer == 4)
    {
        $("#QOS_SEL_IPv4Type").val(this.CurQoS.Class[CurEditClsIndex].classifyType);
        $("#QOS_TB_ClsIPv4").show();
        $("#QOS_TB_ClsIPv6").hide();
        $("#ProtocolListICMP").show();
        $("#ProtocolListICMPV6").hide();
    }
    else
    {
        $("#QOS_SEL_IPv6Type").val(this.CurQoS.Class[CurEditClsIndex].classifyType);
        $("#QOS_TB_ClsIPv4").hide();
        $("#QOS_TB_ClsIPv6").show();
        $("#ProtocolListICMP").hide();
        $("#ProtocolListICMPV6").show();
		
    }
    
    $("#QOS_SEL_ClassificationID").attr("disabled", true);
    setSelectVal($("#QOS_SEL_ClassificationID"), this.CurQoS.Class[CurEditClsIndex].classId);
    
    if(typeName=="WANInterface")
    {
        $("#QOS_TB_TypeCommon").hide();
        $("#QOS_TB_CLassLan").hide();
        $("#QOS_TB_CLassWan").show();
        this.WriteWanInterFace();
        setSelectVal($("#QOS_SEL_WanIntfMax"), this.CurQoS.Class[CurEditClsIndex].maxValue);
        setSelectVal($("#QOS_SEL_WanIntfMin"), this.CurQoS.Class[CurEditClsIndex].minValue);
    }
    else if(typeName=="LANInterface")
    {
        $("#QOS_TB_TypeCommon").hide();
        $("#QOS_TB_CLassLan").show();
        $("#QOS_TB_CLassWan").hide();
        this.WriteLanInterFace();
        setSelectVal($("#QOS_SEL_LanIntfMax"), this.CurQoS.Class[CurEditClsIndex].maxValue);
        setSelectVal($("#QOS_SEL_LanIntfMin"), this.CurQoS.Class[CurEditClsIndex].minValue);
    }
    else
    {
        $("#QOS_TB_TypeCommon").show();
        $("#QOS_TB_CLassLan").hide();
        $("#QOS_TB_CLassWan").hide();
        
        $("#QOS_TEXT_TypeCommonMax").val(this.CurQoS.Class[CurEditClsIndex].maxValue);
        $("#QOS_TEXT_TypeCommonMin").val(this.CurQoS.Class[CurEditClsIndex].minValue); 
        
    }
    
    $("#QOS_SET_ProtoType").val(this.CurQoS.Class[CurEditClsIndex].protocol);
    $("#QOS_TEXT_DSCPMarkValue").val(this.CurQoS.Class[CurEditClsIndex].dscpMarkValue);

    $("#QOS_TEXT_8021PValue").val(this.CurQoS.Class[CurEditClsIndex].qos802_1_P_Value); 
    if (this.buildIPv6=="1")
    {
        $("#QOS_TEXT_TCMarkValue").val(this.CurQoS.Class[CurEditClsIndex].tcMarkValue);  
    }
    
    this.ClsTypeChange();

    if(this.CurQoS.Class[CurEditClsIndex].Type == "8021P")
    {
        $("#QOS_SET_ProtoType").attr("disabled", true);
    }
    else
    {
        $("#QOS_SET_ProtoType").attr("disabled", false);
    }

    /* Edit CLs rule finished,reset global var */
    if (this.ClsEditFlag == true)
    {
        this.ClsEditFlag = false;
    }                       
} 

this.qosAddCls= function()
{
    this.ClsAddFlag = true;
    
    $("input[name='Qos_RADIO_ProfessionEdit'][value='0']").attr("checked", "checked");
    $("#QOS_SEL_IPv4Type").get(0).selectedIndex = 0;
    $("#QOS_SEL_IPv6Type").get(0).selectedIndex = 0;
    $("#QOS_SEL_ClassificationID").get(0).selectedIndex = 0;
    $("#QOS_SEL_ClassificationID").attr("disabled", false);
    
    $("#QOS_TEXT_TypeCommonMin").val(0);
    $("#QOS_TEXT_TypeCommonMax").val(0);
    
    $("#QOS_TB_TypeCommon").show();
    $("#QOS_TB_CLassLan").hide();
    $("#QOS_TB_CLassWan").hide();
    $("#DSCPMarkValue").val(0);
    
    if (this.buildIPv6=="1")
    {
        $("#QOS_TEXT_TCMarkValue").val(0);
    }
    $("#QOS_TEXT_8021PValue").val(0);

    this.ClsTypeChange();
}

this.qosDelCls= function()
{
     var delStr = "";   
    var Rmapp ;
    var Rmcls ;
    var k = 0;
    var DelClsCount = 0;
    var Domainstr ;
    var indexstr;
    
    if(!this.TemplateCheck())
    {
        return;
    }
    
    var postData; 
    jsonObjInit();
    
    var rmAppObj = $("input[name='rmapp']");
    if (rmAppObj)
    {
        for (var k = 0; k < rmAppObj.length; k++)
        {
            if (rmAppObj[k].checked)
            {
                delStr += this.CurQoS.App[k].domain + ";" +  this.CurQoS.App[k].appName + ";" + this.CurQoS.App[k].appQueue + "|";
                DelClsCount++;
            }
        }
    }
    //url = 'qoscfg.cmd?del=';
    var rmClsObj = $("input[name='rmcls']");
    if (rmClsObj)
    {
        for (var k = 0; k < rmClsObj.length; k++)
        {
            if (rmClsObj[k].checked)
            {
                delStr += this.CurQoS.Class[k].classDomain + ';' + this.CurQoS.Class[k].queue + ';' + this.CurQoS.Class[k].dscpMarkValue + ';' + this.CurQoS.Class[k].qos802_1_P_Value + ';' + this.CurQoS.Class[k].classifyType + ';' + this.CurQoS.Class[k].maxValue + ';' + this.CurQoS.Class[k].minValue + ';' + this.CurQoS.Class[k].protocol + '|';
                DelClsCount++;
            }
        }
    }

    jsonObjPush("del", delStr);

    if(DelClsCount==0)
    {
        alert(getTagTextFromXmlDoc("qosDelClassWarn")); //没有选中任何分类
        return;
    }

    if(!confirm(getTagTextFromXmlDoc("qosDelClassConfirm")+"?")) //您确认要删除所选中的分类条件吗
    {
        return;
    }
        
    postData = jsonObjEnd();
    setCfg("qosSetClsCfg.cmd", postData, updatQosCfg);
}

this.qosAppNameChange= function()
{
    
}

this.qosClassQueueChange= function()
{
}

this.WriteWanInterFace= function()
{
    var wanIntfOptStr = "";
    if(this.WanList!=null)
    {
        $.each(this.WanList, function(idx, wanIntf){
            //wanIntfOptStr +=  '<option value="'+wanIntf.wanIntf+'">'+ wanIntf.wanIntfName +'</option>';
            wanIntfOptStr +=  '<option value="'+wanIntf.wanIntfName+'">'+ wanIntf.wanIntfName +'</option>';
        });
    }
    if (wanIntfOptStr == "")
    {
        wanIntfOptStr +='<option value="0" selected>&nbsp;</option>';
    }

    $("#QOS_SEL_WanIntfMin").empty();             
    $("#QOS_SEL_WanIntfMin").append(wanIntfOptStr);
    
    $("#QOS_SEL_WanIntfMax").empty();             
    $("#QOS_SEL_WanIntfMax").append(wanIntfOptStr);
}

this.WriteLanInterFace= function()
{
    var lanIntfOptStr = "";
    if(this.LanList!=null)
    {
        $.each(this.LanList, function(idx, lanIntf){
			lanIntfOptStr +=  '<option value="'+lanIntf.lanIfName+'">'+ getLanName(lanIntf.lanPanelIfName) +'</option>';
        });
    }

    $("#QOS_SEL_LanIntfMin").empty();             
    $("#QOS_SEL_LanIntfMin").append(lanIntfOptStr);
    
    $("#QOS_SEL_LanIntfMax").empty();             
    $("#QOS_SEL_LanIntfMax").append(lanIntfOptStr);       
}

this.qosClassTypeChange= function(classTypeElm)
{
    //if ($("QOS_SEL_ClassificationID").val() != 0 &&  $("select[name='s_ClassificationID']").val() != -1)
    {
        for(i=0;i<this.CurQoS.Class.length;i++)
        {
            if ($("#QOS_SEL_ClassificationID").val() == this.CurQoS.Class[i].ClassificationId)
            {
                if(classTypeElm.value == this.CurQoS.Class[i].Type && this.ClsAddFlag)
                {
                    alert("同一个组不能选相同的Type");
                    if(classTypeElm.selectedIndex!=0)
                    {
                        classTypeElm.selectedIndex=0;
                    }
                    else
                    {
                        classTypeElm.selectedIndex=1;
                    }
                    break;
                }
                if(((classTypeElm.value == "TOS") && (this.CurQoS.Class[i].Type=="DSCP")) || 
                    ((classTypeElm.value=="DSCP") && (this.CurQoS.Class[i].Type=="TOS")))
                {
                    alert("同一个组不能同时选择TOS和DSCP");
                    classTypeElm.selectedIndex=0;
                    break;
                }
                
            }
        }
    }
    
    if ($("#QOS_SEL_ClsIpVer").val() == 0)
    {
        $("#QOS_TEXT_DSCPMarkValue").attr("disabled", false);
    }
    else
    {
        $("#QOS_TEXT_DSCPMarkValue").attr("disabled", true);
    }
    
    if (this.buildIPv6=="1")
    {
        if ($("#QOS_SEL_ClsIpVer").val() == 0)
        {
            $("#QOS_TEXT_TCMarkValue").attr("disabled", true);
        }
        else
        {
            $("#QOS_TEXT_TCMarkValue").attr("disabled", false);
        }
    }
    
    var protocolVal = $("#QOS_SET_ProtoType").val();
    if ((protocolVal == "RTP") && classTypeElm.value != "DIP")
    {
        alert(getTagTextFromXmlDoc("qosClsRtpWarn2"));//RTP只支持目的IP方式
        classTypeElm.value="DIP";
    }
    
    if ((protocolVal=="ICMP" || protocolVal == "NONE" ) && (protocolVal=="SPORT" || protocolVal=="DPORT"))
    {
        alert(getValue('ProtocolList')+"不支持"+Type.value+"方式");
        classTypeElm.value="SMAC";
    }
    if(classTypeElm.value=="8021P")
    {
         $("#QOS_SET_ProtoType").attr("disabled", true);
    }
    else
    {
        $("#QOS_SET_ProtoType").attr("disabled", false);
    }
    
    $("#QOS_TEXT_TypeCommonMin").val(0);
    $("#QOS_TEXT_TypeCommonMax").val(0);
    $("#QOS_TEXT_TypeCommonMin").change();
    $("#QOS_TEXT_TypeCommonMax").change();
    
    if(classTypeElm.value=="WANInterface")
    {
        $("#QOS_TB_TypeCommon").hide();
        $("#QOS_TB_CLassLan").hide();
        this.WriteWanInterFace();
        $("#QOS_TB_CLassWan").show();

    }
    else if(classTypeElm.value=="LANInterface")
    {
        $("#QOS_TB_TypeCommon").hide();
        $("#QOS_TB_CLassWan").hide();
        this.WriteLanInterFace();
        $("#QOS_TB_CLassLan").show();
    }
    else
    {
        $("#QOS_TB_TypeCommon").show();
        $("#QOS_TB_CLassWan").hide();
        $("#QOS_TB_CLassLan").hide();
    }
    
}

this.qosProtocolTypeChange= function(protocolElm)
{
    var item="";
    var ClassificationId=$("#QOS_SEL_ClassificationID").val();
    var ipVer=$("#QOS_SEL_ClsIpVer").val();
    
    if (ipVer==0)
    {
        item="IPv4Type";
    }
    else if (this.buildIPv6 == "1" && ipVer == 1)
    {
        item = "IPv6Type";
    }
    else
    {
        return false;
    }

    if(ClassificationId!=0 ||ClassificationId!=-1)
    {
        for(i=0;i<this.CurQoS.Class.length;i++)
        {
            if(ClassificationId==this.CurQoS.Class[i].ClassificationId)
            {
                if(CurEditClsIndex!=i && protocolElm.value != this.CurQoS.Class[i].ProtocolList)
                {
                    alert(getTagTextFromXmlDoc("qosClsWarn1"));//同一个组的协议应该相同
                    $("#QOS_SET_ProtoType").val(this.CurQoS.Class[i].protocol);
                    return false;
                }
                if (this.ClsAddFlag == true)
                {
                    if (this.CurQoS.Class[i].IPVersion==4)
                        item="IPv4Type";
                    else
                        item = "IPv6Type";
                }
                else if (this.ClsAddFlag == false)
                {
                    if (this.CurQoS.Class[CurEditClsIndex].IPVersion==4)
                        var item="IPv4Type";
                    if (this.buildIPv6 == "1" && this.CurQoS.Class[CurEditClsIndex].IPVersion==6)
                        var item="IPv6Type";
                }
                
            }
        }
    }
    //else //need ??
    {
        var RTPEntry=1;
        if(protocolElm.value == "RTP")
        {
            for(i=0;i<this.CurQoS.Class.length; i++)
            {
                if('RTP'==this.CurQoS.Class[i].protocol)
                {
                    RTPEntry++;
                }
            }
            
            if(RTPEntry == 11)
            {
                alert(getTagTextFromXmlDoc("qosClsRtpWarn1"));//RTP的组不能超过10条qosClsRtpWarn1
                if(!this.ClsAddFlag)
                {
                    $("#QOS_SET_ProtoType").val(this.CurQoS.Class[CurEditClsIndex].protocol);
                }
                else
                {
                    $("#QOS_SET_ProtoType").val("TCP");
                }
                return false;
            }
        }
    }
   /* 
    if(protocolElm.value == "RTP")
    {
        //if(getValue(item)!="DIP") //ipv4 ipv6
        if ($("select[name='"+item+"']").val() != "DIP")
        {
            alert(getTagTextFromXmlDoc("qosClsRtpWarn2"));//RTP只支持目的IP方式
            $("#QOS_SET_ProtoType").val("TCP");
            return false;
        }
    }
    */
    if ((protocolElm.value=="ICMP" ||protocolElm.value=="ICMPV6" || protocolElm.value=="NONE" ) && ($("select[name='"+item+"']").val()=="SPORT" || $("select[name='"+item+"']").val().value=="DPORT" )) 
    {
        alert(protocolElm.value+getTagTextFromXmlDoc("qosUnsuportWarn")+$("select[name='"+item+"']").val());    
        protocolElm.value = 'TCP'
        return false;
    }
}

this.CARChangeProtocol= function(protocolElm)
{
    if(protocolElm.value=="ICMP" || (this.buildIPv6=="1" && protocolElm.value=="ICMPV6"))
    {
        $("#QOS_TEXT_CarPortStart").attr("disabled", true);
        $("#QOS_TEXT_CarPortEnd").attr("disabled", true);
    }
    else
    {
        $("#QOS_TEXT_CarPortStart").attr("disabled", false);
        $("#QOS_TEXT_CarPortEnd").attr("disabled", false);
    }
}

this.btnEditApp= function(index)
{
    CurEditAppIndex = index.substr(index.indexOf('_') + 1);//get the rowIndex hohoho

    this.ClsAddFlag  = false;
    $("input[name='Qos_RADIO_ProfessionEdit']:eq(0)").attr("checked", "checked");
    setSelectVal($("#QOS_SEL_AppName"), this.CurQoS.App[CurEditAppIndex].appName);
    $("#QOS_SEL_AppQueue").val(this.CurQoS.App[CurEditAppIndex].appQueue);
    this.ClsTypeChange();
}

this.btnClsConfirm= function()
{
    this.QoSClsSubmit();
}



this.TemplateCheck= function()
{
    var checkObjArray = new Array();
    checkObjArray.push($("#QOS_TEXT_UsBandwidth"));
    
    if ($("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked") == "checked")
    {
        $.each($(".OQS_CLS_Weight"), function(idx, weight){
            checkObjArray.push($(weight));
        });
    }
    
    return checkValid(getTagTextFromXmlDoc("qosSubmitWarn")+"!", checkObjArray);
}


this.ClsCheck= function()
{
    var returnFlag;
    if ($("input[name='Qos_RADIO_ProfessionEdit'][value='0']").attr("checked") == "checked")
    {
        if (this.ClsAddFlag)
        {
            var selAppName = $("#QOS_SEL_AppName").val();
            $.each(this.CurQoS.App, function(idx, app){
                if (selAppName == app.appName)
                {
                    alert(getTagTextFromXmlDoc("qosAppNameExistWarn")); //该APP已经存在
                    returnFlag = true;
                    return;
                }
                
            });
            
        }
        else //edit
        {
            $.each(this.CurQoS.App, function(idx, app){
                if (CurEditAppIndex != idx)
                {
                    if ($("#QOS_SEL_AppName").val() == app.appName)
                    { 
                        alert(getTagTextFromXmlDoc("qosAppConflictWarn")); //App分类存在冲突
                        returnFlag = true;
                        return;
                    }
                }
                else if ($("#QOS_SEL_AppQueue").val() == app.appQueue)
                {
                    alert(getTagTextFromXmlDoc("qosAppNoChangeWarn")); //没有任何修改
                    returnFlag = true;
                    return;
                }
            });
        }
        if (returnFlag)
        {
            return false;
        }
    }
    else //流分类
    {
        //如果未输入参数提示错误信息
        var checkObjArray = new Array();
        if ($("#QOS_SEL_ClsIpVer").val() == "0") //ipv4
        {
            if (($("#QOS_SEL_IPv4Type").val() != "WANInterface") 
             && ($("#QOS_SEL_IPv4Type").val() != "LANInterface"))
            {
                checkObjArray.push($("#QOS_TEXT_TypeCommonMin"));
                checkObjArray.push($("#QOS_TEXT_TypeCommonMax"));
            }
        }
        else //ipv6
        {
            if (($("#QOS_SEL_IPv6Type").val() != "WANInterface") 
             && ($("#QOS_SEL_IPv6Type").val() != "LANInterface"))
            {
                checkObjArray.push($("#QOS_TEXT_TypeCommonMin"));
                checkObjArray.push($("#QOS_TEXT_TypeCommonMax"));
            }
        }
        
        checkObjArray.push($("#QOS_TEXT_DSCPMarkValue"));
        checkObjArray.push($("#QOS_TEXT_TCMarkValue"));
        checkObjArray.push($("#QOS_TEXT_8021PValue"));
        return checkValid(getTagTextFromXmlDoc("qosSubmitWarn")+"!", checkObjArray);
    }
    
    return true;
}

this.QoSClsSubmit= function()
{
    if(!this.TemplateCheck())
    {
        return;
    }
    
    if(!this.ClsCheck())
    {
        return;
    }
    
    if(this.CurQoS.Mode.enableDscp != $("#QOS_CHX_DSCPMark")[0].checked)
    {
        alert(getTagTextFromXmlDoc("qosSaveDscpWarn")) //必须先保存启用DSCP 标志信息，然后再添加分类
        return;
    }

    if(this.CurQoS.Mode.enable802_1_P != $("#QOS_SEL_8021PMark").get(0).selectedIndex)
    {
        alert(getTagTextFromXmlDoc("qosSave8021pWarn")); //必须先保存更改的802.1P 标志信息，然后再添加分类
        return;
    }
    /*if (this.buildIPv6=="1")
    {
        if(this.CurQoS.Mode.enableTc != $("#QOS_CHX_TcMark")[0].checked)
        {
            alert(getTagTextFromXmlDoc("qosSaveTcWarn")); //必须先保存启用TC 标志信息，然后再添加分类
            return;
        }
    }*/
    
    var postData; 
    jsonObjInit();
    
    if(this.ClsAddFlag)
    {

        //url = 'qoscfg.cmd?add=';
        if ($("input[name='Qos_RADIO_ProfessionEdit']:eq(0)").attr("checked") == "checked")
        {
            jsonObjPush("add", "App");
        }
        else
        {
            jsonObjPush("add", "Classification");
        }
    }
    else
    {

        //url = 'qoscfg.cmd?edit=';
        var editStr = "";
        if ($("input[name='Qos_RADIO_ProfessionEdit']:eq(0)").attr("checked") == "checked")
        {
            editStr += this.CurQoS.App[CurEditAppIndex].domain + ";" + this.CurQoS.App[CurEditAppIndex].appName + ";" + this.CurQoS.App[CurEditAppIndex].appQueue ;
        }
        else
        {
            if (this.buildIPv6=="1")
                editStr += this.CurQoS.Class[CurEditClsIndex].classDomain + ';' + this.CurQoS.Class[CurEditClsIndex].queue + ';' + this.CurQoS.Class[CurEditClsIndex].dscpMarkValue + ';' + this.CurQoS.Class[CurEditClsIndex].tcMarkValue + ';' + this.CurQoS.Class[CurEditClsIndex].qos802_1_P_Value + ';' + this.CurQoS.Class[CurEditClsIndex].classifyType + ';' + this.CurQoS.Class[CurEditClsIndex].maxValue + ';' + this.CurQoS.Class[CurEditClsIndex].minValue + ';' + this.CurQoS.Class[CurEditClsIndex].protocol ;
            else 
                editStr += this.CurQoS.Class[CurEditClsIndex].classDomain + ';' + this.CurQoS.Class[CurEditClsIndex].queue + ';' + this.CurQoS.Class[CurEditClsIndex].dscpMarkValue + ';' + this.CurQoS.Class[CurEditClsIndex].qos802_1_P_Value + ';' + this.CurQoS.Class[CurEditClsIndex].classifyType + ';' + this.CurQoS.Class[CurEditClsIndex].maxValue + ';' + this.CurQoS.Class[CurEditClsIndex].minValue + ';' + this.CurQoS.Class[CurEditClsIndex].protocol ;

        }
        
        jsonObjPush("edit", editStr);
    }

    if ($("input[name='Qos_RADIO_ProfessionEdit']:eq(0)").attr("checked") == "checked")
    {
        jsonObjPush("AppName", $("#QOS_SEL_AppName").val());
        jsonObjPush("ClassQueue", $("#QOS_SEL_AppQueue").val());
    }
    else
    {
        jsonObjPush("ClassQueue", $("#QOS_SEL_ClassQuenue").val());
        
        
        if (this.ClsAddFlag)
        {
            if($("#QOS_SEL_ClsIpVer").val() == 0)
            {
                jsonObjPush("Classification", "0");
            }
            else
            {
                jsonObjPush("Classification", "-1");
            }
        }
        else
        {
            jsonObjPush("Classification", $("#QOS_SEL_ClassificationID").val()); //edit
        }
        
        var type = $("#QOS_SEL_IPv4Type").val();
        
        if($("#QOS_SEL_ClsIpVer").val() == 1)
        {
            type = $("#QOS_SEL_IPv6Type").val();
        }
        else if(this.ClsAddFlag == false && this.CurQoS.Class[CurEditClsIndex].ipVer == 6)
        {
            type = $("#QOS_SEL_IPv6Type").val();
        }
        jsonObjPush("Type", type);
            
        if(type=="WANInterface")
        {
            jsonObjPush("Max", $("#QOS_SEL_WanIntfMax").val());
            jsonObjPush("Min", $("#QOS_SEL_WanIntfMin").val());
        }
        else if(type=="LANInterface")
        {
            jsonObjPush("Max", $("#QOS_SEL_LanIntfMax").val());
            jsonObjPush("Min", $("#QOS_SEL_LanIntfMin").val());
        }
        else
        {
            jsonObjPush("Max", $("#QOS_TEXT_TypeCommonMax").val());
            jsonObjPush("Min", $("#QOS_TEXT_TypeCommonMin").val());
        }
        
        jsonObjPush("ProtocolList", $("#QOS_SET_ProtoType").val());

        if ($("#QOS_CHX_DSCPMark").attr("checked") == "checked")
        {
            jsonObjPush("DSCPMarkValue", $("#QOS_TEXT_DSCPMarkValue").val());
        }
        
        if (this.buildIPv6=="1")
        {
            if ($("#QOS_CHX_TcMark").attr("checked") == "checked")
            {
                jsonObjPush("TCMarkValue", $("#QOS_TEXT_TCMarkValue").val());
            }
        }
        
        if($("#QOS_SEL_8021PMark").get(0).selectedIndex == 2)
        {
            jsonObjPush("v8021pValue", $("#QOS_TEXT_8021PValue").val());
        }
        
        if ($("input[name='QOS_RADIO_Policy'][value='priority']").attr("checked") == "checked")
        {
            jsonObjPush("Plan", "priority");
        }
        else
        {
            jsonObjPush("Plan", "weight");
        }
    
        
        if(this.CurQoS.Mode.bandWidth != $("#QOS_TEXT_UsBandwidth").val())
        {
            jsonObjPush("Bandwidth", $("#QOS_TEXT_UsBandwidth").val());
        }   

        if ($("#QOS_CHX_ForcedBw").attr("checked") == "checked")
        {
            jsonObjPush("EnableForceWeight", "1");
        }
        else
        {
            jsonObjPush("EnableForceWeight", "0");
        }

        if ($("#QOS_CHX_DSCPMark").attr("checked") == "checked")
        {
            jsonObjPush("EnableDSCPMark", "1");
        }
        else
        {
            jsonObjPush("EnableDSCPMark", "0");
        }
        
        if (this.buildIPv6=="1")
        {
            if ($("#QOS_CHX_TcMark").attr("checked") == "checked")
            {
                jsonObjPush("EnableTCMark", "1");
            }
            else
            {
                jsonObjPush("EnableTCMark", "0");
            }
        }
        
        if(this.CurQoS.Mode.enable802_1_P != $("#QOS_SEL_8021PMark").get(0).selectedIndex)
        {
            jsonObjPush("Enable802-1_P", $("#QOS_SEL_8021PMark").get(0).selectedIndex);
        }   
    }
    
    postData = jsonObjEnd();
    setCfg("qosSetClsCfg.cmd", postData, updatQosCfg);
}

this.QosSubmit= function()
{
    if(!this.TemplateCheck())
    {
        return;
    }
    
    var postData; 
    jsonObjInit();
    
    var url ;
    //url = 'setQos.cmd?';
        
    jsonObjPush("Mode", $("#QOS_SEL_RuleTemplate").val());
        
    jsonObjPush("Enable", ($("#QOS_CHX_Enable").attr("checked") == "checked") ? "1" : "0");
        
    if ($("input[name='QOS_RADIO_Policy'][value='car']").attr("checked") == "checked")
    {
        jsonObjPush("Plan", "car");
    }
    else if ($("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked") == "checked")
    {
        jsonObjPush("Plan", "weight");
    }
    else
    {
        jsonObjPush("Plan", "priority");
    }
            
    if(this.CurQoS.Mode.bandWidth != $("#QOS_TEXT_UsBandwidth").val())
    {
        jsonObjPush("Bandwidth",$("#QOS_TEXT_UsBandwidth").val());
    }   
    
    if ($("#QOS_CHX_ForcedBw").attr("checked") == "checked")
    {
        if(this.CurQoS.Mode.enableForceWeight != 1)
        {
            jsonObjPush("EnableForceWeight","1");
        }
    }
    else
    {
        if (this.CurQoS.Mode.enableForceWeight != 0)
        {
            jsonObjPush("EnableForceWeight","0");
        }
    }
    
    if ($("#QOS_CHX_DSCPMark").attr("checked") == "checked")
    {
        if(this.CurQoS.Mode.enableDscp != 1)
        {
            jsonObjPush("EnableDSCPMark", "1");
        }
    }
    else
    {
        if (this.CurQoS.Mode.enableDscp != 0)
        {
            jsonObjPush("EnableDSCPMark", "0");
        }
    }
        
    if (this.buildIPv6=="1")
    {
        if ($("#QOS_CHX_TcMark").attr("checked") == "checked")
        {
            if(this.CurQoS.Mode.enableTc != 1)
            {
                jsonObjPush("EnableTCMark","1");
            }
        }
        else
        {
            if (this.CurQoS.Mode.enableTc != 0)
            {
                jsonObjPush("EnableTCMark","0");
            }
        }
    }

    if(this.CurQoS.Mode.enable802_1_P != $("#QOS_SEL_8021PMark").val())
    {
        jsonObjPush("Enable802-1_P", $("#QOS_SEL_8021PMark").val());
    }
    
    if ($("input[name='QOS_RADIO_Policy'][value='priority']").attr("checked") == "checked") //PQ
    {
        if ($("#QOS_CHX_Q1Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[0].enableQosQueue != 1)
            {
                jsonObjPush("q1.Enable","1");
            }
            
        }
        else
        {
            if (this.CurQoS.Queue[0].enableQosQueue != 0)
            {
                jsonObjPush("q1.Enable","0");
            }
        }
        
        if ($("#QOS_CHX_Q2Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[1].enableQosQueue != 1)
            {
                jsonObjPush("q2.Enable","1");
            }
            
        }
        else
        {
            if (this.CurQoS.Queue[1].enableQosQueue != 0)
            {
                jsonObjPush("q2.Enable","0");
            }
        }
        
        if ($("#QOS_CHX_Q3Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[2].enableQosQueue != 1)
            {
                jsonObjPush("q3.Enable","1");
            }
            
        }
        else
        {
            if (this.CurQoS.Queue[2].enableQosQueue != 0)
            {
                jsonObjPush("q3.Enable","0");
            }
        }
        
        if ($("#QOS_CHX_Q4Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[3].enableQosQueue != 1)
            {
                jsonObjPush("q4.Enable","1");
            }
            
        }
        else
        {
            if (this.CurQoS.Queue[3].enableQosQueue != 0)
            {
                jsonObjPush("q4.Enable","0");
            }
        }
		
		if (this.supportEightQunue)
		{
			if ($("#QOS_CHX_Q5Enable").attr("checked") == "checked")
        	{
            	if (this.CurQoS.Queue[4].enableQosQueue != 1)
            	{
                	jsonObjPush("q5.Enable","1");
            	}
            
        	}
        	else
        	{
            	if (this.CurQoS.Queue[4].enableQosQueue != 0)
            	{
               	 	jsonObjPush("q5.Enable","0");
            	}
        	}
        
        	if ($("#QOS_CHX_Q6Enable").attr("checked") == "checked")
        	{
            	if (this.CurQoS.Queue[5].enableQosQueue != 1)
            	{
                	jsonObjPush("q6.Enable","1");
            	}
            
        	}
        	else
        	{
            	if (this.CurQoS.Queue[5].enableQosQueue != 0)
            	{
                	jsonObjPush("q6.Enable","0");
            	}
        	}
        
        	if ($("#QOS_CHX_Q7Enable").attr("checked") == "checked")
        	{
            	if (this.CurQoS.Queue[6].enableQosQueue != 1)
            	{
                	jsonObjPush("q7.Enable","1");
            	}
            
        	}
        	else
        	{
            	if (this.CurQoS.Queue[6].enableQosQueue != 0)
           	 {
                jsonObjPush("q7.Enable","0");
            	}
        	}
        
        	if ($("#QOS_CHX_Q8Enable").attr("checked") == "checked")
        	{
           	 	if (this.CurQoS.Queue[7].enableQosQueue != 1)
            	{
                	jsonObjPush("q8.Enable","1");
            	}
            
        	}
        	else
        	{
            	if (this.CurQoS.Queue[7].enableQosQueue != 0)
            	{
                	jsonObjPush("q8.Enable","0");
            	}
        	}
			
		}
		
    }
    else if ($("input[name='QOS_RADIO_Policy'][value='weight']").attr("checked") == "checked") //WRR
    {
        if ($("#QOS_CHX_WRRQ1Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[0].enableQosQueue != 1)
            {
                jsonObjPush("q1.Enable","1");
            }
            
            jsonObjPush("q1.Weight", $("#QOS_TEXT_Q1Weight").val());
        }
        else
        {
            if (this.CurQoS.Queue[0].enableQosQueue != 0)
            {
                jsonObjPush("q1.Enable","0");
            }
        }
        
        if ($("#QOS_CHX_WRRQ2Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[1].enableQosQueue != 1)
            {
                jsonObjPush("q2.Enable","1");
            }
                    
            jsonObjPush("q2.Weight", $("#QOS_TEXT_Q2Weight").val());
            
        }
        else
        {
            if (this.CurQoS.Queue[1].enableQosQueue != 0)
            {
                jsonObjPush("q2.Enable","0");
            }
        }
        
        if ($("#QOS_CHX_WRRQ3Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[2].enableQosQueue != 1)
            {
                jsonObjPush("q3.Enable","1");
            }
            jsonObjPush("q3.Weight", $("#QOS_TEXT_Q3Weight").val());
            
        }
        else
        {
            if (this.CurQoS.Queue[2].enableQosQueue != 0)
            {
                jsonObjPush("q3.Enable","0");
            }
        }
        
        if ($("#QOS_CHX_WRRQ4Enable").attr("checked") == "checked")
        {
            if (this.CurQoS.Queue[3].enableQosQueue != 1)
            {
                jsonObjPush("q4.Enable","1");
            }
            jsonObjPush("q4.Weight", $("#QOS_TEXT_Q4Weight").val());
        }
        else
        {
            if (this.CurQoS.Queue[3].enableQosQueue != 0)
            {
                jsonObjPush("q4.Enable","0");
            }
        }
		
		if (this.supportEightQunue)
		{
			if ($("#QOS_CHX_WRRQ5Enable").attr("checked") == "checked")
        	{
            	if (this.CurQoS.Queue[4].enableQosQueue != 1)
            	{
                	jsonObjPush("q5.Enable","1");
            	}
            
            	jsonObjPush("q5.Weight", $("#QOS_TEXT_Q5Weight").val());
        	}
        	else
        	{
            	if (this.CurQoS.Queue[4].enableQosQueue != 0)
            	{
                	jsonObjPush("q5.Enable","0");
            	}
        	}
        
        	if ($("#QOS_CHX_WRRQ6Enable").attr("checked") == "checked")
        	{
            	if (this.CurQoS.Queue[5].enableQosQueue != 1)
            	{
                	jsonObjPush("q6.Enable","1");
            	}
                    
           		jsonObjPush("q6.Weight", $("#QOS_TEXT_Q6Weight").val());
            
        	}
        	else
        	{
            	if (this.CurQoS.Queue[5].enableQosQueue != 0)
            	{
                	jsonObjPush("q6.Enable","0");
            	}
        	}
        
        	if ($("#QOS_CHX_WRRQ7Enable").attr("checked") == "checked")
        	{
            	if (this.CurQoS.Queue[6].enableQosQueue != 1)
            	{
               	 	jsonObjPush("q7.Enable","1");
            	}
            	jsonObjPush("q7.Weight", $("#QOS_TEXT_Q7Weight").val());
            
        	}
        	else
        	{
            	if (this.CurQoS.Queue[6].enableQosQueue != 0)
            	{
                	jsonObjPush("q7.Enable","0");
            	}
        	}
        
        	if ($("#QOS_CHX_WRRQ8Enable").attr("checked") == "checked")
        	{
            	if (this.CurQoS.Queue[7].enableQosQueue != 1)
            	{
                	jsonObjPush("q8.Enable","1");
            	}
            	jsonObjPush("q8.Weight", $("#QOS_TEXT_Q8Weight").val());
        	}
        	else
        	{
            	if (this.CurQoS.Queue[7].enableQosQueue != 0)
            	{
                	jsonObjPush("q8.Enable","0");
            	}
        	}
		}//end if(this.supportEightQunue)
    }
    
    postData = jsonObjEnd();
    disableSubmit($("#BTN_Save"));
    setCfg("qosSetCfg.cmd", postData, updatQosCfg);
}

this.checkCarValid= function()
{
    var checkObjArray = new Array();
    checkObjArray.push($("#QOS_TEXT_CarSrcIp"));
    checkObjArray.push($("#QOS_TEXT_CarSrcNetmast"));
    checkObjArray.push($("#QOS_TEXT_CarDstIp"));
    checkObjArray.push($("#QOS_TEXT_CarDstNetmast"));
    checkObjArray.push($("#QOS_TEXT_CarPortStart"));
    checkObjArray.push($("#QOS_TEXT_CarPortEnd"));
    checkObjArray.push($("#QOS_TEXT_CarUsRate"));
    
    return checkValid(getTagTextFromXmlDoc("qosSubmitWarn")+"!", checkObjArray);
}

this.applyCarClickSubmit= function() 
{
    $(".mainBody>div>form").css("width","618px");
    if (!this.checkCarValid())
    {
        return;
    }
    
    var postData; 
    jsonObjInit();
    
    jsonObjPush("action", "apply");
    jsonObjPush("portstart", $("#QOS_TEXT_CarPortStart").val());
    jsonObjPush("portend", $("#QOS_TEXT_CarPortEnd").val());
    jsonObjPush("srcIp", $("#QOS_TEXT_CarSrcIp").val());
    jsonObjPush("destIp", $("#QOS_TEXT_CarDstIp").val());
    jsonObjPush("srcNetmask", $("#QOS_TEXT_CarSrcNetmast").val());
    jsonObjPush("destNetmask", $("#QOS_TEXT_CarDstNetmast").val());
    jsonObjPush("uprate", $("#QOS_TEXT_CarUsRate").val());
    
    jsonObjPush("InterfaceName", $("#QOS_SEL_CarLanIntf").val());
    jsonObjPush("chkPro", $("#QOS_SEL_CarProto").val());
    if (this.buildIPv6=="1")
    {
        jsonObjPush("ipver", $("#QOS_SEL_CarIpVer").val());
    }
    
    var totalrate = $("#QOS_TEXT_UsBandwidth").val();

	if (0 != totalrate)
	{
		if ((this.sumrate + parseInt($("#QOS_TEXT_CarUsRate").val())) > totalrate) 
		{
			alert(getTagTextFromXmlDoc("qosUsBwltSumWarn"));
			return;
		}
	}
   
    postData = jsonObjEnd();
    disableSubmit($("#BTN_Save"), $("#BTN_Apply"));
    
    setCfg("qosSetTraffictl.cmd", postData,  updatQosCfg);
}

this.is_integer= function(value)
{       
    if (/^(\+|-)?\d+$/.test(value)) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}


this.checkBandWidth= function(elm)
{
    if (elm.value=="")
    {
        elm.value = 0;
    }

    if (!this.is_integer(elm.value))
    {
        if (this.wanmode == 1)
        {
            warnMsgShow(elm, getTagTextFromXmlDoc("qosUsBwRangeWarn1")); //上行带宽范围：0至1024的整型数字
            return false;
        }
        else
        {
            warnMsgShow(elm, getTagTextFromXmlDoc("qosUsBwRangeWarn2")); //上行带宽范围：0至1200000000的整型数字
            return false;
        }
    }
    else
    {
        if (this.wanmode == 1)
        {
            if((parseInt(elm.value) < 0) || (parseInt(elm.value) > 1024))
            {
                warnMsgShow(elm, getTagTextFromXmlDoc("qosUsBwRangeWarn1")); //上行带宽范围：0至1024的整型数字
                return false;
            }
        }
        else
        {
            if ((parseInt(elm.value) < 0) || (parseInt(elm.value) > 1200000000))
            {
                warnMsgShow(elm, getTagTextFromXmlDoc("qosUsBwRangeWarn2")); //上行带宽范围：0至1200000000的整型数字
                return false;
            }
        }
        /*
        if ((parseInt(elm.value) != 0) && (parseInt(elm.value) < this.sumrate))
        {
            warnMsgShow(elm, getTagTextFromXmlDoc("qosUsBwltSumWarn")); //总带宽值小于分类上行速率之和，请重新设置
            return false;
        }*/
        
        
    }
    
    warnMsgHide(elm);
    return true;
}

this.qosFocusCheckWeight= function(weightElm)
{
    if (!$("#"+weightElm.id+"warn") || ($("#"+weightElm.id+"warn").text() == ""))
    {
        var checkObjArray = new Array();
        $.each($(".OQS_CLS_Weight"), function(idx, weight){
            if (weight != weightElm)
            {
                if ($("#"+weight.id+"warn") && ($("#"+weight.id+"warn").text() != ""))
                {
                    weight.select();
                }
            }
        });
    }
}

this.qosCheckWeight= function(weightElm)
{
    var total = 0;
    var left
    
    if (weightElm.value == "")
    {
        weightElm.value = 0;
    }
    
    $.each($(".OQS_CLS_Weight"), function(idx, weight){
        if ($(".QOS_CLS_QunueSel")[idx].checked)
        {
            if ((weight != weightElm) && currentPageInst.is_integer(weight.value) && (parseInt(weight.value) >= 0) && (parseInt(weight.value) < 100))
            {
                total += parseInt(weight.value);
            }
        }
    });
    
    if (!this.is_integer(weightElm.value))
    {
        warnMsgShow(weightElm,  getTagTextFromXmlDoc("qosWeightRangeWarn")+":0-"+(100 - total)); //
        return false;
    }
    else if (parseInt(weightElm.value) > (100 - total))
    {
        warnMsgShow(weightElm,  getTagTextFromXmlDoc("qosWeightRangeWarn")+":0-"+(100 - total)); //
        return false
    }
    
    warnMsgHide(weightElm);
    return true;
}


this.qosWeightSelChange= function(weightCheck, idx)
{
    if (weightCheck.checked)
    {
        $(".OQS_CLS_Weight")[idx].disabled = false;
        this.qosCheckWeight($(".OQS_CLS_Weight")[idx]);
    }
    else
    {
        $(".OQS_CLS_Weight")[idx].disabled = true;
        var val = $(".OQS_CLS_Weight")[idx].value;
        if (this.is_integer(val) && (parseInt(val) >= 0) && (parseInt(val) < 100))
        {
            //keep before
        }
        else
        {
            $(".OQS_CLS_Weight")[idx].value = 0; //set default
        }
        warnMsgHide($(".OQS_CLS_Weight")[idx]);
    }
}

//比较MAC  地址最大和最小值
this.cmpMacAddress= function(macM,macS)
{
    var Lmac = 0;
    var Smac = 0;
    var macParts1 = macM.split(':');
    var macParts2 = macS.split(':');
    
    for (var i = 0; i <= 5; i++)
    {
        Lmac = parseInt(macParts1[i] , 16);
        Smac = parseInt(macParts2[i] , 16);     
        if (Lmac < Smac)
        {
            return false;
        }
    }
    return true;
}

this.isAbcIpAddress= function(address)
{
    if (isValidIpAddress(address) == false)
    {
        return false;
    }
    if(address.indexOf(":")>0)
        return true;
    var addrParts = address.split('.');
        var num = 0;
 
    num = parseInt(addrParts[0]);
    if (num < 1 || num >= 224 || num == 127)
    {
        return false;
    }
    return true;
}

//比较IP  地址最大和最小值
this.cmpIpAddress= function(address1,address2)
{
    var Lnum = 0;
    var Snum = 0;
    var addrParts1 = address1.split('.');
    var addrParts2 = address2.split('.');
    
    for (var i = 0; i <= 3; i++)
    {
        Lnum = parseInt(addrParts1[i]);
        Snum = parseInt(addrParts2[i]);     
        if (Lnum < Snum)
        {
            return false;
        }
    }
    return true;
}

this.qosRangeCheck= function(elm)
{
    classQ = $("#QOS_SEL_ClassQuenue").val();
    var ClassID = $("#QOS_SEL_ClassificationID").val();
    var ipVer = $("#QOS_SEL_ClsIpVer").val();
    var Classifytype = $("#QOS_SEL_IPv4Type").val();
    
    var maxVal = $("#QOS_TEXT_TypeCommonMax").val();
    var minVal = $("#QOS_TEXT_TypeCommonMin").val();
        
    if(ipVer == 1)
    {
        Classifytype = $("#QOS_SEL_IPv6Type").val();
    }
    else if(!this.ClsAddFlag  && this.CurQoS.Class[CurEditClsIndex].ipVer == 6)
    {
        Classifytype = $("#QOS_SEL_IPv6Type").val();
    }
    
    if (elm.value == "")
    {
        warnMsgShow(elm, getTagTextFromXmlDoc("qosNullWarn"));
        return false;
    }
    
    if ((Classifytype =='SMAC') || (Classifytype =='DMAC'))
    {
        if (!isValidMacAddress(elm.value))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosAddrInvalidWarn")); //地址不合法
            return false;
        }
        
        if (!this.cmpMacAddress(maxVal ,minVal))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn")); //"最小值大于最大值"
            return false;               
        }
        else
        {
            if (isValidMacAddress(minVal) && isValidMacAddress(maxVal))
            {
                warnMsgHide($("#QOS_TEXT_TypeCommonMax")[0]);
                warnMsgHide($("#QOS_TEXT_TypeCommonMin")[0]);
                return true
            }
        }
    }
    else if (Classifytype =='8021P')
    {
        if (isNaN(elm.value))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-7")); //取值范围0-7
            return false
        }
        if (( parseInt(elm.value) < 0 || parseInt(elm.value) > 7))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-7")); //取值范围0-7
            return false
        }
        
        if (parseInt(minVal) > parseInt(maxVal))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn")); //"最小值大于最大值"
            return false
        }
        else
        {
            if (!isNaN(minVal) && !isNaN(maxVal) && parseInt(minVal) >= 0 && parseInt(minVal) <= 7 && parseInt(maxVal) >= 0 && parseInt(maxVal) <= 7)
            {
                warnMsgHide($("#QOS_TEXT_TypeCommonMax")[0]);
                warnMsgHide($("#QOS_TEXT_TypeCommonMin")[0]);
                return true
            }
        }
    }
    else if ((Classifytype =='SIP') || (Classifytype =='DIP'))
    {
        if(((ipVer != "1")&&(!isValidAddressExpress(elm.value)))
            ||((this.buildIPv6=="1")&&(ipVer == "1")&&(!isValidIpAddress6(elm.value))))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosAddrInvalidWarn")); //地址不合法
            return false;
        }
        
        if (!this.cmpIpAddress(maxVal ,minVal))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn")); //"最小值大于最大值"
            return false;               
        }
        else
        {
            if(((ipVer != "1")&&(isValidAddressExpress(maxVal))&&(isValidAddressExpress(minVal)))
                ||((this.buildIPv6=="1")&&(ipVer == "1")&&(isValidIpAddress6(maxVal))&&(isValidIpAddress6(minVal))))
            {
                warnMsgHide($("#QOS_TEXT_TypeCommonMax")[0]);
                warnMsgHide($("#QOS_TEXT_TypeCommonMin")[0]);
                return true;
            }
        }
    }
    else if ((Classifytype =='SPORT') || (Classifytype =='DPORT'))
    {
        if (!isValidPort(elm.value))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosPortInvalidWarn")); //端口无效
            return false;
        }
        
        if (parseInt(minVal) > parseInt(maxVal))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn")); //"最小值大于最大值"
            return false;
        }
        else
        {
            if (isValidPort(minVal) && isValidPort(maxVal))
            {
                warnMsgHide($("#QOS_TEXT_TypeCommonMax")[0]);
                warnMsgHide($("#QOS_TEXT_TypeCommonMin")[0]);
                return true
            }
        }
    }
    else if (Classifytype =='TOS')
    {
        if (isNaN(elm.value))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-15")); //取值范围0-15
            return false
        }
        if (( parseInt(elm.value) < 0 || parseInt(elm.value) > 15))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-15")); //取值范围0-15
            return false
        }
        
        if (parseInt(minVal) > parseInt(maxVal))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn")); //"最小值大于最大值"
            return false
        }
        else
        {
            if (!isNaN(minVal) && !isNaN(maxVal) && parseInt(minVal) >= 0 && parseInt(minVal) <= 7 && parseInt(maxVal) >= 0 && parseInt(maxVal) <= 15)
            {
                warnMsgHide($("#QOS_TEXT_TypeCommonMax")[0]);
                warnMsgHide($("#QOS_TEXT_TypeCommonMin")[0]);
                return true
            }
        }
    }
    else if (Classifytype =='DSCP')
    {
        if (isNaN(elm.value))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-63")); //取值范围0-63
            return false
        }
        if (( parseInt(elm.value) < 0 || parseInt(elm.value) > 63))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-63")); //取值范围0-63
            return false
        }
        
        if (parseInt(minVal) > parseInt(maxVal))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn")); //"最小值大于最大值"
            return false
        }
        else
        {
            if (!isNaN(minVal) && !isNaN(maxVal) && parseInt(minVal) >= 0 && parseInt(minVal) <= 63 && parseInt(maxVal) >= 0 && parseInt(maxVal) <= 63)
            {
                warnMsgHide($("#QOS_TEXT_TypeCommonMax")[0]);
                warnMsgHide($("#QOS_TEXT_TypeCommonMin")[0]);
                return true
            }
        }
    }
   else if (Classifytype == 'TCCLASS')
   {
        if (isNaN(elm.value))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-255")); 
            return false
        }
        if (( parseInt(elm.value) < 0 || parseInt(elm.value) > 255))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosRang0-255")); 
            return false
        }
        
        if (parseInt(minVal) > parseInt(maxVal))
        {
            warnMsgShow(elm, Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn")); 
            return false
        }
        else
        {
            if (!isNaN(minVal) && !isNaN(maxVal) && parseInt(minVal) >= 0 && parseInt(minVal) <= 255&& parseInt(maxVal) >= 0 && parseInt(maxVal) <= 255)
            {
                warnMsgHide($("#QOS_TEXT_TypeCommonMax")[0]);
                warnMsgHide($("#QOS_TEXT_TypeCommonMin")[0]);
                return true
            }
        }
   }
    
    warnMsgHide(elm);
    return true;
}

this.qosClsIpVerChange= function(noResetVal)
{
    if (!noResetVal)
    {
        $("#QOS_TEXT_DSCPMarkValue").val("");
        $("#QOS_TEXT_8021PValue").val("");
    }
    
    var ipVer = $("#QOS_SEL_ClsIpVer").val();
    if (ipVer == "0") //ipv4
    {
        $("#QOS_TB_ClsIPv4").show();
        $("#QOS_TB_ClsIPv6").hide();
        
        $("#QOS_TEXT_DSCPMarkValue").attr("disabled" ,false);
        if(this.buildIPv6=="1")
        {
            $("#QOS_TEXT_TCMarkValue").attr("disabled", true);
        }
        $("#ProtocolListICMP").show();
        $("#ProtocolListICMPV6").hide();
        $("#ProtocolList").val("TCP");
    }
    else //ipv6
    {
        $("#QOS_TB_ClsIPv4").hide();
        $("#QOS_TB_ClsIPv6").show();
        $("#QOS_TEXT_DSCPMarkValue").attr("disabled", true);
        if(this.buildIPv6=="1")
        {
            $("#QOS_TEXT_TCMarkValue").attr("disabled", false);
            $("#ProtocolListICMP").hide();
            $("#ProtocolListICMPV6").show();
            $("#ProtocolList").val("TCP");
        }
    }
}

this.qosIntfChangeCheck= function(elm)
{
    classQ = $("#QOS_SEL_ClassQuenue").val();
    var ClassID = $("#QOS_SEL_ClassificationID").val();
    var ipVer = $("#QOS_SEL_ClsIpVer").val();
    var Classifytype = $("#QOS_SEL_IPv4Type").val();
    
    if (Classifytype =='LANInterface')
    {
        if ($("#QOS_SEL_LanIntfMin").get(0).selectedIndex > $("#QOS_SEL_LanIntfMax").get(0).selectedIndex)
        {
            alert(Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn"));
            $("#QOS_SEL_LanIntfMin").get(0).selectedIndex = 0;
        }
    }
    else if (Classifytype =='WANInterface')
    {
        if ($("#QOS_SEL_WanIntfMin").get(0).selectedIndex > $("#QOS_SEL_WanIntfMax").get(0).selectedIndex)
        {
            alert(Classifytype+getTagTextFromXmlDoc("qosMinMaxWarn"));
            $("#QOS_SEL_WanIntfMin").get(0).selectedIndex = 0;
        }
    }
    
    warnMsgHide(elm);
    return true;
}

this.qosDscpMarkValueChange= function(dscpElm)
{
    if (dscpElm.value == '')
    {
        dscpElm.value = 0;
    }
    
    if (!this.is_integer(dscpElm.value) || (parseInt(dscpElm.value) < 0  || parseInt(dscpElm.value) > 63))
    {
        warnMsgShow(dscpElm, getTagTextFromXmlDoc("qosRang0-63")); //取值范围0-63
        return false
    }
    
    warnMsgHide(dscpElm);
    return true;
}

this.qosTcMarkValueChange= function(tcElm)
{
    if (tcElm.value == '')
    {
        tcElm.value = 0;
    }
    
    if (!this.is_integer(tcElm.value) || (parseInt(tcElm.value) < 0  || parseInt(tcElm.value) > 255))
    {
        warnMsgShow(tcElm, getTagTextFromXmlDoc("qosRang0-255")); //取值范围0-255
        return false
    }
    
    warnMsgHide(tcElm);
    return true;
}

this.qos8021pValueChange= function(elm)
{
    if (elm.value == '')
    {
        elm.value = 0;
    }
    
    if (!this.is_integer(elm.value) || (parseInt(elm.value) < 0  || parseInt(elm.value) > 7))
    {
        warnMsgShow(elm, getTagTextFromXmlDoc("qosRang0-7")); //取值范围0-7
        return false
    }
    
    warnMsgHide(elm);
    return true;
}

this.checkIpAddrValid= function(ipElm)
{
    var canBeNull = true;
	var ipver = $("#QOS_SEL_CarIpVer").val();
    
    if (!(canBeNull && ipElm.value == ""))
    {
        if(((ipver != "6")&&(!isValidAddressExpress(ipElm.value)))
            ||(((this.buildIPv6=="1"))&&(ipver == "6")&&(!isValidIpAddress6(ipElm.value))))
        {
            warnMsgShow(ipElm, getTagTextFromXmlDoc("qosAddrInvalidWarn"));
            return false
        }
    }
    
    warnMsgHide(ipElm);
    return true;
}

this.checkIpMaskValid= function(ipMaskElm)
{
    var canBeNull = true;
    
    if (!(canBeNull && ipMaskElm.value == ""))
    {
        if(!isValidSubnetMask(ipMaskElm.value))
        {
            warnMsgShow(ipMaskElm, getTagTextFromXmlDoc("qosMaskInvalidWarn"));
            return false
        }
        warnMsgHide(ipMaskElm);
    }
    return true;
}

this.checkPortValid= function(portElm)
{
    if(isNaN(portElm.value))
    {
        warnMsgShow(portElm, getTagTextFromXmlDoc("qosPortInvalidWarn"));
        return false;
    }
    
    if (parseInt(portElm.value) < 0 || parseInt(portElm.value) > 65535)
    {
        warnMsgShow(portElm, getTagTextFromXmlDoc("qosPortInvalidWarn"));
        return false;
    }
    
    warnMsgHide(portElm);
    return true;
}

this.checkCarUsRate= function(usRateElm)
{
    if(isNaN(usRateElm.value))
    {
        warnMsgShow(usRateElm, getTagTextFromXmlDoc("qosUsRateInvalidWarn"));
        return false;
    }
    
    var totalrate = (this.CurQoS.Mode.Bandwidth);

    if ((this.sumrate + parseInt(usRateElm.value)) > totalrate) 
    {
        warnMsgShow(usRateElm, '设置上行速率总和不得超过总带宽速率' + totalrate + 'Kbps !');
        return false;
    }
    
    warnMsgHide(usRateElm);
    return true;
}



this.registerEvent= function()
{
    $("#QOS_SEL_RuleTemplate").change(function(){currentPageInst.changeQosRuleTemplate(this.value)});
    $("#QOS_CHX_Enable").change(function(){currentPageInst.qosEnable(this)});
    $("input[name='QOS_RADIO_Policy']").click(function(){currentPageInst.qosScheduleChange(this)});
    
    $("#QOS_TEXT_UsBandwidth").change(function(){currentPageInst.checkBandWidth(this)});
    
    $("#QOS_CHX_DSCPMark").click(function(){currentPageInst.qosEnableDscpMark(this)});
    $("#QOS_SEL_8021PMark").change(function(){currentPageInst.qos8021pChange(this)});
    
    $(".OQS_CLS_Weight").change(function(){currentPageInst.qosCheckWeight(this)});
    $(".OQS_CLS_Weight").focus(function(){currentPageInst.qosFocusCheckWeight(this)});
    
    $.each($(".QOS_CLS_QunueSel"), function(idx, weightCheck){
        $(weightCheck).click (function(){currentPageInst.qosWeightSelChange(this,idx)});
    })
    
    $("#QOS_TEXT_TypeCommonMin").change(function(){currentPageInst.qosRangeCheck(this)});
    $("#QOS_TEXT_TypeCommonMax").change(function(){currentPageInst.qosRangeCheck(this)});
    $(".QOS_CLS_IntfSel").change(function(){currentPageInst.qosIntfChangeCheck(this)});
    
    $("#QOS_TEXT_DSCPMarkValue").change(function(){currentPageInst.qosDscpMarkValueChange(this)});
    $("#QOS_TEXT_8021PValue").change(function(){currentPageInst.qos8021pValueChange(this)});
    
    $("#QOS_BTN_ClsAdd").click(function(){currentPageInst.qosAddCls(this)});
    $("#QOS_BTN_ClsDel").click(function(){currentPageInst.qosDelCls(this)});
    
    $("#QOS_SEL_AppName").change(function(){currentPageInst.qosAppNameChange(this)});
    $("select[name='ClassQueue']").change(function(){currentPageInst.qosClassQueueChange(this)});
    
    $("input[name='Qos_RADIO_ProfessionEdit']:eq(0)").click(function(){currentPageInst.ClsTypeChange(this)}); //
    $("input[name='Qos_RADIO_ProfessionEdit']:eq(1)").click(function(){currentPageInst.ClsTypeChange(this)}); //
    $("#QOS_SEL_ClsIpVer").change(function(){currentPageInst.qosClsIpVerChange(this)});
    $("#QOS_SEL_IPv4Type").change(function(){currentPageInst.qosClassTypeChange(this)});
    $("#QOS_SEL_IPv6Type").change(function(){currentPageInst.qosClassTypeChange(this)});
    
    $("#QOS_SET_ProtoType").change(function(){currentPageInst.qosProtocolTypeChange(this)});
    
    $("#BTN_Confirm").click(function(){currentPageInst.btnClsConfirm()});
    
    $("#QOS_SEL_CarProto").change(function(){currentPageInst.CARChangeProtocol(this)});
    
    $(".QOS_CLS_CarIpAddr").change(function(){currentPageInst.checkIpAddrValid(this)});
    $(".QOS_CLS_CarIpMask").change(function(){currentPageInst.checkIpMaskValid(this)});
    $(".QOS_CLS_Port").change(function(){currentPageInst.checkPortValid(this)});
    $("#QOS_TEXT_CarUsRate").change(function(){currentPageInst.checkCarUsRate(this)});

    $("#BTN_Apply").click(function(){currentPageInst.applyCarClick(this)});
    $("#BTN_Cancel").click(function(){currentPageInst.backCarClick()});
    
    $("#BTN_Save").click(function(){currentPageInst.QosSubmit()});
    $("#BTN_No").click(function(){pageJump("kt_qos_setup.html");});
}

}  // End Page


function updateQosElm(jsonObj)
{
    currentPageInst.updateQosElm(jsonObj);
}

function updateAllCfg()
{
    getCfg("qosGetCfg.json", {"ctrlCfg":"1", "qosCfg":"1"}, updateQosElm);
}

function updateQosElm(jsonObj)
{
    currentPageInst.updateQosElm(jsonObj);
}

function updatQosCfg()
{
    getCfg("qosGetCfg.json", {"qosCfg":"1"}, updateQosElm);
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
    this.basicClassFile = "./kt_qos_setup.js";
    this.customLv1File = "./kt_qos_setup_customlv1.js";
    this.customLv2File = "./kt_qos_setup_customlv2.js";
    this.customLv3File = "./kt_qos_setup_customlv3.js";
}

