// 尝试测试
const http = require("http")
const io = require("socket.io")

let httpServer = http.createServer().listen(8080)

let wsServer = io.listen(httpServer)

wsServer.on("connection", sock=>{
  // 后台发送 sock.emit
  // 后台接收 sock.on
  // sock.emit("send_msg", "are you ok!")

  // sock.on("aaa", (a, b, c)=>{
  //   console.log(a, b,c)
  // })

  setInterval(() => {
    sock.emit("date", new Date().getTime())

  }, 1000);

})