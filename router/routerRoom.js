
const express = require('express')
const app = express()
const router = express.Router();
const verifyToken = require('../auth/verifyToken')
const roomController = require('../controller/RoomController');
const fightController = require('../controller/FightController');
const pathApi = '/api/v1';



/*api for return json */
router.get(pathApi+'/get-results/:room_name',fightController.getResult);
router.get(pathApi+'/cek',verifyToken,roomController.cek);
router.post(pathApi+'/create-room',roomController.createRoom);
router.post(pathApi+'/join-room/:id',fightController.joinRoom);
router.post(pathApi+'/fight-room/:id',fightController.fightRoom);

/*api for return json */

module.exports = router;


