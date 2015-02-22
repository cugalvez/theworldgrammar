WorldGrammar.Info = function(){};

WorldGrammar.Info.prototype = {
  preload: function() {
    //load level assets
    this.load.image('marco', 'assets/images/info/marco.png');
    this.load.image('return', 'assets/images/info/fondo_boton.png');
    
    //this.load.audio('collect', 'assets/audio/collect.ogg');
    //this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.sprite(0, 0, 'fondo');
    this.background.scale.setTo(1.2,1);

    this.marco = this.game.add.sprite(0,0, 'marco');
    this.marco.scale.setTo(1,0.8);



    var text = "INFORMACION";
    var style = { font: "70px Arial Black", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.world.centerX, 220, text, style);
    t.anchor.set(0.5);
    // Stroke color and thickness
    t.stroke = '#000000';
    t.strokeThickness = 6;
    t.fill = '#FFFFFF';

    t.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);


    var textMusica = "Este juego esta desarrollado con las herramientas Phaser.io que sirve para web/n"+
    "y para dispositivos moviles ANdroid y IOS, es muy probable que se tenga que programmar en el /n"+
    "codigo para lograr esto pero no cambiara nada su funcionaidad.";


    var styleMusica = { font: "20px Arial Black", fill: "#fff", align: "center", wordWrap: true, wordWrapWidth: 650};
    var tMusica = this.game.add.text(350, 270, textMusica, styleMusica);

    
  
    this.btnReturn = this.game.add.sprite(this.game.width-210, this.game.height-120, 'return');
    this.btnReturn.scale.setTo(0.7,0.6);  
    
    var textReturn = "RETURN";
    var styleReturn = { font: "30px Arial Black", fill: "#fff", align: "center" };
    var textReturn = this.game.add.text(this.game.width-200, this.game.height-100, textReturn, styleReturn);
    //textReturn.anchor.set(0.5);
    textReturn.stroke = '#000000';
    textReturn.strokeThickness = 6;
    textReturn.fill = '#FFFFFF';

    //Anadimos propiedas a los botones
    this.btnReturn.inputEnabled = true;

     //Anadimos la accion que tendra el boton al ser presionado
    this.btnReturn.events.onInputDown.add(listener, this);
    
    
  },
  update: function() {
    /*
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }*/
  },
  

  
};
