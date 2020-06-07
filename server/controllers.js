/*global require*/
/* eslint-disable no-console */

const db = require('../db/index.js');
const { DataTypes } = require('sequelize');

const Sgt = db.define(
  'sgt',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    grade: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Sgt.sync();

const controllers = {
  getAll: async (req, res) => {
    let users = null;
    try {
      users = await Sgt.findAll();
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(200).send(users);
  },
  postOne: async (req, res) => {
    const { name, course, grade } = req.body;
    let student = null;
    try {
      student = await Sgt.create({ name, course, grade });
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(201).json(student);
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
    const { name } = req.params;
    const qry = 'select * from sgt WHERE name=?';
    db.query(qry, [name], (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
  getOneByCourse: (req, res) => {
    const { course } = req.params;
    const qry = 'select * from sgt WHERE course=?';
    db.query(qry, [course], (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    });
  },
};

module.exports = controllers;
