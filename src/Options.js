WorldGrammar.Options = function(){};

WorldGrammar.Options.prototype = {
  preload: function() {
    //load level assets
    this.load.image('fondo', 'assets/images/options/fondo_fin.png');
    this.load.image('marco', 'assets/images/options/marco.png');
    this.load.image('return', 'assets/images/options/fondo_boton.png');
    
    //this.load.audio('collect', 'assets/audio/collect.ogg');
    //this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.sprite(0, 0, 'fondo');
    this.background.scale.setTo(1.2,1);

    this.marco = this.game.add.sprite(0,0, 'marco');
    this.marco.scale.setTo(1,0.8);



    var text = "OPTIONS";
    var style = { font: "70px Arial Black", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.world.centerX, 220, text, style);
    t.anchor.set(0.5);
    // Stroke color and thickness
    t.stroke = '#000000';
    t.strokeThickness = 6;
    t.fill = '#FFFFFF';

    t.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);


    var textMusica = "MUSICA";
    var styleMusica = { font: "40px Arial Black", fill: "#fff", align: "center" };
    var tMusica = this.game.add.text(350, 270, textMusica, styleMusica);
    //tMusica.anchor.set(0.5);

    var textMusica = "EFECTOS DE SONIDO";
    var tSonido = this.game.add.text(350, 370, textMusica, styleMusica);
    //tSonido.anchor.set(0.5);

    
  
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
