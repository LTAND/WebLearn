const str ='{"name":"this is the String"}'  // 字符串
let json = null

// JSON字符串 => JavaScript值或对象
if(JSON && JSON.parse){
  json = JSON.parse(str)
}else{
  json = eval("("+str+")")
}

console.log("str: ",str)
console.log("json: ",json)


const obj = {"name":"this is the Object"}   // js对象
JSON.stringify(obj)