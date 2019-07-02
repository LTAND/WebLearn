const http = require("http")
const fs = require("fs")
const zlib = require("zlib")

const server = http.createServer((req, res)=>{
/**
 * 文件读取
  fs.readFile(`www/${req.url}`, (err, buffer)=>{
    if(err){
      res.write(404)
      res.end()
    }else{
      res.write(buffer)
      res.end()
    }
  })

 */

  let rs = fs.createReadStream(`www/${req.url}`)
  let gz = zlib.createGzip()
  res.pip(gz).pip(rs)
  rs.on(error, function(){
    res.write(404)
    res.send("Not found")
  })
})
server.listen(8080)