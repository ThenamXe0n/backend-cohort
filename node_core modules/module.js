import fs from "fs";

fs.writeFileSync("pathmodule.js", "console.log('paths')"); //arg filename, text to write

let filecontent= fs.readFileSync("pathmodule.js","utf-8")
console.log("file content is ",filecontent)

fs.appendFileSync("pathmodule.js","\nfunction a(){console.log(2+2)}")

console.log(fs.readFileSync("pathmodule.js","utf-8"))


setTimeout(()=>{
fs.unlinkSync("pathmodule.js")
},2000)