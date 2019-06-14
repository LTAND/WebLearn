const express = require("express")

const app = express()

app.get("/",(req,res)=>{
  res.send("1123124")
})

app.listen(8080, ()=>{
  console.log("Listen at http://localhost:8080")
})