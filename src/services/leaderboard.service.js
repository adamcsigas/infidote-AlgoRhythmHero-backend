const connection = require('./connecttodb');


const getScores = (nickname, score) =>
  new Promise((resolve, reject) => {
    connection.query(
      'INSERT INTO leaderboard (name, score) VALUES (?,?);',
      [nickname, score],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
  });

module.exports = getScores;
