
const express = require('express')
const app = express()
const router = express.Router();
const verifySession = require('../auth/verifySession')
const userGameController = require('../controller/UserGameController');

router.get('/dashboard/user-game',verifySession, userGameController.getAll);
router.get('/dashboard/user-game/add',verifySession, userGameController.userGameAdd);
router.post('/dashboard/user-game/add',verifySession, userGameController.userGameAddPost);
router.get('/dashboard/user-game/edit/:id',verifySession, userGameController.userGameEdit);
router.put('/dashboard/user-game/edit/:id',verifySession, userGameController.userGameEditPut);
router.delete('/dashboard/user-game/delete/:id',verifySession, userGameController.deleteUserGame);


module.exports = router;


