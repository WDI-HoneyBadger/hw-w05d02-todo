var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'todo_db',
  user: 'postgres',
  password: 8899253 
}

var connection = pgInstance(config);

module.exports = connection;