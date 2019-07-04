const http = require("http")
const qs = require("querystring")

const server = http.createServer((req, res)=>{
  let arr = []
  
  req.on("data", buffer=>{
    arr.push(buffer)
  })

  req.on("end", ()=>{
    let buffer = Buffer.concat(arr)
    let post = qs.parse(buffer.toString())
    console.log('post:', post);
  })

})
server.listen(8080)