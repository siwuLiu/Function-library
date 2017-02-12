var config = null;

if (process && process.env && process.NODE_ENV) {
  config = require('./env/' + process.NODE_ENV);
} else {
  config = require('./env/development.js');
}

module.exports = config;
