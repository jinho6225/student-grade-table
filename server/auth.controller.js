/*global exports, require*/

const Joi = require('@hapi/joi');
const Account = require('./account');

exports.localRegister = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(4).required().email(),
    password: Joi.string().min(6).required(),
  });
  let { email, password } = req.body;

  const result = schema.validate({
    email,
    password,
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
      password,
    });
  } catch (err) {
    console.error(err);
  }

  let token = null;
  try {
    token = await Account.generateToken();
  } catch (e) {
    res.status(500).send(e);
  }

  let options = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  };
  res.cookie('access_token', token, options);
  res.status(200).send(`${account.dataValues.email} register completed!`);
};

exports.localLogin = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().min(4).required().email(),
    password: Joi.string().min(6).required(),
  });
  let { email, password } = req.body;
  const result = schema.validate({
    email,
    password,
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

  if (!account || (await !Account.validatePassword(email, password))) {
    res.status(403).send('Not Found');
    return;
  }

  let token = null;
  try {
    token = await Account.generateToken();
  } catch (e) {
    res.status(500).send(e);
  }

  let options = {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  };
  res.cookie('access_token', token, options);

  res.status(200).send(`${account.dataValues.email} login completed!`);
};

exports.exists = async (req, res) => {
  const { value } = req.params;
  let account = null;

  try {
    account = await Account.findEmail({ value });
  } catch (e) {
    res.status(500).send(e);
  }

  if (account) {
    res.status(200).send('exists');
  }
};

exports.logout = (req, res) => {
  let options = {
    maxAge: 0,
    httpOnly: true,
  };
  res.cookie('access_token', null, options);

  res.status(204).send('logout');
};

exports.check = (req, res) => {
  const { user } = req;

  if (!user) {
    res.status(403);
    return;
  }
  res.send(req.body.email);
};
