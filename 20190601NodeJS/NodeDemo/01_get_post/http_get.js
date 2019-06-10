const http = require("http")
const url = require("url")

const HOST = "localhost"
const PORT = "8080"

const server = http.createServer(function(req, res){
  let { pathname:n, query } = url.parse((req.url), true)
  
  console.log(n, query )
})

server.listen(PORT, (err) => { console.log(`http://${HOST}:${PORT}`)})