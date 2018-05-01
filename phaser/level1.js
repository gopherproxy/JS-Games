// The first level, JS object literal notation
// global variable for the playAgain button
var button;
// variable to control the feedback message display
var update = true;

var level1 = {

	create: function () {
		game.add.image(0, 0, 'bg');
		// button needs to be created here, but is hidden as default
		button = game.add.button(game.world.centerX - 150, 450, 'playAgain', this.actionOnClick, this, 2, 1, 0);
		button.visible = false;

		this.catcher = game.add.sprite(game.width / 2, game.height / 2, 'catcher');
		this.catcher.anchor.setTo(0.5, 0);
		// animation added (name, frames, frameRate, loop)
		this.catcher.animations.add('catch', [0, 1, 2, 3, 4], 42, false);
		// default idle frame, with the catcher facing left
        this.catcher.frame = 0;
		// physics enabled
		game.physics.enable(this.catcher);
		game.physics.arcade.enableBody(this.catcher); // important for velocity (movement) + collision detection
		this.catcher.body.collideWorldBounds = true; // catcher cannot leave the world ;-)

		this.cat = game.add.sprite(game.rnd.between(5, 795), game.rnd.between(5, 595), 'cat');
		this.cat.anchor.setTo(0.5, 0.5);
		game.physics.enable(this.cat, Phaser.Physics.ARCADE);

		this.cursors = game.input.keyboard.createCursorKeys();

		this.scoreTxt = game.add.text(10, 10, score.toString(), {
			font: "30px Arial",
			fill: "#ff0"
		});
		
		this.scoreTxt.font = 'Chewy';

		// Create a custom timer (global variable countDown + format function in game.js)
		this.timer = game.time.create();

		// Create a delayed event 1m and 30s from now
		this.timerEvent = this.timer.add(Phaser.Timer.SECOND * countDown, this.endTimer, this);

		// Start the timer
		this.timer.start();

		// Display the timer
		this.txtTimer = game.add.text(740, 10, formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), {
			font: "40px Arial",
			fill: "#ff0044"
		});
		
		this.txtTimer.font = 'Chewy';

	},

	update: function () {
		// velocity (property on body) moves the catcher/monkey in any direction
		// variable for movement speed
		var speed = 250;
		// default velocity is 0 (catcher is not moving)
		this.catcher.body.velocity.x = 0;
		this.catcher.body.velocity.y = 0;

		if (this.cursors.left.isDown) {
			this.catcher.body.velocity.x = -speed;
			this.catcher.scale.x = 1;
		}
		if (this.cursors.right.isDown) {
			this.catcher.body.velocity.x = speed;
			this.catcher.scale.x = -1;
		}
		if (this.cursors.up.isDown) {
			this.catcher.body.velocity.y = -speed;
		}
		if (this.cursors.down.isDown) {
			this.catcher.body.velocity.y = speed;
		}

		game.physics.arcade.overlap(this.catcher, this.cat, this.catHitHandler);

		// the countdown
		this.tmp = formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000));

		if (this.timer.running && this.tmp >= 0) {
			this.txtTimer.text = formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000));
		} else if (score < 10 && update === true) {
			// calling the function handling a "loose" scenario
			this.loose();
			// update is used to prevent the Phaser update loop calling this function indefinitely
			update = false;
		}

		// winning
		if (score === 10) {
			this.win();
		}

	},

	catHitHandler: function () {
		// playing the catch animation
		level1.catcher.animations.play('catch');
		
		this.catcherSound = game.add.audio('woosh');
		this.catcherSound.play();

		this.catSound = game.add.audio('cat');
		this.catSound.volume = 0.5;
		this.catSound.play();

		level1.cat.x = Math.random() * game.width;
		level1.cat.y = Math.random() * game.height;
		score++;
		level1.scoreTxt.setText(score.toString());
		
	},

	endTimer: function () {
		// Stop the timer when the delayed event triggers
		this.timer.stop();
	},
	// winning, loosing
	win: function () {
		this.cat.destroy();
		bgSound.stop();
		this.catcher.kill();
		this.timer.stop();
		// resetting the global score
		score = 0;
		game.state.start('splash2');
	},

	loose: function () {

		this.catcher.kill();
		this.cat.kill();
		this.timer.stop();
		/*
		Difference between Kill and Destroy

		Kill is supposed to halt rendering, but the object still exists. It is good if you want to make a reusable object. You could create the object again without the cost of actually creating the object again.

		Destroy should remove the object and everything related to it. You use this when you want to send the object to the garbage collector.
		*/
		txtGameOver = game.add.text(game.world.centerX, -100, "GAME OVER - YOU LOST :-(", {
			font: "50px Luckiest Guy",
			fill: "#ff0044"
		});
		txtGameOver.anchor.set(0.5);
		// text animation
		tween = game.add.tween(txtGameOver).to({
			y: game.world.centerY
		}, 1500, Phaser.Easing.Bounce.Out, true);
		// revealing the playAgain button
		button.visible = true;
	},

	actionOnClick: function () {
		score = 0;
		// resetting update when replaying the level
		update = true;
		// launching level 1 again
		game.state.start('level1');
	}
}
