const koa = require("koa")

let server = new koa()
server.listen(8080)

server.use(async ctx=>{
  ctx.response.body = "asd"
  console.log(ctx.cookies.get("a"))
  ctx.cookies.set("a", 1111111)
  ctx.cookies.set("b", 112222222222)
  ctx.cookies.set("c", 11, {
    maxAge: 86400*1000    // 24h->ms
  })
})