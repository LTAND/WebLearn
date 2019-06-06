
// let config = require('./config/index');
// let express = require('/usr/local/node-v6/lib/node_modules/express');
// let axios = require('/usr/local/node-v6/lib/node_modules/axios');
let express  = require('express');

const port = 9999;

let app = express();

let router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

// app.get('/getDiscList',function(req, res){
//   var url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
//   axios.get(url, {
//     headers: {
//       referer: 'https://c.y.qq.com/',
//       host: 'c.y.qq.com'
//     },
//     params: req.query
//   }).then((response) => {
//     res.json(response.data)
//   }).catch((e) => {
//     console.log(e)
//   })
// })
app.use(router);


app.use(express.static('./'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port);
});