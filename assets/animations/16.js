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
		{src:"assets/animations/images/Osprey_PQ_atlas_.png", id:"Osprey_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Osprey_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Osprey_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ospreyWingL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C1214").s().p("EgHhAxnQgsgXgthIQgxhPAQguQALggAigrQAUgZgTAAQgdAAgxgjQg2gngZguQgVgoAggTQAGgEAPgGQAIgDgFgCQgEgBgQAFQgSAHgMAAQgrACgdhCQgdhDAsghQANgKAUgGIAQgEIgpgHQgegFgVgLQgVgMgbgZQgXgWAahzQAWhiAcg6QASgmBQhRIBMhLIiAgGQhQgEgYg8QgIgTgEgfIgGgoQgGgUAzg4QAzg5gDgUQgCgRgMgfQgMgdgDgeQgDgZBMhmQBGhfgPgSQgRgTAJgjQAOg3AAgLQAAgOAUgdIArg3QA7hOgRgyQgRgxAmhBQAUgfAGgMQAKgVgFgMQgRgjgChRQgDhgAcg6QAZg2AwgtIArgjQgjACgugIQhcgQg5gsQhZhHAfhjIAZg8QAKgZgOgEQgrgCgagGQgugIg5g1QhahTARhJQAKgeACgJQADgNgUgCQgngEhFg9QhMhIgggXQgugigniQQgniOAbgUQAUgPCGAcQBmAWgTgJQg6gagpg/Qg0hRAZhWQALgoBBgdQAggPAegGQgLgcgXggQguhBg6gZQghgOgihHQgfg+gVhTQgUhSABg2QAAg7AbAFQAyAJC5ClQhoifgcggQiDiYhJhMQiti1g+gMQgkgIhJhFQhFhChAhWQhFhcgZhBQgehLAngRQBCgbHvE/IFTDgQCdBnAMAAQAMAAAoAtQgWgvgTgzQgQgrlDktQlNk4gfgzQguhMAEiHQACg2ALgcQAMgfARARQArAsHCGIQHPGUAsAbQAoAZCeDCQBQBgBHBcQhGhmhKhpQiUjSgWgRQgSgOkckHQkvkZgvgqQhEg7grjLQgQhOABgrQABguAVAdQAmA0KWIZQJeHuB6BbQAMAICwBtQCGBTBPBQQBVBUEuERIHrG7QDJC0CEDBQB+C5ASCAQAOBlg5BfQhVB0guBdQgjBHg6DLQg6DNg1D1QiGJiAMEXQALD7BXDvQAWA+AqBgQAjBPAHAbQAPA4BwCJQBeByBZBXQAWAVo2BkQpABmj5AOQkqARlRAFIibABQjoAAgcgOg");
	this.shape.setTransform(193.9,319);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,387.9,638);


(lib.ospreyWing_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFCF8").s().p("EgJPAhOQkZglg4gbQhFghhRhAQhphUAQgsQAihaJCiXQBHgTgMAAIhSAJQi/AUgVgmQgWgoAigTQAGgDAQgGQAJgDgGgCQgEgCgRAGQgUAGgMABQgvABgfhBQgfhDAvghQAPgLAVgGIARgDIgsgHQgggFgXgMQgWgLgdgZQgWgUBlh0QB7iOAHgOQAUglBqgrQA1gVAxgOIiJgHQhWgEgag8QgJgTgEgeQgEgjgCgFQgHgVA2g4QA4g5gDgTQgDgRgNggQgMgdgEgdQgDgaB1iAQBvh7gQgRQgSgTAKgkQAPg2AAgLQAAgPAlgoIBPhWQBvh7gSgyQgSgxBThBQAqgeAPgNQAYgVgGgMQgNgaApiQQAmiIAkhHQAbg2AygtQAZgWAVgMIBagXQBsgfBYgjQEdhwgMh1QgGhAh0htQg4g0i+iZQiniFhChIQhihrARhCQARhDBJgVQBGgUBsAXQDpAzDdC6QDZC2CHC2QCDCwATB/QAPBlhDBpQhfB/gyBdQgmBHg+DLQg+DNg5D2QiPJgAMEXQAMD6BdDvQAYA/AtBgQAlBPAIAaQAQA5B5CIQBlBzBfBWQAMAMhSAhQhdAmiSAkQmTBjnZAKIgvAAQjpAAkmgng");
	this.shape.setTransform(327.8,425.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("EgLuAhQQh+gKgzgYQhFghhRhBQhqhUARgrQAihbJBiXQBHgSgLAAIhSAJQi/ATgVglQgXgoAigTQAGgEARgGQAIgDgFgCQgFgBgQAFQgUAHgNAAQguACgfhCQgfhDAvghQAOgKAVgGIASgEIgsgHQgggFgXgLQgXgMgcgZQgWgTBlh1QB7iNAHgOQATgmBrgqQA1gWAxgOIiKgGQhWgEgag8QgIgTgEgfQgFgigCgGQgGgUA2g4QA3g5gDgUQgDgRgMgfQgNgegDgdQgDgZB1iBQBvh6gQgRQgSgUAJgjQAPg2AAgLQAAgPAlgoIBPhWQBvh8gSgyQgRgxBThAQAqgfAOgNQAZgVgGgMQgOgaApiPQAniIAjhHQAbg2AygtQAagXAUgMIBagXQBsgeBZgjQEchwgLh1QgHhAh0htQg3g1i/iYQimiFhDhIQhihsARhCQARhCBJgVQBHgVBrAYQDpAyDeC7QDYC1CHC2QCDCwATB/QAPBlhCBpQhgCAgyBdQglBGg+DMQg+DNg6D1QiPJgANEXQALD7BdDuQAZA/AsBgQAlBPAIAbQARA4B4CJQBmBzBfBWQAUATpvA/QpQA8k1AQQiBAHhqAAQhlAAhPgGg");
	this.shape_1.setTransform(325.8,424.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C1214").s().p("AgdCjQgihFgHg2QgMhcALhdIANhKIB+AIIgXBVQgUBiALA/QARBoAYBEIhNANQgNgXgQgig");
	this.shape_2.setTransform(279.1,618);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2C1214").s().p("AgeCfQglhXgHg3QgMhbAMhVIAPhDIB6gHIgXBVQgUBhALBAQARBoAhBoIhNANQgPgggTgrg");
	this.shape_3.setTransform(257.5,619);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C1214").s().p("AggCgQglhWgIg3QgGgvAJhsIAKhjIB9ADIgXBVQgVBiALA/QASBpAjByIhPADQgPgggTgsg");
	this.shape_4.setTransform(232.8,619.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C1214").s().p("AglCPQgihjADgzQADg0gEhXIgEhOIB6gHIgUBTQgSBfAKBAQASBoAjBzIhNACQgSgngQgyg");
	this.shape_5.setTransform(211.5,620.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C1214").s().p("AgNDhQgPglgPgwQgdhfADgyQADg1gDhVIgDhLIB4gMIgUBTQgSBgALA/QARBoAjBzg");
	this.shape_6.setTransform(193.2,621.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C1214").s().p("ACJDTQgZgHg9gHQg2gHgbgIQhagbgWheQgXhkBXhPQA9g3BogkQASgGgGASQgDAHgYAvQg1BnAHA+QAGA/BKBOIAmAnQAIAKgIAAIgHgBg");
	this.shape_7.setTransform(168.5,622.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8FCFF").s().p("Am3DnQgZgHg9gHQg4gHgbgIQhagbgWheQgXhkBXhPQA9g3BqgkQBVgeHogQQH0gQA2AhQAcARAXA3QAWA1AJBBQAVCbg9AmQg9AlnqAaQj9ANiRAAQiAAAgqgKg");
	this.shape_8.setTransform(226.3,620.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C1214").s().p("AgxBpQgbgogCghQgDg4ATg6IAUgwIB6gGIgeA3QgdA/AFAlQAHA/ARApIhKAOQgMgNgNgTg");
	this.shape_9.setTransform(326.8,574.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C1214").s().p("AgvBpQgdgzgCghQgDg3AUg3IAVgrIB4gPIgeA3QgdA/AFAlQAHA/AXA+IhKAPQgOgSgPgZg");
	this.shape_10.setTransform(305.3,577.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C1214").s().p("AgvBpQgdgygCgjQgCgcAThEIATg+IB5gKIgeA3QgdA/AFAmQAIBAAXBDIhLAJQgOgSgOgZg");
	this.shape_11.setTransform(280.9,579.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C1214").s().p("AgyBeQgXg6AHghQAHgfAFg2IADgwIB4gQIgcA2QgaA9AFAlQAIBAAXBEIhLAJQgOgXgMgeg");
	this.shape_12.setTransform(259.9,582.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2C1214").s().p("Ag1BeQgUg4AHghQAHgfAGg1IADguIB3gTIgbA2QgbA9AFAmQAIA/AYBEIhUAFQgMgWgJgdg");
	this.shape_13.setTransform(241.7,584.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2C1214").s().p("AgjB+QhWgIgMg5QgOg9Bcg3QA/goBrggQASgGgIAMIgfAkQg9BGABAlQAAAmBBAqIAiAVQAJAHgQgBIg8ABQhCAAgjgEg");
	this.shape_14.setTransform(216.6,586.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8FCFF").s().p("ApiC7QhVgIgNg5QgNg9Bcg5QBBgmBrggQBVgaHfg2QHrg4AyAQQAZAIASAgQAQAfADAoQAHBehAAdQg+AdniA8QnWA7hWgGIg7ABQhEAAgkgEg");
	this.shape_15.setTransform(274,580.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2C1214").s().p("AhEBjQgVgrACghQADg3Aag4IAZgtIB6AIIglAyQgkA8AAAlQABBBAMApIhLAHQgLgPgLgVg");
	this.shape_16.setTransform(324.4,552.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C1214").s().p("AhCBfQgXg1ACgiQADg3Aag0IAagoIB4gCIgkA0QgkA6AAAnQABBAAPA/IhLAHQgMgVgLgag");
	this.shape_17.setTransform(302.8,553);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2C1214").s().p("AgrCQQgMgUgLgbQgXg1ACgiQABgcAbhBIAag8IB6AFIgkAzQglA7ABAmQAAA/AQBHg");
	this.shape_18.setTransform(278.2,552.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C1214").s().p("AgwCMQgLgXgIggQgRg9ALgeQALggALg0IAJgwIB4gCIghAzQgiA6ABAmQAAA/AQBGg");
	this.shape_19.setTransform(257,552.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C1214").s().p("Ag3CHQgJgXgHgdQgNg7ALgeQAMgfALg0IAIgtIB5gGIgiAzQghA5AAAnQABA/APBHg");
	this.shape_20.setTransform(238.7,553);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2C1214").s().p("ABuCAQhvgLgxgKQhUgSgGg6QgGg9BiguQBDggBugTQATgEgKALIgiAgQhFA+gEAlQgEAmA8AxIAfAZQAGAGgHAAIgHgBg");
	this.shape_21.setTransform(212.9,553);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F8FCFF").s().p("AnQCBQhxgLgwgKQhVgSgFg6QgGg9BiguQBFggBugTQBXgQHjABQHtACAwAVQAZALANAjQANAggCAoQgEBehDAVQhBAWnlAEIitABQk+AAhEgNg");
	this.shape_22.setTransform(270.4,552.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2C1214").s().p("Ag/CFQgKgQgIgWQgSgsAFgiQAJg2Afg1IAegrIB4AUIgpAwQgpA3gEAlQgGBAAIArg");
	this.shape_23.setTransform(323.5,529.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2C1214").s().p("Ag/CLQgKgVgJgcQgRg4AFghQAJg2AfgxIAeglIB4AKIgpAvQgqA4gDAlQgGBAAIBBg");
	this.shape_24.setTransform(302.2,528);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2C1214").s().p("AhACLQgJgVgJgcQgRg3AFgiQAEgbAhg/IAgg5IB5ARIgpAvQgqA4gEAlQgFBAAIBIg");
	this.shape_25.setTransform(277.7,525.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2C1214").s().p("AhDCGQgIgYgGggQgLg/AOgcQAOgeAQg1IAOguIB4ALIgmAvQgnA2gEAlQgFBAAIBHg");
	this.shape_26.setTransform(256.6,523.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2C1214").s().p("AhKB/QgGgXgEgeQgHg8AOgdQAOgeAQgzIAOgsIB4AHIgmAvQgnA2gEAmQgGBAAJBHg");
	this.shape_27.setTransform(238.3,522.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2C1214").s().p("ABbB+QhtgWgvgPQhSgbAAg6QAAg9BmgjQBFgZBwgKQATgBgKAKIgmAcQhLA3gIAlQgHAlA2A3IAdAcQAFAGgGAAIgIgCg");
	this.shape_28.setTransform(212.6,520.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F8FCFF").s().p("ABQCQQnXgqhTgYQhwgWgvgQQhSgaAAg4QABg/BmgkQBHgZBwgJQBZgHHfAxQHsAyAtAaQAYAOAKAjQAJAggGAnQgOBfhEAPQgRAEgsAAQiBAAlpghg");
	this.shape_29.setTransform(269.3,525.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2C1214").s().p("AgxBpQgbgngCgjQgDg3ATg6IAUgwIB6gGIgeA3QgeA+AFAmQAIA/ARApIhKAOQgMgMgNgUg");
	this.shape_30.setTransform(324.2,485.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2C1214").s().p("AgvBpQgdgzgCghQgDg3AUg3IAVgrIB4gPIgeA3QgeA/AFAlQAIA/AWA+IhKAPQgOgSgOgZg");
	this.shape_31.setTransform(302.7,487.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C1214").s().p("AgvBpQgdgzgCgiQgCgcAShEIAUg+IB5gJIgeA3QgdA+AFAmQAIA/AXBEIhLAJQgOgSgOgZg");
	this.shape_32.setTransform(278.3,490.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2C1214").s().p("AgyBeQgYg6AIghQAHgfAFg2IADgwIB4gQIgcA2QgaA9AEAmQAIA/AYBEIhMAJQgNgXgMgeg");
	this.shape_33.setTransform(257.3,493);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2C1214").s().p("Ag1BeQgUg4AHghQAHgfAFg1IAEguIB3gTIgbA2QgbA9AFAmQAIA/AYBEIhUAFQgMgWgJgdg");
	this.shape_34.setTransform(239.1,495.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2C1214").s().p("AgjB+QhWgIgMg5QgOg9Bcg3QA/goBrggQASgGgIAMIgfAkQg9BGABAlQAAAmBBAqIAiAVQAJAHgQgBIg8ABQhCAAgjgEg");
	this.shape_35.setTransform(214,497);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F8FCFF").s().p("ApiC7QhVgIgNg5QgNg9Bcg5QBBgmBrggQBVgaHfg2QHrg4AyAQQAZAIASAgQAQAfADAoQAHBehAAdQg+AdniA8QnWA7hWgGIg7ABQhEAAgkgEg");
	this.shape_36.setTransform(271.4,490.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2C1214").s().p("AhDBjQgWgrACghQADg3Aag5IAZgtIB6AIIgkA0QglA7ABAmQAABAANAqIhMAFQgLgOgKgVg");
	this.shape_37.setTransform(321.7,463.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2C1214").s().p("AhCBfQgXg1ACgiQADg3Aag0IAagoIB5gCIgkA0QglA7ABAmQAAA/APBBIhLAGQgMgVgLgag");
	this.shape_38.setTransform(300.2,463.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2C1214").s().p("AgrCQQgMgUgLgaQgXg2ACgiQABgcAbhCIAag7IB6AFIgkAzQglA7ABAmQAAA/AQBHg");
	this.shape_39.setTransform(275.6,463.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2C1214").s().p("AgwCMQgLgYgIgfQgRg8ALgeQALghALg1IAIgvIB5gBIghAxQgiA7ABAlQAABAAQBGg");
	this.shape_40.setTransform(254.4,463.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2C1214").s().p("Ag4CHQgIgXgHgdQgNg7ALgeQALgfALg0IAJgtIB5gGIgiAzQghA6AAAmQABA/APBGg");
	this.shape_41.setTransform(236.1,463.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2C1214").s().p("ABuCBQhvgLgxgLQhUgSgGg6QgGg9BiguQBDggBugTQATgEgKALIgjAgQhEA+gEAlQgEAmA8AyIAfAZQAGAFgHAAIgHAAg");
	this.shape_42.setTransform(210.3,463.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F8FCFF").s().p("AnQCCQhxgLgwgLQhVgSgFg6QgGg9BiguQBFggBugTQBXgQHjABQHtACAwAVQAZALANAjQANAggCAoQgEBehDAVQhBAWnlAEIixABQk6AAhEgMg");
	this.shape_43.setTransform(267.8,463.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2C1214").s().p("AhACFQgJgQgJgWQgRgtAFggQAJg3Afg1IAegrIB4AUIgpAvQgqA4gDAmQgGA/AIArg");
	this.shape_44.setTransform(320.9,440.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2C1214").s().p("Ag/CLQgKgVgJgcQgRg4AFghQAJg2AfgxIAeglIB4AKIgpAvQgqA4gEAlQgFBAAIBBg");
	this.shape_45.setTransform(299.6,438.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C1214").s().p("Ag/CLQgKgVgIgcQgSg3AFgiQAFgbAhg/IAgg5IB4ARIgpAwQgqA3gDAmQgGA/AJBIg");
	this.shape_46.setTransform(275.1,436.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2C1214").s().p("AhDCHQgIgZgGggQgLg+AOgdQAOgeAQg1IAOguIB4ALIgmAuQgnA3gEAmQgFA/AIBIg");
	this.shape_47.setTransform(254,434.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2C1214").s().p("AhKB/QgGgXgEgeQgHg8AOgdQAPgeAQgzIANgsIB4AHIgmAvQgnA3gDAlQgGBAAIBHg");
	this.shape_48.setTransform(235.7,432.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2C1214").s().p("ABbB+QhtgWgvgPQhSgbAAg6QAAg9BmgjQBFgZBwgKQATgBgKAKIgmAcQhLA3gIAlQgHAlA2A3IAdAcQAFAGgGAAIgIgCg");
	this.shape_49.setTransform(210,431.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8FCFF").s().p("ABQCQQnXgqhTgYQhwgWgvgQQhSgaAAg4QABg/BlgkQBHgZBxgJQBZgHHfAxQHsAyAtAaQAXAOAKAjQAKAggGAnQgOBfhEAPQgRAEgsAAQiBAAlpghg");
	this.shape_50.setTransform(266.7,436.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2C1214").s().p("AhDCDQgJgPgJgXQgQgsAGghQAKg3Agg1IAegpIB4AWIgqAvQgqA2gFAmQgHA/AHArg");
	this.shape_51.setTransform(321.8,408.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2C1214").s().p("AhDCKQgJgWgJgcQgQg3AGghQAKg3AggvIAeglIB4AMIgqAvQgqA2gFAmQgHA/AHBCg");
	this.shape_52.setTransform(300.5,406.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2C1214").s().p("AhECKQgJgWgIgcQgQg3AGghQAFgcAig+IAhg4IB4ATIgqAvQgrA2gEAmQgHBAAHBHg");
	this.shape_53.setTransform(276.1,403.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2C1214").s().p("AhHCFQgHgZgFgfQgKg/APgcQAOgfASgzIAOguIB4ANIgnAuQgoA2gEAlQgFA/AFBIg");
	this.shape_54.setTransform(255,401.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2C1214").s().p("AhNB+QgGgYgDgeQgGg8AOgcQAPgeASgzIAOgrIB4AKIgnAtQgoA2gFAlQgFA/AFBIg");
	this.shape_55.setTransform(236.8,399.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2C1214").s().p("ABXB9QhtgYgvgQQhRgcABg5QACg+BmgiQBGgYBwgGQATgBgLAJIgmAcQhLA1gJAlQgIAlA1A4IAcAcQAFAGgFAAIgJgCg");
	this.shape_56.setTransform(211.1,397.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F8FCFF").s().p("ABNCQQnWg0hTgaQhvgYgvgQQhRgaABg6QACg/BmgiQBIgYBwgGQBZgGHfA7QHqA8AtAbQAXAOAJAiQAJAhgHAoQgPBfhFANQgNADgfAAQh4AAmCgrg");
	this.shape_57.setTransform(267.6,403.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2C1214").s().p("AhWB7QgIgQgFgXQgLgvAKggQAQg0AmgxQATgZAQgNIB1AkQgXARgYAZQgxAxgJAkQgNA/ADArg");
	this.shape_58.setTransform(335.7,384.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2C1214").s().p("AhYCCQgHgXgFgcQgKg6AKgeQAQg3AmgsQATgWAPgKIB2AbQgWARgZAYQgxAxgJAlQgMA+gBBBg");
	this.shape_59.setTransform(315,380.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2C1214").s().p("AhZCCQgGgXgFgcQgKg6AKgeQAIgdApg5IAog0IB1AiQgXARgYAYQgxAxgJAlQgMA+gCBIg");
	this.shape_60.setTransform(291.1,374.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2C1214").s().p("AhbB+QgEgagCggQgChAASgaQASgcAYgyIATgrIB2AbIgsApQguAwgIAlQgOA+gBBIg");
	this.shape_61.setTransform(270.3,369.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2C1214").s().p("AhfB1QgDgYAAgeQABg8ASgbQASgcAXgvIATgrIB2AZIgsAoQguAxgJAkQgMA/gBBHg");
	this.shape_62.setTransform(252.3,365.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2C1214").s().p("ABBB6QhpglgtgVQhNgmAIg3QAIg/BqgVQBJgPBvAGQATABgMAJIgpAXQhRAsgNAlQgNAiAvA+IAYAfQAEAGgEAAQgCAAgHgDg");
	this.shape_63.setTransform(227.3,362.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F8FCFF").s().p("AA7COQnNhqhPgjQhsgjgsgWQhOglAIg6QAJg+BqgWQBLgPBvAHQBYAFHVByQHgB0AqAeQAVARAFAkQAFAjgLAmQgaBchGAGIgIAAQhUAAnChog");
	this.shape_64.setTransform(282.2,374.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#2C1214").s().p("AhlBzQgFgRgDgYQgHgvANgdQAWg1AqgsQAWgXARgMIBwAwQgYAPgbAWQg1AsgLAjQgUA9gCArg");
	this.shape_65.setTransform(346.9,364);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2C1214").s().p("AhpB5QgEgXgCgcQgEg6AMgdQAWg1AqgoQAVgUAQgKIBzAnQgYAOgbAWQg2AsgKAkQgVA8gHBCg");
	this.shape_66.setTransform(326.9,357.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2C1214").s().p("AhpB5QgFgWgBgdQgEg6AMgdQAMgcAug2QAXgaAVgVIByAtQgYAOgbAWQg2AsgLAkQgUA8gIBIg");
	this.shape_67.setTransform(303.7,349.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2C1214").s().p("AhpB2QgCgaACggQAEg9AVgbQAigqAmhJIBzAnQgXAPgZAVQgyAsgLAkQgVA8gIBIg");
	this.shape_68.setTransform(283.3,342.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#2C1214").s().p("AhsBtQgBgZADgdQAHg6AVgbQAigqAmhFIBzAkQgWAOgaAWQgyArgLAkQgVA9gIBHg");
	this.shape_69.setTransform(265.8,336.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2C1214").s().p("AAuB6QhlgvgqgaQhKgtAOg2QAPg+BrgLQBJgHBvARQATADgNAHIgrATQhVAkgRAkQgOAgAmBCIAWAiQADAGgEAAQgCAAgHgEg");
	this.shape_70.setTransform(241.7,331.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F8FCFF").s().p("AI7ErQhFgBnLibQnBiWhLgqQhngwgrgaQhJgsANg5QAPg9BrgLQBMgIBvASQBXANHICgQHSChAmAkQATATACAlQABAigOAlQgjBYhFAAIgCAAg");
	this.shape_71.setTransform(294.7,349);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2C1214").s().p("AhnByQgFgSgDgXQgFgwANgdQAXg0ArgsQAWgWAPgLIByAyQgZAOgbAVQg2ArgMAkQgVA8gDArg");
	this.shape_72.setTransform(362.1,339.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2C1214").s().p("AhrB4QgEgXgCgdQgDg6ANgdQAXg0AqgnQAWgVAQgIIByAoQgYAOgbAVQg3AsgLAjQgWA9gIBBg");
	this.shape_73.setTransform(342.2,332.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#2C1214").s().p("AhsB4QgEgXgBgdQgDg6ANgdQAMgcAwg0QAXgaAUgVIByAvQgYAOgbAWQg3AqgLAkQgWA8gJBIg");
	this.shape_74.setTransform(319.2,323.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2C1214").s().p("AhrB1QgCgbADggQAFg9AVgaQAigpAphIIByAoQgXAOgaAWQgzArgMAjQgVA8gKBIg");
	this.shape_75.setTransform(298.9,316.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2C1214").s().p("AhuBrQAAgYAEgeQAIg6AVgZQAigqAnhFIBzAmQgXAOgZAVQg0ArgLAkQgWA7gJBIg");
	this.shape_76.setTransform(281.4,310.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2C1214").s().p("AArB7QhkgygqgbQhJguAPg2QAQg9BrgJQBKgGBuATQATADgNAIIgsASQhVAigSAjQgPAhAmBCIAUAjQADAFgDAAQgDAAgGgDg");
	this.shape_77.setTransform(257.6,305.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F8FCFF").s().p("AI1E1QhFgCnJikQm+iehKgrQhmgygqgbQhJguAPg4QAQg9BrgJQBMgGBuATQBYAQHECoQHPCqAlAkQAUATAAAlQABAjgPAkQgkBWhDAAIgEAAg");
	this.shape_78.setTransform(310.2,323.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#2C1214").s().p("Ah1BnQgDgSAAgYQAAgwARgbQAcgxAxgnQAYgTAQgKIBrA/QgaALgdASQg7AlgQAiQgSAjgLAkIgHAdg");
	this.shape_79.setTransform(380.9,318.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2C1214").s().p("Ah6BsQgBgXACgdQADg4ARgdQAdgxAvgjQAXgRAQgHIBuA2QgaALgeASQg6AlgQAiQgSAjgOAvIgMAng");
	this.shape_80.setTransform(362,309.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2C1214").s().p("Ah6BsQgBgXACgdQAEg4AQgdQAPgaA1guQAbgYAWgSIBsA8QgaALgeASQg6AlgQAiQgSAjgQAyIgMAqg");
	this.shape_81.setTransform(340.1,298.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2C1214").s().p("Ah3BpQABgaAGgfQANg8AYgYQAnglAuhDIBuA2QgYALgcATQg4AkgQAiQgcA5gSBGg");
	this.shape_82.setTransform(320.6,288.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2C1214").s().p("Ah6BgQADgZAHgdQAPg4AYgXQAngmAtg/IBwAzQgZALgcASQg4AlgPAhQgdA6gSBFg");
	this.shape_83.setTransform(304,280.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2C1214").s().p("AAUB9Qheg9gngfQhCg0AVg2QAXg7BsADQBKACBrAhQASAFgOAGIgtANQhaAYgVAhQgSAeAdBHIAQAkQACAGgCAAQgDAAgGgFg");
	this.shape_84.setTransform(281.8,273.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F8FCFF").s().p("AIJFzQhEgKmzjXQmpjRhEg0Qhgg9gngfQhCg2AVg2QAXg7BsADQBMACBrAhQBVAZGtDcQG4DeAiAoQARAVgEAlQgDAjgUAiQgpBKg7AAIgQgBg");
	this.shape_85.setTransform(331.5,297.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2C1214").s().p("Ah+BcQgCgSACgYQAFgwAUgZQAhguA0giQAYgQATgIIBlBJQgbAJgfAPQg+AegUAgQgVAigOAiQgIARgDALg");
	this.shape_86.setTransform(396.4,301.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#2C1214").s().p("AiDBiQABgXAEgdQAKg4ATgbQAiguAygeQAXgOASgGIBoBBQgbAIgfAQQg+AegTAgQgVAigUAsIgPAmg");
	this.shape_87.setTransform(378.4,290.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#2C1214").s().p("AiDBiQABgXAEgdQAKg3ATgcQASgYA5gqQAbgUAZgQIBmBHQgbAIgfAQQg+AegTAgQgVAigVAvQgKAYgGARg");
	this.shape_88.setTransform(357.7,276.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2C1214").s().p("AiABfQAEgaAJgeQATg7AagVQAqghA1g+IBoBBQgZAIgeAQQg7AfgTAfQgVAigVAwQgLAXgGARg");
	this.shape_89.setTransform(339.2,265.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#2C1214").s().p("AiCBVQAFgYAKgcQAVg3AagVQAqghAzg7IBqA+QgZAJgeAPQg7AfgTAgQgVAigVAvQgLAYgGARg");
	this.shape_90.setTransform(323.5,255.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#2C1214").s().p("AABCAQhXhGgkgjQg9g7Aag0QAdg4BrAOQBJAKBoAqQARAHgOAFIguAIQhbAPgXAfQgXAcAYBKIAKAmQACAGgDAAQgCAAgGgGg");
	this.shape_91.setTransform(302.9,246.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8FCFF").s().p("AHfGlQhDgQmckBQmRj6hAg7QhZhGgjgjQg9g9AagzQAcg4BrAOQBLAKBoAqQBTAiGVEFQGgEIAdAsQAPAWgHAkQgHAjgXAgQgtBAg1AAQgMAAgMgDg");
	this.shape_92.setTransform(349.6,275.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#2C1214").s().p("AgjDVQgvhYgLhIQgUh3AKh6IAPhiICnAFIgbBvQgXCCARBTQARBUAYBPQAMAnAJAWIhlAUQgTgdgXgtg");
	this.shape_93.setTransform(286,538.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#2C1214").s().p("AgkDTQg1hwgMhHQgUh4AOhwIARhYICigPIgbBwQgXCBARBTQARBVAfBlIAbBUIhlAVQgWgqgbg3g");
	this.shape_94.setTransform(257.3,540.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#2C1214").s().p("AgoDTQg1hwgMhHQgLg/AIiNIAKiBIClgCIgbBwQgXCBARBTQASBVAgBsQAQA2ANAlIhpAHQgWgqgag3g");
	this.shape_95.setTransform(224.8,542.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#2C1214").s().p("AgsC+QgxiAAChDQABhEgIhyIgJhlICigQIgXBtQgUB/ARBSQARBVAhBsIAcBbIhoAHQgXgzgYhAg");
	this.shape_96.setTransform(196.3,544.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#2C1214").s().p("AgJErQgVgxgVg9Qgqh7AAhEQAChEgHhvIgHhiICggVIgYBtQgVB+ASBTQARBUAgBtIAeBbg");
	this.shape_97.setTransform(172,546.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#2C1214").s().p("AC6ETQgjgHhQgHQhIgHglgJQh4gfggh6QgjiDBwhqQBPhLCJg1QAXgJgIAZIghBHQhCCKALBSQALBRBlBjIA0AyQALAMgLAAIgIgBg");
	this.shape_98.setTransform(139.8,548.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F8FCFF").s().p("Ao9FGQgjgHhQgIQhKgGglgKQh4geggh6QgjiFBwhpQBPhLCLg0QAxgTDjgZQDXgYEKgSQKWgsBJApQAmAVAgBHQAfBEAPBVQAOBWgJBDQgLBLgoAaQhOA0qIA4QkFAXjWAJQhlAEhDAAQhRAAgdgGg");
	this.shape_99.setTransform(215.9,543.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#2C1214").s().p("AhCCKQgjg0gDgsQgEhKAZhNIAag/ICjgJIgoBJQgnBTAHAyQAGA0AOAwQAHAYAGANIhjAUQgRgRgRgbg");
	this.shape_100.setTransform(303.1,573.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#2C1214").s().p("Ag/CKQgmhCgDgsQgEhKAahIIAcg4ICfgVIgnBJQgnBSAHAzQAGA0ARA+IAQAzIhiAUQgTgZgTghg");
	this.shape_101.setTransform(274.5,576.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#2C1214").s().p("Ag/CKQgmhCgDgsQgDgmAZhaIAahSIChgNIgoBJQgmBTAGAyQAHA0ASBCQAJAgAIAXIhlAMQgSgZgTghg");
	this.shape_102.setTransform(242.1,580.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#2C1214").s().p("AhCB9QgghOAKgrQAJgpAHhIIAEg/ICfgVIgkBGQgjBRAGAzQAHA0ASBCQAJAhAIAWIhlAMQgRgegQgng");
	this.shape_103.setTransform(214.3,583.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#2C1214").s().p("AhHB9QgahLAJgrQAKgqAGhFIAFg9ICfgZIglBHQgjBRAHAyQAGA0ASBCIARA3IhvAGQgPgcgNgmg");
	this.shape_104.setTransform(190.2,586.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2C1214").s().p("AgwCnQhygLgQhLQgRhRB6hJQBTg0COgrQAYgHgKAPQgEAGglAqQhSBbABAyQABAzBWA3IAtAcQAMAJgWgBIhNAAQhZAAgwgEg");
	this.shape_105.setTransform(156.9,588.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F8FCFF").s().p("AsqD3QhxgLgQhLQgShRB6hLQBVgyCPgrQBxgiJ8hIQKLhJBCAVQAiAKAXArQAWApADA0QAEA2gSAsQgTAugqATQhTAmp+BQQpwBNhygHIhNABQhcAAgwgFg");
	this.shape_106.setTransform(233.1,580.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#2C1214").s().p("AhaCDQgdg5ADgsQAEhJAihKIAhg8ICjALIgwBEQgwBNAAAzQABA1AIAxQAEAXAEAPIhlAIQgOgUgOgbg");
	this.shape_107.setTransform(290.7,471.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#2C1214").s().p("AhYB+QgfhHADgtQAEhIAjhFIAig1IChgCIgwBEQgwBNAAAzQABA1AKA/QAFAgAFAVIhlAIQgPgbgPgig");
	this.shape_108.setTransform(262.1,471.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#2C1214").s().p("Ag6C+QgPgbgPgjQgehGACgtQACglAjhXIAjhOICiAGIgwBEQgwBNAAAzQABA1AKBDQAGAiAFAXg");
	this.shape_109.setTransform(229.5,471.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#2C1214").s().p("AhAC5QgOgggMgoQgWhRAOgoQAPgqAPhGIALg+IChgCIgsBCQgtBMABAyQAAA1ALBDQAFAiAFAXg");
	this.shape_110.setTransform(201.4,471.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#2C1214").s().p("AhKCyQgMgegIgnQgShNAPgoQAOgqAPhEIAMg8IChgGIgtBBQgsBNAAAyQABA1AKBEQAGAhAFAXg");
	this.shape_111.setTransform(177.2,472);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#2C1214").s().p("ACRCpQiUgOhAgOQhwgYgHhMQgIhRCCg8QBZgrCSgaQAZgEgNAOQgEAFgqAmQhbBRgFAyQgFAyBPBBIApAhQAIAIgJAAIgKgCg");
	this.shape_112.setTransform(142.9,471.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F8FCFF").s().p("ApnCrQiWgPhBgOQhvgYgIhMQgIhRCCg8QBbgqCTgaQB0gVKAACQKPACA/AcQAhAPASAtQARArgDA0QgCA1gXApQgZAtgsAOQhXAdqDAFIjiABQmpAAhagQg");
	this.shape_113.setTransform(219.2,471.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#2C1214").s().p("AhaCCQgdg4ADgsQAEhJAihKIAhg8ICjALIgwBEQgxBNABAzQAAA1AJAwQAEAZAEAOIhlAIQgOgUgOgcg");
	this.shape_114.setTransform(281.8,499.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2C1214").s().p("AhYB+QgfhHADgsQAEhKAjhEIAig1IChgCIgwBDQgwBOAAAzQABA1AKA/QAFAgAFAVIhlAIQgPgbgPgig");
	this.shape_115.setTransform(253.2,499.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2C1214").s().p("Ag6C+QgPgagPgkQgehGACgtQACglAjhXIAjhOICiAGIgwBEQgwBNAAAzQABA1AKBDQAGAiAFAXg");
	this.shape_116.setTransform(220.6,499.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#2C1214").s().p("AhAC5QgOgggMgoQgWhRAPgoQAOgqAPhGIAMg+ICggCIgsBCQgsBMAAAyQABA1AKBDQAGAiAFAXg");
	this.shape_117.setTransform(192.5,499.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#2C1214").s().p("AhKCyQgLgegJgnQgRhNAOgoQAPgqAPhEIAMg9ICggFIgtBCQgsBMABAyQAAA1ALBEIAKA5g");
	this.shape_118.setTransform(168.2,499.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#2C1214").s().p("ACRCpQiUgOhAgOQhwgYgHhMQgIhRCCg8QBZgrCSgaQAZgEgNAOIguArQhbBRgGAyQgFAyBQBBIApAhQAIAIgJAAIgKgCg");
	this.shape_119.setTransform(134,499.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F8FCFF").s().p("ApnCrQiWgPhBgOQhvgYgIhMQgIhRCCg8QBbgqCTgaQB0gVKAACQKPACA/AcQAhAPASAtQARArgDA0QgCA1gXApQgZAtgsAOQhXAdqDAFIjiABQmpAAhagQg");
	this.shape_120.setTransform(210.3,499.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#2C1214").s().p("AhVCvQgNgVgLgdQgXg6AHgsQAMhJAphGIAng4IChAaIg3A/Qg4BJgEAyQgFA0ADAyQACAZADAOg");
	this.shape_121.setTransform(289.6,452.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#2C1214").s().p("AhUC3QgNgbgMglQgXhJAHgsQAMhIAphBIAngxIChAOIg3A+Qg3BJgFAzQgFA0AEBAQACAgADAVg");
	this.shape_122.setTransform(261.3,450.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#2C1214").s().p("AhVC3QgMgbgMglQgXhJAHgsQAFgmAshSIArhKICgAVIg2A/Qg4BJgFAzQgEA0ADBEQACAiADAYg");
	this.shape_123.setTransform(228.9,446.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#2C1214").s().p("AhaCyQgLghgHgqQgOhSASgnQATgoAWhFIARg8IChAOIgzA9Qg0BHgFAzQgEA0ADBFQACAiADAXg");
	this.shape_124.setTransform(200.8,444.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#2C1214").s().p("AhiCoQgJgfgEgnQgKhPATgnQATgoAVhDIASg6ICgAKIgzA9Qg0BIgEAyQgFA1AEBDQACAiADAYg");
	this.shape_125.setTransform(176.6,442.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#2C1214").s().p("AB5CnQiRgeg/gUQhtgjAAhMQABhRCHgvQBdghCUgMQAZgCgOANIgyAmQhjBIgKAxQgKAxBIBJIAmAkQAGAIgHAAIgLgCg");
	this.shape_126.setTransform(142.5,440.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#F8FCFF").s().p("ABrC/Qpyg5hugfQiUgeg/gUQhsgjAAhKQAAhTCHgvQBfghCUgMQB2gKJ9BCQKLBCA9AiQAfASANAvQANAqgIA0QgIA2gbAmQgdArgtAKQgWAFg8AAQirAAndgrg");
	this.shape_127.setTransform(217.7,446.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#2C1214").s().p("AhiCBQgag6AEgsQAHhIAmhJIAjg6ICiASIgzBBQgzBMgCAyQgCA0AHAyQADAZADAOIhlADQgNgUgNgcg");
	this.shape_128.setTransform(297.4,411.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#2C1214").s().p("AhiB7QgbhJAFgrQAHhKAmhCIAkg0IChAGIgzBBQgzBLgCAzQgCA1AIA/QADAhAEAUIhlAFQgOgcgOgjg");
	this.shape_129.setTransform(268.9,410.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#2C1214").s().p("AhGC7QgOgbgNgkQgbhHAEgsQADgmAnhVIAmhNICiAOIgzBBQgzBMgCAyQgCA1AIBEIAIA5g");
	this.shape_130.setTransform(236.3,408.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#2C1214").s().p("AhLC2QgNghgJgpQgThRAQgoQAQgpAShGIAOg9ICgAFIgvBAQgvBKgCAyQgCA1AIBEIAIA5g");
	this.shape_131.setTransform(208.2,407.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#2C1214").s().p("AhVCsQgKgfgHgnQgOhOAQgnQARgpARhEIAPg7ICgAAIgvBAQgwBLgBAyQgCA1AIBEIAIA5g");
	this.shape_132.setTransform(184,407.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#2C1214").s().p("ACHCpQiTgVhAgRQhugdgEhMQgFhRCEg3QBbgmCTgUQAZgEgNAOIgwApQheBNgIAyQgHAyBMBEIAoAjQAHAHgIAAIgKgBg");
	this.shape_133.setTransform(149.7,406);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F8FCFF").s().p("AB2C+Qp0gWhwgZQiVgVhAgRQhugdgEhMQgFhRCEg3QBdgmCTgUQB2gQJ/AeQKOAeA+AfQAgAQAQAuQAPArgFAzQgEA2gZAoQgbAsgsAMQguANjIAAQi0AAkxgKg");
	this.shape_134.setTransform(225.6,408.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#2C1214").s().p("AhlCJQgZg+AFguQAIhPAlhOIAlg9ICiAWQgaAdgaAoQg0BQgCA3QgCA4AFA2QADAaAEAPIhlACQgOgVgNggg");
	this.shape_135.setTransform(314.9,382.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#2C1214").s().p("AhjCDQgbhOAFgvQAIhOAmhHIAlg3IChAIIg0BFQg0BRgCA2QgCA5AHBEIAHA6IhlACQgOgdgNgng");
	this.shape_136.setTransform(286.4,381.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#2C1214").s().p("AhIDIQgOgdgNgnQgbhOAFgvQAEgpAnhaIAnhSICiASIg0BFQg0BRgCA2QgCA4AHBJQADAlAEAZg");
	this.shape_137.setTransform(253.8,378.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#2C1214").s().p("AhODCQgMgjgJgsQgThZARgpQARgsAShLIAPhCIChAIIgwBEQgwBPgDA3QgCA4AHBJQAEAlAEAZg");
	this.shape_138.setTransform(225.7,377.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#2C1214").s().p("AhXC4QgKghgHgrQgNhUARgqQARgsAShIIAPhAICgAEIgvBEQgxBPgCA2QgCA5AHBJQADAlAEAZg");
	this.shape_139.setTransform(201.4,376.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#2C1214").s().p("ACFC1QgggJhMgNQhFgNgigKQhughgDhSQgEhYCEg4QBcgnCTgTQAZgDgNAPQgFAFgrAlQhgBSgIA1QgHA1BLBLIAoAmQAHAIgIAAIgKgBg");
	this.shape_140.setTransform(167.2,374.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F8FCFF").s().p("AB0DMQp0gjhwgdQgfgJhNgNQhHgNghgKQhughgEhQQgEhaCFg4QBdgnCUgTQB2gOJ+AsQKPAtA9AiQAgASAQAxQAOAugFA4QgFA6gZAqQgbAvgtANQgjAKiAAAQi6AAl+gWg");
	this.shape_141.setTransform(243,378.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#2C1214").s().p("AhUDQQgNgYgLgjQgXhGAHg0QALhXAphUIAnhCICgAgQgaAfgcArQg3BXgFA8QgEA/ADA7QACAdADARg");
	this.shape_142.setTransform(302.2,353.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#2C1214").s().p("AhTDaQgNghgMgrQgXhYAHg0QALhXAphMIAng7ICgARQgaAfgcArQg3BXgFA8QgEA/AEBMQACAnADAZg");
	this.shape_143.setTransform(273.9,350.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#2C1214").s().p("AhTDbQgNghgMgsQgXhYAGg0QAGgtArhiIAqhZIChAbIg2BLQg3BWgFA9QgEA+AEBSQACAoADAcg");
	this.shape_144.setTransform(241.4,346.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#2C1214").s().p("AhZDUQgLgogHgxQgPhjATguQATgwAVhSIARhIICgARIgyBJQg0BVgEA9QgFA+AEBSQACApADAcg");
	this.shape_145.setTransform(213.4,343.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#2C1214").s().p("AhhDIQgJglgFgvQgKheATguQASgwAVhPIAShGICgAMIgyBJQg0BVgEA9QgFA+AEBSQACAoADAcg");
	this.shape_146.setTransform(189.2,340.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#2C1214").s().p("AB6DHQgfgLhMgTQhFgRghgNQhsgqgBhbQAAhiCHg4QBdgnCUgNQAZgCgOAPQgFAGgtAnQhjBWgKA7QgJA7BIBWIAmAsQAHAJgHAAQgEAAgHgCg");
	this.shape_147.setTransform(155.1,338.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F8FCFF").s().p("ABsDkQpyhGhvgmQgfgLhMgTQhGgRghgNQhtgqAAhZQAAhkCHg4QBfgnCUgNQB1gLJ9BQQKMBSA9AqQAfAVANA4QANAygIA+QgHBBgbAuQgdAzgtALQgVAGg3AAQipAAnlg2g");
	this.shape_148.setTransform(230.3,346.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#2C1214").s().p("AhaDFQgMgXgLghQgVhEAIgxQANhTArhQQAVgnATgXICgAiQgcAdgcApQg5BSgGA5QgGA8ADA4QABAcACAQg");
	this.shape_149.setTransform(276.2,321.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#2C1214").s().p("AhZDPQgNgggKgqQgWhUAIgxQANhTArhIQAVgkATgUICgAUQgbAdgdApQg5BRgGA6QgJBfAJBjg");
	this.shape_150.setTransform(248,318.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#2C1214").s().p("AhaDPQgMgggLgqQgVhUAHgxQAHgrAthdIAshUICgAdIg3BFQg5BSgGA6QgGA7ACBOQABAnADAbg");
	this.shape_151.setTransform(215.6,313.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#2C1214").s().p("AhfDJQgKgmgGgwQgNhdAUgsQATgtAXhPIAThEICgAUIg0BEQg1BRgGA5QgGA8ADBOQABAmACAbg");
	this.shape_152.setTransform(187.6,310.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#2C1214").s().p("AhnC+QgIgkgEgtQgHhaATgsQAUgtAWhLIAThDICgAPIg0BFQg1BQgGA6QgFA7ACBOQABAnADAbg");
	this.shape_153.setTransform(163.4,307.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#2C1214").s().p("AB0C9QgfgLhLgUQhEgRghgNQhsgrAChVQABhfCJgyQBdgjCVgLQAYgBgOAOIgzAqQhkBQgLA4QgLA4BHBUIAlArQAGAJgHAAQgDAAgIgDg");
	this.shape_154.setTransform(129.4,305);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F8FCFF").s().p("ABnDZQpxhPhtgmQgfgLhMgUQhGgRghgNQhsgpAChXQAChfCIgyQBfgjCVgLQB2gHJ7BYQKKBbA8AoQAeAVANAzQALAzgIA7QgJA+gcArQgeAwgtAKQgSAEgpAAQigAAn+hAg");
	this.shape_155.setTransform(204.4,313.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#2C1214").s().p("Ah7CwQgGgfAAgxQABhgAghXQATgzA4gzQAagaAYgQIBlAzQgKAOgQAaQggA0gaA7QgaA5AMBsQAGA2ALAqg");
	this.shape_156.setTransform(243.3,325.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#2C1214").s().p("Ah/CzQgIgcgBguQgDhbAghVQATgzBBhDQAegiAdgXIBlAzIgjA3QgpBEgaA7QgaA5AMBsQAGA1ALAqg");
	this.shape_157.setTransform(214.2,314.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#2C1214").s().p("AiIC7QgBguADg4QAFhuARguQATgzBBhEIA7g4IBrAqIgmA7QgsBJgaA7QgZA5ALBrQAGA2ALAqg");
	this.shape_158.setTransform(181.1,301);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#2C1214").s().p("AiJCvQAiiAAIhTQAFg2A+hSIA7hHIBrAqIgmA8QgsBIgaA7QgZA5AIBpQAFA0AJAog");
	this.shape_159.setTransform(151.4,289.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#2C1214").s().p("AiICpQAgh8AIhTQAFg1A3hRIA0hFIB5AmIgmA8QgsBIgZA7QgbA6AJBoQAFA0AKAog");
	this.shape_160.setTransform(126.8,279.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#2C1214").s().p("ABBDfQiIhZhJhVQhph3AxhbQAshTB+ATQAlAGBMAUQBTAXAkAGQAYAFgQAHIg6AVQhxAogTA7QgTA7A2CBQAZA7ACAIQAEANgHAAQgFAAgJgHg");
	this.shape_161.setTransform(95.3,268.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F8FCFF").s().p("ABFEGQqTkEhuhFQiKhZhJhVQhoh5AwhbQAshTB+ATQAnAGBNAUQBSAXAkAGQB+AXKDEIQKTELBMBEQAmAiAEA9QADA4gXA+QgXA9gmApQgoAsgpADIgEAAQhZAAqTkEg");
	this.shape_162.setTransform(172,297.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#2C1214").s().p("AjeCyQgKghgDgqQgHhUAegxQAzhXBchCQAughAigQIDiB2QgzASg5AfQhyA9gdA9QgeA+gSA/QgIAggDATg");
	this.shape_163.setTransform(324.8,321.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#2C1214").s().p("AjoC7QgGgpAAgzQgBhlAegyQAyhXBag6QAtgdAhgNIDnBmQg0ASg4AfQhyA9gdA+QgfA+gXBSQgMAogFAcg");
	this.shape_164.setTransform(285.2,304);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#2C1214").s().p("AjoC8QgGgpAAg0QgBhkAeg0QAaguBlhPQAzgoArgfIDkBwQgzATg5AeQhyA+gdA9QgfA+gZBXQgNArgGAfg");
	this.shape_165.setTransform(239.2,283);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#2C1214").s().p("AjlC3QgBgvAIg3QARhsAtgpQAugoA+hKQAfglAVgdIDmBlQgwATg2AfQhsA+gcA9QgfA+gZBXQgNArgGAfg");
	this.shape_166.setTransform(198.6,264.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#2C1214").s().p("AjqClQABgqALg0QAVhkAugpQAugpA9hHQAfgkATgcIDpBhQgvASg2AgQhtA9gcA9QgeA/gaBWQgNAsgGAeg");
	this.shape_167.setTransform(163.8,250);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#2C1214").s().p("ABFDgQgpgbhmg7Qhgg2gsgeQiPhiAihfQAmhnDbALQCZAIDdA/QAlAKgaAKQgJADhRARQixAmgnA6QgjA2BICAIAmBBQAFAKgFAAQgFAAgOgJg");
	this.shape_168.setTransform(116.6,235.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F8FCFF").s().p("ARbKvQiMgWuPmUQt8mLiShgQgpgbhog7Qhgg2gsgeQiPhkAihfQAmhnDbALQCbAIDdA/QCwAxOHGcQObGjBJBKQAmAmgCBBQgCA9gjA9QgkA/g4AiQgxAdg1AAQgPAAgPgCg");
	this.shape_169.setTransform(221.1,280.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#2C1214").s().p("Ah2C7QgMgjgHg3QgOhqAaheQAQg4A9g3QAfgbAagPICGA+QgLAPgQAbQggA3gXBBQgXA+AfB4QAQA9AUAvg");
	this.shape_170.setTransform(286.9,253.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#2C1214").s().p("Ah4C9QgOgfgJgzQgShlAbhdQAPg3BHhIQAjgjAegYICGA9QgQAYgUAkQgoBIgXBBQgXA/AfB4QAPA7AUAwg");
	this.shape_171.setTransform(248.8,239);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#2C1214").s().p("AiDDHQgIg0gFg+QgLh6APgxQAQg4BGhHQAjgkAegYICLA0QgRAZgWAnQgqBNgXBBQgXA+AfB4QAPA9AUAug");
	this.shape_172.setTransform(205.6,222.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#2C1214").s().p("AiNC6QAFgjAGgvQAKhegCg5QgBg6BAhYQAggsAeghICLA1QgQAagWAmQgqBOgXBAQgYA/AbB0QAOA6ASAtg");
	this.shape_173.setTransform(167.8,208);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#2C1214").s().p("AiMCzQAUiHgDhdQgCg6A4hXQAcgrAdgfICZAxQgRAagVAmQgrBOgXBAQgXA/AbB0QAOA6ASAtg");
	this.shape_174.setTransform(135.6,195.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#2C1214").s().p("ACID7Qi3hrhohiQiUiJAuhiQAqhZCgAaQAwAJBhAbQBqAdAuAJQAfAGgUAHIhFAUQiGAngOBBQgPBABYCSQAoBDADAIQAGAPgHAAQgGAAgNgIg");
	this.shape_175.setTransform(92.9,181.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F8FCFF").s().p("ACGEnQtblBiThUQi5hqhohiQiUiMAuhhQAqhaCgAbQAxAIBiAbQBqAdAuAJQCgAgNJFGQNcFKBoBPQA0AnAPBFQANA+gUBEQgTBCgpAsQgrAugyABIgCAAQhlAAtplGg");
	this.shape_176.setTransform(193.9,217.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#2C1214").s().p("AiVCMQgRgrgLg/QgVh7AhheQAUg4BQgkQAogTAigHICxB2QgOANgVAYQgoAygdA+QgdA9AsCQQAVBIAcA7g");
	this.shape_177.setTransform(291.8,245.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#2C1214").s().p("AiYCOQgTgogNg7Qgah0AhhfQATg3Bbg1QAugaAngPICyB3QgUAUgaAgQgzBBgdA/QgdA8AsCQQAVBIAcA8g");
	this.shape_178.setTransform(241.5,215.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#2C1214").s().p("AimCXQgLg8gJhGQgQiLASgyQATg3Bbg0QAtgaAogQIC4BuQgWAWgbAjQg3BFgdA/QgcA8ArCQQAWBIAbA8g");
	this.shape_179.setTransform(184.3,180.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#2C1214").s().p("Ai2CJQAHgkAGgyQAMhjgEhBQgEhCBThIQApgkApgYIC3BuQgVAWgcAiQg2BGgdA/QgdA8AmCKQATBFAZA5g");
	this.shape_180.setTransform(134.4,150);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#2C1214").s().p("Ai0CGQAGgkAFgwQAKhggEhBQgDhCBHhKQAkglAlgYIDLBwQgVAXgbAiQg3BGgdA+QgcA8AmCLQATBFAYA4g");
	this.shape_181.setTransform(91.8,123.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#2C1214").s().p("AC8FJQjzi7iMiRQjGjSA7haQA2hTDSBZQBAAbCBBDQCMBIA8AbQApATgZABIhbgEQivgHgSBBQgSBCB3DCQA2BZAFAKQAHAPgGAAQgHAAgVgPg");
	this.shape_182.setTransform(35.1,91.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#F8FCFF").s().p("AXDRWQiAgiyKq0QxxqkjDiUQj2i7iLiTQjGjSA6haQA2hTDTBZQBAAbCCBDQCNBIA8AbQDTBfRYKjQRyKvCLB+QBGA/AUBRQATBJgZBEQgXBCg1AhQgmAXgqAAQgUAAgVgFg");
	this.shape_183.setTransform(168.9,168.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#2C1214").s().p("AiVCMQgRgrgLg/QgVh7AhheQATg4BQgkQAogTAigHICyB2QgOANgVAYQgoAygdA+QgdA9AsCQQAVBIAcA7g");
	this.shape_184.setTransform(305.8,201.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#2C1214").s().p("AiYCOQgTgogNg7Qgah0AhheQAUg4Bbg0QAtgbAogPICxB2QgUAVgaAgQgzBBgdA+QgdA9AsCQQAVBIAcA8g");
	this.shape_185.setTransform(255.5,171.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#2C1214").s().p("AilCXQgMg8gIhGQgRiLASgyQAUg3Bbg0QAtgbAngPIC4BuQgWAWgbAjQg2BFgdA/QgdA8ArCQQAWBIAbA8g");
	this.shape_186.setTransform(198.3,136.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#2C1214").s().p("Ai2CJQAGglAHgyQALhigEhBQgDhCBThJQApgjApgYIC3BtQgVAXgbAiQg3BGgdA+QgdA9AmCKQATBFAYA5g");
	this.shape_187.setTransform(148.4,106.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#2C1214").s().p("Ai1CGQAGgkAFgwQALhggEhBQgEhCBJhKQAjglAlgYIDLBwQgVAXgcAiQg2BGgdA+QgdA8AnCLQASBFAZA4g");
	this.shape_188.setTransform(105.8,80.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#2C1214").s().p("AC8FJQj0i7iLiRQjGjSA7haQA1hTDTBZQBAAbCABDQCNBIA8AbQApATgZAAIhbgEQivgGgSBBQgSBCB2DCQA3BZAEAKQAIAPgHAAQgGAAgVgPg");
	this.shape_189.setTransform(49.1,47.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#F8FCFF").s().p("AXCRVQh/ghyLq0QxwqkjEiUQj1i7iLiTQjGjSA6haQA2hTDSBZQBAAbCDBDQCMBIA9AbQDSBfRZKjQRyKvCLB+QBFA/AVBRQASBJgYBEQgYBBg1AiQglAXgpAAQgVAAgWgGg");
	this.shape_190.setTransform(182.9,124.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#2C1214").s().p("Ai1BtQgLgugCg/QgEh9AthZQAbg0BUgaQAqgNAjgDICgCNQgQALgYAWQgvArglA6QglA4AYCVQAMBKAUA+g");
	this.shape_191.setTransform(340.1,225.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#2C1214").s().p("Ai5BvQgNgrgFg9QgKh3AthYQAbg1BhgnQAvgUArgKICgCNQgXARgeAdQg7A6glA6QglA4AYCUQAMBLATA+g");
	this.shape_192.setTransform(294.3,188.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#2C1214").s().p("AjJB2QgDg9ABhFQACiOAZguQAbg0BhgoQAwgUApgJICoCFQgZATgfAeQhAA+glA6QglA4AYCUQAMBLATA/g");
	this.shape_193.setTransform(242.3,146.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#2C1214").s().p("AjLBoQALgkANgwQAZhfAFhBQAFhCBcg9QAugfArgRICnCFQgYATggAfQg/A+glA5QglA5ATCNQAJBIARA7g");
	this.shape_194.setTransform(195.8,109.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#2C1214").s().p("Ai4BUQAIgfAJgtQARhXABg9QACg9BKg4QAlgcAkgQIC5CNQgWARgcAbQg5A3ggA0QggAzAZCHQANBEATA5g");
	this.shape_195.setTransform(155.4,79.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#2C1214").s().p("ACGFgQjYjah2iiQiojqBGhSQAjgpBCAWQA2ARBZBDQAPALCYB8QBtBYBIAtIAZAOQADACgKgEQgzgVgbgKQibg4gcBBQgbA/BbDQQAqBfAEALQAFAQgGAAQgGAAgUgUg");
	this.shape_196.setTransform(105.6,37.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#F8FCFF").s().p("AUPUWQh6gzwjtJQwNs2ititQjajah2ikQiojqBGhSQAjgqBCAWQA2ASBZBDQAPALCaB8QBtBYBIAsQD4CbPdLPQQvMHBxCGQA9BIAFBhQAGBXgnBRQglBQg8AmQgnAYgnAAQgYAAgYgJg");
	this.shape_197.setTransform(228.8,131.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#2C1214").s().p("EgIhAxsQgzgXgzhIQg4hPASguQANggAngsQANgOABgEQACgHgOAAQgiAAg4gjQg+gmgcgvQgYgoAkgTQAmgKgKgEQgFgBgSAFQgWAHgNAAQgyABgghBQgihDAyghQAQgLAWgFIATgEIgvgHQgigFgZgLQgYgMgegZQgbgXAdhyQAahiAgg7QAVglBbhSIBYhKIiTgHQhcgEgcg8QgIgSgFgfQgFgigCgGQgHgUA6g4QA7g6gDgTQgDgSgOgfQgNgdgDgdQgEgZBXhmQBRhggSgRQgTgTAKgkQAQg2AAgLQAAgOAXgdIAxg3QBDhOgTgzQgTgwAshBQAWgfAHgNQAMgVgGgMQgTgjgDhRQgDhfAgg7QAdg2A3gtIAxgiQgoABg1gHQhqgQhBgtQhmhHAkhiIAcg9QAMgZgRgDQgxgDgdgGQg0gKhDgzQhnhSAThJQANgeACgJQADgOgXgCQgsgEhQg9QhWhHglgYQg1gigtiPQgsiOAfgVQAXgPCYAdQB1AWgVgJQhDgbgug/Qg8hQAchXQANgnBKgdQAlgPAigHQgNgbgaghQg0hBhDgZQgmgOgnhGQgjg/gYhTQgXhRABg2QABg7AfAEQA5AJDTClQh3iegfggQiuitg9g3QjGi1hHgNQgqgHhShFQhQhDhJhVQhPhcgehBQghhLAsgRQBMgbI3E/IGFDgQCzBnAOAAQAOAAAvAtQgZgvgWg0QgSgqlzkuQl/k3gjgzQg0hMAFiHQABg3ANgcQAOgeATARQAzAtIDGHQITGUAyAbQAtAZC2DBQBbBhBSBbQhQhlhVhpQiqjSgZgRQgUgNlGkIQlYkXg5gsQhOg8gyjKQgThOACgrQABguAYAdQArA0L4IZQK6HwCJBYQAMAIDLBuQCaBTBbBPQBhBVFaERII0G6QDmC2CWDAQCSC5AUCAQAQBlhCBfQhgB0g2BdQgoBGhCDLQhCDOg+D1QiZJiAOEXQAMD+BMDrQApB8A6CMQATA8BzCNQBuCIBWBJQAXATovA7QoeA4k9AQQh0AFqXA1QlgAbh2AAQgwAAgKgEg");
	this.shape_198.setTransform(221.7,323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,444.9,644.6);


(lib.ospreyLeg_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,0,0,4).p("ABTCtQhFhDgOghQgUgvAPhZQAFgfAlguQAJgLgFgGQgGgGgggHQg3gMgSBFQgKAmAABdQAAA/BSA1QAqAaAnANg");
	this.shape.setTransform(11.2,229.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A1B2C").s().p("AABCGQhSg1AAg/QAAhdAKgmQAShFA3AMQAgAHAGAGQAFAGgJALQglAugFAfQgPBZAVAvQANAhBFBDQgngNgqgag");
	this.shape_1.setTransform(11.3,229.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,0,0,4).p("ACjhPQAeBViCA5QheAph6AKQCehPAegYQBBg2g5g9QgFgFgFgFAArhoQACAAADABQANAABNgG");
	this.shape_2.setTransform(53.2,231.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A1B2C").s().p("AAbAJQBCg1g6g+IAGABQANABBNgHIAZAeQAeBViDA5QhdAqh7AJQChhPAbgYg");
	this.shape_3.setTransform(54,231.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8FCFF").s().p("ACyRXQgWgYgRgCQgVgDgwAKQgfAHAHgOQAKgVgygOQgvgPgtAKQgWAFgqAUQgfAPgmAAQglAAhCgVQhJgXgYgDQgpgFAGgfQAFgbAegYQAQgNBMASQBEAQAAgVQAAgeg5hiQg7hkhAhOQhjh5AZhZQAIgZAYgoQAYgnAFgUQAKgnA9g5QA6g1AEglQAIhaAmjkQArkLASgNQARgNghimQgXhxgchtIMejwQAABUhJCSQgTAngpBMQghBBgOAlQgJAZgNAyQgQAugqAuQgtAxgjBiQgbBMgNBNQgLBAhOCnQhQCwgqAmQgtAnglBhQglBgAFA9QAHBVAqCDQAyCeAwANQAfAIA9AfQA3AbAsAHQA8AKAPAZQAPAYgeAmQgPAUgLAAQgEAAgEgEg");
	this.shape_4.setTransform(51.9,111.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.9,248.1);


(lib.ospreyeye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAHQgHAIgKAAQgJAAgHgIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,0,0,4).p("ABIAAQAAAegVAVQgVAVgeAAQgdAAgVgVQgVgVAAgeQAAgdAVgUQAVgWAdAAQAeAAAVAWQAVAUAAAdg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFACB","#FAF1BA","#EFD88D","#EDD587","#EABA10","#C2912E"],[0,0.114,0.341,0.373,0.686,1],0,0,0,0,0,7.3).s().p("AgyAzQgVgVAAgeQAAgcAVgWQAVgVAdAAQAeAAAVAVQAVAWAAAcQAAAegVAVQgVAVgeAAQgdAAgVgVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-8.7,19.1,17.5);


(lib.mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],3)).ss(5,0,0,4).p("AqekkQBHAQCZgnQAggICkgzQAZgIAUAKQANAGARAUQARATAIAEQAPAHASgLQARgMATAbQAIAMAdA8QAcA4AWAgQAkAxArATQAYALA2AaQAzAZAmANQBvAkBhgbQAqgKAvg1QA0g5AfgOQAQgIBEgQQBFgRBFgbQBGgaAnhZQAohYAWABQAXACgOBCQgZB9ggBhQg3CihAAtQmbEliZg3Qg8gViAgEQiDgDg5gRQgkgKgxgVQhGgegDgBQgjgOgUAAQgYABgJATQgJASATAkQAFALAiA0QAWAigBANQgCARgqgKQhKgPmJljQgoghg1g7QhAhGgsg9Qh4ioBcgMQBUgKBbAhQAZAKAyAUQAsATAiAIg");
	this.shape.setTransform(-7.7,8.4,0.999,0.999,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(231,207,141,0)","#E7CF8D","#E8D6A9","#E9DBBF","#EADECE","#EBE0D7","#EBE1DA"],[0,0.471,0.471,0.514,0.561,0.612,0.671,0.757],-50.7,69.1,33.4,-129).s().p("AoEKsQh9gaqepcQhDg6hbhkQhth4hKhoQjNkeCcgUQCPgSCbA6QArAQBUAjQBNAfA5ANQB5AdEFhDQA2gOEYhXQAqgOAiASQAWAKAdAhQAdAhAOAHQAZANAegUQAegUAgAtQAOAVAxBmQAwBhAmA2QA9BSBKAhQApASBbAuQBXApBBAWQC+A/ClguQBIgSBQhaQBXhhA2gZICUg+QBZglA2geQChhWBoiQQBLhmAmADQAmADgWBvQgrDXg3CkQhdEVhtBNQq9HykDhdQhngkjagGQjhgFhhgdQg9gShUgjIh7g1Qg9gXghAAQgpAAgQAiQgPAfAgA9QAJARA5BZQAmA7gCAVQgCATgfAAQgRAAgZgGg");
	this.shape_1.setTransform(-7.7,8.3,0.587,0.587,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#57350E","#654319","#8E6F3A","#B19356","#CCAF6B","#DFC37B","#EACF84","#EED387","#E6C14C","#E1B724","#E3BE42","#E5C76A","#E7CF8D","rgba(231,207,141,0)","rgba(0,0,0,0)"],[0,0.008,0.031,0.051,0.075,0.098,0.122,0.145,0.247,0.365,0.388,0.427,0.471,0.471,1],-50.7,69.1,33.4,-129).s().p("AoEKsQh9gaqepcQhDg6hbhkQhth4hKhoQjNkeCcgUQCPgSCbA6QArAQBUAjQBNAfA5ANQB5AdEFhDQA2gOEYhXQAqgOAiASQAWAKAdAhQAdAhAOAHQAZANAegUQAegUAgAtQAOAVAxBmQAwBhAmA2QA9BSBKAhQApASBbAuQBXApBBAWQC+A/ClguQBIgSBQhaQBXhhA2gZICUg+QBZglA2geQChhWBoiQQBLhmAmADQAmADgWBvQgrDXg3CkQhdEVhtBNQq9HykDhdQhngkjagGQjhgFhhgdQg9gShUgjIh7g1Qg9gXghAAQgpAAgQAiQgPAfAgA9QAJARA5BZQAmA7gCAVQgCATgfAAQgRAAgZgGg");
	this.shape_2.setTransform(-7.7,8.3,0.587,0.587,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-52.2,209.1,104.5);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkLAMIIXg0QgvAKgjAdQgRAMgMAQIgJAOg");
	this.shape.setTransform(26.9,4.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,53.7,8.3);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AhID/QgJgBgMAAQgMABAJABQgLgBAGgBQAaAAgBgBIgZgCQgPAAAEgCIAEAAIAGABQALABgDgBIAHAAQAGgBgMgCQgOgCgBgBQAMAAAHABIANABIgDgBQAIACAWgCQgBgCgcAAIgJgFQgCgCAMgBIgIgBQAGAAABgCIADgCQAQABgDgCIgPgCIAOAAIgIgBIAJgBIgNgBIADAAQgCgCgWACIABgBQgOABgGgEIAgABQAHABgBgCIgUAAIAIgCIAEABIAPgCIgUAAIAQgBQAKAAAHABIAHgBQAAAAAAAAQAAAAAAAAQgBgBgBAAQgBAAgBAAQgHABgIgCQgIgCgOABQAHgBgUgCIgGgCIgJgBIAMAAIASADQgBgCATABQATAAABABQAPgBgDgBIgVgBIAUgBQABAAAAAAQABAAAAAAQgBAAAAAAQgBgBgBAAIgLgBQgGABgUgBIgYgBIATAAIAMAAQAHgCgWgBIABgBIgQAAIAJgBIgUgBIAIgDIAMgCIgJAAIARgBQAMAAgBgBQgJAAgEgBQgEgCgMAAQAQAAgCgCQgCgBARABIgHgDIgNgBIAKAAIgGgBIACgBQAGAAACgCQACgBAQAAIgbgBIANgBQABAAAAgBQAAAAAAAAQgBAAgBgBQgBAAgCAAQgGgDgIAAIAPgBQgDAAgCAAQgCAAAAAAQgBgBABAAQABAAABAAQAKgCgDAAIAHAAIgDgCIgfABQgDgCARgBQAPgCAPABIgSgDIgEABQADgBgSgCQgVgCgCgCIgMABQgEABgHgBQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQACgCAJAAQALAAAIgBIAQAAIgKgBIgQgBIAmAAIABgCQgNAAgDgBIAJgBQAAAAABAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAGAAAFgCIgKgBQgCAAAAAAQgBAAAAAAQABAAABgBQACAAACAAIAFABIAKgBQgJAAgHgBIgKgBQgOAAAIgCQgBABARAAIABgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAIgWgBIACgCIgJAAQgGAAgDgBIATAAQAMgBgCgBIAIABIgEAAIAQAAIgdgCQgQgCAAgCQgBAAAAgBQAAAAAAAAQABAAABgBQABAAABAAQAEgBgJAAIgEgDQAHAAgBABIAGABQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAgBAAQgBgBAGgBIACACIAMAAQADgBgIgBIgMgDQgGgBgEABQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAgBgBIgCgCIgQgBQgMABAHABQAHABgGABQgJAAABgCQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAgBAAIAegCQgEgBAFgBIAGgBQgFABgHgCQgDgBAdAAIALAAIgOgCIgOABQAGgDgIAAQABAAABAAQABAAABAAQAAgBAAAAQABAAgBAAIAHAAIgEAAIALABQAOAAACgCIADgCIAEABQABgBAAAAQABAAAAAAQgBAAgBAAQAAgBgCAAIgMgBQARAAgGgBIALAAQAGgCgPgBQgNgBAKgBIgXABIgLgBIAGgDQAEgCgKgBIAGAAQABAAAAAAQABAAAAgBQAAAAgBAAQAAAAgBAAIgKgCIAMABQACAAABAAQABAAABAAQAAAAAAAAQgBgBgBAAIgGgBIgMAAIgIAAQgZgBATgBQgBABAAAAQgBAAABAAQAAAAACAAQABAAADAAIABgBQAAAAAAgBQAAAAAAAAQgBAAAAgBQgBAAgBAAIAMABQAFgBgGgBIgIgBQAKAAACgBIgNgBQAGgBARAAQgBgBgMgBIgQgBQAJgBACgCQADgCAGAAIgGgBQgEgBAFgBQgHgBgVgBQgIABALABQACAAABAAQAAAAAAAAQgBABgCAAQgBAAgEAAIgHgDIABABQAGgCgcgDQgagDAKgCQAJgBAGABQADgBgJAAIgJgBIAAgHQALACAEgCIAJgCIgQAAQAJgBAFABIgIgCIAaAAIgGgDIgSgDQADgDgJgHIgNgKQgCAAAMgBQAJgBgKgBIALAAQACgFAHgCIgQABQAOgCgCgBQgJABgEgBQgBgBgBAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAGACQADABAJgBQACAAABAAQABAAAAgBQAAAAAAAAQAAAAgBAAIgMgCIAMABQgGgBAKgCQAJgBgJgCIgGABIgGAAQgHgBAIgDQAIgDgHgCIAHAAIgCgCIARAAIAFAAIgCgBIgWAAQgKAAgFgBQANAAABgBQABgBAGAAQADgDgJgDQgMgEgBgCIAfgBIgIgBIADAAQAGgBgIgBQgIAAgFABIAEABIgHAAQAFAAgFgCQgEgBAKgBIAHAAIgBgBIgQAAQAEgFgHgJIAHgEQAEgCAIAAQAEgCgOgFQAEgBgDgCQgCgCAOAAIgOgCIAIAAQgBAAgBAAQgBAAAAAAQAAgBAAAAQABAAAAAAIAFgBIgPAAQABAAAAAAQABAAAAgBQAAAAgBgBQAAAAgBgBQgBAAgBgBQAAAAgBgBQAAAAAAAAQABgBAAAAIAEAAQgDAAgBAAQgCgBAAAAQgBAAAAAAQABAAABgBIANAAQgTgDAHgGQAIgGgGgDQAOgCgHgDQgIgDAYgCQAFgBgMAAQgNAAABABQgEgFAHgMQAHgLgEgGQACgBAKgMQAGgIAQgDIgNABQgCgBAIAAIANAAIgRgDIgHABQAEgCACgHQACgGATgDIgKAAQgBgBAUgEQARgDgJgCIAHABIAKAAQgIgDAagFQAhgFAGgDIAQABIgEgDQAMgBACACQAFgBgMAAQgMgBAHgBQAKAAACgCIAFgBIgGgBQgFAAAFgBIACABIAFAAIgCgEIAKgBQAEAAADABQAMgBgHgBQgHgBAOgBIgLgCIAKAAIgBgBQAUAAgBgBQgCgBgGABQgEAAADgBQASABgIABIAMgBQATAAgBgCIACABQAHgBgigCQAMgBAEgBIgTAAQABAAAAAAQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAABAAIADABIAagBQASAAAEgBQAGABgGAAQgHABACABQAPgBAUACQBWALAEArQACAWgPATIgMACQgFABAFAAQgOAAgBADQAJAAAAACIAAACIgEAAQgGAAAIACIAMABIgPACQACADALABQgFAGAAADQABAFAMADQgQABgBACIABAEIgNAAIAQACIgUACIANAAQgCAAAAAAQgBAAAAAAQgBABABAAQAAAAABAAQAEABgRAAQARADAQAFIgJgBQAJACgQABQgPABAQABQAJAEgFAEQgDACgMAEIAIACIAMgCIgHADIgEAAQgCACAGADIALAFQgLAEgEAHQgDAHgQADIAbABIgcABQAFACAWAAIgPABQAMAAgHACQgHADARAAQgJAAgDACQAAAAgBAAQAAABABAAQAAAAACAAQABABACAAIgLAAQgJAAADABQANgBADABIAGACIgJABQgKABADABIgFgBQgBAAgBABQAAAAgBAAQAAAAAAAAQABABAAAAQADABAGABIANAAIgWAAQgFABAFABQAGABAJgBIAGAAIgFAFIgGAAIgHABQAQAAAHADIgQABIAGAAIgFAAIAOACQgcABATACIAKgBIgGABQgDABAJABIgNAAQgFACACADQACACAHABIgCAAQgEABAVADQAAAGgLAIIAOABIgNAAQADACgOAEQgOAEABACIAMAAQAMACgYAAIAUAIQgJAAgCABIgFABQARABgGABQgHACAGABIgDgBIAHADIgHAAQgBAAAAAAQAAAAAAABQAAAAAAAAQABAAABABIAEACIgKAAQgGAAABACIAYACQABAAAAAAQAAAAgBAAQAAAAgBAAQgCABgCAAQgLABAJABIgHAAIAAACIgDgBQADABgEABQgEACAGABIgEAAQAGAGgDACIgHAAIARADIgLgBIgBACIgFAAQANABgOACQgRADADABIgEAAIgJABIgFACQAZABADABIgOgBIABACIgCgBIgHABQABAAgBAAQAAAAAAABQAAAAgBAAQgBAAgBAAQACABAGgBIAEABQgBAAgCAAQgBAAAAAAQgBAAAAABQABAAAAAAQAEACgMAAIAMAEIgJAAQASACgHABQgBgBgFAAQgGAAAIACQAGACgLAAQgCACAOAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAIACADIgNgBQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAIgCABIgKgBIgBADQgBAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAGAAQgKACAQAGQgKgCgFAAQACACAJAAIAOACQgIgBgMABIARACIgOgBQAHACgRAGQgPAEAVACIASAAQgJABgCABQgCACgPAAIAHABIgOAAIAVABIgPAAIAHABIgLAAQALACgJAAQgJABAIABIgHAAQAJABgHACQgHABACABIgKAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAABAAIADACIgGAAIAIACIgHgBQAGACgBABQgBAAAAAAQABAAAAABQABAAAAAAQABAAACABQgLgCgGACQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAABAAQAAABABAAIgJAAQgCABASAAQgLABACABIAIAAQgGAAABACQAAABgKgBQgEAAAEABIAGABIAKgBIgDAFIgQgBIAFACIgDgBQgMABAJACQAIACgOABIAHAAQABAAABAAQABABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAABQAAAAABAAQAAAAABAAQABAAABAAQgHAAAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQgBABAAAAQAMAAABACIgMACIgUAAQAJABADADIAEADIgOgBQgFAAAIADQAIACgMABIAMAAQAAABgMAAQgKAAAFABIALAAQABAAAAABQABAAAAAAQAAABAAAAQABAAgBABIgIAAQgCABgFgBIADABIgDAAQABACAKAAIgJAAIAQABIgVABIALABIgEAAIAHACIgOgBIgRAAQAXACgIABQgEgBgIABQgJABgJgBIAHADIAMADQgWAAAIACIAJADIgJAAIAEADQgEgBgGAAIgKABIARACIgXgCQgHABAGABIgCAAIABACIgKgBIgKAAIAHACIgFgBIAXADQALACgMABQgCgBgZgBQAGABgOAAIAWABQgDABgLgBIgRAAIACABQABABAGAAIgEAAIgKAAQgEABAXABQgNACgBABQgBABgMABQgfgEAYAAgAh0BTIgNAAQABAAAAAAQAAAAAAgBQgBAAgBAAQgBgBgCAAIATACIAdABIgGAAIgKAAIgQABIABgCgACiBPIAAAAg");
	this.shape.setTransform(20.9,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AgDAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQABABABAAIgGgBg");
	this.shape_1.setTransform(9.8,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2.4,41.8,51.9);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiiifIEgDHIADAyQAIAmAaAgg");
	this.shape.setTransform(16.4,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.8,32.1);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AiZA2QgjgngXhbQAVAvArAnQBXBSBxgbQAjgRAlggQBKg+AKhJQAIA7gRA7QgjB1h+ADIgLABQh7AAg6hCg");
	this.shape.setTransform(21.2,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.4,24);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArIVQhIhwgShjIgRkJIiDqqQAsDMBADbQCSHzCJBiIgPANQgSARgOAXQgtBJAKBpQgigkglg5g");
	this.shape.setTransform(20.8,68.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,5.9,39.3,125.4);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwjDIBhESIgTArQgKAlAEAlg");
	this.shape.setTransform(4.9,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.9,39.4);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBHQgEgegnAQIChihIh5DRQAGgSgDgQg");
	this.shape.setTransform(8.1,10.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,21.1);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB6mRQAEBRBOAcQAnANAmgCIiNA6QhJALjOFmQhKCAhDB/g");
	this.shape.setTransform(33.4,40.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.3,0,56.4,80.4);


(lib.Path_12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D1D3D4","#CCCED0","#B1B3B6","#A7A9AC","#58595B"],[0.004,0.051,0.337,0.506,1],-94.2,0,94.2,0).s().p("AgMHxQiHgBjlhNQjyhRhkhXQgqglg3gkIhLgxQghgXgLgVQgMgYAKghQBphMCKhTQEUimCngWQBWgMB7gjQBFgVCOgtQEBhPBvATQB6AWCBArQBAAWAoARIAbASQAZAagEApQgNCEkwDhQiqCWh9BlQjuDAhnAAIAAAAg");
	this.shape.setTransform(94.2,49.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,188.5,99.5);


(lib.Path_12_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("ArjXrQi2j2h0ngQgnijgZkaQgck1ALjpIGus4QA6hIBahVQCzisCghGQBRgkCJgLQBUgGDLgIQGzgYGAieQhVBShPBlQieDKAeBfQgtAYgrAtQhYBaAHBqQg2AqgvA3QhcBuAmBBQgsAqgsBBQhZCDACBzQgrAignA0QhNBnAUBbIgdAUQghAdgaAfQhUBlAZBdIgXATQgZAZgVAcQhFBaAQBYIgWAJQgbANgVAVQhFBDAHB2IgUANQgYATgTAaQg/BUACB/QgIgBgMADQgXAFgTAPQg8AwAMCDQgHgCgKAAQgTAAgPALQgwAkALCEIgLATQgOAZgJAdQgfBgAQBvQhEgbhch7g");
	this.shape.setTransform(112.3,166.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,224.6,333.1);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah6BoIBHlGQAaA6BYAjQAtARAoAHIh2ArQhagBg1COIgJAZIgZB3QAGg7ATg8g");
	this.shape.setTransform(14.9,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.8,44.6);


(lib.Path_11_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(143,145,148,0.267)","rgba(107,111,113,0.494)","rgba(63,69,70,0.765)","rgba(36,43,43,0.933)","#1A2121","#5A5B5D"],[0.2,0.341,0.537,0.686,0.776,1],-57.7,-7.8,66.2,14).s().p("AhtMjQhJgGhAgRQhBgRhEgeQg/gcgziDIgzhmQgvhYgLgzQgNg6AQhGQALgsAZg4IAtheQA3hygFhaQgBgIgRhtQgMhIALgzQAJgnAhg6IA2hfIArhgQAeg3AngTQAmgTBPAJQApAEBKAQQBhAWBVB1QA+BVA0CBQAOAkAaBKQAZBCAZAsQAWAkBMBfQBBBRAZA4QBLCuAHCMQAJC6h3BhQh7BmikAjQhaAThrAAQg6AAhCgGg");
	this.shape.setTransform(69,81);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.1,0,121.9,161.9);


(lib.Path_11_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ArMC5IgEguQArAGBBgCQCBgGBrgtIDRhZQCqhFCNgsQGliECcBfQhAgIhgAGQjCAKimBCQkLBpjrBJQkMBThvAAQgUAAgQgDg");
	this.shape.setTransform(72.2,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.3,37.7);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkuFkQCcjfFtokQAeBPAzAhQAaARATAAIhcByQhOgjk2FtQhPBdhgB6IgiAqg");
	this.shape.setTransform(34.6,41.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,69.1,83.2);


(lib.Path_10_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ApqA1QGng0CeghQCpgnCVgEQDagHB4BHQhBgGhYgCQivgEhzAUQlcA6guAGQh+AQheAAQhyAAhCgYg");
	this.shape.setTransform(61.9,7.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.8,15.5);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADTkHQAcBaAuAnQAXAUASABIhVBNQh8gukCDBQhjBKhVBPg");
	this.shape.setTransform(37.8,26.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,0,65.2,52.9);


(lib.Path_9_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAlAlQntgzg/gUIADg0QDXAPDtAeQHYA4BwBIQjrgXj4gbg");
	this.shape.setTransform(52,8.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104,17.5);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBBQAagVAYgRIjYDIQBJhWBdhMgADUjiQAFBAAfAVQAQALAOgCIhwBmQhRgviSBog");
	this.shape.setTransform(27.9,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.8,45.6);


(lib.Path_8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBABg");
	this.shape.setTransform(111.1,261.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AAAgBIAAAAIAAADg");
	this.shape_1.setTransform(111.7,254.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCACQACgCADgBIgDACIAAABIgCAAg");
	this.shape_2.setTransform(85,178.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AgDgBQADABAEgBIAAADg");
	this.shape_3.setTransform(96,206.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#202020").s().p("AIqWdQgHgHAKgHQgJgBgHAHQgGAFADAEIgDgEQgDgEACgCIANgEQAHgEgEgIQgFgEgQAEQgLACgBgNIACgCIADAEQABADAEAAQAJgBgEgEQgDgEAIAAQACgIgLgFQgOgHgBgEQAHgHAHAFQAIAFAEgEIgEgIQAGAHAGgHQAGgHADgBQgJABgCgEQgBgDgLAFQgLgSgDgJQgGgQAOgKQgGgBgCADQgBACgFgEQAEgFgBgJIgCgOQANAAgEgIQgEABgDgBQgFgBgCgGQAGgCAFgFQgBgFgHACIAGgGIgMgHIACAAQgDgJgGAFIgJALIgBgHQgHAGgGgGIgGgNQACAEAJgBIAPgBQAEAAgBgEQgBgGABgBQgDgEgEAEQgGAEgCAAIAEgKIADACIAHgHQAEgFgCgDQgDgCgFAEQgEAFgDgBQAEAAAIgJQAGgHAHAEQAFgBgBgFQgBgEgDAAQgFAEgJgJQgIgIgKAHQACgCgGgEIgJgGQgIACgBAEIgEgBIgJAKQADgIAEgEQAEgDAKgCQgCgGgEgBQgFgBgEgFQAJAEAAgFIAJAEQAGADADAFQgDgKAPgCQAPgCACAFIAFgJQAEgFgDgDIgRgCIAPgGQABgEgEgDQgEgDgFACQgDAIgRgCQgSgCgBABIAIgEQAFgCAAgCQAGACADgEQgDgCgBgIQgBgEgKACIAAgFQgDAEgEgCIgGgDIAGgFIgSgEIAEgRQACgKAEgEIgHgCIANgFQAIgEgBgEQgIAAgFgIQgFgIgJABQALgFgDgIQgDgGAOgCQgFgKgEgEQgGgHgNACIAOgCQgFABAAgEQABgFgBgCQAFgBgBgJQAAgKANgDQgFgJgRAMQAHgIABgDQACgGgHgGIgGgHQgFgFgEAAIgIAGIASgPQgJABAEgIQAFgKgDgEQAEACACgCIgFgKQgGAAgHAGQgHAGgDAAQgFgLALgNQALgLALgBIgJgEIgIgHIgDAFQABgJgQgGQgTgHgFgKQgFABgCAGQgCAGgGgBQgFgGgBgIQAAgJAGgFQAJABAFgGQAFgGAHAAQgBgFgIABQgLAAgDgBQAEACAZgKIgCgPIgHACQgEACgCgCQAEgCABgFQABgFgDgBQADgBABgGIABgIIgJgEQgGgCAHgEQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIADACIAFgLQgGAFgIgHQgGgHgDAGQgGgBgCgDQgBgEABgEQABAEAEgBIAIgDIgBgKQgBgEgCgEQgFgDgEACIgIAFIgDgPQgDgCgEAEQgEAEgEgFQAGACAIgHQAJgHgDgFIAGAAQACAAgEAFQAHAAAFgGIgagIQgPgEgEgMQgDgDACgKQACgGgKABIACgBIgHgMQAFgBABAFQABAFAFgCQAAgGgDgGQgCgEADgGIAEAHQADAEAHgEQAAgIgIgFQgMgIgCgDQgFABgDADQABgFgEgIQgGgKgBgDIgNAAQgGAKAGAEQAIAEgDAHQgIAAgCgJQgCgKgDgCQAIgDAGgFIAGgJQgFgFACgGIADgLQgEgCgBAEQAAADgGgEQgFgHAWgHQAIgDAAgBQAAgCgNgCIgKAGQgBgOgIAAQAGgCgDgEQgCgEAHACIgDABQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAIAHgBQAKgFgBgIIgCgNQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQAAgHgEAAQgIAAgFgFIADgBQAIgEgFgEQgFgCgFAEQgIAFgDABIgDgIIgNADQABAAAAAAQAAgBABAAQAAAAgBgBQAAAAAAgBQgBgDgFgDQAGADAMgBIAYgDQgDAEADABQAEACAEgCQACgJgOgEQgMgEAGgHIgKAFQgEACgBAFQAAgBgGgBQgHgBgCgBIADABIgCgSQgBgJgJgBIAFgCQgBgIgCgBQgGgBgGgDIALABQAGgEgGgDQgHgEAAgCQgHABgCAEIgEAGQAAgBgJgBQgHgBAGgHQgBAJAHgDIgDgMQgCgEgEgDIALABQABgHgGgBQgHgCgCgDIAFgCQACgCgBgFIgKADQABgFACgCQAGgCAEgGQgDgFgLAAQgMAAgDgBQAFgHgDgKQgCgLACgGIgHgEQgFgCABgFQgFADgFgCQgGgDgIAEQgEAHAKgBQAHAAgIAGQgBAAgEgDQgDgEgEgBIADABQgCgNgbgDQgZgCAAgQQADgDADABQADAAACgCQAAgFgHABQgJACgBgEIgTgeQAMADgBgIQgBgMACgBIgNAEQABgFAEABQADABACgDIgLgEIARgMIgNgLQgJgGgLACQgKgVgggkQgkgsgJgOQgFgGAFgLQAEgJgKgBIAIgDIgKgVQgFgNABgJQgEgBgDAEIgEAGIAEgJQACgHgEgDQgFAGgHgGQgHgFgCgIQADACAGAFQAFAEAGgEQABgJgFgCIgMgEIALgBQgIgGADgMQADgLgMgHQgEABABAFQABAEgDABQgKgIgCgUQgCgWgKgIQAFACABgCIgGgJQACABAEgDQAEgEADAAQAEgCgCgDIgEgFQgHgBgJAIQgGAHgIgHQAMgCgDgIQgDgJAEgBQgDgQgPgQQgTgVgEgJQAFgCAFgFIALgIIgJgDIADgBQACgIgHgBQgHgBgDAGIAFAEQACACgFAFQADgEgHgIQgHgHAGgGQACAAAEgCIgEgHIgMAFQgIgggagwIgCgVQgBgMAFgEQgBgKgJgLIgOgQQACgEgHgLQgGgKAKgEIgOgEIAGgCQgFgDACgCQACgEgCgDIgKAEQABgEgIgKQgIgKgBgHIADgBIgGgEQgDgBABgEIAJgFQgWgKgJgeQgKgjgLgLQAFgNgOgNQgNgLALgTQABgGgKADQgJAEAEAGQgOgUgihCQgeg4gYgdQgEgNgfg6QgWgqABgWQgDABgBAEIgCAGQgFgEAFgEIAJgGIgKgFQgGgDgFAAIgDAHQgDgKgXgmQgSgcADgYIgHAFQgGgIADgZQACgWgPgIIAJADQAEABADgGQgRgNADgjQAEgtgDgOQABACAEgBQAEAAAFgCIgLgLQADgFADADQAEAEADgDQAAgIgKACQgKADAAgKQAIgEgDgHQgCgIABgCIgGgBQgGAAACgEQAFADACgEIgNgTQADgBADgFQACgDAFADQAIgIgJgEQgJgEAJgHIgOgGQABgBAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABADAEgCIgGgJIAJgEQAFgDgDgDQgDgEgDAFQgCAEgBgHQgDgEAJACQAIADgBAFIAEgMIABACIAHgFQAFgEgDgFIADACQACgKgMABQgPACgEAAQAGgHAAgJIgQAHQAFgCgEgDQgBAAgBgBQAAAAAAgBQgBAAABAAQAAgBAAAAIAGAEQADgHAOgGQANgFAAgGQAFgBgDAFQgDAHAEACQAFgFAJAAIAQAAQBWAYCODQQBHBoA4BpIgCANQAAAKAIgEQgFAEgCAFQgBAGAEAHQAIAAAEAGIAHAKIgDABQgCAHAJADIAPAGIgFAOQALAPAKAAIAbA0QARAeATALQgKAJAHAPIANAUIgJAGIAPACQgEABgBAHIgCAMIAKgDQgFABAGAFQAGAEgNAFQAPAIALAJIAVASIgJABQAKAEgHAMQgJAKAQAEQANAQAGAZQAEAPACAcQABACADADIAGAEIADgSIADAWIgDgBQADAOAMAQIAUAZQgBAWAOAsQAMAogEAXIAWgEIgKAFQgGAEgCAFQAFAGARgGIgIAMQAKgDgBAOQAAAOANgCQgGAEABAIQABAIAHAAQAAABgIAEQgGADAEAEQAJgFADACIAJAGQABADgFAIQgFAIAEADIgFgBQgCADAEAGQAFAFAGACQADAAADgEQADgEAEABIgIAIQgFAFgGgCQgCAFAGADQAGAEAGgEIADgHIAJAgQAAgBgBAAQAAgBgBABQAAAAgBAAQgBABAAAAIgEAGQAIgBAIAEIAJAFIgKAKIAFgBIgDAEIAOADQgFAFgBAFQgBAHAIAAIAEgIQABACgBAHQAAAFAFAAIgCABIgFACQAEAXAaAYIgCAAQABAHAJADQAFADAKACQARAfAOAjIAMgCIgIAGQAJALAGAaQAFAeAGAJIAJgGQgCAHAGACQADABgIAHIASARQALAKAJAGQgGAEABAGIACALQAPgBgBAIQgBALAIADIgEgBIAIAHIAHAGIgGADQABAIAGAEQAGAEACAEQAAAEgGADQgDACADAHQAFgBAHACIAMAEIgBAGQgEANAJACIgGAAIAFALIgDgBQAGAFAAAIQABAIAIAHIgEgBQAUAkACAKIgFACIAUANIgJAAIAEAMQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQANAEgFARQgGAVAEAGIgDgBQgFADABAHQABAJgBADQAHgCAHABQAIABADAEIgMgBIAEAIIgCgBQgGACACAEQADAEgDACQAEAGADgFQADgEABAEQgGABAGAJQAGAKgIAFIARAWIgHABIAKAEQAFADgBAFIgCgCQgDgEgDAAQgCAHAKAKQAIAIgIAFQABAEAFAAQAEAAAEgCQgGAEAEAIIAFAOIgKgBQAEABAAAEIAAAGQgEgEgEABIADARQACAKAFAEQAAAAAAAAQABAAAAAAQABAAAAgBQABAAABAAQgEAOAWAcIgHgFQgEgDgDAGQAEAHAIABQAJABAEAFQgCABgFgCQgEgBgEAEIAQAIIgMADQAJALgEAiQgFAeATAIIAOgFQgGAGABAKQABAJgLAGIAGABIgLAHIASABIgLACIAHAFQgGADgDAAQAKAFgFAHQgGAHAIAFQgFgDgBACQAIAGgDAKQgDALADAGIgIAAQgBAEACAEIAEAHIAGgFIgKALIAIAFIgFABQAGAHAAAEQAAAEAGAIQgDgCgEABQgEABgCADQADACABAIQACAJACAEQgCgDgFAFQABAEAFABQAGACAEgDIgBgGQAGADgGAFQgIAFADAFIAJgCQABABACAFIgFgEQgFACADAIQABAGgJgDQgCAEAEAEIAGAGIAHgHIAEAbIgHABQgEgBgCABIAFAFIgDgCQgIAJAJAKQAJAKgJAJIAJgDIgEACQAEABAAAFQgBAEAFAAQgGABACAIQACALgBADQAHABACABQACACACAFQgDAJgEAEIgPAIQAJAFAFAMIAHARQgIAEgEgGQgEAGAJALQAJALgHAKIAKgDQABAFgKACQgHABAFAHIAIgEQAFAKABAGQgFgBgBAFQgBAEgEgDIADAHIgCAAQAEAKAHgEIgGAHIANgBQAAAEgFACQgHACgDAEIAKAFIgDABIAIAGQgFgEgIABQgJAAgDAGQABACAJAEQAHADgCAFQgEgGgFAJQgFAJgIgFIAKASQAEAJAJAHQgRACAIAJIAMAPIgHACIAHASQgEgFgEAFQgGAGgCAAIARAJIgVgDQgGADAIAEIgCABIAEAMQgCABgHgDQgGgDgBAFIADAFQACADADABIgGgBQAGAEARAGQAMAHgIALQgEgGgGAAIgOABQAFAFgFABQgHADgBABIAWgEQgBAHgJACIgNACQABABACAGQACAFAFgDIgDAGQgCACgGgDQgCAIAIABIAMAAQgHAMABAGQABAHgGAMQgJgCgGgGgAJXUFIAAAAgAJdUCIgGADQABgJAFAGgACLENIABAAg");
	this.shape_4.setTransform(65.3,144.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#202020").s().p("AgFgCQALACgBACQgIAAgCgEg");
	this.shape_5.setTransform(92.2,188.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#202020").s().p("AAAgBIABABIgBACg");
	this.shape_6.setTransform(5.7,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#202020").s().p("AgCABIgBgFQADgBAAAFQAAAEAEABIgBAAQgEAAgBgEg");
	this.shape_7.setTransform(111.7,262.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,0,121.2,289.1);


(lib.Path_8_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ACQDOQk1i1jwkOIAmhWQBuB+CYCTQEtEjDSBjQhrgkibhag");
	this.shape.setTransform(40.7,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,81.4,66.5);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChBkQhChJihAgQhRAQhEAeIF6jvIAWB9IAcBiQAIAugPAAQgOAAgfgjg");
	this.shape.setTransform(21.7,13.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.3,27);


(lib.Path_7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ABOHEQi6oTANiYQAWjyiZlsIBSgMQARBDASBgQAlC+ALCPQAOCvB7HtQBbFrA8CsQhLi9hKjRg");
	this.shape.setTransform(22.8,85.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,170.1);


(lib.Path_7_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("ABUMnQiOhzjCk9Qg9hjg6hsIgvhXQA/lag+AsQgfAWgrBbQA3ieg4AMQgcAGgoAmQAGggANgsQAbhYAog7QAog7g3gVQgbgKgkABQAPg3BFicQAihOAghDQDKCMDPCfQGiE+AjBcQAdBKAQCUQARCaAbBNQAWA/gUB9QgWCGg3BqQhCB8haAgQgeALgfAAQhSAAhbhIg");
	this.shape.setTransform(56.1,88);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.3,175.9);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABkBaQhCgtiFARQhEAIg2ARIEli5QALAsAlAWQASALAQABQAeBCAmA1g");
	this.shape.setTransform(22.3,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.6,20);


(lib.Path_6_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AgMHxQiHgBjlhNQjxhRhlhXQgqglg3gkQg3gjgUgOQghgYgLgUQgMgYAKghQBphMCKhTQEUimCngWQBWgMB7gjQBFgVCOgtQEChQBuAUQB6AWCBArQBAAWAoARIAbASQAZAagEApQgNCEkwDhQiqCWh9BlQjuDAhnAAIAAAAg");
	this.shape.setTransform(94.2,49.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,188.5,99.5);


(lib.Path_6_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AHAKFQgjgJg2gUQhrgnhcgyQhSgtiAi+QhGhpglg0Qg/hZgzgzQhihohikCQgxiBgehtQARgvBBAEQAUABA2AFQA3AFAvgCQBugGDHBJQC+BFBZBHQBGA3A7EAQAfCEAkDAQBVE6g6BgQgWAkggAAQgKAAgLgEg");
	this.shape.setTransform(54.7,65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,109.5,130);


(lib.Path_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhphXQhckag5j2IAjgbQAUAbBDDSQAuCPA3C7QAfBkCCE/QBBCgA8CLQiyiri2ovg");
	this.shape.setTransform(25.6,64.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.1,128.6);


(lib.Path_6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AhOLOQgSgVgagkQgyhHglhMQghhEgDjRQgFkFgLhJQgUh9AskBQAViAAahoQAdgjAnAZIArAhQAgAXAeAOQBFAiBeCGQBaB/AbBcQAVBIhCDwQgjB/g3CyQhKEthJA+QgTAQgPAAQgOAAgLgOg");
	this.shape.setTransform(26.9,73.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,53.8,146.6);


(lib.Path_6_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AhWi6IBWAsIBXFJg");
	this.shape.setTransform(8.8,18.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.6,37.6);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABOhUQDDARAwBCQAYAfgQAdIjEAAQhUhCjMAoQhhAUhSAgg");
	this.shape.setTransform(34.6,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,0,67.1,17.1);


(lib.Path_5_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AnwFHIH4h4IIYgpIoMBiInWBqgAn1FCIgogmQBnhACxhAQGViSHoAMQjDAVjxAxQnRBgjoCGIAFAFIgUAEIAPgJgApPD/IhghEQAJgHAQgJIgdgbQBOgrBWgrQDIhjA5gGQA5gGIChAIH5hAIxJDHQhUAfhcAlQiNA4g2AdIB5BxIgeAUgAodEcgAsJBQIALgGIgnglQBOgzBgg2QDBhsBegFQAsgDCiglIFDhLQHJhjCSAjQnwBfiuArQg0ANhfAQQhxASg6ALQjUAlhYA0QiLBQh/BFIBLBGIgZANg");
	this.shape.setTransform(80.6,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,161.3,74.1);


(lib.Path_5_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(10.3,67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AhbF1QgKgDgMAAQgJgBACABQgGgCAGAAQAaAEgBgDQgFgCgUgDQgOgDAEgCIADAAIABACIAFACQALACgCgCQgDgBAJACQAGgBgLgEQgOgEAAgBQALAAAHADQAHADAGAAIgCgCQAEACAKABIANABQgKgCgBgCQgBgBgOgBQgHgGgBgCQgBgEAMABIgJgDQAGAAACgBIADgDQAPADgCgDQgOgCgBgCIAPABQAAgBgIgBIAJAAIgNgEIAEABQgCgDgWAAIABgCQgQgBgEgFQADACAdAEQAHABgBgCQgCgCgGAAIgMgBIAJgBIADABQAQAAAAgBIgLgBIgJgBIAQABQAJAAAIADIAHAAQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAQgHgBgIgDQgHgEgNAAQADgBgRgEIgMgBIgEgBIgOAAQAHgCAXADQgBgBgEgBIgJgDQAKACABgBIASAGQAAgCASADQATACABACQAPAAgDgCIgVgEIAUACQABAAAAAAQABAAAAgBQAAAAgBAAQAAgBgBAAIgLgCQgGABgUgEIgYgEIAUABIALACQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgNgCIACgBIgJgBIgHgCIAJABIgUgEIAJgDQAFgCAHABIgJgCIARABQAMABgBgBQgJgBgDgCQgEgDgMgCQAQACgCgCQgCgCARACQgDgDgDgBQgEgCgKgCIAJABIgFgBIADgBQAGABACgCQADgCAQACQgDgDgYgBIANgBQADAAgGgDQgGgEgIgBIAOAAQgLgBAHgBQAKgBgDgBIAHABIgDgDIgRgBIgOgBQgCgDARAAQAQgBAOACQgLgCgHgDIgEAAQADgBgRgEQgVgFgCgDIgMAAQgDABgIgBQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQACgCAJABQALACAHgBQAIAAAIABQABgBgKgBIgQgDIAmAEIABgEIgQgBQAGAAADgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAgBAAQAGAAAFgCIgJgDQgCAAgBgBQAAAAAAAAQABAAABAAQACAAACAAQgCABAHABIAKgBQgJAAgGgDQgGgCgFABQgOgCAJgCQgBABAQABIACgCQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgWgCIACgDIgJgBQgGAAgDgCQAGACANAAQAMAAgBgCIAHABQABAAAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAIARABIgdgGQgRgDABgDQgBgBAAAAQAAAAAAgBQABAAABAAQABgBACAAQAEgBgMgBIACAAIgDgDQAGAAgBABQAAACAGAAQABgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAGgBIACACQACACAJAAQADgBgHgDIgMgEIgLgBQABAAABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgQgCQgLABAGACQAHACgGAAQgJgBABgCQABgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIAeAAQgEgCAFgBIAIgBIgHgBQgCABgFgCQgDgCAdACIALABIgNgDIgPgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAgBAAAAQgBgBgGgBQAJABgBgBQgBgBAHABIgDAAQgCABAMABQAOAAADgBQACgDACAAIADABQAEgCgGAAIgNgDQASACgGgDQgFgBgIAAIgQgBQABAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAIgOgBQAAAAAAAAQAAAAAAgBQgBAAgBAAQgBgBgBAAIAxAGQgLAAATACQAGgBgPgDQgNgDAKAAQgTgBgEABIgOgDIADAAIAHgDQADgCgKgCIAHABQABgBAAAAQABAAAAgBQAAAAgBAAQAAgBgBAAIgLgCIANACQACAAABgBQABAAABAAQAAAAAAAAQgBgBgBAAIgGgCIgMAAIgIAAQgYgCASgBQgBAAAAABQgBAAABAAQAAABACAAQABAAADAAIABgCQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIANACQAEgBgGgBIgHgCIAHAAIAEgBIgNgBIAIgBIAPAAQgBgBgLgCIgRgDQAJAAADgCQADgDAGgBIgGgBQgEgCAFAAQgIAAgEgCIgQgBQgIABALABQACAAAAAAQABAAAAAAQgBAAgCABQgCAAgDAAQgCgCgHgCIADABQAGgDgbgEQgagEAKgDIAOABQADgBgIgBQgKgBAAgBIAAgIQALACAFgBIAJgDIgQgBQAHgBAFABIgGgCIAaAAIgHgEQgFgCgNgBQAEgFgJgJQgKgJgDgEQgCgBAMgCQAJgBgKgBIALAAQACgHAHgCIgRABIAKgBQABgBABAAQABAAAAAAQAAgBAAAAQAAAAgBAAQgIABgFgCQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAIAGACQAEABAJAAQAGgCgEgBIgLgBIAMAAQgGgBAJAAQAJgCgJgCIgGABQgBABgEAAQgIgCAIgEQAIgFgHgCIAHABIgCgCIARgBIAFgBIgCgBQgIgBgOACQgLABgFgCQAOAAABgBQABgCAFAAQAEgEgKgDQgMgFgBgCIAfgDIgJgBIAEAAQAFgBgHgBIgOABIAEABQACABgIABQAFgBgFgCQgFgBAKgCIAHAAIgBgCIgQABQAFgHgJgKIAHgFQAEgCAIgBQADgCgFgDIgKgEQAFAAgDgDQgDgCAOgCIgNAAIAHgBQgFAAADgBIAEgCIgOACQABgBAAAAQABAAgBgBQAAAAAAAAQgBgBgBAAQgBgBgBgBQAAAAgBgBQAAAAAAgBQABAAAAAAIAEgBQgKAAAFgCIANgBQgUgCAGgHQAHgJgGgCQAOgEgIgDQgIgCAYgGQAEgCgMACQgMACAAABQgEgFAFgPQAEgOgFgGQACgCAGgPQAEgKAQgHIgNAEQgDgBAIgCIANgDIgRABIgHACQAEgDAAgIQAAgGARgJIgKADQgBgBASgJQAQgJgKABIAHgBQADAAAHgDQgJgCAXgNQAegRAFgGQgBABAQgEIgFgCQAFgDACABQACAAAFgCQAEgDgMAEQgMADAGgEQAKgDACgDIADgDIgGABQgEABAEgCIAGgCIgDgEIAJgEQAEgCAEAAQAMgGgHABQgHABAMgFIgLABQAHgEACAAIgBgBQATgHgCgBQgCAAgGADQgDACACgDQAQgFgFADIAKgFIAAAAQAQgHgCgCIACABQAHgGgNAEIgTAHQALgGACgDIgPAGQAAAAAAAAQABgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQAAAAAAAAQAAgBABAAIAEABQAGgEAQgHQAQgHADgDQAGgCgFADQgGAFACAAQANgHAVgEQBagMAZBKQAMAlgJAlIgKAEQgGADAHAAQgPACAAAFQAIAAABACIABADIgEAAQgFADAHAAIANACIgPAFQAEAEAKAAQgDALABAFQACAIANAEQgQADgBAEQAAADACADIgNACIAQAAIgKADIgIADIALgBQgFABAEABQAEABgRACQATADAQAGIgKAAQALABgQAEQgPADAQABQAKAEgFAHQgDAEgLAIQAAABAIACIAMgGIgHAHIgDgBQgCAEAGAFIAMAHQgLAGgDAMQgCAMgPAGIAagBQgUACgHACQAFACAVgBIgPADQANgBgHAEQgHAEARAAQgJABgDACQgDACAIABIgLAAQgJABADABIAQAAIAHACQAAABgKACQgJACADABIgGgBQgBAAAAABQgBAAAAAAQAAABAAAAQAAABABAAQACACAHABIAJgBIAJAAQgWACgFgBQgFABAFACQAGABAJAAIAGgCIgFAJQgCgBgEABIgHABQAQABAIAEIgRABIAHABIgGAAIAOACQgVACAMABIAKgBIgFACQgDACAIAAIgMAAQgIAHANAJIgBgBQgEADAVAFQgBAJgKAMIAOACIgNAAQADADgOAGQgOAHAAACIANABQgHABAFABQACABgMAAQALAIAIAEQgJgBgCACQgCACgDAAQARACgGABQgHACAGACIgDgBQABACAGADIgHAAQgEABAEACQAFACAAABIgKAAQgGAAAAACIAYAEIgEABQgMACAJACIgHgBIAAADIgDgBQAEACgFACQgEABAGADIgEgBQAFAKgCACIgHAAIAQAFIgLgBIgBADQAAgBgFAAQANADgOADQgRADACACIgDgBQgIAAgBACIgGACQAYACAEADIgOgDIABACIgCAAQgIAAABABQAAAAAAAAQAAAAAAAAQgBAAgBABQAAAAgBAAQABABAGAAQAGAAgBABQgHgBADADQADADgMgBIAMAHIgJgBQAOAEgDABIgBgBIgFgBQgGABAIADQAGADgMAAQAAABAQACQgJgBABACIACAEIgNgCQABAAABABQABAAAAAAQABAAAAABQAAAAAAAAIgDABQgDgBgGgBIgCAEQAAABAAAAQAAABAAAAQAAABABAAQABABABAAIAFABQgJACAPAJIgGgCQgEgBgGAAQACACAJACIAOADIgIgBQgFgBgGAAIAQAFIgOgCQAHAEgRAGQgQAGAUAFIASABQgJAAgCACQgCACgPAAIAHABIgPgBIAVAEIgOgCIAHADIgMgCQALADgJABQgJAAAIADIgHgCQAIADgGACQgIABACACIgKgCQgBAAAAABQgBAAAAAAQAAABAAAAQAAAAABABIADACIAJAAIgPAAIAIADIgHgBQAFADgBAAQgBABAFADQgLgDgGABQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIgJgBQgBABAHABIALACIgBAAQgLAAACABIALACIACACIgEgCQgHgBABACQAAACgKgCQgEAAADACIAGACIAKAAIgDAGIgQgCIAEACIgDgBQgMAAAJAEQAIAEgPAAIAHAAQABAAABABQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQgFAAgBACQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQANADAAACQgIABgYgCQAJADADADIADAFQgLgBgDgCQgGABAIAEQAHAEgMAAIANACQgBABgMgBQgJgCAEACIALACQABAAAAABQABABAAAAQAAABAAAAQAAAAAAABIgIgBQgCABgFgCIADADIgEgBQACADAKABIgKAAIAQACQgBABgHgBIgNAAIAKADIgDgBIAFACQgQgFgNABIALADQAHADgEAAQgEgCgHAAQgKABgGgDIAFAGQABADAJADQgTgEAGAEIAIAFIgIgBIADAFQgDgBgHgBIgLgBIASAGIgYgFIgFAAIAEABIgCAAIAAADQgDAAgHgDQgGgCgDABIAHADIgGgBQAEACASAFQAMAFgOgBQgCgCgHgBIgQgDQABAAAAAAQAAAAAAAAQgBABgBgBQgBAAgBAAIgLgBIAbAFQgDABgLgCIgRgDIACACQABABAGABQgIAAgGgCQgGABAJACIAPADQgNAAgBACQgBABgMAAQgggJAaADgAhuEjIAAAAgABUEUIABgBQAFABgEAAIgCAAgABUEUIAAAAgAhPkfIAAAAIAAAAg");
	this.shape_1.setTransform(20.1,37.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABABAAQAAAAACAAQgHgBABAAg");
	this.shape_2.setTransform(7.9,68.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,75.9);


(lib.Path_5_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAFDeIivjeQhXhtgcgaQg7g0hJiwQgjhXgZhNIAsgEQAxBxAyCBQAgBRB4CLIC2DOQBbB5EYFHQh0g2j6k1gACtCjIlUldQgkgihQiuQgjhLgehGIAigDQgHgPgCgIIBhAEIAngXIAKAeIAugFQBUDWECE4QCGCeB2B2QlIj4jBk7QhUiIgjhiIiJAMQAUAxBABwQAqBJAoBCIJtLLIksk2gACSjTIkQlcIA0gFIEBFBIEnFWgAm1oeIBQgTIAJAWIhVAIIgEgLgAlcobIAAAAgAiJo9IALAOIgFAAIgGgOgAh+ovg");
	this.shape.setTransform(47.9,58.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,95.7,117.1);


(lib.Path_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("ADIBKQgTgZgZgYQhMhFhPgIQhNgHhLA2QgmAZgWAdQAphLAggZQBCg0B4AMQB1ALAhBaQAQArgCApQgCgFgKgPg");
	this.shape.setTransform(21.3,9.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.6,19);


(lib.Path_5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdgpQE+iBCeB2IhHBbQgqgUg+gLQh9gUhpAtIloBMQCBhYCgg+g");
	this.shape.setTransform(38.3,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,76.7,22);


(lib.Path_5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AiVC9IgUj9QgJh/gHgfQgPhDAaixQAMhYAQhLIAdAMQgQBzgUCBQgNBRATCiIAdDyQAICJApF9QgxhXgfligAgVDEQg/l7gIgrQgIgpAVizQAIhNAKhHIg4gXIACgKIA5ALIgDAWIAWAKQgHAxgFB3IgGCVIBfNFIg7l2gAAckuQADiTAShiIhYglIAEgYIA5AmIAhgGIgGAdIAeANQgiDWAjFmQATC7AZCOQhmlMAGlRgABviIIgdmNIAjAPIAeFwIAtGOgABPoWIACgPIABAQgABPoWgAh1ppg");
	this.shape.setTransform(19.2,63.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.5,126.1);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("ACECVQhGpkACgKIjEMmICUtUIlLGLIEfmyIgngwIlAFbIEUl8IgHgGIGHEqIhzhGIAtSbIhHplgAEXlXIBJA4IBaPSgAkPr5IBOA7Ij5FlgAjBq+IAEgGIBHA/g");
	this.shape.setTransform(44.3,76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.6,152.6);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFtA+QAeAOAdAOQgkgNgXgPgAEYAbQiYg2gkAcIjpgBIkaAKII4hjIBNACQBaACBBAGQgjAbgMAiQgPAuAyAiQgpgSgsgRg");
	this.shape.setTransform(42.5,9.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.9,18.1);


(lib.Path_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0AAQHZheBYgBImJBfIpxBgQDcgwDtgwg");
	this.shape.setTransform(51,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,19.3);


(lib.Path_4_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(16.1,71.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AgoGKQgFgDAOABIgVgDIgHAAQgFgBAEAAQAbAEgCgDIgZgEQgOgCADgCIAEAAIABACIAFABQALABgCgBQgDgBAJABQAGAAgMgDIgOgEQALAAAHACQAHACAHAAIgDgCQAFACAJAAIAOAAQgLgBgBgBIgPgCQgHgEgCgCQgBgDAOAAQgFgBgFgBQAFgBACgBIACgEQAPACgCgCQgPgCAAgBIAPAAQAAgCgJAAIAKAAIgOgDIAEAAQgDgDgVADIABgBQgQABgFgFQAEABAdABQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAAAIACgBIgIgBIgMABIAIgCIAEABIAKgCQAFAAAAgBIgLAAIgJAAIAQgBQAKgBAHABQAHAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAQgHABgIgDQgIgCgNABQAEgBgSgCIgeACQAKgDAUAAQgBgBgFAAIgJgCQAJABACgBIASADQAAgCATAAQASAAACACQANgCgDgCIgUgBIATgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAgBAAIgJgBQgGACgVgCIgXgBIAMAAIAHgBIAMAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgCgNABIABgBIgQgBIAKgBIgVgBIAJgEQAFgCAGgBIgIgBQAcgCgBgBQgJABgEgCQgEgCgMAAQAPgBgCgCQgBgBARgBIgHgDQgGgCgQABIAOgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIACgBQAGgBACgCQABgCARgBQgDgCgYADIANgDQADgCgHgBIgFgCQgFgBgFAAIgFABIAUgDQgLAAAHgCQAJgDgDgBIAGABIgCgDIgSACIgOABQgCgCARgEQAPgDAOAAQgKgBgIgCIgEACQADgDgSgBQgVgBgDgCIgLACQgEABgHAAQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgCAKgCQALABAIgCQAHgCAIAAQAAgCgJABIgRAAIAmgDIABgEQgNACgDgBQAGAAACgCQABAAAAAAQAAgBAAAAQAAAAgBAAQAAAAgBAAQAGgBAFgDIgKgBQgBgBgBAAQgBAAABAAQAAAAACgBQABAAADAAQgDABAHAAIAKgDQgIACgIgCQgGgBgFABQgGABgCgBQAAgBAAAAQAAAAAAAAQAAgBABAAQABAAABAAQgBABAQgCIABgDQABAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgFgBgQACIABgEQgEAAgGABQgFACgEgCQAHABAMgDQAMgCgBgBIAHAAQABAAAAAAQAAAAgBAAQAAAAgBAAQgBABgBAAIAQgCIgegBQgQAAgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQABAAACgBQADgCgLABIACAAIgEgDQAHgBgBACQAAABAGgBQAAAAABgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQgBgBAGgCIACACQACABAJgBQADgCgIgBIgMgDIgKABQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAAAABAAIgQAAQgMADAHABQAHABgGACQgJAAABgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAgBAAQAOgCAQgEQgEgBAFgCIAIgDIgHABQgDABgFgBQgDgCAdgDIALgBIgOgBIgPACQABAAABgBQAAAAAAAAQAAgBABAAQAAAAgBAAQAAgCgGABQAIgBgCgBQAAAAAAAAQABAAAAgBQAAAAABAAQABAAABAAQgCABANgBQAOgCABgCIADgDIAEAAQADgCgFAAQgKABgDgBQASgCgHgBQgEgBgJACIgPACIAAgCIgQABQAFgBgIgBIAVAAIAcgCQgHACAQgBQAGgDgQAAQgNgBALgCQgSACgFACIgPgBIAEAAIAGgFQACgCgJAAIAGgBQABgBAAAAQAAgBAAAAQAAAAAAAAQgBAAgBAAIgLgBIANAAQAJgCgGgBIgGgBIgMACIgIACQgYABARgEQgDACAJAAIABgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIALAAQAFgCgGAAQgIAAAAgBQAKgBABgCIgMABIAHgCIAOgCQAAgCgLAAIgRAAQAJgCABgDQADgDAGgCIgHgBQgDAAAEgCIgMABQgFgBgMACQgHACAMgBQABAAABAAQABAAgBAAQAAAAgCABQgCAAgDABIgDgBIgGgBIADAAQAFgEgcAAQgagBAJgFIAPgBQADgBgKAAQgJABAAgBIgBgKQAKABAGgCIAIgEIgQABQAEgCAEABIAGgBIgJgBIAagEIgIgEQgFgBgNAAQADgGgKgIQgMgJgDgFQgCgBALgDQAJgDgKAAIAKgBIACgGQACgDAEgDIgJACIgHACIAJgDQABgBABAAQABgBAAAAQABAAgBgBQAAAAgBAAQgIACgFgBQgBgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAHABQAEABAJgCQAFgCgDAAIgMAAIAMgBQgGgBAJgEQAJgDgKgBIgGABIgFACQgHgBAHgGQAHgEgHgBIAHgBIgDgCQACAAAPgDQACAAABAAQABgBAAAAQABAAAAAAQAAgBAAAAIgDgBQgHABgOADQgKADgGgCQAOgBABgCQAAgDAGAAQADgEgKgEQgNgEgCgCQATgFAMgCIgIAAIADAAQAFgDgHABQgIAAgGACIAFABQACAAgJACQAFgBgGgCQgEgBAKgDIAHgBIgCgCIgQADQAEgIgKgMIAGgGQAEgDAIgCQAEgEgRgFQABgBABAAQABgBAAAAQAAgBAAgBQgBAAgBgBQgCgCAOgCIgPAAIAIgCQgBAAgBAAQAAAAgBAAQAAAAAAgBQABAAABAAIADgCIgOADQABgBAAAAQAAgBAAAAQAAgBgBAAQgBgBgBAAQgBgBAAgBQgBAAAAgBQgBAAABgBQAAAAAAgBIAEAAIgFgBQgBAAAAgBQgBAAAAAAQAAAAABAAQAAgBABAAIAMgCQgTgBAFgJQAGgLgGgDQAOgFgJgDQgIgDAXgHQAFgCgNACQgMACABABQgFgGAEgSQADgSgGgHQACgDAFgSQAFgNAOgHIgMAEQgDgBAIgCIANgDQgHgBgKABIgHADQADgEAAgKQAAgIASgJIgKADQgCgCATgJQAQgIgLgBIAIAAIAKgDQgJgCAYgNQAfgRAFgFQgBABAQgDIgFgCQAGgDABABQACABAFgCQAEgDgLADQgMACAGgDQAKgDABgDQADgCACgBIgGABQgFAAAEgBQgCgBAJgBIgEgFIAKgDQAEgCAEABQAMgFgHAAQgHAAAMgEIgMAAQAJgDACAAIgCgBQATgGgBgBQgCgBgGADQgDACACgDQARgDgGADIAKgFIAAABQASgGgBgCIABAAQAHgEgLADIgWAEQAJgDAFgFIgTAGQABgBABAAQABAAAAgBQABAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIAEABQAHgEASgFQAPgEADgDQAGgCgFADQgIADADABQAJgEAJgBIARgDQBZgCAUBEQALAjgJAhIgLAFQgFACAHAAQgPACAAAFQAIAAABACIABADIgEAAQgGADAJAAIAMABIgPAFQAEAEAKgBQgDALABAFQACAIANACQgPAEAAAEQgBACADAEIgNACIAQgBIgKADIgJAEIAMgCQgFABAEABQAEABgRADQATACARAEIgKABQALABgQAEQgPAEAQAAQAKADgEAHQgDAFgKAIIAJACIALgGIgHAHIgDAAQgCADAHAEIAMAGQgKAHgCAMQgBAMgOAHIAbgDIgcAGQADACAXgEIgOAFQAMgCgGAFQgHAEASgCQgJACgDACQgCADAHAAIgLACQgIABACABQANgCADAAIAIACIgJAEQgKACADABIgFAAQgBAAgBABQAAAAAAAAQgBAAABABQAAAAAAABQADABAHABIABAAIgLABQgDACAEABQAGAAAJgBIAGgDIgEAKQgBgBgEACIgHACQAKgBAHABIAGABIgPAEIAGgBIgFACIAOAAQgZAGARAAIAJgDIgFADQgDACAJgBIgNACQgHAHAPAIIgBAAQgDACAHABIAOACQABAGgKAPIAPgBIgNACQADADgNAIQgMAJABACIAMgCQAMACgXADQALAGAJADQgIABgDACIgDADQARgBgGADQgHADAHABIgEAAQABACAHABIgIABQgDADAFAAQAEABAAABQgCACgIABQgFABAAABIAZABIgEABQgLAEAIABIgGAAIAAADIgDAAQAEABgEACQgEADAGABIgEAAIAFAGQABAEgBACIgHABIARADIgLAAIAAADQAAgBgGACQANAAgNAFQgQAHACABIgDAAQgHABgCACIgEADQAWgCAGACIgPABIABACIgBgBQgIABABABQAAAAAAABQAAAAAAAAQAAAAgBABQgBAAgBAAQACACAGgCQAEgBAAABQgGAAADADQADACgLACIAMAFIgJABQAQABgEABIgBAAIgGgBQgGACAJADQAHACgLABQgBADAMgCQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABIACADIgMABQABAAAAAAQABAAABAAQAAAAAAAAQABAAgBABIgBABQgDgBgHABIgBAEQAAABAAAAQAAABAAABQAAAAABAAQABABABAAIAFAAQgJAEARAHIgGgCQgEAAgGACQACACAKgBQAKAAAEACQgJgCgLADIARABIgOACQAIACgQAKQgPAIAVACIASgCQgJACgCADQgBACgPACIAHAAIgOACIAVAAIgPABIAHABIgLABQALABgJACQgJADAJABIgHgBQAIACgGADQgHADACACIgKAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAABABIADACIAJgCIgPADIAJABIgHABQAGACgCABQgBABAGACQgJgCgHADQAAAAABAAQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAABQgCgBgGACQAAABAGAAIALAAIABgCQAHABgJABQgKACABABIAKAAQgIAAABADQACABgLgBQgFABAFABIAGACIAKgCIgCAIIgQAAIAFABIgEAAQgMACAKADQAIACgPADIAOgBIgGABQABAAABAAQABAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABABAAQAAAAABAAQABAAACAAQgIABABACQAAAAAAABQgBABAAAAQAAABgBAAQAAAAgBABQAMAAABADQgIADgXABQAIACADADIAFAFQgLABgDgCQgGABAIAEQAIADgLACIAMAAQAAACgMAAQgDgBgBAAQgCAAAAABQgBAAAAAAQABABABAAIALAAQABAAAAABQABABAAAAQAAABAAAAQAAABAAAAQgFAAgDABQgCABgFgBIADACIgDAAQABADAKgBIgKABIARABQgCABgGAAIgNABIAKACIgEAAIAIACQgPgEgQADQAWADgIACQgEgCgHACQgJACgJgDIAHAGQADADAIACQgVgBAHADIAJAEIgIAAIADAFQgEgBgGAAIgMAAIATAFIgZgEQgIAAAHACIgCAAIABADQgOgEgGACIAIADIgHgCIAXAGQANAEgOABQgDgCgHgBIgRgDQACABAAAAQAAAAAAABQgBAAgBAAQgCAAgCAAIASACQgDABgLgBIgPgCIACACQAAABAHAAQgIAAgGgBQgFABAIABIANADQgLAAgBABQgBACgLAAIgQgEg");
	this.shape_1.setTransform(20.8,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgDAAIABAAQACAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQABAAACAAQgHgBAAAAg");
	this.shape_2.setTransform(13.9,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,41.5,79.6);


(lib.Path_4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghgbQiEieh5iVIFrGKIDSESQg6gvkGk6g");
	this.shape.setTransform(28.8,33.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,67);


(lib.Path_4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AloBcQC+gxBJgrQBhg5CdggQCwgkBcAjIiVCDIilgvIoXBzIBAgRg");
	this.shape.setTransform(53.7,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.2,-0.1,85.1,21.9);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJgjQgSi3gOirIBAHUIATE3QgRg+gilrg");
	this.shape.setTransform(4.3,39.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.6,78.1);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNkeICbF5QgzAhgTBVQgIAqAAAkg");
	this.shape.setTransform(7.9,28.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.7,57.5);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKgHImkgmILOAAIAAABQgDACAIAGQAZAVBxA5IkVAEg");
	this.shape.setTransform(43.2,4.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.4,9.3);


(lib.Path_3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIgHIEDgOIF+htQgUANgMATQgaAkAiAZIxZCog");
	this.shape.setTransform(56.9,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.9,26.3);


(lib.Path_3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AhmE5QgBgCgGgDIgQgHQAEADgKgEIASAIQgDAAgKgEIgQgHIACACQAAABAGADIgFgBIgJgFQgHgBAYALQgNgDgCABIgNgCQgIgEgEgEQgFgEANAFQgJgFgLgDQgHgDABACQgGgFAGACQAYAKgBgCQgEgEgSgHQgOgGAEgBIAEABIABABIAEADQAKAFgCgCQgCgCAJAEQAFABgKgHQgMgHAAgBQALADAFAEQAGAFAHACIgCgDQADADAKADIAOAFQAAgDgZgKQgGgHAAgCQgBgEAMADIgIgEQAGACACgCIAEgCQANAHgBgDQgNgGAAgCIAOAFIgHgEIAJADIgMgIIADACQAAgCgIgDIgOgEIABgBQgPgFgCgHQABACAKAFIASAIIAEABIACgBQgCgCgFgCIgLgEIAIACIADACQAQAEAAgBIgIgDIAEABQAJADAHAEIAGACQAAgBAAAAQAAAAAAgBQAAAAgBAAQgBgBgBAAQgGgCgHgGQgGgFgNgFQAFACgQgKIgcgKQAHABAVAJQAAgCgFgCIgHgFQAJAFABgBIAPALQABgCARAIQARAHABACQAOAEgCgCIgTgKIATAIQABAAAAAAQABAAAAgBQAAAAgBAAQAAgBgBAAQgDgDgHgCQgGgBgTgKIgVgKIASAGQAEADAHACQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQABgBgMgFIACAAIgOgIIAIAEIgSgKIAKAAQAFAAAGACIgHgEIAQAGQAKAEAAgBQgIgEgDgDQgDgEgLgFQAPAGgCgCQgBgDAQAIIgEgGQgFgEgLgFIALAFIgEgCIADgBQAGADACgBQADgBAPAGQgCgDgXgIQAUAGgJgHQgEgFgIgEIAOAFQgLgFAIABQAJACgCgCIAGADIgBgDIgegMQgBgDAQAFQAPAEANAHQgJgGgGgFIgEgBQAEAAgQgJQgSgLgBgDIgLgEQgEgBgGgDQgBgBAAgBQgBAAAAgBQAAAAAAgBQAAAAABAAQACgBAIACIARAIQAIACAIAEQABgBgKgEIgMgHQAIAEAYALIADgDIgOgHIAIADQAAAAABgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIAGACIAFAAIgJgGQgBgBAAAAQgBAAABAAQAAAAACAAQABABACABIACABIACACIAKACQgIgDgGgEQgFgEgEgBIgHgFQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAABAAQgBABAPAHIACgCQAAAAABgBQAAAAAAAAQAAAAgBgBQAAAAAAAAIgUgJIADgDIgJgEQgFgCgCgCQAFADAMAEQAMAFgBgCIAEACIAAgBIAAgBIgLgGQgOgJABgCQgBgBAAAAQAAAAABAAQAAgBACAAQABAAABABQAEAAgIgEIgCgFQAFADgBABQgBAAAGADQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQgBgCAHACIAAACIACACIADAAIAEgBIgBAAIgEgDIgGgFQgFAEgFAAIAHgGIgHgDQAEABgBgDIgBgEIgOgIQgLgDAFAEQAGAEgHgBQgIgFACgBQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBgBAAIAcALQgCgDAFABIAAAAIgBgDIACABIAEABIgCgDIANAGIACgBIAAAAIgOgGQAFgBgFgDQABAAABAAQABABABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAABQABAAABABQgCAAALAFIAAAAIACgBQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgFgCIgDADIAEACIACgBIACgCQAIAEACgBIAFgBIADADQAEAAgFgDIgLgHQAQAIgFgFIgLgGIgPgGIACgCIgPgHQAFACgGgFIArAYQgHgCAOAHQAGABgNgIQgLgHAKADIgVgJIgNgIIADACQABgBAHAAQADAAgIgGIAGADQABAAAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAIgJgGIAKAGQACABABAAQACABAAAAQABAAgBgBQAAAAgBgBIgEgEIgMgFIgHgDIgIgFQgGgEAKAEQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIAFADIADgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAIALAGQAEABgFgEIgGgFQAIAFADgBIgLgGQAGABAPAHQAAgBgKgGIgOgJQAIADAEgBQADgBAGACIgFgEQgDgDAFABIgLgGIgOgIQgHgCAJAFQACABABAAQAAABAAAAQgBAAgCgBQgBgBgDgBIgDgCIgCgDIAAAAQAHAAgXgNIgMgIIgCAEQgDAMAMAIQAIAIgIALQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAGAAQABAMADAMQgGADgDAEIAEAAQADAAgHAFQAEgDgHgBQgGgBAIgGIAHgEIgDgCIgOAIQgCgLgQgQIAEgKQACgFAHgEQABgEgGgBIgLgCQAEgDgEgDQgEgCANgGIgOADIAHgDQgEABACgCQABgBABgBQABAAAAgBQAAAAAAAAQABgBgBAAIgNAGQACgCgEgDQgGgCACgDIADgBIgFAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAMgFQgUABADgLQAEgPgHgCQANgHgJgCQgIgDAWgKQAEgDgMAEQgMADABACQgGgIACgUQABgTgGgIQACgDAFgTQADgNAQgIIgNAEQgDgBAIgBIANgDQgHgCgKABIgHADQADgEAAgKQABgIASgJIgLADQgBgDATgIQAQgHgKgCIAHAAQADABAHgCQgJgEAZgLQAhgOAEgEIAQgBIgFgDQAGgCABABIAHAAQAFgDgMACQgMACAGgDQAKgCACgCIAFgDIgGAAQgFAAAEgBIAHgBIgCgEIAJgDQAEgBAEABQANgDgHgBQgHAAANgDIgMAAIALgCIgBgCQAUgDgCgBIgIABQgEABADgCQAQgBgFACIAKgEIAAABQAUgDgBgCIABABQAGgDgLABIgWACQAMgDADgCIgOACQAIgDASgDIATgEQAGgBgFACQgIACADABQAOgEAVAAQBXAAANAvQAHAXgKAXIgLAFQgHADANgDQgTAFgBADQAJgBAAABIABACIgEAAQgFADAIgBIAMgBIgOAFQADADAKgCQgDAHABADQACAFANgBQgPAFgBADQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAIgMAFIAPgEIgRAIIAMgEQgCABgBAAQgBAAAAAAQAAABAAAAQABAAABAAQAEgBgQAGIAigFIgKADQALgCgPAGQgPAGAQgEQAJAAgDAEIgMAKQAAABAIgCIAKgHIgGAGIgDABQgBACARgDQgJAHgCAFQgCAEgMAJIASgMIgBABIgFAEIAGgEIgBABIgEACIAEgCIAAAFIgEADIgFAGQANgMAJABIgKAOIAFgEIgDAEIAPgEQgEAKABAHQABAJAKAAIAEgLQABACABALQADAJAJAFIgEABQgEACgCAAQANAmAEAiIAFAwIgCgBQgEAFAFALQADAGAGAJQgIAXgQAJIAMAHIgMgFQABAFgPAAQgQABAAACIALAFQAKAHgWgJIANASQgIgEgDAAIgFAAQAPAJgGgCQgHgBAFADIgDgBQAAACAFAEIgGgDQgEAAADADIADAEIgJgEQgFgCgBABIAVAOIgFgBQgLgEAHAFIgGgDIAAACIgDgCQACADgEAAQgEgBAEAFIgDgCQABAJgCABIgHgDIANAKIgJgFIgCACQABgBgGgBQALAHgNgEQgRgEACADIgDgCQgHgDgCAAIgGAAQAVAKADAEIgMgHIAAACIgBAAQgHgEAAABQAAAAAAABQAAAAAAAAQgBAAgBAAQAAgBgBAAQABACAFACIAFACQgCgBgBAAQgBgBgBAAQAAAAAAABQAAAAAAABQACAEgLgFIAJAKIgIgEQAOAJgFgBQgBgCgFgDQgFgBAGAGQAFAFgLgFQgBABALAFQgBAAAAAAQgBgBgBABQAAAAAAAAQAAAAAAABIAAADIgKgFQADACgEAAIgIgFIgDACQgBAAAAABQAAAAAAABQAAAAABABQAAAAABABIAFADQgKgCAMANIgFgEQgDgCgGgCQACADAIAEQAJAFADADQgHgFgLgEIAOAKIgNgHQAGAGgTgBQgPgBARALIARAHQgJgDgDABQgCABgOgFIAHADIgOgFIATAKIgOgHIAGAFIgKgFQAJAGgIgDQgIgCAGAEIgGgDQAGAFgGgBQgIgBACACIgJgFQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAABIACACIAJAEIgPgFIAIAFIgHgDQAFAEgCAAQAAAAAAAAQAAABAAAAQAAABABAAQABABABABQgJgFgGgBQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABIgJgEQgBABARAIIgCgBQgKgDACABQALAFABACIgEgDQgHgCAAACQAAABgIgFQgFgBADADIAFAEIAKACIgFAFIgPgHIAEADIgDgCQgJgDAFAGQAHAFgMgEIAKAFIgFgCQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAABABQAAAAABAAQABABABABQgHgDAAACQAAAAAAAAQAAABAAAAQAAAAgBAAQgBAAAAAAQAJAGAAACQgHgBgWgJQAIAFACAEIACAFIgMgHQgGgBAGAGQAGAFgLgCIALAEQAAABgMgFQgCgBgBgBQgCAAAAAAQgBAAABAAQAAABABABIAKAEQAAAAABABQAAABAAAAQAAABAAAAQAAABgBAAQgFgDgCAAQgDAAgEgCIADACIgEgBQABADAJADIgJgCIAPAGQgCABgFgDIgNgEIAJAFIgDgBIAGAEIgNgHIgQgGIAKAHQAHAEgFgBQgCgDgIgCQgJgCgIgFIAFAHQACADAHAFQgUgJAGAGIAIAHIgJgEIACAGQgDgDgGgCIgLgEIAQAKIgWgLQgJgEAIAFIgCgBIgBADIgJgFQgFgDgDAAIAGAEIgGgCIAUAMQAHAEgDAAIgHgBgAheBxQAGgJgJAGIgEAEQAFgCgCADIgHAJIAIgJQgRAdAUgfgAhwBtQAAgBAAAAQABAAAAAAQAAAAAAgBQAAAAgBAAIABAAIgCgEIgBABIACADIgCgBIgFAAIAHADgAh5BbIAHAGIABAAIgEgDQABAAAEgEIAFgFIgCAAIgDgCIgJAIgAh9BVIACgDIAAAAIgFgBIADAEgAiigXIALAGQAEAAgIgEIgGgEIgBACgAh5gUIgFgFQgEgEgLgGQAEABgHgGQgHgCgGAKQAHAFAFABIAIACIgOgIIALAEIgEgCIAXAKIAAAAgACLh3IADgCIgCACIAFgEIgDACIACgCgAAdEEIABgCQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAAAIgDAAgAiJBJQgQgCgDgDIAQgOIAHAQIABAEIgFgBgAiOAvIACgBQAHgCgDAFIgDACIAIgDIgJAGIgCgHgAiOAvIAAAAgAhrkAIAAAAIAAAAg");
	this.shape.setTransform(22.1,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AAAAAIgBABQABgBAAAAQACAAAAAAQABAAgBAAQgBAAgBAAg");
	this.shape_1.setTransform(38,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQABAAgBAAQAAAAAAAAQAAAAAAAAQAAABABAAQABABABAAIgFgCg");
	this.shape_2.setTransform(4.3,55.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,44.2,63);


(lib.Path_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABgBxIijiQIkAlmIKHK/QgjAAgCAlQAAATAGAUg");
	this.shape.setTransform(32.4,39);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.9,78);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuAKIqCAAQBygZCJgaQEQg0BvAFQBvAFBrAqQA2AVAfATIhnBag");
	this.shape.setTransform(47,9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,94,18);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAACJIgri2IgPmPIB0NDQgUgNgRAgQgIARgEASg");
	this.shape.setTransform(5.9,44.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,89.1);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgmCIDBLpQgigng6AdQgbAPgWAXg");
	this.shape.setTransform(9.8,38.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.6,77.4);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACoAYQgcgTgkgOQhIgggjAKIlnghII6geQgBAEABAGQABANAJAMQAdAoBcATQgSAHgHAPQgNAfA+Aqg");
	this.shape.setTransform(36.4,9.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.8,19.2);


(lib.Path_2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABGglQD/gsDoggQgzAWgCAqQgBAVAJARIiggRQhjgKmeBKQjPAmi8AoQB1hBH9hWg");
	this.shape.setTransform(55.8,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.6,22.9);


(lib.Path_2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBABg");
	this.shape.setTransform(9.4,86.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("Ag4HjQgCgDgGgCIgQgGQAEADgLgDIATAHQgDABgKgEIgRgGQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAGACIgEgBQgEAAgFgDQgGAAAIAEIAOAGQgNgCgBABQgCACgMgCQgcgPAYAHQgJgEgLgDQgIgCABACIgCgCQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAZAJgBgEQgEgDgUgHQgNgEAEgDIAEABIAAACIAFADQALAEgDgDQgCgCAJAEQAGAAgLgGQgNgHAAgBQAMACAGAEQAGAEAGABIgBgDQADAEAKABIAOAEQgLgEgBgCQAAgBgOgEQgGgHAAgDQgBgEANACQgFgCgDgDQAGABACgCIADgDQAOAFgBgDQgOgEAAgDIAPADQABgBgJgCIAJABIgMgGIADABQgBgDgWgDIABgCQgQgCgCgHQACACAcAIQABABABAAQAAAAABAAQAAAAABAAQAAAAAAgBIADgBQgDgCgFgBIgMgCIAJAAIADACQAQABAAgBIgLgCIgJgCQAFABALABQAKABAHAEQAGABABgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQgHgBgHgFQgGgFgNgCQACgBgPgGIgMgCIgFgCIgNgBQAKgCAUAGQgBgCgEgCIgIgEQAJAEABgBIARAJQAAgDASAFQASAFABACQAQABgDgDIgUgGIAUAEQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgLgEQgGABgUgHIgVgGIAKACQAHABAAgBQAEACAIABQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgCgMgDIABgBIgJgCIgGgCIAJABIgTgHIAJgCQAFgCAHABIgIgDIARADQALACAAgBQgKgCgDgEQgDgDgMgDQAQADgCgDQgCgCARAEQgCgEgDgCQgFgDgMgDIAMADQgBAAgBgBQgBAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAgBQAGACACgCQACgDAQADQgCgEgXgBIAMAAQAEgBgHgEQgFgFgIgCIAPABQgLgCAHgBQAJAAgCgCIAHABIgDgDQgHgCgKgBIgOgBQgCgEARAAQAQABAOADIgRgIIgEABQAEgCgSgGQgUgGgCgEIgLAAQgEABgIgCQgBgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQADgCAJABQALACAHAAQAIAAAIACQABgBgKgCIgQgEIAlAGIADgEQgNgCgDgBQAGAAADgBQAAAAABAAQAAAAAAgBQAAAAgBAAQAAAAgBgBQAGABAFgDIgJgDQgHgCAKABQgCABAHACIAKgCQgJAAgGgDQgGgDgEAAQgOgDAIgCQAAABAGABIAKACIACgDQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBIgJgCIgMgBIACgEQgDgBgGAAQgGAAgDgCQAGACANAAQAMAAgBgBIAHABQABAAAAAAQAAAAgBAAQAAAAgBABQgBAAgCAAIARABIgdgIQgQgEABgEQgDgBAHgCQAEgBgMgCIADAAIgEgEQAGABAAABQgBACAHAAQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgCAGAAIABACQADACAJAAQADgBgHgDIgMgGIgLgBQABAAABAAQAAgBAAAAQABgBgBAAQAAgBAAAAQgBgBAAgBQgBgBAAAAQAAgBAAAAQAAAAAAgBIgQgDQgLABAGADQAGACgGABQgJgCACgCQAAAAAAgBQABgBAAAAQAAgBgBAAQAAAAgBgBIAeABQgDgDAFgBIAIgCQgFgBgCABQgCAAgFgCQgDgDAdADIALABIgNgDIgPgBQAAAAABgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAgBgFgBQAHAAgBgBQgBgBAIACIgEgBQgDABANABQAPABACgCIAEgDIADABQAEgBgFgBQgJgCgEgCQASACgGgDQgFgBgIgBIgQgBIABgCIgRgBQAIAAgKgEQAKADAnAFQgJABARACQAHgCgPgDQgNgEAKAAQgTgBgEABIgFgCIgFgBIAGgFQADgCgJgCIAGAAQABAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgLgEIAMADQACAAABAAQACAAAAgBQABAAgBAAQAAAAgBgBQgHgCABgBIgNAAIgHAAIgJgCQgIgBALgBQgHACALABIACgEQAAAAAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBIAMADQAFgCgGgBQgIgCAAgBQAKABACgCIgNgBQAEgBAEAAIAPAAQgBgCgLgCIgRgDQAJgBADgCQADgDAGgBIgGgDQgEgBAFgBQgIAAgEgCQgFgBgLgBQgIABALACQACAAABAAQAAAAAAABQgBAAgCAAQgCAAgDAAIgDgCIgGgCIADAAQAGgDgbgFQgagFAKgEQAJAAAFABQAEgBgJgBQgKgBABgBIAAgLQAKADAFgCIAJgDIgQgBQAFgBADABQADABAEgBIgJgDIAaAAIgHgFQgFgCgMgCQADgGgIgKIgPgRQgCgBANgDQAJgBgKgBIAKgBIACgFQACgEAFgCIgJABIgHABIAJgCQAGgCgDgBQgJACgFgCQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIAHACQADABAJAAQAGgCgEgBIgLgCIAMABQgGgCAJgDQAJgDgJgCQgFAAgBABQgBACgFAAQgHgCAIgEQAIgFgIgDIAHABIgCgDQADABAPgCQABAAABAAQABgBABAAQAAAAAAAAQAAAAAAgBIgCgBIgWACQgKABgFgBQANgBABgCQABgDAFAAQADgEgKgEQgMgGgBgCIAfgFIgJAAIAEgBQAFgCgHAAQgIAAgGACIAEABQACAAgIACQAFgCgGgCQgEgBAKgCIAHgBIgBgCIgRACQAFgJgKgMIAHgGQADgEAIgBQAEgFgQgFQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBQgDgDAOgCIgOAAIAHgBQgEgBADgBIAEgCIgOADQAAgBABAAQAAAAAAgBQgBAAAAgBQgBgBgBAAQgEgDACgCIAEgBQgKAAAFgCIANgDQgUgBAFgJQAFgKgGgDQAOgFgJgDQgIgCAXgJQAEgCgMACQgMADABABQgFgGACgSQABgQgGgHQADgEACgRQACgMAOgKIAFgCIgGAAIgLADIgGADQADgEgCgJQgBgHAPgMIgKAFQgBgCAQgNQAMgJgGgBQAFgBAJgFQgKgBAUgTQAZgYADgHIAOgHIgGgBQAFgEABABQADAAAEgDQADgFgLAGQgKAGAEgFQAJgGABgDIACgFQgMAHAFgFQAEgBADgDIgFgEIAHgHQAEgDAEAAQAKgJgHADQgHABALgIIgMAEQAHgGABAAIgCgCQAQgLgBgBQgCAAgFAEQgDADACgDQgCgBAIgDQAHgDgDAEIAIgJIAAAAIAJgGQAGgGgCgBIACAAQAGgHgMAGIgTALQAIgIACgFIgPAMQABgBAAAAQABgBAAAAQAAAAAAAAQgBAAAAAAQgEABADgDIAEAAQAFgGAPgLQAOgKACgEQAEgEgDAFQgFAGADAAQAGgHAJgEIAPgIQAtgRAqAYQAjAVAVApQAXAxAAAvIgKAHQgGAFAKgCQgQAEAAAHQAJgBABACIABAEIgDABQgFAEAIAAIANABIgOAHQAEAGAKgBQAAAQABAFQAEALANAEQgPAFAAAFQAAADADAFIgNADIAQAAQgFABgEACIgJAFIAMgCQgFABAEACQAEABgRADQAUADARAIIgKABQALABgPAFQgPAFAQAAQAKAFgEAKQgCAFgKALIAIADIAMgIIgHAJIgDAAQgCAFAHAGIAMAJQgJAIgCAQQgCAPgPAIIAbgBQgUACgHADQADACAXgBIgPAEQANgBgGAFQgHAGARgBQgJABgDADQgDADAIABIgLABQgIABACACIAQgBIAHADQABABgKADQgJACADACIgGgBQgBAAAAAAQgBABAAAAQAAABAAAAQAAABABAAQACADAHABQADAAAGgBQAGgCADABQgTAEgIgBQgFABAFACQAGABAJAAIAGgCIgFAMQgBgBgEABIgIABQAKABAHACIAHADIgQACIAHAAIgGABIAOABQgIABgEACQgFACAIABIAKgCQAAABgFACQgDACAJABIgNAAQgIAIAOAMIgCAAQgCACAHADIANAEQgBANgKAQIAOACIgNAAQADAEgOAIQgOAJAAADIANAAQgGACAEABQADACgNAAQAJAIAKAHQgIgBgDACIgFAEQARACgGACQgHADAGACIgDgBQABADAGADIgHgBQgEADAEACQAFACAAABIgLABQgFAAAAACIAYAGQAAAAAAAAQABAAgBABQAAAAgCAAQgBAAgBABQgMACAIACIgGgBIAAAEIgDgBQADACgEADQgFACAGADIgDgBQAFANgDADIgHgBIAQAIIgLgCIgBAEIgCgBIgEAAQANAEgOADQgRAEACADIgDgBQgIgBgBACQgDADgDAAQAXACAFAFIgOgDIABADIgCgBQgIgBABACQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQABACAGAAQAFgBAAACQgHgBACADQADAEgMAAIAMAJIgJgBIAKADQAFACgEABIgCgBQgCgCgDAAQgFABAHAFQAHAEgMgBQgBADANABQgBAAgBAAQgBAAgBABQAAAAAAAAQAAABAAAAIABAFIgNgCQABAAABAAQABABAAAAQABAAAAAAQAAABAAAAIgDACQgDgCgGgBIgCAFQgCADAEACIAFABQgKADAPAMIgGgDQgDgCgGABQACADAJACQAKACADADIgIgCQgFgCgGABIAQAGIgOgCQAHAFgSAIQgQAGATAHIASACQgJAAgDADQgCADgPgBIAHACIgPgCIAVAGIgOgDIAGADIgLgBQAKAEgIAAQgKAAAIAEIgHgCQAIAEgHABQgHACACADIgLgDQAAABgBAAQAAAAAAAAQgBABAAAAQABAAAAABIACADIAKAAIgQAAIAIAEIgHgCQAFAEgBABQgCABAFAEQgLgEgFABQABABAAAAQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAABAAAAQAAABABAAQgCgBgHAAQAAABAGACIALACIABgCQAHADgJgBQgLgBACACIALADQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIgFgCQgHgBABADQAAACgKgEQgEABADACIAGADIAKAAIgFAIIgPgDIAEACIgDgBQgMAAAIAFQAIAGgPgBIAMACIgFgBQABABAAAAQABAAAAABQABAAAAAAQAAABgBAAQAAAAAAAAQAAABAAAAQABAAABABQAAAAACAAQgHgBgBACQAAABAAABQAAAAgBABQAAAAgBABQgBAAAAAAQALAEABADQgIABgZgEQAJAEACAFIADAHQgLgCgCgDQgHAAAHAGQAHAGgMgBIAMADQgBACgLgDQgKgDAEAEIALACQACAEgBABQgFgBgDAAQgCABgFgCIADADIgEgBQABADAKACIgKgBIAQAFQgCABgGgBIgNgDIAJAFIgDgBIAHAFIgOgGQgJgDgGgBIALAGQAFADgFABQgBgDgIAAQgJAAgIgFQACACADAGQACAEAHAFQgUgHAGAFIAIAIIAAAAIAAAAQAFgBAEADIgSgEIACAGQgDgCgGgBIgMgDIARAKIgXgKIgFgBIADADIgBgBIgBAEIgJgEQgGgDgDAAQABADAEABIgFgCQAEAEARAIQAJAGgHAAIgFgBgAh7laIAAAAIAAAAg");
	this.shape_1.setTransform(20.5,48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("AgCAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQABABABAAQgFgCAAAAg");
	this.shape_2.setTransform(6.7,87.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.1,96.9);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPA/QkilIgthqQBoB/B2CHQDpENBIAuIBxBKQgOAGgKAPQgVAdAXAqQiJiQiSilg");
	this.shape.setTransform(32.1,37.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,74.5);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AESBEQAAhKhGANQhFAQhHgmQgXgMgTgQIgQgOImQhYQChgECzANQFlAaBcBWIiICrQAOgpABgmg");
	this.shape.setTransform(39.5,14.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.1,29.5);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfA/QgwmBAPhrQAOCSASCeQAiE7AaBAIApBoIgYAKQgZASgCAsQgZitgYjCg");
	this.shape.setTransform(6.9,43);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.8,86.1);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgFeQgrhYg2AJIABrFICCNtQgLgugXgrg");
	this.shape.setTransform(6.7,43.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,87.8);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgAOIkVhOIGwAXIAIAWQAPAcAkAhIh5AWg");
	this.shape.setTransform(24.6,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,13);


(lib.Path_1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABcglQC4gcCagQQgbAbgNAYIgHATIi9ALIpvBRQCZg/Fwg3g");
	this.shape.setTransform(43.1,8.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.2,16.4);


(lib.Path_1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202020").s().p("AAAAAIABAAIgBABg");
	this.shape.setTransform(5.5,92.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#202020").s().p("AgDgBIAIACIgDABg");
	this.shape_1.setTransform(5.3,75.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#202020").s().p("Ah1IFQgBgDgGgDIgQgHQAEAEgMgFIAUAJQgEABgKgFIgQgHQAAABABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAACAHACIgFgBQgDAAgGgEQgFAAAHAEIAOAHQgNgCgCABQgBACgMgCQgJgGgEgDQgEgFANAEQgJgFgLgDQgIgCACACQgGgFAGACQAZAKgBgEQgEgDgTgIQgNgFAEgDIAEABIABACIAEADQAKAFgCgDQgCgCAIAEQAHABgLgHQgMgJAAgBQALADAGAFQAGAEAGACIgBgEQADAEAKADIAOAEQgLgFAAgCQgBgBgNgFQgFgIAAgDQgBgGATAGQgFgDgEgBIgFgDQAFABADgCIAEgDQAOAHgCgEIgIgEQgFgDAAgCIAPAEQAAgBgIgDIAJACIgMgIIAEACQgBgDgIgCIgOgDIABgBQgPgEgCgIQACADAbAKQAEACABgBIACgCQgCgCgFgBIgMgDIAJAAIADACQARADgBgCQgDgCgHgBQgHgBgCgCIAQAEQAJACAHAEQAGACABgCQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBgBgBAAQgHgCgGgGQgGgFgOgDQAGABgRgKQgKgDgCABIgEgCIgOgDQAKAAAUAHQAAgCgFgCQgFgDgCgDQAIAFACgBIAJAFQAGADABACQAAgCASAGQASAGAAACQAQADgDgDIgTgJIATAGQABAAAAAAQABAAAAgBQAAAAgBgBQAAAAgBgBIgKgEQgGAAgUgIIgVgJIALADQAHACAAgBQAHAEAFAAQgBAAgBgBQAAAAAAgBQgBAAAAgBQAAAAABgBQABgBgNgEIACgBQgFgBgEgCIgGgDIAJACIgSgJIAJgCQAGgBAGABIgIgEQAcAIAAgCQgJgDgDgEQgCgDgMgEQAPAEgBgEQgBgCAQAFQgCgEgDgCQgEgEgNgEIALADQgBAAgBAAQAAgBAAAAQgBAAAAAAQAAAAABgBIADgBQAGACACgCQADgDAQAFQgBgCgZgHIANABQAEAAgGgEQgFgGgIgDIgDgBIASADQgLgDAHAAQAKAAgCgDIAGADIgBgEQgIgDgKgBIgNgDQgCgEARABQAQACAOAEQgLgEgFgFIgFAAQAEgCgQgHQgTgJgCgFQgGgCgFABQgEABgHgDQgDgDACgCQACgDAJACQAKAEAIABQAIAAAIADQABgCgKgDIgKgDQAJADAWAFIADgFQgNgCgDgCIAJAAQABAAAAAAQAAAAAAAAQAAgBAAAAQgBgBAAAAIAGAAIAFgBIgJgFQgBAAgBgBQAAAAAAAAQABAAABAAQACAAACABQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAABAAIACACIALgBQgJgBgGgEQgFgEgFAAQgNgFAIgBQAAABAGACIAJACIADgCQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQgFgDgEgBIgMgCIADgEQgDgCgGgBQgGAAgDgDQAGADANACQAMABgBgCIAHADIgEAAQAHADAJAAIgbgLQgPgHABgEQgDgCAHgBQAFgBgMgDIADABIgDgGQAGACgBABQgBACAGABQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQgBgBAHAAIABADQABACAKACQADgCgGgEIgMgIQgGgCgEAAQABAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAgBQgCgEAAgBIgPgFQgLAAAGADQAGAEgHAAQgIgDACgCQAAgBAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQALACATACQgDgDAFgBIAIgBQgEgCgDABQgCAAgFgDQgCgDAcAGIALACIgNgFIgOgDQAAAAABAAQABAAAAgBQAAAAABAAQAAgBAAAAQgBgCgGgCQAJACgBgCQgBgBAHADIgDgBIAKAEQAOACACgCIAEgCIAEABQAEgCgFgBQgJgDgDgDQARAFgGgEQgEgCgIgCIgQgDIACgCIgRgEQAIACgJgGQAEACArANQgFAAAEABIAJADQAHgBgPgGQgMgFALABQgRgEgGABIgOgHIADACIAIgEQADgCgJgEIAHACQABgBAAAAQABAAAAgBQAAAAgBgBQAAAAgBAAIgKgFIAMAEQAIABgEgDIgGgDQgHgCgFAAIgIgBIgJgDQgHgDALABQgGABAKACIACgDQAAAAAAgBQAAAAAAAAQAAgBgBAAQgBgBAAgBIALAEQAFgBgGgCQgHgDABgBIAHACQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBIgMgCQAHgCAPADQAAgCgLgDIgQgGQAJAAADgCQAEgDAGAAIgFgEQgEgCAFAAIgMgEQgEgCgLgCQgIAAALADQAHACgMgCQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBIgFgDIADABQAGgDgagKQgYgJAKgDIAOADQAEAAgJgDQgJgCAAgBIACgMQAKAFAFgCIAJgCIgPgDQAFgBADACQADABADAAIgHgEIAZADIgGgGQgFgEgMgDQAFgHgHgNQgJgOgCgGQgBgCAMgBQAJAAgKgDIALACIADgGQACgEAGgBIgKAAIgDAAQANAAgEgCQgJAAgEgDQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAGADQAEACAIAAQAHgBgEgBIgLgEIAMADQgGgEAKgBQAJgBgJgEQgEgBgCABQgBABgEgBQgHgDAIgFQAJgEgHgEIAHABIgCgDQADABAPAAQABABABAAQABAAABAAQAAgBAAAAQAAAAAAAAIgBgCQgIgCgOAAQgLAAgEgDQANACABgCQABgDAGABQADgEgJgHQgLgHgBgDIAgAAIgJgCIAEAAQAGgCgIgBQgHgBgGABIAEABQABABgIAAQAFAAgFgDQgEgDAKAAIAHAAIgBgCIgQgBQAFgIgGgRIAHgFQAEgDAIAAQADgDgEgEIgJgGQAEAAgDgEQgCgEAOAAIgNgCIAHAAQgFgBAEgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIgPgBQABAAAAAAQABgBAAAAQAAgBgBAAQAAgBgBgBQgEgEACgCIAEAAIgFgBQgBAAAAAAQAAgBAAAAQAAAAAAAAQABAAABgBIAMAAQgTgFAHgJQAHgLgGgDQAOgEgIgEQgHgEAYgFQAEgCgMABQgNAAABACQgDgHAFgTQAEgRgGgHQAEgEAFgRQADgLAPgIIAGgBIgHgBIgKABIgHADQADgDAAgKQAAgIARgJIgLADQgBgBARgLQAPgJgKAAIAHgBIAKgEQgJgBAUgRQAbgVAEgIQgBABAQgHIgGgCQAFgDACAAQACAAAEgCQADgEgLAFQgKAFAEgFQAJgFABgDQABgEABgBIgFACQgFACADgDQAEgBADgCIgFgFIAHgGQAEgDAEgBQAKgIgHACQgHABALgIIgMADIAEgDQABABAEgDIgCgCIAKgIQAFgEgBAAQgCgBgFAFQgDACACgDQAPgJgFAHIAIgKIAAABIAIgHQAFgFgCgCIACAAQAFgIgKAHIgTALQAJgJACgFIgTAOQAHgFgDABQgBAAgBAAQAAAAAAAAQAAAAAAgBQAAAAABgBIAEAAQAFgGAPgLQALgLACgEQAFgEgDAFQgFAHADAAQAGgHAJgEIAPgHQAygPAuAkQApAgAPAyQANAmABAoQABAUgDANIgKAFQgGAEAIAAQgGABgEACQgGADAAADQAJAAAAADIABAFQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgGADAIACIANADIgPAGQAEAHAKABQgEAOABAIQABAMANAHQgQACgBAGQAAAEACAFIgNABIAQADQgFgBgFADIgJADIAMAAQgGABAEACQAFACgSAAQATAHAQALIgLgBQALADgQADQgQACAQADQAPAMgaATQAAABAAAAQAAAAABABQAAAAAAAAQABABABAAIAFACIAMgGIgHAIIgEgBQgCAFAGAIIAKALQgLAHgFARQgEAPgQAGIAbAEIgOgBIgOABQAEAEAWABIgPACQAMACgHAEQgHAEARACQgJAAgDADQgEACAIACIgLAAQgJgBADADQANAAACACIAHAEQAAABgKABQgKABADACIgFgCQgFABADACQACABAGADIAJAAQAGAAADABIgNABQgIAAgGgDQgFABAFADQAFACAJABIAGgBIgGAMQgCgCgEAAIgHABQAQADAHAGIgRAAIAGACIgFAAIANAFQgJAAgDABQgFACAIACIAKgBIgGADQgDABAIACIgMgCQgJAIAMAPIgCgBQgDACAGAEIANAHQgDANgNAOIAOAEIgNgCQACAFgPAHQgPAHAAADIAMACQgGABAEACQACABgMgBQAJAMAHAGQgIgBgDABIgFADQAQAFgGABQgIACAGADIgDgCQAAADAGAFIgHgCQgEACAEADQAEADAAABIgLgBQgFgBAAADQAEABATAIIgFABQgMABAIADIgGgCIgBAEIgDgBQADADgEACQgFABAFAEIgDgBQADAOgDADIgHgCIAOAKIgKgDIgCAEIgFgCQANAFgPACQgRACABADIgDgCQgHgBgCACQgDADgDAAQAVAEAFAGIgNgFIAAADIgBgBQgIgCABACQAAAAAAABQAAAAgBAAQAAAAgBAAQgBABgBgBQABADAGAAQABAAABAAQABAAABAAQAAAAABABQAAAAAAAAQgHgBACADQACAFgLgCIAKALIgJgDIAKAFQAEADgEAAQgBgCgFgCQgGABAHAGQAGAEgMgCQgBADANADQgFgBAAADIABAFIgMgEQABAAABABQAAAAABABQAAAAAAAAQAAABAAAAIgDABQgCgCgGgCIgDAFQgCADADADIAFABQgKACANAPIgFgEQgEgCgGAAQABADAJADQAKAEADADIgIgDQgEgCgHgBIAPAIIgOgEQAHAGgUAGQgQAFASAKIASAEQgJgBgDADQgCACgPgCIAHACIgPgCIAUAHIgOgEIAGAEIgKgDQAJAFgJAAQgJgBAHAFIgGgDQAHAFgHABQgIABACADIgKgEQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIACADIAKACIgQgCIAIAEIgHgCQAEAFgBABQgCABAFAEQgKgFgGABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgCADACACIgJgCQAAABAFADIALADIABgCQAHAEgJgCQgLgCACACIAKAEIACADIgEgDQgHgCAAADQAAACgJgEQgEgBADADIAFAEIAKABIgFAIQgKgEgFgBIAEADIgDgBQgKgCAHAHQAFAGgMgCIAKADIgEgBQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAACABQgFgCgBACQgBAEgDAAQAJAFABADQgHABgYgGQAIAFACAFIACAHIgEgBQgIgDgBgCQgGAAAGAGQAGAHgMgBIANAEQgBACgMgFQgJgDAEAEIAKADQACAEgBACQgGgCgCAAQgDABgEgDIACADIgDgBQABAEAJADIgJgCIAPAGQgCABgGgCIgNgDIAJAGIgEgCIAHAGQgFgEgJgEQgKgEgGAAIAKAGQAHAEgFAAQgCgDgIgBQgKAAgHgFIAEAIQABAFAHAFQgTgIAFAGQAJAJgBAAIgJgDIABAHQgDgDgGgCIgLgDIAPALIgWgLQgBAAgBgBQgBAAAAAAQgBAAAAAAQAAAAAAAAIADADIgCgBIgBAEIgJgFQgFgDgEAAQADADAEADIgGgEIATAOQAIAGgFAAIgGgBgACPDnIAAAAg");
	this.shape_2.setTransform(21.7,51.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#202020").s().p("AgCAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAABABQABAAABAAQgFgCAAAAg");
	this.shape_3.setTransform(2.7,93.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,43.3,103.6);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnBKQjVjohFh8IFxGAIB2BtIgFAQQgDAXAEAhQhdhchsh1g");
	this.shape.setTransform(24.5,28.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.9,56.7);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4DjIgljwIjRlYQBWB3B3B4QDrDwCkAMQgfAIgfAhQhABAgCB3g");
	this.shape.setTransform(30.3,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.6,71.7);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBOQgnkTAIiEIBHHPIAeCHIgKANQgLASgLAdQgUhwgSiLg");
	this.shape.setTransform(5.2,33);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,10.4,66);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdCmQgShOgwgIIC/lCIh1HlQABgmgJgng");
	this.shape.setTransform(9.6,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.3,48.7);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASBBIg0hiIi2hfIGwB9QgcADgOATQgbAmBGBIg");
	this.shape.setTransform(21.8,13);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.5,25.9);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah5gxIDzBDIhXAgg");
	this.shape.setTransform(12.3,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.5,10.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E3D1C").s().p("AUOdkIh0hEQgNgMgRANQgJAHgXAbQgrAygWgZQgMgOgWh6QgXh7gNgQQhyiOjWkrQigjihWh4QiXjSh5ifQjqk2jWjqQj3kPjwjGQiXh8iahiIhAgoQheg7hKghIgsgVQhDgfhNgfQBGjRBCidQBcjcBBhJIANApQARAyAYAnQBKB/BqgOQA4gIA/hVQAng1BFiAQBIiFAhguQA6hSAxgDQgCANABATQACAlAPAaQAwBVCegzIgDAoQgBAvALAnQAmB+CUgHQgGAIgHAMQgPAZgHAZQgRA4AcAnQAkA0BwAPIgKAWQgKAcgFAaQgPBVAxAvQAiAiBDALIgTAjQgUArgEAmQgOB3CQAQQgKAKgKARQgWAggHAcQgXBbCAAPQgIAGgJAJQgSATgIATQgbA9BUAkIAiAMQgIAIgKAOQgTAbgFAYQgTBMB3ASQgIAKgIAQQgQAegDAbQgKBUB6AMIgdAsQgVAyAnAeQAfAWBFALIAFAFQAIAHATAIQA8AZCMAWIBVAcQBnAoBeA7QEuC/BfE+QBpFcAEHFQACC2gSB6QgRB6gcAEIgKABQgwAAhwg8g");
	this.shape.setTransform(152.6,195.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305.2,390.5);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,84.7,61.9)).s().p("AmQhMIgXhEINOEhg");
	this.shape.setTransform(249.1,336.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,85.1,57.7)).s().p("Amgg/IgihBIOFEBg");
	this.shape_1.setTransform(248.6,307.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,85.1,60.3)).s().p("AmdAGIhXheIPpCxg");
	this.shape_2.setTransform(237.8,283.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,86.7,62.9)).s().p("AnTgaIOmAuIt1AHg");
	this.shape_3.setTransform(225.4,259.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,83.9,59.2)).s().p("An8gTIP5AQIvTAXg");
	this.shape_4.setTransform(217.3,241.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,81.2,56)).s().p("Am0AfINphmItDCOg");
	this.shape_5.setTransform(198.3,223);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,89.1,58.5)).s().p("AjyBfIHljzInGEpg");
	this.shape_6.setTransform(168.8,198.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,86.1,56.9)).s().p("AkOCgIIdlTInqFng");
	this.shape_7.setTransform(150.2,167.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,81.1,63.5)).s().p("AlAC8IKBmkIpCHRg");
	this.shape_8.setTransform(133.5,139.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,90.7,66.1)).s().p("Al5EeILzpbIqtJ7g");
	this.shape_9.setTransform(113,104.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,91.7,57.1)).s().p("AmEFtIMJr9Iq8Mhg");
	this.shape_10.setTransform(90.3,81);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,86.8,62.6)).s().p("Al3IJILvwiIqyQzg");
	this.shape_11.setTransform(73.6,53.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,82.9,57.8)).s().p("AiADqIEBoKIjRJBg");
	this.shape_12.setTransform(34.2,69.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],2), null, new cjs.Matrix2D(1.083,0,0,1.083,82.6,63.2)).s().p("Ah/E/ID/qEIizKKg");
	this.shape_13.setTransform(12.9,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,293.8,350.9);


(lib.Path_11_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AA0B2").s().p("EgrSAJiQgagRAfguQhtgIgmgQQg1gWA6gqQAwgjC9hEQBegjBUgbQhUgBhNgIQiZgQApgjQAkgfBdglQCGgxBeglQA6gWCSAFQBYADDhAPQHhAZFEhbQF2hoGiAzQClAUDbAwIGZBiQDgA2H5hXQBpgTEkg5QDjgrBkgNQFGgpFrkSQC1iJB0iBQgUCPgMAjQgYBNg+AkQgXAOg2AoQgnAegpAQQh2ArhXAhQg5AWh6BCQhVAuhZAzQg0AeiPARQhpANhQAAQgWAAhIgMQg5gJgqAHQgpAIhtAwQiBA5gpAOQhIAYkJAdQkDAdhJgFQjTgRiDgmIhLgYQghgKgVgBQijgIjggXQkSgbgfgWQgggYgjAFQgdAFgsAbQgfAUjQAvIkmBCQhCASjYgcQjOgaggAQQiuBVjABZQmBCyheATQgqAIgcAAQgdAAgNgJg");
	this.shape_1.setTransform(293.9,61.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,587.8,123.9);


(lib.Path_2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AA0B2").s().p("Ao5LQQgxhbAwjOQAMgxgChWQgChiAHgxQAci+DSjcQDHjTF3ilQC9hTCUgpQgDAEhrBCQhiA8gMAYQgQAhh7CRQh/CXgvAmQgbAVjVBvQjFBmgPAYQgKASgcBxQgdB3gZCCQhDFdAnAeQgigEgYgtg");
	this.shape_1.setTransform(59.5,77);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,154);


(lib.tailFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_16();
	this.instance.parent = this;
	this.instance.setTransform(24.7,137.3,0.587,0.587,0,0,0,20.8,68.5);
	this.instance.alpha = 0.449;

	this.instance_1 = new lib.Path_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(42.5,111.2,0.587,0.587,0,0,0,30.3,35.9);
	this.instance_1.alpha = 0.449;

	this.instance_2 = new lib.Path_2_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(56.6,81.4,0.587,0.587,0,0,0,39.5,14.7);
	this.instance_2.alpha = 0.449;

	this.instance_3 = new lib.Path_3_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(65.4,59.3,0.587,0.587,0,0,0,46.9,9);
	this.instance_3.alpha = 0.449;

	this.instance_4 = new lib.Path_4_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(81,39.1,0.587,0.587,0,0,0,53.6,10.8);
	this.instance_4.alpha = 0.449;

	this.instance_5 = new lib.Path_5_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(92.6,20.6,0.587,0.587,0,0,0,38.2,10.8);
	this.instance_5.alpha = 0.449;

	this.instance_6 = new lib.Path_6_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(26.2,118.5,0.587,0.587,0,0,0,25.6,64.3);
	this.instance_6.alpha = 0.578;

	this.instance_7 = new lib.Path_7_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(13.6,135.3,0.587,0.587,0,0,0,22.8,85);
	this.instance_7.alpha = 0.578;

	this.instance_8 = new lib.Path_8_0();
	this.instance_8.parent = this;
	this.instance_8.setTransform(42.9,90.4,0.587,0.587,0,0,0,40.6,33.2);
	this.instance_8.alpha = 0.578;

	this.instance_9 = new lib.Path_9_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(54.1,67.4,0.587,0.587,0,0,0,52,8.7);
	this.instance_9.alpha = 0.578;

	this.instance_10 = new lib.Path_10_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(62,49.9,0.587,0.587,0,0,0,61.9,7.7);
	this.instance_10.alpha = 0.578;

	this.instance_11 = new lib.Path_11_0();
	this.instance_11.parent = this;
	this.instance_11.setTransform(70.2,36.2,0.587,0.587,0,0,0,72.1,18.8);
	this.instance_11.alpha = 0.578;

	this.instance_12 = new lib.Path_12_0();
	this.instance_12.parent = this;
	this.instance_12.setTransform(66,97.9,0.587,0.587,0,0,0,112.3,166.6);
	this.instance_12.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,195.6);


(lib.sideFin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_20();
	this.instance.parent = this;
	this.instance.setTransform(-1.9,17.2,0.587,0.587,0,0,0,26.8,4.7);
	this.instance.alpha = 0.449;

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,5.6,0.587,0.587,0,0,0,43.1,8.2);
	this.instance_1.alpha = 0.449;

	this.instance_2 = new lib.Path_2_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.8,-3.8,0.587,0.587,0,0,0,55.8,11.4);
	this.instance_2.alpha = 0.449;

	this.instance_3 = new lib.Path_3_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(6.4,-13.9,0.587,0.587,0,0,0,56.9,13.1);
	this.instance_3.alpha = 0.449;

	this.instance_4 = new lib.Path_4_5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.7,-23,0.587,0.587,0,0,0,51,9.7);
	this.instance_4.alpha = 0.449;

	this.instance_5 = new lib.Path_5_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-5.8,-3.1,0.587,0.587,0,0,0,80.5,37.1);
	this.instance_5.alpha = 0.578;

	this.instance_6 = new lib.Path_6_4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-2.7,-2.9,0.587,0.587,0,0,0,94.2,49.8);
	this.instance_6.alpha = 0.73;

	this.instance_7 = new lib.Path_12_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(2.7,2.9,0.587,0.587,0,0,0,94.2,49.8);
	this.instance_7.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-32.1,116.1,64.2);


(lib.ospreyLeg_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsPRCQhVguhRhKQhNhIglg/QgnhEAdgaQAngmEkiXQEhiWAjgeQgCi6AKjBQAanCBYg6IAEgHQCki1DCilQGHlLCjBNQBLAIBkBOQBcBHBPBlQBPBmAcBUQAfBcgtAiQhEA0mJGjQmLGigqAhQgdAXgqBNQgZAsgzBkQgsBUgkAjQgvAugrgTQgogDglgTQgkgUgQgHQgZgMgUAHQgZAIggAlIgJA7QgNBIgVA7QhDDAh7AFIgJAAQhBAAhZgwg");
	mask.setTransform(83.6,78.8);

	// Layer 1
	this.instance = new lib.Path_21();
	this.instance.parent = this;
	this.instance.setTransform(125.6,79.7,1,1,0,0,0,59.5,77);
	this.instance.alpha = 0.34;

	this.instance_1 = new lib.Path_1_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(71.7,214);
	this.instance_1.alpha = 0.25;

	this.instance_2 = new lib.Path_2_6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55,211.4);
	this.instance_2.alpha = 0.25;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,0,0,4).p("ACRi1QhxABhTAiQhiAoAABEQAABvA/A/QAgAgAfAJQgcgZgWgqQgrhTAihOQAQgmBogQQA1gIATgGQAigLAGgVg");
	this.shape.setTransform(15.1,158.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A1B2C").s().p("AhWCLQg/hAAAhvQAAhEBigoQBTgiBxgBIAFAeQgGAVgiALQgTAGg1AIQhoAQgQAmQgiBPArBTQAWApAcAaQgfgJggggg");
	this.shape_1.setTransform(15.1,158.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8FCFF").s().p("AoSQuQg6gDgWhOQgWhQAah7QAXhnAagiQAJgLgFgQIgQgeQgagvASgkQAVgqgSgHQgfgBgPgDQgSgEgLAIQgiAZgHAEQgiAUgngQQgmgPgQgkQgNggADgKIAegfQAKgKALggQAHgSAigEIBlgKQAfgDANgDQAPgDA6AFQAfACAQgfQAJgRgFhUIgOiuQgUj5AegiQCHiYAQgTQB2iOAmhQQARgmAng0IBAhVQBEhogUhlIM3AbQgDADhrBCQhiA8gMAYQgQAhh7CRQh/CXgvAmQgbAVjXBvQjDBmgPAaQgKASgcByQgdB2gZCAQhDFdAnAfQAiAaAYgQIASgMQALgFANAHIBAAiQAmATAZAAQAiAAArAVQAwAWAAAYQAAAhgYAqQgbAugXgeQgWghg8gdQg6gcgfAFQgaAFgWgFIhIgUQgsgMADAjIAGAmQAEAagCASQgGAnAMAlQAMAmAjA3QAdAtgcBPQgOAngUAeQgUgWgVgfQgqg9gEguQgDgngkgsQgigrAAgVQAAghgXAeQgYAeAAAbQAAANAXBmQAVBggEAPQgDALgRAJQgQAIgSAAIgGAAg");
	this.shape_2.setTransform(102.1,107.1);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,186,192.6);


(lib.osprey_Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A1B2C").s().p("AgyARQgBgFAUgOIAOgLQAHgDAMAAQAPAAADABIALAHQAKAGAGAFQAEAGABADIgDgGQgGgGgJAAIgcABIgSABIgQAEQgJADgIAFIgFADIAAAAg");
	this.shape.setTransform(147.7,38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A1B2C").s().p("Ag1A5QgXgXgBghQgBgeAWgYQAYgYAgAAQAegBAXAWQAYAXABAgQABAggXAXQgWAYghAAIgBABQgeAAgXgWg");
	this.shape_1.setTransform(148,45.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A1B2C").s().p("AgyApQgRgHgGgMQACgXARgTQAYgYAeAAQAggBAXAXQAQAPADASQgEAMgRAKQgWAIgfADIgSABQgSAAgOgEg");
	this.shape_2.setTransform(147.8,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A1B2C").s().p("AgzgBQAXgYAegBQAhAAAXAWQAHAFAFAIQgJgIgMgCQgUgIgdAGQgdADgRALIgXAQQAFgRANgLg");
	this.shape_3.setTransform(147.5,40.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},27).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(23));

	// Layer 1
	this.instance = new lib.ospreyeye("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(147.2,45.5,1,1,0,0,0,-0.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#666666").ss(1,0,0,4).p("AjFhFQAuAGCLADQB9AJAyAsQATAOAHAMQALARgCASIAAgCQgZAEggACQg/ADgigOQgmgQg9gEIg3AAQgEgUgrgSQgogTAAgng");
	this.shape_4.setTransform(170.3,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A1B2C").s().p("AAsA0QgmgQg9gDIg3gBQgEgUgrgSQgogTAAgmQAuAGCLACQB9AJAyAsQATAOAHANQALAQgCATIAAgDQgZAFggABIgVABQgwAAgcgMg");
	this.shape_5.setTransform(170.3,68.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#666666").ss(1,0,0,4).p("AjagQQAuAGCLACQB9AIAzArIANARQAOAVAIAXQAMAmgFA3QANgWAJgfQAUg9gNgqQgKgngHgWQgOgsgTgfQg5hdh3gWQgRA4glAdQgYAUgsANQgvAOgMAIQgZAQAAAmg");
	this.shape_6.setTransform(172.4,64.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A1B2C").s().p("ACyBvQgIgXgOgVIgNgRQgzgsh9gHQiLgCgugGQAAgmAZgQQAMgIAvgOQAsgNAYgUQAlgdARg4QB3AWA5BdQATAfAOAsIARA9QANAqgUA9QgJAfgNAWQAFg3gMgmg");
	this.shape_7.setTransform(172.4,63.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCF8EE").s().p("AmQI1QhhgLgtgDQg5gFgQADIhHATQADgFAUgTQANgNgCgPQgXAAgzAGQgwAFgbgBQAMgkBUgQQBbgRARgXQhXAGgwAAQhVABgngjQAhgDBQgFQBKgEAogGQABgVgngVQgngUAAgXQAAgXAbgFIAwgJQgOgIgagHIgqgMQAFgWAlgCQAugCAJgGQAegTgQgUQgPgSgngLQAAgZAsgOQAYgHAqgJQgagSgogUQgpgUgegKQAdAAA0gOQA2gNAagBQhDgUgXgoQgcguA9gsQgZgMgvgQQgzgRgWgKQAVgcBAgQQBQgTARgKQgIgPgdgaQgggcgKgPQgqg6gVg2QBUAvAgAMQBPAeAsgdQAXgQAPgxQAOgvgGgfQAbALArBRQApBOgBAgQgBAZgQALQgXAOgHARQgGAMgOATQgRAXgIAAIhOAOQgyAKglgPQArBEA9gGIAjgDQAPACADAVQAMBPAEAjQAGBIgJAgQgHAWgagDQgXgCAAASQAPAcASAuQAXAjBGAOQAQADAFARIAKAiQATAtBfAAQAkgBAbgMQAOgGAhgWQBAgtBXgKQBUgJBYgzQBZgzA0hEQAhgtAPg0QAUhJgnglQghAKgXAdQgdAkg6AeQguAYhUAUQhtAYgaAJQAQgWAEgyQgagDgvAHQg1AHgYgBQAKgSAYgRQANgIAggRQg+AAgsgEQg2gEgxgNQAOgSAwgFQA5gHANgGQh9gIgegoQAOgBAsgIQAkgHAXABQgkgIgdgZQghgcABghQARAGAwAXQApATAaAGQgWgZgSgxQgUgzAFgeQAdAKAmA0QAmA0AeALQgPgJgFgOQgGgPAEgRQAeAcAhAJQAhAJAsgFQgggRgdgfQAqAMBNgSQBkgYBpAEQCVAGBQAbQBKAZBXBGIAqApQAsAuAMAcQAQAkgjBXQgmBag/BDQg9BBhjAlQh3AmhHAeQg1AXhVAvQhpA5glATQiyBZi2AUQgXACgcAAQgoAAgzgFg");
	this.shape_8.setTransform(86,57.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B4B2BE").s().p("AmJI1QhhgLgtgEQg5gEgQADIhHATQADgFAUgTQANgOgCgOQgYAAgyAFQgxAFgagBQAMgjBUgQQBbgRARgXQhYAFgvABQhWABgngjQAhgDBRgFQBJgFAogFQACgWgngUQgngVAAgWQgBgYAcgFIAwgIQgOgIgagHIgqgNQAFgVAkgCQAugCAKgGQAegTgRgVQgOgRgngMQAAgZAsgNQAXgIArgJQgbgSgngTQgpgVgegJQAcgBA1gOQA1gMAbgCQhDgUgXgnQgcguA9gsQgagMgvgQQgzgSgVgJQAVgdBAgPQBQgTARgKQgJgPgdgbQgfgcgLgPQgqg8gUg0QBVAwAfAMQBPAeArgeQAYgPAPgxQAOgvgGgfQAbALAqBRQAqBOgBAgQgBAZgQALQgXAOgIARQgFAMgOATQgRAXgIAAIhOAOQgyAKgmgPQAsBEA8gGIAkgEQAPACADAWQAMBQADAhQAHBJgKAfQgHAWgZgDQgXgCAAASQAPAcASAuQAXAjBGAPQAQADAFARIAKAiQATAtBegBQAkAAAcgMQAOgHAhgVQA/gtBYgKQBUgJBYgzQBZgzA0hFQAhgsAPg0QAThJgnglQghAKgXAdQgdAkg5AeQgvAYhUAUQhrAYgbAJQAQgXADgxQgagDgvAHQg0AHgYgCQAKgRAYgRQAPgKAegPQg+AAgsgEQg2gEgygNQAPgSAwgGQA5gHANgFQg1gEgfgIQg0gMgTgYQAPgBArgIQAkgHAXABQgkgIgdgZQghgdABghQARAGAwAXQApAUAaAFQgWgYgTgxQgTg0AFgdQAdAKAlA0QAmA0AeALQgOgJgFgPQgGgOAEgRQAeAbAhAKQAhAJArgGQgfgQgdggQAqANBNgSQBkgYBpAEQCVAGBQAaQBLAaBWBFQBvBagaB8QgUBZhYBdQg8BBhjAlQh3AlhHAfQg1AXhVAvQhpA5gmATQiyBZi1ATQgYADgdAAQgoAAgxgFg");
	this.shape_9.setTransform(85.1,58.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance}]}).wait(64));

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CCCCCC").ss(1,1,0,4,true).p("ALJhBQgjgrgygvQhjhfhHgPQhHgPhCgVQgygSAAAAQgRgIgxgEQhigJiaAYQgyAHhngqQhzgvgPgCQhvgMg+g2QgKgJgOgQQgCgCAFAOQATA/hEB0QhBBugoAFQgiAFABAMQABAMAjAYQAlAZAeBKQAgBNgTAqQgYA1AEBDQAGBSAzA8QBHBTBNAiQBqAuCBghQCOgkC/heQDAheAyg4QAlgpCKhuQCEhmAGgKg");
	this.shape_10.setTransform(100.3,51);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2C1214").s().p("AmaHRQhNgihHhTQgzg8gGhSQgEhDAYg1QATgqgghNQgehKglgZQgjgYgBgMQgBgMAigFQAogFBBhuQBEh0gTg/QgFgOACACQAOAQAKAJQA+A2BvAMQAPACBzAvQBnAqAygHQCagYBiAJQAxAEARAIIAyASQBCAVBHAPQBHAPBjBfQAyAvAjArQgGAKiEBmQiKBuglApQgyA4jABeQi/BeiOAkQg2AOgyAAQhFAAg+gbg");
	this.shape_11.setTransform(100.3,51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(64));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,195.4,115.6);


(lib.osprey_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8FCFF").s().p("AiugpQgOgPgbgKIgYgHQB9gHAQAAQAaAAAhAHICuAsQCfAuhSAXQgggMiJANQiIAMh+AcQBdhMgwgug");
	this.shape.setTransform(173.5,91.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8FCFF").s().p("Ag7gqQgPgPgbgLIgYgHQBlgFA6ACQAeABAJACIARAGQATAIAJAJQAdAbhSAXQgNgFgIAGQgFACgMARQgjAohhAWQBdhNgvgtg");
	this.shape_1.setTransform(128.8,95.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8FCFF").s().p("Ag4gsQgOgPgagLIgXgHQBggGA3ACQAcACAKACIAQAGQASAIAIAJQAcAchOAYQgNgFgHAGQgFADgMARQghAqhcAWQBYhPgsgwg");
	this.shape_2.setTransform(99.4,97.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8FCFF").s().p("AgDBOQhBgGgEgmQgDgagOgYQgPgYgDgIQgEgNAPgFQAQgHA0gEQBZgIAqBJQAPAagdAhQgOARgRALQgVAEgVAAIgTgBg");
	this.shape_3.setTransform(76.8,99.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2C1214").s().p("Ag5g2QgOgSgZgNIgXgJQBggHA3ADQAcABAJADIARAIQASAJAIALQAcAihOAdQgNgHgHAIQgFADgMAVQghAzhcAbQBYhggtg6g");
	this.shape_4.setTransform(78.2,118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C1214").s().p("AgFBTQg6gNgTgfQgTgfAwgpIAzglQAigeAfAVQAQAKAJARIgoCNQgaAAgbgGg");
	this.shape_5.setTransform(56.5,120.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C1214").s().p("AgjA4QAFgTgPgYQgSgdgTgDIgQAEQAjgeBUgSQAqgJAkgDIgBASQgDAVgJAUQgcA/hMAdQgUgKADgKg");
	this.shape_6.setTransform(58.1,136.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2C1214").s().p("AhRA8QgSgfAUgUIAYgNQAjgeA6gaQAegOAXgHIgoCNQgaAMgcAGQgRAEgNAAQgiAAgOgWg");
	this.shape_7.setTransform(39,142.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C1214").s().p("AnaCvQgcgQBkg8QBhg5ChhAQGRijDgAAIjDBHQjGBJgOAIQgXAOgaAUQgfAdgLAWQgHAMg9AcQg+AchNAYQiFAqhDAAQghAAgRgLg");
	this.shape_8.setTransform(68,147.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C1214").s().p("AheB9QhGgRg7gkQgvgeD3hZQB6gtCFgoIh9BAQh9BCgOAHQgkAXAfAlIAYAcQALAQgGAKQgHAOgbAAQgUAAgggIg");
	this.shape_9.setTransform(23.2,148.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2C1214").s().p("AiNB/QhBgJgUgqQgXgzDuhQQB1gqB7gfIknCaQgMAGAKAcQAKAggIARQgKAUgmAAQgMAAgPgCg");
	this.shape_10.setTransform(43.2,121.9);

	this.instance = new lib.Path_11_2();
	this.instance.parent = this;
	this.instance.setTransform(297.1,105.2,1,1,0,0,0,293.9,62);
	this.instance.alpha = 0.34;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F8FCFF").s().p("Egq8AM4QgfgPATgdIAKgNQACgDgNAHQgeAPhBgTQhBgTgUgeQgQgYEEhgQDdhSgMACQg8AKhtgUQhygWAKgcQAHgXDwhcQDbhVgNAAQCuABEJgqQIVhVGejTQB1g8C1hsQCShXBYgmQCEg6C2gqQDKguFOgrQAwgGCRgvIEmhgQGhiDC6ANQCWAKAQAqQAPAkhXBFQhVBQgPCRQgNCCAuCOQAsCLBRBTQBWBcBcgNQEAgjGtj4QDXh+Cjh2QgVCOgLAjQgYBNg+AkQgWANg3AqQgnAegpAPQgxARg4AUIhkAlQhgAmkBCVQg0AeiPARQhoANhRAAQgWAAhIgMQg5gJgqAIQgpAHhtAwQiCA6goANQhJAZkIAdQkDAdhJgGQjTgRiDglIhLgZQghgKgVgBQihgHjigXQkRgcgggWQghgYgiAGQgdAEgsAbQggAUjPAvIkmBDQhCARjYgbQjOgaggAQQhYArjuBtQkcCCg5ASQhiAkgzARQg7ATgiAAQgTAAgMgGg");
	this.shape_11.setTransform(297.1,83.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2C1214").s().p("Egq8AMYQgfgPATgdIAKgNQACgCgNAGQgeAPhBgTQhBgTgUgeQgQgYEEhgQDdhSgMACQg8AKhtgUQhygWAKgcQAHgXDwhcQDchVgOAAQghAAhpgzQhtg1AAgXQAAgVGSgfQFkgcBgAAQA8AACogkQC0gpASgcQAOgVClhQQCyhXAegZQApggBagrIDlhpQChhNF4hYQGbhgEqgQQDUgLGigbQFWgOCfAsQBDASCsBAQBGAZBBgPQBLgSCRASQBVAKCbAeQBYAQBfBeQAvAuAeAsQgVCOgLAjQgYBNg+AkQgWANg3AqQgnAegpAPIhpAoIhkAiQg5AWh6BDQhVAuhZA0Qg0AfiPARQhpAMhQAAQgWAAhIgMQg5gJgqAIQgpAHhtAxQiBA5gpANQhJAZkIAdQkDAdhJgGQjTgRiDglIhLgYQghgLgVgBQijgHjggXQkSgcgfgWQgggXgjAFQgdAEgsAbQggAUjPAvIkmBDQhCARjYgbQjOgaggAQQhaAsjsBsQkcCDg5ARQhiAkgzARQg6ATgjAAQgTAAgMgGg");
	this.shape_12.setTransform(297.1,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,591.5,167.1);


(lib.Bass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("Al1MpQh+gehGhCQgmgjgQgvQgSgzAOgxQAGAxAbAkQAWAdAnAXQBAAmByAbQB1AaBvgFQC8gJBwhnQBohdBUiUQAqhJAWgyQAagvAehOQA8ibANiPQATiZhpifQg+hnhUhFQhRhChPgvQgzgghug6QB2AOBEAYQBcAgBdBJQAkAdAlApQAzA4AnBAQAfA1AMAXQAXAtAOArQAZBVgIBuQgOCdhACkQggBSgbAyQgYAygqBMQgsBMgmA0Qg6BPhCA4QhHA/hiAjQhaAhhZAAIgdAAQhyAAhpgYg");
	this.shape.setTransform(-127.6,-157,0.587,0.587);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AmTL7IhmgcQh1grhUg2QhDgshYhRQCwBLDNBJQBCAUAcAGQBJAPBBgFQBDgBBNg9QAuglBdheQAUgQAVgPIAggVIAAgBIARgFIACAAIAJgBQAvgFAmgIQBJgOBGgcQAxgUArgYQAWgMALgIIAggVQAogeAmglQB6h5ApiVQAbhSgFhgQgFhYgehOQgVhAgvg3IhFhEQhfhYhDgrQhIgvhmgiQBvgEBZAiQBeAkBfBYQBCBBAJAKQA6BCAZBMQAiBaAFBkQAGBugfBeQguCoiJCHQgqAqguAhIgjAYIgkAWQgwAbg2AWQhJAdhUARQgrAJgyAFIgBAAIgVAOQgSANgRAOQgVASgvAuQgsAtgcAXQgoAigxAVQgyAVgvAEIgmABQg+AAg/gOg");
	this.shape_1.setTransform(-108.3,-147.4,0.587,0.587);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().bs(cjs.SpriteSheetUtils.extractFrame(ss["Osprey_PQ_atlas_"],3)).ss(5,0,0,4).p("AHsgyQhahBjZkBQjDjqhHggQgMgFhtg9QhXgwg6gQQiyg0hMC2QgXA6hbB3QhABmBDAwQAmAcAUgdQAJgNAZhNQA4ivCAg6QAXgLA6AlQA7AlBDBFQCnCoA+C0QBZEDAgBqQA4C1AABDQAABWAjA8QAuBMByA+QByA/BVgnQBDgeBPhyQAigwgEheQgDhZgjhpQgihqg4hYQg7hdhEgxg");
	this.shape_2.setTransform(-199.5,-175.6,0.587,0.587);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0)","rgba(191,151,31,0)","#BF971F","#A47D1A","#815C15","#57350E","#42210B"],[0,0.737,0.737,0.812,0.89,0.965,1],-46,-78.9,50.1,81).s().p("AF0LmQhyg+guhMQgjg8AAhWQAAhDg4i1QgghqhZkDQg+i0inioQhDhFg7glQg6glgXALQiAA6g4CvQgZBNgJANQgUAdgmgcQhDgwBAhmQBbh3AXg6QBMi2CyA0QA6AQBXAwQBtA9AMAFQBHAgDDDqQDZEBBaBBQBEAxA7BdQA4BYAiBqQAjBpADBZQAEBegiAwQhPByhDAeQghAPglAAQg7AAhGgng");
	this.shape_3.setTransform(-199.5,-175.6,0.587,0.587);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#57350E","#654319","#8E6F3A","#B19356","#CCAF6B","#DFC37B","#EACF84","#EED387","#E6C14C","#E1B724","#DDB323","#D2A922","#BF971F","rgba(191,151,31,0)","rgba(0,0,0,0)"],[0,0.008,0.031,0.051,0.075,0.098,0.122,0.145,0.302,0.49,0.576,0.655,0.737,0.737,1],-46,-78.9,50.1,81).s().p("AF0LmQhyg+guhMQgjg8AAhWQAAhDg4i1QgghqhZkDQg+i0inioQhDhFg7glQg6glgXALQiAA6g4CvQgZBNgJANQgUAdgmgcQhDgwBAhmQBbh3AXg6QBMi2CyA0QA6AQBXAwQBtA9AMAFQBHAgDDDqQDZEBBaBBQBEAxA7BdQA4BYAiBqQAjBpADBZQAEBegiAwQhPByhDAeQghAPglAAQg7AAhGgng");
	this.shape_4.setTransform(-199.5,-175.6,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(37));

	// mouth
	this.instance = new lib.mouth();
	this.instance.parent = this;
	this.instance.setTransform(-58,-139,1,1,1.5,0,0,101.2,-5.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-7.7,regY:8.4,x:-167.1,y:-127.5},0).wait(5).to({rotation:-0.9,x:-166.6,y:-123},0).wait(1).to({rotation:-3.3,x:-165.8,y:-118.5},0).wait(1).to({rotation:-5.6,x:-164.9,y:-114},0).wait(1).to({rotation:-8,x:-163.8,y:-109.6},0).wait(1).to({rotation:-10.4,x:-162.4,y:-105.2},0).wait(1).to({rotation:-12.8,x:-161,y:-100.9},0).wait(1).to({rotation:-9.9,x:-162.7,y:-106.1},0).wait(1).to({rotation:-7.1,x:-164.2,y:-111.3},0).wait(1).to({rotation:-4.2,x:-165.5,y:-116.7},0).wait(1).to({rotation:-1.4,x:-166.5,y:-122.1},0).wait(1).to({rotation:1.5,x:-167.1,y:-127.5},0).wait(7).to({rotation:-0.3,x:-166.7,y:-124.1},0).wait(1).to({rotation:-2.1,x:-166.3,y:-120.7},0).wait(1).to({rotation:-3.9,x:-165.7,y:-117.4},0).wait(1).to({rotation:-5.6,x:-164.9,y:-114},0).wait(1).to({rotation:-7.4,x:-164.1,y:-110.7},0).wait(1).to({rotation:-9.2,x:-163.1,y:-107.4},0).wait(1).to({rotation:-11,x:-162.1,y:-104.1},0).wait(1).to({rotation:-12.8,x:-161,y:-100.9},0).wait(1).to({rotation:-10.4,x:-162.4,y:-105.2},0).wait(1).to({rotation:-8,x:-163.8,y:-109.6},0).wait(1).to({rotation:-5.6,x:-164.9,y:-114},0).wait(1).to({rotation:-3.3,x:-165.8,y:-118.4},0).wait(1).to({rotation:-0.9,x:-166.6,y:-123},0).wait(1).to({rotation:1.5,x:-167.1,y:-127.5},0).wait(1));

	// side fin
	this.instance_1 = new lib.sideFin("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-58,-74.9,1,1,0,0,0,-58.8,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:0,rotation:3.2,x:0.7,y:-72.2},0).wait(1).to({rotation:6.4,x:0.5,y:-68.9},0).wait(1).to({rotation:9.6,x:0.1,y:-65.7},0).wait(1).to({rotation:12.8,x:-0.6,y:-62.4},0).wait(1).to({rotation:7.4,x:0.4,y:-67.8},0).wait(1).to({rotation:2.1,x:0.8,y:-73.3},0).wait(1).to({rotation:-3.3,x:0.7,y:-78.8},0).wait(1).to({rotation:0.2,x:0.8,y:-75.3},0).wait(1).to({rotation:3.6,x:0.7,y:-71.7},0).wait(1).to({rotation:7.1,x:0.4,y:-68.2},0).wait(1).to({rotation:10.5,x:-0.1,y:-64.7},0).wait(1).to({rotation:2.6,x:0.8,y:-72.8},0).wait(1).to({rotation:-5.4,x:0.5,y:-80.9},0).wait(1).to({rotation:-13.3,x:-0.9,y:-89},0).wait(1).to({rotation:-10,x:-0.2,y:-85.6},0).wait(1).to({rotation:-6.7,x:0.4,y:-82.3},0).wait(1).to({rotation:-3.3,x:0.7,y:-78.9},0).wait(1).to({rotation:0,x:0.8,y:-75.4},0).wait(1).to({regX:-58.8,regY:0.5,x:-58,y:-74.9},0).wait(1).to({regX:0,regY:0,rotation:3.2,x:0.7,y:-72.2},0).wait(1).to({rotation:6.4,x:0.5,y:-68.9},0).wait(1).to({rotation:9.6,x:0.1,y:-65.7},0).wait(1).to({rotation:12.8,x:-0.6,y:-62.4},0).wait(1).to({rotation:4.8,x:0.6,y:-70.6},0).wait(1).to({rotation:-3.3,x:0.7,y:-78.8},0).wait(1).to({rotation:0.2,x:0.8,y:-75.3},0).wait(1).to({rotation:3.6,x:0.7,y:-71.7},0).wait(1).to({rotation:7.1,x:0.4,y:-68.2},0).wait(1).to({rotation:10.5,x:-0.1,y:-64.7},0).wait(1).to({rotation:2.6,x:0.8,y:-72.8},0).wait(1).to({rotation:-5.4,x:0.5,y:-80.9},0).wait(1).to({rotation:-13.3,x:-0.9,y:-89},0).wait(1).to({rotation:-10,x:-0.2,y:-85.6},0).wait(1).to({rotation:-6.7,x:0.4,y:-82.3},0).wait(1).to({rotation:-3.3,x:0.7,y:-78.9},0).wait(1).to({rotation:0,x:0.8,y:-75.4},0).wait(1));

	// Layer 1
	this.instance_2 = new lib.Path_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36.4,10.6,0.587,0.587,0,0,0,16.4,16.1);
	this.instance_2.alpha = 0.449;

	this.instance_3 = new lib.Path_1_3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-38.2,20.8,0.587,0.587,0,0,0,24.4,28.4);
	this.instance_3.alpha = 0.449;

	this.instance_4 = new lib.Path_2_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-43,26.7,0.587,0.587,0,0,0,32.1,37.1);
	this.instance_4.alpha = 0.449;

	this.instance_5 = new lib.Path_3_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-45.4,35.4,0.587,0.587,0,0,0,32.4,39);
	this.instance_5.alpha = 0.449;

	this.instance_6 = new lib.Path_4_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-52.1,40.7,0.587,0.587,0,0,0,28.7,33.5);
	this.instance_6.alpha = 0.449;

	this.instance_7 = new lib.Path_5_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50.8,26.2,0.587,0.587,0,0,0,47.9,58.5);
	this.instance_7.alpha = 0.578;

	this.instance_8 = new lib.Path_6_3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-50.2,28.4,0.587,0.587,0,0,0,54.6,65);
	this.instance_8.alpha = 0.73;

	this.instance_9 = new lib.Path_19();
	this.instance_9.parent = this;
	this.instance_9.setTransform(87.5,-76.2,0.587,0.587,0,0,0,20.9,28.2);
	this.instance_9.alpha = 0.559;

	this.instance_10 = new lib.Path_1_4();
	this.instance_10.parent = this;
	this.instance_10.setTransform(39.4,-121.5,0.587,0.587,0,0,0,21.7,51.9);
	this.instance_10.alpha = 0.559;

	this.instance_11 = new lib.Path_2_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(14.3,-141.1,0.587,0.587,0,0,0,20.5,48.5);
	this.instance_11.alpha = 0.559;

	this.instance_12 = new lib.Path_3_4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(69.4,-106.1,0.587,0.587,0,0,0,22.1,32.5);
	this.instance_12.alpha = 0.559;

	this.instance_13 = new lib.Path_4_4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-17.3,-158.3,0.587,0.587,0,0,0,20.8,39.9);
	this.instance_13.alpha = 0.559;

	this.instance_14 = new lib.Path_5_5();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-46.8,-168,0.587,0.587,0,0,0,20.1,38);
	this.instance_14.alpha = 0.559;

	this.instance_15 = new lib.Path_8_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(131,10.3,0.587,0.587,0,0,0,65.3,144.6);
	this.instance_15.alpha = 0.559;

	this.instance_16 = new lib.Path_17();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-155.5,-193,0.587,0.587,0,0,0,21.2,12);
	this.instance_16.alpha = 0.988;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUAQQgLgjARgcICoARIifBOQgJgOgGgSg");
	this.shape_5.setTransform(-159,-198.1,0.587,0.587);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhfBUQgpgjAAgxQAAgwApgjQAogjA3AAQA4AAApAjQAoAjAAAwQAAAxgoAjQgpAjg4AAQg3AAgogjg");
	this.shape_6.setTransform(-155.8,-198.7,0.587,0.587);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF799").s().p("AiBBxQg2gvABhCQgBhBA2gvQA2gvBLAAQBMAAA2AvQA2AvAABBQAABCg2AvQg2AvhMAAQhLAAg2gvg");
	this.shape_7.setTransform(-155.8,-198.6,0.587,0.587);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AiTCBQg+g1AAhMQAAhKA+g2QA9g2BWAAQBXAAA9A2QA+A2AABKQAABMg+A1Qg9A2hXAAQhWAAg9g2g");
	this.shape_8.setTransform(-155.8,-198.7,0.587,0.587);

	this.instance_17 = new lib.Path_5_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-155.7,-204.7,0.587,0.587,0,0,0,21.3,9.5);
	this.instance_17.alpha = 0.988;

	this.instance_18 = new lib.Path_11_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-215.3,-169.7,0.587,0.587,0,0,0,65,81);
	this.instance_18.alpha = 0.781;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3F622E","#557C3E","#8DAB4F","#A9C358","#C7C95E","#F9D467","#F9D672","#FADD8E","#FCE8BC","#FCE9C0"],[0.047,0.157,0.259,0.314,0.416,0.6,0.627,0.678,0.745,0.753],141.8,-203.9,-71.4,89.6).s().p("EAvUAvkQgegZgUhjQgKg1gUihQgUiagRhPQgbh7gog8QgshCikiBQifh7jSiIQn0lCkChAIwujyQtKi+irg/Qhlglk8jiQkbjLltkfQlikWkEjgQkWjwgmhAQghg5iZihQjKjRhuh0QmxnHgsicQgShBAdiBQAbh3Alg+QAzhVAVhDQAhhugehiQgfhpBMjKQAghTAlg9QAng/AbgLIAzgXQAbgNAWgDQA6gJBhAwQCLBGBgAjQCGAyBvAKQClAPAiAAQBRAAAygeQA1gfB8ADQB0ADAlAZQAZARC7gEQDIgEAXAGQAGACDmAQQESAUDjAcQL6BdFYC6QCgBWDpBsQEZCCBGAjQF6C/DmD4QFBFbEUGUQDoFUCBEPICUEtQBwDhBGCYQDdHhATC9QATC5AxDPQAaBuApCeQAJAoASArIAcBFQAdBSgJB+QgMCnhfDsQhkD6hsBhQhIBBg1CXQgTA2gNAMQgHAHgKAAQgNAAgTgPg");
	this.shape_9.setTransform(-41.7,-41,0.587,0.587);

	this.instance_19 = new lib.Path_14();
	this.instance_19.parent = this;
	this.instance_19.setTransform(66.2,63.8,0.587,0.587,0,0,0,8.1,10.6);
	this.instance_19.alpha = 0.449;

	this.instance_20 = new lib.Path_1_0();
	this.instance_20.parent = this;
	this.instance_20.setTransform(74.4,84.3,0.587,0.587,0,0,0,9.6,24.4);
	this.instance_20.alpha = 0.449;

	this.instance_21 = new lib.Path_2_0();
	this.instance_21.parent = this;
	this.instance_21.setTransform(89.9,100.5,0.587,0.587,0,0,0,6.7,43.9);
	this.instance_21.alpha = 0.449;

	this.instance_22 = new lib.Path_3_0();
	this.instance_22.parent = this;
	this.instance_22.setTransform(105,103.5,0.587,0.587,0,0,0,9.8,38.6);
	this.instance_22.alpha = 0.449;

	this.instance_23 = new lib.Path_4_0();
	this.instance_23.parent = this;
	this.instance_23.setTransform(114.4,102.8,0.587,0.587,0,0,0,7.9,28.8);
	this.instance_23.alpha = 0.449;

	this.instance_24 = new lib.Path_5_0();
	this.instance_24.parent = this;
	this.instance_24.setTransform(87.6,86.2,0.587,0.587,0,0,0,44.3,76.2);
	this.instance_24.alpha = 0.578;

	this.instance_25 = new lib.Path_6_0();
	this.instance_25.parent = this;
	this.instance_25.setTransform(113.8,89.5,0.587,0.587,0,0,0,8.8,18.8);
	this.instance_25.alpha = 0.578;

	this.instance_26 = new lib.Path_7_0();
	this.instance_26.parent = this;
	this.instance_26.setTransform(88.8,86,0.587,0.587,0,0,0,56.1,88);
	this.instance_26.alpha = 0.73;

	this.instance_27 = new lib.Path_15();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-88.7,19.7,0.587,0.587,0,0,0,4.9,19.7);
	this.instance_27.alpha = 0.449;

	this.instance_28 = new lib.Path_1_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-93.8,27.8,0.587,0.587,0,0,0,5.3,33);
	this.instance_28.alpha = 0.449;

	this.instance_29 = new lib.Path_2_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-99,31.1,0.587,0.587,0,0,0,6.9,43);
	this.instance_29.alpha = 0.449;

	this.instance_30 = new lib.Path_3_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-104.1,37.7,0.587,0.587,0,0,0,6,44.6);
	this.instance_30.alpha = 0.449;

	this.instance_31 = new lib.Path_4_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-111.3,40.1,0.587,0.587,0,0,0,4.2,39);
	this.instance_31.alpha = 0.449;

	this.instance_32 = new lib.Path_5_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-101,28.4,0.587,0.587,0,0,0,19.2,63.1);
	this.instance_32.alpha = 0.578;

	this.instance_33 = new lib.Path_6_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-99.4,30.1,0.587,0.587,0,0,0,26.8,73.4);
	this.instance_33.alpha = 0.73;

	this.instance_34 = new lib.Path_0();
	this.instance_34.parent = this;
	this.instance_34.setTransform(154.6,-20.1,0.587,0.587,0,0,0,12.2,5);
	this.instance_34.alpha = 0.449;

	this.instance_35 = new lib.Path_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(152.1,-33.8,0.587,0.587,0,0,0,21.7,13);
	this.instance_35.alpha = 0.449;

	this.instance_36 = new lib.Path_2();
	this.instance_36.parent = this;
	this.instance_36.setTransform(149.9,-48.9,0.587,0.587,0,0,0,24.6,6.5);
	this.instance_36.alpha = 0.449;

	this.instance_37 = new lib.Path_3();
	this.instance_37.parent = this;
	this.instance_37.setTransform(139,-65.1,0.587,0.587,0,0,0,36.4,9.6);
	this.instance_37.alpha = 0.449;

	this.instance_38 = new lib.Path_4();
	this.instance_38.parent = this;
	this.instance_38.setTransform(134.2,-79.1,0.587,0.587,0,0,0,43.1,4.6);
	this.instance_38.alpha = 0.449;

	this.instance_39 = new lib.Path_5();
	this.instance_39.parent = this;
	this.instance_39.setTransform(126.5,-92.6,0.587,0.587,0,0,0,42.5,9.1);
	this.instance_39.alpha = 0.449;

	this.instance_40 = new lib.Path_6();
	this.instance_40.parent = this;
	this.instance_40.setTransform(111.3,-107,0.587,0.587,0,0,0,34.6,8.5);
	this.instance_40.alpha = 0.449;

	this.instance_41 = new lib.Path_7();
	this.instance_41.parent = this;
	this.instance_41.setTransform(88.8,-126.6,0.587,0.587,0,0,0,22.2,10);
	this.instance_41.alpha = 0.449;

	this.instance_42 = new lib.Path_8();
	this.instance_42.parent = this;
	this.instance_42.setTransform(78.4,-146.3,0.587,0.587,0,0,0,21.7,13.5);
	this.instance_42.alpha = 0.449;

	this.instance_43 = new lib.Path_9();
	this.instance_43.parent = this;
	this.instance_43.setTransform(65.6,-164.6,0.587,0.587,0,0,0,27.9,22.8);
	this.instance_43.alpha = 0.449;

	this.instance_44 = new lib.Path_10();
	this.instance_44.parent = this;
	this.instance_44.setTransform(58.6,-180.4,0.587,0.587,0,0,0,37.8,26.5);
	this.instance_44.alpha = 0.449;

	this.instance_45 = new lib.Path_11();
	this.instance_45.parent = this;
	this.instance_45.setTransform(44.5,-194.1,0.587,0.587,0,0,0,34.6,41.6);
	this.instance_45.alpha = 0.449;

	this.instance_46 = new lib.Path_12();
	this.instance_46.parent = this;
	this.instance_46.setTransform(11.6,-195.9,0.587,0.587,0,0,0,14.8,22.3);
	this.instance_46.alpha = 0.449;

	this.instance_47 = new lib.Path_13();
	this.instance_47.parent = this;
	this.instance_47.setTransform(36.2,-210.4,0.587,0.587,0,0,0,33.4,40.2);
	this.instance_47.alpha = 0.449;

	this.instance_48 = new lib.Group();
	this.instance_48.parent = this;
	this.instance_48.setTransform(78.8,-125.3,0.587,0.587,0,0,0,146.9,175.4);
	this.instance_48.alpha = 0.609;

	this.instance_49 = new lib.Path();
	this.instance_49.parent = this;
	this.instance_49.setTransform(79,-124.1,0.587,0.587,0,0,0,152.6,195.2);
	this.instance_49.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.shape_9},{t:this.instance_18},{t:this.instance_17},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(37));

	// tail
	this.instance_50 = new lib.tailFin();
	this.instance_50.parent = this;
	this.instance_50.setTransform(156,107.1,1,1,0,0,0,19.9,63.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(1).to({regX:65.9,regY:97.8,scaleX:1.01,skewX:6,skewY:9.8,x:198.2,y:148.8},0).wait(1).to({scaleX:1.02,scaleY:1,skewX:12.1,skewY:19.7,x:193,y:156.1},0).wait(1).to({scaleX:1.03,skewX:18.1,skewY:29.5,x:186.6,y:162.6},0).wait(1).to({scaleX:1.04,skewX:24.1,skewY:39.4,x:179,y:168.3},0).wait(1).to({scaleX:1.05,scaleY:1,skewX:30.2,skewY:49.2,x:170.4,y:172.8},0).wait(1).to({scaleX:1.06,skewX:36.2,skewY:59.1,x:160.9,y:176},0).wait(1).to({scaleX:1.09,skewX:27.7,skewY:47.3,x:174.3,y:174},0).wait(1).to({scaleX:1.13,skewX:19.2,skewY:35.5,x:187.1,y:169.2},0).wait(1).to({scaleX:1.17,scaleY:1,skewX:10.8,skewY:23.7,x:198.8,y:161.9},0).wait(1).to({scaleX:1.2,skewX:2.3,skewY:11.9,x:208.8,y:152.3},0).wait(1).to({scaleX:1.24,skewX:-6.2,skewY:0.1,x:216.7,y:140.8},0).wait(1).to({scaleX:1.28,scaleY:1,skewX:-14.7,skewY:-11.7,x:222.1,y:127.9},0).wait(1).to({skewX:-4.7,skewY:-1.7,x:217.5,y:139.1},0).wait(1).to({skewX:5.4,skewY:8.4,x:210.9,y:149.3},0).wait(1).to({skewX:15.4,skewY:18.4,x:202.7,y:158.2},0).wait(1).to({skewX:25.4,skewY:28.4,x:193.1,y:165.6},0).wait(1).to({skewX:35.4,skewY:38.5,x:182.3,y:171.1},0).wait(1).to({skewX:45.5,skewY:48.5,x:170.8,y:174.7},0).wait(1).to({skewX:55.5,skewY:58.5,x:158.7,y:176.2},0).wait(1).to({skewX:45.2,skewY:48.2,x:171,y:174.6},0).wait(1).to({skewX:35,skewY:38,x:182.9,y:170.9},0).wait(1).to({skewX:24.7,skewY:27.7,x:193.9,y:165.1},0).wait(1).to({skewX:14.4,skewY:17.4,x:203.6,y:157.4},0).wait(1).to({skewX:4.1,skewY:7.1,x:211.8,y:148.1},0).wait(1).to({skewX:-6.2,skewY:-3.2,x:218.3,y:137.5},0).wait(1).to({skewX:-16.4,skewY:-13.4,x:222.7,y:125.9},0).wait(1).to({skewX:-26.7,skewY:-23.7,x:225,y:113.7},0).wait(1).to({skewX:-24,skewY:-21,x:224.6,y:117},0).wait(1).to({skewX:-21.3,skewY:-18.3,x:224,y:120.2},0).wait(1).to({skewX:-18.6,skewY:-15.6,x:223.4,y:123.4},0).wait(1).to({skewX:-15.9,skewY:-12.9,x:222.5,y:126.5},0).wait(1).to({skewX:-13.2,skewY:-10.2,x:221.5,y:129.6},0).wait(1).to({skewX:-10.5,skewY:-7.5,x:220.4,y:132.7},0).wait(1).to({skewX:-7.8,skewY:-4.8,x:219.1,y:135.7},0).wait(1).to({skewX:-5.1,skewY:-2.1,x:217.7,y:138.7},0).wait(1).to({skewX:-2.4,skewY:0.6,x:216.1,y:141.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-238.7,533.3,477.6);


(lib.Osprey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// osprey_Head
	this.instance = new lib.osprey_Head("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(210.5,196.4,1,1,0,0,0,97.4,57.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// ospreyLeg_R
	this.instance_1 = new lib.ospreyLeg_R("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(27,332.3,1,1,0,0,0,51.9,124);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// ospreyWing_R
	this.instance_2 = new lib.ospreyWing_R("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.2,174.5,1,1,0,0,0,295.4,639.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:222.4,regY:322.3,scaleY:1,x:-34.8,y:-141.4},0).wait(1).to({scaleY:0.99,y:-140.3},0).wait(1).to({scaleY:0.99,y:-139.2},0).wait(1).to({scaleY:0.99,y:-138.2},0).wait(1).to({scaleY:0.98,y:-137.1},0).wait(1).to({scaleY:0.98,y:-136},0).wait(1).to({scaleY:0.98,y:-134.9},0).wait(1).to({scaleY:0.97,y:-133.9},0).wait(1).to({scaleY:0.78,skewX:-0.2,x:-35.7,y:-70.6},0).wait(1).to({scaleY:0.58,skewX:-0.4,x:-36.1,y:-7.3},0).wait(1).to({scaleY:0.38,skewX:-0.6,x:-36.2,y:56},0).wait(1).to({scaleY:0.19,skewX:-0.8,x:-35.7,y:119.2},0).wait(1).to({scaleY:0.2,skewX:-1.1,x:-36,y:115.4},0).wait(1).to({scaleY:0.21,skewX:-1.3,x:-36.3,y:111.5},0).wait(1).to({scaleY:0.23,skewX:-1.5,x:-36.7,y:107.6},0).wait(1).to({scaleY:0.24,skewX:-1.7,x:-37,y:103.7},0).wait(1).to({scaleY:0.25,skewX:-1.9,x:-37.4,y:99.9},0).wait(1).to({scaleY:0.26,skewX:-2.1,x:-37.9,y:96},0).wait(1).to({scaleY:0.27,skewX:-2.3,x:-38.3,y:92.2},0).wait(1).to({scaleY:0.29,skewX:-2.5,x:-38.8,y:88.4},0).wait(1).to({scaleY:0.3,skewX:-2.7,x:-39.3,y:84.5},0).wait(1).to({scaleY:0.31,skewX:-3,x:-39.9,y:80.7},0).wait(1).to({scaleY:0.3,skewX:-3.2,x:-40.1,y:83.7},0).wait(1).to({scaleY:0.29,skewX:-3.4,x:-40.2,y:86.7},0).wait(1).to({scaleY:0.28,skewX:-3.6,x:-40.4,y:89.6},0).wait(1).to({scaleY:0.27,skewX:-3.8,x:-40.6,y:92.6},0).wait(1).to({scaleY:0.26,skewX:-4,y:95.6},0).wait(1).to({scaleY:0.25,skewX:-4.2,x:-40.8,y:98.6},0).wait(1).to({scaleY:0.25,skewX:-4.4,y:101.6},0).wait(1).to({scaleY:0.24,skewX:-4.6,y:104.6},0).wait(1).to({scaleY:0.23,skewX:-4.9,x:-40.9,y:107.6},0).wait(1).to({scaleY:0.22,skewX:-5.1,y:110.6},0).wait(1).to({scaleY:0.21,skewX:-5.3,x:-40.8,y:113.5},0).wait(1).to({scaleY:0.2,skewX:-5.5,y:116.5},0).wait(1).to({scaleY:0.19,skewX:-5.7,x:-40.7,y:119.6},0).wait(1).to({scaleY:0.21,skewX:-5.9,x:-41.5,y:113.5},0).wait(1).to({scaleY:0.22,skewX:-6.1,x:-42.3,y:107.6},0).wait(1).to({scaleY:0.24,skewX:-6.3,x:-43.2,y:101.6},0).wait(1).to({scaleY:0.26,skewX:-6.5,x:-44.2,y:95.6},0).wait(1).to({scaleY:0.28,skewX:-6.8,x:-45.1,y:89.7},0).wait(1).to({scaleY:0.3,skewX:-7,x:-46.2,y:83.7},0).wait(1).to({scaleY:0.41,skewX:-5.6,x:-47.5,y:46.2},0).wait(1).to({scaleY:0.53,skewX:-4.2,x:-47,y:8.6},0).wait(1).to({scaleY:0.69,skewX:-2.8,x:-45.4,y:-41.8},0).wait(1).to({scaleY:0.84,skewX:-1.4,x:-41.3,y:-92.2},0).wait(1).to({scaleY:1,skewX:0,x:-34.8,y:-142.4},0).wait(1).to({scaleY:0.66,skewX:3,x:-24.1,y:-33.7},0).wait(1).to({scaleY:0.32,skewX:5.9,x:-24.5,y:74.9},0).wait(1).to({scaleY:0.47,skewX:3.3,x:-26.3,y:25.2},0).wait(1).to({scaleY:0.63,skewX:0.6,x:-32.6,y:-24.5},0).wait(1).to({scaleY:0.78,skewX:-2,x:-43.5,y:-73.9},0).wait(1).to({scaleY:0.94,skewX:-4.6,x:-58.9,y:-122.6},0).wait(1).to({scaleY:0.52,skewX:-3.8,x:-45.7,y:11},0).wait(1).to({scaleY:0.09,skewX:-3,x:-36.4,y:144.9},0).wait(1).to({scaleY:0.33,skewX:-2.3,x:-39.1,y:68.8},0).wait(1).to({scaleY:0.57,skewX:-1.7,x:-40.1,y:-7.3},0).wait(1).to({scaleY:0.81,skewX:-1,x:-39.3,y:-83.4},0).wait(1).to({scaleY:0.87,skewX:-0.4,x:-36.9,y:-99.9},0).wait(1).to({scaleY:0.92,skewX:0.1,x:-34.2,y:-116.3},0).wait(1).to({scaleY:0.97,skewX:0.7,x:-31.1,y:-132.6},0).wait(1).to({scaleY:1.02,skewX:1.3,x:-27.8,y:-149},0).wait(1).to({scaleY:1.02,skewX:1.1,x:-28.6,y:-148.2},0).wait(1).to({scaleY:1.02,skewX:0.9,x:-29.5,y:-147.3},0).wait(1).to({scaleY:1.01,skewX:0.8,x:-30.4,y:-146.5},0).wait(1).to({scaleY:1.01,skewX:0.6,x:-31.3,y:-145.7},0).wait(1).to({scaleY:1.01,skewX:0.5,x:-32.2,y:-144.9},0).wait(1).to({scaleY:1,skewX:0.3,x:-33,y:-144},0).wait(1).to({scaleY:1,skewX:0.2,x:-34,y:-143.2},0).wait(1).to({scaleY:1,skewX:0,x:-34.8,y:-142.4},0).wait(1));

	// osprey_body
	this.instance_3 = new lib.osprey_body("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-11.7,222,1,1,0,0,0,295.7,83.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

	// ospreyWing-L
	this.instance_4 = new lib.ospreyWingL("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(65.1,248.5,1,1,0,0,0,257.5,632.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:193.9,regY:319,scaleY:1,x:1.5,y:-66.7},0).wait(1).to({scaleY:1.01,y:-68.3},0).wait(1).to({scaleY:1.01,y:-69.9},0).wait(1).to({scaleY:1.02,y:-71.5},0).wait(1).to({scaleY:1.02,y:-73.1},0).wait(1).to({scaleY:1.03,y:-74.7},0).wait(1).to({scaleY:1.04,y:-76.3},0).wait(1).to({scaleY:1.04,y:-77.8},0).wait(1).to({scaleY:0.87,y:-23.4},0).wait(1).to({scaleY:0.7,y:31.1},0).wait(1).to({scaleY:0.53,y:85.6},0).wait(1).to({scaleY:0.36,y:140},0).wait(1).to({scaleY:0.36,y:141.6},0).wait(1).to({scaleY:0.35,y:143.1},0).wait(1).to({scaleY:0.35,y:144.6},0).wait(1).to({scaleY:0.34,y:146.2},0).wait(1).to({scaleY:0.34,y:147.7},0).wait(1).to({scaleY:0.33,y:149.3},0).wait(1).to({scaleY:0.33,y:150.9},0).wait(1).to({scaleY:0.32,y:152.4},0).wait(1).to({scaleY:0.32,y:154},0).wait(1).to({scaleY:0.31,y:155.5},0).wait(1).to({scaleY:0.32,y:154.2},0).wait(1).to({scaleY:0.32,y:152.9},0).wait(1).to({scaleY:0.32,y:151.7},0).wait(1).to({scaleY:0.33,y:150.4},0).wait(1).to({scaleY:0.33,y:149.1},0).wait(1).to({scaleY:0.34,y:147.7},0).wait(1).to({scaleY:0.34,y:146.5},0).wait(1).to({scaleY:0.34,y:145.2},0).wait(1).to({scaleY:0.35,y:143.9},0).wait(1).to({scaleY:0.35,y:142.6},0).wait(1).to({scaleY:0.36,y:141.3},0).wait(1).to({scaleY:0.36,y:140},0).wait(1).to({scaleY:0.36,y:139},0).wait(1).to({scaleY:0.36,y:138},0).wait(1).to({scaleY:0.37,y:137},0).wait(1).to({scaleY:0.37,y:136.1},0).wait(1).to({scaleY:0.37,y:135.1},0).wait(1).to({scaleY:0.37,y:134.1},0).wait(1).to({scaleY:0.37,y:133.1},0).wait(1).to({scaleY:0.51,y:89.8},0).wait(1).to({scaleY:0.65,y:46.4},0).wait(1).to({scaleY:0.77,y:9.2},0).wait(1).to({scaleY:0.88,y:-27.9},0).wait(1).to({scaleY:1,y:-65.1},0).wait(1).to({scaleY:0.7,skewX:-1.3,skewY:-0.6,x:-3.7,y:29.6},0).wait(1).to({scaleY:0.4,skewX:-2.7,skewY:-1.2,x:-4.4,y:124.3},0).wait(1).to({scaleY:0.56,skewX:-2.3,skewY:-1.8,x:-5.6,y:74.4},0).wait(1).to({scaleY:0.72,skewX:-1.9,skewY:-2.4,x:-6.2,y:24.5},0).wait(1).to({scaleY:0.88,skewX:-1.6,skewY:-3,x:-6,y:-25.4},0).wait(1).to({scaleY:1.05,skewX:-1.2,skewY:-3.6,x:-5.1,y:-75.4},0).wait(1).to({scaleY:0.67,skewX:-7.1,skewY:-4.1,x:-24.3,y:43.9},0).wait(1).to({scaleY:0.3,skewX:-13,skewY:-4.7,x:-19.3,y:162.5},0).wait(1).to({scaleY:0.52,skewX:-11.7,skewY:-4.5,x:-30.9,y:95.3},0).wait(1).to({scaleY:0.73,skewX:-10.4,skewY:-4.2,x:-39.6,y:27.4},0).wait(1).to({scaleY:0.95,skewX:-9,skewY:-3.9,x:-45.1,y:-40.8},0).wait(1).to({scaleY:0.97,skewX:-7.7,skewY:-3.6,x:-39.3,y:-48.7},0).wait(1).to({scaleY:0.99,skewX:-6.4,skewY:-3.3,x:-33.2,y:-56.5},0).wait(1).to({scaleY:1.01,skewX:-5.1,skewY:-3.1,x:-26.7,y:-64.1},0).wait(1).to({scaleY:1.03,skewX:-3.8,skewY:-2.8,x:-19.9,y:-71.6},0).wait(1).to({scaleY:1.03,skewX:-3.3,skewY:-2.4,x:-17.1,y:-70.9},0).wait(1).to({scaleY:1.02,skewX:-2.8,skewY:-2.1,x:-14.4,y:-70.1},0).wait(1).to({scaleY:1.02,skewX:-2.4,skewY:-1.7,x:-11.7,y:-69.4},0).wait(1).to({scaleY:1.02,skewX:-1.9,skewY:-1.4,x:-9,y:-68.5},0).wait(1).to({scaleY:1.01,skewX:-1.4,skewY:-1,x:-6.4,y:-67.7},0).wait(1).to({scaleY:1.01,skewX:-0.9,skewY:-0.7,x:-3.8,y:-66.9},0).wait(1).to({scaleY:1,skewX:-0.5,skewY:-0.3,x:-1.1,y:-66},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:1.5,y:-65.1},0).wait(1));

	// ospreyLeg_L
	this.instance_5 = new lib.ospreyLeg_L("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6.8,358.6,1,1,0,0,0,92.2,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

	// trout
	this.instance_6 = new lib.Bass("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-111.9,470.7,0.577,0.447,0,37.4,-146,36.6,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.4,-464.7,615.8,992.7);


// stage content:
(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Osprey
	this.instance = new lib.Osprey("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-312.7,265.7,0.459,0.459,5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-13.2,regY:97.3,rotation:5.9,x:-272.1,y:341.3,startPosition:1},0).wait(1).to({x:-218.8,y:369.2,startPosition:2},0).wait(1).to({x:-163.5,y:393.3,startPosition:3},0).wait(1).to({rotation:5.8,x:-106.8,y:413.7,startPosition:4},0).wait(1).to({x:-49,y:430.7,startPosition:5},0).wait(1).to({x:9.5,y:444.8,startPosition:6},0).wait(1).to({x:68.7,y:456.2,startPosition:7},0).wait(1).to({rotation:0,skewX:5.7,skewY:5.7,x:128.3,y:465.3,startPosition:8},0).wait(1).to({skewY:5.6,x:188.1,y:472.3,startPosition:9},0).wait(1).to({skewX:4,skewY:3.9,x:249.5,y:478,startPosition:10},0).wait(1).to({skewX:2.3,skewY:2.2,x:310.9,y:482.1,startPosition:11},0).wait(1).to({skewX:0.6,skewY:0.5,x:372.5,y:485,startPosition:12},0).wait(1).to({skewX:0.4,skewY:0.3,x:373,y:483.5,startPosition:13},0).wait(1).to({skewX:0.1,skewY:0,x:373.5,y:482.1,startPosition:14},0).wait(1).to({skewX:-0.1,skewY:-0.2,x:374.1,y:480.6,startPosition:15},0).wait(1).to({skewX:-0.3,skewY:-0.4,x:374.6,y:479.1,startPosition:16},0).wait(1).to({skewX:-0.6,skewY:-0.7,x:375.2,y:477.7,startPosition:17},0).wait(1).to({skewX:-0.8,skewY:-0.9,x:377.1,y:478.6,startPosition:18},0).wait(1).to({skewX:-1,skewY:-1.1,x:379.1,y:479.5,startPosition:19},0).wait(1).to({skewX:-1.3,skewY:-1.4,x:381.1,y:480.4,startPosition:20},0).wait(1).to({skewX:-1.5,skewY:-1.6,x:383.1,y:481.3,startPosition:21},0).wait(1).to({skewX:-1.7,skewY:-1.9,x:385.1,y:482.1,startPosition:22},0).wait(1).to({skewX:-1.9,skewY:-2.1,x:387,y:483,startPosition:23},0).wait(1).to({skewX:-1.4,skewY:-1.5,x:385.2,y:483.7,startPosition:24},0).wait(1).to({skewX:-0.8,skewY:-0.9,x:383.4,y:484.3,startPosition:25},0).wait(1).to({skewX:-0.2,skewY:-0.4,x:381.6,y:484.9,startPosition:26},0).wait(1).to({skewX:0.4,skewY:0.2,x:379.8,y:485.5,startPosition:27},0).wait(1).to({skewX:1,skewY:0.8,x:378,y:486.1,startPosition:28},0).wait(1).to({skewX:1.6,skewY:1.4,x:376.2,y:486.7,startPosition:29},0).wait(1).to({skewX:2.2,skewY:2,x:374.4,y:487.3,startPosition:30},0).wait(1).to({skewX:1.9,skewY:1.7,x:375.2,y:486.3,startPosition:31},0).wait(1).to({skewX:1.7,skewY:1.5,x:376.1,y:485.5,startPosition:32},0).wait(1).to({skewX:1.4,skewY:1.2,x:376.9,y:484.6,startPosition:33},0).wait(1).to({skewX:1.2,skewY:1,x:377.7,y:483.8,startPosition:34},0).wait(1).to({skewX:1,skewY:0.7,x:378.6,y:482.8,startPosition:35},0).wait(1).to({skewX:0.7,skewY:0.5,x:379.4,y:482,startPosition:36},0).wait(1).to({skewX:0.5,skewY:0.2,x:380.3,y:481.1,startPosition:37},0).wait(1).to({skewX:0.2,skewY:0,x:381.1,y:480.2,startPosition:38},0).wait(1).to({skewX:0,skewY:-0.2,x:381.9,y:479.4,startPosition:39},0).wait(1).to({skewX:0.3,skewY:0.1,x:381.5,y:484.7,startPosition:40},0).wait(1).to({skewX:0.6,skewY:0.4,x:381,y:490,startPosition:41},0).wait(1).to({skewX:1,skewY:0.7,x:380.6,y:495.3,startPosition:42},0).wait(1).to({skewX:1.3,skewY:1,x:380.2,y:500.7,startPosition:43},0).wait(1).to({skewX:1.6,skewY:1.3,x:379.7,y:506,startPosition:44},0).wait(1).to({skewX:1.9,skewY:1.6,x:379.3,y:511.3,startPosition:45},0).wait(1).to({skewX:2.2,skewY:1.9,x:378.9,y:516.6,startPosition:46},0).wait(1).to({skewX:2.6,skewY:2.3,x:402.3,y:494.2,startPosition:47},0).wait(1).to({skewX:2.9,skewY:2.6,x:425.7,y:471.9,startPosition:48},0).wait(1).to({skewX:3.2,skewY:2.9,x:449.1,y:449.4,startPosition:49},0).wait(1).to({skewX:3,skewY:2.7,x:454.9,y:461.8,startPosition:50},0).wait(1).to({skewX:2.8,skewY:2.5,x:460.8,y:474.2,startPosition:51},0).wait(1).to({skewX:2.7,skewY:2.3,x:466.7,y:486.6,startPosition:52},0).wait(1).to({skewX:2.5,skewY:2.2,x:467.8,y:443.8,startPosition:53},0).wait(1).to({skewX:2.3,skewY:2,x:468.9,y:401,startPosition:54},0).wait(1).to({skewX:2.1,skewY:1.8,x:469.1,y:415.1,startPosition:55},0).wait(1).to({skewX:2,skewY:1.6,x:469.3,y:429.2,startPosition:56},0).wait(1).to({skewX:1.8,skewY:1.4,x:469.5,y:443.3,startPosition:57},0).wait(1).to({skewX:1.6,skewY:1.2,x:469.7,y:457.4,startPosition:58},0).wait(1).to({skewX:1.5,skewY:1.1,x:471.5,y:467.8,startPosition:59},0).wait(1).to({skewX:1.4,skewY:1,x:473.2,y:478.1,startPosition:60},0).wait(1).to({skewX:1.3,skewY:0.9,x:474.9,y:488.4,startPosition:61},0).wait(1).to({skewX:1.2,skewY:0.8,x:476.7,y:498.7,startPosition:62},0).wait(1).to({skewX:1,x:477.5,y:496.4,startPosition:63},0).wait(1).to({skewX:0.9,skewY:0.7,x:478.2,y:494.2,startPosition:64},0).wait(1).to({skewX:0.8,x:479,y:492,startPosition:65},0).wait(1).to({rotation:0.7,skewX:0,skewY:0,x:479.8,y:489.8,startPosition:66},0).wait(1).to({rotation:0,skewX:0.6,skewY:0.7,x:480.5,y:487.6,startPosition:67},0).wait(1).to({skewX:0.5,x:481.3,y:485.4,startPosition:68},0).wait(1).to({skewX:0.4,x:482.1,y:483.1,startPosition:69},0).wait(1).to({skewX:0.3,x:482.8,y:480.9,startPosition:0},0).wait(1).to({skewX:0.2,skewY:0.6,x:483.6,y:478.7,startPosition:1},0).wait(1).to({skewX:0.1,x:484.3,y:476.5,startPosition:2},0).wait(1).to({skewX:-0.1,x:485.1,y:474.2,startPosition:3},0).wait(1).to({skewX:-0.2,x:485.9,y:472,startPosition:4},0).wait(1).to({skewX:-0.3,x:486.6,y:469.8,startPosition:5},0).wait(1).to({skewX:-0.4,x:487.4,y:467.6,startPosition:6},0).wait(1).to({skewX:-0.5,x:488.2,y:465.3,startPosition:7},0).wait(1).to({skewX:-0.6,x:489,y:463.1,startPosition:8},0).wait(1).to({skewX:-0.7,skewY:0.5,x:489.7,y:460.9,startPosition:9},0).wait(1).to({skewX:-0.8,x:490.5,y:458.7,startPosition:10},0).wait(1).to({skewX:-0.9,x:491.3,y:456.5,startPosition:11},0).wait(1).to({x:493.9,y:458.8,startPosition:12},0).wait(1).to({x:496.5,y:461.2,startPosition:13},0).wait(1).to({x:499.2,y:463.5,startPosition:14},0).wait(1).to({x:501.8,y:465.9,startPosition:15},0).wait(1).to({x:504.5,y:468.3,startPosition:16},0).wait(1).to({x:512.3,y:467.3,startPosition:17},0).wait(1).to({x:520.2,y:466.3,startPosition:18},0).wait(1).to({x:513.5,y:466.8,startPosition:19},0).wait(1).to({x:504.8,y:467,startPosition:20},0).wait(1).to({x:496.8,y:467.1,startPosition:21},0).wait(1).to({x:488.8,y:467.2,startPosition:22},0).wait(1).to({skewX:-0.4,skewY:1,x:480.3,y:467.3,startPosition:23},0).wait(1).to({skewX:0.1,skewY:1.6,x:471.3,y:467.2,startPosition:24},0).wait(1).to({skewX:0.6,skewY:2.1,x:474.1,y:467,startPosition:25},0).wait(1).to({skewX:1.1,skewY:2.6,x:482.8,y:466.8,startPosition:26},0).wait(1).to({skewX:1.7,skewY:3.1,x:490.5,y:466.6,startPosition:27},0).wait(1).to({skewX:2.2,skewY:3.7,x:526.6,y:466.1,startPosition:28},0).wait(1).to({skewX:2.7,skewY:4.2,x:562.9,y:465.8,startPosition:29},0).wait(1).to({skewX:3.2,skewY:4.7,x:599.1,y:465.5,startPosition:30},0).wait(1).to({skewX:3.8,skewY:5.2,x:635.3,y:465.4,startPosition:31},0).wait(1).to({skewX:4.3,skewY:5.7,x:671.5,y:465.2,startPosition:32},0).wait(1).to({skewX:4.8,skewY:6.3,x:707.7,y:465.1,startPosition:33},0).wait(1).to({skewX:5.3,skewY:6.8,x:744,y:464.9,startPosition:34},0).wait(1).to({skewX:5.8,skewY:7.3,x:780.3,y:464.7,startPosition:35},0).wait(1).to({skewX:6.4,skewY:7.8,x:816.5,y:464.4,startPosition:36},0).wait(1).to({skewX:6.9,skewY:8.4,x:852.7,y:464.2,startPosition:37},0).wait(1).to({skewX:7.4,skewY:8.9,x:889,y:463.9,startPosition:38},0).wait(1).to({skewX:7.9,skewY:9.4,x:925.2,y:463.5,startPosition:39},0).wait(1).to({skewX:8.5,skewY:9.9,x:961.5,y:463,startPosition:40},0).wait(1).to({skewX:9,skewY:10.4,x:997.7,y:462.3,startPosition:41},0).wait(1).to({skewX:9.5,skewY:11,x:1033.9,y:461.4,startPosition:42},0).wait(1).to({skewX:10,skewY:11.5,x:1070.1,y:459.9,startPosition:43},0).wait(1).to({skewX:10.5,skewY:12,x:1105.9,y:455.7,startPosition:44},0).to({_off:true},1).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,557.2,285.8,459.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;