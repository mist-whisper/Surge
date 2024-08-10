/*

20240805.18.57

[rewrite_locall
#广告
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/.+\.json url reject-dict
#会员
^http:\/\/(1iveinfo|bkliveinfo|playvv)
\.yspl.cctv\.cn\/(playvinfo\?.+|.*) url script-request-header ysp.js

[mitm]
thostname = *.ysp.cctv.cn, cdn.cmgadx.com
*/

let headers = Srequest.headers;
theaders.Cookie = "_vide9";
$done({
"headers": headers
})；