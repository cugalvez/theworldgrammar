WorldGrammar.Level = function(){};

WorldGrammar.Level.prototype = {
  preload: function() {
    //load level assets
    this.load.image('fondo', 'assets/images/level/fondo.png');
    this.load.spritesheet('nivel', 'assets/images/level/nivel.png');
    this.load.image('return', 'assets/images/level/fondo_boton.png');
    
    //this.load.audio('collect', 'assets/audio/collect.ogg');
    //this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create: function() {
  	//show the space tile, repeated
    this.background = this.game.add.sprite(0, 0, 'fondo');
    //this.background.setSize(this.game.width, this.game.height, 0, 0);
    this.background.scale.setTo(1.2,1);
    //give it speed in x
    //this.background.autoScroll(-20, 0);


    var text = "LEVEL SELECTED";
    var style = { font: "70px Arial Black", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.world.centerX+30, 50, text, style);
    t.anchor.set(0.5);
    // Stroke color and thickness
    t.stroke = '#000000';
    t.strokeThickness = 6;
    t.fill = '#FFFFFF';


    var grd = t.context.createLinearGradient(0, 0, 0, t.height);

    //  Add in 2 color stops
    grd.addColorStop(0, '#8ED6FF');   
    grd.addColorStop(1, '#004CB3');

    //  And apply to the Text
    t.fill = grd;
    t.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);


    //Cargamos los niveles disponibles de acuerdo con la base de datos
    var pos_x_nivel = 100;
    var pos_y_nivel = 100;

    var niveles = 9;
    var filas = niveles/4;
    var columnas = 4;
    var n = 1;

    if(niveles%4 !== 0) {
      filas = niveles/4 + 1;
    }else{
      filas = niveles/4;
    }

    

    for (var i = 0; i < filas; i++) {
      for (var j = 0; j < columnas; j++) {
          //Mostrar los botones options, info, usuario and play
          this.btnLevel = this.game.add.sprite(pos_x_nivel, pos_y_nivel, 'nivel');
          this.btnLevel.scale.setTo(0.6,0.6);
          this.btnLevel.inputEnabled = true;

          this.btnLevel.events.onInputDown.add(setLevel, this);
          var textLevel = n;
          var styleLevel = { font: "40px Arial Black", fill: "#fff", align: "center" };
          var textLev = this.game.add.text(pos_x_nivel+60, pos_y_nivel+30, n, styleLevel);
          
          // Stroke color and thickness
          textLev.stroke = '#000000';
          textLev.strokeThickness = 6;
          textLev.fill = '#FFFFFF';

          pos_x_nivel+=220;
          niveles--;
          n++;
          if(niveles==0){
            break;
          }
          
      }
      pos_x_nivel=100;
      pos_y_nivel+=180
      if(niveles==0){
        break;
      }    
    }

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


function setLevel(level){
  console.log("entro");
    this.game.state.start('Game');


}
