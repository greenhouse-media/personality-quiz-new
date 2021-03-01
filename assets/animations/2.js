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
		{src:"assets/animations/images/Nuphar_PQ_atlas_.png", id:"Nuphar_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Nuphar_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Nuphar_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#274B20").s().p("AAOFVQgRgegLgOQgSgYgXgIQgOgGgXgvQgWgugTgEQgngIgtABQgbABg0AGQhGAIglgCQg7gEg7geQh4g8gNhBQgDgQAEgRQAMguA+gvQA+gwBBgMQBbgSDqhDQEHhMBEghQAlgJCBAGQB2AFAsAJQA2ALAWAbQAWAYALA6QAFAbADAYIAHAnIgwAOQgbAJgLACQgNACgTgDQg1gGhEgRQhDgQgUgLIgTgOQgagUgXgJQgogQgqANQhCATgaBJIAFBqQALAYADAtQACAgAYAIQALAEANBPQANBRAMAGQATALAIAIQAOAQAAAZQgMAkgRAGQgfAFgiAJQgWAGgTAAQgvAAgbgkg");
	this.shape.setTransform(-43.7,-25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F5326").s().p("ABjHMQhIgJg9g0QgfgdgRgNQgbgWgagKQgQgGgggsQgegpgYgEQgqgIg2AAIhdACQhMACgtgHQhDgLhDglQiDhKgWhKQgFgQABgUQACg7Azg8QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCbgaBAgTQCUgrDTgoQA3gDCDALQB7ALApAJQBFAVAgAmQAeAiAPBEQAIAkADAgIAFA1IgNAKQAAADgOAKQgPAKAAACIgfAcQgNALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgzgdgUgJQg4gXgxAFIgoAFQgUACgMAGQgSgCgJAHQgJAHgKATQgEAIAAAIQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBGAFAGQAMAPAVAHQAyAUgcA4QgTAlgoAPIh0AdQg2ANg1AAQgXAAgXgCg");
	this.shape_1.setTransform(-37.4,-21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgEQgsgHhAgCIhtgDQhSgEg1gNQhLgShJgsQiNhWgihWQgEgKgFgcQgJhIAqhIQAnhEBAgpQAlg8BcgqQBWgmBdgHQB+gKDOgaQDugfBHgWQBWgZB1gRQBlgOBVgDQBKAFCDARQCAAQAmAJQBVAdArAyQAlAsATBOQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPAAAFQgQAWgKAXIgNAeIgBAFQADAShMgHQhfgNgkgCIhJgEQgjgCgagHIgTgIIgUgIQhDgggcgLQhGgcg5gHQhFgKgSACQgcgOgKADQgKACgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAFAZghAoQgaAng/AXQgkANiDAfQhiAXhmAAIgYgBg");
	this.shape_2.setTransform(-31.2,-17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D6431").s().p("AhdI3QgVgMhPg0Qg5gngogQQgRgHg2gmQgsgfghgEQgsgGhMgEQhagFgigDQhXgJg+gTQhTgZhQg0QiXhigthgQgGgOgIgdQgThPAkhVQAZg8A+hOQBDhVB0g7QB3g9BzgFQCVgGEmghQFAgkBSgZQBQgZB8gIQBsgIBoAHQBdALCFAWQCCAWAlAKQBkAlA1A+QAvA2AVBXQALAuAFA5IABANIADBEIgJAYQgBAIgKAUQgKATgBAIQgbA/AFApIACAIQAPAhhcgIQh2gRgsAAIhaAAQgsAAghgIQgIgBgRgHIgZgKQhHgdgwgTQhWgjg+gQQhQgWgXgFQgngcgIgBQgNgBgQAcQgGALAEALQAMAVApAuQAwA0AqAjQA2BGAMAMQAnAqAzAYQAsAVBYBAQBJA1AZADIAmADQAXACALACQAgAIAAAXQAAAdgxAwQgiAphWAfQhFAZiVAiQiNAgiZADIgJAAQimAAh/hLg");
	this.shape_3.setTransform(-25.2,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#446C36").s().p("Ah3KRQgkgUhZg5QhJgvgvgTIhSgqQgygagmgFQgkgEhhgHQhWgGg1gHQhcgNhIgZQhagghXg8Qighug5hsQgJgQgKgdQghhdAbhiQAUhLA5hVQBOhyCYhOQCWhNCTgEQCwgFF6gnQGUgpBagcQBLgXCEgBQBzgBB6AQQByASCEAbQCGAbAjALQB0AuA/BJQA4BAAYBhQAOA3AEBCIABAPQACAkAAArIgIAfQAAALgIAYQgIAYgBAKQgYBZASAwQADAGADAFQAeAthugJQiPgSg0ACQhKAEggAAQg1ABgqgJQgJgCgzgRIiOg6QhpgrhBgVIhGgZQghgNgQgJQgwglgMgFQgNgHgSAeQgHANAFANQAMATA7AyQAZAXBdBPQAzA4AhAdQA0AuA8AdQAzAZBnBNQBOA7AegCQAVgBAvAJIA8ANQAmAHgBAmQgCAshAA2QgiAjh6ASQjgAhgzAMQi0Aoi4AGIgkABQjHAAiYhRg");
	this.shape_4.setTransform(-19.5,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B753B").s().p("AiULtQgygZhmhAQhYg3g2gXQg8gagggNQg3gUgugFIiRgNQhbgHg/gLQhhgRhQggQhjgnhehEQiph5hFh4QgHgMgQgjQhUjDB6jPQBViQC+hgQC1hdC1gDQDKgDHPgsQHnguBkggQBEgWCMAHQB5AGCOAZQCBAaCJAfQCHAgAjANQCEA2BJBVQBABKAcBrQAPA8AFBOIABARQACAmgBA1IgFAlQgBAPgGAcQgGAdAAANQgSBxAcA3QAEAJAFAGQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgRgDg2gSQhaghkLhxQhmgpgggZQg4gzgNgJQgQgKgVAjQgIAPAHAPQAMAUBLA2QBrBOAoAjQBtBtB+BAQAsAWCmBuQBzBMAngIIAzBKQg0AsiBAvQiCAvi+AqQjWAwjcALQghABggAAQjnAAiwhYg");
	this.shape_5.setTransform(-13.5,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#517D40").s().p("Ai6NJQg9gdh0hHQhohAg8gZQhxgwhngJIidgNQhhgJhJgPQhmgVhZgnQhqgthlhMQiwiEhUiEQgOgYgOgbQhxjgB3jjQBciuDjhzQDVhtDXgBQDmgCIhgxQI9g0BrgjQA+gUCUAPQB9AMCkAiQCPAgCPAmQCIAkAkAOQCTA/BUBhQBIBUAfB0QASBEAFBYIABAUQABAzgBAyIgEAsQAAARgEAiQgEAhgBAOQgLCNAlA9QAFAJAIAJQAiAngcANQgXALhFgEQjAgVhEAFQhgAKgqADQhHAEg7gLQgfgGgzgRQhKgZhxgvQh2gyhhguQhug2gngiQhAhBgPgLQgTgNgXAnQgKARAJARQAOAUBaA6QB0BJA9A0QBwBoChBSQBTAqCzBoQCTBQAwgOIBTBnQgzAmi/AvImRBYQj8A3j7APQgvADguAAQkHAAjKhhg");
	this.shape_6.setTransform(-6.6,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#588545").s().p("AjdOoQhKgiiBhOQh5hJhCgcQhPghiCgOQibgLhVgKQlCgnj5jAQkkjihLjrQg+jCBZi7QBijMEIiGQD2h8D5AAQD+AAJ4g3QKQg4B0gnQBpgjGpBmQCZAlCXAsQCGAoAmAQQDgBiBfCrQBJCCAGDFQAEBugMDHQAACfA7A/QAqAtgdARQgYANhOgEQjZgXhLAHQiEARg8ACQhhAChpgjQiXgyi1hUQjYhlhAhAQhIhQgRgNQgMgKgKAFQgKAGgPAaQgOAXAXAXQARATA3AfQCxBnBEA5QCWB/EFB4QEgCDBogmQA5gVAzgDQA0gEAUAQQAyAqiwB4Qh9BVlABbQmDBtmWAcQg+AEg8AAQknAAjhhog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.4,-104,404.9,208.1);


(lib.ripple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape.setTransform(34.1,273.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_1.setTransform(34.4,273.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_2.setTransform(34.7,273.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_3.setTransform(35,273.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_4.setTransform(35.2,273.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_5.setTransform(35.5,273.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_6.setTransform(35.8,273.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_7.setTransform(36.1,273.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_8.setTransform(36.4,273.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_9.setTransform(36.7,273.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_10.setTransform(36.9,273.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_11.setTransform(37.2,273.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_12.setTransform(37.5,273.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_13.setTransform(37.8,273.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_14.setTransform(38,273.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_15.setTransform(38.3,273.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_16.setTransform(38.6,273.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_17.setTransform(38.9,273.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_18.setTransform(39.2,273.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_19.setTransform(39.4,273.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_20.setTransform(39.7,273.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_21.setTransform(40,273.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_22.setTransform(40.3,273.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_23.setTransform(40.6,273.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_24.setTransform(40.9,273.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_25.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).wait(23));

	// Layer 2
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape_26.setTransform(34.1,273.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_27.setTransform(34.4,273.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_28.setTransform(34.7,273.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_29.setTransform(35,273.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_30.setTransform(35.2,273.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_31.setTransform(35.5,273.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_32.setTransform(35.8,273.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_33.setTransform(36.1,273.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_34.setTransform(36.4,273.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_35.setTransform(36.7,273.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_36.setTransform(36.9,273.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_37.setTransform(37.2,273.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_38.setTransform(37.5,273.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_39.setTransform(37.8,273.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_40.setTransform(38,273.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_41.setTransform(38.3,273.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_42.setTransform(38.6,273.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_43.setTransform(38.9,273.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_44.setTransform(39.2,273.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_45.setTransform(39.4,273.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_46.setTransform(39.7,273.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_47.setTransform(40,273.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_48.setTransform(40.3,273.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_49.setTransform(40.6,273.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_50.setTransform(40.9,273.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_51.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26}]},6).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).wait(26));

	// Layer 3
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape_52.setTransform(34.1,273.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_53.setTransform(34.4,273.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_54.setTransform(34.7,273.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_55.setTransform(35,273.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_56.setTransform(35.2,273.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_57.setTransform(35.5,273.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_58.setTransform(35.8,273.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_59.setTransform(36.1,273.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_60.setTransform(36.4,273.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_61.setTransform(36.7,273.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_62.setTransform(36.9,273.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_63.setTransform(37.2,273.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_64.setTransform(37.5,273.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_65.setTransform(37.8,273.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_66.setTransform(38,273.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_67.setTransform(38.3,273.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_68.setTransform(38.6,273.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_69.setTransform(38.9,273.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_70.setTransform(39.2,273.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_71.setTransform(39.4,273.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_72.setTransform(39.7,273.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_73.setTransform(40,273.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_74.setTransform(40.3,273.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_75.setTransform(40.6,273.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_76.setTransform(40.9,273.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_77.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52}]},3).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).wait(29));

	// Layer 4
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(255,255,255,0.8)").ss(1,1,1).p("AAVgBQAKABAAAAQAAAAgKABQgJABgMAAQgMAAgJgBQgJgBAAAAQAAAAAJgBQAJAAAMAAQAMAAAJAAg");
	this.shape_78.setTransform(34.1,273.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(255,255,255,0.769)").ss(1.1,1,1).p("AhqAAQAAgCAfgDQAggDArAAQAsAAAgADQAfADAAACQAAADgfADQggACgsAAQgrAAgggCQgfgDAAgDg");
	this.shape_79.setTransform(34.4,273.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(255,255,255,0.737)").ss(1.2,1,1).p("Ai3AAQAAgFA2gFQA2gEBLAAQBMAAA2AEQA2AFAAAFQAAAGg2AEQg2AFhMAAQhLAAg2gFQg2gEAAgGg");
	this.shape_80.setTransform(34.7,273.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(255,255,255,0.706)").ss(1.3,1,1).p("AkDAAQAAgIBMgHQBMgGBrAAQBsAABMAGQBNAHAAAIQAAAIhNAHQhMAGhsAAQhrAAhMgGQhMgHAAgIg");
	this.shape_81.setTransform(35,273.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(255,255,255,0.671)").ss(1.3,1,1).p("AlQAAQAAgKBjgJQBigICLAAQCLAABjAIQBjAJAAAKQAAALhjAJQhjAIiLAAQiLAAhigIQhjgJAAgLg");
	this.shape_82.setTransform(35.2,273.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(255,255,255,0.639)").ss(1.4,1,1).p("AmdAAQAAgNB5gLQB5gKCrAAQCrAAB6AKQB5ALAAANQAAAOh5ALQh6AKirAAQirAAh5gKQh5gLAAgOg");
	this.shape_83.setTransform(35.5,273.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(255,255,255,0.608)").ss(1.5,1,1).p("AnqAAQAAgQCQgMQCPgMDLAAQDKAACQAMQCRAMAAAQQAAAQiRANQiQAMjKAAQjLAAiPgMQiQgNAAgQg");
	this.shape_84.setTransform(35.8,273.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(255,255,255,0.576)").ss(1.6,1,1).p("Ao2AAQAAgTCmgOQCmgODqAAQDrAACmAOQCmAOAAATQAAATimAOQimAPjrAAQjqAAimgPQimgOAAgTg");
	this.shape_85.setTransform(36.1,273.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(255,255,255,0.545)").ss(1.7,1,1).p("AqDAAQAAgVC8gRQC9gPEKAAQEKAAC9APQC9ARAAAVQAAAWi9AQQi9AQkKAAQkKAAi9gQQi8gQAAgWg");
	this.shape_86.setTransform(36.4,273.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(255,255,255,0.514)").ss(1.7,1,1).p("ArQAAQAAgYDTgSQDUgSEpAAQEqAADTASQDUASAAAYQAAAZjUASQjTASkqAAQkpAAjUgSQjTgSAAgZg");
	this.shape_87.setTransform(36.7,273.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(255,255,255,0.478)").ss(1.8,1,1).p("AscAAQAAgbDpgUQDqgTFJAAQFKAADpATQDqAUAAAbQAAAbjqAUQjpAUlKAAQlJAAjqgUQjpgUAAgbg");
	this.shape_88.setTransform(36.9,273.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(255,255,255,0.447)").ss(1.9,1,1).p("AtpAAQAAgdEAgWQEAgWFpAAQFqAAEAAWQEAAWAAAdQAAAekAAWQkAAWlqAAQlpAAkAgWQkAgWAAgeg");
	this.shape_89.setTransform(37.2,273.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(255,255,255,0.416)").ss(2,1,1).p("Au2AAQAAggEXgYQEWgXGJAAQGJAAEXAXQEXAYAAAgQAAAhkXAXQkXAYmJAAQmJAAkWgYQkXgXAAghg");
	this.shape_90.setTransform(37.5,273.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(255,255,255,0.384)").ss(2.1,1,1).p("AwCAAQAAgjEsgaQEtgZGpAAQGpAAEtAZQEtAaAAAjQAAAjktAaQktAampAAQmpAAktgaQksgaAAgjg");
	this.shape_91.setTransform(37.8,273.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(255,255,255,0.353)").ss(2.1,1,1).p("AxPAAQAAglFDgcQFEgcHIAAQHJAAFDAcQFEAcAAAlQAAAmlEAcQlDAbnJAAQnIAAlEgbQlDgcAAgmg");
	this.shape_92.setTransform(38,273.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(255,255,255,0.322)").ss(2.2,1,1).p("AycAAQAAgoFageQFagdHoAAQHpAAFaAdQFaAeAAAoQAAAplaAdQlaAenpAAQnoAAlageQlagdAAgpg");
	this.shape_93.setTransform(38.3,273.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(255,255,255,0.286)").ss(2.3,1,1).p("AzoAAQAAgrFwgfQFwggIIAAQIIAAFxAgQFwAfAAArQAAArlwAgQlxAfoIAAQoIAAlwgfQlwggAAgrg");
	this.shape_94.setTransform(38.6,273.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(255,255,255,0.255)").ss(2.4,1,1).p("A01AAQAAgtGHgiQGGghIoAAQIoAAGHAhQGHAiAAAtQAAAumHAiQmHAhooAAQooAAmGghQmHgiAAgug");
	this.shape_95.setTransform(38.9,273.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(255,255,255,0.224)").ss(2.5,1,1).p("A2CAAQAAgwGdgkQGdgjJIAAQJIAAGdAjQGeAkAAAwQAAAxmeAkQmdAjpIAAQpIAAmdgjQmdgkAAgxg");
	this.shape_96.setTransform(39.2,273.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(255,255,255,0.192)").ss(2.5,1,1).p("A3OAAQAAgzGzglQG0glJnAAQJoAAGzAlQG0AlAAAzQAAA0m0AlQmzAlpoAAQpnAAm0glQmzglAAg0g");
	this.shape_97.setTransform(39.4,273.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(255,255,255,0.161)").ss(2.6,1,1).p("A4bAAQAAg1HKgoQHKgnKHAAQKHAAHKAnQHLAoAAA1QAAA2nLAnQnKAoqHAAQqHAAnKgoQnKgnAAg2g");
	this.shape_98.setTransform(39.7,273.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(255,255,255,0.129)").ss(2.7,1,1).p("A5oAAQAAg4HggpQHhgpKnAAQKnAAHhApQHhApAAA4QAAA5nhApQnhApqnAAQqnAAnhgpQnggpAAg5g");
	this.shape_99.setTransform(40,273.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(255,255,255,0.094)").ss(2.8,1,1).p("A60AAQAAg7H3grQH3grLGAAQLHAAH3ArQH3ArAAA7QAAA8n3AqQn3AsrHAAQrGAAn3gsQn3gqAAg8g");
	this.shape_100.setTransform(40.3,273.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(255,255,255,0.063)").ss(2.9,1,1).p("A8BAAQAAg9INguQIOgsLmAAQLnAAINAsQIOAuAAA9QAAA+oOAtQoNAtrnAAQrmAAoOgtQoNgtAAg+g");
	this.shape_101.setTransform(40.6,273.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(255,255,255,0.031)").ss(2.9,1,1).p("A9OAAQAAhAIkgvQIkgvMGAAQMGAAIkAvQIlAvAABAQAABBolAvQokAvsGAAQsGAAokgvQokgvAAhBg");
	this.shape_102.setTransform(40.9,273.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(255,255,255,0)").ss(3,1,1).p("AVgB0Qo6AxsmAAQsmAAo6gxQo6gwAAhEQAAhDI6gxQI6gwMmAAQMmAAI6AwQI7AxAABDQAABEo7Awg");
	this.shape_103.setTransform(41.1,273.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78}]}).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,271.9,8.2,2.5);


(lib.flowerStem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#87835C","#54541F","#464012"],[0,0.329,1],-12.4,0,12.5,0).s().p("AAuR0QgqgBgjgZQgpgbgLgrQgVhNgGjeQgChDgBhnIAAhxQAAhbgKquQgChkAKjXQAMj0AOg5QAMgwAJhdQAFg3ASgHQAYgIAgAFQAiAFAkASQAhAQAIAZQAGATgJAgQgFARgbAHQgdAIgNAaQgSAngQBOQgPBPADAoIAFKzQAFGwAGC0QADBgADAXQAIA4AHBdQANBXA4ByQAXAvgVAbQgRAWgoAAIgEAAg");
	this.shape.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-118.1,25,228.1);


(lib.flowerHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#A29A74","#76723E","#656333","#4E4D24"],[0,0.498,0.69,1],7.4,0,-7.4,0).s().p("AgYAiQgUgDgKgVIgTgNIAYADQAdABAUgBQAUgBAOgNIAVgTQAMgGAFATQAGATgMAOQgMAPgfAFQgQACgLAAQgKAAgKgBg");
	this.shape.setTransform(13.5,17.7,1.603,1.603);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A29A74","#76723E","#656333","#4E4D24"],[0,0.498,0.69,1],-8.1,-2.1,9.1,1.9).s().p("AgaBIQgMgEgQgYQgNgVgJgXQgHgRAIgQQAGgOANgGQAIgEAHgMQAIgNAHgFQAJgGAaANQAjAQAGABQANABAJAqQAIAfAAAVIAAAjQgDAVgRACIgHAAQgeAAgxgSg");
	this.shape_1.setTransform(-13.7,1,1.603,1.603);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],0,0,0,0,0,12.2).s().p("AAGBwQgRgCgKgUQgLgWgNgEIg3gPQgRgFgIgoQgGgbABgXQAAgcABgCQACgDAUgGQARgIADAAQAGABAGgCQAMgDAMADIAiAJQAQAEALgHQAOgJARABQAUABAHALIACAEIABgFIAAgUQABgJAJAFQANAGAVA7QAWA+gJAiQgIAhgtAQQgcALgeAAIgLAAg");
	this.shape_2.setTransform(7.3,3.6,1.603,1.603);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],0,0,0,0,0,8.5).s().p("AgMBRQg5gGgHgTQgGgMgDgPQgGgdAPgMQANgLAVgZQAUgVAYgIQAkgMAcAbQAYAXgDAQQgCANgcBCQgKAagsAAIgPgBg");
	this.shape_3.setTransform(-14.2,-10.3,1.603,1.603);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FCF3DD","#F2E0AF","#E6C978","#E6AD03","#E5A60D","#E29424"],[0,0,0,0.533,0.655,1],0,0,0,0,0,9).s().p("AgzAMQhAhDAWgMQAegPAYAFIArAHQAcAEAEAEQADAEAeATQAdAVACASQACAZgOAYQgRAcgdACIgCAAQgfAAg8hDg");
	this.shape_4.setTransform(1.5,-6,1.603,1.603);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-23.4,56.7,46.9);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#274B20").s().p("AAOFVQgRgegLgOQgSgYgXgIQgOgGgXgvQgWgugTgEQgngIgtABQgbABg0AGQhGAIglgCQg7gEg7geQh4g8gNhBQgDgQAEgRQAMguA+gvQA+gwBBgMQBbgSDqhDQEHhMBEghQAlgJCBAGQB2AFAsAJQA2ALAWAbQAWAYALA6QAFAbADAYIAHAnIgwAOQgbAJgLACQgNACgTgDQg1gGhEgRQhDgQgUgLIgTgOQgagUgXgJQgogQgqANQhCATgaBJIAFBqQALAYADAtQACAgAYAIQALAEANBPQANBRAMAGQATALAIAIQAOAQAAAZQgMAkgRAGQgfAFgiAJQgWAGgTAAQgvAAgbgkg");
	this.shape.setTransform(-43.7,-25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F5326").s().p("ABjHMQhIgJg9g0QgfgdgRgNQgbgWgagKQgQgGgggsQgegpgYgEQgqgIg2AAIhdACQhMACgtgHQhDgLhDglQiDhKgWhKQgFgQABgUQACg7Azg8QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCbgaBAgTQCUgrDTgoQA3gDCDALQB7ALApAJQBFAVAgAmQAeAiAPBEQAIAkADAgIAFA1IgNAKQAAADgOAKQgPAKAAACIgfAcQgNALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgzgdgUgJQg4gXgxAFIgoAFQgUACgMAGQgSgCgJAHQgJAHgKATQgEAIAAAIQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBGAFAGQAMAPAVAHQAyAUgcA4QgTAlgoAPIh0AdQg2ANg1AAQgXAAgXgCg");
	this.shape_1.setTransform(-37.4,-21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgEQgsgHhAgCIhtgDQhSgEg1gNQhLgShJgsQiNhWgihWQgEgKgFgcQgJhIAqhIQAnhEBAgpQAlg8BcgqQBWgmBdgHQB+gKDOgaQDugfBHgWQBWgZB1gRQBlgOBVgDQBKAFCDARQCAAQAmAJQBVAdArAyQAlAsATBOQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPAAAFQgQAWgKAXIgNAeIgBAFQADAShMgHQhfgNgkgCIhJgEQgjgCgagHIgTgIIgUgIQhDgggcgLQhGgcg5gHQhFgKgSACQgcgOgKADQgKACgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAFAZghAoQgaAng/AXQgkANiDAfQhiAXhmAAIgYgBg");
	this.shape_2.setTransform(-31.2,-17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D6431").s().p("AhdI3QgVgMhPg0Qg5gngogQQgRgHg2gmQgsgfghgEQgsgGhMgEQhagFgigDQhXgJg+gTQhTgZhQg0QiXhigthgQgGgOgIgdQgThPAkhVQAZg8A+hOQBDhVB0g7QB3g9BzgFQCVgGEmghQFAgkBSgZQBQgZB8gIQBsgIBoAHQBdALCFAWQCCAWAlAKQBkAlA1A+QAvA2AVBXQALAuAFA5IABANIADBEIgJAYQgBAIgKAUQgKATgBAIQgbA/AFApIACAIQAPAhhcgIQh2gRgsAAIhaAAQgsAAghgIQgIgBgRgHIgZgKQhHgdgwgTQhWgjg+gQQhQgWgXgFQgngcgIgBQgNgBgQAcQgGALAEALQAMAVApAuQAwA0AqAjQA2BGAMAMQAnAqAzAYQAsAVBYBAQBJA1AZADIAmADQAXACALACQAgAIAAAXQAAAdgxAwQgiAphWAfQhFAZiVAiQiNAgiZADIgJAAQimAAh/hLg");
	this.shape_3.setTransform(-25.2,-13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#446C36").s().p("Ah3KRQgkgUhZg5QhJgvgvgTIhSgqQgygagmgFQgkgEhhgHQhWgGg1gHQhcgNhIgZQhagghXg8Qighug5hsQgJgQgKgdQghhdAbhiQAUhLA5hVQBOhyCYhOQCWhNCTgEQCwgFF6gnQGUgpBagcQBLgXCEgBQBzgBB6AQQByASCEAbQCGAbAjALQB0AuA/BJQA4BAAYBhQAOA3AEBCIABAPQACAkAAArIgIAfQAAALgIAYQgIAYgBAKQgYBZASAwQADAGADAFQAeAthugJQiPgSg0ACQhKAEggAAQg1ABgqgJQgJgCgzgRIiOg6QhpgrhBgVIhGgZQghgNgQgJQgwglgMgFQgNgHgSAeQgHANAFANQAMATA7AyQAZAXBdBPQAzA4AhAdQA0AuA8AdQAzAZBnBNQBOA7AegCQAVgBAvAJIA8ANQAmAHgBAmQgCAshAA2QgiAjh6ASQjgAhgzAMQi0Aoi4AGIgkABQjHAAiYhRg");
	this.shape_4.setTransform(-19.5,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B753B").s().p("AiULtQgygZhmhAQhYg3g2gXQg8gagggNQg3gUgugFIiRgNQhbgHg/gLQhhgRhQggQhjgnhehEQiph5hFh4QgHgMgQgjQhUjDB6jPQBViQC+hgQC1hdC1gDQDKgDHPgsQHnguBkggQBEgWCMAHQB5AGCOAZQCBAaCJAfQCHAgAjANQCEA2BJBVQBABKAcBrQAPA8AFBOIABARQACAmgBA1IgFAlQgBAPgGAcQgGAdAAANQgSBxAcA3QAEAJAFAGQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgRgDg2gSQhaghkLhxQhmgpgggZQg4gzgNgJQgQgKgVAjQgIAPAHAPQAMAUBLA2QBrBOAoAjQBtBtB+BAQAsAWCmBuQBzBMAngIIAzBKQg0AsiBAvQiCAvi+AqQjWAwjcALQghABggAAQjnAAiwhYg");
	this.shape_5.setTransform(-13.5,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#517D40").s().p("Ai6NJQg9gdh0hHQhohAg8gZQhxgwhngJIidgNQhhgJhJgPQhmgVhZgnQhqgthlhMQiwiEhUiEQgOgYgOgbQhxjgB3jjQBciuDjhzQDVhtDXgBQDmgCIhgxQI9g0BrgjQA+gUCUAPQB9AMCkAiQCPAgCPAmQCIAkAkAOQCTA/BUBhQBIBUAfB0QASBEAFBYIABAUQABAzgBAyIgEAsQAAARgEAiQgEAhgBAOQgLCNAlA9QAFAJAIAJQAiAngcANQgXALhFgEQjAgVhEAFQhgAKgqADQhHAEg7gLQgfgGgzgRQhKgZhxgvQh2gyhhguQhug2gngiQhAhBgPgLQgTgNgXAnQgKARAJARQAOAUBaA6QB0BJA9A0QBwBoChBSQBTAqCzBoQCTBQAwgOIBTBnQgzAmi/AvImRBYQj8A3j7APQgvADguAAQkHAAjKhhg");
	this.shape_6.setTransform(-6.6,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#588545").s().p("AjdOoQhKgiiBhOQh5hJhCgcQhPghiCgOQibgLhVgKQlCgnj5jAQkkjihLjrQg+jCBZi7QBijMEIiGQD2h8D5AAQD+AAJ4g3QKQg4B0gnQBpgjGpBmQCZAlCXAsQCGAoAmAQQDgBiBfCrQBJCCAGDFQAEBugMDHQAACfA7A/QAqAtgdARQgYANhOgEQjZgXhLAHQiEARg8ACQhhAChpgjQiXgyi1hUQjYhlhAhAQhIhQgRgNQgMgKgKAFQgKAGgPAaQgOAXAXAXQARATA3AfQCxBnBEA5QCWB/EFB4QEgCDBogmQA5gVAzgDQA0gEAUAQQAyAqiwB4Qh9BVlABbQmDBtmWAcQg+AEg8AAQknAAjhhog");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.4,-104,404.9,208.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F5326").s().p("ABiHLQhHgIg9g0IgwgqQgcgWgZgKQgQgGgggsQgegpgYgEQgqgIg2AAIheACQhLACgugHQhDgLhCglQiDhKgXhKQgEgQABgUQACg6Azg9QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCagaBBgTQCggvDHgkQA3gDCUALQCPALAoAJQA/ATAUAoQAHANAUBZQAGAdAFAnIAFA1IgNAKQAAADgOAKQgPAKAAACIggAcQgMALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgygdgWgJQg3gXgxAFIgoAFQgVACgLAGQgSgCgJAHQgJAHgKATQgEAHAAAJQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBHAFAFQAMAPAVAHQAyATgcA5QgTAlgoAPIh0AdQg2ANg0AAQgYAAgYgDg");
	this.shape.setTransform(-33.6,-18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#274B20").s().p("AADFVQgRgdgKgOQgSgYgXgJQgPgFgWgwQgWgugUgEQgngIgtACQgbAAgzAGQhHAJgkgDQg7gEg8gdQh3g8gNhBQgEgPAFgSQALguA+gwQA+gvBBgNQAlgHBcgYQBfgZBmgdQEFhKBGgiQAkgJCTAFQCIAGAtAIQA1AMAXAaQAVAZALA6QACAHgPARQgQAQACAKIAGAnIgwAPIglAKQgOACgTgCQg1gHhDgQQhEgQgUgLIgTgOQgagVgXgIQgogQgqAMQhBATgbBJIAGBrQALAXADAuQABAfAYAIQAMAEAMBPQANBRAMAHQATAKAIAJQAPAPAAAZQgMAkgRAGQggAFghAJQgXAGgTAAQgvAAgbgkg");
	this.shape_1.setTransform(-38.9,-22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgFQgsgGhAgDQhIgBglgCQhRgDg2gNQhLgShJgtQiNhVgihWQgGgOgDgYQgJhHAqhJQAmhEBBgpQAlg9BcgpQBVgmBdgHQB/gKDNgaQDvgfBHgWQBTgYCKgSQBwgOBcgDQBmAGBnANQBpANA9APQBPAbAeA0QARAcAWBeQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPgBAFQgPAWgKAXIgNAdIgBAGQADAShMgHQhfgNglgCIhIgEQgkgCgZgHIgUgIIgUgIQg/gfgggMQhGgcg4gHQhFgKgSACQgcgOgKACQgKADgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAEAYggApQgaAnhAAXQgjANiEAfQhiAXhlAAIgYgBg");
	this.shape_2.setTransform(-27.4,-14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D6431").s().p("AhdI4QgVgMhPg1Qg5gmgpgRQgQgGg2gmQgsgfghgFQgrgFhNgFQhYgFgkgDQhWgIhAgTQhTgZhPg1QiYhigshgQgGgMgIgfQgUhOAkhWQAZg7A+hOQBEhVB0g7QB3g9BzgFQCVgHElghQFAgkBTgZQBPgYCPgJQB9gIBpAHQBMAJCWBCICnBJQB1ArASAPQAgAXASBNQAMAwAEA3IABANQACAiABAhIgKAYQAAAJgKATQgKATgBAIQgbA/AFApIACAJQAPAhhcgJQh2gQgsgBIhaABQgsgBghgHQgIgCgRgHIgagKQhHgdgvgTQhWgig+gQQhRgXgWgFQgogbgIgBQgMgCgQAcQgGALADAMQANAVApAtQAwA1ApAjQA4BGALALQAnAqAzAYQAsAVBYBAQBJA1AZAEIAmADQAXABALADQAfAHAAAYQAAAdgwAwQgiAohWAfQhEAZiWAjQiNAgiZACIgIAAQinAAh/hKg");
	this.shape_3.setTransform(-21.4,-10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#446C36").s().p("Ah3KIQglgThZg5QhIgvgwgUIhRgpQgygagmgFQgmgFhfgGQhYgGg0gIQhbgMhIgaQhagfhXg9Qightg6hsQgHgNgLggQghhdAahiQAUhMA6hVQBOhyCXhOQCWhNCUgEQCygFGKgmQGmgqBagcQA+gTCRAkQDNA1AgAEQBxASCFAbQCGAbAjALQCAAzAhAbQAoAhAWBXQANAyAFBGIABAQQACAjAAArIgIAfQAAALgIAZQgIAYgBAKQgYBYASAwIAGAMQAdAshugIQiOgSg0ABQhKAEggABQg1ABgqgJQgKgCgTgHIgggLIiNg5QhpgphBgXIhGgZQghgNgQgKQgxglgLgFQgOgHgRAfQgHANAFANQAMATA7AyIB2BlQAyA4AiAeQA0AtA8AeQAzAZBmBNQBOA6AfgCQAVgBAuAJIA8ANQAnAIgCAlQgBAshAA3QgjAih6ASQjfAigzALQiwAoi8AHIgkAAQjHAAiYhRg");
	this.shape_4.setTransform(-15.7,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4B753B").s().p("AiFLmQiDgYiyhKQg9gagfgNQg3gUgugFIiRgNQhbgHg/gLQhhgRhRggQhignhehEQiph5hFh4QgKgQgNgfQhUjDB6jPQBViQC9hgQC2hdC1gDQDNgDHdgsQH7gvBigfQA5gSCYAsQDbBBAsAHQCCAaCIAgQCHAgAjAMQCPA7AsAnQAxArAZBhQAPA8AFBOIABARQACAzgBAoIgFAlQgBAOgGAbQgGAcAAAOQgSBzAbA3IAKAPQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgXgEgwgRQhTgekSh0QhmgrgggZQg5gxgNgJQgQgKgUAjQgJANAIAPQAMAUBLA4QBrBOAoAjQBtBuB+A/QAqAVCoBuQBzBNAngIIAzBKQgXAUgsADQgaADhJgEQivgIiCAdQjXAwjaAKQhfAFhUAAQi0AAiBgXg");
	this.shape_5.setTransform(-9.7,-9.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#588545").s().p("AiZM5QhKgiiBhOQh4hJhCgbQhRgjiFAJQihAUhZAHQifAMh6gbQiigkiQhwQkkjihLjqQg+jDBZi6QBhjNEJiGQD2h8D5AAQGpAAHfgNQKsgTBpgjQBqgjGpBmQCZAlCXAsQCGAoAmAQQDhBjBMCAQA3BeAGDAQACBGgXB9QgOBFggCVQgbCBgDBFQgEBdAgAjQArAtgVATQgQAQhAAAQgZAAhmgGIgEADQh9BVlBBbQmDBtmVAcQg+AEg7AAQkoAAjihpgAJ6B7IgBAAQgqgqgmhQQgLgTgGgBQgIgBgPAWQgOAYAXAYQASATA3AgIAnAWIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.6,-93,397.3,186.1);


(lib.blackout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E2435").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(-79.5,-72.4,1.212,1.057,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.2,-693,811.4,1241.2);


(lib.growingFlower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer 3
	this.instance = new lib.flowerHead();
	this.instance.parent = this;
	this.instance.setTransform(31,261,0.564,0.564,-34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-24,x:37.3,y:256.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-13.6,x:43.6,y:251.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-3.2,x:49.9,y:246.6},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:7.2,x:56.3,y:241.8},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:17.6,x:62.6,y:237},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:28,x:68.9,y:232.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:38.3,x:75.2,y:227.4},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:24,x:66.9,y:218.7},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:9.6,x:58.5,y:210},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-4.8,x:50.2,y:201.4},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:-19.2,x:41.8,y:192.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-33.5,x:33.4,y:184},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-47.9,x:25.1,y:175.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-41.2,x:23.7,y:169.7},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-34.6,x:22.2,y:164.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-27.9,x:20.8,y:158.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-21.2,x:19.3,y:152.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-14.6,x:17.9,y:147.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-10,x:21.2,y:141.8},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-5.4,x:24.5,y:136.3},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-0.9,x:27.8,y:130.8},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:3.7,x:31.1,y:125.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:8.3,x:34.4,y:119.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:12.8,x:37.7,y:114.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:17.4,x:41,y:108.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:9.6,x:37,y:104.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:1.7,x:33,y:99.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-6.1,x:29,y:95.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-13.9,x:25,y:90.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-21.7,x:21,y:85.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-29.5,x:17,y:81.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-37.3,x:13,y:76.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-31.1,x:17.7,y:72},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-24.9,x:22.3,y:67.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-18.7,x:27,y:62.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-12.4,x:31.7,y:58.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-6.2,x:36.3,y:53.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:41,y:49},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.flowerStem();
	this.instance_1.parent = this;
	this.instance_1.setTransform(36,286,1,0.081,0,0,0,0,117.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:-4,scaleY:0.11,rotation:5,x:37.2,y:272.8},0).wait(1).to({scaleX:1,scaleY:0.14,rotation:10,x:38.9,y:269.7},0).wait(1).to({scaleY:0.17,rotation:15,x:41.2,y:266.7},0).wait(1).to({scaleX:1,scaleY:0.19,rotation:20.1,x:44,y:264.1},0).wait(1).to({scaleY:0.22,rotation:25.1,x:47.3,y:261.8},0).wait(1).to({scaleY:0.25,rotation:30.1,x:51.1,y:260},0).wait(1).to({scaleX:1,scaleY:0.28,rotation:35.1,x:55.3,y:258.6},0).wait(1).to({scaleY:0.31,rotation:28.8,x:53.9,y:253.6},0).wait(1).to({scaleY:0.34,rotation:22.5,x:51.5,y:248.5},0).wait(1).to({scaleY:0.36,rotation:16.2,x:48.3,y:243.7},0).wait(1).to({scaleY:0.39,rotation:9.9,x:44.2,y:239.1},0).wait(1).to({scaleY:0.42,rotation:3.5,x:39.2,y:234.9},0).wait(1).to({scaleX:1,scaleY:0.45,rotation:-2.8,x:33.3,y:231.4},0).wait(1).to({scaleX:1,scaleY:0.48,rotation:-3.7,x:32.3,y:228.4},0).wait(1).to({scaleY:0.5,rotation:-4.7,x:31,y:225.3},0).wait(1).to({scaleY:0.53,rotation:-5.7,x:29.7,y:222.4},0).wait(1).to({scaleY:0.55,rotation:-6.6,x:28.3,y:219.4},0).wait(1).to({scaleY:0.58,rotation:-7.6,x:26.7,y:216.5},0).wait(1).to({scaleY:0.6,rotation:-6.6,x:27.6,y:213.8},0).wait(1).to({scaleX:1,scaleY:0.62,rotation:-5.6,x:28.6,y:211.2},0).wait(1).to({scaleY:0.64,rotation:-4.7,x:29.7,y:208.5},0).wait(1).to({scaleY:0.66,rotation:-3.7,x:30.8,y:205.8},0).wait(1).to({scaleY:0.68,rotation:-2.7,x:32,y:203.2},0).wait(1).to({scaleY:0.71,rotation:-1.8,x:33.4,y:200.7},0).wait(1).to({scaleY:0.73,rotation:-0.8,x:34.8,y:198.1},0).wait(1).to({scaleY:0.75,rotation:-1.4,x:33.8,y:195.5},0).wait(1).to({scaleY:0.77,rotation:-2.1,x:32.6,y:193},0).wait(1).to({scaleX:1,scaleY:0.79,rotation:-2.7,x:31.4,y:190.5},0).wait(1).to({scaleY:0.81,rotation:-3.4,x:30.2,y:188},0).wait(1).to({scaleY:0.83,rotation:-4,x:28.9,y:185.6},0).wait(1).to({scaleY:0.85,rotation:-4.7,x:27.5,y:183.1},0).wait(1).to({scaleY:0.87,rotation:-5.3,x:26.2,y:180.7},0).wait(1).to({scaleY:0.9,rotation:-4.4,x:27.6,y:178},0).wait(1).to({scaleY:0.92,rotation:-3.5,x:29.1,y:175.4},0).wait(1).to({scaleX:1,scaleY:0.94,rotation:-2.7,x:30.7,y:172.7},0).wait(1).to({scaleY:0.96,rotation:-1.8,x:32.4,y:170.1},0).wait(1).to({scaleY:0.98,rotation:-0.9,x:34.2,y:167.5},0).wait(1).to({scaleY:1,rotation:0,x:36,y:165},0).wait(1));

	// Layer 8
	this.instance_2 = new lib.ripple();
	this.instance_2.parent = this;
	this.instance_2.setTransform(37.5,251.5,1,1,0,0,0,41.1,273.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.4,245.3,40.7,40.1);


(lib.nupharleaf_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(202.5,104.1);

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(202.5,104.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_1}]},12).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.02,skewX:-3.8,skewY:-14.9},11).to({_off:true,scaleX:1,skewX:0,skewY:0},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,404.9,208.1);


(lib.nupharleaf_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(198.7,93);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F5326").s().p("ABiHLQhHgIg9g0IgwgqQgcgWgZgKQgQgGgggsQgegpgYgEQgqgIg2AAIheACQhLACgugHQhDgLhCglQiDhKgXhKQgEgQABgUQACg6Azg9QAyg6BBgbQAZgfA6gXQA1gWA+gHQBpgNB0gTQCagaBBgTQCggvDHgkQA3gDCUALQCPALAoAJQA/ATAUAoQAHANAUBZQAGAdAFAnIAFA1IgNAKQAAADgOAKQgPAKAAACIggAcQgMALgKAEIgFACQgMAGg7gHIhigPQhMgJgYgIQgYgOgFgBQgygdgWgJQg3gXgxAFIgoAFQgVACgLAGQgSgCgJAHQgJAHgKATQgEAHAAAJQADADARA2QATA3AMAIIAgBLQAPAjAgANQAZALAfA2QAnBHAFAFQAMAPAVAHQAyATgcA5QgTAlgoAPIh0AdQg2ANg0AAQgYAAgYgDg");
	this.shape.setTransform(165.1,74.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#365B2C").s().p("ACZImQh5gDhghAIhKg1QgqgegigOQgRgHgqgoQglgkgcgFQgsgGhAgDQhIgBglgCQhRgDg2gNQhLgShJgtQiNhVgihWQgGgOgDgYQgJhHAqhJQAmhEBBgpQAlg9BcgpQBVgmBdgHQB/gKDNgaQDvgfBHgWQBTgYCKgSQBwgOBcgDQBmAGBnANQBpANA9APQBPAbAeA0QARAcAWBeQAIAjAFAyIAFBDIgLARQAAAGgNAOQgMAPgBAFQgPAWgKAXIgNAdIgBAGQADAShMgHQhfgNglgCIhIgEQgkgCgZgHIgUgIIgUgIQg/gfgggMQhGgcg4gHQhFgKgSACQgcgOgKACQgKADgNAYQgFAJACAKIAkA+QAjA1AaAWQAUAdAdAxQAbAmApATQAmASA4A5QA4A7APAHQAKAFARAEIAaAGQAaAIAEATQAEAYggApQgaAnhAAXQgjANiEAfQhiAXhlAAIgYgBg");
	this.shape_1.setTransform(171.2,78.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D6431").s().p("AhdI4QgVgMhPg1Qg5gmgpgRQgQgGg2gmQgsgfghgFQgrgFhNgFQhYgFgkgDQhWgIhAgTQhTgZhPg1QiYhigshgQgGgMgIgfQgUhOAkhWQAZg7A+hOQBEhVB0g7QB3g9BzgFQCVgHElghQFAgkBTgZQBPgYCPgJQB9gIBpAHQBMAJCWBCICnBJQB1ArASAPQAgAXASBNQAMAwAEA3IABANQACAiABAhIgKAYQAAAJgKATQgKATgBAIQgbA/AFApIACAJQAPAhhcgJQh2gQgsgBIhaABQgsgBghgHQgIgCgRgHIgagKQhHgdgvgTQhWgig+gQQhRgXgWgFQgogbgIgBQgMgCgQAcQgGALADAMQANAVApAtQAwA1ApAjQA4BGALALQAnAqAzAYQAsAVBYBAQBJA1AZAEIAmADQAXABALADQAfAHAAAYQAAAdgwAwQgiAohWAfQhEAZiWAjQiNAgiZACIgIAAQinAAh/hKg");
	this.shape_2.setTransform(177.2,82.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#446C36").s().p("Ah3KIQglgThZg5QhIgvgwgUIhRgpQgygagmgFQgmgFhfgGQhYgGg0gIQhbgMhIgaQhagfhXg9Qightg6hsQgHgNgLggQghhdAahiQAUhMA6hVQBOhyCXhOQCWhNCUgEQCygFGKgmQGmgqBagcQA+gTCRAkQDNA1AgAEQBxASCFAbQCGAbAjALQCAAzAhAbQAoAhAWBXQANAyAFBGIABAQQACAjAAArIgIAfQAAALgIAZQgIAYgBAKQgYBYASAwIAGAMQAdAshugIQiOgSg0ABQhKAEggABQg1ABgqgJQgKgCgTgHIgggLIiNg5QhpgphBgXIhGgZQghgNgQgKQgxglgLgFQgOgHgRAfQgHANAFANQAMATA7AyIB2BlQAyA4AiAeQA0AtA8AeQAzAZBmBNQBOA6AfgCQAVgBAuAJIA8ANQAnAIgCAlQgBAshAA3QgjAih6ASQjfAigzALQiwAoi8AHIgkAAQjHAAiYhRg");
	this.shape_3.setTransform(182.9,86.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B753B").s().p("AiFLmQiDgYiyhKQg9gagfgNQg3gUgugFIiRgNQhbgHg/gLQhhgRhRggQhignhehEQiph5hFh4QgKgQgNgfQhUjDB6jPQBViQC9hgQC2hdC1gDQDNgDHdgsQH7gvBigfQA5gSCYAsQDbBBAsAHQCCAaCIAgQCHAgAjAMQCPA7AsAnQAxArAZBhQAPA8AFBOIABARQACAzgBAoIgFAlQgBAOgGAbQgGAcAAAOQgSBzAbA3IAKAPQAsA3h/gIQiogTg7ADQhWAHglABQg9ADgzgKQgXgEgwgRQhTgekSh0QhmgrgggZQg5gxgNgJQgQgKgUAjQgJANAIAPQAMAUBLA4QBrBOAoAjQBtBuB+A/QAqAVCoBuQBzBNAngIIAzBKQgXAUgsADQgaADhJgEQivgIiCAdQjXAwjaAKQhfAFhUAAQi0AAiBgXg");
	this.shape_4.setTransform(189,83.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#588545").s().p("AiZM5QhKgiiBhOQh4hJhCgbQhRgjiFAJQihAUhZAHQifAMh6gbQiigkiQhwQkkjihLjqQg+jDBZi6QBhjNEJiGQD2h8D5AAQGpAAHfgNQKsgTBpgjQBqgjGpBmQCZAlCXAsQCGAoAmAQQDhBjBMCAQA3BeAGDAQACBGgXB9QgOBFggCVQgbCBgDBFQgEBdAgAjQArAtgVATQgQAQhAAAQgZAAhmgGIgEADQh9BVlBBbQmDBtmVAcQg+AEg7AAQkoAAjihpgAJ6B7IgBAAQgqgqgmhQQgLgTgGgBQgIgBgPAWQgOAYAXAYQASATA3AgIAnAWIAAAAg");
	this.shape_5.setTransform(198.7,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},20).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.8,x:199,y:42.2},20).to({_off:true,rotation:0,x:165.1,y:74.3},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,397.3,186.1);


(lib.Nuphar_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lotus_1
	this.Lotus_1 = new lib.nupharleaf_01();
	this.Lotus_1.parent = this;
	this.Lotus_1.setTransform(-245,409.1,1.016,0.196,0,0,0,196.9,180.5);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1).wait(1).to({regX:199,regY:57.9,x:-230.2,y:385},0).wait(1).to({x:-217.6},0).wait(1).to({x:-204.9,y:384.9},0).wait(1).to({x:-192.3},0).wait(1).to({x:-179.6,y:384.8},0).wait(1).to({x:-167},0).wait(1).to({x:-154.3,y:384.7},0).wait(1).to({x:-141.7},0).wait(1).to({x:-129,y:384.6},0).wait(1).to({x:-116.4},0).wait(1).to({x:-103.7,y:384.5},0).wait(1).to({x:-91},0).wait(1).to({x:-78.4,y:384.4},0).wait(1).to({x:-65.7},0).wait(1).to({x:-53.1,y:384.3},0).wait(1).to({x:-40.4,y:384.2},0).wait(1).to({x:-27.8},0).wait(1).to({x:-15.1,y:384.1},0).wait(1).to({x:-2.5},0).wait(1).to({x:10.2,y:384},0).wait(1).to({x:22.8},0).wait(1).to({x:35.5,y:383.9},0).wait(1).to({x:48.2},0).wait(1).to({x:60.8,y:383.8},0).wait(1).to({x:73.5},0).wait(1).to({x:86.1,y:383.7},0).wait(1).to({x:98.8},0).wait(1).to({x:111.4,y:383.6},0).wait(1).to({x:124.1},0).wait(1).to({x:136.7,y:383.5},0).wait(1).to({x:149.4},0).wait(1).to({x:162,y:383.4},0).wait(142));

	// flower2
	this.instance = new lib.growingFlower("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(138.9,296.9,0.762,0.762,0,0,0,38.4,149.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(1).to({regX:37.5,regY:158.5,x:138.5,y:303.3,startPosition:1},0).wait(1).to({x:138.8,y:302.9,startPosition:2},0).wait(1).to({x:139,y:302.5,startPosition:3},0).wait(1).to({x:139.3,y:302.1,startPosition:4},0).wait(1).to({x:139.6,y:301.7,startPosition:5},0).wait(1).to({x:139.8,y:301.3,startPosition:6},0).wait(1).to({x:140.1,y:300.9,startPosition:7},0).wait(1).to({x:140.4,y:300.5,startPosition:8},0).wait(1).to({x:140.6,y:300.1,startPosition:9},0).wait(1).to({x:140.9,y:299.7,startPosition:10},0).wait(1).to({x:141.2,y:299.3,startPosition:11},0).wait(1).to({x:141.4,y:298.9,startPosition:12},0).wait(1).to({x:141.7,y:298.5,startPosition:13},0).wait(1).to({x:142,y:298.1,startPosition:14},0).wait(1).to({x:142.2,y:297.7,startPosition:15},0).wait(1).to({x:142.3,y:298.1,startPosition:16},0).wait(1).to({x:142.4,y:298.4,startPosition:17},0).wait(1).to({y:298.7,startPosition:18},0).wait(1).to({x:142.5,y:299.1,startPosition:19},0).wait(1).to({y:299.4,startPosition:20},0).wait(1).to({x:142.6,y:299.7,startPosition:21},0).wait(1).to({y:300.1,startPosition:22},0).wait(1).to({x:142.7,y:300.4,startPosition:23},0).wait(1).to({y:300.7,startPosition:24},0).wait(1).to({x:142.8,y:301.1,startPosition:25},0).wait(1).to({x:142.9,y:301.4,startPosition:26},0).wait(1).to({y:301.7,startPosition:27},0).wait(1).to({x:143,y:302.1,startPosition:28},0).wait(1).to({y:302.4,startPosition:29},0).wait(1).to({x:143.1,y:302.7,startPosition:30},0).wait(1).to({y:303.1,startPosition:31},0).wait(1).to({x:143.2,y:303.4,startPosition:32},0).wait(1).to({y:303.7,startPosition:33},0).wait(1).to({x:143.3,y:303.3,startPosition:34},0).wait(1).to({x:143.4,y:302.9,startPosition:35},0).wait(1).to({y:302.4,startPosition:36},0).wait(1).to({x:143.5,y:302,startPosition:37},0).wait(1).to({y:301.5,startPosition:38},0).wait(1).to({x:143.6,y:301.1},0).wait(1).to({y:300.6},0).wait(1).to({x:143.7,y:300.2},0).wait(1).to({y:299.7},0).wait(1).to({x:143.8,y:299.3},0).wait(1).to({x:143.9,y:298.9},0).wait(1).to({y:298.4},0).wait(1).to({x:144,y:298},0).wait(1).to({y:297.5},0).wait(1).to({x:144.1,y:297.1},0).wait(1).to({y:296.6},0).wait(1).to({x:144.2,y:296.2},0).wait(1).to({y:295.7},0).wait(1).to({x:143.7,y:295.9},0).wait(1).to({x:143.2,y:296.1},0).wait(1).to({x:142.6,y:296.3},0).wait(1).to({x:142.1,y:296.5},0).wait(1).to({x:141.6,y:296.7},0).wait(1).to({x:141,y:296.8},0).wait(1).to({x:140.5,y:297},0).wait(1).to({x:140,y:297.2},0).wait(1).to({x:139.4,y:297.4},0).wait(1).to({x:138.9,y:297.6},0).wait(1).to({x:138.4,y:297.8},0).wait(1).to({x:137.8,y:297.9},0).wait(1).to({x:137.3,y:298.1},0).wait(1).to({x:136.7,y:298.3},0).wait(1).to({x:136.2,y:298.5},0).wait(1).to({x:135.7,y:298.7},0).wait(1).to({x:135.1,y:298.9},0).wait(1).to({x:134.6,y:299},0).wait(1).to({x:134.8,y:298.5},0).wait(1).to({x:134.9,y:298},0).wait(1).to({x:135.1,y:297.5},0).wait(1).to({x:135.3,y:297},0).wait(1).to({x:135.4,y:296.5},0).wait(1).to({x:135.6,y:296},0).wait(1).to({x:135.8,y:295.5},0).wait(1).to({x:135.9,y:295},0).wait(1).to({x:136.1,y:294.5},0).wait(1).to({x:136.3,y:294},0).wait(1).to({x:136.4,y:293.5},0).wait(1).to({x:136.6,y:293},0).wait(1).to({x:136.8,y:292.5},0).wait(1).to({x:136.9,y:292},0).wait(1).to({x:137.1,y:291.5},0).wait(1).to({x:137.3,y:291},0).wait(1).to({x:137.4,y:290.5},0).wait(1).to({x:137.6,y:290},0).wait(1).to({x:137.4,y:290.4},0).wait(1).to({x:137.1,y:290.8},0).wait(1).to({x:136.9,y:291.2},0).wait(1).to({x:136.7,y:291.5},0).wait(1).to({x:136.5,y:291.9},0).wait(1).to({x:136.2,y:292.3},0).wait(1).to({x:136,y:292.6},0).wait(1).to({x:135.8,y:293},0).wait(1).to({x:135.6,y:293.4},0).wait(1).to({x:135.3,y:293.8},0).wait(1).to({x:135.1,y:294.1},0).wait(1).to({x:134.9,y:294.5},0).wait(1).to({x:134.6,y:294.9},0).wait(1).to({x:134.4,y:295.2},0).wait(1).to({x:134.2,y:295.6},0).wait(1).to({x:134,y:296},0).wait(1).to({x:133.7,y:296.3},0).wait(1).to({x:133.5,y:296.7},0).wait(1).to({x:133.3,y:297.1},0).wait(1).to({x:133.1,y:297.5},0).wait(1).to({x:132.8,y:297.8},0).wait(1).to({x:132.6,y:298.2},0).wait(1).to({y:298},0).wait(1).to({y:297.7},0).wait(1).to({y:297.5},0).wait(1).to({x:132.5,y:297.2},0).wait(1).to({y:297},0).wait(1).to({y:296.8},0).wait(1).to({y:296.5},0).wait(1).to({y:296.3},0).wait(1).to({y:296},0).wait(1).to({x:132.4,y:295.8},0).wait(1).to({y:295.6},0).wait(1).to({y:295.3},0).wait(1).to({y:295.1},0).wait(1).to({y:294.8},0).wait(1).to({y:294.6},0).wait(1).to({x:132.3,y:294.4},0).wait(1).to({y:294.1},0).wait(1).to({y:293.9},0).wait(1).to({y:293.6},0).wait(1).to({y:293.4},0).wait(1).to({y:293.2},0).wait(1).to({x:132.2,y:292.9},0).wait(1).to({y:292.7},0).wait(1).to({y:292.4},0).wait(1).to({y:292.2},0).wait(1));

	// Lotus_1
	this.Lotus_1_1 = new lib.nupharleaf_01();
	this.Lotus_1_1.parent = this;
	this.Lotus_1_1.setTransform(1360.4,240.7,0.709,0.118,0,0,180,198.7,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_1).wait(1).to({regX:199,regY:57.9,scaleX:0.71,x:1338.8,y:226.2},0).wait(1).to({x:1317.4},0).wait(1).to({x:1296},0).wait(1).to({x:1274.6},0).wait(1).to({x:1253.2,y:226.1},0).wait(1).to({x:1231.8},0).wait(1).to({x:1210.5},0).wait(1).to({x:1189.1},0).wait(1).to({x:1167.7},0).wait(1).to({x:1146.3,y:226},0).wait(1).to({x:1124.9},0).wait(1).to({x:1103.5},0).wait(1).to({x:1082.1},0).wait(1).to({x:1060.7,y:225.9},0).wait(1).to({x:1039.3},0).wait(1).to({x:1018},0).wait(1).to({x:996.6},0).wait(1).to({x:975.2},0).wait(1).to({x:953.8,y:225.8},0).wait(1).to({x:932.4},0).wait(1).to({x:911},0).wait(1).to({x:889.6},0).wait(1).to({x:868.2,y:225.7},0).wait(1).to({x:846.9},0).wait(1).to({x:825.5},0).wait(1).to({x:804.1},0).wait(1).to({x:782.7},0).wait(1).to({x:761.3,y:225.6},0).wait(1).to({x:739.9},0).wait(1).to({x:718.5},0).wait(1).to({x:697.2},0).wait(1).to({x:675.8,y:225.5},0).wait(142));

	// flower
	this.instance_1 = new lib.growingFlower("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(694.6,167,0.513,0.513,0,0,180,38.4,149.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).wait(1).to({regX:37.5,regY:158.5,x:695.1,y:171.4,startPosition:1},0).wait(1).to({y:171,startPosition:2},0).wait(1).to({x:695.2,y:170.7,startPosition:3},0).wait(1).to({y:170.3,startPosition:4},0).wait(1).to({y:169.9,startPosition:5},0).wait(1).to({x:695.3,y:169.5,startPosition:6},0).wait(1).to({y:169.2,startPosition:7},0).wait(1).to({x:695.4,y:168.8,startPosition:8},0).wait(1).to({y:168.4,startPosition:9},0).wait(1).to({y:168,startPosition:10},0).wait(1).to({x:695.5,y:167.7,startPosition:11},0).wait(1).to({y:167.3,startPosition:12},0).wait(1).to({y:166.9,startPosition:13},0).wait(1).to({x:695.6,y:166.5,startPosition:14},0).wait(1).to({y:166.2,startPosition:15},0).wait(1).to({x:695.7,y:165.8,startPosition:16},0).wait(1).to({y:165.4,startPosition:17},0).wait(1).to({x:695.2,y:165.5,startPosition:18},0).wait(1).to({x:694.8,y:165.7,startPosition:19},0).wait(1).to({x:694.3,y:165.8,startPosition:20},0).wait(1).to({x:693.8,y:165.9,startPosition:21},0).wait(1).to({x:693.4,y:166.1,startPosition:22},0).wait(1).to({x:692.9,y:166.2,startPosition:23},0).wait(1).to({x:692.4,y:166.3,startPosition:24},0).wait(1).to({x:692,y:166.5,startPosition:25},0).wait(1).to({x:691.5,y:166.6,startPosition:26},0).wait(1).to({x:691,y:166.7,startPosition:27},0).wait(1).to({x:690.6,y:166.9,startPosition:28},0).wait(1).to({x:690.1,y:167,startPosition:29},0).wait(1).to({x:689.6,y:167.1,startPosition:30},0).wait(1).to({x:689.2,y:167.3,startPosition:31},0).wait(1).to({x:688.7,y:167.4,startPosition:32},0).wait(1).to({x:689,y:167.8,startPosition:33},0).wait(1).to({x:689.3,y:168.2,startPosition:34},0).wait(1).to({x:689.6,y:168.6,startPosition:35},0).wait(1).to({x:689.9,y:169,startPosition:36},0).wait(1).to({x:690.2,y:169.5,startPosition:37},0).wait(1).to({x:690.4,y:169.9,startPosition:38},0).wait(1).to({x:690.7,y:170.3},0).wait(1).to({x:691,y:170.7},0).wait(1).to({x:691.3,y:171.1},0).wait(1).to({x:691.6,y:171.5},0).wait(1).to({x:691.9,y:171.9},0).wait(1).to({x:692.2,y:172.3},0).wait(1).to({x:692.5,y:172.8},0).wait(1).to({x:692.8,y:173.2},0).wait(1).to({x:693.1,y:173.6},0).wait(1).to({x:693.4,y:174},0).wait(1).to({x:693.7,y:174.4},0).wait(1).to({x:693.4,y:174.3},0).wait(1).to({x:693.1},0).wait(1).to({x:692.8,y:174.2},0).wait(1).to({x:692.5},0).wait(1).to({x:692.3,y:174.1},0).wait(1).to({x:692},0).wait(1).to({x:691.7,y:174},0).wait(1).to({x:691.4},0).wait(1).to({x:691.2,y:173.9},0).wait(1).to({x:690.9,y:173.8},0).wait(1).to({x:690.6},0).wait(1).to({x:690.3,y:173.7},0).wait(1).to({x:690},0).wait(1).to({x:689.8,y:173.6},0).wait(1).to({x:689.5},0).wait(1).to({x:689.2,y:173.5},0).wait(1).to({x:688.9},0).wait(1).to({x:688.7,y:173.4},0).wait(1).to({y:173.1},0).wait(1).to({x:688.8,y:172.7},0).wait(1).to({x:688.9,y:172.4},0).wait(1).to({x:689,y:172.1},0).wait(1).to({x:689.1,y:171.7},0).wait(1).to({y:171.4},0).wait(1).to({x:689.2,y:171.1},0).wait(1).to({x:689.3,y:170.8},0).wait(1).to({x:689.4,y:170.4},0).wait(1).to({x:689.5,y:170.1},0).wait(1).to({y:169.8},0).wait(1).to({x:689.6,y:169.4},0).wait(1).to({x:689.7,y:169.1},0).wait(1).to({x:689.8,y:168.8},0).wait(1).to({x:689.9,y:168.4},0).wait(1).to({y:168.1},0).wait(1).to({x:690,y:167.8},0).wait(1).to({x:690.1,y:167.4},0).wait(1).to({x:690.6,y:167.7},0).wait(1).to({x:691.1,y:168},0).wait(1).to({x:691.5,y:168.3},0).wait(1).to({x:692,y:168.5},0).wait(1).to({x:692.5,y:168.8},0).wait(1).to({x:693,y:169.1},0).wait(1).to({x:693.4,y:169.4},0).wait(1).to({x:693.9,y:169.6},0).wait(1).to({x:694.4,y:169.9},0).wait(1).to({x:694.9,y:170.2},0).wait(1).to({x:695.3,y:170.4},0).wait(1).to({x:695.8,y:170.7},0).wait(1).to({x:696.3,y:171},0).wait(1).to({x:696.7,y:171.3},0).wait(1).to({x:697.2,y:171.5},0).wait(1).to({x:697.7,y:171.8},0).wait(1).to({x:697.2,y:171.6},0).wait(1).to({x:696.7,y:171.5},0).wait(1).to({x:696.1,y:171.3},0).wait(1).to({x:695.6,y:171.1},0).wait(1).to({x:695.1,y:170.9},0).wait(1).to({x:694.6,y:170.8},0).wait(1).to({x:694,y:170.6},0).wait(1).to({x:693.5,y:170.4},0).wait(1).to({x:693,y:170.3},0).wait(1).to({x:692.5,y:170.1},0).wait(1).to({x:691.9,y:169.9},0).wait(1).to({x:691.4,y:169.7},0).wait(1).to({x:690.9,y:169.6},0).wait(1).to({x:690.4,y:169.4},0).wait(1).to({x:690.6,y:170.1},0).wait(1).to({x:690.9,y:170.8},0).wait(1).to({x:691.1,y:171.5},0).wait(1).to({x:691.4,y:172.2},0).wait(1).to({x:691.6,y:172.9},0).wait(1).to({x:691.9,y:173.6},0).wait(1).to({x:692.1,y:174.3},0).wait(1).to({x:692.4,y:175},0).wait(1).to({x:692.6,y:175.7},0).wait(1).to({x:692.9,y:176.4},0).wait(1).to({x:693.1,y:177.1},0).wait(1).to({x:693.4,y:177.8},0).wait(1).to({x:693.6,y:178.5},0).wait(1).to({x:693.9,y:179.2},0).wait(1));

	// Lotus
	this.Lotus = new lib.nupharleaf_02();
	this.Lotus.parent = this;
	this.Lotus.setTransform(1441.6,517.7,1.156,0.205,0,0,0,202.6,182.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus).wait(1).to({regX:202.5,regY:104,x:1414.2,y:501.5},0).wait(1).to({x:1387},0).wait(1).to({x:1359.7},0).wait(1).to({x:1332.5},0).wait(1).to({x:1305.3,y:501.4},0).wait(1).to({x:1278},0).wait(1).to({x:1250.8},0).wait(1).to({x:1223.6},0).wait(1).to({x:1196.3},0).wait(1).to({x:1169.1,y:501.3},0).wait(1).to({x:1141.9},0).wait(1).to({x:1114.6},0).wait(1).to({x:1087.4},0).wait(1).to({x:1060.2,y:501.2},0).wait(1).to({x:1032.9},0).wait(1).to({x:1005.7},0).wait(1).to({x:978.5},0).wait(1).to({x:951.2},0).wait(1).to({x:924,y:501.1},0).wait(1).to({x:896.8},0).wait(1).to({x:869.5},0).wait(1).to({x:842.3},0).wait(1).to({x:815.1,y:501},0).wait(1).to({x:787.8},0).wait(1).to({x:760.6},0).wait(1).to({x:733.4},0).wait(1).to({x:706.1},0).wait(1).to({x:678.9,y:500.9},0).wait(1).to({x:651.7},0).wait(1).to({x:624.4},0).wait(1).to({x:597.2},0).wait(1).to({x:569.9,y:500.8},0).wait(142));

	// Lotus_1
	this.Lotus_1_2 = new lib.nupharleaf_01();
	this.Lotus_1_2.parent = this;
	this.Lotus_1_2.setTransform(-168.7,207.6,0.576,0.118,0,0,0,196.8,180.7);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_2).wait(1).to({regX:199,regY:57.9,x:-147.7,y:193},0).wait(1).to({x:-128},0).wait(1).to({x:-108.4},0).wait(1).to({x:-88.7},0).wait(1).to({x:-69.1},0).wait(1).to({x:-49.4},0).wait(1).to({x:-29.8},0).wait(1).to({x:-10.1,y:192.9},0).wait(1).to({x:9.5},0).wait(1).to({x:29.2},0).wait(1).to({x:48.9},0).wait(1).to({x:68.5},0).wait(1).to({x:88.2},0).wait(1).to({x:107.8},0).wait(1).to({x:127.4},0).wait(1).to({x:147.1},0).wait(1).to({x:166.7},0).wait(1).to({x:186.4},0).wait(1).to({x:206},0).wait(1).to({x:225.7},0).wait(1).to({x:245.3},0).wait(1).to({x:265},0).wait(1).to({x:284.7},0).wait(1).to({x:304.3,y:192.8},0).wait(1).to({x:323.9},0).wait(1).to({x:343.6},0).wait(1).to({x:363.3},0).wait(1).to({x:382.9},0).wait(1).to({x:402.6},0).wait(1).to({x:422.2},0).wait(1).to({x:441.9},0).wait(1).to({x:461.5},0).wait(142));

	// Lotus_1
	this.Lotus_1_3 = new lib.nupharleaf_01();
	this.Lotus_1_3.parent = this;
	this.Lotus_1_3.setTransform(1471.6,357.2,0.656,0.211,0,0,0,198.6,179.6);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_3).wait(1).to({regX:199,regY:57.9,x:1449.2,y:331.5},0).wait(1).to({x:1426.6},0).wait(1).to({x:1404.1},0).wait(1).to({x:1381.5},0).wait(1).to({x:1358.9},0).wait(1).to({x:1336.3},0).wait(1).to({x:1313.8},0).wait(1).to({x:1291.2},0).wait(1).to({x:1268.6},0).wait(1).to({x:1246},0).wait(1).to({x:1223.4},0).wait(1).to({x:1200.9},0).wait(1).to({x:1178.3},0).wait(1).to({x:1155.7},0).wait(1).to({x:1133.1},0).wait(1).to({x:1110.5,y:331.4},0).wait(1).to({x:1088},0).wait(1).to({x:1065.4},0).wait(1).to({x:1042.8},0).wait(1).to({x:1020.2},0).wait(1).to({x:997.7},0).wait(1).to({x:975.1},0).wait(1).to({x:952.5},0).wait(1).to({x:929.9},0).wait(1).to({x:907.4},0).wait(1).to({x:884.8},0).wait(1).to({x:862.2},0).wait(1).to({x:839.6},0).wait(1).to({x:817},0).wait(1).to({x:794.5},0).wait(1).to({x:771.9},0).wait(1).to({x:749.3,y:331.3},0).wait(142));

	// Lotus_1
	this.Lotus_1_4 = new lib.nupharleaf_01();
	this.Lotus_1_4.parent = this;
	this.Lotus_1_4.setTransform(1234.7,440.1,0.912,0.171,0,0,0,198.7,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_4).wait(1).to({regX:199,regY:57.9,x:1210.8,y:419.1},0).wait(1).to({x:1186.7},0).wait(1).to({x:1162.5},0).wait(1).to({x:1138.4},0).wait(1).to({x:1114.2},0).wait(1).to({x:1090.1},0).wait(1).to({x:1066},0).wait(1).to({x:1041.8},0).wait(1).to({x:1017.6},0).wait(1).to({x:993.5},0).wait(1).to({x:969.3},0).wait(1).to({x:945.2},0).wait(1).to({x:921.1},0).wait(1).to({x:896.9},0).wait(1).to({x:872.8},0).wait(1).to({x:848.6},0).wait(1).to({x:824.5},0).wait(1).to({x:800.3},0).wait(1).to({x:776.2},0).wait(1).to({x:752},0).wait(1).to({x:727.9},0).wait(1).to({x:703.8},0).wait(1).to({x:679.6},0).wait(1).to({x:655.5},0).wait(1).to({x:631.3},0).wait(1).to({x:607.2},0).wait(1).to({x:583},0).wait(1).to({x:558.9},0).wait(1).to({x:534.7},0).wait(1).to({x:510.6},0).wait(1).to({x:486.5},0).wait(1).to({x:462.3},0).wait(142));

	// Lotus_1
	this.Lotus_1_5 = new lib.nupharleaf_01();
	this.Lotus_1_5.parent = this;
	this.Lotus_1_5.setTransform(-240,493,0.804,0.171,0,0,180,198.6,180.1);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_5).wait(1).to({regX:199,regY:57.9,x:-230.1,y:472.1},0).wait(1).to({x:-220},0).wait(1).to({x:-209.8},0).wait(1).to({x:-199.7},0).wait(1).to({x:-189.5},0).wait(1).to({x:-179.4},0).wait(1).to({x:-169.2},0).wait(1).to({x:-159.1},0).wait(1).to({x:-149},0).wait(1).to({x:-138.8},0).wait(1).to({x:-128.7},0).wait(1).to({x:-118.5},0).wait(1).to({x:-108.4},0).wait(1).to({x:-98.2},0).wait(1).to({x:-88.1},0).wait(1).to({x:-77.9},0).wait(1).to({x:-67.7,y:472.2},0).wait(1).to({x:-57.6},0).wait(1).to({x:-47.4},0).wait(1).to({x:-37.3},0).wait(1).to({x:-27.1},0).wait(1).to({x:-17},0).wait(1).to({x:-6.8},0).wait(1).to({x:3.3},0).wait(1).to({x:13.5},0).wait(1).to({x:23.6},0).wait(1).to({x:33.8},0).wait(1).to({x:43.9},0).wait(1).to({x:54.1},0).wait(1).to({x:64.2},0).wait(1).to({x:74.4},0).wait(1).to({x:84.6},0).wait(142));

	// Lotus_1
	this.Lotus_1_6 = new lib.nupharleaf_01();
	this.Lotus_1_6.parent = this;
	this.Lotus_1_6.setTransform(1415.7,453.3,0.83,0.283,0,0,180,198.5,179.9);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_6).wait(1).to({regX:199,regY:57.9,scaleX:0.83,x:1397.5,y:418.7},0).wait(1).to({x:1379.8},0).wait(1).to({x:1362},0).wait(1).to({x:1344.2},0).wait(1).to({x:1326.5,y:418.6},0).wait(1).to({x:1308.7},0).wait(1).to({x:1290.9},0).wait(1).to({x:1273.1},0).wait(1).to({x:1255.4},0).wait(1).to({x:1237.6,y:418.5},0).wait(1).to({x:1219.8},0).wait(1).to({x:1202.1},0).wait(1).to({x:1184.3},0).wait(1).to({x:1166.5,y:418.4},0).wait(1).to({x:1148.7},0).wait(1).to({x:1131},0).wait(1).to({x:1113.2},0).wait(1).to({x:1095.4},0).wait(1).to({x:1077.7,y:418.3},0).wait(1).to({x:1059.9},0).wait(1).to({x:1042.1},0).wait(1).to({x:1024.4},0).wait(1).to({x:1006.6,y:418.2},0).wait(1).to({x:988.8},0).wait(1).to({x:971.1},0).wait(1).to({x:953.3},0).wait(1).to({x:935.5},0).wait(1).to({x:917.8,y:418.1},0).wait(1).to({x:900},0).wait(1).to({x:882.2},0).wait(1).to({x:864.4},0).wait(1).to({x:846.7,y:418},0).wait(142));

	// Lotus_1
	this.Lotus_1_7 = new lib.nupharleaf_01();
	this.Lotus_1_7.parent = this;
	this.Lotus_1_7.setTransform(-314,236.2,0.627,0.118,0,0,180,198.8,179.4);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_7).wait(1).to({regX:199,regY:57.9,x:-294.4,y:221.7},0).wait(1).to({x:-274.7},0).wait(1).to({x:-254.9},0).wait(1).to({x:-235.2},0).wait(1).to({x:-215.5},0).wait(1).to({x:-195.8},0).wait(1).to({x:-176.1},0).wait(1).to({x:-156.3},0).wait(1).to({x:-136.6},0).wait(1).to({x:-117},0).wait(1).to({x:-97.2},0).wait(1).to({x:-77.5},0).wait(1).to({x:-57.8},0).wait(1).to({x:-38.1},0).wait(1).to({x:-18.4},0).wait(1).to({x:1.4},0).wait(1).to({x:21.1},0).wait(1).to({x:40.8},0).wait(1).to({x:60.5},0).wait(1).to({x:80.2},0).wait(1).to({x:99.9},0).wait(1).to({x:119.7,y:221.6},0).wait(1).to({x:139.4},0).wait(1).to({x:159.1},0).wait(1).to({x:178.8},0).wait(1).to({x:198.5},0).wait(1).to({x:218.3},0).wait(1).to({x:238},0).wait(1).to({x:257.7},0).wait(1).to({x:277.4},0).wait(1).to({x:297.1},0).wait(1).to({x:316.9},0).wait(142));

	// Lotus_1
	this.Lotus_1_8 = new lib.nupharleaf_01();
	this.Lotus_1_8.parent = this;
	this.Lotus_1_8.setTransform(1577.9,283.9,0.709,0.118,0,0,0,198.8,180.7);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_8).wait(1).to({regX:199,regY:57.9,scaleX:0.71,x:1556.8,y:268.8},0).wait(1).to({x:1535.6,y:268.2},0).wait(1).to({x:1514.4,y:267.7},0).wait(1).to({x:1493.2,y:267.1},0).wait(1).to({x:1472,y:266.6},0).wait(1).to({x:1450.7,y:266},0).wait(1).to({x:1429.6,y:265.5},0).wait(1).to({x:1408.3,y:264.9},0).wait(1).to({x:1387.1,y:264.4},0).wait(1).to({x:1365.9,y:263.8},0).wait(1).to({x:1344.7,y:263.3},0).wait(1).to({x:1323.5,y:262.7},0).wait(1).to({x:1302.3,y:262.2},0).wait(1).to({x:1281.1,y:261.6},0).wait(1).to({x:1259.9,y:261.1},0).wait(1).to({x:1238.6,y:260.5},0).wait(1).to({x:1217.4,y:260},0).wait(1).to({x:1196.2,y:259.5},0).wait(1).to({x:1175,y:258.9},0).wait(1).to({x:1153.8,y:258.4},0).wait(1).to({x:1132.6,y:257.8},0).wait(1).to({x:1111.4,y:257.3},0).wait(1).to({x:1090.2,y:256.7},0).wait(1).to({x:1069,y:256.2},0).wait(1).to({x:1047.8,y:255.6},0).wait(1).to({x:1026.6,y:255.1},0).wait(1).to({x:1005.3,y:254.5},0).wait(1).to({x:984.2,y:254},0).wait(1).to({x:962.9,y:253.4},0).wait(1).to({x:941.7,y:252.9},0).wait(1).to({x:920.5,y:252.3},0).wait(1).to({x:899.3,y:251.8},0).wait(142));

	// Lotus_1
	this.Lotus_1_9 = new lib.nupharleaf_01();
	this.Lotus_1_9.parent = this;
	this.Lotus_1_9.setTransform(1268,292,0.627,0.118,0,0,180,198.5,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_9).wait(1).to({regX:199,regY:57.9,x:1250.3,y:277.5},0).wait(1).to({x:1232.9},0).wait(1).to({x:1215.5},0).wait(1).to({x:1198.1},0).wait(1).to({x:1180.7},0).wait(1).to({x:1163.3},0).wait(1).to({x:1145.9},0).wait(1).to({x:1128.5,y:277.4},0).wait(1).to({x:1111.1},0).wait(1).to({x:1093.7},0).wait(1).to({x:1076.3},0).wait(1).to({x:1058.9},0).wait(1).to({x:1041.5},0).wait(1).to({x:1024.1},0).wait(1).to({x:1006.7},0).wait(1).to({x:989.3,y:277.3},0).wait(1).to({x:971.8},0).wait(1).to({x:954.4},0).wait(1).to({x:937},0).wait(1).to({x:919.6},0).wait(1).to({x:902.2},0).wait(1).to({x:884.8},0).wait(1).to({x:867.4},0).wait(1).to({x:850,y:277.2},0).wait(1).to({x:832.6},0).wait(1).to({x:815.2},0).wait(1).to({x:797.8},0).wait(1).to({x:780.4},0).wait(1).to({x:763},0).wait(1).to({x:745.6},0).wait(1).to({x:728.2},0).wait(1).to({x:710.8,y:277.1},0).wait(142));

	// Lotus_1
	this.Lotus_1_10 = new lib.nupharleaf_01();
	this.Lotus_1_10.parent = this;
	this.Lotus_1_10.setTransform(-390.3,329.5,1.208,0.254,0,0,0,198.4,180.1);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_10).wait(1).to({regX:199,regY:57.9,x:-366.2,y:298.4},0).wait(1).to({x:-342.8},0).wait(1).to({x:-319.5,y:298.3},0).wait(1).to({x:-296.2},0).wait(1).to({x:-272.9,y:298.2},0).wait(1).to({x:-249.5},0).wait(1).to({x:-226.2,y:298.1},0).wait(1).to({x:-202.9},0).wait(1).to({x:-179.6,y:298},0).wait(1).to({x:-156.2},0).wait(1).to({x:-132.9,y:297.9},0).wait(1).to({x:-109.6},0).wait(1).to({x:-86.3,y:297.8},0).wait(1).to({x:-63},0).wait(1).to({x:-39.6,y:297.7},0).wait(1).to({x:-16.3},0).wait(1).to({x:7},0).wait(1).to({x:30.4,y:297.6},0).wait(1).to({x:53.7},0).wait(1).to({x:77,y:297.5},0).wait(1).to({x:100.4},0).wait(1).to({x:123.7,y:297.4},0).wait(1).to({x:147},0).wait(1).to({x:170.3,y:297.3},0).wait(1).to({x:193.6},0).wait(1).to({x:217,y:297.2},0).wait(1).to({x:240.3},0).wait(1).to({x:263.6,y:297.1},0).wait(1).to({x:286.9},0).wait(1).to({x:310.2,y:297},0).wait(1).to({x:333.5},0).wait(1).to({x:356.9,y:296.9},0).wait(142));

	// Lotus_1
	this.Lotus_1_11 = new lib.nupharleaf_01();
	this.Lotus_1_11.parent = this;
	this.Lotus_1_11.setTransform(-293.2,210.3,0.709,0.118,0,0,180,198.8,179.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_11).wait(1).to({regX:199,regY:57.9,scaleX:0.71,x:-278.7,y:195.8},0).wait(1).to({x:-264.1},0).wait(1).to({x:-249.5},0).wait(1).to({x:-234.8},0).wait(1).to({x:-220.2},0).wait(1).to({x:-205.6},0).wait(1).to({x:-190.9},0).wait(1).to({x:-176.3},0).wait(1).to({x:-161.7},0).wait(1).to({x:-147},0).wait(1).to({x:-132.5,y:195.7},0).wait(1).to({x:-117.8},0).wait(1).to({x:-103.2},0).wait(1).to({x:-88.6},0).wait(1).to({x:-73.9},0).wait(1).to({x:-59.3},0).wait(1).to({x:-44.7},0).wait(1).to({x:-30},0).wait(1).to({x:-15.4},0).wait(1).to({x:-0.8},0).wait(1).to({x:13.9},0).wait(1).to({x:28.5,y:195.6},0).wait(1).to({x:43.1},0).wait(1).to({x:57.8},0).wait(1).to({x:72.4},0).wait(1).to({x:87},0).wait(1).to({x:101.6},0).wait(1).to({x:116.3},0).wait(1).to({x:130.9},0).wait(1).to({x:145.5},0).wait(1).to({x:160.2},0).wait(1).to({x:174.8,y:195.5},0).wait(142));

	// Lotus_1
	this.Lotus_1_12 = new lib.nupharleaf_01();
	this.Lotus_1_12.parent = this;
	this.Lotus_1_12.setTransform(-224.4,240.5,0.591,0.118,0,0,180,198.7,179.4);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_12).wait(1).to({regX:199,regY:57.9,x:-203.3,y:226.6},0).wait(1).to({x:-182.1,y:227.2},0).wait(1).to({x:-160.8,y:227.7},0).wait(1).to({x:-139.6,y:228.3},0).wait(1).to({x:-118.3,y:228.8},0).wait(1).to({x:-97.1,y:229.4},0).wait(1).to({x:-75.9,y:229.9},0).wait(1).to({x:-54.6,y:230.5},0).wait(1).to({x:-33.4,y:231.1},0).wait(1).to({x:-12.1,y:231.6},0).wait(1).to({x:9.1,y:232.2},0).wait(1).to({x:30.4,y:232.7},0).wait(1).to({x:51.6,y:233.3},0).wait(1).to({x:72.9,y:233.8},0).wait(1).to({x:94.1,y:234.4},0).wait(1).to({x:115.4,y:234.9},0).wait(1).to({x:136.6,y:235.5},0).wait(1).to({x:157.9,y:236.1},0).wait(1).to({x:179.1,y:236.6},0).wait(1).to({x:200.4,y:237.2},0).wait(1).to({x:221.6,y:237.7},0).wait(1).to({x:242.9,y:238.3},0).wait(1).to({x:264.1,y:238.8},0).wait(1).to({x:285.4,y:239.4},0).wait(1).to({x:306.6,y:240},0).wait(1).to({x:327.9,y:240.5},0).wait(1).to({x:349.1,y:241.1},0).wait(1).to({x:370.4,y:241.6},0).wait(1).to({x:391.6,y:242.2},0).wait(1).to({x:412.9,y:242.7},0).wait(1).to({x:434.1,y:243.3},0).wait(1).to({x:455.4,y:243.8},0).wait(142));

	// Lotus_1
	this.Lotus_1_13 = new lib.nupharleaf_01();
	this.Lotus_1_13.parent = this;
	this.Lotus_1_13.setTransform(-250.2,282.3,0.839,0.196,0,0,180,198.6,180.5);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_1_13).wait(1).to({regX:199,regY:57.9,x:-238.2,y:258.2},0).wait(1).to({x:-225.9,y:258},0).wait(1).to({x:-213.6,y:257.8},0).wait(1).to({x:-201.3,y:257.6},0).wait(1).to({x:-189,y:257.4},0).wait(1).to({x:-176.7,y:257.2},0).wait(1).to({x:-164.4,y:257},0).wait(1).to({x:-152.1,y:256.9},0).wait(1).to({x:-139.8,y:256.7},0).wait(1).to({x:-127.5,y:256.5},0).wait(1).to({x:-115.2,y:256.3},0).wait(1).to({x:-102.9,y:256.1},0).wait(1).to({x:-90.6,y:255.9},0).wait(1).to({x:-78.3,y:255.7},0).wait(1).to({x:-66,y:255.6},0).wait(1).to({x:-53.6,y:255.4},0).wait(1).to({x:-41.3,y:255.2},0).wait(1).to({x:-29,y:255},0).wait(1).to({x:-16.7,y:254.8},0).wait(1).to({x:-4.4,y:254.6},0).wait(1).to({x:7.9,y:254.4},0).wait(1).to({x:20.2,y:254.3},0).wait(1).to({x:32.5,y:254.1},0).wait(1).to({x:44.8,y:253.9},0).wait(1).to({x:57.1,y:253.7},0).wait(1).to({x:69.4,y:253.5},0).wait(1).to({x:81.7,y:253.3},0).wait(1).to({x:94,y:253.1},0).wait(1).to({x:106.3,y:253},0).wait(1).to({x:118.6,y:252.8},0).wait(1).to({x:130.9,y:252.6},0).wait(1).to({x:143.3,y:252.4},0).wait(142));

	// Lotus
	this.Lotus_2 = new lib.nupharleaf_02();
	this.Lotus_2.parent = this;
	this.Lotus_2.setTransform(1224.5,201.2,0.715,0.079,0,1.5,178.2,200.6,169.8);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_2).wait(1).to({regX:202.5,regY:104,scaleY:0.08,skewY:178,x:1208.9,y:195.9},0).wait(1).to({x:1194.6},0).wait(1).to({x:1180.3,y:195.8},0).wait(1).to({x:1165.9,y:195.7},0).wait(1).to({x:1151.6,y:195.6},0).wait(1).to({x:1137.3},0).wait(1).to({x:1123,y:195.5},0).wait(1).to({x:1108.6,y:195.4},0).wait(1).to({x:1094.3},0).wait(1).to({x:1080,y:195.3},0).wait(1).to({x:1065.7,y:195.2},0).wait(1).to({x:1051.3},0).wait(1).to({x:1037,y:195.1},0).wait(1).to({x:1022.7,y:195},0).wait(1).to({x:1008.3},0).wait(1).to({x:994,y:194.9},0).wait(1).to({x:979.7,y:194.8},0).wait(1).to({x:965.4},0).wait(1).to({x:951,y:194.7},0).wait(1).to({x:936.7,y:194.6},0).wait(1).to({x:922.4,y:194.5},0).wait(1).to({x:908},0).wait(1).to({x:893.7,y:194.4},0).wait(1).to({x:879.4,y:194.3},0).wait(1).to({x:865.1},0).wait(1).to({x:850.7,y:194.2},0).wait(1).to({x:836.4,y:194.1},0).wait(1).to({x:822.1},0).wait(1).to({x:807.7,y:194},0).wait(1).to({x:793.4,y:193.9},0).wait(1).to({x:779.1},0).wait(1).to({x:764.8,y:193.8},0).wait(142));

	// Lotus
	this.Lotus_3 = new lib.nupharleaf_02();
	this.Lotus_3.parent = this;
	this.Lotus_3.setTransform(1562.7,392,0.739,0.143,0,-0.5,179,197.7,176);

	this.timeline.addTween(cjs.Tween.get(this.Lotus_3).wait(1).to({regX:202.5,regY:104,x:1539.7,y:381.8},0).wait(1).to({x:1520.3},0).wait(1).to({x:1500.8,y:381.9},0).wait(1).to({x:1481.4},0).wait(1).to({x:1462},0).wait(1).to({x:1442.6},0).wait(1).to({x:1423.3,y:382},0).wait(1).to({x:1403.8},0).wait(1).to({x:1384.4},0).wait(1).to({x:1365},0).wait(1).to({x:1345.6,y:382.1},0).wait(1).to({x:1326.2},0).wait(1).to({x:1306.8},0).wait(1).to({x:1287.4,y:382.2},0).wait(1).to({x:1268},0).wait(1).to({x:1248.6},0).wait(1).to({x:1229.2},0).wait(1).to({x:1209.8,y:382.3},0).wait(1).to({x:1190.4},0).wait(1).to({x:1171},0).wait(1).to({x:1151.6},0).wait(1).to({x:1132.2,y:382.4},0).wait(1).to({x:1112.8},0).wait(1).to({x:1093.4},0).wait(1).to({x:1074},0).wait(1).to({x:1054.6,y:382.5},0).wait(1).to({x:1035.2},0).wait(1).to({x:1015.8},0).wait(1).to({x:996.4,y:382.6},0).wait(1).to({x:977},0).wait(1).to({x:957.6},0).wait(1).to({x:938.2},0).wait(142));

	// bkgr
	this.instance_2 = new lib.blackout();
	this.instance_2.parent = this;
	this.instance_2.setTransform(512,385.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-79.6,regY:-72.5,x:432.4,y:313.3,alpha:0.009},0).wait(1).to({alpha:0.019},0).wait(1).to({alpha:0.028},0).wait(1).to({y:313.2,alpha:0.037},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.084},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.103},0).wait(1).to({y:313.1,alpha:0.112},0).wait(1).to({alpha:0.122},0).wait(1).to({alpha:0.131},0).wait(1).to({alpha:0.14},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.168},0).wait(1).to({y:313,alpha:0.178},0).wait(1).to({alpha:0.187},0).wait(1).to({alpha:0.196},0).wait(1).to({alpha:0.206},0).wait(1).to({alpha:0.215},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.243},0).wait(1).to({y:312.9,alpha:0.253},0).wait(1).to({alpha:0.262},0).wait(1).to({alpha:0.271},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.29},0).wait(4).to({y:312.8},0).wait(7).to({y:312.7},0).wait(8).to({y:312.6},0).wait(7).to({y:312.5},0).wait(8).to({y:312.4},0).wait(7).to({y:312.3},0).wait(8).to({y:312.2},0).wait(7).to({y:312.1},0).wait(8).to({y:312},0).wait(8).to({y:311.9},0).wait(7).to({y:311.8},0).wait(8).to({y:311.7},0).wait(7).to({y:311.6},0).wait(8).to({y:311.5},0).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-629.9,-307.2,2348.6,1241.2);


// stage content:



(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// nuphar
	this.instance = new lib.Nuphar_mc("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(494,590.1,0.996,0.996,0,0,0,543.1,382.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:542.6,regY:312.4,x:493.5,y:520.4,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({alpha:0.917,startPosition:143},0).wait(1).to({alpha:0.833,startPosition:144},0).wait(1).to({alpha:0.75,startPosition:145},0).wait(1).to({alpha:0.667,startPosition:146},0).wait(1).to({alpha:0.583,startPosition:147},0).wait(1).to({alpha:0.5,startPosition:148},0).wait(1).to({alpha:0.417,startPosition:149},0).wait(1).to({alpha:0.333,startPosition:150},0).wait(1).to({alpha:0.25,startPosition:151},0).wait(1).to({alpha:0.167,startPosition:152},0).wait(1).to({alpha:0.083,startPosition:153},0).wait(1).to({alpha:0,startPosition:154},0).to({_off:true},1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-289.9,415.5,2338.2,1235.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;