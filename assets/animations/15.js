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
		{src:"assets/animations/images/Dragonfly_PQ_atlas_.png", id:"Dragonfly_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Dragonfly_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Dragonfly_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Path_28_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFDE").s().p("AidONQjglYhrmxQhMkzgKlDQgDhmAEhZIAFhGQhCjpAsjnQAWh0AjhFQCskoCgCWQCBB3BxGNQBTEcBDGKQAiDFARCMQFJNdAiHWQAKCTgUBaQgKAtgMAPQnDkJkXmvg");
	this.shape.setTransform(60.9,160.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.8,321.2);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFDE").s().p("AkDM+QiUl/gOm+QgKk8A6k+QAShkAXhXIAThDQgPjxBbjaQAuhtAwg8QDkj9B+C0QBlCQAeGcQAVEngQGPQgIDIgMCLQCMOQhBHTQgUCSgmBTQgUAqgPANQl/lii5ngg");
	this.shape.setTransform(42.4,166.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.7,332.9);


(lib.Path_23_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFDE").s().p("AhkUkQlwjdjmoqQilmMhPoJQgokGgHi2QhAoUCbhYQAwgbBAAUQAgAKAXAQQCrAgCuEcQBXCOA1CIQErOhH8LCQCfDcCgCsQBQBWAxAqQk+CBkRAAQkdAAjpiNg");
	this.shape.setTransform(100.9,145.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.8,291.5);


(lib.Path_23_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3EFDE").s().p("AktURQk5klhupOQhOmkAfoQQAQkIAgi0QAxoVCpg2QA1gQA6AhQAeARASAUQChBDBvE6QA4CdAVCQQBjPLFdMdQBuD5B5DJQA8BlAnAzQiuAeiaAAQnMAAkmkSg");
	this.shape.setTransform(78.1,157.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.3,314.4);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FDEBF3","#F7EAF3","#FAF1F2","#FFFEF0","#FBFBF0","#F0F3F2","#DDE5F4","#DCE4F4","#FEE9DF"],[0,0.114,0.231,0.353,0.478,0.596,0.71,0.714,1],5.7,-9.2,-5.7,9.2).s().p("Ag3BcQgcgRgDgnQgDglAYgnQAXgmAlgPQAigPAcARQAbARADAoQADAkgYAnQgXAmglAPQgPAHgOAAQgSAAgOgJg");
	this.shape.setTransform(8.8,10.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.6,20.3);


(lib.wing1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 26
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,4,true).p("ApR07QCqCvBcC1QBVCmADCKIAFAAAugyvQArgbAQgFQAIgDAcAAQBoAABqBTQBVBDAyBVAuM2QIAjAAQFVCcD6KJQARgXArgyQAYgbAPgjAvcwKQAlgQAHgCQAFgCAOAAQAhAAB2BNQAWAPAWAPQBDANBeAOQB9ATAQACAriu1QAEABAEABQAiAYAhAYQBrBwBYDQQAtBqBFBqQBdCNAhA+QAXArBCCXQAlBXA7A/QACABACACQBFBMCjDJQCmDMBWBbQAuAvBwBfQBhBRAoA0QAkAtBQBSQBBBDAsApAr2qiQgpg+hjh5QhLhcgjhGAvIphQAig1AfgMQANgFA0AAQB2AABrBqQBHBGAZBNICMCaQBjBvAtBSQAoBJBUCXQArBNAWAoQAlA1AlBGQAWAnAoA4IgqAAQg6A3AAB6QAABAACALQAEARAUAtQABADABADQABAAABgBQABAAACgCQADgCACAAAkaprQABAFACAEQBQDRBMEVQAnCKAtCpAlcr8QgcBTgIBbQgFA0gEBjAkRj+QAlgQAXggQAQgXAEgYAoVm8IAQASQAOArAAAsQAAAzgdBXQgNAlgKAXQgKAYgIAIAoriNQBLAbBOA1QA4AmBMA/QAqAjBQBGQAyApA2BMQAHANAEAKAtVh3QAPgTA9gRQAzgOAaAAQBGAABLAcAuWmFQCEgxA0gZQBPgoAlguArdF3QgShhBKgpQAxgbBTAAQBCAACXBSQCWBTBGAAQAYAAAUgXQAXgYgHghApvIcQgHgTgBgGQgCgFAAgKQAAggAtgNQAggKAuAAQDeAAEDEkQAZAcAWAdQACADACACQBhB3BOCEQAXgPAZAAQBHAACJAtQAlAMAkAOQACgDACgDABcHgQAJANALAPQA5BPAkAmQE2E8B4BtQBoBdBYA+QALAFAHAFQASAMA8AmQAeARAcALABkHgIgIAAAAeipQABCNASCDQALBKAUCFAEsLaQglAKgKAfQgDALAAAoQAAAnApBKQAVAlAcAwAj6NSQAJgKAIgKQAfglAfg2QAwhSAFgHAlnQmQBUgfCOhGQCIhEA5gNACbTvQgUgrAAgwQAAg4AjgpQANgQAOgJQACACABADAinSiQAMgBALgDQAigHAWAAQBmAAAoAPQArAPA6A6AinSiQBdAqB5AgQA9ARA8AMQgIgNgFgNQAHAIAIAJAFUUjQBag0BgidQAwASAuAVQAQAHBhAXQA/AQAfAOQAyAjAuAZQACABACACQAaAQAWAQQADAAACAAIABgHQAOAGAOAFAg6SSIAAjcACoUJQDEApC1AAQCqAAEEgeQAOAKALAKAFKWRQhzg7gvhNAj6NSQAFACAGACApWLfQBUALBtApQA6AWBhApAmFQFQBAhVASgXQAZghAggmAmJQLQACgDACgDQAOARAQAQAmJQBQACACACACAl6QuQAJgEAKgEQBGBGB6A2AjQSmQAUAAAVgE");
	this.shape.setTransform(100.2,146.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// back
	this.instance = new lib.Path_23_2();
	this.instance.parent = this;
	this.instance.setTransform(101.1,145.9,1,1,-0.1,0,0,100.9,145.8);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0,203.9,291.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,4,true).p("ABJ5pQCLBhAtDaQAcCPgIEDQgXKngmEVQgCAPACA5QACBHAICKQAFBTAGBsQAcGvgIBHQgMBzgCBLQgBBhAQBAQAKAnADAuQACAZAAAxQAAAWAKAdQACAHADAJQAPAqACASAjk0VIAiAAQBBAVBEB3QA9BxAHBYQAAAIABAHQAEgHAEgIAkrwqQAQBqAcAoQAgAvBHAAQBKAAAVgIQAjgOAegyQAKBdAkBcQAWA7AZAkAiU2zQCVANBnCdQBoCegqChAga4yQCrBwAgD9QAWCtgtFIQgLBRgVCaQgBAKgCAKQgSCNAABeQgCDxB1BdAlPsDQAgBjBUAlQA9AbBsAAQAkAAA0ABQApgIAWgyQAPAXAPAOAhAlqQAvhLAhgYQAkgYBGAAAmTkgQAPgYAcgMQAbgOAgAAQA8AABGA4QAnAfA+A4QAxAiAiA/QAiA6AHAvIAFAAAhIlcQAEgHAEgHQAtA2AbBHQAoBhAVCUQAKBHARDVQAJBnAbCgQAWCIADBlQAEBZAlCMQAoCUADA4IgOAAAl4oOQDLAhBtCDAjGglQAJgKAIgJQAfgjAogeQAvgiAKgJAi1g4QAhAhAaAvQAEAGADAHQAGgHAFgFAmOh2QAagGAZAAQBiAABEBEAlvBXQBBAwAzBFQAZgoA/hHQAegiASgWQAZAxAWBJQAPAuAXBSQAVBAAXBIQAFgEAFgEADdAgQAlgiAQgNQAMgIALgJAgXEVQA4hvAtgqABeJ7QAFgMAEgKAAOGnQAaBJAgBRQAMAfAKAbQAqBsAIAXAD9KJQAjg4AfgmQAigrAHgLAB3FxQA0geA3gaAi3FBQAGAAAGABAi3FBQAaA3ATA/QASA+AMBCQAOBUAEBaQAKACAKADAloE+QAjAAAdABQASAaAQAlQAUAqANAsQAWBJAFBNQAEA0AFAyQA6AJAtAMQAEBigKBqQgCAVAaAtQAUAiAlAvQAaAmAYAfQAWglAHgLIAEAAAlcG5QBPARAeAIQAEABAGABQA2AOAkAOAhwI9QACgEACgCQArhGAfgfQAegZASgSAkBLHQAiAEAeAFQAJBYAPBSQAcCdAlA4QAhAzA+BwQAJguAbgwQAEgGAEgFQA6BQASAoQANAfArBNQASAhAXAoQA3BiAMAqQADAFACAEQAGAMACAKAkoE/QBGAAArACAiCP4QAGgbAHgXQADgIALgdAgJTyQABACABACQA6BnA/A4QAaAXAYAWQAfAeAZAbQAmAqARAdAD2TJQAPhJA7hWQBAhVATgfAhIPzQBAhaAsh4QAjhsAXg6ACkXJQAAgEAAgDQABg8ABgMQAAgGABgHQABgIABgHAEZYjQABgCABgCQAUhSAthpQAuhmAKgcAloEEQAiALAeAwAj7DMQAnA0AdBB");
	this.shape.setTransform(41.9,168);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Path_28();
	this.instance.parent = this;
	this.instance.setTransform(42.4,166.4,1,1,0,0,0,42.4,166.4);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.7,333.3);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,4,true).p("Apg1LQCVAYCHBxQCrCOgGCaAlat3QAEgHACgHAp9ymQBCAeBOBLQBsBmAhBSQADAHADAHQAlBWBHBWQArA1AoAhQAYATAWANAqttiQAMANALAJQA0ApBWgFQBbgFAYgJQAmgPAZgyAod3GQDfBgBnDfQBKChAkE4QAJBOARCSAnL4MQDFBSByDLQBLCFA9D0QCfKCAfEHQABAOASA2QAUA7AoBtQAFAOgoAsAkTlMQAlhLAkgZQAlgZBWgFQABAKABAKQARCGAZBYQBADjCoBQAkTlMQBGAwA3BAQBMBZBDCKQAdBCBRDIQAnBgBNCVQBBB+AgBfQAdBVBVCBQBZCIAUA1IgSABAlNgkQAdgjAngfQAwgjALgKAkZk/QADgHADgGArci9QAIgmBGgjQA6gdAlgCQBLgFBlAxQA4AaBbAwQBFAdA+A5QA5A0AWAsIAGgBArJqzQBCBTBrAdQBTAVCCgHQAtgCBDgEQAvgKANgwAlcgRQAHgKAIgJQAxAdAuArQAGAFAGAGQAsAtAvBDQAfAqAzBMQArA7AxBBQA0BEA9BKQAXAcAUAZQADgMACgJArShKQAagHBEgEQAigCAngBQB4gHBmA7ArXAiQBQAZB5A4QB/A7A1AnQATgmA5hIQAbgiARgWQAGgHADgFAq9DcQARgPAEgDQADgCAIAAQApAABLBVQA1gMAJgBQA3gDBDA4QAcAXAfAiQAjAnAdAoQBGAJAvALAqqE/QAZgJBOgTQAPgDALgDQAVAXAXAeQABABAAABQAxA/AfAxQABgBAAABQCdAGALACQAGAAAHABQAuBEAcBIQATAxAUAvQAkBSApBLQBMCTA8AyQA3AuBrBlQgBgsAVgvQADgGADgFQAFgLAFgIAn9FSQB2gNAWAAQBVgEA2gBQAHgBAHAAAqgFiQAdgCB/gNQADgBAEAAAgvELQAohsApgrAlaDVQA+AvA2A8QAuAxApA6QAoA6AgA9QApBOAeBVQALABAMACAq9nSQEAARCqB1ACYFXQASgKARgJQAogVgFAKQAugCAHAnQATBoBEC5QBeD+AdBMQAdBLATBGQAZBcAlA7QAXAlARArQAJAXAOAvQAGAUAUAaQAFAHAGAIQAeAnAIAQADDJUQBRBiARAWABePCQA2hZAWh0QAOhoALg5ABePCQAiAfA6AqQAtAhAlAcQBeBHAhAlQAZAdBKBFQgCgIgBgHAC1U7QgIgvgJg1QgRhggFghADySuQACACABACQBmBdBdAwQAnAUAiATQgPg4gCgMQgCgGAAgGQAeAdAoAlQBfBYAaAnQAEAEAEAEQAGAFAEAGQADAEACAFAhKIoQACgDABgDQAihGAdgfQAbgZAUgTQAFgEAEgEAn/PFQCOgqCCgnQAOgFAOgDQBDgUBEgQAkzKvQAVArAYAyQAaAyAZAuQA6BmA5BNQCFC1CQBnQBKA1BOAhQBOAhBuAWQA+AMB4AWAkzKvQCWAHAYADQBKAEA7AIQAdBcARBkQAEAVAsAoAmsHEQAXAjAOAcQAdA6A3ByAqHG3QA7AGCgAHApaKiQArABDIAKQAcABAYABAi6S/QADABADACQAHg0AGgfQAPhKAVgpAjEUyQAJhBAHgvQD7CVBkA3QDIBtBRATAAZPLQgBgaADgWQABgIAGgcAKrW6QAAgDABgCQABhAAShQAIBVmQAvAaAmAYQA7AlAcAaADAWMQgFgngGgqAICVsQAAgDgBgD");
	this.shape.setTransform(72.9,158.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.Path_23_0();
	this.instance.parent = this;
	this.instance.setTransform(78.1,157.2,1,1,0,0,0,78,157.2);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,0,157.7,314.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,0,4,true).p("ApNz9IAjAAQBKAVBgB1QBZBvAaBWQADAHACAHQADgGACgIAob2YQChAOCOCZQCOCbgKCeApmwXQAoBpAmAoQAsAtBJAAQBPAAAUgIQAigMAWgzQAdBbA7BcQAjA5AhAkQAUAWATANApNr1QA3BhBgAlQBGAaBwAAQAmAAA6ABQAogIAMgwAm34VQDOBvBYD4QA7CpAWFCQAGBQALCWAlY5LQCmBgBdDWQA9CNAsD9QB4KaAUEQQAAAPAOA3QASBGAlCIQAXBRAeBqQB5GnAHBGQALBwAOBKQATBfAfBAQASAlAOAuQAHAYALAwQAEAWAQAcQADhRAZhmQAbhkAFgbAjaljQAihKAfgYQAggYBKAAQAAAKABAKQAMCLATBcQAwDtCNBaAo0kGQAHgmAlgTQAagNAhAAQA/AABWA3QAvAfBMA2QA7AiAzA+QAwA5ARAtIAFAAApDoFQDbAhCOCBQA7A1AtBFQA/BfA0CSQAZBFBADRQAeBlA+CdQA1CFAZBjQAWBZBFCJQBJCRAQA3IgPAAAjglWQADgGADgHAkhglQAHgJAHgJQAagiAigeQAqghAJgKAoWhwQAjgKAjAAQBnAABWBDQAqAgAmAvQAEAGAFAGQAFgHADgFAnVEFQAVgGALgCQAIgCAKAAQAwAAA4A9QBJABAuACQAGAAAGAAAoCAuQB7A4BiBiQASgnAzhGQAXghAPgWQAkAxAoBHQAYAsAqBRQAkA/AoBHQAqBHAyBQQAUAfAQAaQBDBqANAWAnBE3QBMAAA6ABQAYAaAZAlQAdApAXArQAmBIAWBLQAPAzARAxQA+AJAyALQAKADAKACAgnEPQAmhsAkgqAklDIQA0AzAtBAQAmA1AiA+QAgA9AaBBQAfhFAZgfQAYgXASgSQAEgFAEgEAClAfQAfgiAOgLQALgJAJgJACCFpQAwgcAzgaAFKJ8QAYg2AYgmQAbgqAFgLAG9SyQgBhIAshUQAxhTANggADRRyQARgjAEgLIAFAAAC4TaQABgtATgwQACgFADgGQBOBPAcAoQAVAeA8BMQAaAgAhAnQBOBgAWAqQADAEAEAEQAIAMAFAKAhFIxQACgCABgDQAhBSAXBYQAXBhAMBnQACAXAlArQAwhZAWh1QAPhqALg5QACgMADgKAmPGlQCEAaAqAJQAFACAGABQA8AOAoANABAPgQAcAhAxAvQAmAkAeAeAAFPlQAAgaADgWQABgJAGgdAC4TaQABACACACQBVBlBOA3QAgAWAdAWQAnAdAgAbQAxApAYAdAh6LCQAcBXAhBPQA9CbAyA3QAuAyBYBuAj0KzQBCAHA4AIAGcWsQgBgDAAgDQgLg7gCgLQgBgHgBgGQgBgIAAgIAIrYBQAEAHAFAIQAZAqAGASAIrYGQAAgDAAgC");
	this.shape.setTransform(61.6,161.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// bkgr
	this.instance = new lib.Path_28_0();
	this.instance.parent = this;
	this.instance.setTransform(61.6,160.9,1,1,0,0,0,60.9,160.6);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1,125,324.4);


(lib.dragonfly_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wing front-l
	this.instance = new lib.wing1_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70,26.1,1,1,0,0,0,201.2,289.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:100.4,regY:145.8,scaleX:0.87,scaleY:0.32,skewX:-24.2,skewY:-31.5,x:-23,y:30.2},0).wait(1).to({scaleX:0.73,scaleY:0.37,skewX:131.6,skewY:-62.9,x:76.3,y:127},0).wait(1).to({scaleX:0.87,scaleY:0.32,skewX:-28.8,skewY:-36.1,x:-22.3,y:37.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.3,skewX:0,skewY:0,x:-52.6,y:-99.8},0).wait(1));

	// wing front- r
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(87,15.1,1,1,0,0,0,123.5,322.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:61.5,regY:161.2,scaleX:1.18,scaleY:0.36,skewX:-32.4,skewY:-45,x:4.3,y:18.4},0).wait(1).to({scaleX:1.37,scaleY:0.29,skewX:115.2,skewY:-89.9,x:128.8,y:119.4},0).wait(1).to({scaleX:1.18,scaleY:0.36,skewX:-37.9,skewY:-50.5,x:5,y:26.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11,skewX:0,skewY:0,x:-4.7,y:-131.3},0).wait(1));

	// body
	this.instance_2 = new lib.Path();
	this.instance_2.parent = this;
	this.instance_2.setTransform(203.9,55.6,1,1,0,0,0,8.8,10.1);
	this.instance_2.alpha = 0.641;

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#782200","#81300C","#B27A48","#D5AF74","#EBD18F","#F3DD99","#F0D07D","#ECC05B","#E9B340","#E7AA2D","#E5A522","#E5A31E"],[0,0.031,0.2,0.337,0.443,0.498,0.557,0.643,0.729,0.816,0.906,1],17.9,-34.5,-20,36.8).s().p("AjHFwQiChFAGiTQAFh1BditQBxjVBpgiQApgOAzAOQAjAKA6AfQA7AfAbAYQAoAiANAsQAfBphxDUQhSCYhrBOQhMA5hKAAQgwAAgvgZg");
	this.shape.setTransform(210.8,79);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("ACFDFQg5gCh0gJQiKgKh5gOQgJgDgXABQgVABgOgGQgRgGgMgRQgLgPgBgRQgFgnABhFQABgmADglIADgcIAFgdQAFgWAFgLIAFgKQAFgHAKgDIAZgBQAVAFAFADIAJAEIBEgGQA/gGBBgBQCFgHB+AZQCBAZAjAsQBCBBAaA3QANAbgDAnQgBAXgGAvIgBhGQgBglgOgXQgagvhChBQgegnh9gZQh9gYiCAGQg/AChAAFIhGAHIgMgEIgEgCQgEgCgRgEIgTAAQABAAgGAJQgDAHgGAWIgEAbIgDAcQgEAjgBAnQACBbADANQARA+BJgRQB4AOCKALQB0AJA5ABQBdADA4AAQAUgDAuAAQAngEARgZQgPAdgoAIQguAFgUAEQgsAEgyAAIg5gBgAGVCUIAAAAgAGVCUIAAAAg");
	this.shape_1.setTransform(127.8,41.2,0.999,0.999,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4BD000","#94EB00","#9EE10C","#00CC26"],[0.008,0.298,0.78,1],-3.1,-21.3,1.8,20.9).s().p("AAqC2QhwgHiJgOIhzgNQgNADgPgCQgfgEgNgbQgRgiAIiCQAIiHAZgEQAVgDAUAHQAJAEAGAEIBOgHQBggIBXABQETADBWBYQBWBZAKA4QADASgCAeQgEAhACARQADApi9AAQhJAAhmgGg");
	this.shape_2.setTransform(128,41.4,0.999,0.999,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAWQgfgOgJgkIB3AvQgaAKgWAAQgQAAgPgHg");
	this.shape_3.setTransform(81.8,101.1,0.999,0.999,64.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAEQgYgegHggIBNB1QghgigNgVg");
	this.shape_4.setTransform(63.6,102.9,0.999,0.999,64.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAWQgqgtANgpIBsCBIgEAAQgmAAglgrg");
	this.shape_5.setTransform(46,99.5,0.999,0.999,64.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHALQgXgHgTgSIBjAbQgOACgMAAQgSAAgNgEg");
	this.shape_6.setTransform(20.4,95.4,0.999,0.999,64.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHALQgWgHgUgSIBiAbQgNACgMAAQgSAAgNgEg");
	this.shape_7.setTransform(-3,91.9,0.999,0.999,64.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AlKIMQgUghEHnhQD+nQAtgtQAlglAugHQAwgHgNArQgSA8joGuQjsG3gtAtQg9A9gQAKQgMAHgKAAQgSAAgMgVg");
	this.shape_8.setTransform(36.3,85,0.999,0.999,64.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag8AGIB5gNQgvAPgsAAQgPAAgPgCg");
	this.shape_9.setTransform(32.4,99.8,0.998,0.998,-16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAEQgPgDgjgGIBlAKQgJABgLAAQgOAAgRgCg");
	this.shape_10.setTransform(17.1,94.5,0.998,0.998,-16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhQgMIChATQgfAGgcAAQg5AAgtgZg");
	this.shape_11.setTransform(2.4,87.5,0.998,0.998,-16.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAASQgygJhCgdIDpAbQghAOgpAAQgVAAgWgDg");
	this.shape_12.setTransform(-8,81.1,0.998,0.998,-16.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhnBeQghgdgegjIgZgdQgigegWglQgshLA/gbQA+gbA4BuQAKAUAcBBQAUAuAKAKQASATBYgsQBUgnAHAUQAHAYg3AnQgZARgEAGQgIAKARADQAYAEBRgTQBEgRAGAPQAGASglATQgmAUhFAOQgTAEghAEIgRACQhHAAhbhRg");
	this.shape_13.setTransform(73.2,134,0.998,0.998,0,-110.8,69.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AEyE7IgsgMQgwgbidh7Qidh8hdhTQg+g5gshbQgthcAdgSQAagQBSBdQA9BFAlA6QAJAMDACaQDACYAdAzQAfA2glAAIgBAAg");
	this.shape_14.setTransform(10.3,97.6,0.998,0.998,-16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMAXQgWgWgHgpIBTBPQgJACgHAAQgXAAgPgSg");
	this.shape_15.setTransform(101.8,109.8,0.999,0.999,74.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEADQgSgmgGgkIA5CPQgZgvgIgWg");
	this.shape_16.setTransform(84.4,110.5,0.999,0.999,74.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPARQgPgfAIgoIAwBtQgagIgPgeg");
	this.shape_17.setTransform(68.3,109.1,0.999,0.999,74.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEAKQgQgLgOgZIBFA1QgYgDgPgOg");
	this.shape_18.setTransform(50,105,0.999,0.999,74.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiiGAQgPgoB2lhQBwlYAcgiQAZgeAgAEQAiAEgIAqQgOBHheEoQhkFBgdAiQgpAygMAGQgFADgFAAQgPAAgLgeg");
	this.shape_19.setTransform(78.3,98.1,0.999,0.999,74.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("ABGgXQhFAphGAGg");
	this.shape_20.setTransform(95.5,105.9,0.998,0.998,-17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA7gQQgWAOgiAHQgUAFgqAHg");
	this.shape_21.setTransform(80.1,103.9,0.998,0.998,-17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhBACICDgNQgoAXgnAAQgaAAgagKg");
	this.shape_22.setTransform(66.8,99.4,0.998,0.998,-17.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABchWQghBMgvAiQgLAJhcA2g");
	this.shape_23.setTransform(50.8,87.5,0.998,0.998,-17.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag3A6QiGg3ATALQAUANgLgBQgMgBgTgLQg6ghAcgvQAbguBZA9QARAMAyAnQAkAZAKAEQAVAHAkhEQAjhCAPAPQARAPgRA0QgIAVAAAGQgBALANgFQASgGArguQAlgoAKAJQANALgPAeQgPAdgmAmQgPAPgOANQgUARgoAAQg0AAhVgdg");
	this.shape_24.setTransform(132.2,130.7,0.997,0.997,0,-140.4,39.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABzCoQh+hHhnhMQhbhBhAhJQhKhUARgjQAOgeAgAXIAeAZQAVARAQAHQAZAMCtByQCzB2A6AfQBEAkAbBIQANAkAAAcIgEABQg7AAiYhWg");
	this.shape_25.setTransform(73.4,110.7,0.998,0.998,-17.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglANIBLgmQgPAmgWAJQgFAEgHAAQgNAAgNgNg");
	this.shape_26.setTransform(140.1,113.5,1,1,83.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAIQgYgHgQgOIBTAbQgegCgNgEg");
	this.shape_27.setTransform(126.3,119,1,1,83.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDASQgUgEgKgfIBDAQQgRATgRAAIgDAAg");
	this.shape_28.setTransform(110.3,123.2,1,1,83.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgcgVIA5ArQgfgNgageg");
	this.shape_29.setTransform(78.1,132.6,1,1,83.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAyGgQgXgKg8lZQg8lPAEgyQADgtATggQAVggAKAiQASA8A1EdQA7EygEAzQgFBLgEAQQgGAYgPAAQgFAAgFgCg");
	this.shape_30.setTransform(110,113.7,1,1,83.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAlgOQgiAZgnAEg");
	this.shape_31.setTransform(109.2,137.6,1,1,-5.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAggKQgMAJgSAEIghAIg");
	this.shape_32.setTransform(99.6,134.5,1,1,-5.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgkACIBJgJQgUAPgWAAQgPAAgQgGg");
	this.shape_33.setTransform(91.3,130,1,1,-5.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("ABCgmQgOAkgoASQgcAPgxAIg");
	this.shape_34.setTransform(82.7,122.2,1,1,-5.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQAmQhWgiAMAHQAOAHgHAAQgHAAgMgIQgngTAJgeQAKgdA9AmQAgAUAsAdQANAEAMgrQAKgqALAJQAMAKgDAhQgCAZAKgFQAJgEATgcQAPgaAIAFQAJAHgEATQgFASgRAZIgNASQgKALgYAAQgeAAgzgRg");
	this.shape_35.setTransform(131,157.3,0.997,0.997,0,-137.9,42.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ABZBqQhVgshFgwQg9gngwguQg3g1AFgWQAEgTAVAOIAvAfQAQAHB0BHQB5BJAmATQAsAWAaAtQANAXAEASIgDAAQgjAAhjg0g");
	this.shape_36.setTransform(95.8,137.7,1,1,-5.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#202020").s().p("AinCVQgTgDgIgDQgOgFgGgPQABgMADgGQAEgDgBgBIAKgOQALgSAHgUQAKgdgIgcQgIgigegaIgNgRQgIgMABgOQADgOALgJQAHgGAOgFQASgEAXgBIAlgBQAcAABOAEQAxAEAnAGQAhAGAwAKQhaAAhQgGQhMgEgdAAQgsgEgdAKQgoANAjAfQASATAIAMQANATAEASQAGAegJAmQgIAXgNAUIgJAOQgQADAJAGQAJAGAZADQBEAIBDgZQBGgXBJggQBIgfASgQQAZgWgbgvQgRgeghghQApAcAVAbQAQATAEAWQAFAcgVAWQgbAVhFAfQhDAdhPAaQhCAUgwAAQgQAAgOgDg");
	this.shape_37.setTransform(-197.1,80.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-1.3,-15.8,1.9,12.7).s().p("AjBCEQgNgGABgIQABgEAMgRQAegsgCgzQgCgdgqgxQgQgSgBgKQgDgOASgMQAbgTCsAMQBTAHBRAJQA4AtAOAoQATAyhCAbQhSAohNAbQhfAig9AAQggAAgWgKg");
	this.shape_38.setTransform(-197.1,80.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#202020").s().p("AiHCTQgmgMAGgXIAFgMIACgEQAMgSAGgeQAOg7gjguQgPgSgGgMQgLgWAMgVQAOgQAVgDQAMgCAWABQApAAAzAGQApAFAiAHQAcAGAoAMQhRgEhBgHQg6gGgfAAIgeACQgRACgGAJQgHAHAIAPIATAcQAoA2gQBDQgHAhgNATQABACgGAIQgCAIAVAFQAqAMBIgaQCzhKAGgeQAGgfgQgiQgFgJgigyQAvAuAEAFQAYAigIAuQgDAPgXAQQgOAKgjASQhKAogwARQgzATgogBQgSAAgRgEg");
	this.shape_39.setTransform(-222.2,82.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-1.3,-15.5,1.9,13).s().p("AiWCDQgLgGABgJQABgEAJgRQAXgqgDgzQgCgegjgxQgZgkAWgSQAWgSCJAQQBCAIBBALQAtAuANAoQAQAzg0AZQhBAmg8AZQhIAfgvAAQgdAAgTgLg");
	this.shape_40.setTransform(-222,82.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhFBgIAZgkQASgagCgbQgCgYgcgYQgcgXgBgDIgBgRQACgJAOAAQAWgBA6gIIASACIAUAdQAXAkAMAkQAOApgIAWQgHATgQgCQgDgBhJAQQgfAHgOAAQgPAAADgHg");
	this.shape_41.setTransform(-238.8,82.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,0,0,4).p("AD3ghQgMgDhfAGQh9AIgPABQhAAChNALQhbAMgQARQgOAPCpgBQCWAAAxgGQAegDA/gaQA/gcgPgFg");
	this.shape_42.setTransform(-264.7,80.3,1,1.334);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("Aj4AVQAQgRBbgMQBNgLBAgCICMgJQBfgGAMADQAPAFg/AcQg/AageADQgxAGiWAAIgKAAQifAAAOgOg");
	this.shape_43.setTransform(-264.7,80.3,1,1.334);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AieA7QhHgKgCgYQgDgYBDgWQBCgYBggLQBegLBHAJQBGAKACAXQADAYhCAXQhDAYhgALQgyAGgsAAQgmAAgggEg");
	this.shape_44.setTransform(-256.7,84,1,1.334);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#202020").s().p("AkDB9QgBAAgThGQgQgtgEgbQgIg0AZgqQAogVA4AAIBYACQAjABAlgFIAugHQA/gJArABQAsABAyAMQgvgDgvAEQgfADhIAKIguAIQgnAFgkgBIhYgCQg3AAgcAPQgRAeAGAvQAEAZAQAtIATBDIAIAMQAMAJAggIQBngKA8gKQBLgGBegpQAygVA7ggQAagKAGgWQAEgUgLgVQgQgggpgpQAwAhAVAhQASAUgGAgQgHAgggANQgZAZhWAeQhQAchfATQhjAVhAAAIgDAAQhFAAAAgZg");
	this.shape_45.setTransform(-162.4,75.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-1.2,-14.5,1.7,11.8).s().p("Aj9ByQgMgxgMgjQgRgsACgqQADgmAOgLQAWgSBbACQBwADAkgHQBegTBPACQAoABAUAFQA4AsAOAoQATA0hCAaIhDAiQg8Adg6APQguAMhbAMIiIAPIgEAAQgXAAgKgdg");
	this.shape_46.setTransform(-162.4,75.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#202020").s().p("AjzCRQgEACgKgVQgLgZgFgcQgPgugHgbQgMg1AQgrQAOgYAegHQASgEAggBIBbACQAkABAmgEIAvgIQBBgJAsAAQAuABAzAMQgxgCgwAEQgiADhHAKQhFANg4gCQg8gCgfABQg5ABgTAXQgNAjAKAwQAGAZAQAwQAGAeAIATQAGANACAAQgGAGBIgIQBDgHBjgPQAxgTCIgEQAxgBATgHQAbgJgBgZQAJgygRgvQgOglgkgsQAuAoARAjQAYAwgKA9QgLAegYAOQgUARg6gFQglgFgzAIIheATQh6ARgsAFQghAEgTAAQgYAAgEgGg");
	this.shape_47.setTransform(-117.2,73.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-1.4,-14.4,1.5,12).s().p("Aj9ByQgLgxgNgjQgRgsADgqQACgmAOgLQAXgSBbACQBwADAjgHQBfgTBPACQAoABAUAFQA0AqARBLQATBUhDAbQgJAEg6gDQg+gEg2APQguAMhcAMIiIAPIgEAAQgXAAgKgdg");
	this.shape_48.setTransform(-117.1,73.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#202020").s().p("AjzCRQgDACgLgWQgLgYgFgdQgQgtgGgcQgMg1AQgrQAOgYAegGQASgEAggBIBbACQA6ABA/gMQBBgKAsABQAuABAzAMQgxgDgwAEQggADhKALQhEANg4gCQg8gCgfABQg5AAgTAXQgNAkAKAwQAGAZAQAvQAGAeAIAUQAGANACAAQgGAGBIgJQBDgHBjgPQAxgTCIgDQAxgBATgHQAbgKgBgYQAJgzgRguQgOglgkgsQAuAoARAjQAYAwgKA9QgMAdgXAPQgMALgZACQgOABgbgCQglgFgzAIIheATQh6ARgsAFQggAEgTAAQgZAAgEgGg");
	this.shape_49.setTransform(-73.4,68.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-1.4,-14.5,1.5,12).s().p("Aj9ByQgLgygNgiQgRgsADgqQACgmAOgLQAXgSBbACQBwACAjgHQBfgSBPACQAoABAUAFQA0AqARBLQATBUhDAbQgKAEg5gDQg+gEg2APQguAMhcAMIiIAPIgEAAQgXAAgKgdg");
	this.shape_50.setTransform(-73.3,68.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#202020").s().p("ADgIhQgNgCgqgKQiygzi3hSQiahGADgIQgJALgcgoQgegsgahFQhGi/Aji/IAMhtQAHg/AKgvQARg1A2gfQAkgUA+gNQBNgMBZAGIBsAHQA2gCAzA+IAnAwQAXAYAYAHQARAIAnAHQAlAHARAIQAeARAGAFQAPALAOAYQgdgkg6gLQhIgNgVgNQgWgGgWgXIgmguQgxg9g2ACQgDABhogIQhZgGhLAMQg3ALglAVQgyAcgMArQgMA9gQCbIgKBqQgEA8AHAlQALBNAeBdQAQAtAJATQANAeAMAMQAVASAOAJQgHAGCbBGQC2BRCwAzQAwAUA3gMQAqgJA4ggQA3ggAZgeQAKgMgBgeQgDgsABgGIgCkfQgEhqgihRQgshngLg9QANAyAVAsQAMAaAXArQAnBPAFBtIACEfIACAxQABAfgPAXQgbAig7AiQg1AegxAOQgQAFgTAAQgLAAgMgCg");
	this.shape_51.setTransform(111.6,67.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],0,-56.4,0,53.6).s().p("AhGG1QkNhpgrg7QgbgkgghyQgjh6AEhFQADhDANh5QAOiDAKgnQAKgnAxgeQAtgbA+gLQA0gIDMBYQCwBOBVA1QArAbA3AcQAnAWAYAiQAYAjAUEOQAKCKAHCiQAEAjhXA0QhUAyg6AEIgFAAQhDAAj2hig");
	this.shape_52.setTransform(111.6,68.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#202020").s().p("Ai1CcQgIgGgDgGQgBgFgBAAQgCgBgEgRQgEgUgEgaQgBgFgPg6QgNgsAIgjQAGgbAHgPQALgXAVgJQATgIAYABIAmADQAvAFA4gLQA+gJAcgBQAqAAAoANQgmgEgrAGQg2AJgjAFQg4ANgzgHIglgDQgVgBgNAHQgYAIgKA0QgHAdAMApQAQA4AAAJQAEAaAEASQAEAQABgCIAGAJQAKAHAbgIQAlgHBjgfQBjgeA3gKQAIgCAbgBQARgBgCgGQAFgNABgaQgCg8gFgaQgJgogZghQAhAdAOAoQAMAiACA5IgBATQgCAOgFANQgJASgWABQggABgCABQg0AJhkAfQhfAfgqAIIgbADIgEABQgMAAgJgGg");
	this.shape_53.setTransform(-36.8,65.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-1.5,-15.3,1.7,13.5).s().p("AjAByQgRhWgEgKQgQgqAKgvQAJgnAQgNQAWgSAyAFQBEAHAngHQBegTA4ACQAdACAIAFQAoAgAKBbQAJBXgaADIgjACQgZADg7APIh7AmQhRAYgoAFIgEAAQgWAAgIgog");
	this.shape_54.setTransform(-36.8,65.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#202020").s().p("ABDE1QhvhZhIgwQgZgGhMAQIieAkQg2ALgpAEQgbACgagQQgWgOgRgXQg6hSgMhzQgEg+AagpQAOgXAagNQAZgMAaADQA/AQAYADQAqAGAhgHQA5gJA3gPIApgNIAqgLQA4gOAxgaQAqgWBmg9QBmgzBagEQBsgJBiAzQBmA2AhBaQAaBQgZBWQgNArgbA6Qg1BthSBTQgqApgmAXQgxAcg1AHQA0gLAugfQAhgYApgrQBMhVAzhqQAbg4AMgqQAYhSgYhHQgehThggyQhdgxhmAJQhWAEhjAxQhlA8gqAWQg1Abg5APIgqALIgpANQg3AQg7AJQgfAHgygHQgfgEg3gOQgsgHgcArQgaAoAHAzQALBuA2BMQAYApA0ABQAPAABNgNQA8gMBigYQBMgQAlAHQBNA0BrBcQBbBEBhAHIgEAAQhiAAhfhAg");
	this.shape_55.setTransform(40.7,62.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-2.9,-33.4,5.2,39.2).s().p("AAcELIhdhOQgtgjgOAAQgxAChqAZQh6AdhDAHQg8AHguhUQgnhFgJhSQgIhPAmgpQAogtBJAbQBDAYBwgaQA9gOBggdQAngJAygaIBag1QB8hIBggLQCMgPBrBDQBsBEAMBwQAGA3gdBRQgcBSg1BPQh8C9iDAPIgQABQhXAAiFhmg");
	this.shape_56.setTransform(40.8,63);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#202020").s().p("AjCArQgUgCgTgGIgggNQAQgBATAAIAmACQAVAHBZgHQBUgHAAgDQAAACBUgSQBWgUAWgIQAigLAmgDQghAVghALQgWAJhXASQhWAUgBgCQACAEhXAHQgtADgcAAQgdAAgLgDg");
	this.shape_57.setTransform(257.5,93.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#202020").s().p("AA8HXQg9gBgygYQgxgVgtgqQghgegmgxQhIhagbhBQgbg8gRg7IgNgsQgEgRgEgfQgFgcABgcQAAgLADgQQghAYgOAGQg0AYgygTQgrgfgOg/QgHgbgEhVQACgoAEgSQAHghAUgWQAVgUAigGQAPgCAsAAIBtAKQBCAGAkACQCbAHCIgYQA/gUBJAJQAqAFBJAWQA8AVArAYQA1AeAoAqQgrgng2gaQgqgUg9gSQhcgVgUgCQhDgIhBAUQiMAZiagIQglgBhDgGQhNgIgfgCQglgBgRADQgeAEgPAQQgQAQgGAdQgEAUgBAiQABBGAJAmQANA6AjAWQAlARAugWQAcgNApghIAAADIAFgHIABgBIANAOIgGAGIgMAJQABAuAGAsQAFAxACgDIAMArQARA6AbA7QAbA/BFBYQAlAvAgAeQArAoAuATQAsAXA7AAQA0AAA4gQQA6gSAogXQAugaAfgmIA+g/IAAAAIABAAIAAAAIABgCIABgBIABAAIgBAAIAsg1QAog0AYgtQBHiBgDhqQgDhthThdQBcBWAIB0QAIByhICCQgcAygmAyIguA3IhCBCQgdAlgzAeQgvAcg3APQg5ARg2AAIgDAAgAGbEKIADAEIAHAGIAAAAQAAgDgGgHIgEAAg");
	this.shape_58.setTransform(190.4,86.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#4BD000","#47CE04","#3CC710","#29BD25","#0EAE41","#00A651","#00A94E","#00BC38","#00C82A","#00CC26"],[0.008,0.118,0.231,0.349,0.463,0.514,0.537,0.698,0.859,1],-33.5,18.6,33.5,-48.4).s().p("Ag/GxQg5gdg2g8Qgeghg3hMQg6hRgniLQgqiVApgpQg5A2g6ALQh0AVgCjbQgBhgAqgaQAigVBiAIQC2AQAtABQCmACChgmIAmAEQAwAGAuANQCUAmBPBQQCnClh/D7QglBKg5BGIgfAkIh3B3Qh/BFhnAAQhDAAg6geg");
	this.shape_59.setTransform(190.6,86);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#202020").s().p("Ai7BEQgUABgTgEIgigKQAUgEA1gCQAWAEBXgQQBTgQgBgEQABACBSgaQBTgdAUgLQAigPAlgGQggAZgfAOQgUAKhVAcQhSAdgBgCQABAEhVAQQhHANgdAAIgNgBg");
	this.shape_60.setTransform(263.5,84.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]}).wait(5));

	// wing back-l
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.1,10.1,1,1,0,0,0,157.2,313.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:77.7,regY:157.2,scaleX:0.85,scaleY:0.77,skewX:40.6,skewY:8.3,x:92,y:-91.4},0).wait(1).to({scaleX:0.69,scaleY:0.55,skewX:81.1,skewY:16.6,x:111.8,y:-18.8},0).wait(1).to({scaleX:0.81,scaleY:0.77,skewX:42.2,skewY:7.1,x:97.3,y:-87.2},0).wait(1).to({scaleX:0.92,scaleY:1,skewX:3.3,skewY:-2.4,x:15.7,y:-142.2},0).wait(1));

	// wing back-r
	this.instance_4 = new lib.Symbol4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(88.1,7.1,1,1,0,0,0,71,329.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:42.4,regY:166.4,scaleX:0.89,scaleY:0.71,skewX:51.2,skewY:27.4,x:156.4,y:-77.5},0).wait(1).to({scaleX:0.77,scaleY:0.43,skewX:102.4,skewY:54.8,x:143.3,y:4.1},0).wait(1).to({scaleX:0.89,scaleY:0.71,skewX:47.8,skewY:24,x:151.3,y:-81.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.8,skewX:0,skewY:0,x:40.4,y:-151.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290.7,-322.6,580.4,491.9);


// stage content:



(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// dragonfly
	this.instance = new lib.dragonfly_all("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-120,129.7,0.36,0.36,-0.1,0,0,73.5,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.3,regY:-46.9,rotation:1.5,x:-107.2,y:125.1,startPosition:1},0).wait(1).to({rotation:3.3,x:-67.7,y:138.5,startPosition:2},0).wait(1).to({rotation:5.1,x:-28.3,y:151.9,startPosition:3},0).wait(1).to({rotation:6.9,x:11.2,y:165.3,startPosition:4},0).wait(1).to({rotation:8.7,x:50.7,y:178.8,startPosition:0},0).wait(1).to({rotation:10.5,x:90.3,y:192.3,startPosition:1},0).wait(1).to({rotation:12.3,x:129.9,y:205.8,startPosition:2},0).wait(1).to({rotation:14.1,x:169.4,y:219.3,startPosition:3},0).wait(1).to({rotation:15.9,x:209,y:232.8,startPosition:4},0).wait(1).to({rotation:7.6,x:216.4,y:236,startPosition:0},0).wait(1).to({rotation:-0.6,x:224.3,y:239.7,startPosition:1},0).wait(1).to({rotation:-0.6,y:239,startPosition:2},0).wait(1).to({y:238.2,startPosition:3},0).wait(1).to({y:237.5,startPosition:4},0).wait(1).to({x:223.6,y:239.2,startPosition:0},0).wait(1).to({x:222.9,y:240.8,startPosition:1},0).wait(1).to({x:222.1,y:242.4,startPosition:2},0).wait(1).to({x:223.4,y:240,startPosition:3},0).wait(1).to({x:224.7,y:237.5,startPosition:4},0).wait(1).to({x:226,y:235.1,startPosition:0},0).wait(1).to({x:223.9,y:235.5,startPosition:1},0).wait(1).to({x:221.7,y:235.9,startPosition:2},0).wait(1).to({x:219.6,y:236.3,startPosition:3},0).wait(1).to({x:217.4,y:236.7,startPosition:4},0).wait(1).to({x:218.4,y:234.9,startPosition:0},0).wait(1).to({x:219.4,y:233.1,startPosition:1},0).wait(1).to({x:220.4,y:231.3,startPosition:2},0).wait(1).to({x:221.4,y:233.4,startPosition:3},0).wait(1).to({x:222.3,y:235.5,startPosition:4},0).wait(1).to({x:223.3,y:237.6,startPosition:0},0).wait(1).to({x:224.3,y:239.7,startPosition:1},0).wait(1).to({rotation:0.1,x:241.5,y:278.2,startPosition:2},0).wait(1).to({rotation:0.8,x:258.8,y:316.8,startPosition:3},0).wait(1).to({rotation:1.5,x:276,y:355.4,startPosition:4},0).wait(1).to({rotation:2.2,x:293.2,y:394,startPosition:0},0).wait(1).to({rotation:2.9,x:310.4,y:432.6,startPosition:1},0).wait(1).to({rotation:3.6,x:327.6,y:471.1,startPosition:2},0).wait(1).to({rotation:4.3,x:344.9,y:509.7,startPosition:3},0).wait(1).to({rotation:5,x:362.2,y:548.4,startPosition:4},0).wait(1).to({rotation:5.7,x:379.4,y:586.9,startPosition:0},0).wait(1).to({rotation:6.5,x:396.7,y:625.6,startPosition:1},0).wait(1).to({rotation:7.2,x:413.9,y:664.1,startPosition:2},0).wait(1).to({rotation:3.5,x:412.6,y:665.3,startPosition:3},0).wait(1).to({rotation:-0.2,x:411.4,y:666.6,startPosition:4},0).wait(1).to({rotation:-0.2,y:666.2,startPosition:0},0).wait(1).to({y:665.8,startPosition:1},0).wait(1).to({y:665.4,startPosition:2},0).wait(1).to({y:665,startPosition:3},0).wait(1).to({y:666.3,startPosition:4},0).wait(1).to({y:667.5,startPosition:0},0).wait(1).to({y:668.7,startPosition:1},0).wait(1).to({x:412.5,startPosition:2},0).wait(1).to({x:413.7,y:668.6,startPosition:3},0).wait(1).to({x:414.8,y:668.5,startPosition:4},0).wait(1).to({x:414.6,y:667.6,startPosition:0},0).wait(1).to({x:414.3,y:666.6,startPosition:1},0).wait(1).to({x:414,y:665.7,startPosition:2},0).wait(1).to({x:413.7,y:664.7,startPosition:3},0).wait(1).to({x:412.5,y:665.1,startPosition:4},0).wait(1).to({x:411.3,y:665.4,startPosition:0},0).wait(1).to({x:410.1,y:665.7,startPosition:1},0).wait(1).to({x:408.9,y:666,startPosition:2},0).wait(1).to({x:407.7,y:666.3,startPosition:3},0).wait(1).to({x:408.9,y:666.6,startPosition:4},0).wait(1).to({x:410.2,y:667,startPosition:0},0).wait(1).to({x:411.4,y:667.3,startPosition:1},0).wait(1).to({x:461.8,y:616.9,startPosition:2},0).wait(1).to({x:512.3,y:566.4,startPosition:3},0).wait(1).to({x:562.7,y:516,startPosition:4},0).wait(1).to({x:613.2,y:465.5,startPosition:0},0).wait(1).to({x:663.6,y:415,startPosition:1},0).wait(1).to({x:714.1,y:364.6,startPosition:2},0).wait(1).to({x:764.5,y:314.1,startPosition:3},0).wait(1).to({x:815,y:263.7,startPosition:4},0).wait(1).to({x:865.4,y:213.2,startPosition:0},0).wait(1).to({x:915.8,y:162.7,startPosition:1},0).wait(1).to({x:925.5,y:160.3,startPosition:2},0).wait(1).to({x:935.1,y:157.9,startPosition:3},0).wait(1).to({x:944.7,y:155.5,startPosition:4},0).wait(1).to({x:954.3,y:153.1,startPosition:0},0).wait(1).to({x:963.9,y:150.7,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.3,524.3,209.5,177);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;