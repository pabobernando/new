const internalError   = require('./errorHandler/internalError');
const notFoundhandler = require('./errorHandler/notFoundHandler');
const port            = process.env.PORT || 3030;
const express         = require('express');
const app             = express();
const bodyParser      = require('body-parser');
const routerAuth      = require('./router/routerAuth');
const routerRoom      = require('./router/routerRoom');
const routerApi       = require('./router/routerApi');
const routerGame      = require('./router/routerGamePlay');
const routerGameUser  = require('./router/routerUserGame');
const routerGameBiodata       = require('./router/routerUserGameBio');
const routerGameHistory = require('./router/routerUserGameHistory');
const cookieParser   = require('cookie-parser');
const methodOverride = require('method-override');
const session        = require('express-session');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(methodOverride('_method'));






app.use(routerAuth);
app.use(routerRoom);
app.use(routerApi);
app.use(routerGame);
app.use(routerGameUser);
app.use(routerGameBiodata);
app.use(routerGameHistory);







app.use(internalError);

app.use(notFoundhandler);


const server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
  