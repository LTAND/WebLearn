const fs = require("fs")
const zlib = require("zlib")

let rs = fs.ReadStream("gzzz.js")
let ws = fs.WriteStream("gzzz.js.gz")

let gz = zlib.createGzip()

rs.pipe(gz).pipe(ws)

ws.on("finish", ()=>{
  console.log("写入成功")
})