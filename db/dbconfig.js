var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'list_db',
  user: 'noni' 
}

var connection = pgInstance(config);

module.exports = connection;
