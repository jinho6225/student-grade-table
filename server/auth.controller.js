const Joi = require('@hapi/joi');
const Account = require('./Account');
const db = require('../db/index.js');

exports.localRegister = async (req, res) => {
  res.status(200).send('register');
};

exports.localLogin = async (req, res) => {
  res.status(200).send('login');
};

exports.exists = async (req, res) => {
  res.status(200).send('exists');
};

exports.logout = async (req, res) => {
  res.status(200).send('logout');
};
