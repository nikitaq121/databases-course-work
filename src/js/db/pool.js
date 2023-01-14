'use strict';

const mysql = require('mysql2');

const Pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwertyui",
  database: "surveydb"
});

module.exports = { Pool };