
var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'todo_db',
  user: 'aishahalmaghrbi' 
}

var connection = pgInstance(config);

module.exports = connection;