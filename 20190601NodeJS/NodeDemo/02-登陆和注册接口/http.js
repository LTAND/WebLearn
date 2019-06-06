const http = require("http")
const url = require("url")
const querystring = require("querystring")

let users = {
  // user: pass
  // aaaa: 1234
}


let server = http.createServer((req, res) => {
  // GET
  let { pathname, query } = url.parse(req.url, true)
  console.log(url.parse(req.url, true))
  // POST
  let [str, post] = ["", ""]
  req.on("data", (data) => {
    str += data
  })
  req.on("end", () => {
    post = querystring.parse(str)
  })
  
  switch (pathname) {
    case "/reg":
      let { user, pass } = query
      console.log(query)
      
      if (!user) {
        res.write('{ "err": 1, "msg": "username is required"}');
      } else if(!/^\w{8,32}$/.test(user)){ // 用户名长度
        res.write('{ "err": 1, "msg": "invaild username" }')  // 用户名长度在8-32
      } else if (!pass) {
        res.write('{ "err": 1, "msg": "password is required"}');
      } else if (!/^['|"]$/.test(pass)){
        res.write('{ "err": 1, "msg": "invaild passwrold" }')
      }else if (users[user]){
        res.write('{ "err": 1, "msg": "username already exsits"}');
      } else {
        users[user] = pass
        res.write('{ "err": 0, "msg": "success"}');
      }
      res.end()
      break;

    case "login":
      let { use, pwd} = post

      console.log(post)

      if (!use) {
        res.write('{ "err": 1, "msg": "username is required"}');
      } else if (!/^\w{8,32}$/.test(use)) { // 用户名长度
        res.write('{ "err": 1, "msg": "invaild username" }')  // 用户名长度在8-32
      } else if (!pwd) {
        res.write('{ "err": 1, "msg": "password is required"}');
      } else if (!/^['|"]$/.test(pwd)) {
        res.write('{ "err": 1, "msg": "invaild passwrold" }')
      } else if (users[use]) {
        res.write('{ "err": 1, "msg": "username is already exsits"}');
      } else if (users[use] !== pwd){
        res.write('{ "err": 1, "msg": "username or passworld is incorrect"}');
      }
      else {
        users[use] = pwd
        res.write('{ "err": 0, "msg": "login success"}');
      }
      res.end()
      break;

    default:
      res.writeHead(404)
      res.write("Not Found")
  }

})

server.listen(8081)