const http = require("http")
const cluster = require("cluster")
const os = require("os")
const process = require("process")

if(cluster.isMaster){
  for(let i=0;i<  os.cpus().length;i++){
    cluster.fork()  // 只有住进程才分裂子进程
  }

  console.log("主进程:",process.pid)
}else{
  let server = http.createServer((req, res)=>{
    console.log("子进程:",process.pid)
    res.write("adasd")
    res.end()
  })
  
  server.listen(8080)
  console.log("服务器开好，在8080端口")

}


