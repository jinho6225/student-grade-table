/*global require, __dirname, process*/
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router.js');
const auth = require('./auth.router.js');

const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
app.use('/auth', auth);
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(process.env.PORT, () => {
  /* eslint-disable no-console */
  console.log(`app listening on port ${process.env.PORT}!`);
});
