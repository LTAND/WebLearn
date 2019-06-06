const crypto = require("crypto")


function md5(pwd){
  let obj = crypto.createHash("md5")
  obj.update(pwd)
  return obj.digest("hex")
}

// 双层md5
console.log(md5(md5('12345')+"qdqwdj"))
