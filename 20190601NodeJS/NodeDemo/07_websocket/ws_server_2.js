const http = require("http")
const io = require("socket.io")

let httpServer = http.createServer().listen(8080)

let wsServer = io.listen(httpServer)


let aSock = [] // 存放已连接的客户端数组
wsServer.on("connection", sock => {
  console.log("客户端已连接")
  aSock.push(sock)

  sock.on("disconnect", () => {
    let n = aSock.indexOf(sock);
    n == -1 && console.log("客户端失去连接")
  })

  sock.on("msg", str => { // 接收客户端发来的信息
    aSock.forEach(s => {
      s != sock && s.emit("response", str) // 发给所有客户端（不包含自己客户端）
    })
  })
})



