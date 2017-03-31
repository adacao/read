Page = function()
{

this.ntpServers = new Array();

this.ntpServers[0] = 'clock.fmt.he.net';
this.ntpServers[1] = 'clock.nyc.he.net';
this.ntpServers[2] = 'clock.sjc.he.net';
this.ntpServers[3] = 'clock.via.net';
this.ntpServers[4] = 'ntp1.tummy.com';
this.ntpServers[5] = 'time.cachenetworks.com';
this.ntpServers[6] = 'time.nist.gov';
this.ntpServers[7] = 'time.windows.com';

this.timeZones = new Array();
 
this.timeZones[0] = '(GMT-12:00) International Date Line West';
this.timeZones[1] = '(GMT-11:00) Midway Island, Samoa';
this.timeZones[2] = '(GMT-10:00) Hawaii';
this.timeZones[3] = '(GMT-09:00) Alaska';
this.timeZones[4] = '(GMT-08:00) Pacific Time, Tijuana';
this.timeZones[5] = '(GMT-07:00) Arizona, Mazatlan';
this.timeZones[6] = '(GMT-07:00) Chihuahua, La Paz';
this.timeZones[7] = '(GMT-07:00) Mountain Time';
this.timeZones[8] = '(GMT-06:00) Central America';
this.timeZones[9] = '(GMT-06:00) Central Time';
this.timeZones[10] = '(GMT-06:00) Guadalajara, Mexico City, Monterrey';
this.timeZones[11] = '(GMT-06:00) Saskatchewan';
this.timeZones[12] = '(GMT-05:00) Bogota, Lima, Quito';
this.timeZones[13] = '(GMT-05:00) Eastern Time';
this.timeZones[14] = '(GMT-05:00) Indiana';
this.timeZones[15] = '(GMT-04:00) Atlantic Time';
this.timeZones[16] = '(GMT-04:00) Caracas, La Paz';
this.timeZones[17] = '(GMT-04:00) Santiago';
this.timeZones[18] = '(GMT-03:30) Newfoundland';
this.timeZones[19] = '(GMT-03:00) Brasilia';
this.timeZones[20] = '(GMT-03:00) Buenos Aires, Georgetown';
this.timeZones[21] = '(GMT-03:00) Greenland';
this.timeZones[22] = '(GMT-02:00) Mid-Atlantic';
this.timeZones[23] = '(GMT-01:00) Azores';
this.timeZones[24] = '(GMT-01:00) Cape Verde Is.';
this.timeZones[25] = '(GMT-00:00) Casablanca, Monrovia';
this.timeZones[26] = '(GMT-00:00) Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London';
this.timeZones[27] = '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna';
this.timeZones[28] = '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague';
this.timeZones[29] = '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris';
this.timeZones[30] = '(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb';
this.timeZones[31] = '(GMT+01:00) West Central Africa';
this.timeZones[32] = '(GMT+02:00) Athens, Istanbul, Minsk';
this.timeZones[33] = '(GMT+02:00) Bucharest';
this.timeZones[34] = '(GMT+02:00) Cairo';
this.timeZones[35] = '(GMT+02:00) Harare, Pretoria';
this.timeZones[36] = '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius';
this.timeZones[37] = '(GMT+02:00) Jerusalem';
this.timeZones[38] = '(GMT+03:00) Baghdad';
this.timeZones[39] = '(GMT+03:00) Kuwait, Riyadh';
this.timeZones[40] = '(GMT+03:00) Moscow, St. Petersburg, Volgograd';
this.timeZones[41] = '(GMT+03:00) Nairobi';
this.timeZones[42] = '(GMT+03:30) Tehran';
this.timeZones[43] = '(GMT+04:00) Abu Dhabi, Muscat';
this.timeZones[44] = '(GMT+04:00) Baku, Tbilisi, Yerevan';
this.timeZones[45] = '(GMT+04:30) Kabul';
this.timeZones[46] = '(GMT+05:00) Ekaterinburg';
this.timeZones[47] = '(GMT+05:00) Islamabad, Karachi, Tashkent';
this.timeZones[48] = '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi';
this.timeZones[49] = '(GMT+05:45) Kathmandu';
this.timeZones[50] = '(GMT+06:00) Almaty, Novosibirsk';
this.timeZones[51] = '(GMT+06:00) Astana, Dhaka';
this.timeZones[52] = '(GMT+06:00) Sri Jayawardenepura';
this.timeZones[53] = '(GMT+06:30) Rangoon';
this.timeZones[54] = '(GMT+07:00) Bangkok, Hanoi, Jakarta';
this.timeZones[55] = '(GMT+07:00) Krasnoyarsk';
this.timeZones[56] = '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi';
this.timeZones[57] = '(GMT+08:00) Irkutsk, Ulaan Bataar';
this.timeZones[58] = '(GMT+08:00) Kuala Lumpur, Singapore';
this.timeZones[59] = '(GMT+08:00) Perth';
this.timeZones[60] = '(GMT+08:00) Taipei';
this.timeZones[61] = '(GMT+09:00) Osaka, Sapporo, Tokyo';
this.timeZones[62] = '(GMT+09:00) Seoul';
this.timeZones[63] = '(GMT+09:00) Yakutsk';
this.timeZones[64] = '(GMT+09:30) Adelaide';
this.timeZones[65] = '(GMT+09:30) Darwin';
this.timeZones[66] = '(GMT+10:00) Brisbane';
this.timeZones[67] = '(GMT+10:00) Canberra, Melbourne, Sydney';
this.timeZones[68] = '(GMT+10:00) Guam, Port Moresby';
this.timeZones[69] = '(GMT+10:00) Hobart';
this.timeZones[70] = '(GMT+10:00) Vladivostok';
this.timeZones[71] = '(GMT+11:00) Magadan';
this.timeZones[72] = '(GMT+11:00) Solomon Is., New Caledonia';
this.timeZones[73] = '(GMT+12:00) Auckland, Wellington';
this.timeZones[74] = '(GMT+12:00) Fiji, Kamchatka, Marshall Is.';

this.len = this.ntpServers.length;
this.product;
this.supportvoip;

this.servers = new Array();  
this.servers[1] = '';
this.servers[2] = '';
this.servers[3] = '';
this.servers[4] = '';
this.servers[5] = '';

this.clearIntervalFun=null;
/* one-one correspondence to this.ntpServers whether to be selected */
this.sel_ntpServer = new Array();
this.sel_ntpServer[0] = 0;
this.sel_ntpServer[1] = 0;
this.sel_ntpServer[2] = 0;
this.sel_ntpServer[3] = 0;
this.sel_ntpServer[4] = 0;
this.sel_ntpServer[5] = 0;
this.sel_ntpServer[6] = 0;
this.sel_ntpServer[7] = 0;

this.isValidSetLocalTimeInput= function(content)
{
   var i = 0;   
   var strr = "^[0-9]{4}\.(0?[1-9]|1[0-2])\.([0-2]?[0-9]|3[01])-([0-1]?[0-9]|[2][0-3])(:[0-5]?[0-9]){2}$";
   var patt1 = new RegExp(strr);
   var result = patt1.test(content);    
   return result;
     for ( i = 0; i < content.length; i++ ) {
      if ( isSetLocalTimeUnsafe(content.charAt(i)) == true )
         return false;
   }

   return true;
}


this.initHtmlText= function()
{
    $("#MENU_STS_NET_CON").append(getTagTextFromXmlDoc("menuNetSntpSystem"));
    $("#MENU_STS_NET6_CO").append(getTagTextFromXmlDoc("menuNetSntpSame"));
    $("#timezone").append(getTagTextFromXmlDoc("sntpZom"));
    $("#refresh").append(getTagTextFromXmlDoc("freshSecCtx"));
    $("#refreshbtn").val(getTagTextFromXmlDoc("freshSecCtx"));
    $("#SNTP_EnableDesc").append(getTagTextFromXmlDoc("sntpNTP"));
    $("#SNTP_WanType").append(getTagTextFromXmlDoc("sntpType"));
    $("#writeWanType").append(getTagTextFromXmlDoc("sntpchangeNTP"));
    $("#SNTP_CurrentTime").append(getTagTextFromXmlDoc("sntpCurrentTime")+ ":");
    $("#SNTP_WanTypestandby").append(getTagTextFromXmlDoc("sntpTypestandby"));
    $("#writeWanTypestandby").append(getTagTextFromXmlDoc("sntpchangeNTP"));
    //$("#currentTimeZone").append(getTagTextFromXmlDoc("sntpCurrentTimeZone")+ ":");
    // $("#setTime").append(getTagTextFromXmlDoc("sntpSetTime")+ ":");
    //$("#format").append(getTagTextFromXmlDoc("sntpFormat")+ ":");
    $("#SNTP_Interval").append(getTagTextFromXmlDoc("sntpInterval")+ ":");
    $("#SNTP_Server1").append(getTagTextFromXmlDoc("sntpServer1")+ ":");
    $("#SNTP_Server2").append(getTagTextFromXmlDoc("sntpServer2")+ ":");
    $("#SNTP_Server3").append(getTagTextFromXmlDoc("sntpServer3")+ ":"); 
    $("#SNTP_Server4").append(getTagTextFromXmlDoc("sntpServer4")+ ":");
    $("#SNTP_Server5").append(getTagTextFromXmlDoc("sntpServer5")+ ":");
    $("#SNTP_TimeZone").append(getTagTextFromXmlDoc("sntpZom")+ ":");    
    $("#BTN_Apply").val(getTagTextFromXmlDoc("saveApplyCtx"));
    $("#BTN_cancle").val(getTagTextFromXmlDoc("cancelCtx"));
    
    this.initSelect();
}


this.initSelect= function()
{
    var i;
    
    $(".server").append("<option value=0>None</option>");   
    for (i=0; i< this.len; i++)
    {
        var j= i+1;
        $(".server").append("<option value="+j+">" + this.ntpServers[i] + "</option>");
    }
    
    j= i+1;
    $(".server").append("<option value="+j+">"+"Other</option>");
    
    for (i=0; i< this.timeZones.length; i++)
    {
        $("#SNTP_SEL_CboTimeZone").append("<option value="+i+">" + this.timeZones[i] + "</option>");
    }
}


/* init global this.servers */
this.initServers= function()
{
    var i;
    
    for (i = 1; i <= 5; i++)
    {
        this.servers[i] = "";
    }

    for (i = 0; i < 8; i++)
    {
        this.sel_ntpServer[i] = 0;
    }

}


this.enableSntp= function()
{
    if ($("#SNTP_CHK_Enabled").attr("checked")== 'checked')
    {
        $("#SNTP_DIV_Config").show();
        //$("#SNTP_TEXT_Interval").attr("disabled", "disabled");
        //$("#BTN_Apply").attr("disabled", "disabled");
    }
    else
    {
        $("#SNTP_DIV_Config").hide();
        //$("#SNTP_TEXT_Interval").removeAttr("disabled");
        //$("#BTN_Apply").removeAttr("disabled");
    }
}

this.isChina= function(s)
{  
    var  index = escape(s).indexOf("%u");  
    if(index < 0)
    {
        return false;
    }
    else
    {
        return true
    }  
} 

this.checkAddr= function(elm, i)
{
    var j = 1;

    if (this.isChina(elm))
    {
        alert(getTagTextFromXmlDoc("sntpWarnChinese"));
        return 1;
    }
    
    if (!isValidIpAddress(elm))
    {
        if (!isValidDomain(elm))
        {
            alert(getTagTextFromXmlDoc("sntpWarnInvalid"));
            return 1;
        }
    }
    
    for (j = 1; j <= 5; j++)
    {
        if (i != j)
        {
            if (this.servers[j] == elm)
            {
                alert(getTagTextFromXmlDoc("sntpServerRepeat"));
                return 1;
            }
        }
    }
    
    this.servers[i] = elm;
    return 0;
}   


this.judgeSameNtpSever= function(value)
{
    var i = 0;
    var ret = -1;/* -1->not found, 0->set error,1->ok */

    for (i = 0; i < this.len; i ++)
    {
        if (value == this.ntpServers[i])
        {
            ret = 0;
            
            if (this.sel_ntpServer[i] == 0)
            {
                this.sel_ntpServer[i] = 1;
                ret = 1;
            }
            
            break;
        }
    }

    return ret;
}

this.btncancle = function(){
    location.reload();
}
this.btnApply= function()
{
    var postData;
    var ret;
    var len1= this.len+1;

    jsonObjInit();
    this.initServers();

    if ($("#SNTP_CHK_Enabled").attr("checked")== 'checked')
    {
        jsonObjPush("enable", "1");
    }
    else
    {
        jsonObjPush("enable", "0");
    }
    
    //jsonObjPush("interval", "86400");

    if (this.product == "CT_E8_B")
    {
        jsonObjPush("serverType", $("#SNTP_SEL_WanIfName").val());
    }
    else if (this.product == "CT_E8_C")
    {
        jsonObjPush("serverType", $("#SNTP_SEL_WanIfName").val());
    }
    
    /*if ($("#SNTP_TEXT_Server1").val() == len1)
    {   
        if ($("#SNTP_TEXT_ServerOther1").val()=="")
        {
            alert(getTagTextFromXmlDoc("OtherServerWarn1"));
            return;
        }

        if (this.checkAddr($("#SNTP_TEXT_ServerOther1").val(), 1))
        {
            $("#SNTP_TEXT_ServerOther1").val(this.servers[1]);
            return;
        }
        
        jsonObjPush("server1", $("#SNTP_TEXT_ServerOther1").val());       
    }
    else if ($("#SNTP_TEXT_Server1").val()== "0")
    {
        jsonObjPush("server1", "");
    }
    else
    {
        var val = $("#SNTP_TEXT_Server1").find("option:selected").text();
        
        if (0 == this.judgeSameNtpSever(val))
        {
            alert(getTagTextFromXmlDoc("sntpServerRepeat"));
            return;
        }

        jsonObjPush("server1", $("#SNTP_TEXT_Server1").find("option:selected").text());
    }*/
    
    
    /*if ($("#SNTP_TEXT_Server2").val() == len1)
    {
        if ($("#SNTP_TEXT_ServerOther2").val()=="")
        {
            alert(getTagTextFromXmlDoc("OtherServerWarn2"));
            return;
        }
        
        if (this.checkAddr($("#SNTP_TEXT_ServerOther2").val(), 2))
        {
            $("#SNTP_TEXT_ServerOther2").val(this.servers[2]);
            return;
        }
        jsonObjPush("server2", $("#SNTP_TEXT_ServerOther2").val());

    }
    else if ($("#SNTP_TEXT_Server2").val()== "0")
    {
        jsonObjPush("server2", "");
    }
    else
    {
        var val = $("#SNTP_TEXT_Server2").find("option:selected").text();
        
        if (0 == this.judgeSameNtpSever(val))
        {
            alert(getTagTextFromXmlDoc("sntpServerRepeat"));
            return;
        }
        
        jsonObjPush("server2", val);

    }*/
	jsonObjPush("server1", $("#SNTP_TEXT_Server1").val());
	jsonObjPush("server2", $("#SNTP_TEXT_Server2").val());
	
    if ($("#SNTP_SEL_Server3").val() == len1)
    {
        if ($("#SNTP_TEXT_ServerOther3").val()=="")
        {
            alert(getTagTextFromXmlDoc("OtherServerWarn3"));
            return;
        }
        
        if (this.checkAddr($("#SNTP_TEXT_ServerOther3").val(), 3))
        {
            $("#SNTP_TEXT_ServerOther3").val(this.servers[3]);
            return;
        }
        
        jsonObjPush("server3", $("#SNTP_TEXT_ServerOther3").val());
    }
    else if ($("#SNTP_SEL_Server3").val()== "0")
    {
        jsonObjPush("server3", "");
    }
    else
    {
        var val = $("#SNTP_SEL_Server3").find("option:selected").text();
        
        if (0 == this.judgeSameNtpSever(val))
        {
            alert(getTagTextFromXmlDoc("sntpServerRepeat"));
            return;
        }
    
        jsonObjPush("server3", $("#SNTP_SEL_Server3").find("option:selected").text());

    }
    
    if ($("#SNTP_SEL_Server4").val() == len1)
    {
        if ($("#SNTP_TEXT_ServerOther4").val()=="")
        {
            alert(getTagTextFromXmlDoc("OtherServerWarn4"));
            return;
        }
        
        if (this.checkAddr($("#SNTP_TEXT_ServerOther4").val(), 4))
        {
            $("#SNTP_TEXT_ServerOther4").val(this.servers[4]);
            return;
        }
        
        jsonObjPush("server4", $("#SNTP_TEXT_ServerOther4").val());
    }
    else if ($("#SNTP_SEL_Server4").val()== "0")
    {
        jsonObjPush("server4", "");
    }
    else
    {
        var val = $("#SNTP_SEL_Server4").find("option:selected").text();
        
        if (0 == this.judgeSameNtpSever(val))
        {
            alert(getTagTextFromXmlDoc("sntpServerRepeat"));
            return;
        }
    
        jsonObjPush("server4", $("#SNTP_SEL_Server4").find("option:selected").text());

    }
    
    if ($("#SNTP_SEL_Server5").val() == len1)
    {
        if ($("#SNTP_TEXT_ServerOther5").val()=="")
        {
            alert(getTagTextFromXmlDoc("OtherServerWarn5"));
            return;
        }
        
        if (this.checkAddr($("#SNTP_TEXT_ServerOther5").val(), 5))
        {
            $("#SNTP_TEXT_ServerOther5").val(this.servers[5]);
            return;
        }
        
        jsonObjPush("server5", $("#SNTP_TEXT_ServerOther5").val());
    }
    else if ($("#SNTP_SEL_Server5").val()== "0")
    {
        jsonObjPush("server5", "");
    }
    else
    {
        var val = $("#SNTP_SEL_Server5").find("option:selected").text();
        
        if (0 == this.judgeSameNtpSever(val))
        {
            alert(getTagTextFromXmlDoc("sntpServerRepeat"));
            return;
        }
   
        jsonObjPush("server5", $("#SNTP_SEL_Server5").find("option:selected").text());

    }
    
    jsonObjPush("daylightSavingsUsed","0");

    ret = $("#SNTP_SEL_CboTimeZone").val();
    
    jsonObjPush("timeZone",this.getTimeZoneOffset(ret));
    jsonObjPush("timeZoneName", this.getTimeZoneName(ret));
    
    postData = jsonObjEnd();
    setCfg("sntpCfgSet.cmd", postData, updateAllCfg);
    
    $("#SNTP_TEXT_Interval").empty();
}

this.changeSelect1= function()
{
    if ($("#SNTP_TEXT_Server1").val() == (this.len + 1))
    {
        $("#SNTP_TEXT_ServerOther1").attr("disabled", false);         
    }
    else
    {
        $("#SNTP_TEXT_ServerOther1").val("");
        $("#SNTP_TEXT_ServerOther1").attr("disabled", true);
    }
}

this.changeSelect2= function()
{
    if ($("#SNTP_TEXT_Server2").val() == (this.len + 1))
    {
        $("#SNTP_TEXT_ServerOther2").attr("disabled", false);
    }
    else
    {
        $("#SNTP_TEXT_ServerOther2").val("");
        $("#SNTP_TEXT_ServerOther2").attr("disabled", true);
    }
}

this.changeSelect3= function()
{
    if ($("#SNTP_SEL_Server3").val() == (this.len + 1))
    {
        $("#SNTP_TEXT_ServerOther3").attr("disabled", false);     
    }
    else
    {
        $("#SNTP_TEXT_ServerOther3").val("");
        $("#SNTP_TEXT_ServerOther3").attr("disabled", true);
    }
}

this.changeSelect4= function()
{
    if ($("#SNTP_SEL_Server4").val() == (this.len + 1))
    {
        $("#SNTP_TEXT_ServerOther4").attr("disabled", false);
    }
    else
    {
        $("#SNTP_TEXT_ServerOther4").val("");
        $("#SNTP_TEXT_ServerOther4").attr("disabled", true);
    }
}

this.changeSelect5= function()
{
    if ($("#SNTP_SEL_Server5").val() == (this.len + 1))
    {
        $("#SNTP_TEXT_ServerOther5").attr("disabled", false);
    }
    else
    {
        $("#SNTP_TEXT_ServerOther5").val("");
        $("#SNTP_TEXT_ServerOther5").attr("disabled", true);
    }
}




this.getTimeZoneName= function(idx) 
{
    var str = this.timeZones[idx];
    var ret = '';

    ret = str.substr(12);

    return ret;
}
 
this.getTimeZoneOffset= function(idx) 
{
    var str = this.timeZones[idx];
    var ret = '';

    if (idx != 25 && idx != 26)
    {
        ret = str.substr(4, 6);
    }

    return ret;
}

this.getTimeZoneIndex= function(timeZoneName) 
{
    var i = 0, ret = 4;  // default to Pacific time

    for (var i = 0; i < this.timeZones.length; i++) 
    {
        if (this.timeZones[i].search(timeZoneName) != -1)
        {
            break;
        }
    }

    if (i < this.timeZones.length)
    {
        ret = i;
    }
    
    return ret;
}

this.appenda= function(ntp1)
{
    var i = 0;
    var found = false;
    
    if (ntp1 == "")
    {
        return i;
    }
    
    for (i = 0; i < this.len; i++) 
    {
        if(ntp1 == this.ntpServers[i]) 
        {
            found = true;
            break;
        }
    }

    if (found)
    {
        return ++i; 
    }
    else
    {
        return (++i);
    }   
}


this.updateSntp= function(jsonObj)
{   
    var i = 0;
    var len = this.ntpServers.length;
    var ret;
    
    this.product = jsonObj.product;
    this.supportvoip = jsonObj.supportvoip;
    
    if ('EOC' == this.product)
    {
        this.product = 'CT_E8_B';
    }
    
    $("#SNTP_TEXT_Interval").val(jsonObj.interval);

    /*i= this.appenda(jsonObj.server1);
    
    if (i <= this.len)
    {
        $("#SNTP_TEXT_Server1").val(i);
        $("#SNTP_TEXT_ServerOther1").attr("disabled", true);
    }
    else
    {
        $("#SNTP_TEXT_Server1").val(i);
        $("#SNTP_TEXT_ServerOther1").attr("disabled", false);
        $("#SNTP_TEXT_ServerOther1").val(jsonObj.server1);
    }
        
    i= this.appenda(jsonObj.server2);
    if (i <= this.len)
    {
        $("#SNTP_TEXT_Server2").val(i);
        $("#SNTP_TEXT_ServerOther2").attr("disabled", true);
    }
    else
    {
        $("#SNTP_TEXT_Server2").val(i);
        $("#SNTP_TEXT_ServerOther2").attr("disabled", false);
        $("#SNTP_TEXT_ServerOther2").val(jsonObj.server2);
    }
    */
    $("#SNTP_TEXT_Server1").val(jsonObj.server1);
    $("#SNTP_TEXT_Server2").val(jsonObj.server2);

    i= this.appenda(jsonObj.server3);
    if (i <= this.len)
    {
        $("#SNTP_SEL_Server3").val(i);
        $("#SNTP_TEXT_ServerOther3").attr("disabled", true);
    }
    else 
    {
        $("#SNTP_SEL_Server3").val(i);
        $("#SNTP_TEXT_ServerOther3").attr("disabled", false);
        $("#SNTP_TEXT_ServerOther3").val(jsonObj.server3);
    }
    
    i= this.appenda(jsonObj.server4);
    if (i <= this.len)
    {
        $("#SNTP_TEXT_ServerOther4").attr("disabled", true);
        $("#SNTP_SEL_Server4").val(i);  
    }
    else 
    {
        $("#SNTP_SEL_Server4").val(i);
        $("#SNTP_TEXT_ServerOther4").attr("disabled", false);
        $("#SNTP_TEXT_ServerOther4").val(jsonObj.server4);
    }
    
    i= this.appenda(jsonObj.server5);
    if (i <= this.len)
    {
        $("#SNTP_TEXT_ServerOther5").attr("disabled", true);
        $("#SNTP_SEL_Server5").val(i);  
    }
    else 
    {
        $("#SNTP_TEXT_ServerOther5").attr("disabled", false);
        $("#SNTP_SEL_Server5").val(i);
        $("#SNTP_TEXT_ServerOther5").val(jsonObj.server5);
    }
    
    ret = this.getTimeZoneIndex(jsonObj.timeZoneName);   
    $("#SNTP_SEL_CboTimeZone").val(ret);
    
    $("#SNTP_SEL_WanIfName").empty();
    $("#SNTP_SEL_WanIfNamestandby").empty();
    for (i=0; i< 4; i++)
    {
        var j = i+1;
        if (this.product == "CT_E8_B" || this.supportvoip == "0")
        {
            if (1 == i) 
            {
                continue;
            }
            
            $("#SNTP_SEL_WanIfName").append("<option value="+i+">" + getTagTextFromXmlDoc("sntpType"+ j) + "</option>");
            $("#SNTP_SEL_WanIfNamestandby").append("<option value="+i+">" + getTagTextFromXmlDoc("sntpType"+ j) + "</option>");

        }
        else if (this.product == "CT_E8_C")
        {
            $("#SNTP_SEL_WanIfName").append("<option value="+i+">" + getTagTextFromXmlDoc("sntpType"+ j) + "</option>");
        }
    }

    setSelectVal($("#SNTP_SEL_WanIfName"), jsonObj.serverType);
}


this.updateSntpCfg= function(jsonObj)
{
    if (1 == jsonObj.enable)
    {
        $("#SNTP_DIV_Config").show();
        $("#SNTP_CHK_Enabled").attr("checked", 'checked');
        //$("#SNTP_TEXT_Interval").attr("disabled", "disabled");
    }
    else
    {
        $("#SNTP_CHK_Enabled").attr("checked", undefined);
        $("#SNTP_DIV_Config").hide();
        //$("#SNTP_TEXT_Interval").removeAttr("disabled");
    }
    
    this.updateSntp(jsonObj);
    this.updateCurrentTimeDate(jsonObj);
}


this.updateCurrentTimeDate= function(jsonObj)
{
    $("#SNTP_CurrentTimeDate").empty();
    //$("#currentTimeZoneDate").empty();
    
    $("#SNTP_CurrentTimeDate").append(jsonObj.currentLocalTime);
    //$("#currentTimeZoneDate").append(this.timeZones[$("#SNTP_SEL_CboTimeZone").val()]);
}




this.setTimeRefresh= function()
{
    if(!this.clearIntervalFun)
        this.clearIntervalFun=setInterval(updateCurrentTimeCfg,1000);
}

this.registerEvent= function()
{
    currentPageInst.setTimeRefresh();
	
    $("#SNTP_CHK_Enabled").click(function(){
        currentPageInst.enableSntp();
    });

    $("#BTN_Apply").click(function(){
        currentPageInst.btnApply();
    });
    $("#BTN_cancle").click(function(){
        currentPageInst.btncancle();
    });

    $("#SNTP_TEXT_Server1").change(function(){
        currentPageInst.changeSelect1();
    });
    
    $("#SNTP_TEXT_Server2").change(function(){
        currentPageInst.changeSelect2();
    });
    
    $("#SNTP_SEL_Server3").change(function(){
        currentPageInst.changeSelect3();
    });
    
    $("#SNTP_SEL_Server4").change(function(){
        currentPageInst.changeSelect4();
    });
    
    $("#SNTP_SEL_Server5").change(function(){
        currentPageInst.changeSelect5();
    }); 
    
    //$("#BTN_Apply").click(function(){currentPageInst.saveCurrentTime();});
    //$("#SNTP_TEXT_Interval").change(function(){currentPageInst.checkTime(this);});
}

this.checkTime= function(elm)
{
    if ('' == elm.value)
    {
        warnMsgShow(elm, getTagTextFromXmlDoc("OtherServerWarn6") + "!");
    }
    else if (!this.isValidSetLocalTimeInput(elm.value))
    {
        warnMsgShow(elm, getTagTextFromXmlDoc("OtherServerWarn7") + "!");
    }
    else
    {
        warnMsgHide(elm);
    }
}

this.saveCurrentTime= function()
{
    var postData;
    jsonObjInit();

    if (!this.checkInput())
    {
        return;
    }
    
    disableSubmit($("#BTN_Apply"));
    
    jsonObjPush("localCurrentTime", $("#SNTP_TEXT_Interval").val());
    
    postData = jsonObjEnd();
    setCfg("sntpLocalTimeSet.json", postData, updateAllCfg);
    
    $("#SNTP_TEXT_Interval").empty();
}

this.checkInput= function()
{
    var objArray = new Array();

    if ("checked" != $("#SNTP_CHK_Enabled").attr("checked"))
    {
        objArray.push($("#SNTP_TEXT_Interval"));
    }
    
    if (!checkValid(null, objArray))
    {
        return false;
    }
    else
    {
        return true;
    }
}


}  // End Page


function updateSntpCfg(jsonObj)
{
    currentPageInst.updateSntpCfg(jsonObj);
}

function updateAllCfg()
{
    getCfg("sntpCfgGet.json", "", updateSntpCfg);
}

function updateCurrentTimeDate(jsonObj)
{
    currentPageInst.updateCurrentTimeDate(jsonObj);
}

function updateCurrentTimeCfg()
{
	hideLoadIconFlag = true;
    getCfg("sntpCfgGet.json", "", updateCurrentTimeDate);
	hideLoadIconFlag = false;
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
    this.basicClassFile = "./kt_sntp_setup.js";
    this.customLv1File = "./kt_sntp_setup_customlv1.js";
    this.customLv2File = "./kt_sntp_setup_customlv2.js";
    this.customLv3File = "./kt_sntp_setup_customlv3.js";
}

