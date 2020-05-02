/* eslint-disable no-console */

var mysql = require('mysql');

var db = mysql.createConnection({
<<<<<<< HEAD
  host: "localhost",
  user: "root",
  password: "j1065718",
  database: "sgt"
=======
  host: 'localhost',
  user: 'root',
  password: 'j1065718',
  database: 'sgt'
>>>>>>> d0d31efb46fdf3182961134d5a984be85bf78278
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = db;
