/*global require, module, process*/

const crypto = require('crypto');
const db = require('../db/index.js');

function hash(password) {
  return crypto
    .createHmac('sha256', process.env.SECRET_KEY)
    .update(password)
    .digest('hex');
}

const Account = {
  //     Account.statics.findByEmail = function(email) {
  //     return this.findOne({email}).exec();
  // };

  // Account.statics.findByEmailOrUsername = function({username, email}) {
  //     return this.findOne({
  //         // $or 연산자를 통해 둘중에 하나를 만족하는 데이터를 찾습니다
  //         $or: [
  //             { 'profile.username': username },
  //             { email }
  //         ]
  //     }).exec();
  // };
  localRegister: (req, res) => {
    const { email, pwd } = req;
    const qry = `insert into user (email, pwd, submission_date) values (?, ?, NOW())`;
    db.query(qry, [email, hash(pwd)], (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).json(result);
      }
    });
  },

  validatePassword: function (pwd) {
    const hashed = hash(pwd);
    return this.pwd === hashed;
  },
};

module.exports = Account;
