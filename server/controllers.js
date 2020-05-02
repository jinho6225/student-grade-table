/* eslint-disable no-console */

const db = require('../db/index.js');

const controllers = {
  getAll: (req, res) => {
    const qry = 'select * from sgt';
    db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  postOne: (req, res) => {
    const { name, course, grade } = req.body;
    const qry = 'insert into sgt (name, course, grade) values (?, ?, ?)';
    db.query(qry, [name, course, grade], (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).json(result);
      }
    });
  },
  deleteOne: (req, res) => {
    const { id } = req.params;
    const qry = `delete from sgt where id = ${id}`;
    db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  updateOne: (req, res) => {
    const { name, course, grade } = req.body;
    const { id } = req.params;
    const qry = 'UPDATE sgt SET name=?, course=?, grade=? WHERE id=?';
    db.query(qry, [name, course, grade, id], (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    });
  },
  getAllByName: (req, res) => {
    const qry = 'select * from sgt order by name';
    db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  getAllByCourse: (req, res) => {
    const qry = 'select * from sgt order by course';
    db.query(qry, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  getOneByName: (req, res) => {
        console.log(req)

    const { name } = req.body;
    const qry = `select * from sgt where name=?`;
    db.query(qry, [name], (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        console.log(result)
        res.status(200).send(result);
      }
    });
  }
};

module.exports = controllers;
