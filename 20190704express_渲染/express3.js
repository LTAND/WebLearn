const ejs = require("ejs")

ejs.renderFile("./ejs/2.html", {
  a: 1,
  b: 2,
  str: "asdasfasf",
  tab: "<h1>asdwqe213123</h1>",
  arr: ["apple", "orange", "banana"],
  headerPath: "./compontent/header.html"
})


.then(data => {
  console.log("渲染成功:");
  console.log(data)
}, err => {
  console.log("渲染失败")
  console.log(err)
})