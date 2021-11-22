let models = require('../models');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
const Choice = require('../models/Choice');
let counter = 0 ;


module.exports = {

  counterPlayer: (idRoom) =>{

    let tamp = models.RoomPlayer.findByPk(idRoom).then((room)=>{
      return room
    });
    return tamp;
  },

  insertData : (room_id,user_id,choices)=>{
    choices.forEach((choice)=>{
      models.Choice.create({
        room_id : room_id,
        user_id : user_id,
        choice:choice
      })
    });
  },

  joinRoom : async(req,res) =>{
    const decoded = jwt.verify(req.headers.authorization, "super-secret");

    let counterPlayer = await module.exports.counterPlayer(req.params.id);
    counter++;
    let choice;
    if(counterPlayer.dataValues.count_player !=2){
      if(counter == 1){
        console.log("counter 1");
        models.RoomPlayer.update({player_1: decoded.id, count_player: 1}, {
          where:{
              id:req.params.id
            }
          })

          res.status(200).send('join the game');
      }else if(counter == 2){
        console.log("counter 2");
        models.RoomPlayer.update({player_2: decoded.id,count_player: 2}, {
          where:{
              id:req.params.id
            }
          })
          
          res.status(200).send('join the game');
      }
    }else{
      res.status(402).send('room already full')
    }
    choice = req.body.choice;
    module.exports.insertData(req.params.id,decoded.id,choice);

    // if(counterPlayer.dataValues.count_player == 2){
    //   module.exports.countResultGame(req.params.id);
    // }
    
    
  },

  fightRoom :(req,res) =>{
    module.exports.countResultGame(req.params.id);
    res.status(200).send('game finished');
  },

  countResultGame : async (roomId) =>{
    
    const allUserId = await module.exports.getAllUserId(roomId);
    const nameRoom = await module.exports.getRoomName(roomId);
   
    const choicePlayer1 = await module.exports.getAllChoice(roomId,allUserId[0]);
    const username1 = await module.exports.getUsername(allUserId[0])
    

    const choicePlayer2 = await module.exports.getAllChoice(roomId,allUserId[1]);
    const username2 = await module.exports.getUsername(allUserId[1])

    let player1=0;
    let player1status = [];
    let player2=0;
    let player2status = [];

    for (let i = 0; i < choicePlayer1.length; i++) {
      if(choicePlayer1[i]=='P' && choicePlayer2[i]=='R'){
        player1+=1;
        player1status.push('win')
        player2status.push('lose')
      }else if(choicePlayer1[i]=='S' && choicePlayer2[i]=='P'){
        player1+=1;
        player1status.push('win')
        player2status.push('lose')
      }else if(choicePlayer1[i]=='R' && choicePlayer2[i]=='S'){
        player1+=1;
        player1status.push('win')
        player2status.push('lose')
      }
    
      if(choicePlayer2[i]=='P' && choicePlayer1[i]=='R'){
        player2+=1;
        player2status.push('win')
        player1status.push('lose')
      }else if(choicePlayer2[i]=='S' && choicePlayer1[i]=='P'){
        player2+=1;
        player2status.push('win')
        player1status.push('lose')
      }else if(choicePlayer2[i]=='R' && choicePlayer1[i]=='S'){
        player2+=1;
        player2status.push('win')
        player1status.push('lose')
      }

      if(choicePlayer2[i]==choicePlayer1[i]){
        player2status.push('draw')
        player1status.push('draw')
      }
    }

    module.exports.insertToGameHistory(nameRoom,username1,player1,player1status.toString());

    module.exports.insertToGameHistory(nameRoom,username2,player2,player2status.toString());
  },

  getAllChoice : async(roomId,user_id)=>{
    let tampUserId = await models.Choice.findAll({
      where:{
        room_id:roomId,
        user_id:user_id
      }
    }).then(user =>{
       return user
    });

    let finalChoiceUser = [];

    tampUserId.forEach((data)=>{
      finalChoiceUser.push(data.dataValues.choice);
    });
    
   
    return finalChoiceUser
  },

  getAllUserId : async (roomId) =>{
    let tampUserId = await models.Choice.findAll({
      attributes: ['user_id'],
      group: ['user_id'], 
      where:{
        room_id:roomId
      }
    }).then(user =>{
       return user
    });

    let finalTampUserId = [];

    tampUserId.forEach((data)=>{
      finalTampUserId.push(data.dataValues.user_id);
    });
    
   
    return finalTampUserId;
  },

  getRoomName : async(roomId) => {
    let tamp = models.RoomPlayer.findByPk(roomId).then((room)=>{
      return room.dataValues.name
    });
    return tamp;
  },

  getUsername : async(idUser) => {
    let tamp = models.UserPlayer.findByPk(idUser).then((room)=>{
      return room.dataValues.username
    });
    return tamp;
  },

  insertToGameHistory : async(nameRoom,username,player,playerstatus) => { 
    models.UserGameHistory.create({
      name_player : username,
      status : playerstatus,
      score : player,
      playDate : Date.now(),
      room_name : nameRoom
    })  
  },
  getResult : async(req,res) => { 
    models.UserGameHistory.findAll({  where: {
      room_name: req.params.room_name
    } }).then(data=>{
      res.status(200).send(data);
    });
  }






  

  
   

}