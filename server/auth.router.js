/*global require, module*/

const express = require('express');
const auth = express.Router();
const auth_controllers = require('./auth.controllers.js');
const { check } = require('express-validator');

auth.post(
  '/register/local',
  [
    check('email')
      .exists()
      .withMessage('Email should not be empty')
      .isEmail()
      .normalizeEmail(),
    check('pwd')
      .exists()
      .withMessage('Password should not be empty')
      .isLength({ min: 8 })
      .withMessage('minimum eight characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/
      )
      .withMessage('at least one letter, one number and one special character'),
  ],
  auth_controllers.register_local
);

auth.get('/register/local/list', auth_controllers.get_registered_list_local);

auth.post(
  '/login/local',
  [
    check('email')
      .exists()
      .withMessage('Email should not be empty')
      .isEmail()
      .normalizeEmail(),
    check('pwd')
      .exists()
      .withMessage('Password should not be empty')
      .isLength({ min: 8 })
      .withMessage('minimum eight characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/
      )
      .withMessage('at least one letter, one number and one special character'),
  ],
  auth_controllers.login_local
);

// auth.route('/logout').post(auth_controllers.logout);

// auth.route('/exists/email/:value').post(auth_controllers.exists_email);

// auth.route('/exists/username/:value').post(auth_controllers.exists_username);

module.exports = auth;
