# Node.js Core Modules (fs, path, os)

## Topics Covered
- File System (fs)
- Path Module (path)
- OS Module (os)

---

# 📁 1. FS MODULE (File System)

##  Create a File

```js
const fs = require("fs");

fs.writeFileSync("test.txt", "Hello Backend");
```

---
#📖 Read a File
```
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);
```

---

# ➕ Append Data to File
```
const fs = require("fs");

fs.appendFileSync("test.txt", "\nNew Line Added");
```

---
# ❌ Delete a File
```
const fs = require("fs");

fs.unlinkSync("test.txt");
```

----

## 📂 2. PATH MODULE

## 🔗 Join Path
```
const path = require("path");

const filePath = path.join(__dirname, "files", "test.txt");
console.log(filePath);
```
---
🔹 Arguments used here:
### __dirname
- A global variable in Node.js
Represents the absolute path of the current file’s directory
### "files"
- A folder name (string)
### "test.txt"
- A file name (string)
---

> Important !!

 | Feature     | CommonJS | ES Modules            |
| ----------- | -------- | --------------------- |
| `require()` | ✅        | ❌                     |
| `import`    | ❌        | ✅                     |
| `__dirname` | ✅        | ❌ (manual fix needed) |

## requires manual fix
```
import path from "path";
import { fileURLToPath } from "url";

// recreate __filename
const __filename = fileURLToPath(import.meta.url);

// recreate __dirname
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "files", "test.txt");

console.log(filePath);
```
---
##  📄 Get File Extension
```
const path = require("path");

console.log(path.extname("test.txt"));
```

---
## 📛 Get File Name
```
const path = require("path");

console.log(path.basename("test.txt"));
```

----

# 💻 3. OS MODULE
## 🖥️ Get System Information

```
const os = require("os");

console.log("Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("Architecture:", os.arch());
console.log("CPU Info:", os.cpus());
console.log("Total RAM:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Uptime:", os.uptime());
console.log(os.userInfo());
console.log(os.hostname());
console.log(os.homedir());

```


## Bonus 
### ip checker 

```
import os from "os";

const nets = os.networkInterfaces();

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === "IPv4" && !net.internal) {
      console.log("IP Address:", net.address);
    }
  }
}
```