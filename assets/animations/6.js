(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 768,
	height: 1024,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"assets/animations/images/BrookTrout_PQ_atlas_.png", id:"BrookTrout_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"BrookTrout_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.bkgrtiles = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["BrookTrout_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.singleBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399CC").ss(2,1,1).p("AFLlKQCKCJAADBQAADCiKCJQiJCKjCAAQjBAAiJiKQiKiJAAjCQAAjBCKiJQCJiKDBAAQDCAACJCKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99CCFF").s().p("AlKFLQiKiJAAjCQAAjBCKiJQCJiKDBAAQDCAACJCKQCKCJAADBQAADCiKCJQiJCKjCAAQjBAAiJiKgABGlmQAjARA0A1QA7A7AOApQA8C0AAAwQAAATALgkQAMgkAJgzQAaiVgmgZQhEg1gpgaQhCgqgzAAIgOABg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABYDEQAAgyg8iyQgNgpg5g7Qg1g0gjgSQA5gGBJAwQApAaBDA0QAnAagaCSQgJA0gMAlQgIAYgDAAQgBAAAAgHg");
	this.shape_2.setTransform(20.2,-15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-47.9,95.9,95.9);


(lib.bkgr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("EgEFBJmQiLhqyzlNIuAAAMAGkiKdQAZgZHqhGQD1gjDwgeIAGNmMALHBFuMAKWBBJgEAJEBFjMALkiMpQAAgZBugKQA3gFA3AAMgDcCPxgEg93BDDMAFoiKJQAMglCvAFQBYACBVAKMADICKxgEAjUBAOMgEsiH8QAZgZFUgUQCqgKClgFMAgNCJMgEhZYA6SMAOYiAIQgZgMFzgjQC5gSC+gPMgDxCEggEBW5AKyQAAgQgZhcQg1jDikoYQjGqHlox5QmAzHmAy2IgghkQgZglCWgjQBLgSBQgKMAXIA2ZIhPOsQguIUgUDHQgMB1gDAAIAAgJg");
	this.shape.setTransform(608,475.2,1.387,1.12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#99CCFF","#6699FF","#666699"],[0.247,0.627,0.894],-0.1,-444.6,-0.1,444.5).s().p("Eh5mBFeMAAAiK6MDzNAAAMAAACK6g");
	this.shape_1.setTransform(551.1,432.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.2,-56.7,1628.9,1063.9);


(lib.BrookTroutlowerJaw = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#748065","#818C72","#A3AA94","#D9DCCA","#FCFCED","#D7DADE","#DCD8D4"],[0.098,0.149,0.239,0.365,0.435,0.749,0.875],-5.2,-34.2,9.6,49.8).s().p("AB0HOQgdgIhkgnQhFgbgvAAQg1AAgwgOQgSgFhXgiQhzgsiJhJQjChngwhJQgvhIAKgeQADgLANgJQAPgKAGgFQAOgLAcA0QAeA4ASACQAHABBqgFQBfgEAkAIQAeAJDWAnQDSApApAdQA1AkCageQCdgeA6g+QA7g+BZjGQBjjbAOgUQAPgXAeAhQAaAdAfA/QBFCRgFBQQgDAyAWBVQAIBDg8AkQgzAeioCEQilCBgrAZQhEAng/AMQgbAFgbAAQgsAAgsgMg");
	this.shape.setTransform(43.8,23.9,0.504,0.504);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,87.6,47.8);


(lib.Path_31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABeBRQghgLgbgRQgXgPgWgJQgUgHAAACQAAgCgSABQgMACgHAFIgIAEIgBABIAAAAIgfgSIABgPQACgcgMgPQgKgMgMAEIgdADIgiAFQAMgWAJgIQAPgOAZgDQAegDAXAXQAMAPAFAVQADALAAALIAMgDQATgCAMACQAFgFBJAlQBMAnALgIIA/gHQgLAUgKAKQgQANgYADIgIAAQgPAAgZgIg");
	this.shape.setTransform(20.3,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.7,18);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("Aj0AeQALgZAcgFQAXgJBjAJQBTAGgCgHQAFABA7g0QAigUArABQAWAAAbAEQAaAEAQAPQAQAOADAWQgQgIgRgDIgigGQgYgCgTAAQgmAAgRAMQgSATgdASQgcAVgBgFQgDALhcgIQhigIgKAHQgUAHgGADQgLAHgKATQgMgTAKgXg");
	this.shape.setTransform(25,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,14.6);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AkdApQAJgaAPgXQALgZAogaQAygiA0AFQAuALAqAVQAeAQABgCQACgEAjAXQAnATAUgaQAMgJAbgVIALgIQAIgEAJgDQANgDAJAEIAOAHQATAOANASIAQAXQAOATALAcQANAjAHAMQgZgMgTgTQgOgOgUgeIgOgSQgLgPgLgIQgBgIgTAOIgnAcQgOAKgIAFQgPAHgSAAQgXAAgWgNQgegPAAABQAAADglgSQgugXgcgFQgngEgnAaQgeAUgKASQgRAcgPAQQgRAUgYANIARgwg");
	this.shape.setTransform(30.3,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.7,18);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABOCaQgIgBgFgEIgHgEIAAgBIgBgVIAAgBIgBgEIAAgRIgHABQgaABgPgDQgagGgPgbQgEgtARggQAQgYgDgCQAVgnARgnQgRgBgIACQgQADgZAJQgQAIgUAGIgmALQAKgWAMgNQAOgPAYgLQAegMATgDQAMgCAcABIAUADIABABIAAAAIAPAWIgBABQgDAPgCAGQgNAegRAgIgOAZQACgBgOAYQgOAfACARQABAFAOADQAOADAPgBIAYgDIADAAIAXATIgBAVQAAALgEAOQAAAEgEAGIABABQADABAHgBQAJABACAEQgFAAgDAEIgIAHQgEADgGAAIgFgBg");
	this.shape.setTransform(11,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,31.1);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABLB1QgZgNgMgcQAYAMAWACQAOABAjgDQATgEAPgGIgNgVIgYgtQgIgigogBQgmAGADgCIglAJQgtAKgtABQg0gBgyghQgcgWABgaQAAgYAVgNQApgSAdARQAUALASAeQg1gXghAPIgFAGQABAFANALQAQALAUAIQAXAJATAAQAjAAAtgMIAmgJIAMgCQAOgDARAAQAdABASAKQAQAKAIAOIAMAXQAPAcAIANIAMATIAGAIIADADIABACIABAAIgCAiIAAgDIgCABQgcATgpAHIgQABQgaAAgVgLg");
	this.shape.setTransform(21.1,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.2,25.8);


(lib.Path_26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ADXBBIgdggQgOgQgegQQgogUgdAGQgbAIgoAVQgeASAAgBQg+Aag/gWQg8gRgXgkQgRgWAMgcQAKgZANgCQAfgOAbAEQANABAiANIgtAOQgXAIgQAHIgIAJQgDAFAGAKQAGAMASAKQAQAKAUAEQA3ARArgSQABABAcgQQAlgWAngNQAxgHAwAbQASAKAhAaQAYAXAFAbQAFAdgSAVQgCgXgMgRg");
	this.shape.setTransform(24.3,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,48.7,21.1);


(lib.Path_25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AihB7QgGgOAEgPQAHgfAtgLQAQgFAygCIBbgCQAXgBASgFQATgFAFgHQAHgIADgRQAGgMgBgRQgDgjgfgSQgvgdhbAFQgTACggAAQgeAAgTACQAUgUAWgKQAXgKAhgDQArgCAVADQA4AFApAYQAXANAPAZQAOAYAAAWQgBARgCAOIgDAJIgDALQgEAOgMARQgQARgbAHQgOADgjAEIhcACQgvACgLAEQgcAGgHAJQgJALAAAeQgLgNgEgKg");
	this.shape.setTransform(16.6,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.2,29.4);


(lib.Path_24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABmCEQgdgDgQgGQgdgKgNgfQgCgnADgrQACgYgDAAQgDgMgHgQQgOgggagJQgcgHgrAMIg0ASQgaAKgVACQgVADgagDIAlgaQATgNAYgJQAKgCAtgSQAygOAsAKQAqASAVAqQAKAVADAOQAEAAgCAmQgDA2ABAPQAHAQAtAFQAMACAsABQAbAAAVAEQATAEAZAJQgdAMgOAEQgXAGgaAAQggAAgbgDg");
	this.shape.setTransform(25.4,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50.7,27.2);


(lib.Path_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("Ah8B5QgRgIgOgUQAWACAOgCQAOgDAMgHQAKgDALgaQALgegEgcQgDgegMgYIgFgJIAAAAIAFgaIABAAIAAgBIAOgIIAHgFQAJgGAMgEQAOgIAXABQAYABAQAQQAZAaATAnQASAkADADQAPASAFAEQAKAIAVADQgPASgZgDQgbgDgQgYQgFgGgUgkQgTgngOgOQgOgNgYAKIgUAKQAPAdACAiQAGAkgQAoQgQAmgTAIQgSAKgPAAQgKAAgKgEg");
	this.shape.setTransform(15.7,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.3,25.1);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AgSAFIAAgFIAAgEQAAgBASgBQASABABABIAAAEIAAAFQgBACgSAAQgSAAAAgCg");
	this.shape.setTransform(2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,1.6);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AiVBzQgTgEgQgTQgNgPgGgRIgOgcQgHgTgBgOQADgjgCgMQgCgMgIgIQgXgWgcgJQgTgHgrgEQAlgSAeAAQApABAhAhQANAFAHAhQAGAfgGAWQAEATAOAbQAQAiAPABQBMARBJgJIAMgCQAPgEAPgGQAYgMAPgNQAEgDAFgGIAJgKIAFgFIABAAIAfABIAAABIABAAIAAABIALAQQARAZAXAMQAYAMAUgHQAggLAUggQAVglgBgPQgBgZglgGQARgIAUAFQAVAGAIAVQAMAjgbAtQgMASgMALQgVAVgdAJQgiAMgngTQghgRgUgeIgLAJQgRAQgfAPQgTAIgSAEIgOADQgbAFgeAAQg2AAg5gOg");
	this.shape.setTransform(34.8,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.7,25.8);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AhZByQhsgRhMhBQg3g2gZgYQgrgpgfAHQggAIggAeQgeAggJAJQgvA0g5AYQgTAHgkAGQglAGgTAGQBFgiAegSQAxgdAmguQAKgIAfgkQAkgiAwgOQA5gFAzAxQAKAKAeAhQAWAZAPAIQBEA8BiAPQAwAHAhgDIASgCQAagFAWgRQA8gyALgGQA2gjA2ABQA2gDA9AQQAsALA6AWQAQAHAbAPIAhARQAMAEAKgCQAGgBALgGQAigRAwg9QAqg5AvgMQghATghBCQghBAg1AgQgLAIgSADQgXAFgUgJQgOgFgYgOQgagOgOgGQh2gwhRADQgtgBgsAeQgHAEg9AzQgeAXgiAGQgZACABABIgZABQgcAAgkgGg");
	this.shape.setTransform(74.7,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.4,24.2);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AAnBjQAWgbAUgMQARgKABgEQABAAAAgBQAAAAAAAAQAAgBgBgBQAAgBgBgBQgEgFgJgHQgQgKgVgKIgSgHQABgCiQgoQgjgWAOgVQALgQASgDQABAFgCALIgBAHQgKgDAQAMIgFgGQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIAGACIBSAXQA/AUgBACIAUAHQAYALAUANQAPAGAKARQANAVgLAVQgJANgLAIIgNAJQgQAJgPAAQgKAAgVgEg");
	this.shape.setTransform(13.9,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.9,20.8);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AA4BJQgIgDgFgGQgFgGgZgXIgXgWQgygogKgLQgKgLAEgXQAOgCAGACQAIABAGAFQAIAJAvAqIAbAWQAbAYAFAHQAGAIAAAIQABAIgDAMIgUgBg");
	this.shape.setTransform(7.9,7.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,15.7,14.9);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AgZBwIgNgEQgSgGgRgOQgXgQgDgmQgDgbAJgVQgJgCgNAAQgLgBgPABIgaACQgpAHgdAJIg5AYQgbAMgYARQANggAVgUQAXgUAlgPQAkgOArgGQAogFATACQAQAAAQADIAUAEIABAAIAMAcIgDAIQgYArAcAbQAOAOASACQgKAFAwAAQAyAAApgVQAkgTAfg3IAmhGQAMgUAYgIQAXgHAQAIQAPAEAOALIAXAWQgtgJgMAAQgZAAgOAWIgjBAQghA/gyAcQgxAag8AAQgyAAACgGg");
	this.shape.setTransform(34.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.4,23.8);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AB6BOQgMgNg/gMQgagHgVgKQgSgJgDgFQgDACgOgYQgOgWgGgTQgIgTgSgDQgEgBgYACQgfAEgdgQIAZgRQANgHARgDIAPgCQAMgBAOACQAfAFAWAlQASAwAFAGQgEgCATAIQAVAKAUAFQAaAEAbAJQAdAKAHAIQAPAMAHAPQAEALACAUQgigNgRgNg");
	this.shape.setTransform(17.3,10.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.7,21);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AGNBBQgOgVgfgWQgegVgngEQgVgEgjAFQgTABgUgHIgggNQgvghgcAnQgUArgGgCIgDAEQgHAHgJADQgVAGgUgBQgvgChCgrIg1gkQgegUgTgJQgSgJgZgEIgfgEQgggCgkACIhBAEQAogYAUgIQAigMApABIAkAEQAdAFAYALQAXALAfAWIA1AkQA4AlAlABQANABAOgEQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAAAIAYgnIAIgLQAFgHAJgGQASgNAPAAQASgDAUAHQALAEAUAJQASAJAJADQAPAFAJgBQAsgGAVAFQAwAHAlAbQAmAYALAlQAKAhgLAkQgKgjgPgWg");
	this.shape.setTransform(42.8,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,85.7,24.5);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABECJQAOgOAGgRIALgkQAGgRAAgcIgBgEQgNADgOACQgiAGgngCIgegEQgMgBgUgGQgmgLgegTIgJgGIgBgBIAAAAIgHgUIAAAAIABAAIAAgBIAMgeQATgaAKgHQAOgLAQgHIAVgIQAXgIAWAAIAnABQgQAQgRAKQgOAJgYAJQgbAKgNAKQgFADgFAHIgJAMIgEAIQAXAQAeAJQAQAFALABQAqAIAxgJQASgCASgFIAEgBIADgBIABAAIAZAOIAAABIACAIQACAQAAAEQAAAjgHAWQgIAcgSAPQgRAOgVAAIgFAAg");
	this.shape.setTransform(14.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,28.9,27.6);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AiBBNQgEgKAHgOQAHgRAQgGQAPgIATADQAIABAJADIADgLIAIgSQALgfAbgbQAOgTAcgOQAWgLANgCQARgEAOAFQALADAQALIgZAPQgLAFgNADQgKACgQAIQgVALgNAOQgVAVgIAYIgGARIgIAcIAAACIAAAAIgfANIAAgBIgDgBIgEgCQgQgKgMAFQgFADAAACQgCABAHAIQAIAKAMAIQgQAKgNAAQgWAAgMgeg");
	this.shape.setTransform(13.2,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.4,21.5);


(lib.Path_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AAeAZIgggIIgfgEQgEAAgDgFIgFgNQAHgTAHAAQAGAAAcAFIAQADIATAFQAEABACAFIACAOQgKAQgGAAIAAAAg");
	this.shape.setTransform(4.7,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.3,5.1);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5A31E","#DA971B","#BF7513","#924007","#782200"],[0,0.153,0.431,0.808,1],16.6,-52.9,-3.8,52.5).s().p("AjTGwQqNhehiAHQBKgPBDgmQBAgkBShHQChiRBvheQDQi0BVguQAwgaCrhzQCChWAeAAQAiAAAaAoQAOAUAGAUQgXATgVATQgpAmAMAEQAUAHBXgUIBiBQIBYBrIg1A8IBrgUIA1A1IiZB2IDVgtIBJAtIAiBdIA1BDIBDBrIgbAoQhmAah2AoQgxARg/AgQgyAahJATQgLADgZAAQiFAAoLhMg");
	this.shape.setTransform(96.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.7,101.6);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AgZBZIgcgXQgDgCgEgHQgKgOABgRQAAgGAEgaQAEgRgFgKQgFgOgKgLQgOgFgJAAIgvgBQgbABgRgDQgVgEgTgLQAOgEAZgKQAVgHAWgBQAcgBAaACIAUADQANAEANAKQASATAGAVQAHAUgDAZIgFAbQAAAGACADIAEAEIASAPQAWAPAbgIQAagGAmgWIArgaQAXgMAUgDQAVgDAWAHQgNAGgUAPQgSAPgPAIQgXAPgVAMQgnAXgjAJQgOAEgNAAQgZAAgZgPg");
	this.shape.setTransform(23.7,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.3,21);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AiICAQgPgQgIgaIgBgMQAAgKAEgIQAFgLAMgIQAKgGALgBQAagFA0AJIBZAUQAOACAEAAQAigMAMgPQAMgPgGgkQgKgnAAgIQgFgYADgTQADgTALgUIAPAkQAHASAEAUQgBAIAMAoQAIAsgWAlQgNARgVAKIgeAOQgSADgLgCIgJgBIhZgUQgtgJgTAEQgJADgBABIABAHQAOA9ACAMQgZgQgHgIg");
	this.shape.setTransform(16.1,15.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.2,30.5);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#573735","#D6562B","#ED7C31","#F4BB3A"],[0.024,0.369,0.702,1],-8.4,-48.3,38.4,56.9).s().p("ADPGuQg+gdjIh2Qg1gfhwg3Qh0g6g2gfQjEhvhLiMIg8g2QAlgIEMhjQEEhhAwgHQBCgKBMgTICQgmIBSgVQAxgJAjAIQAWAGAhAZQAlAcAQAHQAuAUBXAIICJAOQgDAlggBDQgSAlgiA/IgzBoQgXA3gLA2QgMA6AEA3QADAwARA9QATBHgBA4QgCBZg9gKQAGAHAJAOQAJAMAKAGQgQAHgmAAQiGAAichIg");
	this.shape.setTransform(72.3,50.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.6,100.5);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ACTBhQgVgEgIgDQgMgGhPAAQhLAAgBgCQgJAAgPgCQgfgFgagQQgegTgKgnQgGgTABgXQAAgUAHgPQAGgMAOgQQAMAiAAAdQgBARAFARQAHAXARAKQAQALAZAEQANADAIgBIBJABQBRAAAUAJQArAMAFAoQgNgGgQgCg");
	this.shape.setTransform(17.7,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.4,21.1);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABYCIQgRgCgOgNIgSgSIAAgBIgBAAIgEgUIABgBIAAgCIACgFQAJgYAAgTQABgegNgVQgMgZgWgSQgQgMgXgJQgRgHgMgDQgOgEgMgGQgIgFgRgLQAQgKAMgDQAOgDASAEQAOACAUAJQAbAMAUAPQAeAXARAhIAJAVQAIAYgBAZQAAAZgKAbIAIAIQAGAFALANQAJAKALAIQgOAIgOAAIgEAAg");
	this.shape.setTransform(12,13.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,27.2);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#782200","#924007","#BF7513","#DA971B","#E5A31E"],[0,0.192,0.569,0.847,1],-65,0.1,65,0.1).s().p("AHPNpQhKgzmZjSQmLjJhrgtQBagoBUhIQCqiPgXiZQgYibjWiWQhrhLhngtQFOiCEOhoQINjKA5AOQBQAVALAIQAVARAABBQAAAog4EyQg5EzABBQQgBBbAJBAQAEAmAOBOQAVCUAHBLQANCkgVBJQgJAegJA6QgJA4gGAUQgMApgdAAQgTAAgbgSg");
	this.shape.setTransform(65,89.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,178.3);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AjBA9QAMgNATgIQATgMBTgKQApgEAigCIAWgDQAbgEAWgFQAXgIAYgRQARgMAKgNQAVgVAggSQgCAYgDALQgGARgNAOQgMANgVAPQgdAVgcAJQgqAOgmACQgkACgnAEQhOAJgOAKQgXAKgpAEQAKgTAJgKg");
	this.shape.setTransform(21.3,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,18);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AgLCAQgngHgXgcQgEgGgFgJIgIgPIgBgDIAAgBIAGgVIABAAIAigdQAegVAUgbQAPgRgMgNIgXgRQgbgNgagaQAWgFANABQAQAAATAIIAOAJQAMAHALAMQAQANgDAbQgEAZgMAMQgSAUgVAUIgSAPIgWATIAAABQADAGADAEQAMAQAaAEQARAEAOgDQAdgDAkAFQgOARgKAIQgPAKgVACQgJACgKAAQgNAAgLgDg");
	this.shape.setTransform(9.3,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,18.5,26.2);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AEkBQQh0gHhEgRQgvgKgygUIgngQIgogQQgwgUgqgIQgvgMg1AMQgqAKgTAPQgqAbgzApQALgjANgUQARgYAfgVQAVgTA1gMQA/gOA1ANQAvAKAzAVIAnASIAlAQQAwAQAtAKQBEARBtAGQAiABAcAEQAWAEAjAJQgiAMgXAEQgaAFgfAAIgHAAg");
	this.shape.setTransform(41.3,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.7,16.1);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#573735","#D6562B","#ED7C31","#F4BB3A"],[0.024,0.369,0.702,1],-15.9,-51.9,27.1,44.6).s().p("ADmGaQg+gShCg1QglgdhHhJIh7h8QhIhIg0gvQhVhPg/hVQhiiEAfg5IBXg8QA6ACBoAnQB0AtAxAHQAWAECKAOQBlALA6AQQCJAnAyC1QAmCJgUCwQgJBbhIAvQgtAeg1AAQgdAAgggKg");
	this.shape.setTransform(47.7,42.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.4,84.1);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABaClQgWgKAAgTQgFgRAJgmQAEgVAOgwQAJgWgEgfQgFgZABABQAXgIhRgfQhPgfgbAGQgWgCgRgFQgQgFgVgKQAYgKANgDQATgFAXABQAfgHBXAjQBdAkgNAdQAAAAAGAfQAEAlgKAeQgLAlgHAdQgHAhADAHQgEAGAMACQAMACAXgCQgRAWgNAGQgEAFgHAAQgIAAgKgFg");
	this.shape.setTransform(15,17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,34.1);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#573735","#D6562B","#ED7C31","#F4BB3A"],[0.024,0.369,0.702,1],-13.2,-45.5,26.6,43.8).s().p("AFJF7QgZgFgsgPQgvgSgOgDQhKgUhCgrQg4glg8hAQg7g7iGi7Qh0ilhbhIIDchJIAGAEIAHADQAdAGA2gDQBAgFAUACQAmACAhAMQAUAIAwAXQATAJB9AnQBdAdAlAkQAPAPASAnIAaA9QAVArgDAhQgBAWgNA1QgFAeABADIALAiIALAiQAIAUACANQAWBtgXAqQgaAxg6AAQgPAAgSgEg");
	this.shape.setTransform(45.9,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,76.7);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AAtDDQgSgDgSgPQgIgFgFgNQgJgSAGgTQAEgOAHgRIAPgaQAMgUADgZIAAgUQABgIgCgNQgDgagMgTQgKgUgVgXIgcgbQgOgNgJgOQgHgLgIgUQAWAFAMAFQAPAGAOAMIAdAdQAaAaAPAaQAOAaAEAgQACARgBAKIgBAYQgDAhgOAaIgRAbQgIAPgCAHQgBAGACAEIAGAHQAfAbAOATIgWAAIgNAAg");
	this.shape.setTransform(8,19.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16,39.2);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("ABSBuIgLgDIglgNQgogOgoAAQgsgEgzAEQgpADgXAFQgzAJg4AAQAbgUASgJQAYgMAfgHQAZgFArgDQA3gEAtAEQAqAAAwAQIAkANQgCABALACQAMACAMAAQAmgBAEgbIgOgrQgMgfAJgbQAKgXAWgPQAHgGAVgJQAggJAcADQASABAjAIQgWALgcAIIgyAPQgdANgHASQgFAIAIAYQANAiADARQgFBEhNADQgRgBgPgEg");
	this.shape.setTransform(31.3,11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.7,23.1);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AgpBIQAIgYAOgLQARgLALgMIgBgBIgpgQIgLgEIgBgBIgBAAIAAgBIgNgaIABgBIALgTQAGgIAKgGQAIgEAFgBQAPgEAIAFQAGADANALQgTASgMAEIgDABIAjAQIAIACIAJACIABAAIARAcIAAABIAAAAIgLAOQgUAagcAQQgIAHgLAAQgIAAgPgEg");
	this.shape.setTransform(6.1,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.1,15.4);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEBA61").s().p("AC6BkQgNgRgHgdQgHgegIgSQgQgfgcAIIhFALQghAFgBgBIgHAAQgNAAgPgEIgLgDIgBgBIgKgZIAAgBIABgDIACgOIAEgcIgHAAQgKgBgYAFQgZAGgYAJQgmAPgwAEQASgVANgLQARgNAYgKQAagLAcgHQAagFARAAQAJAAAOACIAMACIABAAIANAbIAAAAIAAABIAAACIgBADQgDAKgDAbIgBAFIAJABIAGAAQAAABAdgFQAtgIAcgDQARgBAIABQAPACAMAJQAUAMAKAZQALAYAGAdQADAMAFAeQADAXAIARQgXgIgOgTg");
	this.shape.setTransform(22.3,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,44.7,25.5);


(lib.bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// singleBubble
	this.instance = new lib.singleBubble();
	this.instance.parent = this;
	this.instance.setTransform(54,120,0.277,0.277);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:37.8,y:76.8,alpha:0.49},0).wait(1).to({x:21.5,y:33.5},0).wait(1).to({x:5.3,y:-9.7},0).wait(1).to({x:30.5,y:-45.8},0).wait(1).to({x:55.7,y:-81.9},0).wait(1).to({x:80.9,y:-118},0).wait(1).to({x:106.1,y:-154.1},0).wait(1).to({x:131.3,y:-190.2},0).wait(1).to({x:156.5,y:-226.3},0).wait(1).to({x:142.3,y:-264.7},0).wait(1).to({x:128.1,y:-303},0).wait(1).to({x:113.9,y:-341.4},0).wait(1).to({x:99.7,y:-379.7},0).wait(1).to({x:85.6,y:-418.1},0).wait(1).to({x:71.4,y:-456.4},0).wait(1).to({x:57.2,y:-494.8},0).wait(1).to({x:60.9,y:-535.7},0).wait(1).to({x:67.2,y:-576.3},0).wait(1).to({x:75.7,y:-616.6},0).wait(1).to({x:85.7,y:-656.5},0).wait(1).to({x:96.9,y:-696},0).wait(1).to({x:108.8,y:-735.4},0).wait(1).to({x:121,y:-774.7},0).wait(1).to({x:133,y:-814},0).wait(1).to({x:152,y:-853.8},0).wait(1).to({x:177.4,y:-890.1},0).wait(1).to({x:203.6,y:-925.8},0).wait(1).to({x:226,y:-964},0).wait(72));

	// singleBubble
	this.instance_1 = new lib.singleBubble();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82,636,0.618,0.618);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:56.4,y:590,alpha:0.49},0).wait(1).to({x:30.9,y:543.9},0).wait(1).to({x:5.3,y:497.9},0).wait(1).to({x:37.6,y:459.6},0).wait(1).to({x:70,y:421.2},0).wait(1).to({x:102.3,y:382.8},0).wait(1).to({x:134.7,y:344.5},0).wait(1).to({x:167,y:306.1},0).wait(1).to({x:199.4,y:267.8},0).wait(1).to({x:180.7,y:230.1},0).wait(1).to({x:162,y:192.4},0).wait(1).to({x:143.3,y:154.7},0).wait(1).to({x:124.6,y:117},0).wait(1).to({x:105.9,y:79.2},0).wait(1).to({x:87.2,y:41.5},0).wait(1).to({x:68.5,y:3.8},0).wait(1).to({x:78.4,y:-32.1},0).wait(1).to({x:88.3,y:-68.1},0).wait(1).to({x:98.3,y:-104.1},0).wait(1).to({x:108.2,y:-140.1},0).wait(1).to({x:118.2,y:-176.1},0).wait(1).to({x:128.1,y:-212},0).wait(1).to({x:138.1,y:-248},0).wait(1).to({x:148,y:-284},0).wait(1).to({x:174.5,y:-325},0).wait(1).to({x:201,y:-366},0).wait(1).to({x:227.5,y:-407},0).wait(1).to({x:254,y:-448},0).wait(72));

	// singleBubble
	this.instance_2 = new lib.singleBubble();
	this.instance_2.parent = this;
	this.instance_2.setTransform(36,598,0.406,0.406);
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:2.4,y:554.9,alpha:0.49},0).wait(1).to({x:-31.1,y:511.7},0).wait(1).to({x:-64.7,y:468.6},0).wait(1).to({x:-38.3,y:427.6},0).wait(1).to({x:-12,y:386.6},0).wait(1).to({x:14.3,y:345.6},0).wait(1).to({x:40.6,y:304.6},0).wait(1).to({x:67,y:263.6},0).wait(1).to({x:93.3,y:222.7},0).wait(1).to({x:104.6,y:186.2},0).wait(1).to({x:115.9,y:149.8},0).wait(1).to({x:127.1,y:113.4},0).wait(1).to({x:138.4,y:77},0).wait(1).to({x:149.7,y:40.6},0).wait(1).to({x:161,y:4.1},0).wait(1).to({x:172.3,y:-32.3},0).wait(1).to({x:173.2,y:-71},0).wait(1).to({x:174.1,y:-109.7},0).wait(1).to({x:175.1,y:-148.3},0).wait(1).to({x:176,y:-187},0).wait(1).to({x:167.8,y:-223.8},0).wait(1).to({x:159.5,y:-260.5},0).wait(1).to({x:151.3,y:-297.3},0).wait(1).to({x:143,y:-334},0).wait(1).to({x:159.3,y:-372},0).wait(1).to({x:175.5,y:-410},0).wait(1).to({x:191.8,y:-448},0).wait(1).to({x:208,y:-486},0).wait(72));

	// singleBubble
	this.instance_3 = new lib.singleBubble();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-64,454,0.406,0.406);
	this.instance_3.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-19.1,y:411.5,alpha:0.49},0).wait(1).to({x:25.9,y:369},0).wait(1).to({x:70.8,y:326.5},0).wait(1).to({x:52.3,y:290.4},0).wait(1).to({x:33.9,y:254.3},0).wait(1).to({x:15.5,y:218.2},0).wait(1).to({x:-3,y:182.1},0).wait(1).to({x:-21.4,y:146},0).wait(1).to({x:-39.8,y:109.9},0).wait(1).to({x:-20.8,y:72.8},0).wait(1).to({x:-1.8,y:35.7},0).wait(1).to({x:17.2,y:-1.3},0).wait(1).to({x:36.3,y:-38.4},0).wait(1).to({x:55.3,y:-75.5},0).wait(1).to({x:74.3,y:-112.6},0).wait(1).to({x:93.3,y:-149.6},0).wait(1).to({x:86.9,y:-189.4},0).wait(1).to({x:80.5,y:-229.2},0).wait(1).to({x:74.1,y:-269},0).wait(1).to({x:67.7,y:-308.8},0).wait(1).to({x:61.3,y:-348.6},0).wait(1).to({x:54.9,y:-388.4},0).wait(1).to({x:48.4,y:-428.2},0).wait(1).to({x:42,y:-468},0).wait(1).to({x:58.5,y:-508.5},0).wait(1).to({x:75,y:-549},0).wait(1).to({x:91.5,y:-589.5},0).wait(1).to({x:108,y:-630},0).wait(72));

	// singleBubble
	this.instance_4 = new lib.singleBubble();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106,136,0.406,0.406);
	this.instance_4.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:145.4,y:97.2,alpha:0.49},0).wait(1).to({x:184.8,y:58.4},0).wait(1).to({x:224.2,y:19.6},0).wait(1).to({x:201.2,y:-19.9},0).wait(1).to({x:178.3,y:-59.4},0).wait(1).to({x:155.4,y:-98.9},0).wait(1).to({x:132.4,y:-138.4},0).wait(1).to({x:109.5,y:-177.9},0).wait(1).to({x:86.5,y:-217.3},0).wait(1).to({x:117.5,y:-254.1},0).wait(1).to({x:148.4,y:-290.8},0).wait(1).to({x:179.4,y:-327.6},0).wait(1).to({x:210.3,y:-364.3},0).wait(1).to({x:241.2,y:-401.1},0).wait(1).to({x:272.2,y:-437.8},0).wait(1).to({x:303.1,y:-474.5},0).wait(1).to({x:291.6,y:-510.4},0).wait(1).to({x:280.1,y:-546.2},0).wait(1).to({x:268.6,y:-582},0).wait(1).to({x:257.1,y:-617.8},0).wait(1).to({x:245.6,y:-653.6},0).wait(1).to({x:234.1,y:-689.4},0).wait(1).to({x:222.5,y:-725.2},0).wait(1).to({x:211,y:-761},0).wait(1).to({x:227.8,y:-807.8},0).wait(1).to({x:244.5,y:-854.5},0).wait(1).to({x:261.3,y:-901.3},0).wait(1).to({x:278,y:-948},0).wait(72));

	// singleBubble
	this.instance_5 = new lib.singleBubble();
	this.instance_5.parent = this;
	this.instance_5.setTransform(48,48,0.406,0.406);
	this.instance_5.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:77.4,y:10,alpha:0.49},0).wait(1).to({x:106.8,y:-28.1},0).wait(1).to({x:136.2,y:-66.1},0).wait(1).to({x:117.4,y:-103.4},0).wait(1).to({x:98.6,y:-140.6},0).wait(1).to({x:79.8,y:-177.8},0).wait(1).to({x:61,y:-215},0).wait(1).to({x:42.2,y:-252.3},0).wait(1).to({x:23.4,y:-289.5},0).wait(1).to({x:48.8,y:-328.2},0).wait(1).to({x:74.3,y:-366.9},0).wait(1).to({x:99.7,y:-405.5},0).wait(1).to({x:125.2,y:-444.2},0).wait(1).to({x:150.7,y:-482.9},0).wait(1).to({x:176.1,y:-521.6},0).wait(1).to({x:201.6,y:-560.3},0).wait(1).to({x:205.9,y:-600.7},0).wait(1).to({x:210.2,y:-641.2},0).wait(1).to({x:214.5,y:-681.7},0).wait(1).to({x:218.8,y:-722.2},0).wait(1).to({x:223.1,y:-762.6},0).wait(1).to({x:227.4,y:-803.1},0).wait(1).to({x:231.7,y:-843.5},0).wait(1).to({x:236,y:-884},0).wait(1).to({x:232,y:-922},0).wait(1).to({x:228,y:-960},0).wait(1).to({x:224,y:-998},0).wait(1).to({x:220,y:-1036},0).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.4,28.6,208.9,637.1);


(lib.brookTrouttopFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE3A0").s().p("AiEAxIB+g/IA3gbQA7gbAPgEQAOgFANgBQAJgBARABQgXARgYAIQgPADg5AbQg4AYAAABQhmA3gWAKQgXAKgdADQAXgVAUgKg");
	this.shape.setTransform(85.3,40.8,0.504,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDE3A0").s().p("Ah2BDQAUgKBgg8IBxhMQAUgOAdgFQgUAXgTAMIhyBKQhfA/gVAKQgTALgfAEQARgSAYgOg");
	this.shape_1.setTransform(75.8,40.1,0.504,0.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDE3A0").s().p("AilBeQAfgICGhWIBEguQBKgxATgIQAegQAmgGQggAYgbAPQgSAIhJAwQhHAsABABQiFBYgiAJQgTAIgRADQgNADgWAAQAlgUAbgMg");
	this.shape_2.setTransform(73.9,36.1,0.504,0.504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDE3A0").s().p("AiFBPQAVgPBlhQQgBAAA3goQA7gqARgGQAOgIAPgDIAcgDQgWASgaANQgQAGg6AoQg2AnAAACQhkBQgWAPQgWAPgfAJQAUgYAWgQg");
	this.shape_3.setTransform(64.9,35.4,0.504,0.504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDE3A0").s().p("AirBVQATgRBEgvQBGgvACAEQAAgBBJglIBigtQAcgPAngJQgeAagdAPQirBRABACQgCgDhEAtQhCAugUASQgRAMgQAGQgNAGgUAEQAdgaAZgSg");
	this.shape_4.setTransform(64,30.6,0.504,0.504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDE3A0").s().p("AjfB1QAVgWBahEQBYhCABADQgCgEBeg3QBjg6AbgIQAZgLAWgFQARgEAbgEQguAagkAQQgcAIhhA5QhdA3ACACQgCgBhXBBQhZBDgUAVQggAcgrAbQAdgoAhgdg");
	this.shape_5.setTransform(59,29.4,0.504,0.504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDE3A0").s().p("AkPCIQAIgMAbgYQAegfC2hlQAAgBBfgyQBjg0AagMQAngSAwgNQgoAegmASQgbANhiAzQhfAyABABQi1BlgdAdIgkAeQgSAPgDAUQgFgYAPgUg");
	this.shape_6.setTransform(55.8,26,0.504,0.504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDE3A0").s().p("AlGC1QAQgSAegXQAcgWB3hLQBzhHABACQAAgBB1hDQB2hCAkgTQAtgYA8gWQgsAjg0AdQgkASh1BCQh1BDAAABQgBgChzBHQh3BKgbAWIgwAkQgXARgTARQAPgaASgTg");
	this.shape_7.setTransform(49.2,23,0.504,0.504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDE3A0").s().p("AleDLQAVgVAdgXQAqgpD8iCQACADB/hGQCIhKAbgYIBohHQgYAcgRAQQgWAVgdAVQgcAaiJBJQiEBGAAgDQj5CCgpApIhkBKQAXgdAQgRg");
	this.shape_8.setTransform(38,23.2,0.504,0.504);

	this.instance = new lib.Path_12();
	this.instance.parent = this;
	this.instance.setTransform(54,25.8,0.504,0.504,0,0,0,107.2,51.1);
	this.instance.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,51.2);


(lib.brookTrouttailFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE3A0").s().p("AmFCtQAcgCAagIQAOgEAqgRQAbgNCHg6IB9g2QAAADB7g7QCAhAAcgUQBAglAmgSIgqAlQgWATgcAQQgcAViBA/Qh7A8gBgDQAAABh+A1QiHA6gbANQgjAOgZADIgSACQgTAAgUgGg");
	this.shape.setTransform(34.7,13.9,0.504,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDE3A0").s().p("Aj/BjQArgQDRhbIBtgwQBzgzAbgJQAqgRA4gMQguAdgsASQgbAJh0AzIhuAuQjPBdgsAPQgsASg1AMQAxgfApgQg");
	this.shape_1.setTransform(38.6,19.3,0.504,0.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDE3A0").s().p("AkIBKQAdgOB1gmQByglACADIByghQB7giAZgJQA5gRAqgHIgrAXQgWALgcAJQgbAJh6AiIh1AfQAAgDhwAnQhzAmgfANQgbAKgZAFQgPADgiADQApgUA2gTg");
	this.shape_2.setTransform(42,24.3,0.504,0.504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDE3A0").s().p("Ak7BkQATgDAXgGIAsgNQAegMBkggQBkgiABACQAAACBlgeQBqghAWgOQBAgZAVgGIgiAbQgTANgYAJQgXAOhqAiQhnAeAAgCQgBgChjAhQhkAhgeAMQgcAHgVABIgGAAQgRAAgUgFg");
	this.shape_3.setTransform(42.8,29.6,0.504,0.504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDE3A0").s().p("AiyAVQAZgLAXgBQAWAABsgNICBgWQAPgCALAAQAKABAPADQgZANgWAEIiDAUQhtAQgWAAIgDAAQgVAAgZgIg");
	this.shape_4.setTransform(35.2,39,0.504,0.504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDE3A0").s().p("AjjAPQgpAAgsgJQAsgIAogBQAmABC+gGIDkgGQAnAAAuAJQgsAIgpABIjkAGQiiAFgzAAIgOAAg");
	this.shape_5.setTransform(43.6,44.1,0.504,0.504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDE3A0").s().p("ACsAQQgTAAhOgEIhLgEQiPgGgcABQggAAgggHQAjgKAdgBQAdgBCOAHIBMAEIBhAEQAeAAAhAIQghAJgcAAIgDAAg");
	this.shape_6.setTransform(38.4,49.5,0.504,0.504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDE3A0").s().p("ADSAhIjTgYQiwgQgkAEQgagCgRgGQgSgHgPgPQASAGASACIApACQAigECyASIDUAWQAmAFAoANQgZADgXAAQgRAAgPgBg");
	this.shape_7.setTransform(37.8,55.3,0.504,0.504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EDE3A0").s().p("AEcAqIkcgkQjsgagwgDQgygFg2gNQA+gFAsADQAwADDrAdIEdAhQAyAGA1AQIgpABQgiAAgegDg");
	this.shape_8.setTransform(40.1,61,0.504,0.504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDE3A0").s().p("AEqCBIinhMIiCg5Qj3hsg1gMQg7gRg2gYQAnAFASADQAdAFAhAJQA2AND4BsICCA5ICnBMQAyAWA5AhQhAgPgzgWg");
	this.shape_9.setTransform(36.6,70.7,0.504,0.504);

	this.instance = new lib.Path_8();
	this.instance.parent = this;
	this.instance.setTransform(38.4,50.4,0.504,0.504,0,0,0,76.2,100.1);
	this.instance.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.5,89.8);


(lib.brookTroutrearFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE3A0").s().p("ABMAYIhOgHQhEgKgNgHQgIgCgFgHIgJgNQANgBARAFQAKAHBBAKIBNAFQAPABAOALQgPAIgNAAIgCAAg");
	this.shape.setTransform(56,11.7,0.504,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDE3A0").s().p("ACCA2QgRABg/gKQg8gJAAgCQh1gegTgQQgOgHgJgLQgHgJgGgOIAtAYQASARBxAbQAAACA7AJQA+AJAQAAQAVABAfAJQgYAJgZAAIgEAAg");
	this.shape_1.setTransform(56.9,16.6,0.504,0.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDE3A0").s().p("AA8A1QhKgFAAgCQAAAEhMgSQhPgTgPgPQgegSgIglQAUAVAcASQAUAUCOAZQAAABBJAGQBOAFAUgBQAdAAAjAKQgjAJgeAAIgIABQgZAAhBgFg");
	this.shape_2.setTransform(52.8,19.4,0.504,0.504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDE3A0").s().p("ADYBrQgbgBhqghIhjggQgwgOg1gSQhqgggVgSQgZgPgOgPQgOgQgIgWQAOAPASAMIAmAYQAfAaDCA2QADACBgAfQBpAgAZABIBXAPQgZAGgRABIgJAAQgSAAgVgDg");
	this.shape_3.setTransform(48.3,24.8,0.504,0.504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDE3A0").s().p("AEKCDQgiABiBgrQh7grADgDIh8goQiDgngagTQgfgSgRgRQgTgSgKgbQARAUAVAOQAKAHAmAVQAYASCCApIB9AmQgBAFB4ApQB/ArAhgBQA1AIA2AKQghAFgTAAIgGABQgYAAgcgFg");
	this.shape_4.setTransform(42.7,30.1,0.504,0.504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDE3A0").s().p("AFsC6QgfgIghgNQgkgJiNhIQiIhGAEAAQkEh5g4gMQgugRgQgMQgcgTgHggQAOAZAcAOQARAIAsAPQA7ALEDB9ICEBEQCNBGAjAKQBLAeApAXIg7gOg");
	this.shape_5.setTransform(36.7,34.7,0.504,0.504);

	this.instance = new lib.Path_10();
	this.instance.parent = this;
	this.instance.setTransform(42.2,31.2,0.504,0.504,0,0,0,83.7,61.9);
	this.instance.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.8,50.6);


(lib.brookTroutmidFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE3A0").s().p("ABbAzQgNAAgsgOQgrgOABgBQhQghgOgLQgOgIgNgVQAVADAQAKQAOAKBNAgQAAABAoANQAsAOALAAQASAEARALQgQAFgMAAIgKgBg");
	this.shape.setTransform(24.2,6.3,0.504,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDE3A0").s().p("ACIBMQgTAChCgZQg+gYACgDIg9gcIhLgoQgXgMgYgVQARACALADQANADAPAIIBLAnQA8AdAAgBQgCADA9AXQBAAZAQgDIA3AHQgOAIgMADQgJACgKAAIgMAAg");
	this.shape_1.setTransform(26.4,9.2,0.504,0.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDE3A0").s().p("AC6BsQgZAChdgfQhYgdACgEQgBAChSgtQhUgsgUgQQgfgUgdggQApARAeATQAUAPBSAtQBRArABgCQgBAEBVAdQBbAdAYgBQAlAFAoAJQgXAFgPABIgQABQgMAAgOgCg");
	this.shape_2.setTransform(25.8,10.9,0.504,0.504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDE3A0").s().p("AEdC2QgZgIgbgMQj+h7AAgCQgEAGhnhFQhbhBgmgeQgegTgPgOQgSgSgMgXQARAPAWAOIAvAdQAuAkBUA7QBlBEADgGIBuA2QB6A7AVALQA1AaAnAaQgggIgQgGgAgMAUIAAAAIAAAAg");
	this.shape_3.setTransform(26.1,15.6,0.504,0.504);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDE3A0").s().p("AEJEGQgZgHgggTQgfgNhqhgIhghcQgCABhchhQhnhugSgPQgfgfgvgzQAcAPASANQAWAQAZAXQARARBnBtQBcBhACgCIBgBcQBoBgAeAMIAzAdQAXAMAbAJQgfAAgYgIg");
	this.shape_4.setTransform(23.1,20.7,0.504,0.504);

	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(28.3,24.8,0.504,0.504,0,0,0,56.2,49.2);
	this.instance.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.2,38.6);


(lib.BrookTroutfrontFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDE3A0").s().p("ADWBhQgSgBgVgFQgTgEhYgdIhRgaQihgsgbgZQgVgNgLgNQgLgOgFgTQAMAMAOAKIAgAUQAYAXCfAsIBRAbQBZAdASADQAeAIAnAPQgOACgMAAIgJAAg");
	this.shape.setTransform(32.5,14.5,0.504,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDE3A0").s().p("ADiCbQgdgIhxg3Qhsg0ABgCQgzgYg5gcQhyg6gUgXQgZgUgOgTQgNgTgIgaQAPAUARAQIAoAiQATAUBwA6IBsA0QAAACBqAzQBwA2AdAJQAvARAuAZQg4gIgsgQg");
	this.shape_1.setTransform(30,18.7,0.504,0.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDE3A0").s().p("AEiD+QgbgIgfgSQgggNh2hbIhthYQgBAChshaQh3hlgVgPQgggbgOgSQgRgXgGgdQANAYAVATIAvAnQAWAQB2BkQBsBZABgCIBtBYQB1BbAeAMQA5AgAwAXQgigFgWgHg");
	this.shape_2.setTransform(28,26.1,0.504,0.504);

	this.instance = new lib.Path_5();
	this.instance.parent = this;
	this.instance.setTransform(29.7,26.7,0.504,0.504,0,0,0,59,53);
	this.instance.alpha = 0.84;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.1,42.4);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(44.3,77.7,1,1,0,0,0,22.3,12.2);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.9,75.3,1,1,0,0,0,6,7.7);

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(73.3,50.2,1,1,0,0,0,31.3,11.6);

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(279.3,30.3,1,1,0,0,0,8,19.6);

	this.instance_4 = new lib.Path_4_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(263.7,33.7,1,1,0,0,0,15,17);

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(366,54.8,1,1,0,0,0,41.3,8.1);

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(476.1,53.8,1,1,0,0,0,9.3,13.1);

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(604,76,1,1,0,0,0,21.3,9);

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(650.7,63.5,1,1,0,0,0,12,13.6);

	this.instance_9 = new lib.Path_9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(627.7,65.9,1,1,0,0,0,17.7,10.6);

	this.instance_10 = new lib.Path_10_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(600.5,67.3,1,1,0,0,0,16.1,15.2);

	this.instance_11 = new lib.Path_11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(579.7,54.9,1,1,0,0,0,23.7,10.5);

	this.instance_12 = new lib.Path_12_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(550.7,35.5,1,1,0,0,0,4.7,2.5);

	this.instance_13 = new lib.Path_13();
	this.instance_13.parent = this;
	this.instance_13.setTransform(556.8,40,1,1,0,0,0,13.2,10.7);

	this.instance_14 = new lib.Path_14();
	this.instance_14.parent = this;
	this.instance_14.setTransform(525.9,58.7,1,1,0,0,0,14.5,13.8);

	this.instance_15 = new lib.Path_15();
	this.instance_15.parent = this;
	this.instance_15.setTransform(450.8,41.4,1,1,0,0,0,42.8,12.3);

	this.instance_16 = new lib.Path_16();
	this.instance_16.parent = this;
	this.instance_16.setTransform(455.3,46.3,1,1,0,0,0,17.3,10.4);

	this.instance_17 = new lib.Path_17();
	this.instance_17.parent = this;
	this.instance_17.setTransform(387.3,44.2,1,1,0,0,0,34.6,11.8);

	this.instance_18 = new lib.Path_18();
	this.instance_18.parent = this;
	this.instance_18.setTransform(235.1,40.8,1,1,0,0,0,7.9,7.5);

	this.instance_19 = new lib.Path_19();
	this.instance_19.parent = this;
	this.instance_19.setTransform(212.7,52.3,1,1,0,0,0,13.9,10.3);

	this.instance_20 = new lib.Path_20();
	this.instance_20.parent = this;
	this.instance_20.setTransform(262,28,1,1,0,0,0,74.7,12.1);

	this.instance_21 = new lib.Path_21();
	this.instance_21.parent = this;
	this.instance_21.setTransform(346.1,25.7,1,1,0,0,0,34.8,12.9);

	this.instance_22 = new lib.Path_22();
	this.instance_22.parent = this;
	this.instance_22.setTransform(314.6,13.8,1,1,0,0,0,1.9,0.8);

	this.instance_23 = new lib.Path_23();
	this.instance_23.parent = this;
	this.instance_23.setTransform(289.7,20.9,1,1,0,0,0,15.7,12.5);

	this.instance_24 = new lib.Path_24();
	this.instance_24.parent = this;
	this.instance_24.setTransform(254.7,19.7,1,1,0,0,0,25.4,13.6);

	this.instance_25 = new lib.Path_25();
	this.instance_25.parent = this;
	this.instance_25.setTransform(200.7,14.7,1,1,0,0,0,16.6,14.7);

	this.instance_26 = new lib.Path_26();
	this.instance_26.parent = this;
	this.instance_26.setTransform(181.1,17.4,1,1,0,0,0,24.3,10.6);

	this.instance_27 = new lib.Path_27();
	this.instance_27.parent = this;
	this.instance_27.setTransform(157.5,27.2,1,1,0,0,0,21.1,12.8);

	this.instance_28 = new lib.Path_28();
	this.instance_28.parent = this;
	this.instance_28.setTransform(125,32.4,1,1,0,0,0,11,15.5);

	this.instance_29 = new lib.Path_29();
	this.instance_29.parent = this;
	this.instance_29.setTransform(80.3,36.1,1,1,0,0,0,30.3,9);

	this.instance_30 = new lib.Path_30();
	this.instance_30.parent = this;
	this.instance_30.setTransform(48.3,40.1,1,1,0,0,0,24.9,7.2);

	this.instance_31 = new lib.Path_31();
	this.instance_31.parent = this;
	this.instance_31.setTransform(20.3,52.5,1,1,0,0,0,20.3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,662.7,90.4);


(lib.BrookTroutmove_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// midFin
	this.instance = new lib.brookTroutmidFin();
	this.instance.parent = this;
	this.instance.setTransform(186.1,119.9,1,1,0,0,0,5.5,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:23.1,regY:19.3,rotation:3.2,x:202.7,y:137.9},0).wait(1).to({rotation:6.4,x:201.6,y:138.9},0).wait(1).to({rotation:9.6,x:200.6,y:139.7},0).wait(1).to({rotation:12.8,x:199.5,y:140.4},0).wait(1).to({rotation:15.9,x:198.3,y:141.2},0).wait(1).to({rotation:8.7,x:200.9,y:139.5},0).wait(1).to({rotation:1.4,x:203.3,y:137.4},0).wait(1).to({rotation:-5.9,x:205.4,y:135.1},0).wait(1).to({rotation:-13.2,x:207.1,y:132.5},0).wait(1).to({rotation:-9.9,x:206.3,y:133.7},0).wait(1).to({rotation:-6.6,x:205.5,y:134.8},0).wait(1).to({rotation:-3.3,x:204.6,y:135.9},0).wait(1).to({rotation:0,x:203.7,y:137},0).wait(1));

	// frontFin
	this.instance_1 = new lib.BrookTroutfrontFin();
	this.instance_1.parent = this;
	this.instance_1.setTransform(72.6,102,1,1,0,0,0,2.5,2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:24,regY:21.2,rotation:5.6,x:92.1,y:122.9},0).wait(1).to({rotation:11.1,x:90,y:124.7},0).wait(1).to({rotation:16.7,x:87.7,y:126.2},0).wait(1).to({rotation:9,x:90.8,y:124},0).wait(1).to({rotation:1.4,x:93.6,y:121.4},0).wait(1).to({rotation:-6.3,x:96,y:118.3},0).wait(1).to({rotation:-14,x:98,y:115.1},0).wait(1).to({rotation:-11.6,x:97.4,y:116.1},0).wait(1).to({rotation:-9.3,x:96.9,y:117.1},0).wait(1).to({rotation:-7,x:96.1,y:118.1},0).wait(1).to({rotation:-4.7,x:95.5,y:119.1},0).wait(1).to({rotation:-2.3,x:94.8,y:120},0).wait(1).to({rotation:0,x:94.1,y:120.9},0).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374629").s().p("AmgGxQg1gEg3gYQA1AFA3gFIB2gQQA/ABENhgQCHgwB6guIAUgIQAbgLAbgNIBIgqQApgfAEgrQAMhbgXhsQgUhggbgcQgfgsgugrIhQhLIBiA1QAzAhAoA2QAhAnAVBjQAYBwgNBnQgDAbgSAdQgRAbgWAOQgdAVgxAZQgvAXgfALQh7AtiHAxQkOBhhFAAQgzAGgoAAIghgBg");
	this.shape.setTransform(57.3,85.7,0.504,0.504);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#374629").s().p("AhPECQgSgCgbgJQAwgWAigLQAWgJAUgPQAhgYAQgeQARgbAKgkIAHgdQACgMAAgTQACgjgFghQgFgigQgoQgLgdgLgTQgMgUgJgUIgRgoQAZALAPAMQASAOAOAYQANAVAMAgQARAsAFAmQAGAlgCAnQgBAVgCAOIgHAhQgLApgUAhQgUAkgoAdQgbAUgYAJQgXAHgVAAIgHAAg");
	this.shape_1.setTransform(53.9,89.6,0.504,0.504);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#374629").s().p("AAECaQAhgnAEgrQADgYgDgbIgFgVQAIgBgkhEQgihFgSgMQgNgOgIgOQgGgKgKgUQAWADANAHQAPAHAPAPQAMAMAOAWQAVAdANAZQAWAoAIAoIAFAZQAEAggEAdQgCAfgSAiQgNAYgNAOQgQAQgRAGQgMAFgWABQAWgkAQgTg");
	this.shape_2.setTransform(65.5,86.8,0.504,0.504);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#374629").s().p("ADKDcQgJgOgOghQgFgVgWgbQgaggglgTQgegSgogSIgfgPQgzgXg1ghQglgWghgqQgagggJgXQgMgbgEgYQgDgSACgfQAfAoAVArQAJAVAVAbQAdAjAhAUQAdAUAnAUIAdAQIAgAMQApATAhATQAoASAiArQAdAlADAUQAIAVAFAdQAFAdAHAQQgXgMgPgVg");
	this.shape_3.setTransform(32.2,90,0.504,0.504);

	this.instance_2 = new lib.Group();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214.5,67.5,0.504,0.504,0,0,0,343.4,56);
	this.instance_2.alpha = 0.328;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#736634").s().p("AgFA2IgBAAQgZgCgMgSQgLgRADgUQACgWAPgOQAQgQAUACQAaACAOASQAMARgBAUQgCAWgPAOQgOAOgWAAIgFAAg");
	this.shape_4.setTransform(268.8,78.3,0.504,0.504);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#736634").s().p("AgIBRIgBAAQgmgDgSgbQgRgZAEgfQAEghAWgVQAXgYAgADQAnADAVAbQATAZgDAfQgCAhgWAWQgWAVghAAIgIgBg");
	this.shape_5.setTransform(268.8,78.3,0.504,0.504);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#736634").s().p("AgFA2IAAAAQgZgCgNgSQgLgQADgVQACgWAPgOQAQgQAUACQAaACAOASQAMARgBAUQgCAWgPAOQgOAOgWAAIgFAAg");
	this.shape_6.setTransform(153.4,76.2,0.504,0.504);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#736634").s().p("AgIBRIgBAAQgmgDgSgbQgRgZAEgfQAEghAWgVQAYgYAgADQAmADAVAbQATAZgCAfQgDAhgWAWQgXAVggAAIgIgBg");
	this.shape_7.setTransform(153.4,76.2,0.504,0.504);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#736634").s().p("AgwAFIAAgBQgEghAygGQAvgGAEAhQAEAkgyAHIgOACQgiAAgDggg");
	this.shape_8.setTransform(304.1,91.5,0.504,0.504);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#736634").s().p("AgtAwQgZgMgDgbIAAgBQgCgYAWgSQATgQAegDQAcgEAXALQAYALADAYQACAYgVATQgUARgeAFIgPABQgTAAgQgHg");
	this.shape_9.setTransform(304.1,91.5,0.504,0.504);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#736634").s().p("AgFAkIgBAAQg0gDAHgjQAGgkAvADQA3ADgEAiQgEAigwAAIgGAAg");
	this.shape_10.setTransform(345.2,74.8,0.504,0.504);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#736634").s().p("AgIA2IgBAAQgmgCgSgSQgRgQAEgUQAEgXAWgOQAXgQAgACQAnACAVASQATARgDAUQgCAXgWAOQgWAOggAAIgJgBg");
	this.shape_11.setTransform(345.2,74.7,0.504,0.504);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#736634").s().p("AgRAiQgbgXAOgcQAPgfAcAGIAWASQADAjgOAVQgIAMgMAAQgIAAgNgKg");
	this.shape_12.setTransform(199,78.6,0.504,0.504);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#736634").s().p("AggA9QgxgpAag1QAag3A1AKIAoAhQAFBBgZAnQgPAWgUAAQgRAAgYgUg");
	this.shape_13.setTransform(199,78.6,0.504,0.504);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#736634").s().p("AgRAhQgbgWAPgdQAOgeAcAFIAWATQADAjgOAVQgIAMgLAAQgJAAgNgLg");
	this.shape_14.setTransform(249.9,94.5,0.504,0.504);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#736634").s().p("AggA9QgxgpAag2QAag2A1AJIAoAiQAGBBgaAmQgPAXgVAAQgRAAgXgUg");
	this.shape_15.setTransform(249.9,94.5,0.504,0.504);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#736634").s().p("AgRAaQgbgSAOgWQAPgYAcAFIAWAOQADAbgOARQgIAKgLAAQgJAAgNgJg");
	this.shape_16.setTransform(207.9,86.6,0.504,0.504);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#736634").s().p("AggAwQgxggAagqQAagrA1AHIAoAbQAFAzgZAeQgPASgVAAQgRAAgXgQg");
	this.shape_17.setTransform(207.9,86.6,0.504,0.504);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#736634").s().p("AgRAaQgbgSAPgWQAOgXAcAEIAWAPQADAbgOAQQgIAKgMAAQgIAAgNgJg");
	this.shape_18.setTransform(256.5,86.9,0.504,0.504);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#736634").s().p("AggAwQgxggAagqQAagrA1AIIAoAaQAFAzgZAeQgPASgVAAQgRAAgXgQg");
	this.shape_19.setTransform(256.5,86.9,0.504,0.504);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#736634").s().p("AgRAaQgbgSAPgWQAOgYAcAFIAWAOQADAbgOARQgIAKgLAAQgJAAgNgJg");
	this.shape_20.setTransform(229.3,79.1,0.504,0.504);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#736634").s().p("AggAwQgxggAagqQAagrA1AHIAoAbQAFAzgZAeQgPASgVAAQgRAAgXgQg");
	this.shape_21.setTransform(229.3,79.1,0.504,0.504);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#736634").s().p("AgPAHQgGgHAAgIQAAgaAUALQARAKAEAPQAHAZgPABIgBAAQgNAAgNgVg");
	this.shape_22.setTransform(216.4,101.1,0.504,0.504);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#736634").s().p("AgjAQQgMgRgBgUQgCg5AtAYQApAXAJAjQAPA5giABIgCAAQgeAAgdgug");
	this.shape_23.setTransform(216.4,101.1,0.504,0.504);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#736634").s().p("AgFAQQgJgCgHgGQgTgQAWgGQATgHAPAJQAWAMgKAKQgHAIgNAAQgHAAgGgCg");
	this.shape_24.setTransform(194,90.1,0.504,0.504);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#736634").s().p("AgNAlQgVgFgPgNQgqglAwgPQAtgPAhAUQAzAcgXAYQgPAQgfAAQgOAAgQgDg");
	this.shape_25.setTransform(194,90.1,0.504,0.504);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#736634").s().p("AgFAVQgJgDgHgHQgTgVAWgJQATgJAPAMQAWAQgKAOQgHAKgOAAQgGAAgGgDg");
	this.shape_26.setTransform(173.6,94.2,0.504,0.504);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#736634").s().p("AgNAvQgWgHgOgQQgqgwAwgUQATgIAYACQAWACANAKQAzAmgXAeQgPAWgfAAQgOAAgQgFg");
	this.shape_27.setTransform(173.6,94.2,0.504,0.504);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#736634").s().p("AgXAHQAHgTAQgHQAWgLADAPQADAPgTAPQgHAGgHADIgIABQgQAAAGgSg");
	this.shape_28.setTransform(237.9,83.4,0.504,0.504);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#736634").s().p("Ag0AQQAPgsAjgQQAzgXAHAhQAHAggpAkQgSAPgQAEQgLACgIAAQgiAAANgng");
	this.shape_29.setTransform(237.8,83.3,0.504,0.504);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#736634").s().p("AgCAQQgGgCgFgGQgLgPANgHQALgHAKAJQAOAMgHAKQgEAIgJAAIgGgCg");
	this.shape_30.setTransform(325.6,77.8,0.504,0.504);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#736634").s().p("AgHAlQgOgFgJgNQgaglAegPQAbgPAVATQAfAdgOAYQgKARgTAAQgJAAgIgEg");
	this.shape_31.setTransform(325.6,77.8,0.504,0.504);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#736634").s().p("AgFAQQgKgCgGgGQgTgQAWgGQATgHAPAJQAWAMgKAKQgHAIgNAAQgHAAgGgCg");
	this.shape_32.setTransform(365.7,85.4,0.504,0.504);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#736634").s().p("AgNAlQgWgFgOgNQgqglAwgPQAsgPAiAUQAyAcgXAYQgPAQgeAAQgOAAgQgDg");
	this.shape_33.setTransform(365.6,85.4,0.504,0.504);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#736634").s().p("AgFAQQgLgCgFgGQgTgPAVgHQATgHAPAJQAXAMgKAKQgHAIgOAAIgMgCg");
	this.shape_34.setTransform(331.9,88.1,0.504,0.504);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#736634").s().p("AgNAlQgWgEgOgOQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_35.setTransform(331.9,88.1,0.504,0.504);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#736634").s().p("AgFAQQgLgCgGgGQgSgPAVgHQATgHAPAJQAXAMgKAKQgHAIgOAAIgMgCg");
	this.shape_36.setTransform(297.3,81.8,0.504,0.504);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#736634").s().p("AgNAlQgXgFgNgNQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_37.setTransform(297.3,81.8,0.504,0.504);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#736634").s().p("AgFAQQgLgCgFgGQgTgPAVgHQATgHAPAJQAXAMgKAKQgHAIgOAAIgMgCg");
	this.shape_38.setTransform(139.7,85.9,0.504,0.504);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#736634").s().p("AgNAlQgXgFgNgNQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_39.setTransform(139.7,85.9,0.504,0.504);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#736634").s().p("AgFAQQgKgCgGgGQgTgPAWgHQATgHAPAJQAWAMgKAKQgHAIgOAAIgMgCg");
	this.shape_40.setTransform(143.2,100.4,0.504,0.504);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#736634").s().p("AgNAlQgXgFgNgNQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_41.setTransform(143.2,100.4,0.504,0.504);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#736634").s().p("AgWAWIgDgGQgSgmAYgPQAXgPAWAnQASAegWASQgIAHgJAAQgMAAgPgUg");
	this.shape_42.setTransform(182.5,103.3,0.504,0.504);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#736634").s().p("AACBEQgUgFgUgZIgGgKQgPgeAFgbQAEgYARgKQASgLATAJQAXALARAeQAPAYgDAZQgDAWgPANQgLAKgOAAIgLgCg");
	this.shape_43.setTransform(182.4,103.3,0.504,0.504);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#736634").s().p("AgWAWIgEgGQgSgmAZgPQAXgPAWAnQASAegWASQgIAHgIAAQgNAAgPgUg");
	this.shape_44.setTransform(109.4,88.7,0.504,0.504);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#736634").s().p("AACBEQgVgEgUgbIgFgJQgPgeAFgbQAEgXARgLQASgLASAJQAXALASAeQAOAYgCAZQgDAXgPAMQgLAKgOAAIgLgCg");
	this.shape_45.setTransform(109.4,88.7,0.504,0.504);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#736634").s().p("AgFA2IgBAAQgZgCgMgTQgLgQADgUQACgWAPgOQAQgQAUACQAaACAOASQAMARgBAUQgCAWgPAOQgOAOgWAAIgFAAg");
	this.shape_46.setTransform(238.4,60.7,0.504,0.504);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#736634").s().p("AgIBRIgBAAQgmgDgSgbQgRgZAEgfQAEghAWgVQAXgYAgADQAnADAVAbQATAZgDAfQgCAhgWAWQgWAVghAAIgIgBg");
	this.shape_47.setTransform(238.4,60.7,0.504,0.504);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#736634").s().p("AgFA2IgBAAQgZgCgMgSQgMgQADgVQADgWAOgOQAQgQAVACQAZACAOASQANARgBAUQgCAWgPAOQgOAOgWAAIgFAAg");
	this.shape_48.setTransform(124.4,63.2,0.504,0.504);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#736634").s().p("AgHBRIgCAAQgmgDgSgbQgRgYAEggQAEghAWgVQAYgYAgADQAmADAVAbQATAZgCAfQgDAhgWAWQgWAVghAAIgHgBg");
	this.shape_49.setTransform(124.4,63.2,0.504,0.504);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#736634").s().p("AgwAFIAAAAQgEgiAygGQAwgGADAiQAEAjgyAIIgNABQgjAAgDggg");
	this.shape_50.setTransform(276.3,73.8,0.504,0.504);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#736634").s().p("AgtAwQgZgMgDgbIAAgBQgCgYAVgSQAUgQAegDQAcgEAXALQAYALADAXQACAZgVATQgUARgeAFIgPABQgUAAgPgHg");
	this.shape_51.setTransform(276.3,73.9,0.504,0.504);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#736634").s().p("AgFAkIgBAAQg0gDAHgjQAGgkAvADQA3ADgEAiQgEAigwAAIgGAAg");
	this.shape_52.setTransform(312.8,69,0.504,0.504);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#736634").s().p("AgIA2IgBAAQgmgCgSgSQgRgRAEgUQAEgWAWgOQAXgQAgACQAnACAVASQATARgDAUQgCAWgWAOQgWAOghAAIgIAAg");
	this.shape_53.setTransform(312.8,69,0.504,0.504);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#736634").s().p("AgRAiQgbgXAOgcQAPgfAcAGIAWASQADAjgOAVQgIAMgMAAQgIAAgNgKg");
	this.shape_54.setTransform(168.7,61,0.504,0.504);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#736634").s().p("AggA9QgxgpAag1QAag3A1AKIAoAhQAFBBgZAnQgPAWgUAAQgRAAgYgUg");
	this.shape_55.setTransform(168.7,61,0.504,0.504);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#736634").s().p("AgRAiQgbgXAPgcQAOgfAcAGIAWASQADAjgOAVQgJAMgLAAQgIAAgNgKg");
	this.shape_56.setTransform(222.9,73.1,0.504,0.504);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#736634").s().p("AggA9QgxgpAag1QAag3A1AKIAoAhQAFBBgZAnQgPAWgUAAQgRAAgYgUg");
	this.shape_57.setTransform(222.9,73.1,0.504,0.504);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#736634").s().p("AgRAaQgbgSAOgWQAPgYAcAFIAWAOQADAbgOARQgIAKgLAAQgJAAgNgJg");
	this.shape_58.setTransform(177.6,69,0.504,0.504);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#736634").s().p("AggAwQgxggAagqQAagrA1AHIAoAbQAFAzgZAeQgPASgVAAQgRAAgXgQg");
	this.shape_59.setTransform(177.6,69,0.504,0.504);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#736634").s().p("AgRAaQgbgSAOgWQAPgYAcAFIAWAOQADAbgOARQgIAKgMAAQgIAAgNgJg");
	this.shape_60.setTransform(198.5,58,0.504,0.504);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#736634").s().p("AggAwQgxggAagqQAagrA1AHIAoAbQAFAzgZAeQgPASgVAAQgRAAgXgQg");
	this.shape_61.setTransform(198.5,58,0.504,0.504);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#736634").s().p("AgPAHQgFgHgBgIQgBgaAUALQASAKAEAPQAGAZgPABIAAAAQgNAAgNgVg");
	this.shape_62.setTransform(190.5,77.5,0.504,0.504);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#736634").s().p("AgkAQQgMgSgBgTQgBg5AsAYQAqAWAJAkQAOA4ghACIgBAAQgfAAgegug");
	this.shape_63.setTransform(190.5,77.4,0.504,0.504);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#736634").s().p("AgFAQQgJgCgHgGQgTgQAWgGQATgHAPAJQAWAMgKAKQgHAIgNAAQgHAAgGgCg");
	this.shape_64.setTransform(163.7,72.5,0.504,0.504);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#736634").s().p("AgNAlQgVgFgPgNQgqglAwgPQAtgPAhAUQAzAcgXAYQgPAQgfAAQgOAAgQgDg");
	this.shape_65.setTransform(163.7,72.5,0.504,0.504);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#736634").s().p("AgFAVQgKgCgHgIQgSgVAVgJQATgIAPALQAXAQgKAOQgHAJgOAAQgGAAgGgCg");
	this.shape_66.setTransform(140.9,69.8,0.504,0.504);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#736634").s().p("AgMAvQgXgGgOgRQgqgwAwgUQATgIAYACQAWACANAKQAyAmgWAeQgPAWgeAAQgPAAgPgFg");
	this.shape_67.setTransform(140.9,69.8,0.504,0.504);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#736634").s().p("AgXAHQAHgTAQgHQAWgLADAPQADAPgTAPQgHAGgHADIgIABQgQAAAGgSg");
	this.shape_68.setTransform(207.5,65.8,0.504,0.504);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#736634").s().p("Ag0AQQAPgsAjgQQAzgXAHAhQAHAggpAkQgSAPgQAEQgLACgIAAQgiAAANgng");
	this.shape_69.setTransform(207.5,65.7,0.504,0.504);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#736634").s().p("AgCAQQgGgCgFgGQgLgPANgHQALgHAKAJQAOAMgHAKQgEAIgJAAIgGgCg");
	this.shape_70.setTransform(295.3,60.2,0.504,0.504);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#736634").s().p("AgHAlQgOgFgJgNQgaglAegPQAbgPAVATQAfAdgOAYQgKARgTAAQgJAAgIgEg");
	this.shape_71.setTransform(295.3,60.2,0.504,0.504);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#736634").s().p("AgFAQQgKgCgGgGQgTgQAWgGQATgHAOAJQAXAMgKAKQgHAIgNAAQgHAAgGgCg");
	this.shape_72.setTransform(335.3,67.8,0.504,0.504);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#736634").s().p("AgMAlQgXgFgOgNQgqglAwgPQAtgPAhAUQAyAcgWAYQgPAQgfAAQgOAAgPgDg");
	this.shape_73.setTransform(335.3,67.8,0.504,0.504);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#736634").s().p("AgFAQQgLgCgGgGQgSgPAVgHQATgHAPAJQAXAMgKAKQgHAIgOAAIgMgCg");
	this.shape_74.setTransform(267,64.2,0.504,0.504);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#736634").s().p("AgNAlQgXgFgNgNQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_75.setTransform(267,64.2,0.504,0.504);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#736634").s().p("AgFAQQgLgCgFgGQgTgPAVgHQATgHAPAJQAXAMgKAKQgHAIgOAAIgMgCg");
	this.shape_76.setTransform(109.4,68.3,0.504,0.504);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#736634").s().p("AgNAlQgXgFgNgNQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_77.setTransform(109.4,68.3,0.504,0.504);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#736634").s().p("AgFAQQgKgCgGgGQgTgQAWgGQATgHAPAJQAWAMgKAKQgHAIgNAAQgHAAgGgCg");
	this.shape_78.setTransform(111,77.6,0.504,0.504);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#736634").s().p("AgNAlQgVgFgPgNQgqglAwgPQAtgPAhAUQAyAcgXAYQgPAQgeAAQgOAAgQgDg");
	this.shape_79.setTransform(110.9,77.6,0.504,0.504);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#736634").s().p("AgWAWIgEgGQgSgmAZgPQAXgPAWAnQASAegWASQgIAHgIAAQgNAAgPgUg");
	this.shape_80.setTransform(136.2,94.3,0.504,0.504);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#736634").s().p("AgnAlIgFgKQgPgeAFgbQAEgYARgKQASgLASAJQAXALASAeQAOAZgCAYQgDAWgPANQgNAMgOAAQgXAAgbgig");
	this.shape_81.setTransform(136.2,94.3,0.504,0.504);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#736634").s().p("AgWAWIgEgGQgSgmAZgPQAXgPAWAnQASAegWASQgIAHgIAAQgNAAgPgUg");
	this.shape_82.setTransform(160,87.6,0.504,0.504);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#736634").s().p("AACBEQgVgFgUgZIgFgKQgPgeAFgbQAEgYARgKQASgLASAJQAXALASAeQAOAYgCAZQgDAWgPANQgLAKgOAAIgLgCg");
	this.shape_83.setTransform(160,87.6,0.504,0.504);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#736634").s().p("AgWAWIgEgGQgSgmAZgPQAXgPAWAnQASAegWASQgIAHgIAAQgNAAgPgUg");
	this.shape_84.setTransform(85.7,69.9,0.504,0.504);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#736634").s().p("AACBEQgVgEgUgbIgFgJQgPgeAFgbQAEgXARgLQASgLASAJQAXALASAeQAOAYgCAZQgDAXgPAMQgLAKgOAAIgLgCg");
	this.shape_85.setTransform(85.7,69.9,0.504,0.504);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7A2F20").s().p("AgFA2IgBAAQgZgCgMgSQgLgQADgVQACgWAPgOQAQgQAUACQAaACAOASQAMARgBAUQgCAWgPAPQgOANgWAAIgFAAg");
	this.shape_86.setTransform(246.8,77.2,0.504,0.504);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6F828E").s().p("AgIBRIgBAAQgmgDgTgbQgQgYAEggQAEghAVgVQAYgYAgADQAnADAVAbQATAZgDAfQgCAhgWAWQgWAVghAAIgIgBg");
	this.shape_87.setTransform(246.7,77.2,0.504,0.504);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#7A2F20").s().p("AgFA2IgBAAQgZgCgMgTQgLgQADgUQACgWAPgOQAQgQAUACQAaACAOASQAMAQgBAVQgCAWgPAOQgOAOgWAAIgFAAg");
	this.shape_88.setTransform(128.7,77.5,0.504,0.504);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6F828E").s().p("AgIBRIgBAAQgmgDgSgbQgRgYAEgfQAEghAWgWQAXgYAgADQAnADAVAbQATAZgDAfQgCAigWAVQgWAVghAAIgIgBg");
	this.shape_89.setTransform(128.7,77.4,0.504,0.504);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7A2F20").s().p("AgwAFIAAAAQgEgiAygGQAvgGAEAiQAEAjgyAIIgNABQgjAAgDggg");
	this.shape_90.setTransform(282.1,90.4,0.504,0.504);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6F828E").s().p("AgtAvQgZgMgDgbIAAgBQgCgXAVgSQAUgQAegDQAcgEAXALQAYALADAXQACAZgVATQgUARgeAFIgPABQgUAAgPgIg");
	this.shape_91.setTransform(282.1,90.4,0.504,0.504);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7A2F20").s().p("AgFAkIgBAAQg0gDAHgiQAGglAvADQA3ADgEAjQgEAhgwAAIgGAAg");
	this.shape_92.setTransform(321.1,85.5,0.504,0.504);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6F828E").s().p("AgIA2IgBAAQgmgCgSgSQgRgQAEgVQAEgWAWgOQAXgQAgACQAnACAVASQATARgDAUQgCAWgWAPQgWANghAAIgIAAg");
	this.shape_93.setTransform(321.1,85.5,0.504,0.504);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7A2F20").s().p("AgRAhQgbgWAPgdQAOgeAcAFIAWATQADAjgOAVQgIAMgLAAQgJAAgNgLg");
	this.shape_94.setTransform(177,77.5,0.504,0.504);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6F828E").s().p("AggA9QgxgpAag2QAag2A1AJIAoAiQAGBBgaAmQgPAXgVAAQgQAAgYgUg");
	this.shape_95.setTransform(177,77.5,0.504,0.504);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7A2F20").s().p("AgRAhQgbgWAPgdQAOgeAcAFIAWATQADAjgOAVQgIAMgMAAQgIAAgNgLg");
	this.shape_96.setTransform(227.9,93.3,0.504,0.504);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6F828E").s().p("AggA9QgxgpAag1QAag3A1AKIAoAhQAFBBgZAnQgPAWgUAAQgRAAgYgUg");
	this.shape_97.setTransform(227.9,93.4,0.504,0.504);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#7A2F20").s().p("AgRAaQgbgSAPgWQAOgXAcAEIAWAPQADAbgOAQQgIAKgLAAQgJAAgNgJg");
	this.shape_98.setTransform(185.9,85.5,0.504,0.504);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#6F828E").s().p("AggAwQgxggAagqQAagrA1AIIAoAaQAGAzgaAeQgPASgUAAQgRAAgYgQg");
	this.shape_99.setTransform(185.9,85.5,0.504,0.504);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7A2F20").s().p("AgRAaQgbgSAOgWQAPgXAcAEIAWAPQADAbgOAQQgIAKgLAAQgJAAgNgJg");
	this.shape_100.setTransform(207.3,78,0.504,0.504);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6F828E").s().p("AggAwQgxggAagqQAagrA1AIIAoAaQAFAzgZAeQgPASgVAAQgRAAgXgQg");
	this.shape_101.setTransform(207.3,78,0.504,0.504);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7A2F20").s().p("AgPAHQgGgHAAgIQgBgaAVALQARAKAEAPQAHAZgQABQgMAAgOgVg");
	this.shape_102.setTransform(194.4,100,0.504,0.504);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6F828E").s().p("AgjAQQgMgRgBgUQgCg5AsAYQAqAXAJAjQAPA5giABIgCAAQgeAAgdgug");
	this.shape_103.setTransform(194.4,100,0.504,0.504);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7A2F20").s().p("AgFARQgKgDgGgFQgTgQAWgHQASgHAPAJQAXAMgKAKQgHAIgOAAIgMgBg");
	this.shape_104.setTransform(172,89,0.504,0.504);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6F828E").s().p("AgNAlQgXgFgNgNQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_105.setTransform(172,89,0.504,0.504);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#7A2F20").s().p("AgFAVQgJgCgHgIQgTgUAWgJQATgJAPALQAWAQgKAOQgHAJgOAAQgGAAgGgCg");
	this.shape_106.setTransform(149.2,86.3,0.504,0.504);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#6F828E").s().p("AgMAvQgXgHgOgQQgqgwAwgUQATgIAYACQAWACANAKQAzAmgXAeQgPAWgeAAQgPAAgPgFg");
	this.shape_107.setTransform(149.2,86.3,0.504,0.504);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#7A2F20").s().p("AgXAHQAHgTAQgHQAWgLADAPQADAOgTAPQgGAHgIACIgIABQgQAAAGgRg");
	this.shape_108.setTransform(219.9,84.4,0.504,0.504);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6F828E").s().p("Ag1AQQAPgsAkgQQAzgXAHAhQAHAggqAkQgRAPgRAEQgKACgIAAQgjAAANgng");
	this.shape_109.setTransform(219.9,84.3,0.504,0.504);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7A2F20").s().p("AgCAQQgGgCgFgGQgLgPANgHQALgHAJAJQAOAMgGAKQgEAIgIAAIgHgCg");
	this.shape_110.setTransform(303.6,76.7,0.504,0.504);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6F828E").s().p("AgHAlQgOgFgJgNQgagkAegQQAbgPAVAUQAfAcgOAYQgKAQgTAAQgIAAgJgDg");
	this.shape_111.setTransform(303.6,76.7,0.504,0.504);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7A2F20").s().p("AgFAQQgLgCgGgGQgSgPAVgHQATgHAPAJQAXAMgKAKQgHAIgOAAIgMgCg");
	this.shape_112.setTransform(343.6,84.3,0.504,0.504);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#6F828E").s().p("AgNAlQgWgEgOgOQgqgkAwgQQAsgPAiAUQAyAcgXAYQgOAQgeAAQgOAAgRgDg");
	this.shape_113.setTransform(343.6,84.3,0.504,0.504);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7A2F20").s().p("AgJAOQgJgFgFgHQgOgTAWgCQAUgCANAMQATAQgMAJQgGAEgIAAQgJAAgLgGg");
	this.shape_114.setTransform(282,80.9,0.504,0.504);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6F828E").s().p("AgVAgQgUgKgLgPQghgtAzgFQAugEAdAaQAqAmgcATQgMAJgRAAQgVAAgagNg");
	this.shape_115.setTransform(282,80.9,0.504,0.504);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#7A2F20").s().p("AgFAQQgLgCgGgGQgSgPAVgHQATgHAPAJQAXAMgKAKQgHAIgOAAIgMgCg");
	this.shape_116.setTransform(119.6,85,0.504,0.504);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#6F828E").s().p("AgMAlQgWgFgPgNQgqgkAwgQQAtgPAhAUQAyAcgWAYQgPAQgfAAQgOAAgPgDg");
	this.shape_117.setTransform(119.6,85,0.504,0.504);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7A2F20").s().p("AgFAQQgKgCgGgGQgTgQAVgGQATgHAPAJQAXAMgKAKQgHAIgNAAQgHAAgGgCg");
	this.shape_118.setTransform(121.2,99.4,0.504,0.504);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#6F828E").s().p("AgMAlQgXgFgOgNQgqglAwgPQAtgPAhATQAyAdgWAYQgPARgfAAQgOAAgPgEg");
	this.shape_119.setTransform(121.2,99.3,0.504,0.504);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7A2F20").s().p("AgWAWIgDgGQgSgmAYgPQAXgPAWAnQASAegWATQgIAGgIAAQgNAAgPgUg");
	this.shape_120.setTransform(160.1,106.8,0.504,0.504);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#6F828E").s().p("AACBFQgUgFgUgaIgGgKQgPgeAFgbQAEgYARgKQASgLATAKQAXAKARAfQAPAXgDAZQgDAXgPAMQgLAKgPAAIgKgBg");
	this.shape_121.setTransform(160.1,106.8,0.504,0.504);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#7A2F20").s().p("AgWAWIgEgGQgSgmAZgPQAXgPAWAnQASAegWASQgIAHgIAAQgNAAgPgUg");
	this.shape_122.setTransform(94,86.4,0.504,0.504);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#6F828E").s().p("AACBFQgVgFgUgaQgDgEgCgGQgPgeAFgbQAEgYARgKQASgLASAJQAXALASAeQAOAYgCAZQgDAWgPANQgLAKgOAAIgLgBg");
	this.shape_123.setTransform(94,86.4,0.504,0.504);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FBED21").ss(2,0,0,4).p("ABRAAQAAAhgYAYQgXAYgiAAQggAAgYgYQgYgYAAghQAAghAYgXQAYgYAgAAQAiAAAXAYQAYAYAAAgg");
	this.shape_124.setTransform(35.2,75.1,0.504,0.504);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ag4A5QgYgYAAghQAAghAYgXQAYgYAgAAQAiAAAXAYQAYAYAAAgQAAAhgYAYQgXAYgiAAQggAAgYgYg");
	this.shape_125.setTransform(35.2,75.1,0.504,0.504);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#F4BB3A","#ED7C31","#573735"],[0,0.541,0.976],0,0,0,0,0,15.7).s().p("AhtBuQgugtAAhBQAAg/AuguQAuguA/AAQBBAAAtAuQAuAuAAA/QAABBguAtQgtAuhBAAQg/AAgugug");
	this.shape_126.setTransform(35.9,74.2,0.504,0.504);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#FCE9EC","#FCDDDE","#FDBCB9","#FE897E","#FF5340","#FF5D43","#FD794B","#FBA559","#F9D467","#C7C95E","#A9C358","#759748","#557C3E","#2D5317"],[0,0.02,0.055,0.106,0.153,0.169,0.192,0.227,0.259,0.353,0.408,0.49,0.545,1],0,89.3,0,-89.2).s().p("AuANxQkYgOiEgQIoEhCQmgg3hlgaQhLgTimg/QiMg2gugEQhCgFhkg6Qhmg8hPhTQg6g/h/hMQiDhOgegeQhDhIgbgaQgugrgigEQgQgCglgCQgbgBgugIQgrgHgHg5QgGg9A4gqQBRg9B4hBQCahTBigRQIFh3HzhpQPXjOFwgRQFtgRE3A7QBQAOB4AeQBfAYAhADIGJA1QFEArB7AEQBPADIvBDQH8A9BKgLQAogGDDg/QChg0BUAIQBiAJAsA0QARAUADATQACATgKAIQgPALgrABQg5ACgZAGQgeAGgtgFQgLgBABABIAZAMQCzBQD3gHIDIgFQAmgEBSgaQAugOBPAfQBQAfBQBAQDECeAaDHQAMBYgnBSQgjBJhEA2Qg+AxhGATQhGATgwgUQhXgli7gXQihgUiKAAQhvAAh4AcQhoAYg0AcQh0BBj2BvQlUCaiDARQgpAFihAjQhfAVixACQitACh4AZQiDAcgqACQgjACikAQQh2ANhagEQhVgEjlAPQkhAThmADIhhABQidAAjjgLg");
	this.shape_127.setTransform(198.5,84.4,0.504,0.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

	// tailFin
	this.instance_3 = new lib.brookTrouttailFin();
	this.instance_3.parent = this;
	this.instance_3.setTransform(371.6,80.9,1,1,0,0,0,6,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:32.7,regY:44.9,scaleX:1.01,skewY:3.8,x:398.4,y:85.6},0).wait(1).to({scaleX:1.01,skewY:7.6,y:87.4},0).wait(1).to({scaleX:1.02,skewY:11.5,x:398.3,y:89.3},0).wait(1).to({scaleX:1.02,skewY:6.8,x:398.7,y:87.1},0).wait(1).to({scaleX:1.02,skewY:2.1,x:398.9,y:84.8},0).wait(1).to({scaleX:1.02,skewY:-2.6,y:82.6},0).wait(1).to({scaleX:1.02,skewY:-7.3,x:398.7,y:80.4},0).wait(1).to({scaleX:1.03,skewY:-12,x:398.4,y:78.2},0).wait(1).to({scaleX:1.02,skewY:-9.6,x:398.5,y:79.3},0).wait(1).to({scaleX:1.02,skewY:-7.2,y:80.5},0).wait(1).to({scaleX:1.01,skewY:-4.8,y:81.6},0).wait(1).to({scaleX:1,skewY:-2.4,x:398.4,y:82.8},0).wait(1).to({scaleX:1,skewY:0,x:398.3,y:83.9},0).wait(1));

	// topFin
	this.instance_4 = new lib.brookTrouttopFin();
	this.instance_4.parent = this;
	this.instance_4.setTransform(188.1,46.4,1,1,0,0,0,43.6,45.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:48.5,regY:25.6,scaleY:1,skewX:2.2,x:193.7,y:26.2},0).wait(1).to({scaleY:1.01,skewX:4.3,x:194.5,y:26.1},0).wait(1).to({scaleY:1.01,skewX:6.5,x:195.2},0).wait(1).to({scaleY:1.01,skewX:8.7,x:196,y:26.2},0).wait(1).to({scaleY:1.02,skewX:10.8,x:196.8},0).wait(1).to({scaleY:1.02,skewX:4.8,x:194.7,y:25.9},0).wait(1).to({scaleY:1.02,skewX:-1.2,x:192.5,y:25.8},0).wait(1).to({scaleY:1.03,skewX:-7.2,x:190.3,y:25.9},0).wait(1).to({scaleY:1.03,skewX:-13.3,x:188.2,y:26.2},0).wait(1).to({scaleY:1.02,skewX:-10,x:189.4,y:26.1},0).wait(1).to({scaleY:1.02,skewX:-6.6,x:190.6},0).wait(1).to({scaleY:1.01,skewX:-3.3,x:191.8},0).wait(1).to({scaleY:1,skewX:0,x:193,y:26.3},0).wait(1));

	// rearFin
	this.instance_5 = new lib.brookTroutrearFin();
	this.instance_5.parent = this;
	this.instance_5.setTransform(275.9,116.9,1,1,0,0,0,9.3,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:36.4,regY:25.3,scaleX:1,skewX:-0.3,skewY:-1.4,x:303.1,y:123.4},0).wait(1).to({scaleX:1,skewX:-0.6,skewY:-2.9,y:122.8},0).wait(1).to({scaleX:1,skewX:-1,skewY:-4.3,y:122.1},0).wait(1).to({scaleX:1,skewX:-1.3,skewY:-5.7,x:303.2,y:121.4},0).wait(1).to({scaleX:1.01,skewX:-1.6,skewY:-7.1,x:303.1,y:120.7},0).wait(1).to({scaleX:1.01,skewX:-1.9,skewY:-8.6,y:120.1},0).wait(1).to({skewX:-2.2,skewY:-8.8,y:119.9},0).wait(1).to({skewX:-2.5,skewY:-9.1,x:303.2,y:119.8},0).wait(1).to({skewX:-2.9,skewY:-9.4,y:119.6},0).wait(1).to({scaleX:1.01,skewX:-3.2,skewY:-9.7,y:119.5},0).wait(1).to({skewX:-3.5,skewY:-10,x:303.3,y:119.4},0).wait(1).to({scaleX:1,skewX:-1.7,skewY:-5,x:303.2,y:121.7},0).wait(1).to({scaleX:1,skewX:0,skewY:0,x:303,y:124.1},0).wait(1));

	// btmJaw
	this.instance_6 = new lib.BrookTroutlowerJaw();
	this.instance_6.parent = this;
	this.instance_6.setTransform(83.5,74.3,1,1,0,0,0,83.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:43.8,regY:23.9,rotation:1.5,x:45,y:90.7},0).wait(1).to({rotation:3.1,x:46.3,y:89.6},0).wait(1).to({rotation:4.6,x:47.6,y:88.5},0).wait(1).to({rotation:6.1,x:48.9,y:87.4},0).wait(1).to({rotation:5.5,x:48.3,y:87.9},0).wait(1).to({rotation:4.8,x:47.7,y:88.4},0).wait(1).to({rotation:4.1,x:47.1,y:88.9},0).wait(1).to({rotation:3.4,x:46.6,y:89.4},0).wait(1).to({rotation:2.7,x:46,y:89.8},0).wait(1).to({rotation:2,x:45.4,y:90.3},0).wait(1).to({rotation:1.4,x:44.9,y:90.8},0).wait(1).to({rotation:0.7,x:44.3,y:91.3},0).wait(1).to({rotation:0,x:43.8,y:91.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.7,431.1,155.7);


(lib.BrookTrout_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubbles
	this.instance = new lib.bubbles("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(157.8,1309.8,0.327,0.327,0,0,0,107,-192.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(1).to({regX:119.2,regY:-194.9,scaleX:0.33,scaleY:0.33,x:161.8,y:1275.2,startPosition:1},0).wait(1).to({scaleX:0.33,scaleY:0.33,y:1241.2,startPosition:2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:161.9,y:1207.3,startPosition:3},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:1173.3,startPosition:4},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:1139.3,startPosition:5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:162,y:1105.4,startPosition:6},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:1071.5,startPosition:7},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:162.1,y:1037.5,startPosition:8},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:1003.5,startPosition:9},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:969.6,startPosition:10},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:162.2,y:935.6,startPosition:11},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:901.7,startPosition:12},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:162.3,y:867.7,startPosition:13},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:833.7,startPosition:14},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:799.8,startPosition:15},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:162.4,y:765.8,startPosition:16},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:731.9,startPosition:17},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:162.5,y:697.9,startPosition:18},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:664,startPosition:19},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:630,startPosition:20},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:162.6,y:596.1,startPosition:21},0).wait(1).to({scaleX:0.41,scaleY:0.41,y:562.1,startPosition:22},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:162.7,y:528.1,startPosition:23},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:494.2,startPosition:24},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:162.8,y:460.2,startPosition:25},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:426.3,startPosition:26},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:392.3,startPosition:27},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:162.9,y:358.3,startPosition:28},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:324.4,startPosition:29},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:290.4,startPosition:30},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:163,y:256.4,startPosition:31},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:163.1,y:222.5,startPosition:32},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:188.6,startPosition:33},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:154.6,startPosition:34},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:163.2,y:120.6,startPosition:35},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:86.7,startPosition:36},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:52.7,startPosition:37},0).to({_off:true},1).wait(26).to({_off:false,regX:106.5,regY:-192.5,scaleX:0.33,scaleY:0.33,x:915.2,y:1309.8,startPosition:0},0).wait(1).to({regX:119.2,regY:-194.9,scaleX:0.33,scaleY:0.33,x:919.4,y:1275,startPosition:1},0).wait(1).to({scaleX:0.33,scaleY:0.33,y:1241.1,startPosition:2},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:919.5,y:1207.1,startPosition:3},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:1173.1,startPosition:4},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:1139.2,startPosition:5},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:919.6,y:1105.3,startPosition:6},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:1071.3,startPosition:7},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:919.7,y:1037.3,startPosition:8},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:1003.4,startPosition:9},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:919.8,y:969.4,startPosition:10},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:935.5,startPosition:11},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:901.5,startPosition:12},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:919.9,y:867.5,startPosition:13},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:833.6,startPosition:14},0).wait(1).to({scaleX:0.38,scaleY:0.38,y:799.6,startPosition:15},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:920,y:765.6,startPosition:16},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:920.1,y:731.7,startPosition:17},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:697.7,startPosition:18},0).wait(1).to({scaleX:0.4,scaleY:0.4,y:663.8,startPosition:19},0).wait(1).to({scaleX:0.4,scaleY:0.4,x:920.2,y:629.8,startPosition:20},0).wait(1).to({scaleX:0.41,scaleY:0.41,y:595.9,startPosition:21},0).wait(1).to({scaleX:0.41,scaleY:0.41,x:920.3,y:561.9,startPosition:22},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:527.9,startPosition:23},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:920.4,y:494,startPosition:24},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:460,startPosition:25},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:920.5,y:426.1,startPosition:26},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:392.1,startPosition:27},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:358.1,startPosition:28},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:920.6,y:324.2,startPosition:29},0).wait(1).to({scaleX:0.44,scaleY:0.44,y:290.2,startPosition:30},0).wait(1).to({scaleX:0.45,scaleY:0.45,y:256.2,startPosition:31},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:920.7,y:222.3,startPosition:32},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:920.8,y:188.4,startPosition:33},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:154.4,startPosition:34},0).wait(1).to({scaleX:0.46,scaleY:0.46,y:120.4,startPosition:35},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:920.9,y:86.5,startPosition:36},0).wait(1).to({scaleX:0.47,scaleY:0.47,y:52.5,startPosition:37},0).to({_off:true},1).wait(4));

	// AmericanShad-all copy
	this.instance_1 = new lib.BrookTroutmove_mc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1142.8,492.9,1.213,1.213,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:216.2,regY:82.8,x:1359.6,y:596.6,startPosition:1},0).wait(1).to({x:1314.3,y:600.1,startPosition:2},0).wait(1).to({x:1269.1,y:603.6,startPosition:3},0).wait(1).to({x:1223.8,y:607,startPosition:4},0).wait(1).to({x:1178.5,y:610.5,startPosition:5},0).wait(1).to({x:1133.3,y:614,startPosition:6},0).wait(1).to({x:1088,y:617.5,startPosition:7},0).wait(1).to({x:1042.7,y:620.9,startPosition:8},0).wait(1).to({x:997.4,y:624.4,startPosition:9},0).wait(1).to({x:952.1,y:627.9,startPosition:10},0).wait(1).to({x:906.8,y:631.4,startPosition:11},0).wait(1).to({x:861.6,y:634.8,startPosition:12},0).wait(1).to({x:816.3,y:638.3,startPosition:13},0).wait(1).to({x:771.1,y:641.8,startPosition:0},0).wait(1).to({x:725.7,y:645.3,startPosition:1},0).wait(1).to({x:680.5,y:648.7,startPosition:2},0).wait(1).to({x:635.2,y:652.2,startPosition:3},0).wait(1).to({x:590,y:655.7,startPosition:4},0).wait(1).to({x:544.6,y:659.1,startPosition:5},0).wait(1).to({x:543.6,y:654.6,startPosition:6},0).wait(1).to({x:542.5,y:650.1,startPosition:7},0).wait(1).to({x:541.4,y:645.5,startPosition:8},0).wait(1).to({x:540.3,y:641,startPosition:9},0).wait(1).to({x:539.2,y:636.4,startPosition:10},0).wait(1).to({x:538.1,y:631.9,startPosition:11},0).wait(1).to({x:537,y:627.3,startPosition:12},0).wait(1).to({x:535.9,y:622.8,startPosition:13},0).wait(1).to({x:534.8,y:618.2,startPosition:0},0).wait(1).to({x:533.7,y:613.7,startPosition:1},0).wait(1).to({x:532.6,y:609.1,startPosition:2},0).wait(1).to({x:531.7,y:612.2,startPosition:3},0).wait(1).to({x:530.8,y:615.3,startPosition:4},0).wait(1).to({x:529.8,y:618.3,startPosition:5},0).wait(1).to({x:528.9,y:621.4,startPosition:6},0).wait(1).to({x:528,y:624.5,startPosition:7},0).wait(1).to({x:527,y:627.5,startPosition:8},0).wait(1).to({x:526.1,y:630.6,startPosition:9},0).wait(1).to({x:525.2,y:633.7,startPosition:10},0).wait(1).to({x:524.2,y:636.7,startPosition:11},0).wait(1).to({x:523.3,y:639.8,startPosition:12},0).wait(1).to({x:522.4,y:642.9,startPosition:13},0).wait(1).to({x:521.4,y:645.9,startPosition:0},0).wait(1).to({x:520.5,y:649,startPosition:1},0).wait(1).to({x:519.6,y:652.1,startPosition:2},0).wait(1).to({x:518.6,y:655.1,startPosition:3},0).wait(1).to({x:521.7,y:653.1,startPosition:4},0).wait(1).to({x:524.8,y:651.1,startPosition:5},0).wait(1).to({x:527.9,y:649.2,startPosition:6},0).wait(1).to({x:531,y:647.1,startPosition:7},0).wait(1).to({x:534.1,y:645.1,startPosition:8},0).wait(1).to({x:537.2,y:643.2,startPosition:9},0).wait(1).to({x:540.3,y:641.2,startPosition:10},0).wait(1).to({x:543.4,y:639.1,startPosition:11},0).wait(1).to({x:546.5,y:637.1,startPosition:12},0).wait(1).to({x:549.6,y:635.1,startPosition:13},0).wait(1).to({x:552.6,y:633.1,startPosition:0},0).wait(1).to({x:519.5,y:633.2,startPosition:1},0).wait(1).to({x:486.4,startPosition:2},0).wait(1).to({x:453.2,y:633.3,startPosition:3},0).wait(1).to({x:420.1,startPosition:4},0).wait(1).to({x:387,y:633.4,startPosition:5},0).wait(1).to({x:353.8,startPosition:6},0).wait(1).to({x:320.7,startPosition:7},0).wait(1).to({x:287.6,y:633.5,startPosition:8},0).wait(1).to({x:254.5,startPosition:9},0).wait(1).to({x:221.4,y:633.6,startPosition:10},0).wait(1).to({x:188.2,startPosition:11},0).wait(1).to({x:155.1,y:633.7,startPosition:12},0).wait(1).to({x:122,startPosition:13},0).wait(1).to({x:88.9,startPosition:0},0).wait(1).to({x:55.7,y:633.8,startPosition:1},0).wait(1).to({x:22.5,startPosition:2},0).wait(1).to({x:-10.6,y:633.9,startPosition:3},0).wait(1).to({x:-43.7,startPosition:4},0).wait(1).to({x:-76.9,y:634,startPosition:5},0).wait(1).to({x:-110,startPosition:6},0).wait(1).to({x:-143.1,startPosition:7},0).wait(1).to({x:-176.3,y:634.1,startPosition:8},0).wait(1).to({x:-209.4,startPosition:9},0).wait(1).to({x:-242.5,y:634.2,startPosition:10},0).wait(1).to({x:-275.6,startPosition:11},0).wait(1).to({x:-308.8,startPosition:12},0).wait(1).to({x:-341.9,y:634.3,startPosition:13},0).wait(1).to({x:-375,startPosition:0},0).wait(1).to({x:-408.2,y:634.4,startPosition:1},0).wait(1).to({x:-441.3,startPosition:2},0).wait(1).to({x:-474.4,y:634.5,startPosition:3},0).wait(1).to({x:-507.6,startPosition:4},0).to({_off:true},1).wait(25));

	// AmericanShad-all copy 2
	this.instance_2 = new lib.BrookTroutmove_mc("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1173.8,635,0.857,0.857,0,0,0,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).wait(1).to({regX:216.2,regY:82.8,x:1305.1,y:710,startPosition:1},0).wait(1).to({x:1251.1,y:714.1,startPosition:2},0).wait(1).to({x:1197.1,y:718.3,startPosition:3},0).wait(1).to({x:1143.1,y:722.4,startPosition:4},0).wait(1).to({x:1089.1,y:726.6,startPosition:5},0).wait(1).to({x:1035.1,y:730.7,startPosition:6},0).wait(1).to({x:981.1,y:734.8,startPosition:7},0).wait(1).to({x:927.1,y:739,startPosition:8},0).wait(1).to({x:873.1,y:743.1,startPosition:9},0).wait(1).to({x:819.1,y:747.3,startPosition:10},0).wait(1).to({x:765.1,y:751.4,startPosition:11},0).wait(1).to({x:711.1,y:755.6,startPosition:12},0).wait(1).to({x:657.1,y:759.7,startPosition:13},0).wait(1).to({x:603.1,y:763.8,startPosition:0},0).wait(1).to({x:601.8,y:758.4,startPosition:1},0).wait(1).to({x:600.5,y:752.9,startPosition:2},0).wait(1).to({x:599.1,y:747.4,startPosition:3},0).wait(1).to({x:597.8,y:741.9,startPosition:4},0).wait(1).to({x:596.5,y:736.4,startPosition:5},0).wait(1).to({x:595.2,y:730.9,startPosition:6},0).wait(1).to({x:593.9,y:725.4,startPosition:7},0).wait(1).to({x:592.5,y:719.9,startPosition:8},0).wait(1).to({x:591.4,y:723.6,startPosition:9},0).wait(1).to({x:590.3,y:727.3,startPosition:10},0).wait(1).to({x:589.2,y:730.9,startPosition:11},0).wait(1).to({x:588.1,y:734.6,startPosition:12},0).wait(1).to({x:587,y:738.3,startPosition:13},0).wait(1).to({x:585.8,y:742,startPosition:0},0).wait(1).to({x:584.7,y:745.6,startPosition:1},0).wait(1).to({x:583.6,y:749.3,startPosition:2},0).wait(1).to({x:582.5,y:753,startPosition:3},0).wait(1).to({x:581.4,y:756.7,startPosition:4},0).wait(1).to({x:580.2,y:760.3,startPosition:5},0).wait(1).to({x:584,y:757.9,startPosition:6},0).wait(1).to({x:587.7,y:755.5,startPosition:7},0).wait(1).to({x:591.5,y:753.1,startPosition:8},0).wait(1).to({x:595.2,y:750.7,startPosition:9},0).wait(1).to({x:598.9,y:748.3,startPosition:10},0).wait(1).to({x:602.7,y:745.8,startPosition:11},0).wait(1).to({x:606.4,y:743.4,startPosition:12},0).wait(1).to({x:610.1,y:741,startPosition:13},0).wait(1).to({x:559.2,y:741.9,startPosition:0},0).wait(1).to({x:508.3,y:742.9,startPosition:1},0).wait(1).to({x:457.3,y:743.8,startPosition:2},0).wait(1).to({x:406.4,y:744.7,startPosition:3},0).wait(1).to({x:355.5,y:745.7,startPosition:4},0).wait(1).to({x:304.5,y:746.6,startPosition:5},0).wait(1).to({x:253.6,y:747.5,startPosition:6},0).wait(1).to({x:202.7,y:748.5,startPosition:7},0).wait(1).to({x:151.8,y:749.4,startPosition:8},0).wait(1).to({x:100.8,y:750.3,startPosition:9},0).wait(1).to({x:49.9,y:751.3,startPosition:10},0).wait(1).to({x:-1,y:752.2,startPosition:11},0).wait(1).to({x:-52,y:753.2,startPosition:12},0).wait(1).to({x:-102.9,y:754.1,startPosition:13},0).wait(1).to({x:-153.9,y:755,startPosition:0},0).wait(1).to({x:-204.8,y:756,startPosition:1},0).wait(1).to({x:-255.7,y:756.9,startPosition:2},0).wait(1).to({x:-306.7,y:757.8,startPosition:3},0).wait(1).to({x:-357.6,y:758.8,startPosition:4},0).wait(1).to({x:-408.5,y:759.7,startPosition:5},0).wait(1).to({x:-459.5,y:760.6,startPosition:6},0).wait(1).to({x:-510.4,y:761.6,startPosition:7},0).wait(1).to({x:-561.4,y:762.5,startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).to({_off:true},1).wait(10));

	// AmericanShad-all
	this.instance_3 = new lib.BrookTroutmove_mc("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1394.9,338.8,1.213,1.213,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(1).to({regX:216.2,regY:82.8,x:1611.6,y:442.6,startPosition:1},0).wait(1).to({x:1566.4,y:446,startPosition:2},0).wait(1).to({x:1521.1,y:449.5,startPosition:3},0).wait(1).to({x:1475.8,y:453,startPosition:4},0).wait(1).to({x:1430.5,y:456.5,startPosition:5},0).wait(1).to({x:1385.3,y:459.9,startPosition:6},0).wait(1).to({x:1340,y:463.4,startPosition:7},0).wait(1).to({x:1294.7,y:466.9,startPosition:8},0).wait(1).to({x:1249.5,y:470.4,startPosition:9},0).wait(1).to({x:1204.2,y:473.8,startPosition:10},0).wait(1).to({x:1158.9,y:477.3,startPosition:11},0).wait(1).to({x:1113.7,y:480.8,startPosition:12},0).wait(1).to({x:1068.3,y:484.3,startPosition:13},0).wait(1).to({x:1023.1,y:487.7,startPosition:0},0).wait(1).to({x:977.8,y:491.2,startPosition:1},0).wait(1).to({x:932.5,y:494.7,startPosition:2},0).wait(1).to({x:887.2,y:498.2,startPosition:3},0).wait(1).to({x:842,y:501.6,startPosition:4},0).wait(1).to({x:796.7,y:505.1,startPosition:5},0).wait(1).to({x:795.6,y:500.6,startPosition:6},0).wait(1).to({x:794.5,y:496,startPosition:7},0).wait(1).to({x:793.4,y:491.5,startPosition:8},0).wait(1).to({x:792.3,y:486.9,startPosition:9},0).wait(1).to({x:791.2,y:482.4,startPosition:10},0).wait(1).to({x:790.2,y:477.8,startPosition:11},0).wait(1).to({x:789.1,y:473.3,startPosition:12},0).wait(1).to({x:788,y:468.7,startPosition:13},0).wait(1).to({x:786.9,y:464.2,startPosition:0},0).wait(1).to({x:785.8,y:459.6,startPosition:1},0).wait(1).to({x:784.7,y:455.1,startPosition:2},0).wait(1).to({x:783.8,y:458.2,startPosition:3},0).wait(1).to({x:782.8,y:461.2,startPosition:4},0).wait(1).to({x:781.9,y:464.3,startPosition:5},0).wait(1).to({x:781,y:467.4,startPosition:6},0).wait(1).to({x:780,y:470.4,startPosition:7},0).wait(1).to({x:779.1,y:473.5,startPosition:8},0).wait(1).to({x:778.2,y:476.6,startPosition:9},0).wait(1).to({x:777.2,y:479.6,startPosition:10},0).wait(1).to({x:776.3,y:482.7,startPosition:11},0).wait(1).to({x:775.4,y:485.8,startPosition:12},0).wait(1).to({x:774.4,y:488.8,startPosition:13},0).wait(1).to({x:773.5,y:491.9,startPosition:0},0).wait(1).to({x:772.6,y:495,startPosition:1},0).wait(1).to({x:771.6,y:498,startPosition:2},0).wait(1).to({x:770.7,y:501.1,startPosition:3},0).wait(1).to({x:773.8,y:499.1,startPosition:4},0).wait(1).to({x:776.9,y:497.1,startPosition:5},0).wait(1).to({x:780,y:495.1,startPosition:6},0).wait(1).to({x:783.1,y:493.1,startPosition:7},0).wait(1).to({x:786.2,y:491.1,startPosition:8},0).wait(1).to({x:789.2,y:489.1,startPosition:9},0).wait(1).to({x:792.3,y:487.1,startPosition:10},0).wait(1).to({x:795.4,y:485.1,startPosition:11},0).wait(1).to({x:798.5,y:483.1,startPosition:12},0).wait(1).to({x:801.6,y:481.1,startPosition:13},0).wait(1).to({x:804.7,y:479.1,startPosition:0},0).wait(1).to({x:764.3,y:478.8,startPosition:1},0).wait(1).to({x:723.9,y:478.5,startPosition:2},0).wait(1).to({x:683.5,y:478.2,startPosition:3},0).wait(1).to({x:643.1,y:477.8,startPosition:4},0).wait(1).to({x:602.7,y:477.5,startPosition:5},0).wait(1).to({x:562.3,y:477.2,startPosition:6},0).wait(1).to({x:521.9,y:476.9,startPosition:7},0).wait(1).to({x:481.4,y:476.6,startPosition:8},0).wait(1).to({x:441,y:476.3,startPosition:9},0).wait(1).to({x:400.6,y:476,startPosition:10},0).wait(1).to({x:360.2,y:475.7,startPosition:11},0).wait(1).to({x:319.8,y:475.3,startPosition:12},0).wait(1).to({x:279.4,y:475,startPosition:13},0).wait(1).to({x:239.1,y:474.7,startPosition:0},0).wait(1).to({x:198.6,y:474.4,startPosition:1},0).wait(1).to({x:158.2,y:474.1,startPosition:2},0).wait(1).to({x:117.8,y:473.8,startPosition:3},0).wait(1).to({x:77.4,y:473.5,startPosition:4},0).wait(1).to({x:37,y:473.2,startPosition:5},0).wait(1).to({x:-3.4,y:472.8,startPosition:6},0).wait(1).to({x:-43.8,y:472.5,startPosition:7},0).wait(1).to({x:-84.2,y:472.2,startPosition:8},0).wait(1).to({x:-124.6,y:471.9,startPosition:9},0).wait(1).to({x:-165,y:471.6,startPosition:10},0).wait(1).to({x:-205.4,y:471.3,startPosition:11},0).wait(1).to({x:-245.9,y:471,startPosition:12},0).wait(1).to({x:-286.3,y:470.7,startPosition:13},0).wait(1).to({x:-326.6,y:470.4,startPosition:0},0).wait(1).to({x:-367.1,y:470,startPosition:1},0).wait(1).to({x:-407.5,y:469.7,startPosition:2},0).wait(1).to({x:-447.9,y:469.4,startPosition:3},0).wait(1).to({x:-488.3,y:469.1,startPosition:4},0).wait(1).to({startPosition:5},0).to({_off:true},1).wait(10));

	// bubbles
	this.instance_4 = new lib.bubbles("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(352.5,353.4,0.327,0.327,0,0,0,107,-194.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({_off:false},0).wait(1).to({regX:119.2,regY:-194.9,x:356.3,y:341.8,startPosition:1},0).wait(1).to({x:356.2,y:330.4,startPosition:2},0).wait(1).to({x:356,y:318.9,startPosition:3},0).wait(1).to({x:355.9,y:307.5,startPosition:4},0).wait(1).to({x:355.7,y:296,startPosition:5},0).wait(1).to({x:355.6,y:284.6,startPosition:6},0).wait(1).to({x:355.4,y:273.1,startPosition:7},0).wait(1).to({x:355.3,y:261.7,startPosition:8},0).wait(1).to({x:355.1,y:250.2,startPosition:9},0).wait(1).to({x:355,y:238.8,startPosition:10},0).wait(1).to({x:354.8,y:227.3,startPosition:11},0).wait(1).to({x:354.7,y:215.9,startPosition:12},0).wait(1).to({x:354.5,y:204.4,startPosition:13},0).wait(1).to({x:354.3,y:193,startPosition:14},0).wait(1).to({x:354.2,y:181.5,startPosition:15},0).wait(1).to({x:354,y:170.1,startPosition:16},0).wait(1).to({x:353.9,y:158.6,startPosition:17},0).wait(1).to({x:353.7,y:147.2,startPosition:18},0).wait(1).to({x:353.6,y:135.7,startPosition:19},0).wait(1).to({x:353.4,y:124.3,startPosition:20},0).wait(1).to({x:353.3,y:112.8,startPosition:21},0).wait(1).to({x:353.1,y:101.4,startPosition:22},0).wait(1).to({x:353,y:89.9,startPosition:23},0).wait(1).to({x:352.8,y:78.5,startPosition:24},0).wait(1).to({x:352.7,y:67,startPosition:25},0).wait(1).to({x:352.5,y:55.6,startPosition:26},0).wait(1).to({x:352.3,y:44.1,startPosition:27},0).to({_off:true},1).wait(36));

	// bkgr
	this.instance_5 = new lib.bkgr();
	this.instance_5.parent = this;
	this.instance_5.setTransform(478.9,779,0.915,1.608,0,0,0,586.9,475.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:587.2,x:479.1,alpha:0.117},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.35},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.7},0).wait(99).to({alpha:0.622},0).wait(1).to({alpha:0.544},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.311},0).wait(1).to({alpha:0.233},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-266,-76.1,1931.5,1710.3);


// stage content:



(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Brook Trout
	this.instance = new lib.BrookTrout_mc("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(478.7,253.5,0.722,0.722,0,0,0,663,351.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},115).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192,457.1,1394.4,1234.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;