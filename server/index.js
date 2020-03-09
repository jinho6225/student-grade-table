const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./router.js')
const path = require('path')
const port = 3300;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', router)
app.use('/', express.static(path.join(__dirname, '../client/dist')))
console.log(__dirname)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
