'use strict';

module.exports = {
  tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || '3000',
  maxJobNumber: 1000
};
