const koa = require("koa")
const router = require("koa-router")


let server = new koa()
server.listen(8080)

let r1 = new router()
server.use(r1.routes())

r1.get("/api/:name/:id", async (ctx, next)=>{

  ctx.response.body = "api"
  console.log(ctx.params)

})



