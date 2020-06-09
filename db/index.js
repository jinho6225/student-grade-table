/*global require, module, process*/

require('dotenv').config();
// var mysql = require('mysql');
const { Sequelize } = require('sequelize');

//var db = mysql.createConnection({
//  host: 'localhost',
//  user: 'root',
//  password: 'j1065718',
//  database: 'sgt'
// var db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: process.env.password,
//   database: 'sgt',
// });

const db = new Sequelize('sgt', 'root', process.env.password, {
  host: 'localhost',
  dialect: 'mysql',
});

// db.connect((err) => {
//   if (err) throw err;
//   /* eslint-disable no-console */
//   console.log('Connected!');
// });

db.authenticate()
  .then(() => console.log('connected with SEQUELIZE'))
  .catch((err) => console.log('somethin wrong'));

module.exports = db;
