const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router.js');
const path = require('path');
const port = 3300;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);
app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`app listening on port ${port}!`);
});
