// 数据库操作
const mysql = require("mysql")
const http = require("http")
const config = require("./config")

const crypto = require("crypto")

function md5(str){
  let obj = crypto.createHash("md5")
  obj.update(str)
  return obj.digest("hex")
}

function md5_2(str){
  return md5(str+config.db_key)
}

let username = "blue"
let password = "123345"

http.createServer((req, res) => {
  let db = mysql.createPool({
    host:       config.db_host,
    port:       config.db_port,
    user:       config.db_user,
    passsword:  config.db_password,
    database:   config.db_database
  })

  db.query(`SELECT * from test_table`, (err, rows)=>{
    console.log(rows)
  })

  db.query(`INSERT INTO test_table (username, password) VALUES('${username}', '${md5_2(password)}')`, (err, rows) => {
    console.log("err", err)
    console.log("rows", rows)
  })

}).listen(8080)