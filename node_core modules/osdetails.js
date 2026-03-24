import os  from "os";

console.log("Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("Architecture:", os.arch());
// console.log("CPU Info:", os.cpus());
console.log("Total RAM:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Uptime:", os.uptime());
console.log(os.userInfo());
console.log(os.hostname());
console.log(os.homedir());