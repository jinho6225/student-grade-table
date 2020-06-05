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

  let existing = null;
  try {
    existing = await Account.findEmail({ email });
  } catch (e) {
    console.error(e);
  }
  if (existing) {
    res.status(409).send(`${existing.dataValues.email} already exist`);
    return;
  }

  let account = null;
  try {
    account = await Account.localRegister({
      email,
      pwd,
    });
  } catch (err) {
    console.error(err);
  }
  res.status(200).send(`${account.dataValues.email} register completed!`);
};

exports.localLogin = async (req, res) => {
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

  let account = null;
  try {
    account = await Account.findEmail({ email });
  } catch (e) {
    console.error(e);
  }

  if (!account || (await !Account.validatePassword(email, pwd))) {
    res.status(403).send('Not Found');
    return;
  }
  res.status(200).send(`${account.dataValues.email} login completed!`);
};

exports.exists = async (req, res) => {
  res.status(200).send('exists');
};
exports.logout = async (req, res) => {
  res.status(200).send('logout');
};
