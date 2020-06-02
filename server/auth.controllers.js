/*global require, module, NOW*/
/* eslint-disable no-console */

const db = require('../db/index.js');

const auth_controllers = {
  register_local: (req, res) => {
    const { email, pwd } = req.body;
    const qry =
      'insert into user (email, pwd, submission_date) values (?, ?, SYSDATE())';
    db.query(qry, [email, pwd], (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).json(result);
      }
    });
  },
  get_registered_list_local: (req, res) => {
    const qry = 'select * from user';
    db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
};

module.exports = auth_controllers;
