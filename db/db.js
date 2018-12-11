var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var bd = {
  host: 'localhost',
  port: 5432,
  database: 'todo_db',
  user: 'turkialomari' 
}

var connection = pgInstance(bd);

module.exports = connection;
