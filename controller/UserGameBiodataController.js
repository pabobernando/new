const models = require('../models')

module.exports ={
    getAll : async (req,res) =>{
        const allUserGameBio =  await module.exports.findAllUserBioGame();
   
        res.render('user-game-bio/user-game-bio',{userGameBio: allUserGameBio });
    },

    findAllUserBioGame : () =>{
        try {
            return models.UserGameBio.findAll({});   
        } catch (error) {
            console.log(error);
        }
    },

    userGameBioAdd:(req,res)=>{
        res.render('user-game-bio/add');
    },

    userGameBioEdit : (req,res)=>{
        models.UserGameBio.findByPk(req.params.id).then((userGameBio)=>{
            res.render('user-game-bio/edit',{userGameBio});
        });
    },

    userGameBioAddPost : (req,res) =>{
        models.UserGameBio.create({
            nama: req.body.nama,
            umur: req.body.umur,
            hobi: req.body.hobi
        })
        .then(user => {
            res.redirect('/dashboard/user-game-bio');
    
        })
        .catch(error => {
          console.log(error);
            res.redirect('/dashboard/user-game-bio/add');
        });
    },

    userGameBioEditPut : (req,res) =>{
        models.UserGameBio.update(req.body, {
        where:{
            id:req.params.id
          }
        }).then((user) => {
          res.redirect('/dashboard/user-game-bio')
        })
    },

    deleteUserBioGame :(req,res) =>{
        models.UserGameBio.destroy({
        where:{
            id:req.params.id
        }
        }).then((user) => {  
            res.send({ msg: "Success" });
        })
    }


}