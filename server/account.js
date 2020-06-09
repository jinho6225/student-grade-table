/*global require, module, process*/

const crypto = require('crypto');
const db = require('../db/index.js');
const { DataTypes } = require('sequelize');
const { generateToken } = require('./token');

function hash(password) {
  return crypto
    .createHmac('sha256', process.env.SECRET_KEY)
    .update(password)
    .digest('hex');
}

const Account = db.define(
  'user',
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: true }
);

Account.sync();

Account.findEmail = async function ({ email }) {
  const foundEmail = await this.findOne({ where: { email } });
  if (foundEmail === null) {
    console.log('Not found!');
  }
  return foundEmail;
};

Account.localRegister = async function ({ email, password }) {
  password = hash(password);
  const user = await this.create({ email, password });
  return user;
};

Account.validatePassword = async function (email, password) {
  const hashed = hash(password);
  const foundEmail = await this.findOne({ email });
  return foundEmail.dataValues.pwd === hashed;
};

Account.generateToken = async function () {
  const payload = {};
  return generateToken(payload, 'account');
};

module.exports = Account;
