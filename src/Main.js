var WorldGrammar = WorldGrammar || {};

var gameWidth = 1024;
var gameHeight = 720;

//var h = window.innerWidth;
//var w = window.innerHeight;

//WorldGrammar.game = new Phaser.Game((h > w) ? h : w, (h > w) ? w : h, Phaser.AUTO, 'gameContainer');
//WorldGrammar.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
WorldGrammar.game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, '');

WorldGrammar.game.state.add('Boot', WorldGrammar.Boot);
WorldGrammar.game.state.add('Preload', WorldGrammar.Preload);
WorldGrammar.game.state.add('Options', WorldGrammar.Options);
WorldGrammar.game.state.add('Info', WorldGrammar.Info);
WorldGrammar.game.state.add('Usuario', WorldGrammar.Usuario);
WorldGrammar.game.state.add('Level', WorldGrammar.Level);
WorldGrammar.game.state.add('MainMenu', WorldGrammar.MainMenu);
WorldGrammar.game.state.add('Game', WorldGrammar.Game);

WorldGrammar.game.state.start('Boot');