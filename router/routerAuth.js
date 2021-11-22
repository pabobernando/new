const express = require('express')
const app = express()
const router = express.Router();
const verifySession = require('../auth/verifySession');
const loginController = require('../controller/LoginController');
const pathApi = '/api/v1';




/*api for template engine */
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/', loginController.index);

router.get('/dashboard',verifySession, loginController.dashboard);

router.get('/login', loginController.getLogin);
router.post('/login', loginController.login);
router.get('/logout', loginController.logout);
router.get('/register', loginController.getRegister);
router.post('/register', loginController.register);
/*api for template engine */

module.exports = router;


