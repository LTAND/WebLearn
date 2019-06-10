// 缓存处理服务

const http = require("http")
const fs = require("fs")
const url = require("url")

let server = http.createServer((req, res)=>{
  let { pathname } = url.parse(req.url)

  

  fs.stat(`www${pathname}`, (err, stat)=>{
    if(err){
      console.log("获取文件信息失败")
      res.writeHeader(404)
      res.write('Not Found')
      res.end()
    }else{
      if(req.headers["if-modified-since"]){   // 客户端之前获取的时间
        
        // 缓存判断处理
        let oDate = new Date(req.headers["if-modified-since"])
        let client_time = Math.floor(oDate.getTime()/1000)      // 客户端之前的存储的文件时间
        let server_time = Math.floor(stat.mtime.getTime()/1000)  // 服务器的文件时间

        if(server_time>client_time){
          // 服务器的文件版本大于客户端，就发客户端新版本
          sendToFlieClient()  
        }else{
          res.writeHeader(304)
          res.write("Not Modified")
          res.end()
        }
      }else{
        sendToFlieClient()
      }
    }
    function sendToFlieClient(){
      // 发送客户端文件
      let rs = fs.createReadStream(`www${pathname}`)

      res.setHeader("Cache-Control", "no-cache")  // 新增储存控制 
      res.setHeader("Last-Modified", stat.mtime.toGMTString())

      rs.pipe(res)
      
      rs.on("error", (err)=>{
        console.log("读取失败", err)
        res.writeHeader(404)
        res.write('Not Found')
        res.end()
      })
    }
  })

  
  


})

server.listen("8080", err=>{
  console.log("http://localhost:8080/1.html")
})