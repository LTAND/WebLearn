const crypto = require("crypto")

let obj = crypto.createHash("md5")

// obj.update("12345")
obj.update("1")
obj.update("234")
obj.update("5")


console.log(obj.digest("hex")) // hex 十六进制 