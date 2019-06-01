const MyEmitter = require("events").EventEmitter; 

let ev = new MyEmitter()

// 1.监听||注册事件(接受数据) 
ev.on("msg", function(a, b, c){
  console.log("ev：", this)   
  console.log(a, b, c)
})

// 2、派发||触发事件(发送数据)
ev.emit("msg", 1, 2, 3)


// 错误事件
ev.on("error", function(){
  console.error("哈哈错误啦")
})
console.log("=======错误事件=======")
ev.emit("error", new Error()) // "哈哈错误啦"
ev.emit("error", new Error()) // "哈哈错误啦"


// 一次性事件
ev.once("oneSend", (data)=>{
  console.log(this)  // {} -- 箭头函数的this不会指向实例
  console.log(data)
})
console.log("=======一次性事件=======")
ev.emit("oneSend",{name:"once"})
ev.emit("oneSend",{name:"once"})  // 第二次是的一次事件没反应

 //触发oneSend，自动销毁
console.log("所有事件名" , ev.eventNames())  // 
