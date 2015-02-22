WorldGrammar.Usuario = function(){};

var floor;
var textNombre;

WorldGrammar.Usuario.prototype = {
  preload: function() {
    //load level assets
    this.load.image('marco', 'assets/images/info/marco.png');
    this.load.image('return', 'assets/images/info/fondo_boton.png');
    this.load.image('confirmar', 'assets/images/info/fondo_boton.png');
    //this.load.audio('collect', 'assets/audio/collect.ogg');
    //this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create: function() {
  	
    this.marco = this.game.add.sprite(0,0, 'marco');
    this.marco.scale.setTo(1,0.8);



    var text = "JUGADOR";
    var style = { font: "70px Arial Black", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.world.centerX, 220, text, style);
    t.anchor.set(0.5);
    // Stroke color and thickness
    t.stroke = '#000000';
    t.strokeThickness = 6;
    t.fill = '#FFFFFF';

    t.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);



    var textJuga = "Ingrese su nombre";
    var styleJuga = { font: "30px Arial Black", fill: "#fff", align: "center" };
    var textJug = this.game.add.text(340, 260, textJuga, styleJuga);

    //var input = "<input type='text' name='nombreJugador'/>"
    //this.game.add(input);
    //this.game.stage.canvas.id = 'foobar';
    

    this.btnConfirmar = this.game.add.sprite(550, 410, 'confirmar');
    this.btnConfirmar.scale.setTo(0.7,0.4);  
    var textConfir = "CONFIRMAR";
    var styleConfir = { font: "24px Arial Black", fill: "#fff", align: "center" };
    var textCon = this.game.add.text(555, 420, textConfir, styleConfir);
    


    this.btnReturn = this.game.add.sprite(this.game.width-210, this.game.height-120, 'return');
    this.btnReturn.scale.setTo(0.7,0.6);  
    
    var textReturn = "RETURN";
    var styleReturn = { font: "30px Arial Black", fill: "#fff", align: "center" };
    var textReturn = this.game.add.text(this.game.width-200, this.game.height-100, textReturn, styleReturn);
    //textReturn.anchor.set(0.5);
    textReturn.stroke = '#000000';
    textReturn.strokeThickness = 6;
    textReturn.fill = '#FFFFFF';

    textNombre = this.game.add.text(this.game.world.centerX, 300, textConfir, styleConfir);
    textNombre.text = "";
    textNombre.anchor.set(0.5);


    //Anadimos propiedas a los botones
    this.btnReturn.inputEnabled = true;
    this.btnConfirmar.inputEnabled = true;

     //Anadimos la accion que tendra el boton al ser presionado
    this.btnReturn.events.onInputDown.add(listener, this);
    this.btnConfirmar.events.onInputDown.add(setNombre, this);
    
    floor = new Phaser.Rectangle(0, 550, 800, 50);



    var canva = document.getElementsByTagName("canvas")[0];
    canva.setAttribute('id','canva');
    var input = new CanvasInput({
        canvas: document.getElementById('canva'),
        x:200,
        y:300,
        placeHolder: 'Enter message here...'
    });

    //input.setAttribute('z-index','100000');

    var vajate = document.getElementsByTagName("input")[0];
    vajate.setAttribute('id','nombreJugador');
    vajate.setAttribute('z-index','100000');
    vajate.setAttribute('position','');

    
  },
  update: function() {
    /*
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }*/
  },
  

  
};


function setNombre(data){

    if(data.key == "confirmar"){
        console.log(document.getElementById("nombreJugador").value);
        textNombre.text = document.getElementById("nombreJugador").value;
    }
}