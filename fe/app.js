var express = require('./config/express');

var demo = require('./app/routes/demo_router.js');

var app = express();

app.use('/', demo);

module.exports = app;
