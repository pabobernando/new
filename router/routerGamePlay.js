const express = require('express')
const app = express()
const router = express.Router();
let models = require('../models');
const verifySession = require('../auth/verifySession');
const gamePlayController = require('../controller/GameplayController');


router.get('/trial-game', verifySession, gamePlayController.trial_game);

router.get('/login-game',gamePlayController.login);

router.post('/login-game',gamePlayController.loginPost);

router.get('/signup-game',gamePlayController.register);

router.post('/signup-game',gamePlayController.registerPost);

router.get('/logout-game',gamePlayController.logout);



module.exports = router
