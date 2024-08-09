/* 引用地址：https://github.com/WeiGiegie/666/blob/main/mgsp.js
/*
 *
 *
脚本功能：vip
软件版本：6.2.30
下载地址：
脚本作者：
更新时间：2024-6.12
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 咪咕视频Vip会员
^https?:\/\/(play|dis).*miguvideo.com\/(play|dis)(url|play)\/.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mgsp.js
^https?:\/\/play.miguvideo.com\/playurl\/v1\/play\/playurl\?2Kvivid=true?.*=true$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/mgspck.js
# > 开屏广告
^https://.*miguvideo\.com/request/sdk url reject-200
^https://common-sc\.miguvideo\.com/task/v7/task-list/cmvideo/visitor url reject-200

[mitm] 
hostname = *.miguvideo.com

*
*
*/