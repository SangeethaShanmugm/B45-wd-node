const os = require("os");

console.log("Free Memory", os.freemem() / 1024 / 1024 / 1024);
console.log("Total Memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("OS Version", os.version());

//1kb => 1024 byte -> 1mb => 1024 kb => 1gb => 1024 mb
console.log("cpus", os.cpus());
console.log("Platform", os.platform());
console.log("Arch", os.arch());
console.log("uptime", os.uptime());
console.log("UserInfo", os.userInfo());
