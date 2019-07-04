const express = require("express")
const server = express()

/**
 * http://localhost:8080/article/112233           ->   阅读文章
 * http://localhost:8080/article/112233/comment   ->   文章评论
 * http://localhost:8080/article/edit             ->   编辑文章
 * http://localhost:8080/article/aaa/a
 * http://localhost:8080/article/aaa/b
 * http://localhost:8080/article/aaa/c
 * 
 * http://localhost:8080/user                     ->   用户中心
 * http://localhost:8080/user/4432                ->   个人用户
 * http://localhost:8080/user/4432/edit           ->   编辑用户
 *
 */ 

// 路由加载
server.use("/article", require("./router/article.js"))
server.use("/user", require("./router/user.js"))

server.use((req, res)=>{
  res.send(404)
})

server.listen(8080)