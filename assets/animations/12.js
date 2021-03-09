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
		{src:"assets/animations/images/Bullfrog_PQ_atlas_.png", id:"Bullfrog_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Bullfrog_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["BullFrog_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.otterWaterDip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,55.1).s().p("Ah9ISQjbg1h3jAQh2jBA0jZQA2jbDAh3QDAh2DZA0QDbA1B3DAQB2DBg0DZQg1DcjAB2QiFBSiTAAQg/AAhDgQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,57.7).s().p("AiEIrQjlg3h8jKQh8jKA3jkQA3jmDKh8QDKh7DkA3QDlA3B8DJQB8DKg3DkQg3DnjKB7QiLBWiZAAQhDAAhHgRg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,60.4).s().p("AiKJFQjwg6iCjSQiCjUA6jvQA7jwDSiCQDTiCDvA6QDwA6CCDSQCBDUg5DuQg6DyjSCBQiTBaigAAQhGAAhKgSg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,63).s().p("AiQJeQj7g8iHjcQiIjdA9j5QA8j7DdiHQDciID5A9QD7A8CHDcQCIDdg9D4Qg7D9jdCGQiYBeioAAQhIAAhOgTg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,65.7).s().p("AiWJ4QkGg/iNjlQiMjmA+kEQA/kGDmiNQDmiMEDA+QEGA/CNDlQCMDmg+EEQg+EGjmCNQifBhivAAQhLAAhRgTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,68.4).s().p("AidKRQkQhBiSjvQiSjvBBkPQBBkQDviSQDviTEPBBQEQBBCSDvQCSDvhBEOQhAESjwCSQikBmi2AAQhPAAhVgVg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,71).s().p("AiiKrQkbhDiZj4QiYj5BEkZQBEkbD4iYQD5iZEYBEQEbBECZD4QCYD4hEEZQhDEcj4CYQisBpi9AAQhSAAhXgVg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,73.7).s().p("AipLFQklhGiekCQiekBBGkkQBHkmECieQEBieEkBGQElBHCeEBQCeEChGEjQhGEnkCCdQiyBtjDAAQhWAAhbgVg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,76.3).s().p("AivLfQkvhKilkKQijkLBIkvQBKkvELilQELijEuBIQEvBKClEKQCjELhIEuQhJExkLCkQi5BxjLAAQhYAAhegWg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(213,234,255,0.698)","rgba(255,255,255,0)","rgba(228,241,255,0.698)","rgba(255,255,255,0)","rgba(230,242,255,0.62)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,79).s().p("Ai1L4Qk6hMiqkUQipkUBLk5QBMk7EUipQEUipE5BLQE6BLCqEUQCpEVhLE4QhLE8kVCpQi+B1jSAAQhcAAhhgXg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(213,234,255,0.667)","rgba(255,255,255,0)","rgba(228,241,255,0.667)","rgba(255,255,255,0)","rgba(230,242,255,0.592)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,81.7).s().p("Ai7MSQlFhOiwkdQivkeBPlEQBOlFEdivQEeivFDBNQFFBPCwEdQCvEehPFDQhMFGkfCvQjFB5jZAAQheAAhlgYg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,84.3).s().p("AjBMrQlPhQi2knQi1knBRlOQBRlPEni2QEmi0FOBQQFPBRC2EmQC1EnhRFOQhQFQkmC1QjNB9jfAAQhiAAhogZg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,87).s().p("AjHNFQlahTi7kwQi7kwBTlZQBTlaExi7QEwi6FYBSQFaBTC7EwQC7ExhUFYQhSFbkwC6QjSCBjnAAQhlAAhrgZg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,89.6).s().p("AjONeQlkhVjBk6Qi/k5BUlkQBWlkE6jBQE6jAFiBVQFlBWDAE5QDAE6hUFiQhVFmk6DAQjZCGjvAAQhnAAhvgbg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,92.3).s().p("AjUN4QlvhYjGlCQjGlDBYluQBYlwFDjGQFDjGFuBYQFvBYDGFDQDGFDhYFtQhXFxlEDFQjfCJj1AAQhrAAhygbg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,94.9).s().p("AjZOSQl6hbjNlMQjLlMBal4QBcl6FLjMQFMjMF4BaQF6BbDMFMQDMFMhaF4QhbF7lLDMQjmCMj9AAQhuAAh0gbg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,97.6).s().p("AjgOrQmEhdjSlVQjRlVBdmEQBdmEFWjSQFWjRGCBdQGEBdDSFVQDRFWhdGCQhcGGlWDRQjsCRkDAAQhyAAh4gdg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,100.2).s().p("AjmPFQmPhgjYleQjWlfBgmOQBgmPFejXQFfjXGNBfQGPBgDXFfQDXFehgGNQheGRlfDXQjyCUkLAAQh0AAh8gdg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,102.9).s().p("AjsPeQmahijdlnQjcloBimZQBjmaFojdQFojcGXBhQGaBjDdFoQDcFohiGYQhhGblpDcQj4CZkRAAQh4AAh/gfg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,105.6).s().p("AjyP4QmkhljklxQjilxBlmjQBlmkFxjjQFyjiGiBkQGkBlDjFxQDjFxhlGjQhkGllxDjQkACckYAAQh7AAiCgfg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,108.2).s().p("Aj5QSQmvhnjnl7Qjpl6BnmuQBomvF7joQF6joGuBmQGvBoDnF6QDpF7hnGtQhnGwl7DoQkGCgkfAAQh+AAiGgfg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(213,234,255,0.333)","rgba(255,255,255,0)","rgba(228,241,255,0.333)","rgba(255,255,255,0)","rgba(230,242,255,0.298)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,110.9).s().p("Aj+QrQm6hpjumEQjumEBqm4QBqm6GEjuQGEjtG3BpQG6BqDuGEQDuGDhqG4QhpG7mEDtQkMClknAAQiBAAiIghg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(213,234,255,0.302)","rgba(255,255,255,0)","rgba(228,241,255,0.302)","rgba(255,255,255,0)","rgba(230,242,255,0.271)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,113.5).s().p("AkERFQnFhsjzmNQj0mNBtnDQBsnEGOj0QGNj0HBBsQHFBtDzGNQD0GNhtHCQhrHFmND0QkTCoktAAQiFAAiLghg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(213,234,255,0.275)","rgba(255,255,255,0)","rgba(228,241,255,0.275)","rgba(255,255,255,0)","rgba(230,242,255,0.243)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,116.2).s().p("AkLReQnPhuj5mXQj5mWBvnOQBvnOGWj6QGXj5HNBuQHPBwD5GWQD5GWhvHNQhtHQmXD5QkZCtk1AAQiIAAiPgjg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(213,234,255,0.243)","rgba(255,255,255,0)","rgba(228,241,255,0.243)","rgba(255,255,255,0)","rgba(230,242,255,0.216)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,118.9).s().p("AkRR4QnZhxj/mgQj/mgBxnYQBynZGgj/QGgj/HXBxQHZByD/GfQD/GghxHXQhxHbmgD/QkfCwk8AAQiLAAiSgjg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(213,234,255,0.212)","rgba(255,255,255,0)","rgba(228,241,255,0.212)","rgba(255,255,255,0)","rgba(230,242,255,0.188)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,121.5).s().p("AkXSSQnkh0kFmpQkEmpBznjQB1nkGpkFQGpkEHiBzQHkB1EFGpQEEGphzHhQh0HmmpEEQkmC0lDAAQiOAAiVgjg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(213,234,255,0.18)","rgba(255,255,255,0)","rgba(228,241,255,0.18)","rgba(255,255,255,0)","rgba(230,242,255,0.161)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,124.2).s().p("AkdSrQnvh2kKmyQkLmzB3ntQB3nuGzkLQGykKHsB1QHvB4EKGyQEKGyh2HtQh1HvmzELQktC4lJAAQiRAAiZglg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(213,234,255,0.153)","rgba(255,255,255,0)","rgba(228,241,255,0.153)","rgba(255,255,255,0)","rgba(230,242,255,0.133)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,126.8).s().p("AkkTFQn4h5kRm8QkQm7B5n4QB6n5G7kRQG8kPH4B4QH4B6ERG7QEQG8h5H3Qh4H6m9EQQkyC8lRAAQiUAAidglg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(213,234,255,0.122)","rgba(255,255,255,0)","rgba(228,241,255,0.122)","rgba(255,255,255,0)","rgba(230,242,255,0.11)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,129.5).s().p("AkpTeQoEh7kWnFQkVnFB7oCQB8oEHFkWQHFkVIBB6QIEB8EWHFQEVHFh7ICQh7IFnEEVQk6DAlYAAQiXAAifgmg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(213,234,255,0.09)","rgba(255,255,255,0)","rgba(228,241,255,0.09)","rgba(255,255,255,0)","rgba(230,242,255,0.082)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,132.1).s().p("AkwT4QoOh+kcnOQkbnOB/oNQB9oPHPkbQHPkbIMB9QIOB+EcHPQEbHOh/IMQh8IQnPEbQk/DElfAAQibAAijgng");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(213,234,255,0.059)","rgba(255,255,255,0)","rgba(228,241,255,0.059)","rgba(255,255,255,0)","rgba(230,242,255,0.055)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,134.8).s().p("Ak2USQoYiBkinXQkhnYCBoXQCAoZHZkiQHXkhIXCAQIYCBEiHYQEhHXiBIXQh/IanYEhQlGDIlnAAQidAAimgng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},12).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#D5EAFF","rgba(255,255,255,0)","#E4F1FF","rgba(255,255,255,0)","rgba(230,242,255,0.89)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,52.4).s().p("Ah3H4QjRgyhwi3Qhxi4AyjOQAyjRC4hwQC3hxDOAyQDRAyBwC3QBxC3gyDPQgyDRi3BwQh/BOiLAAQg8AAhAgPg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,55.1).s().p("Ah9ISQjbg1h3jAQh2jBA0jZQA2jbDAh3QDAh2DZA0QDbA1B3DAQB2DBg0DZQg1DcjAB2QiFBSiTAAQg/AAhDgQg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,57.7).s().p("AiEIrQjlg3h8jKQh8jKA3jkQA3jmDKh8QDKh7DkA3QDlA3B8DJQB8DKg3DkQg3DnjKB7QiLBWiZAAQhDAAhHgRg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,60.4).s().p("AiKJFQjwg6iCjSQiCjUA6jvQA7jwDSiCQDTiCDvA6QDwA6CCDSQCBDUg5DuQg6DyjSCBQiTBaigAAQhGAAhKgSg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,63).s().p("AiQJeQj7g8iHjcQiIjdA9j5QA8j7DdiHQDciID5A9QD7A8CHDcQCIDdg9D4Qg7D9jdCGQiYBeioAAQhIAAhOgTg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,65.7).s().p("AiWJ4QkGg/iNjlQiMjmA+kEQA/kGDmiNQDmiMEDA+QEGA/CNDlQCMDmg+EEQg+EGjmCNQifBhivAAQhLAAhRgTg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,68.4).s().p("AidKRQkQhBiSjvQiSjvBBkPQBBkQDviSQDviTEPBBQEQBBCSDvQCSDvhBEOQhAESjwCSQikBmi2AAQhPAAhVgVg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,71).s().p("AiiKrQkbhDiZj4QiYj5BEkZQBEkbD4iYQD5iZEYBEQEbBECZD4QCYD4hEEZQhDEcj4CYQisBpi9AAQhSAAhXgVg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,73.7).s().p("AipLFQklhGiekCQiekBBGkkQBHkmECieQEBieEkBGQElBHCeEBQCeEChGEjQhGEnkCCdQiyBtjDAAQhWAAhbgVg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,76.3).s().p("AivLfQkvhKilkKQijkLBIkvQBKkvELilQELijEuBIQEvBKClEKQCjELhIEuQhJExkLCkQi5BxjLAAQhYAAhegWg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,84.3).s().p("AjBMrQlPhQi2knQi1knBRlOQBRlPEni2QEmi0FOBQQFPBRC2EmQC1EnhRFOQhQFQkmC1QjNB9jfAAQhiAAhogZg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,87).s().p("AjHNFQlahTi7kwQi7kwBTlZQBTlaExi7QEwi6FYBSQFaBTC7EwQC7ExhUFYQhSFbkwC6QjSCBjnAAQhlAAhrgZg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,89.6).s().p("AjONeQlkhVjBk6Qi/k5BUlkQBWlkE6jBQE6jAFiBVQFlBWDAE5QDAE6hUFiQhVFmk6DAQjZCGjvAAQhnAAhvgbg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,92.3).s().p("AjUN4QlvhYjGlCQjGlDBYluQBYlwFDjGQFDjGFuBYQFvBYDGFDQDGFDhYFtQhXFxlEDFQjfCJj1AAQhrAAhygbg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,94.9).s().p("AjZOSQl6hbjNlMQjLlMBal4QBcl6FLjMQFMjMF4BaQF6BbDMFMQDMFMhaF4QhbF7lLDMQjmCMj9AAQhuAAh0gbg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,97.6).s().p("AjgOrQmEhdjSlVQjRlVBdmEQBdmEFWjSQFWjRGCBdQGEBdDSFVQDRFWhdGCQhcGGlWDRQjsCRkDAAQhyAAh4gdg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,100.2).s().p("AjmPFQmPhgjYleQjWlfBgmOQBgmPFejXQFfjXGNBfQGPBgDXFfQDXFehgGNQheGRlfDXQjyCUkLAAQh0AAh8gdg");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,102.9).s().p("AjsPeQmahijdlnQjcloBimZQBjmaFojdQFojcGXBhQGaBjDdFoQDcFohiGYQhhGblpDcQj4CZkRAAQh4AAh/gfg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,105.6).s().p("AjyP4QmkhljklxQjilxBlmjQBlmkFxjjQFyjiGiBkQGkBlDjFxQDjFxhlGjQhkGllxDjQkACckYAAQh7AAiCgfg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,108.2).s().p("Aj5QSQmvhnjnl7Qjpl6BnmuQBomvF7joQF6joGuBmQGvBoDnF6QDpF7hnGtQhnGwl7DoQkGCgkfAAQh+AAiGgfg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["rgba(213,234,255,0.333)","rgba(255,255,255,0)","rgba(228,241,255,0.333)","rgba(255,255,255,0)","rgba(230,242,255,0.298)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,110.9).s().p("Aj+QrQm6hpjumEQjumEBqm4QBqm6GEjuQGEjtG3BpQG6BqDuGEQDuGDhqG4QhpG7mEDtQkMClknAAQiBAAiIghg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(213,234,255,0.302)","rgba(255,255,255,0)","rgba(228,241,255,0.302)","rgba(255,255,255,0)","rgba(230,242,255,0.271)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,113.5).s().p("AkERFQnFhsjzmNQj0mNBtnDQBsnEGOj0QGNj0HBBsQHFBtDzGNQD0GNhtHCQhrHFmND0QkTCoktAAQiFAAiLghg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(213,234,255,0.275)","rgba(255,255,255,0)","rgba(228,241,255,0.275)","rgba(255,255,255,0)","rgba(230,242,255,0.243)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,116.2).s().p("AkLReQnPhuj5mXQj5mWBvnOQBvnOGWj6QGXj5HNBuQHPBwD5GWQD5GWhvHNQhtHQmXD5QkZCtk1AAQiIAAiPgjg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(213,234,255,0.243)","rgba(255,255,255,0)","rgba(228,241,255,0.243)","rgba(255,255,255,0)","rgba(230,242,255,0.216)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,118.9).s().p("AkRR4QnZhxj/mgQj/mgBxnYQBynZGgj/QGgj/HXBxQHZByD/GfQD/GghxHXQhxHbmgD/QkfCwk8AAQiLAAiSgjg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["rgba(213,234,255,0.212)","rgba(255,255,255,0)","rgba(228,241,255,0.212)","rgba(255,255,255,0)","rgba(230,242,255,0.188)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,121.5).s().p("AkXSSQnkh0kFmpQkEmpBznjQB1nkGpkFQGpkEHiBzQHkB1EFGpQEEGphzHhQh0HmmpEEQkmC0lDAAQiOAAiVgjg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["rgba(213,234,255,0.18)","rgba(255,255,255,0)","rgba(228,241,255,0.18)","rgba(255,255,255,0)","rgba(230,242,255,0.161)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,124.2).s().p("AkdSrQnvh2kKmyQkLmzB3ntQB3nuGzkLQGykKHsB1QHvB4EKGyQEKGyh2HtQh1HvmzELQktC4lJAAQiRAAiZglg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["rgba(213,234,255,0.153)","rgba(255,255,255,0)","rgba(228,241,255,0.153)","rgba(255,255,255,0)","rgba(230,242,255,0.133)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,126.8).s().p("AkkTFQn4h5kRm8QkQm7B5n4QB6n5G7kRQG8kPH4B4QH4B6ERG7QEQG8h5H3Qh4H6m9EQQkyC8lRAAQiUAAidglg");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["rgba(213,234,255,0.122)","rgba(255,255,255,0)","rgba(228,241,255,0.122)","rgba(255,255,255,0)","rgba(230,242,255,0.11)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,129.5).s().p("AkpTeQoEh7kWnFQkVnFB7oCQB8oEHFkWQHFkVIBB6QIEB8EWHFQEVHFh7ICQh7IFnEEVQk6DAlYAAQiXAAifgmg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["rgba(213,234,255,0.09)","rgba(255,255,255,0)","rgba(228,241,255,0.09)","rgba(255,255,255,0)","rgba(230,242,255,0.082)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,132.1).s().p("AkwT4QoOh+kcnOQkbnOB/oNQB9oPHPkbQHPkbIMB9QIOB+EcHPQEbHOh/IMQh8IQnPEbQk/DElfAAQibAAijgng");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["rgba(213,234,255,0.059)","rgba(255,255,255,0)","rgba(228,241,255,0.059)","rgba(255,255,255,0)","rgba(230,242,255,0.055)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,134.8).s().p("Ak2USQoYiBkinXQkhnYCBoXQCAoZHZkiQHXkhIXCAQIYCBEiHYQEhHXiBIXQh/IanYEhQlGDIlnAAQidAAimgng");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["rgba(213,234,255,0.031)","rgba(255,255,255,0)","rgba(228,241,255,0.031)","rgba(255,255,255,0)","rgba(230,242,255,0.027)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,137.5).s().p("Ak8UrQojiDkonhQkmngCDojQCDojHhknQHiknIhCCQIjCEEoHhQEmHhiDIhQiCIlniEnQlMDMltAAQihAAipgpg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["rgba(213,234,255,0)","rgba(255,255,255,0)","rgba(228,241,255,0)","rgba(255,255,255,0)","rgba(230,242,255,0)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,140.1).s().p("AlCVFQouiGktnqQksnqCFotQCHouHqktQHqksIsCFQIuCGEtHqQEsHqiFIsQiFIwnqEsQlTDQl1AAQijAAitgpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[]},1).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-52,104,104);


(lib.bullfrogWaterDip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5EAFF","rgba(255,255,255,0)","#E4F1FF","rgba(255,255,255,0)","rgba(230,242,255,0.89)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-67.8,-1,0,9.5,-1,124).s().p("AlQNgQpGhWk6k5Qk5k7CLlkQCNllH+jAQIBjBJDBVQJGBWE5E5QE6E7iLFjQiKFnoAC/QlhCGmFAAQirAAi0gag");
	this.shape.setTransform(67.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-70.2,-0.8,0,12.2,-0.8,129.5).s().p("AlVNoQpPhWk/k9Qk/k9CNlnQCQlqIGjCQIJjCJMBVQJPBXE/E9QE/E+iNFmQiNFroIDBQlnCHmMAAQitAAi2gbg");
	this.shape_1.setTransform(71.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-72.7,-0.7,0,14.8,-0.7,135.2).s().p("AlbNxQpYhXlElAQlElBCQlqQCRluIPjEQIQjFJXBYQJYBXFEFAQFEFBiQFqQiPFuoQDEQlsCImRAAQixAAi6gbg");
	this.shape_2.setTransform(75.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-75.3,-0.6,0,17.4,-0.6,140.8).s().p("AlgN6QpihYlJlEQlIlECRluQCUlxIXjGQIZjGJfBYQJiBYFJFEQFJFDiSFvQiRFxoYDGQlzCJmYAAQizAAi8gbg");
	this.shape_3.setTransform(79.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-77.6,-0.4,0,20,-0.4,146.4).s().p("AlmODQprhZlOlGQlNlICUlyQCVl0IgjJQIhjIJpBZQJrBZFOFGQFNFIiUFyQiTF1ogDIQl5CKmeAAQi2AAi/gbg");
	this.shape_4.setTransform(83.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-80.5,-0.3,0,22.6,-0.3,152).s().p("AlrOMQp1hblTlJQlSlLCWl1QCYl4IojKQIpjLJyBaQJ0BbFUFJQFSFLiWF0QiWF5ooDKQl+CMmkAAQi5AAjCgbg");
	this.shape_5.setTransform(88,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-83.5,-0.2,0,25.3,-0.2,157.6).s().p("AlwOUQp+hblYlMQlYlOCYl5QCal8IxjMQIwjMJ8BaQJ+BbFYFNQFYFNiZF5QiXF9oxDMQmECNmqAAQi7AAjFgcg");
	this.shape_6.setTransform(92.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-86.7,0,0,27.9,0,163.2).s().p("Al2OdQqHhbldlQQldlRCbl9QCcl/I5jOQI5jPKFBcQKHBcFdFQQFdFQibF9QiaGAo5DOQmJCOmwAAQi+AAjJgcg");
	this.shape_7.setTransform(96.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-90,0.1,0,30.5,0.1,168.8).s().p("Al8OmQqQhdlilSQlilUCdmCQCfmCJAjRQJCjPKOBcQKRBdFiFSQFiFVidGAQidGEpBDQQmPCPm3AAQjBAAjLgcg");
	this.shape_8.setTransform(100.5,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-93.5,0.2,0,33.1,0.2,174.4).s().p("AmBOvQqZhelolWQlnlXCgmEQChmHJIjSQJKjTKYBeQKaBeFnFWQFnFXigGEQieGIpJDRQmVCSm9AAQjEAAjOgdg");
	this.shape_9.setTransform(104.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(213,234,255,0.698)","rgba(255,255,255,0)","rgba(228,241,255,0.698)","rgba(255,255,255,0)","rgba(230,242,255,0.62)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-96.3,0.4,0,35.7,0.4,180).s().p("AmGO4QqjheltlaQlslaCimIQCjmKJRjVQJSjUKhBeQKjBfFtFZQFrFbihGHQihGLpRDUQmaCTnDAAQjHAAjRgdg");
	this.shape_10.setTransform(108.9,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(213,234,255,0.667)","rgba(255,255,255,0)","rgba(228,241,255,0.667)","rgba(255,255,255,0)","rgba(230,242,255,0.592)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-100,0.5,0,38.3,0.5,185.6).s().p("AmMPAQqshflxldQlxldCjmMQClmOJajWQJajWKqBfQKtBfFxFdQFyFeilGLQiiGPpaDVQmgCVnJAAQjKAAjUgeg");
	this.shape_11.setTransform(113.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-103.8,0.6,0,41,0.6,191.3).s().p("AmRPKQq2hgl2lhQl2lhCmmPQCnmRJijYQJijYK0BfQK2BgF3FhQF1FhimGPQilGSpiDXQmmCWnQAAQjMAAjWgdg");
	this.shape_12.setTransform(117.2,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-107.8,0.8,0,43.6,0.8,196.9).s().p("AmXPSQq/hhl7ljQl7lkComTQCqmVJqjaQJqjaK9BhQLABhF7FjQF7FkioGTQinGWprDZQmrCXnVAAQjQAAjageg");
	this.shape_13.setTransform(121.4,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-111.9,0.9,0,46.2,0.9,202.5).s().p("AmcPbQrIhimBlnQmAlnCrmWQCsmYJyjdQJyjcLHBiQLJBiGAFmQGAFoirGVQipGapyDcQmxCYncAAQjSAAjdgeg");
	this.shape_14.setTransform(125.6,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-116,1,0,48.8,1,208.1).s().p("AmhPkQrShjmGlpQmFlrCtmbQCumcJ6jeQJ7jeLQBjQLSBjGGFpQGFFritGZQisGep6DdQm3CanjAAQjUAAjfgeg");
	this.shape_15.setTransform(129.8,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-120.4,1.2,0,51.4,1.2,213.7).s().p("AmnPtQrbhkmLltQmKltCvmeQCxmgKCjgQKDjgLaBjQLbBkGLFtQGJFuivGdQitGhqDDgQm8CanoAAQjYAAjjgeg");
	this.shape_16.setTransform(134,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-124,1.3,0,54,1.3,219.3).s().p("AmsP2QrlhlmQlwQmOlwCxmjQCymjKLjiQKLjiLjBkQLlBlGQFwQGPFwiyGiQiwGlqLDhQnCCcnvAAQjaAAjlgeg");
	this.shape_17.setTransform(138.1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-128.6,1.5,0,56.7,1.5,224.9).s().p("AmyP+QruhlmVlzQmTl0CzmlQC1mnKTjlQKTjjLtBlQLuBlGUF0QGUFzizGlQiyGoqUDkQnHCen0AAQjeAAjpggg");
	this.shape_18.setTransform(142.3,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-133.3,1.6,0,59.3,1.6,230.5).s().p("Am3QHQr4hmmal2QmYl3C2mqQC2mqKcjmQKbjmL2BmQL3BmGaF3QGZF3i2GoQi0GsqcDmQnNCfn7AAQjgAAjrggg");
	this.shape_19.setTransform(146.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-138.1,1.7,0,61.9,1.7,236.2).s().p("Am8QQQsBhnmfl6Qmel6C4mtQC5muKkjoQKkjoL/BnQMABnGfF6QGeF6i4GsQi3GvqkDoQnTChoBAAQjjAAjtggg");
	this.shape_20.setTransform(150.7,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-143.1,1.9,0,64.5,1.9,241.8).s().p("AnCQZQsKhomkl9Qmjl9C7mxQC7myKsjqQKrjpMJBnQMKBpGkF8QGjF+i7GvQi4G0qtDpQnYCioHAAQjmAAjxggg");
	this.shape_21.setTransform(154.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},11).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(12));

	// Layer 2 copy 2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#D5EAFF","rgba(255,255,255,0)","#E4F1FF","rgba(255,255,255,0)","rgba(230,242,255,0.89)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-66.8,-1,0,9.5,-1,124).s().p("AlQNfQpGhVk6k5Qk5k7CLlkQCNllH+jBQIAjAJEBVQJFBWE6E5QE6E7iLFjQiKFmoADAQlhCGmFAAQirAAi0gbg");
	this.shape_22.setTransform(60.1,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-69.4,-0.8,0,11.6,-0.8,129).s().p("AlVNoQpPhWk/k9Qk/k+COlnQCPlpIHjCQIIjDJNBXQJOBWE/E9QE/E9iNFnQiNFqoIDCQlnCHmLAAQiuAAi2gbg");
	this.shape_23.setTransform(64,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-72.1,-0.7,0,13.7,-0.7,134.1).s().p("AlbNxQpYhXlElAQlElBCQlrQCRlsIPjFQIRjEJWBXQJYBXFEFAQFEFBiQFqQiPFuoQDEQlsCImRAAQixAAi6gbg");
	this.shape_24.setTransform(67.9,0.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],-74.8,-0.6,0,15.8,-0.6,139.2).s().p("AlgN6QpihYlJlDQlJlFCSluQCUlwIXjHQIZjGJfBYQJiBYFJFDQFIFEiRFuQiRFyoZDGQlyCJmYAAQizAAi8gbg");
	this.shape_25.setTransform(71.9,0.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-77.2,-0.4,0,17.8,-0.4,144.3).s().p("AlmODQprhZlOlHQlOlHCVlyQCWl0IfjIQIhjJJpBZQJqBZFPFHQFNFHiTFxQiUF2ogDIQl4CKmeAAQi2AAjAgbg");
	this.shape_26.setTransform(75.8,0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-80.2,-0.3,0,19.9,-0.3,149.3).s().p("AlrOLQp0hZlTlKQlTlKCWl2QCYl4IojKQIpjKJyBaQJ1BZFTFKQFSFKiWF2QiVF4opDKQl+CMmkAAQi5AAjCgcg");
	this.shape_27.setTransform(79.7,0.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-83.4,-0.1,0,22,-0.1,154.4).s().p("AlwOUQp/halXlNQlYlOCZl5QCZl8IxjMQIwjMJ8BaQJ+BbFYFNQFYFOiZF5QiYF8owDMQmECNmqAAQi7AAjFgcg");
	this.shape_28.setTransform(83.7,0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-86.7,0,0,24,0,159.5).s().p("Al2OdQqHhbldlQQldlRCbl9QCcl/I5jPQI5jOKFBcQKHBcFdFQQFdFQibF9QiaGAo5DOQmJCOmwAAQi+AAjJgcg");
	this.shape_29.setTransform(87.6,0.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-90.1,0.1,0,26.1,0.1,164.5).s().p("Al7OmQqRhdlilTQlilUCdmBQCfmCJAjRQJCjQKOBdQKRBcFiFUQFiFTidGBQicGDpCDQQmOCRm3AAQjBAAjLgdg");
	this.shape_30.setTransform(91.6,0.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],-93.5,0.2,0,28.2,0.2,169.6).s().p("AmBOvQqahelnlWQlnlXCfmFQCimGJIjSQJKjSKYBdQKaBeFnFWQFnFXigGEQieGHpKDSQmUCSm9AAQjEAAjOgdg");
	this.shape_31.setTransform(95.5,0.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(213,234,255,0.698)","rgba(255,255,255,0)","rgba(228,241,255,0.698)","rgba(255,255,255,0)","rgba(230,242,255,0.62)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-96.5,0.4,0,30.3,0.4,174.7).s().p("AmHO4QqjhelslaQlrlaChmIQCjmKJRjVQJSjUKhBeQKkBfFsFZQFrFbihGHQigGLpSDUQmaCTnDAAQjHAAjSgdg");
	this.shape_32.setTransform(99.5,0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(213,234,255,0.667)","rgba(255,255,255,0)","rgba(228,241,255,0.667)","rgba(255,255,255,0)","rgba(230,242,255,0.592)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-100.2,0.5,0,32.3,0.5,179.8).s().p("AmMPAQqshflyldQlwldCkmMQClmNJZjXQJajWKrBfQKsBgFyFcQFwFeijGLQijGPpaDWQmgCUnJAAQjKAAjUgeg");
	this.shape_33.setTransform(103.4,0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-104,0.6,0,34.4,0.6,184.8).s().p("AmRPJQq2hgl3lgQl1lgCmmQQCnmRJijYQJijYK0BgQK2BgF2FgQF2FhimGOQilGTpiDYQmlCVnPAAQjNAAjXgeg");
	this.shape_34.setTransform(107.3,0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-108,0.8,0,36.5,0.8,189.9).s().p("AmXPSQq/hgl7lkQl7lkComTQCqmVJqjaQJqjaK9BhQLABhF7FjQF7FkioGTQioGWpqDZQmrCXnVAAQjQAAjageg");
	this.shape_35.setTransform(111.3,0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-112.1,0.9,0,38.6,0.9,195).s().p("AmcPbQrJhimAlmQmAlnCqmXQCtmZJxjcQJzjcLHBiQLJBiGAFmQGAFniqGWQiqGapzDcQmxCYnbAAQjSAAjdgeg");
	this.shape_36.setTransform(115.2,0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-116.3,1,0,40.7,1,200).s().p("AmhPkQrShjmGlpQmFlrCtmaQCumcJ7jeQJ6jeLRBiQLRBjGGFqQGFFqitGaQirGdp7DeQm3CZniAAQjVAAjfgeg");
	this.shape_37.setTransform(119.1,0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],-120.6,1.1,0,42.7,1.1,205.1).s().p("AmnPsQrbhjmLltQmKltCwmfQCwmfKCjgQKDjgLaBjQLbBkGLFtQGKFtivGeQiuGhqDDfQm8CbnoAAQjYAAjjgfg");
	this.shape_38.setTransform(123.1,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-124.2,1.3,0,44.8,1.3,210.2).s().p("AmsP2QrlhlmQlwQmOlxCxmhQCymkKLjiQKLjiLjBkQLlBlGQFwQGOFxixGhQiwGkqLDiQnCCdnvAAQjaAAjlgfg");
	this.shape_39.setTransform(127,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-128.8,1.4,0,46.8,1.4,215.3).s().p("AmyP+QruhlmVl0QmTlzCzmmQC1mnKTjkQKTjkLsBlQLvBmGUFzQGUF0i0GlQiyGoqTDkQnICen1AAQjdAAjoggg");
	this.shape_40.setTransform(131,0.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-133.4,1.6,0,48.9,1.6,220.4).s().p("Am3QHQr4hmmal3QmYl3C2mpQC2mqKcjnQKbjlL2BmQL4BmGaF3QGYF3i2GoQi0GsqcDmQnNCfn7AAQjgAAjrggg");
	this.shape_41.setTransform(134.9,0.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-138.2,1.7,0,51,1.7,225.4).s().p("Am8QQQsBhomfl5Qmel6C4mtQC5muKkjpQKkjnL/BnQMABnGfF6QGeF6i4GsQi2GwqlDoQnTCgoBAAQjjAAjtggg");
	this.shape_42.setTransform(138.8,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-143.1,1.8,0,53.1,1.8,230.5).s().p("AnCQZQsKhomkl9Qmjl+C7mwQC7myKsjqQKrjqMJBoQMKBoGkF9QGjF9i7GwQi4GzqsDqQnZCioIAAQjlAAjxggg");
	this.shape_43.setTransform(142.8,0.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["rgba(213,234,255,0.333)","rgba(255,255,255,0)","rgba(228,241,255,0.333)","rgba(255,255,255,0)","rgba(230,242,255,0.298)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-148.1,2,0,55.2,2,235.6).s().p("AnHQiQsUhpmpmAQmomBC9m0QC9m2K0jsQK0jrMSBoQMUBpGpGBQGoGAi9GzQi7G3q0DsQnfCjoOAAQjoAAjzggg");
	this.shape_44.setTransform(146.7,0.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["rgba(213,234,255,0.302)","rgba(255,255,255,0)","rgba(228,241,255,0.302)","rgba(255,255,255,0)","rgba(230,242,255,0.271)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],-153.3,2.1,0,57.2,2.1,240.7).s().p("AnMQqQsdhqmvmDQmtmEDAm4QC/m5K9juQK8jtMbBpQMdBqGuGEQGsGDi+G3Qi9G7q9DtQnkCloUAAQjrAAj2ghg");
	this.shape_45.setTransform(150.7,0.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["rgba(213,234,255,0.275)","rgba(255,255,255,0)","rgba(228,241,255,0.275)","rgba(255,255,255,0)","rgba(230,242,255,0.243)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],-157.5,2.2,0,59.3,2.2,245.7).s().p("AnSQzQsmhqmzmHQmzmHDCm7QDBm9LFjwQLEjwMlBqQMmBrG0GHQGxGHjBG7Qi/G+rFDvQnqCmoaAAQjuAAj5ghg");
	this.shape_46.setTransform(154.6,0.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["rgba(213,234,255,0.243)","rgba(255,255,255,0)","rgba(228,241,255,0.243)","rgba(255,255,255,0)","rgba(230,242,255,0.216)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],-162.9,2.4,0,61.4,2.4,250.8).s().p("AnYQ8Qsvhrm4mKQm3mKDDm/QDEnBLNjyQLNjxMuBrQMvBsG4GJQG3GLjDG+QjCHCrNDxQnvCnohAAQjwAAj9ghg");
	this.shape_47.setTransform(158.5,0.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["rgba(213,234,255,0.212)","rgba(255,255,255,0)","rgba(228,241,255,0.212)","rgba(255,255,255,0)","rgba(230,242,255,0.188)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],-168.4,2.5,0,63.4,2.5,255.9).s().p("AndRFQs5htm9mNQm8mNDGnDQDGnELVj0QLVjzM3BsQM5BsG9GNQG8GOjGHCQjDHFrWD0Qn1CoonAAQjzAAj/ghg");
	this.shape_48.setTransform(162.5,0.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["rgba(213,234,255,0.18)","rgba(255,255,255,0)","rgba(228,241,255,0.18)","rgba(255,255,255,0)","rgba(230,242,255,0.161)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],-173.9,2.6,0,65.5,2.6,260.9).s().p("AnjROQtChunCmQQnBmQDInHQDJnHLdj2QLdj2NBBtQNCBuHCGQQHBGQjIHGQjGHJrdD2Qn7CpotAAQj2AAkDghg");
	this.shape_49.setTransform(166.4,0.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["rgba(213,234,255,0.153)","rgba(255,255,255,0)","rgba(228,241,255,0.153)","rgba(255,255,255,0)","rgba(230,242,255,0.133)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],-179.7,2.8,0,67.6,2.8,266).s().p("AnoRXQtMhunHmUQnGmTDKnLQDLnLLlj4QLmj3NKBtQNLBvHIGTQHGGUjLHJQjIHNrmD4QoACroyAAQj6AAkFgig");
	this.shape_50.setTransform(170.4,0.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["rgba(213,234,255,0.122)","rgba(255,255,255,0)","rgba(228,241,255,0.122)","rgba(255,255,255,0)","rgba(230,242,255,0.11)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],-185.5,2.9,0,69.6,2.9,271).s().p("AntRfQtWhvnLmWQnLmXDMnOQDMnPLvj6QLsj5NUBuQNVBwHNGWQHKGXjMHNQjKHQruD6QoGCto6AAQj7AAkIgjg");
	this.shape_51.setTransform(174.3,0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(213,234,255,0.09)","rgba(255,255,255,0)","rgba(228,241,255,0.09)","rgba(255,255,255,0)","rgba(230,242,255,0.082)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],-190.4,3.1,0,71.7,3.1,276.1).s().p("AnzRoQtehwnRmaQnQmZDOnSQDPnTL2j8QL2j7NdBwQNeBwHSGaQHQGajPHQQjNHUr2D8QoMCuo/AAQj/AAkLgjg");
	this.shape_52.setTransform(178.2,0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(213,234,255,0.059)","rgba(255,255,255,0)","rgba(228,241,255,0.059)","rgba(255,255,255,0)","rgba(230,242,255,0.055)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],-196.4,3.2,0,73.8,3.2,281.2).s().p("An4RxQtohxnWmdQnVmdDRnVQDRnXL+j+QL+j9NmBxQNoBxHWGdQHVGdjRHUQjOHYr/D9QoRCwpGAAQkBAAkOgjg");
	this.shape_53.setTransform(182.2,0.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(213,234,255,0.031)","rgba(255,255,255,0)","rgba(228,241,255,0.031)","rgba(255,255,255,0)","rgba(230,242,255,0.027)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],-202.6,3.3,0,75.9,3.3,286.3).s().p("An+R6QtxhynbmgQnamgDTnZQDTnaMHkAQMGj/NvBxQNyByHbGgQHaGhjTHXQjRHcsHD/QoXCxpMAAQkEAAkRgjg");
	this.shape_54.setTransform(186.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[]},1).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-88,290,178.1);


(lib.BullFrogbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222010").s().p("AgMAOQgPgEACgJQADgJAcgIIATAHQAEAQgPAHQgGADgIAAQgEAAgIgDg");
	this.shape.setTransform(146.3,81.3,1.17,1.17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#222010").s().p("AgMAVQgPgHACgNQADgMAbgMIAUAKQAEAYgPAJQgGAEgIAAQgEAAgIgDg");
	this.shape_1.setTransform(130.5,92.9,1.17,1.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#222010").s().p("AgMAGQgBgGANgIIAKgBQAMARgZACIgDAAQgGAAAAgEg");
	this.shape_2.setTransform(162.9,61.6,1.17,1.17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#222010").s().p("AgMAFQgBgFANgJIAKAAQAGAIgGAEQgFAGgHABIgCAAQgHAAgBgFg");
	this.shape_3.setTransform(174.8,50.5,1.17,1.17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#222010").s().p("AgMAGQgCgGANgMIAKABQAHALgFAHQgFAGgHAAQgJAAgCgHg");
	this.shape_4.setTransform(175.3,60.4,1.17,1.17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#222010").s().p("AgTAJQgBgJAUgNIAQgBQAIANgJAHQgIAIgLABIgEAAQgKAAgBgGg");
	this.shape_5.setTransform(151,55,1.17,1.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#222010").s().p("AgDAUQgOgBgCgKQgCgKATgSIAQABQALASgJAKQgGAKgLAAIgCAAg");
	this.shape_6.setTransform(130.5,72.7,1.17,1.17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#222010").s().p("AgMAOQgPgFACgIQADgJAbgIIAUAHQAEAQgPAHQgGADgIAAQgEAAgIgDg");
	this.shape_7.setTransform(148.5,67,1.17,1.17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#222010").s().p("AgMAGQgBgGANgIIAKgBQAMARgZACIgDAAQgGAAAAgEg");
	this.shape_8.setTransform(239.5,125.1,1.17,1.17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#222010").s().p("AgMAGQgBgGANgJIAKAAQAMARgZACIgDAAQgGAAAAgEg");
	this.shape_9.setTransform(251.4,114,1.17,1.17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#222010").s().p("AgBANQgJAAgCgHQgCgGANgMIAKAAQAHAMgFAGQgFAHgGAAIgBAAg");
	this.shape_10.setTransform(242.6,114.1,1.17,1.17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#222010").s().p("AgTAJQgBgJAUgOIAQAAQAIAMgJAIQgIAIgLABIgEAAQgKAAgBgGg");
	this.shape_11.setTransform(227.6,118.5,1.17,1.17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#222010").s().p("AgTAJQgCgKATgSIAQABQALASgJALQgHAJgMAAQgOAAgCgLg");
	this.shape_12.setTransform(225.2,133.8,1.17,1.17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#222010").s().p("AgMAOQgPgFACgIQADgJAbgIIAUAHQAEAQgPAHQgGADgIAAQgEAAgIgDg");
	this.shape_13.setTransform(210.7,143.1,1.17,1.17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#222010").s().p("AgMAVQgPgHACgNQADgMAbgMIAUAKQAEAYgPAJQgGAEgIAAQgEAAgIgDg");
	this.shape_14.setTransform(195.9,137.3,1.17,1.17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#222010").s().p("AgSAWQgXgHADgOQAEgNArgMIAeAKQAFAZgWAKQgKAEgMAAQgHAAgLgDg");
	this.shape_15.setTransform(180,151.1,1.17,1.17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#222010").s().p("AgSAWQgXgIADgNQAEgNArgMIAeAKQAFAZgWAKQgKAEgMAAQgHAAgLgDg");
	this.shape_16.setTransform(112.8,84.3,1.17,1.17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#222010").s().p("AgSAfQgXgKADgTQAEgUAqgRIAeAPQAFAkgWAOQgJAGgMAAQgHAAgLgFg");
	this.shape_17.setTransform(153.1,158.4,1.17,1.17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#222010").s().p("AgSAfQgXgKADgTQAEgUArgRIAeAPQAFAkgWAOQgKAGgMAAQgIAAgKgFg");
	this.shape_18.setTransform(112.8,103.8,1.17,1.17);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#020100").s().p("AgSAWQAEgeACgLQAEgSAbgEQgKAugbAlg");
	this.shape_19.setTransform(15.8,171.2,1.17,1.17);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#020100").s().p("AgzAOIACgOIADgmQBEAdAeAQQgNAQgTAHQgNAFgaAEg");
	this.shape_20.setTransform(39.3,199.7,1.17,1.17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#222010").s().p("AnxErQgSgEANgUQA6hXCNgzQAngOBQgaQBHgXArgXQA2geBYg8QBjhFArgZICJhEQBSgpApgvQAPgRANALQAOALgQASQgmAthCAkQgmAVhRAmQg4AdhQA3IiEBYQhmBCiPAsQhbAdgkARQhHAighAyQgKAOgNAAIgHgBg");
	this.shape_21.setTransform(184.7,125.5,1.17,1.17);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#222010").s().p("AoeFsQAEgWARgFQCTgnCdhdQBuhACih9QCyiFBNgzQBZg8AYgUQA+g1ARg6QAGgTAUgCQAVgCgHAXQgTBAg7A4QgmAlhNA0QhdA9i3CJQipCBhxBDQijBgiZAoIgHABQgNAAADgRg");
	this.shape_22.setTransform(150.1,94.6,1.17,1.17);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#87835C","#54541F","#575723","#464012"],[0,0.475,0.475,1],14.5,10.9,-12.4,-5.5).s().p("AhNDEQhTgLgYgXQgRgRAlgxQA8hNADgFQA4hfAMgdQARgpgSgwIAiABQArADAjANQByAqgCB4QgBBTg8A5QggAeg7AiQgTAQgsAAQgXAAgdgEg");
	this.shape_23.setTransform(49,132.1,1.17,1.17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#87835C","#54541F","#575723","#464012"],[0,0.475,0.475,1],-4.2,-16.2,2.3,12.3).s().p("AjLBNQgjhkBXhTQA+g7BSADQAqACBCASQAlAFAoA+QAkA5AAAhQAAAWhHgMQhYgQgYAHQhaAaglAjQgZAXgeA/QgjgjgRgzg");
	this.shape_24.setTransform(85.1,177.4,1.17,1.17);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#222010").s().p("ACYBHQghhAg2gZQg4gbhDASQg/AQgxAeQgUANgCgVQgBgSAQgLQBHgvBTgLQBFgJA4AfQA3AeAhBAQAIAPgTAQQgJAIgHAAQgHAAgEgIg");
	this.shape_25.setTransform(135,169,1.17,1.17);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#999939","#6D7025"],[0.086,1],0,0,0,0,0,6.9).s().p("AgvAxQgUgVAAgcQAAgcAUgUQAUgVAbAAQAcAAAUAVQAUAUAAAcQAAAcgUAVQgUAUgcABQgbgBgUgUg");
	this.shape_26.setTransform(135.2,186.8,1.17,1.17);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#89744C","#574109","#3A2600"],[0,0.498,1],0,0,0,0,0,15.5).s().p("AhrBuQgtguAAhAQAAhAAtgtQAtgtA+gBQBAABAsAtQAtAtAABAQAABAgtAuQgtAtg/AAQg+AAgtgtg");
	this.shape_27.setTransform(135.2,186.8,1.17,1.17);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#EAC82E").ss(1,0,0,4).p("AgTAzQgMgHAKggQAFgOASgaQATgYADABQAGADgFAWQgFAWgLAQQgNAagCAEQgJAMgEgDg");
	this.shape_28.setTransform(36.5,126.8,1.17,1.17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAzQgMgHAKggQAFgOASgaQATgYADABQAGADgFAWQgFAWgLAQIgPAeQgIAKgEAAIgBgBg");
	this.shape_29.setTransform(36.5,126.8,1.17,1.17);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#DFC494","#C6973C","#B47C26"],[0,0.498,1],0.2,-0.3,0,0.2,-0.3,13.9).s().p("Ag7CVQgjgUAeheQAPgtA3hKQA3hIAKAGQAPAJgOBAQgOA/geAxQgsBPgGAIQgTAdgNAAQgDAAgCgCg");
	this.shape_30.setTransform(36.6,126.3,1.17,1.17);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#EAC82E").ss(1,0,0,4).p("AA4gTQAAAhghATQgQAJgfgKQgfgKAAgKQAAgOAWgRQAVgRASAAQAgAAADAAQAPADAAAOg");
	this.shape_31.setTransform(87.2,191.7,1.17,1.17);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAgQgfgKAAgKQAAgOAWgRQAVgRASAAIAjAAQAPADAAAOQAAAhghATQgIAEgMAAQgKAAgRgFg");
	this.shape_32.setTransform(87.2,191.7,1.17,1.17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#DFC494","#C6973C","#B47C26"],[0,0.498,1],0,0,0,0,0,13.9).s().p("AhIBeQhagdAAgdQAAgsA+gyQA/gzA4AAQBbAAALACQAqAIAAAoQAABkhgA4QgXANghAAQgiAAgxgQg");
	this.shape_33.setTransform(86.4,192.2,1.17,1.17);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-139.5,83.2,134.9,-88.3).s().p("AwgOxQjegJhbhOQg5gwgXh4QgaiCAxhOQBQh9CTjLQC1j6A0glQA9gsCShUQCThVBCgeQAygWA5hEQBIhXApghQBAgzDhhXQCEg1CTgxQAsgOBnAJQBvALBIgQQB1gZD6gpQEIgsAxAAQAsAABABZQAjAxA5BcQAeArhnBoQh/BxgeAoQgJAMguAmQg+AxgcAbQh7BwgOBaQgOBbhjBmQg2A4hlBbQhzCBjBBiQiIBEhMAPQgTAEg1A8Qg/BFhMAnQheAvjoA+Qi9AziYAcQiCAZiIAAIhAgCg");
	this.shape_34.setTransform(170.8,110.8,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,341.6,221.6);


(lib.BFfrontLegtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-33.6,0,33.7,0).s().p("AA0CxQgVgOgcgsQgagtgWgOQgXgOg0gJQg/gJgfgHQhygXgHhTQgEg+A7gfQAkgTBOgKQA6gIBeAVQBhAXBUArQBgAxArA9QAxBEgfBNQgeBHhdAKQgRACgQAAQhBAAgzghg");
	this.shape.setTransform(39.4,24.7,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.8,49.3);


(lib.BFfrontLegfoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-37.9,-0.1,37.9,-0.1).s().p("AgTCPIBJhrQAng6AMgqQhhgliRAtIh2AkQhEARg2gDQAugXBQgaQBdggAagLQB/g1AYhkQAGgYgVgLQgLgHgmgHQgogHgPgHQgagNAAgYQB+AAASACQB/ANAPA7QAIAiAQAOQAMAKAXAEQBCAJAiAjIAbAUQhmBaARCDQAQB6BlBdQhuAPgrh3QgehPADh+QgrAYgoA4QgWAggtBTQgoBNgYAiQgpA2gwAQQgKhKBgiHg");
	this.shape.setTransform(44.4,41.3,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,88.7,82.6);


(lib.BFfronLegmid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#464012","#54541F","#87835C"],[0,0.553,1],-25,0,25.1,0).s().p("AjMDcQhFgKAlhVQAhhMBhheQBhhgBbgwQBog2ArApQArApgsBNQgmBChbBMQhUBHhXAwQhSAsgpAAIgJgBg");
	this.shape.setTransform(29.3,25.9,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,58.6,51.8);


(lib.BFbackLegtop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E4D24","#656333","#76723E","#A29A74"],[0,0.498,0.8,1],-47.6,18.1,41.5,-29.3).s().p("AgqGdQi/iHhkg7QiBhOh1iqQhSh5glhjQgVg4AahQQAXhIAogqQAQgRAmAPQAaALA7AlQCVBfBKATQA7AOCfBTQCWBPCrBmQGmD7AOBHQANBCjbBcQhTAjhYAbQhTAZglADIgMAAQhaAAiWhgg");
	this.shape.setTransform(124.3,109.7,1.17,1.17,0,0,0,35.4,42.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165.8,119.3);


(lib.BFbackLegmid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E4D24","#656333","#76723E","#A29A74"],[0,0.498,0.8,1],-76.6,37.7,73.6,-42.2).s().p("AszDxQgsgOAEhDQACgsAXhBQANgmDZhDQBsgiDbg7QBZgYDxgCQEXgDAJgBQA2gGBJgZIBxgnQAcgIA0AAQA4AAAwAKQB9AagnBIQgnBHjUBgQidBIhmAdQg3AQjgAsQjkAuhlAOQhqAPjHAAIgMAAQi+AAgtgPg");
	this.shape.setTransform(16.4,50,1.17,1.17,0,0,0,-72.1,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,201.5,60.1);


(lib.BFbackLegfoot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4E4D24","#656333","#76723E","#A29A74"],[0,0.498,0.8,1],-35.2,22.1,36.4,-16).s().p("AHIH/QgdgNg5ghQgdgQgSg3QgRg+gKgUQgNgrgHgPQgLgXgdAVQgmAhgMAIQgRALgNgZQgHgPANgnQALgfgegWQgggYhiATIiAAZQgiAAANggQAYgpAKgUQALgWAxADQAPAAgCgBIghgOQgxgTiCgWQiAgVgKgDQgbgLgDgMQgEgQAigbQAfgZCZArQBNAWBGAaQgjgRgygUQhkgohLgMQgcgFgWgIQhIgXhKg0QhAgtgeglQgtg4gSgzQgYhFA5gEQgXAnAhAmQASAVAqAgQAMAMBGgFQBGgFAcAcQAeAeCNBNIAOAIQg6gjhRg8QhnhNgrgrQgfgfAMg/QAGgfANgZQABARAJAZQARAyAlAmQAtAtBTAuQBSAuBMAXQA+ASCmBSIFbCoQAjAQBXC+QBBCNAfBVQAMAigXAJIhyAZIgNABQgbAAgsgTg");
	this.shape.setTransform(131.2,122.1,1.17,1.17,0,0,0,45.2,51.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,156.7,124.2);


(lib.bullfrogfrontLegL_stop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BF-frontLeg-top
	this.instance = new lib.BFfrontLegtop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,11.2,0.999,0.999,-28.8,0,0,8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.4,regY:24.7,scaleX:1,scaleY:1,rotation:-19.2,x:76.8,y:13.3},0).wait(1).to({rotation:-9.6,x:76.1,y:19.1},0).wait(1).to({rotation:0,x:74.4,y:24.8},0).wait(1));

	// BF-fronLeg-mid
	this.instance_1 = new lib.BFfronLegmid("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.1,1.8,0.999,0.999,-158.2,0,0,43.6,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:29.3,regY:25.9,scaleX:1,scaleY:1,rotation:-105.4,x:124.7,y:21.9},0).wait(1).to({rotation:-52.7,x:107.3,y:43.7},0).wait(1).to({rotation:0,x:87,y:49},0).wait(1));

	// BF-frontLeg-foot
	this.instance_2 = new lib.BFfrontLegfoot("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(153.8,-18.6,0.99,0.929,0,-150.4,162,65.6,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:44.4,regY:41.3,scaleX:1,scaleY:0.95,skewX:-100.1,skewY:228.1,x:182.2,y:47.3},0).wait(1).to({scaleX:1,scaleY:0.98,skewX:-50,skewY:294,x:115.4,y:101.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,skewY:360,x:44.6,y:87.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.5,-79.6,189.4,102.6);


(lib.bullfrogfrontLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BF-frontLeg-top
	this.instance = new lib.BFfrontLegtop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43,11.8,1,1,0,0,0,8,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.4,regY:24.7,rotation:-9.6,x:76.1,y:19},0).wait(1).to({rotation:-19.2,x:76.9,y:13.2},0).wait(1).to({rotation:-28.8,x:76.8,y:7.2},0).wait(1));

	// BF-fronLeg-mid
	this.instance_1 = new lib.BFfronLegmid("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(101.3,33.4,1,1,0,0,0,43.6,10.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:29.3,regY:25.9,rotation:-52.7,x:107.4,y:43.8},0).wait(1).to({rotation:-105.4,x:124.8,y:21.9},0).wait(1).to({rotation:-158.1,x:127.3,y:-7.4},0).wait(1));

	// BF-frontLeg-foot
	this.instance_2 = new lib.BFfrontLegfoot("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(65.8,65.7,1,1,0,0,0,65.8,19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:44.4,regY:41.3,scaleX:1,scaleY:0.98,skewX:-50,skewY:-66,x:115.3,y:101.9},0).wait(1).to({scaleX:1,scaleY:0.95,skewX:-100.1,skewY:-131.9,x:182.4,y:47.4},0).wait(1).to({scaleX:0.99,scaleY:0.93,skewX:-150.1,skewY:-197.9,x:183.9,y:-42.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.3,128.4);


(lib.bullfrogbackLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.BFbackLegtop("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(131.5,258.7,1,1,0,0,0,131.5,111.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:82.9,regY:59.6,rotation:29.6,x:114.7,y:189.8},0).wait(1).to({rotation:59.2,x:150.9,y:190.5},0).wait(1).to({rotation:88.8,x:182,y:209},0).wait(1).to({rotation:71.1,x:164.4,y:195.9},0).wait(1).to({rotation:53.3,x:143.7,y:188.9},0).wait(1).to({rotation:35.5,x:121.8,y:188.5},0).wait(1).to({rotation:17.8,x:100.9,y:194.8},0).wait(1).to({rotation:0,x:82.9,y:207.2},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.BFbackLegfoot("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(193.2,120.7,1,1,0,0,0,144.1,120.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:78.3,regY:62.1,rotation:11.3,x:221.2,y:44.8},0).wait(1).to({rotation:48.8,x:322.3,y:-10.2},0).wait(1).to({rotation:86.3,x:423.2,y:-28.8},0).wait(1).to({rotation:69,x:366.2,y:-4.6},0).wait(1).to({rotation:51.8,x:306.4,y:27.1},0).wait(1).to({rotation:34.5,x:244.1,y:31.3},0).wait(1).to({rotation:17.3,x:183.7,y:43.4},0).wait(1).to({rotation:0,x:127.4,y:62.1},0).wait(1));

	// Layer 4
	this.instance_2 = new lib.BFbackLegmid("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.1,159,1,1,0,0,0,10.7,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:100.7,regY:30,rotation:11.5,x:184.6,y:117.1},0).wait(1).to({rotation:-4.3,x:245.6,y:102.9},0).wait(1).to({rotation:-20.1,x:300,y:90.7},0).wait(1).to({rotation:-3.2,x:260.7,y:100.1},0).wait(1).to({rotation:13.8,x:213.7,y:111.7},0).wait(1).to({rotation:9.2,x:178.1,y:120.7},0).wait(1).to({rotation:4.6,x:141.9,y:129.8},0).wait(1).to({rotation:0,x:105.1,y:139},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.8,266.8);


(lib.BullFrogswimming_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BullFrog-body
	this.instance = new lib.BullFrogbody("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(199.3,341.3,1,1,0,0,0,170.8,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

	// bullfrog-frontLeg-L
	this.instance_1 = new lib.bullfrogfrontLegL("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(183.6,427,1,1,0,0,0,49.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100));

	// bullfrog-FrontLeg-R
	this.instance_2 = new lib.bullfrogfrontLegL("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.5,330,1,1,0,115.7,-64.3,47.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(100));

	// bullfrog-backLeg-R
	this.instance_3 = new lib.bullfrogbackLegR("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(319,250.7,1,1,0,0,0,128.7,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// bullfrog-backLeg-L
	this.instance_4 = new lib.bullfrogbackLegR("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(343.2,285,1,1,0,100.4,-79.6,128.6,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,0,597.8,539.8);


(lib.BullFrogstop_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BullFrog-body
	this.instance = new lib.BullFrogbody("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(199.3,341.3,1,1,0,0,0,170.8,110.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// bullfrog-frontLeg-L
	this.instance_1 = new lib.bullfrogfrontLegL_stop("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(183.6,427,1,1,0,0,0,49.6,15.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6));

	// bullfrog-FrontLeg-R
	this.instance_2 = new lib.bullfrogfrontLegL_stop("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.5,330,1,1,0,115.7,-64.3,47.6,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6));

	// bullfrog-backLeg-R
	this.instance_3 = new lib.bullfrogbackLegR("synched",3);
	this.instance_3.parent = this;
	this.instance_3.setTransform(319,250.7,1,1,0,0,0,128.7,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6));

	// bullfrog-backLeg-L
	this.instance_4 = new lib.bullfrogbackLegR("synched",3);
	this.instance_4.parent = this;
	this.instance_4.setTransform(343.2,285,1,1,0,100.4,-79.6,128.6,250.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.5,-109.6,730.3,561.8);


(lib.BullfrogSM_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bullfrog
	this.instance = new lib.BullFrogswimming_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1584.4,-171.6,0.711,0.711,0,0,0,254.7,230.3);

	this.instance_1 = new lib.BullFrogstop_mc("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(713.5,348.6,0.711,0.711,0,0,0,254.8,230.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:348,regY:234.3,x:1614.5,y:-146.3,startPosition:1},0).wait(1).to({x:1578.3,y:-123.9,startPosition:2},0).wait(1).to({x:1542.1,y:-101.5,startPosition:3},0).wait(1).to({x:1505.9,y:-79.1,startPosition:4},0).wait(1).to({x:1469.7,y:-56.6,startPosition:5},0).wait(1).to({x:1433.5,y:-34.2,startPosition:6},0).wait(1).to({x:1397.3,y:-11.8,startPosition:7},0).wait(1).to({x:1361.1,y:10.6,startPosition:8},0).wait(1).to({x:1324.9,y:33,startPosition:9},0).wait(1).to({x:1261.7,y:71.8,startPosition:10},0).wait(1).to({x:1198.4,y:110.6,startPosition:11},0).wait(1).to({x:1135.2,y:149.4,startPosition:12},0).wait(1).to({x:1116.9,y:165.4,startPosition:13},0).wait(1).to({x:1098.5,y:181.4,startPosition:14},0).wait(1).to({x:1080.2,y:197.4,startPosition:15},0).wait(1).to({x:1061.9,y:213.4,startPosition:16},0).wait(1).to({x:1043.6,y:229.5,startPosition:17},0).wait(1).to({x:1025.2,y:245.5,startPosition:18},0).wait(1).to({x:1006.9,y:261.5,startPosition:19},0).wait(1).to({x:906.1,y:306.4,startPosition:20},0).wait(1).to({x:805.4,y:351.3,startPosition:21},0).to({_off:true},1).wait(30).to({_off:false,regX:253.6,regY:230.8,rotation:4.3,x:470.8,y:422.5,startPosition:0},0).wait(1).to({regX:348,regY:234.3,x:458.4,y:466.8,startPosition:1},0).wait(1).to({x:379.4,y:503.5,startPosition:2},0).wait(1).to({x:300.4,y:540.2,startPosition:3},0).wait(1).to({x:256,y:570.1,startPosition:4},0).wait(1).to({x:211.6,y:599.9,startPosition:5},0).wait(1).to({x:167.2,y:629.7,startPosition:6},0).wait(1).to({x:122.8,y:659.5,startPosition:7},0).wait(1).to({x:78.4,y:689.3,startPosition:8},0).wait(1).to({x:-14.8,y:759.6,startPosition:9},0).wait(1).to({x:-108,y:829.9,startPosition:10},0).wait(1).to({x:-201.1,y:900.2,startPosition:11},0).wait(1).to({x:-294.3,y:970.5,startPosition:12},0).to({_off:true},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).wait(1).to({regX:348.2,regY:234.2,rotation:0.1,x:762.7,y:355.6,startPosition:1},0).wait(1).to({rotation:0.3,x:745.6,y:360.2,startPosition:2},0).wait(1).to({rotation:0.4,x:728.4,y:364.9,startPosition:3},0).wait(1).to({rotation:0.6,x:711.2,y:369.5,startPosition:4},0).wait(1).to({rotation:0.7,x:694.1,y:374.1,startPosition:5},0).wait(1).to({rotation:0.9,x:676.9,y:378.8},0).wait(1).to({rotation:1,x:659.7,y:383.4},0).wait(1).to({rotation:1.2,x:642.5,y:388.1},0).wait(1).to({rotation:1.3,x:625.3,y:392.7},0).wait(1).to({rotation:1.5,x:621.1,y:394.3},0).wait(1).to({rotation:1.6,x:617,y:395.9},0).wait(1).to({rotation:1.8,x:612.8,y:397.5},0).wait(1).to({rotation:1.9,x:608.7,y:399.1},0).wait(1).to({rotation:2.1,x:604.5,y:400.7},0).wait(1).to({rotation:2.2,x:600.3,y:402.3},0).wait(1).to({rotation:2.4,x:596.2,y:403.9},0).wait(1).to({rotation:2.5,x:592,y:405.6},0).wait(1).to({rotation:2.7,x:587.8,y:407.2},0).wait(1).to({rotation:2.8,x:583.6,y:408.8},0).wait(1).to({rotation:3,x:579.5,y:410.4},0).wait(1).to({rotation:3.1,x:575.3,y:412},0).wait(1).to({rotation:3.3,x:571.1,y:413.6},0).wait(1).to({rotation:3.4,x:567,y:415.2},0).wait(1).to({rotation:3.6,x:562.8,y:416.9},0).wait(1).to({rotation:3.7,x:558.6,y:418.5},0).wait(1).to({rotation:3.9,x:554.4,y:420.1},0).wait(1).to({rotation:4,x:550.3,y:421.7},0).wait(1).to({rotation:4.2,x:546.1,y:423.3},0).wait(1).to({rotation:4.3,x:541.9,y:424.9},0).to({_off:true},1).wait(290));

	// waterrings large
	this.instance_2 = new lib.bullfrogWaterDip("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1479,-56.7,1.846,1.81,-30,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:160.4,regY:0,scaleX:1.86,scaleY:1.83,x:1697.1,y:-182.8,alpha:0.996,startPosition:1},0).wait(1).to({scaleX:1.87,scaleY:1.85,x:1659,y:-160.5,alpha:0.992,startPosition:2},0).wait(1).to({scaleX:1.87,scaleY:1.88,x:1620.9,y:-138.3,alpha:0.989,startPosition:3},0).wait(1).to({scaleX:1.88,scaleY:1.9,x:1582.7,y:-116.1,alpha:0.985,startPosition:4},0).wait(1).to({scaleX:1.89,scaleY:1.92,x:1544.6,y:-93.8,alpha:0.981,startPosition:5},0).wait(1).to({scaleX:1.9,scaleY:1.94,x:1506.5,y:-71.6,alpha:0.977,startPosition:6},0).wait(1).to({scaleX:1.91,scaleY:1.96,x:1468.4,y:-49.3,alpha:0.973,startPosition:7},0).wait(1).to({scaleX:1.91,scaleY:1.98,x:1430.2,y:-27.1,alpha:0.97,startPosition:8},0).wait(1).to({scaleX:1.92,scaleY:2,x:1392.1,y:-4.8,alpha:0.966,startPosition:9},0).wait(1).to({scaleX:1.93,scaleY:2.02,x:1331.2,y:33.3,alpha:0.962,startPosition:10},0).wait(1).to({scaleX:1.94,scaleY:2.04,x:1270.3,y:71.3,alpha:0.958,startPosition:11},0).wait(1).to({scaleX:1.95,scaleY:2.06,x:1209.5,y:109.4,alpha:0.954,startPosition:12},0).wait(1).to({scaleX:1.96,scaleY:2.08,x:1191.3,y:126,alpha:0.95,startPosition:13},0).wait(1).to({scaleX:1.96,scaleY:2.1,x:1173.3,y:142.6,alpha:0.947,startPosition:14},0).wait(1).to({scaleX:1.97,scaleY:2.12,x:1155.2,y:159.1,alpha:0.943,startPosition:15},0).wait(1).to({scaleX:1.98,scaleY:2.14,x:1137,y:175.7,alpha:0.939,startPosition:16},0).wait(1).to({scaleX:1.99,scaleY:2.17,x:1119,y:192.3,alpha:0.935,startPosition:17},0).wait(1).to({scaleX:2,scaleY:2.19,x:1100.9,y:208.9,alpha:0.931,startPosition:18},0).wait(1).to({scaleX:2,scaleY:2.21,x:1082.8,y:225.4,alpha:0.928,startPosition:19},0).wait(1).to({scaleX:2.01,scaleY:2.23,x:983.3,y:264.8,alpha:0.924,startPosition:20},0).wait(1).to({scaleX:2.02,scaleY:2.25,x:883.7,y:304.2,alpha:0.92,startPosition:21},0).wait(1).to({scaleX:2.03,scaleY:2.27,x:863.6,y:309.3,alpha:0.828,startPosition:22},0).wait(1).to({scaleX:2.04,scaleY:2.29,x:843.6,y:314.3,alpha:0.736,startPosition:23},0).wait(1).to({scaleX:2.04,scaleY:2.31,x:823.5,y:319.4,alpha:0.644,startPosition:24},0).wait(1).to({scaleX:2.05,scaleY:2.33,x:803.4,y:324.4,alpha:0.552,startPosition:25},0).wait(1).to({scaleX:2.06,scaleY:2.35,x:783.4,y:329.5,alpha:0.46,startPosition:26},0).wait(1).to({scaleX:2.07,scaleY:2.37,x:763.3,y:334.5,alpha:0.368,startPosition:27},0).wait(1).to({scaleX:2.08,scaleY:2.39,x:743.2,y:339.6,alpha:0.276,startPosition:28},0).wait(1).to({scaleX:2.09,scaleY:2.41,x:723.2,y:344.6,alpha:0.184,startPosition:29},0).wait(1).to({scaleX:2.09,scaleY:2.43,x:703.1,y:349.6,alpha:0.092,startPosition:30},0).wait(1).to({scaleX:2.1,scaleY:2.46,x:683.1,y:354.7,alpha:0,startPosition:31},0).wait(1).to({startPosition:32},0).to({_off:true},1).wait(309));

	// water ring still
	this.instance_3 = new lib.otterWaterDip("synched",12);
	this.instance_3.parent = this;
	this.instance_3.setTransform(529.9,458.3,5.856,5.856,0,0,0,0.2,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).wait(1).to({regX:0,x:528.7,alpha:0.063,startPosition:13},0).wait(1).to({alpha:0.127,startPosition:14},0).wait(1).to({alpha:0.19,startPosition:15},0).wait(1).to({alpha:0.253,startPosition:16},0).wait(1).to({alpha:0.317,startPosition:17},0).wait(1).to({alpha:0.38,startPosition:18},0).wait(1).to({alpha:0.443,startPosition:19},0).wait(1).to({alpha:0.507,startPosition:20},0).wait(1).to({alpha:0.57,startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({alpha:0.569,startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({alpha:0.568,startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({alpha:0.567,startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({alpha:0.566,startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({alpha:0.565,startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({alpha:0.564,startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({alpha:0.563,startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({alpha:0.562,startPosition:42},0).wait(1).to({regX:0.4,x:535.8,y:378.7,alpha:0.559,startPosition:0},0).wait(1).to({regX:0,x:533.4,alpha:0.561,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({alpha:0.56,startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({alpha:0.48,startPosition:6},0).wait(1).to({alpha:0.4,startPosition:7},0).wait(1).to({alpha:0.32,startPosition:8},0).wait(1).to({alpha:0.24,startPosition:9},0).wait(1).to({alpha:0.16,startPosition:10},0).wait(1).to({alpha:0.08,startPosition:11},0).wait(1).to({alpha:0,startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).to({_off:true},1).wait(269));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1330.6,-335.4,490,418.3);


// stage content:



(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Bullfrog
	this.instance = new lib.BullfrogSM_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(495,427.1,0.753,0.753,-18.5,0,0,856.1,324.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},65).wait(175));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1127.6,286.2,344.8,341.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;