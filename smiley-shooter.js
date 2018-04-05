(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.myHero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// this refers to the timeline
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// smiley
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AkahBQEuEHEHkH");
	this.shape.setTransform(0,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAyAAQAAAVgPAOQgOAPgVAAQgTAAgPgPQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATg");
	this.shape_1.setTransform(20,-11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjAjQgOgOAAgVQAAgTAOgPQAPgPAUAAQAUAAAPAPQAPAPAAATQAAAVgPAOQgPAPgUAAQgUAAgPgPg");
	this.shape_2.setTransform(20,-11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AAyAAQAAAVgPAOQgOAPgVAAQgTAAgPgPQgPgOAAgVQAAgTAPgPQAPgPATAAQAVAAAOAPQAPAPAAATg");
	this.shape_3.setTransform(-20.5,-11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgjAjQgOgOAAgVQAAgTAOgPQAPgPAUAAQAUAAAPAPQAPAPAAATQAAAVgPAOQgPAPgUAAQgUAAgPgPg");
	this.shape_4.setTransform(-20.5,-11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AB2AAQAAAxgjAiQgiAjgxAAQgwAAgjgjQgigiAAgxQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwg");
	this.shape_5.setTransform(21.4,-11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTBTQgjgiABgxQgBgwAjgjQAjgjAwABQAxgBAiAjQAkAjgBAwQABAxgkAiQgiAkgxAAQgwAAgjgkg");
	this.shape_6.setTransform(21.4,-11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AB2AAQAAAxgjAiQgiAjgxAAQgwAAgjgjQgigiAAgxQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwg");
	this.shape_7.setTransform(-21.3,-11.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhTBTQgjgiABgxQgBgwAjgjQAjgjAwABQAxgBAiAjQAkAjgBAwQABAxgkAiQgiAkgxAAQgwAAgjgkg");
	this.shape_8.setTransform(-21.3,-11.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AH0AAQAADPiTCSQiSCTjPAAQjOAAiSiTQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACSCTQCTCSAADOg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3,1,1).p("AkaAnQEaibEbCb");
	this.shape_11.setTransform(0,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AlhFiQiSiTAAjPQAAjOCSiTQCTiSDOAAQDPAACTCSQCSCTAADOQAADPiSCTQiTCSjPAAQjOAAiTiSg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_11}]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51,-51,102,102);


(lib.crossHair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(7,1,1).p("AAAiqIAAFV");
	this.shape.setTransform(29.1,0,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(7,1,1).p("AAAiqIAAFV");
	this.shape_1.setTransform(-29.1,0,1,1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(7,1,1).p("AAAiqIAAFV");
	this.shape_2.setTransform(0,-29.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(7,1,1).p("AAAiqIAAFV");
	this.shape_3.setTransform(0,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FF0000").ss(7,1,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.crossHair, new cjs.Rectangle(-49.6,-49.6,99.3,99.3), null);


// stage content:
(lib.smileyshooter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// global variables
		var w, h, myHero, myCursor, score;
		
		//game function
		function startGame(){
			w = stage.canvas.width;
			h = stage.canvas.height;
			// initial score is 0
			score = 0;
			// transferring the value to the dynamic textfield (instancename(!)counter)
			// exportRoot (EaslJS) can access the maintimeline directly! 
			exportRoot.counter.text = score;
			addElements();
			createjs.Ticker.on("tick", moveElements);
		}
		
		function addElements(){
			// adding the smiley hero from the library
			myHero = new lib.myHero(); // linkage!
			// problems calculating stage.canvas.width / height on MAC!
			myHero.x = w / 2;
			myHero.y = h / 2;
			stage.addChild(myHero);
			myHero.addEventListener("click", shootHero.bind(this));
			// custom mouse cursor
			stage.canvas.style.cursor = 'none';
			myCursor = new lib.crossHair();
			myCursor.x = 100;
			myCursor.y = 100;
			stage.addChild(myCursor);
		}
		
		function moveElements(){
			moveHero();
			moveCursor();
		}
		
		function moveHero(){
			myHero.x += 5;
			
			if (myHero.x > w + 100){
				// starting again from the left side
				myHero.x = -100;
				// randomzing y position
				myHero.y = Math.floor(Math.random() * h - 60);
			}
		}
		
		function moveCursor(){
			// attaching the custom cursor to the current mouse position
			myCursor.x = stage.mouseX;
			myCursor.y = stage.mouseY;
		}
		
		function shootHero(){
			// playing the animation inside the MoveClip
			myHero.gotoAndPlay(1);	
			console.log('HIT!');
			// incrementing the score the 
			score++;
			// exportRoot (EaslJS) can access the maintimeline directly! 
			exportRoot.counter.text = score;	
		}
		
		// start the game
		startGame();
		
		/* Custom Mouse Cursor
		Replaces the default mouse cursor with the specified symbol instance.
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// score (dynamic text)
	this.counter = new cjs.Text("", "76px 'Arial'", "#FFFFFF");
	this.counter.name = "counter";
	this.counter.textAlign = "center";
	this.counter.lineHeight = 87;
	this.counter.lineWidth = 66;
	this.counter.parent = this;
	this.counter.setTransform(748.9,14.8);

	this.timeline.addTween(cjs.Tween.get(this.counter).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#004AE9","#51F9FE"],[0,1],0,409.1,0,-409.1).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,300,800,600);
// library properties:
lib.properties = {
	id: 'B9FD92531A1CD147B64CF6C0EB7A9F6D',
	width: 800,
	height: 600,
	fps: 24,
	color: "#C3C3C3",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B9FD92531A1CD147B64CF6C0EB7A9F6D'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;