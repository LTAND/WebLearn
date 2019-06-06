const path = require("path")

const local = "/var/www/zan/1.png"

/** 
 * parse - 返回路径对象
 * dirname - 目录名
 * basename - 文件名
 * exttname - 文件后缀名
*/
console.log(path.parse(local)) 
console.log(path.dirname(local))   // var/www/zan/
console.log(path.basename(local))  // 1.png
console.log(path.extname(local))  // .png

