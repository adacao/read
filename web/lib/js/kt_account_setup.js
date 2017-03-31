Page = function()
{
this.g_loginedType;
this.g_usrUserName;
this.g_adminUserName;
this.elm;
this.initHtmlText= function()
{	
	$("#ACCOUNT_OriginalUserName").append(getTagTextFromXmlDoc("OriginalUserNameCtx"));
	$("#ACCOUNT_MenuManageUser").append(getTagTextFromXmlDoc("menuManageUser"));
	$("#ACCOUNT_OriginalUserPassword").append(getTagTextFromXmlDoc("OriginalUserPasswordCtx"));
	$("#ACCOUNT_P_NewPassword").append(getTagTextFromXmlDoc("NewPasswordCtx"));
	$("#ACCOUNT_P_ConfirmPassword").append(getTagTextFromXmlDoc("ConfirmPasswordCtx"));
	$("#BTN_Apply").attr("value", getTagTextFromXmlDoc("saveApplyCtx")); 
	$("#BTN_ApplyNo").attr("value", getTagTextFromXmlDoc("cancelCtx")); 
}


this.updateElm= function(backJsonObj)
{
	console.log(backJsonObj);
	if ('1' == backJsonObj.success)
	{
		if ('1' != backJsonObj.needRelogin)
		{
			alert(getTagTextFromXmlDoc("UserManagementDone") + ".");
		}
		else
		{
			alert(getTagTextFromXmlDoc("UserManagementDone2") + ".");
		}
	}
	else
	{
		if ('111' == backJsonObj.errorcode)
		{
			alert(getTagTextFromXmlDoc("UserManagementError2") + ".");
		}
		else if ('222' == backJsonObj.errorcode)
		{
			alert(getTagTextFromXmlDoc("UserManagementError") + ".");
		}
	}
	
	$("#ACCOUNT_PWD_NewPassword").val("");
	$("#ACCOUNT_PWD_ConfirmPassword").val("");
	//$("#ACCOUNT_PWD_OldUserPassword").val("");
	
	if ('1' == backJsonObj.needRelogin)
	{
		pageJump("login.html");
		topPageJump("main.html");
	}
}
this.btnApply= function()
{
	var postData;
	
	if (!this.checkValue())
	{
		return;
	}
	
	if (!this.checkRelationship())
	{
		return;
	}
	
	disableSubmit($("#BTN_Apply"));

	jsonObjInit();
	jsonObjPush("userName", $("#ACCOUNT_TEXT_OldUserName").val());
	/*if ('1' != this.g_loginedType)
	{
		jsonObjPush("passwordConfirm", $("#ACCOUNT_PWD_OldUserPassword").val());
	}
	else
	{
		if ("admin" == $("#ACCOUNT_TEXT_OldUserName").val())
		{
			jsonObjPush("passwordConfirm", $("#ACCOUNT_PWD_OldUserPassword").val());
		}
	}*/
	jsonObjPush("newPassword", $("#ACCOUNT_PWD_NewPassword").val());
	postData = jsonObjEnd();
	
	setCfg("pswdSet.json", postData, updateElm);
}

this.checkValue= function()
{
	var objArray = new Array();
	
	objArray.push($("#ACCOUNT_PWD_NewPassword"));
	objArray.push($("#ACCOUNT_PWD_ConfirmPassword"));
	/*if ('1' != this.g_loginedType)
	{
		objArray.push($("#ACCOUNT_PWD_OldUserPassword"));
	}
	else
	{
		if ("admin" == $("#ACCOUNT_TEXT_OldUserName").val())
		{
			objArray.push($("#ACCOUNT_PWD_OldUserPassword"));
		}
	}*/
	
	if (!checkValid(null, objArray))
	{
		return false;
	}
	else
	{
		return true;
	}
}

this.checkRelationship= function()
{
	if ($("#ACCOUNT_PWD_NewPassword").val() != $("#ACCOUNT_PWD_ConfirmPassword").val())
	{
		alert(getTagTextFromXmlDoc("UserManagementWarn4") + "!");
		return false;
	}
	else
	{
		return true;
	}
}

this.registerEvent= function()
{
	$("#BTN_Apply").click(function()
	{
		currentPageInst.btnApply();
	});
	
}

this.prepareTheBlock= function(jsonObj)
{
	this.g_loginedType = jsonObj.loginedType;
	this.g_usrUserName = jsonObj.usrUserName;
	this.g_adminUserName = jsonObj.adminUserName;
	
	if ('1' == this.g_loginedType)
	{
		$("#ACCOUNT_TEXT_OldUserName").attr("disabled", false);
	}
	else
	{
		$("#ACCOUNT_TEXT_OldUserName").attr("disabled", true);
	}

	this.regCheckEvent();
}

this.regCheckEvent= function()
{
	//$("#ACCOUNT_PWD_OldUserPassword").change(function(){currentPageInst.checkPassword(this);});
	$("#ACCOUNT_PWD_NewPassword").change(function(){currentPageInst.checkPassword(this);});
	$("#ACCOUNT_PWD_ConfirmPassword").change(function(){currentPageInst.checkPassword(this);});
	
	if ('1' == this.g_loginedType)
	{
		$("#ACCOUNT_TEXT_OldUserName").click(function(){currentPageInst.changeAccount();});
	}
}

this.checkPassword= function(elm)
{
	if ('' == elm.value)
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("UserManagementWarn1") + "!");
	}
	else if (elm.value.length > 16)
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("UserManagementWarn2") + "!");
	}
	else if (elm.value.indexOf(' ') != -1)
	{
		warnMsgShow(elm, getTagTextFromXmlDoc("UserManagementWarn3") + "!");
	}
	else
	{
		warnMsgHide(elm);
	}
}

this.changeAccount= function()
{
	if ("user" == $("#ACCOUNT_TEXT_OldUserName").val())
	{
		$("#ACCOUNT_TrChange").hide();
	}
	else
	{
		$("#ACCOUNT_TrChange").show();
	}
}






}  // End Page
function updateElm(jsonObj)
{
	currentPageInst.updateElm(jsonObj);
}

function prepareTheBlock(jsonObj)
{
    currentPageInst.prepareTheBlock(jsonObj);
}

function updateAllCfg()
{
	getCfg("pswdTypeGet.json", "", prepareTheBlock);
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
    this.basicClassFile = "kt_account_setup.js";
    this.customLv1File = "kt_account_setup_customlv1.js";
    this.customLv2File = "kt_account_setup_customlv2.js";
    this.customLv3File = "kt_account_setup_customlv3.js";
}

