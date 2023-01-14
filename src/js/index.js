'use strict';

const express = require('express');
const { Pool } = require('./db/pool.js');
const { getQuizStatus, getAllQuizStatuses, createQuizStatus, deleteQuizStatus, updateQuizStatus } = require('./controller/controllers.js')

const app = express();
const jsonParse = express.json();

app.get('/quiz_state/:id', getQuizStatus);
app.get('/quiz_states/', getAllQuizStatuses);
app.post('/quiz_state/', jsonParse, createQuizStatus);
app.put('/quiz_state/:id', jsonParse,  updateQuizStatus);
app.delete('/quiz_state/:id', deleteQuizStatus);

app.listen(3000);