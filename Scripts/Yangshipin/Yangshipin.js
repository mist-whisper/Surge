/*
20240805.18.57
[rewrite_local]
# 广告
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/.+\.json url reject-dict

#会员
^http:\/\/(liveinfo|bkliveinfo|playvv)\.ysp\.cctv\.cn\/(playvinfo\?.+|.*) url script-request-header ysp.js

[mitm]
hostname = *.ysp.cctv.cn, cdn.cmgadx.com
*/

let headers = $request.headers;
headers.Cookie = "_vide9";
$done({
  "headers": headers
});