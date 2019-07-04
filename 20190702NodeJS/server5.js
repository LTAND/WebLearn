// 多进程
const http = require("http")
const fs = require("fs")
const zlib = require("zlib")

const cluster = require("cluster")
const os = require("os")


if (cluster.isMaster) {
  // 只有主进程才分裂子进程
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }
} else {
  http.createServer((req, res) => {
    let rs = fs.createReadStream(`www${req.url}`)
    let gz = zlib.createGzip()

    res.setHeader("content-encoding", "gzip")

    rs.pipe(gz).pipe(res)

    rs.on("error", function () {
      res.setHeader("content-encoding", "")
      res.writeHeader("404")
      res.write("Not found")
      res.end()
    })

  }).listen(8080)
}