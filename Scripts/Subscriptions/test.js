/*************************************

项目名称：iTunes-系列解锁合集
更新日期：2024-07-22
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：如果脚本无效，请先排除是否脚本冲突
特别说明：此脚本可能会导致App Store无法登录ID
解决方法：关[MITM][脚本][代理工具]方法选一即可
已解锁App传送门：https://too.st/iTunes

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/mist-whisper/Surge/master/Scripts/Subscriptions/test.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/


var chxm1023 = JSON.parse($response.body);
const ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
const bundle_id = chxm1023.receipt["bundle_id"] || chxm1023.receipt["Bundle_Id"];
const yearid = `${bundle_id}.year`;
const yearlyid = `${bundle_id}.yearly`;
const yearlysubscription = `${bundle_id}.yearlysubscription`;

const list = {
  'WasteCat': { cm: 'timeb', hx: 'hxpda', id: "dev.sanjin.WasteCat.PermanentVip", latest: "chxm1023" },  //垃圾贪吃猫
  'Subscriptions': { cm: 'timea', hx: 'hxpda', id: "com.touchbits.subscriptions.iap.pro.yearly", latest: "chxm1023" },  //订阅通
  'com.leapfitness.fasting': { cm: 'timea', hx: 'hxpda', id: "com.leapfitness.fasting.oneyear1", latest: "chxm1023" },  //168轻断食
  'WidgetBox': { cm: 'timeb', hx: 'hxpda', id: "widgetlab001", latest: "chxm1023" },  //小组件盒子
  'LifeTracker': { cm: 'timea', hx: 'hxpda', id: "com.dk.lifetracker.yearplan", latest: "chxm1023" },  //Becord生活记录
  'imgplay': { cm: 'timea', hx: 'hxpda', id: "me.imgbase.imgplay.subscriptionYearly", latest: "chxm1023" },  //imgPlay
  'WaterMinder': { cm: 'timea', hx: 'hxpda', id: "waterminder.premiumYearly", latest: "chxm1023" },  //WaterMinder喝水APP
  'HashPhotos': { cm: 'timeb', hx: 'hxpda', id: "com.kobaltlab.HashPhotos.iap.allinone.free", latest: "chxm1023" },  //HashPhotos
  'FileBrowser': { cm: 'timea', hx: 'hxpda', id: "com.qingcheng.filex.pro.yearly", latest: "chxm1023" },  //松鼠下载
  'SilProject': { cm: 'timea', hx: 'hxpda', id: "com.sm.Alina.Pro", latest: "chxm1023" },  //Alina米克锁屏—
  'com.chenxi.shanniankapian': { cm: 'timea', hx: 'hxpda', id: "com.chenxi.shannian.superNian", latest: "chxm1023" },  //闪念
  'com.risingcabbage.pro.camera': { cm: 'timea', hx: 'hxpda', id: "com.risingcabbage.pro.camera.yearlysubscription", latest: "chxm1023" },  //ReLens相机
  'co.bazaart.patternator': { cm: 'timea', hx: 'hxpda', id: "Patternator_Lock_Screen_Monthly", latest: "chxm1023" },  //拍特内头
  '%E5%BD%95%E9%9F%B3%E4%B8%93%E4%B8%9A%E7%89%88': { cm: 'timea', hx: 'hxpda', id: "com.winat.recording.pro.yearly", latest: "chxm1023" },  //录音专业版
  'cn.linfei.SimpleRecorder': { cm: 'timea', hx: 'hxpda', id: "cn.linfei.SimpleRecorder.Plus", latest: "chxm1023" },  //录音机
  'com.maliquankai.appdesign': { cm: 'timec', hx: 'hxpdb', version: "1.5.8" },  //PutApp-应用收集
  'PictureScanner': { cm: 'timea', hx: 'hxpda', id: "om.picturescanner.tool.year", latest: "chxm1023" },  //扫描王
  'BestColor': { cm: 'timea', hx: 'hxpda', id: "com.bestColor.tool.month", latest: "chxm1023" },  //小红图
  'com.decibel.tool': { cm: 'timea', hx: 'hxpda', id: "decibel98free3", latest: "chxm1023" },  //分贝测试仪
  'MeasurementTools': { cm: 'timea', hx: 'hxpda', id: "mesurementyearvip", latest: "chxm1023" },  //测量工具
  'TinyPNGTool': { cm: 'timea', hx: 'hxpda', id: "com.tinypngtool.tool.weekvip", latest: "chxm1023" },  //TinyPNG
  'IconChange': { cm: 'timea', hx: 'hxpda', id: "iconeryearvip", latest: "chxm1023" },  //iconser图标更换
  'life.journal.diary': { cm: 'timeb', hx: 'hxpda', id: "life.journal.diary.lifetime", latest: "chxm1023" },  //Today日记
  'com.floatcamellia.motionninja': { cm: 'timea', hx: 'hxpda', id: "com.floatcamellia.motionninja.yearlyvip", latest: "chxm1023" },  //MotionNinja
  'com.iuuapp.audiomaker': { cm: 'timea', hx: 'hxpda', id: "com.iuuapp.audiomaker.removeads.year", latest: "chxm1023" },  //音频剪辑
  'com.biggerlens.photoretouch': { cm: 'timeb', hx: 'hxpda', id: "com.photoretouch.SVIP", latest: "chxm1023" },  //PhotoRetouch消除笔P图
  'com.macpaw.iosgemini': { cm: 'timea', hx: 'hxpda', id: "com.macpaw.iosgemini.month.trial", latest: "chxm1023" },  //GeminiPhotos
  'com.mematom.ios': { cm: 'timea', hx: 'hxpda', id: "MMYear", latest: "chxm1023" },  //年轮3
  'com.LuoWei.aDiary': { cm: 'timea', hx: 'hxpda', id: "com.LuoWei.aDiary.yearly0", latest: "chxm1023" },  //aDiary-待办日记本
  'com.zerone.hidesktop': { cm: 'timeb', hx: 'hxpda', id: "com.zerone.hidesktop.forever", latest: "chxm1023" },  //iScreen-桌面小组件主题美化
  'MagicWidget': { cm: 'timea', hx: 'hxpda', id: "com.sm.widget.Pro", latest: "chxm1023" },  //ColorfulWidget—小组件
  'com.tasmanic.capture': { cm: 'timea', hx: 'hxpda', id: "CTPCAPTUREYEARLY", latest: "chxm1023" },  //3DScanner-绘制/测量平面图
  'com.readdle.CalendarsLite': { cm: 'timea', hx: 'hxpda', id: "com.readdle.CalendarsLite.subscription.year20trial7", latest: "chxm1023" },  //Calendars-日历/计划
  'com.readdle.ReaddleDocsIPad': { cm: 'timea', hx: 'hxpda', id: "com.readdle.ReaddleDocsIPad.subscription.month10_allusers", latest: "chxm1023" },  //Documents
  'com.1ps.lovetalk': { cm: 'timea', hx: 'hxpda', id: "com.1ps.lovetalk.normal.weekly", latest: "chxm1023" },  //高级恋爱话术
  'tech.miidii.MDClock': { cm: 'timeb', hx: 'hxpda', id: "tech.miidii.MDClock.pro", latest: "chxm1023" },  //谜底时钟
  'com.floatcamellia.prettyup': { cm: 'timeb', hx: 'hxpda', id: "com.floatcamellia.prettyup.onetimepurchase", latest: "chxm1023" },  //PrettyUp视频P图
  'com.zijayrate.analogcam': { cm: 'timea', hx: 'hxpda', id: "com.zijayrate.analogcam.vipforever10", latest: "chxm1023" },  //oldroll复古相机
  'WeeklyNote': { cm: 'timea', hx: 'hxpda', id: "org.zrey.weeklynote.yearly", latest: "chxm1023" },  //WeeklyNote(周周记)
  'DoMemo': { cm: 'timea', hx: 'hxpda', id: "org.zrey.fastnote.yearly", latest: "chxm1023" },  //DoMemo
  'CostMemo': { cm: 'timea', hx: 'hxpda', id: "org.zrey.money.yearly", latest: "chxm1023" },  //CostMemo
  'iTimely': { cm: 'timea', hx: 'hxpda', id: "org.zrey.iTimely.yearly", latest: "chxm1023" },  //iTimely
  'net.daylio.Daylio': { cm: 'timea', hx: 'hxpda', id: "net.daylio.one_year_pro.offer_initial", latest: "chxm1023" },  //Daylio-日记
  'com.yengshine.webrecorder': { cm: 'timea', hx: 'hxpda', id: "com.yengshine.webrecorder.yearly", latest: "chxm1023" },  //VlogStar-视频编辑器
  'org.skydomain.foodcamera': { cm: 'timea', hx: 'hxpda', id: "org.skydomain.foodcamera.yearly", latest: "chxm1023" },  //Koloro-滤镜君
  'com.yengshine.proccd': { cm: 'timea', hx: 'hxpda', id: "com.yengshine.proccd.yearly", latest: "chxm1023" },  //ProCCD相机
  'com.palmmob.pdfios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.pdfios.168", latest: "chxm1023" },  //图片PDF转换器
  'com.palmmob.scanner2ios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.scanner2ios.396", latest: "chxm1023" },  //文字扫描
  'com.palmmob.officeios': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.officeios.188", latest: "chxm1023" },  //文档表格编辑
  'com.palmmob.recorder': { cm: 'timea', hx: 'hxpda', id: "com.palmmob.recorder.198", latest: "chxm1023" },  //录音转文字
  'com.7color.newclean': { cm: 'timea', hx: 'hxpda', id: "com.cleaner.salesyear", latest: "chxm1023" },  //手机清理
  'Habbit': { cm: 'timea', hx: 'hxpda', id: "HabitUpYearly", latest: "chxm1023" },  //习惯清单
  'com.dbmeterpro.dB-Meter-Free': { cm: 'timea', hx: 'hxpda', id: "com.dbmeterpro.premiumModeSubscriptionWithTrial", latest: "chxm1023" },  //dBMeter-分贝仪(专业版)
  'com.vstudio.newpuzzle': { cm: 'timea', hx: 'hxpda', id: "com.vstudio.newpuzzle.yearlyVipFreetrail.15_99", latest: "chxm1023" },  //拼图酱
  'com.jianili.Booka': { cm: 'timea', hx: 'hxpda', id: "com.jianili.Booka.pro.yearly", latest: "chxm1023" },  //Booka-极简书房
  'com.ziheng.OneBox': { cm: 'timeb', hx: 'hxpda', id: "com.ziheng.OneBox", latest: "chxm1023" },  //Pandora管理订阅
  'ChickAlarmClock': { cm: 'timea', hx: 'hxpda', id: "com.ChickFocus.ChickFocus.yearly_2023_promo", latest: "chxm1023" },  //小鸡专注
  'MyWorks': { cm: 'timea', hx: 'hxpda', id: "com.MyWorks.Handwritten.Year", latest: "chxm1023" },  //仿手写
  'Instant%20Saver': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "chxm1023" },  //InstantSocialSaver(ins下载)
  'SaveTik': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "chxm1023" },  //SaveTik
  '%E6%96%87%E4%BB%B6%E7%AE%A1%E7%90%86%E5%99%A8': { cm: 'timea', hx: 'hxpda', id: "com.mobislet.files.yearly", latest: "chxm1023" },  //文件管理器
  'ZIP%E5%8E%8B%E7%BC%A9%E8%A7%A3%E5%8E%8B%E7%BC%A9%E5%B7%A5%E5%85%B7': { cm: 'timea', hx: 'hxpda', id: "com.mobislet.zipfile.yearly", latest: "chxm1023" },  //ZIP压缩解压
  'TPTeleprompter': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "chxm1023" },  //爱提词
  'com.pocket.photo': { cm: 'timea', hx: 'hxpda', id: "com.pocket.photo.yearly", latest: "chxm1023" },  //一寸证件照
  'com.pocket.watermark': { cm: 'timea', hx: 'hxpda', id: "com.pocket.watermark.yearly", latest: "chxm1023" },  //一键水印
  'com.pocket.compress': { cm: 'timea', hx: 'hxpda', id: "com.pocket.compress.yearly", latest: "chxm1023" },  //压缩软件
  'com.pocket.format': { cm: 'timea', hx: 'hxpda', id: "com.pocket.format.yearly", latest: "chxm1023" },  //格式转换
  'com.CalculatorForiPad.InternetRocks': { cm: 'timea', hx: 'hxpda', id: "co.airapps.calculator.year", latest: "chxm1023" },  //计算器Air
  'solutions.wzp': { cm: 'timea', hx: 'hxpda', id: yearlysubscription, latest: "chxm1023" },  //airapps
  'co.airapps': { cm: 'timea', hx: 'hxpda', id: yearid, latest: "chxm1023" },  //airapps
  'com.internet-rocks': { cm: 'timea', hx: 'hxpda', id: yearid, latest: "chxm1023" },  //airapps
  'SuperWidget': { cm: 'timea', hx: 'hxpda', id: "com.focoslive", latest: "chxm1023" },  //PandaWidget小组件
  'Picsew': { cm: 'timeb', hx: 'hxpdb', id: "com.sugarmo.ScrollClip.pro"},  //Picsew截长图3.9.4版本(最新版无效)
  'vpn': { cm: 'timea', hx: 'hxpda', id: "yearautorenew", latest: "chxm1023" },  //VPN-unlimited
  'TT': { cm: 'timea', hx: 'hxpda', id: "com.55panda.hicalculator.year_sub", latest: "chxm1023" },  //TT_私密相册管家
  'Focos': { cm: 'timea', hx: 'hxpda', id: "com.focos.1w_t4_1w", latest: "chxm1023" },  //Focos
  'ProKnockOut': { cm: 'timeb', hx: 'hxpda', id: "com.knockout.SVIP.50off", latest: "chxm1023" },  //ProKnockOut
  'com.teadoku.flashnote': { cm: 'timea', hx: 'hxpda', id: "pro_ios_ipad_mac", latest: "chxm1023" },  //AnkiNote
  'com.tapuniverse.texteditor': { cm: 'timea', hx: 'hxpda', id: "com.tapuniverse.texteditor.w", latest: "chxm1023" }  //TextEditor
};

//内购数据变量
const receipt = { "quantity": "1", "purchase_date_ms": "1694250549000", "is_in_intro_offer_period": "false", "transaction_id": "490001314520000", "is_trial_period": "false", "original_transaction_id": "490001314520000", "purchase_date": "2023-09-09 09:09:09 Etc/GMT", "product_id": yearlyid, "original_purchase_date_pst": "2023-09-09 02:09:10 America/Los_Angeles", "in_app_ownership_type": "PURCHASED", "original_purchase_date_ms": "1694250550000", "web_order_line_item_id": "490000123456789", "purchase_date_pst": "2023-09-09 02:09:09 America/Los_Angeles", "original_purchase_date": "2023-09-09 09:09:10 Etc/GMT" };
const expirestime = { "expires_date": "2099-09-09 09:09:09 Etc/GMT", "expires_date_pst": "2099-09-09 06:06:06 America/Los_Angeles", "expires_date_ms": "4092599349000", };
let anchor = false;
let data;

// 核心内容处理
for (const i in list) {
  const regex = new RegExp(`^${i}`, `i`);
  if (regex.test(ua) || regex.test(bundle_id)) {
    const { cm, hx, id, ids, latest, version } = list[i];
    const receiptdata = Object.assign({}, receipt, { "product_id": id });
    //处理数据
    switch (cm) {
      case 'timea':
        data = [ Object.assign({}, receiptdata, expirestime)];
        break;
      case 'timeb':
        data = [receiptdata];
        break;
      case 'timec':
        data = [];
        break;
      case 'timed':
        data = [
          Object.assign({}, receiptdata, { "product_id": ids }),
          Object.assign({}, receiptdata, expirestime, { "product_id": id })
        ];
        break;
    }
    //处理核心收尾
    if (hx.includes('hxpda')) {
      chxm1023["receipt"]["in_app"] = data;
      chxm1023["latest_receipt_info"] = data;
      chxm1023["pending_renewal_info"] = [{ "product_id": id, "original_transaction_id": "490001314520000", "auto_renew_product_id": id, "auto_renew_status": "1" }];
      chxm1023["latest_receipt"] = latest;
    }
    else if (hx.includes('hxpdb')) {
      chxm1023["receipt"]["in_app"] = data;
    }
    else if (hx.includes('hxpdc')) {
      const xreceipt = { "expires_date_formatted" : "2099-09-09 09:09:09 Etc/GMT", "expires_date" : "4092599349000", "expires_date_formatted_pst" : "2099-09-09 06:06:06 America/Los_Angeles", "product_id" : id, };
      chxm1023["receipt"] = Object.assign({}, chxm1023["receipt"], xreceipt);
      chxm1023["latest_receipt_info"] = Object.assign({}, chxm1023["receipt"], xreceipt);
      chxm1023["status"] = 0;
      chxm1023["auto_renew_status"] = 1;
      chxm1023["auto_renew_product_id"] = id;
      delete chxm1023["latest_expired_receipt_info"];
      delete chxm1023["expiration_intent"];
    }
    // 判断是否需要加入版本号
    if (version && version.trim() !== '') { chxm1023["receipt"]["original_application_version"] = version; }
    anchor = true;
    console.log('恭喜您，已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/chxm1023');
    break;
  }
}

// 如果没有匹配到 UA 或 bundle_id 使用备用方案
if (!anchor) {
  data = [ Object.assign({}, receipt, expirestime)];
  chxm1023["receipt"]["in_app"] = data;
  chxm1023["latest_receipt_info"] = data;
  chxm1023["pending_renewal_info"] = [{ "product_id": yearlyid, "original_transaction_id": "490001314520000", "auto_renew_product_id": yearlyid, "auto_renew_status": "1" }];
  chxm1023["latest_receipt"] = "chxm1023";
  console.log('很遗憾未能识别出UA或bundle_id\n但已使用备用方案操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/chxm1023');
}

chxm1023["Telegram"] = "https://t.me/chxm1023";
chxm1023["warning"] = "仅供学习，禁止转载或售卖";

$done({ body: JSON.stringify(chxm1023) });
