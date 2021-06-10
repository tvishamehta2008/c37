class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
  form.hide1();
  text("Game Start", 120,100);
  Player.getPlayerInfo();
  if(allPlayers!==undefined){
    var posi= 130;
  for(var plr in allPlayers){
    if(plr=="player"+player.index)
      fill("red");
      else
      fill("black");
      posi=posi+50;
      textSize(30);
      text(allPlayers[plr].name+": "+allPlayers[plr].distance, 120,posi);
    }
  }
  if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance=player.distance+50;
    player.update();
  }
  }
  }


