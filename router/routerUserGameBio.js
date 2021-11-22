
const express = require('express')
const app = express()
const router = express.Router();
const verifySession = require('../auth/verifySession')
const userGameBioController = require('../controller/UserGameBiodataController');

router.get('/dashboard/user-game-bio',verifySession, userGameBioController.getAll);
router.get('/dashboard/user-game-bio/add',verifySession, userGameBioController.userGameBioAdd);
router.post('/dashboard/user-game-bio/add',verifySession, userGameBioController.userGameBioAddPost);
router.get('/dashboard/user-game-bio/edit/:id',verifySession, userGameBioController.userGameBioEdit);
router.put('/dashboard/user-game-bio/edit/:id',verifySession, userGameBioController.userGameBioEditPut);
router.delete('/dashboard/user-game-bio/delete/:id',verifySession, userGameBioController.deleteUserBioGame);


module.exports = router;