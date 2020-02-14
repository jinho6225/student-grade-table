const db = require('../db/index.js')

const controllers = {
  getAll: (req, res) => {
      const qry = `select * from sgt`;
      db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(result)
      }
      })
  },
  postOne: (req, res) => {
    const { name, course, grade } = req.body;
    const qry = `insert into sgt (name, course, grade) values ("${name}", "${course}", ${grade})`;
      db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(result)
      }
    })
  },
  deleteOne: (req, res) => {
    const id = req.params.id
    const qry = `delete from sgt where id = ${id}`;
      db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(result)
      }
    })
  },
  updateOne: (req, res) => {
    const { name, course, grade } = req.body;
    const id = req.params.id
    const qry = `UPDATE sgt SET name="${name}", course="${course}", grade=${grade} WHERE id=${id}`;
      db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(result)
      }
    })
  }
}


module.exports = controllers;
