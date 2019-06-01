// eg: https://www.baidu.com:8080/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1

const url = require("url")
let eg = "https://www.baidu.com:8080/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1"

console.log("\n eg: \n", url.parse(eg, true)) // true - 将query字段 parse化

const { URL } = require("url")
const myUrl_1 = new URL("/api?aa=1&b=2", "https://music.yeah.com:8080")
// const myUrl_2 = new URL("https://music.yeah.com:8080/api?aa=1&b=2")
const myUrl_3 = new URL("https://www.baidu.com:8080/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1")

console.log("\n myUrl_1: \n", myUrl_1)
console.log("\n myUrl_3: \n", myUrl_3)