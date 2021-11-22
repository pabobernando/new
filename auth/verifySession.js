const { renderFile } = require('ejs');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const verifySession = (req, res, next)=>{
     // check header or url parameters or post parameters for token
    let token = req.session.user;
    if (!token) 
        return res.status(403).send({ auth: false, message: 'No token provided.' });

    // verifies secret and checks exp
    jwt.verify(token, 'supersecret', function(err, decoded) {      
        if (err) return res.redirect('login');    
        next();
    });
}

module.exports = verifySession;