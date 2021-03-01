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
		{src:"assets/animations/images/Eel_PQ_atlas_.png", id:"Eel_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Eel_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Eel_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AAAgFQgLgCgKAMQAEgHAEgDQAGgGALABQAMACAEAIQACAGgBAFQgJgPgMgBg");
	this.shape.setTransform(2.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,2.3);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgOAGQgEgFgCgJQACAGAEADQAJAJAKgDQAPgHABgNQABAHgCAGQgDANgNABIgCAAQgLAAgFgIg");
	this.shape.setTransform(2.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4.4,2.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["Eel_PQ_atlas_"],5)).ss(1,0,0,4).p("ABMAwQgUAHghgOQgUgIgcgUQgagOgKgMQgPgRABgZ");
	this.shape.setTransform(42.6,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["Eel_PQ_atlas_"],5)).ss(1,0,0,4).p("AAAhmQgsAjgVAUQgmAjAHAtQADAYAXAMQAOAHAiAMQATAJAsACIA+AD");
	this.shape_1.setTransform(39.3,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AABgCIAkgMIAGADIhVAaQAHgGAkgLg");
	this.shape_2.setTransform(18.5,25.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAEgDIA4gHIAAAFIh3AQQAHgHA4gHg");
	this.shape_3.setTransform(15.1,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AAFgDIBBgDIgBAFIiKAIQAKgHBAgDg");
	this.shape_4.setTransform(14.1,22.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("ABRgCIgCADIifADQAXgJCKADg");
	this.shape_5.setTransform(13.6,20.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhgAAQARgIBZAFQAtACAqABIgDAGg");
	this.shape_6.setTransform(12.5,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhdgGQAWgIBUAKQArAEAmAFIgEAGg");
	this.shape_7.setTransform(13.8,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(66,33,11,0.557)","rgba(76,47,16,0.757)","rgba(85,60,21,0.937)","#584017","#61551D","#6D7025"],[0,0.071,0.169,0.259,0.588,0.941],-7.7,6.1,8.8,-8.7).s().p("AgiBCQgHgDgugcQhfg6BMgmQAYgMAugDQASgCAwAAQATAAAhALQAaAIAIAFQACAAgQAUQgRAWAGAMQAGAOARAEQAJADASABQhFAmgqAPQgJAEgKAAQgTAAgagNg");
	this.shape_8.setTransform(14.1,20.6);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(68.9,5.9,1,1,0,0,0,2.2,1.4);
	this.instance.alpha = 0.988;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHACQgCgDACgDIAQACIgPAHIgBgDg");
	this.shape_9.setTransform(68.2,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgJAKQgDgFAAgFQAAgEADgEQAFgFAEAAQAFAAAFAFQADAEAAAEQAAAFgDAFQgFAEgFAAQgEAAgFgEg");
	this.shape_10.setTransform(68.8,4.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF698").s().p("AgMANQgGgFAAgIQAAgGAGgGQAGgGAGAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_11.setTransform(68.8,4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgNAPQgHgGAAgJQAAgHAHgHQAGgGAHAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIAAQgHAAgGgGg");
	this.shape_12.setTransform(68.8,4.7);

	this.instance_1 = new lib.Path_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.8,3.6,1,1,0,0,0,2.2,1.2);
	this.instance_1.alpha = 0.988;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["Eel_PQ_atlas_"],6)).ss(1,0,0,4).p("ABZAAQgegMg7AGQgqAEgvAL");
	this.shape_13.setTransform(72.2,12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["Eel_PQ_atlas_"],6)).ss(1,0,0,4).p("AhLgOQAaAcAxABQA2ABAWgh");
	this.shape_14.setTransform(69.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,82.2,29.5);


(lib.eel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top layer
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(226,6,1,1,0,0,0,80.4,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:40.7,regY:14,rotation:0.7,x:186.8,y:6.2},0).wait(1).to({rotation:1.4,x:187.3},0).wait(1).to({rotation:2,x:187.8,y:6.3},0).wait(1).to({rotation:2.7,x:188.3},0).wait(1).to({rotation:3.4,x:188.9},0).wait(1).to({rotation:4.1,x:189.4},0).wait(1).to({rotation:3.6,x:189},0).wait(1).to({rotation:3,x:188.6},0).wait(1).to({rotation:2.5,x:188.2},0).wait(1).to({rotation:2,x:187.8},0).wait(1).to({rotation:1.5,x:187.5,y:6.2},0).wait(1).to({rotation:1,x:187.1},0).wait(1).to({rotation:0.5,x:186.7},0).wait(1).to({rotation:0,x:186.3,y:6.1},0).wait(1));

	// cover-up
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666600").s().p("Aj/A8QhdgbAthJQAHgNAQgCIAHgBQBMAiBQAJIABgGQAGhABDgDQAPABANAIQAJAFAGAJIBhAIQALgVAZgBQAygBAqgIQA0AQgEAjIAYADQAMABAFAMQAUA5hAAMQg3ALg2gIQgogGgoACQgIAWgZAEQg8AMg9AAQhcAAhagbg");
	this.shape.setTransform(184.9,3.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15));

	// body
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666600").s().p("AJVGeIiwgbQiggZiZgvQhHgWhEgaQh2gRhtgyQgHgEgEgGIgCgDQi/hdjIhJQhPgbhQgYIgFgEIgDgDQhZgjhdgYQhQgWhRgMIgHgBIgEgBQjtgkjzAoQiOAXiJAqQh2AlhyApQgiAOghgLIgFgEIgLgMIgDgCIgBgDQgCgLAAgLIABgMIABgHQAGgVAOgRQAHgJAKgGIADgEQADgGAHgFIAEgEQAKgIAIgKIAFgCQAJgDAJAAIAHABIAGACQA7gsBAgmQBHgoBLgfQAbgLAYgNQC8hlDWAEQAPAAAKgGQCGADCEAQQBhAMBeAbQDJA4DMArQDNAsC8BZQC5BYDFA9QArAOAvACQC/AKC+gSQDOgUDLguQDKgwDNgjICkgbQDOgkDKAwQAlAJAlAEQA8AFAhArQANASgNAUQgFAJgJAGQgRAegjAKQiyAwi4AJQgZACgYAKIinBIQi5BNjGApQg+ANg9ASQjBA5jDAqQgkAHgkAAQgZAAgZgDgAfZghQAhAAAhgGQgfgHgggFg");
	this.shape_1.setTransform(2.3,5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666600").s().p("AJHFeIiwgPQhBgGhBgJQhdgNhbgUQhHgQhEgTQgggDgggFQhUgNhRgcQgGgDgFgFIgCgDQhRgehTgbIgXgIIiug1IgjgLIgSgFQhHgThHgQIgFgDIgDgCIg3gQQhAgQhCgOQhQgShRgMIgHAAIgEgBIgzgHQhTgJhTgFIhmgFIgGAAIhRACIhIADIgIABIhQAHIguAGQhHAHhGAMIg4ALIhNAOIhbATQgfAFgegMIgEgFIgKgMIgCgDIgBgEQgCgLAAgLIABgGIAAgFIACgFIAAgCIACgGQAHgPAMgLIACgBIABgBQAIgGAJgEIADgDQADgFAHgDIAFgDQAKgGAJgIIAFgBQAIgCAJABIAHACIAFACQA8ghBBgbQAngQAqgOQAhgMAhgKQAbgIAZgKQAcgMAdgJQAbgKAcgIQBBgQBFgIIAIAAQBBgIBDAAIASAAQAOAAALgFQCHADCFANQBPAHBOAPIAjAIQBNAQBNAPQBpATBoAPIAsAFQCkAWCcAwIBLAZQBYAfBYAZQBmAeBpAXIAeAGQAdAEAfAAIBPAAQCXgCCXgRQBIgIBIgLQBOgLBNgPQA4gKA4gLQC2gkC4gbIAsgGIBBgIIBjgLQB+gPB9AIQA8AIA8AMIACABIAkAIQAYAGAYAFIAZAEQAUAEAQAIIAGADQAHAFAHAGIAEAEQALALAHANQAFAKgCAJQgBAIgHAIQgGAIgJAGQgTAdgkAJQgnAKgnAGQiNAciQAKQgaABgXAKQhVAihVAdIgaAIQgcAJgdAIIhEAUQh1Agh4AXQg+AMg+ARIgiAKQixAxizAoIghAHQgbADgcAAIghgBgAeehKQAVAAAkgFIg0gLIgFAQg");
	this.shape_2.setTransform(1.9,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666600").s().p("AI4EeIivgEQhCgChBgEQhcgGhbgMQhIgKhFgNQggAAgggDQhVgHhRgTQgGgCgFgEIgDgCQhSgVhUgUIgYgFQhWgShZgUIgjgJIgTgEIiPgYIgFgCIgDgCIg3gLQhBgOhDgLQhRgOhRgLIgHgBIgEAAIg0gHIimgQIhlgMIgGgBQgogCgogBIhHgDIgIgBQgoABgngBIguAAQhEgDhFADIg3ADQgjAAgnACQgvADgoAAQgdABgagSIgEgFIgIgMIgCgDIgBgEQgCgLABgLIAAgBIABgFIAAgFIACgFIAAgCIADgFQAIgOAOgJIABAAIACgBQAIgEAJgCIADgBQAEgEAGgCIAGgCIAUgIIAEgBQAJgBAIACIAHACIAFACQA9gUBBgSIBSgTIBDgNQAbgFAZgHIA7gPQAbgHAcgGQBBgJBEgEIAIABQBCgGBDAAIASABQAPAAALgFQCHAECGAIQBQAGBOAKIAkAGQBNAMBOAJQBpANBoAGIAsACQCkAICdAgQAnAHAlAJQBZAVBYAPQBnATBpANQAOADAPABQAeACAfgCIBOgDQCXgICYgTQBIgKBHgLQBPgMBOgOQA4gIA5gJQC4gfC5gVIAsgFIBAgEIBkgGQB/gIB9AIIB3AWIACABIAkAJQAYAHAYAFIAYAHQATAEAQAKIADAEIALAMIADADQAIANAEANQADAJgDAIQgDAHgHAIQgHAHgJAFQgWAagjAJQgoAJgoAHQiOAZiQAMQgZABgYAIQhXAghXAWIgaAGIg5ANIhFAQQh2Aah5AVQg/AMg+AQIgiAJQizAwiyArIghAGQgnAHgnAAIgLAAgAdjh1QAUABAkgDQgUgFgegFIgGAMg");
	this.shape_3.setTransform(1.5,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666600").s().p("AA/ECQhGgDhIgGQggABgfAAQhVgBhSgLQgHgBgFgDIgDgCIiogXIgYgDQhYgJhagOIgjgGIgTgDIiQgNIgFgBIgDgBIg4gIIiFgRIikgVIgHAAIgEgBIg0gGQhUgJhSgOQgzgIgxgLIgGgBIhQgJQgjgEgigGIgIgBQgogDgngFIgtgFQhCgMhDgHIg3gFQgggGgmgCQgvgFglgIQgbgGgVgVIgEgFIgHgNIgBgDIgBgEQgCgLABgLIAAgBIABgFIABgFIACgEIAAgCIADgFQAKgMAOgGIACgBIACAAQAIgCAJAAIAEAAQAEgDAGgBIAGAAIAVgEIAFAAIAQADIAHACIAFADQA9gJBCgHIBSgHIBEgGQAbgCAagEIA7gJIA4gIQBCgCBEABIAIABQBCgDBDAAIASABQAOAAAMgEQCIAECHAFQBQADBPAGIAkAEQBOAHBOAEQBqAGBngDIAtgBQCjgGCfAQIBNAIQBZALBZAFQBnAHBpAEIAeABQAdgBAfgDIBOgGQCXgOCYgVICQgWICdgbQA5gGA5gHQC5gYC7gQIAsgDIBBgCQAxABAzgBQB+gCB+AIQA6APA9AKIACABIAkAKIAwANIAXAIQASAHAPALIACAEIAHAOIABADQAGAOAAAMQABAJgFAHQgEAGgHAHQgHAGgKAFQgYAWgkAJQgnAJgoAGQiQAWiRAPQgZACgYAIQhYAbhYAQIgbAEIg6AJIhGAMIjxAnQg/ALg/APIgiAJQi0AvizAsIghAIQgrAIgtACIiuAHQhCADhCABIgUAAQhSAAhSgEgAcniBQATABAkAAQgTgGgcgFIgIAKg");
	this.shape_4.setTransform(1.2,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666600").s().p("AlJEXIgLgCIgEgBIiqgGIgYgCQhZABhbgJIgjgEIgUgBQhHABhJgCIgGgBIgDgBIg5gDIiGgKIilgQIgHAAIgEgBIg0gGQhVgJhSgSQgygLgxgPIgGgCIhOgPQgkgGghgKIgHgCQgpgGgmgJQgWgGgWgFQhAgVhDgRIg1gMQgegOglgJQgvgMghgRQgZgKgSgZIgCgFIgGgNIgBgEIgBgDQgBgLABgLIAAgCIABgEIABgFIACgEIABgCIADgEQALgLAQgEIACABIABgBIATACIAEABIAKgBIAGABIAWABIAEABIAQAFIAHACIAFADICAAGIBUAFIBDACQAcABAagBIA8gDIA5gDQBBAEBFAGIAHABQBDAABDABIASAAQAPABAMgDIEQAEQBRABBQADIAkABQBPADBOgBQBqgBBogMIAsgFQCjgTChAAIBNgBQBaABBZgEIDRgLIAdgCQAegCAegFIBOgKQCYgTCYgYQBIgLBHgNICfgZIBzgKQC6gSC8gLIAtgBQAgAAAgACIBkAFQB/AEB/AIQA6ARA8ALIACAAIAkALIAvAOIAXALQARAIAOAMIABAFIADAQIAAACQADAPgDAMQgBAIgHAHQgFAFgHAFQgIAGgKAEQgbAUgjAHQgoAJgpAFQiQAUiRARQgZADgYAHQhaAXhbAKIgbADIg7AEIhHAIQh5ANh6ATQg/AJg/APIgiAJQi1AtizAvIghAIQgsAJgsAFIiuASQhCAIhCAFQhdAIhbADQhHADhJABIhAAFQg4ADg4AAIg4AAgAbqiFQASACAkABQgSgGgbgEIgJAHg");
	this.shape_5.setTransform(1.1,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666600").s().p("Av0FDQhEAAhEgCQhTgEhTgIIgHAAIgEgBIg0gFQhVgKhSgWQgygOgwgUIgGgBIhOgVQgjgJgggOIgHgDQgpgJglgOIgsgPQg+gfhBgbIg1gTQgbgVglgPQgugTgegYQgWgSgOgdIgCgFIgEgOIgBgDIgBgDQgBgLABgMIAAgBIABgFIACgEIACgEIABgBIADgEQANgKAQgBIADABIABAAIATAGIAFABIAKACIAGACIAXAGIAFACIAPAGIAHADIAEADQA/APBDANIBUARIBEAKQAcAEAbACIA9ADIA5ACICGAVIAIACICGAEIASAAQAOAAANgBQCKACCHgCICjgDIAkgBQBQgCBPgGQBqgIBngUIAtgJQCjggCigRIBOgIQBZgKBbgOIDSggIAdgEIA7gLIBOgOQCYgYCYgbICQgZICggZIBzgHQC8gLC9gGQAXAAAWABQAhABAgAEQAyAGAyAEQB/ALCAAHQA4AVA9AKIACABIAkAMIAvAPIAWAMQAQAKANANIgBAGQgBAIAAAJIgBACQABAQgHAMQgDAHgIAGIgOAJQgJAFgKAEQgdAQgkAHQgnAIgpAFQiSAQiSAUQgZADgYAGQhbAXhcAEIgcAAQgeABgegBIhIACQh6AHh7ARQhAAJg/AOIgiAIQi2Asi0AxIghAJQgrAKgsAIIitAdQhDAMhCAKQhdAPhcALIiQARIhAAJQhVAMhUAGIgMgBIgFAAIisALIgYABQhaAKhcgDIgjgCIgUAAQhHAHhKAEIgGgBIgDAAIgnABIgTAAgAarihIA0AGQgQgHgbgEIgJAFg");
	this.shape_6.setTransform(1.2,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666600").s().p("A1EF6IgHgBIgEAAIg2gFQhVgKhRgaQgygRgvgYIgGgCIhNgaQgjgMgfgRIgIgFQgogLglgTQgVgLgWgKQg8gphAgjQgZgPgagNQgZgcgkgUQgugagbggQgUgZgKghIgBgFIgDgOIgBgDIAAgDQgBgLABgMIAAgCIABgEIACgEIADgEIAAgBIAEgDQAPgIARABIADABIACAAIATAKIAEADIALAEIAHAEIAYALIAEACIAPAIIAHADIAEADQA/AcBDAXQArAOArANQAhALAjAIIA4ALIA+AIIA6AHQBBASBEAOIAIADQBDAEBEACIASABQAOAAAOgBQCJADCJgGQBSgEBRgGIAlgDQBQgGBQgLQBrgPBngbIAsgMQCjguCjghIBQgRQBZgUBbgYQBpgbBqgaIAdgHIA8gOQAmgKAmgHQCYgfCZgcICQgbQBQgOBRgLIB0gDQC+gGC+AAIAuACQAgADAgAGQAyAJAyAHQCAARCAAHQA4AYA9AKIACAAIAkANIAuAQQAMAHAKAHQAOALANAPIgDAHQgDAJgBAJIgDABQgBASgLAMQgFAHgJAEIgQAIIgUAHQgfANgkAHQgoAHgpAEQiTANiSAWIgxAJQhdAVhegDIgcgBIg9gFIhIAAQh8ABh7AQQhBAIg/ANIgjAIQi3Aoi0AzIghAJQgsAMgrAKIitApIiFAgQhdAVhcATIiSAdIhAAOQhVAShVAOIgMACIgFAAIiuAcIgZADQhaAUheADIgjAAIgUABQhIAOhKAIIgGAAIgDABQgeADgdACQhEAFhFAAQhUAAhTgHgAZojPIAzAKQgOgIgagDIgLABg");
	this.shape_7.setTransform(1.6,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666600").s().p("A2oG7QhVgKhRgfQgygTgugdIgGgCIhNggQgmgRgigYQgogPglgXIgqgaQhShHhZg8QgWgigkgaQhkhIAFh5IACgEIACgDIACgEIAFgEQARgHASAEIAFACQAjAZAkAXQB0BLB/A2QBbAkBhAVIA7ALQBCAZBEAUIAHADQBEAHBEACQD0AIDygeQBkgMBigUQBsgWBmglQC4hCC8g5QCFgoCBgxQB3gsB5goQBDgWBFgQQDgg1DhgqQBRgPBRgLQD6AAD6AHQA4ACA2ANQCwArC1AJQA3AcA+AJIABAAIBTAfQAaASAUAbIgEAHQgGAKgDAKIgEABQgGAegeAKQhbAfhiAHQitAMirAfQhsAUhvgOQgfgEgegGIhJgDQjRgJjMAtQjJAsjEA6ImJB2QjFA8jHA4Qi3Azi2AtIgaAFQhbAchfAKIg3AEQhqAehuAPQhmAOhmAAQhUAAhUgJgAZDjxQAKAEAKgBQgNgIgTgDIgSgBIAeAJgAOEk5IABAAIgBgBg");
	this.shape_8.setTransform(2,30);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666600").s().p("Ay2GKQhVAAhVgJIgHAAIgEgBIgagCIgbgEQhHgKhEgXIgdgKQgjgOghgSIgFgCIgagJIgGgBIgugSIgfgMQgWgKgUgMIgYgIIgIgDQgXgJgWgMIgfgQIgMgFIgbgTQg8gog+gjIgbgOIgRgTQgTgRgZgOIgRgKQgngZgXghQgRgXgIgeIgCgFIgCgMIgBgDIAAgEQgBgLABgMIAAgBIACgEIABgDIAAgBIADgEIABgBIADgDIACgBQAPgHAPACIADAAIACAAIACABIAQAIIAFADIALAFIAFADIAVAKIAHAFIAEABIAJAFIAGAEIAEADQA/AcBAAYIBVAeIAMADIA3AQQAaAHAbAGQAfAFAhAFIAPABIAnAGIATACQA4ARA7AOIAJABIAKADIAHACQA8AFA8ACIAPAAIACAAIAaABQCLADCKgGQBTgEBTgHIAMAAIAZgCQBRgHBQgMIALgCQBlgPBhgZIAMgEIAfgIQCigwCkgkIAOgDIA+gOQBdgVBagZIAPgFQBhgbBigZIAfgIIAOgEIAqgLIBSgTIANgCQCSgfCSgcICWgbIAFgBQBOgOBOgLIAFgBIBwgDQC/gEDAABIAFAAQAWAAAXADQAeADAeAFIAGACQAzAJAzAHQB6ARB8AGIAPAHQAxATA1AJIACAAIANAFIACABIAkAMIAgAMIAMAHIAUAQQAJAIAHAJIgCAHIgBACIgCAIIgBAIIgEABIAAAEIgCAHQgEAPgMAJQgDADgGADIgGADIgPAHIgUAHQgiAMgkAGQgkAHgkADIgHABQiWANiVAYIgkAGIgOADQhcARhegEIgQgBIgLgBIgygFIgKABIg+gBIgNABQiAAAh+ARQhBAJhBAOIgMADIgVAFQi6Api3A2IgEABIgdAIIhYAXIiwAsIhkAYIghAIIi6ArIiTAfIgcAGIgmAIQhXAThXAQIgKABIgDABIiKAXIgZADIgEABIgXAEQhOAQhQADIgZABIgeABIgHABIgSAEQhHANhJAIIgHABIgEAAIgjADIgZACQg9AEg+AAIgNAAgAZfjWIAaAJQALADAOgCQgOgHgVgEIgQABg");
	this.shape_9.setTransform(1.6,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666600").s().p("AyWFTQhTgEhVgIIgHgBIgEAAIgagDIgbgEQhGgKhEgUIgdgIQgjgMghgPIgGgCIgZgHIgGgCIgvgOIgfgLQgWgIgVgJIgZgHIgHgCQgXgIgXgJIgfgMIgMgFIgdgPQg9ggg/gbIgcgLIgSgOQgVgOgZgLIgSgIQgogUgbgZQgTgRgMgbIgCgFIgEgNIAAgDIgBgDQgBgMABgMIAAgBIABgEIAAAAIACgDIAAgBIACgEIACgBIACgDIACgCQANgIAPAAIACAAIACAAIACABIAQAFIAFACIALADIAFACIAVAGIAGADIAEABIAKAEIAGAEIAFACQA9ASBBAQIBUAUIAMACIA3AKQAaAFAbADIA+AGIAQAAQATACAUABIATABIBzAVIAJABIAJACIAIABIB3AFIAPABIACAAQANAAANgBQCLADCJgDICkgFIAMAAIAZgBQBQgDBPgFIALgBQBlgKBigUIALgDIAfgHQCjgkCigWIAOgCIA/gIQBcgMBZgRIAQgDIDCgjIAegGIAPgDIAqgIIBSgQIANgDIEjgzICVgbIAFgBQBOgNBNgLIAFgBIBvgGQC9gJC+gEIAFAAQAXAAAXABQAdACAeAEIAHABQAyAHAzAFQB6AMB7AGIAOAFQAyASA1AJIACAAIANAEIACABIAjAMIAhALIAMAHIAVAOQAKAHAIAIIgBAGIAAADIgBAGIAAAIIgBACIgBADIAAAGQgCAPgIAKIgHAHIgGADIgOAIIgTAJQgfAPglAHQgjAGgkAEIgHABQiVAQiUAVQgSADgRAEIgOADQhbAUhdABIgQAAIgLAAQgYAAgZgCIgLABIg8ADIgOAAQh9AGh9AQQhBAKhAAOIgMADIgVAFQi5Asi3A0IgEABIgdAIQgrALgsAIIiwAiIhkATIghAFQheARhbAOIiTAUIgbAFIgmAGQhWANhWAJIgKgBIgDAAIiKAMIgZABIgEAAIgXADQhNAJhQgBIgYgBIgeAAIgHAAIgSADQhHAIhJAEIgGgBIgEABIgiABIgaAAIgWAAQg4AAg5gCgAaZivQALADAKAEQANACASgBQgQgIgXgDIgNADg");
	this.shape_10.setTransform(1.2,21.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666600").s().p("AlyElIgDAAIiJgBIgZAAIgEAAIgXAAQhNADhPgGIgYgCIgdgCIgHAAIgSABQhIADhIAAIgGgCIgEAAIghgBIgZgBQhDgDhDgFQhTgGhUgJIgHgBIgEgBIgagDIgbgDQhGgJhDgRIgegIQgjgKgigMIgFgBIgagGIgGgBIgugMIgggIIgrgNIgZgGIgIgCQgXgFgXgHIgggJIgMgEIgdgLQg/gYhBgUIgcgHIgUgLQgWgKgagHIgSgFQgqgPgegRQgWgNgPgYIgDgGIgFgMIgBgDIAAgEQgBgLAAgLIAAgCIACgEIAAAAIABgDIAAgCIACgEIABgBIACgDIACgCQAMgJAOgCIACgBIACAAIACABQAHAAAJACIAFABIAKAAIAFACIAVACIAGACIAEABIAKADIAHADIAEACIB+AQIBUAKIAMAAIA3AFQAaACAaABIA+ABIAQgCIAmAAIATAAIBzAOIAJABIAKACIAIABIB1ACIAPAAIACAAQAOABAMgCQCKADCIAAICjABIAMAAIAZAAQBPABBPgDIALAAQBkgEBigOIAMgBIAfgFQCjgZChgHIAOgBIA+gDQBcgDBZgJIAPgBIDCgSIAegEIAQgCIAqgGIBRgNIAOgCQCRgVCRgYICUgZIAFgBICagZIAFgBIBugIQC7gPC9gIIAFAAQAWgBAXABQAdAAAeACIAGABQAzAFAyADIDzAMIAPAFQAyAPA1AKIACAAIANADIACABIAkAMIAgAKIANAGIAWAMQAKAGAJAIIABAFIAAADIABAGIACAHIgBACIAAADIABAGQABAOgGAKQgBAEgEAEIgEAFIgNAJIgSAKQgdARgkAIQgkAHgkAFIgHAAIkmAlQgSADgSAEIgOADQhZAWhbAGIgQABIgLABQgYABgZAAIgKABIg8AGIgNABQh8ALh8ATQhAAKhAAPIgMADIgVAGQi3Asi2AyIgEABIgdAHQgsALgsAFIiwAZIhjAMIghADQheALhdAHIiPAJIgbAEIgmADQhWAJhVABIgKgCgAbRiPQAJADAIADQAPACAVgDQgRgHgYgDIgMAFg");
	this.shape_11.setTransform(0.9,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666600").s().p("AlREKIgKgDIgDgBIiJgMIgZgDIgEAAIgXgCQhMgEhOgKIgYgDIgdgEIgHAAIgSgBQhHgChIgFIgGgBIgEgBIgggDIgZgCIiFgOIilgTIgHgBIgEgBIgagCIgagEQhGgJhEgOIgdgGQgkgIgigKIgFgBIgagFIgGgBIgugIIghgGQgXgEgVgFIgZgEIgIgBIgtgIIghgGIgNgDIgegHQhBgQhCgMIgcgEIgWgHQgYgGgagEIgTgDQgrgJgigKQgXgIgTgWIgDgEIgGgNIgCgDIAAgDQgCgMAAgMIACgFIAAAAIABgEIACgFIABgBIABgEIACgBQALgLANgEIACgBIACAAIABAAIARgBIAEAAIAKgCIAGAAQAKAAAJgBIAHABIAEAAIAKADIAHADIAFACIB+gEIBTAAIAMAAIA2gBQAbAAAZgDIA9gFIARgCIAlgDIATgBQA5ACA7AEIAIAAIAKABIAIABQA6gBA6ABIAQAAIACAAQAOABALgDIERAGQBRACBRAEIALABIAZACQBPAFBOABIALAAQBkACBigHIAMgBIAfgCQCjgNChAFIANABIA+AEQBaAFBaAAIAPAAIDBgCIAegBIAQgBIAqgEIBRgKIAPgBQCQgRCRgWICTgXIAFgBICYgZIAFgBIBugMQC5gUC7gMIAFgBIAtgCQAdAAAdABIAHAAQAyADAzAAQB4ACB5AGIAOAEQAzANA1AJIACAAIANAEIACABIAkAKIAhAKIANAFIAWAKIAVAMIADAFIABACIACAGIADAHIABADIAAACIABAFQAEANgCALQgBAFgCAEIgEAFQgEAGgHAFQgIAHgKAEQgaAVgkAHQgjAIglAGIgHABQiRAUiSARQgSACgSAEIgOAEQhZAYhZAMIgPACIgLABIgxAFIgKACIg6AHIgOACQh6ARh7AUQhAAKg/AQIgMADIgVAGIlrBdIgEABIgdAHQgsAJgsADIiwAOQgxAFgxACIgiACQhdAFhdAAQhGAAhIgCIgbACIglACIgyABQg9AAg7gFgAcGiDIANAEQAQABAZgDQgSgGgagEIgKAIg");
	this.shape_12.setTransform(1,17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666600").s().p("AEVEHIgiAAQhdgChcgGQhGgFhHgIIgbAAQgTABgSgBQhWgDhSgNQgGgCgFgDIgCgCIiJgYIgZgEIgEgBIgXgEQhLgKhNgOIgZgFIgcgFIgHgBIgSgCIiPgRIgGgBIgDgCIgfgFIgZgEIiEgUIikgWIgHgBIgEgBIgagCIgagEQhFgJhEgKIgegFQgjgGgjgHIgFgBIgagEIgGAAIgugFIgigEIgsgFIgZgCIgIgBIgugEIghgDIgNgBIgfgDQhDgHhDgEIgdgBIgYgDIg0gDIgTgBQgsgCglgFQgbgDgWgUIgEgEIgHgMIgCgEIAAgDQgCgLAAgMIACgFIAAgBIAAgEIACgFIABgCIABgDIACgCQAJgMAMgGIADgBIABgBIABAAQAIgDAJgBIAEgBQAEgCAGgCIAFgBQAKgCAKgDIAGABIAFgBIAKACIAHACIAFADQA9gNBAgKIBTgKIAMgCIA2gGQAbgDAZgFIA8gKIARgEIAlgFIASgDQA5gDA7ABIAJAAIAKAAIAIAAQA5gCA6AAIAQAAIACAAQAOABALgEQCJAECGAGQBRAEBQAHIALACIAYADQBPAIBNAGIAMABQBjAHBiAAIAMAAIAgAAQCjgCCfAUIANACIA+AJQBaAOBZAIIAPACQBgAJBhAGIAeABIAQAAQAVAAAVgCIBQgHIAQAAQCQgNCQgUICSgVIAGgBICXgaIAFgBIBsgOQC4gZC5gRIAFgBQAWgCAWgBIA7gCIAGAAQAyAAAzgCQB3gEB4AHIAPADQAzALA1AJIACAAIANAEIACABIAkAJIAhAJIAOAFIAWAIQAMAEALAGIAFAFIABABIADAFIAFAHIACADIABACIACAFQAGAMABAMQABAFgCAFIgCAGQgEAGgHAGQgHAHgJAFQgYAXgkAIQgkAJgkAGIgHABQiQAXiRAPQgSABgSAFIgOAEQhXAahYASIgPADIgLACIgwAIIgKACIg6AKIgNADIjzArQg/ALg+AQIgNAEIgVAFQi0Avi0AtIgEABIgdAGQgsAIgtACIivAEIhKABIgYAAgAc6iEIAJADQARABAdgEQgUgFgbgFIgIAKg");
	this.shape_13.setTransform(1.2,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666600").s().p("AI3EoIiwgGQgxgBgwgDIgigDQhdgHhbgNQhIgLhFgNIgagBIglgDQhVgIhSgUQgGgDgFgEIgCgCQhEgThEgRIgZgHIgEAAIgXgGIiXgkIgYgFIgdgHIgHgCIgSgDIiOgaIgFgDIgEgBIgegHIgZgGQhBgOhCgMQhRgPhSgLIgHgBIgEAAIgZgBIgagEIiJgQIgdgDIhHgIIgFgBIgagCIgGgBIgvgCIghgBIgtgCIgaAAIgIAAIguAAIghAAIgNAAIghABQhEgBhFAEIgeACIgYACIg2ADIgUACIhXAFQgcADgagRIgEgFIgJgMIgCgEIgBgDQgCgLABgMIABgFIAAgBIAAgEIACgFIABgCIABgDIABgCQAIgNALgJIACgBIACgBIABAAQAIgFAJgCIAEgCQADgEAGgCIAGgCQAKgEAJgGIAFAAIAGgBIAKABIAHACIAGACQA8gWBBgTQAngLAqgJIANgDIA2gMQAagFAagIQAcgJAegHIASgFIAkgIIATgDQA5gJA7gDIAIAAIAKAAIAIgBQA5gEA6ABIAPAAIACAAQAPAAALgFQCIAECFAJQBQAGBPALIALACIAYAEQBOANBNAKIAMABQBjANBiAHIAMABIAgABQCkAKCdAiIANADIA+APQBZAXBYARIAQADQBfASBhANIAeAEIARABIAqAAIBQgDIAQgBQCPgHCPgSQBJgJBIgMIAHgBQBLgLBKgOIAFgBIBsgRQC2geC3gWIAFgBIAsgFIA6gEIAHgBIBkgGQB3gJB3AHIAOABIBpATIACAAIANADIACABIAkAJIAiAIIANAEIAYAHQANADALAFIAGAEIADACIAEAEIAGAGIAEAEIABABIADAEQAIAMAFANIABALIgCAGQgCAHgHAHQgGAIgKAFQgVAagkAJQgjAIglAHIgHACQiOAZiRAKQgSABgRAGIgOAEQhWAfhXAYIgPAEIgLACIgvALIgKADIg4ANIgOADQh2Abh5AWQg/ALg+ARIgNAEIgVAFQizAxizAqIgEABIgdAGQgkAGglAAIgPAAgAdshvIAFABQATABAggEQgVgGgdgFIgGANg");
	this.shape_14.setTransform(1.5,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666600").s().p("AJHFeIiwgPQhBgGhBgJQhdgNhbgUQhHgQhEgTQgggDgggFQhUgNhRgcQgGgDgFgFIgCgDQhRgehTgbIgXgIIiug1IgjgLIgSgFQhHgThHgQIgFgDIgDgCIg3gQQhAgQhCgOQhQgShRgMIgHAAIgEgBIgzgHQhTgJhTgFIhmgFIgGAAIhRACIhIADIgIABIhQAHIguAGQhHAHhGAMIg4ALIhNAOIhbATQgfAFgegMIgEgFIgKgMIgCgDIgBgEQgCgLAAgLIABgGIAAgFIACgFIAAgCIACgGQAHgPAMgLIACgBIABgBQAIgGAJgEIADgDQADgFAHgDIAFgDQAKgGAJgIIAFgBQAIgCAJABIAHACIAFACQA8ghBBgbQAngQAqgOQAhgMAhgKQAbgIAZgKQAcgMAdgJQAbgKAcgIQBBgQBFgIIAIAAQBBgIBDAAIASAAQAOAAALgFQCHADCFANQBPAHBOAPIAjAIQBNAQBNAPQBpATBoAPIAsAFQCkAWCcAwIBLAZQBYAfBYAZQBmAeBpAXIAeAGQAdAEAfAAIBPAAQCXgCCXgRQBIgIBIgLQBOgLBNgPQA4gKA4gLQC2gkC4gbIAsgGIBBgIIBjgLQB+gPB9AIQA8AIA8AMIACABIAkAIQAYAGAYAFIAZAEQAUAEAQAIIAGADQAHAFAHAGIAEAEQALALAHANQAFAKgCAJQgBAIgHAIQgGAIgJAGQgTAdgkAJQgnAKgnAGQiNAciQAKQgaABgXAKQhVAihVAdIgaAIQgcAJgdAIIhEAUQh1Agh4AXQg+AMg+ARIgiAKQixAxizAoIghAHQgbADgcAAIghgBgAeehKIABAAQAVAAAjgFIg0gLIgFAQg");
	this.shape_15.setTransform(1.9,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

	// tail fin
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(102,51,0,0.753)").s().p("AI+GOQhZgNhQgtQgogWgogVQhAgQg9gZQi/hNi/hJQgegMgfgCQjNgQjKAWQjOAWjHA1IjSA4QhBASgxgkQgSgNgMgUQg2haBVg9QAMgbAUgZQBfh4CMhDQCUhGCRhKQApgVAwgIQBdgOBcgMQDLgDDJAkQDKAmDKA3QDJA2C8BdQC9BdDOArQC9AmCQB8QBGA7gdBOQgHARgTAEQjLAsjOAhQhsARhsAAQhiAAhjgOg");
	this.shape_16.setTransform(-88.9,-7.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,51,0,0.753)").s().p("AJeGBIgogCQg9gFg6gRQgagIgagLIg1gXIgdgMQhAgMg+gVQiUgxiSg0IhegfIgFgCQgbgHgcgEIgCAAQjNgUjJAGIgBAAIg1ABQivAFimAVIglAEQgyAHgwAFIgNABIgyAEIgRABQgyABgkgiQgPgNgJgUIgBgBQgJgTgEgSQgJg/BEgqQAOgYAWgVQAUgSAWgQQBXhEBygoICKgxICgg/QAqgQAwgGIC6gTQCJgBCJAMQBCAGBDAJIAUAEQDBAbDBAmIBAANQBcAVBZAaQBLAWBJAbQAnAOAoANIBNAXQB3AkB8AaQAYAFAXAGQAfAIAYAPQAbAQAVANIAIAGQAvAgAnAoIASAVQALAMAGAOIAFALQARAqgYAzQgHAQgSAFIgIADIiGAmQhYAYhbAUIgLAEIggAMIgbAJQg0AOg6AGQhgAMhiAAIhBgBg");
	this.shape_17.setTransform(-91.7,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(102,51,0,0.753)").s().p("AG1FhQgagFgagJIg2gQIgegKQhBgIg/gRQiWgoiUgvIhggaIgGgBQgagHgcgEIgCAAQjOgZjIgJIgBAAQgbgBgZgEQitgLiegGIgkgCQgyABgsgEIgLgBIgtgHIgQgCQgugHgfglQgMgPgHgUIgBgBQgHgRgBgSQABhABEgjQARgUAYgQQAVgPAXgKQBcguBygaQBGgQBGgSQBSgWBRgYQAsgMAwgDIC8gNQCJAACJAKQBDAEBDAGIAUACQDDATDCAYIBAAIQBdAOBaAQQBLAPBKARIBQASIBOAPQB5AdB8AaIAwALQAgAIATASQAWAVAKAMIAFAIQAdAjATAfIAIATQAFALACANQACAEAAAFQAGApgaAwQgIAQgSAGIgHADIiCAvQhWAfhaAaIgJAFIgZARIgZAMQgvAWg8AHQiAAXiCADIgoABQg9AAg7gLg");
	this.shape_18.setTransform(-94.4,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,51,0,0.753)").s().p("AGnFWQgagCgbgFIg3gLIgfgHQhBgFhAgNQiZgeiWgqIhhgWIgGgBIg3gKIgCAAQjPgdjHgYIgBgBQgagDgYgHQirgdiXgfIgigIQgygFgpgNIgKgEQgSgJgVgIIgPgGQgqgOgZgmQgKgRgFgUIgBgBQgEgUAAgSQANg+BDgdQAUgQAagLQAXgKAYgFQBggZBzgMQBHgIBHgKQBTgNBTgQQAtgIAwgBQBfgDBegEQCKACCKAGICFAGIAUACIGJATIBBAEQBdAGBbAHQBMAHBLAIQAoAFApAEIBOAHQB7AWB9AZIAwALQAhAIAPAXQARAYgBALIACAJQAKAkgBAcIgCAQQAAAKgCAMIgCAJQgDAlgdAtQgKAPgQAHIgHADQg/AehAAcQhUAlhZAeIgGAIQgIAKgMALIgVARQgqAbg/AJQh+AeiCAMIgpAEQgcACgdAAQgfAAgggDg");
	this.shape_19.setTransform(-96.6,17.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(102,51,0,0.753)").s().p("AFJFIIg5gFIgfgEQhCgChBgIQiZgUibgnIhigQIgGgBIg4gJIgCgBQjOghjHgoIgBgBQgagFgXgKQioguiRg6IgggNQgygLglgUIgIgHQgPgOgTgNIgOgJQgmgXgUgrQgHgRgDgVIAAgBQgDgVACgTQAZg7BDgWQAWgOAcgGQAYgFAZAAQBkgDB1ABQBHABBIgDQBVgDBUgIQAugEAxAAQBfACBfgCIEWAHICFACIAUAAQDIABDEgEIBBgBIC6gEQBNgCBLABIBSgCQAogBAnABQB9APB+AZQAYAEAYAGQAiAJAKAaQAMAcgLALIgCAJQgIAmgVAVQgGAGgHAIIgLAUIgFAIQgNAlghArQgKANgPAGIgHAFQg9Aig+AhQhSAshYAjIgEAKQgEAMgKANQgIAMgKAJQglAihBAKQh9AmiCAUIgoAHQg+AJg8ABQgaAAgbgCg");
	this.shape_20.setTransform(-96.2,26.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,51,0,0.753)").s().p("ADeFnIgfgBQhDADhCgFQicgLidghIhkgMIgGgBQgcgDgcgFIgCgBQjPgljFg4IgBgBQgagHgXgNQilhAiKhTIgfgUQgxgPgigeIgHgKQgLgUgRgSIgMgMQgjgfgOguQgFgTgBgVIAAgBQgBgUAFgUQAkg5BCgQQAagKAdgBQAaAAAaAFQBoASB2APQBHAJBKAFQBWAFBWAAQAvAAAxADQBgAGBgABQCLAECMAAQBEAABCgDIAUAAQDKgIDFgSIBBgGQBegJBdgLICagTIBSgKQApgFAogDQB/AIB+AYQAYAEAYAHQAjAIAGAeQAHAggWAKQgCAFgDAFQgbAngoAQQgMAEgMAGIgUASIgIAIQgYAjgjAoQgLANgPAJIgHAFQg7Amg8AmQhQAyhXAnIgBAMQgBAPgHAQQgGANgJALQghAohCAMQh9AtiBAdIgpAJQg9ANg9AJQgbACgbABIgdABIgdgBg");
	this.shape_21.setTransform(-95.1,31.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(102,51,0,0.753)").s().p("AAGGNQifgBifgdIhlgIIgHAAQgcgCgcgGIgCAAQjQgqjEhHIgBgBQgagJgVgSQijhQiEhtIgdgYQgxgXgegnQgEgGgBgGQgJgagOgXIgMgQQgegmgIgxQgDgUABgWIAAgBQACgVAGgUQAvg3BCgKQAcgGAgAEQAbAEAcALQBrAoB3AcQBJASBKAMQBYAOBXAIIBiAJQBgAKBhADQCMAHCMgEQBDgCBEgFIAVgCQDKgRDGggIBCgKQBfgQBegVICbgjIBTgUQApgKAogGQCBABB/AYIAxAKQAkAIABAiQACAlggAIQgEAHgFAFQgtAog9AKQgRACgQAGQgPAGgPAKIgMAHIhHBGQgMAMgOAKIgGAGQg6Asg6ApQhOA5hWAsIABAOQADARgFASQgEAQgIAMQgcAwhFANQh7AziBAmIgpAMQg9ASg+AOQgaAGgcAEQgdAEgeACIghACQg9AFg9AAIgLAAg");
	this.shape_22.setTransform(-93.9,36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,51,0,0.753)").s().p("AlyGjIhtgCQgcgBgcgGQjTgvjEhYQgagLgUgVQizhsiGiaQgwgdgcgwIgDgPQgHgqgVgkQgmhCAMhNQAEgVAIgVQBthkCJBLQC0BiDJAzQFzBeF+gTQBNgEBPgKQDugfDng5QBggXBegeQB5gnB4gqQAqgPAogJQCcgHCYAiQAlAJgDAmQgEApgrAGQgFAIgHAFQg/AqhRADQgrACgoASIgPAGQg8Asg4AyQg4Ayg4AvQhMA+hWAxIAFAPQAGAUgDAVQgMBRhbATQh6A6iBAvQhSAehSAcQg5ASg7AJQh8ATh8AAQh6AAh5gSgARVlMIAAABIABgBIgBAAg");
	this.shape_23.setTransform(-92.7,42.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(102,51,0,0.753)").s().p("AkYF9IgugIIg8gEIgFAAIgrgCIgPgBIgCAAQgTgCgTgEQjEgni4hEIgBAAIgYgKQgPgFgNgIQgKgGgJgIQiXhNh7hnIgegaIgSgOQgjgQgagaIgIgIIgLgOQgEgHgBgGIgGgOIgHgPQgJgTgNgTQgRgZgJgbQgHgUgCgWIAAgCQgBgUACgVQADgVAIgUQAigkAqgQQAcgMAegCQAZgBAbAFQAYAFAaAKQBTAhBaAaQBIAWBLAPIA3ALQA9AKA+AHIBfAMQBkANBjAFQCSALCRgDIAlgBQAygCA0gDIAVgCIAggCQDAgSC9ggIBDgLIARgDQBXgQBVgUIAQgDICOgjIBSgUIAPgEQAhgIAfgGIASgDQB8AAB6AWIAzAKIAHABQAgAIAEAcIAAAIQABAbgSAMIgGAEIgIADQgEAHgFAFQgfAcgnAOQgLAEgMADIgRADIgLADIgJADQgYAIgZAOIgNAIIgVASQgNALgOAKIgHAFIg8AuIg6AtIg5AqQg0Amg3AgIgKAGIgeASIgQAIIABANIABABQADASgFASQgLAngeAWQgaAUgpAIQhfAnhiAgIgnAMIgTAHQg0AQg0ANIg5AOIgCABQgdAGgdAFIggAEIgYADQg4AFg3ACIg6ABQiIAAiFgUg");
	this.shape_24.setTransform(-93.8,37.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,51,0,0.753)").s().p("ABVFvQihgEihgdIgsgJIg7gGIgFAAIgrgDIgPgCIgCAAQgTgBgTgEQjCgki4g3IgBAAIgYgIQgPgFgNgGIgUgLQiZg/iBhTIgfgVIgTgNQgjgLgbgUIgJgHIgNgMIgHgKIgHgMIgIgMQgLgQgOgRQgTgVgLgaQgIgTgDgWIgBgCQgDgUACgUQACgVAHgUQAegkArgSQAagOAcgFQAZgFAaACQAXABAZAGQBSAUBaARQBHAOBKAIQAbAEAbACQA8AFA9ACQAuACAwAFQBjAIBiAEQCQAICQgBIAlAAQAzAAAygCIAVAAIAfgCQC+gKC7gVIBDgIIARgBQBWgKBUgNIARgCICMgVIBSgNIAPgCQAfgGAggDIASgBQB6AFB4AWIAzALIAGABQAgAIAHAaIABAGQAFAagMAMIgFAEIgFADQgCAHgDAEQgUAcgbARIgQAKIgMAFIgJAEIgHAEQgSALgWARIgLAIIgTAUQgMAMgPAJIgHAEIg+AqIg7AoIg6AlQg0Ajg4AdIgLAGIgeARIgPAIIgBAKIAAACQgBAPgHAQQgOAhggAUQgbARgoAHQhfAihhAaIgoAKIgTAFQg0AMgzAJIg4AIIgCABQgdAEgcABIggACIgYABQglACgkAAIgkAAg");
	this.shape_25.setTransform(-94.9,32.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(102,51,0,0.753)").s().p("AEcFQIgfgBIgYAAQg2AAg2gEQiegNiegiIgsgJIg6gJIgFAAIgqgFIgPgBIgCAAQgSgCgTgDQjBggi4grIgBAAIgYgHQgPgDgNgFIgUgJQicgxiFg/IghgQIgUgJQgjgKgegNIgJgGIgOgIIgIgJIgKgIIgKgKIgcgbQgUgTgNgZQgJgSgFgVIAAgCQgEgUAAgTQABgVAHgUQAaglAsgUQAXgQAbgIQAYgHAZgCQAXgCAYACICpANQBHAHBJABIA1ABQA7AAA8gDQAtgBAwACQBiAFBhABQCPAGCOACIAlABQAzABAxgBIAUABIAggBQC8gDC5gJIBCgEIARAAQBWgEBTgGIAQAAICLgJIBRgEIAPgBQAggDAfgBIASAAQB4ALB3AXIAyAKIAHACQAeAIAKAXIACAGQAJAXgGAMIgCAFIgDADQAAAGgCAFQgJAcgPAUIgJALIgIAIIgFAFIgFAGIgfAhIgJAJIgRAVQgLANgQAIIgHAEIg/AjIg9AkIg7AjQg1Aeg5AaIgKAGIgfAPIgPAIIgDAJIgBACQgEANgJANQgSAcghARQgdAOgmAHQhfAchiAUIgnAHIgTAEQg0AJgzAEQgcACgbABIgCABIgTAAIglgBg");
	this.shape_26.setTransform(-95.8,27.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(102,51,0,0.753)").s().p("AGqFMQgbgBgbgCIgCAAIg3gGIgegDIgYgBQg1gDg2gIQiagWicgmIgrgKIg5gLIgFgBIgqgGIgOgBIgCgBIgmgEQi/gci4gfIgBAAIgYgEQgOgDgOgEQgLgCgKgEQidgkiLgqIghgLIgWgGQgkgGgfgLIgKgDIgQgHIgJgFIgLgHIgMgFQgPgJgQgNQgVgQgQgXQgKgRgGgVIAAgBQgGgUAAgTQgBgVAHgTQAWgmAsgWQAVgSAbgLQAWgLAYgFQAXgFAXgCQBOgHBZgCQBGgCBIgFIA1gEQA6gGA6gHQAtgFAwAAQBgABBggCIEbAKIAkABIBiADIAVABIAfABQC6AEC3ACIBCABIARAAICoAEIAQABQBFABBEADQAoADApAAIAPABQAfAAAgACIARABQB1ARB3AWQAZAFAYAHIAHABQAdAIANAUIADAGQAMAVAAAMIABAFIAAAEIABAJQADAcgEAXIgCAPIgDAJIgDAHIgCAGQgHARgPAWIgIAKIgPAUQgKAOgQAHIgHAEIhBAhIg9AgIg9AeQg2Aag5AXIgLAFIgeAPIgQAGIgGAIIAAACQgHALgMALQgXAXghANQgeAMgmAFQheAYhiAOIgnAFIgTACQgvAFguAAIgKAAg");
	this.shape_27.setTransform(-96.5,21.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(102,51,0,0.753)").s().p("AG2FYQgbgDgagFIgCAAIg2gMIgegGIgYgCQg0gGg1gLQiZgfiYgrIgqgLIg4gNIgFgBIgpgHIgPgCIgCAAIglgEQi9gYi4gTIgBAAIgYgDIgcgEIgWgEQifgWiQgVIgjgGIgXgEQgkgCghgGIgLgCIgQgDIgLgEIgNgDIgOgFQgRgGgRgKQgXgOgRgWQgMgNgHgVIAAgBQgHgUgBgSQgCgVAGgTQATgmAsgZQATgUAZgOQAWgNAXgJQAWgJAWgGQBMgUBZgMQBGgJBGgMIA0gJIBygXQAtgJAwgCQBfgCBfgFQCMADCLAIIAlACIBjAGIASABIAfACQC4AMC2ANIBAAFIASABQBUAIBTAJIAPACQBFAIBDAKQAoAGAoAFIAPACIA/AHIARADIDoAtQAZAFAYAGIAHACQAcAIAPARIAFAGQAQASAGAMIADAFIADAFIADAJQAPAcAIAaIAEAQIACALIAAAJIAAAGQgBAUgLAYIgHALIgNAXQgJAPgRAGIgHAEIhCAcIg/AbIg9AaQg4AXg5ATIgLAFIgfANIgQAGIgHAHIgBABQgLAJgOAJQgaASgjAKQgfAJgkAFQhfAShiAIIgnACIgSACIgWAAQgpAAgogEg");
	this.shape_28.setTransform(-95.4,14.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(102,51,0,0.753)").s().p("AIzFuIgRgBQg0gCgygKQgbgFgagIIgBAAIg1gSIgegJIgYgDQg0gJg0gOQiWgoiVgvIgpgMIg3gPIgFgCIgpgIIgOgCIgCAAIglgEQi8gUi4gGIgBAAIgXgCIgdgBIgWgCQihgIiWgBIgkgBIgYAAIhHAAIgMAAIgSgBIgMgBIgPgCIgPgBQgTgDgSgIQgYgLgUgVQgNgOgIgUIgBgCQgIgTgCgQQgCgVAFgTQAPgmAtgbQARgWAXgRQAVgQAWgNQAVgMAWgKQBKgiBZgVQBFgQBGgTIAzgOIBwghQArgNAwgEIC8gNQCKABCLAKIAkADIBiAIIAUADIAcADQC3ATCzAYIBBAJIARADQBUANBRARIAQADQBEAOBCARQAnAKApAJIAPADIA+ANIARAEQBxAcB0AXQAYAFAYAGIAHACQAbAIATAPIAFAFQAUAQAMAMIAFAGIAGAFIAHAIQAZAcAUAbIALATQAEAGADAHIADAJIACAKQAFAXgJAaIgEAMQgEAMgHAMQgJAQgRAGIgIADIhDAYIhAAXIg/AVQg4ASg5ARIgMAEIgfANIgPAFIgKAFIgCACIgeANQgeAMgkAHQghAHgjADQhfAOhhACIgoAAg");
	this.shape_29.setTransform(-93.6,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_17}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232,-48.6,460.8,96.4);


(lib.EelSM_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// American Eel
	this.instance = new lib.eel("synched",2);
	this.instance.parent = this;
	this.instance.setTransform(-48.8,426.7,1.202,1.202,8.5,0,0,211.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.8,regY:18.9,scaleX:1.2,scaleY:1.2,rotation:6,x:-289.1,y:410.4,startPosition:3},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:3.5,x:-270.7,y:407.8,startPosition:4},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:0,skewX:1,skewY:1.1,x:-251.6,y:406.9,startPosition:5},0).wait(1).to({scaleX:1.19,scaleY:1.19,skewX:-1.5,skewY:-1.4,x:-231.2,y:407.5,startPosition:6},0).wait(1).to({scaleX:1.19,scaleY:1.19,skewX:-4,skewY:-3.9,x:-209.6,y:409.5,startPosition:7},0).wait(1).to({scaleX:1.18,scaleY:1.18,skewX:-6.5,skewY:-6.4,x:-186.8,y:413.2,startPosition:8},0).wait(1).to({scaleX:1.18,scaleY:1.18,skewX:-9,skewY:-8.8,x:-163,y:418.8,startPosition:9},0).wait(1).to({scaleX:1.18,scaleY:1.18,skewX:-11.5,skewY:-11.3,x:-138.3,y:426.3,startPosition:10},0).wait(1).to({scaleX:1.17,scaleY:1.17,skewX:-14,skewY:-13.8,x:-112.6,y:435.6,startPosition:11},0).wait(1).to({scaleX:1.17,scaleY:1.17,skewX:-10.7,skewY:-10.5,x:-95,y:422.9,startPosition:12},0).wait(1).to({scaleX:1.17,scaleY:1.17,skewX:-7.4,skewY:-7.2,x:-76.9,y:412.1,startPosition:13},0).wait(1).to({scaleX:1.17,scaleY:1.17,skewX:-4.1,skewY:-3.9,x:-58.3,y:403.4,startPosition:14},0).wait(1).to({scaleX:1.16,scaleY:1.16,skewX:-0.8,skewY:-0.5,x:-39.4,y:396.3,startPosition:0},0).wait(1).to({scaleX:1.16,scaleY:1.16,skewX:2.5,skewY:2.8,x:-19.9,y:390,startPosition:1},0).wait(1).to({scaleX:1.16,scaleY:1.16,skewX:5.8,skewY:6.1,x:0.4,y:383.7,startPosition:2},0).wait(1).to({scaleX:1.15,scaleY:1.15,skewX:9.1,skewY:9.4,x:21.8,y:376.3,startPosition:3},0).wait(1).to({scaleX:1.15,scaleY:1.15,skewX:12.4,skewY:12.7,x:44.6,y:367.5,startPosition:4},0).wait(1).to({scaleX:1.15,scaleY:1.15,skewX:15.6,skewY:16,x:68.5,y:357,startPosition:5},0).wait(1).to({scaleX:1.14,scaleY:1.14,skewX:18.9,skewY:19.3,x:93.6,y:344.9,startPosition:6},0).wait(1).to({scaleX:1.14,scaleY:1.14,skewX:15.6,skewY:16,x:113.2,y:358.9,startPosition:7},0).wait(1).to({scaleX:1.14,scaleY:1.14,skewX:12.2,skewY:12.6,x:132.7,y:371,startPosition:8},0).wait(1).to({scaleX:1.13,scaleY:1.13,skewX:8.8,skewY:9.2,x:152.9,y:380.8,startPosition:9},0).wait(1).to({scaleX:1.13,scaleY:1.13,skewX:5.4,skewY:5.9,x:173.1,y:388.2,startPosition:10},0).wait(1).to({scaleX:1.13,scaleY:1.13,skewX:2,skewY:2.5,x:193.2,y:393.4,startPosition:11},0).wait(1).to({scaleX:1.12,scaleY:1.12,skewX:-1.4,skewY:-0.8,x:213.7,y:397.4,startPosition:12},0).wait(1).to({scaleX:1.12,scaleY:1.12,skewX:-4.7,skewY:-4.2,x:235,y:401.4,startPosition:13},0).wait(1).to({scaleX:1.12,scaleY:1.12,skewX:-8.1,skewY:-7.6,x:258,y:407,startPosition:14},0).wait(1).to({scaleX:1.12,scaleY:1.12,skewX:-11.5,skewY:-10.9,x:282.7,y:415.2,startPosition:0},0).wait(1).to({scaleX:1.11,scaleY:1.11,skewX:-9.7,skewY:-9.1,x:302.5,y:405.4,startPosition:1},0).wait(1).to({scaleX:1.11,scaleY:1.11,skewX:-7.9,skewY:-7.3,x:323.4,y:398.1,startPosition:2},0).wait(1).to({scaleX:1.11,scaleY:1.11,skewX:-6.2,skewY:-5.5,x:343.7,y:393.4,startPosition:3},0).wait(1).to({scaleX:1.1,scaleY:1.1,skewX:-4.4,skewY:-3.7,x:363.7,y:391.2,startPosition:4},0).wait(1).to({scaleX:1.1,scaleY:1.1,skewX:-2.6,skewY:-1.9,x:383.4,y:391,startPosition:5},0).wait(1).to({scaleX:1.1,scaleY:1.1,skewX:-0.8,skewY:-0.1,x:402.9,y:392,startPosition:6},0).wait(1).to({scaleX:1.09,scaleY:1.09,skewX:1,skewY:1.7,x:422.4,y:393.6,startPosition:7},0).wait(1).to({scaleX:1.09,scaleY:1.09,skewX:2.8,skewY:3.5,x:442.1,y:395.2,startPosition:8},0).wait(1).to({scaleX:1.09,scaleY:1.09,skewX:4.5,skewY:5.3,x:462.4,y:396.1,startPosition:9},0).wait(1).to({scaleX:1.08,scaleY:1.08,skewX:6.3,skewY:7.1,x:483.3,startPosition:10},0).wait(1).to({scaleX:1.08,scaleY:1.08,skewX:8.1,skewY:8.9,x:505,y:394.6,startPosition:11},0).wait(1).to({scaleX:1.08,scaleY:1.08,skewX:9.9,skewY:10.7,x:527.2,y:391.6,startPosition:12},0).wait(1).to({scaleX:1.07,scaleY:1.07,skewX:11.7,skewY:12.5,x:549.9,y:387,startPosition:13},0).wait(1).to({scaleX:1.07,scaleY:1.07,skewX:13.5,skewY:14.3,x:573,y:380.7,startPosition:14},0).wait(1).to({scaleX:1.07,scaleY:1.07,skewX:10.3,skewY:11.2,x:593.4,y:392.5,startPosition:0},0).wait(1).to({scaleX:1.06,scaleY:1.06,skewX:7.1,skewY:8,x:614.3,y:402.4,startPosition:1},0).wait(1).to({scaleX:1.06,scaleY:1.06,skewX:3.9,skewY:4.8,x:635.5,y:410.3,startPosition:2},0).wait(1).to({scaleX:1.06,scaleY:1.06,skewX:0.7,skewY:1.6,x:656.8,y:415.9,startPosition:3},0).wait(1).to({scaleX:1.06,scaleY:1.06,skewX:-2.5,skewY:-1.5,x:678.1,y:419.5,startPosition:4},0).wait(1).to({scaleX:1.05,scaleY:1.05,skewX:-5.7,skewY:-4.7,x:699.2,y:421.6,startPosition:5},0).wait(1).to({scaleX:1.05,scaleY:1.05,skewX:-8.9,skewY:-7.9,x:720.7,y:422.7,startPosition:6},0).wait(1).to({scaleX:1.05,scaleY:1.05,skewX:-12.1,skewY:-11.1,x:742.8,y:423.8,startPosition:7},0).wait(1).to({scaleX:1.04,scaleY:1.04,skewX:-15.3,skewY:-14.2,x:766.4,y:426,startPosition:8},0).wait(1).to({scaleX:1.04,scaleY:1.04,skewX:-18.5,skewY:-17.4,x:791.5,y:430.6,startPosition:9},0).wait(1).to({scaleX:1.04,scaleY:1.04,skewX:-14.9,skewY:-13.8,x:808.2,y:414.1,startPosition:10},0).wait(1).to({scaleX:1.03,scaleY:1.03,skewX:-11.3,skewY:-10.2,x:826.1,y:400.8,startPosition:11},0).wait(1).to({scaleX:1.03,scaleY:1.03,skewX:-7.7,skewY:-6.5,x:844.8,y:389.7,startPosition:12},0).wait(1).to({scaleX:1.03,scaleY:1.03,skewX:-4.1,skewY:-2.9,x:864.1,y:380.4,startPosition:13},0).wait(1).to({scaleX:1.02,scaleY:1.02,skewX:-0.5,skewY:0.7,x:883.9,y:372.3,startPosition:14},0).wait(1).to({scaleX:1.02,scaleY:1.02,skewX:3.1,skewY:4.3,x:904.3,y:365.2,startPosition:0},0).wait(1).to({scaleX:1.02,scaleY:1.02,skewX:6.7,skewY:8,x:925.3,y:359.1,startPosition:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:10.3,skewY:11.6,x:946.8,y:353.8,startPosition:2},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:13.9,skewY:15.2,x:969,y:349.3,startPosition:3},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewX:17.5,skewY:18.8,x:992.4,y:346,startPosition:4},0).wait(1).to({scaleX:1,scaleY:1,skewX:21.1,skewY:22.5,x:1014.5,y:342.6,startPosition:5},0).wait(1).to({scaleX:1,scaleY:1,skewX:19.5,skewY:20.8,x:1033.1,y:357.7,startPosition:6},0).wait(1).to({scaleX:1,scaleY:1,skewX:17.9,skewY:19.2,x:1052.5,y:371.6,startPosition:7},0).wait(1).to({scaleX:1,scaleY:1,skewX:16.3,skewY:17.6,x:1072.6,y:383.9,startPosition:8},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewX:14.6,skewY:15.9,x:1093.2,y:394.7,startPosition:9},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewX:13,skewY:14.3,x:1114.4,y:403.5,startPosition:10},0).wait(1).to({scaleX:0.99,scaleY:0.99,skewX:11.4,skewY:12.7,x:1135.9,y:410.3,startPosition:11},0).wait(1).to({scaleX:0.98,scaleY:0.98,skewX:9.7,skewY:11,x:1157.5,y:415,startPosition:12},0).wait(1).to({scaleX:0.98,scaleY:0.98,skewX:8.1,skewY:9.4,x:1179.2,y:417.6,startPosition:13},0).wait(1).to({scaleX:0.98,scaleY:0.98,skewX:6.5,skewY:7.8,x:1200.4,y:418,startPosition:14},0).wait(1).to({scaleX:0.97,scaleY:0.97,skewX:4.8,skewY:6.1,x:1221.3,y:416.5,startPosition:0},0).wait(1).to({scaleX:0.97,scaleY:0.97,skewX:3.2,skewY:4.5,x:1241.6,y:413.1,startPosition:1},0).wait(1).to({scaleX:0.97,scaleY:0.97,skewX:1.6,skewY:2.9,x:1261.3,y:408.1,startPosition:2},0).wait(1).to({scaleX:0.96,scaleY:0.96,skewX:-0.1,skewY:1.2,x:1280.2,y:401.8,startPosition:3},0).wait(1).to({scaleX:0.96,scaleY:0.96,skewX:-1.7,skewY:-0.4,x:1298.5,y:394.1,startPosition:4},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-577.1,329.8,548.8,122.4);


// stage content:



(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Amer Eel
	this.instance = new lib.EelSM_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(460,823.5,1,1,-18.9,0,0,474.4,416.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({regY:416.5,rotation:0,skewX:-36,skewY:144,x:386.1,y:449.4},0).to({_off:true},79).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,1506.4,544.9,124.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;