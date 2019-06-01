// FileSystem文件系统
const fs = require("fs")
/*

// 读取文件
fs.readFile("1.txt", (err, data) => {
  if(err){
    console.log("读取失败",err) 
  }else{
    // err =null
    console.log("读取成功", data) // "a".charCodeAt() => 97 => 67（16进制）
    console.log("读取成功", data.toString()) //  只有txt和html才toString，图片文件不可
  }
})

// 写入文件 
fs.writeFile("2.txt", "啊哈哈哈哈ajwdjaw", err =>{
  if(err){
    console.log("写入失败", err)
  }else{
    console.log("写入成功")
  }
})

*/

// 读写结合使用
fs.readFile("1.txt", (readErr, data) => {
  readErr && console.log(readErr)
  fs.writeFile("33.txt", data + "新文字", err => {
    err && console.log(err)
  })
})

fs.readFile("test.png", (err, data) => {
  err ? console.log("读取图片失败", err) : fs.writeFile("copy.jpg", data, err => console.log(err ? err : "成功写入图片"));
  
})
