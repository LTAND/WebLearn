var express = require('express');

var port = 8080

var app = express();

var router = express.Router();

router.get('/',function(req,res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

var appData = require('./data.json');
var repair = appData.repair

var apiRoutes = express.Router();

apiRoutes.get('/   ',function(req,res){
  res.json({
    errno: 0,
    data:repair
  })
})

app.use('/api', apiRoutes);

app.use(express.static('./dist'));

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
});
