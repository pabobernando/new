const models = require('../models')

module.exports ={
    getAll : async (req,res) =>{
        const allUserGameHistory =  await module.exports.findAllUserGameHistoryHistory();
   
        res.render('user-game-history/user-game-history',{userGameHistory : allUserGameHistory });
    },

    findAllUserGameHistoryHistory : () =>{
        try {
            return models.UserGameHistory.findAll({});   
        } catch (error) {
            console.log(error);
        }
    },

    userGameHistoryAdd:(req,res)=>{
        res.render('user-game-history/add');
    },

    userGameHistoryEdit : (req,res)=>{
        models.UserGameBio.findByPk(req.params.id).then((userGameBio)=>{
            res.render('user-game-bio/edit',{userGameBio});
        });
    },

    userGameHistoryPost : (req,res) =>{
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

    userGameHistoryEditPut : (req,res) =>{
        models.UserGameBio.update(req.body, {
        where:{
            id:req.params.id
          }
        }).then((user) => {
          res.redirect('/dashboard/user-game-bio')
        })
    },

    deleteUserHistoryGame :(req,res) =>{
        models.UserGameBio.destroy({
        where:{
            id:req.params.id
        }
        }).then((user) => {  
            res.send({ msg: "Success" });
        })
    }


}