const express = require("express")

let server = express()

// server.use('/',(req, res)=>{
//   res.send("ok")
// })

server.use(express.static("./"))

server.listen(8080)

