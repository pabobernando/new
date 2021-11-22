let models = require('../models');


module.exports = {

  createRoom : async(req,res) =>{
    models.RoomPlayer.create({
      name: req.body.name
    }).then(room => {
      res.status(200).send({ room_id: room.id });
    }).catch(error => {
      res.status(500).send('create room failed');
    });
  },

  cek : async(req,res) =>{
    res.status(200).send("masuk pak eko");
  }

  


   

}