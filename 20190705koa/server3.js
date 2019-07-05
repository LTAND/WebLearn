const koa = require("koa")
const betterBody = require("koa-better-body")
const pathlib = require("path")
const convert = require("koa-convert")  // 将旧版的中间件更新

let server = new koa()
server.listen(8080)

server.use(convert(betterBody({
  uploadDir: pathlib.resolve("./upload")  // 上传文件路径
  ,keepExtensions: true                 // 保留扩展名
})))

server.use(async ctx=> {
  ctx.response.body = "完成"
  console.log(ctx.request.fields)   // 数据+简略的文件信息
  console.log(ctx.request.files)    // 文件详细信息
})
