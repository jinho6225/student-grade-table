/*global require, module*/
/* eslint-disable no-console */

const db = require('../db/index.js');
const hash = require('./account.js');
const { validationResult } = require('express-validator');

const auth_controllers = {
  register_local: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, pwd } = req.body;
    const qry = 'SELECT * FROM user WHERE `email` = ?';
    db.query(qry, [email], (err, rows) => {
      if (err) {
        console.log(err, 'err');
      } else {
        if (rows.length != 0) {
          res.send('user already exists.');
        } else {
          const qry =
            'insert into user (email, pwd, submission_date) values (?, ?, SYSDATE())';
          const hasedPwd = hash(pwd);
          db.query(qry, [email, hasedPwd], (err, result) => {
            if (err) {
              res.status(400).send(err);
            } else {
              res.status(201).json(result);
            }
          });
        }
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
  login_local: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    const { email, pwd } = req.body;
    try {
      const qry = 'select * from user where email = ?';
      await db.query(qry, [email], (err, result) => {
        if (err) {
          res.status(400).send(err);
        } else {
          if (result[0].pwd === hash(pwd)) {
            return res.status(200).send(result);
          } else {
            res.status(400).send('wrong pwd');
          }
        }
      });
    } catch (e) {
      res.status(400).send(e);
    }
  },
};

module.exports = auth_controllers;
