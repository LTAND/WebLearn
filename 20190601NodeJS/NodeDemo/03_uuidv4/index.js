const uuidv4 = require("uuid/v4")

console.log(uuidv4().replace(/\-/g, "")) // 89daf270c4c6437da229ef376620b4ea - 去除中线后
