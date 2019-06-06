const http = require("http")
const qs = require("querystring")

let server = http.createServer(function(req, res){
  let str = ""
  
  req.on("data", data=>{
    str += data
  })

  req.on("end", ()=>{
    let post = qs.parse(str) // qs将数据转化json
    console.log(str, post)
  })

  res.end()
}).listen("8181", (data)=>{
  console.log("Listen at http://localhost:8181")
})