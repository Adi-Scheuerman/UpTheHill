(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"UpTheHIll_atlas_", frames: [[868,1326,185,188],[0,2574,622,180],[1736,2316,432,622],[0,1950,432,622],[3038,2496,432,622],[434,1326,432,622],[434,1950,432,622],[868,1597,432,622],[868,2221,432,622],[1302,1692,432,622],[1302,2316,432,622],[2931,1298,432,622],[1736,1692,432,622],[2170,1922,432,622],[2604,1922,432,622],[0,1326,432,622],[3365,1872,432,622],[2497,1298,432,622],[3644,624,432,622],[2170,2546,353,323],[3472,2496,353,330],[3644,0,432,622],[1195,973,432,622],[1629,1068,432,622],[3547,1248,432,622],[2063,1068,432,622],[1629,973,121,70],[2920,0,722,669],[3581,715,32,32],[2787,1140,128,33],[2787,1105,128,33],[1752,1012,128,35],[1922,0,996,1066],[2497,1068,288,134],[0,973,1193,351],[0,0,1920,971],[2787,1068,128,35],[2787,1175,128,33],[3547,730,32,32],[2920,671,625,625],[1752,973,131,37],[3547,671,32,57],[3581,671,29,42]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap25 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap_LogoHIT = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bunneats6pngcopy = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating1 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating10 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating12 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating13 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating14 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating15 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating16 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating2 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating20 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating21 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating22 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating23 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating3 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating4 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeating5 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.bunnystanding = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.bunnymoving1 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.bunnymoving2 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.bunnysad2 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.bunnysad3 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.bunnystanding_1 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.bunnystanding2 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.bunnyeats7 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.carrots = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.clock3 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.continueGame = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.endGame = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.enterBtn = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.hill_Q = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.mountainend = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.mountain_w_carrots = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.nextQBtn = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.playAgain = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.RadioButton = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.sky2 = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.startGameBtn = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.vSign = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.xSign = function() {
	this.spriteSheet = ss["UpTheHIll_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();
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


(lib.xSign_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.xSign();
	this.instance.parent = this;
	this.instance.setTransform(-14,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.xSign_1, new cjs.Rectangle(-14,-21,29,42), null);


(lib.vSign_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.vSign();
	this.instance.parent = this;
	this.instance.setTransform(-15,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vSign_1, new cjs.Rectangle(-15,-29,32,57), null);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnystanding();
	this.instance.parent = this;
	this.instance.setTransform(-121.6,-136.3,0.563,0.438);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.6,-136.3,243.3,272.7);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnyeating4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.799,0.689);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,345.3,428.7), null);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnyeating3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.743,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,320.9,424.2), null);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnyeating2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.789,0.668);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,340.9,415.4), null);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnyeating1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.769,0.682);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,0,332,424.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnysad3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.218,0.218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,94,135.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnysad2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.218,0.218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,94,135.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnymoving1();
	this.instance.parent = this;
	this.instance.setTransform(0,54.2,0.307,0.307,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,143.4,140), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnymoving1();
	this.instance.parent = this;
	this.instance.setTransform(0,54.2,0.307,0.307,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,143.4,140), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnymoving2();
	this.instance.parent = this;
	this.instance.setTransform(0,51.5,0.292,0.292,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,137.4,134.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bunnystanding2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.221,0.221);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,95.7,137.7), null);


(lib.startGameBtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.startGameBtn();
	this.instance.parent = this;
	this.instance.setTransform(-64,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.startGameBtn_1, new cjs.Rectangle(-64,-17,131,37), null);


(lib.score = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.scoreTxt2 = new cjs.Text("", "bold 28px 'Arial'");
	this.scoreTxt2.name = "scoreTxt2";
	this.scoreTxt2.textAlign = "center";
	this.scoreTxt2.lineHeight = 33;
	this.scoreTxt2.lineWidth = 647;
	this.scoreTxt2.parent = this;
	this.scoreTxt2.setTransform(-5.5,77.2);

	this.scoreTxt1 = new cjs.Text("", "bold 28px 'Arial'");
	this.scoreTxt1.name = "scoreTxt1";
	this.scoreTxt1.textAlign = "center";
	this.scoreTxt1.lineHeight = 33;
	this.scoreTxt1.lineWidth = 647;
	this.scoreTxt1.parent = this;
	this.scoreTxt1.setTransform(-5.5,28.2);

	this.scoreTitle = new cjs.Text("", "bold 28px 'Arial'");
	this.scoreTitle.name = "scoreTitle";
	this.scoreTitle.textAlign = "center";
	this.scoreTitle.lineHeight = 33;
	this.scoreTitle.lineWidth = 332;
	this.scoreTitle.parent = this;
	this.scoreTitle.setTransform(-1,-17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.scoreTitle},{t:this.scoreTxt1},{t:this.scoreTxt2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.score, new cjs.Rectangle(-330.9,-19.6,651,130.1), null);


(lib.playAgain_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.playAgain();
	this.instance.parent = this;
	this.instance.setTransform(-64,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.playAgain_1, new cjs.Rectangle(-64,-17,128,33), null);


(lib.odotBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("אודות", "14px 'Arial'", "#0000CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 47;
	this.text.parent = this;
	this.text.setTransform(4.3,-8.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000CC").ss(1,1,1).p("AiPAAIEfAA");
	this.shape.setTransform(4,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotBtn, new cjs.Rectangle(-21,-10.9,50.5,21.9), null);


(lib.nextQBtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nextQBtn();
	this.instance.parent = this;
	this.instance.setTransform(-67,-19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.nextQBtn_1, new cjs.Rectangle(-67,-19,128,35), null);


(lib.LogoHIT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap_LogoHIT();
	this.instance.parent = this;
	this.instance.setTransform(-311,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.LogoHIT, new cjs.Rectangle(-311,-90,622,180), null);


(lib.imageAnsr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsGoHIYNAAIAAQPI4NAAg");
	this.shape.setTransform(0.5,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.imageAnsr, new cjs.Rectangle(-78,-50.9,157,106), null);


(lib.hillQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hill_Q();
	this.instance.parent = this;
	this.instance.setTransform(-182.6,-278.8,0.367,0.523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hillQ, new cjs.Rectangle(-182.6,-278.8,365.4,557.6), null);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(371,-16,0.319,0.248);

	this.howToPlay = new cjs.Text("איך משחקים", "14px 'Arial'");
	this.howToPlay.name = "howToPlay";
	this.howToPlay.textAlign = "center";
	this.howToPlay.lineHeight = 18;
	this.howToPlay.lineWidth = 100;
	this.howToPlay.parent = this;
	this.howToPlay.setTransform(-332.9,-7.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBRdgCsIAAAlEBP9ACtMihZAAAIAAlZEhRWgCSMCiuAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EBP9ACtMihZAAAIAAlZMCi5AAAIAAAlIAAE0gEBRYgCSMiiuAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.howToPlay},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(-522.2,-18.3,1044.6,36.6), null);


(lib.enterBtn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.enterBtn();
	this.instance.parent = this;
	this.instance.setTransform(-65,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.enterBtn_1, new cjs.Rectangle(-65,-17,128,35), null);


(lib.endGame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.endGame();
	this.instance.parent = this;
	this.instance.setTransform(-64,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.endGame_1, new cjs.Rectangle(-64,-17,128,33), null);


(lib.continueGame_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.continueGame();
	this.instance.parent = this;
	this.instance.setTransform(-64,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.continueGame_1, new cjs.Rectangle(-64,-17,128,33), null);


(lib.closeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.Bitmap25();
	this.instance.parent = this;
	this.instance.setTransform(-13,-13,0.132,0.132);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AixixIFjAAIAAFjIljAAg");
	this.shape.setTransform(-1.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiwCxIAAlhIFhAAIAAFhg");
	this.shape_1.setTransform(-1.2,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.closeBtn, new cjs.Rectangle(-20,-18.9,37.5,37.5), null);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.clockTxt = new cjs.Text("", "bold 18px 'Arial'");
	this.clockTxt.name = "clockTxt";
	this.clockTxt.textAlign = "center";
	this.clockTxt.lineHeight = 20;
	this.clockTxt.lineWidth = 47;
	this.clockTxt.parent = this;
	this.clockTxt.setTransform(50.5,41.2);

	this.instance = new lib.clock3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.123,0.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.clockTxt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(0,0,89,82.5), null);


(lib.an_RadioButton = function(options) {
	this._element = new $.an.RadioButton(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.radioBtnsQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ri3 = new lib.imageAnsr();
	this.ri3.parent = this;
	this.ri3.setTransform(-141.3,93,0.845,0.737,0,0,0,0.5,2);

	this.ri2 = new lib.imageAnsr();
	this.ri2.parent = this;
	this.ri2.setTransform(181.5,93,0.845,0.737,0,0,0,0.5,2);

	this.ri1 = new lib.imageAnsr();
	this.ri1.parent = this;
	this.ri1.setTransform(-141.3,3.3,0.845,0.737,0,0,0,0.5,2);

	this.ri0 = new lib.imageAnsr();
	this.ri0.parent = this;
	this.ri0.setTransform(181.5,3.3,0.845,0.737,0,0,0,0.5,2);

	this.x2 = new lib.xSign_1();
	this.x2.parent = this;
	this.x2.setTransform(288.5,75.5,1,1,0,0,0,0.5,0);

	this.x3 = new lib.xSign_1();
	this.x3.parent = this;
	this.x3.setTransform(-33.5,75.5,1,1,0,0,0,0.5,0);

	this.x0 = new lib.xSign_1();
	this.x0.parent = this;
	this.x0.setTransform(288.5,-14.8,1,1,0,0,0,0.5,0);

	this.x1 = new lib.xSign_1();
	this.x1.parent = this;
	this.x1.setTransform(-33.5,-14.8,1,1,0,0,0,0.5,0);

	this.v3 = new lib.vSign_1();
	this.v3.parent = this;
	this.v3.setTransform(-32,76,1,1,0,0,0,1,-0.5);

	this.v2 = new lib.vSign_1();
	this.v2.parent = this;
	this.v2.setTransform(292,76,1,1,0,0,0,1,-0.5);

	this.v0 = new lib.vSign_1();
	this.v0.parent = this;
	this.v0.setTransform(292,-19.3,1,1,0,0,0,1,-0.5);

	this.v1 = new lib.vSign_1();
	this.v1.parent = this;
	this.v1.setTransform(-32,-19.3,1,1,0,0,0,1,-0.5);

	this.nextQ = new lib.nextQBtn_1();
	this.nextQ.parent = this;
	this.nextQ.setTransform(-254.8,171,1,1,0,0,0,-3,-1.5);

	this.rt2 = new cjs.Text("", "15px 'Arial'");
	this.rt2.name = "rt2";
	this.rt2.textAlign = "right";
	this.rt2.lineHeight = 19;
	this.rt2.lineWidth = 218;
	this.rt2.parent = this;
	this.rt2.setTransform(245.1,56.5);

	this.r2 = new lib.an_RadioButton({'id': 'r2', 'label':'', 'value':'2', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r2.setTransform(315.8,68.6,1.28,1.28,0,0,0,49.9,11);

	this.rt3 = new cjs.Text("", "15px 'Arial'");
	this.rt3.name = "rt3";
	this.rt3.textAlign = "right";
	this.rt3.lineHeight = 19;
	this.rt3.lineWidth = 218;
	this.rt3.parent = this;
	this.rt3.setTransform(-77.8,56.5);

	this.r3 = new lib.an_RadioButton({'id': 'r3', 'label':'', 'value':'3', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r3.setTransform(-7,68.6,1.28,1.28,0,0,0,49.9,11);

	this.rt0 = new cjs.Text("", "15px 'Arial'");
	this.rt0.name = "rt0";
	this.rt0.textAlign = "right";
	this.rt0.lineHeight = 19;
	this.rt0.lineWidth = 218;
	this.rt0.parent = this;
	this.rt0.setTransform(245.1,-33);

	this.r0 = new lib.an_RadioButton({'id': 'r0', 'label':'', 'value':'0', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r0.setTransform(315.8,-20.9,1.28,1.28,0,0,0,49.9,11);

	this.subText = new cjs.Text("", "italic 16px 'Arial'");
	this.subText.name = "subText";
	this.subText.textAlign = "right";
	this.subText.lineHeight = 20;
	this.subText.lineWidth = 502;
	this.subText.parent = this;
	this.subText.setTransform(306,-62.7);

	this.textQ = new cjs.Text("", "bold 22px 'Arial'");
	this.textQ.name = "textQ";
	this.textQ.textAlign = "right";
	this.textQ.lineHeight = 27;
	this.textQ.lineWidth = 534;
	this.textQ.parent = this;
	this.textQ.setTransform(306,-145.2);

	this.rt1 = new cjs.Text("", "15px 'Arial'");
	this.rt1.name = "rt1";
	this.rt1.textAlign = "right";
	this.rt1.lineHeight = 19;
	this.rt1.lineWidth = 218;
	this.rt1.parent = this;
	this.rt1.setTransform(-77.8,-33);

	this.r1 = new lib.an_RadioButton({'id': 'r1', 'label':'', 'value':'1', 'name':'radio', 'disabled':false, 'visible':true, 'class':'ui-radiobutton'});

	this.r1.setTransform(-7,-20.9,1.28,1.28,0,0,0,49.9,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r1},{t:this.rt1},{t:this.textQ},{t:this.subText},{t:this.r0},{t:this.rt0},{t:this.r3},{t:this.rt3},{t:this.r2},{t:this.rt2},{t:this.nextQ},{t:this.v1},{t:this.v0},{t:this.v2},{t:this.v3},{t:this.x1},{t:this.x0},{t:this.x3},{t:this.x2},{t:this.ri0},{t:this.ri1},{t:this.ri2},{t:this.ri3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.radioBtnsQ, new cjs.Rectangle(-318.8,-147.2,699.4,335.8), null);


(lib.odotPopup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.LogoHIT.cursor = "pointer";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.instance = new lib.carrots();
	this.instance.parent = this;
	this.instance.setTransform(151,91);

	this.closeBtn = new lib.closeBtn();
	this.closeBtn.parent = this;
	this.closeBtn.setTransform(-254,-205,0.662,0.662,0,0,0,12.1,-0.3);

	this.LogoHIT = new lib.LogoHIT();
	this.LogoHIT.parent = this;
	this.LogoHIT.setTransform(-39.4,109.9,0.533,0.533,0,0,0,0,0.1);

	this.text = new cjs.Text(":פותח במסגרת פרויקט בקורסים\nסביבות לימוד אינטראקטיביות 1 & אנימציה, תשע\"ח ", "bold 18px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 510;
	this.text.parent = this;
	this.text.setTransform(1.6,-45.9);

	this.text_1 = new cjs.Text("אפיון ופיתוח: שני אדרי ועדי שוירמן", "italic bold 24px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 405;
	this.text_1.parent = this;
	this.text_1.setTransform(-0.8,-106);

	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85,-194,0.642,0.642);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Egq9gdwMBV7AAAMAAAA7hMhV7AAAg");
	this.shape.setTransform(0,-26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egq9AdxMAAAg7hMBV7AAAMAAAA7hg");
	this.shape_1.setTransform(0,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.text_1},{t:this.text},{t:this.LogoHIT},{t:this.closeBtn},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotPopup, new cjs.Rectangle(-275.9,-217.9,552,383), null);


(lib.hillEntry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.hill_gameName = new cjs.Text("", "bold 24px 'Arial'", "#FFFFFF");
	this.hill_gameName.name = "hill_gameName";
	this.hill_gameName.textAlign = "center";
	this.hill_gameName.lineHeight = 29;
	this.hill_gameName.lineWidth = 468;
	this.hill_gameName.parent = this;
	this.hill_gameName.setTransform(116,-84.3);

	this.startGame = new lib.startGameBtn_1();
	this.startGame.parent = this;
	this.startGame.setTransform(114.5,23.6,1,1,0,0,0,0,-0.5);

	this.instance = new lib.bunnystanding_1();
	this.instance.parent = this;
	this.instance.setTransform(-444.5,50.7,0.235,0.235);

	this.instance_1 = new lib.mountain_w_carrots();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-472,-235,0.509,0.453);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.startGame},{t:this.hill_gameName}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hillEntry, new cjs.Rectangle(-472,-235,976.8,439.7), null);


(lib.selectGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.enterBtn = new lib.enterBtn_1();
	this.enterBtn.parent = this;
	this.enterBtn.setTransform(2.5,70.1,1,1,0,0,0,-0.5,1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר משחק, 0, מדעים, 1, עברית, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(-0.3,-0.1,1.4,1.4,0,0,0,49.8,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.enterBtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.selectGame, new cjs.Rectangle(-70.7,-15.9,141.4,103), null);


(lib.bunnyQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
	}
	this.frame_175 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(22).call(this.frame_53).wait(3).call(this.frame_56).wait(119).call(this.frame_175).wait(3));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-2.2,-5.1,1,1,0,0,0,47.8,68.9);

	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.5,3.2,1,1,0,0,0,68.7,67.5);
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-12.5,0.7,1,1,0,0,0,71.7,70);
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.5,0.7,1,1,0,0,0,71.7,70);
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-3,-4.3,1,1,0,0,0,47,67.7);
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3,-4.3,1,1,0,0,0,47,67.7);
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol32();
	this.instance_6.parent = this;
	this.instance_6.setTransform(183.6,298.7,0.288,0.325,0,0,0,166.2,212.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol33();
	this.instance_7.parent = this;
	this.instance_7.setTransform(183.7,298.9,0.281,0.332,0,0,0,170.9,208.4);
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol34();
	this.instance_8.parent = this;
	this.instance_8.setTransform(183.6,298.9,0.298,0.325,0,0,0,160.4,212.1);
	this.instance_8._off = true;

	this.instance_9 = new lib.Symbol35();
	this.instance_9.parent = this;
	this.instance_9.setTransform(183.5,298.8,0.277,0.321,0,0,0,172.4,214.8);
	this.instance_9._off = true;

	this.instance_10 = new lib.bunnyeating5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(136,230,0.221,0.221);

	this.instance_11 = new lib.bunneats6pngcopy();
	this.instance_11.parent = this;
	this.instance_11.setTransform(133,231,0.221,0.221);

	this.instance_12 = new lib.bunnyeats7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(133,231,0.221,0.221);

	this.instance_13 = new lib.bunnyeating10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(134,229,0.221,0.221);

	this.instance_14 = new lib.bunnyeating12();
	this.instance_14.parent = this;
	this.instance_14.setTransform(133,231,0.221,0.221);

	this.instance_15 = new lib.bunnyeating13();
	this.instance_15.parent = this;
	this.instance_15.setTransform(135,229,0.221,0.221);

	this.instance_16 = new lib.bunnyeating15();
	this.instance_16.parent = this;
	this.instance_16.setTransform(135,230,0.217,0.218);

	this.instance_17 = new lib.bunnyeating14();
	this.instance_17.parent = this;
	this.instance_17.setTransform(133,232,0.217,0.218);

	this.instance_18 = new lib.bunnyeating16();
	this.instance_18.parent = this;
	this.instance_18.setTransform(133,231,0.221,0.221);

	this.instance_19 = new lib.bunnyeating21();
	this.instance_19.parent = this;
	this.instance_19.setTransform(134,231,0.221,0.221);

	this.instance_20 = new lib.bunnyeating20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(134,231,0.221,0.221);

	this.instance_21 = new lib.bunnyeating23();
	this.instance_21.parent = this;
	this.instance_21.setTransform(136,230,0.221,0.221);

	this.instance_22 = new lib.bunnyeating22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(136,230,0.221,0.221);

	this.instance_23 = new lib.Tween2("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(179.8,299.9,0.393,0.505,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},4).to({state:[{t:this.instance_11}]},4).to({state:[{t:this.instance_12}]},5).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},4).to({state:[{t:this.instance_15}]},5).to({state:[{t:this.instance_17},{t:this.instance_16,p:{scaleX:0.217,scaleY:0.218,x:135}}]},5).to({state:[{t:this.instance_16,p:{scaleX:0.221,scaleY:0.221,x:134}}]},5).to({state:[{t:this.instance_18}]},4).to({state:[{t:this.instance_16,p:{scaleX:0.221,scaleY:0.221,x:134}}]},5).to({state:[{t:this.instance_18}]},4).to({state:[{t:this.instance_16,p:{scaleX:0.221,scaleY:0.221,x:134}}]},4).to({state:[{t:this.instance_18}]},6).to({state:[{t:this.instance_19}]},5).to({state:[{t:this.instance_20}]},5).to({state:[{t:this.instance_21}]},6).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},4).to({state:[]},3).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:true},1).wait(25).to({_off:false,x:17.8},0).to({_off:true},1).wait(15).to({_off:false,x:-2.2,y:-5.4},0).wait(6).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(1).to({regY:67.4,y:3.1},0).wait(3).to({_off:true},1).wait(5).to({_off:false,regY:67.5,x:-15.5,y:-1.8},0).wait(1).to({regY:67.4,y:-1.9},0).wait(3).to({_off:true},1).wait(5).to({_off:false,regY:67.5,x:-14.4,y:-1.8},0).wait(1).to({regY:67.4,y:-1.9},0).wait(3).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).wait(4).to({_off:true},1).wait(162));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).wait(4).to({_off:true},1).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(33).to({_off:false},0).wait(6).to({_off:true},1).wait(138));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).wait(6).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).wait(1).to({regX:166,x:183.5,y:298.6},0).wait(2).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60).to({_off:false},0).wait(1).to({regX:170.5,regY:207.7,x:183.5,y:298.6},0).wait(2).to({_off:true},1).wait(114));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(64).to({_off:false},0).wait(1).to({regX:160.5,y:298.8},0).wait(2).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(68).to({_off:false},0).wait(1).to({regX:172.6,regY:214.3,y:298.6},0).wait(2).to({_off:true},1).wait(106));

	// mountainEnd
	this.instance_24 = new lib.mountainend();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-315,261,0.79,0.635);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(56).to({_off:false},0).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-74,95.7,137.7);


// stage content:
(lib.UpTheHIll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var selfHome = this
		
		var odot = new lib.odotPopup();
		selfHome.odotBtn.addEventListener("click", odotFunc);
		selfHome.odotBtn.cursor = "pointer";
		selfHome.header.howToPlay.cursor = "not-allowed";
		
		var selectGame = new lib.selectGame(); //קומבו לבחירת המשחק
		var gameName = new createjs.Text(); //משתנה טקסט להצבת שם המשחק
		var hillEntry = new lib.hillEntry(); //גבעה לעמוד ההוראות
		var hill = new lib.hillQ(); //גבעה לעמוד השאלות - הארנב מטפס עליה
		var bunnyQ = new lib.bunnyQ(); //ארנב
		var radioBtn = new lib.radioBtnsQ(); //משתנה רדיו באטנס להצגת השאלות
		var timeOutTxt = new createjs.Text(); //הצגת טקסט בעמוד עבר הזמן	
		var score = new lib.score(); //הצגת טקסטים בסיום המשחק
		
		//משתנים לשעון ולספירת הזמן
		var clock = new lib.clock();
		var timer;
		
		//מקשים
		var continueGame = new lib.continueGame(); //המשך משחק
		var playAgain = new lib.playAgain(); //שחק שוב
		var endGame = new lib.endGame(); //סיים משחק
		
		//משתנים לטיפול בתוכן ובשאלות
		var gameChoice = 0; //בחירת משחק
		var qnum = 0; //משתנה להגרלת מספר השאלה
		var gameText = ["מדעים", "עברית"]; //מערך לשמות המשחקים
		var array_radio = [radioBtn.rt0, radioBtn.rt1, radioBtn.rt2, radioBtn.rt3]; //מערך המכיל את שמות תיבות הטקסט במסיחים
		var array_image = [radioBtn.ri0, radioBtn.ri1, radioBtn.ri2, radioBtn.ri3]; //מערך המכיל את שמות תיבות התמונה במסיחים
		var array_v = [radioBtn.v0, radioBtn.v1, radioBtn.v2, radioBtn.v3]; //מערך לשמות סימני הוי
		var array_x = [radioBtn.x0, radioBtn.x1, radioBtn.x2, radioBtn.x3]; //מערך לשמות סימני האיקס
		var radioStatus = [false, false, false, false]; //מערך לשמירת הסטטוס של הרדיו באטנס
		
		//מערך השאלות
		var array_textQ = [
			[ //משחק ראשון - מדעים
				[false, 1, "false false true false", "?איזה מהחומרים הבאים מוליך חום טוב יותר", "דף נייר", "קערת פלסטיק", "סיר מתכת", "כף עץ"],
				[false, 1, "true false false false", "באיזה חומר מהחומרים הבאים כדאי להשתמש כדי לצפות ?את גג הבית, אם נרצה לשמור בו על טמפרטורה קרירה", "צמר", "מתכת", "פסלטיק", "עץ"],
				[false, 1, "false false false true", "?איזה מהחומרים הבאים יצוף בכוס מים", "זהב", "סוכר", "חול", "שמן"],
				[false, 1, "true false false false", "?לאיזה שימוש האדם מנצל את תכונת המסיסות", "הכנת משקאות", "הפקת חשמל", "חימום הבית", "תפירת ביגוד"],
				[false, 1, "true false false false", "?איזה מבין המשפטים הבאים מדגים את עקרון הדחייה", "רכבת ריחוף מגנטי", "תליית פתקים על המקרר", "הוצאת שבב ברזל על-ידי מגנט", "סוגר ארנק"],
				[false, 1, "false true false false", "?כיצד נפריד תערובת של ברזל וחול", "נפריד על-ידי סינון התערובת במסננת", "נצמיד מגנט לתערובת", "נברור ביד אחד אחד", "לא ניתן להפריד את התערובת"],
			],
			[ //משחק שני - עברית
				[false, 1, "false false true false", "איזה מבין המשפטים הבאים פירושו - המעשה מתוכנן ?מתחילתו ועד סופו", "כל ההתחלות קשות", "המתחיל במצווה - אומרים לו גמור", "סוף מעשה במחשבה תחילה", "גם מסע של אלף קילומטר מתחיל בצעד אחד"],
				[false, 1, "false true false false", "...המילים אחווה ושנאה הן מילים", "נרדפות", "הפוכות", "משלימות", "לא קשורות"],
				[false, 1, "true false false false", "?מהו השורש המתאים למילים: פתרה, פותרים, פתרון", "פ.ת.ר", "פ.ר.ת", "ר.י.מ", "ת.ר.פ"],
				[false, 1, "false false true false", "...במקום מזהמים אפשר להגיד", "מקלקלים", "הורסים", "מלכלכים", "מפריעים"],
				[false, 1, "false false false true", "?כיצד כותבים 'הכלב שלנו' במילה אחת", "כלבם", "כלבי", "כלבו", "כלבנו"],
				[false, 1, "true false false false", "ישנם זמנים בהם אנשים מקדישים זמן למחשבות על עצמם ?וכיצד נהגו עם האנשים סביבם. איך נקראים זמנים אלה", "עשרת ימי תשובה", "ימי הכיפורים", "ימי ראש השנה", "חגי תשרי"],
		/*		[false, 1, "true false false false", "?בניגוד לנעמה, אני דברנית. האם נעמה דברנית או שתקנית", "נעמה דברנית", "נעמה שתקנית", "ימי ראש השנה", "חגי תשרי"],*/
			]
		];
		
		//////////קוד המשחק//////////
		
		selectGameFunc() //פונקציה לבחירת משחק
		
		function selectGameFunc() {
			stage.removeChild(score); //מסירה אלמנטים ממסך הסיון למקרה שמגיעים לכאן באמצעות סיים משחק
			stage.removeChild(playAgain);
			stage.removeChild(endGame);
			stage.removeChild(bunnyQ);
		
			for (i = 0; i < gameText[0].length; i++) {
				gameText[0][0] = false;
				gameText[0][1] = 1;
			}
		
			selectGame = new lib.selectGame();
			selectGame.x = 463; //הוספת הקומבו לבמה
			selectGame.y = 236;
			stage.addChild(selectGame);
			selectGame.enterBtn.alpha = 0.5;
		
			$("#dom_overlay_container").on("change", "#mycb", combo_change); //מאזין לשינוי ערכים בקומבו
		};
		
		
		//בעת שינוי ערך בקומבו
		function combo_change(evt) {
			console.log(evt.currentTarget.value);
			gameChoice = evt.currentTarget.value;
			if (gameChoice == 0) {
				selectGame.enterBtn.alpha = 0.5;
				selectGame.enterBtn.removeEventListener("click");
			} else {
				selectGame.enterBtn.alpha = 1;
				selectGame.enterBtn.addEventListener("click", gameEntry);
				selectGame.enterBtn.cursor = "pointer";
			}
		};
		
		
		//פונקציה להצבת הוראות המשחק - נקראית בלחיצה על המקש כניסה לאחר בחירת משחק בקומבו
		function gameEntry() {
			stage.removeChild(selectGame); //מסירה את הקומבו של בחירת המשחק
			stage.removeChild(score); //מסירה אלמנטים ממסך הציון למקרה שמגיעים משם באמצעות שחק שוב
			stage.removeChild(playAgain);
			stage.removeChild(endGame);
		
			hillEntry.x = 476; //מציבה גבעה עם הוראות המשחק
			hillEntry.y = 374;
			stage.addChild(hillEntry);
			hillEntry.hill_gameName.text = "ענה על כל השאלות הבאות בנושא " + gameText[gameChoice - 1] + " ועזור לארנב לטפס אל הגזרים";
			hillEntry.startGame.addEventListener("click", prepareQ); //מאזין למקש התחל משחק
			hillEntry.startGame.cursor = "pointer";
		};
		
		
		//פונקציה להכנת השאלה - נראית בלחיצה על התחל. מסירה הוראות, מציבה את שם המשחק, גבעה, ארנב ופקדים
		function prepareQ() {
			gameName.x = 420;
			gameName.y = 78;
			gameName.color = "#000000";
			gameName.font = "28px Arial bold";
			gameName.style = "bold";
			gameName.text = gameText[gameChoice - 1];
			stage.addChild(gameName);
		
			stage.removeChild(hillEntry);
			stage.removeChild(timeOutTxt);
			stage.removeChild(continueGame);
		
			hill.x = 781;
			hill.y = 312;
			stage.addChild(hill);
		
			bunnyQ.x = 640;
			bunnyQ.y = 526;
			stage.addChild(bunnyQ);
		
			radioBtn.x = 335;
			radioBtn.y = 342;
			stage.addChild(radioBtn);
			for (i = 0; i < array_radio.length; i++) {
				array_v[i].alpha = 0;
				array_x[i].alpha = 0;
			}
			radioBtn.nextQ.addEventListener("click", checkArr);
		
			checkArr();
		};
		
		
		//פונקציה שעוברת על התא הראשון של שאלות המשחק הנבחר ובודקת אם כולם נענו או לא כדי להחליט אם להמשיך להגריל או לעבור למסך סיום המשחק
		function checkArr() {
			var stillQs = false;
			for (i = 0; i < array_textQ[gameChoice - 1].length; i++) {
				if (array_textQ[gameChoice - 1][i][0] == false) {
					stillQs = true;
					i++
				}
			}
			if (stillQs == false) {
				end();
			} else {
				createQ();
			}
		}
		
		
		//פונקציה להגרלת שאלה, הצבת טקסטים והפעלת טיימר
		function createQ() {
			qnum = Math.floor(Math.random() * (array_textQ[gameChoice - 1].length));
			if (array_textQ[gameChoice - 1][qnum][0] == true) { //שאלה שכבר נענתה נכון
				createQ();
			} else if (array_textQ[gameChoice - 1][qnum][0] == false) {}
			for (i = 0; i < array_radio.length; i++) {
				array_v[i].alpha = 0;
				array_x[i].alpha = 0;
			};
		
			//מסירים את הסימון מהרדיו באטן והופכים את כולם לאנאייבלד
			for (i = 0; i <= array_radio.length; i++) {
				$("#r" + i).prop("checked", false);
				$('#r' + i).prop("disabled", false);
			};
		
			radioBtn.nextQ.alpha = 0;
		
			radioBtn.textQ.text = array_textQ[gameChoice - 1][qnum][3];
			radioBtn.subText.text = "סמן את התשובה הנכונה";
			for (i = 0; i < array_radio.length; i++) {
				array_radio[i].text = array_textQ[gameChoice - 1][qnum][i + 4];
				$("#dom_overlay_container").on("change", "#r" + i, radio_change);
			};
		
			stage.addChild(clock);
			clock.x = 8;
			clock.y = 38;
			clock.name = "clock";
			var timeLeft = 30;
			clock.clockTxt.text = timeLeft;
		
			timer = setInterval(function () {
				if (timeLeft == 0) {
					console.log("הזמן עבר");
					clearInterval(timer);
					timeOut()
				} else {
					timeLeft--;
					clock.clockTxt.text = timeLeft;
				}
			}, 1000);
		}
		
		
		//פונקציה לבדיקת נכונות התשובה
		function radio_change(evt) {
			radioBtn.nextQ.alpha = 1;
			radioBtn.subText.text = "";
			stage.removeChild(clock);
			clearInterval(timer);
		
			for (i = 0; i < radioStatus.length; i++) {
				$('#r' + i).prop("disabled", true);
				radioStatus[i] = false;
			}
			console.log(evt.currentTarget);
			var num = evt.currentTarget.id.charAt(1);
			radioStatus[num] = evt.target.checked;
		
			if (radioStatus.join(" ") == array_textQ[gameChoice - 1][qnum][2]) {
				array_v[num].alpha = 1;
				bunnyQ.gotoAndPlay(2);
				//נסיון שהארנב יזוז במרחקים שתלויים במספר השאלות
				/*		
				var hillH = parseInt(524 / array_textQ[gameChoice - 1].length);
				var hillW = parseInt(524 / array_textQ[gameChoice - 1].length);
				bunnyQ.x = bunnyQ.x + hillW;
				bunnyQ.y = bunnyQ.y - hillH;*/
				
				bunnyQ.x = bunnyQ.x + 8;
				bunnyQ.y = bunnyQ.y - 12;
		
				array_textQ[gameChoice - 1][qnum][0] = true;
		
			} else {
				array_x[num].alpha = 1;
				bunnyQ.gotoAndPlay(33);
				array_textQ[gameChoice - 1][qnum][1]++;
			};
		};
		
		
		//פונקציה נגמר הזמן
		function timeOut() {
			stage.removeChild(radioBtn); //מסירים אלמנטים של שאלה בלבד, ארנב וגבעה נשארים
			stage.removeChild(clock);
		
			timeOutTxt.x = 420;
			timeOutTxt.y = 300;
			timeOutTxt.color = "#000000";
			timeOutTxt.font = "28px Arial bold";
			timeOutTxt.style = "bold";
			timeOutTxt.text = "הזמן עבר";
			stage.addChild(timeOutTxt);
		
			continueGame.x = 410;
			continueGame.y = 350;
			stage.addChild(continueGame);
			continueGame.addEventListener("click", prepareQ);
		};
		
		
		//פוקצית סיום מציגה ניקוד ומאפשרת סיום או משחק מחדש
		function end() {
			stage.removeChild(clock);
			clearInterval(timer);
			stage.removeChild(hill);
			stage.removeChild(radioBtn);
			stage.removeChild(gameName);
		
			bunnyQ.x = 300;
			bunnyQ.y = 170;
			bunnyQ.gotoAndPlay(57);
		
			//חישוב הציון לפי מספר נסיונות המענה לשאלה וסך השאלות במשחק
			//לא ברור למה נעשה חישוב שגוי וגם כשכל השאלות נענות נכון בפעם הראשונה הציון הוא 102
			var totalScore = 0;
			for (var i = 0; i < array_textQ[gameChoice - 1].length; i++) {
				var scorePerQ = Math.round(100 / (array_textQ[gameChoice - 1].length * array_textQ[gameChoice - 1][i][1]));
				totalScore = Math.round(totalScore + scorePerQ);
			}
		
			score.x = 471;
			score.y = 207;
			score.scoreTitle.text = "!כל הכבוד";
			score.scoreTxt1.text = "סיימת בהצלחה את המשחק בנושא " + gameText[gameChoice - 1];
			score.scoreTxt2.text = "ציונך במשחק: " + totalScore;
			stage.addChild(score);
		
			playAgain.x = 289;
			playAgain.y = 346;
			stage.addChild(playAgain);
			playAgain.addEventListener("click", gameEntry);
		
			endGame.x = 520;
			endGame.y = 346;
			stage.addChild(endGame);
			endGame.addEventListener("click", reloadFunc);
		};
		
		
		//פונקציה לדיאלוג אודות
		function odotFunc() {
			selectGame.x = 800; //מזיזים את הקומבו הצידה - פתרון לכך שהוא היה מוצג על הפופאפ של אודות
			selectGame.y = 800;
			radioBtn.x = 800; //פתרון כמו לקומבו
			radioBtn.y = 800;
		
			odot.x = 450;
			odot.y = 320;
			stage.addChild(odot);
			odot.LogoHIT.addEventListener("click", logoHIT);
			odot.LogoHIT.cursor = "pointer";
			odot.closeBtn.addEventListener("click", closeOdot);
			odot.closeBtn.cursor = "pointer";
		};
		
		function logoHIT() {
			window.open("http://www.hit.ac.il/", "_blank");
		};
		
		function closeOdot() {
			stage.removeChild(odot);
			selectGame.x = 463; //החזרה של הקומבו
			selectGame.y = 236;
			radioBtn.x = 335; //החזרה של הרדיו באטנס
			radioBtn.y = 342;
		}
		
		function reloadFunc(){
			location.reload()
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.odotBtn = new lib.odotBtn();
	this.odotBtn.parent = this;
	this.odotBtn.setTransform(58.1,16.1,1,1,0,0,0,4.3,0);

	this.header = new lib.header();
	this.header.parent = this;
	this.header.setTransform(475.5,15.2);

	this.instance = new lib.sky2();
	this.instance.parent = this;
	this.instance.setTransform(-11,-9,1.57,0.507);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("AEdAAQAAB2hUBUQhTBTh2AAQh1AAhThTQhUhUAAh2QAAh1BUhUQBThTB1AAQB2AABTBTQBUBUAAB1g");
	this.shape.setTransform(478.5,28.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjIDKQhUhUAAh2QAAh1BUhTQBThUB1AAQB2AABUBUQBTBTAAB1QAAB2hTBUQhUBTh2AAQh1AAhThTg");
	this.shape_1.setTransform(478.5,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.header},{t:this.odotBtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(433.8,286,1043.6,317.1);
// library properties:
lib.properties = {
	id: 'CEA8146CA408C845B57542F414B94FCF',
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/UpTheHIll_atlas_.png", id:"UpTheHIll_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/radiobutton.js", id:"an.RadioButton"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
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
an.compositions['CEA8146CA408C845B57542F414B94FCF'] = {
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;