const koa = require("koa")
const router = require("koa-router")
const static = require("koa-static")   // 不会压缩缓存访问
const staticCache = require("koa-static-cache")

const pathlib = require("path")

let server = new koa()
server.listen(8080)

let r1 = router()
server.use(r1.routes())

r1.get("/aaa", async (ctx, next)=>{
  // ctx.req - 原生
  // ctx.res - 原生

  /** ctx.request - koa
   * url
   * method
   * header/headers
   */

  /** ctx.response - koa
   * status
   * message
   * header
   * body
   */

  console.log('ctx.request:',  ctx.request.original);     // localhost:8080
  console.log('ctx.request:',  ctx.request.originalUrl);  // aaa
  console.log('ctx.request:',  ctx.request.query); 
  console.log('ctx.response:', ctx.response);

})

// server.use(static(pathlib.resolve("www"))) 
server.use(staticCache(pathlib.resolve("www")))