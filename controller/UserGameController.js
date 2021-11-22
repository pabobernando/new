const models = require('../models')

module.exports ={
    getAll : async (req,res) =>{
        const allUserGame = await module.exports.findAllUserGame();
   
        res.render('user-game/user-game',{userGame: allUserGame });
    },

    findAllUserGame : () =>{
        try {
            return models.UserPlayer.findAll({});   
        } catch (error) {
            res.status(500).status(error)
        }
    },

    userGameAdd:(req,res)=>{
        res.render('user-game/add');
    },

    userGameEdit : (req,res)=>{
        models.UserPlayer.findByPk(req.params.id).then((userGame)=>{
            res.render('user-game/edit',{userGame});
        });
    },

    userGameAddPost : (req,res) =>{
        models.UserPlayer.create({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
        .then(user => {
            res.redirect('/dashboard/user-game');
    
        })
        .catch(error => {
            res.redirect('/dashboard/user-game/add');
        });
    },

    userGameEditPut : (req,res) =>{
        models.UserPlayer.update(req.body, {
        where:{
            id:req.params.id
          }
        }).then((user) => {
          res.redirect('/dashboard/user-game')
        })
    },

    deleteUserGame :(req,res) =>{
        models.UserPlayer.destroy({
        where:{
            id:req.params.id
        }
        }).then((user) => {  
            res.send({ msg: "Success" });
        })
    }


}