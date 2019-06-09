// 读取文件属性
const fs = require("fs")

fs.stat("1.txt",(err,stat)=>{
  if(err){
    console.log("读取不到文件")
  }else{
    console.log(stat)
    console.log(stat.mtime.constructor)
    console.log("mtime:", stat.mtime)
    console.log("mtime:", stat.mtime.toGMTString()) // 调用本身的时间函数
  }
})