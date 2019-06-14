const http = require("http")

let server = http.createServer((req, res)=>{
  res.write("2646")
  res.end()
})

server.listen(8181, (err)=>{
  console.log("Listen at http://localhost:8181")
})