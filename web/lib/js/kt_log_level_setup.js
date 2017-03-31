// JavaScript Document
function initHtmlText()
{
	$("#LOG_SetupTitle").append(getTagTextFromXmlDoc("SystemLogCtx"));
	$("#LOG_ShowLog1").append(getTagTextFromXmlDoc("SystemLog1Ctx"));
	$("#LOG_ShowLog2").append(getTagTextFromXmlDoc("SystemLog2Ctx"));
	$("#LOG_ShowLog3").append(getTagTextFromXmlDoc("SystemLog3Ctx"));
	$("#LOG_ShowLog4").append(getTagTextFromXmlDoc("SystemLog4Ctx"));
	$("#LOG_ShowLog5").append(getTagTextFromXmlDoc("SystemLog5Ctx"));
	$("#LOG_TD_SystemLog").append(getTagTextFromXmlDoc("SystemLogAbleCtx"));
	$("#Log_level_rebootBtnCtx").append(getTagTextFromXmlDoc("menuManageLogLevel"));
	$("#LOG_RADIO_DisableId").append(getTagTextFromXmlDoc("SystemLogDisableCtx"));
	$("#LOG_TD_LogLevel").append(getTagTextFromXmlDoc("LevelLogCtx")+"");
	selectStr ='<option value="Emergency">'+getTagTextFromXmlDoc("Emergency")
			 +'</option><option value="Alert">'+getTagTextFromXmlDoc("Alert")
			 +'</option><option value="Critical">'+getTagTextFromXmlDoc("Critical")
			 +'</option><option value="Error">'+getTagTextFromXmlDoc("Error")
			 +'</option><option value="Warning">'+getTagTextFromXmlDoc("Warning")
			 +'</option><option value="Notice">'+getTagTextFromXmlDoc("Notice")
			 +'</option><option value="Informational">'+getTagTextFromXmlDoc("Informational")
			 +'</option><option value="Debugging">'+getTagTextFromXmlDoc("Debugging")
			 +'</option>';
	$("#LOG_SEl_LevelName").empty();
	$("#LOG_SEl_LevelName").append(selectStr);
	$("#LOG_TD_LevelDisplay").append(getTagTextFromXmlDoc("LevelDisplayCtx")+"");
		selectStr ='<option value="Emergency">'+getTagTextFromXmlDoc("Emergency")
			 +'</option><option value="Alert">'+getTagTextFromXmlDoc("Alert")
			 +'</option><option value="Critical">'+getTagTextFromXmlDoc("Critical")
			 +'</option><option value="Error">'+getTagTextFromXmlDoc("Error")
			 +'</option><option value="Warning">'+getTagTextFromXmlDoc("Warning")
			 +'</option><option value="Notice">'+getTagTextFromXmlDoc("Notice")
			 +'</option><option value="Informational">'+getTagTextFromXmlDoc("Informational")
			 +'</option><option value="Debugging">'+getTagTextFromXmlDoc("Debugging")
			 +'</option>';
	$("#LOG_SEL_Display").empty();
	$("#LOG_SEL_Display").append(selectStr);
	$("#LOG_TD_LogMode").append(getTagTextFromXmlDoc("LogModeCtx")+"");
	selectStr ='<option value="1">'+getTagTextFromXmlDoc("LocalCtx")
			 +'</option><option value="2">'+getTagTextFromXmlDoc("RemoteCtx")
			 +'</option><option value="3">'+getTagTextFromXmlDoc("BothCtx")
			 +'</option>';		
	$("#LOG_SEL_LogMode").empty();
	$("#LOG_SEL_LogMode").append(selectStr);
	$("#LOG_TD_LogAddr").append(getTagTextFromXmlDoc("LogAddrCtx"));
	$("#LOG_TD_LogPort").append(getTagTextFromXmlDoc("LogPortCtx"));
	$("#LOG_BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
    $("#LOG_BTN_Cancel").attr("value", getTagTextFromXmlDoc("cancelCtx"));
}

function btnApply()
{
	var postData;
	//var itemradio = $("input[name='LOG_CHX_Enable']"); 
    //var nums = itemradio.length; 

	jsonObjInit();
		
	/*for(i=0;i<nums;i++)
	{ 
        if(itemradio[i].checked)
		{   
			break; 
        } 
    } */
	if($("#LOG_CHX_Enable").attr("checked"))
	{
		jsonObjPush("logStatus","1");
	}
	else
	{
		jsonObjPush("logStatus","0");
	}
    //alert(jsonObj.logStatus);
	jsonObjPush("logLevel", $("#LOG_SEl_LevelName").val());
	
	if($("#LOG_SEl_LevelName").val() == "Emergency")
	{
		jsonObjPush("logLevel","0");
	}
	else if($("#LOG_SEl_LevelName").val() == "Alert")
	{
		jsonObjPush("logLevel","1");
	}
		
	else if($("#LOG_SEl_LevelName").val() == "Critical")
	{
		jsonObjPush("logLevel","2");
	}

	else if($("#LOG_SEl_LevelName").val() == "Error")
	{
		jsonObjPush("logLevel","3");
	}
		
	else if($("#LOG_SEl_LevelName").val() == "Warning")
	{
		jsonObjPush("logLevel","4");
	}
		
	else if($("#LOG_SEl_LevelName").val() == "Notice")
	{
		jsonObjPush("logLevel","5");
	}
		
	else if($("#LOG_SEl_LevelName").val() == "Informational")
	{
		jsonObjPush("logLevel","6");

	}
	else if($("#LOG_SEl_LevelName").val() == "Debugging")
	{
		jsonObjPush("logLevel","7");
	}	


	jsonObjPush("logDisplay", $("#LOG_SEL_Display").val());
	
	if($("#LOG_SEL_Display").val() == "Emergency")
	{
		jsonObjPush("logDisplay","0");
	}
	else if($("#LOG_SEL_Display").val() == "Alert")
	{
		jsonObjPush("logDisplay","1");
	}
		
	else if($("#LOG_SEL_Display").val() == "Critical")
	{
		jsonObjPush("logDisplay","2");
	}
		
	else if($("#LOG_SEL_Display").val() == "Error")
	{
		jsonObjPush("logDisplay","3");
	}
		
	else if($("#LOG_SEL_Display").val() == "Warning")
	{
		jsonObjPush("logDisplay","4");
	}
		
	else if($("#LOG_SEL_Display").val() == "Notice")
	{
		jsonObjPush("logDisplay","5");
	}
		
	else if($("#LOG_SEL_Display").val() == "Informational")
	{
		jsonObjPush("logDisplay","6");
	}
	else if($("#LOG_SEL_Display").val() == "Debugging")
	{
		jsonObjPush("logDisplay","7");
	}	

	jsonObjPush("logMode", $("#LOG_SEL_LogMode").val());
		
	if($("#LOG_SEL_LogMode").val() == "1")
	{
		jsonObjPush("logMode","1");
		$("#LOG_DIV_SrvInfo").hide();

	}
	else if($("#LOG_SEL_LogMode").val() == "2")
	{
		jsonObjPush("logMode","2");
	}
	else if($("#LOG_SEL_LogMode").val() == "3")
	{
		jsonObjPush("logMode","3");
	}	
	jsonObjPush("logIpAddress", $("#LOG_INPUT_LogAddr").val());
	jsonObjPush("logPort", $("#LOG_INPUT_LogPort").val());	

	postData = jsonObjEnd();
	setCfg("logConfigSet.json", postData, updateAllCfg);
}              
function updateAllCfg()
{ 	
	getCfg("logConfigGet.json","", setlogConfigElm);
		
}
function setlogConfigElm(jsonObj)
{
	if(jsonObj.logStatus == '1')
	{
		$("#LOG_CHX_Enable").attr("checked", true);
		$("#LOG_DIV_Rules").show();
	}
	else
	{
		$("#LOG_CHX_Enable").attr("checked", undefined);
		$("#LOG_DIV_Rules").hide();
		
	}
	//当为禁止的时候灰掉所选框
	//if ($("input[name='status']:eq(0)").attr("checked") == "checked")
	//$("input[name='levelDisplay']").attr("disabled", true);
	if (jsonObj.logDisplay == '0')
	{
		$("#LOG_SEL_Display").val("Emergency");		
	}
	else if (jsonObj.logDisplay == '1')
	{
		$("#LOG_SEL_Display").val("Alert");		
	}
	else if (jsonObj.logDisplay == '2')
	{
		$("#LOG_SEL_Display").val("Critical");	
	}
	else if (jsonObj.logDisplay == '3')
	{
		$("#LOG_SEL_Display").val("Error");	
	}
	else if (jsonObj.logDisplay == '4')
	{
		$("#LOG_SEL_Display").val("Warning");		
	}
	else if (jsonObj.logDisplay == '5')
	{
		$("#LOG_SEL_Display").val("Notice");		
	}
	else if (jsonObj.logDisplay == '6')
	{
		$("#LOG_SEL_Display").val("Informational");		
	}
	else if(jsonObj.logDisplay == '7')
	{
		$("#LOG_SEL_Display").val("Debugging");	
	}
	
	if (jsonObj.logLevel == '0')
	{
		$("#LOG_SEl_LevelName").val("Emergency");
	
	}
	else if (jsonObj.logLevel == '1')
	{
		$("#LOG_SEl_LevelName").val("Alert");
	}
	else if (jsonObj.logLevel == '2')
	{
		$("#LOG_SEl_LevelName").val("Critical");
	}
	else if (jsonObj.logLevel == '3')
	{
		$("#LOG_SEl_LevelName").val("Error");
	}
	else if (jsonObj.logLevel == '4')
	{
		$("#LOG_SEl_LevelName").val("Warning");
	}
	else if (jsonObj.logLevel == '5')
	{
		$("#LOG_SEl_LevelName").val("Notice");
	}
	else if (jsonObj.logLevel == '6')
	{
		$("#LOG_SEl_LevelName").val("Informational");
	}
	else if(jsonObj.logLevel == '7')
	{
		$("#LOG_SEl_LevelName").val("Debugging");
	}

	if (jsonObj.logModeStatus == '1')
	{
		$("#LOG_SEL_LogMode").val("1");
		$("#LOG_DIV_SrvInfo").hide();
	}
	else if (jsonObj.logModeStatus == '2')
	{
		$("#LOG_SEL_LogMode").val("2");
		$("#LOG_DIV_SrvInfo").show();
	}
	else if(jsonObj.logModeStatus == '3')
	{
		$("#LOG_SEL_LogMode").val("3");
		$("#LOG_DIV_SrvInfo").show();
	}
	 $("#LOG_INPUT_LogAddr").val(jsonObj.logIpAddress);
	 $("#LOG_INPUT_LogPort").val(jsonObj.logPort);

}

function logModeChange(value)
{
	if ((2 == value) || (3 == value))
	{
		$("#LOG_DIV_SrvInfo").show();
	}
	else if (1 == value)
	{
		$("#LOG_DIV_SrvInfo").hide();
	}
}

function registerEvent()
{
	$("#LOG_BTN_Apply").click(function()
	{
		btnApply();
	});
	$("#LOG_SEL_LogMode").change(function()
	{
		logModeChange(this.value);
	})
    
    $("#LOG_BTN_Cancel").click(function()
	{
		pageJump("kt_log_level_setup.html");
	});
}
