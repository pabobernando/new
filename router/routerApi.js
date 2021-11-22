const express = require('express')
const app = express()
const router = express.Router();
const loginController = require('../controller/LoginController');
const pathApi = '/api/v1';




/*api for return json */
router.post(pathApi+'/login', loginController.loginApi);
router.post(pathApi+'/logout', loginController.logoutApi);
router.post(pathApi+'/register', loginController.registerApi);
/*api for return json */

module.exports = router;


