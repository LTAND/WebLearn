const http = require("http")

let server = http.createServer((req, res)=>{
  // request - 请求（后台接收数据）
  // response - 响应（后台传递数据）

  console.log(req.url)
  res.write(req.url)
  res.end()
  
})

server.listen(8888) 
console.log(`listen at http://localhost:8888`)