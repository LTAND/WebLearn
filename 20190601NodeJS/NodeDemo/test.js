const express = require("express")

let server =  express()

server.get("/index", (req, res, next)=>{
  console.log(req.query)
  if(Number(req.query.num>10)){
    next()
  }else{
    
    res.send({err: 1, msg: "请输入大于10的num"})
  }
})

server.get("/index", (req, res, next)=>{
  res.send({err:0, msg: "成功"})

})

server.use(express.static("./www/")) // http://loccalhost:8080/01_ajax2.0.html

server.listen(8080)



