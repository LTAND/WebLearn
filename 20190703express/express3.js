// 文件post
const express = require("express")
const multer = require("multer")  // Middleware for handling `multipart/form-data`.
const server = express()

server.use(multer({ dest: "./upload/" }).any()) // 放置上传文件位置

server.post("/upload", (req, res) => {
  // // 跨域
  // if (req.headers["origin"] == "null") {
  //   // 路径为c盘打开的文件origin为null
  //   res.setHeader('Access-Control-Allow-Origin', "*")
  // }

  console.log("body",req.body)
  console.log("files",req.files)   // 文件POST数据
  res.send({ err: 0, msg: "文件传输成功" })
})

server.listen(8080)
