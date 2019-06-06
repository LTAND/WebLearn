const http = require("http")
const {URL} = require("url")


http.createServer((req,res)=>{
  let api = new URL(req.url)
  res.end()
}).listen("8081",(err)=>{console.log("http://127.0.0.1:8081")})

