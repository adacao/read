Page = function()
{

// JavaScript Document
this.popUpWin=0;
this.supportcard = 0;
this.cardStatus = false;
this.ns4 = (document.layers) ? true : false;
this.ie4 = (document.all) ? true : false;

this.hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                        "A", "B", "C", "D", "E", "F");
this.unsafeString = "\"<>%\\^[]`\+\$\,'#&";

this.htmlTextAppend = function()
{
	//for customer to append element
}

this.initHtmlText= function()
{
	$("#LOGIO_UserName").append(getTagTextFromXmlDoc("loginUserName")+":");
	$("#LOGIO_Pwd").append(getTagTextFromXmlDoc("loginPwd")+":");
	
	$("#BTN_Login").val(getTagTextFromXmlDoc("loginCtx"));
	$("#BTN_Cancel").val(getTagTextFromXmlDoc("loginReset"));
	
	$("#BTN_Register").val(getTagTextFromXmlDoc("loginDevRegister"));
	
	this.htmlTextAppend();
}

this.isUnsafe= function(compareChar)
// this function checks to see if a char is URL unsafe.
// Returns bool result. True = unsafe, False = safe
{
    if (this.unsafeString.indexOf(compareChar) == -1 && 
        compareChar.charCodeAt(0) > 32 && 
        compareChar.charCodeAt(0) < 123 )
        return false; // found no unsafe chars, return false
    else
        return true;
}

this.decToHex= function(num, radix)
// part of the hex-ifying functionality
{
    var hexString = "";
    while ( num >= radix ) 
    {
        temp = num % radix;
        num = Math.floor(num / radix);
        hexString += this.hexVals[temp];
    }
    hexString += this.hexVals[num];
    return this.reversal(hexString);
}

this.reversal= function(s)
// part of the hex-ifying functionality
{
    var len = s.length;
    var trans = "";
    for (i = 0; i < len; i++)
        trans = trans + s.substring(len-i-1, len-i);

    s = trans;
    return s;
}

this.convert= function(val)
// this converts a given char to url hex form
{
    return "%" + this.decToHex(val.charCodeAt(0), 16);
}

this.encodeUrl= function(val)
{
    var len = val.length;
    var i        = 0;
    var newStr   = "";
    var original = val;

    for ( i = 0; i < len; i++ ) 
    {
        if ( val.substring(i,i + 1).charCodeAt(0) < 255 ) 
        {
        // hack to eliminate the rest of unicode from this
            if (this.isUnsafe(val.substring(i,i+1)) == false)
                newStr = newStr + val.substring(i,i+1);
            else
                newStr = newStr + this.convert(val.substring(i,i+1));
        } 
        else 
        {
            // woopsie! restore.
            alert ("检测用户输入包含非ISO-8859-1字符，该字符位置: " + (i+1) + ",\n请在继续操作之前注意.");
            newStr = original;
            // short-circuit the loop and exit
            i = len;
        }
    }

    return newStr;
}

this.blogin = 0;
this.onlogin= function() 
{
	if (this.blogin == 0)
    {
		if (this.supportcard && !this.cardStatus)
		{
			alert(getTagTextFromXmlDoc("redirectPageAlert6"));
			window.location.reload();
			return false;
		}
		if ($("#LOGIO_TEXT_UserName").val().length < 0)
		{
			alert(getTagTextFromXmlDoc("loginUserNameWarn"));
            return;
		}
        var clientDate = new Date();
        var dateString = "&date=" + this.encodeUrl(clientDate.getFullYear().toString() + (((clientDate.getMonth() + 1) < 10) ? ("0" + (clientDate.getMonth() + 1).toString()) : (clientDate.getMonth() + 1).toString()) + (((clientDate.getDate() < 10) ? ("0" + clientDate.getDate().toString()) : clientDate.getDate().toString())));
		 var loc = "login.cgi?username=" + this.encodeUrl($("#LOGIO_TEXT_UserName").val()) + "&psd=" + this.encodeUrl($("#LOGIO_PWD_Password").val());
  //      var code = 'location="' + loc + '"';
        var code = 'location="' + loc + dateString + '"';
         this.blogin = 1;
         eval(code);
    }
}

this.keyDown= function(e)
{
	if (!e)
        e = window.event;
    if (13 == (e.keyCode | e.which | e.charCode) )
    {
        currentPageInst.onlogin();
        return 13;
    }

    return 0;
}

this.myKeyDown= function(e) 
{
    return currentPageInst.keyDown(e);
}

document.onkeydown = this.myKeyDown;
if(this.ns4) 
{
    document.captureEvents(Event.KEYDOWN);
} 

this.popUpWindow= function(URLStr, left, top, width, height)
{
    if (this.popUpWin)
    {
        if (!this.popUpWin.closed) 
            this.popUpWin.close();
    }
    this.popUpWin = open(URLStr,'_self ', 'toolbar=yes,location=no,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=yes,copyhistory=yes,width='+width+',height='+height+',left='+left+', top='+top+',screenX='+left+',screenY='+top+'');
}

this.clearPage = function()
{
	$("#LOGIO_TEXT_UserName").val("");
	$("#LOGIO_PWD_Password").val("");
}

this.focusOneItem= function()
{
	$("#LOGIO_PWD_Password").focus();
}

this.updateCfgBeforeHook = function()
{
	//reserved for customer!
}

this.updateLoginElm = function(jsonObj)
{
	this.updateCfgBeforeHook();
	this.focusOneItem();
	
	if(jsonObj.buildRegister == '1')
	{
		$("#BTN_Register").show();
	}
	else
	{
		$("#BTN_Register").hide();
	}

	if ('1' == jsonObj.supportCard)
	{
		this.supportcard = 1;
		$("#BTN_Register").val(getTagTextFromXmlDoc("loginDevRegister1"));
		
		if ('1' == jsonObj.cardStatus)
		{
			this.cardStatus = true;
		}
	}
	else
	{
		this.supportcard = 0;
	}
}


this.deviceRegister= function()
{
	this.popUpWindow('loid_register.html', 200,200,800,600);
}

this.registerEvent= function()
{
	$("#BTN_Login").click(function(){currentPageInst.onlogin();})
	$("#BTN_Register").click(function(){currentPageInst.deviceRegister();})
	$("#BTN_Cancel").click(function(){currentPageInst.clearPage();})

}

}  // End Page


function updateLoginElm(jsonObj)
{
    currentPageInst.updateLoginElm(jsonObj);
}

function updateAllCfg()
{
	getCfg("loginGet.json", null, updateLoginElm);
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
    this.basicClassFile = "login.js";
    this.customLv1File = "login_customlv1.js";
    this.customLv2File = "login_customlv2.js";
    this.customLv3File = "login_customlv3.js";
}

