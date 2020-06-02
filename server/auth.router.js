/*global require, module*/

const express = require('express');
const auth = express.Router();
const auth_controllers = require('./auth.controllers.js');

auth.route('/register/local').post(auth_controllers.register_local);
auth
  .route('/register/local/list')
  .get(auth_controllers.get_registered_list_local);

// auth.route('/login/local').post(auth_controllers.login_local);

// auth.route('/logout').post(auth_controllers.logout);

// auth.route('/exists/email/:value').post(auth_controllers.exists_email);

// auth.route('/exists/username/:value').post(auth_controllers.exists_username);

module.exports = auth;
