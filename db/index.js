/* eslint-disable no-console */

var mysql = require('mysql');

var db = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: 'sgt'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = db;
