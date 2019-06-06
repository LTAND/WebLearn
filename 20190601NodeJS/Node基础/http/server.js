const fs = require("fs")
const http = require("http")


let server = http.createServer((req, res) => {
// 主程序跑完，但文件还未读取完，就执行res.end()
  fs.readFile("01.txt", (err, data) => {
    // err ? res.write("404") : res.write("abc");
    if(err){
      res.writeHead(404)
      res.write("404 Not Found")
    }else{
      res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>helle 你好这是我的服务器</h1></body></html>')
    }
    res.end()   // write after end
  })

})
const host = "localhost"
const port = "8181" 
server.listen(port, (err) => {
  err ? console.log(err) : console.log(`Listen at http://${host}:${port}`)
})