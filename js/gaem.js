var MainState = { preload: preload, create: create, update: update };
var player;
var wWorld;
var cursors;

function preload() {

    game.load.spritesheet('player','img/sprite.png',32,52);
    game.load.spritesheet('world','img/world.png',1920,600,1);

}

function create() {
	cursor = game.input.keyboard.createCursorKeys();
   
    game.world.setBounds(0, 0, 1920, 600);
	game.stage.backgroundColor = '#124184';
    game.physics.startSystem(Phaser.Physics.NINJA);

	
	
    player = game.add.sprite(0, 50, 'player', 0);
    player.anchor.setTo(0.5, 1);
	game.physics.ninja.enableAABB(player);
    game.camera.follow(player);
	
	var bottom = game.world.height;
	wWorld = game.add.sprite(0, 0, 'world');
	game.physics.ninja.enableTile(wWorld,wWorld.frame);
	wWorld.body.allowGravity = false;
}

function update() {
	game.physics.ninja.collide(player, wWorld);

	if (cursor.left.isDown){
		player.body.moveLeft(20);
		}
	else if (cursor.right.isDown){
		player.body.moveRight(20);
		console.log("asads");}

		
	if (cursor.up.isDown && player.body.touching.down){
		player.body.moveUp(1300);}

}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div', MainState);
game.state.add("MainState", MainState);
game.state.start("MainState");