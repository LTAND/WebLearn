// cookie
const express = require("express")
const cookieParser = require("cookie-parser")     // 浏览器cookies

let server = express()

server.use(cookieParser("asdasdaishdahsfhwqhfihasfhaskhfkaswihkalads"))

server.get("/", (req,res)=>{

  res.cookie("ddd", 333)
  res.cookie("ccc", 222, { signed: true })            // 带签名 s%3A222.oAUvuY4cWr7MKVgCg6C2rE36WqbfOwaXQ9PB%2BLKLA4Q decodeURIComponent=> s:222.oAUvuY4cWr7MKVgCg6C2rE36WqbfOwaXQ9PB+LKLA4Q
  
  console.log('Cookies:', req.cookies);
  console.log('Signed Cookies:', req.signedCookies);  // { ccc: false }
  
  res.send("aaa")

}).listen(8080)
