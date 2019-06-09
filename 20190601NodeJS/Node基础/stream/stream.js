const fs = require("fs")

let rs = fs.ReadStream("1.png") 
let ws = fs .WriteStream("2.png")

rs.pipe(ws)  // rs通过管道流到ws

ws.on("finish", ()=>{
  console.log("写入完成") 
})


// 流处理失败
let rsErr = fs.ReadStream("222222.png") 
rsErr.on("error",err=>{
  // 没有此文件，会报错
  console.error("读取失败")
})


