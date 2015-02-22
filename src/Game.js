WorldGrammar.Game = function(){};

var plataform;
var player;
var cursors;
var diamantes;
var lumens;
var lumen

var score = 0;
var scoreText;

var milseg = 0;
var seg = 0;
var timeText;
var aux=0;

var sonido;

var floor;

var textFra;
var textFraC; 

WorldGrammar.Game.prototype = {
  preload: function() {
    //load level assets
    this.load.image('fondo', 'assets/images/game/fondo_juego.jpg');
    this.load.spritesheet('jugador', 'assets/images/game/jugador.png', 52, 52);
    this.load.image('piso', 'assets/images/game/platform.png');
    this.load.image('diamante', 'assets/images/game/diamante.png');
    this.load.image('lumen', 'assets/images/game/lumen.png');
    
    this.load.audio('gota', 'assets/sounds/sonido_botones.ogg');
    //this.load.image('confirmar', 'assets/images/info/fondo_boton.png');
    //this.load.audio('collect', 'assets/audio/collect.ogg');
    //this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create: function() {
  	//Cargamos sonidos al juego
    sonido = this.game.add.audio('gota');

    this.fondo = this.game.add.sprite(0,0, 'fondo');
    this.fondo.scale.setTo(1.08,0.85);



    var textScore = "SCORE 00000";
    var textTime = "TIME 00000";
    var style = { font: "20px Arial Black", fill: "#fff", align: "center" };
    scoreText = this.game.add.text(40, 20, textScore, style);
    timeText = this.game.add.text(40, 60, textTime, style);
    
    // Stroke color and thickness
    timeText.stroke = '#000000';
    timeText.strokeThickness = 6;
    timeText.fill = '#FFFFFF';
    timeText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);

    //////////////////////////////////////
    ///////// Creamos la plataforma del nivel
    //////////////////////////////////////

    //  We're going to be using physics, so enable the Arcade Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
 
    
    //  The platforms group contains the ground and the 2 ledges we can jump on
    platform = this.game.add.group();
 
    //  We will enable physics for any object that is created in this group
    platform.enableBody = true;
 
    // Here we create the ground.
    
    //floor = new Phaser.Rectangle(0, this.game.height-55, this.game.width, 55);

    var ground = platform.create(0, this.game.world.height - 55, "piso");
 
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    ground.scale.setTo(4, 1);
    ground.alpha = 0;
 
    //  This stops it from falling away when you jump on it
    ground.body.immovable = true;
 
    //  Now let's create two ledges
    var ledge = platform.create(400, 550, "piso");
    ledge.body.immovable = true;
 
    ledge = platform.create(-150, 400, "piso");
    ledge.body.immovable = true;

    ledge = platform.create(this.game.width-200, 300, "piso");
    ledge.body.immovable = true;

    ledge = platform.create(this.game.width-400, 400, "piso");
    ledge.body.immovable = true;




    /////////////////////////////////////
    ///////// El Jugador
    ////////////////////////////////////
    

    // The player and its settings
    player = this.game.add.sprite(120, this.game.world.height - 150, 'jugador');
 
    //  We need to enable physics on the player
    this.game.physics.arcade.enable(player);
 
    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 400;
    player.body.collideWorldBounds = true;
 
    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);


    //  Finally some stars to collect
    diamantes = this.game.add.group();

    //  We will enable physics for any star that is created in this group
    diamantes.enableBody = true;

    lumens = this.game.add.group();
    lumens.enableBody = true;



    //  Here we'll create 12 of them evenly spaced apart
    for (var i = 0; i < 6; i++)
    {
        //  Create a star inside of the 'stars' group
        var diamante = diamantes.create(i * 70, 0, 'diamante');
        diamante.scale.setTo(0.4,0.4);
        //  Let gravity do its thing
        diamante.body.gravity.y = 300;


        //  This just gives each star a slightly random bounce value
        diamante.body.bounce.y = 0.3 + Math.random() * 0.2;


        lumen = lumens.create((i+1)*200, 0, 'lumen');
        lumen.scale.setTo(0.2,0.2);
        lumen.body.gravity.y = 300;
        lumen.body.bounce.y = 0.2 + Math.random * 0.2;
        lumen.anchor.setTo(0.5, 0.5);
        

    }




    //  Our controls.
    cursors = this.game.input.keyboard.createCursorKeys();

    this.cuadro = this.game.add.sprite(0,this.game.height-50, 'piso');
    this.cuadro.alpha = 0.8;
    this.cuadro.scale.setTo(8,1.6);

    var textFrase = "HE            CARLOS";
    var styleFrase = { font: "30px Arial Black", fill: "#fff", align: "center" };
    textFra = this.game.add.text(10, this.game.height-50, textFrase, styleFrase);
    
    // Stroke color and thickness
    textFra.stroke = '#000000';
    textFra.strokeThickness = 6;
    textFra.fill = '#FFFFFF';
    textFra.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);


    var textFraseC = "IS";
    var styleFraseC = { font: "30px Arial Black", fill: "#fff", align: "center" };
    textFraC = this.game.add.text(100, this.game.height-50, textFraseC, styleFraseC);
    
    // Stroke color and thickness
    textFraC.stroke = '#000000';
    textFraC.strokeThickness = 6;
    textFraC.fill = '#F0A800';
    textFraC.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    textFraC.alpha = 0;
    


  },
  update: function() {
    countTime();
    //lumens.getAt(1).angle += 1;
    for(var i=0; i<lumens.children.length;i++){
      //var a = lumens.next();
      lumens.getAt(i).angle += 1;
      
    }

    /*
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }*/
     //  Collide the player and the stars with the platforms
    this.game.physics.arcade.collide(player, platform);
    this.game.physics.arcade.collide(diamantes, platform);
    this.game.physics.arcade.collide(lumens, platform);


    this.game.physics.arcade.overlap(player, diamantes, addPuntosDiamantes, null, this);
    this.game.physics.arcade.overlap(player, lumens, addPuntosDiamantes, null, this);



     //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }
    
    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }
  },
  render: function() {
     //this.game.debug.geom(floor,'#3C622F');
     //floor.alpha = 0.3;
  },

  
};


function setNombre(data){

    if(data.key == "confirmar"){
        console.log(document.getElementById("nombreJugador").value);
        textNombre.text = document.getElementById("nombreJugador").value;
    }
}

function addPuntosDiamantes (player, star) {
    
    // Removes the star from the screen
    sonido.play();
    star.kill();

      //  Add and update the score
    score += 10;
    scoreText.text = 'SCORE 000' + score;


}


function countTime () {
  milseg += 1;


  if(milseg/60 == 2){
    seg+=1;
    timeText.text = "TIME " + seg;
    milseg = 0;
  }

  if(score == (18*10)) {
    textFraC.alpha = 1;
    aux=seg;
    score = 0;
  }

  if(aux!==0){
    if(seg==(aux+5)){
      cambiarOracion();
    }
  }
  
}


function cambiarOracion() {

  textFra.text = "SHE         KARINA";
  textFraC.text = "IS";
  textFraC.alpha = 0;

}