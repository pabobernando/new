let models = require('../models');
let jwt = require('jsonwebtoken');


module.exports = {
    login: (req,res) =>{
        res.render('login-game');
    },

    trial_game : (req,res)=>{
        res.render('game',{user:req.session.user});
    },

    register : (req,res)=>{
        res.render('register-game')
    },

    registerPost : (req,res)=>{
        models.UserPlayer.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
            })
            .then(user => {
                let token = jwt.sign({ id: user.id }, 'supersecret', {
                    expiresIn: 86400 // expires in 24 hours
                });
                req.session.user = token;
                req.session.dataUser = user.dataValues;
                res.redirect('/trial-game');
            })
            .catch(error => {
                console.log(error)
                res.redirect('/signup-game');
        });
    },

    loginPost : (req,res)=>{
        models.UserPlayer.authenticate(req.body).then((user)=>{
            let token = jwt.sign({ id: user.id }, 'supersecret', {
                expiresIn: 86400 // expires in 24 hours
            });
            req.session.user = token;
            req.session.dataUser = user.dataValues;
            res.redirect('/trial-game');
        }).catch(error => {
            res.redirect('/login-game');
        });
    },

    logout : (req,res)=>{
        if (req.session.user && req.cookies.user_sid) {
            res.clearCookie('user_sid');
            res.redirect('/');
        } else {
            res.redirect('/login');
        }
    }



}