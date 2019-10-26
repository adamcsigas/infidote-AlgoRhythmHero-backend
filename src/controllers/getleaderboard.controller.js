const leaderboard = require('../services/leaderboard.service');

const leaderboardController = (req, res) => {
  leaderboard.getScores()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send({ err: err.message }))
  
}

module.exports = leaderboardController;