var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');


module.exports = function() {
  console.log('init express');

  var app = express();
  app.use('/lib/', express.static(path.join(__dirname, '/lib')));
  app.use(bodyParser.json());
  
  return app;
}
