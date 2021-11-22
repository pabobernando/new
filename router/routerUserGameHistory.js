
const express = require('express')
const app = express()
const router = express.Router();
const verifySession = require('../auth/verifySession')
const userGameHistoryController = require('../controller/UserGameHistoryController');

router.get('/dashboard/user-game-history',verifySession, userGameHistoryController.getAll);
router.get('/dashboard/user-game-history/add',verifySession, userGameHistoryController.userGameHistoryAdd);
router.post('/dashboard/user-game-history/add',verifySession, userGameHistoryController.userGameHistoryPost);
router.get('/dashboard/user-game-history/edit/:id',verifySession, userGameHistoryController.userGameHistoryEdit);
router.put('/dashboard/user-game-history/edit/:id',verifySession, userGameHistoryController.userGameHistoryEditPut);
router.delete('/dashboard/user-game-history/delete/:id',verifySession, userGameHistoryController.deleteUserHistoryGame);


module.exports = router;