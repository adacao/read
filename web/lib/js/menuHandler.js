// JavaScript Document
// JavaScript Document

var menuHandler = new function(){
    var menuObj = null;
    var customUrlList = new Array();
    var customizeMenuIdNum = 0;
    
    var fstLvMenuArray = new Array();
    var secLvMenuArray = new Array();
    var thdLvMenuArray = new Array();
    
    var superAdmin = false; /* true: superAdmin; false: common user */
    var accountLv;             /* accountLv:0-admin;1-suppoter;2-user */
    var sfCfgName = "";
    /* for support module start */
    var supportPlugin;
    var wanCfg;
    var voipCfg;
    var ipv6;
    var ddns;
    var usb;
    var loopback;
    var usbxdown;
    var wlan;
    var modem_3g;
    var diagnostics; 
    var tr69c;
    var wifidog;
    var qos;
    var igmp;
    var mld;
    var remote_info;
    var diag_inform;
    var fwupgrade;
    var multicastvlan;
    var ctUserInfo;
    var wlan5g;
    var ipp;
    var l2tp;
      //
    /* for support module end */
    function _initVar(cfg){
        superAdmin = (cfg.superAdmin == "1") ? true : false;
        accountLv = cfg.accountLv; /* accountLv:0-admin;1-suppoter;2-user */
        sfCfgName = cfg.sfCfgName;
        supportPlugin = cfg.supportPlugin;
        wanCfg = cfg.wanCfg;        /*{"support": "1","usMode": "8","WanIpMode": "3"} */
        voipCfg = cfg.voipCfg;      /* {"support": "1","voipProtocol": "SIP"} */
        ipv6 = cfg.ipv6;
        ddns = cfg.ddns;
        usb = cfg.usb;
    loopback = cfg.loopback;
        usbxdown = cfg.usbxdown;
        wlan = cfg.wlan;
        wlan5g = cfg.wlan5g;
        modem_3g = cfg.usbxdown;
        diagnostics = cfg.diagnostics;
        tr69c = cfg.tr69c;
        wifidog = cfg.wifidog;
        qos = cfg.qos;
        igmp = cfg.igmp;
        mld = cfg.mld;
        remote_info = cfg.remote_info;
        diag_inform = cfg.diag_inform;
        fwupgrade = cfg.fwupgrade;
        multicastvlan = cfg.multicastvlan;
        ctUserInfo = cfg.ctUserInfo;
        ipp = cfg.ipp;
        l2tp = cfg.l2tp;    
    }
    
    function _initMenuObj(){
        //menuObj is json object format!!
        menuObj = [
            //menuLv1
            /************************************************ LV1 状态 *************************************************/
            {
                "index":1,
                "id":"MENU_FST_Status",
                "title":menuTitle[MENU_STATUS],
                "enable":true,
                "menuLv2":[
                    //menuLv2   设备信息
                    {
                        "index":1,
                        "id":"MENU_SEC_StatusDev",
                        "title":menuTitle[MENU_STS_DEVICE],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            {
                                "index":1,
                                "id":"MENU_THD_StatusDevBasic",
                                "title":menuTitle[MENU_STS_DEV_INFO],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_dm_dev_status.html"
                            }
                        ]
                    },
                    //menuLv2   网络侧信息
                    {
                        "index":2,
                        "id":"MENU_SEC_StatusWan",
                        "title":menuTitle[MENU_STS_NETWORK],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            {
                                "index":1,
                                "id":"MENU_THD_StatusWanConn",
                                "title":menuTitle[MENU_STS_NET_CON],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_wan_status.html"
                            }
                        ]
                    },
                    //menuLv2   用户侧信息
                    {
                        "index":3,
                        "id":"MENU_SEC_StatusLan",
                        "title":menuTitle[MENU_STS_USER],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            {
                                "index":1,
                                "id":"MENU_THD_StatusLanWlan",
                                "title":menuTitle[MENU_STS_USER_WLAN],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_wlan_info.html"
                            }
                        ]
                    },
                    //menuLv2   远程管理状态
                    {
                        "index":4,
                        "id":"MENU_SEC_StatusTr69",
                        "title":menuTitle[MENU_STS_TR],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_StatusTr69Conn",
                                "title":menuTitle[MENU_STS_TR_CONN],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_tr69_connect_status.html"
                            }
                        ]
                    }
                ]//end menuLv2
            },
            
            /************************************************ LV1 网络
             **************************************************/
            {
                "index":2,
                "id":"MENU_FST_Net",
                "title":menuTitle[MENU_NETWORK],
                "enable":true,
                "menuLv2":[
                    //menuLv2   宽带设置
                    {
                        "index":1,
                        "id":"MENU_SEC_NetWan",
                        "title":menuTitle[MENU_NET_BAND],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetWan",
                                "title":menuTitle[MENU_NET_BAND_INT],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_wan_setup.html"
                            }
                        ]
                    },
                    //menuLv2   局域网设置
                    {
                        "index":2,
                        "id":"MENU_SEC_NetLan",
                        "title":menuTitle[MENU_NET_LAN_DHCP],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetLanDhcp",
                                "title":menuTitle[MENU_NET_DHCP],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_lan_dhcp.html"
                            }
                        ]
                    },
                    //menuLv2   QoS
                    {
                        "index":3,
                        "id":"MENU_SEC_NetQos",
                        "title":menuTitle[MENU_NET_QOS],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetQos",
                                "title":menuTitle[MENU_NET_QOS2],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_qos_setup.html"
                            }
                        ]
                    },
                    //menuLv2   WLAN
                    {
                        "index":4,
                        "id":"MENU_SEC_NetWlan",
                        "title":menuTitle[MENU_NET_WLAN],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetUse",
                                "title":menuTitle[MENU_NET_USE],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_wlan_setup.html"
                            }
                        ]
                    },
                    //menuLv2   设备移机
                    {
                        "index":5,
                        "id":"MENU_SEC_Equipment",
                        "title":menuTitle[MENU_NET_EQUI_MOVE],
                        "enable":false,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_SEC_Equipment_Move",
                                "title":menuTitle[MENU_NET_EQUI_MOVE],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_equipment_move.html"
                            }
                        ]
                    },
                    //menuLv2   远程管理
                    {
                        "index":6,
                        "id":"MENU_SEC_NetTr69",
                        "title":menuTitle[MENU_NET_TR],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetTr69Cfg",
                                "title":menuTitle[MENU_NET_TR_ITMS],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_tr69_setup.html"
                            }
                        ]
                    },
                    //menuLv2   路由配置
                    {
                        "index":7,
                        "id":"MENU_SEC_NetRoute",
                        "title":menuTitle[MENU_NET_ROUTE],
                        "enable":false,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetRouteStatic",
                                "title":menuTitle[MENU_NET_ROUTE_STATIC],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_route_static_v4_setup.html"
                            }
                        ]//end menuLv3
                    },
                    //menuLv2   用户数限制
                    {
                        "index":8,
                        "id":"MENU_SEC_NetLanBind",
                        "title":menuTitle[MENU_NET_LAN_BIND_SET],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetLanBind",
                                "title":menuTitle[MENU_NET_LAN_BIND_MODE],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_Users_limit.html"
                            }
                        ]
                    },
                    //menuLv2   时间管理
                    {
                        "index":9,
                        "id":"MENU_SEC_NetSntp",
                        "title":menuTitle[MENU_NET_TIME],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NetSntpSystem",
                                "title":menuTitle[MENU_NET_TIME_SYSTEM],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_sntp_setup.html"
                            }
                        ]
                    }
                ] //end menuLv2
            },
            
            /************************************************ LV1 MENU FOR SECURITY *************************************************/
            {
                "index":3,
                "id":"MENU_FST_Sec",
                "title":menuTitle[MENU_SECURITY],
                "enable":true,
                "menuLv2":[
                    //menuLv2   防火墙
                    {
                        "index":1,
                        "id":"MENU_SEC_SecFw",
                        "title":menuTitle[MENU_SEC_FW],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            /* firewall level */
                            {
                                "index":1,
                                "id":"MENU_THD_SecFwLevel",
                                "title":menuTitle[MENU_SEC_FW_LEVEL],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_firewall_setup.html"
                            }
                        ]
                    },
                    //menuLv2   URL过滤
                    {
                        "index":2,
                        "id":"MENU_SEC_SecUrlf",
                        "title":menuTitle[MENU_SEC_WAN],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_SecList",
                                "title":menuTitle[MENU_SEC_LIST],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_urlf_setup.html"
                            }
                        ]
                    },
                    //menuLv2   MAC过滤
                    {
                        "index":3,
                        "id":"MENU_SEC_SecMacf",
                        "title":menuTitle[MENU_SEC_MACFLT],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_SecMacList",
                                "title":menuTitle[MENU_SEC_MAC_LIST],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_macf_setup.html"
                            }
                        ]
                    },
                    //menuLv2   IP/Port过滤
                    {
                        "index":4,
                        "id":"MENU_SEC_SecIpf",
                        "title":menuTitle[MENU_SEC_PORTFLT],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_SecIpList",
                                "title":menuTitle[MENU_SEC_PORTFLT_LIST],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_ipflt_setup.html"
                            }
                        ]
                    } 
                ]   
            },
            
            /************************************************ LV1 MENU FOR APPLICATION********************************************/
            {
                "index":4,
                "id":"MENU_FST_App",
                "title":menuTitle[MENU_APPLICATION],
                "enable":true,
                "account":"admin",
                "menuLv2":[
                    //menuLv2   DDNS
                    {
                        "index":1,
                        "id":"MENU_SEC_AppDdns",
                        "title":menuTitle[MENU_APP_DDNS],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_AppDdns",
                                "title":menuTitle[MENU_APP_DDNS],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_ddns_setup.html"
                            }
                        ]
                    },
                    //menuLv2   高级NAT
                    {
                        "index":2,
                        "id":"MENU_SEC_AppNat",
                        "title":menuTitle[MENU_APP_NAT],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_ApNatAlg",
                                "title":menuTitle[MENU_APP_NAT_ALG],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_alg_setup.html"
                            }
                        ]
                    },
                    //menuLv2   UPNP设置
                    {
                        "index":3,
                        "id":"MENU_SEC_AppUpnp",
                        "title":menuTitle[MENU_APP_UPNP],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_AppUpnp",
                                "title":menuTitle[MENU_APP_UPNP],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_upnp_setup.html"
                            }
                        ]
                    },
                    //menuLv2   端口转发
                     {
                        "index":4,
                        "id":"MENU_SEC_PortMain",
                        "title":menuTitle[MENU_APP_PORT],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_APP_PostList",
                                "title":menuTitle[MENU_APP_PORT],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_port_send.html"
                            }
                        ]
                    },
                    //menuLv2   IGMP
                    {
                        "index":5,
                        "id":"MENU_SEC_AppIgmp",
                        "title":menuTitle[MENU_APP_IGMP],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_AppIgmpSnooping",
                                "title":menuTitle[MENU_APP_IGMP_SNOOPING],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_igmp_proxy.html"
                            }
                        ]
                    },
                    //menuLv2   Telnet服务器
                    {
                        "index":6,
                        "id":"MENU_APP_Telnet_Server",
                        "title":menuTitle[MENU_APP_TELNET],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_APP_Telnet",
                                "title":menuTitle[MENU_APP_TELNET],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_telnet_server.html"
                            }
                        ]
                    },
                    //menuLv2   强制门户
                    {
                        "index":7,
                        "id":"MENU_APP_Force",
                        "title":menuTitle[MENU_APP_FORCE],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_APP_ForceUser",
                                "title":menuTitle[MENU_APP_FORCE_USER],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_force_user.html"
                            }
                        ]
                    },
                    //menuLv2   日常应用
                    {
                        "index":8,
                        "id":"MENU_SEC_AppDaily",
                        "title":menuTitle[MENU_APP_DAILY],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_AppDailyUsbxdown",
                                "title":menuTitle[MENU_APP_DAILY_MEM],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_daily_use.html"
                            }
                        ]
                    }
                ]
            },

            /************************************************ LV1 MENU FOR MANAGE******************************************/
            {
                "index":5,
                "id":"MENU_FST_Diag",
                "title":menuTitle[MENU_DIAG],
                "enable":true,
                "menuLv2":[
                    //menuLv2   Admin账号管理
                    {
                        "index":1,
                        "id":"MENU_SEC_MngAdmin",
                        "title":menuTitle[MENU_MNG_ADMIN],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_MngUser",
                                "title":menuTitle[MENU_MNG_USER],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_account_setup.html"
                            }
                        ]
                    },
                    //menuLv2   备份/恢复
                    {
                        "index":2,
                        "id":"MENU_THD_MngDevbackup",
                        "title":menuTitle[MENU_MNG_DEV_USERBACK],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_MngDevback",
                                "title":menuTitle[MENU_MNG_DEV_USERBACK],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_dm_usbbackup.html"
                            }
                        ]
                    },
                    //menuLv2   固件升级
                    {
                        "index":3,
                        "id":"MENU_THD_MngDevUpgrade",
                        "title":menuTitle[MENU_MNG_DEV_FWUPGRADE],
                        "enable":false,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_MngDevUpload",
                                "title":menuTitle[MENU_MNG_DEV_FWUPGRADE],
                                "enable":false,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_upgrade_firm.html"
                            }
                        ]
                    },
                    //menuLv2   管理密码
                    {
                        "index":4,
                        "id":"MENU_HELP_User_Pad",
                        "title":menuTitle[MENU_HELP_USER_PASSWORD],
                        "enable":false,
                        "account":"user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_HELP_Password",
                                "title":menuTitle[MENU_HELP_USER_PASSWORD],
                                "enable":false,
                                "account":"user",
                                "customFlag":false,
                                "href":"kt_account_setup.html"
                            }
                        ]
                    },
                    //menuLv2   重启
                    {
                        "index":5,
                        "id":"MENU_THD_Upgrad_Agin",
                        "title":menuTitle[MENU_MNG_DEV_REBOOT],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_MngDevReboot",
                                "title":menuTitle[MENU_MNG_DEV_REBOOT],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_dm_reboot.html"
                            }
                        ]
                    },
                    //menuLv2   系统日志
                    {
                        "index":6,
                        "id":"MENU_SEC_Log",
                        "title":menuTitle[MENU_MNG_LOG],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_MngLogLevel",
                                "title":menuTitle[MENU_MNG_LOG_LEVEL],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_log_level_setup.html"
                            }
                        ]
                    },
                    //menuLv2   诊断
                    {
                        "index":7,
                        "id":"MENU_SEC_DiagNet",
                        "title":menuTitle[MENU_DIAG_NET],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_DiagNetLine",
                                "title":menuTitle[MENU_DIAG_NET_LINE],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_diag_ping.html"
                            }
                        ]
                    },
					//menuLv2   手动上报
                    {
                        "index":8,
                        "id":"MENU_THD_MANUAL_Report",
                        "title":menuTitle[MENU_REPORT],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_Report",
                                "title":menuTitle[MENU_REPORT],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_reporting.html"
                            }
                        ]
                    },
					//menuLv2   网络监控
                    {
                        "index":9,
                        "id":"MENU_THD_NETWORK_MONITOR",
                        "title":menuTitle[MENU_NET],
                        "enable":true,
                        "account":"admin_user",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_THD_NET",
                                "title":menuTitle[MENU_NET],
                                "enable":true,
                                "account":"admin_user",
                                "customFlag":false,
                                "href":"kt_network_monitoring.html"
                            }
                        ]
                    },
                    //menuLv2   语言
                    {
                        "index":10,
                        "id":"MENU_LANGUAGE_CH",
                        "title":menuTitle[MENU_LANGUAGE],
                        "enable":true,
                        "account":"admin",
                        "menuLv3":[
                            //menuLv3
                            {
                                "index":1,
                                "id":"MENU_Language",
                                "title":menuTitle[MENU_LANGUAGE],
                                "enable":true,
                                "account":"admin",
                                "customFlag":false,
                                "href":"kt_change_language.html"
                            }
                        ]
                    }
                ]
            },

            
            /************************************************ LV1 MENU FOR HELP******************************************/
            {
                "index":6,
                "id":"MENU_FST_User_Help",
                "title":menuTitle[MENU_HELP],
                "enable":true,
                "menuLv2":[
                    //menuLv2   使用
                    {
                        "index": 1,
                        "id": "MENU_SEC_Helping",
                        "title": menuTitle[MENU_HELP_USE],
                        "enable": true,
                        "account": "admin_user",
                        "menuLv3": [
                            //menuLv3
                            {
                                "index": 1,
                                "id": "MENU_SEC_Help",
                                "title": menuTitle[MENU_HELP_USE],
                                "enable": true,
                                "account": "admin_user",
                                "customFlag": false,
                                "href": "kt_help_use.html"
                            }
                        ]
                    }
                ]
            }
                    
        ];//end menuLv1
        
        _setMenuObjArray();
    }
    
    function _setMenuObjArray(){
        fstLvMenuArray.length = 0;
        secLvMenuArray.length = 0;
        thdLvMenuArray.length = 0;
        //resotre menu cell by level 
        $.each(menuObj, function(idx, fstLvMenuCell){
            fstLvMenuArray.push(fstLvMenuCell);
            
            $.each(fstLvMenuCell.menuLv2, function(idx, secLvMenuCell){
                secLvMenuCell.parentMenuObj = fstLvMenuCell;
                secLvMenuArray.push(secLvMenuCell);
                
                $.each(secLvMenuCell.menuLv3, function(idx, thdLvMenuCell){
                    thdLvMenuCell.parentMenuObj = secLvMenuCell;
                    thdLvMenuArray.push(thdLvMenuCell);
                });
            });
        });
    }
    
    function _getFstMenuObj(title, enabled){
        for (var i = 0; i < fstLvMenuArray.length; i++)
        {
            if (fstLvMenuArray[i].title == title)
            {
                if (!enabled)
                {
                    return fstLvMenuArray[i];
                }
                else
                {
                    if (fstLvMenuArray[i].enable)
                    {
                        return fstLvMenuArray[i];
                    }
                }
            }
        }
        //alert("Menu "+title+"Not Found");
        return null;
    }
    
    function _getSecMenuObj(title, enabled, parentMenu){
        for (var i = 0; i < secLvMenuArray.length; i++)
        {
            if (secLvMenuArray[i].title == title)
            {
                if (parentMenu != null && secLvMenuArray[i].parentMenuObj != parentMenu)
                {
                    continue;
                }
                
                if (!enabled)
                {
                    return secLvMenuArray[i];
                }
                else
                {
                    if (secLvMenuArray[i].enable)
                    {
                        return secLvMenuArray[i];
                    }
                }
            }
        }
        //alert("Menu '"+title+"' Not Found");
        return null;
    }
    
    function _getThdMenuObj(title, enabled, parentMenu){
        for (var i = 0; i < thdLvMenuArray.length; i++)
        {
            if (thdLvMenuArray[i].title == title)
            {
                if (parentMenu != null && thdLvMenuArray[i].parentMenuObj != parentMenu)
                {
                    continue;
                }
                
                if (!enabled)
                {
                    return thdLvMenuArray[i];
                }
                else
                {
                    if (thdLvMenuArray[i].enable)
                    {
                        return thdLvMenuArray[i];
                    }
                }
            }
        }
        //alert("Menu '"+title+"' Not Found");
        return null;
    }
    
    function _getThdMenuObjByHref(href){

        for (var i = 0; i < thdLvMenuArray.length; i++)
        {
            if (thdLvMenuArray[i].href == href)
            {
                return thdLvMenuArray[i];
            }
        }
        return null;
    }
    
    function _getMenuObjByLvAndTitle(menuLv, title, parentMenu)
    {
        if (!_checkMenuLv(menuLv))
            return false;
        
        if (menuLv == 1)
        {
            return _getFstMenuObj(title, true, parentMenu);
        }
        else if(menuLv == 2)
        {
            return _getSecMenuObj(title, true, parentMenu);
        }
        else
        {
            return _getThdMenuObj(title, true, parentMenu);
        }
    }
    
    //include disabled menu
    function _getAllMenuObjByLvAndTitle(menuLv, title, parentMenu)
    {
        if (!_checkMenuLv(menuLv))
            return false;
        
        if (menuLv == 1)
        {
            return _getFstMenuObj(title, false, parentMenu);
        }
        else if(menuLv == 2)
        {
            return _getSecMenuObj(title, false, parentMenu);
        }
        else
        {
            return _getThdMenuObj(title, false, parentMenu);
        }
    }
    
    function _checkMenuLv(menuLv)
    {
        if (isNaN(menuLv) || (menuLv < 1) || (menuLv > 3))
        {
            alert("menu level should be 1~3");
            return false;
        }
        
        return true;
    }
    
    function _setMenuEnable(menuLv, title, enable, parentTitle)
    {
        if (!_checkMenuLv(menuLv))
            return false;
            
        var menuCell = null;
        if (menuLv == 1)
        {
            menuCell = _getFstMenuObj(title);
            menuCell.enable = enable;
        }
        else if(menuLv == 2)
        {
            menuCell = _getSecMenuObj(title);
            menuCell.enable = enable;
        }
        else
        {
            menuCell = _getThdMenuObj(title);
            menuCell.enable = enable;
        }
    }
    
    function _setMenuEnableByHref(href, enable)
    {
        var menuCell = null ;
        menuCell = _getThdMenuObjByHref(href);
        menuCell.enable = enable;
    }
    
    /*  if the url is customized, set customFlag to true */
    function _setCustomFlag(){
        var menuCell = null;
        for (var i = 0; i < customUrlList.length; i++)
        {
            menuCell = _getThdMenuObjByHref(customUrlList[i]);
            menuCell.customFlag = true;
            alert(menuCell.customFlag);
        }
    }
    
    
    /* Default all modules is enabled;
     * If module is not support, the menu enable para will be set false
     */
    function _initSupportModule(){
//        _setMenuEnable(2, getMenuTitle(MENU_STS_TR), enable);
 //       _setMenuEnableByHref("voicesip_basic.html", sipEnable); //
 //       _setMenuEnable(3, getMenuTitle(MENU_STS_TR_OPER), enable);
    }
    
    /* For common user we changge menu href to user page */
    /*function _initCommonUserPage(){
        if (superAdmin)
            return // for super admin do nothing
        
        //_modifyHref(old_href, new_href)    
        // _modifyHref("help_net_remote.html", "help_user_net_remote.html");
            
        
    }*/
    
    function _setMenuIndex(menuLv, title, index, parentTitle){
        if (parentTitle && menuLv > 1)
        {
            var parentMenu = _getMenuObjByLvAndTitle(menuLv-1, parentTitle);
        }
        var menuCell = _getMenuObjByLvAndTitle(menuLv, title, parentMenu);
        if (menuCell)
        {
            menuCell.index = index;
        }
    }
    
    function _swapMenuIndex(menuLv, title_1, title_2, parentTitle)
    {
        if (parentTitle && menuLv > 1)
        {
            var parentMenu = _getMenuObjByLvAndTitle(menuLv-1, parentTitle);
        }
        var menuCell_1 = _getMenuObjByLvAndTitle(menuLv, title_1, parentMenu);
        var menuCell_2 = _getMenuObjByLvAndTitle(menuLv, title_2, parentMenu);
        var tmpIdx = 0;
        
        if (menuCell_1 && menuCell_2)
        {
            tmpIdx = menuCell_2.index;
            menuCell_2.index = menuCell_1.index;
            menuCell_1.index = tmpIdx;
        }
    }
    
    function _modifyTitle(menuLv, oldTitle, newTitle, parentTitle)
    {
        if (parentTitle && menuLv > 1)
        {
            var parentMenu = _getMenuObjByLvAndTitle(menuLv-1, parentTitle);
        }
        
        var menuCell = _getMenuObjByLvAndTitle(menuLv, oldTitle, parentMenu);
        if (menuCell)
        {
            menuCell.title = newTitle;
        }
    }
    
    function _modifyHref(oldHref, newHref)
    {
        var menuCell = _getThdMenuObjByHref(oldHref);
        if (menuCell)
        {
            menuCell.href = newHref;
        }
    }
    
    function _modifyAccount(menuLv, title, account, parentTitle){
        if (!_checkMenuLv(menuLv))
            return false;
            
        if (account != "admin" && account != "admin_user")
        {
            alert('Only support "admin/admin_user"!');
            return false;
        }
        
        if (parentTitle && menuLv > 1)
        {
            var parentMenu = _getMenuObjByLvAndTitle(menuLv-1, parentTitle);
        }
        
        var menuCell = _getMenuObjByLvAndTitle(menuLv, title, parentMenu);
        if (menuCell)
        {
            if (menuLv == 1)
            {
                $.each(menuCell.menuLv2, function(idx, lv2MenuCell){
                    lv2MenuCell.account = account;
                });
                return;
            }
            else if (menuLv == 3)
            {
                if (account == "admin_user" && menuCell.parentMenuObj.account == "admin")
                {
                    //auto set parent account
                    menuCell.parentMenuObj.account = "admin_user";
                }
            }
            menuCell.account = account;
        }
    }
    
    function _setEnable(menuLv, title, enable, parentTitle){
        if (parentTitle && menuLv > 1)
        {
            var parentMenu = _getAllMenuObjByLvAndTitle(menuLv-1, parentTitle);
        }
        var menuCell = _getAllMenuObjByLvAndTitle(menuLv, title, parentMenu);
        if (menuCell)
        {
            menuCell.enable = enable;
        }
    }
    
    /*********For add new Menu Start *************************/
    function _createSecMenuObj(menuObj, index){
        var menuLv3 = new Array();
        for (var idx = 0; idx < menuObj.menuLv3.length; idx++)
        {
            menuLv3.push(_createThdMenuObj(menuObj.menuLv3[idx], idx));
        }
        
        var secMenuObj = {
                        "index":index,
                        "id":("undefined" == typeof(menuObj.id)) ? "MENU_SEC_Customize_"+customizeMenuIdNum++ : menuObj.id,
                        "title":menuObj.title,
                        "enable":true,
                        "account":menuObj.account,
                        "menuLv3":menuLv3
        };
        return secMenuObj;
    }
    
    function _createThdMenuObj(menuObj, index){
        var thdMenuObj = {
                            "index":index,
                            "id":("undefined" == typeof(menuObj.id)) ? "MENU_THD_Customize_"+customizeMenuIdNum++ : menuObj.id,
                            "title":menuObj.title,
                            "enable":true,
                            "account":menuObj.account,
                            "customFlag":false,
                            "href":menuObj.href
        };
        return thdMenuObj;
    }
    
    function _checkSecMenuObjValid(lv2MenuObj)
    {
        if (typeof(lv2MenuObj.fstLvTitle) == "undefined")
        {
            alert("Please tell me the first level menu title!");
            return false;
        }
        else if (null == _getFstMenuObj(lv2MenuObj.fstLvTitle))
        {
            alert("Please tell me the RIGHT first level menu title!");
            return false;
        }
        
        if (typeof(lv2MenuObj.title) == "undefined")
        {
            alert("Please tell me the third level menu title!");
            return false;
        }
        else if (null != _getThdMenuObj(lv2MenuObj.title))
        {
            alert("Sorry the title is used!");
            return false;
        }
        
        if (typeof(lv2MenuObj.menuLv3) == "undefined")
        {
            alert("Plase set level 3 menu.");
            return false;
        }
        else
        {
            for (var idx = 0; idx < lv2MenuObj.menuLv3.length; idx++)
            {
                if (!_checkThdMenuObjValid(lv2MenuObj.menuLv3[idx], true))
                    return false
            }
        }
        return true;
    }
    
    function _checkThdMenuObjValid(lv3MenuObj, noCheckParentTitle)
    {
        if (!noCheckParentTitle)
        {
            if (typeof(lv3MenuObj.fstLvTitle) == "undefined")
            {
                alert("Please tell me the first level menu title!");
                return false;
            }
            else if (null == _getFstMenuObj(lv3MenuObj.fstLvTitle))
            {
                alert("Please tell me the RIGHT first level menu title!");
                return false;
            }
        
            if (typeof(lv3MenuObj.secLvTitle) == "undefined")
            {
                alert("Please tell me the second level menu title!");
                return false;
            }
            else if (null == _getSecMenuObj(lv3MenuObj.secLvTitle))
            {
                alert("Please tell me the RIGHT second level menu title!");
                return false;
            }
        }
        
        if (typeof(lv3MenuObj.title) == "undefined")
        {
            alert("Please tell me the third level menu title!");
            return false;
        }
        else if (null != _getThdMenuObj(lv3MenuObj.title))
        {
            alert("Sorry the title is used!");
            return false;
        }

        return true;
    }
    
    function _checkMenuObjValid(menuLv, menuObj){
        if (!_checkMenuLv(menuLv))
            return false;
            
        if (menuLv == 1)
        {
            alert("Not support add First level now!");
            return false;
        }
        else if (menuLv == 2)
        {
            //
            if (!_checkSecMenuObjValid(menuObj))
                return false;
        }
        else if (menuLv == 3)
        {
            if (!_checkThdMenuObjValid(menuObj))
                return false;
        }
        
        return true;
    }
    
    function _addMenu(menuLv, menuObj){
        if (!_checkMenuObjValid(menuLv, menuObj))
            return;
        
        var fstMenuObj = null;
        var secMenuObj = null;
            
        if (menuLv == 1)
        {
            //not support now 
            return false;
        }
        else if (menuLv == 2)
        {
            //
            fstMenuObj = _getFstMenuObj(menuObj.fstLvTitle);
            fstMenuObj.menuLv2.push(_createSecMenuObj(menuObj, fstMenuObj.menuLv2.length+1));
        }
        else if (menuLv == 3)
        {
            secMenuObj = _getSecMenuObj(menuObj.secLvTitle);
            secMenuObj.menuLv3.push(_createThdMenuObj(menuObj, secMenuObj.menuLv3.length+1));
        }
        _setMenuObjArray();
    }
    
    /*********For add new Menu End *************************/
    
    function _checkDisplay(menuCell){
        if (!menuCell.enable)
        {
            return false;
        }
        
        if (superAdmin || accountLv == "0" || accountLv == "1")
        {
            if (menuCell.account == "user")
            {
                return false; /* pages for user only, don't display */
            }
        }
        else
        {
            if (menuCell.account == "admin")
            {
                return false; /* pages for admin only, don't display */
            }
        }
        
        return true;
    }
    
    function _createMenu(){
        
        foldersTree = gFld('', 'kt_dm_dev_status.html', "MENU_TOP");
        
        menuObj.sort(function(a, b){return (a.index-b.index)}); // sort by index
        $.each(menuObj, function(idx, fstLvMenuCell){
            var fstLvMenuNode = null;
            var fstLvSetFlag = false;
            
            if (!_checkDisplay(fstLvMenuCell)){return;}
            //
            fstLvMenuCell.menuLv2.sort(function(a, b){return (a.index-b.index)}); // sort by index
            $.each(fstLvMenuCell.menuLv2, function(idx, secLvMenuCell){
                var secLvMenuNode = null;
                var secLvSetFlag = false
                
                if (!_checkDisplay(secLvMenuCell)){return;}
                //
                secLvMenuCell.menuLv3.sort(function(a, b){return (a.index-b.index)}); // sort by index
                $.each(secLvMenuCell.menuLv3, function(idx, thdLvMenuCell){
                    if (!_checkDisplay(thdLvMenuCell)){return;}
                    var href = thdLvMenuCell.href;

                    if (thdLvMenuCell.customFlag)
                    {
                        href = sfCfgName+"/"+href;
                    }
                    
                    if (!fstLvSetFlag)
                    {
                        fstLvMenuNode = insFld(foldersTree, gFld(fstLvMenuCell.title, href, fstLvMenuCell.id));
                        fstLvSetFlag = true;
                    }
                    
                    if (!secLvSetFlag)
                    {
                        secLvMenuNode = insFld(fstLvMenuNode, gFld(secLvMenuCell.title, href, secLvMenuCell.id));
                        secLvSetFlag = true;
                    }
                    
                    insFld(secLvMenuNode, gFld(thdLvMenuCell.title, href, thdLvMenuCell.id));
                
                });
            
            });
            
        });
    }
    
    return {
        //public
        initMenuHandler:function(cfg){
            _initVar(cfg);
            _initMenuObj();
            
            _initSupportModule();
            // _initCommonUserPage();
        },
        
        /* Method for custom url address */
        addCustomUrl:function(url){
            customUrlList.push(url);
        },
        
        activeCustomUrl:function(){
            _setCustomFlag();
        },
        
        setMenuIndex:function(menuLv, title, index, parentTitle){
            _setMenuIndex(menuLv, title, index, parentTitle);
        },
        
        swapMenuIndex:function(menuLv, title_1, title_2, parentTitle){
            _swapMenuIndex(menuLv, title_1, title_2, parentTitle);
        },
        
        modifyTitle:function(menuLv, oldTitle, newTitle, parentTitle){
            _modifyTitle(menuLv, oldTitle, newTitle, parentTitle);
        },
        
        modifyHref:function(oldHref, newHref){
            _modifyHref(oldHref, newHref);
        },
        
        modifyAccount:function(menuLv, title, account, parentTitle){
            _modifyAccount(menuLv, title, account, parentTitle);
        },
        
        setEnable:function(menuLv, title, enable, parentTitle){
            _setEnable(menuLv, title, enable, parentTitle);
        },
        
        addMenu:function(menuLv, menuObj){
            _addMenu(menuLv, menuObj);
        },
        
        //creatMenu, do this last.
        creatMenu:function(){
            _createMenu();
        }
    }
}


function createMenu(mainCfg, pageId){
    menuHandler.initMenuHandler(mainCfg);
    
    /* get common customize js */
    $.getScript("lib/js/customize_common.js", function(){
        if (typeof(customerCommonHandler) != "undefined")
        {
            customerCommonHandler.start();
        }
        
        /* get specific customize js */
        $.getScript("lib/js/customize.js", function(){
            if (typeof(customerHandler) != "undefined")
            {
                customerHandler.start();
            }
            
            menuHandler.creatMenu(); 
            initializeDocument(pageId);
            //set iframe src
            window.frames["mainFrame"].location.href = "kt_dm_dev_status.html";
        });
    });
}
