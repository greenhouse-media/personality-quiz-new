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
		{src:"assets/animations/images/WaterBugs_PQ_atlas_.png", id:"WaterBugs_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"WaterBugs_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["WaterBugs_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.WaterRings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("Ag3A4QgYgXAAghQAAggAYgXQAXgYAgAAQAhAAAXAYQAYAXAAAgQAAAhgYAXQgXAYghAAQggAAgXgYg");
	this.shape.setTransform(8,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.945)"],[0,1],0,0,0,0,0,235.7).ss(1.8,1,1).p("AjGAAQAAhQA6g6QABgBACgCQACgCACgBQA5g2BMAAQBMAAA4AzQAEADADAEQACABABABQAeAgAPAmQAMAhAAAjQAAAlgMAgQgPAnggAgQgBABgBABQg6A5hPAAQhRgBg5g4QgCgCgDgCQg4g6AAhQg");
	this.shape_1.setTransform(8,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.89)"],[0,1],0,0,0,0,0,235.7).ss(3.1,1,1).p("Ak9AAQAAiABdhdQADgDACgEQADgBADgDQBbhVB6AAQB7AABZBTQAGAFAFAFQACADACACQAxAxAXA9QASA0ABA5QAAA7gTAzQgXA/g0AzQgCACgCACQhcBah/AAQiCgBhchbQgDgEgEgDQhZhcAAh/g");
	this.shape_2.setTransform(8,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.831)"],[0,1],0,0,0,0,0,235.7).ss(4.3,1,1).p("AmzAAQAAiyB/iAQAEgEAEgEQADgDAEgDQB8hzCpAAQCpAAB7BxQAIAGAHAIQADADADADQBDBEAeBUQAaBGAABQQAABRgaBGQgfBWhHBHQgDADgDAEQh/B5ivAAQiyAAh/h+QgFgFgFgFQh4h+AAiug");
	this.shape_3.setTransform(8,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.776)"],[0,1],0,0,0,0,0,235.7).ss(5.6,1,1).p("AoqAAQAAjjCiijQAFgFAFgFQAEgEAFgEQCeiSDXAAQDXAACdCQQAKAJAJAJQAEAEADAEQBVBXAnBqQAhBZAABmQAABmghBaQgoBuhaBaQgEAEgFAEQihCbjeAAQjkgBihihQgHgGgGgGQiYigAAjdg");
	this.shape_4.setTransform(8,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.722)"],[0,1],0,0,0,0,0,235.7).ss(6.8,1,1).p("AqhAAQAAkUDFjGQAGgGAGgGQAGgFAGgFQC/ixEFAAQEFAAC/CvQALALAMALQAFAFAEAEQBnBqAvCAQAoBtAAB8QAAB8goBtQgxCGhtBtQgGAGgFAFQjDC7kOAAQkVgBjFjDQgHgIgHgIQi5jCAAkMg");
	this.shape_5.setTransform(8,8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.667)"],[0,1],0,0,0,0,0,235.7).ss(8.1,1,1).p("AsYAAQAAlFDojpQAIgHAHgHQAGgGAHgGQDhjQEzAAQE0AADgDOQAOANANANQAGAGAFAFQB4B8A4CXQAvCAAACRQAACUgvCAQg5CdiBCAQgGAHgHAGQjlDck+AAQlHgCjnjmQgIgIgJgJQjZjkAAk8g");
	this.shape_6.setTransform(8,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.612)"],[0,1],0,0,0,0,0,235.7).ss(9.4,1,1).p("AuPAAQAAl2EMkMQAIgIAIgIQAHgHAIgHQECjvFiAAQFiAAECDtQAQAPAPAQQAHAGAGAGQCKCPBACtQA2CSAACoQAACqg2CTQhCC0iUCUQgIAIgHAHQkID9ltAAQl4gCkKkJQgKgKgKgKQj5kGAAlrg");
	this.shape_7.setTransform(8,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.557)"],[0,1],0,0,0,0,0,235.7).ss(10.6,1,1).p("AwGAAQAAmnEvkvQAJgJAJgJQAJgIAIgIQEkkOGQAAQGQAAEkEMQASARARASQAHAHAHAHQCdChBIDEQA8ClABC+QAADAg9CmQhLDMinCnQgJAJgIAIQkqEemdAAQmpgCktksQgLgLgLgMQkakoAAmag");
	this.shape_8.setTransform(8,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.502)"],[0,1],0,0,0,0,0,235.7).ss(11.9,1,1).p("Ax9AAQAAnYFSlSQALgKAKgKQAKgJAJgJQFGktG9AAQG+AAFGEsQAUATAUATQAHAIAIAIQCuCzBRDbQBDC5ABDTQAADWhEC5QhUDki6C6QgKAKgJAJQlME/nNAAQnagDlQlOQgMgNgNgMQk6lLAAnJg");
	this.shape_9.setTransform(8,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.443)"],[0,1],0,0,0,0,0,235.7).ss(13.2,1,1).p("Az0AAQAAoJF1l1QALgLANgLQAKgKALgKQFnlMHrAAQHsAAFnFLQAXAVAWAVQAIAJAIAIQDBDHBZDyQBKDLABDoQAADshLDNQhdD7jNDOQgLALgLAKQluFgn8AAQoMgDlylxQgOgOgNgOQlbltAAn4g");
	this.shape_10.setTransform(8,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.388)"],[0,1],0,0,0,0,0,235.7).ss(14.4,1,1).p("A1rAAQAAo7GYmXQANgNAMgMQAMgLALgKQGJlrIaAAQIbAAGIFqQAZAWAYAYQAJAJAJAKQDSDZBiEIQBRDeABD/QAAEChSDgQhlETjhDhQgMAMgMALQmQGBosAAQo+gEmUmTQgPgQgPgPQl7mOAAoog");
	this.shape_11.setTransform(8,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.333)"],[0,1],0,0,0,0,0,235.7).ss(15.7,1,1).p("A3hAAQAApsG6m6QAOgOAOgNQAMgMANgLQGqmJJIAAQJJAAGqGIQAbAYAaAaQAKAKAKAKQDkDsBpEfQBZDxAAEUQAAEZhZDzQhtErj0D0QgNANgNANQmzGgpbAAQpvgDm3m2QgRgRgQgRQmamwAApXg");
	this.shape_12.setTransform(8,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.278)"],[0,1],0,0,0,0,0,235.7).ss(17,1,1).p("A5YAAQAAqdHdndQAPgPAPgOQANgNAOgMQHMmoJ2AAQJ3AAHMGnQAdAaAcAcQALALAKALQD3D/BxE1QBgEEAAEqQAAEvhgEHQh2FCkHEHQgOAOgOAOQnVHBqLAAQqggDnanaQgSgSgRgRQm7nTAAqGg");
	this.shape_13.setTransform(8,8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.224)"],[0,1],0,0,0,0,0,235.7).ss(18.2,1,1).p("A7PAAQAArOIAoAQAQgQAQgPQAPgOAOgNQHunHKkAAQKlAAHuHGQAfAcAeAeQALAMAMAMQEIERB6FMQBmEXABFAQAAFFhnEaQh/FZkaEbQgPAPgPAPQn4Hiq6AAQrSgEn8n8QgTgTgTgTQnbn1AAq1g");
	this.shape_14.setTransform(8,8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.169)"],[0,1],0,0,0,0,0,235.7).ss(19.5,1,1).p("A9GAAQAAr/IjojQASgRARgQQAPgPAPgOQIQnmLSAAQLUAAIPHlQAhAfAgAfQAMANAMANQEbEjCCFjQBtEqABFVQAAFchuEtQiHFxkuEuQgQAQgRAQQoZIDrqAAQsDgEofofQgVgUgTgVQn8oXAArkg");
	this.shape_15.setTransform(8,8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.11)"],[0,1],0,0,0,0,0,235.7).ss(20.7,1,1).p("A+9AAQAAswJHpGQASgSASgRQAQgQARgPQIwoFMBAAQMCAAIxIEQAjAhAiAiQANANANANQEtE3CKF5QB0E8ABFsQAAFyh1FAQiQGJlBFBQgSARgRARQo8IksZAAQs0gEpCpCQgWgWgVgWQoco5AAsTg");
	this.shape_16.setTransform(8,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0.055)"],[0,1],0,0,0,0,0,235.7).ss(22,1,1).p("Egg0AAAQAAthJqppQATgTATgTQARgQASgQQJSokMvAAQMwAAJTIkQAlAiAkAkQAOAOAOAOQE+FJCTGQQB7FPABGCQAAGIh8FTQiZGhlUFUQgTASgSASQpeJFtJAAQtmgFpkpkQgXgXgXgYQo8paAAtDg");
	this.shape_17.setTransform(8,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().rs(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,235.7).ss(23.3,1,1).p("EAgpgL+QCDFlAAGZQAAGaiDFmQiiG4lnFoQqMKMuUAAQuSAAqMqMQqNqMAAuUQAAuSKNqMQAmgmAngkQJ0pDNdAAQNeAAJ1JDQAnAkAmAmQFnFnCiG5g");
	this.shape_18.setTransform(8,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,18,18);


(lib.Rfront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E29").s().p("A1CI3QgShzAGgUIADg4QACgqAUgIQARgIAgBvQAiB3ALAHQANAIgFAKQgCADAUgFQA5gOKPmlQKPmkAegIQAegJJFjGQI2i/AAAOQAAAYosC8QpHDEgYAQQ2ANygPAAQgRABgIgOIgFgNQgNg9gPg6QgchzgFATQgFARgCgCIAJARQANAeADBsQADBwgQAHIgCAAQgPAAgShvg");
	this.shape.setTransform(0,0,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-25.5,102.2,51);


(lib.LFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#362E29").s().p("AUgKmQgQgHADhwQADhsANgeIAKgSQgDACgEgQQgGgTgkBzQgSA6gRA9QgBAHgFAGQgIAOgRgBQgJAAollbItRoXQgYgQpHjEQosi8AAgYQAAgOI2C/IJkDPQAdAIKIGkQKHGlA5AOQAUAFgCgDQgFgKAMgIQALgHAqh3QAnhvASAIQAUAIACAqIADA4QAGAUgSBzQgSBvgPAAIgCAAg");
	this.shape.setTransform(0,0,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-25.5,102.3,51);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFDED","#F3F3E8","#D6D9DD","#DBD7D3"],[0.004,0.278,0.749,0.875],0,0,0,0,0,4).s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgLgLg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFDED","#F3F3E8","#D6D9DD","#DBD7D3"],[0.004,0.278,0.749,0.875],0,0,0,0,0,4).s().p("AgbAcQgLgMAAgQQAAgPALgLQAMgMAPAAQAQAAAMAMQALALAAAPQAAAQgLAMQgMALgQAAQgPAAgMgLg");
	this.shape.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.WaterBug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Path_0();
	this.instance.parent = this;
	this.instance.setTransform(-6.4,-46.9,0.376,0.376,0,0,0,4,4);
	this.instance.alpha = 0.941;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#42210B").s().p("AgDBgQglAAgagcQgagcAAgoQAAgmAagcQAagdAlAAIAHAAQAlAAAaAdQAaAcAAAmQAAAogaAcQgaAcglAAg");
	this.shape.setTransform(-5.5,-45.4,0.376,0.376);

	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.3,-46.9,0.376,0.376,0,0,0,3.9,4);
	this.instance_1.alpha = 0.941;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#42210B").s().p("AgDBgQglAAgagcQgagdAAgnQAAgmAagcQAagdAlAAIAHAAQAlAAAaAdQAaAcAAAmQAAAngaAdQgaAcglAAg");
	this.shape_1.setTransform(4.2,-45.4,0.376,0.376);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#988575").ss(1,0,0,4).p("AhjASQABAAASgKQAYgMAWgGQBJgWA+Ay");
	this.shape_2.setTransform(-0.5,-40.6,0.376,0.376);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#988575").ss(1,0,0,4).p("AiHAcQAAAAAZgQQAggTAegKQBlgiBVBP");
	this.shape_3.setTransform(-0.4,58.2,0.376,0.376);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#988575").ss(1,0,0,4).p("AjEAcQABABAkgRQAugSAsgKQCRgjB7BP");
	this.shape_4.setTransform(-0.4,50.8,0.376,0.376);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#988575").ss(1,0,0,4).p("AjEAcQABABAkgRQAugSAsgKQCRgjB7BP");
	this.shape_5.setTransform(-0.4,43.3,0.376,0.376);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#988575").ss(1,0,0,4).p("AjEAcQAAAAAlgQQAugTAsgKQCRgiB7BP");
	this.shape_6.setTransform(-0.4,35.9,0.376,0.376);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#988575").ss(1,0,0,4).p("AjEAcQAAAAAlgQQAugTAsgKQCRgiB7BP");
	this.shape_7.setTransform(-0.4,28.5,0.376,0.376);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#988575").ss(1,0,0,4).p("AjNAcQAAABAmgRQAxgSAtgKQCZgjCBBP");
	this.shape_8.setTransform(-0.4,19.8,0.376,0.376);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#988575").ss(1,0,0,4).p("AjiArQAXgYAwgUQA1gYA9gJQCcgZBwBU");
	this.shape_9.setTransform(-0.4,12.5,0.376,0.376);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#988575").ss(1,0,0,4).p("AjRAcQAAABAngRQAygSAugKQCcgjCDBP");
	this.shape_10.setTransform(-0.4,4.9,0.376,0.376);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#988575").ss(1,0,0,4).p("AjaAcQABAAAmgQQAygSAvgLQCegiCRBP");
	this.shape_11.setTransform(-0.4,-2.5,0.376,0.376);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#988575").ss(1,0,0,4).p("AjUAdQABABAngRQAxgTAvgLQCdgkCGBN");
	this.shape_12.setTransform(-0.4,-9.9,0.376,0.376);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#988575").ss(1,0,0,4).p("AjLAcQAAABAmgRQAwgSAtgKQCXgjB/BP");
	this.shape_13.setTransform(-0.4,-17.4,0.376,0.376);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#988575").ss(1,0,0,4).p("AjAAcQABAAAjgQQAugTAqgKQCPgiB4BP");
	this.shape_14.setTransform(-0.5,-24.8,0.376,0.376);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#988575").ss(1,0,0,4).p("AinAcQABABAegRQAogSAlgKQB8gjBoBP");
	this.shape_15.setTransform(-0.4,-32.3,0.376,0.376);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#988575").ss(1,0,0,4).p("AAA6iMAAAA1F");
	this.shape_16.setTransform(-0.4,8.4,0.376,0.376);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#6D583F","#483318","#282913"],[0,0.498,1],-23.2,0,23.3,0).s().p("AgmaBQAAglgPg8QgPhAgQgMQgfgWgsiaQgzivACiQQABgrgMnMQgNnYABjLQABj9AglPQApmzA8grQAKgHgIgJQgEgEgWgPQgxghgFghQgCgVAfhcQAkhhAGgWQAPg0APgYQAcgqAuAAQArAAAZAqQAMAUAQA4QACAIAqBkQAhBQgDAVQgEAggxAvQgmAjAPAKQA0AhAuGoQAoFnABDcQAADNgOHlQgPHaABAsQACCQgzCvQgsCagfAWQgQAMgPBAQgPA8AAAlQAAAigjAAQgmAAAAgig");
	this.shape_17.setTransform(-0.3,7.9,0.376,0.376);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F7C857","#EFC45A","#D8B763","#D2B465","#DAB862","#EFC45A","#F7C857","#DFB64F","#F7C857"],[0.075,0.204,0.416,0.459,0.553,0.694,0.733,0.918,1],-32.7,0,32.8,0).s().p("AgcaXQgdgnAAgcQAAgjgYgzQgYgzgagNQgngShPl3QhQl7ADieQABgZATjwQATjkABjRQABizA7m0QA9nHAkgUQAYgNgZgmQgmg5gFgXQgFgXAehZQAYhGAWgyQAFgLAEgZQAEgXAFgKQARgkBDAAQAlAAAZAkQALAPAZA2QAaA8AWA8QAhBagFAWQgGAdgqApQgPAOgCAIQgCALAOAHQAkAVBCHRQA/HBABCwQABDRATDkQATDwABAZQADClg5FSQhDGJhKAiQgaANgYAzQgYAzAAAjQAAAcgdAnQgPAVgOANQgNgNgPgVg");
	this.shape_18.setTransform(-0.4,9.2,0.376,0.376);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#362E29").s().p("AuXJiQDMlLAQgLQAMgJXtugQAUgLAIgNQAJgNAMgHQAFgDBfh7QBWhvATAIQATAIACAqIADA4QAGASgSAwQgTAxgQgHQgPgHACgrQADgmANgfIAKgSQgDACgEgQQgFgThUBzQgqA6gpA9IgFAOQgJANgQAAQgRgBryHLIsOHdQgPAJjEFCQjAE7gQAAQgTAADPlOg");
	this.shape_19.setTransform(-52.9,48.9,0.376,0.376);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#362E29").s().p("AN9JyQkIlMgGgDIsOndQrynLgQABQgRAAgIgNIgGgOQgpg9gpg6QhUhzgFATQgEAQgEgCIAKASQAOAfACAmQADArgQAHQgQAHgTgxQgSgwAGgSIADg4QACgqAUgIQATgIBWBvQBeB7AGADQALAHAJANQAJANATALQXuOgALAJQAdAVEJFLQENFSgYAAQgVAAkDlFg");
	this.shape_20.setTransform(54.4,49.1,0.376,0.376);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E2CDB0","#241C1F"],[0.188,0.502],-40.8,0,40.8,0).s().p("AFiEtQgIgigIgKQgJgbgfiBQgXhfgeg4QgLgVgHgKQgNgQgRgJQg7ghhkgXIilgiQhHgbhrg1Qhrg1AGgGQAFgFAIgBQAIAAAHAEIB9A7QBNAkAxAVQA7ANB0AWQBjAYA9ArQAgAWAZAzQAfA+AbBSQAOAtAdBrQAFARANAVIAYAiIghAUQgOgLgHgeg");
	this.shape_21.setTransform(-17.4,-64.3,0.376,0.376);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#241C1F","#352C2C","#72655B","#A2927F","#C5B29A","#DAC6AA","#E2CDB0"],[0.498,0.518,0.596,0.667,0.729,0.78,0.812],-40.8,0,40.8,0).s().p("AmXFCQATgaAFgIQANgVAEgRQAfhuANgqQAbhSAfg+QAZgzAggWQA9grBjgYQA4gOB2gVQBWglCmhPQAHgEAIAAQAIABAFAFQAFAGhqA1QhsA2hHAaQhtAVg3ANQhkAXg8AhQgQAJgNAQQgHAKgLAVQgeA4gXBfQgfCBgJAbQgIAKgIAiQgHAegOALg");
	this.shape_22.setTransform(17.2,-65.1,0.376,0.376);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#362E29").s().p("ADhJYQgCgOgFgFQgFgFgZlBQgZlIgFgTQgGgZg2gyIg2guQg4gfhjhTQhShEgRAAQgZAAgMhnQgNhmAUAAQAOAAAIBKQAJBSAJALQAMAQCrCKIClCHIANgHQAPgEAMALQANALAbFlQAOC0ALCxQgUAUgGAAIgCgBg");
	this.shape_23.setTransform(-8.7,-62.3,0.376,0.376);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#362E29").s().p("Aj8JFQALixAOi0QAbllANgLQAMgLAPAEQAIACAFAFQFJkIAUgZQAJgLAIhSQAIhKAOAAQAUAAgNBmQgMBngZAAQgUAAhgBRQhvBfgTAMQgmAZgdAYQgxApgGAZQgFATgZFIQgZFBgFAFQgEAPgCAEIgCABQgHAAgUgUg");
	this.shape_24.setTransform(8.2,-62.3,0.376,0.376);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(40));

	// L-Front
	this.instance_2 = new lib.LFront();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,8.1,1.436,0.998,13.3,0,0,50.6,22.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:1.44,scaleY:1,x:-75.7,y:-30.2},0).wait(9).to({rotation:33.7,x:-58.2,y:-50.7},0).wait(1).to({rotation:54.2,x:-34.7,y:-63.8},0).wait(1).to({scaleY:1,rotation:26.6,x:-65.2,y:-44.3},0).wait(1).to({scaleY:1,rotation:-1,x:-83.1,y:-12.8},0).wait(1).to({rotation:-28.6,x:-84.5,y:23.4},0).wait(1).to({rotation:12.8,x:-76.1,y:-29.6},0).wait(1).to({rotation:54.2,x:-34.7,y:-63.8},0).wait(1).to({rotation:12.8,x:-76.1,y:-29.6},0).wait(1).to({rotation:-28.6,x:-84.5,y:23.4},0).wait(1).to({rotation:-7.6,x:-85.1,y:-4.2},0).wait(1).to({rotation:13.3,x:-75.7,y:-30.2},0).wait(20));

	// R-front
	this.instance_3 = new lib.Rfront();
	this.instance_3.parent = this;
	this.instance_3.setTransform(8.9,9,1.386,0.998,-9.5,0,0,-51.1,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleY:1,x:75,y:-25.5},0).wait(9).to({rotation:-31.6,x:57.2,y:-47.8},0).wait(1).to({scaleY:1,rotation:-53.6,x:32.3,y:-61.8},0).wait(1).to({scaleY:1,rotation:-27.8,x:60.8,y:-44.5},0).wait(1).to({rotation:-2,x:78.9,y:-16.5},0).wait(1).to({rotation:23.8,x:83.1,y:16.5},0).wait(1).to({scaleY:1,rotation:-14.9,x:71.5,y:-31.5},0).wait(1).to({rotation:-53.6,x:32.3,y:-61.8},0).wait(1).to({rotation:-14.9,x:71.5,y:-31.5},0).wait(1).to({scaleY:1,rotation:23.8,x:83.1,y:16.5},0).wait(1).to({rotation:7.1,x:82.1,y:-5.1},0).wait(1).to({rotation:-9.5,x:75,y:-25.5},0).wait(20));

	// Layer 6
	this.instance_4 = new lib.WaterRings("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-4,5,1,1,0,0,0,8,8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).to({_off:true},20).wait(5));

	// Layer 5
	this.instance_5 = new lib.WaterRings("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-4,5,1,1,0,0,0,8,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({_off:true},19).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153,-84.8,302.1,169.7);


(lib.waterbugs_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.WaterBug("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-178.1,451,0.697,0.697,62.2,0,0,-2.6,4.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1).to({regX:-4,regY:5,scaleX:0.7,scaleY:0.7,x:-178.8,y:450.3,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({rotation:63.2,x:-164.7,y:447.5,startPosition:22},0).wait(1).to({rotation:64.1,x:-150.5,y:444.9,startPosition:23},0).wait(1).to({rotation:65.1,x:-136.4,y:442.2,startPosition:24},0).wait(1).to({rotation:66,x:-122.3,y:439.5,startPosition:25},0).wait(1).to({rotation:67,x:-108.1,y:436.9,startPosition:26},0).wait(1).to({rotation:68,x:-94,y:434.1,startPosition:27},0).wait(1).to({rotation:68.9,x:-79.8,y:431.5,startPosition:28},0).wait(1).to({rotation:69.9,x:-65.7,y:428.8,startPosition:29},0).wait(1).to({rotation:70.9,x:-51.5,y:426.1,startPosition:30},0).wait(1).to({rotation:71.8,x:-37.3,y:423.5,startPosition:31},0).wait(1).to({rotation:72.8,x:-23.3,y:420.8,startPosition:32},0).wait(1).to({rotation:73.7,x:-9.1,y:418.1,startPosition:33},0).wait(1).to({rotation:74.7,x:5,y:415.4,startPosition:34},0).wait(1).to({rotation:75.7,x:19.2,y:412.7,startPosition:35},0).wait(1).to({rotation:76.6,x:33.3,y:410,startPosition:36},0).wait(1).to({rotation:77.6,x:47.5,y:407.4,startPosition:37},0).wait(1).to({rotation:78.5,x:61.7,y:404.7,startPosition:38},0).wait(1).to({rotation:79.5,x:75.8,y:402,startPosition:39},0).wait(1).to({rotation:80.5,x:89.9,y:399.3,startPosition:0},0).wait(1).to({rotation:81.4,x:104.1,y:396.6,startPosition:1},0).wait(1).to({rotation:82.4,x:118.3,y:394,startPosition:2},0).wait(1).to({rotation:83.3,x:132.4,y:391.3,startPosition:3},0).wait(1).to({rotation:84.3,x:146.5,y:388.6,startPosition:4},0).wait(1).to({rotation:85.3,x:160.6,y:385.9,startPosition:5},0).wait(1).to({rotation:86.2,x:174.8,y:383.3,startPosition:6},0).wait(1).to({rotation:87.2,x:188.9,y:380.5,startPosition:7},0).wait(1).to({rotation:88.2,x:203.1,y:377.9,startPosition:8},0).wait(1).to({rotation:89.1,x:217.3,y:375.2,startPosition:9},0).wait(1).to({rotation:90.1,x:231.4,y:372.5,startPosition:10},0).wait(1).to({rotation:91,x:245.6,y:369.9,startPosition:11},0).wait(1).to({x:301.2,y:371,startPosition:12},0).wait(1).to({x:356.8,y:372.1,startPosition:13},0).wait(1).to({x:412.5,y:373.2,startPosition:14},0).wait(1).to({x:468.1,y:374.4,startPosition:15},0).wait(1).to({x:483.4,y:374.2,startPosition:16},0).wait(1).to({x:498.6,y:374.1,startPosition:17},0).wait(1).to({x:605.9,y:370.2,startPosition:18},0).wait(1).to({x:713.1,y:366.4,startPosition:19},0).wait(1).to({x:733.5,y:366.2,startPosition:20},0).wait(1).to({x:754,y:366,startPosition:21},0).wait(1).to({x:774.4,y:365.9,startPosition:22},0).wait(1).to({x:794.8,y:365.7,startPosition:23},0).wait(1).to({x:815.2,y:365.5,startPosition:24},0).wait(1).to({x:835.6,y:365.3,startPosition:25},0).wait(1).to({x:856.1,y:365.2,startPosition:26},0).wait(1).to({x:876.5,y:365,startPosition:27},0).wait(1).to({x:896.9,y:364.8,startPosition:28},0).wait(1).to({x:917.3,y:364.7,startPosition:29},0).wait(1).to({x:937.8,y:364.5,startPosition:30},0).wait(1).to({x:958.2,y:364.3,startPosition:31},0).wait(1).to({x:978.6,y:364.2,startPosition:32},0).wait(1).to({x:999,y:364,startPosition:33},0).wait(1).to({x:1019.4,y:363.8,startPosition:34},0).wait(1).to({x:1039.9,y:363.6,startPosition:35},0).wait(1).to({x:1060.3,y:363.5,startPosition:36},0).wait(1).to({x:1080.7,y:363.3,startPosition:37},0).wait(1).to({x:1101.1,y:363.1,startPosition:38},0).wait(1).to({x:1121.6,y:363,startPosition:39},0).wait(1).to({x:1142,y:362.8,startPosition:0},0).wait(1).to({x:1162.4,y:362.6,startPosition:1},0).wait(1).to({x:1182.8,y:362.5,startPosition:2},0).wait(1).to({x:1203.2,y:362.3,startPosition:3},0).wait(1).to({x:1223.7,y:362.1,startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).to({_off:true},1).wait(1));

	// Layer 3
	this.instance_1 = new lib.WaterBug("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1172,444,0.701,0.701,-57.9,0,0,-0.6,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(1).to({regX:-4,regY:5,scaleX:0.7,scaleY:0.7,x:1172.5,y:447.3,startPosition:1},0).wait(1).to({x:1171.4,y:446.8,startPosition:2},0).wait(1).to({x:1170.3,y:446.2,startPosition:3},0).wait(1).to({x:1169.2,y:445.7,startPosition:4},0).wait(1).to({x:1168.1,y:445.1,startPosition:5},0).wait(1).to({x:1167,y:444.5,startPosition:6},0).wait(1).to({x:1165.9,y:444,startPosition:7},0).wait(1).to({x:1164.8,y:443.4,startPosition:8},0).wait(1).to({x:1163.7,y:442.9,startPosition:9},0).wait(1).to({x:1162.6,y:442.3,startPosition:10},0).wait(1).to({x:1161.5,y:441.7,startPosition:11},0).wait(1).to({x:1100.5,y:403.7,startPosition:12},0).wait(1).to({x:1039.5,y:365.7,startPosition:13},0).wait(1).to({x:978.5,y:327.7,startPosition:14},0).wait(1).to({x:917.5,y:289.7,startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({rotation:-58.6,x:856.5,y:245.7,startPosition:18},0).wait(1).to({rotation:-59.3,x:795.5,y:201.7,startPosition:19},0).wait(1).to({rotation:-60.1,x:791,y:199.8,startPosition:20},0).wait(1).to({rotation:-60.8,x:786.3,y:197.9,startPosition:21},0).wait(1).to({rotation:-61.5,x:781.7,y:196,startPosition:22},0).wait(1).to({rotation:-62.2,x:777,y:194.1,startPosition:23},0).wait(1).to({rotation:-62.9,x:772.4,y:192.2,startPosition:24},0).wait(1).to({rotation:-63.6,x:767.7,y:190.3,startPosition:25},0).wait(1).to({rotation:-64.4,x:763.1,y:188.4,startPosition:26},0).wait(1).to({rotation:-65.1,x:758.5,y:186.5,startPosition:27},0).wait(1).to({rotation:-65.8,x:753.8,y:184.6,startPosition:28},0).wait(1).to({rotation:-66.5,x:749.2,y:182.7,startPosition:29},0).wait(1).to({rotation:-67.2,x:744.5,y:180.8,startPosition:30},0).wait(1).to({rotation:-67.9,x:739.9,y:178.9,startPosition:31},0).wait(1).to({rotation:-68.7,x:735.2,y:177,startPosition:32},0).wait(1).to({rotation:-69.4,x:730.6,y:175.1,startPosition:33},0).wait(1).to({rotation:-70.1,x:726,y:173.2,startPosition:34},0).wait(1).to({rotation:-70.8,x:721.3,y:171.3,startPosition:35},0).wait(1).to({rotation:-71.5,x:716.7,y:169.3,startPosition:36},0).wait(1).to({rotation:-72.2,x:712,y:167.4,startPosition:37},0).wait(1).to({rotation:-73,x:707.4,y:165.6,startPosition:38},0).wait(1).to({rotation:-73.7,x:702.7,y:163.7,startPosition:39},0).wait(1).to({rotation:-74.4,x:698.1,y:161.7,startPosition:0},0).wait(1).to({rotation:-75.1,x:693.5,y:159.8,startPosition:1},0).wait(1).to({rotation:-75.8,x:688.8,y:157.9,startPosition:2},0).wait(1).to({rotation:-76.5,x:684.1,y:156,startPosition:3},0).wait(1).to({rotation:-77.2,x:679.5,y:154.1,startPosition:4},0).wait(1).to({rotation:-78,x:674.9,y:152.2,startPosition:5},0).wait(1).to({rotation:-78.7,x:670.2,y:150.3,startPosition:6},0).wait(1).to({rotation:-79.4,x:665.6,y:148.3,startPosition:7},0).wait(1).to({rotation:-80.1,x:660.9,y:146.4,startPosition:8},0).wait(1).to({rotation:-80.8,x:656.2,y:144.5,startPosition:9},0).wait(1).to({rotation:-81.5,x:651.6,y:142.6,startPosition:10},0).wait(1).to({rotation:-82.3,x:646.9,y:140.7,startPosition:11},0).wait(1).to({x:551.6,y:138.7,startPosition:12},0).wait(1).to({x:456.3,y:136.7,startPosition:13},0).wait(1).to({x:360.9,y:134.7,startPosition:14},0).wait(1).to({x:344.8,y:133.6,startPosition:15},0).wait(1).to({x:328.6,y:132.6,startPosition:16},0).wait(1).to({x:282.6,y:131.6,startPosition:17},0).wait(1).to({x:236.6,y:130.6,startPosition:18},0).wait(1).to({x:190.6,y:129.6,startPosition:19},0).wait(1).to({x:144.6,y:128.6,startPosition:20},0).wait(1).to({x:123.1,y:129.1,startPosition:21},0).wait(1).to({x:101.6,y:129.6,startPosition:22},0).wait(1).to({x:80.1,y:130.1,startPosition:23},0).wait(1).to({x:58.5,y:130.6,startPosition:24},0).wait(1).to({x:36.9,y:131.1,startPosition:25},0).wait(1).to({x:15.4,y:131.6,startPosition:26},0).wait(1).to({x:-6.1,y:132.1,startPosition:27},0).wait(1).to({x:-27.6,y:132.6,startPosition:28},0).wait(1).to({x:-49.1,y:133.1,startPosition:29},0).wait(1).to({x:-70.7,y:133.6,startPosition:30},0).wait(1).to({x:-92.2,y:134.2,startPosition:31},0).wait(1).to({x:-113.8,y:134.7,startPosition:32},0).wait(1).to({x:-135.3,y:135.2,startPosition:33},0).wait(1).to({x:-156.8,y:135.7,startPosition:34},0).wait(1).to({x:-178.4,y:136.2,startPosition:35},0).wait(1).to({x:-199.9,y:136.7,startPosition:36},0).wait(1).to({x:-221.5,y:137.2,startPosition:37},0).wait(1).to({x:-243,y:137.7,startPosition:38},0).wait(1).to({x:-264.6,y:138.2,startPosition:39},0).to({_off:true},1).wait(16));

	// flash1.ai
	this.instance_2 = new lib.WaterBug("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(380,-66,0.707,0.707,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-4,regY:5,scaleX:0.71,scaleY:0.71,rotation:176.1,x:384,y:-55.7,startPosition:1},0).wait(1).to({rotation:176.5,x:385.6,y:-41.7,startPosition:2},0).wait(1).to({rotation:176.9,x:387,y:-27.7,startPosition:3},0).wait(1).to({rotation:177.3,x:388.5,y:-13.7,startPosition:4},0).wait(1).to({rotation:177.7,x:390,y:0.4,startPosition:5},0).wait(1).to({rotation:178.1,x:391.5,y:14.3,startPosition:6},0).wait(1).to({rotation:178.5,x:392.9,y:28.4,startPosition:7},0).wait(1).to({rotation:178.9,x:394.4,y:42.4,startPosition:8},0).wait(1).to({rotation:179.3,x:395.9,y:56.4,startPosition:9},0).wait(1).to({rotation:179.7,x:397.4,y:70.5,startPosition:10},0).wait(1).to({rotation:180.1,x:398.9,y:84.5,startPosition:11},0).wait(1).to({rotation:180.5,x:399.9,y:134.5,startPosition:12},0).wait(1).to({rotation:180.9,x:400.9,y:184.5,startPosition:13},0).wait(1).to({rotation:181.3,x:402,y:234.5,startPosition:14},0).wait(1).to({rotation:181.7,x:403,y:284.6,startPosition:15},0).wait(1).to({rotation:182.1,startPosition:16},0).wait(1).to({rotation:182.7,x:405,y:347.9,startPosition:17},0).wait(1).to({rotation:183.2,x:407.1,y:411.3,startPosition:18},0).wait(1).to({rotation:183.8,x:409.1,y:474.7,startPosition:19},0).wait(1).to({rotation:184.1,x:407.5,y:490.2,startPosition:20},0).wait(1).to({rotation:184.3,x:405.9,y:505.7,startPosition:21},0).wait(1).to({rotation:184.6,x:404.4,y:521.3,startPosition:22},0).wait(1).to({rotation:184.9,x:402.8,y:536.8,startPosition:23},0).wait(1).to({rotation:185.2,x:401.3,y:552.4,startPosition:24},0).wait(1).to({rotation:185.4,x:399.7,y:568,startPosition:25},0).wait(1).to({rotation:185.7,x:398.2,y:583.5,startPosition:26},0).wait(1).to({rotation:186,x:396.6,y:599.1,startPosition:27},0).wait(1).to({rotation:186.3,x:395.1,y:614.6,startPosition:28},0).wait(1).to({rotation:186.5,x:393.5,y:630.2,startPosition:29},0).wait(1).to({rotation:186.8,x:391.9,y:645.7,startPosition:30},0).wait(1).to({rotation:187.1,x:390.4,y:661.3,startPosition:31},0).wait(1).to({rotation:187.4,x:388.9,y:676.8,startPosition:32},0).wait(1).to({rotation:187.6,x:387.3,y:692.4,startPosition:33},0).wait(1).to({rotation:187.9,x:385.8,y:707.9,startPosition:34},0).wait(1).to({rotation:188.2,x:384.2,y:723.5,startPosition:35},0).wait(1).to({rotation:188.4,x:382.6,y:739,startPosition:36},0).wait(1).to({rotation:188.7,x:381.1,y:754.6,startPosition:37},0).wait(1).to({rotation:189,x:379.6,y:770.1,startPosition:38},0).wait(1).to({rotation:189.3,x:378,y:785.7,startPosition:39},0).wait(1).to({rotation:189.5,x:376.5,y:801.2,startPosition:0},0).wait(1).to({rotation:189.8,x:374.9,y:816.8,startPosition:1},0).wait(1).to({rotation:190.1,x:373.3,y:832.3,startPosition:2},0).wait(1).to({rotation:190.4,x:371.8,y:847.8,startPosition:3},0).wait(1).to({rotation:190.6,x:370.2,y:863.4,startPosition:4},0).wait(1).to({rotation:190.9,x:368.7,y:879,startPosition:5},0).wait(1).to({rotation:191.2,x:367.2,y:894.5,startPosition:6},0).wait(1).to({rotation:191.5,x:365.5,y:910.1,startPosition:7},0).wait(1).to({rotation:191.7,x:364,y:925.7,startPosition:8},0).wait(1).to({rotation:192,x:362.5,y:941.2,startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).to({_off:true},1).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284.1,-130.4,199.4,125.2);


// stage content:



(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Waterbug
	this.instance = new lib.waterbugs_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(362.5,437.5,0.967,0.967,90,0,0,464.6,445.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},106).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1181.9,774.9,121.1,192.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;