const express = require('express');

const router = express.Router();

const helloWorldController = require('../controllers/hello-world');
const spotifyController = require('../controllers/spotify.controller');
const trackController = require('../controllers/track.controller');
const leaderboardController = require('../controllers/leaderboard.controller');

router.get('/helloworld', helloWorldController.helloWorldController);
router.get('/spotify', spotifyController);
router.get('/track', trackController)
router.post('/leaderboard', leaderboardController);

module.exports = router;