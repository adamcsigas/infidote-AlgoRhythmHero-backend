const connection = require('./connecttodb');


const postScores = (nickname, score) =>
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
const getScores = (nickname, score) =>
  new Promise((resolve, reject) => {
    connection.query(
      'SELECT * FROM leaderboard ORDER BY score LIMIT 10;',
      [nickname, score],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
  });

module.exports = { postScores, getScores };
