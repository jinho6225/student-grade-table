/*global require, module, process*/

const crypto = require('crypto');

function hash(password) {
  return crypto
    .createHmac('sha256', process.env.SECRET_KEY)
    .update(password)
    .digest('hex');
}

const Account = {};

module.exports = Account;
