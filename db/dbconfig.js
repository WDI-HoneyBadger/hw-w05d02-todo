var pgPromise = require('pg-promise');
var pgInstance = pgPromise();

var config = {
  host: 'localhost',
  port: 5432,
  database: 'to_do_list',
  user: 'macuser' // your username here!!
}

var connection = pgInstance(config);

module.exports = connection;