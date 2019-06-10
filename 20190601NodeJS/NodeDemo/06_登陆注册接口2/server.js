const http = require("http")
const url = require("url")
const mysql = require("mysql")
const fs = require("fs")
const zlib = require("zlib")
const queryString = require("querystring")

let server = http.createServer((req, res)=>{
  let db = mysql.createPool({ host: "localhost", port: 3306, user: "root", password: "", database:"student"})

  let { pathname, query } = url.parse(req.url, true) // GET

  switch(pathname){
    case "/reg":
      console.log( pathname, query )
      let { user, pass } = query
      
      if (!user){
        res.write(`{ err:1, msg:"username can't be null"}`)
        res.end()
      }else if(!pass){
        res.write(`{ err:1, msg:"password can't be null"}`)
        res.end()
      }else if(!/^\w{4,16}$/.test(user)){
        res.write(`{ err:1, msg:"username length is 4 at least"}`)
        res.end()
      }else if (/['|"]/.test(pass)){
        res.write(`{ err:1, msg:"password have not ' or " "}`)
        res.end()
      }else{
        db.query(`SELECT * FROM user_table WHERE username='${user}'`, (err, data)=>{
          if(err){
            console.log("db err 1", err)
            res.write(`{ err:1, msg: "database is err"}`)
            res.end()
          }else if(data.length>0){
            // 用户名重复
            res.write(`{ err:0, msg: "username is existed"}`)
            res.end()
          }else{
            // 用户名注册到数据库
            db.query(`INSERT INTO user_table (id, username,password) VALUES(0, '${user}','${pass}')`, (err, data)=>{
              if(err){
                console.log("db err 2", err)
                res.write(`{ err:1, msg: "database is err"}`)
                res.end()
              }else{
                res.write(`{ err:0, msg: "reg success"}`)
                res.end()
              }
            })
          }
        })
      }
      break;
    case "/login":
      let str = ''
      req.on("data", data=>{
        buffer += data
      })
      req.on("end", ()=>{
        let post = queryString.parse(buffer)
      })

      break;
    default:
      // 静态文件01.html
      let rs = fs.createReadStream(`www${pathname}`)
      let gz = zlib.createGzip()

      res.setHeader("content-encoding", "gzip")

      rs.pipe(gz).pipe(res)

      rs.on("error", error => {
        console.log("出错", error)
        res.writeHeader(404)
        res.write("Not found")
        res.end()
      })
}

})

const p = 8080
server.listen(p, error => { 
  console.log(`http://localhost:${p}/01.html`)
  console.log(error)
})