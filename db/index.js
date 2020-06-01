/*global require, module, process*/

require('dotenv').config();
var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.password,
  database: 'sgt',
});

db.connect((err) => {
  if (err) throw err;
  /* eslint-disable no-console */
  console.log('Connected!');
});

module.exports = db;
