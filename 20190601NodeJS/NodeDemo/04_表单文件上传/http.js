const http = require("http")

let server = http.createServer((req, res)=>{
  let arr = []
  
  req.on("data", data=>{
    arr.push(data)
  })
  
  req.on("end", ()=>{
    let data = Buffer.concat(arr) // 将被分隔数据包连成一块数据
    console.log(data)
    console.log(data.toString()) 
  })
  
  res.end() // 表明已发送所有响应头和主体，该服务器应该视为此消息已完成。
})

// http://localhost:8080
server.listen(8080)