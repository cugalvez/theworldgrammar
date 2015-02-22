var WorldGrammar = WorldGrammar || {};

//loading the game assets
WorldGrammar.Preload = function(){};

WorldGrammar.Preload.prototype = {
  preload: function() {
  	//show logo in loading screen
  	this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

  	//load game assets
  	this.load.image('fondo', 'assets/images/menu/fondo.png');
  	this.load.image('btnOpciones', 'assets/images/menu/boton_confi.png');
    this.load.spritesheet('btnInfo', 'assets/images/menu/boton_info.png');
    this.load.spritesheet('btnUsuario', 'assets/images/menu/boton_usuario.png');
  	this.load.image('fondoBoton', 'assets/images/menu/fondo_botones.png');
    this.load.audio('gota', 'assets/sounds/sonido_botones.ogg');
    
    //this.load.audio('collect', 'assets/audio/collect.ogg');
    //this.load.audio('explosion', 'assets/audio/explosion.ogg');
  },
  create: function() {
  	this.state.start('MainMenu');
  }
};