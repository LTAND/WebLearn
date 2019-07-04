// session
const cookieSession = require("cookie-session")
const express = require("express")

let server = express()

server.use(cookieSession({
  keys: ["adssadasd", "rwfsfadasd", "asdasfwra", "fasfasfsa"] // 循环使用
  //, secret:"asdasdas"
}))

server.get("/a", (req, res) => {

  if (!req.session["count"]) {
    req.session.count = 1
  } else {
    req.session.count++
  }

  res.send(`第${req.session.count}次访问`)
  res.end()
})

server.listen(8080)