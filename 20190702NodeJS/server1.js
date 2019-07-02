const http = require("http")
const urlib = require("url")

const server = http.createServer((req, res)=>{
  let { pathname, query } = urlib.parse(req.url, true)

  console.table(pathname, query)
})
server.listen(8080)