const net = require("net")  // TCP 原生Socket
const crypto = require("crypto")

function parseHeasers(str) {

  let lines = str.split("\r\n").slice(1, -2) // 舍弃第一行和倒数两行

  // 切开
  let headers = {}
  lines.forEach(line => {
    let [key, val] = line.split(": ")
    headers[key.toLowerCase()] = val
  })
  return headers
}

let server = net.createServer(sock => {

  console.log("连接")

  // 第一次握手，接收客户端请求头数据
  sock.once("data", (data) => {
    console.log("hand shake start...")

    let str = data.toString()
    let headers = parseHeasers(str)

    // 判断协议中请求头信息
    if (headers['upgrade'] != 'websocket') {
      console.log("协议不对:", headers['upgrade'])

      sock.end()
    } else if (headers['sec-websocket-version'] != 13) {
      console.log("版本不对:", headers['sec-websocket-version'])

      sock.end()
    } else {
      // 服务器传递响应头
      let key = headers['sec-websocket-key']
      const mask = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"

      // sha1(key+mask)->base64=<client

      let hash = crypto.createHash('sha1')
      hash.update(key + mask)
      const key2 = hash.digest("base64")

      sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-Websocket-Accept: ${key2}\r\n\r\n`) // 触发客户端的onopen事件

      console.log("hand shake end")
    }

    // 客户端断开了
    sock.on("end", () => {
      console.log("客户端已断开")
    })

  })

})

server.listen(8080)