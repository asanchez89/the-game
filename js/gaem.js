var MainState = { preload: preload, create: create, update: update };
var player;
var wWorld;
var cursors;

function preload() {

    game.load.spritesheet('player','img/sprite.png',32,52);
    game.load.tilemap('world','img/world.png',null, Phaser.Tilemap.PNG);

}

function create() {
	cursor = game.input.keyboard.createCursorKeys();
    
	game.add.tileSprite(0, 0, 600, 1920, 'world');
    game.world.setBounds(0, 0, 1920, 600);
	game.stage.backgroundColor = '#124184';
    game.physics.startSystem(Phaser.Physics.NINJA);

	 
    player = game.add.sprite(0, 250, 'player', 0);
    player.anchor.setTo(0.5, 0.5);
	game.physics.ninja.enableAABB(player);
    game.camera.follow(player);
	
	var bottom = game.world.height;
	wWorld = game.add.sprite(0, bottom, 'world');
	game.physics.ninja.enableTile(wWorld);
	wWorld.body.allowGravity = false;
}

function update() {

	if (cursor.left.isDown)
		player.body.velocity.x = -80;
	else if (cursor.right.isDown)
		player.body.velocity.x = 80;
	else
		player.body.velocity.x = 0;
		
	if (cursor.up.isDown && player.body.touching.down)
		player.body.velocity.y = -180;

}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div', MainState);
game.state.add("MainState", MainState);
game.state.start("MainState");