(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Mussels_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
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
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Mussels_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("EhgtAZNQm+gSm6hEQ3jjl3jg/IgDgYIgBgWIAAgXIAAgXIAAgXQACgMADgLIAIgYIAFgVIAAgXIAAgWQAAgMADgKQAEgNAGgOIAHgUIAAgXIAAhxIAAiKIAAigIAAgXQACgMADgLIAIgYIAEgXIAIgsQAEgXAIgXIAAgWIAAgXQAAgNACgIIALgaIAGgVIAAgYIAAgWIAAgXQADgIAEgHIAAiTQhIi7gGjHQgHjMAZjFQBEhYBMhQQA/hHBYgFQA3ACAmANQAbgTAhgOQEvh4EPCxQAbARAfAKQA5g8BSgCQJAgPI2h7QB8gbB9gYQGXhNGWBJQBoASBmAeQD/BLEEAkQFQgzFOhBQDDgnC2gvQBngcBTARQAYgEAcADQGKAhGIg9QB+gSB/gPQFTgpFHBPQDGAuDQgTQFcghFCiJQFjiZF4gqQDBAADBAHIACAAQFcgVEtDVQDhAtDbBSQBBAZBLACQI0AUItA4QGPAoGPAkQIGAuIAhUQCGgVCIgDQLTgVLRgXQClgFCRhIQBog1B3gTQLCh0K/BZQEHAhEDA3QLUCYKtkWQD2hiDVCWQEGC6EiB9QAlAQABAtQABCNhxBjIgGANIgOAaQgIAOgLANIgaAcIgFANIgLAaQASACARAFQANADAMAHIASAXQAHALAGANQAEAKACAMIAEAXQAHAtANAtQAVA8AYA6QAOAfALAjIAFAXIAAAWIAAAXIAAAXIAAAXIAAAXIAAAXIgFAVQgEAMgGAKIgNAZIgLAOIgIAHIgXASQgEAKgCALIgJAXIgKAWIgbAvIgKAOIgJAHIgXARIgOAWQgeAsgXA0QgXAzgUA6QgNAfgFAnQgHAKgHAMQgHAKgGANIAAAXIAAAXIAAAXIgGAVIgHAYQgEALgCAMIgIAsQgFAYgGAXIAAAXIAAAXIAAAXIAAAtIAAAuIAAAXIgKAXIgJAYIAAAWIAAAXIgBAXQgCAWgEAVQgFAZgHAWIAAAYIAAAXIAAAWIAAAXIgGAVIgHAYQgEALgBAMIgCAVIgDAZIgKAVIgNAZIgLAPUhGrgAshG2ADhQsIAnsLAhQ1dA61eAAQzVAAzVgvg");
	this.shape.setTransform(18.7,7.1,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-990.8,-159.1,2019.3,332);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996633").s().p("EhgtAZNQm+gSm6hEQ3jjl3jg/IgDgYIgBgWIAAgXIAAgXIAAgXQACgMADgLIAIgYIAFgVIAAgXIAAgWQAAgMADgKQAEgNAGgOIAHgUIAAgXIAAhxIAAiKIAAigIAAgXQACgMADgLIAIgYIAEgXIAIgsQAEgXAIgXIAAgWIAAgXQAAgNACgIIALgaIAGgVIAAgYIAAgWIAAgXQADgIAEgHIAAiTQhIi7gGjHQgHjMAZjFQBEhYBMhQQA/hHBYgFQA3ACAmANQAbgTAhgOQEvh4EPCxQAbARAfAKQA5g8BSgCQJAgPI2h7QB8gbB9gYQGXhNGWBJQBoASBmAeQD/BLEEAkQFQgzFOhBQDDgnC2gvQBngcBTARQAYgEAcADQGKAhGIg9QB+gSB/gPQFTgpFHBPQDGAuDQgTQFcghFCiJQFjiZF4gqQDBAADBAHIACAAQFcgVEtDVQDhAtDbBSQBBAZBLACQI0AUItA4QGPAoGPAkQIGAuIAhUQCGgVCIgDQLTgVLRgXQClgFCRhIQBog1B3gTQLCh0K/BZQEHAhEDA3QLUCYKtkWQD2hiDVCWQEGC6EiB9QAlAQABAtQABCNhxBjIgGANIgOAaQgIAOgLANIgaAcIgFANIgLAaQASACARAFQANADAMAHIASAXQAHALAGANQAEAKACAMIAEAXQAHAtANAtQAVA8AYA6QAOAfALAjIAFAXIAAAWIAAAXIAAAXIAAAXIAAAXIAAAXIgFAVQgEAMgGAKIgNAZIgLAOIgIAHIgXASQgEAKgCALIgJAXIgKAWIgbAvIgKAOIgJAHIgXARIgOAWQgeAsgXA0QgXAzgUA6QgNAfgFAnQgHAKgHAMQgHAKgGANIAAAXIAAAXIAAAXIgGAVIgHAYQgEALgCAMIgIAsQgFAYgGAXIAAAXIAAAXIAAAXIAAAtIAAAuIAAAXIgKAXIgJAYIAAAWIAAAXIgBAXQgCAWgEAVQgFAZgHAWIAAAYIAAAXIAAAWIAAAXIgGAVIgHAYQgEALgBAMIgCAVIgDAZIgKAVIgNAZIgLAPUhGrgAshG2ADhQsIAnsLAhQ1dA61eAAQzVAAzVgvg");
	this.shape.setTransform(18.7,7.1,1,1,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-990.8,-159.1,2019.3,332);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("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");
	this.shape.setTransform(0.8,-24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-991.3,-124.8,1984.3,201.1);


(lib.singleBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399CC").ss(2,1,1).p("AFMlLQCJCKAADBQAADCiJCKQiKCJjCAAQjBAAiKiJQiJiKAAjCQAAjBCJiKQCKiJDBAAQDCAACKCJg");
	this.shape.setTransform(0.2,0.2,6.959,6.959);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABZDFQAAgyg8izQgOgpg6g7Qg0g1gjgRQA4gHBKAwQApAaBEA1QAmAZgaCUQgJAzgMAmQgHAYgDAAQgBAAAAgHg");
	this.shape_1.setTransform(140.6,-108.9,6.959,6.959);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CCFF").s().p("AlLFMQiJiKAAjCQAAjBCJiKQCKiJDBAAQDCAACKCJQCJCKAADBQAADCiJCKQiKCJjCAAQjBAAiKiJgABGlnQAjASA1A0QA7A7ANApQA8C0AAAxQAAAUAMglQAMgkAJg0QAaiUgngaQhDg0gpgaQhCgrg0AAIgOABg");
	this.shape_2.setTransform(0.2,0.2,6.959,6.959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327.4,-327.4,655.2,655.2);


(lib.Sandfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("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");
	this.shape.setTransform(1000,102.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.9,1.8,1984.3,201.2);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#915E28").s().p("EgWkApBQnujDikmyQgohqgpjaQgmjfgPg/Qgeh6gMjvQgNkHAuAfIhCidQgyg+gtkdQgoj2AAh8QAAhOBEkKIBDj6IDRmWQgIBcCNkVQCyleAhgpQA0hBCJhOQCPhRAMgNQANgNAig/QAmhIAcglQA/hXBIgZQB1gmBNgiQBdgoA/gsQAogcC/hPQC5hLC/hEQEHheA3AAQA1AABSAGQBRAEBigKQBDgGDdgsQCzgkApAIQAlAIAbASQAgAVA2AQQA8ASCDALQCQANAYAFQAlAICKANQB+ASAcAnQA5BRC4FJQDVGAAnCCQAhBugWBtQgOBEgBAQQgGAyAKAzQAQBTBPBbQAqAvAMASQAZAlAFAkQAGAtgLDfQgLDSAQBFQAZBmhPEqQhUE9h0C8QhaCTizF1Qi1F6grBHQg2BZiiCvQjODhjsDBQqrIvpZAoQiWAKiLAAQoWAAl1iSg");
	this.shape.setTransform(249.7,282.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.1,489.4,554.3);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E260E").s().p("EgX3ApBQntjDikmyQgohqgpjaQgnjfgPg/Qgdh6gMjvQgOkHAuAfQAVAOAHCcQAQE8ADAjQAsIRC7CoQDcDFEXCNQD0B7DHAnQDpAuDBAHQETAKDxg/QCFgiDDhdQDAhaDFh2QHIkTCMjKQFooHCqkaQGMqUBMmNQAli+gloxQgioGgoiZQgkiJiZk0QiglChkh8QhVhplIgrQhDgJjCgTQiUgOg8gNQinglnlBCQlZAvjEA8IiQA3QA5gdBXgaQBOgeBPgcQEJheA2AAQA0AABSAGQBRAEBjgKQBDgGDdgsQCzgkApAIQAkAIAbASQAhAVA1AQQA9ASCCALQCRANAXAFQAmAICKANQB+ASAbAnQA6BRC3FJQDWGAAmCCQAhBugVBtQgOBEgCAQQgGAyAKAzQAQBTBQBbQApAvANASQAZAlAFAkQAGAtgMDfQgLDSARBFQAYBmhOEqQhUE9h0C8QhbCTiyF1Qi1F6gsBHQg2BZihCvQjPDhjrDBQqrIvpaAoQiWAKiLAAQoWAAl1iSgEgiIgQ5QAFg8CKinIAdgkQCOkVAdgkQA1hBCIhOQCPhRAMgNQANgNAig/QAnhIAbglQA/hXBIgZQB1gmBNgiQBdgoA/gsQApgcC/hPIBKgeIgCABQoWERonIKQjEC4iICgIgnBOQhqDQgWAAQgHAAACgXg");
	this.shape.setTransform(241.4,282.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.1,472.9,554.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA8A38").s().p("EgLsAmmIlogiQk2geknjJQhihDhzhiQhxhmgsgjQB6AxDoBhQDKBTCIAuQF1B9EtgLQFvgPF4jWQGjjvHloBQLOr5CTsbQAwkEgQkIQgEhRgNhhIgNh0QgOjHhZk6QhmlqhphxQhJhPjBg8Qi4g5j3gbQj7gbj0AMQkGANjCA5QmEBxpLFMQj2CLjHCHIjJChQiZB7AgghQBhhhDSiQIAPgKIDGieQKQoFDQhbQCKg9EZg7QFShHFHgOQGWgSEwBOQFsBdC8DgQDEDqAwKbQASD+gIEJQgHDpgXCPQg+F8idGNQiTFxiOCyQgfAmiUDCQiQC8hiB5QlCGMi4ByQoaFLm/A3QhqAMh1AAQhMAAhQgFg");
	this.shape.setTransform(213.4,252.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,416.8,495.1);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A46F29").s().p("EgQwAjdQhygahhhBQhNgzh2hxIj6jyQj9jrgDlnQgBhxAYhvIAYhZIgHBXQgGBpACBeQAIEpBdA6QApAZBrBkQCIB+BCA2QEYDmDAgTQFrglE4iHQHyjYGbnUQEalBC3k+QEtoKCVqOQAZhsgVjMQgUjFg3jbQg5jkhLirQhTi9hWhIQisiTnSAgQm6AemFChQmtCxpHHLQkjDmjODDQAsg9BVhgQCrjBDRi1QKcpCMWjsQDHg8HJAYQF2ASDRAsQCIAdCEBvQBjBTBJBrQAwBHAzCOQBMDUAbD5QBPLllzM4QjOHJliGGQkzFSmJEGQlRDilYCHQk0B4jKAJQgqACgnAAQiAAAhcgUg");
	this.shape.setTransform(203.5,233.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,397.1,457.8);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA8A38").s().p("AvMdOQiYgThqipIhKiFQgohJgfgcQhCg6AbhgQAIgeAQgeIAPgYQAmCBBxB1QB/CFB9AAQB3AADfhZQCcg+CvhbQBtg5DZkaQCkjUCYjuQB6jACSnKQCdnuARk1QAPkniokPQhDhshXhWQhOhNhIglQhwg7sfIqQmPEVl6EhQD2jeEMjrQIYnXBthDQBBgoC8grQC6gqDUgYQDmgbCiAGQC4AHAxAyQA/A/BABrQBQCGA1CfQCOGphYHXQhbHnmaJcQilD0jADeQitDJiWCDQkDDll3B9QkLBZi/AAQguAAgqgFg");
	this.shape.setTransform(147.3,192.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,284.6,375);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E260E").s().p("AndWKQgpgFirgsQgwgNgPgiQgKgXADgxQAEg2gCgXQAKAMAMALQBpBfDKg2QDJg0B2i9QAfgxA6h1QAzhrAkg0QBaiBB2ldQBakJA9j2QAsizhMk8QgjiMgvhsQgyhygzgrQhYhLm3FRQhrBShnBVQBghSBlhTQGuliBugUQBYgQCWg9QB3gmA1A8QBBBJA6EdQA4EVAADcQAACmiFFLIhxEUQhBCjghBxQhGDwkQEnQhpByhtBdQhlBVg8AgQhNAphaAAQgYAAgZgDgAsSRmIgNgjQAjAeAGAuIABAGQgRgVgMgag");
	this.shape.setTransform(85,147.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.2,160,284.2);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E260E").s().p("AkJSZQgPg3gJgLQgLgMhGgJQg7gIgTg8QgKgkgIgVQgOgkgYgcQgyg6gtkJQgojlAAh0QAAhIBEj2IBDjpQBqieFTlGQDgjYDFiqQAwgqAdAAQAaABAUAlQALATAeBOQAfBTAdA3QBDCDgQE2QgKCxgpFUQgVDTjrHQQhfC7hYCOQhaCRgnAbQhOA2hbAAQhcAAgWg2g");
	this.shape.setTransform(69,128.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,128,246.2);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA8A38").s().p("AjLRRQgLgzgIgKQgIgMg1gJQgugIgPg3QgWhVgVgdQgmg3gjj4QgejXAAhtQAAhEA0jnIAzjaQBSiVEEkyQCujOCVidQAlgnAWABQATAAAQAjQAIASAXBJQAZBOAWA0QAzB7gNEjQgEBlgNCWIgVDqQgQDGi1G0QhICvhECGQhFCHgeAaQg7AzhHAAQhGAAgRgzg");
	this.shape.setTransform(54.1,120.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,98.2,231.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#8F9194","#6E6F72","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.396,0.686,0.824,0.929,1],-5.4,-1.8,0,-5.4,-1.8,244.1).s().p("EgV5ApZQn8icixmaQgrhkgvjRQgsjWgRg7Qggh0gSjnQgUj/AvAbIhGiTQg2g7g7jlQg1jQgDhqQgChLA/kFIA/j3IDOm/QgGBbCIkEQCylRAcgkQAtg6BOh3QBFhnAWgYQAHgIBpgrQBkgpAegsQA+hYBJgdQAxgSAVgrQAPgfAHg5QAIhLADgOQALgvAegWQAYgSDkg1QEGg8CIg4QEKhrA5gFQBGgEChgYIEVgqQBEgLDgg5QC2gvArAFQAlAFAcAQQAhASA3AMQA+ANCFADQCTACAZAEQAnAFCNAEQCAAJAdAjQA9BLDCEzQDjFmAqB8QAkBogTBrQgNBEgBAPQgFAxALAwQASBQBTBSQAsAsANARQAaAiAGAiQAHAqgGDaQgHDMATBCQAbBihKEmQhOE5hyC+QhZCTiuF2QivF6grBJQg1BZihC1QjODnjrDLQqsJMplBPQkhAlj6AAQmFAAkmhag");
	this.shape.setTransform(255,278.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,500,547.8);


(lib.shelltop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(16.8,89.1,0.342,0.342,0,0,0,54,120.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.9,86.5,0.342,0.342,0,0,0,69.1,128.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.instance_2 = new lib.Path_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(36.5,86.5,0.342,0.342,0,0,0,84.9,147.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.instance_3 = new lib.Path_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(57.7,87.2,0.342,0.342,0,0,0,147.2,192.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.instance_4 = new lib.Path_4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(75.4,93.8,0.342,0.342,0,0,0,203.5,234);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.instance_5 = new lib.Path_5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.6,93.5,0.342,0.342,0,0,0,213.3,252.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(86.4,94.7,0.342,0.342,0,0,0,241.4,282.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.instance_7 = new lib.Path_7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(83.6,94.7,0.342,0.342,0,0,0,249.8,282.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,191.7,213);


(lib.mussel08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,x:-4.3,y:-16.2},0).wait(15).to({rotation:-2.3,y:-19.5},0).wait(1).to({rotation:-4.5,x:-4.5,y:-23},0).wait(1).to({rotation:-6.8,x:-4.9,y:-26.3},0).wait(1).to({rotation:-9,x:-5.3,y:-29.7},0).wait(1).to({rotation:-6.3,x:-4.8,y:-25.5},0).wait(1).to({rotation:-3.5,x:-4.4,y:-21.5},0).wait(1).to({rotation:-0.8,x:-4.3,y:-17.3},0).wait(1).to({rotation:2,y:-13.2},0).wait(9).to({rotation:0.9,x:-4.2,y:-14.8},0).wait(1).to({rotation:-0.1,y:-16.4},0).wait(1).to({rotation:-1.2,x:-4.3,y:-18},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1,y:-17.7},0).wait(1).to({rotation:0.2,y:-15.8},0).wait(1).to({rotation:1.5,y:-14},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(2));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.mussel07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,rotation:-1.3,x:-4.3,y:-18.1},0).wait(1).to({rotation:-2.6,x:-4.4,y:-20.1},0).wait(1).to({rotation:-3.9,x:-4.5,y:-22},0).wait(1).to({rotation:-5.2,x:-4.6,y:-23.9},0).wait(1).to({rotation:-6.5,x:-4.8,y:-25.9},0).wait(1).to({rotation:-7.7,x:-5.1,y:-27.7},0).wait(1).to({rotation:-9,x:-5.3,y:-29.7},0).wait(1).to({rotation:-6.3,x:-4.8,y:-25.5},0).wait(1).to({rotation:-3.5,x:-4.4,y:-21.5},0).wait(1).to({rotation:-0.8,x:-4.3,y:-17.3},0).wait(1).to({rotation:2,y:-13.2},0).wait(29).to({rotation:1.4,y:-14.1},0).wait(1).to({rotation:0.8,x:-4.2,y:-15},0).wait(1).to({rotation:0.2,x:-4.3,y:-15.9},0).wait(1).to({rotation:-0.4,x:-4.2,y:-16.9},0).wait(1).to({rotation:-1.1,x:-4.3,y:-17.8},0).wait(1).to({rotation:-1.7,y:-18.7},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1.4,y:-18.4},0).wait(1).to({rotation:-0.6,y:-17.1},0).wait(1).to({rotation:0.2,y:-15.8},0).wait(1).to({rotation:1.1,y:-14.6},0).wait(1).to({rotation:1.9,y:-13.4},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(21));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.mussel06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,x:-4.3,y:-16.2},0).wait(14).to({rotation:-1,y:-17.7},0).wait(1).to({rotation:-2,y:-19.2},0).wait(1).to({rotation:-3,x:-4.4,y:-20.7},0).wait(1).to({rotation:-4,x:-4.5,y:-22.2},0).wait(1).to({rotation:-5,x:-4.6,y:-23.7},0).wait(1).to({rotation:-6,x:-4.7,y:-25.2},0).wait(1).to({rotation:-7,x:-5,y:-26.7},0).wait(1).to({rotation:-8,x:-5.1,y:-28.2},0).wait(1).to({rotation:-9,x:-5.3,y:-29.7},0).wait(1).to({rotation:-6.3,x:-4.8,y:-25.5},0).wait(1).to({rotation:-3.5,x:-4.4,y:-21.5},0).wait(1).to({rotation:-0.8,x:-4.3,y:-17.3},0).wait(1).to({rotation:2,y:-13.2},0).wait(37).to({rotation:1.4,y:-14.1},0).wait(1).to({rotation:0.8,x:-4.2,y:-15},0).wait(1).to({rotation:0.2,x:-4.3,y:-15.9},0).wait(1).to({rotation:-0.4,x:-4.2,y:-16.9},0).wait(1).to({rotation:-1.1,x:-4.3,y:-17.8},0).wait(1).to({rotation:-1.7,y:-18.7},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1.6,y:-18.6},0).wait(1).to({rotation:-0.8,y:-17.5},0).wait(1).to({rotation:-0.1,y:-16.4},0).wait(1).to({rotation:0.6,y:-15.3},0).wait(1).to({rotation:1.3,y:-14.2},0).wait(1).to({rotation:2,y:-13.1},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(7));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.mussel05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,rotation:-1.3,x:-4.3,y:-18.1},0).wait(1).to({rotation:-2.6,x:-4.4,y:-20.1},0).wait(1).to({rotation:-3.9,x:-4.5,y:-22},0).wait(1).to({rotation:-5.2,x:-4.6,y:-23.9},0).wait(1).to({rotation:-6.5,x:-4.8,y:-25.9},0).wait(1).to({rotation:-7.7,x:-5.1,y:-27.7},0).wait(1).to({rotation:-9,x:-5.3,y:-29.7},0).wait(1).to({rotation:-7.5,x:-5,y:-27.3},0).wait(1).to({rotation:-5.9,x:-4.8,y:-25},0).wait(1).to({rotation:-4.3,x:-4.5,y:-22.6},0).wait(1).to({rotation:-2.7,x:-4.3,y:-20.3},0).wait(1).to({rotation:-1.1,y:-17.9},0).wait(1).to({rotation:0.4,x:-4.2,y:-15.5},0).wait(1).to({rotation:2,x:-4.3,y:-13.2},0).wait(9).to({rotation:1.4,y:-14.1},0).wait(1).to({rotation:0.8,x:-4.2,y:-15},0).wait(1).to({rotation:0.2,x:-4.3,y:-15.9},0).wait(1).to({rotation:-0.4,x:-4.2,y:-16.9},0).wait(1).to({rotation:-1.1,x:-4.3,y:-17.8},0).wait(1).to({rotation:-1.7,y:-18.7},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1.7,y:-18.7},0).wait(1).to({rotation:-1,y:-17.7},0).wait(1).to({rotation:-0.4,y:-16.8},0).wait(1).to({rotation:0.2,y:-15.8},0).wait(1).to({rotation:0.9,y:-14.9},0).wait(1).to({rotation:1.5,y:-14},0).wait(1).to({rotation:2.1,y:-13},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(8));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.mussel04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,rotation:-0.3,x:-4.2,y:-16.7},0).wait(1).to({rotation:-0.7,x:-4.3,y:-17.2},0).wait(1).to({rotation:-1,x:-4.2,y:-17.8},0).wait(1).to({rotation:-1.4,x:-4.3,y:-18.3},0).wait(1).to({rotation:-1.7,y:-18.8},0).wait(1).to({rotation:-2.1,y:-19.3},0).wait(1).to({rotation:-2.4,x:-4.4,y:-19.9},0).wait(1).to({rotation:-2.8,x:-4.3,y:-20.4},0).wait(1).to({rotation:-3.1,x:-4.4,y:-20.9},0).wait(1).to({rotation:-3.5,y:-21.4},0).wait(1).to({rotation:-3.8,x:-4.5,y:-21.9},0).wait(1).to({rotation:-4.2,y:-22.4},0).wait(1).to({rotation:-4.5,y:-23},0).wait(1).to({rotation:-4.9,x:-4.6,y:-23.5},0).wait(1).to({rotation:-5.2,y:-24},0).wait(1).to({rotation:-5.6,x:-4.7,y:-24.5},0).wait(1).to({rotation:-5.9,x:-4.8,y:-25},0).wait(1).to({rotation:-6.3,y:-25.5},0).wait(1).to({rotation:-6.6,x:-4.9,y:-26.1},0).wait(1).to({rotation:-7,y:-26.6},0).wait(1).to({rotation:-7.3,x:-5,y:-27.1},0).wait(1).to({rotation:-7.6,y:-27.6},0).wait(1).to({rotation:-8,x:-5.1,y:-28.1},0).wait(1).to({rotation:-8.3,x:-5.2,y:-28.6},0).wait(1).to({rotation:-8.7,x:-5.3,y:-29.2},0).wait(1).to({rotation:-9,y:-29.7},0).wait(1).to({rotation:-7.7,x:-5.1,y:-27.6},0).wait(1).to({rotation:-6.3,x:-4.8,y:-25.5},0).wait(1).to({rotation:-4.9,x:-4.6,y:-23.5},0).wait(1).to({rotation:-3.5,x:-4.4,y:-21.5},0).wait(1).to({rotation:-2.1,x:-4.3,y:-19.4},0).wait(1).to({rotation:-0.8,y:-17.3},0).wait(1).to({rotation:0.6,x:-4.2,y:-15.2},0).wait(1).to({rotation:2,x:-4.3,y:-13.2},0).wait(31).to({rotation:0.9,x:-4.2,y:-14.8},0).wait(1).to({rotation:-0.1,y:-16.4},0).wait(1).to({rotation:-1.2,x:-4.3,y:-18},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1,y:-17.7},0).wait(1).to({rotation:0.2,y:-15.8},0).wait(1).to({rotation:1.5,y:-14},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(69));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.mussel03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,x:-4.3,y:-16.2},0).wait(16).to({rotation:-1.8,y:-18.9},0).wait(1).to({rotation:-3.6,x:-4.4,y:-21.6},0).wait(1).to({rotation:-5.4,x:-4.7,y:-24.3},0).wait(1).to({rotation:-7.2,x:-5,y:-27},0).wait(1).to({rotation:-9,x:-5.3,y:-29.7},0).wait(1).to({rotation:-7.2,x:-4.9,y:-26.9},0).wait(1).to({rotation:-5.4,x:-4.6,y:-24.2},0).wait(1).to({rotation:-3.5,x:-4.4,y:-21.5},0).wait(1).to({rotation:-1.7,x:-4.3,y:-18.7},0).wait(1).to({rotation:0.2,y:-15.9},0).wait(1).to({rotation:2,y:-13.2},0).wait(24).to({rotation:1.2,x:-4.2,y:-14.5},0).wait(1).to({rotation:0.3,x:-4.3,y:-15.7},0).wait(1).to({rotation:-0.6,x:-4.2,y:-17.1},0).wait(1).to({rotation:-1.4,x:-4.3,y:-18.4},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1.7,y:-18.8},0).wait(1).to({rotation:-1.2,x:-4.2,y:-17.9},0).wait(1).to({rotation:-0.6,x:-4.3,y:-17.1},0).wait(1).to({rotation:0,x:-4.2,y:-16.3},0).wait(1).to({rotation:0.5,y:-15.4},0).wait(1).to({rotation:1.1,x:-4.3,y:-14.6},0).wait(1).to({rotation:1.6,y:-13.8},0).wait(1).to({rotation:2.2,y:-12.9},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(1));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.mussel02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,x:-4.3,y:-16.2},0).wait(64).to({regX:-1.4,regY:95.7,x:-90,y:-15.9},0).wait(1).to({regX:84.3,regY:95.4,rotation:-2.3,x:-4.3,y:-19.5},0).wait(1).to({rotation:-4.5,x:-4.5,y:-23},0).wait(1).to({rotation:-6.8,x:-4.9,y:-26.3},0).wait(1).to({rotation:-9,x:-5.3,y:-29.7},0).wait(1).to({rotation:-6.3,x:-4.8,y:-25.5},0).wait(1).to({rotation:-3.5,x:-4.4,y:-21.5},0).wait(1).to({rotation:-0.8,x:-4.3,y:-17.3},0).wait(1).to({rotation:2,y:-13.2},0).wait(33).to({rotation:0.9,x:-4.2,y:-14.8},0).wait(1).to({rotation:-0.1,y:-16.4},0).wait(1).to({rotation:-1.2,x:-4.3,y:-18},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1,y:-17.7},0).wait(1).to({rotation:0.2,y:-15.8},0).wait(1).to({rotation:1.5,y:-14},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(17));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.mussel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:84.3,regY:95.4,rotation:-2.3,x:-4.3,y:-19.5},0).wait(1).to({rotation:-4.5,x:-4.5,y:-23},0).wait(1).to({rotation:-6.8,x:-4.9,y:-26.3},0).wait(1).to({rotation:-9,x:-5.3,y:-29.7},0).wait(1).to({rotation:-6.3,x:-4.8,y:-25.5},0).wait(1).to({rotation:-3.5,x:-4.4,y:-21.5},0).wait(1).to({rotation:-0.8,x:-4.3,y:-17.3},0).wait(1).to({rotation:2,y:-13.2},0).wait(9).to({rotation:0.9,x:-4.2,y:-14.8},0).wait(1).to({rotation:-0.1,y:-16.4},0).wait(1).to({rotation:-1.2,x:-4.3,y:-18},0).wait(1).to({rotation:-2.3,y:-19.6},0).wait(1).to({rotation:-1,y:-17.7},0).wait(1).to({rotation:0.2,y:-15.8},0).wait(1).to({rotation:1.5,y:-14},0).wait(1).to({rotation:2.8,x:-4.4,y:-12.1},0).wait(41));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.bubbles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// singleBubble
	this.instance = new lib.singleBubble();
	this.instance.parent = this;
	this.instance.setTransform(-262.9,502.9,0.277,0.277);
	this.instance.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0.2,regY:0.2,x:-309.3,y:394.4,alpha:0.49},0).wait(1).to({x:-355.7,y:286},0).wait(1).to({x:-402.2,y:177.5},0).wait(1).to({x:-353.8,y:108.3},0).wait(1).to({x:-305.5,y:39},0).wait(1).to({x:-257.2,y:-30.2},0).wait(1).to({x:-208.8,y:-99.4},0).wait(1).to({x:-160.5,y:-168.7},0).wait(1).to({x:-112.2,y:-237.9},0).wait(1).to({x:-139.4,y:-311.5},0).wait(1).to({x:-166.6,y:-385},0).wait(1).to({x:-193.8,y:-458.6},0).wait(1).to({x:-221,y:-532.2},0).wait(1).to({x:-248.2,y:-605.7},0).wait(1).to({x:-275.4,y:-679.3},0).wait(1).to({x:-302.6,y:-752.9},0).wait(1).to({x:-295.5,y:-831.3},0).wait(1).to({x:-283.3,y:-909.3},0).wait(1).to({x:-267.2,y:-986.5},0).wait(1).to({x:-247.9,y:-1063},0).wait(1).to({x:-226.4,y:-1138.9},0).wait(1).to({x:-203.5,y:-1214.4},0).wait(1).to({x:-180.2,y:-1289.8},0).wait(1).to({x:-157.2,y:-1365.3},0).wait(1).to({x:-75.5,y:-1567.5},0).wait(1).to({x:11.8,y:-1767.3},0).wait(1).to({x:100.5,y:-1966.6},0).wait(1).to({x:189.5,y:-2165.9},0).wait(1));

	// singleBubble
	this.instance_1 = new lib.singleBubble();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-170.2,1057.1,0.618,0.618);
	this.instance_1.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0.2,regY:0.2,x:-167.7,y:952.3,alpha:0.49},0).wait(1).to({x:-165.3,y:847.3},0).wait(1).to({x:-163,y:742.4},0).wait(1).to({x:-98.2,y:665.5},0).wait(1).to({x:-33.4,y:588.7},0).wait(1).to({x:31.4,y:511.9},0).wait(1).to({x:96.2,y:435},0).wait(1).to({x:161,y:358.2},0).wait(1).to({x:225.8,y:281.4},0).wait(1).to({x:224.4,y:180.7},0).wait(1).to({x:223.1,y:80},0).wait(1).to({x:221.7,y:-20.6},0).wait(1).to({x:220.3,y:-121.3},0).wait(1).to({x:219,y:-222},0).wait(1).to({x:217.6,y:-322.7},0).wait(1).to({x:216.3,y:-423.4},0).wait(1).to({x:217,y:-497.3},0).wait(1).to({x:217.8,y:-571.3},0).wait(1).to({x:218.6,y:-645.3},0).wait(1).to({x:219.4,y:-719.2},0).wait(1).to({x:220.1,y:-793.2},0).wait(1).to({x:220.9,y:-867.2},0).wait(1).to({x:221.7,y:-941.1},0).wait(1).to({x:222.5,y:-1015.1},0).wait(1).to({x:225.7,y:-1143.2},0).wait(1).to({x:229,y:-1271.2},0).wait(1).to({x:232.3,y:-1399.3},0).wait(1).to({x:235.6,y:-1527.4},0).wait(1));

	// singleBubble
	this.instance_2 = new lib.singleBubble();
	this.instance_2.parent = this;
	this.instance_2.setTransform(277.7,1264.1,0.406,0.406);
	this.instance_2.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0.2,regY:0.2,x:209.6,y:1176.6,alpha:0.49},0).wait(1).to({x:141.4,y:1089},0).wait(1).to({x:73.2,y:1001.4},0).wait(1).to({x:126.7,y:918.1},0).wait(1).to({x:180.1,y:834.8},0).wait(1).to({x:233.6,y:751.6},0).wait(1).to({x:287.1,y:668.3},0).wait(1).to({x:340.5,y:585.1},0).wait(1).to({x:394,y:501.8},0).wait(1).to({x:416.9,y:427.8},0).wait(1).to({x:439.9,y:353.8},0).wait(1).to({x:462.8,y:279.9},0).wait(1).to({x:485.7,y:205.9},0).wait(1).to({x:508.6,y:131.9},0).wait(1).to({x:531.6,y:57.9},0).wait(1).to({x:554.5,y:-16},0).wait(1).to({x:556.4,y:-94.6},0).wait(1).to({x:558.3,y:-173.1},0).wait(1).to({x:560.2,y:-251.7},0).wait(1).to({x:562.1,y:-330.2},0).wait(1).to({x:570.8,y:-485.4},0).wait(1).to({x:579.5,y:-640.6},0).wait(1).to({x:588.2,y:-795.8},0).wait(1).to({x:597,y:-951},0).wait(1).to({x:581.5,y:-1031.8},0).wait(1).to({x:566.1,y:-1112.7},0).wait(1).to({x:550.7,y:-1193.5},0).wait(1).to({x:535.3,y:-1274.4},0).wait(1));

	// singleBubble
	this.instance_3 = new lib.singleBubble();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,1013,0.406,0.406);
	this.instance_3.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0.2,regY:0.2,x:127.5,y:918.9,alpha:0.49},0).wait(1).to({x:227,y:824.7},0).wait(1).to({x:326.4,y:730.6},0).wait(1).to({x:285.6,y:650.6},0).wait(1).to({x:244.8,y:570.6},0).wait(1).to({x:203.9,y:490.7},0).wait(1).to({x:163.1,y:410.7},0).wait(1).to({x:122.3,y:330.8},0).wait(1).to({x:81.5,y:250.8},0).wait(1).to({x:123.6,y:168.7},0).wait(1).to({x:165.7,y:86.6},0).wait(1).to({x:207.8,y:4.5},0).wait(1).to({x:250,y:-77.6},0).wait(1).to({x:292.1,y:-159.7},0).wait(1).to({x:334.2,y:-241.8},0).wait(1).to({x:376.4,y:-323.9},0).wait(1).to({x:386.8,y:-471.1},0).wait(1).to({x:397.3,y:-618.3},0).wait(1).to({x:407.7,y:-765.5},0).wait(1).to({x:418.2,y:-912.7},0).wait(1).to({x:428.7,y:-1059.9},0).wait(1).to({x:439.1,y:-1207.1},0).wait(1).to({x:449.6,y:-1354.1},0).wait(1).to({x:460.1,y:-1501.5},0).wait(1).to({x:489.4,y:-1566.8},0).wait(1).to({x:518.7,y:-1632.2},0).wait(1).to({x:548.1,y:-1697.5},0).wait(1).to({x:577.4,y:-1762.9},0).wait(1));

	// singleBubble
	this.instance_4 = new lib.singleBubble();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.6,786.8,0.406,0.406);
	this.instance_4.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0.2,regY:0.2,x:86.2,y:701.5,alpha:0.49},0).wait(1).to({x:172.8,y:616.1},0).wait(1).to({x:259.5,y:530.8},0).wait(1).to({x:209,y:443.9},0).wait(1).to({x:158.5,y:357},0).wait(1).to({x:108,y:270.1},0).wait(1).to({x:57.5,y:183.2},0).wait(1).to({x:7,y:96.3},0).wait(1).to({x:-43.4,y:9.4},0).wait(1).to({x:-30,y:-104.2},0).wait(1).to({x:-16.6,y:-217.9},0).wait(1).to({x:-3.2,y:-331.6},0).wait(1).to({x:10.2,y:-445.3},0).wait(1).to({x:23.6,y:-558.9},0).wait(1).to({x:37,y:-672.6},0).wait(1).to({x:50.4,y:-786.3},0).wait(1).to({x:69.9,y:-881.8},0).wait(1).to({x:89.3,y:-977.3},0).wait(1).to({x:108.8,y:-1072.8},0).wait(1).to({x:128.3,y:-1168.3},0).wait(1).to({x:147.8,y:-1263.8},0).wait(1).to({x:167.2,y:-1359.3},0).wait(1).to({x:186.7,y:-1454.7},0).wait(1).to({x:206.2,y:-1550.3},0).wait(1).to({x:245.3,y:-1638.9},0).wait(1).to({x:284.4,y:-1727.6},0).wait(1).to({x:323.6,y:-1816.2},0).wait(1).to({x:362.7,y:-1904.9},0).wait(1));

	// singleBubble
	this.instance_5 = new lib.singleBubble();
	this.instance_5.parent = this;
	this.instance_5.setTransform(136.9,515,0.406,0.406);
	this.instance_5.alpha = 0.488;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0.2,regY:0.2,x:195,y:391.5,alpha:0.49},0).wait(1).to({x:253.1,y:267.9},0).wait(1).to({x:311.1,y:144.3},0).wait(1).to({x:274,y:70.8},0).wait(1).to({x:236.9,y:-2.7},0).wait(1).to({x:199.7,y:-76.2},0).wait(1).to({x:162.6,y:-149.7},0).wait(1).to({x:125.5,y:-223.2},0).wait(1).to({x:88.4,y:-296.8},0).wait(1).to({x:140.8,y:-420.2},0).wait(1).to({x:193.3,y:-543.6},0).wait(1).to({x:245.8,y:-667},0).wait(1).to({x:298.2,y:-790.4},0).wait(1).to({x:350.7,y:-913.8},0).wait(1).to({x:403.2,y:-1037.2},0).wait(1).to({x:455.7,y:-1160.6},0).wait(1).to({x:445,y:-1315.9},0).wait(1).to({x:434.3,y:-1471.3},0).wait(1).to({x:423.6,y:-1626.6},0).wait(1).to({x:412.9,y:-1781.9},0).wait(1).to({x:402.2,y:-1937.2},0).wait(1).to({x:391.6,y:-2092.6},0).wait(1).to({x:380.9,y:-2247.7},0).wait(1).to({x:370.2,y:-2403.2},0).wait(1).to({x:358.5,y:-2503.5},0).wait(1).to({x:346.9,y:-2603.8},0).wait(1).to({x:335.2,y:-2704.1},0).wait(1).to({x:323.5,y:-2804.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.5,382.2,783.2,1015);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mussel("synched",8);
	this.instance.parent = this;
	this.instance.setTransform(-763.6,31.8,1.09,1.22,0,-36.4,-53.1);
	this.instance.filters = [new cjs.ColorFilter(0.37, 0.37, 0.37, 1, 18.9, 20.16, 18.27, 0)];
	this.instance.cache(-97,-120,201,221);

	this.instance_1 = new lib.mussel08("synched",8);
	this.instance_1.parent = this;
	this.instance_1.setTransform(758.8,48.4,1.287,1.42,0,13,-165.1);
	this.instance_1.filters = [new cjs.ColorFilter(0.46, 0.46, 0.46, 1, 27.54, 0, 0, 0)];
	this.instance_1.cache(-97,-120,201,221);

	this.instance_2 = new lib.mussel07("synched",8);
	this.instance_2.parent = this;
	this.instance_2.setTransform(470.5,78.5,0.832,1.344,0,21.8,43.8);
	this.instance_2.filters = [new cjs.ColorFilter(0.42, 0.42, 0.42, 1, 51.04, 47.56, 2.9, 0)];
	this.instance_2.cache(-97,-120,201,221);

	this.instance_3 = new lib.mussel06("synched",8);
	this.instance_3.parent = this;
	this.instance_3.setTransform(398.5,4,1.071,1.798,0,-6,-21.8);

	this.instance_4 = new lib.mussel03("synched",8);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-79.9,-38.5,1.236,1.785,0,-1.7,-17.5);
	this.instance_4.filters = [new cjs.ColorFilter(0.37, 0.37, 0.37, 1, 32.13, 0, 0, 0)];
	this.instance_4.cache(-97,-120,201,221);

	this.instance_5 = new lib.mussel02("synched",8);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-227.8,17,1.02,1.545,0,-10.2,169.8);
	this.instance_5.filters = [new cjs.ColorFilter(0.63, 0.63, 0.63, 1, 8.88, 15.54, 6.29, 0)];
	this.instance_5.cache(-97,-120,201,221);

	this.instance_6 = new lib.mussel04("synched",8);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.2,19,1.548,1.548,12.5,0,0,0.1,0.1);

	this.instance_7 = new lib.mussel05("synched",8);
	this.instance_7.parent = this;
	this.instance_7.setTransform(158.3,63.2,1.191,1.193,21.8);
	this.instance_7.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 58.14, 29.07, 0, 0)];
	this.instance_7.cache(-97,-120,201,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-863.6,-254.3,1758.6,452.1);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mussel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-764.7,32.4,1.09,1.22,0,-36.4,-53.1);
	this.instance.filters = [new cjs.ColorFilter(0.37, 0.37, 0.37, 1, 18.9, 20.16, 18.27, 0)];
	this.instance.cache(-97,-120,201,221);

	this.instance_1 = new lib.mussel08("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(757.7,49,1.287,1.42,0,13,-165.1);
	this.instance_1.filters = [new cjs.ColorFilter(0.46, 0.46, 0.46, 1, 27.54, 0, 0, 0)];
	this.instance_1.cache(-97,-120,201,221);

	this.instance_2 = new lib.mussel07("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(469.4,79.1,0.832,1.344,0,21.8,43.8);
	this.instance_2.filters = [new cjs.ColorFilter(0.42, 0.42, 0.42, 1, 51.04, 47.56, 2.9, 0)];
	this.instance_2.cache(-97,-120,201,221);

	this.instance_3 = new lib.mussel06("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(397.4,4.7,1.071,1.798,0,-6,-21.8);

	this.instance_4 = new lib.mussel03("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-81,-37.8,1.236,1.785,0,-1.7,-17.5);
	this.instance_4.filters = [new cjs.ColorFilter(0.37, 0.37, 0.37, 1, 32.13, 0, 0, 0)];
	this.instance_4.cache(-97,-120,201,221);

	this.instance_5 = new lib.mussel02("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-228.9,17.6,1.02,1.545,0,-10.2,169.8);
	this.instance_5.filters = [new cjs.ColorFilter(0.63, 0.63, 0.63, 1, 8.88, 15.54, 6.29, 0)];
	this.instance_5.cache(-97,-120,201,221);

	this.instance_6 = new lib.mussel04("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-3.3,19.7,1.548,1.548,12.5,0,0,0.1,0.1);

	this.instance_7 = new lib.mussel05("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(157.2,63.8,1.191,1.193,21.8);
	this.instance_7.filters = [new cjs.ColorFilter(0.43, 0.43, 0.43, 1, 58.14, 29.07, 0, 0)];
	this.instance_7.cache(-97,-120,201,221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-867.1,-253.6,1761,451.1);


(lib.musselsSM_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sand-top
	this.instance = new lib.Sandfront("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(687.1,925.2,0.711,0.711,0,0,0,999.1,126.7);

	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(687.1,718.9,0.711,0.711,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0.1,y:718.9},8).wait(132).to({_off:false,regX:999.1,regY:126.7,y:925.2},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},8).wait(132).to({startPosition:0},0).to({_off:true,regX:999.1,regY:126.7,y:925.2},6).wait(1));

	// mussel
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(702.6,950,0.711,0.711,0,0,0,0.1,0.1);

	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(701.7,619.7,0.711,0.711);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:0,regY:0,x:701.7,y:619.7},8).wait(132).to({_off:false,regX:0.1,regY:0.1,x:702.6,y:950},6).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},8).wait(132).to({startPosition:0},0).to({_off:true,regX:0.1,regY:0.1,x:702.6,y:950},6).wait(1));

	// bubbles
	this.instance_4 = new lib.bubbles("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(990.8,487.3,0.144,0.144,0,0,0,107.5,-187.2);
	this.instance_4.alpha = 0.531;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({_off:false},0).wait(1).to({regX:118.8,regY:-770.1,x:1001.7,y:385.4,alpha:0.511,startPosition:1},0).wait(1).to({x:1011.1,y:367.6,alpha:0.492,startPosition:2},0).wait(1).to({x:1020.4,y:349.8,alpha:0.473,startPosition:3},0).wait(1).to({x:1029.8,y:332,alpha:0.454,startPosition:4},0).wait(1).to({x:1039.1,y:314.2,alpha:0.435,startPosition:5},0).wait(1).to({x:1048.5,y:296.4,alpha:0.416,startPosition:6},0).wait(1).to({x:1057.8,y:278.7,alpha:0.398,startPosition:7},0).wait(1).to({x:1067.2,y:260.9,alpha:0.379,startPosition:8},0).wait(1).to({x:1076.5,y:243.1,alpha:0.36,startPosition:9},0).wait(1).to({x:1085.9,y:225.3,alpha:0.341,startPosition:10},0).wait(1).to({x:1095.2,y:207.5,alpha:0.322,startPosition:11},0).wait(1).to({x:1082.8,y:176.7,alpha:0.303,startPosition:12},0).wait(1).to({x:1070.6,y:145.8,alpha:0.284,startPosition:13},0).wait(1).to({x:1058.8,y:114.8,alpha:0.265,startPosition:14},0).wait(1).to({x:1047.3,y:83.7,alpha:0.246,startPosition:15},0).wait(1).to({x:1036.2,y:52.4,alpha:0.227,startPosition:16},0).wait(1).to({x:1025.4,y:21,alpha:0.208,startPosition:17},0).wait(1).to({x:1015.1,y:-10.6,alpha:0.189,startPosition:18},0).wait(1).to({x:1005,y:-42.3,alpha:0.17,startPosition:19},0).wait(1).to({x:995.5,y:-74.1,alpha:0.151,startPosition:20},0).wait(1).to({x:986.3,y:-106,alpha:0.132,startPosition:21},0).wait(1).to({x:977.5,y:-138,alpha:0.114,startPosition:22},0).wait(1).to({x:969.2,y:-170.1,alpha:0.095,startPosition:23},0).wait(1).to({x:961.3,y:-202.4,alpha:0.076,startPosition:24},0).wait(1).to({x:953.9,y:-234.7,alpha:0.057,startPosition:25},0).wait(1).to({x:947,y:-267.2,alpha:0.038,startPosition:26},0).wait(1).to({x:940.5,y:-299.8,alpha:0.019,startPosition:27},0).wait(1).to({x:934.5,y:-332.4,alpha:0,startPosition:28},0).wait(1).to({x:929,y:-365.2,startPosition:0},0).wait(1).to({x:924.1,y:-398.1,startPosition:1},0).wait(1).to({x:919.7,y:-431,startPosition:2},0).wait(1).to({x:915.8,y:-463.9,startPosition:3},0).wait(1).to({x:912.4,y:-497,startPosition:4},0).wait(1).to({x:909.7,y:-530.1,startPosition:5},0).wait(1).to({x:907.5,y:-563.2,startPosition:6},0).wait(1).to({x:905.8,y:-596.4,startPosition:7},0).wait(1).to({x:904.8,y:-629.6,startPosition:8},0).wait(1).to({x:904.4,y:-662.8,startPosition:9},0).wait(1).to({x:904.6,y:-696,startPosition:10},0).wait(1).to({x:905.4,y:-729.2,startPosition:11},0).wait(1).to({x:906.9,y:-762.3,startPosition:12},0).wait(1).to({x:909,y:-795.5,startPosition:13},0).wait(1).to({x:911.8,y:-828.6,startPosition:14},0).wait(1).to({x:915.2,y:-861.6,startPosition:15},0).wait(1).to({x:919.2,y:-894.6,startPosition:16},0).wait(1).to({x:923.9,y:-927.4,startPosition:17},0).wait(1).to({x:929.3,y:-960.2,startPosition:18},0).wait(1).to({x:935.4,y:-992.8,startPosition:19},0).wait(1).to({x:942.1,y:-1025.4,startPosition:20},0).wait(1).to({x:949.5,y:-1057.8,startPosition:21},0).wait(1).to({x:957.5,y:-1090,startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).to({_off:true},1).wait(33));

	// bubbles
	this.instance_5 = new lib.bubbles("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(148.6,612.7,0.135,0.135,0,0,0,107.8,-192.2);
	this.instance_5.alpha = 0.531;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).wait(1).to({regX:118.8,regY:-770.1,x:150.4,y:495,alpha:0.511,startPosition:1},0).wait(1).to({x:150.8,y:455.1,alpha:0.492,startPosition:2},0).wait(1).to({x:151.1,y:415.2,alpha:0.473,startPosition:3},0).wait(1).to({x:151.4,y:375.3,alpha:0.454,startPosition:4},0).wait(1).to({x:151.7,y:335.4,alpha:0.435,startPosition:5},0).wait(1).to({x:152.1,y:295.5,alpha:0.416,startPosition:6},0).wait(1).to({x:152.4,y:255.6,alpha:0.398,startPosition:7},0).wait(1).to({x:152.7,y:215.7,alpha:0.379,startPosition:8},0).wait(1).to({x:153,y:175.8,alpha:0.36,startPosition:9},0).wait(1).to({x:153.4,y:135.8,alpha:0.341,startPosition:10},0).wait(1).to({x:153.7,y:95.9,alpha:0.322,startPosition:11},0).wait(1).to({x:154,y:56,alpha:0.303,startPosition:12},0).wait(1).to({x:154.3,y:16.1,alpha:0.284,startPosition:13},0).wait(1).to({x:154.7,y:-23.8,alpha:0.265,startPosition:14},0).wait(1).to({x:155,y:-63.7,alpha:0.246,startPosition:15},0).wait(1).to({x:155.3,y:-103.6,alpha:0.227,startPosition:16},0).wait(1).to({x:155.6,y:-143.4,alpha:0.208,startPosition:17},0).wait(1).to({x:156,y:-183.3,alpha:0.189,startPosition:18},0).wait(1).to({x:156.3,y:-223.2,alpha:0.17,startPosition:19},0).wait(1).to({x:156.6,y:-263.2,alpha:0.151,startPosition:20},0).wait(1).to({x:156.9,y:-303.1,alpha:0.132,startPosition:21},0).wait(1).to({x:157.3,y:-343,alpha:0.114,startPosition:22},0).wait(1).to({x:157.6,y:-382.9,alpha:0.095,startPosition:23},0).wait(1).to({x:157.9,y:-422.8,alpha:0.076,startPosition:24},0).wait(1).to({x:158.2,y:-462.7,alpha:0.057,startPosition:25},0).wait(1).to({x:158.6,y:-502.6,alpha:0.038,startPosition:26},0).wait(1).to({x:158.9,y:-542.5,alpha:0.019,startPosition:27},0).wait(1).to({x:159.2,y:-582.4,alpha:0,startPosition:28},0).wait(1).to({x:159.5,y:-622.3,startPosition:0},0).wait(1).to({x:159.9,y:-662.2,startPosition:1},0).wait(1).to({x:160.2,y:-702.1,startPosition:2},0).wait(1).to({x:160.5,y:-742,startPosition:3},0).wait(1).to({x:160.8,y:-781.9,startPosition:4},0).wait(1).to({x:161.2,y:-821.8,startPosition:5},0).wait(1).to({x:161.5,y:-861.7,startPosition:6},0).wait(1).to({x:161.8,y:-901.6,startPosition:7},0).wait(1).to({x:162.1,y:-941.5,startPosition:8},0).wait(1).to({x:162.5,y:-981.4,startPosition:9},0).wait(1).to({x:162.8,y:-1021.3,startPosition:10},0).to({_off:true},1).wait(24).to({_off:false,regX:107.3,regY:-192.3,scaleX:0.16,scaleY:0.16,x:657.7,y:404.9,alpha:0.352,startPosition:0},0).wait(1).to({regX:118.8,regY:-770.1,x:658.2,y:265.8,alpha:0.35,startPosition:1},0).wait(1).to({x:656.9,y:220.3,startPosition:2},0).wait(1).to({x:655.5,y:174.7,startPosition:3},0).wait(1).to({x:654.2,y:129.1,startPosition:4},0).wait(1).to({x:652.9,y:83.5,startPosition:5},0).wait(1).to({x:651.6,y:38,startPosition:6},0).wait(1).to({x:650.3,y:-7.6,startPosition:7},0).wait(1).to({x:649,y:-53.2,startPosition:8},0).wait(1).to({x:647.6,y:-98.8,startPosition:9},0).wait(1).to({x:646.3,y:-144.3,startPosition:10},0).wait(1).to({x:645,y:-189.9,startPosition:11},0).wait(1).to({x:643.7,y:-235.4,startPosition:12},0).wait(1).to({x:642.4,y:-281,startPosition:13},0).wait(1).to({x:641.1,y:-326.6,startPosition:14},0).wait(1).to({x:639.7,y:-372.2,startPosition:15},0).wait(1).to({x:638.4,y:-417.7,startPosition:16},0).wait(1).to({x:637.1,y:-463.3,startPosition:17},0).wait(1).to({x:635.8,y:-508.9,startPosition:18},0).wait(1).to({x:634.5,y:-554.5,startPosition:19},0).wait(1).to({x:633.1,y:-600,startPosition:20},0).wait(1).to({x:631.8,y:-645.6,startPosition:21},0).wait(1).to({x:630.5,y:-691.2,startPosition:22},0).wait(1).to({x:629.2,y:-736.8,startPosition:23},0).wait(1).to({x:627.9,y:-782.3,startPosition:24},0).wait(1).to({x:626.6,y:-827.9,startPosition:25},0).wait(1).to({x:625.2,y:-873.5,startPosition:26},0).wait(1).to({x:623.9,y:-919.1,startPosition:27},0).wait(1).to({x:622.6,y:-964.6,startPosition:28},0).to({_off:true},1).wait(46));

	// sand bkgr
	this.instance_6 = new lib.Tween2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(672.6,886.6,0.711,0.711);

	this.instance_7 = new lib.Tween3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(672.6,671.5,0.711,0.711);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true,y:671.5},8).wait(139));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:false},8).wait(132).to({startPosition:0},0).to({regX:0.1,regY:0.1,y:888.4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,767.6,1436.6,328.9);


// stage content:
(lib._20170113_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Freshwater Mussels
	this.instance = new lib.musselsSM_mc("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(367.9,921.8,0.585,0.585,0,0,0,672.6,577.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},147).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(339.3,1542.6,840.7,203.3);
// library properties:
lib.properties = {
	width: 768,
	height: 1024,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"assets/animations/images/Mussels_PQ_atlas_.png", id:"Mussels_PQ_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;