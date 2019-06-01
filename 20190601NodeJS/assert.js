// 断言模块
const assert = require("assert")

function sum(a, b){
  assert(arguments.length === 2, "必须是两个参数")
  assert(typeof a == "number", "第一个参数类型必须是数字")
  assert(typeof b == "number", "第二个参数类型必须是数字")
  return a + b
}

console.log(sum(1,2))
// console.log(sum(1,"3"))    // 出现断言
// console.log(sum(1,11,22))  // 出现断言