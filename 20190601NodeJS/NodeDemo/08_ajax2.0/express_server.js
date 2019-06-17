const express = require("express")  // 主体
const body = require("body-parser")  // 接收普通的POST数据
const multer = require("multer")    // 接收文件的POST数据

let server = express()
server.listen(8080)


// 处理表单提交，对应请求头application/x-www-form-urlencoded
server.use(body.urlencoded({ extended: false }))    // 为true时将使用qs库处理数据，通常不需要

// 设置保存上传文件路径
let upload = multer({ dest: './upload/' }) 

// 处理上传文件
server.use(upload.any())

// 处理请求
server.use("/api",(req, res, next)=>{
  // 跨域
  if (req.headers["origin"] == "null") { 
    // 路径为c盘打开的文件origin为null
    res.setHeader('Access-Control-Allow-Origin', "*")
  }

  console.log(req.body)         // 普通POST数据
  console.log(req.files)        // 文件POST数据
  res.send( { err: 0, data: req.body, msg: "成功", imgPath: `localhost:8080/1111.png`} )
})


server.use(express.static('./www/'))
