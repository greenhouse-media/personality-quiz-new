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
		{src:"assets/animations/images/Bosmina_PQ_atlas_.png", id:"Bosmina_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Bosmina_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Bosmina_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AFtheQg0ALiGgBQh/AAg+AQQhIAShsA5QiABGguAR");
	this.shape.setTransform(37.2,11.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,77,23);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BCD7DD","#CFE1E6","#D6E5E9","#C1DBE4","#9BC8DB","#8DC1D7"],[0.004,0.278,0.471,0.6,0.863,1],0,0,0,0,0,38.5).s().p("AkPEQQhwhxgBifQABieBwhwQBxhyCeAAQCfAABwByQBxBwABCeQgBCfhxBxQhwBxifAAQieAAhxhxg");
	this.shape.setTransform(38.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.Path_12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],0,-0.5,0,0,-0.5,93.1).s().p("AJmRLQhFgEhZicQgxhViFktQhzkChBhWQmkoshFhUQjOj8hxguQAjgNAlgeQBIg8AGhXQAHhYgog8QgNgTgNgMQCWBvCwCZQFwFACPDhQCTDmCZGcQBiEHA0DBQAIAbAVBCQASA8ADAlQAJBkhhAAIgMAAg");
	this.shape.setTransform(71.5,111.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.2,143.1,219.9);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-0.6,0,0,-0.6,0,72.3).s().p("AF3GkQhHg/hphQQhhhJhLgyQiVhkjcjIQhVhOgpgeQg7grgsgHQAZgIAagQQA0ggABgoQACgigYgXQBeA3BtBDQEMClBzBcQB/BjCTCWQCDCFAYArQAGAMATAcQAQAaAEARQAKAvhRAFIgEAAQgyAAhHg+gAoSnhQAQAFAQAMIAJAHIgpgYg");
	this.shape.setTransform(57.3,48.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.5,96.5);


(lib.Path_10_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-0.2,0,0,-0.2,0,47).s().p("ADrECQgugnhBgxQg+gvgvgeQhdg/iKh6QhlhbgsgIQARgEARgJQAigTACgYQACgUgPgOQA8AiBFAqQCqBoBHA5QBQA8BcBdQBRBSAPAaIAbAyQAGAdg1ABIAAAAQgiAAgtgngAlLkoQALADAKAHIAGAFIgbgPg");
	this.shape.setTransform(36.3,29.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.5,59.6);


(lib.Path_9_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-0.2,0,0,-0.2,0,49.8).s().p("AErECQhJhDgqglQhNhEgogSQhpgwi+hvQiahcgrgIQARgEARgJQAjgSACgYQAAgNgFgKQAzAnA9ApQCkByBWAfQDPBGBrBbQAwAqAhA6QAbAxAAACQAGAcg1ABIgCAAQghAAgsgngAmKkoQALADAKAHQAJAIAFAJIgjgbg");
	this.shape.setTransform(42.6,29.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,85.3,59.6);


(lib.Path_8_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],-1,0,0,-1,0,49.8).s().p("AF9BCQhigUg3gKQhlgSgsAFQhxAOjdABQi0AAgoAQQAMgMAKgRQAUgfgLgWQgFgLgKgGQBAAHBJAFQDHAMBbgTQDWgtCJAXQBBALA4AhIAyAbQAUAVgtAdQgSALgeAAQgSAAgWgEgAnzgyQAKgDANABQAMACAJAFIgsgFg");
	this.shape.setTransform(50.1,7.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,14.2);


(lib.Path_7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AIDmfQgfBFjFBfQhtAygyAYQhXAqgpAeQiUBjhIAzQh/Beg+BbQhABfAAABQgeAzgLA4");
	this.shape.setTransform(53.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.2,107,89);


(lib.Path_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AHCnPQgaAyhKDxQg+DJg5BDQhMBaj0BqQhCAciBA4QhqAwg7Ap");
	this.shape.setTransform(46.2,47.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1.1,94,97);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFEEE","#F3F4E9","#D7DADE","#DCD8D4"],[0.004,0.286,0.749,0.875],0,0,0,0,0,320.2).s().p("EAMFA7EQgvhkjrihQi/iCinhPQkth/jZhqQmbjKhgiRQgVgfi5j3Qi6j3h/i/Qmjp1hLmpQgsj5gal1QgZljgCluQgCl3AXkJQAakgAyhXQAshLAtiRQAzivAchaQAxifAzhiQBCiBBWhFQBfhLCchgID6iZQCEhVBGhFQBWhVAVhXQAKgqglhkQgPgphGiiQg7iIgXhNQghhvARg9QAqiWBbhfQBphtCEAOQBfAKDPACQC5ALB5BDQDaB4FLDuQGkEtCXC/QCVC7BUDzQA1CbAOB9QAFAqBwDVQBxDZAKBEQAJA4gUBmQgQBSAbA8QAwBpAaBrQAhCGgbA2QgYAxAqCWIAkB4QAUBFAGAgQAPBPAmOoQAlOZAADeQAACjoiQcQiJEIjxHLQitFOgDAmQgGBLADCMQABBGACA3g");
	this.shape.setTransform(200.4,406.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,400.8,812.2);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("ACPqSQAFB1h1DfQhWCngFAKQgwBjgRBDQgbB2AOC9QASDogFBM");
	this.shape.setTransform(16.5,66);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.9,32.9,134);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BBAC8E","#ECD5AA","#F4E7CE"],[0.004,0.498,0.988],0,0,0,0,0,279.6).s().p("EgCAA1jQishSjmjNQhqhfDSoRQAchHCKlDQBWjLALg5QjYgGgOgCQhzgNhdg5QgigUg4gsQg0gogbgOQhZgxh6ApQBcgUBaAvQBRArArBMQAsBNgaA+QgdBGhtAQQiHAVhoh2QhfhsgOiWQgPidBbhTQBphfDTA3QAlAJBsApQBXAhAvAFQBFAIAsglQAzgqAchsQAdhvgsi6Qg8jOgShYQgfgIgxgGQgugGgfgBQAOCZipAYQgvAGhnAAQhhAAgmAHIgBC1QgGBrgdBFQgqBkg6AnQg1Akg0gVQgygVgehBQgghFAChdQAFikBYh+QBTh3CYhNQgch5BWhEQAZgVA9ghQBAgjAcgVQArggAjgxQAkg0AKgzQAah+iPglQgwA8hTAgQg6AWhlAQQASArABBIQAABIgSBJQgrCvhiAYQAJBLgiA9QgVAnhDBEQglAnhEA4QhBA1gZAbIgNAOIgEAhQgHA2gdE/IgEgRQgWhZgChIQgEiLBIhZQAejVA0iAQAJgYAugrQAoglACgcQABgZgkgwQgog3gFgYQgWhmANhWQARhrBHgtQgehGAag6QArhDATgtQAXhEAXgnQAig6AxgQQhCAKhJgJQhbgLhEgkQiDhGAIh9QAFhVBXimQBKiPBug2QBWgrC0gNQglgThIhRQg6hBg9gJQifgXiJDCQg3BNgmBfQgjBXgIBGQgIBDAIB8QAMCnAAAnQADD2iEBmQhMiSASjSQAOimBHi/QBfj9B1jOQCVkHCah9QBhhPBngVQBKgQBuAMQCfARAbABQBuACBhgnQgfhehMgpQheglg2gpQiZhyBAhjQA6hZDDghQCfgbFDAaQCfANCCASIkWhQQlHBKi+inQjLiygynLQgajsBzhyQBjhiDCgEQCigDDLA8QCsA0CEBLQFjDJDlDuQDiDrDAFuQBECABJDGIB6FNQAvB2BpDkQBSDLAGCiQADBSgHBwIgNC6QgLDdAtCeIA2CzQAfBoAPBEQApDBgjCrQAChzhBh8Qg9h1hrhlQhohkh7g7Qh/g/hzgFQgVBdADCDQACBNAICYQAECFgRBYQgYBzhCBXQg6BLgVCZQgOBkgCDNQgDDhgJBYQgPClgwBZQgmBFAVC/QANBxApEJQAeDwgVCQQgbDBh3BVQj3Cwg8AlQiYBbh6AOQgZADgaAAQh5AAiEhAgA35aSQgXhvAKh4IABgMQAMAsAcBgQA8DIgKB2Qg4hsgWhrg");
	this.shape.setTransform(185.5,349.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,371,698.3);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("ADNrsQgCBUgyBnQglBKhPByQhvCkgPAXQhDBqgZBPQgsCMAoDeQALA9AXB6QASBqAABQ");
	this.shape.setTransform(22.7,75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-2,45.1,152);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#6EA07D","#007D49","#004E29"],[0.016,0.498,1],-91,0,91.1,0).s().p("EgEhA0WQibgHirj8QhniZhOi8Qg4iFgli/QgvjwA8guQA4gsA3ASQAcAIARASIAqA3QApBGAABLQAABdBfDOQBhDSBUBRQBJBFBThZQAZgaAqg9QAsg+ATgVQAxg2AJnOIADlVQABirAGgqIA8mxQAtlagHhlQgDg6glnEQgimpgFhxQgVkHgIidQgOkiArhkQAnhcBqg7QA2geAagPQAqgaAWgcQAxg+gfkFQgbjlg9jGQgriPiKAHQgkABhWASQhSARgrAAQh7AAipiNQiuiSgriZQgqiQBPjHQAghPAog7QAog6AfgLQAxgTA/AHQAgAEAVAIQgGgtAKguQAThdBSgGQBRgHBAA1QAlAfBLBTQA5AygXBaQgLAtgXAjQgfAGgFgLQgDgGAHgXQAHgXgFgKQgIgPgmACQhAACAAAzIABAsQgCAbgQAQQgaAZg8AAQhIAAgvAZQhDAjgPBKQgOBFApAgQAgAZAOAoQAJAUAAAPIAshuQAQgnD0g+QD3hABmAPQBfANCpCoQCKCICACtQBYB4AAFAQAABpgKCQIgOC/QgHB3hAB5QguBYhdByIiOCxQhGBdgNBEQgeCgApIMQAoIUA8CiQAxCJhEEqQglCdhBDaQgUBhguJnQgrJOgCCKQgBA6g/BGQg6BChiA8QhhA7hnAiQhlAhhSAAIgQAAg");
	this.shape.setTransform(91.1,335);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.2,670.1);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AGbjJQhQAsh9A0QiSA5hGAeQkMBsiBB1");
	this.shape.setTransform(42.2,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.2,86,45);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#61191B","#751A1D","#961C1F"],[0,0.431,1],0,0,0,0,0,24.3).s().p("AkCBnQgMgwAYg5QAVg4AvgzQBqhyB2AFQCNAGA+DAQAuCKhsA8QhKApiIAAQjOAAgdh0g");
	this.shape.setTransform(26.3,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.7,44);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("ANdBqQhKAMhUgfQg8gWhdg5Qh5hJgggQQhYgthIgJQiBgQjLBMQjkBehnAhQiRAthQASQiIAfhagK");
	this.shape.setTransform(88,15.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,0,178,31.9);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BCD7DD","#CFE1E6","#D6E5E9","#C1DBE4","#9BC8DB","#8DC1D7"],[0.004,0.278,0.471,0.6,0.863,1],0,0,0,0,0,42).s().p("AknEpQh7h7gBiuQABisB7h7QB7h7CsgBQCtABB8B7QB6B7AACsQAACuh6B7Qh8B6itAAQisAAh7h6g");
	this.shape.setTransform(42,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,84);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,0,4).p("AlUhDQBHAQBsAHQA8ADB3AGQDZARBxBZ");
	this.shape.setTransform(34.6,8.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,0,73,18);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BCD7DD","#CFE1E6","#D6E5E9","#C1DBE4","#9BC8DB","#8DC1D7"],[0.004,0.278,0.471,0.6,0.863,1],0,0,0,0,0,38.5).s().p("AkPEQQhwhxgBifQABieBwhwQBxhyCeAAQCfAABwByQBxBwABCeQgBCfhxBxQhwBxifAAQieAAhxhxg");
	this.shape.setTransform(38.5,38.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,77);


(lib.blackout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E2435").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(0,0,1.212,1.057);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-620.6,-405.7,1241.2,811.4);


(lib.bosminaarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_15();
	this.instance.parent = this;
	this.instance.setTransform(117.5,68.1,1,1,0,0,0,37.2,11.5);
	this.instance.alpha = 0.559;

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(166.6,35.6,1,1,0,0,0,35,9);
	this.instance_1.alpha = 0.559;

	this.instance_2 = new lib.Path_2_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(87.1,46.9,1,1,0,0,0,87.2,15.9);
	this.instance_2.alpha = 0.559;

	this.instance_3 = new lib.Path_3_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(141.1,82,1,1,0,0,0,42.4,22.2);
	this.instance_3.alpha = 0.559;

	this.instance_4 = new lib.Path_4_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(242.5,193.6,1,1,0,0,0,22.7,74);
	this.instance_4.alpha = 0.559;

	this.instance_5 = new lib.Path_5_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(204.5,157.5,1,1,0,0,0,16.4,65);
	this.instance_5.alpha = 0.559;

	this.instance_6 = new lib.Path_6_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(215,132.1,1,1,0,0,0,46.1,47.4);
	this.instance_6.alpha = 0.559;

	this.instance_7 = new lib.Path_7_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(167.5,92.1,1,1,0,0,0,53.5,43.3);
	this.instance_7.alpha = 0.559;

	this.instance_8 = new lib.Path_8_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(94.9,7.1,1,1,0,0,0,50.1,7.1);
	this.instance_8.alpha = 0.27;

	this.instance_9 = new lib.Path_9_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(182.3,29.8,1,1,0,0,0,42.6,29.8);
	this.instance_9.alpha = 0.27;

	this.instance_10 = new lib.Path_10_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(248.4,66.4,1,1,0,0,0,36.2,29.8);
	this.instance_10.alpha = 0.27;

	this.instance_11 = new lib.Path_11_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(311.3,119.1,1,1,0,0,0,57.2,48.2);
	this.instance_11.alpha = 0.27;

	this.instance_12 = new lib.Path_12_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(413.5,236.7,1,1,0,0,0,71.5,111.1);
	this.instance_12.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,0,487.1,346.6);


(lib.bosmina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.Path_14();
	this.instance.parent = this;
	this.instance.setTransform(136.3,222.3,1,1,0,0,0,38.5,38.5);
	this.instance.alpha = 0.922;

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(148.3,145.3,1,1,0,0,0,38.5,38.5);
	this.instance_1.alpha = 0.922;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(89.3,190.8,1,1,0,0,0,42,42);
	this.instance_2.alpha = 0.922;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-49.5,-303.3,1,1,0,0,0,26.3,21.9);
	this.instance_3.alpha = 0.809;

	this.instance_4 = new lib.Path_4_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(38.1,18.8,1,1,0,0,0,91.1,335.1);
	this.instance_4.alpha = 0.789;

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3.6,15.8,1,1,0,0,0,185.5,349.2);
	this.instance_5.alpha = 0.73;

	this.instance_6 = new lib.Path_6_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.9,72.7,1,1,0,0,0,200.4,406.1);
	this.instance_6.alpha = 0.27;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(15));

	// bosmina-arm copy 2
	this.instance_7 = new lib.bosminaarm("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(94.2,-242.2,0.818,1,0,0,180,468.6,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:242.4,regY:173.3,x:279.2,y:-339},0).wait(1).to({regX:468.4,regY:270.1,x:94.2,y:-242.1},0).wait(1).to({regX:242.4,regY:173.3,skewX:8.4,skewY:188.4,x:291.1,y:-311},0).wait(1).to({skewX:16.7,skewY:196.7,x:299,y:-281.6},0).wait(1).to({skewX:4.3,skewY:184.3,x:285.7,y:-324.9},0).wait(1).to({skewX:-8.2,skewY:171.8,x:263.3,y:-364.2},0).wait(1).to({skewX:-20.6,skewY:159.4,x:233.1,y:-397.8},0).wait(1).to({skewX:-4,skewY:176,x:271.8,y:-351.7},0).wait(1).to({skewX:12.6,skewY:192.6,x:295.7,y:-296.4},0).wait(1).to({skewX:29.2,skewY:209.2,x:302.7,y:-236.6},0).wait(1).to({skewX:21.9,skewY:201.9,x:301.8,y:-263.1},0).wait(1).to({skewX:14.6,skewY:194.6,x:297.4,y:-289.3},0).wait(1).to({skewX:7.3,skewY:187.3,x:289.8,y:-314.7},0).wait(1).to({skewX:0,skewY:180,x:279,y:-339},0).wait(1));

	// bosmina-arm copy 3
	this.instance_8 = new lib.bosminaarm("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.7,-232.2,0.595,1.002,0,18.4,-166.4,467.7,269.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:242.4,regY:173.3,scaleX:0.6,scaleY:1,skewX:5.6,skewY:-179.4,x:264.3,y:-326.8},0).wait(1).to({skewX:-7.6,skewY:-192.6,x:238.9,y:-357},0).wait(1).to({skewX:-20.7,skewY:-205.7,x:207.4,y:-380.7},0).wait(1).to({skewX:12.8,skewY:-172.2,x:274.9,y:-308.1},0).wait(1).to({skewX:46.3,skewY:-138.7,x:291.2,y:-210.3},0).wait(1).to({skewX:79.8,skewY:-105.2,x:250.8,y:-119.8},0).wait(1).to({skewX:45.7,skewY:-139.3,x:291.5,y:-212.1},0).wait(1).to({skewX:11.6,skewY:-173.4,x:273.4,y:-311.2},0).wait(1).to({skewX:-22.5,skewY:-207.5,x:202.8,y:-383.3},0).wait(1).to({skewX:-14.3,skewY:-199.2,x:223.6,y:-369.9},0).wait(1).to({skewX:-6,skewY:-191,x:242.3,y:-353.8},0).wait(1).to({skewX:2.2,skewY:-182.8,x:258.5,y:-335},0).wait(1).to({skewX:10.5,skewY:-174.5,x:271.8,y:-314.2},0).wait(1).to({skewX:18.7,skewY:-166.3,x:282,y:-291.7},0).wait(1));

	// bosmina-arm copy
	this.instance_9 = new lib.bosminaarm("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-80.1,-162.3,1,1,0,0,0,468.9,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:242.4,regY:173.3,x:-306.6,y:-259.1},0).wait(1).to({regX:468.9,regY:270.1,x:-80.1,y:-162.3},0).wait(1).to({regX:242.4,regY:173.3,rotation:-12.4,x:-321.7,y:-206.7},0).wait(1).to({rotation:-24.8,x:-325.5,y:-152.2},0).wait(1).to({rotation:-37.2,x:-317.7,y:-98.1},0).wait(1).to({rotation:-17.8,x:-323.7,y:-179.3},0).wait(1).to({rotation:1.5,x:-301.8,y:-258},0).wait(1).to({rotation:20.9,x:-254.6,y:-324.9},0).wait(1).to({rotation:-1.4,x:-305.8,y:-243.6},0).wait(1).to({rotation:-23.6,x:-323,y:-148.7},0).wait(1).to({rotation:-45.9,x:-303.4,y:-54.1},0).wait(1).to({rotation:-30.6,x:-320.1,y:-116},0).wait(1).to({rotation:-15.3,x:-319.4,y:-180.1},0).wait(1).to({rotation:0,x:-301.5,y:-241.9},0).wait(1));

	// bosmina-arm
	this.instance_10 = new lib.bosminaarm("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-19.8,-171.7,1,1,0,0,0,468.9,270.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:242.4,regY:173.3,rotation:-9.3,x:-258.9,y:-230.6},0).wait(1).to({rotation:-18.6,x:-265.3,y:-191.1},0).wait(1).to({rotation:-27.9,x:-265.2,y:-151.1},0).wait(1).to({rotation:-37.2,x:-258.7,y:-111.8},0).wait(1).to({rotation:-17.8,x:-265,y:-194.4},0).wait(1).to({rotation:1.5,x:-243.6,y:-274.5},0).wait(1).to({rotation:20.9,x:-196.8,y:-342.9},0).wait(1).to({rotation:-1.4,x:-248.5,y:-263},0).wait(1).to({rotation:-23.6,x:-266.1,y:-169.5},0).wait(1).to({rotation:-45.9,x:-246.9,y:-76.3},0).wait(1).to({rotation:-30.6,x:-264,y:-139.6},0).wait(1).to({rotation:-15.3,x:-263.8,y:-205.2},0).wait(1).to({rotation:0,x:-246.3,y:-268.5},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-551,-512.3,1030.3,991.1);


// stage content:



(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Bosmina
	this.instance = new lib.bosmina("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-67.5,1109.8,0.253,0.253,40.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:-29,regY:-75.6,rotation:41.2,x:-38,y:1059.6,startPosition:1},0).wait(1).to({rotation:41.3,x:-15.5,y:1028.6,startPosition:2},0).wait(1).to({rotation:41.5,x:7,y:997.6,startPosition:3},0).wait(1).to({rotation:41.7,x:29.4,y:966.6,startPosition:4},0).wait(1).to({rotation:41.8,x:52,y:935.7,startPosition:5},0).wait(1).to({rotation:42,x:74.5,y:904.7,startPosition:6},0).wait(1).to({rotation:42.1,x:97,y:873.7,startPosition:7},0).wait(1).to({rotation:42.3,x:119.5,y:842.7,startPosition:8},0).wait(1).to({rotation:42.5,x:142,y:811.8,startPosition:9},0).wait(1).to({rotation:42.6,x:142.6,y:805.3,startPosition:10},0).wait(1).to({rotation:42.8,x:143.2,y:798.8,startPosition:11},0).wait(1).to({rotation:43,x:143.8,y:792.3,startPosition:12},0).wait(1).to({rotation:43.1,x:144.4,y:785.8,startPosition:13},0).wait(1).to({rotation:43.3,x:145,y:779.3,startPosition:14},0).wait(1).to({rotation:43.5,x:145.6,y:772.8,startPosition:0},0).wait(1).to({rotation:43.6,x:146.2,y:766.3,startPosition:1},0).wait(1).to({rotation:43.8,x:146.8,y:759.8,startPosition:2},0).wait(1).to({rotation:44,x:168.2,y:737.8,startPosition:3},0).wait(1).to({rotation:44.1,x:189.6,y:715.8,startPosition:4},0).wait(1).to({rotation:44.3,x:211,y:693.7,startPosition:5},0).wait(1).to({rotation:44.5,x:232.4,y:671.7,startPosition:6},0).wait(1).to({rotation:44.6,x:253.9,y:649.7,startPosition:7},0).wait(1).to({rotation:44.8,x:275.3,y:627.7,startPosition:8},0).wait(1).to({rotation:45,x:296.6,y:605.7,startPosition:9},0).wait(1).to({rotation:45.1,x:318,y:583.7,startPosition:10},0).wait(1).to({rotation:45.3,x:339.5,y:561.7,startPosition:11},0).wait(1).to({rotation:45.4,x:360.9,y:539.6,startPosition:12},0).wait(1).to({rotation:45.6,x:382.2,y:517.6,startPosition:13},0).wait(1).to({rotation:45.8,x:403.7,y:495.6,startPosition:14},0).wait(1).to({rotation:45.9,x:425.1,y:473.6,startPosition:0},0).wait(1).to({rotation:46.1,x:427.4,y:473.3,startPosition:1},0).wait(1).to({rotation:46.3,x:429.8,y:473.1,startPosition:2},0).wait(1).to({rotation:46.4,x:432,y:472.9,startPosition:3},0).wait(1).to({rotation:46.6,x:434.4,y:472.6,startPosition:4},0).wait(1).to({rotation:46.8,x:436.7,y:472.4,startPosition:5},0).wait(1).to({rotation:46.9,x:439,y:472.2,startPosition:6},0).wait(1).to({rotation:47.1,x:441.3,y:471.9,startPosition:7},0).wait(1).to({rotation:47.3,x:443.6,y:471.7,startPosition:8},0).wait(1).to({rotation:47.4,x:446,y:471.5,startPosition:9},0).wait(1).to({rotation:47.6,x:448.3,y:471.3,startPosition:10},0).wait(1).to({rotation:47.8,x:450.6,y:471.1,startPosition:11},0).wait(1).to({rotation:47.9,x:452.9,y:470.9,startPosition:12},0).wait(1).to({rotation:48.1,x:455.2,y:470.6,startPosition:13},0).wait(1).to({rotation:48.3,x:457.6,y:470.4,startPosition:14},0).wait(1).to({rotation:48.4,x:459.9,y:470.2,startPosition:0},0).wait(1).to({rotation:48.6,x:462.2,y:470,startPosition:1},0).wait(1).to({rotation:48.7,x:464.5,y:469.8,startPosition:2},0).wait(1).to({rotation:48.9,x:466.8,y:469.5,startPosition:3},0).wait(1).to({rotation:49.1,x:469.1,y:469.3,startPosition:4},0).wait(1).to({rotation:49.2,x:471.4,y:469.1,startPosition:5},0).wait(1).to({rotation:49.4,x:473.8,y:468.9,startPosition:6},0).wait(1).to({rotation:49.6,x:476.1,y:468.6,startPosition:7},0).wait(1).to({rotation:49.7,x:478.4,y:468.4,startPosition:8},0).wait(1).to({rotation:49.9,x:480.7,y:468.2,startPosition:9},0).wait(1).to({rotation:50.1,x:483,y:467.9,startPosition:10},0).wait(1).to({rotation:50.2,x:485.3,y:467.7,startPosition:11},0).wait(1).to({rotation:50.4,x:487.7,y:467.5,startPosition:12},0).wait(1).to({rotation:50.6,x:490,y:467.3,startPosition:13},0).wait(1).to({rotation:50.7,x:492.3,y:467.1,startPosition:14},0).wait(1).to({rotation:50.9,x:494.6,y:466.9,startPosition:0},0).wait(1).to({rotation:51.1,x:497,y:466.6,startPosition:1},0).wait(1).to({rotation:51.2,x:499.2,y:466.4,startPosition:2},0).wait(1).to({rotation:51.4,x:501.5,y:466.2,startPosition:3},0).wait(1).to({rotation:51.6,x:503.9,y:466,startPosition:4},0).wait(1).to({rotation:51.7,x:506.2,y:465.8,startPosition:5},0).wait(1).to({rotation:51.9,x:508.5,y:465.6,startPosition:6},0).wait(1).to({rotation:52,x:510.9,y:465.3,startPosition:7},0).wait(1).to({rotation:52.2,x:513.1,y:465.1,startPosition:8},0).wait(1).to({rotation:52.4,x:515.4,y:464.9,startPosition:9},0).wait(1).to({rotation:52.5,x:517.8,y:464.6,startPosition:10},0).wait(1).to({rotation:52.7,x:520.1,y:464.4,startPosition:11},0).wait(1).to({rotation:52.9,x:522.4,y:464.2,startPosition:12},0).wait(1).to({rotation:53,x:524.7,y:464,startPosition:13},0).wait(1).to({rotation:53.2,x:527,y:463.8,startPosition:14},0).wait(1).to({rotation:53.4,x:529.3,y:463.6,startPosition:0},0).wait(1).to({rotation:53.5,x:531.7,y:463.4,startPosition:1},0).wait(1).to({rotation:53.7,x:534,y:463.1,startPosition:2},0).wait(1).to({rotation:49.5,x:562.2,y:422.2,startPosition:3},0).wait(1).to({rotation:45.3,x:590.4,y:381.6,startPosition:4},0).wait(1).to({rotation:41.1,x:618.4,y:341,startPosition:5},0).wait(1).to({rotation:36.9,x:646.6,y:300.4,startPosition:6},0).wait(1).to({rotation:32.7,x:664.1,y:244.4,startPosition:7},0).wait(1).to({rotation:28.5,x:681.6,y:188.5,startPosition:8},0).wait(1).to({rotation:24.2,x:699.1,y:132.6,startPosition:9},0).wait(1).to({rotation:20,x:716.6,y:76.9,startPosition:10},0).wait(1).to({rotation:15.8,x:734.1,y:21.3,startPosition:11},0).wait(1).to({rotation:11.6,x:751.6,y:-34.2,startPosition:12},0).wait(1).to({rotation:7.4,x:769.1,y:-89.4,startPosition:13},0).wait(1).to({rotation:3.2,x:786.7,y:-144.8,startPosition:14},0).to({_off:true},1).wait(141));

	// darkening
	this.instance_1 = new lib.blackout("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.6,512.2,0.869,1.002,90,0,0,0.1,-0.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,x:385.1,y:512.1,alpha:0.074},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.223},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.67},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.487},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.365},0).wait(1).to({alpha:0.305},0).wait(1).to({alpha:0.244},0).wait(1).to({alpha:0.183},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.061},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(362.9,484.6,812.7,1079);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;