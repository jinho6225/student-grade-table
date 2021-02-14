/*global require, module*/
/* eslint-disable no-console */

const db = require("../db/index.js");
const { DataTypes } = require("sequelize");

const Sgt = db.define(
  "sgt",
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
  deleteOne: async (req, res) => {
    const { id } = req.params;
    let rmv = null;
    try {
      rmv = await Sgt.destroy({
        where: {
          id,
        },
      });
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(204).send(`deleted id ${rmv}`);
  },
  updateOne: async (req, res) => {
    const { name, course, grade } = req.body;
    const { id } = req.params;
    let updat = null;
    try {
      updat = await Sgt.update(
        { name, course, grade },
        {
          where: {
            id,
          },
        }
      );
    } catch (e) {
      res.status(400).send(e);
    }
    if (updat.length > 0) {
      res.status(204).send(`updated it`);
    }
  },

  getAllByName: async (req, res) => {
    let name = null;
    try {
      name = await Sgt.findAll({
        order: [["name", "ASC"]],
      });
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(200).send(name);
  },

  getAllByCourse: async (req, res) => {
    let course = null;
    try {
      course = await Sgt.findAll({
        order: [["course", "ASC"]],
      });
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(200).send(course);
  },

  getOneByName: async (req, res) => {
    const { name } = req.params;
    let nameOne = null;
    try {
      nameOne = await Sgt.findAll({
        where: {
          name,
        },
      });
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(200).send(nameOne);
  },
  getOneByCourse: async (req, res) => {
    const { course } = req.params;
    let courseOne = null;
    try {
      courseOne = await Sgt.findAll({
        where: {
          course,
        },
      });
    } catch (e) {
      res.status(400).send(e);
    }
    res.status(200).send(courseOne);
  },
};

module.exports = controllers;
