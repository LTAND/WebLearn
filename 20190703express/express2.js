const express = require("express")
const body = require("body-parser")

// get && post
let server = express()

server.use(body.urlencoded({ extended: false }))

server.get("/upload", (req,res)=>{

  console.log(req.query)
})

server.post("/upload", (req, res)=>{
  
  console.log(req.body)
})

server.listen(8080)

