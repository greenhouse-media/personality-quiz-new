(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Diatoms_PQ_atlas_", frames: [[3048,148,130,31],[0,0,3046,1050],[3122,56,10,10],[3134,56,10,10],[3146,56,10,10],[3158,56,10,10],[3170,56,10,10],[3122,68,10,10],[3122,0,54,54],[3178,0,54,54],[3048,0,72,72],[3048,74,72,72]]}
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



(lib.Path_4 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bkgrtiles = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Diatoms_PQ_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape.setTransform(28.3,45.8,0.546,0.546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbAcQgMgLAAgRQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_1.setTransform(27.2,10.6,0.546,0.546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D34B91").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_2.setTransform(32.7,40.9,0.546,0.546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AgeAyQACgQAbgZQAVgVgLglQAWgFAAAYIgCAoQgRgBgLAXQgIATgRAAIgGgBg");
	this.shape_3.setTransform(19.4,41.8,0.546,0.546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYAiQAHgSgBgHQgIAAgJAMQgIAMgOgEQAAgJgQgFQgPgEABgLQAFgjAbgBQATgBAcARQgOAHAJATQAJASgOAFQgFAIgBAAIAAgDg");
	this.shape_4.setTransform(16.6,40.3,0.546,0.546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAHAZQgBgKgQgMQgOgKACgRQANABAGAPIAKAXQASgBgCAGQgCAFgJAAIgFAAg");
	this.shape_5.setTransform(14.6,41.6,0.546,0.546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D34B91").s().p("AADAKQgLgPgGACQAGgTAIAMQANAQACAAQgCAJgDAAQgDAAgEgFg");
	this.shape_6.setTransform(31.6,37.1,0.546,0.546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D34B91").s().p("AgTASQgCgHAQgLQALgIgPgDQADgIAHAEQAMAGAHgCQgKAQgEAEQgIAJgOAAIgDAAg");
	this.shape_7.setTransform(25.3,37.1,0.546,0.546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D34B91").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_8.setTransform(37.4,34.1,0.546,0.546);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgMAAIAlgsQANAQgbAbQggAggDAOQgMgRAYgcg");
	this.shape_9.setTransform(24,32.3,0.546,0.546);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D34B91").s().p("AADATIgCgTQACgJgUAAQgTgBAIgTQAMACAQAOQAQANAPAAIgNALQgJAHACAMQgHgBgBgKg");
	this.shape_10.setTransform(18.2,25.5,0.546,0.546);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOgEQATgZAWAAQgiAlgPAWQgLgKATgYg");
	this.shape_11.setTransform(31.5,24.9,0.546,0.546);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D34B91").s().p("AgZAGQAJgJAQgGQATgGAFAMQAEAHgJgDQgHgBAAgBIgOAKQgDADgEAAQgHAAgJgGg");
	this.shape_12.setTransform(15.8,32.2,0.546,0.546);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00FFFF").s().p("AACBWQgPgGgRAEQgggYgKgNQgUgbAqgGQAAAGgHABIgNADQAHAYAkgEQAUgCAkgIQAHgRgDgYQgCgUAIgIQgDgWgXgCQgKAAgBgCQgCgDAJgLIgxAAQgGADgOAWQgKARgUgCQAOglAhgOQAfgNAhAMQAjAMATAhQAWAkgIAyQgMAHgTARQgUATgJAHQgJAAgSgIg");
	this.shape_13.setTransform(10.7,28.5,0.546,0.546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00FFFF").s().p("AgQBaQgSgDgegMQgKgHAGgOQAFgKgVABQgBgrACgQQAEgdAPgLQgJgMgVgIQAJgVAQAOQAPAMAAAPQAKgNARgLQALgHAVgJQAvAMASANQAcAWgDArQgTAFgCgPQACgVgBgJIgkgJQgWgEgVADQgSAGgJAVQgFALgIAfQgDAPANAKQAOAJgEAQQAygEAWgIQAhgOAEgiQARANgOAWQgSAdAFAQQgOgBgGABQgJACgBAIQgxgDgMgCg");
	this.shape_14.setTransform(45.2,27.9,0.546,0.546);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPANQAGgHACgdQACgaAJgHQgDgSADgGQADgFAFAFQAFAFgBAHQgBAIgLAEIABAoQgCAVgIAIQgBAFACAkQACAbgNACg");
	this.shape_15.setTransform(4.9,25.8,0.546,0.546);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AADASQgGgOgLgeQAMgCAEAPQAEAPAJABQABAYgFAAQgCAAgGgJg");
	this.shape_16.setTransform(25.6,21,0.546,0.546);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D34B91").s().p("AAAAKQgHgHgEgPQAPAFAGAHQAFAHgEAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgDAAgEgDg");
	this.shape_17.setTransform(22.7,17.5,0.546,0.546);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D34B91").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_18.setTransform(24.3,15,0.546,0.546);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00FFFF").s().p("AAAAzQgVgIgXACIgXgzQgOgfgDgbQAEAIAbATQATASgUAPQANATAeAMQAPAHApALQADgbgKACQgRACgGgHQgBgCgUgYQgOgRAGgaQAOgOAXAFQATAFANAOIgHAdQgGANgRgCQAMAXAwgEQACAUgZAHQgaAIgBAPQgXgKgMgEg");
	this.shape_19.setTransform(38.7,18.1,0.546,0.546);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAIAUQgOgTADgOQgdgZAdAWQASANABAJQAEAVgEAAQgDAAgFgHg");
	this.shape_20.setTransform(41.9,15.3,0.546,0.546);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D34B91").s().p("AgCAOQgFgEgGAAIAAgTQAQACADgMQANABgIAMQgLAPAGALIgIgGg");
	this.shape_21.setTransform(22.3,15.1,0.546,0.546);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdA4QgDgFAAgJQANgOARgjQAQglANgNQAKACgGAIQgFAIgJACQgHAngWAUQABAJgFAHQgGAIAAAGQgCAGgDAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_22.setTransform(7.5,17.2,0.546,0.546);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D34B91").s().p("AgSAPQgGgLABgIQAGAAACAGIACANIASgUQAKgNABgQQAQAMgNAcQgNAdgTAAQAAgJgFgLg");
	this.shape_23.setTransform(31.6,15.4,0.546,0.546);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00FFFF").s().p("AA8AaQgDgJgCgZQgRADgPgGQgSgIgJABQgVAAgTAXQgUAYgUABQgDgTAMgRQAMgSgBgPQAQAIAbgFQAigFAWACIAhAhQAQAUABAaIgCABQgQAAgHgPg");
	this.shape_24.setTransform(39.8,13.4,0.546,0.546);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AARAGQgOABgMgIQgQgLgHgBQAKgTAnAkQANAMADAEIAAABIgQgPg");
	this.shape_25.setTransform(40.2,8.3,0.546,0.546);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgmAUQAbgXAIgQQAPAAATgQQARgQASACQAFgKACABQACABgDAHQgIATgSgIQgFAIgNAIIgWAOQgPAIgYAaQgXAagRAJQAJgRAagXg");
	this.shape_26.setTransform(13.5,10.2,0.546,0.546);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF00FF").s().p("AhMALQgMg+AwgbQALAIgDAHQgBADgNAJQgaASAMAZQARgGAdgTQAZgMAcARQAGAagOAPQgWAaAAACQAHgDANgHQAMgIAIgCQAEgVgIgYQgJgaADgSQgJAQgMgCQgagFgMABQAHgaAiAGQAdAFATAPQAOArgEAuQgQAWgcANQgWALgXAEQg3gIgLg+gAgmArQgGAEAEAEQACACAGgEQAGgFgEgDIgCgBQgCAAgEADgAhGALQAJAEAOAMQALAFAGgVQgIAEgRgMQgEgDgDAAQgGAAgCALg");
	this.shape_27.setTransform(27.6,10.7,0.546,0.546);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAGAIQgcgNgLACQgKgPAfAKQAtAOADAAQgEAHgIAAQgHAAgLgFg");
	this.shape_28.setTransform(35.9,6.1,0.546,0.546);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOgDQAbgLAYAAQgIAKgaAGQgbAGgIAHQgNgIAfgKg");
	this.shape_29.setTransform(20.6,6.1,0.546,0.546);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhAhZIAAgoQAHABACAKIABATIAdBaQAUAwAeAVQgBATAVAQQAVAPgBAUQhfhXgiiEg");
	this.shape_30.setTransform(8.1,38,0.546,0.546);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAQIhTg1QAOgOAYAXQAgAcAKACQAJAEAhASQAaAOAVAEQgHABgIAAQgeAAgpgbg");
	this.shape_31.setTransform(16.3,47.7,0.546,0.546);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgMA/QAHgbAMgaIAAh3QANAIgCAkQgDAwACAIQgEALgJAyQgGAngKATQgKgLAKgkg");
	this.shape_32.setTransform(51.1,30.9,0.546,0.546);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhHh+QgJgHAFABIAOAGQACAGAJAJQAIAIABAHQAMAEANAQQAOARAKADQAMAfAfA3QAZA1ACAyQg0iihhhhg");
	this.shape_33.setTransform(47.2,17.1,0.546,0.546);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgOACQgFgEAHgCQAJgEAUAEQgHAKgKABIgCAAQgIAAgEgFg");
	this.shape_34.setTransform(22.8,50.8,0.546,0.546);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_35.setTransform(25.6,44.8,0.546,0.546);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_36.setTransform(36,44.3,0.546,0.546);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FFFF").s().p("AAAAHIgYAEQgLgVAjAAQAkAAgLAVIgZgEg");
	this.shape_37.setTransform(15.8,44.5,0.546,0.546);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAPQALgRADgDQAJgKAQABIAAAdg");
	this.shape_38.setTransform(40.6,43.7,0.546,0.546);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_39.setTransform(16.9,42.6,0.546,0.546);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00FFFF").s().p("AgDAFQgEgOgNABQAMgYAUAVQAUATgXANQgIAAgEgQg");
	this.shape_40.setTransform(12.8,43.4,0.546,0.546);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDAEQgTgLgCgRQAbAFAKAIQAQAKgEAaQgDgDgZgSg");
	this.shape_41.setTransform(37.6,43.2,0.546,0.546);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgHgPQARgPAPAPQgJADgOASQgKAQgQACQAAgYARgPg");
	this.shape_42.setTransform(43.6,42.7,0.546,0.546);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D34B91").s().p("AgOgOQAggDgDAgIgEAAQgbAAACgdg");
	this.shape_43.setTransform(34.3,42.1,0.546,0.546);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF00FF").s().p("AgYBPQgjgNgLgBQgnhHAtgxQAtgxBOAeIAOApQAIAZAIANQgNAGgIAbQgJAegKAHQgQgDgEANIgPABQgSAAgUgHgAhGAZQAUAYAyAAQAxgBgUghQgBAOgPAEQgKADgXgBQAAgJgMgJQgMgHAEgOQALgTADgDQAKgKAQACQAPABAMARQANASAJADQABgNgIgNQgLgRgCgGQgWACgUgDIglgJQgaAZAGA2g");
	this.shape_44.setTransform(28.6,45.9,0.546,0.546);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_45.setTransform(23.4,41,0.546,0.546);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_46.setTransform(31.1,39.9,0.546,0.546);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D34B91").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_47.setTransform(23.7,39.9,0.546,0.546);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_48.setTransform(13.6,39.4,0.546,0.546);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00FFFF").s().p("AgNADIAHgbQARAAACAVQACARgMALQgQgIAAgOg");
	this.shape_49.setTransform(11.5,40.5,0.546,0.546);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKAJQAAgZgEgIQAUgDAGAQQAFAKgCAaQgZgCAAgOg");
	this.shape_50.setTransform(36,39.9,0.546,0.546);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D34B91").s().p("AgTgOQACAFAXAEQATACgFASIgJAAQgiAAAEgdg");
	this.shape_51.setTransform(33.5,39.4,0.546,0.546);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgJAWQgKgIAAgOQAAgNAKgHQAKgKATAGQgLALADAMQAIAWAAAEQgHACgGAAQgJAAgHgFg");
	this.shape_52.setTransform(45,39.4,0.546,0.546);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgJAdQgTgFgGgFQgHgmAYgOQAWgNAeAQQAEAZgHARQgEAKgNARQgHgFgRgFg");
	this.shape_53.setTransform(40.3,39.7,0.546,0.546);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00FFFF").s().p("AgYAYQgCgRAOgKQAQgMABgKQAeAHgPAYQgMAUgTAAIgNgCg");
	this.shape_54.setTransform(12.5,37.2,0.546,0.546);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgcAPQACgDAXgMQAOgJAAgPQAQADABALQABAKgLAKQgPAPgMAAQgKAAgJgKg");
	this.shape_55.setTransform(36.7,36.7,0.546,0.546);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00FFFF").s().p("AAIADQgcgTgnAIQADgdAgAJQAsANAKgDQAAANAQAKQAPALgBAPQgNgDgngZg");
	this.shape_56.setTransform(17.7,36.9,0.546,0.546);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTgYQAHAIAUAJQARAJgFAXQgrgDAEgug");
	this.shape_57.setTransform(43.3,36.1,0.546,0.546);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_58.setTransform(31.6,35,0.546,0.546);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDAQQgfgBAMgeQALAMAOgGQAPgFAJAJQACAVgeAAIgCAAg");
	this.shape_59.setTransform(40.2,35.1,0.546,0.546);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D34B91").s().p("AgBgCIALgCQAAAFgHABIgMADQAAgFAIgCg");
	this.shape_60.setTransform(25.9,34.5,0.546,0.546);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_61.setTransform(14.1,33.4,0.546,0.546);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D34B91").s().p("AgIgDQAIgMAFAEQAEAEABAJQAAAKgGABIAAAAQgEAAgIgQg");
	this.shape_62.setTransform(41.7,33.3,0.546,0.546);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_63.setTransform(37.6,32.8,0.546,0.546);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_64.setTransform(26.1,32.8,0.546,0.546);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgBAHQgJgMgJAAQACgIANgBIAYgBIAAAdIgHACQgKAAgEgJg");
	this.shape_65.setTransform(39.5,32.9,0.546,0.546);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_66.setTransform(21.8,32.3,0.546,0.546);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_67.setTransform(19.1,32.3,0.546,0.546);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_68.setTransform(37.6,31.7,0.546,0.546);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D34B91").s().p("AgDgDIASgBQgBAGgKACIgSABQABgHAKgBg");
	this.shape_69.setTransform(35.4,31.7,0.546,0.546);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgKAKQADgmgCgQQATACABAgQAAARgBAmQgTgCgBghg");
	this.shape_70.setTransform(28.1,33.9,0.546,0.546);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D34B91").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_71.setTransform(20.1,30.9,0.546,0.546);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D34B91").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_72.setTransform(34.9,30.4,0.546,0.546);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgFAQQgWgVgHgaQAQALATASIAiAeQgGAEgGAAQgNAAgPgQg");
	this.shape_73.setTransform(31.6,31.6,0.546,0.546);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_74.setTransform(31.6,29.6,0.546,0.546);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_75.setTransform(24.5,29.6,0.546,0.546);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhAABQAZgNA1ACQA4ACgFATIgRAAQg9AAgzgKg");
	this.shape_76.setTransform(33.8,28.1,0.546,0.546);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgJgJIBAAAQgMAPgiADQgKABg1AAQAIgRAlgCg");
	this.shape_77.setTransform(21.8,28.2,0.546,0.546);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D34B91").s().p("AgCAMQgDgIABgNQAEgMADAKQADAJgBAMQgDAHgCAAQgBAAgBgFg");
	this.shape_78.setTransform(6,28.2,0.546,0.546);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgYAhQgRgXAIgTQAIgRATgFQATgFANANQAPAPgGAfQgIAIgRACIgRABIgRgBg");
	this.shape_79.setTransform(9.8,28,0.546,0.546);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgmAYQgLg4AngHQAPgDAPAJQAPAKAGASQgBAjgcAIQgHADgGAAQgTAAgSgRg");
	this.shape_80.setTransform(46,28,0.546,0.546);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D34B91").s().p("AgBgCIALgCQAAAFgHACIgMACQAAgFAIgCg");
	this.shape_81.setTransform(35.7,25.7,0.546,0.546);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_82.setTransform(26.7,25.2,0.546,0.546);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_83.setTransform(39.8,24.6,0.546,0.546);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_84.setTransform(38.7,23.6,0.546,0.546);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgEAPQgXgUgMgaQAXADATAYQAXAbAOAFQgFAEgHAAQgNAAgTgRg");
	this.shape_85.setTransform(24.8,25,0.546,0.546);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_86.setTransform(19.1,23.6,0.546,0.546);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_87.setTransform(18,23,0.546,0.546);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D34B91").s().p("AgBAKQgDgFAAgJQAEgKACAFQADAGAAAIQgCAHgDAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_88.setTransform(15.8,23.5,0.546,0.546);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D34B91").s().p("AgCgCIAMgCQAAAFgHABIgMADQABgFAGgCg");
	this.shape_89.setTransform(13.9,23,0.546,0.546);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_90.setTransform(24,22.5,0.546,0.546);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D34B91").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_91.setTransform(33.5,21.4,0.546,0.546);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D34B91").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_92.setTransform(20.1,21.6,0.546,0.546);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D34B91").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_93.setTransform(29.4,21.1,0.546,0.546);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgCALQgKABgMgHQABgNAQgFQAIgCAYABIAAAdQgPgFgMABg");
	this.shape_94.setTransform(15.8,21.4,0.546,0.546);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgJAGQADgvgCgIQAXARgGAZQgJAqABAPQgMgIACgkg");
	this.shape_95.setTransform(28,22.7,0.546,0.546);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_96.setTransform(24,19.7,0.546,0.546);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_97.setTransform(21.8,19.7,0.546,0.546);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_98.setTransform(27.8,19.2,0.546,0.546);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgTgGQAPgZAcAIQAEAQgUAHQgSAGAFAUQgdgHAPgZg");
	this.shape_99.setTransform(19.1,20.2,0.546,0.546);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgCAQQgSgLABgWQAPgEAHALQAJAMAIAAQgDARgKAAQgEAAgFgDg");
	this.shape_100.setTransform(12.8,19.9,0.546,0.546);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_101.setTransform(42,17.6,0.546,0.546);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_102.setTransform(33.8,17,0.546,0.546);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D34B91").s().p("AgGACQAGgKAAgGQALAEgEAJIgHAQQgKgEAEgJg");
	this.shape_103.setTransform(32.4,17.6,0.546,0.546);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_104.setTransform(24,17,0.546,0.546);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgKATQgDgNAFgJIAIgRQAOgDgDAaQgCATgJAAQgEAAgGgDg");
	this.shape_105.setTransform(43.9,17.4,0.546,0.546);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgHAIQgMgIAGgTIAdAAIAAAnQgQgHgHgFg");
	this.shape_106.setTransform(20.1,17.3,0.546,0.546);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgSAYQAPgUgFgdQAegBgEAdQgDAXgUAAIgNgCg");
	this.shape_107.setTransform(11.1,17.1,0.546,0.546);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAAAkIgdgOQgGgYAMgOQAHgIAQgNQAmALgIA6QgMAGgKAAIgIgCg");
	this.shape_108.setTransform(15.5,16.6,0.546,0.546);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgOAPQgIgNAEgbIAZATQANALABATIgNACQgPAAgHgLg");
	this.shape_109.setTransform(19.3,13.8,0.546,0.546);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgXAZQgCgSAOgJQAQgMABgKQAcAGgQAWQgPAVgVAAIgFAAg");
	this.shape_110.setTransform(12.4,13.7,0.546,0.546);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgYgOIAxAAQAHAdggAAQgfAAAHgdg");
	this.shape_111.setTransform(15.8,12.6,0.546,0.546);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAHAFQgggCgEABQABgGAKgCIASgBIAeAAQAAALgSAAIgFgBg");
	this.shape_112.setTransform(31.3,5,0.546,0.546);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D34B91").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_113.setTransform(25.1,5,0.546,0.546);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHABIgMADQABgFAGgCg");
	this.shape_114.setTransform(23.7,5,0.546,0.546);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#FFF33B","#FEF03E","#FAE549","#F4D45B","#EBBC73","#EAB877","#EA9677"],[0,0.2,0.373,0.533,0.69,0.71,1],0,0,0,0,0,46.8).s().p("AkmFoQikiIgKjeQAChZAihOQAehEA4hBQA8hEBIgqQBag1BlgEQBygEBpAyQBmAvBDBVQAHABACAHIADAPQAeAVAWA2IAlBcQAOCPgpBxQgfBXhLBaIh0BKQhDAmg+AKQgvAIgrAAQijAAiBhqg");
	this.shape_115.setTransform(28,27.9,0.546,0.546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,2.6,51.2,50.9);


(lib.Diatom13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape.setTransform(-41.5,102.4,0.334,0.334);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAKQgZgLABgPQASgCALALIAUAUQAAAEgFAAQgGAAgOgHg");
	this.shape_1.setTransform(-55,102.6,0.334,0.334);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABAKQgRgQgDABQABgOAPAKQASANAFAAQgEAKgGAAQgEAAgFgEg");
	this.shape_2.setTransform(-53.8,102.3,0.334,0.334);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHACIAJgVQANABgIALQgLAPAGAMQgPgBAGgRg");
	this.shape_3.setTransform(-52.2,101.4,0.334,0.334);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJALQgPgLACAOQgFgBgEgKQgEgIgHAAQAFgLAIAEIAQAHQAJACABgMQAIABgCAFQgBAEgFAAQgBAFADACIAIACQAAAMgGAAQgEAAgGgFg");
	this.shape_4.setTransform(-44,100.9,0.334,0.334);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABAMQgJgUgGABQAKgWAFASQAKAXAEAAQgDAIgDAAQgEAAgEgIg");
	this.shape_5.setTransform(-33,99.7,0.334,0.334);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAKQABgPgBgIQAJAMAOACQAPADgSgRQAHgXAJASQAKASgHAQQgRACgCgMQgGAAgCAHIgCANQgJgCgBgOg");
	this.shape_6.setTransform(-50.5,99.8,0.334,0.334);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAFQAHgJAAgGQALgQgEAQIgHAdQgKgFADgJg");
	this.shape_7.setTransform(-70.5,99.8,0.334,0.334);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBAKQgJgRABgLQAKAIAJAVQgBAIgDAAQgDAAgEgJg");
	this.shape_8.setTransform(-32.1,99.4,0.334,0.334);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdgKQASg3AtAGQAJBggwAXQgqgQASg2gAgZAUQAAAGAFAFQAEAGABADQAXABAKgXQAKgWgOgPQglACgCAlg");
	this.shape_9.setTransform(-66,100.7,0.334,0.334);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgbAYQgKgZAEg1QAlACAUAlQAUAkgSAiIgDAAQglAAgNgfgAgXgOQgBAtAeAOQAQgSgHgZQgGgTgRAAQgHAAgIADg");
	this.shape_10.setTransform(-35.4,100.2,0.334,0.334);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFACQAPgVgNgBQAWgSgIAYIgOArQgSgEAQgXg");
	this.shape_11.setTransform(-69.4,99.4,0.334,0.334);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEALQgTgDAFgRQAGgBACADQABACABAFQAIgDADgDQAGgFACgIQAHAEgBAKQgDAMAHANQgDgFgWgEg");
	this.shape_12.setTransform(-48.2,98.7,0.334,0.334);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAfAnIgVgYIgPgdQgKgPgOgFQgNgLAQAFQAbAJAJgDQgDATAJAPIAOAZQAIASgDAAIgEgEg");
	this.shape_13.setTransform(-34.5,99.2,0.334,0.334);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLAgQgLgVgCgRQgJAAgTAGQgPAHgRgEQATgQA2gLQA5gLATgLQgDAlAXAMQgIAUgMgSQgMgQACgPQgJgBgKAGQgLAGgKgBQgFAPAIAKQAJANgCALQgPACgCgUQgDgUgJgBQgQAFALARQAOAYAAADQgCAEgDAAQgEAAgHgPg");
	this.shape_14.setTransform(-31,98.3,0.334,0.334);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAOQgagFADgWQAMgDAEAHQADAEABALQAPgKAOABQgBASgRAAIgIgBg");
	this.shape_15.setTransform(-73,96.2,0.334,0.334);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AADAKQgLgPgGADQAFgUAJANQANAQACAAQgCAIgDAAQgDAAgEgFg");
	this.shape_16.setTransform(-76,96.2,0.334,0.334);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAHQgNgCgKgMQAFgLAIADIAQAIQAJABABgLQAJgKgCAQQgFAXAIAKQgMgMgOgDg");
	this.shape_17.setTransform(-48.3,96.3,0.334,0.334);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYgQQACAQAUAAQATAAgVgQQACgIAHADQAMAGAIgBQABAGgHAMQgEAIAKADQgIAKgNgEQgQgFgMAJg");
	this.shape_18.setTransform(-52.7,96,0.334,0.334);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAPAYIgCgNQgJAAgKAFQgLAGgJgBQABgMAPgHQAQgFAHgFQADgQgWAFQgVAEALAQQgVgGAQgPQAQgQASAIQADALAKAUQAHASgKAKQgGAAgCgHg");
	this.shape_19.setTransform(-50.6,94.7,0.334,0.334);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_20.setTransform(-57.8,94.1,0.334,0.334);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBAOQgagFADgWQAMgDAEAHQADAEABALQAPgKAOABQgBASgSAAIgHgBg");
	this.shape_21.setTransform(-71.7,94.2,0.334,0.334);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAALQgUgKAHgOQAMgDAEALQAGALAHAAQABAJgGAAQgEAAgHgEg");
	this.shape_22.setTransform(-43.7,93.8,0.334,0.334);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMAJQgKgCACgJQACgLAGADQACABABAJQABAHAGACQABABAHgHQAIgGADADQAMALgUAAg");
	this.shape_23.setTransform(-79.1,93.7,0.334,0.334);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_24.setTransform(-44.8,93.3,0.334,0.334);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAGQADgLAUgGQAVgHgFAYQgJACgBgLQgHADgGALQAAABgBAAQAAABgBAAQAAAAAAAAQgBABgBAAQgEAAgIgIg");
	this.shape_25.setTransform(-21.8,93.2,0.334,0.334);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAMQAFgCALgQQAIgMAPABQgCAQAMADQgBAHgEgBQgFgBAAgFQgPgCgGAOQgCAFgEAAQgFAAgHgHg");
	this.shape_26.setTransform(-26.6,93.3,0.334,0.334);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBACQgOgBAGAGQgFgFAAgBQgBgBAHgCIAPgEQAOgBgKAOQADgFgPAAg");
	this.shape_27.setTransform(-67.2,92.1,0.334,0.334);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AACAMQgLgJgDARQgHgBgCgPQgDgNgIAAQgCgNATAKQAUAMACgTQALgBgJASQgIAQAagEQAHgJgBAEIgGAPIgFABQgHAAgNgJg");
	this.shape_28.setTransform(-46.4,92.1,0.334,0.334);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGAFQgTgQAEgXQAHAKAZAXQATAUgMAQQgDgMgVgSg");
	this.shape_29.setTransform(-70.1,92.2,0.334,0.334);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXAPIAKgHQASgJgKgSQAFACAJAIQAIAJAHAAQgBAJgRACQgSADgDAGQgKgDACgCg");
	this.shape_30.setTransform(-25.6,91,0.334,0.334);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLAPQANgHAAACIAAgOQgBgOABAAQAOgGABAYQABAUgZABQgPAAALgGg");
	this.shape_31.setTransform(-23.2,90.7,0.334,0.334);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAFANQAMgQgHgLIgLANQgHAIgLgCIAAgdIAnAAQAEAdgOAUQgMgBAHgLg");
	this.shape_32.setTransform(-71.5,89.9,0.334,0.334);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgVANQACgEAFAAQACgQgMgDQABgOAaAJQAaAIgEAQQgRACgDgLQgRAHgCAMQgIgBABgFg");
	this.shape_33.setTransform(-46.7,89.4,0.334,0.334);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAIQABgIAIAAQABgGgDgCQgCgBgGgBQAEgPAPAOIAUAUQgCAIgEgCQgEgBAAgFQgQgDgDANQgJgCAAgJg");
	this.shape_34.setTransform(-54.8,89.4,0.334,0.334);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBATQgEgQgQAGQgVAdAFgYQAEgWAMgWQAfACANAIQATAMgEAbQgRgDgDANIgIACQgJAAgCgMg");
	this.shape_35.setTransform(-74.2,89.7,0.334,0.334);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAAAYQABgOgMgJQgQgLgCgFQAFgGATgCQAUgCAPAKQADAogcAAIgFgBgAACgNQgFAEADAEQACACAGgEQAFgEgDgEIgCgBQgDAAgDADg");
	this.shape_36.setTransform(-76.5,89.6,0.334,0.334);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAJQgSgBgGgHQgCgCAUgDIAfgEQgEARgSAAIgDAAg");
	this.shape_37.setTransform(-83.7,89,0.334,0.334);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAEAKQgLgPgHADQAGgUAIANQAMAQADAAQgCAIgDAAQgDAAgDgFg");
	this.shape_38.setTransform(-45,88.8,0.334,0.334);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_39.setTransform(-56.8,88.7,0.334,0.334);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgKAdQAAgEgHgXQgEgLALgLQAGgPADANQABANgKgBQABAHAJACIATABQACAIgGAHQgGAJAAAFg");
	this.shape_40.setTransform(-78.8,89.4,0.334,0.334);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTgJQALAJAGgDQALgGALAAQgDALgUAHIgHABQgMAAADgTg");
	this.shape_41.setTransform(-19.8,88.4,0.334,0.334);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAMQgBgLAVAAQASAAgJgSQAEAAAGAFQAFAFAFAAIAAATQgMgNgNANQgGAGgGAAQgGAAgGgGg");
	this.shape_42.setTransform(-25,88.6,0.334,0.334);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYALQACgIAEABQAEACAAAFQALgJAIgUQAFABAEAJQAEAIAHABQgHANgQAEIgHABQgLAAgIgIg");
	this.shape_43.setTransform(-27.6,88.7,0.334,0.334);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAOAeQgSgPAJgSQgKgCgFAFQgDAEgBAMQgJgCgBgOQABgPgBgIQAEABAFAFQAGAEAFAAIALgNQAGgJAMACQgEASgBAMQgBAMgEARQAKAHgCABIgBAAQgCAAgGgEg");
	this.shape_44.setTransform(-48.7,88.2,0.334,0.334);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_45.setTransform(-36.1,87,0.334,0.334);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEgKQAVACAJAJQgDAGgQgCQgSgCgMAIQgGgXAZACg");
	this.shape_46.setTransform(-55,87,0.334,0.334);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgHAeQABgDAFgGQADgFAAgGQgBgHgJgCIgTgBIAHgMQADgIAAgJQAQgGADAQQADAQARgGQABgGgDgCQgCgBgGgBQAJgKAFAIQAEAHgDAOQgFAfgVAAIgIgBg");
	this.shape_47.setTransform(-70.3,87.7,0.334,0.334);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgJABQAXgMgCgIQAOAFgPALQgUAPACAIQgUgKASgJg");
	this.shape_48.setTransform(-88.6,87,0.334,0.334);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AADAKQgKgPgHADQAGgUAIANQAMAQADAAQgCAIgDAAQgDAAgEgFg");
	this.shape_49.setTransform(-29,86.5,0.334,0.334);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAGAJQgFgMgGABQgKgFABgCQACgDAJABQAXADgGAPQgCAFgDAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBg");
	this.shape_50.setTransform(-54,86.5,0.334,0.334);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF00FF").s().p("AgYAHQACgMAZgHQAagGgEAZQgRACgDgLQgGACgHAMQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgFAAgIgHg");
	this.shape_51.setTransform(-21.3,86.1,0.334,0.334);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgNAOQgEgJgHAAQABgHAFACQAEAAAAAFQAHgBACgJIABgTQAQgCAGAOIAHAbQgDgBgGgFQgGgEgFAAQgFAAgCAHIgCANQgFgBgEgKg");
	this.shape_52.setTransform(-26.6,86.5,0.334,0.334);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAFAPQgSgNgBASQgIgCgBgOQAAgQgBgHQAJAEAOALQALAEAFgTQAEATAGAKQgBAKgHAAQgEAAgIgFg");
	this.shape_53.setTransform(-50.7,86.7,0.334,0.334);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNARQgYgQADgTQASgPAYAPQAYAPADAYQgLgDgQgTQgMgSgUABQgBAQAQAIQAWAMACADQgCAFgHAAQgGAAgNgJg");
	this.shape_54.setTransform(-14,86.3,0.334,0.334);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AABAQQgOAFgLgLQABgIAFACQAEABAAAFQALgJAIgUQARAIADAfQgJgJgPAFg");
	this.shape_55.setTransform(-24,86,0.334,0.334);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgSATQACgKANgJQANgKABgKQAOACgNAVQgKASgNAAIgHgCg");
	this.shape_56.setTransform(-88.9,86.1,0.334,0.334);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_57.setTransform(-18.8,85.3,0.334,0.334);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_58.setTransform(-89.2,85.4,0.334,0.334);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AABABQgPgNgPgEQAKgOAXASQAUAQAGATQgIgEgVgSg");
	this.shape_59.setTransform(-13.4,85.3,0.334,0.334);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF00FF").s().p("AAZAYQgFgCgMgQQgIgLgOABQgIABAEAIQAGALgCAIQgHgJgVAHQgVAFgLgMQgBgKAGgJQAGgLgBgKQAaAHAOAAQAYACAZgJQgEAZATAKQASAMAHgaQAUAIgVAMQgPAJgOAAIgKgBg");
	this.shape_60.setTransform(-69.4,85.2,0.334,0.334);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgPAMQgNgJAFgVQAdgFAUAPQgLAOABAPQgXgEgIgFgAADgGQgGACAAAFIALgCQAHgBABgGIgNACg");
	this.shape_61.setTransform(-73.4,85,0.334,0.334);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAFAIIgGgIQgfgSAdANQAaAKgFAEQgDACgDAAQgEAAgDgDg");
	this.shape_62.setTransform(-23.7,84.4,0.334,0.334);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgNAJQgEgJgHAAQACgHAEABQAEACAAAEQAGAAACgHIACgMQAFABAJAKQAHAHAIABQgCAHgDgBQgFgBAAgFQgMgCgDAGQgDAEgBAMQgFgBgEgKg");
	this.shape_63.setTransform(-25.6,84.4,0.334,0.334);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AABAQQgPAFgKgLQABgIAFACQAEABAAAFQAJgCgBgIQAAgJgIAAQAHgSARAPQASAPgDARQgJgJgPAFg");
	this.shape_64.setTransform(-28.3,84.4,0.334,0.334);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgeAIQABgCAMgDQAagHgIgPQAhgDgDAgQgDgJgTAAQgSAAAUAJQgBAIgEgCQgFgBAAgFQgQgDgDANQgOgIACgEg");
	this.shape_65.setTransform(-54.2,84,0.334,0.334);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAiBUQATgWACgFQgMgMgIAHQgPAOgFABIgHAFIAJgKQAVgWgDgNQgQgBgKAKQgEAEgJARQgUgGAPgMQAKgIAOgEQgCgQgNgbQgMgagCgUQgrAHgRArQgRgGANgQQAMgOAMgEQADgCAMgXQAJgQAQABQAIAyAfAtQASAaAqAwQgFAMgIgFQgJgEACgNQgGACgJAJQgIAIgHABIgHAGQgBAAAHgJg");
	this.shape_66.setTransform(-87.7,86.1,0.334,0.334);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEgJQgTgIgBAWQgBAWgTgHIALgbQAHgRACgPQAIAPAbAYQAbAWAHASQgfgSgSgfg");
	this.shape_67.setTransform(-12.6,83.4,0.334,0.334);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAQAiQgVgIgFANQgGgSgYACQgUADAAgaQACAHAUAAQATAAgVgHQADgQAIAMQAMAPAHgCIAWgWQAMgNAFgOQAJABgBAJQAAAJgIABQAHAIARAMQAMANgGAaQgGACgHAAQgNAAgRgHgAAfABQgGAEAEAEQACACAGgEQAFgFgDgCIgCgBQgDAAgDACg");
	this.shape_68.setTransform(-76.8,84.4,0.334,0.334);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgxAsQgDgsAhgUQAMgHA5gSQgDAwgVAWQgUAVgkAAIgTgCgAgdAiQAaAFAJgPQAIgMgEgbQgKgBgJAGQgLAGgJgBg");
	this.shape_69.setTransform(-90.9,83.2,0.334,0.334);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgYAPQAJgMAUgHQABgGgDgCQgCgBgFgBQADgPAIALQAMAQAGgCQgPAQgHAHQgFAFgGAAQgIAAgIgJg");
	this.shape_70.setTransform(-25,82.2,0.334,0.334);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgZAHQASgVgEgPIAnAAQAFAXgVAKQgXAMAAAOQgZgKALgNgAgBgJQABAIAGgBQADgBAJgGQAAgIgJgBIgBAAQgIAAgBAJg");
	this.shape_71.setTransform(-27.1,82.4,0.334,0.334);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgTAdQACgRgMgDQACgDAWgMQAPgJAAgPQAYADgEAkQgPgEgIAQQgFAKgJAAQgGAAgGgCgAAKgUQgDACAFAGQAEAFAEgDQACgDgEgFQgDgEgCAAIgDACg");
	this.shape_72.setTransform(-29.8,82.4,0.334,0.334);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAFAIIgGgIQgfgSAdANQAaAKgFAEQgDACgDAAQgEAAgDgDg");
	this.shape_73.setTransform(-36.4,81.7,0.334,0.334);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgZASQgDgDAQgQQAPgSALAIQAbgRggAZQgdAWgEAAIgBgBg");
	this.shape_74.setTransform(-91.7,82.1,0.334,0.334);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgZARQgagWgDgnQAyADAYANQAfAQAEAlQgSAIgCAMQgogJgUgTgAgNAMQARAVAfgIQAEgZgRgMQgJgGgbgGQgPARAQATg");
	this.shape_75.setTransform(-10.9,82.5,0.334,0.334);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAegTQgFADgVATQgPAPgSACQAQgiArgFg");
	this.shape_76.setTransform(-91.9,81,0.334,0.334);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAAAKQgZgHAGgQQAIADALAHQANAHAHACQADAIgIAAQgGAAgJgEg");
	this.shape_77.setTransform(-52.9,80.5,0.334,0.334);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AALAJQgIgBgSgNQAJgFAKAEQAIAEADAFQADAGgFAAIgCAAg");
	this.shape_78.setTransform(-9.6,80.2,0.334,0.334);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AghAfQADgNgLgFQgMgGAAgGQgEgiAsAFQgDAiANgIQAJgGAKgUQAUgMABAhIABAQQABAEAHgMQALgPgEAPIgHAeQgPAEgIgMQgJgMgIAAQgQgHgDARQgDALgJAAIgIgBg");
	this.shape_79.setTransform(-67.1,80.7,0.334,0.334);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF00FF").s().p("AgWABQATgIgBgRIAxAAQgBAEgPAKQgLAIAHARQgXgLgNAFQgQAKgRAGQAAgOAWgKg");
	this.shape_80.setTransform(-36,80.2,0.334,0.334);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_81.setTransform(-93.5,79.7,0.334,0.334);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AABAKQgRgQgDABQABgOAPAKQASANAFAAQgEAKgGAAQgEAAgFgEg");
	this.shape_82.setTransform(-8.8,79.6,0.334,0.334);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAJAWQglgXgaAEQADgJAYgIQAWgHABgPQAJAFgDAIIgGARQARATAqAUQgEAEgHAAQgNAAgWgPg");
	this.shape_83.setTransform(-10.6,80.2,0.334,0.334);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgGAPQACgQgMgDQgCgPAPAMQAPALABgSQAHACgDAIQgGALACAIg");
	this.shape_84.setTransform(-63.3,79.5,0.334,0.334);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgCAJQgDgJgBgGQgBgOAOAKQgFgEAAAPQgBAQAGgIQgEAGgCAAQgBAAgCgGg");
	this.shape_85.setTransform(-54.1,79.1,0.334,0.334);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgJAUQAKgCgDgUQgEgTAGACIAKAVQAEASgQAAIgHAAg");
	this.shape_86.setTransform(-57.8,79.4,0.334,0.334);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgIAHQgGgBALgGQAJgFAEgBQAEgBgIAHQgHAHgFAAIgCAAg");
	this.shape_87.setTransform(-94.1,79,0.334,0.334);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAEAKQgTgNgEABQAGgSANAMQARAPADAAQgBAHgFAAQgEAAgGgEg");
	this.shape_88.setTransform(-8.1,78.8,0.334,0.334);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgVAIQgLgHAEgOQALACAMgJQALgIAPAFQAGAMgCANQgCAJAIAFQgFAHgJgBQgOgDgLAHQAAgJgNgJg");
	this.shape_89.setTransform(-70.9,78.5,0.334,0.334);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AACAGQgKgGgEgDQgGgIADgDQACgCAIADQAUAIACAVQgEgEgLgGg");
	this.shape_90.setTransform(-8,77.8,0.334,0.334);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgmgQQAZgBAEAaQAOgVAPgFQAPgEAZALQgDAkgvgIQg5gKgMALQgEgiAZgBg");
	this.shape_91.setTransform(-31.8,78.1,0.334,0.334);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgIAJQgEgJgHAAQACgHAEACQAEABAAAEIAKgMQAHgJAMACIAAAdQgRgDgDANQgEgBgEgKg");
	this.shape_92.setTransform(-37.5,78,0.334,0.334);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_93.setTransform(-95.2,77.7,0.334,0.334);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgEALQgKgPAOgGQAFgPADANQACAMgKAAQgBAFACACIAIACQgCAKgEAAQgDAAgEgIg");
	this.shape_94.setTransform(-52.5,77.7,0.334,0.334);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAFAIIgGgIQgfgSAdANQAaAKgFAEQgDACgDAAQgEAAgDgDg");
	this.shape_95.setTransform(-7.4,77,0.334,0.334);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAAACQgMgHAEAIQgFgKABgBQABgFAXgBQgBADACALQACALgDAEQADgFgPgIg");
	this.shape_96.setTransform(-56.9,77.2,0.334,0.334);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_97.setTransform(-62.4,76.8,0.334,0.334);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_98.setTransform(-84.2,76.3,0.334,0.334);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgBgCQAFgDgBAJQgKgEAGgCg");
	this.shape_99.setTransform(-7.6,75.9,0.334,0.334);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgOAPQgIgJgHgBQADgHAEACQAJAGAEgBQAIgCgEgHQgGgMACgIQAQgEAFARQAGARAMgBQgBAJgOgEQgOgEgBATQgFgCgJgIg");
	this.shape_100.setTransform(-30.1,75.8,0.334,0.334);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAAAbIgHgbQgGgOgRACQAGggAWAeQAKAOAEACQAGADABgRQASAFgKAUQgHAQgMAAQgEAAgEgCg");
	this.shape_101.setTransform(-71.8,76.1,0.334,0.334);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AANAQQgDgFAAgJQgQgCgDAMQgJABgBgLIAAgTIAnAAQgIAIACAGIAGAPQgCAGgCAAQgBAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_102.setTransform(-52.8,75.3,0.334,0.334);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAFAHQgJgGgGgBQgPgKAPAEIAdAGQgEAIgGAAIgEgBg");
	this.shape_103.setTransform(-46.1,74,0.334,0.334);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAHAhQgDgNALABQgWgOgKgTQgOgZAkgBQgEASAPAVQALASgMAMQgCAIgDAAQgCAAgBgGg");
	this.shape_104.setTransform(-91.4,75,0.334,0.334);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgdAPQAHgNATgKIAhgQQABAOgQAKQgPAMAAANQgPgKgOAAg");
	this.shape_105.setTransform(-5.8,74.2,0.334,0.334);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgEgMQASgLALAMQgGADgRAMQgNALgNADQADgTARgLg");
	this.shape_106.setTransform(-40.3,74.1,0.334,0.334);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgNAHQAAgNAJAAQABgGgDgCQgCgCgGAAQACgIAIADQALAGAIgBQAAAIgNAIQgKAIAEAPQgJgCAAgOg");
	this.shape_107.setTransform(-5.6,72.6,0.334,0.334);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgJAKQAGgIgBgDQABgGgDgCQgCgCgGAAQACgIAIADQALAGAIgBQgBAGgKAHQgGAIgCAIQgIgDADgFg");
	this.shape_108.setTransform(-28.6,72.4,0.334,0.334);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_109.setTransform(-51.1,71.6,0.334,0.334);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUAOQAAgGAHgCIANgCQAAgFgCgCQgCgBgGgBQgCgOASAKQATAJgGAOg");
	this.shape_110.setTransform(-55.5,71.9,0.334,0.334);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgOAHQAHgHAOgHQATgKgNANQgNAMgMAEIgDAAQgEAAAFgFg");
	this.shape_111.setTransform(-60.8,72,0.334,0.334);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgJAZQgZgKAFgRQAQAJANAAQgHgUgWgJQAAgKAZAIIAiAMQAAAGgHACIgNACQgCAPAMAEQgDALgMAAQgFAAgJgDg");
	this.shape_112.setTransform(-8.1,71.4,0.334,0.334);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAAACQgDgOgMACQAAgQATAOQASAMgIATQgJAAgFgRg");
	this.shape_113.setTransform(-24.3,71,0.334,0.334);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgfAQIAAgTQAHAOAPgKQAQgJgSgFQgDgPAbADQAaADgLATQgGgPgQAKQgPAKARAEQgBAHgOACQgOACAAAJIgCAAQgHAAgBgKg");
	this.shape_114.setTransform(-10.7,70.8,0.334,0.334);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_115.setTransform(-67.8,70,0.334,0.334);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAAALQgUgKAHgOQAMgDAEALQAGALAHAAQABAJgGAAQgEAAgHgEg");
	this.shape_116.setTransform(-6.3,70.5,0.334,0.334);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgTALQAIgRgNgEQAHgNAQgEQAPgEALALQgBAIgEgCQgFgBAAgFQgSADAMALQAOALACgFQgDAIgMAAQgMgBgCAWQgVgCAGgQg");
	this.shape_117.setTransform(-86.1,70.4,0.334,0.334);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgTAaQAEgYgOAEQgDgNAXAEQAXADgEgNIgMgMQgJgHACgLQAPgGAEAQQAEAQAQgGIgPAbQgFAKAKAWQgOgBgGABQgIACgBAIIgDAAQgKAAADgUgAgJAQQAAAIAJAAQAIABACgJQgEAAgHgFIgDgBQgDAAgCAGg");
	this.shape_118.setTransform(-95.2,70.8,0.334,0.334);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgIAHQgCgHgPgEQACgIAEACQAEABAAAFIAMgNQAFgJAMACQACAQgMAEQAdALgJAGQgEAEgjAIQAJgLgCgHg");
	this.shape_119.setTransform(-90.7,69.8,0.334,0.334);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAAAKQgHgHgEgPQAPAFAFAHQAFAHgEAEQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgDAAgEgDg");
	this.shape_120.setTransform(-22.1,68.4,0.334,0.334);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgHARQgIgNgJAAQADgHAFADQAIAFAEgBQAHgCgDgHQgGgMACgIQAIAGAEABQAGABABgIQAPAEgJAPQgMASAGAMIgHACQgJAAgGgJg");
	this.shape_121.setTransform(-4.6,68.5,0.334,0.334);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgJAKQgBgDAFgHQAFgGAAgDIgJAAQAUgcgBA4QAAgCgTgHg");
	this.shape_122.setTransform(-18.5,68.4,0.334,0.334);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAOAgQgDgJABgNQgLAIgIAAQgJAAgLgIQACgIAEABQAEACAAAFQARgBgIgPQgIgQgLADQAdgaARAQQARARgOAqQgDAGgCAAQgCAAgBgEgAAEgRQgFAEADAEQACACAGgEQAGgFgEgDIgCgBQgCAAgEADg");
	this.shape_123.setTransform(-92.6,68.7,0.334,0.334);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_124.setTransform(-82.2,67.4,0.334,0.334);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgNAIQgGgLAAgLQAQACADgMQAJACAAAIQgBAKgIAAIAIAMQAFAFAHACQgBAIgEgCQgFgBAAgFQgPAKgOAAQAJgLgDgGg");
	this.shape_125.setTransform(-85.6,67.8,0.334,0.334);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AACAaQgPgMgLAHQAAgGAHgCIANgCQgMgMACgbQANALAagBQACAMgGAEQgEACgMABQgCAQAMAEQgBAIgEAAQgDAAgFgDg");
	this.shape_126.setTransform(-13.9,67.6,0.334,0.334);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgKAAQgGgbANAeQAOgHACABQABACgIAOIgFABQgJAAgCgOg");
	this.shape_127.setTransform(-24.3,66.9,0.334,0.334);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AB6HLQADgNAUgkQhGiyhYkUQhkk3gziaQAUALAJAnQANAxAIALQARAtAqB+QAkBtAYA8QAcBcAyCLIBSDkIgYAuQgMAcAGAkQgUgYAHgbg");
	this.shape_128.setTransform(-41.7,83.7,0.334,0.334);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgEACQgDgdgFgHQANALAIAXQAIAYgKALQgJgGgCgbg");
	this.shape_129.setTransform(-21,67.5,0.334,0.334);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgNAIQAHgPgVgCQAJgTAegBIgGAJQgEAFAAAGQACAJAJgBQAJAAAAgIQAPAGgTAMQgYARgBAEQgNgFAHgRg");
	this.shape_130.setTransform(-94.3,67,0.334,0.334);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgCASQgagHALgTQANgMAaACQgIATgVAAQgCAFAEADIAHACQAKAFgDADIgEABIgHgCg");
	this.shape_131.setTransform(-87.3,67,0.334,0.334);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgMgCQAHgKABgHQAHABgCAEQgBAFgEAAQgCALAGAEQADACAMACQgBAHgKACIgSABQgCgMAEgKg");
	this.shape_132.setTransform(-9,66,0.334,0.334);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_133.setTransform(-45,65.8,0.334,0.334);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAEAOQgLgPgHACQABgEAKgEQAIgEAAgHQAIACgDAFQgFAJAAADQgCAFAEADIAIACQgCAIgDAAQgDAAgDgFg");
	this.shape_134.setTransform(-80.4,66,0.334,0.334);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAEAgIgCgSQgDghgQAGQABgHAPgCQANgCAAgJQAKABgHAUQgJAYAGAOQgEAIgCAAIgCgCg");
	this.shape_135.setTransform(-23.5,66.1,0.334,0.334);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AADAQQgIAAgLAJQgKgEAFgDQAGgDAJAAQABgIgGgLQgGgLABgJIAnAAQgBAEgKAFQgJAEAAAHIAOAKQAIAHgCAMQgLgJgJAAg");
	this.shape_136.setTransform(-92,65.8,0.334,0.334);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgTAPQABgFAKgEQAIgEAAgGQABgGgCgCQgCgBgGgBQACgIAIAEQAIADABgJQAPAEgJAOQgMATAGAMQgOgKgPAAg");
	this.shape_137.setTransform(-7.4,65.2,0.334,0.334);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAFAaQgMgGgHACQABgEAFgGQAEgFAAgFQgBgFgGgCIgNgCQAAgOANgEQALgFgEAXIAdAAQAAAGgHABIgNACQgCAQAMAEQgCAFgEAAIgEgBg");
	this.shape_138.setTransform(-21.6,64.9,0.334,0.334);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgWARIANgCQAAgXgUgGQAEgIAKACQANACAMgGIgFAJQgFAFAAAGQABAGAKABIATACQgIARgOAAQgZAAgMADQAAgGAHgCg");
	this.shape_139.setTransform(-82.2,64.8,0.334,0.334);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgIAUQAIgLgDgJQgEgJAIgKQAGADACARQADATgSAAIgCAAg");
	this.shape_140.setTransform(-75.9,64.3,0.334,0.334);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgdAXIAAgdQAEABAFAFQAFADAGAAQACgQgMgDQABgLAPAIQAUAKANgHQAAAIgNAIQgLAIAEAPg");
	this.shape_141.setTransform(-9.8,64.2,0.334,0.334);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgBAKQgJgRABgLQAKAIAJAVQgBAIgDAAQgDAAgEgJg");
	this.shape_142.setTransform(-47.8,64,0.334,0.334);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgKAIQACgLgLgBQABgFAKgEQAIgEAAgHQAIABgCAFQgBAEgFAAQgCALAGAEQAEADAMABQgJASgeACQAHgJACgIg");
	this.shape_143.setTransform(-86.9,64.2,0.334,0.334);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgKATQABgEAFgGQAEgFAAgEQAAgGgCgCQgCgCgGAAQgPgMAPAEIAdAIQgCABgHATQgEAKgJAAIgHgBg");
	this.shape_144.setTransform(-26.4,63.7,0.334,0.334);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_145.setTransform(-60.5,63.4,0.334,0.334);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_146.setTransform(-9.4,63,0.334,0.334);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgFAAQAAgSgRAVQgMgOATgIQATgHAXAKQADALgHAFQgEABgMACQgBAFADADIAIACQgCAIgNABQgQAAgIABQARgDAAgUg");
	this.shape_147.setTransform(-19.7,63.6,0.334,0.334);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgIAGQgGAAALgGQAJgFAEgBQAEAAgIAGQgHAHgFAAIgCgBg");
	this.shape_148.setTransform(-75.1,62.7,0.334,0.334);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgJANQAFgEAJABQgJgLgUgIQAEgQAPAKQASAMAMgGQAEAOgNAGQgTAHgBACQgLgEAGgDg");
	this.shape_149.setTransform(-28.6,62.7,0.334,0.334);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgLAIQALgQgGgLQAUATABADQABAGgWALQgNgBAIgLg");
	this.shape_150.setTransform(-81.6,62.7,0.334,0.334);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgJASQgIgIgHgBQABgIAFABQAEACAAAFQAMgFgEgIQgGgJgMADQAGgYARAJQAJAFARAUQgBAGgEgBQgFgBAAgEQgIAAgBAKIgBATQgFgCgJgJg");
	this.shape_151.setTransform(-7.9,62.7,0.334,0.334);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgDAfQgSgRgDABQAQgLABgIQABgGgIgYIAdAAIgGAJQgEAFAAAGQAAAGAHABIANADQgBABgWARQgOAKAbABQgEAKgGAAQgEAAgEgEg");
	this.shape_152.setTransform(-95.7,62.8,0.334,0.334);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgVAHQAHgIAAgFQABgGgDgCQgCgBgGgBQABgLAPAIQAUAKANgHQADAOgLADQgDABgSABQAAAGAGACIANACQgCAJgNABQgRgBgHABQgCgJAFgHg");
	this.shape_153.setTransform(-17.6,62.2,0.334,0.334);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgJAVQgZgIAGgPQAJgCABALQAJgCAAgIQgBgJgIAAQACgQARAIQARAIADAKQAMADgEAAIgPAAQgagBAXARQADAHgIAAQgGAAgJgDg");
	this.shape_154.setTransform(-31.2,62.1,0.334,0.334);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("Ai6InQAFgxgVgUQgMACgRAPQgQANgPAAQgGAMgHAeQgIAZgTADQADgJAOgYQALgTACgSQgXgCgIAWQgEAMgFAcQgVgHARgaQAQgZgMgCQAJgFAtgKQAjgIALgRQAIgwAhhaQAghVAHg5QAQgTAHgmQAHgjAUgSQAKg9AjhsQAjhrAJg/QAZgtALgaQAWgugIgXQAZgTAFgpQANgLgHAYQgKAkAEALQALgJAJgVQAJABgGAPQgGARANAHQAMABAAgfQAAgfgMABQACgLAJAGQALAHAIgMQAGgSgngCQgTgBgCgBQgHgBALgHQABgRACgBQABgBAFAIQANAVASgKQAQgBADgTIABgoQAVgDgHAUQgLAeAHANQAEAGAXACQAOACAnAAIgIgvQgFgbgHgQQgVAOgmgEQgogFgBgZQAjANAygEQAbgBAwgIQgEAAgHgZQgFgVAQAaQAMAUgCAUIgyAAQgEAbAJAbQAOAkABAKIg8AAQgDAWAEAWIAJAkIAyAAQAEgRgHgQQgHgSAAgJQAGgGAFAMQADAHAFAVQAMApAdgZQARAGgUAEQgbAGAAAEQgGANALAZQAHAPgWgDIAAgyQgcgBgMABQgWABgIAJQALAMgBAcQgXgMADgmQgPgDgPAIQgKAFgKgKQgJACgBAOIAAAYQgFATgJgdQgIgbALgDQgMADgKgFIgRgIQgWAWgNAnQgJAegGAxQgWAUACAyQASgJACgLQAOAAgSAZQgRAXgJgSIAAAyQgwBkg0C3QhFDvgUA5IAAAoQAFAVATAPQALAJAZAPQAQAOgYgIQgYgJgIgHQgKAKgEAVIgGAnQgKgQAGg3gACimBQAaAAgLgWIgeAAQgLAWAaAAgACzmZQAPAVADABIgDg0QgBgTgagJQgJAFgFARIgGAcQAHgCAFAAQANAAAHAKg");
	this.shape_155.setTransform(-58.1,81.6,0.334,0.334);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AABASQgSgNgBASQgUgGANgJQARgMAAgCQABgGgDgCQgCgCgGAAQAGgGAPAAQAQAAAMAGQgBAGgHABIgMADQgCAPAMAEQgBAKgHAAQgEAAgIgFg");
	this.shape_156.setTransform(-13.1,61.6,0.334,0.334);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgPANQgDgfgCgDQADAFAWADQATADgFASQgJABgBgKQgDAAgGAEQgEAFgGAAQgBAFADADIAIACQgFAEgDAAQgFAAgCgJg");
	this.shape_157.setTransform(-26.8,61.4,0.334,0.334);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgaAKQAFgKAIACIAQAIQAJgCAAgIQgBgJgIAAQgJgGADgCQADgDAIADQAaAHgLAUQgKAJgOAAQgPAAgKgJg");
	this.shape_158.setTransform(-3.5,61,0.334,0.334);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_159.setTransform(-93.5,60.7,0.334,0.334);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AABAGQgEgIgDgEQgFgGgHgBQABgNALAIQAPAMAMgHQABALgUALIgWANQgBAAAWgQg");
	this.shape_160.setTransform(-29.5,60.8,0.334,0.334);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgJAPQAFgIAAgEQAAgFgIgCIgMgCQAKgaAMASQAQAaALABQgDAIgFgDQgIgGgEABQgFgCgCAEQgCACAAAGQgIgDADgFg");
	this.shape_161.setTransform(-83.7,60.9,0.334,0.334);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgVAKQgCgCAJgOQAYgHAKAKQAKAJgigDQgNAHgDAAIgBAAg");
	this.shape_162.setTransform(-100.1,60.2,0.334,0.334);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_163.setTransform(-55.8,60,0.334,0.334);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAKB6QAPgZAAgCQgJgZgogFQgHACgIARQgHAQgSgFIAOgWQAIgMAIgGQgBgNgTgHQgUgHAAgNQgSAIgCAMQgCgCAEgXQAFgSgbgGQACgKAJAGQAHAEACAKQAPAAAEgBQAKgCABgHQAJADgFAHQgFAHgJACIAVATQANAKAQABQAFgBAEgKQAEgJAHAAQASgagcA4QABAMAOAHIAYALQAQgFAJgZQAMgjADgFQgdgMgfgbQgfgigSgQQgjAOABgCQAMgOAMgSIAUAAIATgbQAMgNASAAQgFAPgOAJIgeAQQACAWAaAUQAaAUAFASQAJAAAKAFQAMAGAJgBQAGAAACgIIACgMQAFAEAJAaQAHAUATgBQAAAQgRgIQgQgIADgKQgMAKgKAXQgOAfgEAGIAHANQAGAGAHABQASAMgQgFIgWgHQgPAGgEANIgLAfQgPgGAKgRg");
	this.shape_164.setTransform(-59.4,64.5,0.334,0.334);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgMAYQACgEAFAAQAAgWgUgHQABgFAKgEQAJgEAAgHQAHACgCAFQgGAJABAEQABAHAJACIATAAQAIATgTAAQgUAAACALQgIgBABgFg");
	this.shape_165.setTransform(-70.3,60.7,0.334,0.334);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgFAEQAFgQgIgMQAMAHAEAQQAEAPgLALQgKgIAEgNg");
	this.shape_166.setTransform(-81.3,60.5,0.334,0.334);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgDgCQAIgNAPABQACAQgOAGIgbAHQAEgCAMgPg");
	this.shape_167.setTransform(-21.5,59.8,0.334,0.334);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgIgGQARgIAHAOQgBAIgEgCQgFgBAAgFQgFAAgCACQgBACgBAGQgXgJASgHg");
	this.shape_168.setTransform(-76.1,59.3,0.334,0.334);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgCALQgPgPADgOQAJAAAFAQQADAOAMgBQgBAIgEAAQgFAAgHgIg");
	this.shape_169.setTransform(-78.4,59.6,0.334,0.334);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_170.setTransform(-94.9,59,0.334,0.334);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgCAFQgJgLgIAAQACgKAIAFQAIAFABAJQAJgIAFACQAGADAAANIgHABQgKAAgFgJg");
	this.shape_171.setTransform(-27.8,58.9,0.334,0.334);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgCAUQAAgJgGgLQgGgKACgJQADAFASATQAMAPgSAAIgFAAg");
	this.shape_172.setTransform(-73.8,59,0.334,0.334);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_173.setTransform(-73.2,58.3,0.334,0.334);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAEADIgNgDQgLgCAFgEQAHgGAQAMQAMAJgDAAQgCAAgLgGg");
	this.shape_174.setTransform(-45.3,57.9,0.334,0.334);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgNANQgFgFABgHQACgTAhAEQACAGgFABIgHADQgLATACAAIgGABQgDAAgDgDg");
	this.shape_175.setTransform(-69.1,57.8,0.334,0.334);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgCAHQgIgLgJAAQgBgPAPALQAPALAAgRQAGgCACAEQACACAAAGIAAATIgHABQgKAAgFgJg");
	this.shape_176.setTransform(-46.8,56.8,0.334,0.334);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgcAkQgCgKABgXQgKgPAAgOQgMgUAFgFQAEgEANATQgDAPAIAPQAJANgEAQQArgGAQghQAMAMgGAHQgEAFgRAHQgnAQAFAWQgOgBgFgQg");
	this.shape_177.setTransform(-48.8,58.2,0.334,0.334);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgIAOQgFgEgGAAIAAgTQAJABAKgGQAKgGAKABQgBAEgPAKQgJAHAFASQgCgBgGgFg");
	this.shape_178.setTransform(-69.5,56,0.334,0.334);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgMAIIgBgRQAPACAEgMQAOABgKAPQgNATAAAEQgHgBgCgLg");
	this.shape_179.setTransform(-16.3,55.7,0.334,0.334);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AhAgQQAkgUAnAGQAtAGAJAlIhSATIgEAAQguAAADgwgAgsADQAHAPAUAEQAUAEAMgNIAAgdIgogBIgBAAQgXAAAFAUg");
	this.shape_180.setTransform(-100.4,54.9,0.334,0.334);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgGAdQgmgCgSgRQAFgQAYgLQAXgLAZgBQAcAAAMALQAPANgNAZQgWAKgcAAIgNgBgAAEgSQgUAFAEAXQAKAKATAAQAVAAAJgKIAAgdIgNAAQgYAAgGABg");
	this.shape_181.setTransform(-2,53.7,0.334,0.334);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("Am8BKQAHgLgMgHQgaAIgQADQgeAFACgaQAZAKAsgOQAqgOATgWQgEgOgcgNQgbgMgBgUQAUgMgdgHQgcgGgXAFQADgNAaABQAlADAEgBQAAAdAVAUQAMALAbAUQA8gMBrABICPABQBggFC8AEQDNAEBkgDQgEAQgZgBQgTgCAIAkQgFgEgIgSQgHgOgKgDQgJgBgKAFQgLAGgKgBQgMgCgDAFQgEAGAJABQgDAPgIgMQgMgQgHADIg8AAQgLgDgFAHQgDAEgBAMQgbgQgmACQgrAEgWAAQimgFhWABQiXABicANQgPAEgJAWQgNAegDAEQgLgDAGgJg");
	this.shape_182.setTransform(-84.2,54.8,0.334,0.334);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgZAWQgEgGANgKIAUgNQAogeggAeQggAegEAAIgBgBg");
	this.shape_183.setTransform(-48.6,52.2,0.334,0.334);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAAgJQAHgFAEAEQAEAEgFAGQgHAIgPAEQAFgPAHgGg");
	this.shape_184.setTransform(-56.4,52.2,0.334,0.334);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQgBgEAHAIQAHAIAAAGQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQgBAAgEgHg");
	this.shape_185.setTransform(-52.5,50.8,0.334,0.334);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_186.setTransform(-17.8,50.3,0.334,0.334);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_187.setTransform(-20.1,50.3,0.334,0.334);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgIABQAPgRAAgDQANACgKAOQgNASABAFQgSgGAMgNg");
	this.shape_188.setTransform(-28,50.6,0.334,0.334);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgSADQAHgVAWACQACAQgMADQACAHAEgBQAEgBAAgFQARAOgTAAQgSAAgJgOg");
	this.shape_189.setTransform(-32.5,49.6,0.334,0.334);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgHALQAAgUgLABQACgJAJAAQAIABAAAIQAJACABgMQAMgMgGAQQgIAaACAJQgGADgEAAQgIAAAAgNg");
	this.shape_190.setTransform(-23.8,48.6,0.334,0.334);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgQAIQAFgDAKAAQABgFgDgCQgCgCgGAAQABgHAKgCIASgBQAEAOgNAGQgTAHgBACQgLgEAGgDg");
	this.shape_191.setTransform(-83.8,48.1,0.334,0.334);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgNgDQANgTASAJQAJASgTABQgUAAABAKQgQgBAOgSg");
	this.shape_192.setTransform(-14.7,47.8,0.334,0.334);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgiA2QAPgTABgIQABgNgbAAQAMgLAZgmQAYgdAcATQAEAPgOAKQgOAJAEAPQgJAAgLgFQgJgGgKACQABAPAHAbQABARgYAAIgFAAg");
	this.shape_193.setTransform(-71,49.2,0.334,0.334);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgIASQgGgHAHgHQADgDAFgCQASgggNAeQgIAWgFAAIgBgBg");
	this.shape_194.setTransform(-67.2,47.4,0.334,0.334);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_195.setTransform(-98.6,46.9,0.334,0.334);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgTAPQABgHAKgCIASgBQgBgGgJgCIgTgBQAEgZASALQASALgBAWQgLAAgLAGIgDABQgGAAgIgHg");
	this.shape_196.setTransform(-11.8,46.8,0.334,0.334);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FF00FF").s().p("AgTAeQAMgKgHgUQgHgTAMgKQAIABgCAEQgBAFgFAAQACAHAHgDQAMgGAIACQgHAPACAUQgCAOgeAAIgCAAg");
	this.shape_197.setTransform(-16.1,46.3,0.334,0.334);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgPAuQgFgQgJAAQAGgHASgOQAKgLgYgHQgCgMAIgMQAIgLgEgPQASAGAKAKQALANAAAVQgUAQgFAIQgJARAEAcIgBAAQgKAAgEgOg");
	this.shape_198.setTransform(-27.5,47,0.334,0.334);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AANAYQABgRgPgHQgXgMgCgDQAHgWAgAhQANALABAJQABAJgKAAIgFgBg");
	this.shape_199.setTransform(-3.9,45.2,0.334,0.334);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FF00FF").s().p("AgEBBQAIgUgNgHQgQAXgWgLQgVgLgBgfQAhgEgGgbQgCgKgFgIQALgJAJAAQAJAAALAJQACALgGAFQgEACgMACQADAPAKAQIAQAcQAPABgLgbIgDgMQAAgBAJAJQALABgIgSQgIgRAZAFQAEgSgGgPQgIgSAAgJQAVgIAHADQAGACAQANQgBAHgEgBQgFgBAAgFQgQADAIAMQAMAQgEAJQgJgCgIAFQgIAGgFABQARASgYAgQgTAcAaALQgCATgNgEQgOgEgBAJQgNgFAJgSgAhFg9QADgVANAMQAMANgIAQQgHgMgNgIg");
	this.shape_200.setTransform(-30.5,47,0.334,0.334);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgFATQgQgPAIgSQAPACAEgMQAJgCABAMIAAATQgDgBgGgEQgFgFgFABQgCAKAFAFQAEACAMACQgDALgHAAQgFAAgGgHg");
	this.shape_201.setTransform(-96.8,44.8,0.334,0.334);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgFApQADgRgLAQQgJgDAFgIQAFgHAJgCQgEgGgJAAQgJAAgIgOQgHgLAMgQQAIgLgNgBIAOgMQAIgGgCgMQAUAIAHArQAJAvANALQgGADgRANQgNALgNADIAIgdg");
	this.shape_202.setTransform(-86.8,46,0.334,0.334);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgTgYQAJgCABAMQAJACAAgMQAIABgCAFQgBAEgFAAQgBAMAFADQAEADAMABQgBAFgKAEQgJAEAAAHQgVgMACglg");
	this.shape_203.setTransform(-15.5,44.1,0.334,0.334);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgJAJQgMgcAiABQgEAJgDAEQgFAFgHABQAHARgCABIgBAAQgDAAgEgKg");
	this.shape_204.setTransform(-99,43.9,0.334,0.334);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgKAGQADgMgHgNQAMgDAFALQAFALAHAAQgBAFgKAEQgIAEAAAHQgHgEABgKg");
	this.shape_205.setTransform(-74,43.6,0.334,0.334);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AAAARQgLgGgIACQgEgiArAFQgBAEgKAFQgJAEAAAGQAAAFACADIAIACQgBAFgFAAIgEgBg");
	this.shape_206.setTransform(-94.9,43.2,0.334,0.334);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAAAQQgMgQgCAAQABgFAKgEQAIgEAAgHQAIABgCAFQgBAEgFAAQgCAPAMAEQgEAMgEAAQgDAAgEgFg");
	this.shape_207.setTransform(-5.9,43,0.334,0.334);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAIBCIgcgOIAOgLQAHgHgBgMIgOgMQgGgFAKgDQgBgGgKgCIgTgBQgBgyAygKQgEATgBAWQAAARgEALQABALAZANQAUAKgHAaQgNAGgKAAIgIgCgAAVAsQgGAEAEAEQACACAGgEQAGgEgEgEIgCAAQgCAAgEACg");
	this.shape_208.setTransform(-84.9,44.6,0.334,0.334);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgJAZQgBgGADgCQACgBAFgBIgMgLQgJgHACgLQAPAAAEAAQAJgCABgIQAIABgCAEQgBAFgFAAQAAAIAFAKQAGAMgBAJg");
	this.shape_209.setTransform(-10.4,42.5,0.334,0.334);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgnAkQAfgBgEgRQgKgmADgNQAIAAAJAMQAHAMAPgEQgSgVgGgLQgNgUARgSQAPgEAHALQAJANAJAAQACAdgbAvQgXArAIAUQgBAIgOABQgRAAgHABg");
	this.shape_210.setTransform(-24.8,45.1,0.334,0.334);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgSAGQAGgSACgMQAfgDgCAgQgQgJgNAAQAFAIACAEQADAIAAAJQgUgEACgPg");
	this.shape_211.setTransform(-97.2,42.5,0.334,0.334);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AANAMQgRgCAEgYQgFAAgCAHIgCAMQgIAAgKgMQgHgLgPAEQABgFAKgEQAJgEAAgHQAOgFATAYQAPASALgRQAJABgFANQgDAOATABQgIASggACQAOgWgLgBg");
	this.shape_212.setTransform(-13.8,43.1,0.334,0.334);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAPBBQAIgXgQgOQgPgOAEgSQgFgGgLgBQgWAAgMgDQAKgKgFgKQgIgPADgPQAggEANAYQADAFALAsQAMADAEgHQADgDABgMQAUACgFAPQgFAPAUgDQgIAEgIAZQgGAVgQAAIgCAAg");
	this.shape_213.setTransform(-19.6,46.8,0.334,0.334);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("Ag6AWQAPgrgFgYIAUAAQABgGgDgCQgCgCgGAAQAEgPAKANQANASAMgGQgJAKACAOQACAOAPACQAAgUAPAHQAJAEAaASQABADgRASQgMANASAGQgFAMgIgFQgJgFACgMQgIAHgHgBIgPgGIAAgaQgBgMgIgBQgIAHgHAbQgGAbgJAIQgegPAKgbg");
	this.shape_214.setTransform(-20.8,43.2,0.334,0.334);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_215.setTransform(-7.7,41,0.334,0.334);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgVAzQgHgIgLACQgDgNAKgFQAMgGABgGQgDgJgWgQQgSgNADgVQAMACADgGQAEgGgJAAQANgXASAeQASAfgTAMQABAEANAPQAGAIgKAMQAPgBADgZQAEgcAHgFIAoAAQAFAcgPASQgOASgQgPQgIAFgJANIgMAWIgMgOgAglgWQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADg");
	this.shape_216.setTransform(-80.2,42.1,0.334,0.334);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_217.setTransform(-98.2,40.3,0.334,0.334);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgOAdQgBgGADgCQACgCAGAAQAAgGgHgCIgNgCQgCgKAGgFQAEgDAMgBQABgGgDgCQgCgBgGgBQACgOANALQAUAOAEgBQgRAMAEADQAMAJABAPg");
	this.shape_218.setTransform(-12.3,40.7,0.334,0.334);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgXAYQgDguAqgDQgKAQAAANQAJACABgLQARAFgTAPQgOALgMAAQgFAAgGgCg");
	this.shape_219.setTransform(-21,39.8,0.334,0.334);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AAEANQgLgTgMAGQABgEAKgEQAIgEAAgHQAHABgBAEQgBAFgFAAIAHALQAGAGAHACQgEAKgFAAQgEAAgDgHg");
	this.shape_220.setTransform(-7.1,39,0.334,0.334);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AALA/QgLgVgOACQgBgJAGgLQAGgLgBgJQgNgFgMAMQgNAMASABQgQAHgIgTIgQglQBAgOAZgkQAKAIgFAPQgCAFAbgIQgJAJACAFQADAGAOAAQgBAJABAVQgCAPgSgGQgCgFAEgCQACgCAGAAQgDgIgIADQgMAGgHgBQgCgJAFgIQAHgIAAgFQgGgCgCAEQgCACAAAGQgGgBgCgHIgCgMQgggDADAhQABADAOALQAKAGgGATIALgOQAHgIAMACIAIAfQAFATgDAUQgHACgGAAQgOAAgHgNgAgggNQgGAEAEAEQACACAGgEQAFgFgDgDIgCgBQgDAAgDADg");
	this.shape_221.setTransform(-17.9,41.5,0.334,0.334);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_222.setTransform(-9.1,38,0.334,0.334);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AABAaQgRgRgDABQAQgMgDgDQgMgKgBgOQAJAGAEABQAFABABgIQAHABADAOQABAOAJAAQAAAGgIABIgMADQAAAGAHABIANADQgEAKgGAAQgEAAgFgEg");
	this.shape_223.setTransform(-11.8,38.6,0.334,0.334);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAEgCQgOAHgCgBQgBgCAIgOQANgEADAQQADAOgCAAQgBAAgHgQg");
	this.shape_224.setTransform(-65.3,38.1,0.334,0.334);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgLAOQgLgPgHACQAGgJAQgEIAbgGQgCAQAMADQAAAGgYgIQgTgGANASQgBAIgDAAQgDAAgEgFg");
	this.shape_225.setTransform(-63.2,37.9,0.334,0.334);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgCgKQANACAJAJQADAEgOABQgTABgJAEQgBgYASADg");
	this.shape_226.setTransform(-58.5,37.2,0.334,0.334);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgfBLQACgQAPgOQgHgKgOADQgNADgGgQQgDgNALgEQAMgHAAgFQgJgMgVgIQgCgJAJgPQAEgHgVABQgCgUARgLQAXgOACgFQAJAXALAzQALA0AIAXQAQgGABgQQAAgSANgJQANAKAbgBQgBAGgLARQgJANABAOQgcgSgOAZQgXApgEACQgTgKACgUgAgsgYIAUAAIAAgUIgUAAg");
	this.shape_227.setTransform(-87.4,40.5,0.334,0.334);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgKAaQgIgIgLACQACgGAUgQQAPgMgIgZQAQAKAOAAIgFAJQgFAFAAAGQgBAFADADIAIABQgBAHgEgBQgFgBAAgFQgTAFADALQAEAQgIAIIgKgOg");
	this.shape_228.setTransform(-44.5,37.6,0.334,0.334);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAfBeIAFgJIgIAKQgJgLgGgbQgGgeALgCQgBgGgHgCIgLgCQgCgJAEgHQAHgIAAgFQgBgIgJgBIgTgBQgGADgOAVQgLARgTgCQgKgTAHgKQALgRACgNQAMgDALAFIARAIQAJgCgBgJQAAgJgIAAQADgNASgQQAQgQACgPQAXAMgHAcQgGAagUAOQABAJAOAAQAOAAABgJQAMASgFARQgCALgPAXQABAJAOAAQAOAAABgJQAKAHACAfQABAhAHAJQgGgBgCgHIgCgMQgYgBgGAVIgBAAQgPAAAJgVgAgxgWQgGAEAEAEQACACAGgEQAFgFgDgDIgCgBQgDAAgDADg");
	this.shape_229.setTransform(-91.8,39.8,0.334,0.334);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgKAEQgFgFAKgDQAGABADgBQAKgFgCAGQgCAFgGADQgEACgDAAQgEAAgDgDg");
	this.shape_230.setTransform(-96.4,36.4,0.334,0.334);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgOAUQALgFgJgTQgGgQAXABQgIALACAHQABAHAPAEQABAGgDACIgIACg");
	this.shape_231.setTransform(-10.9,36,0.334,0.334);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgOAEIgKgJIAFAEQASAMAGgHQAJgJgDgFIAOAOQgMAHgKAAQgJAAgIgHg");
	this.shape_232.setTransform(-62.7,35.8,0.334,0.334);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgGApQgRgNATgLQgBgGgHgCIgMgCIAAgxQANAEADAaQACAVAfgCQABAMgPAFQgPAEAAAJQAHAGgCAAIgHgCg");
	this.shape_233.setTransform(-87.1,36.7,0.334,0.334);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAAAKQgUgKAHgNIAdAAQgNAQANADQABAIgGAAQgEAAgHgEg");
	this.shape_234.setTransform(-43.3,34.8,0.334,0.334);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgJAcQAFgJAAgEQAAgGgIgCIgMgCQAAgFAHgCIANgCQgLgQABgOQAJAAAJAFQALAGAKgBQgEAUgFAJQgFALgPATQgIgCADgFg");
	this.shape_235.setTransform(-92.1,35.5,0.334,0.334);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_236.setTransform(-64.4,34.1,0.334,0.334);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgCAEQgHgHgIgBQADgIAFADQAIAGADgBQAJABABgLQAIACgEAIQgGALACAIQgGgCgIgJg");
	this.shape_237.setTransform(-66.6,34.1,0.334,0.334);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgKAPQgGgGAOgYQALgCADAFQAEAGgJABQgJAWgGAAIgCgCg");
	this.shape_238.setTransform(-68.4,34.2,0.334,0.334);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAFAIIgGgIQgfgSAdANQAaAKgFAEQgDACgDAAQgEAAgDgDg");
	this.shape_239.setTransform(-76.1,34,0.334,0.334);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AADAVQgDgFAAgLQgGgCgCAEQgCACAAAGQgPgFAOgJQAQgMgFgNQAIAFAEAQIAHAcIgGAAQgHAAgDgEg");
	this.shape_240.setTransform(-94.9,34.5,0.334,0.334);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgMAGQACgBAGgBQABgFgDgCQgCgBgGgBQADgPAJALQALAPAGgCQgBAHgKACIgSABQgBgGADgCg");
	this.shape_241.setTransform(-10.6,33.8,0.334,0.334);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_242.setTransform(-34,33.7,0.334,0.334);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_243.setTransform(-61.5,33.6,0.334,0.334);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQgBgEAHAIQAHAIAAAGQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQgBAAgEgHg");
	this.shape_244.setTransform(-38.8,33.5,0.334,0.334);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_245.setTransform(-95.9,32.6,0.334,0.334);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgDAEQgEgIgHAAQABgIAFACQAEABAAAFQAIACABgMQAGAAABAHIADAMQgFgBgDADQgCACAAAGQgFgBgDgKg");
	this.shape_246.setTransform(-63.7,32.1,0.334,0.334);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgIAGQgGAAALgGQAJgFAEAAQAEgCgIAHQgHAHgFAAIgCgBg");
	this.shape_247.setTransform(-6.6,31.3,0.334,0.334);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgIABQAPgQAAgEQANABgKAPQgNATABAEQgSgGAMgNg");
	this.shape_248.setTransform(-37.7,31.6,0.334,0.334);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgJAVIAMgCQABgIgFgLQgGgKABgKQgfgMAbAFQARADgEAOQAAAGAHACIANACQACAQgNAGIgcAHQAAgGAHgCg");
	this.shape_249.setTransform(-8.2,31.6,0.334,0.334);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAAAfQAKgfgVgHQgdgEgJgHQgBgNAUABQAcADACgBQACAZAcAAQAYAAgEAig");
	this.shape_250.setTransform(-52.2,31.3,0.334,0.334);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_251.setTransform(-73.8,30.3,0.334,0.334);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgIgHQAPgQAJATQgCAGgEgBQgEgBAAgEQgGAAgBAGIgCANQgUgHAPgPg");
	this.shape_252.setTransform(-64.7,30.1,0.334,0.334);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgRAGQAGgMAAgNQALgDAGALQAFALAHAAQgBAIgEgCQgFgBAAgFQgGAAgCAHIgBANQgSgFACgJg");
	this.shape_253.setTransform(-71.5,30.3,0.334,0.334);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AANAHIgNgKIgJAFQgJAGgBgCQgDgFAFgCQADgCAFAAIAKgGQALgDAIASQAAABABABQAAABAAABQAAAAAAAAQAAABgBAAQgCAAgFgEg");
	this.shape_254.setTransform(-36.1,29.7,0.334,0.334);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_255.setTransform(-8.1,29.3,0.334,0.334);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAHAJIgTgPQgQgNAVALIAYALQAFALgFAAQgCAAgIgFg");
	this.shape_256.setTransform(-92.8,28.2,0.334,0.334);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgDAAQAYgOAGgKQAPANgcAPIguAVQAGgPAXgKg");
	this.shape_257.setTransform(-9.7,28.1,0.334,0.334);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgWAFQACgIAFADQAJAFAEAAQAFgBABgGIADgMQAPADABAHQABAGgJAGQgMAHgIAAQgKAAgHgKg");
	this.shape_258.setTransform(-68.8,27.8,0.334,0.334);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgKAQQgOgTAAgOQAEABAFAFQAFAEAGAAQAFAAABgHIADgNQADABAGAFQAGAEAFAAIAAATQgWgCgDAEQgFAFAKANQgBAGgDAAQgDAAgIgMg");
	this.shape_259.setTransform(-73.4,28.2,0.334,0.334);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgbAQQgEgYALgQQATgFAKAKQAPAOAFABQgFALgIgFQgJgDACgNQgPAKgOAAQgCAegCAAQgCAAgBgKg");
	this.shape_260.setTransform(-24.8,27.8,0.334,0.334);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_261.setTransform(-40.8,27.3,0.334,0.334);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgbABQADgRAIgIIAUANQAKALgBAPQAJACABgMQAPARgYgCQgdgDgBAIQgQgCAFgWg");
	this.shape_262.setTransform(-52.9,27.8,0.334,0.334);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgHAdQgagDALgTQAXAKgBgKQAAgGgMgXQADAAAGAFQAEAFAGAAQAJABABgLQAKgJAAAEIgIAQQgPAeANgCQACAMgTAAIgHAAg");
	this.shape_263.setTransform(-66.7,28,0.334,0.334);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("Ag7BWQAGgIgBgEQgJgTgfgBQAKgUAVARQAUARAJgOQgJgTgfgBQAFgRAQAIQAXALAGgCQAEgQgNgFIgVgJQgLgNAVAJQAhAOAHAAQABgSgUgIQgcgKgDgDQAKgPAUARQAYAWAPgEQABgTgTgIQgcgKgDgDQALgJAeASQAeAPASgYQgEgPgWgJQgdgNgEgDQgLgOAfANIAxAVIAeAAQgtAXgoAuQgRAWgvBEQgIgDADgFg");
	this.shape_264.setTransform(-93.1,30.2,0.334,0.334);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgXAMQgSgOgSABQAGgKAagCQAdgDAIgFQAIgIgBACQAAACgHAHQgSASgLgBQAKAZAWgUQAggaAPABQAAARgaAHQgZAIABARQgPAAgSgQg");
	this.shape_265.setTransform(-11.1,27.3,0.334,0.334);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgMAVQgPgPADgOQAfAEgCgYQASAIACAfQgIgHgHABIgOAGQgBAGADACIAHACQgBAIgEAAQgEAAgIgIg");
	this.shape_266.setTransform(-75.1,25.9,0.334,0.334);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FF00FF").s().p("AgLAyQgTgOAQgRQgIgFgfACQgTACgCgcQAGgMAPAIQAOAIAFgOIAVATQANAKgEAUQAFgCAIgNQADgGANALIAMgNQAGgIAMACQgSgRgOgFQgSgHgTAJQAAgJAFgLQAGgKgBgKQANANAiATQAdATADAcQgagPgHAPQgEAJgDAfIgOACQgUAAgMgLg");
	this.shape_267.setTransform(-50,26.6,0.334,0.334);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgNAdQAIgLgBgHQgCgIgPgDQABgJAVgDQATgDgCgPQAMAFgFAIQgFAJgMgCQgBAJABAVQgBALgJAAIgJgCg");
	this.shape_268.setTransform(-67.7,25.6,0.334,0.334);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AABASQgKgIgPAFQABgLAOgIQAMgKACgKQAQADgJAMQgLAPAEAJQAJgJAFACQAGADAAAOIgEAAQgJAAgLgHg");
	this.shape_269.setTransform(-28.3,25.1,0.334,0.334);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgDAOQgIgKgSAGQACgMALgKIAQgRQAIADgDAEQgFAJAAAEQABAHAKABIATABIgOAMQgIAGACAMQgEgBgJgPg");
	this.shape_270.setTransform(-30.5,25.3,0.334,0.334);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgKAJQgIgJgVAKQABgEAPgJQAKgIgGgSQANgDAFAKQABAEAAASQAGABAUgWQAOgPAAAbQgRgCgGANIgHAcQgJgDgLgSg");
	this.shape_271.setTransform(-32.8,25.3,0.334,0.334);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAEAIQgQgRgMAFQAFgQASAKQAXAPADAAQgEAKgGAAQgFAAgGgHg");
	this.shape_272.setTransform(-90.4,24.4,0.334,0.334);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgUgcQAhgdAqAXQAAAoglARQgGAEhCASQABgtAhgcgAgOAPQAOAEAMgIQAMgIALACQABgbgLgMQgrACAEAvg");
	this.shape_273.setTransform(-11.6,25.1,0.334,0.334);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgTAPQgBgGADgCQACgBAGgBQABgFgDgCQgCgCgGAAQAFgIAJACQANADAMgHIAAAdg");
	this.shape_274.setTransform(-51.5,24.1,0.334,0.334);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQgBgEAHAIQAHAIAAAGQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQgBAAgEgHg");
	this.shape_275.setTransform(-86.9,24.1,0.334,0.334);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AADALQgYgSgDgBQAJgSAPARQATAUAGAAQgCAHgGAAQgFAAgJgHg");
	this.shape_276.setTransform(-89.4,23.9,0.334,0.334);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AAAALQgMgRgCABQADgQAJAMQALAPAGgCQgEALgEAAQgDAAgEgEg");
	this.shape_277.setTransform(-72,23.8,0.334,0.334);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgIAOQgGgFgFABIAAgTQAJgCABALQAJgDACgDQAGgFACgIQASAIgPAIQgTALAGAMQgCgBgGgFg");
	this.shape_278.setTransform(-74.2,23.6,0.334,0.334);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAAgJQAHgFAEAEQAEAEgFAGQgHAIgPAEQAFgPAHgGg");
	this.shape_279.setTransform(-13.3,22.9,0.334,0.334);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AABAOQgHgKgSAGQABgEAFgFQAEgFAAgFQABgGgDgCQgCgBgGgBQACgJAFAEQAJAGAEgBQAIACABgMQAIACgDAFQgFAJAAAEQAAAGAHABIANACIAAAUQgGgCgCAEQgBACgBAGQgEgBgKgPg");
	this.shape_280.setTransform(-26.6,23.3,0.334,0.334);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AAMARIgCgMQgKgBgMAHQgGADgLgJQAAgIARgFQAOgEgCgMQAHABgBAFQgBAEgFAAQADAKAHAEQAJAGABgKQAGAAABAGIADANQgGgCgCAEQgBACgBAGQgGAAgCgIg");
	this.shape_281.setTransform(-29.1,23.1,0.334,0.334);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgBADQgDgLgPAOQgLgEABgCQAAAAAJgCQAUgHgJgOQAOgEAIALQAJANAIAAQgBAFgJAIQgIAIgCAIQgIgDgDgUg");
	this.shape_282.setTransform(-31.5,23.1,0.334,0.334);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AADALQgXgSgEgBQAJgSAPARQATAUAGAAQgCAHgGAAQgFAAgJgHg");
	this.shape_283.setTransform(-89.1,22.9,0.334,0.334);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgKAAQAQgMAAgCQAQADgMAIQgPALACAHQgTgGAMgJg");
	this.shape_284.setTransform(-13.7,22.1,0.334,0.334);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AADALQgPgUgHACQAJgUALAQQARAWACABQgCAHgEAAQgFAAgGgIg");
	this.shape_285.setTransform(-88.6,22.2,0.334,0.334);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgSAOQgNgEAcgGQAFADABgJIADgNQAQgCABAMQAAAMgRAHQgFACgEAAQgHAAgIgCg");
	this.shape_286.setTransform(-81.1,21.8,0.334,0.334);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQgBgEAHAIQAHAIAAAGQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQgBAAgEgHg");
	this.shape_287.setTransform(-68.9,21.5,0.334,0.334);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_288.setTransform(-88.2,21.2,0.334,0.334);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgLAOQACgEAFAAQgIgIACgGIAGgPQAUAGgFALQgEAFgLARQgIgBABgFg");
	this.shape_289.setTransform(-19.6,21.9,0.334,0.334);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgNAKQANgUAJACQAfgtgbAtQgMAUgKgBQgOAUgBAAQgBAAAMgVg");
	this.shape_290.setTransform(-15.1,20.9,0.334,0.334);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgMAjQAGgVAAgFQAAgGgaACIAGgbQAHgOARACQgDAeAIgEQAGgCASgOQAKAEgFADQgGADgJAAIAGAnQACARgIgbIgMANQgFAHgJAAIgDAAg");
	this.shape_291.setTransform(-24.7,21.1,0.334,0.334);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_292.setTransform(-15.4,20,0.334,0.334);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AAnANQgCgNggAFQAAgFAHgCIANgCQgKgUgOAOQgQASgJgDQAKARAAANQgQgGgKgOQgGgLgSABQAKgCAHgUQAGgTARACQgIAIACAHIAGAPQAWgJAHgVQASgCAMARQAMASASgDQAAAIgGALQgGAKACAKQgOgEgCgSg");
	this.shape_293.setTransform(-31.3,20.8,0.334,0.334);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AAFALQgSgXgJAAQgNgSAdASQAcARAFAMQgDAFgEAAQgGAAgJgLg");
	this.shape_294.setTransform(-86.8,20.4,0.334,0.334);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FF00FF").s().p("AhZAKQAIgHAjgUQAbgQAKgQIARASQANAIgBgaQAGABAJAJQAIAIAHACQgeAEAYAOQAYAMAWgBIAAAoIgyAAQASgSgQgNQgXgQABgMQgYANgFAAQgLABALgYQgQAKgOAAIAQAiQACAMgSAXIgHAAQgoAAgDgog");
	this.shape_295.setTransform(-49.8,20.9,0.334,0.334);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgCAKQgEgGgBABIgCATQgQgKgOAAQACgMALgKIARgRQAIABgCAFQgBAEgFAAQAEAGAOgBQATgDAMAIIgNALQgJAGACAMIgGACQgKAAgGgQg");
	this.shape_296.setTransform(-53.5,20.1,0.334,0.334);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAEAJQgjgFATgMQABAAAIAFQAIAEACAAIABgJQAOAKgEAEQgBADgHAAIgGAAgAAHgIIABAAIgBAAg");
	this.shape_297.setTransform(-38.1,19.2,0.334,0.334);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_298.setTransform(-15.8,19,0.334,0.334);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgQATQgRgQAEgSQAPAPAKgKQANgQALABQgCAQAMAEQgBAHgEgCQgFAAAAgFQgOgEgEALQgCALAKABQgFAMgHAAQgHAAgHgHg");
	this.shape_299.setTransform(-77.6,19.5,0.334,0.334);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_300.setTransform(-16.4,18.6,0.334,0.334);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgPAZQADgQgQgHQgKgDANgNQAJAPAMACQAMACgEgdIAVANQAKAKgBAQQgDgBgGgFQgGgFgFABIgMANQgFAHgJAAIgDAAg");
	this.shape_301.setTransform(-75,19.1,0.334,0.334);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AglAJIARghQAJgCAOAJQAHAEgBgVQAGABAJAJQAIAIAHACQgBAGgJAIQgIAHgCAIIgdgdQgNgBACASQACAdgBADQgXgFAGgVgAAVgMQgGAEAEAEQACACAGgEQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_302.setTransform(-55.8,19.1,0.334,0.334);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgPAOQgEgJgHAAQAFgCAMgPQAJgNANABQgOAMAWATIAGAGIgYgIQgFAAgCAHIgCANQgFgBgEgKg");
	this.shape_303.setTransform(-26.2,18.4,0.334,0.334);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgSAaQgRgRgEABQACgIAEABQAEACAAAFQAKgBACgRQACgTAGgCQAQgDALAPQAMAQAKABQgCASgegCIgNgCQgDABAIAFQgDALgGAAQgEAAgFgFg");
	this.shape_304.setTransform(-51.5,18.6,0.334,0.334);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgPAeQAPgGgKgQQgKgPgFARQgNgBAKgOQAOgUgBgEQAKgFACAaQABAJABAAQABACAEgMQAJACAAAIQgBAJgIAAQAAAGAHACIANACQAVAIgYACIgVABIgPgBg");
	this.shape_305.setTransform(-28.3,18.3,0.334,0.334);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_306.setTransform(-57.8,17.2,0.334,0.334);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgOAvQgMgSgDABQAJgMAUgIQgMgPAMgPQAIgNgIgGQAGgTAIAMQANASADgBQgMAHgJAWQgMAXgGAHQgBAGADACIAHACQgDAMgEAAQgDAAgEgFg");
	this.shape_307.setTransform(-84.2,18.6,0.334,0.334);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgYAPQgCgMAGgDQAGgDAAAIIAMgMQAFgJAMACQgCAPAMAEQgBAIgEgCQgFgBAAgFQgJAAgJAFQgKAFgIAAIgDAAg");
	this.shape_308.setTransform(-79.1,17.1,0.334,0.334);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AACAOIgBgSQgFgBgCADQgCACAAAFQgQgEAMgHQAPgMgCgGQANAHAEAQQAEAPgLALQgIgBgBgKg");
	this.shape_309.setTransform(-19.5,17.1,0.334,0.334);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgdACQAKgUADgLQAIABgCAFQgBAEgFAAQAEAGAOgBQATgDAMAIQgBASgUAJIgmAMQgKgKAHgSg");
	this.shape_310.setTransform(-53.3,17.3,0.334,0.334);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgMAMQgHgLgPAEQAEgOAIgCQAHgCALAJQAFgBACgGIACgNQAGACAJAIQAHAJAIABQgCAHgFgDQgJgFgEABQgIABgBAJIgBATQgHAAgKgNg");
	this.shape_311.setTransform(-74,17.1,0.334,0.334);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgHAZQACgLgJgNQgIgKAFgPQAKgFAIAXQAGAQAFgOQAOgDgKATQgIAOgJAAIgGgBg");
	this.shape_312.setTransform(-26.8,16.1,0.334,0.334);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgVAGQgBgGALgEQAMgHAVACQgSAPgNADIgGABQgFAAgBgEg");
	this.shape_313.setTransform(-56.9,14.9,0.334,0.334);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AASAUQgQgLgLAHQgCgDgGgNQgEgMgIgBQANgTARAUQAaAbADABQgBAHgEAAQgDAAgEgDg");
	this.shape_314.setTransform(-20.5,15.1,0.334,0.334);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgNAEIgBgSQAGABAIAKQAIAGAHACQgCAIgEgCQgEgBAAgFQgFgCgCAEQgCACAAAGQgIgBgBgKg");
	this.shape_315.setTransform(-36.6,14.8,0.334,0.334);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_316.setTransform(-58.5,14.6,0.334,0.334);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgLAQQgNgTAAgOQALAJAIgCQAGgCAEgPQAFABAEAKQAEAJAHAAQgCAIgUADQgMADAOAPQgBAGgDAAQgDAAgJgMg");
	this.shape_317.setTransform(-80.4,15.2,0.334,0.334);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgJAAQgFgGAEgEQAEgEAGAFQAIAGAEAQQgPgFgGgIg");
	this.shape_318.setTransform(-45.9,15.2,0.334,0.334);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgYAGQACgJAJABQAJABAAAHIAKgNQAHgIAMACQABAUgUAFQgGACgFAAQgLAAgIgIg");
	this.shape_319.setTransform(-45,14.4,0.334,0.334);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgJAEQgFgCgDAEQgCACAAAGQgPACALgQQAMgPgSAAQAIgQARANQAXAQALgDQgKAOAAAPIgKABQgVAAACgVg");
	this.shape_320.setTransform(-53.5,14.8,0.334,0.334);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgGAOQgEgJgHAAQgFgBgDADQgBACgBAGQgIgCAEgIQAGgLgCgIQAEABAGAFQAFAEAFAAQAGAAABgHIACgNQAigEgEArQgGAAgCgHIgCgMQgUAGAAAXQgEgBgEgKg");
	this.shape_321.setTransform(-73,14.7,0.334,0.334);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAIAVQgDgFgBgLQgQgDgDANQgOgCALgNQANgUAAgEQADAGAMARQALANADANIgGAAQgHAAgDgEg");
	this.shape_322.setTransform(-22.9,14.4,0.334,0.334);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgCARIgCgMQgFgBgDADQgBACgBAGQgSgGAMgMQARgRgBgEQAHABgCAFQgBAEgEAAQABAHAJABIATACQADALgKAFQgMAGgBAHQgFAAgCgIg");
	this.shape_323.setTransform(-28,14.1,0.334,0.334);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AACAWIgCgNQgQgDgDANQgTgJASgKQAWgMgCgIQAGgPADANQACANgLgBQAJAKAVAJQgBAFgKAEQgJAEAAAHQgGAAgCgHg");
	this.shape_324.setTransform(-25.5,13.9,0.334,0.334);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_325.setTransform(-29.1,13.2,0.334,0.334);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgFAAQgGAAgCACQgCACAAAGQgPgEAOgJQAQgNgFgNQAJgBAAAVQABASATgJQgLAQABAOQgMgJgHgVg");
	this.shape_326.setTransform(-30.6,13.9,0.334,0.334);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgEADQAKgNgNABQAOgUACASQABAPgIAQQgSgBAMgQg");
	this.shape_327.setTransform(-23.9,13.2,0.334,0.334);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgCAIQgKgBgEgGQgDgFAHgCQAKgCAUAIQgJAIgJAAIgCAAg");
	this.shape_328.setTransform(-57.8,12.3,0.334,0.334);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgTAPQgDgUAPAFQAPAFACgTQAUAHgSAMQgNAKgNAAIgFAAg");
	this.shape_329.setTransform(-76.9,12.4,0.334,0.334);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgKAJQACgFAFABQABgFgDgCQgCgCgGAAQABgIAFABQAEACAAAFQAIABABgLQAPADgLAJQgQALADAGQgIgCABgEg");
	this.shape_330.setTransform(-44.3,11.8,0.334,0.334);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgXAKQABgIAFABQAEACAAAFQAVgJAIgUQASAFgWAXQgLALgIAAQgJAAgHgKg");
	this.shape_331.setTransform(-29.7,11.6,0.334,0.334);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AAFAPQgSgNgBASQgJgCABgJQAAgJAIAAQABgFgDgCQgCgCgGAAQACgIAEABQAEACAAAFQAPACAEgMQAHABACAOQACAOAJAAQgBAKgHAAQgEAAgIgFg");
	this.shape_332.setTransform(-47.3,10.9,0.334,0.334);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FF00FF").s().p("AgCASQgegOADgTQAJgLAUAAQAUAAAKALQAEAIgMAPQgJAMARAEQgBADgFAAQgIAAgSgJg");
	this.shape_333.setTransform(-56.2,11.1,0.334,0.334);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAlAsQgZAAgUgSQABgFAJgEQAJgEAAgHQgBgEgFgFQgEgFAAgFQgGAXgggFQgfgFAKghQAFgMATAJQATAIAHgPQAJAJAPAaQAPASAegEQAGAmgeAAIAAAAgAAhAcQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgAgkgLQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADg");
	this.shape_334.setTransform(-52.9,12.7,0.334,0.334);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQgBgEAHAIQAHAIAAAGQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQgBAAgEgHg");
	this.shape_335.setTransform(-72.9,9.8,0.334,0.334);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_336.setTransform(-31.1,9.3,0.334,0.334);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgXAFQAEgHgKgBQAGgRAVAHQAdAKADAAQgCAPgOACQgNACgKgKQgFgCgDAEQgCACAAAGQgIgCAEgJg");
	this.shape_337.setTransform(-53.8,9.4,0.334,0.334);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgDAEQgKgMgBgQQAXAIAGApIgSgVg");
	this.shape_338.setTransform(-72,9.7,0.334,0.334);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_339.setTransform(-70.4,8.7,0.334,0.334);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AAIARQgHgGgHgSQgGgPAFAGQAFAGAFAMQAJARgCAAIgCgCg");
	this.shape_340.setTransform(-71.3,8.9,0.334,0.334);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgGAFQAGgJAAgGQALgQgDAQIgIAdQgKgFAEgJg");
	this.shape_341.setTransform(-32.8,8.6,0.334,0.334);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgIAEQALgVABgHQAQAFgLASQgOAXAAADQgMgBAJgUg");
	this.shape_342.setTransform(-33.9,8.7,0.334,0.334);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgBAKQgJgRABgLQAKAIAJAVQgBAIgDAAQgDAAgEgJg");
	this.shape_343.setTransform(-69.5,8.6,0.334,0.334);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AiUGaQAUgtgCgTQAFgZANggIAWg1QAHgbAehcQAXhIAKgwQAziDAShtQAeg0AKhEQAKgGACgWQAFgaADgGQAFgDAEgXQADgTASAFQARABABABQACABgGADQgUAKAGAOQgJADAAAXQgBAWgKACIgKA2QgIAegMAQQgIArgTA7IghBiQgKAjg4CiQgqB4gLBcQgOAJgKAWQgGAMgKAbQAAAOgBAFQgCAJgHACQgLAMABAcQgOgTAQglg");
	this.shape_344.setTransform(-41.8,25.8,0.334,0.334);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("Ag7AeQgGgLACgJIAdgPQAQgKAFgOQARAIACAMQAHgBACgLIABgSQAKATAJgGQAFgFAQgSQASALgUAKQgaANAIAPQgjgDgJABQgEABgfALQABANAggMQAdgKgDAdQgVgNgNANQgTAUgQAAQAAgIgGgMg");
	this.shape_345.setTransform(-32,60,0.334,0.334);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgfAqQgMgegLgHQACgDAagBQAYgBAHgOQADgSgRgMQgSgNADgRQA1AqAaA5QgKgBgKgOQgJgMgLgCQgHACgPAJQgNAJgOgBQACAMAPAQQANAQAAAQQgQgFgLgcg");
	this.shape_346.setTransform(-43,66.8,0.334,0.334);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("ADqGPQgCgNAEgKQAHgKABgHQgDgLgmACQghABAEgWQAJAAATAHQAPAHARgEQALgCAAgWQABgXAIgDQgJgTgfgBQgYgLAgAAQAgAAAAALQAKgBACgSQACgTAGgCQABgVgQgJQgHgEgcgGQAEgRANACQAFACATALQAiAVAFgnQACAZAJAPQAMAVAbAJQARABAJgKIAOgVQgSgXgfgSQgWgMgngRQhFg/huhJQh/hRg/gqQhGg0hyhLIi6h7QgBgGADgCQACgCAGAAQAGgBACgHIACgMQAdAbA2AjQBKAwANAKIBQA7QAxAkApAPQA4A3CRBiQCKBcA8BAIAeAAQAQAZApAbQAxAhAOAPQAHAPgSgPQgbgWgMACQgFABgEAJQgEAKgHAAQgDATAQAIIAbANQgGASgNgMQgRgRgEABQgQAGgHAVQgDAKgEAhQgBAMAUgBQAcgCADABQAJAIgMABIgeAAQgvADAUAmQgJAAABgMQAAgQgCgCQgJgNgTACQgjACgHgBQgLgCABAaQABASgLAAQgEAAgGgCgAEkFaQAWAHAUgEIAPgzQAIggAHgRQgWADgTgRQgUgSgTACQAFAPgIALQgJAMACAMQAGAFAbAHQAWAFAFANQgOACgUgJQgSgIgSAFQAFAPgIALQgJAMACAMIAEAAQANAAAVAHg");
	this.shape_347.setTransform(-74.4,40.3,0.334,0.334);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AzMQwQA0gmAEgEQAegSAUggQBsg9A+hFQAJACAHgGQAIgGAGAAQCkh3Cwh5QAGgBABgGIADgNQASAAAPgMQAWgQAFgCQgYgbgNgWQgRgdgGggQgLgCgNAIQgLAIgPgEQAJgSAfgCQADgPgIgPQgJgPAEgPQgQgEgOAJQgPAJgPgEQgGgWAZABIApABIgJggQgFgTAEgTIBuAAIAAAyQAjAIAggNQAigOgVgVQAFgKAVgBIAnABQAxACgOgqQANgEgDAYQgEAYAOgEQgIANgkgCQgwgDgIACQgBAkACAIQAFATAYgDQgPAOAIAWQAEAMANAWQACgCAjgaQAXgQAAgaQAXALAjgaQArghATgCIAAgoIhag9Qg0gkgcghQgZAMgGAgQgHAlgMAJQgBADACAcQABAUgMgBIAAg8IAfhEQATgrAUgTQgcgbgPgJQgegSgHAYQgEgcgIgRQgMgYgagKQgDARASAMQASAMgDASQgMADgEgHQgDgEgBgMIgegHQgYgGgGgQQAcgHgDgTQgDgQgWgSQAFgPAMAPQAPAVAIgBQAKgBAKgOQAJgOALgBQABgMgQgUQgKgOAPgOIgeAAQAVgRA0gPQA6gQATgMQhVkCg3ieQhOjhhIizIgggJQgTgEgTADQgBgVAJAEQAPAHAHgKQgDgIgOgZQgMgUgBgRIAsBEQAbAsAdgMQAmA3AMBLICEGJQBMDlA0CoQgFARgJgVQgKgVAEgPQgFABgPAOQgMAKgSgFQADAJASANQAKAGgLAWQAPgKAPAAQgBAFgKAEQgJAEAAAHQAGARAVgIQAegKADABQAFASgTADQgYADgCAGQABAOAJAUQAJAVABAOQAVAAAygOQApgMAmAGQAGAAABgIIADgMQAOASANAIQAWANABgdQAHAEALASQAJAQANACQAMAFAAgZQAAgZgMAFQABgCAPgFQAJgDAEgTQgJgMgUgIQAHgNALgDQALgDAKAJQgPgRgCgKQgBgLAIgWQAJgBAKAGQALAGAKgBQAIgVgcABQgbABAHgVQAKgLAOACQAOADACAQQAXgJAHgpQAQAEgIAWQgHAVgLADQAGAHATAIQATAHAGAIQACgBAPgWQAKgOAXAHQgCgUgNAFQgOADgBgIQgIACgIARQgGAQgSgFQACgRgMgDQAFgMAIAEQAJAGgCAMQAMAFAAgZQAAgZgMAFQAFgQASAKQAYAQADAAQgFgJgDgDQgFgHgHgBQAWgVAPAkQARAsAQABQAMgNgJgGQgPgGgIgFQgDgRAVgQQAQgNgOgOQgIABgBAKIgBATQgZgIAIgNQAQgaABgDQABgGgDgCQgCgBgGgBQAHgMAEAFQABACAFAPQAJAgAYgMQgSATANAUQAMAQAXAFQADgOgLgEQgEgCgSAAQAJgTAfgBQgCgKgJABQgJABAAAIQgQgEAKgPQAMgUgGgLQASADgEARQgCAOAcgEQgDAHgHANQgIAMgCAIQAXgCAHgUQAHgRANgBQgHARgQAcQgKASgHAbQgKgSgHACQgEAAgGAMQgQAjgRgBQABAGAJAIQAIAJACAHQAVgBgIgUQgHgVAYACQAIATgCALQgCAKgOAUQACgCAjgQQAYgJgBgXQA2gcAQgMQAkgZAOgjQADABAGAEQAFAFAGAAQAegSAUggQAvgUBFg2QBKg5AogTQALgVAngYQAngZALgUQAXgGAfgdQAfgeAZgFQgDgPAHgjQAEgUgSgKQAFgMAIAEQAJAGgCAMQATACAQgWQAPgVAUABQgGAMgjAgQgbAagCAeQgDAMAHAEQAEACAMACQhJA5j8CtQjMCNhvBjQgsAFgQAjQgSAAgQAMQgWAPgEACIASAbQAMAPAAASQASACAVgYQARgUAOAMQAAATgZAGQgeAIgFAHQARAnADAVQAOABANgJQAQgKAHgCQAEgPgIgMQgIgMACgLQASgFADATQADAXAGADQgPATgJAHQgPAOgVAAQAAAJAHASQAHAPgEASQAPAGAXgQQARgMAFAMQAGAVgUAAQgbgDgJACIAAA8QB0gJFCgBQFcgBCagJQgDAcgagFQgvgGgOADQhpAJkRABQlCgBiWABIAAAnQADAUARABIAJgdQAFgRAagEIgBAZQABAOAKABQgCAGgNgBQgKgCAFAbQgMgGgKAAQgNACgPgGQgJACgBANIAAAZQABAMAPAHIAYALQAIgFgKgOQgLgPANgQQAfAFgBgZQASAGANAFIATAJQACAbgUgIQgSgGgEgNQgBAIAGALQAGALgBAKQAPgKAPAAQgIAIgcAVQgXASgLANQgBAPALAPQALAPgBAPQgbAGgGgBQgPgCgCgXQgKABgCARQgCATgGADQADAQAMgIQARgMAIAEQABAJgCAVQACAQATgGQgJAQgagbQgZgbgKASQgFgIgEgdQgDgTgSgOQgJABgFAPQgEAPgMgBQAVAdArAbQAYAPA0AdQADgEAEgXQADgPAUgIQgDgKgIgFQgIgFgBAKQgQABARgUIAIgJIgJAIQgSgGAMgNQAQgSAAgDQAHANANAUQAJARgJAUQALgEAZgMQAVgGANAMIAAgeQAHABACAOQACAPAJAAQgNAHggABQgiABgVALQAFAUgIAMIgRASQAIALAWAJQADgEAKgUQADgEAOASQAMAAgIgNQgIgLAYAEQAEgQgNgFIgVgJQgBgNAUABQAcADADgBQgNALADAWQACANAIAYQgPgFgMAIQgMAJgLgCIAtAXQAiANABgaQAMgCAEAPQAFAQAJABQgBAGgHABIgMADQAmAqBaA7QBgA/AkAkIAeAAQAjAoA0AlQAoAcA/AjQgNALgFAGQgIAMAGAVQghgmgHgMQhLghhBhNQhYgthchVQg/gehnhLQhqhMg6gdQgbgrgrgRQgfAjgJAPQABAMAPAHIAYALQgBATgPAQQgRAPgHAKQgPgFAQgMQAUgPgBgIQAEgPgMgIQgMgJAAgIQgSgDgMASQgNASgRgDIBBhGQAkgpATgnQgBgRgQAIQgQAIADALQgKgDAFgIQAGgHAJgCQgCgLgSgEQgTgFgBgKQgWAJgIAVQAEACAWAWQAQAPASABQgTAKgigZQgagTgVgaQgngbAoAXQAUAMgBAMQAjgTgXgeQgVgbgfgEQgPAJgQAZQgTAbgKAJQAEARAYAOQAaARAGAMQAWgJAIgVQARAFgLANQgRATABADQAnAhALAHQgMARgSgUQgWgbgIAAQgQARgmATQgqAWgNAMQgHgPAlgVQA3geAEgEQgBgVgVgRQgYgTgEgNQgUgBgRAYQgQAWgagFQABgEAZgRQASgNgOgGQACgIAFADQAIAFAEAAQAXgNAZgiQAfgrALgKQACgRgMgDQAEgJAMgPQAJgPgFgVQgBgHgKgCIgTgBQgWgGAUgDQAUgEAMADQgBgkgOgoIgZhAQgTACgTAPQgYATgHAEQAQAnADAVQgKgDgHgYQgIgWgOgBQAJgMAagRQAZgRAJgOQABgRgKgKIgVgNQgWAGgPAVQgJALgNAgQgJAAgJgNQgEgGgGgBQAmgGAeg2QgOgYgfgHQgjgJgKgKIhkAAQgQAKgOAAQgCALAIANQAIALgEAPQgSgJgCgfQgPgBgPALQgQAMgOgCQAAAVAfAdQAbAZgIAPQgLgHgRgfQgPgZgRgHQgRgBgIAQQgMAWgDADQAYAcA7AmQBAAoAXAYQAVgSAZAOQAZAPgBAdQgKgDgWASQgSAOgKgTQgKAIgrAYQgiATgNATQgDAUARAKQAXAOADAGQAJAPgcgWIgpghQgtASgPAgQAPAZAhAWQAHAEA3AdQgoAEgvgpQgpgjgWgwQgGAJgQAJIgbAOQgdASASAeQgggcgIg0QgMAHgcAIQgcAIgMAHQgDASAJAQIAOAaQAEgFAXgNQASgKAFgMQATALgXAMIgkARQgBATAOATQAPAWAMgUQAPADgLAJQgRAMADAGQgPgEgIALQgJANgIAAQhMA7jjCkQjACJhpBaQgGAIgaAUQgWAQgGAQQgqAGgIAYQgNgWAlgagAH4LIQgHACAAAGIAMgDQAHgBABgGIgNACgAErIAQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgAEmHoQAQALAHABQAHgdgEgMQgEgKgTgTQgEAMgKAOQgNARgDAHIADAAQAMAAAMAIgADqHMQAZAOAIgYQglAEgDgYQAKgBAKAFQALAGAJAAQACgTgjgGQgjgFgCAKQAGABACABQADACgBAGIgNACQgHACAAAGIABAAQANAAAhAUgAF7GmQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgAndGLQAEAMALAXQAegJANgHQAVgNAGgVIAAgUQgKgLgeABQgjABgPgBQgCAXAHAWgACaGQQAGAdARgJQACgRgOgLQgRgMgBgKQAPAIANgNQAMgMgUgDQgEAMgPgLQgUgPgLAEQABAOgJANQgLAPgBAIQAGAFATAFQASAEAHAGQADgTABgBIADAKgAodFqQghABgIAHQgCALAIAMQAIAMgEAPQAogHAWgOQAggUgYgdQgIALgfABgADPFoQAJACgEAIQgGANABAHIAfAIQATAGAUgEQAFgJAAgNQABgIAOgKQgDABgcgCQgUgCABANQAUAIAKAMQgZAJgVgaQgMgQgHAAQgDAAgCADgACzF+QgGAEAEAEQACACAGgEQAFgEgDgEIgDgBQgCAAgDADgAC9FgQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgAoSFQQgFAJANAFIARgSQAIgMgFgUQgmgCgSABQggAAgCAVQAHABACAJQABAFAAAPIAoAAQAIgTgTgBQgVAAACgKQAEABAggDQAXgBABANIgGgBQgIAAgEAHgAEhFMQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgAENFMQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgADYFBQgCAUANgBQADgRAVgJIAkgOIACAMQACAIAGAAQAIgfggAAQgpAFgPgEQABADgCAcgAD5FNQACAGAGABIgDgNQgBgHgGAAIACANgABFBIQgWAQAAAWQANAGAWAhQAUAcAZADQgMABgEADQgHAFADALQAIAZAFAvIAHA6QAXAGARgQQAQgQAYAGQACgMgJgHIgNgLIB4AAIAAgyIguAFQgTABgPgQIAoAAQAWgCAIgIQAEgPgIgMQgIgMACgLQgKgCgeAPQgXALgHgOIAagOQAPgJATADQABgvgfgNQgDANgUALQgWAMgFgQQAPAEAKgOQAJgOAQAEQAAgZgNgSQgIgLgTgQQgVAfgnAJQANAcAnBDQAcBAgUAzQAGgSgKgIQgPgKgBgEQARgKgIgbQgLgiACgJQgLgSgRAVQgRAUgFgNQABgLARgLQAOgLgCgRQgVgHABgXQgQAAgQANQgRAPgLACIAPglQALgZgQgIQgEANgYATgAC4FCQgHACAAAGIAMgDQAHgBABgGIgNACgAAEAgQgBAIgFAAQAAASAMANQAIAIATALQAAgMAigfQAZgXgdgOQgJAfgfAJQABgKARgMQAOgLgCgRQgIgBgIgHQgIgKgGgBQgIAKAFAZQACAPgTgLIgDAMgAlgA8QAHACAFAFQADAEAFAJQAPADAKgNQAJgOAQAEQAAgdgTgZQgVgZgUATQARgEAOAVQANAVgOACQgVgSgLgHQgUgMgIAbQAlgDANAXQABAOgPgKQgGgFgEAAQgGAAAAALgACEAUQgKALAFATQAUgCAMgWQAMgWgYgEQgBAFgOAPgACngTQADAJADATQAFAQAJAFQAMgMgGgSQgFgTgTAAIgCAAgABfANQAJAMADgPIgIgCQgEgCACgGQAZAEAVgTQAVgWgRgMQgJAVgLAJQgLgFAIgUQAGgQgXABQAAARgMAQQgQAWgCAEIABAAQAHAAAKANgAmIAKQAAAFAEABQAEACACgIQAAgFgEgCIgCAAQgDAAgBAHgAmagHQgGAEAEADQACACAGgDQAFgFgDgDIgDgBQgCAAgDADgAnggHQgGAEAEADQACACAGgDQAFgFgDgDIgDgBQgCAAgDADgADPgxQAGABACABQADACgBAGIgTABQgKABgBAIQAFABAPANQALALATgFQgCgKAGgLQAGgKAAgJQgIAEgRgMQgEgDgDAAQgGAAgCALgAmIgdQABALADAFQAEAGAMgCQgPgwgjgMQAHAbgDgBQgLgJgNgHQACAHgGAMQgEAJAIACQAAgGACgCQACgDAGABIACANQACAGAGABQABgIAJgCIAHAAIANAAgABCgwQABASgUALQARAMASgZQAGgJATgmQgJgTgfgBQABASgLAMQgPAMgFAIQANgHAHAAQAIAAABAIgAAdglQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgAloglQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADgAmIhFIAjAVQAaANAJgOQgJAAgFgRQgEgPgMACQABASgEABQgDAAgJgJQgKgKgHAAQgGAAgCAKgACdg7QAFAAAIAGQAIAGAJgCQgHgTALgHQAPgLABgDQgFgBgPgOQgMgKgSAFQAEAWgOgHQgOgIAEAXQAMAFARgTQANgOAIASQgGAAgIAGQgHAFgJgBgAARhFIAUAAIAAgUIgUAAgAlqhjQgTAZAWgVQAMgMgCAAQgCAAgLAIgAmSifQgCAIgLAEQgOAFgDADQAAAQALANIATAVIABgTQABgKAIgBIATgCQAKgBABgHQgNABgFgTQgEgNgMAAIgGABgAlai3IgaAOQACAfAUAEQALACAlgHQAEgPgIgMQgIgMACgLIgJgBQgOAAgLAHgAFxCAQgMgFAAgNQAJgGADgBQAGgBACAIQAEATgIAAIgEgBgAFlBuIAAAAg");
	this.shape_348.setTransform(-46.4,44.6,0.334,0.334);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_349.setTransform(-58.8,7.3,0.334,0.334);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgJgBQARgJALABQgJAKgUAJQgRgDASgIg");
	this.shape_350.setTransform(-60.2,6.6,0.334,0.334);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgRAIQgCgogFgWQAMAFAEAdQAEAdAJAGQAPgIgJgUQgLgbAFgOQAVAUgBAxQgeAIgJAgIgDgvg");
	this.shape_351.setTransform(-64.7,8.1,0.334,0.334);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgNgBQAGgtAXgDQgfA5AVAqQgZgGAGgtg");
	this.shape_352.setTransform(-38,7.6,0.334,0.334);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgBANQgKgVgDgSQATgFABAYQABAcAIACQgCAFgDAAQgFAAgGgPg");
	this.shape_353.setTransform(-63.4,6.8,0.334,0.334);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_354.setTransform(-60.2,5.5,0.334,0.334);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AAXAdIgkgTIAFAAQAJgCABgVQAAgXAJgDQAQABgGARQgCAJgIAMQAEADASARQAQANACgNIALANQAHAIAMgBQgFACgIAAQgRAAgcgNgAgmAAQgWABgJgBQgPgBAGgSQADAAAGAFQAFAFAGAAQAHgBACgLIABgSQAFgJAHAdQAFASAHAGIgOgFg");
	this.shape_355.setTransform(-41.9,6.6,0.334,0.334);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_356.setTransform(-44.1,5.3,0.334,0.334);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgIgHQgBgSADgBQACgCAEAcQAAADAFAGQAEAFAAAGQgFAIgEAAQgHAAgBgjg");
	this.shape_357.setTransform(-62.5,5.9,0.334,0.334);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_358.setTransform(-59.4,5,0.334,0.334);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_359.setTransform(-47.8,103.6,0.334,0.334);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_360.setTransform(-48.8,103.2,0.334,0.334);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgDAOQgVgCAAgYQAegEATAOQgHAQgSAAIgDAAg");
	this.shape_361.setTransform(-52.7,103.5,0.334,0.334);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_362.setTransform(-43,102.9,0.334,0.334);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgEgLQAOgFAKALQgIAQgfADQgBgTAQgGg");
	this.shape_363.setTransform(-44.2,102.9,0.334,0.334);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_364.setTransform(-49.2,102.6,0.334,0.334);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_365.setTransform(-59,102.7,0.334,0.334);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_366.setTransform(-42.3,102.4,0.334,0.334);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAFAWQgXgMgLAFIAAgnQAPABAOATQAOASAQABQgEAKgJAAQgFAAgHgDg");
	this.shape_367.setTransform(-56.5,102.9,0.334,0.334);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_368.setTransform(-40.7,102.1,0.334,0.334);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgYAEQABgPgBgIQAGgBACADQACACAAAGQAJABAJgGQALgGAKABQgLAQABANQgPgBgEABQgJACgBAIQgJgCgBgOg");
	this.shape_369.setTransform(-46,102.4,0.334,0.334);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAIAQQgOgLACAPQgSgJgCgeQASAIACALIAKgNQAHgIAMACQABAGgHANQgEAHAKADQAAALgGAAQgEAAgHgFg");
	this.shape_370.setTransform(-50.7,102.4,0.334,0.334);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQADgKADAFQAEAGgBAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_371.setTransform(-61.7,102.2,0.334,0.334);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgJgOQATAHAAAWQgTgHAAgWg");
	this.shape_372.setTransform(-39.8,101.9,0.334,0.334);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgKAYQgCgMAIgMQAHgKgDgPQANgCgCAfQgBAWgLAAQgEAAgFgCg");
	this.shape_373.setTransform(-59.8,102.3,0.334,0.334);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_374.setTransform(-37,101.4,0.334,0.334);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgBAKQgEgFABgJQADgKADAFQADAGAAAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_375.setTransform(-39,101.6,0.334,0.334);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_376.setTransform(-41,101.2,0.334,0.334);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgDAQQgEgSADgMQAFgVAEATQADATgDAMQgDALgCAAQgBAAgCgKg");
	this.shape_377.setTransform(-60.7,101.9,0.334,0.334);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgCAMQgDgIABgNQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_378.setTransform(-63.4,101.7,0.334,0.334);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_379.setTransform(-45.3,100.9,0.334,0.334);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_380.setTransform(-53.1,101.1,0.334,0.334);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgCAMQgDgIABgNQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_381.setTransform(-42.7,101.1,0.334,0.334);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAAAMQgMgJgDAQQgRgTAUgDQAZgEABgNQAIACABAOIABAXIgFACQgHAAgMgJg");
	this.shape_382.setTransform(-48.3,101.1,0.334,0.334);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgIAVQgfgIgGgZQASAEASgIQASgIAPACQAAAIANAJQALAHgEAPQgPAGgQAAQgLAAgKgCg");
	this.shape_383.setTransform(-57,101.2,0.334,0.334);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_384.setTransform(-53.3,100.2,0.334,0.334);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_385.setTransform(-29.6,99.9,0.334,0.334);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgJgdQASAQABArQgWgNADgug");
	this.shape_386.setTransform(-38.2,100.7,0.334,0.334);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_387.setTransform(-49,99.9,0.334,0.334);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_388.setTransform(-57.8,99.9,0.334,0.334);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_389.setTransform(-43,99.6,0.334,0.334);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAHAQQgWgMgOAHIAHgMQADgIAAgJQARAPAFgCIAbgNQABAGgHAMQgEAIAKADQgDAIgIAAQgFAAgHgDg");
	this.shape_390.setTransform(-54.8,100,0.334,0.334);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_391.setTransform(-71.4,99.6,0.334,0.334);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgTAKIAAgTQAQAJANAAIAAgTQAIACACANIAAAYQgIgHgJgCQgLgCgBALIgCAAQgHAAgBgKg");
	this.shape_392.setTransform(-46.2,99.7,0.334,0.334);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_393.setTransform(-40.1,99.1,0.334,0.334);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_394.setTransform(-61.2,99.1,0.334,0.334);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_395.setTransform(-72,99,0.334,0.334);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_396.setTransform(-72.7,98.9,0.334,0.334);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_397.setTransform(-58.8,98.7,0.334,0.334);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_398.setTransform(-73.7,98.7,0.334,0.334);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgJgOQAUAHgBAWQgUgHABgWg");
	this.shape_399.setTransform(-29.5,98.6,0.334,0.334);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_400.setTransform(-42.5,98.4,0.334,0.334);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgYgOIAYAFIAZgFQgCAZgOAAQgZAAgIAEg");
	this.shape_401.setTransform(-44,98.6,0.334,0.334);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgTgTQATAOAegEQgNAQANADQgHAJgSgEQgVgGgNALQALgNgBgag");
	this.shape_402.setTransform(-52.5,98.7,0.334,0.334);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_403.setTransform(-70,98.4,0.334,0.334);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_404.setTransform(-70.9,98.2,0.334,0.334);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AADAKQgGgCgVAHIAAgnQAGAAABAHIADANQAIAAAKgGQALgFAKABQgKALAEAFQAGAMAAALQgRgNgFgCg");
	this.shape_405.setTransform(-57,98.6,0.334,0.334);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_406.setTransform(-71.7,97.9,0.334,0.334);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_407.setTransform(-28,97.7,0.334,0.334);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_408.setTransform(-49,97.5,0.334,0.334);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgRAAQgDgMAZADQAXADgQAQQADgEgggGg");
	this.shape_409.setTransform(-72.6,97.7,0.334,0.334);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgKAGQgNgFAEgPIAnAAQgKAOAAAPQgBgBgTgIg");
	this.shape_410.setTransform(-74.6,97.9,0.334,0.334);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_411.setTransform(-38.8,97.4,0.334,0.334);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_412.setTransform(-62.4,97.4,0.334,0.334);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_413.setTransform(-28.3,96.9,0.334,0.334);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_414.setTransform(-32.6,96.9,0.334,0.334);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgCAQQgagIAEgQQAPAAAFgBQAIgCABgHQAHABADAOQACAOAIAAQgBAIgLAAQgGAAgJgDg");
	this.shape_415.setTransform(-46,97.4,0.334,0.334);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgYAKIAAgTQACAIAUAAQASAAgUgIQABgIAJgBIATgBQAAAIgGALQgGAKACAKQgIgHgIgCQgMgCgBALIgCAAQgHAAgBgKg");
	this.shape_416.setTransform(-50.3,97.4,0.334,0.334);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgSAEQgDgNgIAAQACgSASANQARANACgSQAHABADAPQACANAIAAQgFAMgJgFQgIgEACgNQgRAIgCAMQgHgBgCgPg");
	this.shape_417.setTransform(-54.8,97.4,0.334,0.334);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_418.setTransform(-69,96.9,0.334,0.334);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgGAIQgFgPgJgBQAMgYATAVQAVATgXANIgCABQgJAAgEgOg");
	this.shape_419.setTransform(-27.1,97,0.334,0.334);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_420.setTransform(-60.1,96.8,0.334,0.334);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_421.setTransform(-41,96.4,0.334,0.334);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_422.setTransform(-47,96.2,0.334,0.334);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_423.setTransform(-49.7,96.2,0.334,0.334);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_424.setTransform(-58,96.2,0.334,0.334);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_425.setTransform(-25.8,95.9,0.334,0.334);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_426.setTransform(-43.3,96,0.334,0.334);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_427.setTransform(-44.5,96.1,0.334,0.334);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_428.setTransform(-67,96,0.334,0.334);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_429.setTransform(-34.8,95.6,0.334,0.334);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgTAFQADgYAkAFQgLAPABAOQgPgKgOAAg");
	this.shape_430.setTransform(-56.8,95.9,0.334,0.334);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgGABQAGgJAAgGQALAEgEAJIgHAQQgKgEAEgKg");
	this.shape_431.setTransform(-27.8,95.6,0.334,0.334);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_432.setTransform(-30.6,94.9,0.334,0.334);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_433.setTransform(-62,95,0.334,0.334);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgFAGQgEgGAFgEQAGgHAEAGQADAFgEAFQgEAEgCAAQgCAAgCgDg");
	this.shape_434.setTransform(-70.7,95.2,0.334,0.334);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_435.setTransform(-39.5,94.4,0.334,0.334);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgHAPQgRADAAgbQAQgDAEAMQAIgDAEgDQAGgGABgHQAJACABAOIAAAXQgIgKgYAFg");
	this.shape_436.setTransform(-46.3,94.7,0.334,0.334);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgTAKIAAgTQAQAJANAAIAAgTQAIACACANIAAAYQgIgHgJgCQgLgCgBALIgCAAQgHAAgBgKg");
	this.shape_437.setTransform(-55.2,94.7,0.334,0.334);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_438.setTransform(-60,94.4,0.334,0.334);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_439.setTransform(-41.7,94,0.334,0.334);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_440.setTransform(-46.3,93.9,0.334,0.334);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_441.setTransform(-67.9,94.1,0.334,0.334);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgJAUQADgLgHgFQgEgDgMgBQAAgSAZgBQAXgCALAMIgOAUQgJAJgNAAIgDAAgAACgHQgFAEADADQACACAGgDQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_442.setTransform(-74.2,94.4,0.334,0.334);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_443.setTransform(-24.6,93.5,0.334,0.334);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_444.setTransform(-36.3,93.7,0.334,0.334);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_445.setTransform(-47.3,93.5,0.334,0.334);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_446.setTransform(-65.7,93.7,0.334,0.334);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgFARQgTgIAAgaQAOgDAIAQQAHAOAUgIQgIARgNAAQgEAAgFgCg");
	this.shape_447.setTransform(-76.7,94,0.334,0.334);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgPATQAAgJAMgJQALgGgEgPQATAEgLAVQgHAQgLAAQgEAAgFgCg");
	this.shape_448.setTransform(-29.6,93.4,0.334,0.334);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AADAOQgLAGgLAAIAAgnQAGAAABAHIADAMQAJgEADgDQAFgEACgIQAJACABANIAAAYQgLgJgGADg");
	this.shape_449.setTransform(-48.5,93.4,0.334,0.334);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgTAKIAAgTQAQAJANAAIAAgTQAIACABANIABAYQgIgHgJgCQgKgCgCALIgCAAQgHAAgBgKg");
	this.shape_450.setTransform(-52.8,93.4,0.334,0.334);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgOAUIAGgcQAHgNAQACQgGACgDAXQgCAPgLAAIgHgBg");
	this.shape_451.setTransform(-56.7,93.4,0.334,0.334);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgDAMQgNgMAJgPQAFABADAJQAEAIAHABQgCAMgGAAQgEAAgDgEg");
	this.shape_452.setTransform(-23.9,92.9,0.334,0.334);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_453.setTransform(-61.5,92.5,0.334,0.334);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_454.setTransform(-31.6,92.4,0.334,0.334);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_455.setTransform(-42.3,92.2,0.334,0.334);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_456.setTransform(-59.5,92.2,0.334,0.334);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_457.setTransform(-40.2,92,0.334,0.334);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_458.setTransform(-34.3,91.7,0.334,0.334);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgTAKQABgHAKgCIASgBIAAgTQAJACABAOIAAAXQgNgMgaACg");
	this.shape_459.setTransform(-50.8,92,0.334,0.334);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AAFAPQgHgEgCAKQgFgBgEgKQgEgJgHAAQACgJAJABQAJABAAAHQAFgBABgGIADgMQASgHACAQQABAJgBAVIgCAAQgHAAgLgGg");
	this.shape_460.setTransform(-55,92,0.334,0.334);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#FF00FF").s().p("AAAAOQgDgFgBgKQgFgCgDADQgBACgBAGQgNgOAHgHQAGgGAOADQAPADAGAJQAHAJgNANIgGAAQgHAAgCgEg");
	this.shape_461.setTransform(-72.7,92.1,0.334,0.334);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgQAMIgNgCIAAgTQAPgKAOAAQABAGgCACIgIACQAFANANgHQAOgIAHALQgJASgeACQgBgGgGgCg");
	this.shape_462.setTransform(-75.2,92,0.334,0.334);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgKgDQAKgRAQAHQgCAGgJAIQgHAIgBAHQgTgDAMgQg");
	this.shape_463.setTransform(-80.1,91.8,0.334,0.334);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_464.setTransform(-84.4,91.5,0.334,0.334);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_465.setTransform(-36.7,91.2,0.334,0.334);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_466.setTransform(-44.2,91.3,0.334,0.334);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_467.setTransform(-57.4,91.2,0.334,0.334);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgWgCQgFgYAfACQABAGgDACIgHACQADALAIgGQALgGAHALIgNALQgJAGACAMQgWgDgEgYg");
	this.shape_468.setTransform(-77.7,91.9,0.334,0.334);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_469.setTransform(-82.4,91.4,0.334,0.334);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_470.setTransform(-21.3,90.9,0.334,0.334);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_471.setTransform(-31,91,0.334,0.334);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgGAFQgGgUAKgBQAEgBAFAMQAEALgEAHQgDAFgCAAQgEAAgEgNg");
	this.shape_472.setTransform(-80.8,91.3,0.334,0.334);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_473.setTransform(-83.4,91,0.334,0.334);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgOATQgHgRARgCQAPgEgGgQQASAEgKAVQgHAQgLAAQgEAAgFgCg");
	this.shape_474.setTransform(-28.6,91.1,0.334,0.334);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_475.setTransform(-45.7,90.7,0.334,0.334);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgTAFIAAgTQAGgBACADQABACABAGQAPACAEgMQAGgBACADQACACAAAGIAAATQgIgHgJgBQgKgCgCAKIgCAAQgHAAgBgKg");
	this.shape_476.setTransform(-52.8,90.9,0.334,0.334);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgUAKQAJgSAegBQAGARgPACQgVgBgJABg");
	this.shape_477.setTransform(-18.4,90.4,0.334,0.334);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_478.setTransform(-20.5,90.4,0.334,0.334);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_479.setTransform(-32.8,90.3,0.334,0.334);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgZgTQASAIACALQAIgEAEgDQAGgEABgIQATAAgMARQgMAOAPgCQgHAKgOgDQgPgFgNAIg");
	this.shape_480.setTransform(-48.6,90.7,0.334,0.334);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgCAMQgDgIABgNQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_481.setTransform(-56.3,90.7,0.334,0.334);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_482.setTransform(-60.5,90,0.334,0.334);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgEAKQgHgBAAgIQAAgHAGgCQAGgDALAKQgJALgGAAIgBAAg");
	this.shape_483.setTransform(-68.6,90.1,0.334,0.334);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_484.setTransform(-35,89.5,0.334,0.334);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_485.setTransform(-41.2,89.7,0.334,0.334);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_486.setTransform(-58.7,89.5,0.334,0.334);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_487.setTransform(-66.5,89.7,0.334,0.334);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AgPADQACgHAOgUQASALgCANQgCAHgOASQgVgFAFgRg");
	this.shape_488.setTransform(-84.9,90.2,0.334,0.334);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_489.setTransform(-85.9,89.5,0.334,0.334);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AgOAPIAHgNQADgHAAgJQATAHAAAWg");
	this.shape_490.setTransform(-16.6,89.5,0.334,0.334);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_491.setTransform(-32.1,89.4,0.334,0.334);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgGAKgCg");
	this.shape_492.setTransform(-43.3,89.2,0.334,0.334);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgOAKQgDgNAKgEQAFgCARAAQgHATgVAAIgBAAg");
	this.shape_493.setTransform(-69.4,89.4,0.334,0.334);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_494.setTransform(-15.4,89,0.334,0.334);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_495.setTransform(-37.1,88.9,0.334,0.334);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgTgTQAJgCABAMQAJABAKgGQAKgGAKABQgHAIgCAJQgCAKALACQgHAKgTgFQgUgFgNAKQALgNgBgag");
	this.shape_496.setTransform(-50.8,89.4,0.334,0.334);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgQAEQALgPgEgIIALAOQAGAHAMgCQgBAGgPADQgNACAAAJQgQgEAJgMg");
	this.shape_497.setTransform(-29.8,89,0.334,0.334);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgOADQgFgEAHgDQAJgDAUAEQgHAJgKABIgDAAQgHAAgEgEg");
	this.shape_498.setTransform(-32,88.5,0.334,0.334);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgCAJQgHgCgCgHQgCgHAGgCQAHgBAMALQgGAJgGAAIgCgBg");
	this.shape_499.setTransform(-64.3,88.7,0.334,0.334);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgFALQgBgSgTAIQAHgQAEgHQAJgMATAGQAAAGgHABIgMADQABAHAJABIATACQAEAOgLAHQgNAJAAAJIgBAAQgIAAAAgUg");
	this.shape_500.setTransform(-81.4,89.3,0.334,0.334);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_501.setTransform(-15,88.2,0.334,0.334);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_502.setTransform(-16.3,88.2,0.334,0.334);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_503.setTransform(-17.8,88.2,0.334,0.334);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgNAEQAUgLgHgMQAFABAEAJQAEAJAHAAQgBAGgPADQgNACAAAJQgTgIAPgIg");
	this.shape_504.setTransform(-22.1,88.4,0.334,0.334);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_505.setTransform(-34.1,87.9,0.334,0.334);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_506.setTransform(-56,87.9,0.334,0.334);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_507.setTransform(-67.5,88,0.334,0.334);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_508.setTransform(-14.4,87.5,0.334,0.334);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_509.setTransform(-16,87.5,0.334,0.334);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_510.setTransform(-47.3,87.7,0.334,0.334);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_511.setTransform(-17.1,87.4,0.334,0.334);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_512.setTransform(-41.8,87.3,0.334,0.334);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_513.setTransform(-42.7,87.2,0.334,0.334);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AAHARQgLgCgBALQgFgBgEgKQgEgJgHAAQAEgHAZABQAOACgXgPQAJgWAOAUQANATgHAWQgIgHgJgCg");
	this.shape_514.setTransform(-53,87.8,0.334,0.334);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAGAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_515.setTransform(-59.9,87.4,0.334,0.334);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_516.setTransform(-68.4,87.2,0.334,0.334);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_517.setTransform(-15.4,86.9,0.334,0.334);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_518.setTransform(-65.7,87,0.334,0.334);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AgOgOIAUAJQANAFgEAPIgFAAQgbAAADgdg");
	this.shape_519.setTransform(-29.6,86.9,0.334,0.334);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_520.setTransform(-44.3,86.5,0.334,0.334);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_521.setTransform(-58,86.7,0.334,0.334);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgGAeQABgNgNgUQgKgPAMgLQAJgBAKAGQALAGAJgBQACAZgEALQgGANgPAAIgGAAgAAFgHQgFAEADADQACACAGgDQAGgFgEgDIgCgBQgCAAgEADg");
	this.shape_522.setTransform(-72.6,87.4,0.334,0.334);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_523.setTransform(-19.3,86.2,0.334,0.334);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_524.setTransform(-30.6,86.2,0.334,0.334);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#FF00FF").s().p("AgNAOQgEgJgHAAIANgKQAJgHgCgMQAQgCAHAOIAGAbQgLgJgIACQgGACgEAPQgFgBgEgKg");
	this.shape_525.setTransform(-31.6,86.9,0.334,0.334);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgEANQgTgJALgTQAMgEAFALQAFALAHABQgCANgJAAQgFAAgFgEg");
	this.shape_526.setTransform(-33.7,86.6,0.334,0.334);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_527.setTransform(-38.5,86.2,0.334,0.334);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_528.setTransform(-47.2,86.4,0.334,0.334);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AAEANQgRgDgjAPQAGgRgQgDQgQgEAGgPQAMgOASAIIAeAQQAKgDgFgJQgHgKALgIQAYAAASARQAKAKASAWQgBAGgPADQgOACAAAJQgVgUgQgCg");
	this.shape_529.setTransform(-75.9,87.2,0.334,0.334);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_530.setTransform(-78.5,86.5,0.334,0.334);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AACAJQgHgJgSAFQAAgFAHgCIANgCIAAgUQAFAIARAOQAMAMgPAPQgEgBgKgPg");
	this.shape_531.setTransform(-80.1,86.9,0.334,0.334);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AAAARQgVgJACgZQANALAagBQACAZgOAAQgDAAgFgBg");
	this.shape_532.setTransform(-82.2,86.7,0.334,0.334);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_533.setTransform(-28.3,86,0.334,0.334);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_534.setTransform(-48.3,85.9,0.334,0.334);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_535.setTransform(-56.2,86,0.334,0.334);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AAAAFQgHgIgHgBQABgIAKgBIASgBIAAAdQgGgCgJgIg");
	this.shape_536.setTransform(-63.7,86.2,0.334,0.334);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_537.setTransform(-82.1,85.9,0.334,0.334);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_538.setTransform(-84.1,86,0.334,0.334);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_539.setTransform(-35.3,85.7,0.334,0.334);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_540.setTransform(-45.7,85.8,0.334,0.334);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_541.setTransform(-52.3,85.7,0.334,0.334);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_542.setTransform(-53,85.4,0.334,0.334);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_543.setTransform(-18,85,0.334,0.334);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgBADQgTgZAVAWQAMALgCAAQgCAAgKgIg");
	this.shape_544.setTransform(-31.1,84.9,0.334,0.334);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgTAPQgCgNAPgDQAPgFABgIQAUAHgSAMQgNAKgNAAIgFAAg");
	this.shape_545.setTransform(-48.8,85.2,0.334,0.334);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_546.setTransform(-59.2,85,0.334,0.334);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_547.setTransform(-86.4,85,0.334,0.334);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_548.setTransform(-37.3,84.5,0.334,0.334);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_549.setTransform(-42.8,84.7,0.334,0.334);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_550.setTransform(-49.3,84.5,0.334,0.334);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_551.setTransform(-52.2,84.7,0.334,0.334);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_552.setTransform(-72,84.5,0.334,0.334);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgKAJQgEgDADgEQAMgXAKAQQAEAFgDAFQgEAGgJABQgFAAgEgDg");
	this.shape_553.setTransform(-80.5,84.6,0.334,0.334);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#000000").s().p("AABALQgRgQgDABQAFgSANAMQASAQADgBQgEALgGAAQgEAAgFgFg");
	this.shape_554.setTransform(-12.4,84.5,0.334,0.334);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgEAPQABgGgDgCQgCgBgGgBIAAgTIATAAQgCAGAEACIAIACIAAATg");
	this.shape_555.setTransform(-30.3,84.5,0.334,0.334);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_556.setTransform(-31.3,84.2,0.334,0.334);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#000000").s().p("AgYgJQAJAJAFgDQAHgCgBgOQALgDAGALQAFALAHAAQgFAJgQAEQgTAEgJADg");
	this.shape_557.setTransform(-33,84.7,0.334,0.334);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_558.setTransform(-50.8,84.2,0.334,0.334);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_559.setTransform(-57.4,84.2,0.334,0.334);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgCALQgVgEALgRQAJgBAGAFQAIAGAGAAQACALgOAAIgHAAg");
	this.shape_560.setTransform(-81.8,84.4,0.334,0.334);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_561.setTransform(-20.6,83.9,0.334,0.334);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_562.setTransform(-22.8,83.9,0.334,0.334);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_563.setTransform(-35.1,84.1,0.334,0.334);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgBAKQgEgFABgJQADgKADAFQADAGAAAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_564.setTransform(-45,84.2,0.334,0.334);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_565.setTransform(-47.3,84,0.334,0.334);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_566.setTransform(-64.9,84.1,0.334,0.334);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_567.setTransform(-39.3,83.7,0.334,0.334);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_568.setTransform(-50.3,83.5,0.334,0.334);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgGALQABgGgDgCQgCgBgGgBQgDgPAWAFQAVAEgLAQg");
	this.shape_569.setTransform(-62.6,83.7,0.334,0.334);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_570.setTransform(-55.4,83.4,0.334,0.334);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_571.setTransform(-36,83,0.334,0.334);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_572.setTransform(-49.3,82.9,0.334,0.334);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_573.setTransform(-53,82.9,0.334,0.334);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_574.setTransform(-48.7,82.7,0.334,0.334);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_575.setTransform(-52.3,82.5,0.334,0.334);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgEAKQgHgBAAgIQAAgHAGgCQAGgDALALQgJAKgGAAIgBAAg");
	this.shape_576.setTransform(-65.9,82.7,0.334,0.334);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("AAAALQgGgIgLACQgCgIAFgHQAHgJAAgFIATAAQgMAMAMAMQANANgNAMIgMgOg");
	this.shape_577.setTransform(-67.3,83.2,0.334,0.334);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AAMAOQgMAGgJAAIAAgUQgFAAgDACQgCACAAAGQgJABgBgLIAAgTQALAAAUAFQAKABASgGIAAAnQgLgJgHADg");
	this.shape_578.setTransform(-71.9,83,0.334,0.334);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_579.setTransform(-80.2,82.7,0.334,0.334);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_580.setTransform(-86.1,82.5,0.334,0.334);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQAAgFAHgCg");
	this.shape_581.setTransform(-18.1,82.2,0.334,0.334);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgYAIQgEgYAOgOQAKAJAJgEQAKgEAKAJQADAkgXANIgHACQgSAAgEgXg");
	this.shape_582.setTransform(-69.4,83,0.334,0.334);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_583.setTransform(-15.8,81.9,0.334,0.334);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_584.setTransform(-23,82,0.334,0.334);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_585.setTransform(-38.2,82,0.334,0.334);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_586.setTransform(-43.7,82,0.334,0.334);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_587.setTransform(-45.8,82,0.334,0.334);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_588.setTransform(-51.3,81.9,0.334,0.334);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgGALQABgGgDgCQgCgBgGgBQgDgPAWAFQAVAEgLAQg");
	this.shape_589.setTransform(-58.6,82,0.334,0.334);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_590.setTransform(-63.9,82,0.334,0.334);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgJAZQgKgKAAgPQAAgOAKgKQAZgCADAbQADAYgYAAIgHAAgAACgCQgFADADAEQACACAGgEQAFgEgDgDIgCgBQgDAAgDADg");
	this.shape_591.setTransform(-76.5,82.5,0.334,0.334);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#FF00FF").s().p("AgUACQAQgXAAgDQALgCAEAPQAFAQAJAAQgBAVgTgEQgTgEAAAHQgQgFAKgSg");
	this.shape_592.setTransform(-78.7,82.5,0.334,0.334);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_593.setTransform(-82.4,81.9,0.334,0.334);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_594.setTransform(-22,81.5,0.334,0.334);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_595.setTransform(-56.3,81.7,0.334,0.334);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_596.setTransform(-69.4,81.5,0.334,0.334);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_597.setTransform(-50.5,81.3,0.334,0.334);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgBAJQgKAAgBgFQAAgEAQgIQAMAIgEAFQgEAEgIAAIgBAAg");
	this.shape_598.setTransform(-54.3,81.3,0.334,0.334);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_599.setTransform(-90.1,81.2,0.334,0.334);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_600.setTransform(-19.8,81,0.334,0.334);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_601.setTransform(-40.5,81,0.334,0.334);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_602.setTransform(-61.8,81.1,0.334,0.334);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_603.setTransform(-78.5,80.9,0.334,0.334);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_604.setTransform(-24.6,80.5,0.334,0.334);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_605.setTransform(-84.6,80.7,0.334,0.334);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_606.setTransform(-49.7,80.4,0.334,0.334);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AAHAlQgKgLgMgBQAIgVgEgOQgFgPgTgJQACgTANADQAOAFABgJQAFABADAKQAEAIAHABQgYAIARAPQAUASgNAIQACAIAEgCQAEgBAAgFQAQABgFARQgDAJgIANIgRgSg");
	this.shape_607.setTransform(-74.7,81.9,0.334,0.334);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgOAPQgDgNALgDQALgHAAgGQAHABACAKIABASg");
	this.shape_608.setTransform(-77.1,80.5,0.334,0.334);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_609.setTransform(-80.4,80.4,0.334,0.334);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgLAAQAQgMAAgCQATAFgMAJQgQAMAAADQgTgGAMgJg");
	this.shape_610.setTransform(-93.1,80.5,0.334,0.334);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_611.setTransform(-17.6,79.9,0.334,0.334);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_612.setTransform(-23.8,80,0.334,0.334);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgCAMQgDgIABgNQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_613.setTransform(-48.7,80.4,0.334,0.334);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_614.setTransform(-52.3,79.9,0.334,0.334);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AgSAeQACgLgJgNQgIgKAFgPQAQACAEgMIAKANQAGAHADgKQAFABAEAJQAEAJAHAAQgCABgRAUQgJAJgMAAIgJAAgAgGAMQgGAEAEAEQACACAGgEQAEgFgDgDIgBgBQgDAAgDADg");
	this.shape_615.setTransform(-70.2,80.7,0.334,0.334);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AgOAeQAMgMgQgOQgUgOAEgTIAcAOQALAEAUgIQgCALAIALQAIAMgEAPg");
	this.shape_616.setTransform(-72.7,80.7,0.334,0.334);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_617.setTransform(-21.8,79.5,0.334,0.334);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AgVALQgKgKABgPQARAEAPgHQASgHAJAAQAGAMgNAMQgNAMAAgQQgHABgCAJIAAATQgSgLgDgDg");
	this.shape_618.setTransform(-26.4,80.2,0.334,0.334);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgNAOQgEgJgHAAIANgKQAJgHgCgMQAQgCAHAOIAGAbQgLgJgIACQgGACgEAPQgFgBgEgKg");
	this.shape_619.setTransform(-29,80.2,0.334,0.334);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgdA8QgKgQAAgOQAWACgGgLQgLgTAFgLQAWACgGgLQgLgTAFgMQAIgIAQgCQAMgBAXABQAAAGgHACIgNACQAAAGAHACIANACQgKAQAAAOIgeAAQgBALAFAEQAEADAMABIgOAMQgGAFAKADIgMAMQgJAGACAMg");
	this.shape_620.setTransform(-31.8,81.3,0.334,0.334);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgaACQAYgrAAgSIAnAAQAFAYgPALIgdAPQANAOgLAaQgKAagWADQgOgXAUgjg");
	this.shape_621.setTransform(-34.1,81.4,0.334,0.334);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_622.setTransform(-37.7,79.5,0.334,0.334);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_623.setTransform(-38.8,79.7,0.334,0.334);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_624.setTransform(-44.5,79.5,0.334,0.334);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_625.setTransform(-46.5,79.2,0.334,0.334);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_626.setTransform(-82.4,79.2,0.334,0.334);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_627.setTransform(-88.9,79.3,0.334,0.334);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_628.setTransform(-9.9,78.9,0.334,0.334);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AgMAIQgHgFAFgNQAJAGAEABQAFABABgIQAOAEgCAGQgCAFgKAEIgJACQgEAAgEgDg");
	this.shape_629.setTransform(-51,79,0.334,0.334);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQADgKADAFQAEAGgBAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_630.setTransform(-55.7,79.2,0.334,0.334);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_631.setTransform(-76.5,79,0.334,0.334);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_632.setTransform(-78.4,78.5,0.334,0.334);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_633.setTransform(-91.2,78.7,0.334,0.334);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_634.setTransform(-93.1,78.5,0.334,0.334);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgIAHQgDgHAKgLQAMAKgBAHQgBAFgIABQgHAAgCgFg");
	this.shape_635.setTransform(-26.1,78.4,0.334,0.334);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_636.setTransform(-41.3,78.3,0.334,0.334);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_637.setTransform(-60.5,78.3,0.334,0.334);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_638.setTransform(-94.4,78.2,0.334,0.334);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_639.setTransform(-13.1,77.9,0.334,0.334);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQAAgFAHgCg");
	this.shape_640.setTransform(-24.1,77.9,0.334,0.334);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgRAAQgDgMAZADQAXADgQAQQADgEgggGg");
	this.shape_641.setTransform(-48.9,78,0.334,0.334);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AgIAJQgCgNAKgKIgUAAQACgIAOgBIAXgBQAFAPgIALQgJAMACALQgPgCgCgOg");
	this.shape_642.setTransform(-64.8,78.5,0.334,0.334);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AAAAIQgIgMgFATQgJgCgBgNQABgRgBgHIAnAAQAAAEAHAWQAEALgLAMIAAAAQgDAAgNgRg");
	this.shape_643.setTransform(-66.7,78.5,0.334,0.334);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AgIAJQgMgJABgOQANgLAaABQAEAegOATQgDgFgPgLg");
	this.shape_644.setTransform(-68.9,78.5,0.334,0.334);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#FF00FF").s().p("AgCATQgYgIgIgBQACgGAIgIQAJgIABgHQAEAAAQAQQAKAIgBgYQAHABADAPQACANAIAAQgLAKgQAAIgKgBg");
	this.shape_645.setTransform(-73.4,78.4,0.334,0.334);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_646.setTransform(-80.4,78,0.334,0.334);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#FF00FF").s().p("AgYgTQAIAJAYgEQARgDAAAbQgMgJgHACQgGACgEAPQgSgJgCgeg");
	this.shape_647.setTransform(-28.3,78,0.334,0.334);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_648.setTransform(-10.9,77.3,0.334,0.334);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#000000").s().p("AAAAVQgOAFgLgLQALgNgBgaQAHgBAMAHQAIAEACgKQANgBgCAUQgCAbABADQgIgJgQAFg");
	this.shape_649.setTransform(-35.3,77.9,0.334,0.334);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_650.setTransform(-48.7,77.2,0.334,0.334);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_651.setTransform(-74.2,77.3,0.334,0.334);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#000000").s().p("AgJgOQAUAHgBAWQgUgHABgWg");
	this.shape_652.setTransform(-86.2,77.5,0.334,0.334);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_653.setTransform(-22,77,0.334,0.334);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_654.setTransform(-40,76.9,0.334,0.334);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_655.setTransform(-54.2,76.9,0.334,0.334);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_656.setTransform(-94.2,76.9,0.334,0.334);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_657.setTransform(-95.4,76.9,0.334,0.334);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_658.setTransform(-15.3,76.7,0.334,0.334);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_659.setTransform(-28.1,76.7,0.334,0.334);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_660.setTransform(-45.2,76.7,0.334,0.334);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_661.setTransform(-47.5,76.6,0.334,0.334);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_662.setTransform(-50.7,76.7,0.334,0.334);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_663.setTransform(-55,76.5,0.334,0.334);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_664.setTransform(-73.2,76.7,0.334,0.334);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_665.setTransform(-88.6,76.7,0.334,0.334);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_666.setTransform(-93.4,76.5,0.334,0.334);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_667.setTransform(-51.3,76.2,0.334,0.334);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_668.setTransform(-56.3,76.2,0.334,0.334);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_669.setTransform(-42.3,75.8,0.334,0.334);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_670.setTransform(-54.2,75.9,0.334,0.334);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_671.setTransform(-55.3,75.8,0.334,0.334);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#000000").s().p("AgTgTIAnAAIAAAnQgmgCgBglg");
	this.shape_672.setTransform(-69.5,76.4,0.334,0.334);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_673.setTransform(-92.4,75.8,0.334,0.334);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_674.setTransform(-6.4,75.5,0.334,0.334);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_675.setTransform(-12.9,75.7,0.334,0.334);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#000000").s().p("AgJgOQAUAHgBAWQgUgIABgVg");
	this.shape_676.setTransform(-26.5,75.9,0.334,0.334);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgIgHQAIgMAUAGQACAQgOAGIgbAHQAEgIAHgPg");
	this.shape_677.setTransform(-38.8,75.8,0.334,0.334);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_678.setTransform(-59.5,75.7,0.334,0.334);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_679.setTransform(-63.6,75.8,0.334,0.334);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#000000").s().p("AgHAWQgcgNANghQASgCALALIAUAUQgFAVgPAAQgHAAgHgEg");
	this.shape_680.setTransform(-65.1,76.2,0.334,0.334);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#000000").s().p("AgNAJQgKgMgBgQQAQACAEgMQARgBAHAQQAEAJABAZQgRgDgDANIgSgVg");
	this.shape_681.setTransform(-67.4,76.4,0.334,0.334);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_682.setTransform(-86.7,75.5,0.334,0.334);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AADANQgNgLgJgEQADgQAMAJQAQAKAIgDQgEAQgJAAIgEgBg");
	this.shape_683.setTransform(-95.9,75.8,0.334,0.334);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_684.setTransform(-17.5,75.4,0.334,0.334);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_685.setTransform(-24.1,75.4,0.334,0.334);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#000000").s().p("AASASQgJgNgIAAQgDABgWANQgQAJgSgDQgFgSAKgLQAOgPABgFQALAIASgFQAJgCABATQAJgEAOgMQAPgJAWAFQgGAHgEARQgFATgFAGIgHABQgKAAgGgIg");
	this.shape_686.setTransform(-33.5,75.8,0.334,0.334);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#000000").s().p("AgTAEQgCgRAMgLQAhgEgEArQgRgDgDANQgRgBgCgUg");
	this.shape_687.setTransform(-36.8,75.8,0.334,0.334);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_688.setTransform(-49.2,75.2,0.334,0.334);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_689.setTransform(-74,74.8,0.334,0.334);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#000000").s().p("AgJAFQADgPgSgEQACgIANgBIAYgBQABAGgDACIgIACIANALQAJAGgCAMQgRgDgDANQgSgDAEgRg");
	this.shape_690.setTransform(-94.1,75.5,0.334,0.334);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AgJgOQATAHAAAWQgUgHABgWg");
	this.shape_691.setTransform(-10.8,74.9,0.334,0.334);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_692.setTransform(-15.3,74.5,0.334,0.334);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_693.setTransform(-61.7,74.5,0.334,0.334);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_694.setTransform(-82.2,74.7,0.334,0.334);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_695.setTransform(-89.2,74.5,0.334,0.334);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_696.setTransform(-9.1,74.4,0.334,0.334);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#000000").s().p("AgIAHQgDgHAKgLQAMAKgBAGQgBAHgIAAQgHAAgCgFg");
	this.shape_697.setTransform(-28.4,74.4,0.334,0.334);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_698.setTransform(-48,74.3,0.334,0.334);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#000000").s().p("AgTAKQAEgYAjAFQgDAUgaAAIgKgBg");
	this.shape_699.setTransform(-56.2,74.3,0.334,0.334);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_700.setTransform(-76.2,74.2,0.334,0.334);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#000000").s().p("AgIABQAEgFAAgFIATAAQADANgLADQgDACgSABQABgDAFgGg");
	this.shape_701.setTransform(-54.3,74,0.334,0.334);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#000000").s().p("AAAARQgHgBgRgOQAFgWASAFQAHADATAOQgKAPgLAAIgEAAg");
	this.shape_702.setTransform(-70,74.3,0.334,0.334);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_703.setTransform(-12.9,73.5,0.334,0.334);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#000000").s().p("AgEAKQgHgBAAgIQAAgHAGgCQAGgDALALQgJAKgGAAIgBAAg");
	this.shape_704.setTransform(-19.5,73.7,0.334,0.334);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_705.setTransform(-26.3,73.7,0.334,0.334);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#000000").s().p("AgMACQADgHAAgJQAGACAIAIQAHAIAIABQgCAIgNACQgRgBgHABIAHgNg");
	this.shape_706.setTransform(-32.1,73.8,0.334,0.334);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#000000").s().p("AgTAPIAHgNQADgHAAgJIATAAQgBAFADADIAIACQgDATgaAAIgKAAg");
	this.shape_707.setTransform(-38.2,73.9,0.334,0.334);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_708.setTransform(-62.7,73.5,0.334,0.334);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AgTAUQgCgNAEgJQAHgKABgHQAJgCAGAFQAJAGAFABQAEAdgiAAIgJAAg");
	this.shape_709.setTransform(-65.9,74,0.334,0.334);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AgDAPIgGgKQgCgCgDAKQgRgEAJgKQAMgRgEgIIAdAAQAOATgEAeQgGAEgGAAQgKAAgGgMg");
	this.shape_710.setTransform(-68,74.2,0.334,0.334);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_711.setTransform(-71.9,73.5,0.334,0.334);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_712.setTransform(-17.3,73.2,0.334,0.334);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#000000").s().p("Ag2AaQgKgKAAgPQAAgOAKgKQASgFAMAKQAPAOAFABQAPgNALgFQASgHAZAFQgBAggZAKQgZAKgSgXQgQgEgJAOQgIAKgLAAIgGAAg");
	this.shape_713.setTransform(-35,73.8,0.334,0.334);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#000000").s().p("AgYgJQADABAHAFQAFADAFAAQAFAAACgGIACgNQATABgEAOQgEAMAJACQgIALgNgFQgPgFgNAJg");
	this.shape_714.setTransform(-51,73.7,0.334,0.334);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_715.setTransform(-59.1,73.4,0.334,0.334);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AgQAYQgMgTAGgNQAGgNANgBQANgCAJALQAJANgFAYg");
	this.shape_716.setTransform(-64,73.9,0.334,0.334);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_717.setTransform(-86.9,73.3,0.334,0.334);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_718.setTransform(-89.5,73.4,0.334,0.334);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AgEANQgTgPgBgRQALAJAGgDQALgHALABQgJALACAHQACAGAPAFQgGAKgIAAQgHAAgIgHg");
	this.shape_719.setTransform(-96.1,73.7,0.334,0.334);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#000000").s().p("AgYAUIgBgnQAHgBAQgLQAMgJAOABQAHAagTAQQgTASACATQgQgBgDgTg");
	this.shape_720.setTransform(-7.6,74,0.334,0.334);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_721.setTransform(-30.4,73.1,0.334,0.334);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_722.setTransform(-49.8,72.8,0.334,0.334);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#000000").s().p("AgCAJQgIgBgCgIQgDgGAGgBQAIgDAPAKQgIAJgHAAIgBAAg");
	this.shape_723.setTransform(-80,73.1,0.334,0.334);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_724.setTransform(-95.1,72.8,0.334,0.334);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#000000").s().p("AgNAZQABgGgDgCQgCgBgGgBQAAgGAHgCIANgCQgLgPABgOQAHgBAMAHQAIAEACgKQARAIgQALQgUANAJARg");
	this.shape_725.setTransform(-10.3,73.2,0.334,0.334);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_726.setTransform(-15,72.5,0.334,0.334);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_727.setTransform(-48.8,72.6,0.334,0.334);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_728.setTransform(-52.7,72.7,0.334,0.334);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_729.setTransform(-90.4,72.7,0.334,0.334);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_730.setTransform(-21.8,72.3,0.334,0.334);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_731.setTransform(-34,72.2,0.334,0.334);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#000000").s().p("AgHAAQABgJAHAAQAGAJABACQABAGgIACQgIgCAAgIg");
	this.shape_732.setTransform(-39.8,72.3,0.334,0.334);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_733.setTransform(-68.5,72.2,0.334,0.334);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_734.setTransform(-73.7,72.2,0.334,0.334);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_735.setTransform(-82.5,72.4,0.334,0.334);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#000000").s().p("AgPAIQACgKgLgCQABgFAKgEQAJgEAAgHQAIABAAAJQgBAKgHAAQACAIAIgBQAJAAAAgHQAVAKgXAJQgLAEgaAGQAHgIACgJg");
	this.shape_736.setTransform(-93.4,72.8,0.334,0.334);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#000000").s().p("AgGAJQgSgIAUgLQAEAAAFAFQAFAFAFAAQgCALgKAAQgDAAgGgCg");
	this.shape_737.setTransform(-97.8,72.4,0.334,0.334);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#000000").s().p("AgIAEQgDgNgIAAQADgQAMAJQAQALAIgEIgOALQgHAGABAMQgGgBgCgPg");
	this.shape_738.setTransform(-12.8,72.3,0.334,0.334);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_739.setTransform(-19.3,71.8,0.334,0.334);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#000000").s().p("AgHAHIgCgVQATAHAAAWIgGAAQgIAAgDgIg");
	this.shape_740.setTransform(-53.5,72.2,0.334,0.334);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("AgTAHQADgYAkAFQgBAYgKABIgcgGg");
	this.shape_741.setTransform(-62.5,72.1,0.334,0.334);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#000000").s().p("AgYgNIAxAAQABAagaAAQgZAAABgag");
	this.shape_742.setTransform(-64.4,72.1,0.334,0.334);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#FF00FF").s().p("AgCAMIgRgHQABgFAKgDQAIgEAAgHQADAAAHAFQAFAFAFAAIAAATIgIAAQgIAAgGgDg");
	this.shape_743.setTransform(-66.5,72.2,0.334,0.334);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_744.setTransform(-84.7,72,0.334,0.334);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_745.setTransform(-86.8,72.1,0.334,0.334);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_746.setTransform(-9.8,71.7,0.334,0.334);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#000000").s().p("AgDAMQgRgMAHgOQAMgEAFALQAFALAHABQgCALgHAAQgEAAgGgEg");
	this.shape_747.setTransform(-39.4,71.9,0.334,0.334);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_748.setTransform(-46.8,71.7,0.334,0.334);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_749.setTransform(-69.9,71.6,0.334,0.334);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#000000").s().p("AgWAeQgBgEARgSQAKgMgQgFQABgFAKgEQAIgEAAgHQATAFgEALQgHAXACAKQgJgBgKAGQgJAFgIAAIgDAAg");
	this.shape_750.setTransform(-91.5,72.3,0.334,0.334);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_751.setTransform(-97.9,71.5,0.334,0.334);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_752.setTransform(-5.3,71.2,0.334,0.334);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_753.setTransform(-12.3,71.2,0.334,0.334);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#000000").s().p("AgEAKQgHgCAAgHQAAgHAGgCQAGgDALALQgJAKgGAAIgBAAg");
	this.shape_754.setTransform(-32.5,71.4,0.334,0.334);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#000000").s().p("AgXARQgEgPALgHQANgJAAgIQAFABAIAJQAIAIAIACQgHAOgQAIQgGADgGAAQgIAAgGgGg");
	this.shape_755.setTransform(-35.7,71.8,0.334,0.334);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#FF00FF").s().p("AgMAGQAEgTgHAAQANgZAMAbQAOAbgUAKQgUAAAEgUg");
	this.shape_756.setTransform(-37.6,71.8,0.334,0.334);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_757.setTransform(-49.7,71.2,0.334,0.334);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_758.setTransform(-52.2,71.2,0.334,0.334);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAGAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_759.setTransform(-77.9,71.4,0.334,0.334);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_760.setTransform(-90.1,71.2,0.334,0.334);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AAAAFQgHgHgIgBQADgTAQAMQARAKgHAQQgGgCgIgJg");
	this.shape_761.setTransform(-15.3,71.2,0.334,0.334);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_762.setTransform(-17.5,71.1,0.334,0.334);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_763.setTransform(-53,70.8,0.334,0.334);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_764.setTransform(-71.7,70.8,0.334,0.334);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_765.setTransform(-80.2,70.8,0.334,0.334);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_766.setTransform(-88.1,70.8,0.334,0.334);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_767.setTransform(-97.1,70.8,0.334,0.334);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_768.setTransform(-35.8,70.5,0.334,0.334);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_769.setTransform(-44,70.7,0.334,0.334);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#000000").s().p("AAGAHQgSgLgMAFQABgOAXAEQASAEAHAGQgDAKgHAAQgEAAgFgEg");
	this.shape_770.setTransform(-55,70.6,0.334,0.334);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_771.setTransform(-58.8,70.7,0.334,0.334);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_772.setTransform(-60.5,70.5,0.334,0.334);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_773.setTransform(-66.9,70.6,0.334,0.334);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_774.setTransform(-82.6,70.7,0.334,0.334);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_775.setTransform(-84.6,70.5,0.334,0.334);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#000000").s().p("AgPAJQgJgUAOgOQADAGANASQALAMACANIgKACQgRAAgHgRg");
	this.shape_776.setTransform(-88.5,71.2,0.334,0.334);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_777.setTransform(-7.6,70.2,0.334,0.334);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_778.setTransform(-22.1,70.3,0.334,0.334);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_779.setTransform(-30.8,70.3,0.334,0.334);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_780.setTransform(-42.2,70.2,0.334,0.334);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_781.setTransform(-61.5,70.2,0.334,0.334);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_782.setTransform(-87.7,70.2,0.334,0.334);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#000000").s().p("AAAACQgCgHgPgEQABgIAKgBIASgBIAGAcQgCAKgXABQAIgMgBgGg");
	this.shape_783.setTransform(-93.3,70.7,0.334,0.334);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#000000").s().p("AgOAeQgGgUAOgMQANgNgCgOQARAIgIAbQgHAYgPAAIgGAAg");
	this.shape_784.setTransform(-4.3,70.7,0.334,0.334);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#000000").s().p("AgCALQgagDALgSQANAKAaAAQACALgUAAIgGAAg");
	this.shape_785.setTransform(-17.5,70,0.334,0.334);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_786.setTransform(-19.6,69.8,0.334,0.334);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_787.setTransform(-34.7,70.1,0.334,0.334);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_788.setTransform(-40.8,70,0.334,0.334);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#000000").s().p("AgJAUQABgGgDgCQgCgBgGgBIAAgTQAJABABgLIATAAQgCAFAEADIAIACIAAATQgFgBgDADQgCACAAAGg");
	this.shape_789.setTransform(-63.2,70.3,0.334,0.334);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#000000").s().p("AAAAGQgGgHgLABQABgCAFgHQAEgEAAgGIATAAQgBALAHALQADAGgJALIgMgOg");
	this.shape_790.setTransform(-65.2,70.3,0.334,0.334);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_791.setTransform(-75.5,70,0.334,0.334);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AAEAIQgPgLgIAEQABgPARAFQAIADANAHQgCAKgGAAQgDAAgFgDg");
	this.shape_792.setTransform(-6.1,69.7,0.334,0.334);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AgYAQQABgFAKgEQAJgEAAgGQAAgGgIgCIgMgCQAFgRAQAIQAWALAGgCQgBADgPAKQgJAHAFATQgOgLgPABg");
	this.shape_793.setTransform(-13.3,70.2,0.334,0.334);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#000000").s().p("AgEAVQgZgCAAggQAVgJALACQAKACARAPQgKAYgVAAIgDAAg");
	this.shape_794.setTransform(-39.2,70.1,0.334,0.334);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_795.setTransform(-61.4,69.5,0.334,0.334);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#000000").s().p("AgIAEIgBgSQALgCAEAGQADAEABALQgGgBgCADQgCACAAAGQgGgBgCgKg");
	this.shape_796.setTransform(-26.5,69.5,0.334,0.334);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#000000").s().p("AgHAGQACgbgBgDQAOAKAAALIgFAcIgBAAQgLAAACgTg");
	this.shape_797.setTransform(-37.2,69.8,0.334,0.334);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_798.setTransform(-69.4,69.2,0.334,0.334);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_799.setTransform(-78.4,69.3,0.334,0.334);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_800.setTransform(-94.4,69.3,0.334,0.334);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#000000").s().p("AgSACQgGgKAAgLIAdAAQABAGgDACIgHACQABAHAJACIATAAQgHARgMgBQgSgCgMAGQAJgLgDgHg");
	this.shape_801.setTransform(-97.4,69.7,0.334,0.334);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_802.setTransform(-5.9,68.8,0.334,0.334);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_803.setTransform(-20,68.8,0.334,0.334);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_804.setTransform(-24,69,0.334,0.334);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_805.setTransform(-60,68.8,0.334,0.334);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_806.setTransform(-80.2,69,0.334,0.334);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#000000").s().p("AgKAHQACgbgBgDQAWgHgCAZQgCAWgJAJIAAAAQgMAAACgTg");
	this.shape_807.setTransform(-83.5,69.5,0.334,0.334);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_808.setTransform(-86.7,68.8,0.334,0.334);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#000000").s().p("AgYAPQABgFAKgEQAJgEAAgGQABgGgDgCQgCgCgGAAQACgIAMgBIAZgBQgBAFgOAPQgKAKAFATQgPgKgOAAg");
	this.shape_809.setTransform(-8.6,69.2,0.334,0.334);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#000000").s().p("AACAZIgVgKQAAgGAHgCIAMgCQgDgIgDgEQgGgGgHgBQADgRAMAJQAQAMAIgEQgHAIgBAIQgDALALACQgBALgJAAIgIgBg");
	this.shape_810.setTransform(-15.8,69.2,0.334,0.334);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AgGALQABgGgDgCQgCgBgGgBQgDgPAWAFQAVAEgLAQg");
	this.shape_811.setTransform(-32.9,68.6,0.334,0.334);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_812.setTransform(-36.5,68.7,0.334,0.334);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_813.setTransform(-38,68.5,0.334,0.334);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_814.setTransform(-42,68.7,0.334,0.334);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_815.setTransform(-60.7,68.7,0.334,0.334);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_816.setTransform(-61.7,68.5,0.334,0.334);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_817.setTransform(-63.5,68.7,0.334,0.334);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_818.setTransform(-65.9,68.5,0.334,0.334);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#000000").s().p("AgGALQABgGgDgCQgCgBgGgBQgDgPAWAFQAVAEgLAQg");
	this.shape_819.setTransform(-95.4,68.6,0.334,0.334);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#000000").s().p("AgCAJQgHgCgCgHQgCgHAGgCQAHgBAMALQgGAJgGAAIgCgBg");
	this.shape_820.setTransform(-38.9,68.3,0.334,0.334);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_821.setTransform(-40.5,68.3,0.334,0.334);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_822.setTransform(-50.3,68.2,0.334,0.334);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_823.setTransform(-73.5,68.4,0.334,0.334);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_824.setTransform(-82.4,68.2,0.334,0.334);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#000000").s().p("AgRAJQgEgTgDgJQAJABAKgGQAKgGAKABIgGAJQgEAFAAAGQAAAGAHACIANABQgDAKgHAFQgJAGgBgLQgFAAgCAHIgCANQgJgFgEgQg");
	this.shape_825.setTransform(-88.1,69,0.334,0.334);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#000000").s().p("AACAKIgVgKQADgQAMAJQAQALAIgEQgBALgJAAIgIgBg");
	this.shape_826.setTransform(-6.8,68,0.334,0.334);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_827.setTransform(-28,67.8,0.334,0.334);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_828.setTransform(-38.2,67.8,0.334,0.334);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_829.setTransform(-45.3,67.8,0.334,0.334);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_830.setTransform(-67.4,67.8,0.334,0.334);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_831.setTransform(-76,68,0.334,0.334);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#000000").s().p("AgFAGQgDgGAEgEQAGgHAEAGQAEAFgFAFQgEAEgCAAQgCAAgCgDg");
	this.shape_832.setTransform(-81.1,68.2,0.334,0.334);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#000000").s().p("AgKAXQgUgFADgSQAVAQAFgMQADgKgJgXQAKgCAFAGQADAEABAMQAJACABgMQANAKgNAKQgOAMAOARIgggHg");
	this.shape_833.setTransform(-11.5,68.3,0.334,0.334);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_834.setTransform(-12.3,67.5,0.334,0.334);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_835.setTransform(-22,67.5,0.334,0.334);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_836.setTransform(-64,67.5,0.334,0.334);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_837.setTransform(-88.4,67.5,0.334,0.334);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_838.setTransform(-3.1,67.3,0.334,0.334);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_839.setTransform(-3.9,67.2,0.334,0.334);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#000000").s().p("AgLACQAKgMAGABQAHABAAAIQAAAHgFACIgDABQgGAAgJgIg");
	this.shape_840.setTransform(-9.4,67.3,0.334,0.334);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_841.setTransform(-16.4,67.3,0.334,0.334);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_842.setTransform(-20.3,67.2,0.334,0.334);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_843.setTransform(-26.1,67.4,0.334,0.334);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_844.setTransform(-34.8,67.3,0.334,0.334);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_845.setTransform(-62.5,67.3,0.334,0.334);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_846.setTransform(-91.7,67.2,0.334,0.334);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#000000").s().p("AgOAKIAAgnQASAFAIATQAIAUgPAPQgQgBgDgTg");
	this.shape_847.setTransform(-99.1,68,0.334,0.334);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#000000").s().p("AgHAIQgOgGACgQIAbAHQAOAGgCAQIgbgHg");
	this.shape_848.setTransform(-6.8,67.2,0.334,0.334);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_849.setTransform(-50.3,67,0.334,0.334);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_850.setTransform(-71.2,67,0.334,0.334);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_851.setTransform(-78.9,67,0.334,0.334);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#000000").s().p("AgPAGQAMgTgGgLQAGAAABAHIACANQAAAFAHABIANADQgBAGgPADQgNACAAAJQgQgEAKgPg");
	this.shape_852.setTransform(-96.9,67.5,0.334,0.334);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#000000").s().p("AgSAFQgIgFAJgFQAKgGAeADQgGAPgPADIgFAAQgIAAgHgFg");
	this.shape_853.setTransform(-18.9,66.6,0.334,0.334);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_854.setTransform(-20.6,66.5,0.334,0.334);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_855.setTransform(-73.9,66.5,0.334,0.334);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#000000").s().p("AgOAOQABgFAKgEQAIgEAAgGQABgGgDgCQgCgBgFgBQAKgOAGAIQAEAHgCAPQgCAQgIAGQgCACgCAAQgHAAgHgLg");
	this.shape_856.setTransform(-83.4,67.2,0.334,0.334);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_857.setTransform(-2.8,66.3,0.334,0.334);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_858.setTransform(-6.3,66.2,0.334,0.334);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#000000").s().p("AgCALQgVgEALgRQAJgBAGAFQAIAGAGAAQACALgOAAIgHAAg");
	this.shape_859.setTransform(-16.3,66.4,0.334,0.334);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_860.setTransform(-22.6,66.2,0.334,0.334);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_861.setTransform(-63.4,66.2,0.334,0.334);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_862.setTransform(-65.2,66.2,0.334,0.334);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_863.setTransform(-76.7,66.2,0.334,0.334);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_864.setTransform(-98.1,66.2,0.334,0.334);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_865.setTransform(-26,65.8,0.334,0.334);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#000000").s().p("AgRAAQgDgMAZADQAXADgQAQQADgEgggGg");
	this.shape_866.setTransform(-28.5,66,0.334,0.334);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#000000").s().p("AgNAPIAAgTQAJABABgLQAOAEACAHQACAHgJALg");
	this.shape_867.setTransform(-37.4,66.2,0.334,0.334);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_868.setTransform(-38.3,65.8,0.334,0.334);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_869.setTransform(-87.7,66,0.334,0.334);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#000000").s().p("AgYAoQgCgMAGgEQAEgDAMgBIgNgMQgJgHACgKQAVABgEgIQgJgPACgIQAYAEAAAaQAAAZAPAEQgLAUgeAAIgIAAg");
	this.shape_870.setTransform(-90.1,67,0.334,0.334);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#000000").s().p("AgIATQgIgEgCAKQgUgGANgJQARgMAAgCQABgGgDgCQgCgCgGAAQAHgLANAEQAQAFANgIQgBARgTAGQgNADANAXIgCAAQgGAAgLgGg");
	this.shape_871.setTransform(-11.8,66.2,0.334,0.334);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_872.setTransform(-18.3,65.7,0.334,0.334);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_873.setTransform(-48.5,65.5,0.334,0.334);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_874.setTransform(-78,65.7,0.334,0.334);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#000000").s().p("AAAAWQgHgJgMACQgBgMAPgMQAHgHgVgIQAEgQAMAJQAPALAIgEQgIAQADAQQABARgGAKIgKgNg");
	this.shape_875.setTransform(-5.1,66.2,0.334,0.334);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#000000").s().p("AADAJQgMAGgKAAQACgHAIgIQAJgHAAgHQAEABAFAEQAGAFAFAAIAAATQgLgKgGAEg");
	this.shape_876.setTransform(-19.5,65.5,0.334,0.334);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#000000").s().p("AgIgDQAIgLAFAEQAFADgBAJQAAAKgFABIAAAAQgEAAgIgQg");
	this.shape_877.setTransform(-47.5,65.5,0.334,0.334);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#000000").s().p("AgIAHQgDgHAKgLQAMAKgBAGQgBAHgIAAQgHAAgCgFg");
	this.shape_878.setTransform(-69.1,65.4,0.334,0.334);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#000000").s().p("AgLAJQALgPgEgIIgUAAQACgJAOAAIAXgBQgCAQAMAEQgBAHgPAFQgOAFABAMQgQgEAJgMg");
	this.shape_879.setTransform(-85.1,65.8,0.334,0.334);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#000000").s().p("AgTAUQAHgIACgJQACgKgLgCQAEgQALAJQAQALAIgEQgFADgMAPQgHALgNAAIgCAAg");
	this.shape_880.setTransform(-14.4,65.3,0.334,0.334);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#000000").s().p("AgFAGQgNgFAEgPQAggDgDAgQgBgBgTgIg");
	this.shape_881.setTransform(-17.3,65.2,0.334,0.334);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_882.setTransform(-18.6,64.8,0.334,0.334);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_883.setTransform(-26,65,0.334,0.334);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_884.setTransform(-71.9,64.9,0.334,0.334);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_885.setTransform(-78.4,64.8,0.334,0.334);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#000000").s().p("AgIAJQgLgdAOgEQAUACgHAQQgHARANAEQgFAKgFAAQgFAAgHgQg");
	this.shape_886.setTransform(-99,65.5,0.334,0.334);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_887.setTransform(-11.4,64.7,0.334,0.334);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_888.setTransform(-24,64.5,0.334,0.334);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_889.setTransform(-24.6,64.5,0.334,0.334);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_890.setTransform(-51.5,64.6,0.334,0.334);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_891.setTransform(-75,64.7,0.334,0.334);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_892.setTransform(-80.1,64.5,0.334,0.334);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_893.setTransform(-81.4,64.5,0.334,0.334);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_894.setTransform(-84.1,64.5,0.334,0.334);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_895.setTransform(-90.7,64.5,0.334,0.334);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#000000").s().p("AgXAZQAAgGAHgCIANgCQAAgJgNgIQgLgHAEgPIAnAAIgGAJQgEAFAAAGQAAAFAHABIANADQgBAOgQAEQgHACgNAAIgMAAg");
	this.shape_896.setTransform(-96.4,65.2,0.334,0.334);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#000000").s().p("AgOAPIAAgdQAGACAIAIQAHAIAIABQABAFgDADIgIACg");
	this.shape_897.setTransform(-28,64.5,0.334,0.334);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#000000").s().p("AAHATQgLAGgKAAQAAgPgBgFQgCgIgHgBQAJgSAegCIgGAJQgEAFAAAGIANALQAJAGgCAMQgLgJgHADg");
	this.shape_898.setTransform(-89.4,64.8,0.334,0.334);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#000000").s().p("AADANQgNgLgJgEQAEgQAMAJQAPAKAIgDQgEAQgJAAIgEgBg");
	this.shape_899.setTransform(-17.1,64.1,0.334,0.334);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_900.setTransform(-24,63.8,0.334,0.334);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_901.setTransform(-66.9,63.8,0.334,0.334);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_902.setTransform(-73.2,64,0.334,0.334);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_903.setTransform(-80.1,63.8,0.334,0.334);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_904.setTransform(-84.7,63.8,0.334,0.334);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#000000").s().p("AgTAUIAFgYIgFgZQAJAAAKAFQAKAGAKgBQgMARgDAEQgCAHAHAVQgPgKgOAAg");
	this.shape_905.setTransform(-3.1,64.3,0.334,0.334);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_906.setTransform(-23.3,63.7,0.334,0.334);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_907.setTransform(-69.7,63.7,0.334,0.334);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#000000").s().p("AgMAQQAHgKABgGQgBgFgHgCIgMgCQAJgSAegCIgGAJQgEAFAAAGIANAKQAJAHgCAMQgPgBgFABQgIACgBAIQgLgEADgKg");
	this.shape_908.setTransform(-93.7,64.3,0.334,0.334);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#000000").s().p("AAMgdQANAHgOAZQgMAYgQADQAEgoAZgTg");
	this.shape_909.setTransform(-100,64.3,0.334,0.334);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#000000").s().p("AgdAUQABgFAKgEQAJgEAAgHQgBgFgGgCIgNgCQAKgNASAFQATAHAMgJQAAAIgNAJQgLAHAEAPg");
	this.shape_910.setTransform(-12.4,63.7,0.334,0.334);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_911.setTransform(-22.3,63.2,0.334,0.334);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_912.setTransform(-46.3,63.2,0.334,0.334);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_913.setTransform(-76.9,63.3,0.334,0.334);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#000000").s().p("AgLAJQgGgFANgPQATAEgBAHQAAAGgLAEIgIACQgEAAgCgDg");
	this.shape_914.setTransform(-83.7,63.4,0.334,0.334);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_915.setTransform(-86.1,63.2,0.334,0.334);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#000000").s().p("AgJAEQADgPgSgEQABgOAaAJQAaAIgEAQQgJACgBgLQgIABgBAJIgBATQgSgDAEgRg");
	this.shape_916.setTransform(-5.6,63.5,0.334,0.334);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_917.setTransform(-56.3,62.8,0.334,0.334);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_918.setTransform(-70.9,63,0.334,0.334);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#000000").s().p("AgDAFQgGgEgFAAQAEgRARAIQASAIgUALQgDgBgFgFg");
	this.shape_919.setTransform(-84.7,63,0.334,0.334);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#000000").s().p("AgRAMQAIgLAAgFQABgGgDgCQgCgBgGgBQAIgTAJAPQAKAUAMgGQgBAIgPAEQgOAFABAMQgLgEADgJg");
	this.shape_920.setTransform(-91.2,63.5,0.334,0.334);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_921.setTransform(-92.7,62.8,0.334,0.334);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_922.setTransform(-100.1,62.8,0.334,0.334);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_923.setTransform(-11.9,62.5,0.334,0.334);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#000000").s().p("AgTAQQABgHAKgIQAHgHABgHIgTAAQABgQARAFQAIADANAIQgLAMABAbQgPgLgOABg");
	this.shape_924.setTransform(-15.1,63.1,0.334,0.334);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_925.setTransform(-22.6,62.5,0.334,0.334);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_926.setTransform(-46.7,62.5,0.334,0.334);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_927.setTransform(-77.8,62.7,0.334,0.334);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#000000").s().p("AgSAMQgGgRADgiQAiAFAIAYQAHAWgUAcQgUgFgGgXg");
	this.shape_928.setTransform(-98.2,63.7,0.334,0.334);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#000000").s().p("AgJgTQAXADgEAkQgYgDAFgkg");
	this.shape_929.setTransform(-2.1,62.7,0.334,0.334);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#000000").s().p("AgCALQgagDALgSQAMgCAKAEIARAIQACAMgUAAIgGgBg");
	this.shape_930.setTransform(-4.1,62.4,0.334,0.334);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_931.setTransform(-68.4,62.3,0.334,0.334);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_932.setTransform(-79.1,62.2,0.334,0.334);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_933.setTransform(-97.2,62.3,0.334,0.334);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#000000").s().p("AgDgDIAXgBQgCAHgNACQgQgBgIABQACgIAOAAg");
	this.shape_934.setTransform(-100.6,62.2,0.334,0.334);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#000000").s().p("AgFANQgIgXgFABQAAgTAQAMQAOALgBgOQAMAEgFAJQgFAIgMgCQgBAFADADIAIACQgGALgEAAQgDAAgDgIg");
	this.shape_935.setTransform(-24.5,62.3,0.334,0.334);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_936.setTransform(-72.7,61.8,0.334,0.334);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_937.setTransform(-75.2,61.8,0.334,0.334);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#000000").s().p("AAGATQgLAGgKAAQAAgPgBgFQgCgIgHgBQABgFAKgEQAJgEAAgHQAIABgBAKQAAAIgHABQgCAJAUABQATAAgIATQgLgJgHADg");
	this.shape_938.setTransform(-88.7,62.5,0.334,0.334);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_939.setTransform(-99.4,61.8,0.334,0.334);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_940.setTransform(-51.2,61.5,0.334,0.334);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#000000").s().p("AgSAPQgJgTATAAQAUAAgBgKQAUAHgSAMQgNAKgNAAIgFAAg");
	this.shape_941.setTransform(-65.9,61.8,0.334,0.334);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_942.setTransform(-69,61.5,0.334,0.334);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_943.setTransform(-79.4,61.5,0.334,0.334);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#000000").s().p("AgJgOQATAHAAAWQgTgIAAgVg");
	this.shape_944.setTransform(-92.9,61.8,0.334,0.334);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#000000").s().p("AgJAPQgCgGAEgCQACgBAFgBQABgFgCgCQgCgBgGgBQAEgOAFACQAGACADALQAEAJgEAHQgDAEgGAAQgEAAgFgCg");
	this.shape_945.setTransform(-20.4,61.5,0.334,0.334);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#000000").s().p("AgKACQgFgDAFgDQAGgDARADQgEAJgIABIgBABQgGAAgEgFg");
	this.shape_946.setTransform(-23.2,61.2,0.334,0.334);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_947.setTransform(-24.3,61.2,0.334,0.334);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_948.setTransform(-28,61.2,0.334,0.334);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_949.setTransform(-53.4,61.4,0.334,0.334);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_950.setTransform(-76,61.2,0.334,0.334);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#000000").s().p("AAAARIgTgRQABgFAKgEQAIgEAAgHQAHABACAOQACAOAJAAQgEAMgIAAQgEAAgEgEg");
	this.shape_951.setTransform(-86.2,61.7,0.334,0.334);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#000000").s().p("AgCALQgagDALgSQAMgCAKAEIARAIQACAMgUAAIgGgBg");
	this.shape_952.setTransform(-90.6,61.4,0.334,0.334);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#000000").s().p("AAGAFQgbgCgDABQAAgFAHgCIANgCIAdAAQABALgQAAIgEgBg");
	this.shape_953.setTransform(-100.1,61.2,0.334,0.334);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_954.setTransform(-1.9,60.8,0.334,0.334);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#000000").s().p("AgYAZQAAgGAHgCIANgCQACgLgJgMQgIgLAFgPQAIAAAIAMQAIAMAPgEQgBAGgGABIgNADQATAPgQAQQgIAIgHAAQgIAAgJgKg");
	this.shape_955.setTransform(-10.6,61.8,0.334,0.334);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_956.setTransform(-17.6,60.8,0.334,0.334);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_957.setTransform(-30.6,60.8,0.334,0.334);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#000000").s().p("AgHAFQAKgQgDgIQAPABgFARQgDAIgHANQgQgEAJgLg");
	this.shape_958.setTransform(-80.5,61.3,0.334,0.334);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_959.setTransform(-96.6,60.8,0.334,0.334);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_960.setTransform(-4.9,60.5,0.334,0.334);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#000000").s().p("AgTAPQABgEAPgKQAKgHgHgSQAZgBgHAQQgMAYAEAKQgOgKgPAAg");
	this.shape_961.setTransform(-6.4,61.2,0.334,0.334);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#000000").s().p("AgGAJQgSgIAUgLQAEAAAFAFQAFAFAFAAQgCALgKAAQgDAAgGgCg");
	this.shape_962.setTransform(-8.6,60.7,0.334,0.334);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_963.setTransform(-49,60.5,0.334,0.334);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_964.setTransform(-51,60.5,0.334,0.334);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#000000").s().p("AgLgDQAMgNAPAJQgBAEgKAEQgIAEAAAHQgVgEANgLg");
	this.shape_965.setTransform(-74.4,60.6,0.334,0.334);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#000000").s().p("AgIAGQgDgGAKgLQAMAKgBAHQgBAFgIABQgHAAgCgGg");
	this.shape_966.setTransform(-77.2,60.7,0.334,0.334);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_967.setTransform(-79.1,60.5,0.334,0.334);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_968.setTransform(-85.4,60.5,0.334,0.334);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#000000").s().p("AgUAIQgFgFAPgDQAKgBAJAAIAAgKQAZAEgWALQgNAIgJAAQgGAAgEgEg");
	this.shape_969.setTransform(-87.9,60.7,0.334,0.334);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_970.setTransform(-91.6,60.5,0.334,0.334);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_971.setTransform(-11.6,60.2,0.334,0.334);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#000000").s().p("AgKACQgFgDAFgDQAGgDARADQgEAJgIABIgBABQgGAAgEgFg");
	this.shape_972.setTransform(-14.2,60.1,0.334,0.334);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#000000").s().p("AgXAPQgHgPARgEQAPgEgFgQIAdAAQgNARgCAFQgDAGAIAVQgNgLgaABg");
	this.shape_973.setTransform(-16,60.8,0.334,0.334);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#000000").s().p("AgGAJQgSgIAUgLQAEAAAFAFQAFAFAFAAQgCALgKAAQgDAAgGgCg");
	this.shape_974.setTransform(-18.6,60.4,0.334,0.334);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_975.setTransform(-22.8,60.4,0.334,0.334);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_976.setTransform(-1.8,59.8,0.334,0.334);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_977.setTransform(-2.9,59.8,0.334,0.334);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_978.setTransform(-27.5,59.8,0.334,0.334);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_979.setTransform(-28.3,59.8,0.334,0.334);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_980.setTransform(-74.7,59.8,0.334,0.334);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_981.setTransform(-86.2,59.8,0.334,0.334);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_982.setTransform(-88.6,60,0.334,0.334);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_983.setTransform(-5.9,59.7,0.334,0.334);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_984.setTransform(-8.4,59.6,0.334,0.334);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#000000").s().p("AgMAPQgEgbgEgBQADgRAUAKQAWAKgGAQQgJABgBgKQgJABABAIQAAAJAIABQgJAJgFAAQgGAAgBgKg");
	this.shape_985.setTransform(-25.1,60.1,0.334,0.334);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_986.setTransform(-52,59.5,0.334,0.334);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_987.setTransform(-83.4,59.5,0.334,0.334);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_988.setTransform(-84.1,59.5,0.334,0.334);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#000000").s().p("AgOADQgFgEAHgDQAJgDAUAEQgHAJgKABIgDAAQgHAAgEgEg");
	this.shape_989.setTransform(-100.8,59.5,0.334,0.334);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_990.setTransform(-1.8,59.2,0.334,0.334);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_991.setTransform(-10.9,59.3,0.334,0.334);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_992.setTransform(-24,59.2,0.334,0.334);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_993.setTransform(-80.9,59.3,0.334,0.334);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_994.setTransform(-13.3,59,0.334,0.334);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_995.setTransform(-15.8,59,0.334,0.334);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_996.setTransform(-19,59,0.334,0.334);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_997.setTransform(-69.5,58.8,0.334,0.334);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#000000").s().p("AgSAPQAAgNASgCQgMgKAGgKQAGgKATABQgHAIgCAJQgCALALABIgOAMQgHAGACAMQgSgCAAgNg");
	this.shape_998.setTransform(-72.2,59.7,0.334,0.334);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_999.setTransform(-97.6,58.8,0.334,0.334);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1000.setTransform(-29.1,58.5,0.334,0.334);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#000000").s().p("AgKATQgBgJAGgKQAFgLAAgJQANgDgCAaQgCATgJAAQgFAAgFgDg");
	this.shape_1001.setTransform(-52.8,59,0.334,0.334);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1002.setTransform(-90.1,58.5,0.334,0.334);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1003.setTransform(-92.4,58.5,0.334,0.334);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#000000").s().p("AgOADQgFgEAHgDQAJgDAUAEQgHAJgKABIgDAAQgHAAgEgEg");
	this.shape_1004.setTransform(-100.5,58.5,0.334,0.334);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#000000").s().p("AgOADQgFgEAHgDQAJgDAUAEQgHAJgKABIgDAAQgHAAgEgEg");
	this.shape_1005.setTransform(-1.7,58.1,0.334,0.334);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#000000").s().p("AgHAEQABgQgBgHQALAHAEALQADALgJAKQgIgCgBgOg");
	this.shape_1006.setTransform(-67.9,58.7,0.334,0.334);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1007.setTransform(-82.1,58.2,0.334,0.334);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1008.setTransform(-70.4,57.8,0.334,0.334);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1009.setTransform(-76.5,57.8,0.334,0.334);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1010.setTransform(-79.4,58,0.334,0.334);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1011.setTransform(-84.6,58,0.334,0.334);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1012.setTransform(-4.4,57.6,0.334,0.334);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1013.setTransform(-7.4,57.5,0.334,0.334);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1014.setTransform(-9.8,57.5,0.334,0.334);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1015.setTransform(-11.9,57.5,0.334,0.334);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1016.setTransform(-15,57.5,0.334,0.334);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1017.setTransform(-17.8,57.5,0.334,0.334);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1018.setTransform(-20.1,57.5,0.334,0.334);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1019.setTransform(-22.8,57.5,0.334,0.334);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1020.setTransform(-35.7,57.5,0.334,0.334);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1021.setTransform(-52.2,57.6,0.334,0.334);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_1022.setTransform(-64.7,57.5,0.334,0.334);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#000000").s().p("AABAJQgEgEgGAAIAAgTQAMgDAFAKQABAEABASQgDgBgGgFg");
	this.shape_1023.setTransform(-71.5,57.8,0.334,0.334);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_1024.setTransform(-73.9,57.6,0.334,0.334);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1025.setTransform(-100.2,57.5,0.334,0.334);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#000000").s().p("AABAKIgUgKQAEgQAMAJQAPALAIgEQgBALgJAAIgJgBg");
	this.shape_1026.setTransform(-1.8,57.3,0.334,0.334);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1027.setTransform(-25.8,57.3,0.334,0.334);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1028.setTransform(-28.1,57.3,0.334,0.334);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1029.setTransform(-30.5,57.3,0.334,0.334);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1030.setTransform(-96.2,57.3,0.334,0.334);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1031.setTransform(-42.1,57.1,0.334,0.334);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1032.setTransform(-32.6,56.5,0.334,0.334);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_1033.setTransform(-57.7,56.5,0.334,0.334);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1034.setTransform(-85.9,56.5,0.334,0.334);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1035.setTransform(-88.6,56.7,0.334,0.334);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1036.setTransform(-91.2,56.5,0.334,0.334);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1037.setTransform(-93.7,56.6,0.334,0.334);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#000000").s().p("AgFALQgSgCgHgIQAAgMAiAAQAiABgJAVIgRABIgRgBg");
	this.shape_1038.setTransform(-2.4,56.3,0.334,0.334);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1039.setTransform(-44.2,56.2,0.334,0.334);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1040.setTransform(-56.3,56.2,0.334,0.334);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#000000").s().p("AgCALQgVgEALgRQAJgBAGAFQAIAGAGAAQACALgOAAIgHAAg");
	this.shape_1041.setTransform(-74.8,56.4,0.334,0.334);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1042.setTransform(-83.4,56.3,0.334,0.334);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1043.setTransform(-45,55.8,0.334,0.334);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1044.setTransform(-48.2,55.9,0.334,0.334);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1045.setTransform(-72.3,56.1,0.334,0.334);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1046.setTransform(-73.4,55.8,0.334,0.334);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1047.setTransform(-76.4,55.8,0.334,0.334);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#000000").s().p("AgMAIQgHgFAFgNQAJAGAEABQAFABABgIQAOAEgCAGQgCAFgKAEIgJACQgEAAgEgDg");
	this.shape_1048.setTransform(-77.7,56,0.334,0.334);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#000000").s().p("AgIABQAEgFAAgFIATAAQADANgLADQgDACgSABQABgDAFgGg");
	this.shape_1049.setTransform(-80.4,56,0.334,0.334);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#000000").s().p("AAGAFQgbgCgDABQAAgFAHgCIANgCIAdAAQABALgQAAIgEgBg");
	this.shape_1050.setTransform(-1.6,55.5,0.334,0.334);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAGAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1051.setTransform(-5.8,55.7,0.334,0.334);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1052.setTransform(-13.8,55.6,0.334,0.334);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1053.setTransform(-19.3,55.6,0.334,0.334);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1054.setTransform(-22.1,55.6,0.334,0.334);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1055.setTransform(-24.8,55.6,0.334,0.334);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1056.setTransform(-45.8,55.5,0.334,0.334);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#000000").s().p("AgIAGQgDgGAKgLQAMAKgBAGQgBAHgIAAQgHAAgCgGg");
	this.shape_1057.setTransform(-9,55.4,0.334,0.334);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#000000").s().p("AgEAJQgEgIACgDQAJgYAEAUQAEAVgIACIgBAAQgDAAgDgIg");
	this.shape_1058.setTransform(-11.2,55.4,0.334,0.334);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#000000").s().p("AgOAKQgDgNAKgEQAFgCARAAQgHATgVAAIgBAAg");
	this.shape_1059.setTransform(-27.3,55.3,0.334,0.334);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#000000").s().p("AgIAEIgBgSQALgCAEAGQADAEABALQgFgBgDADQgCACAAAGQgGgBgCgKg");
	this.shape_1060.setTransform(-30.1,55.5,0.334,0.334);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1061.setTransform(-32.6,55.3,0.334,0.334);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1062.setTransform(-41.7,55.1,0.334,0.334);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1063.setTransform(-49.2,55.3,0.334,0.334);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#000000").s().p("AgOAGIAAgTQAPAKAOAAQgEAOgIACIgCABQgFAAgKgIg");
	this.shape_1064.setTransform(-3.6,55.1,0.334,0.334);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#000000").s().p("AAGAFQgfgCgEABQABgGAKgCIASgBIAeAAQgBALgRAAIgGgBg");
	this.shape_1065.setTransform(-54.8,54.5,0.334,0.334);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1066.setTransform(-61.5,54.5,0.334,0.334);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1067.setTransform(-62.4,54.5,0.334,0.334);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_1068.setTransform(-41.3,54.2,0.334,0.334);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#000000").s().p("AgDARQgCgBgGgBIgyAAQgKgEAFgDQAGgDAJAAIBZAAIAAgdQALgBAAAVQAAASATgJQgLARgTgCQgZgDgOAIQABgGgDgCg");
	this.shape_1069.setTransform(-47.1,53.8,0.334,0.334);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#000000").s().p("AAGAFQgbgCgDABQAAgFAHgCIANgCIAdAAQABALgQAAIgEgBg");
	this.shape_1070.setTransform(-100.7,53.2,0.334,0.334);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1071.setTransform(-77.2,53,0.334,0.334);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1072.setTransform(-91.1,53,0.334,0.334);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1073.setTransform(-93.7,52.8,0.334,0.334);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1074.setTransform(0.4,52.5,0.334,0.334);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1075.setTransform(-22.1,52.5,0.334,0.334);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1076.setTransform(-24.6,52.5,0.334,0.334);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1077.setTransform(-32.8,52.6,0.334,0.334);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1078.setTransform(-34,52.5,0.334,0.334);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgHAKgBg");
	this.shape_1079.setTransform(-41,52.5,0.334,0.334);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#000000").s().p("AgMANIAKgTIAAgKQAYgEgNAVQgJAQgGAAQgDAAgDgEg");
	this.shape_1080.setTransform(-72.4,52.9,0.334,0.334);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#000000").s().p("AgGALQgEgJAHgRQALAKAAAJQAAAJgGACIgCABQgEAAgCgFg");
	this.shape_1081.setTransform(-74.8,52.9,0.334,0.334);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1082.setTransform(-80.2,52.7,0.334,0.334);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#000000").s().p("AgIgDQAIgLAFAEQAFADgBAJQAAAKgFABIAAAAQgEAAgIgQg");
	this.shape_1083.setTransform(-83.2,52.8,0.334,0.334);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1084.setTransform(-85.9,52.6,0.334,0.334);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1085.setTransform(-88.5,52.7,0.334,0.334);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1086.setTransform(-96.2,52.5,0.334,0.334);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1087.setTransform(-8.4,52.4,0.334,0.334);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1088.setTransform(-10.9,52.1,0.334,0.334);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1089.setTransform(-16.3,52.3,0.334,0.334);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1090.setTransform(-30,52.3,0.334,0.334);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1091.setTransform(-44.3,52.1,0.334,0.334);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1092.setTransform(-50.7,52.3,0.334,0.334);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#000000").s().p("AgLACQAKgMAGABQAHABAAAIQAAAHgGACIgCABQgGAAgJgIg");
	this.shape_1093.setTransform(-69.8,52.3,0.334,0.334);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1094.setTransform(0.1,51.8,0.334,0.334);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgHAKgBg");
	this.shape_1095.setTransform(-1.3,51.8,0.334,0.334);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1096.setTransform(-13.4,51.8,0.334,0.334);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQADgKADAFQADAGAAAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1097.setTransform(-19,52.1,0.334,0.334);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1098.setTransform(-58.2,51.8,0.334,0.334);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1099.setTransform(-6.3,51.6,0.334,0.334);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_1100.setTransform(-1.6,51.1,0.334,0.334);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1101.setTransform(-50.3,51.1,0.334,0.334);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#000000").s().p("AAJAGQgfgJgRAGQAGgOAhADQAfACAJAJQgDAGgKAAQgHAAgLgDg");
	this.shape_1102.setTransform(-100.2,51.2,0.334,0.334);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1103.setTransform(-25.5,50.8,0.334,0.334);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1104.setTransform(-30.6,50.8,0.334,0.334);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1105.setTransform(-32.8,50.8,0.334,0.334);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1106.setTransform(-74.2,50.8,0.334,0.334);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1107.setTransform(-76.5,50.9,0.334,0.334);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#000000").s().p("AACAHQgKgGgGgBQAEgKAJAEIAQAGQgDAIgGAAIgEgBg");
	this.shape_1108.setTransform(-79.4,51,0.334,0.334);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1109.setTransform(-81.9,50.9,0.334,0.334);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1110.setTransform(-87.2,50.8,0.334,0.334);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1111.setTransform(-90.1,50.8,0.334,0.334);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1112.setTransform(-92.4,50.8,0.334,0.334);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1113.setTransform(-94.7,51,0.334,0.334);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1114.setTransform(-97.7,50.8,0.334,0.334);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1115.setTransform(-0.3,50.5,0.334,0.334);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1116.setTransform(-69.9,50.5,0.334,0.334);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#000000").s().p("AgPAFQABgFAKgDQAIgEAAgHQAVAHgQAOQgIAIgFAAQgGAAgFgKg");
	this.shape_1117.setTransform(-84.4,50.8,0.334,0.334);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1118.setTransform(-15,50.1,0.334,0.334);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1119.setTransform(-22.8,50.4,0.334,0.334);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1120.setTransform(-47.3,50.1,0.334,0.334);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1121.setTransform(-50,50.3,0.334,0.334);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1122.setTransform(-59.7,50.1,0.334,0.334);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1123.setTransform(-99.4,50.3,0.334,0.334);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1124.setTransform(-100.4,50.1,0.334,0.334);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1125.setTransform(-101.3,50.1,0.334,0.334);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1126.setTransform(0.2,49.8,0.334,0.334);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1127.setTransform(-4.3,49.8,0.334,0.334);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1128.setTransform(-9.8,49.8,0.334,0.334);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1129.setTransform(-12.3,49.8,0.334,0.334);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1130.setTransform(-34.1,50,0.334,0.334);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQAEgKACAFQAEAGgBAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1131.setTransform(-68,50.1,0.334,0.334);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#000000").s().p("AgLAJQgGgFANgPQATAEgBAHQAAAGgLAEIgIACQgEAAgCgDg");
	this.shape_1132.setTransform(-28.6,49.7,0.334,0.334);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#000000").s().p("AgBAJQgKAAgBgFQAAgEAQgIQAMAIgEAFQgEAEgIAAIgBAAg");
	this.shape_1133.setTransform(-69.7,49.6,0.334,0.334);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1134.setTransform(-99.4,49.5,0.334,0.334);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#000000").s().p("AgIgIQAJgCAYABQgFAJgRADQgSAEgJADQABgOAPgEg");
	this.shape_1135.setTransform(-1.6,49.3,0.334,0.334);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1136.setTransform(-75.8,49.4,0.334,0.334);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1137.setTransform(-83.4,49.3,0.334,0.334);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1138.setTransform(-88.7,49.3,0.334,0.334);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1139.setTransform(-15.8,48.9,0.334,0.334);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1140.setTransform(-49.8,48.8,0.334,0.334);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#000000").s().p("AgLACQAKgMAHABQAFABABAIQAAAHgGACIgCABQgGAAgJgIg");
	this.shape_1141.setTransform(-53.1,48.9,0.334,0.334);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_1142.setTransform(-68.2,48.9,0.334,0.334);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#000000").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_1143.setTransform(-78.5,49,0.334,0.334);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1144.setTransform(-86.1,49,0.334,0.334);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1145.setTransform(-91.2,48.9,0.334,0.334);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1146.setTransform(-94.1,48.8,0.334,0.334);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1147.setTransform(-13.3,48.6,0.334,0.334);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_1148.setTransform(-20,48.6,0.334,0.334);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#000000").s().p("AAAATQgJgGgKACQgBgJAGgKQAGgLgBgJQAQAJAGAHQAKAMgDAVIgCAAQgIAAgKgGg");
	this.shape_1149.setTransform(-26.1,49.1,0.334,0.334);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#000000").s().p("AgOADQgFgEAHgDQAJgDAUAEQgHAJgKABIgDAAQgHAAgEgEg");
	this.shape_1150.setTransform(-51.4,48.5,0.334,0.334);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1151.setTransform(-96.4,48.5,0.334,0.334);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1152.setTransform(-99.4,48.5,0.334,0.334);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#000000").s().p("AgmALQANg1gIggQAMANAVgEQAMgCAYgHQgBAPgPAEQgKACgXgBQABAPgBAEQgCAKgIABQAGAWATgGQAggJAMADQgGAKgoAIQggAHgBAYQACAIAOABIAXABQgDAJgWAFQgWADgCANQgHgOAMgyg");
	this.shape_1153.setTransform(-2.3,50.5,0.334,0.334);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#000000").s().p("AgVACQAHgOgKgBQACgPAVAEQATAEAHAHQgCAlglACQgNgHAGgRg");
	this.shape_1154.setTransform(-74.4,48.8,0.334,0.334);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1155.setTransform(-10.8,48,0.334,0.334);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1156.setTransform(-16.9,48,0.334,0.334);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#000000").s().p("AABAJQgFgEgFAAIAAgTQAMgDAEAKQACAEABASQgDgBgGgFg");
	this.shape_1157.setTransform(-90.6,48.1,0.334,0.334);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1158.setTransform(-96.1,47.8,0.334,0.334);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1159.setTransform(-8.4,47.5,0.334,0.334);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#000000").s().p("AgXAbQgIgYATgJQATgLgBgPQAXAMgDAvIgZAGIgYgGg");
	this.shape_1160.setTransform(-81.1,48.4,0.334,0.334);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#000000").s().p("AABANQgJgGgGgBQABgDAFgFQAEgFAAgGIATAAQgNARANACQgDAIgGAAIgFgBg");
	this.shape_1161.setTransform(-93.4,47.8,0.334,0.334);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1162.setTransform(-99.6,47.6,0.334,0.334);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#000000").s().p("AgBAJQgKAAgBgFQAAgEAQgIQAMAIgEAFQgEAEgIAAIgBAAg");
	this.shape_1163.setTransform(-1.9,47.3,0.334,0.334);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1164.setTransform(-5.6,47.3,0.334,0.334);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#000000").s().p("AgLAGQgEgYgEgLIAnAAQAAAJgIASQgGAOAEASQgOgEgHgUg");
	this.shape_1165.setTransform(-21.5,48,0.334,0.334);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1166.setTransform(-49,47.3,0.334,0.334);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1167.setTransform(-51,47.1,0.334,0.334);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#000000").s().p("AgPAFQAMgXADgLQAXAFgHAVQgDALgNAWQgVgEAGgVg");
	this.shape_1168.setTransform(-76.8,48,0.334,0.334);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1169.setTransform(-85.1,47.1,0.334,0.334);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#000000").s().p("AAAARQgGgJgMACQADgIAHgLQAIgNABgHQATAKgCANIgHAkIgLgNg");
	this.shape_1170.setTransform(-72.9,47.6,0.334,0.334);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#000000").s().p("AgRgTQAXgFAJARQAJAPgMAMIgGABQgcAAAFgog");
	this.shape_1171.setTransform(-79.3,47.3,0.334,0.334);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1172.setTransform(-95.9,46.8,0.334,0.334);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgHAKgBg");
	this.shape_1173.setTransform(-100.7,46.8,0.334,0.334);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1174.setTransform(-9.4,46.5,0.334,0.334);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1175.setTransform(-71.2,46.6,0.334,0.334);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#000000").s().p("AgeAZIAAgnQADgBAbACQAUABgBgMQAUADgMAMQgNAMgOgHQgUABAFAQQAEAMgOAAIgFAAg");
	this.shape_1176.setTransform(-2.4,46.8,0.334,0.334);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1177.setTransform(-6.4,46.1,0.334,0.334);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#000000").s().p("AgLAGQACgSgFgMQAJgBAGAFQAIAGAGAAQAAAJgGAKQgGAKACAKQgRgHABgMg");
	this.shape_1178.setTransform(-33.6,46.8,0.334,0.334);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#000000").s().p("AgPABQAGgJASgQQARAIgOANQgRAQAFAMQgZgGAKgSg");
	this.shape_1179.setTransform(-68.5,46.8,0.334,0.334);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#000000").s().p("AgXARQALgNgBgaIAdAAQACAQgMAEQABAHAFgCQAEgBAAgEQARASgRAFQgFACgHAAQgLAAgQgGg");
	this.shape_1180.setTransform(-89.1,46.7,0.334,0.334);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1181.setTransform(-98.2,46.1,0.334,0.334);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#000000").s().p("AgNATQgEgJgHAAQgEgOALgIQANgJAAgIQALgCAFAPQAEAQAJAAQACAMgPAFQgPAEgBAJQgFgBgEgKg");
	this.shape_1182.setTransform(-75.1,46.6,0.334,0.334);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1183.setTransform(-2.1,45.5,0.334,0.334);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1184.setTransform(-7.1,45.5,0.334,0.334);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#FF00FF").s().p("AgVAGQABgOAWgVQATAAABAZQABAWgLAMQgjgEACgUg");
	this.shape_1185.setTransform(-23.2,46.3,0.334,0.334);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1186.setTransform(-71.2,45.6,0.334,0.334);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#000000").s().p("AgIAAQAEgDAAgGIATAAQADANgLAEQgDABgSABQABgEAFgGg");
	this.shape_1187.setTransform(-100.4,45.6,0.334,0.334);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1188.setTransform(-6.3,45.1,0.334,0.334);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1189.setTransform(-36.3,45.1,0.334,0.334);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#000000").s().p("AgTgKQALgQAdgDQAHAggFAMQgIAPghAAQgMgYALgQg");
	this.shape_1190.setTransform(-77.6,46,0.334,0.334);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#000000").s().p("AgTAUQABgIAKgBIASgBQgNgLgDgGQgGgJAMgNQAOACAFANQAEAMgFAOQgGAOgKAEIgEAAQgIAAgJgKg");
	this.shape_1191.setTransform(-91.6,46,0.334,0.334);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#000000").s().p("AgEAPQgNgIgHgCQAAgFAHgCIANgCQABgGgDgCQgCgCgGAAQACgIANgBIAYgBQgFAPAAAMQABAKgGAMQgIgDgLgHg");
	this.shape_1192.setTransform(-94.4,45.8,0.334,0.334);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1193.setTransform(-12.6,44.8,0.334,0.334);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#000000").s().p("AgMARQACgCAGAAIgNgMQgJgGACgMQALgIAJgBQAIABALAIQADAJgKAOQgEAIAVgBQgCAIgNABQgQAAgIABQgBgHADgBg");
	this.shape_1194.setTransform(-13.6,45.5,0.334,0.334);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1195.setTransform(-30.5,44.8,0.334,0.334);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1196.setTransform(-67,44.8,0.334,0.334);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1197.setTransform(-69.7,44.8,0.334,0.334);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#FF00FF").s().p("AgTAPQgBgJAGgKQAGgKgBgKQAXgFAFAWQAEATgNANQgPgKgOAAg");
	this.shape_1198.setTransform(-73.5,45.5,0.334,0.334);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#FF00FF").s().p("AgtAMQAegcAAgIIAhgRQAWgIAOAPQgKAPAAAPQgngCgPARQgKALgPAXQgegOAUgTg");
	this.shape_1199.setTransform(-81,46.1,0.334,0.334);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#000000").s().p("AgTgTQALAJAGgDQALgGALAAQgKALAEAGQAGALAAALQghgHgGggg");
	this.shape_1200.setTransform(-11.1,45,0.334,0.334);

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#000000").s().p("AgOAGIAAgTQAPAKAOAAQgEAOgIACIgCABQgFAAgKgIg");
	this.shape_1201.setTransform(-35,44.8,0.334,0.334);

	this.shape_1202 = new cjs.Shape();
	this.shape_1202.graphics.f("#000000").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_1202.setTransform(-2.6,44.5,0.334,0.334);

	this.shape_1203 = new cjs.Shape();
	this.shape_1203.graphics.f("#000000").s().p("AgBAKQgEgFABgJQADgKADAFQADAGAAAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1203.setTransform(-72,44.5,0.334,0.334);

	this.shape_1204 = new cjs.Shape();
	this.shape_1204.graphics.f("#000000").s().p("AgIANQgOgGACgQQAPgQAOAKQAQAKgGAZIgbgHg");
	this.shape_1204.setTransform(-75.9,44.6,0.334,0.334);

	this.shape_1205 = new cjs.Shape();
	this.shape_1205.graphics.f("#000000").s().p("AAAANIgTgSQAIgTAJAPQAKAUAMgHQgEAMgIAAQgEAAgEgDg");
	this.shape_1205.setTransform(-8.4,44.2,0.334,0.334);

	this.shape_1206 = new cjs.Shape();
	this.shape_1206.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1206.setTransform(-11.3,43.8,0.334,0.334);

	this.shape_1207 = new cjs.Shape();
	this.shape_1207.graphics.f("#000000").s().p("AgGAoQAIgQgMgNQgNgLgDAUQgIgKACgTIAGgeQAQAAAPANQARAPALACQgEADgKAbQgHATgQAAIgCAAgAgOgRQgGAEAEAEQACACAGgEQAGgFgEgDIgCgBQgCAAgEADg");
	this.shape_1207.setTransform(-17.9,45,0.334,0.334);

	this.shape_1208 = new cjs.Shape();
	this.shape_1208.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1208.setTransform(-54.7,44,0.334,0.334);

	this.shape_1209 = new cjs.Shape();
	this.shape_1209.graphics.f("#000000").s().p("AgQAOIAFgJIgIAKQgJABgBgLIAAgTQAJgCABAMQALgDgGgJQgGgLALgHQAMALAbgBIAAAnQgkgFgDAZIgBAAQgPAAAJgVg");
	this.shape_1209.setTransform(-82.6,44.8,0.334,0.334);

	this.shape_1210 = new cjs.Shape();
	this.shape_1210.graphics.f("#000000").s().p("AgTAJQgCgJABgYQAHgBANAHQAHAEACgKQATAHgJAUQgIASgLAEQgOgBgFgPg");
	this.shape_1210.setTransform(-89.5,44.5,0.334,0.334);

	this.shape_1211 = new cjs.Shape();
	this.shape_1211.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1211.setTransform(-30.5,43.5,0.334,0.334);

	this.shape_1212 = new cjs.Shape();
	this.shape_1212.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1212.setTransform(-2.3,43.3,0.334,0.334);

	this.shape_1213 = new cjs.Shape();
	this.shape_1213.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1213.setTransform(-71.5,43.3,0.334,0.334);

	this.shape_1214 = new cjs.Shape();
	this.shape_1214.graphics.f("#000000").s().p("AgUABQARgSAGgMQAYADgEAkQgDADgOAFQgLAEgBAIQgXgOAJgPg");
	this.shape_1214.setTransform(-78.3,44,0.334,0.334);

	this.shape_1215 = new cjs.Shape();
	this.shape_1215.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1215.setTransform(-3.1,42.9,0.334,0.334);

	this.shape_1216 = new cjs.Shape();
	this.shape_1216.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1216.setTransform(-47.7,43,0.334,0.334);

	this.shape_1217 = new cjs.Shape();
	this.shape_1217.graphics.f("#FF00FF").s().p("AgNAbQgSgRAPgfQAGgCACAEQACACAAAGQAGgBABgHIACgMQATgHACAQQABAJgCAVQgGgIgGAAQgFAAgCAFQgFARAYgEQgMAQgLAAQgHAAgGgHg");
	this.shape_1217.setTransform(-92.3,43.7,0.334,0.334);

	this.shape_1218 = new cjs.Shape();
	this.shape_1218.graphics.f("#000000").s().p("AgHAHIgCgVQATAHAAAWIgGAAQgIAAgDgIg");
	this.shape_1218.setTransform(-33.1,42.8,0.334,0.334);

	this.shape_1219 = new cjs.Shape();
	this.shape_1219.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1219.setTransform(-53.8,42.5,0.334,0.334);

	this.shape_1220 = new cjs.Shape();
	this.shape_1220.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1220.setTransform(-3.4,42.1,0.334,0.334);

	this.shape_1221 = new cjs.Shape();
	this.shape_1221.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1221.setTransform(-13.3,42.1,0.334,0.334);

	this.shape_1222 = new cjs.Shape();
	this.shape_1222.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1222.setTransform(-43.3,42.1,0.334,0.334);

	this.shape_1223 = new cjs.Shape();
	this.shape_1223.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1223.setTransform(-47.3,42.1,0.334,0.334);

	this.shape_1224 = new cjs.Shape();
	this.shape_1224.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1224.setTransform(-55.3,42.1,0.334,0.334);

	this.shape_1225 = new cjs.Shape();
	this.shape_1225.graphics.f("#000000").s().p("AgLASQgEgFADgNQACgNAHgEQAHgGAKAPQAAAGgHABIgMACQgBAFADADIAHACQgGAJgFAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_1225.setTransform(-76.4,42.6,0.334,0.334);

	this.shape_1226 = new cjs.Shape();
	this.shape_1226.graphics.f("#000000").s().p("AgIABQAEgEAAgGIATAAQADAMgLAFQgDABgSABQABgEAFgFg");
	this.shape_1226.setTransform(-7.6,42,0.334,0.334);

	this.shape_1227 = new cjs.Shape();
	this.shape_1227.graphics.f("#000000").s().p("AgTAVQgEgRgCgCQgEgCgKATQgWgOAYgLQAYgMAXAIQACgRgMgDQANgXAlADQgBATgOAeQgOAcgBAWQgHADgGAAQgSAAgIgfg");
	this.shape_1227.setTransform(-26.8,43.3,0.334,0.334);

	this.shape_1228 = new cjs.Shape();
	this.shape_1228.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_1228.setTransform(-28.5,41.9,0.334,0.334);

	this.shape_1229 = new cjs.Shape();
	this.shape_1229.graphics.f("#000000").s().p("AgOgJIAdAAQADAMgLAFQgDABgSABg");
	this.shape_1229.setTransform(-62,42,0.334,0.334);

	this.shape_1230 = new cjs.Shape();
	this.shape_1230.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1230.setTransform(-65.4,42,0.334,0.334);

	this.shape_1231 = new cjs.Shape();
	this.shape_1231.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1231.setTransform(-73.9,42,0.334,0.334);

	this.shape_1232 = new cjs.Shape();
	this.shape_1232.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1232.setTransform(-71.4,41.6,0.334,0.334);

	this.shape_1233 = new cjs.Shape();
	this.shape_1233.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1233.setTransform(-77.4,41.5,0.334,0.334);

	this.shape_1234 = new cjs.Shape();
	this.shape_1234.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1234.setTransform(-5.1,41.1,0.334,0.334);

	this.shape_1235 = new cjs.Shape();
	this.shape_1235.graphics.f("#000000").s().p("AAAANIgOgGQABgFAKgDQAIgEAAgHQAGAAACAHIACAMQgHAGgGAAIgCAAg");
	this.shape_1235.setTransform(-14.9,41.4,0.334,0.334);

	this.shape_1236 = new cjs.Shape();
	this.shape_1236.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1236.setTransform(-29.6,41.1,0.334,0.334);

	this.shape_1237 = new cjs.Shape();
	this.shape_1237.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1237.setTransform(-31.5,41.2,0.334,0.334);

	this.shape_1238 = new cjs.Shape();
	this.shape_1238.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1238.setTransform(-36.2,41.4,0.334,0.334);

	this.shape_1239 = new cjs.Shape();
	this.shape_1239.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgHAKgBg");
	this.shape_1239.setTransform(-62.4,40.8,0.334,0.334);

	this.shape_1240 = new cjs.Shape();
	this.shape_1240.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1240.setTransform(-78.4,40.8,0.334,0.334);

	this.shape_1241 = new cjs.Shape();
	this.shape_1241.graphics.f("#000000").s().p("AgOAUIgPgPQgCgRAOgKQARgMAAgKQAIAFAJANIANAWQgHArgqAGQAGgXgBgCgAAMgCQgGADAEAEQACACAGgEQAGgDgEgEIgCgBQgCAAgEADg");
	this.shape_1241.setTransform(-83.2,42.1,0.334,0.334);

	this.shape_1242 = new cjs.Shape();
	this.shape_1242.graphics.f("#000000").s().p("AgOAKQgDgNAKgEQAFgCARAAQgHATgUAAIgCAAg");
	this.shape_1242.setTransform(-67.4,40.6,0.334,0.334);

	this.shape_1243 = new cjs.Shape();
	this.shape_1243.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1243.setTransform(-76.4,40.6,0.334,0.334);

	this.shape_1244 = new cjs.Shape();
	this.shape_1244.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgHAKgBg");
	this.shape_1244.setTransform(-79.7,40.5,0.334,0.334);

	this.shape_1245 = new cjs.Shape();
	this.shape_1245.graphics.f("#000000").s().p("AgEAZQgKgGgKACQAAgGAHgCIANgCQgJgLAAgIQAAgJAJgLQAYgGAFAbQAEAYgOAOIgCAAQgIAAgJgGgAAHADQgGAEAEAEQACACAGgEQAFgFgDgDIgDgBQgCAAgDADg");
	this.shape_1245.setTransform(-93.1,41.3,0.334,0.334);

	this.shape_1246 = new cjs.Shape();
	this.shape_1246.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_1246.setTransform(-5.3,40.3,0.334,0.334);

	this.shape_1247 = new cjs.Shape();
	this.shape_1247.graphics.f("#000000").s().p("AgTAHQAJgSAegBQABASgQAGQgFABgEAAQgJAAgGgGg");
	this.shape_1247.setTransform(-9.8,40.4,0.334,0.334);

	this.shape_1248 = new cjs.Shape();
	this.shape_1248.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1248.setTransform(-26.3,40.3,0.334,0.334);

	this.shape_1249 = new cjs.Shape();
	this.shape_1249.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1249.setTransform(-34,40.1,0.334,0.334);

	this.shape_1250 = new cjs.Shape();
	this.shape_1250.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1250.setTransform(-64.2,40.2,0.334,0.334);

	this.shape_1251 = new cjs.Shape();
	this.shape_1251.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1251.setTransform(-73.7,40.1,0.334,0.334);

	this.shape_1252 = new cjs.Shape();
	this.shape_1252.graphics.f("#000000").s().p("AgKASQgTgSAUgYIAdAAQACALgGAFQgEACgMACQAAAFAHABIANADQgHAUgLAAQgFAAgHgHg");
	this.shape_1252.setTransform(-95.6,40.8,0.334,0.334);

	this.shape_1253 = new cjs.Shape();
	this.shape_1253.graphics.f("#000000").s().p("AgGALQABgGgDgCQgCgBgGgBQgDgPAWAFQAVAEgLAQg");
	this.shape_1253.setTransform(-29.2,39.9,0.334,0.334);

	this.shape_1254 = new cjs.Shape();
	this.shape_1254.graphics.f("#000000").s().p("AgOgPIAUAJQANAFgEAPIgMACQgYAAAHgfg");
	this.shape_1254.setTransform(-35.3,40.2,0.334,0.334);

	this.shape_1255 = new cjs.Shape();
	this.shape_1255.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1255.setTransform(-80.7,39.8,0.334,0.334);

	this.shape_1256 = new cjs.Shape();
	this.shape_1256.graphics.f("#000000").s().p("AgPAEQALgLAJAAQAIAAADAGQACAGgHACIgHABQgHAAgMgEg");
	this.shape_1256.setTransform(-9.9,39.5,0.334,0.334);

	this.shape_1257 = new cjs.Shape();
	this.shape_1257.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1257.setTransform(-63.7,39.5,0.334,0.334);

	this.shape_1258 = new cjs.Shape();
	this.shape_1258.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1258.setTransform(-97.9,39.5,0.334,0.334);

	this.shape_1259 = new cjs.Shape();
	this.shape_1259.graphics.f("#FF00FF").s().p("AgVApQgSgRgDABQAFgMAkgQQAdgOgBgbQAQAHAAAHQAAAEgKAKQgaAZAKAaQgIAAgQgGQgIgDANAJQgEAKgGAAQgEAAgFgEg");
	this.shape_1259.setTransform(-23.4,40.5,0.334,0.334);

	this.shape_1260 = new cjs.Shape();
	this.shape_1260.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1260.setTransform(-23,39.1,0.334,0.334);

	this.shape_1261 = new cjs.Shape();
	this.shape_1261.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1261.setTransform(-35.7,39.1,0.334,0.334);

	this.shape_1262 = new cjs.Shape();
	this.shape_1262.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1262.setTransform(-66,39.3,0.334,0.334);

	this.shape_1263 = new cjs.Shape();
	this.shape_1263.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1263.setTransform(-69.5,39.1,0.334,0.334);

	this.shape_1264 = new cjs.Shape();
	this.shape_1264.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1264.setTransform(-78.5,39.2,0.334,0.334);

	this.shape_1265 = new cjs.Shape();
	this.shape_1265.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1265.setTransform(-4.8,38.8,0.334,0.334);

	this.shape_1266 = new cjs.Shape();
	this.shape_1266.graphics.f("#000000").s().p("AgTAZQAHgJABgIQACgLgKgBQAJgTAegBQgKALAEAGQAGALAAALQgJgBgLAGQgIAFgIAAIgDAAg");
	this.shape_1266.setTransform(-14.1,39.5,0.334,0.334);

	this.shape_1267 = new cjs.Shape();
	this.shape_1267.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1267.setTransform(-24.1,38.9,0.334,0.334);

	this.shape_1268 = new cjs.Shape();
	this.shape_1268.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1268.setTransform(-35,38.8,0.334,0.334);

	this.shape_1269 = new cjs.Shape();
	this.shape_1269.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1269.setTransform(-61.7,38.8,0.334,0.334);

	this.shape_1270 = new cjs.Shape();
	this.shape_1270.graphics.f("#FF00FF").s().p("AgjANQALgVgCgGIAnAAQAUgEAAgQQAQASghAQQgnAXgDAMQgRgFAIgRg");
	this.shape_1270.setTransform(-83.3,39.8,0.334,0.334);

	this.shape_1271 = new cjs.Shape();
	this.shape_1271.graphics.f("#000000").s().p("AAGAEQgHgJgSAFQAJgSAegBIAAAnQgEgBgKgPg");
	this.shape_1271.setTransform(-33.5,39,0.334,0.334);

	this.shape_1272 = new cjs.Shape();
	this.shape_1272.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1272.setTransform(-75.7,38.6,0.334,0.334);

	this.shape_1273 = new cjs.Shape();
	this.shape_1273.graphics.f("#000000").s().p("AgCALQgagDALgSQAJgBAJAGQALAFAKAAQACALgUAAIgGAAg");
	this.shape_1273.setTransform(-96.3,38.7,0.334,0.334);

	this.shape_1274 = new cjs.Shape();
	this.shape_1274.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1274.setTransform(-17,38.1,0.334,0.334);

	this.shape_1275 = new cjs.Shape();
	this.shape_1275.graphics.f("#000000").s().p("AgZAQQAAgGAHgCIANgCQACgQgMgDQADgVAMAMQAMANgIAPQAJABABgKQAZAMgcANQgLAFgHAAQgMAAgGgLg");
	this.shape_1275.setTransform(-18.6,38.8,0.334,0.334);

	this.shape_1276 = new cjs.Shape();
	this.shape_1276.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1276.setTransform(-26.6,38.3,0.334,0.334);

	this.shape_1277 = new cjs.Shape();
	this.shape_1277.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1277.setTransform(-34.8,38.1,0.334,0.334);

	this.shape_1278 = new cjs.Shape();
	this.shape_1278.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1278.setTransform(-94.7,38.1,0.334,0.334);

	this.shape_1279 = new cjs.Shape();
	this.shape_1279.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1279.setTransform(-4.6,38,0.334,0.334);

	this.shape_1280 = new cjs.Shape();
	this.shape_1280.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1280.setTransform(-20.1,37.9,0.334,0.334);

	this.shape_1281 = new cjs.Shape();
	this.shape_1281.graphics.f("#000000").s().p("AgHgCQgBgFAIgCQAIABAAAJQgBAIgHABQgGgIgBgEg");
	this.shape_1281.setTransform(-41.1,38,0.334,0.334);

	this.shape_1282 = new cjs.Shape();
	this.shape_1282.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1282.setTransform(-61.5,37.9,0.334,0.334);

	this.shape_1283 = new cjs.Shape();
	this.shape_1283.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1283.setTransform(-67.9,37.8,0.334,0.334);

	this.shape_1284 = new cjs.Shape();
	this.shape_1284.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1284.setTransform(-82.9,38,0.334,0.334);

	this.shape_1285 = new cjs.Shape();
	this.shape_1285.graphics.f("#000000").s().p("AgTgTQAJAAAKAFQAKAGAKgBQgCAGgIAIQgJAIgBAHQgQgJgDgeg");
	this.shape_1285.setTransform(-84.6,38.3,0.334,0.334);

	this.shape_1286 = new cjs.Shape();
	this.shape_1286.graphics.f("#000000").s().p("AgegJQAgACgCggQAkALgHA6QgOgBgGABQgJACAAAIQgYgJgGgogAALACQgGAEAEAEQACACAGgEQAGgEgEgEIgCAAQgCAAgEACg");
	this.shape_1286.setTransform(-86.5,39,0.334,0.334);

	this.shape_1287 = new cjs.Shape();
	this.shape_1287.graphics.f("#000000").s().p("AgGALQABgGgDgCQgCgBgGgBQgDgPAWAFQAVAEgLAQg");
	this.shape_1287.setTransform(-96,37.9,0.334,0.334);

	this.shape_1288 = new cjs.Shape();
	this.shape_1288.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1288.setTransform(-22.5,37.6,0.334,0.334);

	this.shape_1289 = new cjs.Shape();
	this.shape_1289.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1289.setTransform(-42.2,37.6,0.334,0.334);

	this.shape_1290 = new cjs.Shape();
	this.shape_1290.graphics.f("#000000").s().p("AAGASQgMgGgNAAIAAgTQAJABABgLIALANQAGAHAMgBQgFAQgIAAIgBAAg");
	this.shape_1290.setTransform(-59.9,37.9,0.334,0.334);

	this.shape_1291 = new cjs.Shape();
	this.shape_1291.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1291.setTransform(-67,37.5,0.334,0.334);

	this.shape_1292 = new cjs.Shape();
	this.shape_1292.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1292.setTransform(-80.5,37.7,0.334,0.334);

	this.shape_1293 = new cjs.Shape();
	this.shape_1293.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1293.setTransform(-6.6,37.1,0.334,0.334);

	this.shape_1294 = new cjs.Shape();
	this.shape_1294.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgHAKgBg");
	this.shape_1294.setTransform(-9.3,37.1,0.334,0.334);

	this.shape_1295 = new cjs.Shape();
	this.shape_1295.graphics.f("#000000").s().p("AgIAGQgDgGAKgLQAMAKgBAGQgBAHgIAAQgHAAgCgGg");
	this.shape_1295.setTransform(-17.7,37.4,0.334,0.334);

	this.shape_1296 = new cjs.Shape();
	this.shape_1296.graphics.f("#000000").s().p("AgMADQgCgGAJgLIATAAQgLAPABAOQgOgEgCgIg");
	this.shape_1296.setTransform(-30.9,37.5,0.334,0.334);

	this.shape_1297 = new cjs.Shape();
	this.shape_1297.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKABIgSACQABgHAKgBg");
	this.shape_1297.setTransform(-35.3,37.1,0.334,0.334);

	this.shape_1298 = new cjs.Shape();
	this.shape_1298.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1298.setTransform(-40.3,37.1,0.334,0.334);

	this.shape_1299 = new cjs.Shape();
	this.shape_1299.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1299.setTransform(-43,37.3,0.334,0.334);

	this.shape_1300 = new cjs.Shape();
	this.shape_1300.graphics.f("#000000").s().p("Ag1AwQgHgfgFgyIgyAAQgTgGAcgIQAcgIADAMQAEgTgIgSQgJgSADgPQAVgGAAAYIgBAqIAyAAQAMABgBgUQgCgcABgDQANAAAEAQQADAKgBAYIAyAAQAMABgBgUQgCgcABgDQAWgCgHALQgLATAGAMQAIARAgADQgCAJgOAAQgOAAAAgJQgWAMgFAlQgFAoAgAAQgCAIgbADQgWADALAaQgIAVgCgYQgCgVACgQIhPAAIAIAfQAFATgDAUQgSgbgKgpgAAMAHQgCAgAYgDQAVgCAGgbIADgyIgyAAQABACgDAwgAgygDQAIAUgDATIAxAAQAAgPgFgcQgEgSAJgSIg7AAQgEASAJAWg");
	this.shape_1300.setTransform(-51.3,40.8,0.334,0.334);

	this.shape_1301 = new cjs.Shape();
	this.shape_1301.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1301.setTransform(-71.9,37.2,0.334,0.334);

	this.shape_1302 = new cjs.Shape();
	this.shape_1302.graphics.f("#FF00FF").s().p("AgIAAQgKgRgGgRQAHACANAIQAMAHAHADIgGAJQgEAFAAAFQAAAGAHABIANADQgIARgfADQALgXgFgMg");
	this.shape_1302.setTransform(-15.9,37.8,0.334,0.334);

	this.shape_1303 = new cjs.Shape();
	this.shape_1303.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1303.setTransform(-24.5,36.9,0.334,0.334);

	this.shape_1304 = new cjs.Shape();
	this.shape_1304.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1304.setTransform(-38.3,36.8,0.334,0.334);

	this.shape_1305 = new cjs.Shape();
	this.shape_1305.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1305.setTransform(-50,36.8,0.334,0.334);

	this.shape_1306 = new cjs.Shape();
	this.shape_1306.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1306.setTransform(-52,36.8,0.334,0.334);

	this.shape_1307 = new cjs.Shape();
	this.shape_1307.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1307.setTransform(-60.7,36.8,0.334,0.334);

	this.shape_1308 = new cjs.Shape();
	this.shape_1308.graphics.f("#000000").s().p("AgKANIAAgTQAJACABgMQAPgDgFAWQgCAOgIAAQgEAAgGgEg");
	this.shape_1308.setTransform(-78.5,37.2,0.334,0.334);

	this.shape_1309 = new cjs.Shape();
	this.shape_1309.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1309.setTransform(-6.8,36.5,0.334,0.334);

	this.shape_1310 = new cjs.Shape();
	this.shape_1310.graphics.f("#000000").s().p("AgNAZIAFgZIgFgYQAZgDACAcQACAZgUAAIgJgBg");
	this.shape_1310.setTransform(-13.6,37.1,0.334,0.334);

	this.shape_1311 = new cjs.Shape();
	this.shape_1311.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1311.setTransform(-32.8,36.5,0.334,0.334);

	this.shape_1312 = new cjs.Shape();
	this.shape_1312.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQADgKADAFQAEAGgBAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1312.setTransform(-52.7,36.8,0.334,0.334);

	this.shape_1313 = new cjs.Shape();
	this.shape_1313.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1313.setTransform(-70,36.5,0.334,0.334);

	this.shape_1314 = new cjs.Shape();
	this.shape_1314.graphics.f("#000000").s().p("AgIAEIgBgSQAKgCAFAGQADAEABALQgFgBgDADQgBACgBAGQgHgBgBgKg");
	this.shape_1314.setTransform(-85.2,36.8,0.334,0.334);

	this.shape_1315 = new cjs.Shape();
	this.shape_1315.graphics.f("#000000").s().p("AgTABQACgIANgBIAYAAQgCAPgOACIgEAAQgKAAgJgIg");
	this.shape_1315.setTransform(-15.4,36.3,0.334,0.334);

	this.shape_1316 = new cjs.Shape();
	this.shape_1316.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1316.setTransform(-17.8,36.3,0.334,0.334);

	this.shape_1317 = new cjs.Shape();
	this.shape_1317.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1317.setTransform(-37.7,36.1,0.334,0.334);

	this.shape_1318 = new cjs.Shape();
	this.shape_1318.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1318.setTransform(-43.7,36.1,0.334,0.334);

	this.shape_1319 = new cjs.Shape();
	this.shape_1319.graphics.f("#000000").s().p("AgCALQgVgEALgRQAJgBAGAFQAIAGAGAAQACALgOAAIgHAAg");
	this.shape_1319.setTransform(-47.1,36.3,0.334,0.334);

	this.shape_1320 = new cjs.Shape();
	this.shape_1320.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1320.setTransform(-65,36.1,0.334,0.334);

	this.shape_1321 = new cjs.Shape();
	this.shape_1321.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_1321.setTransform(-67.7,36.1,0.334,0.334);

	this.shape_1322 = new cjs.Shape();
	this.shape_1322.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1322.setTransform(-82.9,36.3,0.334,0.334);

	this.shape_1323 = new cjs.Shape();
	this.shape_1323.graphics.f("#000000").s().p("AgMAWIgRgHQAAgJAMgIQAMgHgEgPIAbAGQAOAHgCAQQgDgBgGgEQgGgFgFABQgIACAEAHQAGAMgCAIIgIAAQgHAAgHgDg");
	this.shape_1323.setTransform(-94.2,36.8,0.334,0.334);

	this.shape_1324 = new cjs.Shape();
	this.shape_1324.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1324.setTransform(-20,35.9,0.334,0.334);

	this.shape_1325 = new cjs.Shape();
	this.shape_1325.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1325.setTransform(-48.7,35.8,0.334,0.334);

	this.shape_1326 = new cjs.Shape();
	this.shape_1326.graphics.f("#000000").s().p("AgEAKQgHgBAAgIQAAgHAGgCQAGgDALAKQgJALgGAAIgBAAg");
	this.shape_1326.setTransform(-54.9,36,0.334,0.334);

	this.shape_1327 = new cjs.Shape();
	this.shape_1327.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1327.setTransform(-60.9,36,0.334,0.334);

	this.shape_1328 = new cjs.Shape();
	this.shape_1328.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1328.setTransform(-64.4,35.8,0.334,0.334);

	this.shape_1329 = new cjs.Shape();
	this.shape_1329.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1329.setTransform(-66.7,35.8,0.334,0.334);

	this.shape_1330 = new cjs.Shape();
	this.shape_1330.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_1330.setTransform(-73.9,35.9,0.334,0.334);

	this.shape_1331 = new cjs.Shape();
	this.shape_1331.graphics.f("#FF00FF").s().p("AgcAJQAAgPgBgIQAIgIARgCQAKgBAYABIgYAZQgOAPgLAJQgIgCgBgOg");
	this.shape_1331.setTransform(-89.2,36.4,0.334,0.334);

	this.shape_1332 = new cjs.Shape();
	this.shape_1332.graphics.f("#000000").s().p("AgFAGQgEgGAFgEQAGgHAEAGQADAFgEAFQgEAEgCAAQgCAAgCgDg");
	this.shape_1332.setTransform(-28.6,35.8,0.334,0.334);

	this.shape_1333 = new cjs.Shape();
	this.shape_1333.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1333.setTransform(-38.3,35.5,0.334,0.334);

	this.shape_1334 = new cjs.Shape();
	this.shape_1334.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1334.setTransform(-40.3,35.6,0.334,0.334);

	this.shape_1335 = new cjs.Shape();
	this.shape_1335.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1335.setTransform(-41.7,35.6,0.334,0.334);

	this.shape_1336 = new cjs.Shape();
	this.shape_1336.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1336.setTransform(-53.5,35.5,0.334,0.334);

	this.shape_1337 = new cjs.Shape();
	this.shape_1337.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1337.setTransform(-80.6,35.7,0.334,0.334);

	this.shape_1338 = new cjs.Shape();
	this.shape_1338.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1338.setTransform(-13.1,35.1,0.334,0.334);

	this.shape_1339 = new cjs.Shape();
	this.shape_1339.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1339.setTransform(-15.8,35.3,0.334,0.334);

	this.shape_1340 = new cjs.Shape();
	this.shape_1340.graphics.f("#000000").s().p("AgOAKQgDgNAKgEQAFgCARAAQgHATgUAAIgCAAg");
	this.shape_1340.setTransform(-22,35.3,0.334,0.334);

	this.shape_1341 = new cjs.Shape();
	this.shape_1341.graphics.f("#000000").s().p("AgMANIAKgTIAAgKQAYgEgNAVQgJAQgGAAQgDAAgDgEg");
	this.shape_1341.setTransform(-33.7,35.5,0.334,0.334);

	this.shape_1342 = new cjs.Shape();
	this.shape_1342.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1342.setTransform(-36,35.3,0.334,0.334);

	this.shape_1343 = new cjs.Shape();
	this.shape_1343.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1343.setTransform(-96.5,35.4,0.334,0.334);

	this.shape_1344 = new cjs.Shape();
	this.shape_1344.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1344.setTransform(-98.8,35.1,0.334,0.334);

	this.shape_1345 = new cjs.Shape();
	this.shape_1345.graphics.f("#000000").s().p("AgIAEQABgQgBgHQAPACACAOQACAMgKALQgIgCgBgOg");
	this.shape_1345.setTransform(-8.5,35.3,0.334,0.334);

	this.shape_1346 = new cjs.Shape();
	this.shape_1346.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1346.setTransform(-30.6,34.8,0.334,0.334);

	this.shape_1347 = new cjs.Shape();
	this.shape_1347.graphics.f("#000000").s().p("AgDAMQgNgMAJgPQAFABADAJQAEAIAHABQgCAMgGAAQgEAAgDgEg");
	this.shape_1347.setTransform(-52.6,35.2,0.334,0.334);

	this.shape_1348 = new cjs.Shape();
	this.shape_1348.graphics.f("#000000").s().p("AABAJQgEgEgGAAIAAgTQAMgDAFAKQABAEABASQgDgBgGgFg");
	this.shape_1348.setTransform(-59.5,35.1,0.334,0.334);

	this.shape_1349 = new cjs.Shape();
	this.shape_1349.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1349.setTransform(-72,34.9,0.334,0.334);

	this.shape_1350 = new cjs.Shape();
	this.shape_1350.graphics.f("#000000").s().p("AgEAKQgHgCAAgHQAAgHAGgCQAGgDALALQgJAKgGAAIgBAAg");
	this.shape_1350.setTransform(-85.3,35,0.334,0.334);

	this.shape_1351 = new cjs.Shape();
	this.shape_1351.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1351.setTransform(-13.3,34.4,0.334,0.334);

	this.shape_1352 = new cjs.Shape();
	this.shape_1352.graphics.f("#000000").s().p("AgdAUQADgIAHgMQAHgMADgHQAJgBAJAGQALAGAKgBQgHAQgNAIQgKAGgPAAIgOgBg");
	this.shape_1352.setTransform(-49.5,35,0.334,0.334);

	this.shape_1353 = new cjs.Shape();
	this.shape_1353.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1353.setTransform(-62,34.4,0.334,0.334);

	this.shape_1354 = new cjs.Shape();
	this.shape_1354.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1354.setTransform(-89.1,34.4,0.334,0.334);

	this.shape_1355 = new cjs.Shape();
	this.shape_1355.graphics.f("#000000").s().p("AgOAPIAHgNQADgHAAgJQAMgDAFAKQABAEABASg");
	this.shape_1355.setTransform(-90.1,34.8,0.334,0.334);

	this.shape_1356 = new cjs.Shape();
	this.shape_1356.graphics.f("#000000").s().p("AgKAAQAAgfAVAMQgJALADAGQAHALgBALQgGADgEAAQgLAAAAgXg");
	this.shape_1356.setTransform(-6.1,34.6,0.334,0.334);

	this.shape_1357 = new cjs.Shape();
	this.shape_1357.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1357.setTransform(-17.6,34.3,0.334,0.334);

	this.shape_1358 = new cjs.Shape();
	this.shape_1358.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1358.setTransform(-40,34.3,0.334,0.334);

	this.shape_1359 = new cjs.Shape();
	this.shape_1359.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1359.setTransform(-83.2,34.2,0.334,0.334);

	this.shape_1360 = new cjs.Shape();
	this.shape_1360.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgHAKgBg");
	this.shape_1360.setTransform(-26.3,33.8,0.334,0.334);

	this.shape_1361 = new cjs.Shape();
	this.shape_1361.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1361.setTransform(-32,33.9,0.334,0.334);

	this.shape_1362 = new cjs.Shape();
	this.shape_1362.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1362.setTransform(-33,33.8,0.334,0.334);

	this.shape_1363 = new cjs.Shape();
	this.shape_1363.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1363.setTransform(-35,33.8,0.334,0.334);

	this.shape_1364 = new cjs.Shape();
	this.shape_1364.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1364.setTransform(-48,33.8,0.334,0.334);

	this.shape_1365 = new cjs.Shape();
	this.shape_1365.graphics.f("#FF00FF").s().p("AgHAEQgMgIABgPIAeAIQAOAIgPAXQgDgFgPgLg");
	this.shape_1365.setTransform(-51.2,34.3,0.334,0.334);

	this.shape_1366 = new cjs.Shape();
	this.shape_1366.graphics.f("#000000").s().p("AgOADQgFgEAHgDQAJgDAUAEQgHAJgKABIgDAAQgHAAgEgEg");
	this.shape_1366.setTransform(-56.1,33.8,0.334,0.334);

	this.shape_1367 = new cjs.Shape();
	this.shape_1367.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1367.setTransform(-94.1,33.9,0.334,0.334);

	this.shape_1368 = new cjs.Shape();
	this.shape_1368.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1368.setTransform(-13.3,33.6,0.334,0.334);

	this.shape_1369 = new cjs.Shape();
	this.shape_1369.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1369.setTransform(-20,33.6,0.334,0.334);

	this.shape_1370 = new cjs.Shape();
	this.shape_1370.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1370.setTransform(-46.5,33.6,0.334,0.334);

	this.shape_1371 = new cjs.Shape();
	this.shape_1371.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1371.setTransform(-54.2,33.6,0.334,0.334);

	this.shape_1372 = new cjs.Shape();
	this.shape_1372.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1372.setTransform(-62.5,33.7,0.334,0.334);

	this.shape_1373 = new cjs.Shape();
	this.shape_1373.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1373.setTransform(-87.4,33.6,0.334,0.334);

	this.shape_1374 = new cjs.Shape();
	this.shape_1374.graphics.f("#000000").s().p("AgTAFQACgQAOgCQAMgBALAKQgCAPgOACIgEABQgKAAgJgJg");
	this.shape_1374.setTransform(-96.2,33.8,0.334,0.334);

	this.shape_1375 = new cjs.Shape();
	this.shape_1375.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_1375.setTransform(-8.1,33.3,0.334,0.334);

	this.shape_1376 = new cjs.Shape();
	this.shape_1376.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1376.setTransform(-28.5,33.1,0.334,0.334);

	this.shape_1377 = new cjs.Shape();
	this.shape_1377.graphics.f("#000000").s().p("AADAMQgGgJgLACIAHgMQADgIAAgJQAVAMgCAlIgMgNg");
	this.shape_1377.setTransform(-36.6,33.8,0.334,0.334);

	this.shape_1378 = new cjs.Shape();
	this.shape_1378.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1378.setTransform(-40.8,33.3,0.334,0.334);

	this.shape_1379 = new cjs.Shape();
	this.shape_1379.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1379.setTransform(-74.2,33.3,0.334,0.334);

	this.shape_1380 = new cjs.Shape();
	this.shape_1380.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1380.setTransform(-15.8,33,0.334,0.334);

	this.shape_1381 = new cjs.Shape();
	this.shape_1381.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1381.setTransform(-30.3,32.9,0.334,0.334);

	this.shape_1382 = new cjs.Shape();
	this.shape_1382.graphics.f("#000000").s().p("AgOAPIAAgdIAdAAQABAJgFAGQgGAJAAAFg");
	this.shape_1382.setTransform(-53,33.1,0.334,0.334);

	this.shape_1383 = new cjs.Shape();
	this.shape_1383.graphics.f("#000000").s().p("AgOAPQACgGAIgJQAIgHABgHQAHABACAKIABASg");
	this.shape_1383.setTransform(-92.1,33.1,0.334,0.334);

	this.shape_1384 = new cjs.Shape();
	this.shape_1384.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1384.setTransform(-11.1,32.5,0.334,0.334);

	this.shape_1385 = new cjs.Shape();
	this.shape_1385.graphics.f("#000000").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_1385.setTransform(-49.2,33,0.334,0.334);

	this.shape_1386 = new cjs.Shape();
	this.shape_1386.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQAEgKACAFQAEAGgBAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1386.setTransform(-50,32.8,0.334,0.334);

	this.shape_1387 = new cjs.Shape();
	this.shape_1387.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1387.setTransform(-67.8,32.7,0.334,0.334);

	this.shape_1388 = new cjs.Shape();
	this.shape_1388.graphics.f("#000000").s().p("AgOAKQgDgNAKgEQAFgCARAAQgHATgUAAIgCAAg");
	this.shape_1388.setTransform(-78.4,32.6,0.334,0.334);

	this.shape_1389 = new cjs.Shape();
	this.shape_1389.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1389.setTransform(-89.4,32.6,0.334,0.334);

	this.shape_1390 = new cjs.Shape();
	this.shape_1390.graphics.f("#000000").s().p("AgKANIAAgTQAJACABgMQAPgDgFAWQgCAOgIAAQgEAAgGgEg");
	this.shape_1390.setTransform(-6.4,32.5,0.334,0.334);

	this.shape_1391 = new cjs.Shape();
	this.shape_1391.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1391.setTransform(-24.5,32.2,0.334,0.334);

	this.shape_1392 = new cjs.Shape();
	this.shape_1392.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1392.setTransform(-32.6,32.1,0.334,0.334);

	this.shape_1393 = new cjs.Shape();
	this.shape_1393.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1393.setTransform(-42.5,32.1,0.334,0.334);

	this.shape_1394 = new cjs.Shape();
	this.shape_1394.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1394.setTransform(-53.7,32.1,0.334,0.334);

	this.shape_1395 = new cjs.Shape();
	this.shape_1395.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1395.setTransform(-60.4,32.3,0.334,0.334);

	this.shape_1396 = new cjs.Shape();
	this.shape_1396.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1396.setTransform(-69.4,32.1,0.334,0.334);

	this.shape_1397 = new cjs.Shape();
	this.shape_1397.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1397.setTransform(-76,32.1,0.334,0.334);

	this.shape_1398 = new cjs.Shape();
	this.shape_1398.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1398.setTransform(-33.5,31.8,0.334,0.334);

	this.shape_1399 = new cjs.Shape();
	this.shape_1399.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1399.setTransform(-34.6,31.8,0.334,0.334);

	this.shape_1400 = new cjs.Shape();
	this.shape_1400.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1400.setTransform(-37,31.9,0.334,0.334);

	this.shape_1401 = new cjs.Shape();
	this.shape_1401.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1401.setTransform(-72.1,32,0.334,0.334);

	this.shape_1402 = new cjs.Shape();
	this.shape_1402.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1402.setTransform(-13.9,31.6,0.334,0.334);

	this.shape_1403 = new cjs.Shape();
	this.shape_1403.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1403.setTransform(-26.4,31.7,0.334,0.334);

	this.shape_1404 = new cjs.Shape();
	this.shape_1404.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1404.setTransform(-47.2,31.6,0.334,0.334);

	this.shape_1405 = new cjs.Shape();
	this.shape_1405.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1405.setTransform(-54.8,31.4,0.334,0.334);

	this.shape_1406 = new cjs.Shape();
	this.shape_1406.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1406.setTransform(-62.4,31.4,0.334,0.334);

	this.shape_1407 = new cjs.Shape();
	this.shape_1407.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1407.setTransform(-65.4,31.6,0.334,0.334);

	this.shape_1408 = new cjs.Shape();
	this.shape_1408.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1408.setTransform(-67.5,31.7,0.334,0.334);

	this.shape_1409 = new cjs.Shape();
	this.shape_1409.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1409.setTransform(-74.4,31.4,0.334,0.334);

	this.shape_1410 = new cjs.Shape();
	this.shape_1410.graphics.f("#000000").s().p("AgGADQgDgSgDgJQAPAGAHAQQAIAQgLALQgIgFgFgRg");
	this.shape_1410.setTransform(-5.3,31.8,0.334,0.334);

	this.shape_1411 = new cjs.Shape();
	this.shape_1411.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1411.setTransform(-28.1,31.3,0.334,0.334);

	this.shape_1412 = new cjs.Shape();
	this.shape_1412.graphics.f("#000000").s().p("AgHAIQgMgIAGgTQACAEAPAMQANAJgBAOQgQgGgHgGg");
	this.shape_1412.setTransform(-30.3,31.6,0.334,0.334);

	this.shape_1413 = new cjs.Shape();
	this.shape_1413.graphics.f("#000000").s().p("AgDAMQgNgMAJgPQAFABADAJQAEAIAHABQgCAMgGAAQgEAAgDgEg");
	this.shape_1413.setTransform(-31.5,31.5,0.334,0.334);

	this.shape_1414 = new cjs.Shape();
	this.shape_1414.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1414.setTransform(-33.3,31.1,0.334,0.334);

	this.shape_1415 = new cjs.Shape();
	this.shape_1415.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1415.setTransform(-40.3,31.1,0.334,0.334);

	this.shape_1416 = new cjs.Shape();
	this.shape_1416.graphics.f("#000000").s().p("AgJgOQAUAHgBAWQgTgIAAgVg");
	this.shape_1416.setTransform(-48.5,31.4,0.334,0.334);

	this.shape_1417 = new cjs.Shape();
	this.shape_1417.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1417.setTransform(-57.3,31.4,0.334,0.334);

	this.shape_1418 = new cjs.Shape();
	this.shape_1418.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1418.setTransform(-80.6,31.1,0.334,0.334);

	this.shape_1419 = new cjs.Shape();
	this.shape_1419.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1419.setTransform(-86.9,31.1,0.334,0.334);

	this.shape_1420 = new cjs.Shape();
	this.shape_1420.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1420.setTransform(-7.3,30.8,0.334,0.334);

	this.shape_1421 = new cjs.Shape();
	this.shape_1421.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1421.setTransform(-16,30.8,0.334,0.334);

	this.shape_1422 = new cjs.Shape();
	this.shape_1422.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1422.setTransform(-91.7,30.8,0.334,0.334);

	this.shape_1423 = new cjs.Shape();
	this.shape_1423.graphics.f("#000000").s().p("AgLACQAKgMAGABQAHABAAAIQAAAHgGACIgCABQgGAAgJgIg");
	this.shape_1423.setTransform(-22.4,30.6,0.334,0.334);

	this.shape_1424 = new cjs.Shape();
	this.shape_1424.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1424.setTransform(-67.4,30.4,0.334,0.334);

	this.shape_1425 = new cjs.Shape();
	this.shape_1425.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1425.setTransform(-78.4,30.4,0.334,0.334);

	this.shape_1426 = new cjs.Shape();
	this.shape_1426.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1426.setTransform(-7.9,30.1,0.334,0.334);

	this.shape_1427 = new cjs.Shape();
	this.shape_1427.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1427.setTransform(-9.3,30.1,0.334,0.334);

	this.shape_1428 = new cjs.Shape();
	this.shape_1428.graphics.f("#000000").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_1428.setTransform(-49.7,30.4,0.334,0.334);

	this.shape_1429 = new cjs.Shape();
	this.shape_1429.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1429.setTransform(-69.4,30.3,0.334,0.334);

	this.shape_1430 = new cjs.Shape();
	this.shape_1430.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1430.setTransform(-70,30.1,0.334,0.334);

	this.shape_1431 = new cjs.Shape();
	this.shape_1431.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1431.setTransform(-89.1,30.3,0.334,0.334);

	this.shape_1432 = new cjs.Shape();
	this.shape_1432.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1432.setTransform(-7.3,29.8,0.334,0.334);

	this.shape_1433 = new cjs.Shape();
	this.shape_1433.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQAAgFAHgCg");
	this.shape_1433.setTransform(-24.1,29.8,0.334,0.334);

	this.shape_1434 = new cjs.Shape();
	this.shape_1434.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1434.setTransform(-29.6,29.9,0.334,0.334);

	this.shape_1435 = new cjs.Shape();
	this.shape_1435.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1435.setTransform(-32.3,29.9,0.334,0.334);

	this.shape_1436 = new cjs.Shape();
	this.shape_1436.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1436.setTransform(-34.3,29.8,0.334,0.334);

	this.shape_1437 = new cjs.Shape();
	this.shape_1437.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1437.setTransform(-67,29.8,0.334,0.334);

	this.shape_1438 = new cjs.Shape();
	this.shape_1438.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgHAKgBg");
	this.shape_1438.setTransform(-76.7,29.8,0.334,0.334);

	this.shape_1439 = new cjs.Shape();
	this.shape_1439.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1439.setTransform(-82.7,29.8,0.334,0.334);

	this.shape_1440 = new cjs.Shape();
	this.shape_1440.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1440.setTransform(-9.6,29.4,0.334,0.334);

	this.shape_1441 = new cjs.Shape();
	this.shape_1441.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1441.setTransform(-13.6,29.4,0.334,0.334);

	this.shape_1442 = new cjs.Shape();
	this.shape_1442.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1442.setTransform(-26.1,29.6,0.334,0.334);

	this.shape_1443 = new cjs.Shape();
	this.shape_1443.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1443.setTransform(-33.6,29.4,0.334,0.334);

	this.shape_1444 = new cjs.Shape();
	this.shape_1444.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1444.setTransform(-41.5,29.6,0.334,0.334);

	this.shape_1445 = new cjs.Shape();
	this.shape_1445.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQADgKADAFQADAGAAAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1445.setTransform(-61,29.8,0.334,0.334);

	this.shape_1446 = new cjs.Shape();
	this.shape_1446.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1446.setTransform(-27.1,29.2,0.334,0.334);

	this.shape_1447 = new cjs.Shape();
	this.shape_1447.graphics.f("#000000").s().p("AgFAOQgWgNAJgUIARARQAKAKAMACQgDAKgIAAQgHAAgIgGg");
	this.shape_1447.setTransform(-28.5,29.6,0.334,0.334);

	this.shape_1448 = new cjs.Shape();
	this.shape_1448.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1448.setTransform(-30,29.1,0.334,0.334);

	this.shape_1449 = new cjs.Shape();
	this.shape_1449.graphics.f("#000000").s().p("AgDAMQgNgMAJgPQAFABADAJQAEAIAHABQgCAMgGAAQgEAAgDgEg");
	this.shape_1449.setTransform(-31.5,29.5,0.334,0.334);

	this.shape_1450 = new cjs.Shape();
	this.shape_1450.graphics.f("#000000").s().p("AgOAKQgDgNAKgEQAFgCARAAQgHATgVAAIgBAAg");
	this.shape_1450.setTransform(-48,29.3,0.334,0.334);

	this.shape_1451 = new cjs.Shape();
	this.shape_1451.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1451.setTransform(-54.2,29.3,0.334,0.334);

	this.shape_1452 = new cjs.Shape();
	this.shape_1452.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1452.setTransform(-55.8,29.1,0.334,0.334);

	this.shape_1453 = new cjs.Shape();
	this.shape_1453.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1453.setTransform(-58,29.1,0.334,0.334);

	this.shape_1454 = new cjs.Shape();
	this.shape_1454.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1454.setTransform(-72,29.1,0.334,0.334);

	this.shape_1455 = new cjs.Shape();
	this.shape_1455.graphics.f("#000000").s().p("AgDAIQgGgWgKgBQAKgSANAVQAOARACATIgGAAQgNAAgEgQg");
	this.shape_1455.setTransform(-6.4,29.5,0.334,0.334);

	this.shape_1456 = new cjs.Shape();
	this.shape_1456.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1456.setTransform(-20.1,29,0.334,0.334);

	this.shape_1457 = new cjs.Shape();
	this.shape_1457.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1457.setTransform(-46.5,28.9,0.334,0.334);

	this.shape_1458 = new cjs.Shape();
	this.shape_1458.graphics.f("#000000").s().p("AgYAMQgBgMAPgEQAPgFAAgIQAVAHgBAWQgRAGgIAAQgGAAgSgGg");
	this.shape_1458.setTransform(-51.3,29.2,0.334,0.334);

	this.shape_1459 = new cjs.Shape();
	this.shape_1459.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1459.setTransform(-57.4,28.8,0.334,0.334);

	this.shape_1460 = new cjs.Shape();
	this.shape_1460.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1460.setTransform(-63.4,28.8,0.334,0.334);

	this.shape_1461 = new cjs.Shape();
	this.shape_1461.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1461.setTransform(-68.5,28.8,0.334,0.334);

	this.shape_1462 = new cjs.Shape();
	this.shape_1462.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1462.setTransform(-39.2,28.6,0.334,0.334);

	this.shape_1463 = new cjs.Shape();
	this.shape_1463.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1463.setTransform(-44.5,28.7,0.334,0.334);

	this.shape_1464 = new cjs.Shape();
	this.shape_1464.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1464.setTransform(-81.1,28.4,0.334,0.334);

	this.shape_1465 = new cjs.Shape();
	this.shape_1465.graphics.f("#000000").s().p("AAZgOQgJAWgoAHQAJgYAogFg");
	this.shape_1465.setTransform(-8.3,28.4,0.334,0.334);

	this.shape_1466 = new cjs.Shape();
	this.shape_1466.graphics.f("#000000").s().p("AgYAHQANgWAkADQABATgWAFQgGABgGAAQgKAAgGgGg");
	this.shape_1466.setTransform(-75.7,28.4,0.334,0.334);

	this.shape_1467 = new cjs.Shape();
	this.shape_1467.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_1467.setTransform(-84.4,28.3,0.334,0.334);

	this.shape_1468 = new cjs.Shape();
	this.shape_1468.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1468.setTransform(-65.2,27.9,0.334,0.334);

	this.shape_1469 = new cjs.Shape();
	this.shape_1469.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1469.setTransform(-77.4,27.8,0.334,0.334);

	this.shape_1470 = new cjs.Shape();
	this.shape_1470.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1470.setTransform(-78.8,28,0.334,0.334);

	this.shape_1471 = new cjs.Shape();
	this.shape_1471.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1471.setTransform(-18.3,27.4,0.334,0.334);

	this.shape_1472 = new cjs.Shape();
	this.shape_1472.graphics.f("#000000").s().p("AgOgOQAggDgDAgIgEAAQgcAAADgdg");
	this.shape_1472.setTransform(-27.3,27.8,0.334,0.334);

	this.shape_1473 = new cjs.Shape();
	this.shape_1473.graphics.f("#000000").s().p("AgIAEIgBgSQALgCAEAGQADAEABALQgGgBgCADQgBACgBAGQgGgBgCgKg");
	this.shape_1473.setTransform(-29.1,27.8,0.334,0.334);

	this.shape_1474 = new cjs.Shape();
	this.shape_1474.graphics.f("#000000").s().p("AgBAIQgNAAAEAEQgLgJADgHQACgGALgBQAcgDgEAaQgGgFgOABg");
	this.shape_1474.setTransform(-34.5,27.5,0.334,0.334);

	this.shape_1475 = new cjs.Shape();
	this.shape_1475.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1475.setTransform(-36.5,27.7,0.334,0.334);

	this.shape_1476 = new cjs.Shape();
	this.shape_1476.graphics.f("#000000").s().p("AgaAHQgJgMABgOQAJAJAGgDQAGgCgBgOQATgCALARQAOAVAFADQgFAJgQAEQgTAEgJADQgBgHgLgQgAgEAAQAAAIAIABQAJAAACgJQgEABgIgFIgDgBQgCAAgCAFg");
	this.shape_1476.setTransform(-70.7,28.3,0.334,0.334);

	this.shape_1477 = new cjs.Shape();
	this.shape_1477.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1477.setTransform(-61.9,27.3,0.334,0.334);

	this.shape_1478 = new cjs.Shape();
	this.shape_1478.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1478.setTransform(-82.7,27.1,0.334,0.334);

	this.shape_1479 = new cjs.Shape();
	this.shape_1479.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1479.setTransform(-94.7,27.1,0.334,0.334);

	this.shape_1480 = new cjs.Shape();
	this.shape_1480.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1480.setTransform(-20.3,26.8,0.334,0.334);

	this.shape_1481 = new cjs.Shape();
	this.shape_1481.graphics.f("#000000").s().p("AgIAEQAKgWgCgGQARAFgIAQQgKAWABAGQgQgFAIgQg");
	this.shape_1481.setTransform(-30.1,27.4,0.334,0.334);

	this.shape_1482 = new cjs.Shape();
	this.shape_1482.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1482.setTransform(-30.8,26.8,0.334,0.334);

	this.shape_1483 = new cjs.Shape();
	this.shape_1483.graphics.f("#000000").s().p("AAMAOQgEgJgHAAQgFAAgCAHIgCANQgFgBgEgKQgEgJgHAAQAAgIAQgEQAOgFgBgMQAGAIARAOQAMANgPAOQgFgBgEgKg");
	this.shape_1483.setTransform(-32.5,27.4,0.334,0.334);

	this.shape_1484 = new cjs.Shape();
	this.shape_1484.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1484.setTransform(-56.7,26.6,0.334,0.334);

	this.shape_1485 = new cjs.Shape();
	this.shape_1485.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1485.setTransform(-71,26.4,0.334,0.334);

	this.shape_1486 = new cjs.Shape();
	this.shape_1486.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1486.setTransform(-80.7,26.4,0.334,0.334);

	this.shape_1487 = new cjs.Shape();
	this.shape_1487.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1487.setTransform(-38.3,26.1,0.334,0.334);

	this.shape_1488 = new cjs.Shape();
	this.shape_1488.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1488.setTransform(-43.8,26.3,0.334,0.334);

	this.shape_1489 = new cjs.Shape();
	this.shape_1489.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1489.setTransform(-45.8,26.2,0.334,0.334);

	this.shape_1490 = new cjs.Shape();
	this.shape_1490.graphics.f("#000000").s().p("AgKAKQACgVgBgJQAXADgEAkQgFACgEAAQgJAAgCgLg");
	this.shape_1490.setTransform(-54.8,26.6,0.334,0.334);

	this.shape_1491 = new cjs.Shape();
	this.shape_1491.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1491.setTransform(-58.7,26.3,0.334,0.334);

	this.shape_1492 = new cjs.Shape();
	this.shape_1492.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1492.setTransform(-64.4,26.1,0.334,0.334);

	this.shape_1493 = new cjs.Shape();
	this.shape_1493.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1493.setTransform(-68.7,26.1,0.334,0.334);

	this.shape_1494 = new cjs.Shape();
	this.shape_1494.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1494.setTransform(-86.8,26.4,0.334,0.334);

	this.shape_1495 = new cjs.Shape();
	this.shape_1495.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1495.setTransform(-9.9,25.9,0.334,0.334);

	this.shape_1496 = new cjs.Shape();
	this.shape_1496.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1496.setTransform(-22.1,25.8,0.334,0.334);

	this.shape_1497 = new cjs.Shape();
	this.shape_1497.graphics.f("#000000").s().p("AACAHQgKgGgGgBQAEgKAJAEIAQAGQgDAIgGAAIgEgBg");
	this.shape_1497.setTransform(-79.7,25.9,0.334,0.334);

	this.shape_1498 = new cjs.Shape();
	this.shape_1498.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1498.setTransform(-84.7,25.8,0.334,0.334);

	this.shape_1499 = new cjs.Shape();
	this.shape_1499.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1499.setTransform(-16.4,25.6,0.334,0.334);

	this.shape_1500 = new cjs.Shape();
	this.shape_1500.graphics.f("#000000").s().p("AgTAKQADgYAkAFQgDAUgaAAIgKgBg");
	this.shape_1500.setTransform(-23.5,25.6,0.334,0.334);

	this.shape_1501 = new cjs.Shape();
	this.shape_1501.graphics.f("#000000").s().p("AgGABQAGgJAAgGQALAFgEAIIgHAQQgKgEAEgKg");
	this.shape_1501.setTransform(-25.1,25.8,0.334,0.334);

	this.shape_1502 = new cjs.Shape();
	this.shape_1502.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1502.setTransform(-35.1,25.6,0.334,0.334);

	this.shape_1503 = new cjs.Shape();
	this.shape_1503.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1503.setTransform(-47,25.4,0.334,0.334);

	this.shape_1504 = new cjs.Shape();
	this.shape_1504.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1504.setTransform(-66.2,25.4,0.334,0.334);

	this.shape_1505 = new cjs.Shape();
	this.shape_1505.graphics.f("#000000").s().p("AgFANQgSgPgBgRQALADAOAKQASANAGADQgGAKgIAAQgHAAgJgHg");
	this.shape_1505.setTransform(-70.4,25.9,0.334,0.334);

	this.shape_1506 = new cjs.Shape();
	this.shape_1506.graphics.f("#000000").s().p("AgNAQQgQgPAAgOQADAAAGAFQAFAFAGAAQAGgBABgHIACgMIAVANQAKAKgBAQQgQgLgOABQgBAFADADIAIACQgDAIgGAAQgFAAgJgIg");
	this.shape_1506.setTransform(-77.5,26.1,0.334,0.334);

	this.shape_1507 = new cjs.Shape();
	this.shape_1507.graphics.f("#000000").s().p("AgIgDQAIgLAFAEQAFADgBAJQAAAKgFABIAAAAQgEAAgIgQg");
	this.shape_1507.setTransform(-89.3,25.7,0.334,0.334);

	this.shape_1508 = new cjs.Shape();
	this.shape_1508.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1508.setTransform(-18.6,25.1,0.334,0.334);

	this.shape_1509 = new cjs.Shape();
	this.shape_1509.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1509.setTransform(-36.6,25.4,0.334,0.334);

	this.shape_1510 = new cjs.Shape();
	this.shape_1510.graphics.f("#000000").s().p("AgGALQgHgIgLACQgCgKAVAAQASAAgIgTQAdADgMAQQgSAaABAEIgLgOg");
	this.shape_1510.setTransform(-72.7,25.8,0.334,0.334);

	this.shape_1511 = new cjs.Shape();
	this.shape_1511.graphics.f("#000000").s().p("AgLADQALgVgCgGQAXAHgIANQgPAZAAAEQgRgFAIgRg");
	this.shape_1511.setTransform(-26,25.4,0.334,0.334);

	this.shape_1512 = new cjs.Shape();
	this.shape_1512.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1512.setTransform(-34.3,24.8,0.334,0.334);

	this.shape_1513 = new cjs.Shape();
	this.shape_1513.graphics.f("#000000").s().p("AgYgOQAPABAFgCQAIgCABgHQAFABAEAJQAEAKAHAAQACALgPAEQgPAFgBAJQgZgEAFgjg");
	this.shape_1513.setTransform(-53,25.4,0.334,0.334);

	this.shape_1514 = new cjs.Shape();
	this.shape_1514.graphics.f("#000000").s().p("AgFAGQgKgIABgRIAUAOQAKAIgBARQgRgLgDgDg");
	this.shape_1514.setTransform(-69.7,25.3,0.334,0.334);

	this.shape_1515 = new cjs.Shape();
	this.shape_1515.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1515.setTransform(-77.7,24.8,0.334,0.334);

	this.shape_1516 = new cjs.Shape();
	this.shape_1516.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1516.setTransform(-20.3,23,0.334,0.334);

	this.shape_1517 = new cjs.Shape();
	this.shape_1517.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1517.setTransform(-20.6,24.4,0.334,0.334);

	this.shape_1518 = new cjs.Shape();
	this.shape_1518.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1518.setTransform(-39.8,24.6,0.334,0.334);

	this.shape_1519 = new cjs.Shape();
	this.shape_1519.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1519.setTransform(-46.7,24.4,0.334,0.334);

	this.shape_1520 = new cjs.Shape();
	this.shape_1520.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1520.setTransform(-63.2,24.4,0.334,0.334);

	this.shape_1521 = new cjs.Shape();
	this.shape_1521.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1521.setTransform(-82.6,24.6,0.334,0.334);

	this.shape_1522 = new cjs.Shape();
	this.shape_1522.graphics.f("#000000").s().p("Ag2ADQACgfATgKQARgJAWAKQAXAKAOAWQAQAWgEAaIgSAAQhAAAgbgogAgigaQgEAuArADQASgUgNgSQgJgOgRAAQgIAAgKADg");
	this.shape_1522.setTransform(-91.4,25.8,0.334,0.334);

	this.shape_1523 = new cjs.Shape();
	this.shape_1523.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1523.setTransform(-16.3,23.8,0.334,0.334);

	this.shape_1524 = new cjs.Shape();
	this.shape_1524.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1524.setTransform(-37.7,23.8,0.334,0.334);

	this.shape_1525 = new cjs.Shape();
	this.shape_1525.graphics.f("#000000").s().p("AgdASQAAgJAFgKQAGgLgBgJQAPgFALAIQAMAJALgCQgMAjgZAAQgKAAgMgGg");
	this.shape_1525.setTransform(-54.8,24.3,0.334,0.334);

	this.shape_1526 = new cjs.Shape();
	this.shape_1526.graphics.f("#000000").s().p("AgBgBQAYgTgWAVQgJAKgCAAQgBAAAKgMg");
	this.shape_1526.setTransform(-57.4,24,0.334,0.334);

	this.shape_1527 = new cjs.Shape();
	this.shape_1527.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1527.setTransform(-67.7,23.8,0.334,0.334);

	this.shape_1528 = new cjs.Shape();
	this.shape_1528.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1528.setTransform(-81.6,24.1,0.334,0.334);

	this.shape_1529 = new cjs.Shape();
	this.shape_1529.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1529.setTransform(-86.4,23.8,0.334,0.334);

	this.shape_1530 = new cjs.Shape();
	this.shape_1530.graphics.f("#000000").s().p("AgEAPQABgGgDgCQgCgCgGAAQABgFAKgDQAIgEAAgHQAHABACAKIABASg");
	this.shape_1530.setTransform(-22,23.8,0.334,0.334);

	this.shape_1531 = new cjs.Shape();
	this.shape_1531.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1531.setTransform(-45.2,23.7,0.334,0.334);

	this.shape_1532 = new cjs.Shape();
	this.shape_1532.graphics.f("#000000").s().p("AgOgYIAQASQALAJAMACQgFAJgQAEQgTAEgJADQAOgUgEgdg");
	this.shape_1532.setTransform(-48,24.1,0.334,0.334);

	this.shape_1533 = new cjs.Shape();
	this.shape_1533.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_1533.setTransform(-59.5,23.6,0.334,0.334);

	this.shape_1534 = new cjs.Shape();
	this.shape_1534.graphics.f("#000000").s().p("AgIAHQgDgHAKgLQAMAKgBAHQgBAGgIAAQgHAAgCgFg");
	this.shape_1534.setTransform(-65.1,23.7,0.334,0.334);

	this.shape_1535 = new cjs.Shape();
	this.shape_1535.graphics.f("#000000").s().p("AgTAYQgBgOAJgMQALgRAAgGQAEAAAGAFQAFAFAFAAIAAATQgJABgBgKQgKgCAAAUQAAANgJAAQgEAAgGgCg");
	this.shape_1535.setTransform(-79.2,24.1,0.334,0.334);

	this.shape_1536 = new cjs.Shape();
	this.shape_1536.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1536.setTransform(-84.7,23.4,0.334,0.334);

	this.shape_1537 = new cjs.Shape();
	this.shape_1537.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1537.setTransform(-22.6,23.1,0.334,0.334);

	this.shape_1538 = new cjs.Shape();
	this.shape_1538.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1538.setTransform(-43.2,23.3,0.334,0.334);

	this.shape_1539 = new cjs.Shape();
	this.shape_1539.graphics.f("#000000").s().p("AgKgFQAEgDALgBQgBAFADADIAIABQgBAHgKACIgSABQgCgKAGgFg");
	this.shape_1539.setTransform(-71.4,23.3,0.334,0.334);

	this.shape_1540 = new cjs.Shape();
	this.shape_1540.graphics.f("#000000").s().p("AgHAMQgHgLgPAEQABgIAVgEQATgDgCgOQASAJACAeQgJACgBgMQgGAAgCAHIgCANQgJAAgIgNg");
	this.shape_1540.setTransform(-76.9,23.8,0.334,0.334);

	this.shape_1541 = new cjs.Shape();
	this.shape_1541.graphics.f("#000000").s().p("AAGATQgTgOgQANQACgLANgIQAOgKAAgKQALgCAAAVQAAASATgIQgGAOgJAAQgEAAgFgDg");
	this.shape_1541.setTransform(-24.1,23.3,0.334,0.334);

	this.shape_1542 = new cjs.Shape();
	this.shape_1542.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1542.setTransform(-25.1,22.8,0.334,0.334);

	this.shape_1543 = new cjs.Shape();
	this.shape_1543.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1543.setTransform(-46.8,22.9,0.334,0.334);

	this.shape_1544 = new cjs.Shape();
	this.shape_1544.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1544.setTransform(-67.2,22.9,0.334,0.334);

	this.shape_1545 = new cjs.Shape();
	this.shape_1545.graphics.f("#000000").s().p("AgMAEQALgWgCgGQAEABAEAKQAEAIAHABIgOALQgHAGACAMQgRgFAIgQg");
	this.shape_1545.setTransform(-69.1,23.4,0.334,0.334);

	this.shape_1546 = new cjs.Shape();
	this.shape_1546.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1546.setTransform(-79.7,22.8,0.334,0.334);

	this.shape_1547 = new cjs.Shape();
	this.shape_1547.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1547.setTransform(-81.1,22.8,0.334,0.334);

	this.shape_1548 = new cjs.Shape();
	this.shape_1548.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1548.setTransform(-18.3,22.4,0.334,0.334);

	this.shape_1549 = new cjs.Shape();
	this.shape_1549.graphics.f("#000000").s().p("AgJAWQAFgfgZACQAIgWAQALQASAOARgMQgEACgLAVQgIAPgOAAIgCAAgAAegRIAAABIAAgBg");
	this.shape_1549.setTransform(-33.8,23.2,0.334,0.334);

	this.shape_1550 = new cjs.Shape();
	this.shape_1550.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1550.setTransform(-35.6,22.6,0.334,0.334);

	this.shape_1551 = new cjs.Shape();
	this.shape_1551.graphics.f("#000000").s().p("AgYAKIAHgMQADgIAAgJIAnAAQAAAJgGAKQgGAKACAKQgNgMgaACg");
	this.shape_1551.setTransform(-49.7,22.9,0.334,0.334);

	this.shape_1552 = new cjs.Shape();
	this.shape_1552.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1552.setTransform(-77,22.4,0.334,0.334);

	this.shape_1553 = new cjs.Shape();
	this.shape_1553.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1553.setTransform(-46.3,22.1,0.334,0.334);

	this.shape_1554 = new cjs.Shape();
	this.shape_1554.graphics.f("#000000").s().p("AAEAXQgWgLgGACQgCgMAEgKQAHgKABgHQAGAAACAHIACANQAIACABgMQAHABADAOQACAOAIAAQgDAMgJAAQgEAAgFgDg");
	this.shape_1554.setTransform(-53.4,22.8,0.334,0.334);

	this.shape_1555 = new cjs.Shape();
	this.shape_1555.graphics.f("#FF00FF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1555.setTransform(-56.2,22.3,0.334,0.334);

	this.shape_1556 = new cjs.Shape();
	this.shape_1556.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1556.setTransform(-64,22.1,0.334,0.334);

	this.shape_1557 = new cjs.Shape();
	this.shape_1557.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1557.setTransform(-85.1,22.1,0.334,0.334);

	this.shape_1558 = new cjs.Shape();
	this.shape_1558.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1558.setTransform(-87.4,22.1,0.334,0.334);

	this.shape_1559 = new cjs.Shape();
	this.shape_1559.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1559.setTransform(-58.2,21.9,0.334,0.334);

	this.shape_1560 = new cjs.Shape();
	this.shape_1560.graphics.f("#000000").s().p("AgSABQADgIALgHQAKgGAHAEQAJAGgDASQgPgBgEABQgJACgBAIQgLgGADgLg");
	this.shape_1560.setTransform(-83.2,22.3,0.334,0.334);

	this.shape_1561 = new cjs.Shape();
	this.shape_1561.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1561.setTransform(-34,21.4,0.334,0.334);

	this.shape_1562 = new cjs.Shape();
	this.shape_1562.graphics.f("#000000").s().p("AgOgPIAUAJQANAFgEAPIgMACQgYAAAHgfg");
	this.shape_1562.setTransform(-39,21.8,0.334,0.334);

	this.shape_1563 = new cjs.Shape();
	this.shape_1563.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1563.setTransform(-44.3,21.4,0.334,0.334);

	this.shape_1564 = new cjs.Shape();
	this.shape_1564.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1564.setTransform(-87.1,21.4,0.334,0.334);

	this.shape_1565 = new cjs.Shape();
	this.shape_1565.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1565.setTransform(-36.7,21.1,0.334,0.334);

	this.shape_1566 = new cjs.Shape();
	this.shape_1566.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1566.setTransform(-66.4,21.1,0.334,0.334);

	this.shape_1567 = new cjs.Shape();
	this.shape_1567.graphics.f("#000000").s().p("AgDAZQgCgGAEgCQABgBAGgBQgBgEgOgKQgLgHAHgSQAPgBAMAZQALAZgbAAIgBAAg");
	this.shape_1567.setTransform(-76.4,21.8,0.334,0.334);

	this.shape_1568 = new cjs.Shape();
	this.shape_1568.graphics.f("#000000").s().p("AgMANQgFgOgMABQgBgJAVAAQASgBgJgTIAMANQAGAIAMgBQAAAGgHACIgNABQgHABgCAKIgBATQgIgBgEgQg");
	this.shape_1568.setTransform(-78.5,21.9,0.334,0.334);

	this.shape_1569 = new cjs.Shape();
	this.shape_1569.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1569.setTransform(-18.5,21,0.334,0.334);

	this.shape_1570 = new cjs.Shape();
	this.shape_1570.graphics.f("#000000").s().p("AgTAUQADgDAMgVQAHgQARABQgIASgFAIQgHANgNAAIgGAAg");
	this.shape_1570.setTransform(-20.5,21.3,0.334,0.334);

	this.shape_1571 = new cjs.Shape();
	this.shape_1571.graphics.f("#000000").s().p("AgFAJQgQgJABgPQAOgPAPANQARAOgHAbQgDgDgVgMg");
	this.shape_1571.setTransform(-55.5,21.5,0.334,0.334);

	this.shape_1572 = new cjs.Shape();
	this.shape_1572.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAFAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1572.setTransform(-60.2,21,0.334,0.334);

	this.shape_1573 = new cjs.Shape();
	this.shape_1573.graphics.f("#000000").s().p("AgOAOQgIgJgHgBQAFgVAcgFQAdgGgDAgQgDgBgGgEQgGgEgFAAQgIABgBAJIgBATQgGgCgIgIg");
	this.shape_1573.setTransform(-73.2,21.5,0.334,0.334);

	this.shape_1574 = new cjs.Shape();
	this.shape_1574.graphics.f("#000000").s().p("AAAAMQgIgJgLACIAAgdQAJAAAIAMQAHAMAPgEQgKAPAAAOIgKgNg");
	this.shape_1574.setTransform(-75.2,21.4,0.334,0.334);

	this.shape_1575 = new cjs.Shape();
	this.shape_1575.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1575.setTransform(-83.7,20.8,0.334,0.334);

	this.shape_1576 = new cjs.Shape();
	this.shape_1576.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1576.setTransform(-87.6,20.8,0.334,0.334);

	this.shape_1577 = new cjs.Shape();
	this.shape_1577.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1577.setTransform(-21.8,20.5,0.334,0.334);

	this.shape_1578 = new cjs.Shape();
	this.shape_1578.graphics.f("#000000").s().p("AAAAeQAAgGACgCQACgCAGAAQgFgTgLADQgPAEgIgIQAFgBAMgRQAIgMAOABQABAFgDADIgIACQAHATAXAAQgBABgIAUQgEAKgKAAIgHgBg");
	this.shape_1578.setTransform(-22.8,21.3,0.334,0.334);

	this.shape_1579 = new cjs.Shape();
	this.shape_1579.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1579.setTransform(-42.3,20.6,0.334,0.334);

	this.shape_1580 = new cjs.Shape();
	this.shape_1580.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1580.setTransform(-68.2,20.6,0.334,0.334);

	this.shape_1581 = new cjs.Shape();
	this.shape_1581.graphics.f("#000000").s().p("AgOAWQgMgRACgOQAMACAEgGQADgFABgLQAFABAJAJQAIAIAHACQABAEgYAIQgRAHAUAKQgEAKgFAAQgEAAgGgIg");
	this.shape_1581.setTransform(-70.7,21.3,0.334,0.334);

	this.shape_1582 = new cjs.Shape();
	this.shape_1582.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1582.setTransform(-80.1,20.4,0.334,0.334);

	this.shape_1583 = new cjs.Shape();
	this.shape_1583.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1583.setTransform(-81.1,20.4,0.334,0.334);

	this.shape_1584 = new cjs.Shape();
	this.shape_1584.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1584.setTransform(-16.6,20.1,0.334,0.334);

	this.shape_1585 = new cjs.Shape();
	this.shape_1585.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1585.setTransform(-26.1,20.1,0.334,0.334);

	this.shape_1586 = new cjs.Shape();
	this.shape_1586.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1586.setTransform(-27,20.1,0.334,0.334);

	this.shape_1587 = new cjs.Shape();
	this.shape_1587.graphics.f("#000000").s().p("AAAAPQgKgbgJAWQgQgEAJgKQALgRgEgIQAOgDAHAQQAIAPAUgIQACAGgQALQgMAJAQADQgEAKgFAAQgFABgGgQg");
	this.shape_1587.setTransform(-27.5,20.9,0.334,0.334);

	this.shape_1588 = new cjs.Shape();
	this.shape_1588.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1588.setTransform(-28.8,20.1,0.334,0.334);

	this.shape_1589 = new cjs.Shape();
	this.shape_1589.graphics.f("#000000").s().p("AgKAUQAJgLgDgHQgGgKAAgLQAQgEAEAYQADAUgOAAIgJgBg");
	this.shape_1589.setTransform(-85.2,20.6,0.334,0.334);

	this.shape_1590 = new cjs.Shape();
	this.shape_1590.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1590.setTransform(-33.3,19.8,0.334,0.334);

	this.shape_1591 = new cjs.Shape();
	this.shape_1591.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1591.setTransform(-34.5,20,0.334,0.334);

	this.shape_1592 = new cjs.Shape();
	this.shape_1592.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1592.setTransform(-76,19.9,0.334,0.334);

	this.shape_1593 = new cjs.Shape();
	this.shape_1593.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1593.setTransform(-46.3,19.4,0.334,0.334);

	this.shape_1594 = new cjs.Shape();
	this.shape_1594.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1594.setTransform(-65.2,19.5,0.334,0.334);

	this.shape_1595 = new cjs.Shape();
	this.shape_1595.graphics.f("#000000").s().p("AgNAOQgGgFgFABIAAgTQAPAAAEgBQAJgCABgHQADABAGAFQAGAEAFAAIAAATQgDgBgGgFQgFgEgGAAQgFAAgCAHIgCANQgDgBgGgFg");
	this.shape_1595.setTransform(-82.4,19.9,0.334,0.334);

	this.shape_1596 = new cjs.Shape();
	this.shape_1596.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1596.setTransform(-86.7,19.4,0.334,0.334);

	this.shape_1597 = new cjs.Shape();
	this.shape_1597.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1597.setTransform(-45.3,19.3,0.334,0.334);

	this.shape_1598 = new cjs.Shape();
	this.shape_1598.graphics.f("#000000").s().p("AgZAOQAAgXAbgDQAcgDgGAdg");
	this.shape_1598.setTransform(-80,19.5,0.334,0.334);

	this.shape_1599 = new cjs.Shape();
	this.shape_1599.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1599.setTransform(-43.7,18.8,0.334,0.334);

	this.shape_1600 = new cjs.Shape();
	this.shape_1600.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1600.setTransform(-58.8,19,0.334,0.334);

	this.shape_1601 = new cjs.Shape();
	this.shape_1601.graphics.f("#000000").s().p("AgJgSQARgHACAQQABAJgBAVQgRgJgCgeg");
	this.shape_1601.setTransform(-70.2,19.2,0.334,0.334);

	this.shape_1602 = new cjs.Shape();
	this.shape_1602.graphics.f("#000000").s().p("AgJgTQAXADgEAkQgRgJgCgeg");
	this.shape_1602.setTransform(-72.5,19.3,0.334,0.334);

	this.shape_1603 = new cjs.Shape();
	this.shape_1603.graphics.f("#000000").s().p("AgHATQgTgfgIgHQAVgXATAYQALANASAZQgLALgKAAQgLAAgKgMg");
	this.shape_1603.setTransform(-18.6,19.3,0.334,0.334);

	this.shape_1604 = new cjs.Shape();
	this.shape_1604.graphics.f("#000000").s().p("AgOAPIAJgUQAFgNAPAEQgCACgHASQgEAKgJAAIgHgBg");
	this.shape_1604.setTransform(-33,18.8,0.334,0.334);

	this.shape_1605 = new cjs.Shape();
	this.shape_1605.graphics.f("#000000").s().p("AgTAFIAAgTQALAJAGgDQALgHALABIAAAdQgIgHgJgCQgLgCgBALIgCAAQgHAAgBgKg");
	this.shape_1605.setTransform(-47.5,18.8,0.334,0.334);

	this.shape_1606 = new cjs.Shape();
	this.shape_1606.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1606.setTransform(-61.2,18.5,0.334,0.334);

	this.shape_1607 = new cjs.Shape();
	this.shape_1607.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1607.setTransform(-67,18.6,0.334,0.334);

	this.shape_1608 = new cjs.Shape();
	this.shape_1608.graphics.f("#000000").s().p("AgDALQgRgLAHgPQAGACAIAJQAIAHAHABQgCAMgHAAQgEAAgGgFg");
	this.shape_1608.setTransform(-71.7,18.8,0.334,0.334);

	this.shape_1609 = new cjs.Shape();
	this.shape_1609.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1609.setTransform(-73.7,18.4,0.334,0.334);

	this.shape_1610 = new cjs.Shape();
	this.shape_1610.graphics.f("#000000").s().p("AgJAdQAAgGAHgCIAMgCQgFgSgLACQgQAEgHgHIAOgLQAIgHgCgMQAHACAHASQAHAOASgEQgHAQgEAHQgGAIgMAAQgEAAgGgCg");
	this.shape_1610.setTransform(-21.1,19,0.334,0.334);

	this.shape_1611 = new cjs.Shape();
	this.shape_1611.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1611.setTransform(-22,18.1,0.334,0.334);

	this.shape_1612 = new cjs.Shape();
	this.shape_1612.graphics.f("#000000").s().p("AAHAMIgCgMQgQgCgDAMQgJABgBgLIAAgTIAYAFIAZgFQACAMgFAJIgHASQgGAAgCgIg");
	this.shape_1612.setTransform(-31,18.6,0.334,0.334);

	this.shape_1613 = new cjs.Shape();
	this.shape_1613.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1613.setTransform(-79.1,18.1,0.334,0.334);

	this.shape_1614 = new cjs.Shape();
	this.shape_1614.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1614.setTransform(-80.2,18.1,0.334,0.334);

	this.shape_1615 = new cjs.Shape();
	this.shape_1615.graphics.f("#000000").s().p("AgKATQgCgNAEgJQAHgKABgHQAOgDgDAaQgCATgJAAQgEAAgGgDg");
	this.shape_1615.setTransform(-85.9,18.6,0.334,0.334);

	this.shape_1616 = new cjs.Shape();
	this.shape_1616.graphics.f("#000000").s().p("AgHAWQACgBAFgBQAAgHgKgCIgTgBIAGgbQAHgOAQACQgFAUALAJQAHAEARAGQgIASgfACQgCgGAEgCg");
	this.shape_1616.setTransform(-23.5,18.6,0.334,0.334);

	this.shape_1617 = new cjs.Shape();
	this.shape_1617.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1617.setTransform(-24.6,17.8,0.334,0.334);

	this.shape_1618 = new cjs.Shape();
	this.shape_1618.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1618.setTransform(-27.3,17.8,0.334,0.334);

	this.shape_1619 = new cjs.Shape();
	this.shape_1619.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1619.setTransform(-33.8,17.8,0.334,0.334);

	this.shape_1620 = new cjs.Shape();
	this.shape_1620.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1620.setTransform(-41.8,17.9,0.334,0.334);

	this.shape_1621 = new cjs.Shape();
	this.shape_1621.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1621.setTransform(-29.6,17.4,0.334,0.334);

	this.shape_1622 = new cjs.Shape();
	this.shape_1622.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1622.setTransform(-31.3,17.4,0.334,0.334);

	this.shape_1623 = new cjs.Shape();
	this.shape_1623.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1623.setTransform(-56.7,17.4,0.334,0.334);

	this.shape_1624 = new cjs.Shape();
	this.shape_1624.graphics.f("#000000").s().p("AgMAGQAGgMABgNQAPACACAOQACAMgKALQgRgFABgJg");
	this.shape_1624.setTransform(-46,17.6,0.334,0.334);

	this.shape_1625 = new cjs.Shape();
	this.shape_1625.graphics.f("#000000").s().p("AgKAOQgQgPAIgTQALAJAGgDQALgGALAAIAAAdQgJACgBgLQgIAAACAFQABAEAFAAQgDAMgHAAQgEAAgHgHg");
	this.shape_1625.setTransform(-49.5,17.6,0.334,0.334);

	this.shape_1626 = new cjs.Shape();
	this.shape_1626.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1626.setTransform(-25.1,16.9,0.334,0.334);

	this.shape_1627 = new cjs.Shape();
	this.shape_1627.graphics.f("#000000").s().p("AgCAJQgHgCgCgHQgCgHAGgCQAHgBAMALQgGAJgGAAIgCgBg");
	this.shape_1627.setTransform(-37.6,16.9,0.334,0.334);

	this.shape_1628 = new cjs.Shape();
	this.shape_1628.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1628.setTransform(-65.7,16.9,0.334,0.334);

	this.shape_1629 = new cjs.Shape();
	this.shape_1629.graphics.f("#000000").s().p("AgEAJQgEgIACgDQAJgYAEAUQAEAVgIACIgBAAQgDAAgDgIg");
	this.shape_1629.setTransform(-71.3,17,0.334,0.334);

	this.shape_1630 = new cjs.Shape();
	this.shape_1630.graphics.f("#000000").s().p("AgKAWQgMgRACgOQAWAAAHgUQAQgDgFAWQgEAVgQgLQgCAQALAEQgEALgFAAQgFAAgFgJg");
	this.shape_1630.setTransform(-81.5,17.6,0.334,0.334);

	this.shape_1631 = new cjs.Shape();
	this.shape_1631.graphics.f("#000000").s().p("AgHAEIgGgmQARAGAHAZQAIAZgNANQgIgKgFgVg");
	this.shape_1631.setTransform(-7.4,63,0.334,0.334);

	this.shape_1632 = new cjs.Shape();
	this.shape_1632.graphics.f("#000000").s().p("AgHAEIgGgmQAQAGAIAaQAHAYgMANQgIgKgFgVg");
	this.shape_1632.setTransform(-17.7,17.4,0.334,0.334);

	this.shape_1633 = new cjs.Shape();
	this.shape_1633.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1633.setTransform(-20.5,16.4,0.334,0.334);

	this.shape_1634 = new cjs.Shape();
	this.shape_1634.graphics.f("#000000").s().p("AgOAFIAAgTIAdAAQgCAGgIAIQgIAHgBAIIgCAAQgHAAgBgKg");
	this.shape_1634.setTransform(-24,16.8,0.334,0.334);

	this.shape_1635 = new cjs.Shape();
	this.shape_1635.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1635.setTransform(-28,16.4,0.334,0.334);

	this.shape_1636 = new cjs.Shape();
	this.shape_1636.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1636.setTransform(-44.8,16.6,0.334,0.334);

	this.shape_1637 = new cjs.Shape();
	this.shape_1637.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1637.setTransform(-59.9,16.4,0.334,0.334);

	this.shape_1638 = new cjs.Shape();
	this.shape_1638.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1638.setTransform(-68,16.4,0.334,0.334);

	this.shape_1639 = new cjs.Shape();
	this.shape_1639.graphics.f("#000000").s().p("AgdgOQAGAAACAHIACAMQAUgHgBgWIAMANQAGAIAMgBQACAJgVAAQgSAAAHAUIgEAAQgdAAAEgng");
	this.shape_1639.setTransform(-76.6,17.1,0.334,0.334);

	this.shape_1640 = new cjs.Shape();
	this.shape_1640.graphics.f("#000000").s().p("AgCAQQgWgKAGgPQAQACADgMQAHABACAPQACANAJAAQgCAKgJAAQgFAAgHgEg");
	this.shape_1640.setTransform(-22.1,16.6,0.334,0.334);

	this.shape_1641 = new cjs.Shape();
	this.shape_1641.graphics.f("#000000").s().p("AgIgDQAIgLAFAEQAFADgBAJQAAAKgFABIAAAAQgFAAgHgQg");
	this.shape_1641.setTransform(-31.8,16.4,0.334,0.334);

	this.shape_1642 = new cjs.Shape();
	this.shape_1642.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1642.setTransform(-35,16.3,0.334,0.334);

	this.shape_1643 = new cjs.Shape();
	this.shape_1643.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1643.setTransform(-62.2,16.1,0.334,0.334);

	this.shape_1644 = new cjs.Shape();
	this.shape_1644.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1644.setTransform(-70.4,16.1,0.334,0.334);

	this.shape_1645 = new cjs.Shape();
	this.shape_1645.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1645.setTransform(-23,15.8,0.334,0.334);

	this.shape_1646 = new cjs.Shape();
	this.shape_1646.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_1646.setTransform(-24.6,15.9,0.334,0.334);

	this.shape_1647 = new cjs.Shape();
	this.shape_1647.graphics.f("#000000").s().p("AAAAFQgHgHgIgBQADgTAQAMQARAKgHAQQgGgCgIgJg");
	this.shape_1647.setTransform(-30.6,16.1,0.334,0.334);

	this.shape_1648 = new cjs.Shape();
	this.shape_1648.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1648.setTransform(-43.3,15.9,0.334,0.334);

	this.shape_1649 = new cjs.Shape();
	this.shape_1649.graphics.f("#FF00FF").s().p("AgZAKIAHgMQAEgIgBgJIAnAAQAIAbgVAJQgIADgGAAQgMAAgKgKg");
	this.shape_1649.setTransform(-47.6,16.3,0.334,0.334);

	this.shape_1650 = new cjs.Shape();
	this.shape_1650.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1650.setTransform(-83.2,15.9,0.334,0.334);

	this.shape_1651 = new cjs.Shape();
	this.shape_1651.graphics.f("#000000").s().p("AgHAIQgFgOgMACQABgEAFgGQAEgEAAgGIATAAQABAGgDACIgHACQABAHAJABIATACQgBAFgKAJQgHAHgCAIQgIgBgEgQg");
	this.shape_1651.setTransform(-29.3,16.1,0.334,0.334);

	this.shape_1652 = new cjs.Shape();
	this.shape_1652.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_1652.setTransform(-32.5,15.6,0.334,0.334);

	this.shape_1653 = new cjs.Shape();
	this.shape_1653.graphics.f("#000000").s().p("AgaAIQgLgIAEgOQAQgQARAKQAdAQAHAAQgJAXgoAGQAAgIgNgJg");
	this.shape_1653.setTransform(-51.4,16.1,0.334,0.334);

	this.shape_1654 = new cjs.Shape();
	this.shape_1654.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1654.setTransform(-82.4,15.4,0.334,0.334);

	this.shape_1655 = new cjs.Shape();
	this.shape_1655.graphics.f("#000000").s().p("AgRAEQAEgGgVABQAJgUAQgEQANgFAVAJQgBAOABAFQACAIAIACQAAAQgVADIgmABQgCgJAJgPg");
	this.shape_1655.setTransform(-55.7,16,0.334,0.334);

	this.shape_1656 = new cjs.Shape();
	this.shape_1656.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1656.setTransform(-48.3,14.8,0.334,0.334);

	this.shape_1657 = new cjs.Shape();
	this.shape_1657.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1657.setTransform(-66.7,14.8,0.334,0.334);

	this.shape_1658 = new cjs.Shape();
	this.shape_1658.graphics.f("#000000").s().p("AADAHQgIgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgCAAg");
	this.shape_1658.setTransform(-78.5,14.9,0.334,0.334);

	this.shape_1659 = new cjs.Shape();
	this.shape_1659.graphics.f("#000000").s().p("AAWANIgCgNQgGAAgCAHIgCANIgbgHQgOgGACgQQAGgBACADQACACAAAFQAGAAACgGIACgNQAJgCAAAMQAQACAEgMQAJACABAOIAAAXQgGAAgCgHg");
	this.shape_1659.setTransform(-49.8,14.9,0.334,0.334);

	this.shape_1660 = new cjs.Shape();
	this.shape_1660.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1660.setTransform(-69.4,14.4,0.334,0.334);

	this.shape_1661 = new cjs.Shape();
	this.shape_1661.graphics.f("#000000").s().p("AgIAIIgHgbQAIAEAPAHQAMAIgGAUIgEAAQgNAAgFgMg");
	this.shape_1661.setTransform(-76,14.9,0.334,0.334);

	this.shape_1662 = new cjs.Shape();
	this.shape_1662.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1662.setTransform(-77.5,14.6,0.334,0.334);

	this.shape_1663 = new cjs.Shape();
	this.shape_1663.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1663.setTransform(-60.5,14.2,0.334,0.334);

	this.shape_1664 = new cjs.Shape();
	this.shape_1664.graphics.f("#000000").s().p("AgDAMQgRgMAHgOQAMgEAFALQAFALAHABQgCALgHAAQgEAAgGgEg");
	this.shape_1664.setTransform(-75.1,14.4,0.334,0.334);

	this.shape_1665 = new cjs.Shape();
	this.shape_1665.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1665.setTransform(-34.3,13.9,0.334,0.334);

	this.shape_1666 = new cjs.Shape();
	this.shape_1666.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1666.setTransform(-42.5,13.8,0.334,0.334);

	this.shape_1667 = new cjs.Shape();
	this.shape_1667.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1667.setTransform(-62.9,13.8,0.334,0.334);

	this.shape_1668 = new cjs.Shape();
	this.shape_1668.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1668.setTransform(-71.5,13.4,0.334,0.334);

	this.shape_1669 = new cjs.Shape();
	this.shape_1669.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1669.setTransform(-32,13.1,0.334,0.334);

	this.shape_1670 = new cjs.Shape();
	this.shape_1670.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_1670.setTransform(-39.8,13.3,0.334,0.334);

	this.shape_1671 = new cjs.Shape();
	this.shape_1671.graphics.f("#000000").s().p("AAMANIgCgNQgPAKgOAAQgBgMAPgEQAPgFAAgIQAJACABAOIAAAXQgGgBgCgGg");
	this.shape_1671.setTransform(-47.5,13.6,0.334,0.334);

	this.shape_1672 = new cjs.Shape();
	this.shape_1672.graphics.f("#000000").s().p("AgOAEQABgPgBgIQAJgBAGAFQAJAGAFAAIAAATQgQgDgDANQgJgCgBgOg");
	this.shape_1672.setTransform(-55.3,13.6,0.334,0.334);

	this.shape_1673 = new cjs.Shape();
	this.shape_1673.graphics.f("#000000").s().p("AgIAEQgCgNAKgKQAIACABAOIAAAXQgPgCgCgOg");
	this.shape_1673.setTransform(-56.5,13.3,0.334,0.334);

	this.shape_1674 = new cjs.Shape();
	this.shape_1674.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAEAEQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1674.setTransform(-72.9,13,0.334,0.334);

	this.shape_1675 = new cjs.Shape();
	this.shape_1675.graphics.f("#000000").s().p("AgYAPQAIgRAJgGQALgKAVAEQgFARgKAHQgHAGgMAAQgHAAgIgBg");
	this.shape_1675.setTransform(-79.4,13.1,0.334,0.334);

	this.shape_1676 = new cjs.Shape();
	this.shape_1676.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1676.setTransform(-30.8,12.4,0.334,0.334);

	this.shape_1677 = new cjs.Shape();
	this.shape_1677.graphics.f("#000000").s().p("AACAHQgHgGgEABQACgJAIABQAJABAAAHQgCAFgDAAIgDAAg");
	this.shape_1677.setTransform(-67.9,12.5,0.334,0.334);

	this.shape_1678 = new cjs.Shape();
	this.shape_1678.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_1678.setTransform(-24.5,12.1,0.334,0.334);

	this.shape_1679 = new cjs.Shape();
	this.shape_1679.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1679.setTransform(-45.6,12.4,0.334,0.334);

	this.shape_1680 = new cjs.Shape();
	this.shape_1680.graphics.f("#000000").s().p("AgDADQgIgJgSAGQAGgVAQAEQAfAIAGgBIgNALQgJAGACAMQgEgBgJgPg");
	this.shape_1680.setTransform(-26.5,12.3,0.334,0.334);

	this.shape_1681 = new cjs.Shape();
	this.shape_1681.graphics.f("#000000").s().p("AgOAOQgDgMAKgEQALgGABgHQASADgLAQQgJAMgJAAQgEAAgEgCg");
	this.shape_1681.setTransform(-28.6,12.1,0.334,0.334);

	this.shape_1682 = new cjs.Shape();
	this.shape_1682.graphics.f("#000000").s().p("AgEAKQgHgBAAgIQAAgHAGgCQAGgDALAKQgJALgGAAIgBAAg");
	this.shape_1682.setTransform(-35.5,12,0.334,0.334);

	this.shape_1683 = new cjs.Shape();
	this.shape_1683.graphics.f("#000000").s().p("AgdAMIANgLQAJgGgCgMQAKAJAGgDQAMgGALAAIAAAdQgNgKgOALQgGAFgIAAQgJAAgJgGg");
	this.shape_1683.setTransform(-49.8,12.2,0.334,0.334);

	this.shape_1684 = new cjs.Shape();
	this.shape_1684.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgJAFAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1684.setTransform(-59.2,12,0.334,0.334);

	this.shape_1685 = new cjs.Shape();
	this.shape_1685.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1685.setTransform(-61.3,12,0.334,0.334);

	this.shape_1686 = new cjs.Shape();
	this.shape_1686.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1686.setTransform(-69.7,11.7,0.334,0.334);

	this.shape_1687 = new cjs.Shape();
	this.shape_1687.graphics.f("#000000").s().p("AgUgEQAogYABgBQAXAHgJAMQgPATABALQgCABgcgDQgUgBABANQgUgTAcgPg");
	this.shape_1687.setTransform(-74.6,12.6,0.334,0.334);

	this.shape_1688 = new cjs.Shape();
	this.shape_1688.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1688.setTransform(-33.3,11.1,0.334,0.334);

	this.shape_1689 = new cjs.Shape();
	this.shape_1689.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1689.setTransform(-39.7,11.1,0.334,0.334);

	this.shape_1690 = new cjs.Shape();
	this.shape_1690.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1690.setTransform(-63.4,11.1,0.334,0.334);

	this.shape_1691 = new cjs.Shape();
	this.shape_1691.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1691.setTransform(-48.7,10.7,0.334,0.334);

	this.shape_1692 = new cjs.Shape();
	this.shape_1692.graphics.f("#000000").s().p("AgDALQgQACgPgIQgCgNAbAEQAbADgDgNQAEABAGAFQAFAEAFAAIAAATQgSgFgUABg");
	this.shape_1692.setTransform(-76,11.1,0.334,0.334);

	this.shape_1693 = new cjs.Shape();
	this.shape_1693.graphics.f("#000000").s().p("AgLgFQAFgFALABQALACgBAFQgBAFgWAHQgKgKAHgFg");
	this.shape_1693.setTransform(-27.8,10.6,0.334,0.334);

	this.shape_1694 = new cjs.Shape();
	this.shape_1694.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQACgJAGAEQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_1694.setTransform(-29.8,10.6,0.334,0.334);

	this.shape_1695 = new cjs.Shape();
	this.shape_1695.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1695.setTransform(-74.7,10.4,0.334,0.334);

	this.shape_1696 = new cjs.Shape();
	this.shape_1696.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1696.setTransform(-29.6,9.7,0.334,0.334);

	this.shape_1697 = new cjs.Shape();
	this.shape_1697.graphics.f("#000000").s().p("AgCAaQgTgEgNgOQAGgTAZgLQAYgLAOAMIAAAnQgKAKgPAAQgGAAgGgCgAgCAKQgGAEAEAEQACACAFgEQAFgFgDgDIgCgBQgCAAgDADg");
	this.shape_1697.setTransform(-52,10.7,0.334,0.334);

	this.shape_1698 = new cjs.Shape();
	this.shape_1698.graphics.f("#000000").s().p("AgJgOQATAHAAAWQgUgIABgVg");
	this.shape_1698.setTransform(-73.9,10.1,0.334,0.334);

	this.shape_1699 = new cjs.Shape();
	this.shape_1699.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1699.setTransform(-30.3,9.4,0.334,0.334);

	this.shape_1700 = new cjs.Shape();
	this.shape_1700.graphics.f("#000000").s().p("AgKgIQAVgPAKAUQgBAFgPADQgNACAAAJQgXgKAVgOg");
	this.shape_1700.setTransform(-35.5,9.7,0.334,0.334);

	this.shape_1701 = new cjs.Shape();
	this.shape_1701.graphics.f("#000000").s().p("AgRACQADgHAAgJQALAJAFgDQAMgGALAAQgIAXgpAGIAHgNg");
	this.shape_1701.setTransform(-45.3,9.7,0.334,0.334);

	this.shape_1702 = new cjs.Shape();
	this.shape_1702.graphics.f("#000000").s().p("AgTAEQAAgPgBgIIAnAAQAHATgWAAQgVAAAHAUQgIgCgBgOg");
	this.shape_1702.setTransform(-58.2,9.9,0.334,0.334);

	this.shape_1703 = new cjs.Shape();
	this.shape_1703.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1703.setTransform(-59.7,9.6,0.334,0.334);

	this.shape_1704 = new cjs.Shape();
	this.shape_1704.graphics.f("#000000").s().p("AgJABQACgJAIABQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1704.setTransform(-43.5,9.2,0.334,0.334);

	this.shape_1705 = new cjs.Shape();
	this.shape_1705.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1705.setTransform(-62,9.1,0.334,0.334);

	this.shape_1706 = new cjs.Shape();
	this.shape_1706.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1706.setTransform(-32,8.9,0.334,0.334);

	this.shape_1707 = new cjs.Shape();
	this.shape_1707.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1707.setTransform(-41,8.7,0.334,0.334);

	this.shape_1708 = new cjs.Shape();
	this.shape_1708.graphics.f("#000000").s().p("AAAAFQgQgDgDANQgJgCgBgNQABgRgBgHQASAIACAMQAOgLAPABQABAFgDADIgIACQAAAFAHABIANADQACAOgTAFIgGABQgLAAAEgUg");
	this.shape_1708.setTransform(-49.5,9.4,0.334,0.334);

	this.shape_1709 = new cjs.Shape();
	this.shape_1709.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_1709.setTransform(-56.8,8.7,0.334,0.334);

	this.shape_1710 = new cjs.Shape();
	this.shape_1710.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1710.setTransform(-59.4,8.4,0.334,0.334);

	this.shape_1711 = new cjs.Shape();
	this.shape_1711.graphics.f("#000000").s().p("AARAMIgCgMQgJAAgJAFQgLAGgKgBIAAgdIAYAGIAZgGIAAAnQgGAAgCgIg");
	this.shape_1711.setTransform(-47.7,8.2,0.334,0.334);

	this.shape_1712 = new cjs.Shape();
	this.shape_1712.graphics.f("#000000").s().p("AgIAEQgMgIABgPQALAJAGgDQALgGALAAQACAMgFAKIgHARQgDgFgPgLg");
	this.shape_1712.setTransform(-56.2,8.2,0.334,0.334);

	this.shape_1713 = new cjs.Shape();
	this.shape_1713.graphics.f("#000000").s().p("AACANQgXAHgDAAQAEgVAOgCQAQgBAFgPQAJACABAOIAAAXQgMgLgLAEg");
	this.shape_1713.setTransform(-52,7.9,0.334,0.334);

	this.shape_1714 = new cjs.Shape();
	this.shape_1714.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_1714.setTransform(-62.2,7.4,0.334,0.334);

	this.shape_1715 = new cjs.Shape();
	this.shape_1715.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1715.setTransform(-39,7.1,0.334,0.334);

	this.shape_1716 = new cjs.Shape();
	this.shape_1716.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1716.setTransform(-58,7.2,0.334,0.334);

	this.shape_1717 = new cjs.Shape();
	this.shape_1717.graphics.f("#000000").s().p("AAUgJQgIARgfACQAEgYAjAFg");
	this.shape_1717.setTransform(-45.5,6.9,0.334,0.334);

	this.shape_1718 = new cjs.Shape();
	this.shape_1718.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1718.setTransform(-49.3,6.7,0.334,0.334);

	this.shape_1719 = new cjs.Shape();
	this.shape_1719.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1719.setTransform(-50,6.7,0.334,0.334);

	this.shape_1720 = new cjs.Shape();
	this.shape_1720.graphics.f("#000000").s().p("AgPgJQAUgFAVAPQgBAJgZgCQgUgCAHAFQgXgQAVgEg");
	this.shape_1720.setTransform(-54,6.9,0.334,0.334);

	this.shape_1721 = new cjs.Shape();
	this.shape_1721.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1721.setTransform(-59,6.1,0.334,0.334);

	this.shape_1722 = new cjs.Shape();
	this.shape_1722.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1722.setTransform(-61.7,6.2,0.334,0.334);

	this.shape_1723 = new cjs.Shape();
	this.shape_1723.graphics.f("#000000").s().p("AgUAXQgcgsAYgjIAnAAQAZAdgFBQQgHAEgHAAQgVAAgUgigAAFAXQAOgRACgJQADgLgJgWIgnAAQgBAtAeAOg");
	this.shape_1723.setTransform(-67,7.8,0.334,0.334);

	this.shape_1724 = new cjs.Shape();
	this.shape_1724.graphics.f("#000000").s().p("AghABQADgpASgTQA3AAgKA3QgDAVgOASQgNAUgPAFQgYgNADgugAgMgnIAAAxQAkAIAAggQAAgNgKgHQgHgGgKAAIgJABg");
	this.shape_1724.setTransform(-36.4,7.6,0.334,0.334);

	this.shape_1725 = new cjs.Shape();
	this.shape_1725.graphics.f("#000000").s().p("AgCAMQgDgIABgNQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_1725.setTransform(-39.7,6.2,0.334,0.334);

	this.shape_1726 = new cjs.Shape();
	this.shape_1726.graphics.f("#000000").s().p("AgBAKQgEgFABgJQADgKADAFQADAGAAAIQgCAHgCAAQgBAAAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_1726.setTransform(-42.3,5.7,0.334,0.334);

	this.shape_1727 = new cjs.Shape();
	this.shape_1727.graphics.f("#000000").s().p("AgRAAQgDgMAZADQAXADgQAQQADgEgggGg");
	this.shape_1727.setTransform(-47.2,5.6,0.334,0.334);

	this.shape_1728 = new cjs.Shape();
	this.shape_1728.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_1728.setTransform(-51.3,5.6,0.334,0.334);

	this.shape_1729 = new cjs.Shape();
	this.shape_1729.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1729.setTransform(-52.3,5.4,0.334,0.334);

	this.shape_1730 = new cjs.Shape();
	this.shape_1730.graphics.f("#000000").s().p("AgTgKQALAJAGgDQALgHALABQAMAVggAAQgeAAALgVg");
	this.shape_1730.setTransform(-55.8,5.6,0.334,0.334);

	this.shape_1731 = new cjs.Shape();
	this.shape_1731.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_1731.setTransform(-61,5.4,0.334,0.334);

	this.shape_1732 = new cjs.Shape();
	this.shape_1732.graphics.f("#000000").s().p("AgIAEQAKgWgCgGQARAEgIASQgKAVABAGQgQgFAIgQg");
	this.shape_1732.setTransform(-40.5,5.7,0.334,0.334);

	this.shape_1733 = new cjs.Shape();
	this.shape_1733.graphics.f("#000000").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_1733.setTransform(-45.3,5.4,0.334,0.334);

	this.shape_1734 = new cjs.Shape();
	this.shape_1734.graphics.f("#000000").s().p("AgOAFIAAgTIAdAAQgBAGgKAIQgGAHgCAIIgCAAQgHAAgBgKg");
	this.shape_1734.setTransform(-58,5.4,0.334,0.334);

	this.shape_1735 = new cjs.Shape();
	this.shape_1735.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGABIgMADQAAgFAHgCg");
	this.shape_1735.setTransform(-46.5,4.7,0.334,0.334);

	this.shape_1736 = new cjs.Shape();
	this.shape_1736.graphics.f("#000000").s().p("AmlB2IiYgSQAjgQBEALIBrAPQEaAFDvhDQDVg6DDh3QARAFgRAJQgVAKABAGQgHABgQAMQgNAIgOgBQgNASgaANQgOAGglANQgmAWg7AVIhnAkQjDA/kSARQhEgChagKg");
	this.shape_1736.setTransform(-41,103.8,0.334,0.334);

	this.shape_1737 = new cjs.Shape();
	this.shape_1737.graphics.f("#000000").s().p("AgIAFQATgegCgOQARANgPAaQgUAmgBACQgOgLAQgYg");
	this.shape_1737.setTransform(-2.7,78.4,0.334,0.334);

	this.shape_1738 = new cjs.Shape();
	this.shape_1738.graphics.f("#000000").s().p("AgIASQgGgGAHgHQADgEAFgCQASgggNAeQgIAWgFAAIgBgBg");
	this.shape_1738.setTransform(-1.4,75.5,0.334,0.334);

	this.shape_1739 = new cjs.Shape();
	this.shape_1739.graphics.f("#000000").s().p("AgJACQAUgoAAgGQANAMgQAcQgRAiABAPQgPgOAOgdg");
	this.shape_1739.setTransform(-0.4,73.2,0.334,0.334);

	this.shape_1740 = new cjs.Shape();
	this.shape_1740.graphics.f("#000000").s().p("AgQBgQAchqADgdIAHhCQAEgfgBgrIAAgoQAHABACALIABASIAABQQgYDGgtCDQgFgpAXhTg");
	this.shape_1740.setTransform(1.8,63.7,0.334,0.334);

	this.shape_1741 = new cjs.Shape();
	this.shape_1741.graphics.f("#000000").s().p("AgBgCQAYgSgWAVQgJAKgCAAQgBAAAKgNg");
	this.shape_1741.setTransform(3,53.8,0.334,0.334);

	this.shape_1742 = new cjs.Shape();
	this.shape_1742.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_1742.setTransform(-103.9,52.5,0.334,0.334);

	this.shape_1743 = new cjs.Shape();
	this.shape_1743.graphics.f("#000000").s().p("AgDAEQgKhVgGgrQAUAoAIBMQAFAqAGBbQgPgtgIhMg");
	this.shape_1743.setTransform(2.3,47.2,0.334,0.334);

	this.shape_1744 = new cjs.Shape();
	this.shape_1744.graphics.f("#000000").s().p("AhjFLIAAhkQAuk7CZkIQAEARgXAvQgcA3gDAVQgtA5gOBdQgdA1gTBoIggCsQACAZgDAiQgBATgDAAQgCAAgDgSg");
	this.shape_1744.setTransform(-100.5,40.3,0.334,0.334);

	this.shape_1745 = new cjs.Shape();
	this.shape_1745.graphics.f("#000000").s().p("AgIABQAPgQAAgEQANACgKAPQgNASABAEQgSgGAMgNg");
	this.shape_1745.setTransform(-96.4,27.6,0.334,0.334);

	this.shape_1746 = new cjs.Shape();
	this.shape_1746.graphics.f("#000000").s().p("ABJBaQgQgegKAAQgTgfgegTQgMgYgfggQglgmgKgPQgLgMATAPQASAOAOANQAcAbAvA3IBKBXQgEAFgEAAQgHAAgJgPg");
	this.shape_1746.setTransform(-11.3,19,0.334,0.334);

	this.shape_1747 = new cjs.Shape();
	this.shape_1747.graphics.f("#000000").s().p("AAAADQgJgNgKgBQABgNATAOQAVANgCAPQgLgCgJgNg");
	this.shape_1747.setTransform(-16.1,14.4,0.334,0.334);

	this.shape_1748 = new cjs.Shape();
	this.shape_1748.graphics.f("#000000").s().p("AACAKQgXgTgDAAQAFgOARAOQAYASADABQgCAHgGAAQgGAAgJgHg");
	this.shape_1748.setTransform(-18.2,12.6,0.334,0.334);

	this.shape_1749 = new cjs.Shape();
	this.shape_1749.graphics.f("#000000").s().p("AADAKQgugjgVgDQAZgMAmAfQAsAlAWADQgFACgHAAQgUAAgegXg");
	this.shape_1749.setTransform(-21.6,10.3,0.334,0.334);

	this.shape_1750 = new cjs.Shape();
	this.shape_1750.graphics.f("#000000").s().p("ACAEaQgEgGABgJQgOg9gmhbQgthpgNgqIgmg+QgUgkgLggIgrg5QgZgigMgdQASAGASAcQARAdARAHIByDlQA+CIAXB8QgDAGgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_1750.setTransform(-2.9,33.1,0.334,0.334);

	this.shape_1751 = new cjs.Shape();
	this.shape_1751.graphics.f("#000000").s().p("AjbDfIAmgZQAmgjAWgPQASgLAngqQAhgkAegLQAIgcApgjQApgkAJgeQAbgTAbgkQAQgVAegsQAAgIANgJQALgIgEgPQAIgIAHACQAIADgNADQgDASgPATQgSAWgEALQgKAbgjAmQgjAngKAaQiLCgi+CBQgNgJAZgQg");
	this.shape_1751.setTransform(-12.7,90.8,0.334,0.334);

	this.shape_1752 = new cjs.Shape();
	this.shape_1752.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],5.1,-3.2,0,5.1,-3.2,44).s().p("ACbFTQibhvhOg7QkljfgNiZQgFgzAlg8QAjg4A8gtQA9guA/gPQBFgSA0AZQBBAgBKCfQAnBWA8CPQA9BzAoCGQAiBzAYCTIg1AfQgxg4iAheg");
	this.shape_1752.setTransform(-71.6,27.5,0.334,0.334);

	this.shape_1753 = new cjs.Shape();
	this.shape_1753.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],5.7,-3.8,0,5.7,-3.8,44.3).s().p("ACPDfIhthTQg9gtghgNQh5gvh3hJQhlhAh0hfIAUg6QBJAJCfgOIEhgcQFwgbBsBuQAvAvhIDKQgdBTglBDQgnBGgeAUQgRAKgWAAQg7AAhjhHg");
	this.shape_1753.setTransform(-18.8,67.6,0.334,0.334);

	this.shape_1754 = new cjs.Shape();
	this.shape_1754.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],-8,-11,0,-8,-11,41.9).s().p("Aj4E4QgygKg1hNQgyhIgihmQgjhmgDhXQgDhgAmgqQAvg0B9ARIBnAPQA7AGAkgGQBygXCVAPQBYAJCyAcIANA8QhGAhhkBjQg7A5h4CBQhsBuhMAuQhPAxhGABQgUAAgUgFg");
	this.shape_1754.setTransform(-82.6,67.9,0.334,0.334);

	this.shape_1755 = new cjs.Shape();
	this.shape_1755.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],-3,5,0,-3,5,44).s().p("AiOIKQhCgbgbgyQgkhBAiirQAti7AIg5QASiBAuiEQAnhxBDiGIA8AGQAHBKAxCXIBbETQBrFghPCEQgaAshBAbQg+AZhJABIgJAAQhHAAg5gWg");
	this.shape_1755.setTransform(-50.6,83.7,0.334,0.334);

	this.shape_1756 = new cjs.Shape();
	this.shape_1756.graphics.rf(["#FCF3DD","#FDEDC1","#FFE18A","#FFCD03","#F7C50D","#E2B124"],[0,0,0,0.549,0.667,1],0,0,0,0,0,43).s().p("AmIGnQAjhBAsiSQAzivAdhYQBslLCLhBQAvgWBEAJQBCAIA+AgQBBAhAkAwQAoA1gFA5QgHBJh8B8QiOB/goAsQhWBghxBTQhgBIiDBJg");
	this.shape_1756.setTransform(-29.3,26.6,0.334,0.334);

	this.shape_1757 = new cjs.Shape();
	this.shape_1757.graphics.f("#000000").s().p("AIhMIQgfgHhPgZQhagdhkgzQhPgjhhhAQhrhLg4gkQiGiGhRhlQhtiJhCiJQhSitgoibQgzjEADjOQAMA8ARCSQAQCIAPBEQAIAYAhBaQAaBGANAuQAMATAnBVQAeBAAdAfQAeA7A8BLQBaBvAKAPQCyC0DHBwQDgB/EMAzQgPACgQAAQgkAAgrgKg");
	this.shape_1757.setTransform(-82.3,80.3,0.334,0.334);

	this.shape_1758 = new cjs.Shape();
	this.shape_1758.graphics.f("#000000").s().p("AnwFMIARgWQAthOAjgWQAdg1A1g3QAcgeBGg+QBYhNB6hSQClhZBFgfQCLg8CIgUQlGBUj7C3QjtCqivEGQgQgDAJgPg");
	this.shape_1758.setTransform(-79.2,15,0.334,0.334);

	this.shape_1759 = new cjs.Shape();
	this.shape_1759.graphics.f("#000000").s().p("AFVBNQg0gggdABQgVgSgzgPQg8gRgSgJQhfgjihgUQhTgLi0gOQDdgSDjA9QCtAvDGBjQgGACgHAAQgWAAgigVg");
	this.shape_1759.setTransform(-38.1,5.1,0.334,0.334);

	this.shape_1760 = new cjs.Shape();
	this.shape_1760.graphics.rf(["#F3B36E","#F3D1AF","#F5EEE2"],[0.22,0.725,1],0,0,0,0,0,25.5).s().p("AizC0QhLhKAAhqQAAhpBLhKQBLhLBoAAQBpAABLBLQBLBKAABpQAABqhLBKQhLBLhpAAQhoAAhLhLg");
	this.shape_1760.setTransform(-51.3,53.8,0.334,0.334);

	this.shape_1761 = new cjs.Shape();
	this.shape_1761.graphics.rf(["#B7E2E0","#B4E3E1","#A9E4E2","#97E7E5","#7DEBEA","#5DF0EF","#35F7F6","#06FEFE","#00FFFF"],[0,0.169,0.318,0.459,0.596,0.729,0.859,0.984,1],3.9,-4.9,0,3.9,-4.9,44).s().p("AgRIbQgKhJg2iWQhDiygghdQh3lcBLiHQAZgtBAgcQA8gbBLgEQBLgFA9AWQBDAZAdAxQAmBAgcCsQgPBdgeCYQgOCBgqCGQgjByg/CJg");
	this.shape_1761.setTransform(-51.9,26.1,0.334,0.334);

	this.shape_1762 = new cjs.Shape();
	this.shape_1762.graphics.rf(["#B7E2E0","#B4E3E1","#A9E4E2","#97E7E5","#7DEBEA","#5DF0EF","#35F7F6","#06FEFE","#00FFFF"],[0,0.169,0.318,0.459,0.596,0.729,0.859,0.984,1],-3.7,3.2,0,-3.7,3.2,44.3).s().p("AATHKQhGgBg7igIgtiBQgZhIgVgeQhKhpg5iAQgxhtgriQIAxglQA4AxCMBNID+CKQFBC4AdCWQAMBBisCAQhHA1hEAjQhHAkgjAAIgBAAg");
	this.shape_1762.setTransform(-30.3,79.7,0.334,0.334);

	this.shape_1763 = new cjs.Shape();
	this.shape_1763.graphics.rf(["#B7E2E0","#B4E3E1","#A9E4E2","#97E7E5","#7DEBEA","#5DF0EF","#35F7F6","#06FEFE","#00FFFF"],[0,0.169,0.318,0.459,0.596,0.729,0.859,0.984,1],-6.1,3.9,0,-6.1,3.9,42.4).s().p("AmsEmQgygKgEhaQgEhSAhhwQAhhwAzhUQA5hbA3gOQBDgRBfBUIBNBGQAsAmAiAPQBsAtB0BgQBDA3CEB7IgWA5Qh3gTlSAkQiiARhNAEQgjACgfAAQhNAAgygLg");
	this.shape_1763.setTransform(-81.2,41.3,0.334,0.334);

	this.shape_1764 = new cjs.Shape();
	this.shape_1764.graphics.rf(["#B7E2E0","#B4E3E1","#A9E4E2","#97E7E5","#7DEBEA","#5DF0EF","#35F7F6","#06FEFE","#00FFFF"],[0,0.169,0.318,0.459,0.596,0.729,0.859,0.984,1],0.1,0.1,0,0.1,0.1,44).s().p("Ah+HeQhBgNg/goQhAgpglg2Qgog7AFg5QAHhKB7h7QCOiBAngsQBWhgBwhVQBghICChKIAvAoQgjBBgsCZIhPEVQhrFhiKBBQgdAOglAAQgXAAgagGg");
	this.shape_1764.setTransform(-70.7,79.3,0.334,0.334);

	this.shape_1765 = new cjs.Shape();
	this.shape_1765.graphics.rf(["#B7E2E0","#B4E3E1","#A9E4E2","#97E7E5","#7DEBEA","#5DF0EF","#35F7F6","#06FEFE","#00FFFF"],[0,0.169,0.318,0.459,0.596,0.729,0.859,0.984,1],3.8,8.4,0,3.8,8.4,42.9).s().p("An7ETIgRg7QBCgiB2hhIDViuQESjWCYAYQAzAIA0AtQAzArAhA+QAjA/AEA7QAEBCglAtQgvA5irAhQi+Abg5AOQh8AgiNAGQgmACgqAAQhYAAhlgIg");
	this.shape_1765.setTransform(-23.7,42.6,0.334,0.334);

	this.shape_1766 = new cjs.Shape();
	this.shape_1766.graphics.rf(["#F7EAC7","#F7E9C5","#F6E7BE","#F5E4B3","#F3DFA2","#F1D88C","#EED071","#EAC651","#EAC54D"],[0,0.431,0.588,0.698,0.788,0.867,0.933,0.992,1],0,0,0,0,0,54.5).s().p("AhdIWQg0gIgmgQQgKgBgNgGQgOgGgIgBQgDgFgPgFQgNgEgDgHQgmgPgqgiQgngfgbgfIgTgXQgJgNgGgMQgYgYgVguQgWg2gNgZQgOg6gFgjQgHgxACg0QAHigB1ieQBRhWBSguQA3gZAxgPQBAgTA9gDQBIgFBRATQBBAPBBAeQAHAHATAKQAUAJAGAIQALAEAQANQAQAOAJAEQAIAJAiAiQAaAaAMAVIAFADQADADACABIAoBFQAWApALAjQAEAIAEAUQAFATAEAJIAIBHQAEAngBAbQgDA/gZBMIgQAuQgJAYgKAUIgHAPIgHANQgOAYgRARIgDAEIgCAFIgCAFIgOAPIgRARIgGAIIgIAJIgQAPQgKAJgFAHQg9AvhbArQhpAhhZACIgMAAQgxAAgrgHg");
	this.shape_1766.setTransform(-50.5,54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1766},{t:this.shape_1765},{t:this.shape_1764},{t:this.shape_1763},{t:this.shape_1762},{t:this.shape_1761},{t:this.shape_1760},{t:this.shape_1759},{t:this.shape_1758},{t:this.shape_1757},{t:this.shape_1756},{t:this.shape_1755},{t:this.shape_1754},{t:this.shape_1753},{t:this.shape_1752},{t:this.shape_1751},{t:this.shape_1750},{t:this.shape_1749},{t:this.shape_1748},{t:this.shape_1747},{t:this.shape_1746},{t:this.shape_1745},{t:this.shape_1744},{t:this.shape_1743},{t:this.shape_1742},{t:this.shape_1741},{t:this.shape_1740},{t:this.shape_1739},{t:this.shape_1738},{t:this.shape_1737},{t:this.shape_1736},{t:this.shape_1735},{t:this.shape_1734},{t:this.shape_1733},{t:this.shape_1732},{t:this.shape_1731},{t:this.shape_1730},{t:this.shape_1729},{t:this.shape_1728},{t:this.shape_1727},{t:this.shape_1726},{t:this.shape_1725},{t:this.shape_1724},{t:this.shape_1723},{t:this.shape_1722},{t:this.shape_1721},{t:this.shape_1720},{t:this.shape_1719},{t:this.shape_1718},{t:this.shape_1717},{t:this.shape_1716},{t:this.shape_1715},{t:this.shape_1714},{t:this.shape_1713},{t:this.shape_1712},{t:this.shape_1711},{t:this.shape_1710},{t:this.shape_1709},{t:this.shape_1708},{t:this.shape_1707},{t:this.shape_1706},{t:this.shape_1705},{t:this.shape_1704},{t:this.shape_1703},{t:this.shape_1702},{t:this.shape_1701},{t:this.shape_1700},{t:this.shape_1699},{t:this.shape_1698},{t:this.shape_1697},{t:this.shape_1696},{t:this.shape_1695},{t:this.shape_1694},{t:this.shape_1693},{t:this.shape_1692},{t:this.shape_1691},{t:this.shape_1690},{t:this.shape_1689},{t:this.shape_1688},{t:this.shape_1687},{t:this.shape_1686},{t:this.shape_1685},{t:this.shape_1684},{t:this.shape_1683},{t:this.shape_1682},{t:this.shape_1681},{t:this.shape_1680},{t:this.shape_1679},{t:this.shape_1678},{t:this.shape_1677},{t:this.shape_1676},{t:this.shape_1675},{t:this.shape_1674},{t:this.shape_1673},{t:this.shape_1672},{t:this.shape_1671},{t:this.shape_1670},{t:this.shape_1669},{t:this.shape_1668},{t:this.shape_1667},{t:this.shape_1666},{t:this.shape_1665},{t:this.shape_1664},{t:this.shape_1663},{t:this.shape_1662},{t:this.shape_1661},{t:this.shape_1660},{t:this.shape_1659},{t:this.shape_1658},{t:this.shape_1657},{t:this.shape_1656},{t:this.shape_1655},{t:this.shape_1654},{t:this.shape_1653},{t:this.shape_1652},{t:this.shape_1651},{t:this.shape_1650},{t:this.shape_1649},{t:this.shape_1648},{t:this.shape_1647},{t:this.shape_1646},{t:this.shape_1645},{t:this.shape_1644},{t:this.shape_1643},{t:this.shape_1642},{t:this.shape_1641},{t:this.shape_1640},{t:this.shape_1639},{t:this.shape_1638},{t:this.shape_1637},{t:this.shape_1636},{t:this.shape_1635},{t:this.shape_1634},{t:this.shape_1633},{t:this.shape_1632},{t:this.shape_1631},{t:this.shape_1630},{t:this.shape_1629},{t:this.shape_1628},{t:this.shape_1627},{t:this.shape_1626},{t:this.shape_1625},{t:this.shape_1624},{t:this.shape_1623},{t:this.shape_1622},{t:this.shape_1621},{t:this.shape_1620},{t:this.shape_1619},{t:this.shape_1618},{t:this.shape_1617},{t:this.shape_1616},{t:this.shape_1615},{t:this.shape_1614},{t:this.shape_1613},{t:this.shape_1612},{t:this.shape_1611},{t:this.shape_1610},{t:this.shape_1609},{t:this.shape_1608},{t:this.shape_1607},{t:this.shape_1606},{t:this.shape_1605},{t:this.shape_1604},{t:this.shape_1603},{t:this.shape_1602},{t:this.shape_1601},{t:this.shape_1600},{t:this.shape_1599},{t:this.shape_1598},{t:this.shape_1597},{t:this.shape_1596},{t:this.shape_1595},{t:this.shape_1594},{t:this.shape_1593},{t:this.shape_1592},{t:this.shape_1591},{t:this.shape_1590},{t:this.shape_1589},{t:this.shape_1588},{t:this.shape_1587},{t:this.shape_1586},{t:this.shape_1585},{t:this.shape_1584},{t:this.shape_1583},{t:this.shape_1582},{t:this.shape_1581},{t:this.shape_1580},{t:this.shape_1579},{t:this.shape_1578},{t:this.shape_1577},{t:this.shape_1576},{t:this.shape_1575},{t:this.shape_1574},{t:this.shape_1573},{t:this.shape_1572},{t:this.shape_1571},{t:this.shape_1570},{t:this.shape_1569},{t:this.shape_1568},{t:this.shape_1567},{t:this.shape_1566},{t:this.shape_1565},{t:this.shape_1564},{t:this.shape_1563},{t:this.shape_1562},{t:this.shape_1561},{t:this.shape_1560},{t:this.shape_1559},{t:this.shape_1558},{t:this.shape_1557},{t:this.shape_1556},{t:this.shape_1555},{t:this.shape_1554},{t:this.shape_1553},{t:this.shape_1552},{t:this.shape_1551},{t:this.shape_1550},{t:this.shape_1549},{t:this.shape_1548},{t:this.shape_1547},{t:this.shape_1546},{t:this.shape_1545},{t:this.shape_1544},{t:this.shape_1543},{t:this.shape_1542},{t:this.shape_1541},{t:this.shape_1540},{t:this.shape_1539},{t:this.shape_1538},{t:this.shape_1537},{t:this.shape_1536},{t:this.shape_1535},{t:this.shape_1534},{t:this.shape_1533},{t:this.shape_1532},{t:this.shape_1531},{t:this.shape_1530},{t:this.shape_1529},{t:this.shape_1528},{t:this.shape_1527},{t:this.shape_1526},{t:this.shape_1525},{t:this.shape_1524},{t:this.shape_1523},{t:this.shape_1522},{t:this.shape_1521},{t:this.shape_1520},{t:this.shape_1519},{t:this.shape_1518},{t:this.shape_1517},{t:this.shape_1516},{t:this.shape_1515},{t:this.shape_1514},{t:this.shape_1513},{t:this.shape_1512},{t:this.shape_1511},{t:this.shape_1510},{t:this.shape_1509},{t:this.shape_1508},{t:this.shape_1507},{t:this.shape_1506},{t:this.shape_1505},{t:this.shape_1504},{t:this.shape_1503},{t:this.shape_1502},{t:this.shape_1501},{t:this.shape_1500},{t:this.shape_1499},{t:this.shape_1498},{t:this.shape_1497},{t:this.shape_1496},{t:this.shape_1495},{t:this.shape_1494},{t:this.shape_1493},{t:this.shape_1492},{t:this.shape_1491},{t:this.shape_1490},{t:this.shape_1489},{t:this.shape_1488},{t:this.shape_1487},{t:this.shape_1486},{t:this.shape_1485},{t:this.shape_1484},{t:this.shape_1483},{t:this.shape_1482},{t:this.shape_1481},{t:this.shape_1480},{t:this.shape_1479},{t:this.shape_1478},{t:this.shape_1477},{t:this.shape_1476},{t:this.shape_1475},{t:this.shape_1474},{t:this.shape_1473},{t:this.shape_1472},{t:this.shape_1471},{t:this.shape_1470},{t:this.shape_1469},{t:this.shape_1468},{t:this.shape_1467},{t:this.shape_1466},{t:this.shape_1465},{t:this.shape_1464},{t:this.shape_1463},{t:this.shape_1462},{t:this.shape_1461},{t:this.shape_1460},{t:this.shape_1459},{t:this.shape_1458},{t:this.shape_1457},{t:this.shape_1456},{t:this.shape_1455},{t:this.shape_1454},{t:this.shape_1453},{t:this.shape_1452},{t:this.shape_1451},{t:this.shape_1450},{t:this.shape_1449},{t:this.shape_1448},{t:this.shape_1447},{t:this.shape_1446},{t:this.shape_1445},{t:this.shape_1444},{t:this.shape_1443},{t:this.shape_1442},{t:this.shape_1441},{t:this.shape_1440},{t:this.shape_1439},{t:this.shape_1438},{t:this.shape_1437},{t:this.shape_1436},{t:this.shape_1435},{t:this.shape_1434},{t:this.shape_1433},{t:this.shape_1432},{t:this.shape_1431},{t:this.shape_1430},{t:this.shape_1429},{t:this.shape_1428},{t:this.shape_1427},{t:this.shape_1426},{t:this.shape_1425},{t:this.shape_1424},{t:this.shape_1423},{t:this.shape_1422},{t:this.shape_1421},{t:this.shape_1420},{t:this.shape_1419},{t:this.shape_1418},{t:this.shape_1417},{t:this.shape_1416},{t:this.shape_1415},{t:this.shape_1414},{t:this.shape_1413},{t:this.shape_1412},{t:this.shape_1411},{t:this.shape_1410},{t:this.shape_1409},{t:this.shape_1408},{t:this.shape_1407},{t:this.shape_1406},{t:this.shape_1405},{t:this.shape_1404},{t:this.shape_1403},{t:this.shape_1402},{t:this.shape_1401},{t:this.shape_1400},{t:this.shape_1399},{t:this.shape_1398},{t:this.shape_1397},{t:this.shape_1396},{t:this.shape_1395},{t:this.shape_1394},{t:this.shape_1393},{t:this.shape_1392},{t:this.shape_1391},{t:this.shape_1390},{t:this.shape_1389},{t:this.shape_1388},{t:this.shape_1387},{t:this.shape_1386},{t:this.shape_1385},{t:this.shape_1384},{t:this.shape_1383},{t:this.shape_1382},{t:this.shape_1381},{t:this.shape_1380},{t:this.shape_1379},{t:this.shape_1378},{t:this.shape_1377},{t:this.shape_1376},{t:this.shape_1375},{t:this.shape_1374},{t:this.shape_1373},{t:this.shape_1372},{t:this.shape_1371},{t:this.shape_1370},{t:this.shape_1369},{t:this.shape_1368},{t:this.shape_1367},{t:this.shape_1366},{t:this.shape_1365},{t:this.shape_1364},{t:this.shape_1363},{t:this.shape_1362},{t:this.shape_1361},{t:this.shape_1360},{t:this.shape_1359},{t:this.shape_1358},{t:this.shape_1357},{t:this.shape_1356},{t:this.shape_1355},{t:this.shape_1354},{t:this.shape_1353},{t:this.shape_1352},{t:this.shape_1351},{t:this.shape_1350},{t:this.shape_1349},{t:this.shape_1348},{t:this.shape_1347},{t:this.shape_1346},{t:this.shape_1345},{t:this.shape_1344},{t:this.shape_1343},{t:this.shape_1342},{t:this.shape_1341},{t:this.shape_1340},{t:this.shape_1339},{t:this.shape_1338},{t:this.shape_1337},{t:this.shape_1336},{t:this.shape_1335},{t:this.shape_1334},{t:this.shape_1333},{t:this.shape_1332},{t:this.shape_1331},{t:this.shape_1330},{t:this.shape_1329},{t:this.shape_1328},{t:this.shape_1327},{t:this.shape_1326},{t:this.shape_1325},{t:this.shape_1324},{t:this.shape_1323},{t:this.shape_1322},{t:this.shape_1321},{t:this.shape_1320},{t:this.shape_1319},{t:this.shape_1318},{t:this.shape_1317},{t:this.shape_1316},{t:this.shape_1315},{t:this.shape_1314},{t:this.shape_1313},{t:this.shape_1312},{t:this.shape_1311},{t:this.shape_1310},{t:this.shape_1309},{t:this.shape_1308},{t:this.shape_1307},{t:this.shape_1306},{t:this.shape_1305},{t:this.shape_1304},{t:this.shape_1303},{t:this.shape_1302},{t:this.shape_1301},{t:this.shape_1300},{t:this.shape_1299},{t:this.shape_1298},{t:this.shape_1297},{t:this.shape_1296},{t:this.shape_1295},{t:this.shape_1294},{t:this.shape_1293},{t:this.shape_1292},{t:this.shape_1291},{t:this.shape_1290},{t:this.shape_1289},{t:this.shape_1288},{t:this.shape_1287},{t:this.shape_1286},{t:this.shape_1285},{t:this.shape_1284},{t:this.shape_1283},{t:this.shape_1282},{t:this.shape_1281},{t:this.shape_1280},{t:this.shape_1279},{t:this.shape_1278},{t:this.shape_1277},{t:this.shape_1276},{t:this.shape_1275},{t:this.shape_1274},{t:this.shape_1273},{t:this.shape_1272},{t:this.shape_1271},{t:this.shape_1270},{t:this.shape_1269},{t:this.shape_1268},{t:this.shape_1267},{t:this.shape_1266},{t:this.shape_1265},{t:this.shape_1264},{t:this.shape_1263},{t:this.shape_1262},{t:this.shape_1261},{t:this.shape_1260},{t:this.shape_1259},{t:this.shape_1258},{t:this.shape_1257},{t:this.shape_1256},{t:this.shape_1255},{t:this.shape_1254},{t:this.shape_1253},{t:this.shape_1252},{t:this.shape_1251},{t:this.shape_1250},{t:this.shape_1249},{t:this.shape_1248},{t:this.shape_1247},{t:this.shape_1246},{t:this.shape_1245},{t:this.shape_1244},{t:this.shape_1243},{t:this.shape_1242},{t:this.shape_1241},{t:this.shape_1240},{t:this.shape_1239},{t:this.shape_1238},{t:this.shape_1237},{t:this.shape_1236},{t:this.shape_1235},{t:this.shape_1234},{t:this.shape_1233},{t:this.shape_1232},{t:this.shape_1231},{t:this.shape_1230},{t:this.shape_1229},{t:this.shape_1228},{t:this.shape_1227},{t:this.shape_1226},{t:this.shape_1225},{t:this.shape_1224},{t:this.shape_1223},{t:this.shape_1222},{t:this.shape_1221},{t:this.shape_1220},{t:this.shape_1219},{t:this.shape_1218},{t:this.shape_1217},{t:this.shape_1216},{t:this.shape_1215},{t:this.shape_1214},{t:this.shape_1213},{t:this.shape_1212},{t:this.shape_1211},{t:this.shape_1210},{t:this.shape_1209},{t:this.shape_1208},{t:this.shape_1207},{t:this.shape_1206},{t:this.shape_1205},{t:this.shape_1204},{t:this.shape_1203},{t:this.shape_1202},{t:this.shape_1201},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.2,0.6,109.6,108.2);


(lib.Diatom12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00B3F2").s().p("AgjArQgQgTAAgYQAAgXAQgTQAPgRAUAAQAWAAAPARQAPASAAAYQAAAZgPASQgPARgWAAQgUAAgPgRg");
	this.shape.setTransform(47.4,47.2,1.108,1.108);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKgCQAOgPAPADQACAUgOgFQgQgFgBATQgQgCAQgPg");
	this.shape_1.setTransform(59.8,84.8,1.108,1.108);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAFQASgYABgDQAQgOgNAcQgNAbgJAIQgOgEAOgSg");
	this.shape_2.setTransform(57.5,83.4,1.108,1.108);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_3.setTransform(66.4,77.5,1.108,1.108);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_4.setTransform(21,77.5,1.108,1.108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABA2QgZgbgKAAQALgMgDgLQgIgWAAgFQARADAHgOIAGgdQALgFAAAZQAAAagLgGQAAAJAMAJQALAGgEAPQgJACgGgFQgIgGgGgBQgBAWARAMQAKAGAXALQgHAIgIAAQgJAAgKgLg");
	this.shape_5.setTransform(39.2,79.1,1.108,1.108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAFQALgXABgGQASABgMAQQgKANAOgBQgBAFgKAFQgIADAAAHQgMgBAJgTg");
	this.shape_6.setTransform(32.8,73.7,1.108,1.108);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAHQALgkgBgPQAGACAIAJQAIAIAHABQgBAIgEgCQgFgBAAgFQgUADABAZIAJApQgXgGAEggg");
	this.shape_7.setTransform(64,72.6,1.108,1.108);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaA7QAWgXAAgMIgHgpQgDgQgKgWQAeAOgBAtQAagGgMgeQgCgIgVgjQgOgSAXAYQAYAYAGAKQgGAOAIAeQAGAYgIABQgWABAFgHQAJgQgCgIQgOAJgOAgQgPAfgQAIQgLgGATgTg");
	this.shape_8.setTransform(56.9,74.9,1.108,1.108);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCgIQAVgEALAMQgGAGgOABIgnADQAHgOAUgEg");
	this.shape_9.setTransform(46.4,63.2,1.108,1.108);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQgBgEAHAIQAHAIAAAGQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAQgBAAgEgHg");
	this.shape_10.setTransform(9.9,61.6,1.108,1.108);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAHAOQgcgLgIABQAAgMANgFQAMgFgFAWQAJAAAJgEQALgGAKABQACAUgRAAIgIgBg");
	this.shape_11.setTransform(16.5,60.5,1.108,1.108);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAGAYQgMgSgNAGQAAgGAHgBIAMgDQgJgOAAgPQAWgIgDAcQgDAeANgBQgCAIgEAAQgDAAgFgGg");
	this.shape_12.setTransform(80.7,60.7,1.108,1.108);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAAKQgHgGgEgQQAPAFAFAIQAFAHgEAEQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgDAAgEgDg");
	this.shape_13.setTransform(52.1,56.9,1.108,1.108);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAABQgQgTgNgFQAGgIAZATQAbATABATQgOgFgQgUg");
	this.shape_14.setTransform(62.9,55.8,1.108,1.108);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnAEQATgXAEgKQAKAHAQARQAPANASACQgFAWgMgDQgGgCgQgOQgOgNgGABQgJAAgBAdQgYgGALgUg");
	this.shape_15.setTransform(11.7,53.2,1.108,1.108);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhNAZQAMANASgHIAegQQgBgHgKgCIgTgBQAAgJAUgKQARgIgHgWIAnAAQgGAIgNAIIgUAOQASALgFAIQgNASAAAMQAJABAHgFQAHgGAGAAQAegSAUgfQAMgCADAGQAEAFgJABQgfARgTAgQgRgCgDAMQgKgMgjAKQgIACgFAAQgSAAgDgUg");
	this.shape_16.setTransform(28.5,53.8,1.108,1.108);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAOAlQgMgCgBAKQAAgFgRgaQgSgaAGggQAKABABARQACAUAHACQAAANAUAJQAUAKgBARQgIgHgJgBg");
	this.shape_17.setTransform(68.4,52.6,1.108,1.108);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAGIASgdQAJgEgBADIgHANQgOAZANAMIgEAAQgXAAAJgUg");
	this.shape_18.setTransform(27.9,44.8,1.108,1.108);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgXAhQgCgVACgQQAFgDAOgWQAKgRATACQgCAHgZAaQgSARAHAdQgEAKgCAAQgDAAgBgMg");
	this.shape_19.setTransform(11.4,43.8,1.108,1.108);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAJAxQgDgEgBgMQgBgKgRgCQgSgCgDgGQAPgOgIgVQgIgTgTgFQACgKAIAGQAIAFACAJQAPgMATAUQAYAZAVgDQgBAIAGALQAGAKgBAKQgRABgMgXQgKgVgUAEQgNAHAVAQQAZATgEARIgGAAQgHAAgDgEg");
	this.shape_20.setTransform(83.4,38.5,1.108,1.108);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEAHQgIgRgHgCQABgMATAOQAVANgCAOIgIACQgMAAgEgMg");
	this.shape_21.setTransform(42,34.7,1.108,1.108);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_22.setTransform(55.3,32.3,1.108,1.108);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhDAMQACgRgOgTQAGgRAEAUQAGAZAEABQAmgCACglQAJANAiAKQAnALARAPQgLAEgVgIQgggMgQgDQgSAEgTAMIggAXQgBgDADgUg");
	this.shape_23.setTransform(17.6,34.9,1.108,1.108);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_24.setTransform(53.1,22.3,1.108,1.108);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQgBgEAHAIQAHAIAAAGQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAQgBAAgEgHg");
	this.shape_25.setTransform(56.3,21.7,1.108,1.108);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFABADAHQAFAJgGAFIgEABQgCAAgCgGg");
	this.shape_26.setTransform(22.6,20.4,1.108,1.108);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLAhQgPgMgJgFIAAAUQgOgEAJgSQAMgXgHgOQAZgNAPgBQATgBATAPQAFAWgIAOQgMAPgEAIQgIACgHAAQgLAAgJgFg");
	this.shape_27.setTransform(47.1,18.2,1.108,1.108);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOACQArgiAHgRQAGADgCAQQgCATAIALQgQABAAgFQAFgJABgGQgSgCgKAOQgLAQgKABQABAEAFAFQAEAGAAAFQgBABgRgDQgPgDgHAZQgHgSAkgeg");
	this.shape_28.setTransform(20.3,17.8,1.108,1.108);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_29.setTransform(61.9,12.1,1.108,1.108);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAdBEQgdgLgJADQAXgUgOgDQgIgCgpAFQAJgMAVgIQgCgJgJAAQgJABAAAIQgFgBgEgKQgEgJgHAAQAPgHAJAAQACgBAEgfQgDABgGAFQgFAEgGAAQgJAFACgCIALgKQAcgVgCgMQAJgFACAZQABAKACABQABABAEgMQAWALgQANQgWAMgDAEQABAHAKACIASAAQgIAeAWALQAiAQACADQgGALgMAAQgFAAgIgDg");
	this.shape_30.setTransform(38.6,18.9,1.108,1.108);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAjAyQCGBPAQA9Qhagvg8hdgAh8BuQAVgPBFgjIhBBLQgnAtguAKQANguAvgigAgiA8QgJglgEgTQgHggAUgBQARABASgIQAQgHAIAEIgDAlQAAAlANAPQgOAWgaAAIgCABQgXAAgEgNgAhEgyQgegFgQgEQgIgZgfgfQggghgJgVQATgNAdAdQAiAhASABQgCgLgQgVQgNgTABgTQAQAIAOAZQAOAbgOAKQAGAUAYAZQAZAaAFATQgJgQgZgFgABlh1QAugwAwgOQgcAlgyApQguAkguAaQADgDBJhLg");
	this.shape_31.setTransform(48,45.4,1.108,1.108);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAtQAQgoAZgFQgCgIgJAAQgJABAAAHQgFAAACgTQADgRgdAHQAEgUgMgRQgMgSAAgPQANAHAZAoQAUAgAfABIgiAtQgTAcAEAkQgQgCgEAMQgIgRAQgmg");
	this.shape_32.setTransform(61.3,20,1.108,1.108);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgKAEQgFgFAKgDIAFAAQACABACgBQAKgFgCAGQgCAFgGADQgEACgDAAQgEAAgDgDg");
	this.shape_33.setTransform(46,9.4,1.108,1.108);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AB0GQQgygJgzgUQglgPgzgaQgpg2g7guQgEgNgchBQgUgvgIgjQgNjEBdh2QBNhiCig5ICMAAQAVAIgYACQgUACgRgCIhGAAQgTAOgfgEIguAYQgYAOgJACQgVACgYAWQgZAXgUADQgPAZgdAkIguA7QgcBUgCBcQgCBuAqA1IAAAUQADABAHAFQAFAEAFAAQAFAZAVAYQAeAiAEAHIA2AfQAeATAQAUQAsACAPASQAwgEAqAOIAyAAQAOgDAJAFQAJAGgMACg");
	this.shape_34.setTransform(29.1,46.6,1.108,1.108);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAsAxQBXhQAYiAQARAQgNAeQgRAnADAPIg6BMQgkAvgaAaIhVAsQg0Aag0AAQCEgmBMhJg");
	this.shape_35.setTransform(73.4,72.1,1.108,1.108);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ACFDZQgEgBAAgFIAAhaQgTh5hHhTQg+hLhrgyQgPgFANgDQAMgDAAALQAIgBALAGQALAGAKgBQADAKAYAIQAVAHACAPQAZAIAaAdQAgAiAQAJQAEALAiBGQAXAyAJAmIAAB4QgBAHgDAAIgCgBg");
	this.shape_36.setTransform(77.5,28.7,1.108,1.108);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIAAQAEgEAAgFIATAAQADANgLADQgDACgSABQABgDAFgHg");
	this.shape_37.setTransform(48.1,84.3,1.108,1.108);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_38.setTransform(65.7,82.6,1.108,1.108);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIABIgLADQAAgFAHgCg");
	this.shape_39.setTransform(43.1,82.6,1.108,1.108);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_40.setTransform(62.4,81.5,1.108,1.108);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_41.setTransform(33.6,80.9,1.108,1.108);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_42.setTransform(30.3,80.3,1.108,1.108);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_43.setTransform(64.6,79.2,1.108,1.108);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_44.setTransform(71.2,78.1,1.108,1.108);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_45.setTransform(29.2,77,1.108,1.108);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgCAJQgHgBgDgHQgDgGAGgCQAIgDAPAKQgHAJgIAAIgBAAg");
	this.shape_46.setTransform(74.7,76.6,1.108,1.108);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_47.setTransform(77.3,74.8,1.108,1.108);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_48.setTransform(67.9,74.8,1.108,1.108);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AACAHQgHgGgEAAQACgIAIABQAJAAAAAHQgCAGgDAAIgDAAg");
	this.shape_49.setTransform(17.6,75.2,1.108,1.108);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_50.setTransform(71.2,74.3,1.108,1.108);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_51.setTransform(74.6,72.6,1.108,1.108);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_52.setTransform(65.7,73.2,1.108,1.108);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_53.setTransform(23.7,73.2,1.108,1.108);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_54.setTransform(20.4,73.2,1.108,1.108);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AACAlQgfAAgOgRQgIhCBDAHQALAMAIAYIAKArQgEgCgngBg");
	this.shape_55.setTransform(48,75.3,1.108,1.108);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_56.setTransform(17,69.3,1.108,1.108);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_57.setTransform(82.3,68.7,1.108,1.108);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_58.setTransform(76.8,68.2,1.108,1.108);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_59.setTransform(41.1,69,1.108,1.108);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_60.setTransform(12.6,68.2,1.108,1.108);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_61.setTransform(61.3,67.1,1.108,1.108);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_62.setTransform(50.8,67,1.108,1.108);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_63.setTransform(81.2,65.9,1.108,1.108);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_64.setTransform(45.8,65.9,1.108,1.108);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_65.setTransform(84.5,65.4,1.108,1.108);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_66.setTransform(73.5,64.3,1.108,1.108);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AACAHQgHgGgEAAQACgIAIABQAJAAAAAHQgCAGgDAAIgDAAg");
	this.shape_67.setTransform(51.9,64.1,1.108,1.108);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_68.setTransform(36.7,64.6,1.108,1.108);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_69.setTransform(15.9,63.7,1.108,1.108);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_70.setTransform(85.1,62.6,1.108,1.108);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgCAJQgHgCgCgHQgCgIAGgBQAHgCAMALQgHAKgFAAIgCgBg");
	this.shape_71.setTransform(59.4,63.1,1.108,1.108);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_72.setTransform(13.7,63.2,1.108,1.108);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_73.setTransform(86.8,60.4,1.108,1.108);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_74.setTransform(75.7,60.4,1.108,1.108);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_75.setTransform(24.8,60.4,1.108,1.108);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_76.setTransform(22,60.4,1.108,1.108);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_77.setTransform(11.5,60.4,1.108,1.108);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_78.setTransform(83.4,59.9,1.108,1.108);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_79.setTransform(69,59.3,1.108,1.108);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_80.setTransform(55.7,59.3,1.108,1.108);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_81.setTransform(41.4,59.3,1.108,1.108);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_82.setTransform(12.6,58.2,1.108,1.108);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_83.setTransform(10.4,58.2,1.108,1.108);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_84.setTransform(87.9,57.1,1.108,1.108);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgDALQgegBAKgUQALgCAMAIQALAHAPgDQACAMgZAAIgGgBg");
	this.shape_85.setTransform(75.5,57.8,1.108,1.108);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_86.setTransform(42.5,57.1,1.108,1.108);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgPAOQACgGAJgIQAHgIABgHQATADgMAQQgIAMgJAAQgEAAgFgCg");
	this.shape_87.setTransform(84.6,56.1,1.108,1.108);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgCAGgDAAIgCAAg");
	this.shape_88.setTransform(77.3,55.3,1.108,1.108);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgYAPQAKgPAAgOIAnAAQgBAGgGACIgNACIgLAMQgFAHgJAAIgEAAg");
	this.shape_89.setTransform(19.2,56,1.108,1.108);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQADgIAEADQAIAGAEgBQgCAIgIAAIAAAAg");
	this.shape_90.setTransform(10.9,55.6,1.108,1.108);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_91.setTransform(81.8,54.3,1.108,1.108);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_92.setTransform(87.9,53.2,1.108,1.108);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_93.setTransform(77.9,52.7,1.108,1.108);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgCAJQgHgBgDgHQgDgGAGgCQAIgDAPAKQgHAJgIAAIgBAAg");
	this.shape_94.setTransform(72.5,53.3,1.108,1.108);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_95.setTransform(89,50.4,1.108,1.108);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_96.setTransform(23.7,50.4,1.108,1.108);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgKAGQALgagFgOQAaAAgKAdQgFAOgLAaQgQgHAKgWg");
	this.shape_97.setTransform(85.7,49.3,1.108,1.108);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_98.setTransform(30.3,45.5,1.108,1.108);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgiAjQgNgNADguQAlgOATAFQAYAGAJAgQgPgPgEAPQgHAbgEADg");
	this.shape_99.setTransform(77.9,47.1,1.108,1.108);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AglAPQgGgTAOgUQAOgUASAAQAVAAAOAeQAFAYgRAOIgbAVQgegGgGgYg");
	this.shape_100.setTransform(18.9,47.1,1.108,1.108);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_101.setTransform(22.6,41.6,1.108,1.108);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_102.setTransform(35.9,41,1.108,1.108);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQADgIAFADQAGAGAFgBQgCAIgIAAIAAAAg");
	this.shape_103.setTransform(26.4,41.2,1.108,1.108);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgIgCQABgHAHgDQAHgDABAGQADAIgKAPQgKgIABgIg");
	this.shape_104.setTransform(7.5,41.7,1.108,1.108);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgPAgQgGgVgSAEQAMgMASggQARgaAgABQgeAagKAUQgNAcANAjQgJgBgGgWg");
	this.shape_105.setTransform(69.6,44.9,1.108,1.108);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_106.setTransform(28.1,39.4,1.108,1.108);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgKADQgFgEAFgDQAGgDARADQgEAKgIABIgBAAQgGAAgEgEg");
	this.shape_107.setTransform(77,38.2,1.108,1.108);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AACAEQgEgBgCAIQgOgEACgHQACgEAKgEQAKgDAGAEQAIAFgFANQgJgGgEgBg");
	this.shape_108.setTransform(50.2,38.7,1.108,1.108);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_109.setTransform(46.9,38.3,1.108,1.108);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgFAGQgNgFAEgPQABACATAHQANAFgEAPIgUgJg");
	this.shape_110.setTransform(21.5,38.2,1.108,1.108);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgIABQAEgEAAgGIATAAQADANgLAEQgEACgRAAQABgDAFgGg");
	this.shape_111.setTransform(17.1,37.7,1.108,1.108);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_112.setTransform(87.9,36,1.108,1.108);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_113.setTransform(71,36.9,1.108,1.108);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAFAIQgQgLgIADQABgOARAFQAIADANAGQgCALgGAAQgDAAgEgDg");
	this.shape_114.setTransform(30.9,36.5,1.108,1.108);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_115.setTransform(74,35.4,1.108,1.108);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_116.setTransform(53,35.4,1.108,1.108);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgEgEQAIgQAQABQgDAmgkABQADgCAMgWg");
	this.shape_117.setTransform(65.2,35.5,1.108,1.108);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_118.setTransform(23.7,32.7,1.108,1.108);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_119.setTransform(12.6,32.7,1.108,1.108);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_120.setTransform(82.3,30.5,1.108,1.108);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_121.setTransform(21.5,30.5,1.108,1.108);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_122.setTransform(13.7,30.5,1.108,1.108);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_123.setTransform(12.6,27.2,1.108,1.108);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgKAJQgEgDADgEQALgWALAPQADAFgCAFQgEAGgJABIgBAAQgEAAgEgDg");
	this.shape_124.setTransform(47.7,26.4,1.108,1.108);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_125.setTransform(64.6,25,1.108,1.108);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgMgFQARgKAQAHQgBAHgPACQgNACAAAIQgWgIASgIg");
	this.shape_126.setTransform(53.9,25.3,1.108,1.108);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgHACQAHgKAAgGQALAFgDAIIgIAQQgKgEADgJg");
	this.shape_127.setTransform(16.5,26.1,1.108,1.108);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_128.setTransform(50.2,23.9,1.108,1.108);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_129.setTransform(21.2,24.7,1.108,1.108);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_130.setTransform(31.4,21.1,1.108,1.108);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_131.setTransform(28.1,21.1,1.108,1.108);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgMANQAAABAKgUIAAgKQAYgEgNAVQgJAQgGAAQgDAAgDgEgAgMANIAAAAIAAAAg");
	this.shape_132.setTransform(58.9,19.6,1.108,1.108);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_133.setTransform(70.7,17.2,1.108,1.108);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_134.setTransform(56.3,16.6,1.108,1.108);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_135.setTransform(29.2,16.1,1.108,1.108);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgEAQQgDgSADgMQAEgVAEATQAEATgDAMQgDALgCAAQgCAAgCgKg");
	this.shape_136.setTransform(53.5,17.2,1.108,1.108);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_137.setTransform(54.6,12.2,1.108,1.108);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AACAHQgHgGgEAAQACgIAIABQAJAAAAAHQgCAGgDAAIgDAAg");
	this.shape_138.setTransform(50.8,9.9,1.108,1.108);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgPAFQABgEAKgEQAIgDAAgIQAVAHgQAPQgIAHgEAAQgHAAgFgKg");
	this.shape_139.setTransform(41.5,10.6,1.108,1.108);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADAEgFADQgDADgCAAIgCgBg");
	this.shape_140.setTransform(58,7.2,1.108,1.108);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_141.setTransform(52.4,7.2,1.108,1.108);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_142.setTransform(39.7,7.2,1.108,1.108);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgKADQgFgEAFgDQAGgDARADQgEAKgIABIgBAAQgGAAgEgEg");
	this.shape_143.setTransform(58.1,3.9,1.108,1.108);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FF00FF").ss(2,0,0,4).p("ABxAAQAAAvghAhQgiAhguAAQguAAghghQghghAAgvQAAguAhghQAhghAuAAQAuAAAiAhQAhAhAAAug");
	this.shape_144.setTransform(48,18.9,1.108,1.108);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#9D6178","#FCEEF1","#F6C8D5"],[0,0.498,1],0,0,0,0,0,11.4).s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAuAAAiAhQAhAhAAAuQAAAvghAhQgiAhguAAQguAAghghg");
	this.shape_145.setTransform(48,18.9,1.108,1.108);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#FF00FF").ss(2,0,0,4).p("ABxAAQAAAvghAhQghAhgvAAQguAAghghQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAug");
	this.shape_146.setTransform(76.7,47.7,1.108,1.108);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.rf(["#9D6178","#FCEEF1","#F6C8D5"],[0,0.498,1],0,0,0,0,0,11.4).s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_147.setTransform(76.7,47.7,1.108,1.108);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#FF00FF").ss(2,0,0,4).p("ABxAAQAAAvghAhQgiAhguAAQguAAghghQghghAAgvQAAguAhghQAhghAuAAQAuAAAiAhQAhAhAAAug");
	this.shape_148.setTransform(48,75.8,1.108,1.108);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.rf(["#9D6178","#FCEEF1","#F6C8D5"],[0,0.498,1],0,0,0,0,0,11.4).s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAuAAAiAhQAhAhAAAuQAAAvghAhQgiAhguAAQguAAghghg");
	this.shape_149.setTransform(48,75.8,1.108,1.108);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#FF00FF").ss(2,0,0,4).p("ABxAAQAAAvghAhQghAhgvAAQguAAghghQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAug");
	this.shape_150.setTransform(19.3,46.2,1.108,1.108);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.rf(["#9D6178","#FCEEF1","#F6C8D5"],[0,0.498,1],0,0,0,0,0,11.4).s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_151.setTransform(19.3,46.2,1.108,1.108);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#FFF33B","#FEF03E","#FAE549","#F4D45B","#EBBC73","#EAB877","#BE2F92"],[0,0.2,0.373,0.533,0.69,0.71,1],0,0,0,0,0,42).s().p("AkIFDQiUh6gIjHQAChQAfhGQAag9Azg6QA1g+BBglQBRgwBbgDQBlgEBfAtQBbAqA9BNQAGAAACAHIACANQAcASAUAxIAgBTQANCBgkBlQgdBPhEBQIhoBDQg7Ahg5AKQgqAHgnAAQiRAAh0hgg");
	this.shape_152.setTransform(47.3,47.2,1.108,1.108);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,0.8,93.4,92.8);


(lib.Diatom10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAOQABgFAFAAQADgKgHgFQgEgDgMgBQAIgOAZAJQAdAMARgHQgCANgaADQgbAEgEAJQgIgBACgEg");
	this.shape.setTransform(-2.7,114.9,0.491,0.491);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAKQAEgIAKgCQgBgGgKgCIgTgBQANgPAlAHQAmAHABAUQgFACgkgDQgagCgCANQgKgCAGgIg");
	this.shape_1.setTransform(-1.5,97.7,0.491,0.491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AABAVQgigCgLgKQgCgTAhAAQAjABADgLQAIABgBAFQgCAEgFAAQgCAKAGAFQAFADALABQgHAMgcAAIgJAAg");
	this.shape_2.setTransform(-10.8,96.3,0.491,0.491);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghArQgJgWAdACQAeADgBgNQgEgKgngBQgigBAIgbIAyAAQAFAAACgHIACgNQAQgDgFAXQgEAVgQgLQALAXAwgEQAAAGgHACIgNACQgIACACAEQABAEAFAAIgnASQgPAGgIAAQgGAAgBgEgAgVgOQgGAEAEAEQACACAGgEQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_3.setTransform(-6.9,88.2,0.491,0.491);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIASQgFgHAGgGIAIgGQASgfgNAdQgIAVgFAAIgBAAg");
	this.shape_4.setTransform(-12.6,81.6,0.491,0.491);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJAMQAEgtANgNQAHAJgLAiQgKAfAOAPQgGAEgDAAQgLAAADgjg");
	this.shape_5.setTransform(-13,74.4,0.491,0.491);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhJCqQAdAEAXgGQATgFASgNQgFgKgzAJQguAIADglIAyAAQAGgdgagKQgkgOgEgHIAAhtIAggNQASgIAKgJQADgUgbgGQgbgHABgRIBGAAQAJACABgMQgEgJgigCQgdgDAHgaQARAEApgHQAZgFAGASQAMgnAcAdQAFAXgdgBIgtgCQACAUAfABIA4gBQAHAYgZAEQgdAEgDAIQgGAZAXAIQAdAKAEAHQAQA7gQA8Qg7gIAJAwQgBANAfgDQAcgCgIAWQgcgBgMABQgWABgIAJQACAMAbgBQAbAAAEAJQgBATgdACQgjgCgOABIgvACIgCAAQgaAAAFgWg");
	this.shape_6.setTransform(-6.5,76,0.491,0.491);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAVQgVgKgNAGQABgZAMABQAJAAAbAFIALgNQAHgJAMACQgGAJgBAEQgBAGAIABQAEAKgeAAQgNABgBABQgCABAMAGQgBAGgFAAQgEAAgFgCg");
	this.shape_7.setTransform(-7.1,65.4,0.491,0.491);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAMQghgDgLgIQgCgNAbAEQAbAEgDgOQAMAJAIAUQARgCgLgRQgKgPAYAFIAAAnQgLgGgigDg");
	this.shape_8.setTransform(-11.8,54.9,0.491,0.491);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AASAQQgQgLAGgPQgLgDgFALQgGALgHAAQgPAFgMgIQgMgIgLACQATgPAqgEQALgBBDAAQAPAFgsAHQgqAHApAKQgCAMgHAAQgEAAgHgFg");
	this.shape_9.setTransform(-10,52,0.491,0.491);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAEASQgpgLgMACQABgHAPgCQAOgBAAgJQANAYAPgOQAZgVAQABQADAQgYAIQgHACACABIAaACQgKAMgRAAQgJAAgKgDg");
	this.shape_10.setTransform(-10.1,40.2,0.491,0.491);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAJQgRgHgHABQgNgBACgDQABgDAJgDQAagHgGARQAJAHgCAAIgCgBg");
	this.shape_11.setTransform(-8.7,38.1,0.491,0.491);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgECWQAFgagKgOQAHgQgCgZQgDgVAHgIQABgPgLgJQgRgLgCgFQABgcgHgiQgKglgEgUQgBgTASgOQAVgPACgMQAMAEAQAXQAOAUARADQAAAUgMAmQgLAiADAcIgnAAQgDANALADQACACATABQgKAGAGAPQAFAKgVgBQgBALAFAFQAFADALABQgQARADAgQAGA0gDATQgTgJAFgVg");
	this.shape_12.setTransform(-7.2,22,0.491,0.491);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAIApQgTgEglgBQAMgMgNgQQgQgTAHgWQAFgBAPgOQAMgKASAFQABAGALAXQAJAUgMABQADARAbAMQAbANADARIg1gPgAgagfQgFAEADAEQADACAFgEQAGgFgEgDIgCgBQgCAAgEADg");
	this.shape_13.setTransform(-1.8,141.6,0.491,0.491);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgnAlQAFgTAEgDQADgBANACQAMACACgDQADgEADgSQABgPAMgCQgKgRAAgNQAcAAAJAYQAGARgDAmQgRAKgeAIIgzAMQAGgCAEgQg");
	this.shape_14.setTransform(-8.6,141.6,0.491,0.491);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_15.setTransform(-9.4,138,0.491,0.491);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUgnQAOABAGgCQAIgCABgHQASAOgJAgQgLAoACANQgcgcgBg9g");
	this.shape_16.setTransform(-9.1,133.5,0.491,0.491);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQBIQgLgPgRADIAOhWQAIgyAbgNQAOAXAJAwQAOBDADALQgQgCgKALIgOAVQgJgBgMgRg");
	this.shape_17.setTransform(-5.4,134.5,0.491,0.491);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFAtQAIgOgXAEQAAgPABgFQACgJAHgBQgPgIABgOQABgXgHgOQAOgNAtADQAEAogJAhQgHAYgRAgQgQgCALgSg");
	this.shape_18.setTransform(-2.2,132.8,0.491,0.491);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_19.setTransform(-8.4,129.6,0.491,0.491);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAGAFQgegCgFABQABgGAKgCIASgBIAeAAQAAALgSAAIgGgBg");
	this.shape_20.setTransform(-2.7,127.9,0.491,0.491);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAKQABgOAPgEQAJgCAYABQgBAOgPAEQgGACgLAAIgQgBg");
	this.shape_21.setTransform(-8.9,127.2,0.491,0.491);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgigDQACgNAbACQAjACAFgBQACAaghADIgEAAQgdAAgFgTg");
	this.shape_22.setTransform(-2.5,125.4,0.491,0.491);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_23.setTransform(-5.7,124.9,0.491,0.491);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAegJQgBAQgTADIgnAAQAQgRArgCg");
	this.shape_24.setTransform(-9.1,124.2,0.491,0.491);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_25.setTransform(-5.9,123.5,0.491,0.491);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgsgCQAKgQAiAFQAQADAdAIQgQARgdABQgfAAgNgSg");
	this.shape_26.setTransform(-2.5,122.4,0.491,0.491);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_27.setTransform(-5.9,122,0.491,0.491);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAGAFQgbgCgDABQAAgFAHgCIANgCIAdAAQABALgQAAIgEgBg");
	this.shape_28.setTransform(-9.4,121.5,0.491,0.491);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_29.setTransform(-5.9,121,0.491,0.491);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgQgBIgXgCQAEgNAeACQAnACAGgBQACARgTAFQgXACgJAFQADgOgKgDg");
	this.shape_30.setTransform(-2.7,120,0.491,0.491);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAEAJIghgHQABgMAXACQAfACAEgBQgGAQgSAAIgCAAg");
	this.shape_31.setTransform(-9.1,118.7,0.491,0.491);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAGANQgJgBgkgKQALgRATAEQAiAHAPgDQgDAUgaAAIgFAAg");
	this.shape_32.setTransform(-2.7,117.2,0.491,0.491);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgZAJQAGgIAQgEIAbgHQAHAUgVABQgZgEgKACg");
	this.shape_33.setTransform(-9.3,115.9,0.491,0.491);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAGAFQgegCgFABQABgGALgCIARgBIAeAAQAAALgSAAIgGgBg");
	this.shape_34.setTransform(-9.6,113.2,0.491,0.491);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEANQgVgBgJgJQgCgTAkAEQAjAFAAAUIgYABIgPgBg");
	this.shape_35.setTransform(-2.5,111.8,0.491,0.491);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAIQgFgFAPgDQAKgBAJAAIAAgKQAaADgXAMQgNAIgJAAQgGAAgEgEg");
	this.shape_36.setTransform(-10,110.6,0.491,0.491);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgHgBQgLgIgVAGQAKgRAbAIQAiAKAIgBQgBAGgOACQgOACgBAJQgKgNgHgEg");
	this.shape_37.setTransform(-2.7,109.2,0.491,0.491);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAKIAAgTIAnAAIAAATg");
	this.shape_38.setTransform(-10.1,108,0.491,0.491);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_39.setTransform(-4,107.3,0.491,0.491);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_40.setTransform(-5.9,107.3,0.491,0.491);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_41.setTransform(-9.4,106.8,0.491,0.491);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYgLIAxAAQALAXgkAAQgjAAALgXg");
	this.shape_42.setTransform(-1.5,106.6,0.491,0.491);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHABIgMADQABgFAGgCg");
	this.shape_43.setTransform(-6.2,105.8,0.491,0.491);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghgKQATgDASAFIAgAIQgDAMglAAQglAAAIgWg");
	this.shape_44.setTransform(-9.9,105.6,0.491,0.491);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_45.setTransform(-6.2,104.5,0.491,0.491);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_46.setTransform(-9.6,103.8,0.491,0.491);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXgOQATAOAegEQgFAQgaADIgEAAQgWAAAIgdg");
	this.shape_47.setTransform(-1.1,103.8,0.491,0.491);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_48.setTransform(-3.5,103.3,0.491,0.491);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgJgKIA2ABQgHAQgdADIg1AAQACgSAhgCg");
	this.shape_49.setTransform(-10.3,102.1,0.491,0.491);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAAAWQgGgDgDgOQgDgMAEgIQAGgKANAGQgHAIgCAJQgCALALABQgEAMgFAAIgCAAg");
	this.shape_50.setTransform(-6.2,102.1,0.491,0.491);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AghAKIATgBQgIgUgWABQAJgNAhAIQARAFAeAKQgHAPgdADIg1ABQABgIAKgBg");
	this.shape_51.setTransform(-1.5,100.7,0.491,0.491);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAHAMQglgMgTAHQAIgfAlAMQAUAHAiAMQgHAJgPAAQgJAAgMgEg");
	this.shape_52.setTransform(-10.1,99.3,0.491,0.491);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIAHQAGgRgMgEQABgHALgCIARgBQgMAKAGAPQAFAPgJAJQgUgCAHgQg");
	this.shape_53.setTransform(-6.4,99.4,0.491,0.491);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAZQAHgIABgJQACgKgKgCQAMgWAlACQADAOgKAEQgDABgTABIAMALQAJAHgCALg");
	this.shape_54.setTransform(-6.4,96,0.491,0.491);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_55.setTransform(-10.8,94.5,0.491,0.491);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgiAVQgBgQAGAAIAPAGQADgNgKgEIgXgCQAOgRAmAGQApAFgEAZQgTgEgVAJQgOAGgOAAIgLgBg");
	this.shape_56.setTransform(-1.5,94.7,0.491,0.491);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AACAOQgfgJgKgBQANgQAcgCQAegDAIAVQgGAMgSAAIgOgCg");
	this.shape_57.setTransform(-11.1,93.1,0.491,0.491);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AALAZQgbgCgDABQgHgMABgKQABgLgFgQIA7AAQgeAOgBAIQgDAJAiAIQABAMgQAAIgEgBg");
	this.shape_58.setTransform(-6.7,93,0.491,0.491);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgiAJQgCgZAeAFQAPACAaAJQgFAIghAEIgUABQgNAAACgEg");
	this.shape_59.setTransform(-1.5,91.4,0.491,0.491);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAGAIQgbgCgDABQAFgSAMAEQAWAHAKgCQABALgQAAIgEgBg");
	this.shape_60.setTransform(-6.4,90.9,0.491,0.491);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgeAJQABgPAUgDIAmgBQAGAVgYAAQgegFgLADg");
	this.shape_61.setTransform(-11.6,90.4,0.491,0.491);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAGAFQgbgCgDABQAAgFAHgCIANgCIAdAAQABALgQAAIgEgBg");
	this.shape_62.setTransform(-1.5,89.1,0.491,0.491);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAKQAEgYAjAFQAGASgPACQgVgCgJABg");
	this.shape_63.setTransform(-11.5,87.4,0.491,0.491);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_64.setTransform(-1.8,86.8,0.491,0.491);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLACQAKgMAGABQAHABAAAIQAAAHgGACIgDABQgFAAgJgIg");
	this.shape_65.setTransform(-4.1,86.8,0.491,0.491);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_66.setTransform(-5.4,86.6,0.491,0.491);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_67.setTransform(1.4,86.1,0.491,0.491);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_68.setTransform(-1.8,84.7,0.491,0.491);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBAKQgEgGABgIQAEgLACAGQADAFAAAJQgCAHgDAAIgBgCg");
	this.shape_69.setTransform(0.9,71.9,0.491,0.491);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_70.setTransform(-0.5,70.9,0.491,0.491);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJgOQAUAIgBAVQgUgHABgWg");
	this.shape_71.setTransform(-12.6,70.9,0.491,0.491);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_72.setTransform(0.9,70.2,0.491,0.491);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_73.setTransform(-13.3,69.4,0.491,0.491);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_74.setTransform(-1.8,67.5,0.491,0.491);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgCgBQAYgTgVAVQgJAKgCAAQgBAAAJgMg");
	this.shape_75.setTransform(-11.4,67.8,0.491,0.491);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgUAEQAUgMAMAAQALAAgCAHQgBAGgLACIgJACQgJAAgLgFg");
	this.shape_76.setTransform(-1.7,65.1,0.491,0.491);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_77.setTransform(-4.2,65.2,0.491,0.491);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgUAIQgFgFAPgDQAKgBAJAAIAAgKQAaADgXAMQgNAIgJAAQgGAAgEgEg");
	this.shape_78.setTransform(-11.5,65.4,0.491,0.491);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAIIgRgHQgCgOAaADQAaACgLATIgIABQgIAAgGgEg");
	this.shape_79.setTransform(-11.5,63.3,0.491,0.491);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgFALQgRgCgIgIQAAgMAiAAQAiABgJAVIgRABIgRgBg");
	this.shape_80.setTransform(-1.7,62.2,0.491,0.491);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_81.setTransform(-9.4,60.8,0.491,0.491);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AALALIgtgBQABgRAYgCQANgCAfACQAEAUgaAAIgCAAg");
	this.shape_82.setTransform(-11.8,60.9,0.491,0.491);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_83.setTransform(-11.3,59.6,0.491,0.491);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgngMIAtAAQAZABAJAJQghANgRACIgHAAQgaAAAEgZg");
	this.shape_84.setTransform(-1.8,59.5,0.491,0.491);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgWAiIAagNQgBgHgJgCIgTgBQAMgMgCgbIAdAAQgHgUgWAAQACgPAVAEQATAEAHAHQgGAJAAAEQgCAGAIABQgIASgfACQACAIANABIAYAAQAGAOgTAKQgGADABAAQABACARABQAFALgfAAQgLABgCABQgDABAMAGQgCAJgMABQgRgBgIABQgCgTAPgIg");
	this.shape_85.setTransform(-6.9,61.3,0.491,0.491);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgFAVQg6gDAKgbQAQAAAlgIQAdgGAbAEQgGAUgQgDQgggIgFABQgGARAOACQAKABAVgBQAIAFgPAEQgLADgPAAIgIgBg");
	this.shape_86.setTransform(-10.9,57.9,0.491,0.491);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgnAPQAKgPAAgOQA4AcgbgSQADgQAMAJQARALAIgEQgBASgcACQgjgCgPABg");
	this.shape_87.setTransform(-1.8,56.2,0.491,0.491);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgTARQABgFAKgEQAIgEAAgGQACgJgLgBQABgIAJgBIATgBQgJALADAGQAGALAAALQgLgBgLAHIgDAAQgGAAgIgGg");
	this.shape_88.setTransform(-6.7,56.6,0.491,0.491);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgBgCIALgCQAAAFgHACIgMACQAAgFAIgCg");
	this.shape_89.setTransform(-8.6,55.7,0.491,0.491);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_90.setTransform(-8.6,54.4,0.491,0.491);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgiAJQgFgXAiACQAfACAJAKQgFAJghADIgTABQgOAAACgEg");
	this.shape_91.setTransform(-2,53.5,0.491,0.491);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_92.setTransform(-11.3,53.2,0.491,0.491);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgOAVQAHgIABgJQACgLgKgBQAJgWAGASQAJAXAFAAQACAJgMABg");
	this.shape_93.setTransform(-6.4,53.4,0.491,0.491);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AghACQgMgTAsAFQAqAFgFATQgFgBgjACIgHABQgUAAgCgMg");
	this.shape_94.setTransform(-2.5,50.4,0.491,0.491);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_95.setTransform(-6.7,50,0.491,0.491);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_96.setTransform(-8.4,49.8,0.491,0.491);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_97.setTransform(-6.9,48.3,0.491,0.491);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag6AFQAegVBPACQALAGgFACIgSACQgVADgBAKQgDgEgDgBQgFgCgLAGQgPAHgMAAQgPAAgLgKg");
	this.shape_98.setTransform(-10.7,48.8,0.491,0.491);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgdAOQAJgJgCgFQgDgFgOAAQAJgOAYAJQAdALARgGQgTATgsAAIgGAAg");
	this.shape_99.setTransform(-3.2,47.4,0.491,0.491);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_100.setTransform(-8.4,46.8,0.491,0.491);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_101.setTransform(-6.9,46.6,0.491,0.491);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAIgCQgEgNgDAZQgOAEgPgJQgOgIgQADQAkgUBJABQALAGgFACIgSACQghAEAPAZQgGAAgHgWg");
	this.shape_102.setTransform(-10.2,46.1,0.491,0.491);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgeAJQABgPAUgDIAmgBQAGAVgYAAQgegFgLADg");
	this.shape_103.setTransform(-3.2,44.7,0.491,0.491);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_104.setTransform(-14.8,43.9,0.491,0.491);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAEAHQgLgIgCAAQgFgBADAQQgDgFgXgEQgTgDAFgRQAIAHAggFQAngGAUAEQARAGgoAHQgQACAAAAQABACAcACQgFANgJAAQgIAAgMgKg");
	this.shape_105.setTransform(-10,43.4,0.491,0.491);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgJgJQAJgBAVABQgJARgeACQgGgRAPgCg");
	this.shape_106.setTransform(-3.3,42.1,0.491,0.491);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgeAJQABgPAUgDIAmgBQAGAVgYAAQgegFgLADg");
	this.shape_107.setTransform(-3.7,39.3,0.491,0.491);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_108.setTransform(-5.9,38.5,0.491,0.491);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAAAGQgLgGgKABQgCgNAaACQAaADgLASIgBAAQgIAAgJgFg");
	this.shape_109.setTransform(-11,37.7,0.491,0.491);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_110.setTransform(-6.9,37,0.491,0.491);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgCgDIARgBQgBAGgKACIgSABQABgGALgCg");
	this.shape_111.setTransform(-8.9,37,0.491,0.491);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AABAJQgWgDgIgHQAKgJATACIAeAHQgCAKgSAAIgJAAg");
	this.shape_112.setTransform(-3.7,36.4,0.491,0.491);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_113.setTransform(-8.4,35.5,0.491,0.491);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgCgDIARgBQgBAGgKACIgSABQABgGALgCg");
	this.shape_114.setTransform(-10.8,35,0.491,0.491);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_115.setTransform(-6.9,34.6,0.491,0.491);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgBgCIALgCQAAAFgHABIgMADQAAgFAIgCg");
	this.shape_116.setTransform(-8.6,34.6,0.491,0.491);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgiAKQABgRAYgCQANgBAfABQgBARgYACQgdgBgPABg");
	this.shape_117.setTransform(-4,33.8,0.491,0.491);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_118.setTransform(-6.9,33.1,0.491,0.491);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_119.setTransform(-8.4,33.1,0.491,0.491);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAAAGQgLgGgKABQgCgNAaACQAaADgLASIgBAAQgIAAgJgFg");
	this.shape_120.setTransform(-11,32.8,0.491,0.491);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_121.setTransform(-4.4,32.1,0.491,0.491);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_122.setTransform(-8.4,32.1,0.491,0.491);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_123.setTransform(-9.4,32.1,0.491,0.491);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_124.setTransform(-7.2,31.8,0.491,0.491);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgZAKQABgOAQgEQAJgDAXACQAHATgVABQgZgDgKACg");
	this.shape_125.setTransform(-3.9,30.9,0.491,0.491);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_126.setTransform(-4.4,29.6,0.491,0.491);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgDAMQgiAAAJgVQARgEAPAGQATAHAIAAQAAAMgeAAIgEAAg");
	this.shape_127.setTransform(-10.2,29.9,0.491,0.491);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgiAAQANgPA4APQAFAJgeAAQgdgBgPgIg");
	this.shape_128.setTransform(-3.9,28,0.491,0.491);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AADAHQgSgFgTADQAGgTAiAAQAigBgFAeIgggIg");
	this.shape_129.setTransform(-10.3,27.2,0.491,0.491);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_130.setTransform(-0.5,26.5,0.491,0.491);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgFALQgRgCgIgIQAAgMAiAAQAiABgJAVIgRABIgRgBg");
	this.shape_131.setTransform(-3.7,25.4,0.491,0.491);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgeAJQABgPAUgDIAmgBQAGAVgYAAQgegFgLADg");
	this.shape_132.setTransform(-10.6,24.5,0.491,0.491);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgCAJQgHgBgDgIQgDgGAGgBQAIgDAPAKQgHAJgIAAIgBAAg");
	this.shape_133.setTransform(-3.4,23.1,0.491,0.491);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHABIgMADQABgFAGgCg");
	this.shape_134.setTransform(-0.8,21.3,0.491,0.491);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgTAjQAFgMAAgSQABgVAEgSQAPADAFAaQAHAkACAEg");
	this.shape_135.setTransform(-3.7,19.3,0.491,0.491);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgiA3QALg5ATg0QAPAEAJAiQAJAfgOAKIANAMQAJAGgCAMg");
	this.shape_136.setTransform(-10.8,19.8,0.491,0.491);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_137.setTransform(-3.5,15.4,0.491,0.491);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_138.setTransform(-11.3,14.7,0.491,0.491);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgcAlIgGgOQgCgEgCAHQgcggAkghQAighAvAJQgEAQgaAOQgYAPgFAPQARAHgEAQQgFAfABAPQgSgBgLgcg");
	this.shape_139.setTransform(-4.3,11.4,0.491,0.491);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgDgEQgDgEgcgPQgUgKABgVQALAJAmACQAmACAMAHQAJAuAAAJQgBAdgcAFQgXgUgGgng");
	this.shape_140.setTransform(-10.9,11,0.491,0.491);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#00FFFF").ss(3,0,0,4).p("ACIntQAhBTgHDmQgDBzgKBiIgFA9QAABLAXBEQAfBZgRIKQgIEIgQELQgoACg4AEQhtAHhKALQA+h2hFn1Qgkj2gMhgQgSifASgeQAig7gBhnIgIhbQgOiKgHiYQgNkvAihDQAjhCgOlbIgVlNIEMAAIgJGWQgDGoAgBTg");
	this.shape_141.setTransform(-6.6,76.9,0.491,0.491);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#FAAC18","#FFE7A3","#FFCA05","#FAAC18"],[0,0.443,0.686,1],-18.7,0,18.7,0).s().p("AiBMSQgkj2gMhgQgSifASgeQAig7gBhnIgIhcQgOiJgHiYQgNkvAihDQAjhCgOlbIgVlNIEMAAIgJGWQgDGoAgBTQAhBTgHDmQgDBzgKBiIgFA9QAABLAXBEQAfBZgRIKQgIEIgQELQgoACg4AEQhtAHhKALQA+h2hFn1g");
	this.shape_142.setTransform(-6.6,76.8,0.491,0.491);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,6.3,22.2,141.4);


(lib.Diatom09 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAeQgLgGgJABQAFgUApgIQAngJAEgWQAIABgFAJQgDAIAKACQgFAIgdAMQgXALgCASIgCAAQgIAAgKgFg");
	this.shape.setTransform(108.6,66.5,1,1,-12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAYQAEgjgYgEQABgQAUAOQARANgJASQAGAAACgHIACgMQADABAGAEQAFAEAGAAIAAAUg");
	this.shape_1.setTransform(81.6,69.2,1,1,-12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAGQABgGgBgDQgFgKAGACQAFACADAGQAFAJgGAFIgEACQgCAAgCgHg");
	this.shape_2.setTransform(82.5,61.7,1,1,-12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFAoQgXgZgPACQgEgRAIgSQAIgTgCgPQAZACAIAtQAHAuATAGQgEAGgGAAQgIAAgNgNg");
	this.shape_3.setTransform(54,71.7,1,1,-12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYBGQgCgRAMgDQgBgKgRgMQgOgLACgRQggAFACgYIAoARQAaALANgSQgBgNgKAIQgQAMgMgHQADgIAHgMQAIgNACgHQAJAAAFAQQADAPAMgBQAPgFAKgQIAPgdQAIABgCAFQgBAEgFAAQgCALAGAFQAFADALABQgDAFgiAWQgWANATAdQgbgKgIAZQgHAZgPAAIgCAAg");
	this.shape_4.setTransform(88.4,65.1,1,1,-12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSALQgCgZgDABQgCgSAjAPQANAGABAEQABAFgTgCQgDABgFAEQgFAEgGAAQgCAJAMABQgGAIgDAAQgFAAgBgNg");
	this.shape_5.setTransform(48.8,66.8,1,1,-12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AC+CaQAFgJAAgEQgNAGgdgMQgTgIABAYIgngVQgYgMgbADQgmgkg9gOQgPgSgIgJQgPgOgWABIAAgUQgCgIgEACQgEABAAAFQgVgPgeghQgjgmgOgNQgDgCgZgPQgSgKgEgNQADgQAMAJQARALAIgEQAKACAAgVQABgTATAIQgMANACAbQBPBzBzA9QB7BDCsAGQABAWglgCQgogCgEAMQgIgCADgFg");
	this.shape_6.setTransform(54.6,79.3,1,1,-12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJATQAIgMgBgHQgCgGgPgEQAFgPAMAQQAOATAIgBQACAJgMABg");
	this.shape_7.setTransform(107.6,52,1,1,-12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWAJQgEgJgHAAQgWgIAUABQATgBADAIQAWAAAHgTIALAOQAHAHALgCQgFAJgXgDQgVgCgJAQQgFgBgEgKg");
	this.shape_8.setTransform(88.4,55.9,1,1,-12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACAcQAIgegBgHQgCgGgUgHQgQgFAJgWQAdANAKAaQALAZgLAjQgVgGAEgQg");
	this.shape_9.setTransform(77,61.4,1,1,-12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeAgIAKgWQgMgKgLANQgMAQAFABQgHgBAAgHQAAgJgDgDIgjgSQgbgOADgRQAQACAEgMQAGAAACAIIACAMQAagSAWAbQAfAlAKADQgBAGgJAIQgIAIgCAIQgQgBAGgRg");
	this.shape_10.setTransform(41.9,75,1,1,-12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACAB+IAKgVQgYgGgOANQgNAQgJAHQgIgJgqADQgdACAAgkQgPgBgPALQgPAMgPgCQgGgLgggKQgdgKgDgTQgaAOgkgWQglgYATgcQAKAZAyAKQA5ALANAOQAIgBgLgXQgOgcgDgIQAjgNAIgfQAIgfgVgiQADADAcAQQAUAKgBAVQAQgLgKgcQgMgiAGgRQAJABAFAQQAEAOALgBQAAAGgHACIgMACQAQAUAWgEIApgQQgKAPgVAOIgmAVQAFAIANAJIAVANQAPAEAKgOQAKgNAPADQABAQgGAAQgIgFgHgBQgCATAPAIIAbAMQgDAJgSAMQgKAHALAWQg1gEgagEQgrgGgvgQQgFATAYADQAYADgDAPQAdAABIANQA9AMAvgFQgdAQAYAEQAOABApgBQgLAWgdACQgeACgKAOQgQgBAGgSgAAtBhQgHACAAAGIANgCQAHgCAAgGIgNACgAATAiQACAKAHABQACgYgDgKQgEgOgPgBQgGARgZgIQgagHAIgWQAGAAAFgEQAGgFADgBQAJAVALAJQAEgsgiAEQgWAKgCAMQAAADAEAiIAjAEIAigEIABATgAAygMQgFAFADADQACACAGgEQAGgFgEgDIgCgBQgCAAgEADg");
	this.shape_11.setTransform(69,71.8,1,1,-12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUASQgGgDAEgLQAKgbAfAGQARAEgdAJQgdAJAWAHQgKAHgGAAIgEgBg");
	this.shape_12.setTransform(68.8,56.8,1,1,-12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPAQQgEgEAIgJQAKgKASgJQgKATgKAJQgGAFgDAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_13.setTransform(49.2,59.9,1,1,-12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAAHQgCgPgRAGQAFgYAPAMQAPAMAEATQgFACgDAAQgJAAgDgMg");
	this.shape_14.setTransform(74.3,54.1,1,1,-12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAcQgBgFAFgPQAJgbgngCQARgKAXgFQAcgFALAKQgHAMgHAKQgDAIAHATQgOgUgIAHQgIAJAKAYQgTgBgEgJgAAMgSQACAHAGAAIgCgMQgCgHgGgBIACANg");
	this.shape_15.setTransform(33.6,64.7,1,1,-12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag2AyQAGgJAegdQAXgWAEgQQAHgWgXgVQAFgMAHAEQAJAGgCAMIAYgLQAOgGACgNQAUAHgPALQgKAHgPAFQAAAMAGAOQABAJgRAFQABAIAFgCQAEgBAAgFQAPAUgYADQgiADgGANQAEAKADACQAFAGAHACQgGAEgUAYQgPATgSADQgLgTAOgVg");
	this.shape_16.setTransform(119.3,50.4,1,1,-12);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_17.setTransform(79.4,48.7,1,1,-12);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAHAHIgCgMQgFADgHAMQgEAGgNgMQAHgVAbAFQAbAGgWAUQgGAAgCgHg");
	this.shape_18.setTransform(75.5,48,1,1,-12);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_19.setTransform(107,39.6,1,1,-12);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAHQASgsABgRQAOATgSAjIgZA3QgHgKARgmg");
	this.shape_20.setTransform(120.1,35.4,1,1,-12);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAALQgUgKAHgOQAMgDAEALQAGALAHAAQABAJgGAAQgEAAgHgEg");
	this.shape_21.setTransform(96,34.3,1,1,-12);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAfQALgNgBgaQAPAGAEgQQAEgQAQAGQAEAQgNAFIgUAIQAEAegWAAIgCAAg");
	this.shape_22.setTransform(49.4,44.7,1,1,-12);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgMANQgIgygJgHQAPgHAUAiQAUAfAEAfIgKABQgaAAgGghg");
	this.shape_23.setTransform(24.6,41.4,1,1,-12);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_24.setTransform(98.1,17,1,1,-12);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAHQgIgBgEgKQARgDAGADQAFADgFAEQgEAEgGAAIgBAAg");
	this.shape_25.setTransform(98.9,14.3,1,1,-12);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAGQgGgLgHAAQgCgPASAKQATAKgGAOIgFABQgIAAgDgJg");
	this.shape_26.setTransform(87.4,16.9,1,1,-12);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhmBAQgFgJgkgyQAEggARgkQAVgnAIgWICLAAQAOAiANAUQASAZAZALQAIgCgEgIQgEgJAKgBQAYgCgJAOQgPAaAAACQgJgEgDgEQgGgEgCgIIgdBAQgSAogXAPIAOAMQAIAGgCAMQghgJglADQglADggANQAAgdgTgggAghBpIAUAAIAAgUIgUAAgAg9BXQgFAEADAEQACACAGgEQAGgFgEgDIgCgBQgCAAgEADg");
	this.shape_27.setTransform(73.6,29.9,1,1,-12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_28.setTransform(99.1,11.8,1,1,-12);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgnADIAXgbQAJARALgDQAbgFAMABQgFAVgmgHQgfgGAFAfQgZgIAMgOg");
	this.shape_29.setTransform(46.5,16.3,1,1,-12);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAoQgDgUANgUQAOgTgEgUIAdAAQAJAngmgJQAHAcAAAGQgBAPgXAAIgDAAg");
	this.shape_30.setTransform(111.5,10.1,1,1,-12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAKBeQgJABgJgGQgLgGgKABQADg0ABgQQgBgZghgGQAEgHARgGIAggMQAhgPgbgeQAPgVATAUQARATgBAWQgPgPgSALQgRALAAAXQALgJAJgVQAIADAMAHQAMAIAIACQg7APgUBAQgFARAbASIAPAIg");
	this.shape_31.setTransform(108.3,7.3,1,1,-12);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAEADIgNgDQgLgCAFgEQAHgGAQAMQAMAJgCAAQgCAAgMgGg");
	this.shape_32.setTransform(63.9,6.7,1,1,-12);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAGQASgSgHgRIATAAQgCAJAMABQAEAKgXAJQgPAFAOAFQgBAFgJAFQgJADAAAHQgQgIAPgQg");
	this.shape_33.setTransform(89.8,8.6,1,1,-12);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgJgFQAHgPAJAAQALAAgSAPQAGAagKAAQgKAAAFgag");
	this.shape_34.setTransform(44.6,10.7,1,1,-12);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgQAIQAGgGASgIQAPgGgGAFQgGAFgMAFQgNAHgDAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAg");
	this.shape_35.setTransform(84.5,0.2,1,1,-12);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgbALQgJhOASg+QAYASABA1QAAA4AOAMQgDAKgDgCIgGgKQgKgSgRAKQgBAUAQAKQAGAEAcAGQABAOgRAZQgOAVAKAeQgcgogKhPg");
	this.shape_36.setTransform(20.2,50,1,1,-12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_37.setTransform(63.3,2.1,1,1,-12);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgxAnQAHgLARgUQAMgSgGgeQAjABAIAXQAKAcAQAHQgEANgNgOQgQgSgRAJQgBABgQAWQgHAJgNAAQgFAAgHgCgAACgSQgEAFACADQACADAGgFQAFgEgDgEIgCgBQgCAAgEADg");
	this.shape_38.setTransform(102.3,-6.2,1,1,-12);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAOgJQgdhPgsglQAKgRAOAUQAOATACASQAPAFAIAVQAOAfACADIAaBJQAOAsAAAqQgdhigRgtg");
	this.shape_39.setTransform(110.7,-0.3,1,1,-12);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgBAPQgKgogNABQAHgQARAOQAKAHAPAPQgXgFAGAPQAGAPALAEQgHAJgGAAQgJAAgEgTg");
	this.shape_40.setTransform(39.3,2.5,1,1,-12);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhABLQgYADAEAlQgRgJgGgHQgKgNADgVQAbAJABgHIgIggQALgLANAHIAaAOQgKgSgEgDQgJgKgRABQAAggAFgMQAJgTAaAEQgGgMAMgTQAKgPgQgEQAEgIASgUQAPgRADgPQAHABgBAFQgCAEgEAAQAIATAaAAQAVAAAYgJQgKAPAAAPQAKgBAMgRQALgOARACQABATgfALQgcAKAIAeQgWgGgIAAQgIAAgWAGQgFAQAPAEQARAEgHAQQgLACgMgJQgLgHgPAEIAHgMQAEgIgBgKQgMABgJAWQgIAVgVgEQAHAQAXgKQAXgKAHAOQgEASgPgBQgTgGgMgBQAKAQAQAAQAJAAAYgHQgHAWgWAIQgCAOAPAOQAKAKgNAMQAbgPAaAEQAiAHAWgGIghAaQgUAQADAcIgigHQgMgDgDAUQhHgFALhLgAgfBlQgCAGgBAIQgNAbAQgXQANgRgGgHIgCgCQgCAAgDAIgAgOBzQASAOAfgEQAagagagOQAAAbgVgDIgKgBQgOAAgEAHgAg2BLQAGABALAGQAJAEAEgLIgQgIIgEAAQgGAAgEAIgAgBhfQgUARARAEQAAgJANgCQAPgCABgHQgEgJgHAAQgGAAgJAIgAAvhwQgFAEADAEQACADAGgFQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_41.setTransform(30.9,20.6,1,1,-12);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFgCQAYgKgCgRQAOAKgQAYQgQAZgVAAQgGgXAXgJg");
	this.shape_42.setTransform(32.1,3.5,1,1,-12);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgSAqQgFgUgVAGQgBgOAIgXQAHgWgEgUQANACADgGQADgGgJAAQAKgNAbARQAcARAEATQgFgBgPgOQgLgKgSAFQgFABgEAKQgEAJgHAAQADAqAugDQAAAKgUAKQgQAIAHAWQgHgCgHgYg");
	this.shape_43.setTransform(96.3,-7.9,1,1,-12);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAEAJQgcgVgKgBQAMgPAVATQAeAYAGABQgDAEgGAAQgIAAgOgLg");
	this.shape_44.setTransform(96.7,-16,1,1,-12);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdgNIAxAAQgCAQAMADQgTAHgNABIgDAAQgaAAACgbg");
	this.shape_45.setTransform(71.3,-17.7,1,1,-12);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhyAtQAVgoBIgVQBsgiAIgEQgBAXAVAHQgBAKgSABQgSACgDAHQgMADgGgLQgFgMgHAAQgPAKgPAAQAAAGAHACIANACQgBAOgPAEQgKACgXgBQgbAXgRAJQgOAIgOAAQgPAAgNgKg");
	this.shape_46.setTransform(38.7,-14.8,1,1,-12);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVAQQgVgNgbAHQAAgJgGgKQgGgKACgKQAGgBAOAGQAIAEACgJQAGAUARAFQASAFAIATQAHgEAXgZQARgTAXgBQgNANAKAFQAQAGgDAPQgGABgmgHQgPgCgBAcIgEAAQgQAAgVgOg");
	this.shape_47.setTransform(59,-22.7,1,1,-12);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ADvFtQAfhFAFgdQAFhPgCgkQgBgtgMhGQgGAEgHAmQgGAcgfgKQgDgmAIgWQAJgZAagFQgFgHgFgRQgFgSgFgHIgeAeQgVgLgMgiQgNglAagIQgFgSgMACQgQAEgHgIQgFgrgjgRQAHgVAXABQgZg0g5gpQgTgOhYg1QAFATAZALQAhAPAGAFQgLAYgbgVQgmgdgXAGQgMgSgHgIQgMgNgTgBQgGABgXAPQgQALgZgHQALgNgBgbQAQAKAVgFQAUgEANAJQgXgWgtgKQghgGg7gCQADghghADQA7gLBIAVQBdAcAkACQAKARAAANQAaAFAoAhQAlAeAkACQgDAOAKAEQADABAUABIAAAeIAeAAQAEAVAbAcQAaAaADAZQgRgCgDAMQACAJAJAAQAJgBAAgIQARAMALARQAQAWgOAJQAsAxANBfQAHA4AGBtQgHABgCAPQgDAOgIAAQABA7gQAzQgJAfgaBFQgcgfAWg9gADXhIQAAAFAEACQAEABACgIQAAgFgEgBIgCgBQgDAAgBAHgACxiMQgGAFAEADQACADAGgFQAFgEgDgEIgCgBQgDAAgDADgACdiJQAFADADgIQAAgIgJAAQgJgBgCAJIAAAAQAEAAAIAFgACdiqQgGAFAEADQACADAGgFQAFgFgDgDIgCgBQgDAAgDADgAhml8QgGAEAEAEQACADAGgFQAFgEgDgEIgCgBQgDAAgDADg");
	this.shape_48.setTransform(98.3,6.1,1,1,-12);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AkcCjQgFgKAXgJQARgGgPgFQABgIAFACQAEABAAAFIAIgdQAEgSASgNIAHgHQAGgEAHABQACgJgMgBQgCgMATgGQASgFgFgRQAJgCABAMQAIgBgCgEQgBgFgFAAQAGgNAggSQAcgQAEgWQANANAGgJQADgGAIgSQAMANAPgFQAQgGgDgWQAQgCAEAMQALgJAIgVQAQgCAEAMQAGAAABgHIADgNQAGAMAPgIQAOgIAFAOQAKgMAagDQAXgDALgWQAYAEAggIQAggIAWACQgEARAUAHQATAHgFATIgWgKQgRgGgBAQQgIgCADgFQAFgJAAgEQgEgMgIAIQgOANgEABQgPAEgnACQgpABgPADQgWAMg2AXQgxAVgYAOQgSAKgjAgQggAcgZAJQgTAtgfAPQgTAogMAQQgOASgRAAQgJAAgJgEgAjtBqQgHABAAAGIAMgCQAHgCABgGIgNADg");
	this.shape_49.setTransform(35.5,-10.8,1,1,-12);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_50.setTransform(106.2,72.1,1,1,-12);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgnARQADgWAagIQAPgEAjgFQgDAZgdAOQgOAGgLAAQgMAAgKgGg");
	this.shape_51.setTransform(97.3,75.9,1,1,-12);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_52.setTransform(94.3,73.6,1,1,-12);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_53.setTransform(97,72,1,1,-12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_54.setTransform(85.5,72.8,1,1,-12);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgDARQgCgJALgBQgCgHgEAAQgDACAAAFQgVgEANgLQALgNAQAJQAFAdgVAAIgDAAg");
	this.shape_55.setTransform(81,74.2,1,1,-12);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQAAgFAHgCg");
	this.shape_56.setTransform(94.7,68.4,1,1,-12);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgOAFQABgDAFgFQAEgGAAgFIATAAIAAAdQgPgKgOAAg");
	this.shape_57.setTransform(91.5,70.1,1,1,-12);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_58.setTransform(97.4,66.8,1,1,-12);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_59.setTransform(98.5,64.5,1,1,-12);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_60.setTransform(97.1,62.8,1,1,-12);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNAIQgEgKANgNQATAIgBAVQgHACgGAAQgLAAgDgIg");
	this.shape_61.setTransform(94.4,64.5,1,1,-12);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTAHQADgXAkAEQgBAYgKABIgcgGg");
	this.shape_62.setTransform(71.7,65.9,1,1,-12);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgCAJQgIgBgCgHQgDgHAGgBQAIgDAPAKQgIAJgHAAIgBAAg");
	this.shape_63.setTransform(46.8,71,1,1,-12);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgPAAQAZgjAKgTQAGACAJAIQAHAJAIABQgMAhgbAWQgWATgmAPQALgUAXgjg");
	this.shape_64.setTransform(104.6,62.2,1,1,-12);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_65.setTransform(60.2,67,1,1,-12);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgOAKQgDgNALgEQADgBASgBQgHATgVAAIgBAAg");
	this.shape_66.setTransform(89.3,59.8,1,1,-12);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgKANIAAgTQAJACABgMQAPgDgFAWQgCAOgIAAQgEAAgGgEg");
	this.shape_67.setTransform(75.4,63.5,1,1,-12);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_68.setTransform(100.8,56.4,1,1,-12);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_69.setTransform(55.9,65.9,1,1,-12);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_70.setTransform(53.8,65.9,1,1,-12);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_71.setTransform(32.9,70.7,1,1,-12);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgIAEADQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_72.setTransform(84.5,58.9,1,1,-12);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AkACLQAYgJgBgFIA8AAQAOgKAhgHQArgJAKgEQA3gVA8gqQAjgZBFgzQAHgKAdgmQAYgdAKgXQANABAGgBQAKgCABgIQALgCAFAGQADAFABALQgiAcgaA0IgwAmQgaAVgQAUQgOAFgkAZQgRAJgJAGQgPALABAOIiOAnQhUAVg1AAQgVgJASgHg");
	this.shape_73.setTransform(108.2,67.5,1,1,-12);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_74.setTransform(55.8,63.4,1,1,-12);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgOAKIAAgTIAdAAIAAATg");
	this.shape_75.setTransform(43.7,66.5,1,1,-12);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_76.setTransform(27.5,69.4,1,1,-12);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_77.setTransform(100.1,52.9,1,1,-12);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_78.setTransform(63,60.8,1,1,-12);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgLAKQgGgGANgPQATAEgBAHQAAAHgLAEIgIABQgEAAgCgCg");
	this.shape_79.setTransform(110.8,50.4,1,1,-12);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_80.setTransform(80,56.7,1,1,-12);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_81.setTransform(70.6,58.2,1,1,-12);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_82.setTransform(128,45.7,1,1,-12);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_83.setTransform(117.3,47.2,1,1,-12);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_84.setTransform(62.1,59,1,1,-12);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_85.setTransform(106.3,48.6,1,1,-12);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_86.setTransform(86.4,53.3,1,1,-12);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAFANQgdgPgFAAQACgPAbAEQAXADAHAIQgGARgKAAQgEAAgFgCg");
	this.shape_87.setTransform(40.5,63.4,1,1,-12);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_88.setTransform(78.4,54,1,1,-12);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgQAAQAXgUACgJQAdAJgRAZQgRAZgYAAQgOgPASgPg");
	this.shape_89.setTransform(52.3,60.5,1,1,-12);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_90.setTransform(127.2,41,1,1,-12);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgEAOQgMgXgNgBQABgDAFgGQAEgFAAgGIAfAXQAUAMgCAYIgJACQgRAAgIgRg");
	this.shape_91.setTransform(100.8,49.3,1,1,-12);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AACAGQgHgFgEAAQACgIAIABQAJAAAAAHQgCAGgDAAIgDgBg");
	this.shape_92.setTransform(79.9,51.5,1,1,-12);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_93.setTransform(64.8,54.8,1,1,-12);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_94.setTransform(38.2,60,1,1,-12);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_95.setTransform(55.6,55.2,1,1,-12);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgIAEIgBgSQAKgCAFAGQADAFABAKQgJgCgBAMQgHgBgBgKg");
	this.shape_96.setTransform(82.5,49.5,1,1,-12);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgKANIAAgTQAJACABgMQAPgDgFAWQgCAOgIAAQgEAAgGgEg");
	this.shape_97.setTransform(70,52.4,1,1,-12);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_98.setTransform(65.2,52.2,1,1,-12);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgMARQgQgGADgUQAQgQAUAIQAVAJgIAcIgPABQgOAAgHgEg");
	this.shape_99.setTransform(45.1,58,1,1,-12);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_100.setTransform(40.8,57.4,1,1,-12);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgZAPQgEggAfgFQAegEgIApQgEAAgWAHIgFABQgJAAgJgIg");
	this.shape_101.setTransform(107.5,44.2,1,1,-12);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgJgOQAUAIgBAVQgTgHAAgWg");
	this.shape_102.setTransform(31.5,59.4,1,1,-12);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_103.setTransform(81.4,46.7,1,1,-12);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAFgJQACAQgLADQgCgQALgDg");
	this.shape_104.setTransform(125.3,36.8,1,1,-12);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBAAg");
	this.shape_105.setTransform(83.3,45.8,1,1,-12);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgCALQgQgOgBgPQAMACAKAKIARARQgDAIgGAAQgGAAgHgIg");
	this.shape_106.setTransform(71.2,49.3,1,1,-12);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgEANQgNgHgHgDQADgQALgGQAKgGALAFQAMAFACAMQACAMgMAOQgIgCgLgIg");
	this.shape_107.setTransform(49.4,54.7,1,1,-12);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_108.setTransform(44,53.6,1,1,-12);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgJAWQgWgJAIgbQAQACAEgMQAQgCAHAOIAGAbQgKAKgNAAQgFAAgHgDg");
	this.shape_109.setTransform(101.8,42.4,1,1,-12);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUAXQgSgcAZgNQAYgOASAaQgJARgIAGQgJAHgNAAIgKgBg");
	this.shape_110.setTransform(91.8,44.7,1,1,-12);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgJAWQgWgJAIgbQAQACAEgMQAQgCAHAOIAGAbQgKAKgNAAQgFAAgHgDg");
	this.shape_111.setTransform(58.8,51.5,1,1,-12);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgIAGQACgbgBgDQASAEgBAPQgBAHgHAXIgCAAQgKAAACgTg");
	this.shape_112.setTransform(116.7,38.2,1,1,-12);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_113.setTransform(93.7,40,1,1,-12);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgCALQgagCALgTQAMgCAKAFIARAHQACAMgUAAIgGgBg");
	this.shape_114.setTransform(77.1,44.1,1,1,-12);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAAAMQgJgHgFAAQgCgJAQgIQAPgJAAARIAAATIgEABQgHAAgEgEg");
	this.shape_115.setTransform(72,45.6,1,1,-12);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_116.setTransform(54.2,48.4,1,1,-12);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_117.setTransform(52.3,49.3,1,1,-12);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_118.setTransform(50.3,49.2,1,1,-12);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgZAOQgEggAfgFQAegEgIApQgJAKgPAAQgPAAgKgKg");
	this.shape_119.setTransform(38.8,52.8,1,1,-12);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgFAoQgDgDgFgOQgEgMgIgBQAGgHASgHQANgKgIgZQAQANAFAUQAEARgFAdg");
	this.shape_120.setTransform(33.3,55.4,1,1,-12);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgOgDQACgJAMABQAMABADAHQAHAPgVAAIgBAAQgTAAAFgPg");
	this.shape_121.setTransform(117.5,33.8,1,1,-12);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgYATIAAgdQAKgJAOAAQAPAAAKAJQADAVgQAGQgHADgOAAIgPgBg");
	this.shape_122.setTransform(109.8,36.1,1,1,-12);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_123.setTransform(91.9,38.3,1,1,-12);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgLACQAKgMAGABQAGABABAIQAAAHgGACIgDABQgFAAgJgIg");
	this.shape_124.setTransform(55.5,46.4,1,1,-12);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_125.setTransform(35.2,50.4,1,1,-12);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgHAHIgCgVQATAHAAAWIgGAAQgIAAgDgIg");
	this.shape_126.setTransform(31,52.3,1,1,-12);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_127.setTransform(94.6,36.7,1,1,-12);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_128.setTransform(52.1,45.8,1,1,-12);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_129.setTransform(117.4,30.9,1,1,-12);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_130.setTransform(55.8,44,1,1,-12);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgOAZQgKgJAAgQQAAgOAKgKQAVgEAJANQAFAIAEAWQgJAAgLAGQgHAFgIAAIgEgBg");
	this.shape_131.setTransform(44,48.5,1,1,-12);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_132.setTransform(112.4,31.4,1,1,-12);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgSAIQgFgTAOgNQAXgFAFAWQAEATgNANIgIABQgQAAgEgSg");
	this.shape_133.setTransform(61.9,43.7,1,1,-12);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgUAEQgCgRAMgLIAdAAQAFAUgIAMIgQARQgSAAgCgVg");
	this.shape_134.setTransform(103.8,33.7,1,1,-12);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_135.setTransform(91,34.4,1,1,-12);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgYAZIAAgxQAfgEASAOQgDAognAAIgHgBg");
	this.shape_136.setTransform(86.6,37.4,1,1,-12);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_137.setTransform(54.4,42.2,1,1,-12);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_138.setTransform(46.1,44,1,1,-12);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAAAQQgTgMgKgDQAHgTAbAAQAeAAgFAdQgIAIgKAAQgGAAgGgDg");
	this.shape_139.setTransform(31.3,48.6,1,1,-12);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_140.setTransform(92.8,33,1,1,-12);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_141.setTransform(58.2,40.8,1,1,-12);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_142.setTransform(43.9,43.4,1,1,-12);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_143.setTransform(31.8,44,1,1,-12);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgLAMQgSgJAAgWQAgAAAMAFQATAIgEAaQgdgBgMgHg");
	this.shape_144.setTransform(107.7,28.3,1,1,-12);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgIgSQAcgIAQAKQAAAXgYAIIgtAIQgIgfAhgKg");
	this.shape_145.setTransform(37.8,43.9,1,1,-12);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgYAJQgCgJABgYIAxAAQAHAWgOAJQgVAQgBACQgPgBgEgPg");
	this.shape_146.setTransform(56.1,37.8,1,1,-12);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgiAAQAAgOAKgKQAegFgBAZQAGABAOgGQAIgEACAJQgCAOgTADQgaADgMAJQgKgJAAgQg");
	this.shape_147.setTransform(48.2,39.4,1,1,-12);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgIAEADQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_148.setTransform(32.7,41.3,1,1,-12);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgPgPQAVgVAUAXQgCAmglABQgXgUAVgVg");
	this.shape_149.setTransform(96.7,28,1,1,-12);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgPgPQAUgVAVAXQgDAmgkABQgXgUAVgVg");
	this.shape_150.setTransform(87.9,29.9,1,1,-12);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_151.setTransform(37.4,36.6,1,1,-12);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgVBaQgKgNgBgQQAJgLAQgGQAOgFAKgSQgigLANglQARg6gGgXQAXgHACAdQABAQgGAgQgCANACAdQACAdgCAIQAAADgPAaQgOAcAAANIgTgVg");
	this.shape_152.setTransform(125.9,26.4,1,1,-12);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_153.setTransform(92.7,22.8,1,1,-12);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_154.setTransform(88.7,23.7,1,1,-12);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_155.setTransform(58.1,30.6,1,1,-12);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_156.setTransform(18,36.7,1,1,-12);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgjA7QABgcAdgfQAcgfABgdQAVAmgQAsQgOAnghAAQgIAAgJgCg");
	this.shape_157.setTransform(116.8,20.4,1,1,-12);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBgBg");
	this.shape_158.setTransform(105.8,17.5,1,1,-12);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgCAJQgHgCgCgHQgCgHAGgCQAHgBAMALQgGAJgGAAIgCgBg");
	this.shape_159.setTransform(95.3,19.6,1,1,-12);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_160.setTransform(47.5,28.9,1,1,-12);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgOAKQgDgNALgDQADgCASgBIAAATg");
	this.shape_161.setTransform(41.1,30.2,1,1,-12);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_162.setTransform(94.5,17.3,1,1,-12);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgOAKQgDgNALgEQADgBASgBQgHATgVAAIgBAAg");
	this.shape_163.setTransform(54.6,26.3,1,1,-12);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_164.setTransform(91,17.5,1,1,-12);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgdgJQAGACAIAIQAJAIAGABQACgPgLgEQAEgYAjAEQgHAbgNANQgNARgaACg");
	this.shape_165.setTransform(103,16,1,1,-12);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADACQAEABAAAEQgBAHgDAAIgBAAg");
	this.shape_166.setTransform(48.3,25.6,1,1,-12);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_167.setTransform(93,15.1,1,1,-12);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_168.setTransform(60.5,20.5,1,1,-12);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_169.setTransform(77.9,15.7,1,1,-12);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgOgPIAUAJQANAFgEAPIgNACQgXAAAHgfg");
	this.shape_170.setTransform(56.6,21.4,1,1,-12);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgOgDQACgJAMABQAMABADAHQAHAPgVAAIgBAAQgTAAAFgPg");
	this.shape_171.setTransform(45.9,23.5,1,1,-12);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgDgCIASgCQgBAGgKACIgSABQABgGAKgBg");
	this.shape_172.setTransform(41.7,23.4,1,1,-12);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_173.setTransform(91,12.5,1,1,-12);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgOAoQgHgXARgRQAPgQgGgXQAQAMgGAjQgFAggTAAIgFAAg");
	this.shape_174.setTransform(114.4,9.5,1,1,-12);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_175.setTransform(78.5,13.6,1,1,-12);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_176.setTransform(69.7,15.5,1,1,-12);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgTAeQgCgMAGgEQAFgDAKgBQABgIgFgKQgGgLABgKQAPAKAOAAIAAAxg");
	this.shape_177.setTransform(51.1,22,1,1,-12);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_178.setTransform(45.9,20.3,1,1,-12);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_179.setTransform(47.8,18.6,1,1,-12);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgbAZIAYgZQANgPAMgJQAOAJgVAUQgSAUgVAAIgDAAg");
	this.shape_180.setTransform(38.6,22.1,1,1,-12);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_181.setTransform(7.6,26.6,1,1,-12);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAAAwQgKgUgEAMQgMgLgEgSQgFgTALgLQAVAIgBAVQASgMgQgVQgMgPgUgLQANgSAVAQQAcAWAHAAQgSAUgDAQQgFAUAQAXQgGAKgGAAQgGAAgHgMg");
	this.shape_182.setTransform(82.9,15.2,1,1,-12);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgCAKQgVgEALgQQAJgCAGAFQAIAHAGAAQACALgNAAIgIgBg");
	this.shape_183.setTransform(51.4,16.9,1,1,-12);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgVAFQgGgpAegSQACANALAeQAJAfgCAjQglgJgHgpg");
	this.shape_184.setTransform(16.5,28.8,1,1,-12);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgxAfQAOgOAfgUQAfgXANgMQATALgUAQIgcAWIgcAXQgHAFgHAAQgJAAgJgIg");
	this.shape_185.setTransform(34.8,22.3,1,1,-12);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADACQAEABAAAEQgBAHgDAAIgBAAg");
	this.shape_186.setTransform(32.7,19.7,1,1,-12);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQACgHADABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_187.setTransform(101,4.2,1,1,-12);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAUAgIgCgWQgKAKgJgFQgPgIgPADQgFgbgBgJQgBgMAbgBQAAAIgGALQgGALACAJQAJAAAKgEQAKgGAKABQABAHALAPQAJANgBAOIgGAAQgJAAgDgIg");
	this.shape_188.setTransform(99.4,7.6,1,1,-12);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgEARQAGgKAAgCQAAgFgQAAQALgMgBgbQANAMAFAaQAFAagOAPQgZgDAQgUg");
	this.shape_189.setTransform(93.7,8.8,1,1,-12);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAAALQgJgGgFAAQAIgUAVABIAAAdIgEAAQgGAAgFgEg");
	this.shape_190.setTransform(82.5,8.6,1,1,-12);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgPALQgKgKABgPQAKgKAOAAQAPAAAKAKQAEAOgMAIQgMAIAAAJQgRgKgDgEg");
	this.shape_191.setTransform(72,11.9,1,1,-12);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_192.setTransform(52,14.1,1,1,-12);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgYAZQgEgeAOgTQAWgEAJANQAFAIADAWQgOALgVAAIgOgBg");
	this.shape_193.setTransform(62.9,12.8,1,1,-12);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_194.setTransform(50.6,12.4,1,1,-12);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_195.setTransform(95,2.4,1,1,-12);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgIAFADQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_196.setTransform(82.3,5.2,1,1,-12);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_197.setTransform(41.2,13.8,1,1,-12);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_198.setTransform(98,1,1,1,-12);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_199.setTransform(90.8,2.3,1,1,-12);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_200.setTransform(84.9,3.4,1,1,-12);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEABQAEACAAAEQgBAHgDAAIgBgBg");
	this.shape_201.setTransform(67.9,7.1,1,1,-12);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgKANIAAgTQAJACABgMQAPgDgFAWQgCAOgIAAQgEAAgGgEg");
	this.shape_202.setTransform(47.1,12.2,1,1,-12);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgJAKQgPgMAGgbQAiARAFAqQgVgMgJgIg");
	this.shape_203.setTransform(38.4,15.5,1,1,-12);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgHAAQABgJAHAAQAGAJABACQABAGgIACQgIgCAAgIg");
	this.shape_204.setTransform(34.1,14.3,1,1,-12);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAAgJIgLAMQgHAJgLgCQACgMAKgKIARgRQACAGARAUQANAOgCATIgGAAQgcAAAEgng");
	this.shape_205.setTransform(102.8,0.7,1,1,-12);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_206.setTransform(105,-3.3,1,1,-12);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_207.setTransform(90.3,-0.2,1,1,-12);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgVAYQALgeAOgCQgBgVABgKQACgPASAGQAAAUgRAcQgPAYADAbIgFAAQgUAAAJgbg");
	this.shape_208.setTransform(86.9,5.1,1,1,-12);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgOALQgLgVAZAAQAaAAgLAVg");
	this.shape_209.setTransform(38.1,11.3,1,1,-12);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_210.setTransform(62.3,4.8,1,1,-12);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_211.setTransform(47.6,7.9,1,1,-12);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgOAPIAAgdQAJgBAGAFQAJAGAFAAIgFAJQgFAFAAAFg");
	this.shape_212.setTransform(93.5,-1.9,1,1,-12);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgLASQgQgGADgVQATgOAeAEIAAAnIgPABQgOAAgHgDg");
	this.shape_213.setTransform(56.5,6.5,1,1,-12);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgQgCQAQgOAKAEQAIADgBAKQgCALgJABIgBAAQgJAAgMgPg");
	this.shape_214.setTransform(40.9,9.1,1,1,-12);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgOAZQgKgKAAgPQAAgOAKgKQAlACACAlQgMAKgVAAIgGAAg");
	this.shape_215.setTransform(74,2.3,1,1,-12);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_216.setTransform(67.7,1.6,1,1,-12);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgnCyIgOhCQgIglgIgTQAKgjABhFQACgzgDgsIAUAAQABgOgBgGQgCgJgIgBQAFgJATgeQAOgagIgFQAJgCAKgYQAHgUAXAGQg4BugHCWQgICiA9BhQANgCAGgOQAGgRAFgHQARAEgBAXQgCAWAGABIgeAJQgPAGgFAZQgpgbgShRg");
	this.shape_217.setTransform(16.3,41,1,1,-12);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgTAGQADgYAkAFQADAVgQAFQgEACgEAAQgKAAgIgJg");
	this.shape_218.setTransform(88.7,-3,1,1,-12);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_219.setTransform(71.2,-1.2,1,1,-12);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_220.setTransform(65.4,0,1,1,-12);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_221.setTransform(57.5,1.7,1,1,-12);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgIAEADQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_222.setTransform(53.3,3.2,1,1,-12);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgIAFADQAHAFAEAAQgCAHgIAAIAAAAg");
	this.shape_223.setTransform(89,-6.4,1,1,-12);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_224.setTransform(97,-9.8,1,1,-12);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_225.setTransform(85,-8.3,1,1,-12);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgTAPIAHgNQAEgHgBgJIATAAQgCAJAMABQgDATgZAAIgLAAg");
	this.shape_226.setTransform(35.9,3.2,1,1,-12);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AAAAMQgJgHgFAAQgCgJAQgIQAPgJAAARIAAATIgEABQgHAAgEgEg");
	this.shape_227.setTransform(89.9,-9.4,1,1,-12);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgTAUQgGgtAtAGIAAAng");
	this.shape_228.setTransform(68,-4.2,1,1,-12);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgHATQgWgFAFgXQANgNATAEQAWAFgFAXQgKAKgNAAIgJgBg");
	this.shape_229.setTransform(59.7,-2.4,1,1,-12);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_230.setTransform(56.3,-4.2,1,1,-12);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_231.setTransform(90.1,-13.4,1,1,-12);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgNAjQgFgZAHgRQAEgKANgRQAQAJgIAeQgIAegRAAIgCAAg");
	this.shape_232.setTransform(75,-7.2,1,1,-12);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgVgiQAggBAJAdQAJAbgVAOQghgOAEg3g");
	this.shape_233.setTransform(52.3,-2.3,1,1,-12);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgbgOQATgOAeAEQAHAVgCAGIgPAWQglgBgCgmg");
	this.shape_234.setTransform(58.8,-7.9,1,1,-12);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAEgEADACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_235.setTransform(90.2,-17.5,1,1,-12);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgRAMQgPgJgDgRQAKALAWgPQAWgOAPASQAEAOgLAIQgNAIAAAJQgVgGgKgHg");
	this.shape_236.setTransform(66.3,-10.4,1,1,-12);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_237.setTransform(34.5,-5.7,1,1,-12);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgIAEADQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_238.setTransform(50.4,-10.5,1,1,-12);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgGATQgtgGgDgWQAegNAiADQAnADAGAaQgOALgZAAQgLAAgLgCg");
	this.shape_239.setTransform(41.2,-7.6,1,1,-12);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AhTA7QAMgOAQABQAUABAMgIQgHgggBgNQgDgXALgVQAeAEATgOQgbghAggaQANgLAPACQARABAKARQgtAlglBHQgGAMgzB3QgmgLAIg7gAg/BPQAAAFAEACQAEABACgIQAAgFgEgBIgCAAQgDAAgBAGg");
	this.shape_240.setTransform(22.9,7.6,1,1,-12);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgGARQgKgKgMgCQgEgOALgIQANgJAAgIQAJABAKAOQAKANAKACQAAAIgNAIQgLAIAEAPIgRgSg");
	this.shape_241.setTransform(99.4,-19.5,1,1,-12);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAnAPQgXgHgKACIgoABQgZAAAGgUQAVgKAgAHIA4AMQgFAQgJAAIgDgBg");
	this.shape_242.setTransform(83,-17.5,1,1,-12);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_243.setTransform(47.1,-11.4,1,1,-12);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_244.setTransform(61.1,-15.4,1,1,-12);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_245.setTransform(76.5,-19.7,1,1,-12);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgHgHIAbgHQACAQgOAHIgbAGQgCgQAOgGg");
	this.shape_246.setTransform(56.6,-14.5,1,1,-12);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgTgOIAnAAQAGAdgaAAQgZAAAGgdg");
	this.shape_247.setTransform(51.7,-13.5,1,1,-12);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgGAIQgPgIACgTQAIAHAJACQALABABgKQAJACABAOIAAAXIgagMg");
	this.shape_248.setTransform(65.3,-16.9,1,1,-12);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAEgEADACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_249.setTransform(72.2,-20.9,1,1,-12);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_250.setTransform(59.9,-18.3,1,1,-12);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgEAFQgDgEAFgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_251.setTransform(67.1,-20.8,1,1,-12);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQADADgFAEQgDADgCAAIgCgBg");
	this.shape_252.setTransform(64.9,-21.4,1,1,-12);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.rf(["#FFF33B","#F6D955","#EFC768","#EBBC73","#EAB877","#DA9087","#CD6C8F","#BE2F92"],[0,0.067,0.133,0.204,0.278,0.671,0.89,1],0,0,0,0,0,4.5).s().p("AgfAgQgOgNAAgTQAAgSAOgNQANgNASAAQATAAANANQANANAAASQAAATgNANQgNANgTAAQgSAAgNgNg");
	this.shape_253.setTransform(71,3.6,0.998,0.998,-12);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgTAdQgMgIgCgPQgDgNAJgMQAIgMAOgCQANgDAMAJQAMAIACAOQADANgIAMQgJAMgOACQgNADgMgIg");
	this.shape_254.setTransform(80.9,1.7,0.998,0.998,-12);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#231F20").s().p("AgTAdQgMgIgCgPQgDgNAJgMQAIgMAOgCQANgDAMAJQAMAIACAOQADANgIAMQgJAMgOACIgGABQgKAAgJgGg");
	this.shape_255.setTransform(80.9,1.7,0.998,0.998,-12);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgTAdQgMgIgCgPQgDgNAJgMQAIgMAOgCQANgDAMAJQAMAIADAOQACANgIAMQgJAMgOACQgNADgMgIg");
	this.shape_256.setTransform(64.2,-2.8,0.998,0.998,-12);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#231F20").s().p("AgTAdQgMgIgCgPQgDgNAJgMQAHgMAPgCQANgDAMAJQAMAIADAOQACANgIAMQgJAMgOACIgGABQgKAAgJgGg");
	this.shape_257.setTransform(64.2,-2.8,0.998,0.998,-12);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgTAdQgMgIgCgPQgDgNAJgMQAIgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgIAMgPACQgNADgMgIg");
	this.shape_258.setTransform(73.2,-5.1,0.998,0.998,-12);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#231F20").s().p("AgTAdQgMgIgCgPQgDgNAJgMQAIgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgIAMgPACIgGABQgKAAgJgGg");
	this.shape_259.setTransform(73.2,-5.1,0.998,0.998,-12);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.rf(["#FFF7A9","#FFF100","#FFD700"],[0,0.498,1],0,0,0,0,0,4.5).s().p("AgdAiQgOgNgCgSQgBgSANgOQANgOATgBQARgBAOAMQAOANABASQABASgMAOQgNAOgSABIgDAAQgQAAgNgLg");
	this.shape_260.setTransform(71.1,3.6,0.998,0.998,-12);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#00FFFF").ss(1,0,0,4).p("AghAHQgGgZAGgVQAGgVAPgDQANgDAOARQAOAQAFAbQAGAZgGAVQgGAVgOADQgOADgOgRQgOgQgFgbg");
	this.shape_261.setTransform(55.5,-5.2,0.998,0.998,-12);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#231F20").s().p("AgOAyQgOgQgFgbQgGgZAGgVQAHgVAOgDQANgDAOARQAOAQAFAbQAGAZgGAVQgGAVgOADIgFAAQgLAAgMgOg");
	this.shape_262.setTransform(55.5,-5.2,0.998,0.998,-12);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgTAcQgMgIgCgOQgDgNAJgMQAIgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgJAMgOACQgNADgMgJg");
	this.shape_263.setTransform(61.3,6.7,0.998,0.998,-12);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#231F20").s().p("AgTAcQgMgIgCgOQgDgNAJgMQAIgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgJAMgOACIgGABQgKAAgJgHg");
	this.shape_264.setTransform(61.3,6.7,0.998,0.998,-12);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgVAbQgLgJgCgOQgBgNAJgMQAJgLAOgCQANgBAMAJQALAJACAOQABAOgJALQgJALgOACQgNABgMgJg");
	this.shape_265.setTransform(67.4,12.3,0.998,0.998,-12);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#231F20").s().p("AgVAbQgLgJgCgOQgBgNAJgMQAJgLAOgCQANgBAMAJQALAJACAOQABAOgJALQgJALgOACIgEAAQgLAAgKgIg");
	this.shape_266.setTransform(67.4,12.3,0.998,0.998,-12);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgTAcQgMgIgCgOQgDgNAIgMQAJgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgIAMgPACQgNADgMgJg");
	this.shape_267.setTransform(77.2,10.7,0.998,0.998,-12);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#231F20").s().p("AgTAcQgMgIgCgOQgDgNAIgMQAJgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgIAMgPACIgGABQgKAAgJgHg");
	this.shape_268.setTransform(77.2,10.7,0.998,0.998,-12);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgTAdQgMgIgCgPQgDgNAIgMQAJgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgJAMgOACQgNADgMgIg");
	this.shape_269.setTransform(71.7,-13.3,0.998,0.998,-12);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#231F20").s().p("AgTAdQgMgIgCgPQgDgNAIgMQAJgMAOgCQANgDAMAIQAMAJACAOQADANgIAMQgJAMgOACIgGABQgKAAgJgGg");
	this.shape_270.setTransform(71.7,-13.3,0.998,0.998,-12);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgTAdQgMgJgCgOQgDgNAIgMQAJgMAOgCQANgDAMAIQAMAIACAPQADANgJAMQgIAMgOACQgNADgMgIg");
	this.shape_271.setTransform(63.9,-11.2,0.998,0.998,-12);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#231F20").s().p("AgTAdQgMgJgCgOQgDgNAIgMQAJgMAOgCQANgDAMAIQAMAIACAPQADANgJAMQgIAMgOACIgGABQgKAAgJgGg");
	this.shape_272.setTransform(63.9,-11.2,0.998,0.998,-12);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#00FFFF").ss(1,0,0,4).p("AgPBDQgOgDgFgWQgFgXAGgaQAHgcAPgRQANgSAOAEQAOADAFAWQAGAWgHAbQgHAcgOARQgOASgOgEg");
	this.shape_273.setTransform(82.3,-10.2,0.998,0.998,-12);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#231F20").s().p("AgPBDQgOgDgFgWQgFgXAGgaQAHgcAPgRQANgSAOAEQAOADAFAWQAGAWgHAbQgHAcgOARQgNAPgLAAIgEgBg");
	this.shape_274.setTransform(82.3,-10.2,0.998,0.998,-12);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgPgeQAMgHAOAFQANAFAHAMQAHANgFANQgFAOgMAGQgNAHgNgFQgNgEgHgNQgHgNAFgNQAEgNANgHg");
	this.shape_275.setTransform(97.9,46,0.998,0.998,-12);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#231F20").s().p("AgKAhQgNgEgHgNQgGgNAEgNQAEgNANgHQAMgHANAFQAPAFAGAMQAHANgFANQgEAOgNAGQgIAEgIAAQgEAAgGgCg");
	this.shape_276.setTransform(97.9,46,0.998,0.998,-12);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgPgeQANgHANAFQANAEAHANQAGANgEANQgEANgNAHQgNAHgNgFQgOgFgGgNQgHgMAFgNQAEgOANgGg");
	this.shape_277.setTransform(109.8,33.4,0.998,0.998,-12);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#231F20").s().p("AgKAhQgOgFgGgNQgHgMAFgNQAEgOANgGQANgHANAFQANAEAHANQAGANgEANQgEANgNAHQgIAEgIAAQgEAAgGgCg");
	this.shape_278.setTransform(109.8,33.4,0.998,0.998,-12);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgPgeQANgHANAFQANAEAHANQAHANgFANQgEANgNAHQgNAGgNgEQgNgEgHgNQgHgNAFgNQAFgOAMgGg");
	this.shape_279.setTransform(107.6,42.5,0.998,0.998,-12);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#231F20").s().p("AgKAhQgNgEgHgNQgHgNAFgNQAFgOAMgGQANgHANAFQANAEAHANQAHANgFANQgEANgNAHQgIAEgIAAIgKgCg");
	this.shape_280.setTransform(107.6,42.5,0.998,0.998,-12);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.rf(["#FFF7A9","#FFF100","#FFD700"],[0,0.498,1],0,0,0,0,0,4.5).s().p("AgSApQgRgIgHgRQgGgRAIgRQAIgRARgGQARgHARAIQARAIAHARQAGARgIARQgIARgRAHQgIACgIAAQgJAAgJgEg");
	this.shape_281.setTransform(100.9,36.5,0.998,0.998,-12);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#00FFFF").ss(1,0,0,4).p("AAKghQAaAHAPAQQAQAOgEAOQgEAOgWAFQgVAFgZgIQgZgHgQgQQgQgOAEgOQAEgOAWgFQAVgEAZAHg");
	this.shape_282.setTransform(116,26.9,0.998,0.998,-12);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#231F20").s().p("AgJAiQgZgHgQgQQgQgOAEgOQAEgOAWgFQAVgEAZAHQAaAHAPAQQAQAOgEAOQgEAOgWAFQgIACgJAAQgOAAgPgFg");
	this.shape_283.setTransform(116,26.9,0.998,0.998,-12);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgPgeQANgHANAFQANAEAHANQAHANgFANQgEANgNAHQgNAHgNgFQgOgFgGgNQgHgMAFgNQAEgOANgGg");
	this.shape_284.setTransform(102.8,26.4,0.998,0.998,-12);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#231F20").s().p("AgKAhQgOgEgGgNQgHgNAFgNQAEgOANgGQANgHANAFQANAEAHANQAHANgFANQgEANgNAHQgIAEgIAAQgEAAgGgCg");
	this.shape_285.setTransform(102.8,26.4,0.998,0.998,-12);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgNgfQANgGANAFQANAGAGANQAGANgFANQgGAOgNAFQgNAGgNgFQgNgGgGgNQgFgNAFgNQAFgNANgGg");
	this.shape_286.setTransform(95,29.1,0.998,0.998,-12);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#231F20").s().p("AgMAgQgNgFgGgNQgFgNAFgNQAFgNANgGQANgFANAEQANAGAGANQAGANgFANQgGANgNAGQgHADgHAAQgGAAgGgDg");
	this.shape_287.setTransform(95,29.1,0.998,0.998,-12);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgOgeQAMgHANAFQANAEAHANQAHANgFANQgEANgNAHQgMAGgNgEQgOgEgHgNQgHgNAFgNQAFgOANgGg");
	this.shape_288.setTransform(91.8,38.5,0.998,0.998,-12);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#231F20").s().p("AgKAhQgNgEgHgNQgGgNAEgNQAFgOANgGQAMgHANAFQANAEAHANQAHANgFANQgFANgMAHQgIAEgIAAIgKgCg");
	this.shape_289.setTransform(91.8,38.5,0.998,0.998,-12);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgPgeQANgHANAFQAOAFAGAMQAHANgFANQgEAOgNAGQgNAHgNgFQgOgEgGgNQgHgNAFgNQAFgNAMgHg");
	this.shape_290.setTransform(115.5,44.9,0.998,0.998,-12);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#231F20").s().p("AgKAhQgOgEgGgNQgHgNAFgNQAFgNAMgHQANgHANAFQAOAFAGAMQAHANgFANQgEAOgNAGQgIAEgIAAQgEAAgGgCg");
	this.shape_291.setTransform(115.5,44.9,0.998,0.998,-12);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgPgeQANgHANAFQAOAEAGANQAHANgFANQgEAOgNAGQgNAHgNgFQgOgEgGgNQgHgNAFgNQAEgOANgGg");
	this.shape_292.setTransform(117.4,37.1,0.998,0.998,-12);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#231F20").s().p("AgKAhQgOgEgGgNQgHgNAFgNQAEgOANgGQANgHANAFQAOAEAGANQAHANgFANQgEAOgNAGQgIAEgIAAQgFAAgFgCg");
	this.shape_293.setTransform(117.4,37.1,0.998,0.998,-12);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#00FFFF").ss(1,0,0,4).p("AgzgtQAKgLAWAGQAVAGAVATQAWATAIAUQAIAVgJALQgKALgWgGQgVgGgVgTQgWgTgIgVQgIgVAJgKg");
	this.shape_294.setTransform(107.7,52.9,0.998,0.998,-12);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#231F20").s().p("AAUAzQgVgGgVgTQgWgTgIgVQgIgUAJgLQAKgLAWAGQAVAGAVATQAWATAIAUQAIAVgJALQgGAHgMAAQgGAAgIgCg");
	this.shape_295.setTransform(107.7,52.9,0.998,0.998,-12);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjAAQAAAOgKALQgKAKgPAAQgNAAgLgKQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKALAAANg");
	this.shape_296.setTransform(50.2,38.7,0.998,0.998,-12);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#231F20").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKALAAANQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape_297.setTransform(50.2,38.7,0.998,0.998,-12);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjAAQAAAOgKAKQgLALgOAAQgNAAgLgLQgKgKAAgOQAAgNAKgLQALgKANAAQAPAAAKAKQAKALAAANg");
	this.shape_298.setTransform(56.1,55,0.998,0.998,-12);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#231F20").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_299.setTransform(56.1,55,0.998,0.998,-12);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjAAQAAAOgKALQgKAKgPAAQgNAAgKgKQgLgLAAgOQAAgNALgKQAKgLANAAQAPAAAKALQAKAKAAANg");
	this.shape_300.setTransform(48.9,49,0.998,0.998,-12);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#231F20").s().p("AgXAZQgLgKAAgPQAAgNALgLQAKgKANAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgNAAgKgKg");
	this.shape_301.setTransform(48.9,49,0.998,0.998,-12);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.rf(["#FFF7A9","#FFF100","#FFD700"],[0,0.498,1],0,0,0,0,0,4.5).s().p("AgEAtQgTgCgMgPQgLgPACgRQACgTAPgMQAPgLARACQATACAMAPQALAOgCASQgCATgPALQgMAKgPAAIgFAAg");
	this.shape_302.setTransform(57.3,45.7,0.998,0.998,-12);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#00FFFF").ss(1,0,0,4).p("AAaAYQgTAUgTAHQgVAHgKgKQgLgKAFgVQAGgUASgUQATgUATgHQAVgGAKAJQALAKgFAVQgGAUgSAUg");
	this.shape_303.setTransform(59,63.5,0.998,0.998,-12);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#231F20").s().p("AgrAwQgLgKAFgVQAGgUASgUQATgUATgHQAVgGAKAJQALAKgFAVQgGAUgSAUQgTAUgTAHQgJADgGAAQgKAAgGgGg");
	this.shape_304.setTransform(59,63.5,0.998,0.998,-12);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjAAQAAAOgKAKQgLALgOAAQgNAAgLgLQgKgKAAgOQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANg");
	this.shape_305.setTransform(65.5,52,0.998,0.998,-12);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#231F20").s().p("AgYAYQgKgJAAgPQAAgOAKgKQAKgKAOAAQAPAAAKAKQAKAKAAAOQAAAPgKAJQgKALgPAAQgOAAgKgLg");
	this.shape_306.setTransform(65.5,52,0.998,0.998,-12);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjACQgBAOgLAKQgKAKgOgBQgOgBgKgLQgJgLAAgNQABgPALgJQALgKANABQAPABAJALQAKALgBANg");
	this.shape_307.setTransform(66.6,43.8,0.998,0.998,-12);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#231F20").s().p("AgBAjQgOgBgKgLQgJgLAAgNQABgPALgJQALgKANABQAPABAJALQAKALgBANQgBAOgLAKQgJAJgNAAIgCAAg");
	this.shape_308.setTransform(66.6,43.8,0.998,0.998,-12);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjAAQAAAOgKALQgLAKgOAAQgNAAgLgKQgKgLAAgOQAAgOAKgKQALgKANAAQAOAAALAKQAKAKAAAOg");
	this.shape_309.setTransform(59.7,36.7,0.998,0.998,-12);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#231F20").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKAKAAAOQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape_310.setTransform(59.7,36.7,0.998,0.998,-12);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjAAQAAAPgLAKQgKAKgOAAQgNAAgLgKQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANg");
	this.shape_311.setTransform(43.2,54.9,0.998,0.998,-12);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#231F20").s().p("AgYAYQgKgJAAgPQAAgOAKgKQALgKANAAQAOAAAKAKQALAKAAAOQAAAPgLAJQgKALgOAAQgNAAgLgLg");
	this.shape_312.setTransform(43.2,54.9,0.998,0.998,-12);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAjAAQAAAOgKAKQgLALgOAAQgNAAgKgLQgLgKAAgOQAAgNALgLQAKgKANAAQAOAAALAKQAKALAAANg");
	this.shape_313.setTransform(49.3,60.1,0.998,0.998,-12);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#231F20").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAAOgKAKQgLALgOAAQgNAAgLgLg");
	this.shape_314.setTransform(49.3,60.1,0.998,0.998,-12);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#00FFFF").ss(1,0,0,4).p("ABAgYQAGANgQAQQgPARgbAKQgZALgXgCQgWgCgGgOQgFgNAPgQQAPgRAbgLQAagKAWACQAXACAFAOg");
	this.shape_315.setTransform(39.6,44.4,0.998,0.998,-12);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#231F20").s().p("AgkApQgWgCgGgOQgFgNAPgQQAPgRAbgLQAagKAWACQAXACAFAOQAGANgQAQQgPARgbAKQgVAJgTAAIgIAAg");
	this.shape_316.setTransform(39.6,44.4,0.998,0.998,-12);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#00FFFF").ss(2,0,0,4).p("ACRAAIhIh9IiRAAIhIB9IBIB+ICRAAg");
	this.shape_317.setTransform(76.3,28.4,0.998,0.998,-12);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#231F20").s().p("AhIB9IhIh9IBIh8ICQAAIBJB8IhJB9g");
	this.shape_318.setTransform(76.3,28.4,0.998,0.998,-12);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#00FFFF").ss(2,0,0,4).p("AgMAQQgPgPgJgWIgFgUIAUAFQAWAIAPAQQAPAOAJAXQAEALABAJQgIgBgMgFQgXgIgOgPg");
	this.shape_319.setTransform(124.4,43.8,0.998,0.998,-12);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AAYAmQgXgIgPgPQgPgPgIgXIgGgUIAVAGQAWAIAPAPQAPAPAIAXQAFALABAJQgJgCgLgEg");
	this.shape_320.setTransform(124.5,43.9,0.998,0.998,-12);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#00FFFF").ss(2,0,0,4).p("AAOAOQgOAQgXAIIgVAFQACgIAEgMQAIgXAQgOQAOgPAXgJQAMgEAIgBIgFAUQgJAXgPAOg");
	this.shape_321.setTransform(40.6,63.9,0.998,0.998,-12);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgmAYQAJgXAQgPQANgPAYgIQAMgEAIgCIgFAVQgJAWgQAPQgOAPgWAIIgVAGQABgJAEgLg");
	this.shape_322.setTransform(40.5,63.9,0.998,0.998,-12);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#00FFFF").ss(2,0,0,4).p("AATACQAAATgJAVQgFAKgFAHQgEgHgEgKQgKgVAAgTQAAgTAKgVIAIgQIAKAQQAJAVAAATg");
	this.shape_323.setTransform(64.9,-20.5,0.998,0.998,-12);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgIApQgKgWAAgTQAAgTAKgUIAIgRIAKARQAJAUAAATQAAATgJAWQgFAKgFAGQgEgGgEgKg");
	this.shape_324.setTransform(64.9,-20.3,0.998,0.998,-12);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.rf(["#CD118C","#CD118C","#EB008B","#F7AB85"],[0.122,0.275,0.635,0.992],0,0,0,0,0,19.4).s().p("AAACzIhggEQg1gFgHgQQgXgmgNgaQgXgxAQgWQAtg8BdiJIBkAAIArAzQAwA3AZAYQAmAiAJAeQALAkgQA5QgNAqhGASQgqAKg0AAIgUAAg");
	this.shape_325.setTransform(84,57.9,0.998,0.998,-12);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.rf(["#CD118C","#CD118C","#EB008B","#F7AB85"],[0.122,0.275,0.635,0.992],0,0,0,0,0,19.6).s().p("ABdDFQgvgHhkgMIhcgJIgwhZQAuhtAOg3QAMgxAXgXQAagbA6gMQAqgJAxA2QAjAmAcA6IAqBWQAUAxgKAOQgWAngSAXQgdAogZAAIgEAAg");
	this.shape_326.setTransform(99.9,4.5,0.998,0.998,-12);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.rf(["#CD118C","#CD118C","#EB008B","#F7AB85"],[0.122,0.275,0.635,0.992],0,0,0,0,0,19.5).s().p("AhvC4QgkgMglgtQgcgiAahEQATgxAngyIA7hNQAigoASADQAOACA5AFQA2AJAIAaQAYBIA8CaIgqBnQghgDgpgBQhSgDghAHQgaAGgVAAQgTAAgOgFg");
	this.shape_327.setTransform(44.5,16.2,0.998,0.998,-12);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AHjAAQAADIiNCOQiOCOjIAAQjHAAiOiOQiNiNAAjJQAAjHCNiOQCOiNDHAAQDIAACOCNQCNCOAADHg");
	this.shape_328.setTransform(76.2,28.4,0.998,0.998,-12);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.rf(["#867278","#5C4A56","#433545"],[0,0.498,1],0,0,0,0,0,48.4).s().p("AlVFWQiNiNAAjJQAAjHCNiOQCOiODHABQDIgBCOCOQCNCOAADHQAADIiNCOQiOCNjIAAQjHAAiOiNg");
	this.shape_329.setTransform(76.2,28.4,0.998,0.998,-12);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AIzAAQAADpilCmQilCljpAAQjoAAililQililAAjqQAAjoClilQClilDoAAQDpAAClClQClClAADog");
	this.shape_330.setTransform(76.2,28.4,0.998,0.998,-12);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.rf(["#B7E2E0","#B5E2E0","#AEE0DE","#A3DDDB","#92D9D7","#7CD4D2","#60CECC","#40C7C4","#1CBEBC","#00B8B5"],[0,0.373,0.51,0.604,0.682,0.749,0.808,0.863,0.91,0.941],0,0,0,0,0,56.4).s().p("AmNGPQililAAjqQAAjoClimQClikDoAAQDpAAClCkQClCmAADoQAADpilCmQilCkjpAAQjoAAilikg");
	this.shape_331.setTransform(76.2,28.4,0.998,0.998,-12);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AKNAAQAAEPi/C/Qi/DAkPAAQkNAAjAjAQi/i/AAkPQAAkNC/jAQDAi/ENAAQEPAAC/C/QC/DAAAENg");
	this.shape_332.setTransform(76.2,28.4,0.998,0.998,-12);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.rf(["#FFF166","#F0E660","#E5DD5B","#E1DA59","#24B34B","#21777E"],[0,0.216,0.486,0.776,0.89,1],0,0,0,0,0,65.4).s().p("AnNHOQi/i/AAkPQAAkNC/jAQDAjAENABQEPgBC/DAQC/DAAAENQAAEOi/DAQi/DAkPgBQkNABjAjAg");
	this.shape_333.setTransform(76.2,28.4,0.998,0.998,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.1,-37.9,135.5,132.7);


(lib.Diatom08 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAJQgEgEASgMQARgGAKAJQAKAJgcgDQgNAJgGAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQAAAAgBgBg");
	this.shape.setTransform(-47.1,0.1,0.482,0.482);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLgCQAQgMAPAGQgBAHgOACQgNACgBAIQgTgDARgKg");
	this.shape_1.setTransform(-43.6,-1.3,0.482,0.482);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTATQAIgRgNADIAOgKQAIgHgCgMQAIgBAHAFQAJAGAFAAQgBAIgFgBQgEgBAAgGQgMgBgEAPQgEAPgJAAIgHAKIACgGg");
	this.shape_2.setTransform(-45.8,-3.9,0.482,0.482);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAIQAWgUgEgRQAYAJgPANQgWAUAEARQgYgIAPgOg");
	this.shape_3.setTransform(-47.7,-6.1,0.482,0.482);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhJBDQgLgIgBAMQgKABAMgaQANgZAPAAQABAJgGALQgGALABAJQAIgIATgiQAQgbARgKIgHgcQgGgOgRACQAJgaAPAUIAZAkQAJgJAPAGQATAHARgEQgBgHgKgBIgTgCQgEgNAYADQAYAEgEgOQANAEgMAPQgPAUAEALQgJACgHgFQgJgGgFgBQgDAMAHAEQAEACAMABQgOALgPgEQgagIgOABQgOAKgKAWQgGAMgKAaQgFADgFAAQgIAAgKgHgAAagFQACAGAGAAIgCgLQgCgHgGgBIACANgAAGgQQgGAFAEADQACADAGgFQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_4.setTransform(-45.8,-5.7,0.482,0.482);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAvQAEgJAMACQACgMgOgFQgQgEgBgJQgMAFAOAMQAOANgQAKQgNgFgNgHQgIgEgQgEQgEgfAYABQgEgbAAgHQAAgIAOgRQAnAXAUAHQAKgBgBgKQgBgIgIgBQACgNAPAKQATANAEAAQAJAIgDAAIgNgDQgZgFACAUQADAIAFgDQAIgFAEAAQAMAMgUACQgSACgYgGQAEAZAOABQANAAgBANQAAAJgQAFQgPAEABAMQgLgFAFgIgAgqAAQgRAXAMgNQAJADAMgXQAKgSAJATQgFAAgBAEQgBAFAHAAQAKgJgCgOQgBgOgRgCIgZAngAgigkQABAHAGAAIgCgNQgCgGgGgBIADANg");
	this.shape_5.setTransform(-51.9,-6.6,0.482,0.482);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAQQgDgXAQgNQAKgKAAADIgFAPQgLAeAQABQgKAKgFAAQgGAAgCgNg");
	this.shape_6.setTransform(-48.6,-10.4,0.482,0.482);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgIARQgFgBAHgOQABgBgBgIIAAgKIARAKIgJAMQgIAOAHgFQgEAEgEAAIgBgBg");
	this.shape_7.setTransform(-50,-11,0.482,0.482);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALAlQgGgRgFAPQgGgBABgFQABgEAEAAQACgUgVgOQgVgPABgUQgJAJgFgDQgGgCAAgOQAsAHAGArQACgjAVADQATADAbAdQgOATAEAeQgJgGgLgTQgKgTgKgFQgLAFASAPQAWATgJAUIgDAAQgJAAgHgSgAAKgiQgDASASAPQASAOAHgRQgRAEgFgRQgFgRgMAAIgBAAg");
	this.shape_8.setTransform(-7.9,-7.3,0.482,0.482);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAdIAIgPQAPgegQgOQAGAAACAHIACANQAPgKAOAAQgWAkAggHQAIgJgCAFIgGAOIgcgGQgLABgKAPIgGACQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_9.setTransform(-7.2,-10.9,0.482,0.482);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_10.setTransform(-53.2,-11.8,0.482,0.482);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHALQgCgRgQAPQgRgEAVgJQAVgKAOAEQABgGgDgCIgIgCQADgQAJAMQAMAQAGgCQgBABgWAMQgHAEAKAWIgGABQgMAAgDgTg");
	this.shape_11.setTransform(-22.1,-11.8,0.482,0.482);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_12.setTransform(-7.4,-13.3,0.482,0.482);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgnAkQAMgiAQgRQASgXAhgFQgCAZgmgFQAQARgQgBQgPAAAPANQAAACgOAFQgFABATAMQgHANgLAEIgFABQgJAAgHgIgAgbAcQgGAFAEADQADADAFgFQAGgEgEgEIgCAAQgCAAgEACg");
	this.shape_13.setTransform(-51.4,-11.7,0.482,0.482);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAEQgFgFAKgDIAFAAQACABACgBQAKgFgCAGQgCAFgGADQgEACgDAAQgEAAgDgDg");
	this.shape_14.setTransform(-50.6,-14,0.482,0.482);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_15.setTransform(-7.9,-16.7,0.482,0.482);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhGAgQAFgOAOAIQAPAJAGgNQgFATATADQAXADACAFQAFAHgGAAQgNAAhBgbgAADAiQgSgMgPAAQgIgLgWgJQALgQAWANQAbAQAJgDQAFgUgcgEQgdgFADgUIAkAFQAFgBgVgOQAFgQAVAIQAUAHADALQAJACAWgCQAQACgHASQgPAEgPgJQgOgIgQADQAQAJACANQAEANgWAEQgBALAVAAQATAAgJATIgKABQgOAAgMgJg");
	this.shape_16.setTransform(-38.8,-15.4,0.482,0.482);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAdQgEgPALgIQANgIAAgIQABgGgDgCIgIgCQABgOAOALQAUANAEAAQgEAEgNACQgMACgKALQAJAJgDAGQgCAFgMAAIgCAAg");
	this.shape_17.setTransform(-48.7,-18.6,0.482,0.482);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAFAIIgGgIQgggSAeANQAaAKgFAEQgDADgDAAQgDAAgEgEg");
	this.shape_18.setTransform(-10.2,-20.5,0.482,0.482);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCAfQgOgFgcgUQAFgNAOAHQAPAIAGgLQgFARASADQAXAEADAFQgKAIgMAAQgIAAgHgDgAAYAFQgXgKgFACIgOgLQgIgHACgMQARABAUAMQAXAOAJADQgDALgJAAQgEAAgFgDg");
	this.shape_19.setTransform(-36.6,-19.4,0.482,0.482);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAhQgggPgBgTQAPAKAPgBQADgPgTgHQgUgHAGgUQAGACARALQAMAIAOgBQgKAWAEAPQAFAPAVAHQgDAEgGAAQgKAAgRgJg");
	this.shape_20.setTransform(-44.9,-17.1,0.482,0.482);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgIAgQgQgLgJAEQgCgQAMgEQgBgEgPgJQgKgIAGgSQASgDAKAPQAMARAJABQAMgOAGgDQAJgGANANIgNALQgJAGACAMQgMACgKgEQgKgGgHgCQgCALAGAFQAFADAKABQgCALgFAAQgDAAgEgEg");
	this.shape_21.setTransform(-46.3,-13.6,0.482,0.482);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAFAIIgGgIQgggSAeANQAaAKgFAEQgDADgDAAQgDAAgEgEg");
	this.shape_22.setTransform(-9.3,-21.5,0.482,0.482);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAEADQgbgDAIgGQAHgGAQAMQAMAJgCAAQgCAAgMgGg");
	this.shape_23.setTransform(-43.8,-21.7,0.482,0.482);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_24.setTransform(-14.6,-24.5,0.482,0.482);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOANQgQgIABgQQAPgEALAHQAMAIALgBQgIgSgMgCQACgIAIAEQAMAGAIgCQAEAPgOAJQgOAKAEAPQgCgDgWgMg");
	this.shape_25.setTransform(-34.4,-23.3,0.482,0.482);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIASQgFgGAGgHIAIgGQASgfgNAdQgIAVgFAAIgBAAg");
	this.shape_26.setTransform(-17.1,-24.8,0.482,0.482);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZAKQACgIAFADQAJAFAEAAQATgHAAgWQAZAPgaAQQgNAIgIAAQgLAAgGgKg");
	this.shape_27.setTransform(-24.5,-24.4,0.482,0.482);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGAOQADgPgNgEQgLgFAGgCQAFgCANADQAiAGgIATg");
	this.shape_28.setTransform(-42.3,-22.2,0.482,0.482);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAHAdIgogKQgHgNASgMQANgKgOgEQAKgQAUASIAdAbQgDAUgWAAIgEAAgAgNgKQgFAPAUAKQAVAKADgQQgIAAgJgMQgGgIgJAAIgHABg");
	this.shape_29.setTransform(-38.6,-24.4,0.482,0.482);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgKAEQgFgFAKgDIAFAAQACABACgBQAKgFgCAGQgCAFgGADQgEACgDAAQgEAAgDgDg");
	this.shape_30.setTransform(-25,-25.6,0.482,0.482);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgDAEQgMgJABgOQARALADADQAKAIgBARQgCgFgQgLg");
	this.shape_31.setTransform(-12.5,-19.6,0.482,0.482);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AATAYQgXgDAEgQQgKAMgKgGQgKgFABgUQAEABAGAFQAFAFAFgBQACgFgEgDIgIgCQAMgUAIAWQANAbAGAAQALAFgCACQgBACgFAAIgEAAg");
	this.shape_32.setTransform(-14.7,-2,0.482,0.482);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABoEaQgPgLgJAEQAPgOgKgPQgQgTABgMQgJgBgLAGQgKAGgKgBQAAgJgFgLQgGgKABgKQgDADgOAFQgKAEgCAIQgNgFAGgIQAEgJAMACQAPgRAIgGQAOgKANANQgFgcgaARQgkAYgMgDQgCgRAOgGIAbgHQAAgJgFgLQgFgKAAgKQgEAAgYAQQgPAKgQgQQACgIAEACQAEABAAAFQAQAEAJgOQAKgOAOAEQAAAIANAJQALAIgEAPQAJABALgGQAKgGAKABQAEgPgQgPQgPgQgDAQQgHgBABgFQABgEAFAAQgJgHgRggQgOgagTgFQgBAOANAKQAQALABAFQgOAPgXgZQgUgYgCgZQgJAEgDACQgGAFgCAIQgNgBAPgUQANgUAPACQgHgQgTANQgXAQgLgDQADgQANgDQAYgFAKgGQAAgEgGgFQgEgFAAgGQgMAOgHABIgfAFQgMgCAUgMQANgIATgIQgBgEgFgFQgEgFAAgGIgeAeQgNAAgHgUQgHgUgNAAQAKgSAegCQAEgCAOgUQAIgMAOAOQgFACgSAZQgNASgYgFQABADAFAGQAEAFAAAGQACgBAhgaQAUgRAPAOQADgQgNgEQAGgRAHAQQALAWAGgBQgEAIgKgCQgOgCgMAGQAAAFAXAJQATAGgWAKIAXAOQAHAEgKAWQAJABALgGQAKgGAJABQgYARAMAdQAMAfAeACIgZgaQgNgOgBgTQANAOAIgMQAPgVADgBIgOgLQgIgHACgMQgPAKgOAAIAOgVQAJgKAQABQAFAQALAWQAHAUgNAWQAQAGAEgQQAEgQAQAGIgVgiQgNgUgQgGQAUgfgagnQgZgngcATQgJgIgLgVQgMgXgIgIQgSAGAMANQAQARAAAEQgEAMgNgSQgSgXgFgBQABgFAKgEQAJgEAAgHQgDgQgMAIQgRAMgIgEQACgGAIgJQAJgIABgHQAMADAPAYQALAQAWgNQgLALADAMQAIAXAAAEQAVgLAMAJIAaAWQAPgCgNgNQgLgMgKgDQABgOAOALQAUANAEAAQgIAQABAQQACASAPgUQAFAKAAAyQgBAqAaASQARgLgSgPQgYgUAFgOQAOAAAKAVQAJAUARgBQABAXgVAHQABAHALACIASABQgOAOAIAMQAHAIATAFQACAGgEACQgCABgGABQgFgBgDADIgCAIIgQgZQgHgLgRAQQgLgEABgBIAJgDQAVgHgKgOQgPgCgNAOQgMANgUgFQAJALAVAIQgOAQAXASQAbAVgGAZQgHgBgBgKIgCgTQgDABgGAFQgGAEgFAAQAcAtAgAjQAKgDgGgIQgEgHgKgCQANgPASAbQAXAjAGADQgBADgVACQgNABAZAOQgHAVgXgBQADADAFAOQAEALAIACQACAFgXgBQgSAAATAQQgCAKgGAAQgDAAgFgDgABmDtQgFAEADAEQACACAGgEQAGgEgEgEIgCgBQgCAAgEADgABQDhQAQACAQgMQASgMgUgIQgCAMgSAIQAAgDgPgYQgLgSAQgFQAJAVALAJQgCgMAPgFQARgEAAgJQgYAOgQgNQgSgWgMgJQAGAWgBAKQgBAPgOANQgGAAgGgMQgDgIgFAKQAAAGAEAFQAGAFAAAEIAdgGQALACAAAYgAAeA3QAAAIAKABQAIAAACgJQgEAAgIgFIgDgBQgDAAgCAGgAgxAFIAUAAIAAgTIgUAAg");
	this.shape_33.setTransform(-15.7,-13.1,0.482,0.482);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhFAqIgKgWQgHgPgDARQgOgCARgVQAQgWAVAGQAAAHgHABIgNACQABAHAKABIATABQAHgBACgJIABgTQASAhAmgYIAcgTQAQgIAJAIQgEANgWAMQgWALgCANQAngGAVgXQASASgjASQgiARgTgOQgGABgCAHIgCAMgAgWAIQgcACgTAMQAMAHAigDQAmgFAFgTQgLAFgfABg");
	this.shape_34.setTransform(-25.3,-20.7,0.482,0.482);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAPQgBgMAPgEQAPgEAAgJQAQACgPAPQgMAMgMAAIgGAAg");
	this.shape_35.setTransform(-23.9,-22.7,0.482,0.482);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgJAeQANgMADgFQAGgKgNgMIgKAMQgHAJgMgCQABgKAOgJQANgKABgKIATAVQAKAMABAQQgJgBgKAGQgJAFgHAAIgEAAg");
	this.shape_36.setTransform(-16.1,-19.6,0.482,0.482);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAQAaIgHgQQgKgdgXAMQABgHAPgCQANgCAAgJQALABABAXQAAAWAIADQgEAGgCAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_37.setTransform(-51.1,-26,0.482,0.482);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAAAHQgIgBgEgKQARgDAGADQAFADgFAEQgEAEgGAAIgBAAg");
	this.shape_38.setTransform(-30,-26.1,0.482,0.482);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAVIAAgUQAGABACgCQABgCABgGQAIACgDAFQgGAIABAEQASAHABgVQABgWATAHQgCAngnAAIgIAAg");
	this.shape_39.setTransform(-32.3,-26.9,0.482,0.482);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCAUQgVgEALgRQAQACADgMQAIgKABACIgDAKQgHAWALgFQACANgNAAIgIgBg");
	this.shape_40.setTransform(-37.7,-26.7,0.482,0.482);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAXIAOgLQAIgHgCgLQAEABAGAFQAEAEAFgBQADgPgMgEQgCgOATAKQATAKgHANQgOgCgNAPQgIAJgMAAQgGAAgGgCg");
	this.shape_41.setTransform(-46.5,-25.1,0.482,0.482);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAsQgGgCgEgJQgNgbAeAJIgNgUQgJgNgIgGQgLgQAVAOIAdAWQAOgEgNgJQgQgOAGgNQATACAJAUQAFAMAGAZQgKgRgYAPQgYAQATAGQgBAKgEAAIgCgBg");
	this.shape_42.setTransform(-44,-25.6,0.482,0.482);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgHACIAJgVQANABgJALQgKAPAGAMQgPgBAGgRg");
	this.shape_43.setTransform(-18.2,-27.8,0.482,0.482);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCgOQgJgHAFABIANAGQAFAjgKAAQgJAAAFgjg");
	this.shape_44.setTransform(-48.3,-27.6,0.482,0.482);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAFAIIgGgIQgggSAeANQAaAKgFAEQgDADgDAAQgDAAgEgEg");
	this.shape_45.setTransform(-9.3,-28.7,0.482,0.482);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRAgQgBgSAMgOQAQgWACgFQAFgJABAJQABAJgEAPQgKAkgRAAIgFgBg");
	this.shape_46.setTransform(-16.7,-27.9,0.482,0.482);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIASQgFgGAGgHIAIgGQASgfgNAdQgIAVgFAAIgBAAg");
	this.shape_47.setTransform(-20.5,-29.1,0.482,0.482);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgsgOQAMADAEgHQADgEABgMQARAEgJALQgMARAEAHQAFgFAagRQAUgOAIgNQASAJgQAKQgVAOAJAQQgWgSgKARQgMASAPAXQgigQgGgrg");
	this.shape_48.setTransform(-40.5,-27.6,0.482,0.482);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_49.setTransform(-43.1,-29.2,0.482,0.482);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag+ApIAJgLQABgCgMAHQgMgEAIgXQAHgUgXgCQAAgNANAJQALAHgEgXQAGAIAPAQQALAOgMALQAMACAMgJQALgHAOAEQgCgXgDgIIgOgcQA2AUAPgeQAQAKAOAAQgBAGgVAbQgLAPANAVQgEAAgFgGQgGgEgFAAQgHAJgeAOQgZAMgHAPIgagGQgIgBgGARQgTgBAVgXgAgLAPQgbARAOANQAFgOAXgNQAZgNAGgJQgdAIgRALgAA5gpQACAHAGAAIgCgMQgCgIgGAAIACANg");
	this.shape_50.setTransform(-25.1,-28.5,0.482,0.482);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_51.setTransform(-33.4,-31.2,0.482,0.482);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRAPQgIgSATgBQAUAAgCgKQAQACgPAPQgNAMgLAAIgGAAg");
	this.shape_52.setTransform(-42.8,-30.9,0.482,0.482);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAMAXQgJgFACgMQgfADACggQAGAJASALQAUAKAFAJQgEAIgFAAIgEgBg");
	this.shape_53.setTransform(-47.7,-30.5,0.482,0.482);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgLANQgEgGAJgBQALgaAGAGQAGAGgOAYIgEABQgIAAgCgEg");
	this.shape_54.setTransform(-45.7,-31,0.482,0.482);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_55.setTransform(-42.6,-32.1,0.482,0.482);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEAaQgKACgEgIQgBgUAHADQAOAKAJgDQgCgHgRgHQgPgHAFgSQAEABAKAPQAGALATgHIAAAnQgNgGgMACg");
	this.shape_56.setTransform(-16.2,-31.7,0.482,0.482);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_57.setTransform(-24.8,-32.6,0.482,0.482);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHALIgDgoQAXgFgCAdQgCAbgJAJQgGgFgBgPg");
	this.shape_58.setTransform(-12.2,-35.5,0.482,0.482);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgaA2QALgPgBgPQgBgTgXAGQgVAFAFgfQAMAUAPgPQAQgQgXgJQADgJAIAFQAIAFABAJQAEgLAFgEQAEgEAQgLQAcARAMAUQAOAZgYARQgBAGADACQACACAGAAQgFANgIgFQgJgFACgNQgIAHgEAAQgGACgCgJQgMgBgEATQgFAOgLAAIgHgCgAAjgNQgFAFADADQADADAFgFQAGgEgEgEIgCAAQgCAAgEACg");
	this.shape_59.setTransform(-23,-34.3,0.482,0.482);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAFAXQgDgEABgVQABgGgDgCIgHgCQgKgEAFgDQAFgDAJAAQARAJgJAdQgCAHgCAAIgCAAg");
	this.shape_60.setTransform(-55.8,-35.8,0.482,0.482);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgfAoQAEgWARALQABgRgZgQQgZgQgBAdQgIgCgBgMQAAgRgBgIQARgCADAMQAHAAABgHIACgNQAIACABAKIABASQAKgCAIgSQAIgSgQgCQgKgFADgDQADgCAKADQAYAHgKAUQAOgCATAJQASAIASgFQAIAvgwgIIAAgnIgNAWQgEAHgWgJQgCALAGAEQAFADAKABQACANgSAFQgRAFAEARIgDABQgLAAADgUgAAnAAQACAIAGgCQAEAAAIgGQAAgIgJAAIAAAAQgJAAgCAIgAgCgRQgHABgBAGIAMgCQAHgBAAgHIgLADg");
	this.shape_61.setTransform(-43.1,-34.5,0.482,0.482);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgHgGQARgIAGAOQgBAIgEgCQgFgBAAgFQgFAAgCACIgCAIQgWgJASgHg");
	this.shape_62.setTransform(-58.4,-37.9,0.482,0.482);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_63.setTransform(-12.2,-38.4,0.482,0.482);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAtQgGgRgFAPQgDgJgBghQAAgfgGgQQAUABAAAiQABAmAJAGQAJgVgCgXQgDgZgOgUQAEgOAKANQAMASANgHQgJAIgCAcQgDAdAOAEQAJAAgGgUQgJgZAGgOQARADADgNQAHACgFAcQgHAiAFAPQgrgEAEAiIgEABQgIAAgHgTg");
	this.shape_64.setTransform(-15.1,-35.7,0.482,0.482);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AARACQgGAAgBAHIgDANQgHgBAAgKIgCgSQgLAIgJAVQgSgBAMgQQALgOgPACQAMgWASAKQATAMAKgKQALAEgGADQgFADgKAAQAOAHgGARQgDAGgBAAQgDAAgBgVg");
	this.shape_65.setTransform(-34.3,-37.5,0.482,0.482);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXAPQgBgJAGgJQAGgLgBgKQAHABACAPQACANAIAAQAGABACgDQABgCABgFQALgPgEAQIgHAcQgMgLgbABg");
	this.shape_66.setTransform(-47.8,-38.2,0.482,0.482);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgTAYQABgEAFAAQADgQgNgEQgBgPAWAKIAHAEIgIgIQABgEAJgFQAJgEAAgHQARAMgRAUIgdAbQgIgBACgFg");
	this.shape_67.setTransform(-24.6,-38.4,0.482,0.482);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_68.setTransform(-33.9,-39.4,0.482,0.482);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAHAPQgHgHgIgOQgJgTANANQALAMAEANQACAFgCAAIgEgDg");
	this.shape_69.setTransform(-20.5,-39.5,0.482,0.482);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgbAAQAJgdATgOQAKgDgCAFIgLAPQgZAeAJAWQAKgBACgRQACgSAFgDQAHABACAKIABASQAHgBACgKIABgSQAHABACAKIABASQgGAFgUAAQgNgBAAAaQgdgKAKgkg");
	this.shape_70.setTransform(-40.3,-39.2,0.482,0.482);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgMgDQARgTATADQgGAIgOALQgOANgFAHQgQgGATgRg");
	this.shape_71.setTransform(-20.6,-43.2,0.482,0.482);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAhA+QgWgFgLgHQgOgFANgDQALgDAAALQAIgCABgNIABgZQgGAAgCAIIgCAMIgxAAQAbgQgXgDQgmgEgGgHQACgGAIADQAMAFAIgCQgIgUgWgJIARgIQAKgGgbgGQABgEAKgFQAJgEAAgHQAIACgCAEQgBAFgFgBQABAEAFAFQAEAGAAAFQAGAAACgHIACgNQANAMAagCQgFASAIAJQAKAKgDgbQAQgDgFAXQgDAUgSgKQAAAGAHACIANABQAKACAAgUQABgUATAJQABAGgDACQgCABgGABQABAKAXAHQAUADgEATQgXABgHgVQgWAOACAkQAGAAACgHIACgNQAGgVADATQAEAVgDALQAHgBACgKIABgTQAIACABAOQABAHAAARIglgIgAgHAMQgGAEAEAEQACADAGgFQAFgEgEgEIgBgBQgCAAgEADgAgngTQAGABALAHQAJADAEgLIgdgHIgGgBQgHAAAMAIgAgRglQgGAFAEADQACACAGgEQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_72.setTransform(-62.9,-40.8,0.482,0.482);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgeA4QgEgUADgMQgHACgCAKIgBASQgHANgHgfQgHgdABgWQgRAGAHAVQAKAdAAADQgZgOgBggQAAgiAkABQABAEgCAcQgCASANgBQAJAAgGgTQgJgaAGgOQASAFgCAMQgEAQAIAHQAQgGgJgSQgMgZAFgLQAGABACAHIACAMQAMgLAbABQAKAJALAaQAMAUAbgFQgFAWgPgHQgOgIgGgRIgWAKQgPAGARADQgIAXgKgSQgJgRAHgRQgQAGAHAVQAJAdAAADQgUgHABgXQgNgBACAUQACAcgBADQgDAMgCAAQgDAAgBgKg");
	this.shape_73.setTransform(5.2,-41.5,0.482,0.482);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_74.setTransform(-18.5,-44.2,0.482,0.482);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAYCCQgMgQgHACQgFgdACgkQABgcgHgRQACgGAJgCIASgBQgCgJgNgBQgQABgIgBQgMABAIALQALAPgHAMQgMACgEgPQgFgQgJAAQAjgOgKgrQgUg0gFgVQAWALAJAhQAEASAFAwQAOABAFgBQAJgCABgIQANAYAFAdQAGAlgOATQgJgKACgOQAGgRABgJQgbAAAFAwQAEAwASAEQgCAIgDAAQgDAAgDgEgAARAIQgFAEADAEQADACAFgEQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_75.setTransform(-9.6,-38.7,0.482,0.482);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAPAtQAJgPgMgiQgKgfgQgTQgHAFAMAdQAMAggHAXQgSgIgFghQgDgngEgTQAwACAMAiQAHAUACA1QgNABgWAJQgTAJgPABQAMgWAlACg");
	this.shape_76.setTransform(-13,-42,0.482,0.482);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAFAIIgGgIQgggSAeANQAaAKgFAEQgDADgDAAQgDAAgEgEg");
	this.shape_77.setTransform(-24.2,-44.6,0.482,0.482);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgJApQAPgPAAgPIgGgnQgVgDAHAPQAMAYgHANQgXgMADgvQAcgHAKAXQAPAeAGADQgEACgMARQgIALgNAAIgCAAg");
	this.shape_78.setTransform(-2.6,-44.2,0.482,0.482);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgOApQAJgGgBgGQAAgFgFgCQgSgGAFAZQgOgPgHgNQgJgSAAgXQABADAUARQALAIgMALQAZABgIgOQgMgaAFgKQAYgLAVAjQAIAMACAAQADgBABgZQASAKACAdQgggEACAYQgJgOgEgBQgCgBgBAGQgGAUgQAAIgBAAgAAAAAQAMAMADgUQgHAAgEgJQgEgKgEgBQgJAQANAMg");
	this.shape_79.setTransform(-3.4,-39.9,0.482,0.482);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AADAFQgEgpgZACQgHgBABgFQABgEAFAAQAdADANAdQAIARAJAoIgCAAQgXAAgFgog");
	this.shape_80.setTransform(-10,-44,0.482,0.482);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgNAOQgDgMALgEQALgGAAgHQAPgCgKATQgIAOgJAAQgDAAgEgCg");
	this.shape_81.setTransform(-17.4,-45.4,0.482,0.482);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgOABQAAgBAGgCIAPgEQAOgBgKANQADgEgOAAQgQgBAIAGQgGgEAAgCg");
	this.shape_82.setTransform(-34.5,-46,0.482,0.482);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgiADQASgWgDgKQAMAAANAPQAMANAWgIIgVASQgNALgPAAQAKgPgBgOQgPgCgHANIgHAcQgTgKAOgRg");
	this.shape_83.setTransform(-37.4,-41.8,0.482,0.482);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgdAtQAMgVACgIQAEgMgIgSQAFABAEAKQAEAIAGAAQARgHgOgNQgRgRAFgMQAHAJASAQQAOAPAAATQgYgIgJATQgKATgNAAIgDAAg");
	this.shape_84.setTransform(-38.3,-44.4,0.482,0.482);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgbAZQgKgFAIgDQAMgFAAgHQgKgPAAgOQAGAAACAHIACANQAGAAACgHIACgNIAKANQAHAJAMgCQANABgCADQgBADgKACQgZAHAFgQQgIAAgEAQQgEANgKAAIgDAAg");
	this.shape_85.setTransform(4.5,-46.4,0.482,0.482);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_86.setTransform(-35.4,-47,0.482,0.482);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYAFQAAgMANgFQALgEgEAVIAKgMQAHgIAMABQADANgLAEQgMAGAAAGQgPgKgOAAg");
	this.shape_87.setTransform(-15.9,-47.3,0.482,0.482);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAGAWQAEgDAKAAQgEgQgMAIQgOAMgJgEQAPgSgBgGQAAgIgYgHQAMgRARAUQAWAZAIABQgIASgMACQgKgEAGgDg");
	this.shape_88.setTransform(-22.9,-46.1,0.482,0.482);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgGAOQgJgFAIgDQALgFgBgGQAFgLACACQADACgBAJQgCASgKAAIgGgBg");
	this.shape_89.setTransform(-39.9,-45.8,0.482,0.482);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgTAPQAHgaAFgLQAIgVATgBIgdA7QADAGAMAIQAFADgLANQgKgJgJgVg");
	this.shape_90.setTransform(-43.2,-40.1,0.482,0.482);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAZgdQgCgJgIAAQgKABAAAIQgGgCACgIQAGgMgCgIQAHACAIAJQAHAIAIABQgGAHgWAwQgQAkgZAIQASgtApgsg");
	this.shape_91.setTransform(-41.5,-42.3,0.482,0.482);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgSAQQgSgQgQAAQAHgIAdAEQAWADABgcQAIgEAQAMQAMAJAEgRQAIACgCAEQgBAFgFgBIAAATQgJgDgDgDQgHgFgBgIIgdAdQAHATAIgPQAMgTAMAFQgCAHgJAIQgIAIgBAHIgEABQgPAAgQgPg");
	this.shape_92.setTransform(-43,-45.7,0.482,0.482);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_93.setTransform(-51.3,-47.5,0.482,0.482);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AABAKQgTgUgGAAQAHgPAOARQARAUALgDQgFAJgGAAQgGAAgHgIg");
	this.shape_94.setTransform(-11.1,-47.5,0.482,0.482);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAAAKQgHgGgEgQQAPAFAGAIQAFAHgEAEQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgDAAgEgDg");
	this.shape_95.setTransform(-13.6,-48.4,0.482,0.482);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AALAaQgbgLADgNQgNAAAJANQAHALgXgEQgFgSAPgFQASgIACgIQABgFgDgDIgIgCQAEgMAPAPQAVASAJgBQgEAQgMgJQgQgLgHAEQgDAMAKAFQAMAGAAAGQAUALgDAAQgDAAgTgHg");
	this.shape_96.setTransform(-47.8,-47.2,0.482,0.482);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAEAIQgQgRgMAFQAFgQASALQAXAOADAAQgEAKgGAAQgFAAgGgHg");
	this.shape_97.setTransform(-10.6,-48.8,0.482,0.482);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAPAeQgKgGgJABQACgZgGAAQgNAEgNABQAAgFAHgCIANgCQgKgQAAgOQAYAIAFApQAggFgCAZIgBAAQgIAAgLgFg");
	this.shape_98.setTransform(-7.2,-48.3,0.482,0.482);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_99.setTransform(-52.7,-49.5,0.482,0.482);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgKAEQgFgFAKgDIAFABQACAAACgBQAKgFgCAGQgCAFgGADQgEACgDAAQgEAAgDgDg");
	this.shape_100.setTransform(-3.8,-49.7,0.482,0.482);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgHAPQACgFgEgDIgIgCQABgFAPgDQANgCAAgJQAIACgEAJQgGALACAHg");
	this.shape_101.setTransform(-14.8,-50.2,0.482,0.482);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgMAmQgJgMgGATQgTgNAQgKQAQgJAQAMQgIgLgVgJQgLAJgJAVQgQgBAGgRIAKgVQgQgEgFAMQgIAUgBABQgMgOARggQARgjAcACIgSASQgKAKgCAMQAQAEAFgNIAJgVQAfgEAdANIAxAVQAFAlgZACQgNAhAGgdQADgRAOADQABgPgKgKQgDgDgSgLQgXAVgHAmQACgEARgMQAMgJgBgOQARAHgLAWIgQAeQgIgGgJgCQgLgCgCAKIAAAAQgCAAgMgRgAgDADQALAJAEgQIgMgCQgHgCAAgGQAAgFAEgFQAEgGABgEQgPgEgFANQgIAUgBABIAFgBQAIAAALAIgAAOgWQgGAFAEADQACADAGgFQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_102.setTransform(-47.6,-42.5,0.482,0.482);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AASAUQAHgLAAgGQgIAAgJANQgIALgOgEQgDgJgHgFQgIgGgCAKQgQgDAJgLQAMgQgFgJQAIgQACAYQAEAfAGAAQAGgHASgHQATgHAGgIQARAGgLAQQgQAZAAACQgKgEADgJg");
	this.shape_103.setTransform(-57.4,-44.4,0.482,0.482);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgoAeQADgoAcAEQgfgWgLgGQgagNggABQAPgdAfAUQAvAdAHAAQAGgBAOgNQALgLASAFQABAWgHgFQgPgJgJACQABALATAEQATAFABAKQARgDgJgMQgMgQAEgJQAJgBABALQACAJAOABQAHABARgBQABAWgHgFQgQgJgIACQAJASAfABQgBAIgKABIgTABQgBAGADACQACACAGAAQAAASgNgNQgMgMAFgNQgOAAgVgJQgVgJgOgBQAFALASAGQAWAJAFADQAPAMgQgEQgWgHgHgBQgPABgEAUQgFAZgFAEIgJABQgYAAACgigAgWAuQgHABAAAGIANgCQAHgBAAgHIgNADgAgMAGQgGABgBAGIANgCQAGgBAAgHIgMADg");
	this.shape_104.setTransform(-59.6,-47.3,0.482,0.482);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgIABQgQgQANgOQACAGAQAUQANAOgCATIgagdg");
	this.shape_105.setTransform(-6.9,-50,0.482,0.482);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgEAPQgMgggIgFQALgOAKAbQAKAfASgFQgIALgIAAQgIAAgFgNg");
	this.shape_106.setTransform(-36.6,-50.3,0.482,0.482);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAXAWIgMgLQgXgXAAAQQgHgBABgEQABgEAFAAQACgGgEgCIgIgCQAFgOAPARQAJAKAKAQIAGAJIAAgBg");
	this.shape_107.setTransform(-45.4,-50.7,0.482,0.482);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgFANQgagQgCgSQAKAEAUAMQAQAGANgMQAVgZgfAsQgBAGADACQACABAGABQgDAEgGAAQgIAAgOgJg");
	this.shape_108.setTransform(-17.4,-50.4,0.482,0.482);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgIAAQgFgGAEgEQAEgEAFAFQAIAHAEAPQgPgFgFgIg");
	this.shape_109.setTransform(-17.7,-51.6,0.482,0.482);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAAAmQgZgegNAAQACgIAEACQAEABAAAFQARgBgIgPQgIgQgLADIAOgLQAIgHgCgMQALAEgDAJIgIARQAGAKAQAHQAXAIAEAEQgNgWABgFQAGgMAGgUQAOAOgKAkQgKAmAGALQgEAEgGAAQgJAAgMgOgAAVAcQAEgQgNgFQgTgHgBgBQgCAgAfgDg");
	this.shape_110.setTransform(-22,-48.9,0.482,0.482);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgFgFQAJgUAVABQgLAEgLAXQgJAWgSAAQAEgDAPgbg");
	this.shape_111.setTransform(-21.2,-51.2,0.482,0.482);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgNAFQgEgIgHAAQAHgTARAMIAZAQQABAPgOgMQgPgLgBASQgFgBgEgKg");
	this.shape_112.setTransform(-22.2,-54.1,0.482,0.482);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AABALQgPgRgFgDQAFgPAOAOIAUAUQgCAIgFAAQgFAAgHgHg");
	this.shape_113.setTransform(-42.7,-49.5,0.482,0.482);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgCAGQgXgigJgJQAJgMASAXQANASAJAUIANAMQAJAHgCALQgUgIgRgcg");
	this.shape_114.setTransform(-41,-49.1,0.482,0.482);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AANAkQgOgfgHgFQgDAJgTAAQgUAAAWgJQAJgBAAgJQgBgJgIAAQABgFAKgEQAJgEAAgHQAFgPADANQACAMgKAAQANAwAkAVQgGAIgHAAQgHAAgIgMg");
	this.shape_115.setTransform(-41.7,-52.4,0.482,0.482);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgDASQAGgTgCgOQgEgBgDADIgCAIQgJgHAEgEQADgFAJABQAYAEgMAeQgLAHgCAAQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_116.setTransform(-20.1,-54.5,0.482,0.482);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AABAGQgIgGgFAAQgJgCAFgDQAFgDAKAAQAbgBgJASIgEAAQgHAAgFgDg");
	this.shape_117.setTransform(-22.2,-55.7,0.482,0.482);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AghAUQAFgDAEgWQADgTASAFQgKARAAAMQAGAAACgHIACgMQAIgCAHAGQAJAFAFAAQAPAFgNADQgNADABgLQgFABgOAOQgIAGgKAAQgGAAgGgBg");
	this.shape_118.setTransform(-22.2,-58.2,0.482,0.482);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgBAKQgJgQABgMQALAJAIAUQgBAIgDAAQgDAAgEgJg");
	this.shape_119.setTransform(-37.9,-58.7,0.482,0.482);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AALCEQgpgMgVAHQgNAJATgPQAdgSAPAEQgFgPgOAJQgTAMgMgGQAMgWAAgDQgEgGgIgTIAoAAQgPgNgBgDQgBgFAbABQAEgMgYAAQgZAAAFAMQgIgCAEgIQAGgMgCgIIAZAAQAOgBABgIQACgMgTAHQgVAHgCAHQgWgJAUgOQAUgOAWAIQgDgNAIggQAGgTgVgGQAAgJAQgEQAPgFgCgMQgGgBgCADIgCAIQgSgDAQgMQARgMAPAHIgFAZIAFAZQgQgKgOAAQADAZAlgFQAIgJAAADQgBADgGAGQgVASgUgLQgDAOAKAEQAEABATABQgBAHgKACIgTABQAUAJgHAFQgOAJABAHQABAEAWAJQAKAEghACQACAOAUAMQAEACgjACQAEASAMgCQAPgEAIAIQgBAHgKACIgTABIAAAeQABALAXAAQAXABADAIQgIAIgQAAQgKAAgNgDgAgVBNQAAAIAJABQAJAAACgJQgEAAgJgFIgCgBQgEAAgBAGg");
	this.shape_120.setTransform(-32.4,-57.1,0.482,0.482);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgSACQAGgBACADQACADAAAFQALgJAIgUQAMgMgFAQQgJAaACAJIgKABQgUAAABgVg");
	this.shape_121.setTransform(-24.4,-63.1,0.482,0.482);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgGAWQgEgYAYAGQgKgPAAgOQgFAAgBAHIgDANQgGgBgDgPQgCgOgJAAQABgNAMAIQAPAMALgHQgCALAJAMQAIAMgFAOQgVgBAEAHQAKAPgDAJIgEAAQgMAAgEgWg");
	this.shape_122.setTransform(-33.7,-66.1,0.482,0.482);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgBAGQgEgQgJAAQACgQAPAQQAQAOgEAPIgDAAQgKAAgDgNg");
	this.shape_123.setTransform(-4.3,-47.5,0.482,0.482);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgGA+QgEgJgHAAQABgFAKgEQAIgEAAgHQgNgcACgJQABgHAUgZQgXgBgKAWIgQAmQgEgBgFgKQgEgJgHAAQAPgHADgNQAEgNgWAOQgHgLAIgCIAUAAQAcACgTgdQAHAFASAFQASAFAGAFQAQgCgNgNQgMgMgLgDQAHgPAUAWQASAUAFgbQATAJgTANIgeASIgLANQgHAJgLgCQACAIAIAAQAJgBAAgHQAiAOgEA3QgIgGgEgBQgGgBgCAIQgPgFAJgOQAMgTgGgMQgSAQgCAsQgDgBgFgKg");
	this.shape_124.setTransform(-0.8,-47.7,0.482,0.482);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgOAUQAJgLgDgGQgGgLAAgLQARALADADQAKAJgBAQg");
	this.shape_125.setTransform(-12.5,-1.3,0.482,0.482);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_126.setTransform(-51.1,-2.9,0.482,0.482);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_127.setTransform(-39.5,-3.4,0.482,0.482);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_128.setTransform(-6.2,-3.9,0.482,0.482);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgJgOQAUAIgBAVQgUgHABgWg");
	this.shape_129.setTransform(-18.5,-3.4,0.482,0.482);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_130.setTransform(-22.2,-4.9,0.482,0.482);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_131.setTransform(-41.5,-5.8,0.482,0.482);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_132.setTransform(-18.8,-6.3,0.482,0.482);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgLAAQAQgLAAgDQATAGgMAIQgQANAAACQgTgGAMgJg");
	this.shape_133.setTransform(-16.9,-6.3,0.482,0.482);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgOAKQAIgUAVABQgHATgTAAIgDAAg");
	this.shape_134.setTransform(-19.8,-7,0.482,0.482);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgKAFQgBgXALgLQAMABgBAXQgDAfABAEQgRAAgCgZg");
	this.shape_135.setTransform(-2.6,-6.6,0.482,0.482);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_136.setTransform(-39.5,-7.8,0.482,0.482);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_137.setTransform(-11.3,-8,0.482,0.482);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_138.setTransform(-37.1,-8.2,0.482,0.482);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAAAHQgIgBgBgHQADgIAEADQAIAGAEgBQgCAIgIAAIAAAAg");
	this.shape_139.setTransform(-21,-8.4,0.482,0.482);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_140.setTransform(-24.6,-8.7,0.482,0.482);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQACgGAJgCg");
	this.shape_141.setTransform(-38.6,-8.7,0.482,0.482);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_142.setTransform(-2.9,-9,0.482,0.482);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_143.setTransform(-5.8,-9.2,0.482,0.482);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_144.setTransform(-15.4,-9.2,0.482,0.482);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_145.setTransform(-41,-9.2,0.482,0.482);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_146.setTransform(-41.9,-9.7,0.482,0.482);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAAALQgJgGgFAAQABgDAFgFQAEgFAAgGQATAHAAAWIgEAAQgHAAgEgEg");
	this.shape_147.setTransform(-45.3,-9.2,0.482,0.482);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgFAMQgFgGADgTQAOACACAIQACAHgGAGQgEAEgCAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_148.setTransform(-17.7,-9.8,0.482,0.482);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_149.setTransform(-24.1,-10.2,0.482,0.482);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQABgFAGgCg");
	this.shape_150.setTransform(-3.1,-10.7,0.482,0.482);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_151.setTransform(-23.1,-10.7,0.482,0.482);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_152.setTransform(-34.7,-10.7,0.482,0.482);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgBgCIALgCQAAAGgHABIgMACQAAgFAIgCg");
	this.shape_153.setTransform(-35.9,-10.7,0.482,0.482);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_154.setTransform(-54,-10.7,0.482,0.482);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgJAJQgDgegMgDQABgHALgCIARgBQABAGgDACQgCABgFABQABAHAKACIASABQAAAGgHACIgNACQAAAHAFAMQAGAKgBAKIgDAAQgRAAgEgag");
	this.shape_155.setTransform(-19.8,-9.7,0.482,0.482);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_156.setTransform(-37.1,-10.9,0.482,0.482);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgOAEQACgUAPAEQAPAEgDAWQgPgKgOAAg");
	this.shape_157.setTransform(-41,-10.6,0.482,0.482);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgCgBIAMgDQAAAGgHABIgMACQABgFAGgBg");
	this.shape_158.setTransform(-45.6,-11.1,0.482,0.482);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgCgBIAMgDQAAAGgHABIgMACQAAgFAHgBg");
	this.shape_159.setTransform(-12.8,-11.6,0.482,0.482);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_160.setTransform(-26,-12.1,0.482,0.482);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_161.setTransform(-25.1,-12.6,0.482,0.482);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgcgKQAJgBABALQASgBASABQAYACgVAHIgjACQgUgBAGgUg");
	this.shape_162.setTransform(-35.5,-12.3,0.482,0.482);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_163.setTransform(-22.6,-13.1,0.482,0.482);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgvAbQgEgUgDgIQAQAKAOgBQAGgPgQgEQgQgDAGgRQAHADANAHQAMAIAIACQAAgXgUgHQAKgMAaANQAkATAHAAQgBAQgRgFIgWgLQgjAigOAjQgJgFgEgQg");
	this.shape_164.setTransform(-41.9,-10.8,0.482,0.482);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_165.setTransform(-8.7,-13.6,0.482,0.482);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_166.setTransform(-29.9,-13.3,0.482,0.482);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgBgCIALgCQAAAFgHACIgMACQAAgFAIgCg");
	this.shape_167.setTransform(-31.1,-13.6,0.482,0.482);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_168.setTransform(-52.1,-13.6,0.482,0.482);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_169.setTransform(-8.2,-14.5,0.482,0.482);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_170.setTransform(-28,-14.5,0.482,0.482);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgVABQgCgNAaACQAaADgLASQgMgLgbABg");
	this.shape_171.setTransform(-29.6,-14.3,0.482,0.482);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgZAAQgNgGAcgGIATgCQAQAAAEACQAFADgVAEQgXAFAJAPQgFgFgTgKg");
	this.shape_172.setTransform(-24.8,-14.6,0.482,0.482);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AACAKIgVgKQAEgQALAJQAQALAIgEQgBALgJAAIgIgBg");
	this.shape_173.setTransform(-33.5,-14.7,0.482,0.482);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_174.setTransform(-28.9,-15.5,0.482,0.482);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgBgBIALgDQAAAGgHABIgMACQAAgFAIgBg");
	this.shape_175.setTransform(-31.6,-15.5,0.482,0.482);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgMAIQABgOAJgCQAGgCAGAHQAGAFgEAEQgEADgIAAIgMgBg");
	this.shape_176.setTransform(-36.7,-15.1,0.482,0.482);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_177.setTransform(-49.7,-15.5,0.482,0.482);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAAAGQgPgKgOABQAIgRAbAIQAdAJgFATIgEAAQgNAAgNgKg");
	this.shape_178.setTransform(-47,-15.5,0.482,0.482);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_179.setTransform(-9.1,-16.5,0.482,0.482);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_180.setTransform(-23.1,-16.5,0.482,0.482);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_181.setTransform(-27.7,-16.3,0.482,0.482);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_182.setTransform(-49.9,-16.5,0.482,0.482);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAGAJQgfgCgEABQALgLASgEQATgFALALQAAALgTAAIgFgBg");
	this.shape_183.setTransform(-25.3,-16.6,0.482,0.482);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgTgKQATgLAbARQABAVgegVQgCABgGAHQgFAJADACQgZgPASgKg");
	this.shape_184.setTransform(-31.9,-16.5,0.482,0.482);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AACAHQgKgGgGgBQAEgKAKAEIAPAGQgDAIgGAAIgEgBg");
	this.shape_185.setTransform(-43.4,-16.7,0.482,0.482);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQAAgFAHgBg");
	this.shape_186.setTransform(-17.1,-17.4,0.482,0.482);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgIAKQgCgKAJgQQALANgBAJQgBAJgHABIgCABQgFAAgCgHg");
	this.shape_187.setTransform(-33.9,-16.9,0.482,0.482);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_188.setTransform(-47.2,-17.4,0.482,0.482);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAAAHQgIgBgBgHQADgIAEADQAIAGAEgBQgCAIgIAAIAAAAg");
	this.shape_189.setTransform(-51.4,-17.1,0.482,0.482);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgOgGQAVgHATAFQAEANgYgEQgXgCAEAMQgYgLAXgGg");
	this.shape_190.setTransform(-25.6,-17.7,0.482,0.482);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgCAKQgVgEALgQQAJgCAGAGQAJAGAFAAQACALgNAAIgIgBg");
	this.shape_191.setTransform(-42.5,-17.6,0.482,0.482);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgCALQgbgDALgSQANAKAaAAQADALgUAAIgGAAg");
	this.shape_192.setTransform(-28.3,-18.1,0.482,0.482);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgRAAQgCgMAYADQAXAEgQAPQADgDgggHg");
	this.shape_193.setTransform(-33.1,-18.2,0.482,0.482);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_194.setTransform(-40.5,-18.1,0.482,0.482);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_195.setTransform(-50.6,-18.1,0.482,0.482);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQABgFAGgCg");
	this.shape_196.setTransform(-33,-19.4,0.482,0.482);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgWAJQgXgPgEgCQACgQASAJQARAIADAIQAIgBAJgLQAIgLAOAEQAEAJADADQAGAGAHABQgEALgJgEQgLgGgGgBQgGAAgBAHIgDANIgBAAQgRAAgOgMg");
	this.shape_197.setTransform(-43.6,-19.1,0.482,0.482);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgHAQQgFgVAEgZQANgCgEAbQgDAbANgDQgHAMgEAAQgFAAgCgPg");
	this.shape_198.setTransform(-31.6,-19.1,0.482,0.482);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgCgCIARgCQgBAHgKABIgSABQABgGALgBg");
	this.shape_199.setTransform(-33.3,-20.3,0.482,0.482);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAAABQgWgVAYASQALANgCAAQgCAAgJgKg");
	this.shape_200.setTransform(-41.3,-19.9,0.482,0.482);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_201.setTransform(-47.7,-20.3,0.482,0.482);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_202.setTransform(-17.8,-20.8,0.482,0.482);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAAAFQgIgHgHgBQADgTAQAMQARAKgHAQQgGgCgIgJg");
	this.shape_203.setTransform(-44.3,-20.3,0.482,0.482);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_204.setTransform(-48.7,-20.8,0.482,0.482);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_205.setTransform(-16.9,-21.3,0.482,0.482);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_206.setTransform(-19.7,-21.3,0.482,0.482);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_207.setTransform(-30.6,-21.3,0.482,0.482);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_208.setTransform(-31.8,-21.3,0.482,0.482);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_209.setTransform(-32.8,-21.3,0.482,0.482);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_210.setTransform(-47.2,-21.3,0.482,0.482);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_211.setTransform(-11.6,-21.5,0.482,0.482);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_212.setTransform(-45.8,-21.8,0.482,0.482);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_213.setTransform(-48.2,-21.8,0.482,0.482);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQAAgFAHgCg");
	this.shape_214.setTransform(-12.8,-22.2,0.482,0.482);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgCAQQgbgJgFgYQAOgBATANQARALATgEQgIAQgQAAQgGAAgHgCg");
	this.shape_215.setTransform(-35.2,-21.6,0.482,0.482);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_216.setTransform(-25.5,-22.7,0.482,0.482);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgXAKQgGgTAUgBIAjABQgMAUgdAAIgIgBg");
	this.shape_217.setTransform(-28,-22.5,0.482,0.482);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAGAIQgYgLgLADQAGgPAWAHQAcAJADgBQgEALgJAAQgFAAgGgDg");
	this.shape_218.setTransform(-31.1,-22.5,0.482,0.482);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_219.setTransform(-13,-23.7,0.482,0.482);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQACgIAFADQAIAGAEgBQgCAIgIAAIAAAAg");
	this.shape_220.setTransform(-45.6,-23.4,0.482,0.482);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_221.setTransform(-48.7,-23.7,0.482,0.482);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgCAJQgHgBgDgHQgDgGAGgCQAIgDAPAKQgHAJgIAAIgBAAg");
	this.shape_222.setTransform(-31.3,-23.9,0.482,0.482);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_223.setTransform(-42.9,-24.2,0.482,0.482);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AADARQgOgMgSAAQADglAkgCQgXAUARAMQAaASAAATQgFgCgWgQg");
	this.shape_224.setTransform(-40.7,-23.2,0.482,0.482);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_225.setTransform(-27.5,-25.1,0.482,0.482);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_226.setTransform(-11.8,-26.1,0.482,0.482);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AAOAJQgNgLgFARQgCgFgQgKQgNgKABgOQADACAoAOQAbAIgBAZIAAAAQgEAAgRgQg");
	this.shape_227.setTransform(-13,-25.1,0.482,0.482);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQAEgKACAFQADAFAAAJQgCAHgDAAIgBgCg");
	this.shape_228.setTransform(-49.2,-25.6,0.482,0.482);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgHAEIgCgSQAKgCAFAGQADAFABAKQgFgBgDADIgCAIQgGgBgBgKg");
	this.shape_229.setTransform(-15.7,-26.1,0.482,0.482);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_230.setTransform(-9.1,-27.1,0.482,0.482);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_231.setTransform(-22.2,-26.8,0.482,0.482);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_232.setTransform(-46.8,-27.1,0.482,0.482);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_233.setTransform(-49.7,-27.1,0.482,0.482);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_234.setTransform(-13.5,-27.5,0.482,0.482);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_235.setTransform(-29.9,-27.5,0.482,0.482);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_236.setTransform(-52.1,-27.5,0.482,0.482);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_237.setTransform(-7.7,-28,0.482,0.482);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_238.setTransform(-10.1,-28,0.482,0.482);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQABgFAGgCg");
	this.shape_239.setTransform(-11.8,-28,0.482,0.482);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_240.setTransform(-46.3,-28,0.482,0.482);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_241.setTransform(-51.1,-28,0.482,0.482);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQACgIAGADQAHAGAEgBQgCAIgIAAIAAAAg");
	this.shape_242.setTransform(-14.7,-28.2,0.482,0.482);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_243.setTransform(-33.3,-28.5,0.482,0.482);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_244.setTransform(-49.7,-28.5,0.482,0.482);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_245.setTransform(-6.7,-29,0.482,0.482);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgOAPQACgBAHgTQAFgNAPAEIgJAUQgEAKgJAAIgHgBg");
	this.shape_246.setTransform(-19.3,-28.5,0.482,0.482);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_247.setTransform(-52.1,-29,0.482,0.482);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_248.setTransform(-53.5,-29,0.482,0.482);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_249.setTransform(-7.7,-29.5,0.482,0.482);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgIAGgDABIgCAAQgFAAgBgHg");
	this.shape_250.setTransform(-11.3,-29.3,0.482,0.482);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_251.setTransform(-16.9,-29.5,0.482,0.482);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_252.setTransform(-40.3,-29.5,0.482,0.482);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_253.setTransform(-51.1,-29.2,0.482,0.482);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_254.setTransform(-30.8,-30,0.482,0.482);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_255.setTransform(-54,-30,0.482,0.482);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_256.setTransform(-19.7,-30.4,0.482,0.482);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgFAGQgDgGAEgEQAHgHADAGQAEAFgFAFQgEAEgCAAQgCAAgCgDg");
	this.shape_257.setTransform(-50.1,-30.4,0.482,0.482);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQAEgKACAFQADAFAAAJQgCAHgDAAIgBgCg");
	this.shape_258.setTransform(-7.7,-30.9,0.482,0.482);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgBgCIALgCQAAAFgHACIgMACQAAgFAIgCg");
	this.shape_259.setTransform(-18.1,-31.4,0.482,0.482);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_260.setTransform(-41,-31.6,0.482,0.482);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_261.setTransform(-46.3,-31.6,0.482,0.482);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_262.setTransform(-53,-31.9,0.482,0.482);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_263.setTransform(-7.2,-32.4,0.482,0.482);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_264.setTransform(-17.8,-32.4,0.482,0.482);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_265.setTransform(-2.4,-32.9,0.482,0.482);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_266.setTransform(-34.2,-32.9,0.482,0.482);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgRAAQgCgMAYADQAXAEgQAPQADgDgggHg");
	this.shape_267.setTransform(-40.3,-32.6,0.482,0.482);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_268.setTransform(-45.3,-32.9,0.482,0.482);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgCgBIAMgDQAAAGgHABIgMACQABgFAGgBg");
	this.shape_269.setTransform(-46.5,-32.9,0.482,0.482);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_270.setTransform(-48,-32.7,0.482,0.482);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgEAJQgEgIACgEQAJgXAEAUQAEAVgIABIgBAAQgDAAgDgHg");
	this.shape_271.setTransform(-51.5,-32.4,0.482,0.482);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_272.setTransform(-10.1,-33.1,0.482,0.482);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_273.setTransform(-12.5,-33.3,0.482,0.482);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgCgBIAMgDQAAAGgHABIgMACQABgFAGgBg");
	this.shape_274.setTransform(-55.7,-33.3,0.482,0.482);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_275.setTransform(-56.9,-33.3,0.482,0.482);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AACAVQgGgBgCgLQgEgMAHgSQAMAVAAAMQAAAKgGAAIgBgBg");
	this.shape_276.setTransform(-6.3,-33,0.482,0.482);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgnA3QAMgTADgPIAFgjQgWgFABAcQAAAhgJADQgMgJAGgXQAHgXgLgOQAKgKAKAGQAPAHAPgDIAAAdQAMgCAKAFIARAHQAEgNgLgDQgEgCgTgBIAAgoQAGgVAEAUQADAUgDALIAyAAQgFAOgHAMQgFAIgDAPQgDgGgSgCQgSgCgBgKQgJACgGAWQgEARgOAAIgGgBg");
	this.shape_277.setTransform(-11.8,-31.4,0.482,0.482);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgJgTQAYAEgFAjQgXgCAEglg");
	this.shape_278.setTransform(-5,-33.6,0.482,0.482);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_279.setTransform(-7.7,-34.3,0.482,0.482);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_280.setTransform(-33.7,-34.1,0.482,0.482);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgJgEQABgEAIACQAIABACAEQADADgMAFQgMgHACgEg");
	this.shape_281.setTransform(-45.1,-33.9,0.482,0.482);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgKAUQAHgIABgJQACgKgKgCQAFgPAGAEQAGADADANQADANgFAHQgDAGgGAAQgEAAgFgCg");
	this.shape_282.setTransform(-52.7,-33.6,0.482,0.482);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AADBHQgCgBgCgLQgIgcgPAIQAJgLAUgJQgBgNgKAIQgQAMgMgHQAJgJgDgGQgCgFgOABQAFgQgBgSQgBgSAHgSQAOAFALABQAUABAOADQgFAHgGARQgHAOgLACQAHAEANAXQAMAUARACQABAJgGALQgGAKABAKIgWgPQgNgIAPANQgHAMgEAAIgBAAg");
	this.shape_283.setTransform(-35.7,-31.6,0.482,0.482);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_284.setTransform(-38.6,-34.5,0.482,0.482);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AABAKQgEgFgGAAIAAgTQANgDAEALQABADABASQgDAAgGgFg");
	this.shape_285.setTransform(-54.2,-34.3,0.482,0.482);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_286.setTransform(-56.7,-34.8,0.482,0.482);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_287.setTransform(-2.4,-35.3,0.482,0.482);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_288.setTransform(-4.1,-35.1,0.482,0.482);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_289.setTransform(-34.7,-35.3,0.482,0.482);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgEAUQAJgQAAgNQgMgDgFAKQgBADgBATQgIgCgBgOQAAgQgBgHIAxAAIgGAbQgGAMgNAAIgEAAg");
	this.shape_290.setTransform(-48.2,-34.5,0.482,0.482);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgQAnQgLgEgRgOQgGgyAkgLQAigLAZAhQADASgJAPIgOAaQgJACgJAAQgMAAgLgEg");
	this.shape_291.setTransform(-29.4,-33.7,0.482,0.482);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_292.setTransform(-54.5,-35.7,0.482,0.482);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_293.setTransform(-61.7,-36.2,0.482,0.482);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_294.setTransform(-64.1,-36.2,0.482,0.482);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_295.setTransform(1,-36.7,0.482,0.482);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_296.setTransform(-2.4,-36.7,0.482,0.482);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgIASQgMgXAHgYQAQgDACAZQABAZAKACQgGALgHAAQgFAAgGgNg");
	this.shape_297.setTransform(-10.7,-35.5,0.482,0.482);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgHAJQgDgPABgcQAVAVgCAwQgMgGgFgUg");
	this.shape_298.setTransform(-19,-35.3,0.482,0.482);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_299.setTransform(-41.9,-36.7,0.482,0.482);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgCgDIARgBQgBAHgKABIgSABQABgGALgCg");
	this.shape_300.setTransform(-59.3,-36.7,0.482,0.482);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_301.setTransform(-3.3,-37.2,0.482,0.482);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgCgCQAYgSgVAVQgJAKgCAAQgBAAAJgNg");
	this.shape_302.setTransform(-4.9,-36.8,0.482,0.482);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgFAHQgFgYgEgMQAOADAGAVQAEALAFAYQgPgDgFgUg");
	this.shape_303.setTransform(-17.8,-36,0.482,0.482);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_304.setTransform(-28,-37.2,0.482,0.482);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_305.setTransform(-45.8,-37.2,0.482,0.482);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgCgBIAMgDQAAAGgHABIgMACQABgFAGgBg");
	this.shape_306.setTransform(2.2,-37.7,0.482,0.482);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_307.setTransform(1,-37.7,0.482,0.482);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_308.setTransform(-36.6,-37.7,0.482,0.482);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_309.setTransform(-65.6,-37.7,0.482,0.482);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgIAGgDABIgCAAQgFAAgBgHg");
	this.shape_310.setTransform(6.5,-38,0.482,0.482);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_311.setTransform(-31.3,-38.2,0.482,0.482);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_312.setTransform(-38.1,-38.2,0.482,0.482);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_313.setTransform(2,-38.6,0.482,0.482);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_314.setTransform(-21.7,-38.6,0.482,0.482);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_315.setTransform(-27.7,-38.6,0.482,0.482);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_316.setTransform(-45.3,-38.4,0.482,0.482);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_317.setTransform(-65.6,-38.6,0.482,0.482);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_318.setTransform(-66.5,-38.6,0.482,0.482);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgOgQQAQADADgNQARAHgLAGIgPAHQgGALgBAWIgDgrg");
	this.shape_319.setTransform(0.5,-38.1,0.482,0.482);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_320.setTransform(-31.3,-39.1,0.482,0.482);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_321.setTransform(-35.7,-39.1,0.482,0.482);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_322.setTransform(-17.8,-39.4,0.482,0.482);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_323.setTransform(-65.6,-39.6,0.482,0.482);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_324.setTransform(8,-39.9,0.482,0.482);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_325.setTransform(6.3,-40.1,0.482,0.482);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_326.setTransform(-33.3,-40.1,0.482,0.482);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAAAAQAVgWgTAYQgKAJgCAAQgCAAAMgLg");
	this.shape_327.setTransform(-45.2,-40,0.482,0.482);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_328.setTransform(-58.4,-39.8,0.482,0.482);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_329.setTransform(-67.8,-40.1,0.482,0.482);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgLABQAKgLAGABQAHABAAAIQAAAHgGACIgDABQgFAAgJgJg");
	this.shape_330.setTransform(-0.1,-40.9,0.482,0.482);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_331.setTransform(-9.1,-41.1,0.482,0.482);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgHABQgLgOAMgLQAWANgDAkQgOgQgGgIg");
	this.shape_332.setTransform(-19.7,-40.1,0.482,0.482);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_333.setTransform(-21.2,-41.1,0.482,0.482);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAzA6QgCgTACgTQgHACgCAKIgBASQgpgLg6gdQAOgNgIgIQgEgEgTgHQgTgGgEgGQgGgJAQgQIAPAQQACAAAXgGQgBAEgFAGQgEAFAAAFQAUgGAAgYQAQACgGARIgKAVQATABAGgPQAEgKABgaQAVAHgIAQQgOAcABAJQASAHABgQQgBgWABgJQAQgIAHAcIADAKQABgBADgTQAPACgEAWQgEASgHAHQAXAIgDggQgDggAXAHQgCAKgIAfQgCAZAggHQgBAUgYgGQgUgFAFAfQgEAKgCAAQgDAAgBgMgAALAUQAAAIAJABQAJABACgKQgEABgJgGIgCgBQgDAAgCAGgAgIAKQAAAGAEABQAEABABgIQAAgFgDgBIgCAAQgDAAgBAGgAAXgHQgGAFAEACQACADAGgEQAGgEgEgEIgCgBQgCAAgEADgAgfgGQgHABAAAFIANgBQAHgBAAgHIgNADg");
	this.shape_334.setTransform(-52.8,-37.9,0.482,0.482);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgMAJQgIgIgHgBQgEgSAqgBQAPAAACADQADADgTADQgHACgCAJIgBATQgFgCgJgJg");
	this.shape_335.setTransform(-31.2,-40.8,0.482,0.482);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgJBGQAKgGgGgaQgLghgDgOQgBgHAHgWQAFgLgVAAQANgXAuADQgBAIgKABIgTABQgDAeANAUQgBADADAwQABAcgRAAIgFAAg");
	this.shape_336.setTransform(-6.5,-38.9,0.482,0.482);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgFAOQgQgPAIgTQANgBADAPQAFAPAIAAQgDAMgHAAQgFAAgGgHg");
	this.shape_337.setTransform(-18.4,-41.3,0.482,0.482);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgRAdQAPgIgOgUQgNgSAMgDQAQAAgBAFQAAAEgFALQANACADgJQACgDABgUQATALgLAcQgJAWgQAAQgGAAgGgCg");
	this.shape_338.setTransform(-27.8,-40.8,0.482,0.482);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgXAAQACgSAVALQASAJgCgMQAQAXgSAAQgOAAgXgNg");
	this.shape_339.setTransform(-56,-41.7,0.482,0.482);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_340.setTransform(-28.2,-42.5,0.482,0.482);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_341.setTransform(-30.6,-42.5,0.482,0.482);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_342.setTransform(-59.6,-42.5,0.482,0.482);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgOgnQAUADAGAaIADAyQgXgUgGg7g");
	this.shape_343.setTransform(-16.9,-41.3,0.482,0.482);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_344.setTransform(-23.6,-43,0.482,0.482);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_345.setTransform(-33.3,-43,0.482,0.482);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQAAgFAHgBg");
	this.shape_346.setTransform(-34.5,-43,0.482,0.482);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_347.setTransform(-61.2,-43,0.482,0.482);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgIAJIgGg1QAYAKABAfQADAtABADQgQgIgHgcg");
	this.shape_348.setTransform(-15.4,-42,0.482,0.482);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgDgDIASgBQgBAGgKACIgSABQABgGAKgCg");
	this.shape_349.setTransform(-27,-44,0.482,0.482);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_350.setTransform(-63.4,-44,0.482,0.482);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_351.setTransform(-28.4,-44.4,0.482,0.482);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgSAFQgBgHALgHQAJgHAJACQAKAEgBAQQgFABgDgDIgCgHQgGAAgBAGIgCANQgSgCAAgJg");
	this.shape_352.setTransform(-31.5,-44,0.482,0.482);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_353.setTransform(-20.7,-44.9,0.482,0.482);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_354.setTransform(-34.7,-44.9,0.482,0.482);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_355.setTransform(-35.7,-44.7,0.482,0.482);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_356.setTransform(-45.8,-44.9,0.482,0.482);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgYAZQgDgLAUgOQAOgLgLgDQgBgGADgCIAHgCIAUAAIgRAgQgKARgVAAIgBAAg");
	this.shape_357.setTransform(-54.5,-44,0.482,0.482);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_358.setTransform(-57.9,-44.9,0.482,0.482);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgRAAQgCgMAYADQAXAEgQAPQADgDgggHg");
	this.shape_359.setTransform(-64.9,-44.7,0.482,0.482);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_360.setTransform(6.3,-45.4,0.482,0.482);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgRAIQgEgagNgBQAIgLANAEQAQAFAMgIQAGADADATQABAQAKABQgHAUgLgPQgHgKgFgOQgLABAGAKQAMAQgHAMIgEAAQgOAAgEgWg");
	this.shape_361.setTransform(-5.8,-44.2,0.482,0.482);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgJALQgGgNgEggQAUABAIAZIALArQgUgEgJgUg");
	this.shape_362.setTransform(-7.9,-44,0.482,0.482);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgBgCIALgCQAAAGgHABIgMACQAAgFAIgCg");
	this.shape_363.setTransform(-26.7,-45.4,0.482,0.482);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQABgFAGgCg");
	this.shape_364.setTransform(-28.2,-45.4,0.482,0.482);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgOADQgFgEAHgDQAJgEAUAEQgHAKgKABIgDAAQgHAAgEgEg");
	this.shape_365.setTransform(-31.4,-45.4,0.482,0.482);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgZACQAVgggBgOIAnAAQABAXgMAVQgRAdgCAGQgPgGALgRQAOgXAAgDQgTACgIATQgFALgHAbQgRgQARgbgAALggQgHACAAAGIANgCQAHgBAAgHIgNACg");
	this.shape_366.setTransform(-52.5,-43.5,0.482,0.482);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgDgCIASgCQgBAHgKABIgSABQACgGAJgBg");
	this.shape_367.setTransform(-13,-45.9,0.482,0.482);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_368.setTransform(-37.1,-46.4,0.482,0.482);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgJACIAJgVQARAEgJALQgLAQADAIQgOgBAFgRg");
	this.shape_369.setTransform(2.2,-46.1,0.482,0.482);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_370.setTransform(-12.3,-46.9,0.482,0.482);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AAAAEQgUgIgOgBQAHgNAfAHQAhAIgCARQgOAAgVgKg");
	this.shape_371.setTransform(-25.5,-46.3,0.482,0.482);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_372.setTransform(5.3,-47.3,0.482,0.482);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_373.setTransform(-8.4,-47.1,0.482,0.482);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgQgLQATgEAaAJQADANgcgEQgagDACANQgSgTAWgFg");
	this.shape_374.setTransform(-32,-46.8,0.482,0.482);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_375.setTransform(-34.2,-47.3,0.482,0.482);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgZgNQALADAegEQAYgBgGAVQgQgQgTAJQgWAOgMADQALgQgBgNg");
	this.shape_376.setTransform(-27,-47.4,0.482,0.482);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgOAPQABgBAIgTQAFgNAPAEQADAegbAAIgFgBg");
	this.shape_377.setTransform(-43.4,-47.3,0.482,0.482);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_378.setTransform(-52.6,-47.8,0.482,0.482);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_379.setTransform(-35.2,-48.3,0.482,0.482);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_380.setTransform(-36.6,-48,0.482,0.482);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgBAKQgDgFAAgJQAEgKACAFQADAFAAAJQgCAHgDAAIgBgCg");
	this.shape_381.setTransform(-19.3,-48.3,0.482,0.482);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAGAKQgngDgGACQAGgXAbAFIAuAJQgEALgXAAIgHgBg");
	this.shape_382.setTransform(-32.5,-48.5,0.482,0.482);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AACAHQgKgGgGgBQAEgKAKAEIAPAGQgDAIgGAAIgEgBg");
	this.shape_383.setTransform(-46.3,-48.5,0.482,0.482);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgBAeQgOAAgJgFQAHgVgBgEQAAgGgaACQAAgGAHgCIANgCQADgQgNgEQALgQAZAMQAhAPAKgBQgIALgIAWIgOAkQgKgOgGgBgAARgMQgGAEAEAEQADACAFgEQAGgEgEgEIgCgBQgCAAgEADgAgHgWQgGACgBAGIANgCQAGgCAAgGIgMACg");
	this.shape_384.setTransform(-63.2,-46.8,0.482,0.482);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_385.setTransform(-51.1,-49.3,0.482,0.482);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgCgBIAMgDQAAAGgHABIgMACQABgFAGgBg");
	this.shape_386.setTransform(-10.8,-50.2,0.482,0.482);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAFAJQgigJgZAHQAJgZApAIQAUAFAnAMQgKAGgOAAQgMAAgOgEg");
	this.shape_387.setTransform(-31.8,-49.8,0.482,0.482);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_388.setTransform(-52.1,-50.2,0.482,0.482);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_389.setTransform(-38.6,-50.7,0.482,0.482);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgSAJQgLgIgPAEQACgTAgAAIA3AAQABAVgHgFQgQgIgIACQgGABgCAGIgCAMIgEABQgIAAgLgHg");
	this.shape_390.setTransform(-60.3,-50.2,0.482,0.482);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_391.setTransform(-1.9,-51.2,0.482,0.482);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_392.setTransform(-8.9,-51,0.482,0.482);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgCgCIARgCQgBAHgKABIgSABQABgGALgBg");
	this.shape_393.setTransform(-28.4,-51.2,0.482,0.482);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_394.setTransform(-44.1,-51.2,0.482,0.482);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgTABQACgIAOgBIAXAAQgBAPgPACIgEAAQgKAAgJgIg");
	this.shape_395.setTransform(1.2,-51.5,0.482,0.482);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_396.setTransform(-11.8,-51.7,0.482,0.482);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgdAPQAEABAGAFQAFAEAFAAQgGgWAAgHQAAgIAGgWQAMgDAKAFIARAIQgEALgJgEQgLgGgGgBQAHASgCAJQgEAVgBALIgJABQgVAAABgVg");
	this.shape_397.setTransform(-25.3,-50.2,0.482,0.482);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_398.setTransform(-54,-51.7,0.482,0.482);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_399.setTransform(-14,-52.2,0.482,0.482);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_400.setTransform(-23.1,-52.2,0.482,0.482);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_401.setTransform(-35.9,-52.2,0.482,0.482);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_402.setTransform(-44.8,-52.2,0.482,0.482);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_403.setTransform(-17.3,-52.6,0.482,0.482);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgGALQACgFgEgDIgIgCQgDgOAWAEQAVAEgLAQg");
	this.shape_404.setTransform(-28.4,-52.5,0.482,0.482);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgCAKQgVgEALgQQAJgCAGAGQAJAGAFAAQACALgNAAIgIgBg");
	this.shape_405.setTransform(-30.9,-52.3,0.482,0.482);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_406.setTransform(-39,-52.6,0.482,0.482);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_407.setTransform(-37.1,-53.1,0.482,0.482);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgJgTQAYAEgFAjQgRgJgCgeg");
	this.shape_408.setTransform(-40.7,-52.9,0.482,0.482);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgFAOQgKgSAHgQQATABgEAOQgEANAIABQgEAMgFAAQgDAAgEgHg");
	this.shape_409.setTransform(-24.4,-53.3,0.482,0.482);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgBgBIALgDQAAAGgHABIgMACQAAgFAIgBg");
	this.shape_410.setTransform(-36.4,-54.6,0.482,0.482);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_411.setTransform(-37.6,-54.6,0.482,0.482);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_412.setTransform(-24.6,-55,0.482,0.482);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_413.setTransform(-18.5,-55.5,0.482,0.482);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgCgCIARgCQgBAHgKABIgSABQABgGALgBg");
	this.shape_414.setTransform(-37.6,-55.5,0.482,0.482);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_415.setTransform(-41,-55.5,0.482,0.482);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQACgHADACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_416.setTransform(-39.1,-55.8,0.482,0.482);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgHAIQgBgEgBgSQATAHAAAWIgGAAQgIAAgDgHg");
	this.shape_417.setTransform(-24.3,-56.5,0.482,0.482);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_418.setTransform(-36.2,-57.2,0.482,0.482);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_419.setTransform(-38.6,-57.9,0.482,0.482);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgHAIQgBgEgBgSQATAHAAAWIgGAAQgIAAgDgHg");
	this.shape_420.setTransform(-29.6,-57.9,0.482,0.482);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_421.setTransform(-36.6,-58.4,0.482,0.482);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_422.setTransform(-20.2,-59.9,0.482,0.482);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_423.setTransform(-24.6,-59.9,0.482,0.482);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgOAPQAKgPAAgOQAEABAEAKQAEAIAHAAQABAGgDACQgCABgGABg");
	this.shape_424.setTransform(-33.7,-59.4,0.482,0.482);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_425.setTransform(-22.9,-60.1,0.482,0.482);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgFAMQgFgGADgTQAOACACAIQACAHgGAGQgEAEgCAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_426.setTransform(-37,-59.9,0.482,0.482);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgKASQgBgIAGgKQAFgLAAgKQAOgCgDAaQgCATgJAAQgFAAgFgEg");
	this.shape_427.setTransform(-21.4,-60,0.482,0.482);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgCBYIgCgNQABgNgUACQgcADgDgCQAEgUAPACQAJACAWAGQADgOgKgDQgEgCgTgBQgNgFADgCIAOgBQAegBgEgLQgCgJgIABQgKAAAAAIQgVgJARgGQAYgJAAgFQgCgIgIAEQgMAGgIgCIgFgtQgBgRAGgSQALALAEAVQAEAUgJAIQAYABgGgQQgMgZAEgKQAKAGATAJQARAJADAQQgJABgHgFQgJgGgFAAQgFAVAUAAIAjgBQgBAGgOAOQgKAMAFARQgQgKgOAAQAHAVAXgBIAAAyQgEAAgFgFQgGgFgFAAQgHACgCAJIgBATQgFAAgCgHgAAFAtQACAIAGgBQAEAAAIgHQAAgIgJAAIgBgBQgIAAgCAJgAAFgEIAUAAIAAgUIgUAAg");
	this.shape_428.setTransform(-27,-56.5,0.482,0.482);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_429.setTransform(-33.3,-60.8,0.482,0.482);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_430.setTransform(-24.1,-61.3,0.482,0.482);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_431.setTransform(-34.7,-61.8,0.482,0.482);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AAJAWQgLgNAHgPQgUAGgEAAQgGAAABgaQANAMAagCQAAAPABAEQACAJAHABQgCAOgGAAQgDAAgFgFg");
	this.shape_432.setTransform(-26.5,-61.2,0.482,0.482);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_433.setTransform(-19.7,-62.8,0.482,0.482);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_434.setTransform(-35.2,-62.8,0.482,0.482);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_435.setTransform(-28.7,-63.1,0.482,0.482);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgIgDQAIgMAFAFQAEADABAJQAAAKgGABIAAAAQgEAAgIgQg");
	this.shape_436.setTransform(-34,-62.8,0.482,0.482);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgBgBIALgDQAAAGgHABIgMACQAAgFAIgBg");
	this.shape_437.setTransform(-39.3,-63.3,0.482,0.482);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgCgCIARgCQgBAHgKABIgSABQABgGALgBg");
	this.shape_438.setTransform(-28.4,-64.2,0.482,0.482);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgDgCIASgCQgBAHgKABIgSABQABgGAKgBg");
	this.shape_439.setTransform(-31.3,-64.2,0.482,0.482);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_440.setTransform(-35,-64.2,0.482,0.482);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_441.setTransform(-38.6,-64.7,0.482,0.482);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_442.setTransform(-34.7,-65.2,0.482,0.482);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_443.setTransform(-37.1,-66.6,0.482,0.482);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgBgCIALgCQAAAGgHABIgMACQAAgFAIgCg");
	this.shape_444.setTransform(-22.4,-67.1,0.482,0.482);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_445.setTransform(-33.7,-68.6,0.482,0.482);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgJAKQACgVgCgJQASAKABAdQgFACgEAAQgJAAgBgLg");
	this.shape_446.setTransform(-22.9,-68.8,0.482,0.482);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AAAApQgMgbgMAEIAAg7QAJgUABAcIAAApQAGAAACgHIACgMQALAAgCAeQgCAcAWgJQgIAMgGAAQgGAAgFgJg");
	this.shape_447.setTransform(-24.6,-67.3,0.482,0.482);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_448.setTransform(-34.2,-69.5,0.482,0.482);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgMATQgNg6gJgRQAZAJAFApQARAAgLgQQgLgPAOABIAeAAQgIAMgEAmQgEAmAGABQgFAEgFAAQgQAAgLgmgAAHAZQgGAFAEADQADADAFgFQAGgEgEgEIgCAAQgCAAgEACgAgCAFQgGAFAEADQADADAEgFQAGgEgEgEIgCAAQgCAAgDACg");
	this.shape_449.setTransform(-31.8,-68,0.482,0.482);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgYAZQgKgKAAgPQAAgNAKgLQALgKANAAQAOAAAKAKQALALAAANQAAAOgLALQgKAKgOAAQgNAAgLgKg");
	this.shape_450.setTransform(-55.4,1.6,0.482,0.482);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(1,0,0,4).p("AA6AAQAAAYgRARQgRARgYAAQgXAAgRgRQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXg");
	this.shape_451.setTransform(-55.4,1.6,0.482,0.482);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,5.8).s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_452.setTransform(-55.4,1.6,0.482,0.482);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,8.4).s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_453.setTransform(-55.4,1.6,0.482,0.482);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgXAZQgLgLAAgOQAAgNALgLQAJgKAOAAQAPAAAKAKQAKALAAANQAAAPgKAKQgKAKgPAAQgOAAgJgKg");
	this.shape_454.setTransform(-68.8,-45.6,0.482,0.482);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(1,0,0,4).p("AA6AAQAAAYgRARQgRARgYAAQgXAAgRgRQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXg");
	this.shape_455.setTransform(-68.8,-45.6,0.482,0.482);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,5.8).s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_456.setTransform(-68.8,-45.6,0.482,0.482);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,8.4).s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_457.setTransform(-68.8,-45.6,0.482,0.482);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AgYAYQgKgKAAgOQAAgNAKgLQAKgKAOAAQAOAAALAKQAKALAAANQAAAOgKAKQgLALgOAAQgOAAgKgLg");
	this.shape_458.setTransform(-5.1,-0.1,0.482,0.482);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(1,0,0,4).p("AA6AAQAAAYgRARQgRARgYAAQgXAAgRgRQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXg");
	this.shape_459.setTransform(-5.1,-0.1,0.482,0.482);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,5.8).s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_460.setTransform(-5.1,-0.1,0.482,0.482);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,8.4).s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_461.setTransform(-5.1,-0.1,0.482,0.482);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#000000").s().p("AgYAZQgKgLAAgOQAAgNAKgKQALgLANAAQAOAAALALQAKAKAAANQAAAOgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_462.setTransform(12.2,-46.9,0.482,0.482);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(1,0,0,4).p("AA6AAQAAAYgRARQgRARgYAAQgXAAgRgRQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXg");
	this.shape_463.setTransform(12.2,-46.9,0.482,0.482);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,5.8).s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_464.setTransform(12.2,-46.9,0.482,0.482);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,8.4).s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_465.setTransform(12.2,-46.9,0.482,0.482);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKALAAANQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape_466.setTransform(-29.1,-76.2,0.482,0.482);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(1,0,0,4).p("AA6AAQAAAYgRARQgRARgYAAQgXAAgRgRQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXg");
	this.shape_467.setTransform(-29.1,-76.2,0.482,0.482);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,5.8).s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");
	this.shape_468.setTransform(-29.1,-76.2,0.482,0.482);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,8.4).s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjAAQgiAAgYgZg");
	this.shape_469.setTransform(-29.1,-76.2,0.482,0.482);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgdAeQgMgMAAgSQAAgQAMgMQANgNAQAAQARAAANANQAMAMAAAQQAAASgMAMQgNAMgRAAQgQAAgNgMg");
	this.shape_470.setTransform(-27.9,-32.8,0.482,0.482);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.rf(["#FAAC18","#FAAE17","#FBB513","#FDC00B","#FFCA05","#FFD024","#FFD74A","#FFDD6B","#FFE183","#FFE495","#FFE6A0","#FFE7A3"],[0,0.361,0.49,0.584,0.631,0.663,0.714,0.765,0.816,0.875,0.929,1],0,0,0,0,0,18.1).s().p("AgYAbIgzCKIAJhTIhOAdIB4hUIibAEIB/gaIh6g8ICFAxIhYh7IBpBRIgeh+IA2B+IAgiDIgLCJIBahlIhFBzIB7gvIh7BFICKAQIiMgFIByBYIhwg6IAyB4IhciFIAJCeg");
	this.shape_471.setTransform(-27.8,-32.4,0.482,0.482);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.rf(["#17EB52","#28C2F3","#00AEEE","#0095DA"],[0.114,0.435,0.722,1],0,0,0,0,0,20.2).s().p("AiOCPQg7g7AAhUQAAhTA7g7QA8g7BSAAQBTAAA8A7QA7A7AABTQAABUg7A7Qg8A7hTAAQhSAAg8g7g");
	this.shape_472.setTransform(-27.9,-32.8,0.482,0.482);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.rf(["#F7C9D6","#E012D9"],[0.388,0.992],0,0,0,0,0,75.3).s().p("AnrLLQgagNAfhOQAUgxBAh7QBFiDAYg2QAphggKglQgJglhXgrQgsgViJg0Qh5gvgvgcQhGgqANglQAOgmBOAEQAvACB+AaQCCAaA8AFQBjAHAsggQBEgyAchiQAUhDAEhyQAFiBAFgYQALhAApgBQArAAAaBNQATA3APB3IAYC5QAQBbAaAUQAyAnBogLQBFgHB/gkQCIgmAmgGQBNgMAMAkQALAkhEAgQgXALiLAxQh0Apg5AmQhTA1gLBFQgJA9AhBhQAVA9A0BxQAzBtALAmQAVBAgcANQgoATg5g0QgggehMhgQhNhigrgnQhGhBg6AAQg8AAhJBIQgrAqhVBvQhQBpgmAjQgtAogkAAQgOAAgMgGg");
	this.shape_473.setTransform(-28.8,-35.7,0.482,0.482);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AABsyQBegBBpC6QAbAxAzBeQArBKAhAWQAhAXBTASQAwAKBrAUQDJAqAZBRQAaBSiECTQgjAohEBKQg2A+gMAkQgMAlADBdQACA2AHB5QALDhg9AcQg1AZg6gQQgngLhIgqQhUgygogRQhOghhMAAQhLAAhUAjQgjAPhnA3QhQArgvALQhEAPg6geQghgRgHhCQgEgxAKhiQAPicABgJQAGhbgNgvQgMgvg6hDQgGgHhshwQhGhIgbgvQglhBASgxQARgxBCgdQAxgVBcgQQAzgJBkgQQBPgRAhgbQAggaAthNQA1hgAdgxQBsi6BgAAg");
	this.shape_474.setTransform(-29.1,-36.7,0.482,0.482);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.rf(["#FAAC18","#FAAE17","#FBB513","#FDC00B","#FFCA05","#FFD024","#FFD74A","#FFDD6B","#FFE183","#FFE495","#FFE6A0","#FFE7A3"],[0,0.361,0.49,0.584,0.631,0.663,0.714,0.765,0.816,0.875,0.929,1],0,0,0,0,0,83.8).s().p("AoMMfQghgRgHhCQgEgxAKhiIAQilQAGhbgNgvQgMgvg6hDIhyh3QhGhIgbgvQglhBASgxQARgxBCgdQAxgVBcgQICXgZQBPgRAhgbQAggaAthNQA1hgAdgxQBsi6BgAAQBegBBpC6QAbAxAzBeQArBKAhAWQAhAXBTASQAwAKBrAUQDJAqAZBRQAaBSiECTQgjAohEBKQg2A+gMAkQgMAlADBdQACA2AHB5QALDhg9AcQg1AZg6gQQgngLhIgqQhUgygogRQhOghhMAAQhLAAhUAjQgjAPhnA3QhQArgvALQgXAFgWAAQgrAAgmgUg");
	this.shape_475.setTransform(-29.1,-36.7,0.482,0.482);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.8,-80.2,89.1,85.9);


(lib.Diatom07 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAUQgFgrAiAEIgHAcQgFALgMAAIgFAAg");
	this.shape.setTransform(26.9,59.6,0.516,0.516);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJABQACgIAHAAQAKABAAAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_1.setTransform(23.5,57.5,0.516,0.516);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_2.setTransform(39.8,43.8,0.516,0.516);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAMQgDgJABgMQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_3.setTransform(48.5,43.6,0.516,0.516);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEARIAAgpQAHgUACAcIAAApQgEAIgBAAQgEAAAAgQg");
	this.shape_4.setTransform(48.6,39.7,0.516,0.516);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_5.setTransform(47,32.5,0.516,0.516);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQACgIAFADQAIAGAEgBQgCAIgIAAIAAAAg");
	this.shape_6.setTransform(28.7,32.3,0.516,0.516);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_7.setTransform(44.4,27.3,0.516,0.516);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgEAAIAAAAg");
	this.shape_8.setTransform(35.6,25.5,0.516,0.516);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAFgJQACAQgLADQgDgPAMgEg");
	this.shape_9.setTransform(37.2,19.3,0.516,0.516);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_10.setTransform(28.4,18.6,0.516,0.516);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAdQAAgJAIgSQAGgPgEgRQANAAgBAiQAAAbgNAAQgEAAgFgCg");
	this.shape_11.setTransform(28.2,70.7,0.516,0.516);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4D3A2").s().p("AgMBXQghgygOgRQACgJAJABQAJAAAAAIQAGhdAYgkQALAYgKAyQgGAcgPAvQANAeARAOQAXASAkgCQgQAKgOAAQgXAAgTgXg");
	this.shape_12.setTransform(25,70.1,0.516,0.516);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_13.setTransform(26.1,62.7,0.516,0.516);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_14.setTransform(23.8,62.7,0.516,0.516);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgIAGgDABIgCAAQgFAAgBgHg");
	this.shape_15.setTransform(33.8,59.3,0.516,0.516);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_16.setTransform(23.2,59.1,0.516,0.516);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_17.setTransform(34.3,58,0.516,0.516);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_18.setTransform(32.8,58,0.516,0.516);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AAFgiQAGAFABAbQABAWAWAFQgKANgWgHQgXgHgOALQAegZAJgsg");
	this.shape_19.setTransform(21.7,59.6,0.516,0.516);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_20.setTransform(23,57,0.516,0.516);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_21.setTransform(33.6,56.8,0.516,0.516);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBgCIALgCQAAAGgHABIgMACQAAgFAIgCg");
	this.shape_22.setTransform(34.3,55.5,0.516,0.516);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_23.setTransform(32.5,55.5,0.516,0.516);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_24.setTransform(21.7,55.7,0.516,0.516);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_25.setTransform(20.4,54.6,0.516,0.516);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJAHQAUgYgFgRQAYAAgSAcIgZApQgNgIARgUg");
	this.shape_26.setTransform(36.1,55.5,0.516,0.516);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_27.setTransform(34.8,54.1,0.516,0.516);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgIAGgDABIgCAAQgFAAgBgHg");
	this.shape_28.setTransform(33.3,54.1,0.516,0.516);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_29.setTransform(22.2,53.9,0.516,0.516);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_30.setTransform(32.5,52.9,0.516,0.516);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_31.setTransform(35.9,52.6,0.516,0.516);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_32.setTransform(34.1,52.6,0.516,0.516);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_33.setTransform(21.2,52.6,0.516,0.516);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQADgIAFADQAHAGAEgBQgBAIgJAAIAAAAg");
	this.shape_34.setTransform(19.4,52.7,0.516,0.516);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_35.setTransform(35.1,51.1,0.516,0.516);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQABgFAGgCg");
	this.shape_36.setTransform(21.9,50.8,0.516,0.516);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCgCQAZgSgWAVQgJAKgCAAQgCAAAKgNg");
	this.shape_37.setTransform(20,51.2,0.516,0.516);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHAIQgBgEgBgSQAUAHgBAWIgGAAQgIAAgDgHg");
	this.shape_38.setTransform(36.9,50.8,0.516,0.516);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQAAgEAGAIQAHAIAAAGQAAABAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgCAAgEgHg");
	this.shape_39.setTransform(32.8,50.9,0.516,0.516);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_40.setTransform(34.1,49.8,0.516,0.516);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQADgIAFADQAHAGAEgBQgBAIgJAAIAAAAg");
	this.shape_41.setTransform(37.9,49.6,0.516,0.516);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_42.setTransform(20.9,49.5,0.516,0.516);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_43.setTransform(18.8,49.5,0.516,0.516);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_44.setTransform(33.6,48.8,0.516,0.516);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_45.setTransform(36.9,48.2,0.516,0.516);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_46.setTransform(35.1,48.2,0.516,0.516);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_47.setTransform(39,48,0.516,0.516);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_48.setTransform(26.3,48,0.516,0.516);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AABAYQAIgcgXAAQALgNgBgbQAJAOAEAaQAEAPACAiIgGAAQgMAAAEgVg");
	this.shape_49.setTransform(23.2,49.8,0.516,0.516);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_50.setTransform(21.7,47.7,0.516,0.516);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQADgIAFADQAHAGAEgBQgBAIgJAAIAAAAg");
	this.shape_51.setTransform(19.9,48.1,0.516,0.516);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_52.setTransform(17.8,47.9,0.516,0.516);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_53.setTransform(34.1,47.2,0.516,0.516);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgBgCIALgCQAAAGgHABIgMACQAAgFAIgCg");
	this.shape_54.setTransform(37.9,46.7,0.516,0.516);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_55.setTransform(35.9,47,0.516,0.516);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgLABQAKgLAGABQAHABAAAIQAAAHgGACIgDABQgFAAgJgJg");
	this.shape_56.setTransform(20.5,46.3,0.516,0.516);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_57.setTransform(18.8,46.4,0.516,0.516);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_58.setTransform(35.1,45.7,0.516,0.516);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHAEQABgPgBgIQARAGgCAIIgGAZQgIgCgBgOg");
	this.shape_59.setTransform(29.6,46.4,0.516,0.516);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_60.setTransform(37.2,45.1,0.516,0.516);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_61.setTransform(33.6,45.4,0.516,0.516);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_62.setTransform(26.6,45.1,0.516,0.516);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_63.setTransform(39,44.9,0.516,0.516);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_64.setTransform(21.2,44.6,0.516,0.516);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgIAGgDABIgCAAQgFAAgBgHg");
	this.shape_65.setTransform(19.9,44.8,0.516,0.516);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgOAKQAIgUAVABQgHATgTAAIgDAAg");
	this.shape_66.setTransform(17.6,44.9,0.516,0.516);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_67.setTransform(36.1,44.1,0.516,0.516);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_68.setTransform(34.6,44.1,0.516,0.516);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgBgCIALgCQAAAFgHACIgMACQAAgFAIgCg");
	this.shape_69.setTransform(20.4,43.1,0.516,0.516);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_70.setTransform(18.3,43.3,0.516,0.516);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_71.setTransform(37.2,42.6,0.516,0.516);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_72.setTransform(35.6,42.6,0.516,0.516);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_73.setTransform(25.8,42.6,0.516,0.516);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgvAsQABgKAOgKQAOgKABgKQgRAJgBgRQgCgegKgLQALgDAFAHQADAEABAMQAJABALgGQAJgGAKABQADAOgPAIQgPAIAIATQBWAngvgTIgZAAQgNgBgBgJQgEABgKAPQgFAHgJAAQgFAAgHgDg");
	this.shape_74.setTransform(24.4,44.7,0.516,0.516);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgFAMQgFgGADgTQAOACACAIQACAHgGAGQgEAEgCAAQgBAAAAAAQgBgBgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_75.setTransform(16.7,43,0.516,0.516);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AACAUQAGgQgPgEQgQgDAGgQQAQgCAPAXQANASgRAAIgIAAg");
	this.shape_76.setTransform(39.4,42.8,0.516,0.516);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_77.setTransform(35.1,41.5,0.516,0.516);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_78.setTransform(21.7,41.5,0.516,0.516);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_79.setTransform(38.2,41,0.516,0.516);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_80.setTransform(36.7,41,0.516,0.516);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_81.setTransform(33.6,41,0.516,0.516);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgjBaQAIgWASgOQADgPgYgDQgYgDAFgTQALAMAYgBQAYgCAAgTQACgJgUAAQgTAAAIgUIAdAAQAGgMgMgdQgHgTAXAAQgIgVgVgJQALgRAPATQATAXAOgFQgJAMgVAIQAQBCg3CFQgbgHALgbg");
	this.shape_82.setTransform(31.7,47.2,0.516,0.516);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgaAMQgFgbgNgEQADgSARALQARAMgHAOQAMgBAOgVQAOgSATABQgmAngLAoQgPgBgHgbg");
	this.shape_83.setTransform(28.4,42.8,0.516,0.516);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgSAKQgGgSAPgCIAeABQgCAUgaAAIgLgBg");
	this.shape_84.setTransform(24.5,41.3,0.516,0.516);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_85.setTransform(19.6,41.3,0.516,0.516);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AABAKQgEgFgGAAIAAgTQANgDAEALQABAEABARQgDAAgGgFg");
	this.shape_86.setTransform(17.3,41.5,0.516,0.516);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_87.setTransform(40,40.7,0.516,0.516);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_88.setTransform(32.5,40,0.516,0.516);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_89.setTransform(37.7,39.5,0.516,0.516);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgIAGgDABIgCAAQgFAAgBgHg");
	this.shape_90.setTransform(35.9,39.7,0.516,0.516);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_91.setTransform(34.1,39.7,0.516,0.516);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAFARQgOgIgPADQgBgKAVgBQASAAgJgSQAOgDAEAKQACAEAAASQgHAHgGAAQgEAAgDgCg");
	this.shape_92.setTransform(27.9,40.1,0.516,0.516);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgIAGgDABIgCAAQgFAAgBgHg");
	this.shape_93.setTransform(39.5,39.2,0.516,0.516);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgIAGQgDgGAKgLQAMAKgBAGQgBAHgIAAIgBAAQgGAAgCgGg");
	this.shape_94.setTransform(20.5,39.3,0.516,0.516);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgDAKQgFgFgGAAQABgDAFgFQAFgFgBgGQAEABAEAFQAGAFAFgBQgBAEgEAEQgFAGAAAFQgEgBgEgEg");
	this.shape_95.setTransform(16.5,39.5,0.516,0.516);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQAAgFAHgCg");
	this.shape_96.setTransform(34.8,38.4,0.516,0.516);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_97.setTransform(33,38.4,0.516,0.516);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s().p("AAPC1QgOgBgHgFQgDgSAJgQQAMgWABgEQgJgRgHgGQgMgKgVADQADgJgJgpQgHgjANgOQgBgHgKgCIgTgBQgGgcACgSQACgTAMgZQgOgdgCgRQgCgcAcgGQgFASAKAdQAHAWgMALQAGAFAGAmQAFAdAXgCQACAMgGAEQgEADgMABQgBAUASAQQAOAMgLAVQACAIAHgEQAMgFAIABQACAMgGAEQgEADgMABQADAVAYAhQAWAdABAbQAGACACgEQABgCABgGQANAOgEADQgCACgOgDQgggFAJATQgKgOgIAAg");
	this.shape_98.setTransform(17.7,48.2,0.516,0.516);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_99.setTransform(38.7,37.9,0.516,0.516);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_100.setTransform(36.7,37.9,0.516,0.516);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_101.setTransform(21.4,38.1,0.516,0.516);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgEAeQAFgTgMgMQgPgNACgPQAQgBAIAWQAIAUARgCQAAAEgFAGQgFAFAAAFg");
	this.shape_102.setTransform(18.1,38.7,0.516,0.516);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_103.setTransform(37.7,36.9,0.516,0.516);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQABgFAGgCg");
	this.shape_104.setTransform(35.9,36.9,0.516,0.516);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_105.setTransform(26.9,36.4,0.516,0.516);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_106.setTransform(36.9,35.3,0.516,0.516);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_107.setTransform(34.8,35.6,0.516,0.516);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_108.setTransform(16.8,35.6,0.516,0.516);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_109.setTransform(19.9,34.8,0.516,0.516);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgGAGQAGgKAAgGQALgPgEAQIgHAcQgKgEAEgJg");
	this.shape_110.setTransform(39,34.6,0.516,0.516);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_111.setTransform(37.7,34,0.516,0.516);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_112.setTransform(35.9,34,0.516,0.516);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_113.setTransform(34.6,33.8,0.516,0.516);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_114.setTransform(21.9,33.5,0.516,0.516);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgCgCIAMgCQAAAGgHABIgMACQABgFAGgCg");
	this.shape_115.setTransform(36.9,32.7,0.516,0.516);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgFAGQgEgGAFgEQAGgHAEAGQAEAFgFAFQgEAEgCAAQgCAAgCgDg");
	this.shape_116.setTransform(38.7,32.8,0.516,0.516);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_117.setTransform(35.1,32.5,0.516,0.516);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_118.setTransform(17.3,32.5,0.516,0.516);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_119.setTransform(22.5,32,0.516,0.516);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_120.setTransform(36.1,31.2,0.516,0.516);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_121.setTransform(34.6,30.7,0.516,0.516);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_122.setTransform(35.1,29.7,0.516,0.516);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFF00").s().p("AgSBQQgQgbgIgOQgNgaAHggQAVAAAGgTQADgKAAgfQANAGAdAHQAYAIADATQgLACgMgJQgMgHgPAEIgGAeQgCAZASAEQgiACALAkIAGAXQABAJgKAAIgDAAg");
	this.shape_123.setTransform(16.2,33.5,0.516,0.516);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgIAKQgSgaAQgHQAJABACAWQADASAPgCQgEAIgGAAQgHAAgKgOg");
	this.shape_124.setTransform(37.5,30.1,0.516,0.516);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgIAGQgDgGAKgLQAMAKgBAGQgBAHgIAAIgBAAQgGAAgCgGg");
	this.shape_125.setTransform(19.5,29.5,0.516,0.516);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAAAHQgJgBAAgHQACgIAFADQAIAGAEgBQgBAIgJAAIAAAAg");
	this.shape_126.setTransform(17.8,29,0.516,0.516);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_127.setTransform(37.7,28.1,0.516,0.516);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AADAHQgIgGgEAAQACgIAIABQAJAAAAAHQgBAGgEAAIgCAAg");
	this.shape_128.setTransform(35.9,28.3,0.516,0.516);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgBgCIALgCQAAAGgHABIgMACQAAgFAIgCg");
	this.shape_129.setTransform(34.3,28.1,0.516,0.516);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgdgYQAGAJAaANQAXAKAEARIgEAAQgsAAgLgxg");
	this.shape_130.setTransform(23.5,37.4,0.516,0.516);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AAaBPQgIgLgSghQgTgBgPAVQgPAVgUgBQAHgIABgJQACgLgKgCQAPgDAKgDQASgHgDgbQAJgCAHAGQAJAGAEAAIAAgTQADgLgTAGQgVAIgCAGQgVgKAXgJQAKgEAbgGQACgMgOgEQgRgFAAgJQgMgJAHADQARAHAIgBQAGgDgCgQQgCgSAHgNQAVAHAEAQQAFAQgUALQABAPAJAkQAGAXgGAZQADAMALAOIAQAYQAJgIAGACQAFADAAANQgagFgSgVg");
	this.shape_131.setTransform(27.1,33.3,0.516,0.516);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAAAHQgIgBgBgHQADgIAEADQAIAGAEgBQgBAIgJAAIAAAAg");
	this.shape_132.setTransform(20.9,27.9,0.516,0.516);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_133.setTransform(18.8,27.8,0.516,0.516);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_134.setTransform(24.3,27.1,0.516,0.516);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_135.setTransform(35.4,26.8,0.516,0.516);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_136.setTransform(33.6,26.6,0.516,0.516);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_137.setTransform(20.4,26.3,0.516,0.516);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_138.setTransform(33,25.5,0.516,0.516);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_139.setTransform(27.4,25.5,0.516,0.516);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAEAKQgHgWgLAFQAHgUAKAPQAIALAEANQgCAHgDAAQgDAAgDgJg");
	this.shape_140.setTransform(34.1,24.6,0.516,0.516);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_141.setTransform(32.5,24,0.516,0.516);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgDAKQgFgFgGAAQABgDAFgFQAEgFAAgGQAEABAEAFQAFAEAGAAQAAAEgFAEQgFAFAAAGQgEAAgEgFg");
	this.shape_142.setTransform(20.1,24.5,0.516,0.516);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_143.setTransform(23,23.7,0.516,0.516);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_144.setTransform(21.4,23.2,0.516,0.516);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgBgBIALgDQAAAGgHABIgMACQAAgFAIgBg");
	this.shape_145.setTransform(33.3,22.4,0.516,0.516);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_146.setTransform(27.4,22.4,0.516,0.516);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_147.setTransform(25.8,21.9,0.516,0.516);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_148.setTransform(22.7,21.4,0.516,0.516);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgHACIgMACQABgFAGgBg");
	this.shape_149.setTransform(21.4,21.4,0.516,0.516);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_150.setTransform(42.1,20.9,0.516,0.516);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_151.setTransform(27.4,20.4,0.516,0.516);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAGgDAAIgBAAg");
	this.shape_152.setTransform(22.2,20.1,0.516,0.516);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_153.setTransform(27.4,19.3,0.516,0.516);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFF00").s().p("AhNBRQgHggAPgTQASAiAIgkQAJgjgPgWQATgMAPgCIAjgGQgIgSgMgCQABgSAYgHQAegJAFgGQALACAAAbQgBAcAKADQgDARgJgSQgKgRACgMQgLAHgSAYQgQAWgPAHQAAAPAAAEQACAJAIABQgXAAgGARQgKAZgKAIIANALQAJAHgCAMQgZgHgBABQgBABAHAZIgJAAQgXAAgGgdg");
	this.shape_154.setTransform(19.9,22.2,0.516,0.516);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgFAJQgEgCABgHQACgHAFgCQAFgCAFALQgJAKgEAAIgBgBg");
	this.shape_155.setTransform(38,52.6,0.516,0.516);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgEAKQgHgBAAgIQAAgHAGgCQAFgDAMAKQgJALgGAAIgBAAg");
	this.shape_156.setTransform(36.3,25.4,0.516,0.516);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgGADQAGgIgBgEQAJACgBAIQgBAJgHAAQgIgCADgFg");
	this.shape_157.setTransform(35.4,23.7,0.516,0.516);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_158.setTransform(33.8,21.4,0.516,0.516);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgPAOQACgGAJgIQAHgHABgIQATADgLAQQgIAMgKAAQgEAAgFgCg");
	this.shape_159.setTransform(32.6,36.9,0.516,0.516);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFF00").s().p("AhAHGQgTgJgBgaQAvAMAkg9QAjhNAVgYQABgXgVgHQAcgHAJggQAIgfgPgeQAGgBACADQACADAAAFQAEgCABgUQACgTANgJQgGgVACggIAEguQAAgGgHgBIgNgDQAMgMgCgcIgLAOQgHAIgMgCQgCgRAOgKQARgMABgLQAAgOgKgVQgJgVgBgOQAAgGgHgBIgNgDQAMgVgHgTQgOgkgBgEIgLAOQgHAIgMgCQAXgQgJgbQgRgfgGgQQgPALgPgBQgCgLAGgFQAEgCAMgCQgCgLgVgQQgSgNABgUQgFgBgDADIgCAIQgHgBgBgKIgCgTQgTANANAWQARAcgBAHQgFACgDgEIgCgIQgEgMgMAOQgOAPgKgRQAIAWAWgCQABAPgBAZIAAAeQAEAagDgEQADAFAJAIQAIAGgBAJQAAAGgGAQQgFAOABAOQAKAMAUAIIgFAZIAFAZQgMABgXAkQgSAagbgXQgBgJAXAIQAYAIgGgbQgEgQgRAIQgXAKgGgCQAPgRAIgGQANgMAOAPQAFgagfgnQgYgdAegaQABgSgWgPQgWgOADgXQARADADgNQgNgrgDgSQgEgfAKgSQgRgEgDgaQgDgaANgOIAoAAQgCARAOAHIAcAGQACAGgEACQgCACgGAAQACAIAEgBQAFgCgBgFQAIACARATQANAOAWgFQgFAUAMANQAPANgDAOQAGACACgEQACgCAAgGQAUAHAJAtQAKArAVAFQABAPgBAFQgCAJgIABQAXAVASAxQAYBGAFAKQACAJgFAIQgGAIgBAFQAMAVABAVQACAeAFARQgPAbgBAcIgEBBIgLAOQgHAIgMgCQAPAQgMAVQgQAaADARIgUAAIAAAoQgMAEgMAWQgLAWgPACQgBAGADACQACACAGAAQgEAPgHACQgHACgMgJQAAAJAGALQAGALgCAJQgPgEgFANQgHAUgCABIgSACQgUAAgMgHg");
	this.shape_160.setTransform(36.1,38.7,0.516,0.516);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_161.setTransform(30.5,14.2,0.516,0.516);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAIAMQgDgEgBgLQgPAJgOAAQgFgcAgAIQAhAHgLAXIgGABQgHAAgDgFg");
	this.shape_162.setTransform(28.5,74,0.516,0.516);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F7EDEB").s().p("Ai9K3QAGgKARgHQAWgJAFgEQgNgNAIgRQAMgUADgKQAFgugEgfQgHgmgEgjQgBgHgKgCIgTgBIAAg8QgWAHABAvQACBHgBAFQAGARgIASQgIARAAggIAAhGQgLgmgBgjQgBgOADg/QgbAIgBAeQAAAHAIA3QgZASgGg8QgGg0AHgaQAEgQgJgOQgIgPADgPQAfADAFgVQAEgQgKgaQAeAKgLAkQgJAegUAOQACAKAZAJQASAHgOANQAIgHAcADQAVACACgbQALAHAAA1QAAArAdgDQgBAHgOACQgOACgBAJQgGAiAmAaQARAMAEAHQAHAMgKATQATgGAPgUIAagiQAOgFAQgUQAQgUANgFIAegkQARgWAXgCQAAgXASgPQAWgOAKgIQAAgeAPgUQAKgOAZgQQAAgXAJgSQAHgNAOgQQAFggADhaQADhPAJgmQgWgcgKgPQgRgagBgfIg7hVQgigzgRgsQgUAJgGgGQgKgLgOgCQgJgKgVgrQgRgggggPQgBgSgRgSQgTgTgDgPQgUAYgKAKQgRASgXgMQAegMgNgxQgPg0AIgHQgIgYgqgGQAFgRARAIQAWALAGgCQBRBpAnBLQB7BYBMBtQBjCNABCYQABBRgfBWQgSAzg0BlQhkBVhGBVQhQBjgxBvQgIAAgTAIQgJADgKAAQgGAAgIgBg");
	this.shape_163.setTransform(38.4,40,0.516,0.516);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F7EDEB").s().p("AAsIJQg2hDg3gdQgLgcgYgbQgIgJglgkQgDgcgRgbQgUgdgKgQQgCgegMgtQgNgzgDgYIAJgvQAFgcgEgYQAOhQArhOQAVgqA+haQAUgMAeghQAeghATgMQAJgVAigqQAdglAIgeIAog9QAXgkAlgDQgKASgDADQgKALgRgCQgCAfgKBAQgEA4AaAnIAaAAQANgBABgJQASAKgJAbQgKAjABAIQgHgBgBgKIgCgTQgugmgsg+QgNAPgVAjQgVAegZAKQgCARAMADQgQgBgbAgQghAogNAJQgIANgWAWQgRAWgDAXQgQgGgEAQQgDARgRgHQABAGAHACIAMACIgXAfQgPARgWACQAHAkgHBOQgJBOAJAvQAHAqAXAIQgOAKALAKQAPAMgCAIQgBAKAFAPQAHAVATAOQAGAbARAkQAXAtAEAMIAdAXQAQAMgPAPQAzAnAmAzQAGABACgDQACgCAAgGQg4ggA4AbQAXAMgXADQAFAVAcAgQAZAeACAbQg7hNgfglg");
	this.shape_164.setTransform(15,36.9,0.516,0.516);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgOhgQgCABgDALQgFAPAAAGQAAAGAKAKQAJAKAAAIQACAZgGARQgDAKgJAaQgBAHAHALQAHALgFAKQgCAFgPAEQgPAEgBAEQgDAPgKAUQgDAQAVALQgZAGgNAKQgOANAPAOQAPAMAfgPQAPgHANgKIAcAKQAhAHATgWQAUgYgSgVQgXgTgBgGQAOgDAAgLQgBgNgBgEQgBgGgLgJQgMgKAAgCQAAgKAGgUQAGgUgBgOQgCgQgNgDQgNgCAAgFQgBgFAFgOQAEgOACAFQgDgJgVgJQgMgFANgaQAOgcgFgQQgIgQgBgOIgLghAgejTQgHABAAADQABABAFAFQANAPgLAYQgOAgAMAPQAGAIALALQABABACAC");
	this.shape_165.setTransform(27.9,25.4,0.516,0.516);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#D471AD","#C7158C","#9D248E"],[0,0.498,1],0,0,0,0,0,16.5).s().p("AhODTQgPgNAOgNQANgLAZgGQgVgLADgPQAKgVADgOQABgFAPgEQAPgEACgEQAFgLgHgKQgHgMABgHIAMgkQAGgQgCgZQAAgIgJgLQgKgKAAgFQAAgGAFgQQADgKACgBQgLgMgGgHQgMgPAOggQALgYgNgPIgGgHQAAgCAHgCIAfgGIALAhQABAOAIAQQAFAQgOAcQgNAbAMAFQAVAJADAJQgCgFgEAOQgFAOABAFQAAAEANADQANACACAQQABAPgGATQgGAVAAAJQAAADAMAJQALAKABAGIACARQAAALgOADQABAGAXASQASAVgUAZQgTAVghgGIgcgLQgNAKgPAIQgRAIgMAAQgKAAgHgGg");
	this.shape_166.setTransform(27.9,25.3,0.516,0.516);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAfDVQAIgCgBgCQgDgEgDgDQgNgPALgYQAOgggMgPQgPgLgEgJQAFAJAHgpQAAgGgKgKQgJgKAAgIQgCgZAGgQQAIgUAEgRQACgHgIgLQgHgLAFgKQACgEAPgFQAPgEABgEQALgZACgKQAEgQgWgLQAZgFANgLQAPgNgQgOQgPgMgfAPIgcASQgMgIgQgDQghgHgTAWQgUAYASAWQAKAKAOAOQgOADAAALQgBAGADALQABAGALAJQAMAKAAACQAAAKgGAVQgGATABAOQACARANACQANADAAAEQABAFgEAOQgFAOgCgFQADAKAWAIQALAFgMAaQgPAcAFAQQADAKAHAVIAKAg");
	this.shape_167.setTransform(27.7,52.8,0.516,0.516);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.rf(["#D471AD","#C7158C","#9D248E"],[0,0.498,1],0,0,0,0,0,16.5).s().p("AgKC4IgKgeQgFgQAPgcQAMgagLgFQgWgJgDgJQACAFAFgOQAEgPgBgFQAAgEgNgCQgNgDgCgQQgBgPAGgTQAGgVAAgJQAAgCgMgKQgLgKgBgGQgDgKABgHQAAgLAOgDIgYgYQgSgVAUgYQATgWAhAGQAQAEAMAHIAcgRQAfgPAPAMQAQANgPANQgNALgZAGQAWALgEAPQgCAKgLAaQgBAEgPAEQgPAEgCAFQgFAKAHAKQAIAMgCAHQgEAQgIAUQgGARACAZQAAAIAJAKQAKAKAAAFQgHAqgFgJQAEAIAPAMQAMAPgOAgQgLAYANAPIAGAGQABADgIABIgfAGg");
	this.shape_168.setTransform(27.7,52.9,0.516,0.516);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgnB3QgZABgXg+QgUg1ACgZQADgsAsgeQAwgiA6AOQArALALAlQADAMACA1QAAAdgVAsQgcA3glgMQgNgEABgLQABgDAIgQQALgWgrAGQgMACADAbQADAZgTAAg");
	this.shape_169.setTransform(28.2,69.6,0.516,0.516);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.rf(["#000000","#040104","#10040F","#250821","#410F3B","#66175C","#922284","#9D248E","#C7158C","#D471AD"],[0,0.106,0.212,0.322,0.431,0.541,0.651,0.675,0.859,1],0,0,0,0,0,9.6).s().p("AhXA6QgUg1ACgZQADgsAsgeQAwgiA6AOQArALALAlQADAMACA1QAAAdgVAsQgcA3glgMQgNgEABgLQABgDAIgQQALgWgrAGQgMACADAbQADAZgTAAIgBAAQgZAAgWg9g");
	this.shape_170.setTransform(28.2,69.6,0.516,0.516);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#0071B5").ss(1,0,0,4).p("ABIDsQgEhgASjIQABgTAOgUQARgXAHgLQAZgpgigtQgXgcgpANQgpANgDAjQgTgrgsgIQgugIgYAsQgNAXAGAnQAEAkAPAZQAVAjADAIQAQAsAABWQAAA7AMBVg");
	this.shape_171.setTransform(27.6,52.7,0.516,0.516);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#0085CF","#0088D1","#0091D8","#00A1E4","#00AEEE","#2BC4F3"],[0,0.227,0.396,0.541,0.624,1],13.6,0,-13.5,0).s().p("AhJBfQAAhWgQgsQgDgIgVgjQgPgZgEgkQgGgnANgXQAYgsAuAIQAsAIATArQADgjApgNQApgNAXAcQAiAtgZApIgYAiQgOAUgBATQgSDIAEBgIiFADQgMhVAAg7g");
	this.shape_172.setTransform(27.6,52.7,0.516,0.516);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AAph2QAZgBAXA+QATA2gCAZQgDArgsAfQgwAhg5gOQgsgLgLglQgDgLgBg2QgBgdAWgrQAbg4AlAMQAOAEgCALQgBADgIAQQgLAWArgGQAMgCgCgbQgDgZATAAg");
	this.shape_173.setTransform(27.4,8.5,0.516,0.516);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.rf(["#000000","#040104","#10040F","#250821","#410F3B","#66175C","#922284","#9D248E","#C7158C","#D471AD"],[0,0.106,0.212,0.322,0.431,0.541,0.651,0.675,0.859,1],0,0,0,0,0,9.5).s().p("AguBzQgsgLgLglQgDgLgBg2QgBgdAWgrQAbg4AlAMQAOAEgCALQgBADgIAQQgLAWArgGQAMgCgCgbQgDgZATAAQAZgBAXA+QATA2gCAZQgDArgsAfQgiAXglAAQgRAAgRgEg");
	this.shape_174.setTransform(27.4,8.5,0.516,0.516);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#0071B5").ss(1,0,0,4).p("AhHjrQAEBqgSC+QgBATgOAVQgHALgQAXQgaApAiAsQAXAcApgNQApgNADgjQATArAsAIQAuAIAYgsQANgXgFgnQgFgjgPgaQgVgjgDgIQgQgsAAhWQAAg7gMhVg");
	this.shape_175.setTransform(27.9,25.5,0.516,0.516);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#0085CF","#0088D1","#0091D8","#00A1E4","#00AEEE","#2BC4F3"],[0,0.227,0.396,0.541,0.624,1],-13.5,0,13.6,0).s().p("AhzDcQgigsAagpIAXgiQAOgVABgTQASi+gEhqICFgDQAMBVAAA7QAABWAQAsQADAIAVAjQAPAaAFAjQAFAngNAXQgYAsgugIQgsgIgTgrQgDAjgpANQgNAEgLAAQgYAAgQgTg");
	this.shape_176.setTransform(27.9,25.5,0.516,0.516);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#FFFFFF").ss(2,0,0,4).p("AAArMIAAWZ");
	this.shape_177.setTransform(27.7,39.4,0.516,0.516);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.rf(["#D471AD","#C7158C","#9D248E"],[0,0.498,1],0,0,0,0,0,18.5).s().p("AhZCuQgRgtAMgyQAJglANgYQAKgSARgRQAZgaAChBQAChQAQgoIA9gLQACAXASAsQAMArgXAvQgXAwADAiQABASAKApQABAMAOAjQAQAoAFASQAQBGhIAGIgTAAQhVAAgahCg");
	this.shape_178.setTransform(23.6,26.9,0.516,0.516);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.rf(["#2BC4F3","#00AEEE","#0095DA"],[0,0.498,1],0,0,0,0,0,61.7).s().p("AiBJ4QgahegUgPQiIhshBhRQh3iTAAidQAAjSCGigQAjgpBFhBQA7g2APgZQAQgbAQgsQARgvAHgOQAfg7BbAAQBsAAAiBWQAHAQAMAxQAIAiALAJQCJBtBBBQQB3CTAACdQAADSiHCgQgiAohGBCQg6A3gQAYQgQAcgOArQgQAwgGANQgeA7hgAAQheAAgohVg");
	this.shape_179.setTransform(27.9,39.6,0.516,0.516);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,1.3,51.2,76.2);


(lib.Diatom05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AJPAZQh6g4nqAIQi/ADioANQikAMgvAO");
	this.shape.setTransform(23,59.7,0.999,0.999,89.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("ApOgYQB6A4HqgIQC/gDCogNQCkgMAvgO");
	this.shape_1.setTransform(18.4,59,0.999,0.999,89.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("ApOAAISdAA");
	this.shape_2.setTransform(20.9,59,0.999,0.999,89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0)","rgba(81,211,193,0)","#51D3C1","#17C8EE","#00C4FF"],[0,0.741,0.741,0.906,0.98],0,0,0,0,0,42.3).s().p("Ak+BFQkRgWAAgyQAAgkEpgZQCVgMCUgGQJNAAAABSQAAAkj1AaQi/AUiBABQi0AAilgOg");
	this.shape_3.setTransform(20.2,58.9,0.999,0.999,89.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#1DC9E9","#39CED3","#62D6B4","#88DD97","#A8E37E","#C4E869","#DAEC58","#EAEF4B","#F6F142","#FDF33C","#FFF33B","#ADE47A","#51D3C1","rgba(81,211,193,0)","rgba(0,0,0,0)"],[0.067,0.075,0.082,0.098,0.11,0.125,0.141,0.161,0.184,0.22,0.314,0.51,0.741,0.741,1],0,0,0,0,0,42.3).s().p("Ak+BFQkRgWAAgyQAAgkEpgZQCVgMCUgGQJNAAAABSQAAAkj1AaQi/AUiBABQi0AAilgOg");
	this.shape_4.setTransform(20.2,58.9,0.999,0.999,89.5);

	this.instance = new lib.Path_4();
	this.instance.parent = this;
	this.instance.setTransform(34.4,-7,0.999,0.999,89.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("Ap/gRQAABbCLBSQCBBMBwAAQBZAAAlgSQAOgHAogoQAbgbAYgIQAVgHAuAAQAgAAAYAkQAbApASAFQAnANAnACIBDAAQATAAA3gUQA+gWA6gfQChhWAAhQQAAhAhcg2Qg6gihQgXQhFgTg0gIQgvgIgvAAQgeAAhCAtQhCAtghAAQgiAAg1goQg5gsgegGQg8gLg9ARQgcAIhgApQhlArgnAXQhQAvAAAqg");
	this.shape_5.setTransform(18.9,56.7,0.999,0.999,89.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#D471AD","#C7158C","#9D248E"],[0,0.545,1],0,0,0,0,0,48.2).s().p("AnzCcQiMhSAAhbQAAgqBQgvQAogXBkgrQBggpAdgIQA8gRA8ALQAeAGA6AsQA0AoAiAAQAhAABCgtQBCgtAeAAQAvAAAwAIQAzAIBFATQBQAXA6AiQBcA2AABAQAABQigBWQg7Afg+AWQg3AUgTAAIhDAAQgogCgmgNQgSgFgbgpQgYgkggAAQguAAgVAHQgYAIgbAbQgoAogNAHQgmAShZAAQhwAAiAhMg");
	this.shape_6.setTransform(18.9,56.7,0.999,0.999,89.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-8.2,48.4,131.4);


(lib.Diatom04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAJQgXAIgMgOQADgGAHADQAMAFAIgCQASgOAHgBQANgBABAaQgKgLgYAHg");
	this.shape.setTransform(59.6,79.1,0.546,0.546);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAZQAMgMgFgLQgHgXAAgDQASgHAHALQAKAPAEABQgBAHgFgCQgEgBAAgEQgKgCAAAUQAAAOgJAAQgEAAgGgDg");
	this.shape_1.setTransform(57.1,77.9,0.546,0.546);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoAGQACgOAmAFQAlADACgNQAJAUgeAFQgJACgJAAQgUAAgUgIg");
	this.shape_2.setTransform(61,76.8,0.546,0.546);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEAKQAIgmgOgYQgGgNAQAcQASAngJAZQgKAJgJAVQgEgHAKgog");
	this.shape_3.setTransform(67.5,75.1,0.546,0.546);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAhQATgXgCgKQgLgDgEAGQgCAEgCAMQgKAIAGghQAHgmgKgOQAYAcAFAdQAFAigbAaQgNgHAPgTg");
	this.shape_4.setTransform(65.8,75,0.546,0.546);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAEADIgNgDQgLgCAFgEQAHgGAQAMQAMAJgCAAQgCAAgMgGg");
	this.shape_5.setTransform(55.3,69.9,0.546,0.546);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAcQgJgFADgMQgGgBgBADIgCAIQgIgCACgEQABgEAFAAQAFgPgPgEQgQgEAGgQQAWgDAIAWQAKAaAJAEQgEAJgFAAIgFgCg");
	this.shape_6.setTransform(65,69.4,0.546,0.546);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#CD118C","#CD118C","#EB008B","#F7AB85"],[0.122,0.275,0.635,0.992],0,0,0,0,0,27.4).s().p("AA8FGQgTgfgPhBQgThUgHgUQgOANAMAgQAOAogCAPQgWgFgBgtQgDgzgNgJQADgIAFADQAIAFAEAAQgJgrgYghQgVgcgkgZQACgGAJgJQAIgHABgIQgYAbgjgZQgwghgXABQALg0AxACQABANgNAUQgKAPAMAMQAFgBAFgKQADgJAHAAQANgegGAdQgGAWgLgBQALASANgCQAJgCARgOQgOgNgBgiQgCgfgXgMQALgRALAXQAOAcAOgEQgBAGgKAIQgHAIgCAIQACAIAOABIAYABQAFgfgYgZQgZgaAEgcIgWAOQgNAIAPgMQgIgIACgHQADgIADANQACgGARgUQANgPgCgTQBMgSAXA7QAQAtgQA2QAtgDgFgvQAUgJAAATQAAAVAKgBQAJgIgDgNQgHgYABgPQAIAHAHgBIAPgGQgYgSALgeQAPgigMgSQAFACAEAJQAFAHAGACQAJABgDgHQgDgIgDAEQAFgIASgDQAUgDAHgGQgBgHgKgCIgTgBQAKgRAbAIQAjALAIgCQgBARgYASQgRAOAMAVQgIAHgGgBQgJgEgHgCQgCARAMADQg+BFgSBvQAOgFAHgjQAHgfAWABQgxA7AOBmQANBgA0A0QgSAMgTggQgSgcgFggQgHAVALAdQACAJAVArQAfBEgcAogAh1gpQgGAEAEAEQADACAFgEQAGgEgEgEIgCgBQgCAAgEADgAAog/QAAAFAEABQAFACABgIQAAgFgEgCIgBAAQgEAAgBAHgAi8hiQgJAJgCAGIAeAAIgBgTQgCgKgHgBQgBAIgIAHgAgoh/QAGAUAPAEQgDgcgCgMQgGgUgTAAQAEALAFAZgACWkRQgUAXAVgWIALgLIgMAKgACxktQgGACgBAGIANgCQAHgCAAgGIgNACg");
	this.shape_7.setTransform(55,55.5,0.546,0.546);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNBrQgIgEgCAKQgRgBAIgQQAJgQAKADQgBgEgFgFQgEgGAAgFQgMgCgGATQgFASgRgFQACgGAJgJQAIgHABgIQgMgBgUAPQgOALgOgPQgGgQAQgEQAQgEgGgQQAQADgJAMQgLARAEAIQAFgDAQgSQAPgOAEAPQgBgLATgVQAageAFgHQAmAFAMgMQAGgHAEgaQgQAKgOAAQAJAJgDAGQgCAFgOAAQgBgYAXgKQAXgKAPAOIgJgVQgFgNgQAEQgJAJABgDQABgDAGgGQAUgRALAUQAIgDgDgFQgGgIABgEQAEgKAEAIQAFAMAHAAQgHAVgRAeQgUAjgGANQgMACgLgEIgRgHIgQAQQgLALgMACQAEAMASgHQAPgGACAVQAKgDgGgIQgFgHgJgCQAGgSANAMQARAQAEAAQgEAJgMAPQgJAPAFAVQgMgDgEAHQgDAEgBAMIgCAAQgFAAgMgGgAAIBLQgGAEAEAEQACACAGgEQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_8.setTransform(43.2,44.2,0.546,0.546);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AADAKQgTgegNAAQAJgMATAWQAZAbAGACQgFAGgFAAQgIAAgJgPg");
	this.shape_9.setTransform(26.6,34.6,0.546,0.546);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFAUQgJgLgVgJQABgCAEgGQAFgFAAgGQAFgPADAOQADAMgLgBQAAAFALAEQAJADAAAHQAqADAAALQAAAEgIAAQgLAAgXgIg");
	this.shape_10.setTransform(55.3,34,0.546,0.546);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAGQABgIAJgFQAYgPADAhQgEgMgVAFQgMAEAAAFQgBgEABgDg");
	this.shape_11.setTransform(61.5,26.3,0.546,0.546);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AADAKQgKgPgHACQAGgTAIAMQAMARADgBQgCAJgDAAQgDAAgEgFg");
	this.shape_12.setTransform(50.9,26.6,0.546,0.546);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKAAQgGgcANAfQAPgHABABQABACgIAOIgEABQgJAAgDgOg");
	this.shape_13.setTransform(54.1,22.4,0.546,0.546);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAAEQgFgJgBgEQAAgEAGAIQAHAIAAAGQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgCAAgEgHg");
	this.shape_14.setTransform(46.8,22.9,0.546,0.546);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLgCQAKgWAPAGQAHAQgRADQgPAEAGAQQgQgDAKgUg");
	this.shape_15.setTransform(5.6,22,0.546,0.546);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgCAEIACgNQADgLAEAFQAGAHgNAQQgGAKgCAAQgBAAAHgOg");
	this.shape_16.setTransform(56.8,20.7,0.546,0.546);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjALQAPgRgDgLIA7AAQAMAFgKADQgJACgNAAQgCAHAMACQgLAKgRgFQgUgFgLAJIgIAIIAGgIg");
	this.shape_17.setTransform(6.1,19.2,0.546,0.546);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_18.setTransform(38.7,40.6,0.546,0.546);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#CD118C","#CD118C","#EB008B","#F7AB85"],[0.122,0.275,0.635,0.992],0,0,0,0,0,33.3).s().p("ACsDPQgeg/gSgdQgIgLgWgJQACgJgFgHQgGgJgBgFQhrh6jeADQgFgIgNgJIgWgNQgFhbBDABQAYAAAoALIBAATIhphFQg/grg+gIIgcAHQgOAGACARQgTgQAagPQAEgDAngQQAsALAwAcQAbAQA1AiQBkA7BrgIQgCAIgNABIgZABQAzARAvgRQAfgKAtgkQA1goATgLQAqgWAqAJQgCAIgFgDQgJgFgEAAQgNABANAXQANAVARgFQgIALABAIQACAHAPAEQgEAOgJgNQgOgSgNAHQgXAVANAUQAIAMAWAbQgJALgNgEQgOgGAGgfQgXgBgLABQgSADgIAHQgkgTglAYQgwAigTABQAWATA8gEQBCgFAgAUQAMAWgGAgIgGAjQgeAMg7gQQg6gRghgcQgDAFgCAXQgCAQgXAFQAKAGANACQANACAOAKQgPAcASATQARATAUgQQAUAGgNAJQgRANAAACQAEATAQgMQARgLgHgQQASAIAGAIQAKANgEAVIAVgTQANgLgEgUQASAWgcAZQglAkgDAHIAPAdQADALgSAKQAHAMASgTQAHgIASgZQgcAWAEgNQAHgZgDgEQAEgGAOgCQAQgCAGAKQAGgWADgGQAFgLAQgBQAFAVgkAoQgqAwgHAVQghgXgdg3gAEIDDQAEAMAQgCQgCgKgNAAIgFAAgAEoCnQgFAFADADQADADAFgFQAGgEgEgEIgCgBQgCAAgEADgAiHhAIAHAIQAHAIAGgGQAFgEgbgLIgOgGQgCAAASALgAg/hSQgFAEADAEQADADAFgFQAGgEgEgEIgCgBQgCAAgEADgAgIh7QAWACAAgNIgdAAIgSACQgKABgCAHIAGAAIAfABgAhNiNQgHABgBAGIANgCQAHgCAAgGIgMADgADwiZQgFAGgBADQAUgBADgCQALgDgEgOIgUAAQABAFgFAGgAEAjKQgFAFADADQADACAFgEQAGgEgEgEIgCgBQgCAAgEADgAEejeQgFAEADAEQADACAFgEQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_19.setTransform(24.2,31.6,0.546,0.546);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhWA0QAMgLAXgQQAFgNAUgQQAUgRAFgNQAcABAZgXQAbgaATgCQgFAVgVANQgOAIgeAIQgTAVgKAJQgSAOgWAFIgZAiQgQAVgJAPQgQgMAVgVg");
	this.shape_20.setTransform(74.7,12.5,0.546,0.546);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgHAEQAEgYAIgYQAIATgDAYQgDASgLAcQgKgGAHgjg");
	this.shape_21.setTransform(67.8,21.2,0.546,0.546);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#CD118C","#CD118C","#EB008B","#F7AB85"],[0.122,0.275,0.635,0.992],0,0,0,0,0,31.3).s().p("ABaEyQgCgBgXAGQAEgPgMgDQgLgEgBAMIgLgOQgHgIgMACQAFgNARAHQAQAHACgVQAAgIgUAFQgPADAPgUQgzgCgkgNQgsgQAMgdQAQgBgBAGQABADgGAMQAIgCAPgKQAOgJANABQgKAQAAAOQATACgDgRQgDgSAaADIAAAeQAWgIgCgWQgBgKgRgCQgSgCgDgGQAPgaATAUIAjAkQAMgFgEgJQgGgJgMADQABgOAJgVQAJgVABgOQgUgJgHgKQgIgNAjACQgBgKgRgCQgTgCgDgGIgnA8QgYAkgkAEQgIAGgIANIgOAVQgIgCACgEQABgEAFAAQABgGgDgCQgCgCgGAAQADgIAEADQAJAFAEAAQAFgTgTgHQgUgHAEgRQgPAKgPAAIAegeQgZgKgGgEQgJgGAKgeQgaAAABAOQAAAUgFAGQgJAAABgMQAAgPgCgDQgDgGgWgKQgRgIACgQQAEABAGAFQAEAEAGAAQALgSgVgEQgXgEADAQQgSgDALgRQALgQAQAHQgEgQgMAIQgPAMgJgEQADgmgXgMQgMAJARAYQATAcgEASQgRgMgKgZQgHgSgGgiICUgHQBTgGAxgRQgigNAvgUQAugUAKANQAIgCgBgEQgBgEgGAAIAzgvQAagVgbAwQAhgZAhgtIA2hQQAfgFAXALQAOAHAWARIAAA8QhSBAgkAlQhBBAgHBUIgLANQgHAJgMgCQAIATAAAaIACBBIgUAAQAdAfAIAvQAGArgNAxQgMgOgDgBgAA6ESQACAHAHgDQAHgDABgHQABgJgLgIQgJAQACAHgAAlDfQgGAEAEAEQADACAFgEQAGgEgEgEIgCgBQgCAAgEADgAACDfQgFACgBAGIAMgCQAHgCAAgGIgNACgABNBdQgFAEADAEQACACAGgEQAGgEgEgEIgCgBQgCAAgEADgAikAiIAUAHQgEAkAYAEQAHgZArgVQAqgVAIgWQgKgHgkgGQgPgDAVgYQgLgBgaAPQgSAKgPgOQAMAzg0gMQgFAcAPAFgAjAAXQgFAEADAEQACACAGgEQAGgEgEgEIgCgBQgCAAgEADgAARh+QgFAEADAEQACACAGgEQAGgEgEgEIgCgBQgCAAgEADg");
	this.shape_22.setTransform(60.7,20.3,0.546,0.546);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgNARQAAgDARgMIAAgTQAXAPgdAQQgHAEgCAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_23.setTransform(68.9,6.1,0.546,0.546);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAiQAAgEAFAAQAEgTgLgRQgNgTABgOQARAOAIAVQALAagRASQgHgCACgEg");
	this.shape_24.setTransform(82,3.5,0.546,0.546);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAEgBQABgUgMABQgVgIATAAQATAAACAIQASAhgcAQQgBgCADgcg");
	this.shape_25.setTransform(79.4,2.4,0.546,0.546);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgJACQASgXABgDQANAEgNATQgTAXAAADQgOgEAOgTg");
	this.shape_26.setTransform(72.4,-0.1,0.546,0.546);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHgFQASgRAIARQgBAGgOADQgNACgBAIQgRgDAUgQg");
	this.shape_27.setTransform(75.8,-2.2,0.546,0.546);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_28.setTransform(62.9,78.5,0.546,0.546);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_29.setTransform(56.9,75.8,0.546,0.546);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgBAKQgDgGAAgIQAEgLACAGQADAFAAAJQgCAHgDAAIgBgCg");
	this.shape_30.setTransform(55.2,74.1,0.546,0.546);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_31.setTransform(55.2,72.5,0.546,0.546);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_32.setTransform(54.7,71.1,0.546,0.546);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_33.setTransform(62.9,67.6,0.546,0.546);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_34.setTransform(49.2,56.1,0.546,0.546);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgBgCIALgCQAAAGgHABIgMACQAAgFAIgCg");
	this.shape_35.setTransform(47.9,56.1,0.546,0.546);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgCADQgEgFACgCQAEgEADAGQAEAFgCACIgDABQgCAAgCgDg");
	this.shape_36.setTransform(41.6,48.5,0.546,0.546);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_37.setTransform(33.4,47.4,0.546,0.546);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_38.setTransform(56.3,45.7,0.546,0.546);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_39.setTransform(40,45.7,0.546,0.546);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_40.setTransform(46.5,45.2,0.546,0.546);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_41.setTransform(55.8,44.1,0.546,0.546);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_42.setTransform(42.7,43,0.546,0.546);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_43.setTransform(36.7,43,0.546,0.546);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_44.setTransform(52,39.7,0.546,0.546);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_45.setTransform(68.9,38.7,0.546,0.546);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_46.setTransform(55.8,38.7,0.546,0.546);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgMANQABABAJgUQABAAgBgKQAYgEgNAVQgJAQgGAAQgDAAgDgEg");
	this.shape_47.setTransform(54.6,39.3,0.546,0.546);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_48.setTransform(50.9,38.7,0.546,0.546);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_49.setTransform(60.7,38.1,0.546,0.546);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgKASQAKgNAAgaQAOgCgDAaQgCATgJAAQgFAAgFgEg");
	this.shape_50.setTransform(57.2,39,0.546,0.546);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgCAMQgDgJABgMQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_51.setTransform(58.5,38.4,0.546,0.546);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_52.setTransform(49.2,37.6,0.546,0.546);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_53.setTransform(54.7,37,0.546,0.546);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_54.setTransform(37.2,37,0.546,0.546);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_55.setTransform(61.8,36.5,0.546,0.546);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgDAAIgBAAg");
	this.shape_56.setTransform(53.1,36.7,0.546,0.546);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_57.setTransform(44.9,36.5,0.546,0.546);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_58.setTransform(43.2,36.5,0.546,0.546);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_59.setTransform(59.6,35.9,0.546,0.546);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_60.setTransform(40.5,35.9,0.546,0.546);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_61.setTransform(36.1,35.9,0.546,0.546);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AACAKQgSgEgIgGQAEgPAPAJQASALAMgFQgBALgOAAIgIgBg");
	this.shape_62.setTransform(59.1,34.6,0.546,0.546);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_63.setTransform(56.9,33.5,0.546,0.546);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_64.setTransform(42.1,33.2,0.546,0.546);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_65.setTransform(53.1,32.1,0.546,0.546);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgqAGQAPgdgHgkQATAJAcAhQAbAfAZAGQgTAMgtAJQgwAKgRAJQACgLAUgrg");
	this.shape_66.setTransform(49.8,33.5,0.546,0.546);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_67.setTransform(8.3,30.5,0.546,0.546);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCgBIAMgDQAAAGgHABIgMACQABgFAGgBg");
	this.shape_68.setTransform(6.9,30.5,0.546,0.546);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgOACQgFgEAHgCQAJgEAUAEQgHAKgKABIgCAAQgHAAgFgFg");
	this.shape_69.setTransform(15.3,29.9,0.546,0.546);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDgDIAXgBQgCAHgNACIgYAAQACgIAOAAg");
	this.shape_70.setTransform(10.8,29.9,0.546,0.546);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_71.setTransform(53.1,28.8,0.546,0.546);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_72.setTransform(51.4,28.8,0.546,0.546);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_73.setTransform(5,28.8,0.546,0.546);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_74.setTransform(43.8,28.6,0.546,0.546);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgPAQQgagQABgiQAeAiAKAPQAIACAWgDQAQADgHASQgogKgOgJg");
	this.shape_75.setTransform(3.7,28.8,0.546,0.546);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgJgEQAQgCADALIgEAAQgMAAgDgJg");
	this.shape_76.setTransform(33.7,26.6,0.546,0.546);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_77.setTransform(44.9,25.6,0.546,0.546);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_78.setTransform(47.6,25.3,0.546,0.546);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_79.setTransform(49.2,24.2,0.546,0.546);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgHAJQgDgJABgYQAJAFAEARIAGAbQgNgBgEgPg");
	this.shape_80.setTransform(4.8,25,0.546,0.546);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgKANIAAgTQAJACABgMQAPgDgFAWQgCAOgIAAQgEAAgGgEg");
	this.shape_81.setTransform(44.7,24,0.546,0.546);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJABQACgIAIAAQAJABAAAHQgJAGgCABIgBAAQgGAAgBgHg");
	this.shape_82.setTransform(43,23.1,0.546,0.546);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTAKQAJgRAegCQgCATgaAAIgLAAg");
	this.shape_83.setTransform(29.3,23.1,0.546,0.546);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_84.setTransform(55.2,20.6,0.546,0.546);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgBgBIALgDQAAAFgHACIgMACQAAgFAIgBg");
	this.shape_85.setTransform(43.5,19.6,0.546,0.546);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_86.setTransform(68.9,17.9,0.546,0.546);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_87.setTransform(39.4,17.4,0.546,0.546);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_88.setTransform(48.2,15.2,0.546,0.546);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_89.setTransform(40.5,15.2,0.546,0.546);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_90.setTransform(53.1,14.9,0.546,0.546);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AABAKQgEgFgGAAIAAgTQANgDAEALQACAEAAARIgJgFg");
	this.shape_91.setTransform(43,14.6,0.546,0.546);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_92.setTransform(48.2,13.6,0.546,0.546);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgHACIgMACQABgFAGgCg");
	this.shape_93.setTransform(45.7,13.5,0.546,0.546);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgDAAIgBgBg");
	this.shape_94.setTransform(83.6,4.5,0.546,0.546);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_95.setTransform(70.5,3.7,0.546,0.546);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_96.setTransform(75.4,0.5,0.546,0.546);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgOAKQgDgNALgEQADgBASgBQgGATgWAAIgBAAg");
	this.shape_97.setTransform(77,0.2,0.546,0.546);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_98.setTransform(78.2,-2.3,0.546,0.546);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#FEE481").ss(11,0,0,4).p("AI1sLQgnAeg3BvQgxBlg5AcQgMAHgWAJQgcAKgIAEQg8AFhLgKQhigOgbgBQgTAOgegEQgwAThOBLQhJBFg9ARQg+ANg4gSQgkgLg6gjQhAgmgggNQg7gXg/AFQgaAcgKAVQgQAfACAoQgRAmgGAYQgKAlADApQAYAvBwAEQBKADBQgOQAWAIAkAIQAVAFApAJQgBAQAQAJQAWALADAEQADALARAOQAQANAEAMQANAWAnBZQAfBHAbAlQBcBPCJAVQAWAVAyAlQAqAjAQAlQAJAkAEA/QACAkAEBHQALB8A8AeQBdgKAugQQBDgYAYgyQgGg3gbg1QgKgTgrhEQhGhsAGhrQARg+BHhQQBJhTATg3QAJg0gch6Qgbh1AQhEQANgHAKgVQALgaAGgGQADgEAagRQATgMACgRQAngWBPgtQA/grATg8QgEgjgVgaQgOgRgfgWQgZgmgTgOQgegWguAEQgIABgIAIQgIAJgGACg");
	this.shape_99.setTransform(43.2,39.3,0.546,0.546);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#00FFFF","#2BC4F3"],[0,0.58],0,0,0,0,0,79.3).s().p("ADCKGIgGhqQgEhAgJgkQgQgkgqgjQgxgmgXgVQiIgVhdhPQgagkgghHQgnhZgNgXQgDgMgRgNQgQgNgEgMQgCgDgXgMQgQgIABgRIg9gNQglgIgWgJQhPAOhLgCQhvgFgZgvQgDgpAKglQAGgYARgmQgBgoAPgfQALgVAZgcQBAgEA7AXQAgAMA/AmQA6AjAkAMQA4ARA+gNQA9gQBJhGQBOhLAwgTQAeAEATgOQAbABBiAOQBMALA7gGQAIgEAcgKQAXgIALgIQA5gcAyhkQA3hvAmgfQAGgBAJgJQAIgJAHgBQAugDAfAWQATAOAYAlQAfAWAPASQAVAaADAiQgTA8g+AsIh3BCQgBARgTAMQgbASgDADQgFAGgMAbQgJAUgOAHQgQBEAbB1QAcB6gJA0QgSA4hKBSQhHBQgRA+QgFBrBFBtQArBDAKAUQAbA0AGA3QgXAzhDAYQguAQheAJQg8gegLh8g");
	this.shape_100.setTransform(43.2,39.2,0.546,0.546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-9.9,96.8,98.5);


(lib.Diatom03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(5,0,0,4).p("AgLteQCWgLgkEPQgwFwgGCEQgDBIAjFQQAhFLgDAqQgIBWgQAnQgZA7g4AAQhQAAgaicQgXiOAkiAQAbheAOh/QAMiKAHg/QAGg9gsjqQguj3ABhbQAChyASg2QAXhHA4gFg");
	this.shape.setTransform(26,47.7,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhkLDQgXiOAkiAQAbheAOh/QAMiKAHg/QAGg9gsjqQguj3ABhbQAChyASg2QAXhHA4gFQCWgLgkEPQgwFwgGCEQgDBIAjFQQAhFLgDAqQgIBWgQAnQgZA7g4AAQhQAAgaicg");
	this.shape_1.setTransform(26,47.7,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgKAEQgFgFAKgDIAFABQACAAACgBQAKgFgCAGQgCAFgGADQgEACgDAAQgEAAgDgDg");
	this.shape_2.setTransform(35.5,92,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AAAAEQgMgHgHgCQgFgMAZAIQAZAHgGAQQgIgDgMgHg");
	this.shape_3.setTransform(16.5,92.1,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AACAGQgKgGgEgDQgGgIADgDQACgDAIAEQAUAIACAVQgDgEgMgGg");
	this.shape_4.setTransform(17,90.8,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("Ag/B2QgKgKgBgXQAPAKAPAAQgQgmAcg6QAehCgCgbQALgGAUgQQAVgMAbAEQABALgWAeQgSAYATAPQgCAIgEgCQgFgBABgFQgUAKgMA+QgLA4gkABQgBAJAGAKQAGALgBAKQgIABgHAAQgPAAgJgIg");
	this.shape_5.setTransform(21.5,87.3,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhZB/QgXgMgHgBQgCgOAOgNQAOgNgGgUQAUgMAeghQAeggATgMQALgrAigdQAlghAmAPQgFALgrAdQgiAWAMASQgbACghA7QgnBCgeAMQgBAOABAGQACAJAIABQAAAHgHAAQgFAAgIgEg");
	this.shape_6.setTransform(18.4,85.7,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("ABCB9QAEgIAKgCQAAgDgQgSQgJgKAZABQgigxg8gsQgZgUhag4QgQADAQAPQAQAQAOgEQgaALgOgbQgMglgIgRQAQACAEgMQAIACgCAEQgBAEgFAAQAuAeBTAuQBgA0AiAVIAAAeIAoAAQgGAlglALQgoAOgHASQgKgDAGgHg");
	this.shape_7.setTransform(37.2,83.3,0.4,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AC9BUQgMgRgEgCQgNAMgbgCQh+hOjVgfQAAgIgIgTQgGgQAEgRQAggEAoAMQArANAZgBQAdAcBYATQBcAUAeAWQAFACADgEIACgIQAFgOADANQADAMgLgBQABAGAJAJQAIAIACAHQALgJAJgVQALAFgIAaQgKAgAHARIgDABQgNAAgIgMg");
	this.shape_8.setTransform(39.5,74.8,0.4,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AADAJQgEgFgEgGQgHgMAGgGQAFgFAHAdQAFARgCAAQgBAAgFgMg");
	this.shape_9.setTransform(47.9,61.5,0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgPAHQAMgSgGgMQASgIAAATQAAAUALgCQgCAIgEgBQgFgCABgFQgJAFgDADQgGAFgBAHQgQgEAKgPg");
	this.shape_10.setTransform(6.5,58.8,0.4,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AAGATQgIgBgFgJQgPgYAhgDQgNAEAGAVQAEAMAFAAIgEAAIgDAAg");
	this.shape_11.setTransform(8,51.5,0.4,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AG0GmQAHgLABgGQg/gghfgoIiihEQgPgTAFgfQgNASgJAkIgOA8QgVBGg+gEQgrgKgUg0QgRhCgKggQgIABgBAKIgBATQgFgBgEgKQgEgJgHAAIg3AZQggAQgDAdQgvgOhbBBQgvAigXALQgoAUgggGQgJgcAXgMQAagOAAgQQAggQBJgYQA/gXAWglQAigIArgOIBJgcQgEgegpALQgpAKgEATQgNgNgRAHQgUAMgKAEIhQAAQguAZgXALQgpAVgoADQABgIgFgIQgGgJAAgFQAAgYAigHQAngIAHgLQAYADAbgLQAdgNAUABIArgWQAXgNAOgPQApAAAagFIA/gPQgEAUAFASIAJAgQAVhqARiDQAPh4AHhwQgPgCgDATQgDAWgJABIhkAAQgigUhkgGQhmgGgigSQAOgUgEgeQBpAJBZgIQBNgHBjgYQAGABADAPQACAOAJAAQAJgOgBgXQgCghAEgUIAcATQAWAKAJgTQAVAVgBAxIALgOQAHgIAMACQAYAFA0AEQAsAGAUAPQAYADBggLQBFgIAfAaQACgDAPgFQALgEACgIQAWAEACAaQACAOgGAaQgUgIgKACQgKABgUAPQhLgJhnAWQhsAWhAgFQgJgIgBgWIAAgoQgQAjAFA/QAFA3AQAlQANgJgJgcQgLgjAHgSQCeAMCOgWQAPgCAiACQAdgBAMgTQAEgOgMgEQgMgEAAAMQgMgFAFgGQAEgFAMgCQAigHgDAZQgFATARAOQAPANgHAYQAAAQgRABQgUACgDAVQgOgBgGACQgJABgBAIQhDgFhwAQQhtAQhIgHQgHAOAKA9QAIA3gLAJQAFAHAFASQAEASAGAHIAAB4QAKALAdAAIAzgBQA+ApA2AbQBCAhBEATQAAAKAUAKQARAIgHAWQAIAAALgFQALgGAKABQADA1g/ARQgLgEADgJgAhnDPQgGAEAEAEQACADAGgFQAFgEgDgEIgCgBQgDAAgDADgABCBXQgGAFAEADQACACAGgEQAFgEgDgEIgCgBQgDAAgDADgAAkjAQgGAEAEAEQACACAGgEQAFgFgDgDIgCgBQgDAAgDADgAHSjeQgGAEAEAEQACADAGgFQAFgEgDgEIgCgBQgDAAgDADgAAajyQgGAEAEAEQACADAGgFQAFgEgDgEIgCgBQgDAAgDADgAg1kuQAEALAOgDQAAgWgUgIQAAATACADg");
	this.shape_12.setTransform(26.3,66.5,0.4,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AClA+Qg7gVhtgOQifgVgWgEQgMgCgEAGQgDAEgBAMQgSgLgEgYQgEgdgEgFQA6gcBNAXIA/AVQAkAMAZACQAIAAA1gDQAtgDAiAGQACAHASAIQAPAGgFASQAMgCAHgOIALgXQAEACgCAfQgDAhALANQgLACgFgGQgDgFgBgLQgGABgOAOQgIAGgLAAQgFAAgGgBg");
	this.shape_13.setTransform(39.4,69.8,0.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgSAYQgBgYAAgLQAAgUAUAGQgKANABAaQAIgEAEgDQAGgFABgHQAQABgNATQgJAMgLAAQgGAAgGgDg");
	this.shape_14.setTransform(46.4,33.7,0.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AjvBQIAAg8QB1gVBdABQAdgDBGgaQA8gWAyACIAUAAQgEgJgEgEQgEgGgIgBQASgSAFALQADAHAEAUIAMgOQAGgIAMACQgKALgCAiQgCAkAOAIQgEAPgPgJQgUgMgLAGQgbAIh1AIQhbAHgiAbQgdgDgyAJQggAFgZAAIgYgBg");
	this.shape_15.setTransform(39.6,25.1,0.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AgKALQgEgEAFgHQAGgHAQgEQgFAPgIAGQgDACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_16.setTransform(5.1,21.2,0.4,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AAAABQgUgWAUAVIALALIgLgKg");
	this.shape_17.setTransform(41.3,18.3,0.4,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AjlBBQABgWAJgIQAjABAggJQAYgHAdgPQBAAFBLgdQBVghAtgCQgJgUAGgHQALgJACgOQAGABACAGIACANQAOABAMASQAOAVAAAeIgZAAQgOABgBAJQgBAFADACQACABAGABQABAKgGAAQgFgBgGgIQgQgVAWABQACgJgMgBQgWAYhvAZQhsAYgcAkQgOgBgGACQgJACgBAHQgpgBgTABQgfACgTAIQgBgcABgMg");
	this.shape_18.setTransform(39.6,20.5,0.4,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AAAgDQgJgCgBALQgNgeAcAYQAKAJAAACIAAAAIgPgOg");
	this.shape_19.setTransform(46.1,15.3,0.4,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AipBAQAjgKAGgDQAVgKAFgQQAUAEAUgOQAUgNAUADQAYgIAvgnQArghAjgJQAVgIAJgWQAIABgCAFQgBAEgFAAQACAIAIgEQAMgGAIACQADAJAEAUQAEAQAJAFQgFAPgMgQQgPgUgIABQgHAGgIATQgHATgIAGIh0ArQg+AcgfAmQgbADgnALQgwANgQADQgRgjAygQg");
	this.shape_20.setTransform(38.5,16.5,0.4,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("AgKAHQACgGAFgEQAWgWgKATIgMAWIgCAAQgJAAAEgJg");
	this.shape_21.setTransform(9,11.7,0.4,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("ABlBWQgXgLgHAOQgJgCAEgFQAFgJAAgEQgagNgOgbQgRAFgTgTQgZgWgIgDIgjgLQgQgGgTgNQgQgFgHgEQgMgHAFgOQABggAlAEQAkADAGAZQAoAcAdAqIBLAnQAoAZAPAjIgDABQgLAAgagOg");
	this.shape_22.setTransform(16,14,0.4,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AgNACQAbgRgCgOQAaABgVAZIgiAhQgTgOAXgOg");
	this.shape_23.setTransform(10,9.5,0.4,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AgeAVQACgOgGgLQAHgCAagPQASgMASgBQAAAYgaAPQgcASgFAMQgIgEACgKg");
	this.shape_24.setTransform(13.9,6.9,0.4,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AAgB4QgcgfgIgDQAAgtgZgoQgggogNgYQACgHAVgPQALgJgYgJQABgHAPgCQAOgCAAgJQAFgPADAOQADAMgLgBQgHAOAOAFQAVAHACAEQAEAHAAAVQADAYACAIQAIAYAcAyQAbAxAHAaQgKAGgJAAQgNAAgLgMg");
	this.shape_25.setTransform(21.5,8.9,0.4,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AAEAKQgIgDgZgJQAIgRAVALIAeAPQAAAGgJAAQgGAAgLgDg");
	this.shape_26.setTransform(35.6,3.7,0.4,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AAAAYQgKgEgGgNQgGgNAGgJQAGgLAUACQgBAGgHACIgLACQgEAPANAFIAUAJQgGAKgJAAIgFgBg");
	this.shape_27.setTransform(8.5,44.5,0.4,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AAAAKQgHgHgEgPQAPAFAFAHQAFAHgEAEQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgDAAgEgDg");
	this.shape_28.setTransform(11.3,89.2,0.4,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AADALQgPgUgHACQAIgUAMAQQARAWACABQgCAHgEAAQgFAAgGgIg");
	this.shape_29.setTransform(44.8,10.3,0.4,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_30.setTransform(29.4,93.6,0.4,0.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_31.setTransform(30.4,93.2,0.4,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_32.setTransform(28.6,92.8,0.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgDgCIASgCQgBAGgLACIgRABQABgGAKgBg");
	this.shape_33.setTransform(23.1,92,0.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_34.setTransform(34.2,91.6,0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_35.setTransform(34.6,90.5,0.4,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_36.setTransform(41.2,88.8,0.4,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AgFAGQgNgLgBgTIAZATQAOALAAATQgTgMgGgHg");
	this.shape_37.setTransform(12.5,88,0.4,0.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_38.setTransform(19.1,86.9,0.4,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AgDAJQgGgBgCgIQgCgHAGgCQAHgBAMALQgGAJgGAAIgDgBg");
	this.shape_39.setTransform(7.6,85,0.4,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_40.setTransform(43,84.5,0.4,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("AgTgTQAhAHAGAgQgmgBgBgmg");
	this.shape_41.setTransform(8.9,84.7,0.4,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("Ag2BpQgBgVAKAFQAOAHAHgLQgJgDgHgQQgIgRgGgEIAGhLIAEhAQASgKADgEQAKgJgBgRQAJAGAEABQAFABABgIQAkARAHBHQADAoAEBRQgfgBgOABQgXACgBASQAEAHAdgDQAbgCgBAcQgHAFgmgEQglgCgRALgAAWhIQgHACAAAGIANgCQAHgCAAgGIgNACg");
	this.shape_42.setTransform(26.2,88,0.4,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AACB0QgIgVAPgPQgUgtgThUQgUgcgJgPQgQgcAPgTQAsAKAYBBQAeBOAVAQQABALgGAgQgDAQASALQgBANgTAHQgUAHAAANQgTgFgIgTg");
	this.shape_43.setTransform(30.9,87.4,0.4,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AAfB0QgPgBgBgZQAPALAPgBQgHgWgcghQgbgggHgWQgFgNgUgRQgUgQgFgOQgDgPgXgOQgXgNgBgSQAzgHA0BIQAgAuAJALQAbAcAcAJQgDAQANAJQANAKgDAPQAIgHAGABIAQAGQgGAQgbAMQgeANgHAJQgGgOgSAAgAA+BJQgHABAAAGIANgCQAGgCABgGIgNADg");
	this.shape_44.setTransform(34.6,85.8,0.4,0.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("AAAAHQgEgCAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAAAg");
	this.shape_45.setTransform(47.8,79.9,0.4,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF00").s().p("AgJgTQARAIACAfQgYgEAFgjg");
	this.shape_46.setTransform(4.9,80.3,0.4,0.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("AgTATQABgEAPgKQAKgHgHgSQAOgCAEAIQAEAHgFAJQgKAUgNAAQgGAAgHgDg");
	this.shape_47.setTransform(46,79.5,0.4,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_48.setTransform(9.1,78.9,0.4,0.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AgJASQgSgSAKgZQAMgCADAGQADAGgIAAQgDAgAggDQgIAMgJAAQgGAAgIgIg");
	this.shape_49.setTransform(6.4,79.7,0.4,0.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_50.setTransform(45.4,78.5,0.4,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF00").s().p("AiaBtQgRgWAOgDIBEguQAqgcAegPQANgIAMgUQASgaAGgGQAagHAjgVQApgZASgHQAWARgSAUQgYAbAAAGQgaAGggAWQglAagPAFQgzAngmAzQgHgBgNAHQgIAEgCgKQgHABgCAPQgDAOgIAAQgFACgFAAQgPAAgMgRg");
	this.shape_51.setTransform(15.6,82.5,0.4,0.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF00").s().p("AgMAQQgIgWABgWQAQgGADAQQADARARgHQACAHgQALQgLAIAPADQgGAJgEAAQgGAAgGgOg");
	this.shape_52.setTransform(4.9,77.4,0.4,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_53.setTransform(15.5,76.1,0.4,0.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_54.setTransform(7.5,74.1,0.4,0.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AgCAMQgDgJABgMQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_55.setTransform(49,74.3,0.4,0.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("AgKASQAKgNAAgaQANgCgCAaQgCATgJAAQgFAAgFgEg");
	this.shape_56.setTransform(47.7,74.3,0.4,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("AgVAYIAAgxQATgGACAPQAAAKgBAUQAFAAACgHIACgMQAXAIgQAPQgJAKgLAAQgHAAgJgEg");
	this.shape_57.setTransform(5.3,74.5,0.4,0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_58.setTransform(47,73.3,0.4,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_59.setTransform(10.7,73.3,0.4,0.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_60.setTransform(9.9,73.3,0.4,0.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFF00").s().p("AgHAGQADgngBgGQAJANADAcQADAegGAIQgNgFACgdg");
	this.shape_61.setTransform(3.5,74.7,0.4,0.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_62.setTransform(12.7,72.5,0.4,0.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFF00").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_63.setTransform(16.5,71.3,0.4,0.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_64.setTransform(34.6,70.9,0.4,0.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgBAKQgDgGAAgIQAEgLACAGQADAFAAAJQgCAHgDAAIgBgCg");
	this.shape_65.setTransform(49.4,70.9,0.4,0.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_66.setTransform(5.1,69.3,0.4,0.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_67.setTransform(49,68.5,0.4,0.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF00").s().p("AgBgCQAYgSgWAVQgJAKgCAAQgBAAAKgNg");
	this.shape_68.setTransform(47.7,68.8,0.4,0.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_69.setTransform(6.3,68.5,0.4,0.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_70.setTransform(43.8,67.7,0.4,0.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF00").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_71.setTransform(47.4,67.5,0.4,0.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFF00").s().p("AgBAKQgDgGAAgIQAEgLACAGQADAFAAAJQgCAHgDAAIgBgCg");
	this.shape_72.setTransform(49,67.3,0.4,0.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF00").s().p("AAGAFQgjgCgFABQABgGAKgBIATgCIAnAAQgCALgUAAIgHgBg");
	this.shape_73.setTransform(34.6,66.9,0.4,0.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_74.setTransform(32.2,66.9,0.4,0.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_75.setTransform(30.6,66.9,0.4,0.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_76.setTransform(4.3,66.9,0.4,0.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFF00").s().p("ADXAVQgaAbg2gHQhEgLhogBIinACQgRACgDgMQgGgJADgVQACgXgJgQQAsAHCkgFQCPgGBEAYQAQAGAEgQQAEgRAQAHQgIALAGAiIAMA2QgVgIABgWg");
	this.shape_77.setTransform(39,65,0.4,0.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFF00").s().p("AjqAZQAGgIgEgbQgDgcALgQQAYAEgEAkQALgBAKgIQAMgKAHgBQAagGAvAIQA7AIASAAQApABBTgKQBWgLAnAAQgJALgCAhQgDAigGALQgcABi6gIQh5gFhKAWQAEgjgsAFg");
	this.shape_78.setTransform(13.9,64.9,0.4,0.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFF00").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_79.setTransform(34,62.5,0.4,0.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF00").s().p("AgOACQgFgEAHgCQAJgEAUAEQgHAKgKABIgCAAQgIAAgEgFg");
	this.shape_80.setTransform(32.1,62.5,0.4,0.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_81.setTransform(9.9,62.1,0.4,0.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_82.setTransform(8.7,62.1,0.4,0.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFF00").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_83.setTransform(7.9,62.3,0.4,0.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFF00").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_84.setTransform(7.1,61.9,0.4,0.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_85.setTransform(44.6,61.3,0.4,0.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFF00").s().p("AgIAJQgCgJABgYQAVACgEAPQgHAWAJAKQgOgBgEgPg");
	this.shape_86.setTransform(6.1,62.1,0.4,0.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF00").s().p("AgTAeQgDgOAKgDIAWgDQADggggADQABgHAKgCIASgBQAIAIACASQABAKgBAXg");
	this.shape_87.setTransform(46,61.9,0.4,0.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_88.setTransform(47,60.5,0.4,0.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFF00").s().p("AgiAgIhaAAQg2AAgagKQAAgJAIgSQAGgPgEgRQAvgHCNACQB9ACBCgRQAQgCAEAMIgHAqQgEAUABAlQhWAHgoAAQhBgBgmgag");
	this.shape_89.setTransform(15.5,59.8,0.4,0.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_90.setTransform(47,57.3,0.4,0.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_91.setTransform(13.1,56.9,0.4,0.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFF00").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_92.setTransform(10.7,56.7,0.4,0.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_93.setTransform(8.3,55.7,0.4,0.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF00").s().p("AgOAPIAAgnQAPAAgBAFIgEAPIAMALQAJAHgCALQgPgKgOAAg");
	this.shape_94.setTransform(7.5,56.5,0.4,0.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF00").s().p("AgUAJQABgHAOgCQAOgCAAgIQAWAIgSAIQgKAFgJAAQgHAAgHgCg");
	this.shape_95.setTransform(44.1,52,0.4,0.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF00").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_96.setTransform(11.3,51.7,0.4,0.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_97.setTransform(9.9,51.7,0.4,0.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_98.setTransform(13.5,51.3,0.4,0.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_99.setTransform(44.2,50.9,0.4,0.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_100.setTransform(43.4,50.9,0.4,0.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFF00").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_101.setTransform(29.2,50.9,0.4,0.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFF00").s().p("AgJAUIAAgnIATAAIAAAng");
	this.shape_102.setTransform(46,51.1,0.4,0.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFF00").s().p("AgOAYQgEgdAOgUQAWABgDAbQgCAXgRAAIgKgCg");
	this.shape_103.setTransform(26.6,48.1,0.4,0.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_104.setTransform(39,44.5,0.4,0.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_105.setTransform(38.2,44.5,0.4,0.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_106.setTransform(37.4,44.5,0.4,0.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("AiuBaQATgTgcgBQglgCgEgIIAAhjQA2gSBzASQBrARA1gbQARgDALAPQAMAQAKACQAEgBAKgPQAIgLASAHQALgCAAgWQABgXAIgDQAQALgKAcQgMAiAGAQQgNgJgCACQgCABADAJQAIAcgOAJQgHADghACQgVABgJAYQgcAEhdgLQhEgJgeAaQgQgLgOABQgPgEgKAOQgIAKgLAAIgGAAgADAgbQgHACAAAGIANgCQAHgCAAgGIgNACg");
	this.shape_107.setTransform(37.4,47.5,0.4,0.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_108.setTransform(8.3,40.1,0.4,0.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgCAMQgDgJABgMQAEgMADAKQADAIgBANQgDAHgCAAQgBAAgBgFg");
	this.shape_109.setTransform(46.6,39.9,0.4,0.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_110.setTransform(8.3,39.3,0.4,0.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s().p("AgDgDIASgBQgBAGgLACIgRABQABgGAKgCg");
	this.shape_111.setTransform(34.2,38.9,0.4,0.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF00").s().p("AgOACQgFgEAHgCQAJgEAUAEQgHAKgKABIgCAAQgIAAgEgFg");
	this.shape_112.setTransform(30.5,38.9,0.4,0.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_113.setTransform(28.6,38.9,0.4,0.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF00").s().p("AgKAPIAAgdQAVgLAAAZQAAASgLAAQgDAAgHgDg");
	this.shape_114.setTransform(7.3,39.3,0.4,0.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_115.setTransform(47.4,35.3,0.4,0.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_116.setTransform(7.5,34.1,0.4,0.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_117.setTransform(47.8,33.7,0.4,0.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_118.setTransform(12.7,33.7,0.4,0.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFF00").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_119.setTransform(22.5,33.3,0.4,0.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_120.setTransform(21.4,33.3,0.4,0.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_121.setTransform(20.6,33.3,0.4,0.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_122.setTransform(36.2,32.9,0.4,0.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFF00").s().p("AgFAaQgIgHAAgTQgBgRAHgIQAIgJAOAPQgBAGgHACIgLACQgBAWAUAHQgIAKgHAAQgCAAgDgEg");
	this.shape_123.setTransform(6.3,33.9,0.4,0.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFF00").s().p("AgOAZIAAgxIAdAAQABAagEAKQgFANgPAAIgGAAg");
	this.shape_124.setTransform(5.1,30.9,0.4,0.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFF00").s().p("Ai9AtQgOghgCgHQgHgXADgaIDRAMQB8AFBMgHQADASABAWQAAARAGAWQhUgCiAABIiPABIgsAAg");
	this.shape_125.setTransform(14.4,30.9,0.4,0.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_126.setTransform(48.6,28.9,0.4,0.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF00").s().p("AjoAMQAHgUgEgVQA7gOCNAJQCBAIA8gXQAUgBAUAVQAPARAZgRQgNAOADAtQgMAJgZgEQgbgGgQALQhfgEhoAFIi+AJQgBgOAIgYg");
	this.shape_127.setTransform(38.8,30.7,0.4,0.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_128.setTransform(12.3,28.5,0.4,0.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_129.setTransform(40.6,28.1,0.4,0.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_130.setTransform(10.7,28.1,0.4,0.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFF00").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_131.setTransform(49,27.9,0.4,0.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFF00").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_132.setTransform(41.4,27.9,0.4,0.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFF00").s().p("AgJAYQAAgDAGgGQADgFAAgGQAAgFgHgBIgMgDQAHgUAWAAQgBAGADACQACACAGAAQgGADgDAWQgCAQgLAAIgHgCg");
	this.shape_133.setTransform(47.6,27.3,0.4,0.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFF00").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_134.setTransform(32,24.9,0.4,0.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_135.setTransform(21,24.9,0.4,0.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFF00").s().p("AgCgCIAMgCQgBAFgGACIgMACQAAgFAHgCg");
	this.shape_136.setTransform(20.1,24.9,0.4,0.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFF00").s().p("AgLAZIAAgxQAWgMAAAkQAAAcgMAAQgEAAgGgDg");
	this.shape_137.setTransform(4.1,24.9,0.4,0.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_138.setTransform(10.3,23.7,0.4,0.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFF00").s().p("ABZA8QgWgFhWgeQhFACgkgDQg1gEgggPIAAhFIAUAAQAnABA1ARQA+ATAaADQArgEA/AHQBGAIAhgBQgEARAHASQAJAUgCAOQgjAKgjAAQgZAAgagFg");
	this.shape_139.setTransform(13.7,26.1,0.4,0.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_140.setTransform(8.7,22.9,0.4,0.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_141.setTransform(7.5,22.5,0.4,0.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFF00").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_142.setTransform(5.3,22.5,0.4,0.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFF00").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_143.setTransform(4.3,22.7,0.4,0.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFF00").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_144.setTransform(6.7,22.3,0.4,0.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFF00").s().p("AADAGQgIgFgEAAQACgIAIABQAJAAAAAHQgCAGgDAAIgCgBg");
	this.shape_145.setTransform(49.2,21.5,0.4,0.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_146.setTransform(46.2,21.3,0.4,0.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_147.setTransform(18.3,21.3,0.4,0.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFF00").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_148.setTransform(48.2,21.1,0.4,0.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_149.setTransform(40.6,18.9,0.4,0.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_150.setTransform(21,18.5,0.4,0.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFF00").s().p("ACnBMQgxgDgDABQg1gWhjgZQh4geglgMQgDgvANgNQBSAQA6AsQAgACAlAJQAjAHAZABQAKAJA2AHQAtAFABAdQADAWgcAAIgDAAg");
	this.shape_151.setTransform(13.9,21.4,0.4,0.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_152.setTransform(42.2,18.1,0.4,0.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFF00").s().p("AgJAGQADgfgBgEQALAMAEARQAFAUgLAKQgMgBABgXg");
	this.shape_153.setTransform(4.8,18.7,0.4,0.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_154.setTransform(44.6,17.3,0.4,0.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFF00").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_155.setTransform(6.7,17.1,0.4,0.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_156.setTransform(44.2,16.5,0.4,0.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFF00").s().p("AgJgOQAUAIgBAVQgUgHABgWg");
	this.shape_157.setTransform(48,16.1,0.4,0.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_158.setTransform(44.6,15.7,0.4,0.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFF00").s().p("AgCAFQgJgPAAABQADgVANAUQAOATgLALIgBAAQgBAAgIgPg");
	this.shape_159.setTransform(6.2,15.5,0.4,0.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_160.setTransform(38.6,14.5,0.4,0.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_161.setTransform(19.1,14.5,0.4,0.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_162.setTransform(39,13.7,0.4,0.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFF00").s().p("AByBXQghgNgTABQgegghYgeQhbgdgegcIAYgVQANgNADgQQAGgCACAEIACAIQBYASA9A+QAZABAgALQAjAOASADQANANAZAMQAPANgNAgIgPABQgVAAgWgJg");
	this.shape_163.setTransform(14.4,17.3,0.4,0.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFF00").s().p("AgKAPIAAgdQAVgLAAAZQAAASgLAAQgDAAgHgDg");
	this.shape_164.setTransform(6.9,13.7,0.4,0.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_165.setTransform(23.8,10.9,0.4,0.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_166.setTransform(38.2,9.3,0.4,0.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_167.setTransform(11.9,8.9,0.4,0.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFF00").s().p("Ah+BOQAqgYAFgTQAugNAxgtQA7g6AZgNQgJgLADgGQAGgMAAgLQAHAEAXABQASAAAMAPQgCAOgSAPQgNAJANAWQg2AUhbBOQhVBJhFASQgEgmAlgTg");
	this.shape_168.setTransform(36.4,13.3,0.4,0.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFF00").s().p("AAqBWQgRgRgRgiQgXgjgkgYQgDgFgegWQgVgPAEgcQADgDAOgFQAMgEABgIQAJgBAHAFQAJAGAFAAQACASALAUQAPAZACAHQAGAPAaAVQAZAUACAXQAKAKAeAWQAXAVgNARQghgGgXgXg");
	this.shape_169.setTransform(18.5,11.3,0.4,0.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_170.setTransform(29.4,6.5,0.4,0.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFF00").s().p("AgGAOQgWgOAEgTIAYAQQANAJAMAEQgGAKgKAAQgHAAgIgGg");
	this.shape_171.setTransform(41,6.4,0.4,0.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFF00").s().p("Ah0CHQgNgOAOgOIAdgWIATgaQAMgOATAAQAQgYAbgzQAagtAegTQgMgMAHgIQAOgQABgEQAOgBANAJQAQAKAHACQgBAQgRgGIgWgKQAAAMgGAOQgCAJASAFQgKAQg/A8QguAtgKAwQgPACgVAVQgRARgVAAIgGAAg");
	this.shape_172.setTransform(34.3,10.5,0.4,0.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFF00").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_173.setTransform(35.8,5.5,0.4,0.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_174.setTransform(21.8,5.3,0.4,0.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFF00").s().p("AgJABQABgIAJAAQAIABABAHQgJAGgDABIgBAAQgFAAgBgHg");
	this.shape_175.setTransform(16.9,5.5,0.4,0.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFF00").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_176.setTransform(34.4,5.1,0.4,0.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFF00").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_177.setTransform(17.9,5.1,0.4,0.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFF00").s().p("AgEAFQgEgEAGgDQAFgEACACQAEADgGAEQgDADgCAAIgCgBg");
	this.shape_178.setTransform(29,4.2,0.4,0.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFF00").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_179.setTransform(21.7,4.3,0.4,0.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFF00").s().p("AhLCIIAyhjQAcg7ALgzQACgLgGgFQgFgDgKgBQgEgPANgKQANgJgDgQQAFgBADADIACAIQgBANATgCQAcgCAEABQAIATgTABQgVAAACAKQgDAMAKAGQAMAGABAGQACALgJANQgIALAFAPQgWAPgNAeQgKAZgFAnQgJADgFAIQgGAIALABQgfAcgUAAQgLAAgIgIg");
	this.shape_180.setTransform(30.7,8.5,0.4,0.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFF00").s().p("AgQB1QgGgTgMABQAAhmgUh1QAJAJAFgDQAHgCgBgOQAZADAmABQAaAEAAAWQgCAQgWgFQgTgDgHgIQgFAVAXAAQAdABADAIIgBB7QgHBBgqALIgGACQgLAAgEgOg");
	this.shape_181.setTransform(25.8,8,0.4,0.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("Ag2SNIg9gJQglgFgCgaQgTgEgSAIQgSAJgPgDQgDgDgegOQgUgKADgXQhHgBg3g6IgrgxQgagcgZgOQgHglgVgjQgLgTgfgnQgFgeAPgUQgDgFgOgSQgKgPgDgMQABgJgDg5QgCgqAOgMQgNgWgCgOQgCgVgDgXQAZAEAEAlQACAVgBAwQATgKAXAEQAjAHANgBQCLg5DTgDQAOgBAEgPQADgKgBgYQhCgUhrAZQh2AbhFgMQgXAHgMAIQgRAKgIAPQgXAAgJgSQgHgNgBgdQAEgPgOgKQgOgKAEgPQAZgPACgaQAAgHgHgqQAgADgCghQgCgIgEACQgEABAAAFQgQgFAMgWQALgUANgDQgEgWAIgSQAMgTAEgLQABgFgCgkQgCgaANgDQgOgggCgHQgHgYADgbQAHgBACgKIABgTQAKAJAKgEQAJgEALAJQgCAKgSAFQgTAFgBAKQACASATAlQALAWgMAXQAMADAFgKQAGgMAHgBQABgRgLgNQgPgMgFgIQgFgsAjAEQgCgPAMgPQALgPgBgOQAQABADATQACALgBAcIBBAAQAjgBAUgJQAHABCagHQAwgCAiABQgBAxgFA4QgFAzgVCUQglEAAYCKQARBeA2AVQA5AXAwhZQAcg2gHh5QgOiGgDgvQgKilgEgkQgTidgkgYQgNgIg1gBQAAgxgDgrQgxgIh1ANQhgAKg6gZQgDAGgXADQgTADAFASQgPABgLgPQgLgQgNAAQgLAEAGAEQAFADAKgBQgOAEgDAiQgEAggTgBQAGggABgZIADg+QgMgCgEAGQgDAFgBALQgTgGAJgVQAIgTAMgEIgHgcQgGgOgRACQACgIANgBIAZgBQgEgXgSgYQgTgaABArQgNAGAAgaQAAgZANAFQAAgQgQgSQgQgRACgTQAfgGAIAbQAEAQAHAhIAegeQAQAqAsAIQBCgTBhACQA4ABB5AGQAMABgBgUQgCgbABgEQAHgOAEAfQAFAnAEAEQgKACAAAOQAAAOAKAAQgFANgJgFQgJgFADgNQhMgBhsANQiGAQgqACQgZAEAFAkQgHgBgIgJQgIgIgHgCQgLABAHAPQAKAWgGAMQAWABAIgVQAZAVBFAAIB0gBIAyAPQAeAJAegEQATAKggABIgvgBQATARApgJQAygMAUAEIAAhQQAKgNAAApQgBAxALADQACALgJANQgIALAFAPQAHAHAegKQAZgIARAVIAAgyIAhgQQAVgIAaAEQABANgUgCQgcgCgDABQAAANAYgCQAfgCAFABQAKgCgFgJQgHgLAMgIQAMgDAFALQAGAMAHAAQAMgFAXgPQAWgOANgGQAigGBLAKQBBAIAagMQANANACAPQABALgGAVQAOgBAEgPQADgKgBgYQAMADAFgKQAGgMAHgBQgJgNgBgIQgCgMASACQgYgFAEgZQAEgkgKgNQgQAFAKAOQAMATgGAMQgOgDgKAFQgJAGANACQgrAGiRgWQiHgVhDARQgLACgBAWQAAAXgIADQgGgJACgjQABgYADgWICgAAQAxgOBUABQBMABBHAMQARgKAEgEQAKgJgBgRQAFgXgagGQgdgGAAgPQg0gEgigCIhegEQgOABgNgIQgRgLgGgCQiIAVgsgLQAbi0ADhfQAHirhNg2IgdAAQhdAtAKC3QADAwAPBqQAOBhABApQgughh/AXQidAdg8gJQgZAEAFAkQgSgBgNgXQgOgXgPgDIAAgeQgBgHgLgBIgSgCQgEgRAGgPQAIgTAAgJQAAgNgQgLQgPgLABgPQAgAHAMgBQAQgBAUgPQgDgIgIAEQgMAGgHgCQgGgQAQgEQAQgDgGgRQgTgHgKAVQgKAVATAFQgOAYgMggQgMggASgKQgVAIABAWQgOgWAGgpQAGgtgIgWQADABAGAFQAFAEAGAAQAEgbgCglQgEgvACgdQArgBgIgiIgIgdQgEgRAHgJQAOAdAKgYQAJgVgDgiQARASAQgNIAbgZIgKgWQgHgPgDARQgJgPAHgFQAEgCATgDQAngFgKgoQAMgDAFALQAGAMAHAAQAYgEACgbQACgkACgDIAZAGIAZgGQANAAAKgVQAKgUARABQgIAIACAHIAGAPIAegPQAPgLgFgYQAOgBAJANQAMAQAFACQAJgDAKgbQAJgXAWADQABAJgFAHQgGAJAAAFQAdgBAQgIQAUgKAFgVQATADApARQAfgWA1ACQA2ACAVAcIBkAAQAEAGAXARQASANAFAOIAZgFIAZAFQAcAfBEBBQA4A7AIAtQAiARAQA/QAWBXAIANQgCARACAnQAAAhgKALQANAkgDBAQgPAhgPBdQgNBSgRAWIgFBRQgFAsgUAPIAHCEQACBHgJBCQAVAcALAgQANArgPAbQAWAgANBJQARBdAIAWIAAC0QgCALgTA2QgNAmAEAlQgdAjgNATQgXAggFAiQgNAEgTAYQgRAVgVABQAEAZgTAQQgXATgCAKQgmAEg6ApQg1AlgzgCIg8AaQgjAPgjgBQgOABgNgIQgRgLgGgCQgTgFgMANQgMANgMAAIgEgBg");
	this.shape_182.setTransform(26.3,48,0.4,0.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#00FFFF").ss(3,0,0,4).p("AgvylQFkAACZCgQBkBnAeDUQAQBxg0DLQgfB5gHAjQgRBXACBBQACBMA3EUQAxDzgMB6QgUDNiBCdQijDJkOAAQkSAAiyiuQhIhHgmhVQgkhRAFhEQAHhgAej4QAgkNAHhOQAGg5gRhPQgGgZgih6Qg6jPAQicQAZjlCKieQCaiwDnAAg");
	this.shape_183.setTransform(26.6,48.7,0.4,0.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#FF00FF").ss(3,0,0,4).p("Agzy3QGEAACnCiQBsBpAhDYQASByg5DOQghB5gJAlQgTBZADBCQACBNA8EXQA1D5gNB6QgWDQiLCgQiyDMknAAQkqAAjCiwQhPhJgphWQgnhSAFhFQAIhiAgj8QAkkSAHhNQAGg7gThPQgFgagmh8Qg/jSASieQAbjpCXihQCniyD8AAg");
	this.shape_184.setTransform(26.6,48.6,0.4,0.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFF00").s().p("AncQIQhPhJgphWQgnhSAFhFQAIhiAgj8QAkkSAHhNQAGg7gThPQgFgagmh8Qg/jSASieQAbjpCXihQCniyD8AAQGEAACnCiQBsBpAhDYQASByg5DOQghB5gJAlQgTBZADBCQACBNA8EXQA1D5gNB6QgWDQiLCgQiyDMknAAQkqAAjCiwg");
	this.shape_185.setTransform(26.6,48.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.1,55.7,99.6);


(lib.Diatom02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAJQgBgKgBgCQgNgVAQANQANAMADAEQgCAAgFAEQgGAGACABQgFgBgBgGg");
	this.shape.setTransform(97.3,6.6,0.599,0.599,-69.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDARQgKgCAEgEIAGgEQABgCgCgIQgBgIACgBQAOgMAAAWQABATgMAAIgDAAg");
	this.shape_1.setTransform(89.3,5.7,0.599,0.599,-69.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAZBHQgRgLAHgQQgXAPgVgZQgWgYgXAOQAJgaAUALQAeARALgCQACgRgOgKQgRgMgBgKQgJAFgEADQgGAFgBAHQgPgNAEgGQADgEAQgGQAkgMgOgdQATABAAATQAAAUgTAAQAKAYAfABQAoAAAIAFQgNANgPABQgLABgVgGIAAAeQAOAAAVgKQAVgJAOgBQADALgjAMQgcAKAeARQgCAMgHAAQgFAAgGgFg");
	this.shape_2.setTransform(87.9,1.3,0.599,0.599,-69.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiBXIgJgVQgHAOgTgJQgSgJgFAOQgRgFAIgRQALgWgCgGQgJgLgVgHQgYgIgGAQQgGAAAIgXQAHgUgTAOQgRAAAMgNQANgMAMAFQAEgPgHgMQgJgMACgLQAWgFAcgIQATAAALAhQANgBAGABQAJACABAIQAhADgDghQAOgGAGAdIADAOQADADAEgKQANAAgJANQgHALAXgEQgBADgFAGQgEAFAAAGIgeAAQAJgLgDgGQgGgMAAgLQgDABgGAFQgFAEgGAAQAAAUATAQQAUARABAQQgnAJAJgmQgMACgLgEIgRgIQgJAEgDADQgFAFgCAHQACALAaAAQAcgBADAKQggALAJARIANASQAIANACALIgHABQgKAAgEgKgAgOA4IAdAAIAAgeIgTAAIgCAIQgCADgGgBgAgwgEQAMALAWgBQgFgbABgHQAAgJAOgQQgHgCgQgKQgNgJgOABIAQAmQAGAMgggKQAGAUAKAJgAAFg1IAAAeQAXAAAHgUQgFAAgJgGQgFgFgHAAIgEABg");
	this.shape_3.setTransform(83.1,-3,0.599,0.599,-69.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRALQgOgRgXAGQALgFAXgRQAVgMAOAOQgPALAAAHQABADAOASQAMABAGgSQAFgRARAFQgJAegfAJIgDAAQgPAAgOgSg");
	this.shape_4.setTransform(74.1,-5.1,0.599,0.599,-69.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAEADQgcgDAJgGQAHgGAQAMQAMAJgCAAQgCAAgMgGg");
	this.shape_5.setTransform(60.1,-52.5,0.599,0.599,-69.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAAQAWgUgWAUIgKALIAKgLg");
	this.shape_6.setTransform(58.5,-52.7,0.599,0.599,-69.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAuQgQgMgMAHQACgUgRgUQgQgTABgUQAGABACAHIACAMQAEgDAigEQAYgDgCgUQAQAHAOgDQAWgFARABQgBAPABAFQACAJAIABQgDAUgNgMQgMgMAIgQQgsADgGAGQgKAJAKApQgMABgGgZQgGgXgZAIQAFArAjAQQgBAIgEAAQgDAAgEgDg");
	this.shape_7.setTransform(63,-60.2,0.599,0.599,-69.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghBLQAKgkgEgPQAVgDgGAPQgIAVANAHQAQgBADgUIAAgnQgeAGgIgCQgMgCABgfQgNAKgVgFQgTgFgHAKQgLgJAOgeQAMgXAPgSQAIACgDAFQgFAJAAAEQABAHAKACIATABQACAPAGARIAMAcQAZgIgIgTQgOgWgDgLQAhgEgEAsQAPAEAMgIQAMgIALACQgFAjAZAEQATgPgWgjQgWgjAPgOQAFgPAEANQACAMgLAAQARAXAHATQAJAagDAfIgoAAQgEAQANAFIAVAJQgUAPgRgYQgRgYAOgaQgggGAEAkQAEAlAYACQAYAKgbAAQgaAAgBgKIgSARQgLAIgUgFQAKAQAAAOQgWgGAGgXgAhNg3QgBAWAVAIQAMgNgEgLQgDgIgLAAQgGAAgIACg");
	this.shape_8.setTransform(62.6,-49.1,0.599,0.599,-69.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEEbQgYgKgcACQAAgGAHgBIANgDQAWgNgCglQgTgnghAQQgfAQgHAlQACAKAJgFQALgGAIALQgHAKgaADQgeACgHAFQgBgNgVgKQgUgKACgRQAIAIAGgCIAQgGQgGgcgJgNQgMgRgXgCQgJACgBAOIAAAYQgVgggDgJQgLgaAFghQAMALAcgBQgBAFgKAFQgJADAAAHQAdgIAKgZQAKgWgJgYQgJgagUgJQgYgLgbAPQABAEAOAKQALAHgGATQgTACgEgTQgDgYgEgJIgOgZQgJgPADgTQAGABAIAKQAIAHAIACQAgACADgeQADgoACgCQgBAPALAPIAUAAIAAgeIgeAAQgGgIgNgJIgVgNQAGgJAdgOQAZgMAKgZQAOADgIAVQgHATgJAHQAFAIANAJIAWANIAYgLQAOgGACgNQgBgRgQAJQgQAIADAKQgOgNACgOQADgMAMgFQANgGAKAFQANAGABATQASgJgKgXIgSgcIgeAAQgSAPAAgKQAAgLASgEQAZgNAPgbQAOAQARgOQASgPALANQgBAIgLABIgSABQAGAQAVgGQAegLADABQgLAPABAPQAMADAKgFIARgIQgDgEgYgXQgSgQgEgRQgKgJADAAIAPAGQAeAKgIgbQApAgArAOQA3ASAygOQgGAQAQAEQAQAEgGAQQgLgMgSAOQgRAOgOgQIAAAoQAgADgCghQAIADAEAeQAEAYAYgHQgBAGgHACIgMACQgBAXAVAHQAOgIACgUQADgbALgPQAOANAEAdQADASgBAoQgIgBgBgKIgBgTQgFANgVAGQgeAIgEADIAAA8QAIALAWAJQATADANgQQANgRAPAAQgEAYAUAYQAQAUgMAVQgUADgIgPQgGgUgGgIQgYAMANAUQAOAZgNANQgDAGAQAMQAMAJgPADQABAIAEgCQAFgBAAgFQASAGgOAQQgMAOgMAEQgRAPgjAdQgcAagKAeQgUgGgMAOQgOAPgOgDQANgMgHgOQgMgPgEgJQglAVgIAJQgQATALAfQgZgRgMgFgAAADwQgPASASAHIACgMQACgIAGAAQADAMARgCIAAgeIgFAAQgPAAgNAPgABgDqQACAHAPAEQABgMAJACIAAgUIgUAAQgJALACAIgACPB9QgMAFgGASQgHAWgFAFQANACAEAaQADAcAKAEQgBgVAQgIQAHgFAcgGQgDgRAPgLQAQgMACgKQgGgBghgQQgOgGgMAAQgIAAgHADgAiSDDQgGAZAWAEQAWAEACgXIgSgHQgHgEgHAAIgIABgAi6CbIAeAAIAAgeIgeAAgADVBfIAAAoQAdAGAAgaQAAgVgTAAIgKABgAADBLQgCAbAMANQAxgCgJgwIgNgBQgWAAgPALgADXBNQgGAFAEADQACACAGgEQAFgEgDgEIgCgBQgDAAgDADgAguAPQADAPgNAKQgOAKAEAPQANANAVgEQAUgDAGgQQAKAAAfgIQAZgGAXAEQAFgWgPgNQgSgQgCgIQAiADABgXQABgSgQgWQgUgDgLASQgOAWgFADQgJgVgGgJQgKgPgYAFQgOALAIAZQAGAVgUADQACggggACQgBAFgOAPQgKALAFASQAHAOAWgHQAIgCAFAAQAIAAAAAFgAj1gOQAAAZAdgGQgBgKAHgLQADgHgJgLIgKgBQgTAAAAAVgAhnjHQgBAQASAJIAHgRQAFgLgCgMIgHAAQgTAAgBAPgAAXjqQgCALAIAMQAIAMgEAPQAkANAYgJQAZgJAFgjQgYgUgagGQgIgCgHAAQgXAAgMASgAAFj8QgFAFADADQACACAGgEQAFgEgDgEIgCgBQgDAAgDADg");
	this.shape_9.setTransform(59.3,-19.6,0.599,0.599,-69.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhGBdIAbgWQANgHAUAJIAAgeQgMALgZABQgSAAgFASQgdgIATgTQATgUAVARIAAgeQgIAAgMAGQgKAGgKgCQAOgMgHgNQgMgPgFgJQACgVARgPIAfgYQAQgEAFANQAIAUABABQAWgBgHgWQgFgUATADIAAA8QgLgIgIAAQgJAAgLAIQABAEAFAGQAEAFAAAFQAMACAZgVQAVgRALAQIAMgNQAGgJAMACQAGAVgUAGQgYAGgCAHQAHAKAOgDQANgDAGAPQgCAagdgJQgbgIAIgcQgJgBgHAFQgJAGgFAAQAAAIANAJQALAIgEAOQgWAEAEAYQAGAbgIAFQgVgMgTALQgLAFgKAAQgJAAgJgEgAgyADQAQABANAVQAMAUASgCQgBgTgBgDQgEgLgNADQAGgYgWgDIgHgBQgQAAgBASgAhMggQgFAHABAJIAeAAIAAgUQgGAAgFgEQgGgFgDgBQAAAGgGAIgAgwg0QACAOAQACQALgKgCgNQgDgPgQgCQgKALACANg");
	this.shape_10.setTransform(34.3,-8.7,0.599,0.599,-69.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_11.setTransform(96.5,8.3,0.599,0.599,-69.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_12.setTransform(94.5,7.6,0.599,0.599,-69.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAgBg");
	this.shape_13.setTransform(91.4,8.3,0.599,0.599,-69.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_14.setTransform(87.2,-5.3,0.599,0.599,-69.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgJABQAFgEAAgGIATAAQADANgLAEQgDABgSABQAAgEAFgFg");
	this.shape_15.setTransform(83.2,2.8,0.599,0.599,-69.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_16.setTransform(81.1,-11.4,0.599,0.599,-69.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_17.setTransform(77.6,-7,0.599,0.599,-69.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGAJQgSgIAUgLQADABAFAFQAFAEAGAAQgCALgKAAQgDAAgGgCg");
	this.shape_18.setTransform(78.3,-18.2,0.599,0.599,-69.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCgCIAMgCQAAAFgIACIgLACQAAgFAHgCg");
	this.shape_19.setTransform(75.2,-17.8,0.599,0.599,-69.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOgEQACgIAMABQAMABADAGQAHAQgVAAIgBAAQgTAAAFgQg");
	this.shape_20.setTransform(67.8,-3,0.599,0.599,-69.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAPIAAgdQAfgCgCAfg");
	this.shape_21.setTransform(70.5,-12.1,0.599,0.599,-69.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCgBIAMgDQgBAFgGACIgMACQAAgFAHgBg");
	this.shape_22.setTransform(66,-5.2,0.599,0.599,-69.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_23.setTransform(58.8,-3.7,0.599,0.599,-69.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJABQABgIAIAAQAKABAAAHQgJAGgCABIgCAAQgFAAgBgHg");
	this.shape_24.setTransform(61.5,-16.4,0.599,0.599,-69.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNAUIAAgnQAYgCACAXQACASgSAAIgKAAg");
	this.shape_25.setTransform(58.5,-6.3,0.599,0.599,-69.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_26.setTransform(62.2,-22.2,0.599,0.599,-69.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_27.setTransform(68.3,-42.3,0.599,0.599,-69.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_28.setTransform(59.6,-19.7,0.599,0.599,-69.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_29.setTransform(66.7,-44.2,0.599,0.599,-69.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_30.setTransform(67.6,-49,0.599,0.599,-69.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_31.setTransform(56.2,-20,0.599,0.599,-69.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_32.setTransform(50.6,-6.9,0.599,0.599,-69.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_33.setTransform(48.9,-4.5,0.599,0.599,-69.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCgBIAMgDQAAAFgIACIgLACQAAgFAHgBg");
	this.shape_34.setTransform(66.5,-54.8,0.599,0.599,-69.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_35.setTransform(61.6,-42.2,0.599,0.599,-69.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_36.setTransform(48,-6.4,0.599,0.599,-69.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_37.setTransform(46.2,-3.3,0.599,0.599,-69.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAGQgNgFAEgPQABACATAHQANAFgEAPIgUgJg");
	this.shape_38.setTransform(65.9,-56.6,0.599,0.599,-69.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCAlIgTgSQAVgJAFgMQAFgOgLgYQAZAIgDAeIgDAfQgEAMgIAAQgEAAgEgEg");
	this.shape_39.setTransform(63.2,-44.6,0.599,0.599,-69.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_40.setTransform(60.8,-44.4,0.599,0.599,-69.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOAKQAHgTAWAAQgHATgVAAIgBAAg");
	this.shape_41.setTransform(65.1,-63.9,0.599,0.599,-69.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_42.setTransform(64.5,-66.7,0.599,0.599,-69.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgJgOQAUAIgBAVQgUgIABgVg");
	this.shape_43.setTransform(63.5,-62.3,0.599,0.599,-69.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_44.setTransform(41.7,-4.9,0.599,0.599,-69.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_45.setTransform(57.3,-48.9,0.599,0.599,-69.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_46.setTransform(57.8,-51,0.599,0.599,-69.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_47.setTransform(62.4,-66.2,0.599,0.599,-69.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_48.setTransform(59.7,-58.9,0.599,0.599,-69.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_49.setTransform(39.8,-5,0.599,0.599,-69.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTgLQALgMAQAJQARAJgFAXIgLABQggAAAEgeg");
	this.shape_50.setTransform(48.8,-28.2,0.599,0.599,-69.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgBgCQAYgSgWAVQgJAKgCAAQgBAAAKgNg");
	this.shape_51.setTransform(40.9,-8.3,0.599,0.599,-69.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAAAFQgIgHgHgBQADgTAQAMQARAKgHAQQgGgCgIgJg");
	this.shape_52.setTransform(41.9,-12.6,0.599,0.599,-69.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_53.setTransform(39.4,-10.9,0.599,0.599,-69.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_54.setTransform(40.5,-21.6,0.599,0.599,-69.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAHQgEgCAAgFQABgHAEABQAEACAAAEQgBAHgEAAIAAAAg");
	this.shape_55.setTransform(33.6,-2.8,0.599,0.599,-69.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEAFQgEgEAGgDQAFgEACACQAEAEgGADQgDADgCAAIgCgBg");
	this.shape_56.setTransform(35,-14.4,0.599,0.599,-69.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAMQgFgGADgSQAOABACAJQACAGgHAGQgDADgCAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_57.setTransform(31.2,-2.6,0.599,0.599,-69.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAAAHQgJAAAAgHQADgIAEADQAIAFAEAAQgCAHgIAAIAAAAg");
	this.shape_58.setTransform(28.8,-1.7,0.599,0.599,-69.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOAKQAHgUAWABQgHATgVAAIgBAAg");
	this.shape_59.setTransform(31.4,-12.5,0.599,0.599,-69.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAAAGQgEgBAAgFQABgHAEACQAEABAAAEQgBAHgEAAIAAgBg");
	this.shape_60.setTransform(27.4,-10.2,0.599,0.599,-69.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAAAKIgZAFQAKgPAAgOQADAGAWADQATADgFARIgYgFg");
	this.shape_61.setTransform(25,-8,0.599,0.599,-69.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFEBE6").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAbAAASASQATATAAAZQAAAagTATQgSASgbAAQgZAAgTgSg");
	this.shape_62.setTransform(48.3,-5.4,0.599,0.599,-69.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFEBE6").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAbAAASASQASATABAZQgBAagSATQgSASgbAAQgaAAgSgSg");
	this.shape_63.setTransform(68.8,-2.9,0.599,0.599,-69.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFEBE6").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAbAAASASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_64.setTransform(78.3,-17.5,0.599,0.599,-69.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFEBE6").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAbAAASASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_65.setTransform(71.8,-34.5,0.599,0.599,-69.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFEBE6").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_66.setTransform(51.7,-36.5,0.599,0.599,-69.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFEC55").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAKQgJAJgNAAQgMAAgKgJg");
	this.shape_67.setTransform(59.6,-19.5,0.599,0.599,-69.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF65D2").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNgBQgMABgJgKg");
	this.shape_68.setTransform(60.4,-16.1,0.599,0.599,-69.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF65D2").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgJAMAAQANAAAJAJQAKAJAAAMQAAANgKAKQgJAIgNABQgMgBgKgIg");
	this.shape_69.setTransform(64,-18.8,0.599,0.599,-69.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF65D2").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKg");
	this.shape_70.setTransform(61.1,-21.9,0.599,0.599,-69.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF65D2").s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIAMgBQANABAKAIQAJAKAAAMQAAANgJAJQgKAJgNAAQgMAAgJgJg");
	this.shape_71.setTransform(57,-23.4,0.599,0.599,-69.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF65D2").s().p("AgWAWQgIgJgBgNQABgMAIgKQAKgIAMgBQANABAJAIQAKAKgBAMQABANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_72.setTransform(55.7,-19.9,0.599,0.599,-69.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF65D2").s().p("AgWAWQgJgJAAgNQAAgMAJgKQAKgJAMAAQANAAAJAJQAKAKAAAMQAAANgKAJQgJAKgNAAQgMAAgKgKg");
	this.shape_73.setTransform(56.2,-15.7,0.599,0.599,-69.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFEBE6").s().p("AgsAtQgSgTAAgaQAAgZASgTQATgSAZAAQAaAAATASQASATAAAZQAAAagSATQgTASgaAAQgZAAgTgSg");
	this.shape_74.setTransform(40.5,-21.5,0.599,0.599,-69.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#FADE5D","#FBE93C","#FEF6AC","#FFFCDF","#FEEC98","#FCE476","#FADD57","#F8D944","#F8D73D"],[0,0.208,0.38,0.467,0.678,0.765,0.863,0.945,1],13.1,2.1,-16.3,-0.5).s().p("AhuD3QgegIAEjHIAKjDQgLgTgFgVQgLgqAfgHQAggIAbAUQANAKAHALQAMAFANgEQAOgEAGABQARAEAQANQAJAIAMgHQAVgNAcADQAgAEAHAaQAGAZgPATQgYAdgEANQgaBJg/B0QhPCTgrAAIgGAAg");
	this.shape_75.setTransform(88,-1.1,0.599,0.599,-69.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#FADE5D","#FBE93C","#FEF6AC","#FFFCDF","#FEEC98","#FCE476","#FADD57","#F8D944","#F8D73D"],[0,0.208,0.38,0.467,0.678,0.765,0.863,0.945,1],-6.4,-20.9,6.3,5.8).s().p("AikCQQgXgYADghIAIgdQgCgNgKgIQgKgKgDgIQgFgQAEgTQABgMgMgHQgWgMgLgZQgNgdATgUQASgSAYAEQAlAFANgCQBMgQCEgEQC0gFAMAqQAJAeitBgQhXAwhXArIgaAiQgSARgOAAQgLAAgJgJg");
	this.shape_76.setTransform(64.9,-53.2,0.599,0.599,-69.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#FADE5D","#FBE93C","#FEF6AC","#FFFCDF","#FEEC98","#FCE476","#FADD57","#F8D944","#F8D73D"],[0,0.208,0.38,0.467,0.678,0.765,0.863,0.945,1],-14.4,10.6,3.4,-13).s().p("AAPDdQgYgIgIgXQgMgkgIgKQgyg/hAhwQhYidAggeQAWgVCmBsQBSA2BPA7IAqAHQApAMgKAeQgKAfgfANIgdAGQgLAHgDANQgEAOgFAGQgMAMgUAGQgMAEAAAPQAAAYgRAWQgPATgTAAQgGAAgGgCg");
	this.shape_77.setTransform(30.8,-7.3,0.599,0.599,-69.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(0,0,0,0)","rgba(246,203,46,0)","#F6CB2E","#F8C61E","#FAC315","#FAC212","#F7C92A","#EEDC68","#E7EC9A"],[0,0.761,0.761,0.796,0.835,0.886,0.906,0.941,0.965],-25.7,18.6,25.8,-18.6).s().p("AjqDaIhHk4IDrjZIExBeIBHE4IjrDZg");
	this.shape_78.setTransform(58.7,-19.9,0.599,0.599,-69.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#C89419","#E0A41A","#F4B21B","#FCC633","#FFCE3D","#F8CB3A","#F4D352","#E9E890","#E7EC9A","#EAE584","#EFDA61","#F3D244","#F6CB2E","rgba(246,203,46,0)","rgba(0,0,0,0)"],[0.024,0.067,0.102,0.231,0.282,0.451,0.51,0.639,0.659,0.671,0.698,0.729,0.761,0.761,1],-25.7,18.6,25.8,-18.6).s().p("AjqDaIhHk4IDrjZIExBeIBHE4IjrDZg");
	this.shape_79.setTransform(58.7,-19.9,0.599,0.599,-69.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#D7F0FC","#ABE1FA","#0DBAFF"],[0.004,0.451,0.988],0,0,0,0,0,72.7).s().p("AlYLZQgtgCgLh1QgJhdAMhAQAHgiAAhuIAAhnQgXgngYgyQgxhjgLgzQgKg0gBhWIABhLQhEhmg8huQh4jbApgnQAegdBxAqQBOAcA7AjQAoAYC0BdIBOABQBaAEA3APQA4AOBOApQAmAVAcARIBUACQBfAAA2gCQBdgEBHAKQBlAPAPAnQAQApg1A2QgoAphJAsIjPB/IhHBWQhPBbghAZQg1Aoh7BrIiSDjQh9DEhMAAIgDAAg");
	this.shape_80.setTransform(67.6,-23.2,0.599,0.599,-69.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(12.3,-71,89.4,83.8);


(lib.diatom_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Diatom13
	this.instance = new lib.Diatom13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(233.7,-535.5,1,1,0,0,0,-53.1,58.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},86).wait(15));

	// Diatom12
	this.instance_1 = new lib.Diatom12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.8,61,1,1,0,0,0,48,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},86).wait(15));

	// Diatom11
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-84.7,101.6,1,1,0,0,0,29.2,26.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},86).wait(15));

	// Diatom10
	this.instance_3 = new lib.Diatom10("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(227.4,37,0.998,0.998,-52.4,0,0,9.5,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},86).wait(15));

	// Diatom09
	this.instance_4 = new lib.Diatom09("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-47.8,-446.8,1,1,0,0,0,45.6,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},86).wait(15));

	// Diatom08
	this.instance_5 = new lib.Diatom08("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(197.3,-71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},86).wait(15));

	// Diatom07
	this.instance_6 = new lib.Diatom07("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-160.4,-74,0.998,0.998,34.1,0,0,23.5,39.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},86).wait(15));

	// Diatom05
	this.instance_7 = new lib.Diatom05("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(6.9,-155.6,0.999,0.999,18.3,0,0,20.3,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},86).wait(15));

	// Diatom04
	this.instance_8 = new lib.Diatom04("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-272.6,-594.2,1,1,0,0,0,31.6,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},86).wait(15));

	// Diatom03
	this.instance_9 = new lib.Diatom03("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(123,-315.1,1,1,-94.3,0,0,29.8,38.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},86).wait(15));

	// Diatom02
	this.instance_10 = new lib.Diatom02("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-207.4,-209,1,1,0,0,0,35.5,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},86).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.4,-636,611.5,764.2);


// stage content:
(lib._20170113_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// diatoms
	this.instance = new lib.diatom_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(330.8,294.1,1.385,1.346,180,0,0,28.4,-106.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-1.9,regY:-252.7,x:372.8,y:490.6,alpha:0.1,startPosition:1},0).wait(1).to({alpha:0.2,startPosition:2},0).wait(1).to({alpha:0.3,startPosition:3},0).wait(1).to({alpha:0.4,startPosition:4},0).wait(1).to({alpha:0.5,startPosition:5},0).wait(1).to({alpha:0.6,startPosition:6},0).wait(1).to({alpha:0.7,startPosition:7},0).wait(1).to({alpha:0.8,startPosition:8},0).wait(1).to({alpha:0.9,startPosition:9},0).wait(1).to({alpha:1,startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({alpha:0.889,startPosition:77},0).wait(1).to({alpha:0.778,startPosition:78},0).wait(1).to({alpha:0.667,startPosition:79},0).wait(1).to({alpha:0.556,startPosition:80},0).wait(1).to({alpha:0.444,startPosition:81},0).wait(1).to({alpha:0.333,startPosition:82},0).wait(1).to({alpha:0.222,startPosition:83},0).wait(1).to({alpha:0.111,startPosition:84},0).wait(1).to({alpha:0,startPosition:85},0).to({_off:true},1).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335.8,489.8,847.2,1028.8);
// library properties:
lib.properties = {
	width: 768,
	height: 1024,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"assets/animations/images/Diatoms_PQ_atlas_.png", id:"Diatoms_PQ_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;