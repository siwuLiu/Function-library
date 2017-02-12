var express = require('express');
var Router = express.Router()
var path = require('path');

Router.get('/demo', function (req, res) {
  
  res.sendFile(path.resolve() + '/src/demo/demo.html');
  //res.send('asdfjasljfdlas');
});

module.exports = Router;
