'use strict';

const { Pool } = require('../db/pool.js');

const getQuizStatus = (req, res) => {
  const sql = `SELECT * FROM surveydb.quiz_states WHERE id = ${req.params.id}`
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

const getAllQuizStatuses = (req, res) => {
  const sql = 'SELECT * from surveydb.quiz_states';
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404)
  });
};

const createQuizStatus = (req, res) => {
  if (!req.body) return res.sendStatus(400);
    const sql = `INSERT INTO surveydb.quiz_states (id, state_name) VALUES (${null},\"${req.body.state_name}\")`;
    Pool.query(sql, (error, result, fields) => {
      if (error) return res.status(500).json(error);
      result ? res.send(result) : res.sendStatus(404);
    });
};

const deleteQuizStatus = (req, res) => {
  const sql = `DELETE FROM surveydb.quiz_states WHERE id = ${req.params.id}`
  Pool.query(sql, (error, result, fields) => {
    if (error) return res.status(500).json(error);
    result ? res.send(result) : res.sendStatus(404);
  });
};

const updateQuizStatus = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const sql = `UPDATE surveydb.quiz_states SET state_name = \"${req.body.state_name}\" WHERE id = ${req.params.id} `
  Pool.query(sql, (err, result, fields) => {
    if (err) throw err;
    result ? res.send(result) : res.sendStatus(404);
  });   
};

module.exports = { getQuizStatus, getAllQuizStatuses, createQuizStatus, deleteQuizStatus, updateQuizStatus };