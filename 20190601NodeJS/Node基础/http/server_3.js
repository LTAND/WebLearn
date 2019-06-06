const http = require("http")

http.createServer((req, res) => {
  switch (req.url) {
    case "/index.html":
      res.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Document</title></head><body><h1>/index.html</h1></body></html>')
      break;
      case "/api":
        res.write("/api");
      break;
  }
  res.end()
}).listen("8081", (err) => { console.log("http://localhost:8081/index.html") })