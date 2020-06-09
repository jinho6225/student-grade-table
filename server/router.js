/*global require, module*/

const express = require('express');
const router = express.Router();
const controllers = require('./controllers.js');

router.route('/sgt').get(controllers.getAll).post(controllers.postOne);

router
  .route('/sgt/:id')
  .delete(controllers.deleteOne)
  .put(controllers.updateOne);

router.route('/sgt/name').get(controllers.getAllByName);

router.route('/sgt/name/:name').get(controllers.getOneByName);

router.route('/sgt/course').get(controllers.getAllByCourse);

router.route('/sgt/course/:course').get(controllers.getOneByCourse);

module.exports = router;
