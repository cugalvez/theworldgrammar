WorldGrammar.MainMenu = function(){};

var sonido;

WorldGrammar.MainMenu.prototype = {
  preload:function() {
    this.load.audio('gota', 'assets/sounds/sonido_botones.ogg');
    this.load.audio('naturaleza', 'assets/sounds/musica_juego.mp3');
  },

  create: function() {
  	sonido = this.game.add.audio('gota');
    music = this.game.add.audio('naturaleza',1,true);

    music.play('',0,1,true);
    //show the space tile, repeated
    this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'fondo');
    this.background.anchor.setTo(0.5);

    //this.background.setSize(this.game.width, this.game.height, 0, 0);
    //this.background.scale.setTo(1.2,1);
    //give it speed in x
    //this.background.autoScroll(-20, 0);
    //this.background.anchor.set(0.5);

    //Mostrar los botones options, info, usuario and play
    this.btnOpciones = this.game.add.sprite(60, this.game.height-280, 'btnOpciones');
    this.btnInfo     = this.game.add.sprite(60, this.game.height-150, 'btnInfo');
    this.btnUsuario  = this.game.add.sprite(this.game.width-180, this.game.height-150, 'btnUsuario');
    this.btnPlay     = this.game.add.sprite(this.game.world.centerX+30, this.game.world.centerY+180, 'fondoBoton');
    this.btnPlay.scale.setTo(1,0.8);
    this.btnPlay.anchor.set(0.5);
    
    this.btnOpciones.scale.setTo(1,0.8);
    this.btnInfo.scale.setTo(1,0.8);
    this.btnUsuario.scale.setTo(1,0.8);

    //Anadimos propiedas a los botones
    this.btnPlay.inputEnabled     = true;
    this.btnUsuario.inputEnabled  = true;
    this.btnInfo.inputEnabled     = true;
    this.btnOpciones.inputEnabled = true;

    //Anadimos la accion que tendra el boton al ser presionado
    this.btnPlay.events.onInputDown.add(listener, this);
    this.btnOpciones.events.onInputDown.add(listener, this);
    this.btnInfo.events.onInputDown.add(listener, this);
    this.btnUsuario.events.onInputDown.add(listener, this);



    //start game text
    var text = "PLAY";
    var style = { font: "70px Arial Black", fill: "#fff", align: "center" };
    var t = this.game.add.text(this.game.world.centerX+30, this.game.world.centerY+185, text, style);
    t.anchor.set(0.5);
    t.stroke = '#000000';
    t.strokeThickness = 6;
    t.fill = '#FFFFFF';
    t.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    t.alpha = 1;


    this.game.add.tween(this.btnPlay).to( { alpha: 0.6 }, 1700, Phaser.Easing.Linear.None, true, 0, 1000, true);
    this.game.add.tween(t).to( { alpha: 0.6 }, 1700, "Linear", true,0, 1000, true);
    this.game.add.tween(this.btnPlay.scale).to({x:0.7, y:0.7},1700, Phaser.Easing.Linear.None, true, 0, 1000, true);
    this.game.add.tween(t.scale).to({x:0.7, y:0.7},1700, "Linear", true, 0, 1000, true);


  },
  update: function() {
    /*

    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }*/

     //this.btnPlay.angle += 1; 
     //this.game.add.tween(this.btnPlay.scale).to( { x: 0.2, y: 2 }, 1000, Phaser.Easing.Linear.None, true);
  },

  render:function () {
    //this.game.debug.soundInfo(sonido, 20, 32);
    /*
    this.game.debug.text('Navigator: ' + navigator.userAgent, 32, 32);
    this.game.debug.text('iOS: ' + this.game.device.iOS, 32, 64);
    this.game.debug.text('Android: ' + this.game.device.android, 32, 128)
    this.game.debug.text('Mobile Safari: ' + this.game.device.mobileSafari, 32, 160);
    this.game.debug.text('WebApp: ' + this.game.device.webApp, 32, 192);
    this.game.debug.text('nav: ' + navigator['standalone'], 32, 192+32);*/

  }
  

  
};


function listener(menu_selected) {

    console.log("hola btn ["+menu_selected.key+"]");
    sonido.play();    
    switch(menu_selected.key){
        case "fondoBoton":
          //Nos envia a la pantalla de niveles
          sonido.play();
          this.state.start('Level');
          break;
        case "btnOpciones":
          //Nos envia a la pantalla de opciones
          sonido.play();
          this.state.start('Options');
          break;
        case "btnInfo":
          //Nos envia a la pantalla de informacion
          sonido.play();
          this.state.start('Info');
          break;
        case "btnUsuario":
          //Nos envia a la pantalla de configuracion del jugador
          sonido.play();
          this.state.start('Usuario');
          break;
        case "return":
          sonido.play();
          this.state.start('MainMenu');
          break;  

      }
    
  }