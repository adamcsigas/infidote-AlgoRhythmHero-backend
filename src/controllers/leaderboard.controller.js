const leaderboard = require('../services/leaderboard.service');

const leaderboardController = (req, res) => {
  const { nickname, score } =req.body;
  if (!nickname || !score) {
    return req.status(400).send({ error: 'no nickname or score provided'})
  }
  leaderboard(nickname, score)
    .then(data => res.status(200).send('ok'))
    .catch(err => res.status(400).send({ err: err.message }))
  
}

module.exports = leaderboardController;