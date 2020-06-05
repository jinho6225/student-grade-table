/*global require, module*/

const express = require('express');
const auth = express.Router();
const authCtrl = require('./auth.controller.js');

auth.post('/register/local', authCtrl.localRegister);
auth.get('/exists/email/:value', authCtrl.exists);

auth.post('/login/local', authCtrl.localLogin);
auth.post('/logout', authCtrl.logout);
auth.get('/check', authCtrl.check);

module.exports = auth;
