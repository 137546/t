/*
京喜财富岛热气球
cron 30 * * * * jd_cfdjs
活动入口：京喜APP-我的-京喜财富岛
已支持IOS双京东账号,Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
============Quantumultx===============
[task_local]
#京喜财富岛热气球
30 2 * * * https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd_loop.js, tag=京喜财富岛热气球, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jxcfd.png, enabled=true
================Loon==============
[Script]
cron "30 1 * * *" script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd_loop.js,tag=京喜财富岛热气球
===============Surge=================
京喜财富岛热气球 = type=cron,cronexp="30 * * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd_loop.js
============小火箭=========
京喜财富岛热气球 = type=cron,script-path=https://raw.githubusercontent.com/Aaron-lv/sync/jd_scripts/jd_cfd_loop.js, cronexpr="30 * * * *", timeout=3600, enable=true
 */
let common = require("./function/common");