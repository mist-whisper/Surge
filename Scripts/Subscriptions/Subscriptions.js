/*************************************

项目名称：订阅通解锁会员
更新日期：2024-07-22
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
原始地址：https://github.com/chxm1023/Rewrite/blob/main/iTunes.js
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：如果脚本无效，请先排除是否脚本冲突
特别说明：此脚本可能会导致App Store无法登录ID
解决方法：关[MITM][脚本][代理工具]方法选一即可

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/mist-whisper/Surge/master/Scripts/Subscriptions/Subscriptions.js

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
  'Subscriptions': { cm: 'timea', hx: 'hxpda', id: "com.touchbits.subscriptions.iap.pro.yearly", latest: "chxm1023" }  //订阅通
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
