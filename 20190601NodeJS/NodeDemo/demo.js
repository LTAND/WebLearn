const http = require("http")

http.createServer(function (req, res) {
  switch (req.url) {
    case "/":
      res.write("111111")
      break;
    case "/index.html":
      res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>hello</h1></body></html>')
      break;
    case "/404.html":
      res.writeHead(404)
      res.write('404 Not Found')
      break;
  }
  res.end()
}).listen("8080", function (err) { console.log("http://localhost:8080") })