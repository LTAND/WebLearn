const http = require("http")
const url = require("url")
const querstring = require("querystring") 

let server = http.createServer((req, res)=>{
  // GET
  let { pathname, query } = url.parse(req.url, true)
  
  // POST
  let str = ''
  let post = ""
  req.on("data", (data)=>{
    str += data
  })
  req.on("end",  ()=>{
    post = querstring.parse(str)
  })
  console.log("pathname, query, post\n", pathname, query, post)

  
  res.end()
})

server.listen(8181)