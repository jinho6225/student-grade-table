/*global exports, require*/

const Joi = require('@hapi/joi');
const Account = require('./account');

exports.localRegister = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(4).required().email(),
    pwd: Joi.string().min(6).required(),
  });
  let { email, pwd } = req.body;
  const result = schema.validate({
    email,
    pwd,
  });
  if (result.error) {
    res.status(400).send(result.error);
    return;
  }

  //   let existing = null;
  //   try {
  //     existing = await Account.findByEmailOrUsername(ctx.request.body);
  //   } catch (e) {
  //     ctx.throw(500, e);
  //   }

  //   if (existing) {
  //     // 중복되는 아이디/이메일이 있을 경우
  //     ctx.status = 409; // Conflict
  //     // 어떤 값이 중복되었는지 알려줍니다
  //     ctx.body = {
  //       key: existing.email === ctx.request.body.email ? 'email' : 'username',
  //     };
  //     return;
  //   }

  let account = null;
  try {
    account = await Account.localRegister({
      email,
      pwd,
    });
  } catch (err) {
    console.error(err);
  }
  res.status(200).send('registered');
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
