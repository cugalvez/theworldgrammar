var WorldGrammar = WorldGrammar || {};

WorldGrammar.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
WorldGrammar.Boot.prototype = {
  preload: function() {
  	//assets we'll use in the loading screen
    this.load.image('logo', 'assets/images/loader/logo.png');
    this.load.image('preloadbar', 'assets/images/loader/barra_carga.png');
  },
  create: function() {
  	//loading screen will have a white background
    this.game.stage.backgroundColor = '#C1C4B9';
    var gameWidth = 800;
	var gameHeight = 540;


    if (this.game.device.desktop)
        {
        	console.log("navegador");
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = gameWidth/2;
            this.scale.minHeight = gameHeight/2;
            this.scale.maxWidth = gameWidth;
            this.scale.maxHeight = gameHeight;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);
        }
        else
        {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = gameWidth/2;
            this.scale.minHeight = gameHeight/2;
            this.scale.maxWidth = 2048; //You can change this to gameWidth*2.5 if needed
            this.scale.maxHeight = 1228; //Make sure these values are proportional to the gameWidth and gameHeight
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.forceOrientation(true, false);
            this.scale.hasResized.add(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            this.scale.setScreenSize(true);
        }


/*
        var ow = parseInt(this.game.canvas.style.width,10);
		var oh = parseInt(this.game.canvas.style.height,10);
		var r = Math.max(window.innerWidth/ow,window.innerHeight/oh);
		var nw = ow*r;
		var nh = oh*r;
		this.game.canvas.style.width = nw+"px";
		this.game.canvas.style.height= nh+"px";
		this.game.canvas.style.marginLeft = (window.innerWidth/2 - nw/2)+"px"; 
		this.game.canvas.style.marginTop = (window.innerHeight/2 - nh/2)+"px";*/
		//document.getElementById("game").style.width = window.innerWidth+"px";
		//document.getElementById("game").style.height = window.innerHeight-1+"px";//The css for body includes 1px top margin, I believe this is the cause for this -1
		//document.getElementById("game")
	//physics system for movement
	this.game.physics.startSystem(Phaser.Physics.ARCADE);
    
    this.state.start('Preload');
  }
};