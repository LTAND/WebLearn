const express = require("express")
const pathlib = require("path")

const server = express()

// send的其他方法
server.get("/1", (req, res, next)=>{
  res.redirect("http://www.baidu.com/")
  console.log("aaa")
  next()
})

server.get("/1", (req, res)=>{
  console.log("bbb")
})

server.get("/2", (req, res)=>{
  res.sendStatus(404)
})

server.get("/3", (req, res) => {
  // 读取文件
  res.sendFile(pathlib.resolve("a.txt"))
})

server.use(express.static("www/")) // 中间件

server.listen(8080)