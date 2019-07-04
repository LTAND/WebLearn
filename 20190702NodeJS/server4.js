// 响应文件
const http = require("http")
const fs = require("fs")
const zlib = require("zlib")

http.createServer((req, res) => {
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

  // 文件流读取,压缩响应文件
  let rs = fs.createReadStream(`www${req.url}`)
  let gz = zlib.createGzip()

  res.setHeader("content-encoding", "gzip")

  rs.pipe(gz).pipe(res)

  rs.on("error", function () {
    res.setHeader("content-encoding", "")
    res.writeHeader("404")
    res.write("Not Found")
    res.end()
  })

}).listen(8080)