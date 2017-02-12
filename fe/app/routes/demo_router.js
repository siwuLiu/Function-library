var express = require('express');
var Router = express.Router();

Router.get('/demo', function (req, res) {
  res.sendFile(__dirname + '../../src/demo/demo.html');
  //res.send('asdfjasljfdlas');
});

module.exports = Router;
