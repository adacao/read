Page = function()
{

this.g_times = 0;
this.g_limit = 0;
this.g_timeDelay = 0;
this.g_progress = 0;
this.g_nextProgress = 0;
this.g_lastRefreshSuccessPage = true;
this.unsafeString = "\"<>%\\^[]`\+\$\,'#&";
this.register_total_time;
this.register_from_web = 0;
this.product_area;
this.page = 'none';
this.g_curTable = 0;
this.support_card = 0;
/*
CGI_REG_PAGE_NONE                 0
CGI_REG_PAGE_REGISTER             1
CGI_REG_PAGE_REGISTERING          2
CGI_REG_PAGE_OLT                  3
CGI_REG_PAGE_WAN                  4
CGI_REG_PAGE_USER_INIT            5
CGI_REG_PAGE_ITMS                 6
CGI_REG_PAGE_ITMS_WAIT_SRV        7
CGI_REG_PAGE_SRV                  8
CGI_REG_PAGE_SRV_SUCC             9
CGI_REG_PAGE_NO_MORE              10

CGI_REG_ERRPAGE_NONE              0
CGI_REG_ERRPAGE_LOCAL_TIMEOUT     1
CGI_REG_ERRPAGE_ITMS_TIMEOUT      2
CGI_REG_ERRPAGE_PWD_ERR           3
CGI_REG_ERRPAGE_LOID_ERR          4
CGI_REG_ERRPAGE_LOID_PWD_ERR      5
CGI_REG_ERRPAGE_SERVICE_ERR       6
CGI_REG_ERRPAGE_OLT_DISCONNED     7
CGI_REG_ERRPAGE_WAN_DISCONNED     8
*/
this.initElement = function()
{
	
}

this.initHtmlText = function()
{
    $("#welcome").append(getTagTextFromXmlDoc("mainWelcome"));
    $("#logoutlink").append(getTagTextFromXmlDoc("loginOutCtx"));
    $("#GuideSet").append(getTagTextFromXmlDoc("mainSet"));
    $("#MainLeftStatus").append(getTagTextFromXmlDoc("loginDevRegister"));
    $("#mainProduct").append(getTagTextFromXmlDoc("mainProduct")+":");
    $("#mainGatewayName").append(getTagTextFromXmlDoc("mainGatewayName")+":");
    $("#mainGatewayType").append(getTagTextFromXmlDoc("mainGatewayType"));
    $("#navTopA").append(getTagTextFromXmlDoc("loginDevRegister"));


    this.initElement();
}

this.reversal = function(s)
{
    var len = s.length;
    var trans = "";
    for (i = 0; i < len; i++)
        trans = trans + s.substring(len-i-1, len-i);
    s = trans;
    return s;
}

this.decToHex = function(num, radix)
{
    var hexString = "";
    while ( num >= radix ) {
        temp = num % radix;
        num = Math.floor(num / radix);
        hexString += hexVals[temp];
    }
    hexString += hexVals[num];
    return this.reversal(hexString);
}

this.convert = function(val)
{
    return    "%" + this.decToHex(val.charCodeAt(0), 16);
}

this.isUnsafe = function(compareChar)
{
    if ( this.unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
        return false;
    else
        return true;
}

this.encodeUrl = function(val)
{
    var len    = val.length;
    var i        = 0;
    var newStr    = "";
    var original = val;

    for ( i = 0; i < len; i++ ) 
    {
        if ( val.substring(i,i+1).charCodeAt(0) < 255 ) 
        {
            if (this.isUnsafe(val.substring(i,i+1)) == false)
                newStr = newStr + val.substring(i,i+1);
            else
                newStr = newStr + this.convert(val.substring(i,i+1));
        } 
        else 
        {
            newStr = original;
            i = len;
        }
    }

    return newStr;
}

this.illegalCt = function(ct) 
{
    var s = "·~=\"<>%\\^[]`\+\$\,'#& &@,.?;\'\\\"!、()[]{}──《》<>- —～ ______*\/×□▲●～……→";
    for (var i=0; i<s.length; i++) 
    {
        if (s.charAt(i) == ct.charAt(ct.length-1) || s.charAt(i) == ct.charAt(0))  
            return true; 
    }  

    return false;
}

this.checkCHValue = function(val)
{

    var len    = val.length;
    var i        = 0;
    var newStr    = "";
    var original = val;

    for ( i = 0; i < len; i++ ) 
    {
        if ( val.substring(i,i+1).charCodeAt(0) > 255 ) 
        {
            return 1;
        }
    }

    return 0;
}

this.replaceTable = function(whichOne, jsonObj)
{
    var tempHtml = '';
    if ('register' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD width='220px' class='hdNobac'>" + getTagTextFromXmlDoc("regStartClass") + "</TD>";
        tempHtml += "<TD>" + "<select id='selectClass'>"+ "<option value ='0'>注册</option>"+"<option value ='1'>换机</option>"+"</select>" + "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR>";
        tempHtml += "<TD width='220px' class='hdNobac'>" + getTagTextFromXmlDoc("regID") + "</TD>";
        tempHtml += "<TD><input type='text' id='LOID_TEXT_Loid' size='15' maxlength='24'></TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR class='OldMac'>";
        tempHtml += "<TD width='220px' class='hdNobac'>" + getTagTextFromXmlDoc("regStartMac") + "</TD>";
        tempHtml += "<TD><input type='text' id='LOID_TEXT_Mac' size='15' maxlength='12'></TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR>";
        tempHtml += "<TD><input type='button' class='buttonY' id='BTN_Submit'></TD>";
        tempHtml += "</TR>";
        tempHtml += "</TABLE>";

        if ('2' == this.product_area)
        {
            alert(getTagTextFromXmlDoc("registerNotice"));
        }
    }

    else if ('registering_olt' == whichOne)
    {
        tempHtml =  "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        if ('2' == this.product_area)
        {
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice1");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice2");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
        }
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
        tempHtml += "<div id='bn' ></div>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
        tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
        tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";

        if ('2' == this.product_area)
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegistingcq1");
        }
        else
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting1");
        }

        tempHtml += "</TD></tr>";
        tempHtml += "<TR><TD align=center colSpan=3 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=3 height=60></TD></TR>";
        tempHtml += "</table>";
    }
    else if ('registering_wan' == whichOne)
    {
        tempHtml =  "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        if ('2' == this.product_area)
        {
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice1");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice2");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
        }
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
        tempHtml += "<div id='bn'></div>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
        tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
        tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";
        if ('2' == this.product_area)
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegistingcq2");
        }
        else
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting2");
        }

        tempHtml += "</TD></tr>";
        tempHtml += "<TR><TD align=center colSpan=3 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=3 height=60></TD></TR>";
        tempHtml += "</table>";
    }
    else if ('registering_itms' == whichOne)
    {
        tempHtml =  "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        if ('2' == this.product_area)
        {
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice1");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice2");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
        }
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
        tempHtml += "<div id='bn'></div>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
        tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
        tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";
        if ('2' == this.product_area)
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegistingcq3");
        }
        else
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting3");
        }

        tempHtml += "</TD></tr>";
        tempHtml += "<TR><TD align=center colSpan=3 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=3 height=60></TD></TR>";
        tempHtml += "</table>";
    }
    else if ('registered_wait_srv' == whichOne)
    {
        tempHtml =  "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        if ('2' == this.product_area)
        {
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice1");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice2");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
        }
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
        tempHtml += "<div id='bn'></div>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>"
        tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
        tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";
        if ('2' == this.product_area)
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegistingcq4");
        }
        else
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting4");
        }

        tempHtml += "</TD></tr>";
        tempHtml += "<TR><TD align=center colSpan=3 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=3 height=60></TD></TR>";
        tempHtml += "</table>";
    }
    else if ('registered_getting_srv' == whichOne)
    {
        tempHtml =  "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        if ('2' == this.product_area)
        {
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice1");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice2");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
        }
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
        tempHtml += "<div id='bn'></div>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
        tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
        tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
        tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
        tempHtml += "</TD></tr>";
        tempHtml += "<tr>";
        tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";
        if ('120' == jsonObj.width)
        {
            if ('2' == this.product_area)
                tempHtml += "<br>" + getTagTextFromXmlDoc("regRegistingcq5");
            else
                tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting5");
        }
        else
        {
            tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting6a");
            if ('INTERNET' == jsonObj.srvName)
            {
                tempHtml += getTagTextFromXmlDoc("regRegistingName1");
            }
            else if ('VOIP' == jsonObj.srvName)
            {
                tempHtml += getTagTextFromXmlDoc("regRegistingName3");
            }
            else if ('IPTV' == jsonObj.srvName)
            {
                tempHtml += getTagTextFromXmlDoc("regRegistingName2");
            }
            else if ('' == jsonObj.srvName)
            {
                tempHtml += '';
            }
            else
            {
                tempHtml += getTagTextFromXmlDoc("regRegistingName4");
            }
            tempHtml += getTagTextFromXmlDoc("regRegisting6b");
        }

        tempHtml += "</TD></tr>";
        tempHtml += "<TR><TD align=center colSpan=3 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=3 height=60></TD></TR>";
        tempHtml += "</table>";
    }
    else if ('registered_srv_succ' == whichOne)
    {
        tempHtml = "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";

        if (('2' == this.product_area) && (1 == this.register_from_web))
        {
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice1");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3><font size='2'>";
            tempHtml += getTagTextFromXmlDoc("registerNotice2");
            tempHtml += "</font></TD>";
            tempHtml += "</tr>";

            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
            tempHtml += "<div id='bn'></div>";
            tempHtml += "</TD></tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
            tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
            tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
            tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
            tempHtml += "</TD></tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";

            if ((1 == this.register_from_web) && ('2' == this.product_area))
            {
                tempHtml += "<font size=\"2\">";
                tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting8");
            }
        }
        else if (('2' == this.product_area) && (this.register_from_web != 1))
        {
            tempHtml += "<TR>";
            tempHtml += "<td valign='middle' align='center' height=50><font size='2' color=\"#FF0000\">" + getTagTextFromXmlDoc("regSuccessMsg6") + "</td>";
            tempHtml += "</TR>";
            tempHtml += "<TR>";
            tempHtml += "<td valign='middle' align='center' height=50><font size='2'>" + getTagTextFromXmlDoc("regSuccessMsg5") + "</td>";
            tempHtml += "</TR>";
        }
        else if ('1' == this.product_area)
        {
            if (1 == this.register_from_web)
            {
                tempHtml += "<tr>";
                tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
                tempHtml += "<div id='bn'></div>";
                tempHtml += "</TD></tr>";
                tempHtml += "<tr>";
                tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
                tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
                tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
                tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
                tempHtml += "</TD></tr>";
                tempHtml += "<tr>";
                tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";
                tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting7a2");
                tempHtml += "</TD></tr>";
            }
            else
            {
                tempHtml += "<tr>";
                tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";
                tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting7a3");
                tempHtml += "</TD></tr>";
            }
        }
        else
        {
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' rowspan=1 colSpan=3>";
            tempHtml += "<div id='bn'></div>";
            tempHtml += "</TD></tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
            tempHtml += "<TD align='left' class='navigate' colSpan=1 rowspan=1 width=200>";
            tempHtml += "<div id='ps' style='background-color:#FFCC99;width:200px;height:6px;display:none'></div></TD>";
            tempHtml += "<TD align='center' class='navigate' colSpan=1 rowSpan=1 width=100>";
            tempHtml += "</TD></tr>";
            tempHtml += "<tr>";
            tempHtml += "<TD align='center' class='navigate' colSpan=3 rowspan=1 >";

            var array = jsonObj.allSrvNames.split("|");
            var strLen = array.length;

            if ((1 == this.register_from_web) && ('2' == this.product_area))
            {
                tempHtml += "<font size=\"2\">";
                tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting8");
            }
            else
            {
                if ('2' == this.product_area)
                {
                    tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting7a1");
                }
                else if ("" == jsonObj.allSrvNames)
                {
                    tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting7a");
                }
                else
                {
                    tempHtml += "<br>" + getTagTextFromXmlDoc("regRegisting7a4");
                }

                for (var j = 0; j < array.length; j++)
                {
                    if ('INTERNET' == array[j])
                    {
                        tempHtml += getTagTextFromXmlDoc("regRegSuccName1");
                    }
                    else if ('VOIP' == array[j])
                    {
                        tempHtml += getTagTextFromXmlDoc("regRegSuccName3");
                    }
                    else if ('IPTV' == array[j])
                    {
                        tempHtml += getTagTextFromXmlDoc("regRegSuccName2");
                    }
                    else if ('' == array[j])
                    {
                        tempHtml += '';
                        strLen = 0;
                    }
                    else
                    {
                        tempHtml += getTagTextFromXmlDoc("regRegSuccName4");
                    }

                    if (j < (array.length - 1))
                    {
                        tempHtml += ',';
                    }
                }
                if (4 == strLen)
                {
                    tempHtml += getTagTextFromXmlDoc("regRegisting7e");
                }
                else if (3 == strLen)
                {
                    tempHtml += getTagTextFromXmlDoc("regRegisting7d");
                }
                else if (2 == strLen)
                {
                    tempHtml += getTagTextFromXmlDoc("regRegisting7c");
                }
                else if (1 == strLen)
                {
                    tempHtml += getTagTextFromXmlDoc("regRegisting7b");
                }
            }
            tempHtml += "</TD></tr>";
        }

        if (('2' == this.product_area) && (this.register_from_web != 1))
        {
            tempHtml += "<TR>";
            tempHtml += "<TD align=middle colSpan=3 height=40><input type='button' id='BTN_Submit'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            tempHtml += "<input type='button' id='BTN_Cancel'></TD>";
            tempHtml += "</TR>";
        }
        else if ((1 == this.register_from_web) && ('2' == this.product_area))
        {
            tempHtml += "<font color=\"#FF0000\">";
            tempHtml += getTagTextFromXmlDoc("regRegisterTime1");
            tempHtml += Math.floor(this.register_total_time / 60);
            tempHtml += getTagTextFromXmlDoc("regRegisterTime2");
            tempHtml += this.register_total_time % 60;
            tempHtml += getTagTextFromXmlDoc("regRegisterTime3");
            tempHtml += "</font>";
            tempHtml += "</TD></tr>";
        }
        tempHtml += "<TR><TD align=center colSpan=3 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=3 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_itms_loid_error' == whichOne)
    {
        tempHtml = "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=middle>";
        if(this.g_times >= this.g_limit)
        {
            tempHtml += "<IMG src='pic/action_error.gif'></TD><TD>" + getTagTextFromXmlDoc("regErrorMsg1");
        }
        else
        {
            tempHtml += "<IMG src='pic/action_error.gif'></TD><TD>" + getTagTextFromXmlDoc("regErrorMsg2a") + "(" + getTagTextFromXmlDoc("regResidueDegree") + (this.g_limit - this.g_times) + ")";
        }
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_itms_pwd_error' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=middle>";
        if(this.g_times >= this.g_limit)
        {
            tempHtml += "<IMG src='pic/action_error.gif'></TD><TD>" + getTagTextFromXmlDoc("regErrorMsg3");
        }
        else
        {
            tempHtml += "<IMG src='pic/action_error.gif'></TD><TD>" + getTagTextFromXmlDoc("regErrorMsg4a") + "(" + getTagTextFromXmlDoc("regResidueDegree") + (this.g_limit - this.g_times) + ")";
        }
        
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_itms_loidpwd_error' == whichOne)
    {
        tempHtml = "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=middle>";
        if(this.g_times >= this.g_limit)
        {
            tempHtml += "<IMG src='pic/action_error.gif'></TD><TD>" + getTagTextFromXmlDoc("regErrorMsg5");
        }
        else
        {
            tempHtml += "<IMG src='pic/action_error.gif'></TD><TD>" + getTagTextFromXmlDoc("regErrorMsg6a") + "(" + getTagTextFromXmlDoc("regResidueDegree") + (this.g_limit - this.g_times) + ")";
        }
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registered_wait_srv_local_timeout' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg7");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regTip") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registered_no_more' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        if ('2' == this.product_area)
        {
            tempHtml += "<TR>";
            tempHtml += "<td valign='middle' align='center' height=50><font size='2' color=\"#FF0000\">" + getTagTextFromXmlDoc("regSuccessMsg6") + "</td>";
            tempHtml += "</TR>";
            tempHtml += "<TR>";
            tempHtml += "<TD class='errmsg' align=middle><IMG src='pic/action_ok.gif'></TD>";
            tempHtml += "<td valign='middle' align='center' height=50><font size='2'>" + getTagTextFromXmlDoc("regSuccessMsg5") + "</td>";
            tempHtml += "</TR>";
            tempHtml += "<TR>";
            tempHtml += "<TD align=middle colSpan=2 height=40><input type='button' id='BTN_Submit'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            tempHtml += "<input type='button' id='BTN_Cancel'></TD>";
            tempHtml += "</TR>";
        }
        else
        {
            tempHtml += "<TR>";
            tempHtml += "<TD class='errmsg' align=middle><IMG src='pic/action_ok.gif'></TD>";
            tempHtml += "<td valign='middle' align='center'>" + getTagTextFromXmlDoc("regSuccessMsg4") + "</td>";
            tempHtml += "</TR>";
        }
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_olt_local_timeout' == whichOne)
    {
        tempHtml = "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=middle><IMG src='pic/action_error.gif'></TD>";
        tempHtml += "<TD>" + getTagTextFromXmlDoc("regErrorMsg9");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_wan_local_timeout' == whichOne)
    {
        tempHtml = "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=middle><IMG src='pic/action_error.gif'></TD>";
        tempHtml += "<TD>" + getTagTextFromXmlDoc("regErrorMsg10");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registered_get_srv_error' == whichOne)
    {
        tempHtml = "<TABLE align=center cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=middle><IMG src='pic/action_error.gif'></TD>";
        tempHtml += "<TD>" + getTagTextFromXmlDoc("regErrorMsg12");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_itms_local_timeout' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg11");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_itms_olt_disconnected' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";

        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg11");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registering_itms_wan_disconnected' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg11");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registered_get_srv_local_timeout' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg12");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registered_get_srv_olt_disconnected' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg12");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('registered_get_srv_wan_disconnected' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";
        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg12");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    else if ('register_limit' == whichOne)
    {
        tempHtml = "<TABLE cellSpacing=0 cellPadding=0 width='100%' height='45%' border=0 id='LOID_TB_Status'>";

        tempHtml += "<TR>";
        tempHtml += "<TD class='errmsg' align=center><IMG src='pic/action_error.gif'></TD><TD>";
        tempHtml += getTagTextFromXmlDoc("regErrorMsg13");
        tempHtml += "</TD>";
        tempHtml += "</TR>";
        tempHtml += "<TR><TD align=center colSpan=2 width='100%' height=20><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD></TR>";
        tempHtml += "<TR><TD align=left colSpan=2 height=60></TD></TR>";
        tempHtml += "</TABLE>";
    }
    
    $("#LOID_TB_Status").replaceWith(tempHtml);

    if (('registering_olt' == whichOne) && ('registering_wan' == whichOne) &&
        ('registering_itms' == whichOne) && ('registered_wait_srv' == whichOne) &&
        ('registered_getting_srv' == whichOne) && (('registered_srv_succ' == whichOne) && !(('2' == this.product_area) && (this.register_from_web != 1))))
    {
        this.setProgressBar();
    }
    
    if ('register' == whichOne)
    {
        var shouldJump = this.isOverMax();
        
        if (shouldJump)
        {
            this.replaceTable("register_limit", "");
            return;
        }

        $("#BTN_Submit").val(getTagTextFromXmlDoc("regStartReg1"));
        $("#LOID_TEXT_Loid").focus();

        $("#BTN_Submit").click(function(){currentPageInst.checkAndSubmit();});
        $("#selectClass").change(function(){currentPageInst.selectClassChange(this.value)});

    }
    else if ('registered_no_more' == whichOne)
    {
        if (0 == this.support_card)
        {
            $("#LOID_Reregister").show();
        }
        else
        {
            $("#LOID_Reregister").hide();
        }

        if ('2' == this.product_area)
        {
            $("#BTN_Submit").val(getTagTextFromXmlDoc("backCtx"));

            $("#LOID_BackToLoginPage").hide();

            $("#BTN_Submit").click(function(){currentPageInst.jumpToLoginPage();});
            //暂时放置#selectClass
            $("#selectClass").change(function(){currentPageInst.selectClassChange(this.value)});

        }
    }
    else if (('registering_olt' == whichOne) || ('registering_wan' == whichOne) ||
        ('registering_itms' == whichOne) || ('registered_wait_srv' == whichOne) ||
        ('registered_getting_srv' == whichOne))
    {
//        $("#LOID_Reregister").hide();
        this.setProgressBar();
    }
    else if ('registered_srv_succ' == whichOne)
    {
        if (0 == this.support_card)
        {
            $("#LOID_Reregister").show();
        }
        else
        {
            $("#LOID_Reregister").hide();
        }

        if ('2' == this.product_area)
        {
            if (this.register_from_web != 1)
            {
                $("#BTN_Submit").val(getTagTextFromXmlDoc("backCtx"));
                $("#LOID_BackToLoginPage").hide();
                $("#BTN_Submit").click(function(){currentPageInst.jumpToLoginPage();});
                //暂时放置#selectClass
                $("#selectClass").change(function(){currentPageInst.selectClassChange(this.value)});
            }
            else
            {
                this.setProgressBar();
            }
        }
        else
        {
            this.setProgressBar();
        }
    }

    if ('register' == whichOne)
    {
        this.showReRegButton(false);
    }    
    else if (('register' == whichOne) || ('registering_olt' == whichOne) ||
        ('registering_wan' == whichOne) || ('registering_itms' == whichOne) ||
        ('registered_wait_srv' == whichOne) || ('registered_getting_srv' == whichOne))
    {
        this.showReRegButton(true);
    }
    else
    {
        if ((('2' == this.product_area) || ('1' == this.product_area)) && ('registered_srv_succ' == whichOne))
        {
            this.showReRegButton(false);
        }
        else if (this.g_times >= this.g_limit)
        {
            this.showReRegButton(false);
        }
        else
        {
            this.showReRegButton(true);
        }
    }
}


this.showReRegButton = function(show)
{
    if (show)
    {
        if (0 == this.support_card)
        {
            $("#LOID_Reregister").show();
        }
        else
        {
            $("#LOID_Reregister").hide();
        }
    }
    else
    {
        $("#LOID_Reregister").hide();
    }
}


this.setProgressBar = function()
{
    $("#ps").css("width", this.g_progress);
    $("#bn").empty();
    $("#bn").append(Math.floor(this.g_progress/2)+"%");
    $("#ps").show();
    this.g_progress = this.g_progress + 1;

    if (this.g_progress < this.g_nextProgress)
    {
        
    }
    else
    {
        this.g_progress = this.g_progress - 1;
    }
} 

this.checkAndSubmit = function()
{
    var postData;
    var tempHtml = '';
    jsonObjInit();

    if (!this.checkUserName())
    {
        $("#LOID_TEXT_Loid").val("");
        $("#LOID_TEXT_Loid").focus();
        return ;
    }

    if($("#selectClass").val() == 1){
        if (!this.checkMac())
        {
            $("#LOID_TEXT_Mac").val("");
            $("#LOID_TEXT_Mac").focus();
            return ;
        }
    }

    disableSubmit($("#BTN_Submit"));

    jsonObjPush("action", "register");
    jsonObjPush("broadbandusername", this.encodeUrl($("#LOID_TEXT_Loid").val()));
    jsonObjPush("customerID",this.encodeUrl($("#LOID_TEXT_Mac").val()));
    this.g_curTable = 2;
    jsonObjPush("currPage", this.g_curTable);
    

    postData = jsonObjEnd();

    tempHtml  = "<TABLE cellSpacing=0 cellPadding=0 width='100%' border=0 id='LOID_TB_Status'>";
    tempHtml += "<tr>";
    tempHtml += "<TD class='navigate' colSpan=3  rowSpan=1><div id='bn'></div></TD>";
    tempHtml += "</tr>";
    tempHtml += "<tr>";
    tempHtml += "<TD class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
    tempHtml += "<TD class='navigate' colSpan=1 rowSpan=1 width=200><div id='ps' style='background-color:#FFCC99;width:0px;height:6px;'></div></TD>";
    tempHtml += "<TD class='navigate' colSpan=1 rowSpan=1 width=100></TD>";
    tempHtml += "</tr>";
    tempHtml += "<tr>";
    tempHtml += "<TD class='navigate' colSpan=3 rowSpan=1 >";
    tempHtml += getTagTextFromXmlDoc("regRegisting");
    tempHtml += "</TD>";
    tempHtml += "</tr>";
    tempHtml += "<TR>";
    tempHtml += "<TD><font size='2'>" + getTagTextFromXmlDoc("regFoot") + "</TD>";
    tempHtml += "</TR>";
    tempHtml += "<TR>";
    tempHtml += "</TR>";
    tempHtml += "</table>";
    $("#LOID_TB_Status").replaceWith(tempHtml);
    this.showReRegButton(true);
    $("#LOID_BackToLoginPage").hide();

    this.g_progress = parseInt('2', 10);
    this.setProgressBar();
    setCfg("regist_form_web.cmd", postData, updateAllCfg);

    this.register_from_web = 1;
}


this.checkUserName = function()
{
    if (true == this.illegalCt($("#LOID_TEXT_Loid").val()))
    {
        alert($("#LOID_TEXT_Loid").val() + getTagTextFromXmlDoc("loidWarn"));
        return false;
    }
    else if (("" == $("#LOID_TEXT_Loid").val()))
    {
        alert(getTagTextFromXmlDoc("regWarn1"));
        return false;
    }
    else if (1 == this.checkCHValue($("#LOID_TEXT_Loid").val()))
    {
        alert(getTagTextFromXmlDoc("regWarn2"));
        return false;
    }
    else if (24 < $("#LOID_TEXT_Loid").val().length)
    {
        alert(getTagTextFromXmlDoc("regWarn4"));
        return false;
    }
    else
    {
        return true;
    }
}

this.checkMac = function()
{
    if (("" == $("#LOID_TEXT_Mac").val()))
    {
        alert(getTagTextFromXmlDoc("regWarn3"));
        return false;
    }
    else if (true == this.illegalCt($("#LOID_TEXT_Mac").val()))
    {
        alert($("#LOID_TEXT_Mac").val() + getTagTextFromXmlDoc("loidWarn"));
        return false;
    }
    
    else if (1 == this.checkCHValue($("#LOID_TEXT_Mac").val()))
    {
        alert(getTagTextFromXmlDoc("regWarn5"));
        return false;
    }
    /*else if (12 < $("#LOID_TEXT_Mac").val().length)
    {
        alert(getTagTextFromXmlDoc("regWarn5"));
        return false;
    }*/
    else
    {
        return true;
    }
}


this.isOverMax = function()
{
    if((this.g_times != 0))
    {
        if(this.g_times >= this.g_limit)
        {
            return true;
        }
    }
    
    return false;
}

this.decideShowWhichTable = function(jsonObj)
{
    var whichOne;
    this.g_times = parseInt(jsonObj.times, 10);
    this.g_limit = parseInt(jsonObj.limit, 10);
    if (this.g_progress < parseInt(jsonObj.width, 10))
    {
        this.g_progress = parseInt(jsonObj.width, 10);
    }
    this.g_nextProgress = parseInt(jsonObj.nextWidth, 10);
    this.register_total_time = parseInt(jsonObj.regTotalTime, 10);
    this.product_area = jsonObj.productlocation;
    this.support_card = parseInt(jsonObj.supportCard, 10);

    if ("EOC" == jsonObj.ponType)
    {
        $("#mainProductType").empty();
        $("#mainProductType").append("EOC");
    }
    else if ("GPON" == jsonObj.ponType)
    {
        $("#mainProductType").empty();
        $("#mainProductType").append("E8-C-GPON");
    }
    else if ("EPON" == jsonObj.ponType)
    {
        $("#mainProductType").empty();
        $("#mainProductType").append("E8-C-EPON");
    }
    else
    {
        $("#mainProductType").append(" ");
    }

    if ('1' == jsonObj.succPage)
    {
        whichOne = 'register';
    }
    else if (('3' == jsonObj.succPage) && ('0' == jsonObj.errCode))
    {
        whichOne = 'registering_olt';
    }
    else if (('3' == jsonObj.succPage) && ('1' == jsonObj.errCode || '2' == jsonObj.errCode))
    {
        whichOne = 'registering_olt_local_timeout';
    }
    else if (('4' == jsonObj.succPage) && ('0' == jsonObj.errCode))
    {
        whichOne = 'registering_wan';
    }
    else if (('4' == jsonObj.succPage) && ('1' == jsonObj.errCode || '2' == jsonObj.errCode))
    {
        whichOne = 'registering_wan_local_timeout';
    }
    else if (('6' == jsonObj.succPage) && ('0' == jsonObj.errCode))
    {
        whichOne = 'registering_itms';
    }
    else if (('6' == jsonObj.succPage) && ('1' == jsonObj.errCode || '2' == jsonObj.errCode))
    {
        whichOne = 'registering_itms_local_timeout';
    }
    else if (('6' == jsonObj.succPage) && ('7' == jsonObj.errCode))
    {
        whichOne = 'registering_itms_olt_disconnected';
    }
    else if (('6' == jsonObj.succPage) && ('8' == jsonObj.errCode))
    {
        whichOne = 'registering_itms_wan_disconnected';
    }
    else if (('6' == jsonObj.succPage) && ('4' == jsonObj.errCode))
    {
        whichOne = 'registering_itms_loid_error';
    }
    else if (('6' == jsonObj.succPage) && ('3' == jsonObj.errCode))
    {
        whichOne = 'registering_itms_pwd_error';
    }
    else if (('6' == jsonObj.succPage) && ('5' == jsonObj.errCode))
    {
        whichOne = 'registering_itms_loidpwd_error';
    }
    else if ('10' == jsonObj.succPage)
    {
        whichOne = 'registered_no_more';
    }
	else if (('7' == jsonObj.succPage) && ('1' == jsonObj.errCode || '2' == jsonObj.errCode))
	{
		whichOne = 'registered_wait_srv_local_timeout';
	}
    else if ('7' == jsonObj.succPage)
    {
        whichOne = 'registered_wait_srv';
    }
    else if (('8' == jsonObj.succPage) && ('0' == jsonObj.errCode))
    {
        whichOne = 'registered_getting_srv';
        if (0 == parseInt(jsonObj.srvNum, 10))
        {
            this.g_nextProgress = this.g_nextProgress + 1;
        }
    }
    else if (('8' == jsonObj.succPage) && ('6' == jsonObj.errCode))
    {
        whichOne = 'registered_get_srv_error';
    }
    else if (('8' == jsonObj.succPage) && ('1' == jsonObj.errCode || '2' == jsonObj.errCode))
    {
        whichOne = 'registered_get_srv_local_timeout';
    }
    else if (('8' == jsonObj.succPage) && ('7' == jsonObj.errCode))
    {
        whichOne = 'registered_get_srv_olt_disconnected';
    }
    else if (('8' == jsonObj.succPage) && ('8' == jsonObj.errCode))
    {
        whichOne = 'registered_get_srv_wan_disconnected';
    }
    else if ('9' == jsonObj.succPage)
    {
        whichOne = 'registered_srv_succ';
        this.g_nextProgress = this.g_nextProgress + 1;
    }

    this.g_curTable = jsonObj.succPage;
    this.replaceTable(whichOne, jsonObj);
 
    if ('2' == this.product_area)
    {
        if (('registering_olt' == whichOne) || ('registering_wan' == whichOne) ||
            ('registering_itms' == whichOne) || ('registered_wait_srv' == whichOne) ||
            ('registered_getting_srv' == whichOne) || (2 == this.g_curTable))
        {
            this.g_timeDelay = setTimeout("this.updateAllCfg()",3000);
            $("#LOID_BackToLoginPage").show();
        }
        else
        {
            $("#LOID_BackToLoginPage").show();
        }
    }
    else if ('1' == this.product_area)
    {
        if (('registering_olt' == whichOne) || ('registering_wan' == whichOne) ||
            ('registering_itms' == whichOne) || ('registered_wait_srv' == whichOne) ||
            ('registered_getting_srv' == whichOne) || (2 == this.g_curTable))
        {
            this.g_timeDelay = setTimeout("this.updateAllCfg()",3000);
            $("#LOID_BackToLoginPage").hide();
        }
        else
        {
            $("#LOID_BackToLoginPage").show();
        }
    }
    else
    {
        if (('registering_olt' == whichOne) || ('registering_wan' == whichOne) ||
            ('registering_itms' == whichOne) || ('registered_wait_srv' == whichOne) ||
            ('registered_getting_srv' == whichOne) || (2 == this.g_curTable))
        {
            this.g_timeDelay = setTimeout("this.updateAllCfg()",3000);
            $("#LOID_BackToLoginPage").hide();
        }
        else
        {
            $("#LOID_BackToLoginPage").show();
        }
    }
}

this.registerEvent = function()
{


}

this.selectClassChange=function(){
    if($("#selectClass").val() == 1){
        $(".OldMac").show();
    }else{
        $(".OldMac").hide();
    }
}


// JavaScript Document

}  // End Page

function updateAllCfg()
{
    getCfg("registGet.json", {"currPage":currentPageInst.g_curTable}, decideShowWhichTable);
}

function decideShowWhichTable(jsonObj)
{
    currentPageInst.decideShowWhichTable(jsonObj);
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
    this.basicClassFile = "./loid_register.js";
    this.customLv1File = "./loid_register_customlv1.js";
    this.customLv2File = "./loid_register_customlv2.js";
    this.customLv3File = "./loid_register_customlv3.js";
}

