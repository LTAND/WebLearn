const http = require("http")
const urlLib = require("url")
const querystring = require("querystring")

let httpServer = http.createServer((req, res) => {
  // GET
  let { pathname: url, query: GET } = urlLib.parse(req.url, true)

  let arr = []

  // POST
  req.on("data", data => {
    arr.push(data)
  })

  req.on("end", () => {
    let POST = querystring.parse((Buffer.concat(arr)).toString())
    // console.log(`url: ${url}, GET: ${GET}, POST: ${POST}`)
    console.log(POST)
  })

  res.end();
})

httpServer.listen(8080)