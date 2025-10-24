const db = require('./db.js');

db.query('SELECT NOW() AS time', (err, results) => {
    if (err) throw err;
      console.log(results);
      db.end();
});