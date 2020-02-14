const express = require('express')
const router = express.Router()
const controllers = require('./controllers.js')

router.route('/sgt')
  .get(controllers.getAll)
  .post(controllers.postOne)

router.route('/sgt/:id')
  .delete(controllers.deleteOne)
  .put(controllers.updateOne)

module.exports = router;
