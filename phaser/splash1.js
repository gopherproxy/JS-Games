// Splash screen level 1, JS object literal notation

var splash1 = {

	create: function () {

		game.add.image(0, 0, 'bg');

		var instructions = game.add.text(game.world.centerX, -50, 'Level 1:\nMove the catcher with the arrow keys.\nCatch 10 cats in 30 seconds.', {
			font: "25px Luckiest Guy",
			fill: "#fff"
		});
		
		instructions.anchor.set(0.5);
		
		tween = game.add.tween(instructions).to({
			y: game.world.centerY
		}, 1500, Phaser.Easing.Bounce.Out, true);
		tween.onComplete.add(onComplete, this);
		
		// Add the background sound
		bgSound = game.add.audio('wouldn_doo');
		bgSound.play();
		bgSound.loopFull();

		setTimeout(function () {
			game.state.start("level1");
		}, 5000);
		
		function onComplete() {

    		this.tween = game.add.tween(instructions).to( { y: 700 }, 1000, Phaser.Easing.Exponential.Out, true, 2500);

			}
	},

}
