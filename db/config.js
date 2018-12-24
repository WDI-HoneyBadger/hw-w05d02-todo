var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'todo_db',
  user: 'khalid'
}

var db = pgInstance(config);

module.exports = db;
