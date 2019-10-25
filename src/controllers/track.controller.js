const fetch = require('node-fetch');

const trackController = (req, res) => {
  fetch('http://localhost:3000/spotify')
    .then(answer => answer.json())
    .then(data => {
      console.log(data);
      res.status(200).send('ok');
    })
    .catch(console.log)
};

module.exports = trackController;