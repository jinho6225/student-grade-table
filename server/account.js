/*global require, process, module */

require('dotenv').config();
const crypto = require('crypto');

function hash(password) {
  return crypto
    .createHmac('sha256', process.env.SECRET_KEY)
    .update(password)
    .digest('hex');
}

module.exports = hash;
