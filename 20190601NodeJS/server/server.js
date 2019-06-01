const fs = require("fs")
const http = require("http")


let server = http.createServer((req, res) => {
// 主程序跑完，但文件还未读取完，就执行res.end()
  fs.readFile("01.txt", (err, data) => {
    // err ? res.write("404") : res.write("abc");
    if(err){
      res.write("404")
    }else{
      res.write(data)
    }
  })

  res.end()   // write after end
})


server.listen("8080", (err) => {
  err ? console.log(err) : console.log("Listen at http://localhost:8080")
})