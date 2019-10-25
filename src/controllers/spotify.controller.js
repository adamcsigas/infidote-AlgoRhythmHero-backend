const fs = require('fs');
const data = fs.readFileSync('./src/assets/systemofadown.json', 'utf8');

const spotifyController = (req, res) => {
  res.status(200).send(data);
}

module.exports = spotifyController;