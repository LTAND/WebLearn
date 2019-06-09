const http = require("http")
const fs = require("fs")

let server = http.createServer((req,res)=>{
  // 客户端请求服务器的文件html
  let rs = fs.ReadStream(`www${req.url}`)
  
  rs.pipe(res)
  
  rs.on("error",err=>{
    res.writeHeader(404)
    res.write("Not found")

    res.end()
  })

})

server.listen(8080,(err)=>{console.log("http://localhost:8080/1.html")})