const dns = require("dns")

dns.lookup("baidu.com", (err, address, family) => {
  err ? console.log(err) : console.log("IP 地址: %j, 地址簇: IPv%s", address, family)
  // IP 地址: "103.51.144.90", 地址簇: IPv4
})

dns.resolve("baidu.com", (err, res) => {
  err ? console.log("解析失败：", err) : console.log("dns.resolve():", res)
})
