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
		{src:"assets/animations/images/Otter_PQ_atlas_.png", id:"Otter_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Otter_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["Otter_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.otterWaterDip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5EAFF","rgba(255,255,255,0)","#E4F1FF","rgba(255,255,255,0)","rgba(230,242,255,0.89)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,52.4).s().p("Ah3H4QjRgyhwi3Qhxi4AyjOQAyjRC4hwQC3hxDOAyQDRAyBwC3QBxC3gyDPQgyDRi3BwQh/BOiLAAQg8AAhAgPg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,55.1).s().p("Ah9ISQjbg1h3jAQh2jBA0jZQA2jbDAh3QDAh2DZA0QDbA1B3DAQB2DBg0DZQg1DcjAB2QiFBSiTAAQg/AAhDgQg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,57.7).s().p("AiEIrQjlg3h8jKQh8jKA3jkQA3jmDKh8QDKh7DkA3QDlA3B8DJQB8DKg3DkQg3DnjKB7QiLBWiZAAQhDAAhHgRg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,60.4).s().p("AiKJFQjwg6iCjSQiCjUA6jvQA7jwDSiCQDTiCDvA6QDwA6CCDSQCBDUg5DuQg6DyjSCBQiTBaigAAQhGAAhKgSg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,63).s().p("AiQJeQj7g8iHjcQiIjdA9j5QA8j7DdiHQDciID5A9QD7A8CHDcQCIDdg9D4Qg7D9jdCGQiYBeioAAQhIAAhOgTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,65.7).s().p("AiWJ4QkGg/iNjlQiMjmA+kEQA/kGDmiNQDmiMEDA+QEGA/CNDlQCMDmg+EEQg+EGjmCNQifBhivAAQhLAAhRgTg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,68.4).s().p("AidKRQkQhBiSjvQiSjvBBkPQBBkQDviSQDviTEPBBQEQBBCSDvQCSDvhBEOQhAESjwCSQikBmi2AAQhPAAhVgVg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,71).s().p("AiiKrQkbhDiZj4QiYj5BEkZQBEkbD4iYQD5iZEYBEQEbBECZD4QCYD4hEEZQhDEcj4CYQisBpi9AAQhSAAhXgVg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,73.7).s().p("AipLFQklhGiekCQiekBBGkkQBHkmECieQEBieEkBGQElBHCeEBQCeEChGEjQhGEnkCCdQiyBtjDAAQhWAAhbgVg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,76.3).s().p("AivLfQkvhKilkKQijkLBIkvQBKkvELilQELijEuBIQEvBKClEKQCjELhIEuQhJExkLCkQi5BxjLAAQhYAAhegWg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(213,234,255,0.698)","rgba(255,255,255,0)","rgba(228,241,255,0.698)","rgba(255,255,255,0)","rgba(230,242,255,0.62)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,79).s().p("Ai1L4Qk6hMiqkUQipkUBLk5QBMk7EUipQEUipE5BLQE6BLCqEUQCpEVhLE4QhLE8kVCpQi+B1jSAAQhcAAhhgXg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(213,234,255,0.667)","rgba(255,255,255,0)","rgba(228,241,255,0.667)","rgba(255,255,255,0)","rgba(230,242,255,0.592)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,81.7).s().p("Ai7MSQlFhOiwkdQivkeBPlEQBOlFEdivQEeivFDBNQFFBPCwEdQCvEehPFDQhMFGkfCvQjFB5jZAAQheAAhlgYg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,84.3).s().p("AjBMrQlPhQi2knQi1knBRlOQBRlPEni2QEmi0FOBQQFPBRC2EmQC1EnhRFOQhQFQkmC1QjNB9jfAAQhiAAhogZg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,87).s().p("AjHNFQlahTi7kwQi7kwBTlZQBTlaExi7QEwi6FYBSQFaBTC7EwQC7ExhUFYQhSFbkwC6QjSCBjnAAQhlAAhrgZg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,89.6).s().p("AjONeQlkhVjBk6Qi/k5BUlkQBWlkE6jBQE6jAFiBVQFlBWDAE5QDAE6hUFiQhVFmk6DAQjZCGjvAAQhnAAhvgbg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,92.3).s().p("AjUN4QlvhYjGlCQjGlDBYluQBYlwFDjGQFDjGFuBYQFvBYDGFDQDGFDhYFtQhXFxlEDFQjfCJj1AAQhrAAhygbg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,94.9).s().p("AjZOSQl6hbjNlMQjLlMBal4QBcl6FLjMQFMjMF4BaQF6BbDMFMQDMFMhaF4QhbF7lLDMQjmCMj9AAQhuAAh0gbg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,97.6).s().p("AjgOrQmEhdjSlVQjRlVBdmEQBdmEFWjSQFWjRGCBdQGEBdDSFVQDRFWhdGCQhcGGlWDRQjsCRkDAAQhyAAh4gdg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,100.2).s().p("AjmPFQmPhgjYleQjWlfBgmOQBgmPFejXQFfjXGNBfQGPBgDXFfQDXFehgGNQheGRlfDXQjyCUkLAAQh0AAh8gdg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,102.9).s().p("AjsPeQmahijdlnQjcloBimZQBjmaFojdQFojcGXBhQGaBjDdFoQDcFohiGYQhhGblpDcQj4CZkRAAQh4AAh/gfg");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,105.6).s().p("AjyP4QmkhljklxQjilxBlmjQBlmkFxjjQFyjiGiBkQGkBlDjFxQDjFxhlGjQhkGllxDjQkACckYAAQh7AAiCgfg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,108.2).s().p("Aj5QSQmvhnjnl7Qjpl6BnmuQBomvF7joQF6joGuBmQGvBoDnF6QDpF7hnGtQhnGwl7DoQkGCgkfAAQh+AAiGgfg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(213,234,255,0.333)","rgba(255,255,255,0)","rgba(228,241,255,0.333)","rgba(255,255,255,0)","rgba(230,242,255,0.298)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,110.9).s().p("Aj+QrQm6hpjumEQjumEBqm4QBqm6GEjuQGEjtG3BpQG6BqDuGEQDuGDhqG4QhpG7mEDtQkMClknAAQiBAAiIghg");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(213,234,255,0.302)","rgba(255,255,255,0)","rgba(228,241,255,0.302)","rgba(255,255,255,0)","rgba(230,242,255,0.271)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,113.5).s().p("AkERFQnFhsjzmNQj0mNBtnDQBsnEGOj0QGNj0HBBsQHFBtDzGNQD0GNhtHCQhrHFmND0QkTCoktAAQiFAAiLghg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(213,234,255,0.275)","rgba(255,255,255,0)","rgba(228,241,255,0.275)","rgba(255,255,255,0)","rgba(230,242,255,0.243)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,116.2).s().p("AkLReQnPhuj5mXQj5mWBvnOQBvnOGWj6QGXj5HNBuQHPBwD5GWQD5GWhvHNQhtHQmXD5QkZCtk1AAQiIAAiPgjg");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(213,234,255,0.243)","rgba(255,255,255,0)","rgba(228,241,255,0.243)","rgba(255,255,255,0)","rgba(230,242,255,0.216)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,118.9).s().p("AkRR4QnZhxj/mgQj/mgBxnYQBynZGgj/QGgj/HXBxQHZByD/GfQD/GghxHXQhxHbmgD/QkfCwk8AAQiLAAiSgjg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(213,234,255,0.212)","rgba(255,255,255,0)","rgba(228,241,255,0.212)","rgba(255,255,255,0)","rgba(230,242,255,0.188)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,121.5).s().p("AkXSSQnkh0kFmpQkEmpBznjQB1nkGpkFQGpkEHiBzQHkB1EFGpQEEGphzHhQh0HmmpEEQkmC0lDAAQiOAAiVgjg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(213,234,255,0.18)","rgba(255,255,255,0)","rgba(228,241,255,0.18)","rgba(255,255,255,0)","rgba(230,242,255,0.161)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,124.2).s().p("AkdSrQnvh2kKmyQkLmzB3ntQB3nuGzkLQGykKHsB1QHvB4EKGyQEKGyh2HtQh1HvmzELQktC4lJAAQiRAAiZglg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(213,234,255,0.153)","rgba(255,255,255,0)","rgba(228,241,255,0.153)","rgba(255,255,255,0)","rgba(230,242,255,0.133)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,126.8).s().p("AkkTFQn4h5kRm8QkQm7B5n4QB6n5G7kRQG8kPH4B4QH4B6ERG7QEQG8h5H3Qh4H6m9EQQkyC8lRAAQiUAAidglg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(213,234,255,0.122)","rgba(255,255,255,0)","rgba(228,241,255,0.122)","rgba(255,255,255,0)","rgba(230,242,255,0.11)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,129.5).s().p("AkpTeQoEh7kWnFQkVnFB7oCQB8oEHFkWQHFkVIBB6QIEB8EWHFQEVHFh7ICQh7IFnEEVQk6DAlYAAQiXAAifgmg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["rgba(213,234,255,0.09)","rgba(255,255,255,0)","rgba(228,241,255,0.09)","rgba(255,255,255,0)","rgba(230,242,255,0.082)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,132.1).s().p("AkwT4QoOh+kcnOQkbnOB/oNQB9oPHPkbQHPkbIMB9QIOB+EcHPQEbHOh/IMQh8IQnPEbQk/DElfAAQibAAijgng");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["rgba(213,234,255,0.059)","rgba(255,255,255,0)","rgba(228,241,255,0.059)","rgba(255,255,255,0)","rgba(230,242,255,0.055)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,134.8).s().p("Ak2USQoYiBkinXQkhnYCBoXQCAoZHZkiQHXkhIXCAQIYCBEiHYQEhHXiBIXQh/IanYEhQlGDIlnAAQidAAimgng");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(213,234,255,0.031)","rgba(255,255,255,0)","rgba(228,241,255,0.031)","rgba(255,255,255,0)","rgba(230,242,255,0.027)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,137.5).s().p("Ak8UrQojiDkonhQkmngCDojQCDojHhknQHiknIhCCQIjCEEoHhQEmHhiDIhQiCIlniEnQlMDMltAAQihAAipgpg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["rgba(213,234,255,0)","rgba(255,255,255,0)","rgba(228,241,255,0)","rgba(255,255,255,0)","rgba(230,242,255,0)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,140.1).s().p("AlCVFQouiGktnqQksnqCFotQCHouHqktQHqksIsCFQIuCGEtHqQEsHqiFIsQiFIwnqEsQlTDQl1AAQijAAitgpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},11).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(1));

	// Layer 1
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#D5EAFF","rgba(255,255,255,0)","#E4F1FF","rgba(255,255,255,0)","rgba(230,242,255,0.89)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,52.4).s().p("Ah3H4QjRgyhwi3Qhxi4AyjOQAyjRC4hwQC3hxDOAyQDRAyBwC3QBxC3gyDPQgyDRi3BwQh/BOiLAAQg8AAhAgPg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["rgba(213,234,255,0.969)","rgba(255,255,255,0)","rgba(228,241,255,0.969)","rgba(255,255,255,0)","rgba(230,242,255,0.863)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,55.1).s().p("Ah9ISQjbg1h3jAQh2jBA0jZQA2jbDAh3QDAh2DZA0QDbA1B3DAQB2DBg0DZQg1DcjAB2QiFBSiTAAQg/AAhDgQg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["rgba(213,234,255,0.941)","rgba(255,255,255,0)","rgba(228,241,255,0.941)","rgba(255,255,255,0)","rgba(230,242,255,0.835)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,57.7).s().p("AiEIrQjlg3h8jKQh8jKA3jkQA3jmDKh8QDKh7DkA3QDlA3B8DJQB8DKg3DkQg3DnjKB7QiLBWiZAAQhDAAhHgRg");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["rgba(213,234,255,0.91)","rgba(255,255,255,0)","rgba(228,241,255,0.91)","rgba(255,255,255,0)","rgba(230,242,255,0.808)","rgba(251,253,255,0)"],[0,0.165,0.318,0.471,0.647,0.851],0,0,0,0,0,60.4).s().p("AiKJFQjwg6iCjSQiCjUA6jvQA7jwDSiCQDTiCDvA6QDwA6CCDSQCBDUg5DuQg6DyjSCBQiTBaigAAQhGAAhKgSg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["rgba(213,234,255,0.878)","rgba(255,255,255,0)","rgba(228,241,255,0.878)","rgba(255,255,255,0)","rgba(230,242,255,0.78)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,63).s().p("AiQJeQj7g8iHjcQiIjdA9j5QA8j7DdiHQDciID5A9QD7A8CHDcQCIDdg9D4Qg7D9jdCGQiYBeioAAQhIAAhOgTg");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["rgba(213,234,255,0.847)","rgba(255,255,255,0)","rgba(228,241,255,0.847)","rgba(255,255,255,0)","rgba(230,242,255,0.757)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,65.7).s().p("AiWJ4QkGg/iNjlQiMjmA+kEQA/kGDmiNQDmiMEDA+QEGA/CNDlQCMDmg+EEQg+EGjmCNQifBhivAAQhLAAhRgTg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["rgba(213,234,255,0.82)","rgba(255,255,255,0)","rgba(228,241,255,0.82)","rgba(255,255,255,0)","rgba(230,242,255,0.729)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,68.4).s().p("AidKRQkQhBiSjvQiSjvBBkPQBBkQDviSQDviTEPBBQEQBBCSDvQCSDvhBEOQhAESjwCSQikBmi2AAQhPAAhVgVg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["rgba(213,234,255,0.788)","rgba(255,255,255,0)","rgba(228,241,255,0.788)","rgba(255,255,255,0)","rgba(230,242,255,0.702)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,71).s().p("AiiKrQkbhDiZj4QiYj5BEkZQBEkbD4iYQD5iZEYBEQEbBECZD4QCYD4hEEZQhDEcj4CYQisBpi9AAQhSAAhXgVg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["rgba(213,234,255,0.757)","rgba(255,255,255,0)","rgba(228,241,255,0.757)","rgba(255,255,255,0)","rgba(230,242,255,0.675)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,73.7).s().p("AipLFQklhGiekCQiekBBGkkQBHkmECieQEBieEkBGQElBHCeEBQCeEChGEjQhGEnkCCdQiyBtjDAAQhWAAhbgVg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["rgba(213,234,255,0.725)","rgba(255,255,255,0)","rgba(228,241,255,0.725)","rgba(255,255,255,0)","rgba(230,242,255,0.647)","rgba(251,253,255,0)"],[0,0.165,0.318,0.475,0.647,0.851],0,0,0,0,0,76.3).s().p("AivLfQkvhKilkKQijkLBIkvQBKkvELilQELijEuBIQEvBKClEKQCjELhIEuQhJExkLCkQi5BxjLAAQhYAAhegWg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["rgba(213,234,255,0.698)","rgba(255,255,255,0)","rgba(228,241,255,0.698)","rgba(255,255,255,0)","rgba(230,242,255,0.62)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,79).s().p("Ai1L4Qk6hMiqkUQipkUBLk5QBMk7EUipQEUipE5BLQE6BLCqEUQCpEVhLE4QhLE8kVCpQi+B1jSAAQhcAAhhgXg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["rgba(213,234,255,0.667)","rgba(255,255,255,0)","rgba(228,241,255,0.667)","rgba(255,255,255,0)","rgba(230,242,255,0.592)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,81.7).s().p("Ai7MSQlFhOiwkdQivkeBPlEQBOlFEdivQEeivFDBNQFFBPCwEdQCvEehPFDQhMFGkfCvQjFB5jZAAQheAAhlgYg");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["rgba(213,234,255,0.635)","rgba(255,255,255,0)","rgba(228,241,255,0.635)","rgba(255,255,255,0)","rgba(230,242,255,0.565)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,84.3).s().p("AjBMrQlPhQi2knQi1knBRlOQBRlPEni2QEmi0FOBQQFPBRC2EmQC1EnhRFOQhQFQkmC1QjNB9jfAAQhiAAhogZg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["rgba(213,234,255,0.608)","rgba(255,255,255,0)","rgba(228,241,255,0.608)","rgba(255,255,255,0)","rgba(230,242,255,0.541)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,87).s().p("AjHNFQlahTi7kwQi7kwBTlZQBTlaExi7QEwi6FYBSQFaBTC7EwQC7ExhUFYQhSFbkwC6QjSCBjnAAQhlAAhrgZg");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["rgba(213,234,255,0.576)","rgba(255,255,255,0)","rgba(228,241,255,0.576)","rgba(255,255,255,0)","rgba(230,242,255,0.514)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,89.6).s().p("AjONeQlkhVjBk6Qi/k5BUlkQBWlkE6jBQE6jAFiBVQFlBWDAE5QDAE6hUFiQhVFmk6DAQjZCGjvAAQhnAAhvgbg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["rgba(213,234,255,0.545)","rgba(255,255,255,0)","rgba(228,241,255,0.545)","rgba(255,255,255,0)","rgba(230,242,255,0.486)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,92.3).s().p("AjUN4QlvhYjGlCQjGlDBYluQBYlwFDjGQFDjGFuBYQFvBYDGFDQDGFDhYFtQhXFxlEDFQjfCJj1AAQhrAAhygbg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["rgba(213,234,255,0.514)","rgba(255,255,255,0)","rgba(228,241,255,0.514)","rgba(255,255,255,0)","rgba(230,242,255,0.459)","rgba(251,253,255,0)"],[0,0.165,0.318,0.478,0.647,0.851],0,0,0,0,0,94.9).s().p("AjZOSQl6hbjNlMQjLlMBal4QBcl6FLjMQFMjMF4BaQF6BbDMFMQDMFMhaF4QhbF7lLDMQjmCMj9AAQhuAAh0gbg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["rgba(213,234,255,0.486)","rgba(255,255,255,0)","rgba(228,241,255,0.486)","rgba(255,255,255,0)","rgba(230,242,255,0.431)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,97.6).s().p("AjgOrQmEhdjSlVQjRlVBdmEQBdmEFWjSQFWjRGCBdQGEBdDSFVQDRFWhdGCQhcGGlWDRQjsCRkDAAQhyAAh4gdg");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["rgba(213,234,255,0.455)","rgba(255,255,255,0)","rgba(228,241,255,0.455)","rgba(255,255,255,0)","rgba(230,242,255,0.404)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,100.2).s().p("AjmPFQmPhgjYleQjWlfBgmOQBgmPFejXQFfjXGNBfQGPBgDXFfQDXFehgGNQheGRlfDXQjyCUkLAAQh0AAh8gdg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["rgba(213,234,255,0.424)","rgba(255,255,255,0)","rgba(228,241,255,0.424)","rgba(255,255,255,0)","rgba(230,242,255,0.376)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,102.9).s().p("AjsPeQmahijdlnQjcloBimZQBjmaFojdQFojcGXBhQGaBjDdFoQDcFohiGYQhhGblpDcQj4CZkRAAQh4AAh/gfg");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["rgba(213,234,255,0.392)","rgba(255,255,255,0)","rgba(228,241,255,0.392)","rgba(255,255,255,0)","rgba(230,242,255,0.349)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,105.6).s().p("AjyP4QmkhljklxQjilxBlmjQBlmkFxjjQFyjiGiBkQGkBlDjFxQDjFxhlGjQhkGllxDjQkACckYAAQh7AAiCgfg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["rgba(213,234,255,0.365)","rgba(255,255,255,0)","rgba(228,241,255,0.365)","rgba(255,255,255,0)","rgba(230,242,255,0.325)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,108.2).s().p("Aj5QSQmvhnjnl7Qjpl6BnmuQBomvF7joQF6joGuBmQGvBoDnF6QDpF7hnGtQhnGwl7DoQkGCgkfAAQh+AAiGgfg");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["rgba(213,234,255,0.333)","rgba(255,255,255,0)","rgba(228,241,255,0.333)","rgba(255,255,255,0)","rgba(230,242,255,0.298)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,110.9).s().p("Aj+QrQm6hpjumEQjumEBqm4QBqm6GEjuQGEjtG3BpQG6BqDuGEQDuGDhqG4QhpG7mEDtQkMClknAAQiBAAiIghg");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["rgba(213,234,255,0.302)","rgba(255,255,255,0)","rgba(228,241,255,0.302)","rgba(255,255,255,0)","rgba(230,242,255,0.271)","rgba(251,253,255,0)"],[0,0.165,0.318,0.482,0.647,0.851],0,0,0,0,0,113.5).s().p("AkERFQnFhsjzmNQj0mNBtnDQBsnEGOj0QGNj0HBBsQHFBtDzGNQD0GNhtHCQhrHFmND0QkTCoktAAQiFAAiLghg");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["rgba(213,234,255,0.275)","rgba(255,255,255,0)","rgba(228,241,255,0.275)","rgba(255,255,255,0)","rgba(230,242,255,0.243)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,116.2).s().p("AkLReQnPhuj5mXQj5mWBvnOQBvnOGWj6QGXj5HNBuQHPBwD5GWQD5GWhvHNQhtHQmXD5QkZCtk1AAQiIAAiPgjg");

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["rgba(213,234,255,0.243)","rgba(255,255,255,0)","rgba(228,241,255,0.243)","rgba(255,255,255,0)","rgba(230,242,255,0.216)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,118.9).s().p("AkRR4QnZhxj/mgQj/mgBxnYQBynZGgj/QGgj/HXBxQHZByD/GfQD/GghxHXQhxHbmgD/QkfCwk8AAQiLAAiSgjg");

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["rgba(213,234,255,0.212)","rgba(255,255,255,0)","rgba(228,241,255,0.212)","rgba(255,255,255,0)","rgba(230,242,255,0.188)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,121.5).s().p("AkXSSQnkh0kFmpQkEmpBznjQB1nkGpkFQGpkEHiBzQHkB1EFGpQEEGphzHhQh0HmmpEEQkmC0lDAAQiOAAiVgjg");

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["rgba(213,234,255,0.18)","rgba(255,255,255,0)","rgba(228,241,255,0.18)","rgba(255,255,255,0)","rgba(230,242,255,0.161)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,124.2).s().p("AkdSrQnvh2kKmyQkLmzB3ntQB3nuGzkLQGykKHsB1QHvB4EKGyQEKGyh2HtQh1HvmzELQktC4lJAAQiRAAiZglg");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["rgba(213,234,255,0.153)","rgba(255,255,255,0)","rgba(228,241,255,0.153)","rgba(255,255,255,0)","rgba(230,242,255,0.133)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,126.8).s().p("AkkTFQn4h5kRm8QkQm7B5n4QB6n5G7kRQG8kPH4B4QH4B6ERG7QEQG8h5H3Qh4H6m9EQQkyC8lRAAQiUAAidglg");

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["rgba(213,234,255,0.122)","rgba(255,255,255,0)","rgba(228,241,255,0.122)","rgba(255,255,255,0)","rgba(230,242,255,0.11)","rgba(251,253,255,0)"],[0,0.165,0.318,0.486,0.647,0.851],0,0,0,0,0,129.5).s().p("AkpTeQoEh7kWnFQkVnFB7oCQB8oEHFkWQHFkVIBB6QIEB8EWHFQEVHFh7ICQh7IFnEEVQk6DAlYAAQiXAAifgmg");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["rgba(213,234,255,0.09)","rgba(255,255,255,0)","rgba(228,241,255,0.09)","rgba(255,255,255,0)","rgba(230,242,255,0.082)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,132.1).s().p("AkwT4QoOh+kcnOQkbnOB/oNQB9oPHPkbQHPkbIMB9QIOB+EcHPQEbHOh/IMQh8IQnPEbQk/DElfAAQibAAijgng");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["rgba(213,234,255,0.059)","rgba(255,255,255,0)","rgba(228,241,255,0.059)","rgba(255,255,255,0)","rgba(230,242,255,0.055)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,134.8).s().p("Ak2USQoYiBkinXQkhnYCBoXQCAoZHZkiQHXkhIXCAQIYCBEiHYQEhHXiBIXQh/IanYEhQlGDIlnAAQidAAimgng");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["rgba(213,234,255,0.031)","rgba(255,255,255,0)","rgba(228,241,255,0.031)","rgba(255,255,255,0)","rgba(230,242,255,0.027)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,137.5).s().p("Ak8UrQojiDkonhQkmngCDojQCDojHhknQHiknIhCCQIjCEEoHhQEmHhiDIhQiCIlniEnQlMDMltAAQihAAipgpg");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["rgba(213,234,255,0)","rgba(255,255,255,0)","rgba(228,241,255,0)","rgba(255,255,255,0)","rgba(230,242,255,0)","rgba(251,253,255,0)"],[0,0.165,0.318,0.49,0.647,0.851],0,0,0,0,0,140.1).s().p("AlCVFQouiGktnqQksnqCFotQCHouHqktQHqksIsCFQIuCGEtHqQEsHqiFIsQiFIwnqEsQlTDQl1AAQijAAitgpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-52,104,104);


(lib.Ottertai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD9072").s().p("AklRwQgrh7ADh+QAFkFDpnYQBujgijk0Qg7hshUhlQhChQgugiIHOqmQAHCjA8CSQAVAyBoDCQBRCXAhB9QAwCzgMDjQgOEVheDtQhACiiEDLQiXDsgiBGQhUCpAACqQhViPgkhlg");
	this.shape.setTransform(62.9,12,1,1,0,0,0,-28,-126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("AqtxIQA4ApBiBAQBfA9ArAgQCRBtBcCcQBTCNAgBnQArCRgeB6QgZBghFCyQhIC5gYBYQgqCZAFB+QAHCXBMCMQA+BzBoBiQBXBTCCBQQhhi8Aeh3QAPg4AthDQAfgvBOhdQB+iWBRjNQA8iXA6j2QAnilAIi4QAKjNgfi1QhLm8khilQirhhjyAPQigAKkGBHg");
	this.shape_1.setTransform(68.6,158.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E0A06").s().p("AgHS9Qhohig+hzQhMiMgHiYQgFh+AqiZQAYhXBIi6QBFixAZhgQAeh6griRQgghnhTiNQhcidiRhsQgrgghfg+QhihAg4goICWjIQEGhICggKQDygPCrBiQEhClBLG8QAfC1gKDNQgIC4gnCkQg6D2g8CXQhRDNh+CWQhOBegfAvQgtBCgPA5QgeB3BhC8QiChQhXhTg");
	this.shape_2.setTransform(68.7,157.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,139.5,296.7);


(lib.otterhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("Ag/j+QgcB/AvCJQAfBaBYCa");
	this.shape.setTransform(166,75.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("ABGlHQhHCDgmC9QgiCrAFCn");
	this.shape_1.setTransform(145.4,80);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("ACJkuQiJBehKCxQhKCqARCn");
	this.shape_2.setTransform(134.7,73.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090906").s().p("AAiBWQgQgrgKg2QgIg4ghgeIgggTIBFAEQAWAGAXAmQAXAkgJBNQgFAogJAgQgGgKgJgVg");
	this.shape_3.setTransform(162.3,25.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,4).p("ABZhCQARAtgHA8QgKBbAAAWQgNgFgOgSQgcglgFheQgBglgsgQQg5gUgSgfQgTgfAVgLQATgJAoAJQAmAKAiAVQAmAYAJAbg");
	this.shape_4.setTransform(46.3,76.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#090906").s().p("AA+CCQgcglgFheQgBglgsgQQg5gUgSgfQgTgfAVgLQATgJAoAJQAmAKAiAVQAmAYAJAbQARAtgHA8QgKBbAAAWQgNgFgOgSg");
	this.shape_5.setTransform(46.3,76.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#090906").s().p("AhFAsQgOgFABgIQABgIATgHQA2gSBbgvQgJAVgNAWQgbAqgYAHQgXAHgVAAQgTAAgQgGg");
	this.shape_6.setTransform(103,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#392723").s().p("Am8MpQgFiKh2h4QgcgchBg3QgzgrgPgWQhniNgHi7QgIjSB8jMQCQjsDOh2QDRh4ETgCQApAACeAyQCRAvBPgNQDLgjA/BLQAvA3gRCWQgOCAgTAtQgmBchoAqQi8BCguAXQgjASgYAcQgZAdgfA6IgsgRIgsgRIAWA0QAHATADAjIgagKQArA0gUA6QgTA+hFgiQAFBFgMAkQgTA0g2gjIAPA6QAKAogFASQgTA8gHADQgRgEgdANQgGADgggMQgigNgUALQgNAHgVAyQgXA1gLAMQgjhEglAGQgnAFADBSQgUgNgTgdIgdgyQghg3guAWQgnATgNBkQgLBUALAxg");
	this.shape_7.setTransform(83.8,81.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,0,0,4).p("AiAIXQAHAKAbASQAbATAGAIQACgGATgqQAOgegBgXQAqA9AngUQAngTgIhLQAPAKAkAFQAqAGALAFQAAgPAHgtQAHgngEgVQAcARAhAFQAZADAmgEQgEgKgFgjQgDgYgRgTQBbAcBigWQg0g9gngSQA1ACAZgBQAsgCAegMQgJgjgSgSQgVgUgkgCQAmgEA7ADQAogEAAguQAAAAhQgoQAVgIAigMQAcgKARgSQh6gxgageQghgogEh/QgBgRAHhBQAGhBgBgmQgDiAhWgMQg1gHj8CBQj7CChCBEQimCshYCiQhyDUATDBQADAfBbAqQBtAzAMAK");
	this.shape_8.setTransform(124.2,70.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F5DBC4").s().p("AoJIYQhbgqgDgfQgTjBByjUQBYiiCmisQBChED7iCQD8iBA1AHQBWAMADCAQABAmgGBBQgHBBABARQAEB/AhAoQAaAeB6AxQgRASgcAKIg3AUIBQAoQAAAugoAEQg7gDgmAEQAkACAVAUQASASAJAjQgeAMgsACQgZABg1gCQAnASA0A9QhiAWhbgcQARATADAYQAFAjAEAKQgmAEgZgDQghgFgcgRQAEAVgHAnQgHAtAAAPQgLgFgqgGQgkgFgPgKQAIBLgnATQgnAUgqg9QABAXgOAeIgVAwQgGgIgbgTQgbgSgHgKIkSA+QgMgKhtgzg");
	this.shape_9.setTransform(124,70.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187,163.3);


(lib.otterFrontPawR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#392723").s().p("AjjLJQjzAAhdjeQgvhwgGi9QgChJBaiNQBpiYAegwQAzhRBCg0QArgiBUgsQBggxAsgeQBTg5BLhTQAngsAmgLQAdgIAmALIBFATQAqAKAmgLQBagaAxAkQAsAhgKBDQgLBFhBA/QhJBHh1AkQgjALg7AIQhIALgVAFQhqAXg3BLQgpA8gRB1QgJBAgCB9QgBAjARAlQAKAWAYAsQArBcgZB3QgaCChnAyQgyAYgsAAIgEAAg");
	this.shape.setTransform(61.7,71.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123.5,142.8);


(lib.otterfrontPawL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("ABLARQgbgjgdgPQgcgQgiADIgdAGQgLgKgig4QgggzgWgPQgGAwAUAxQASAuAhAiIAHANQApAwA7AvQBPA8AzAEQAag2ALhCQAQhWgegfQgagbgWAFQgUAEgKAaQgKAZAFAcQACAIACAIQAIAVAQAOQgIgQgPgSQAAgBgBAAg");
	this.shape.setTransform(17.4,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#090906").s().p("AABBvQg7gvgpgwIgHgNQghgigSguQgUgxAGgwQAWAPAgAzQAiA4ALAKIAdgGQAigDAcAQQAdAQAbAiQAIAVAQAOQgIgQgPgSIgBgBIABABQAPASAIAQQgQgOgIgVIgEgPQgFgdAKgZQAKgaAUgEQAWgFAaAbQAeAfgQBWQgLBCgaA2QgzgEhPg8g");
	this.shape_1.setTransform(17.4,25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("ABGgJQhGhngjgVQgggSgBAtQgCApAXBGQAYBKAhA/");
	this.shape_2.setTransform(21.6,18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090906").s().p("AgvAEQgXhHACgoQABgtAgASQAjAVBGBnIg8CWQghg/gYhJg");
	this.shape_3.setTransform(21.6,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,0,0,4).p("ABPAOQgLgWg5g5Qg8g+gXgDQgQBFAYBEQADAJA4B2");
	this.shape_4.setTransform(13.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#090906").s().p("AhAAFQgYhEAQhEQAXADA8A9QA5A5ALAXIhUB3Qg4h2gDgJg");
	this.shape_5.setTransform(13.3,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,0,0,4).p("AgBgDQABADACAC");
	this.shape_6.setTransform(75.8,62.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#392723").s().p("AhKEQQgBAFAAANQABAMgBAGQABABgNAHQgWgngXgOQgcgQgbAXQgXgohAgwQgFAGgGAIIgJAOQg0gugUhdQgPhIAIhXQA+gKgCg/QgCgtggg/IAUghQBSg1BmBTQAdAXAxA0QAwAxARAPQAeAXAkAHQAVAEAsAEQBaALBaBUQAjAhgBAcQgCAegtAsQAeAOAVAdQAVAcAHAiIgagFIgagFIAOAjQAGAQAIAMQgpgzhDgFQghBNh1AJIgaABQhcAAgzg0g");
	this.shape_7.setTransform(40.2,32.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,78.9,64.9);


(lib.otterbackLegR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("Aj2AlQBpAfCPgkQBRgTCkhA");
	this.shape.setTransform(360.5,48.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("AjkAhQBaAVCIgZQB9gXBpgw");
	this.shape_1.setTransform(337.7,68.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,0,0,4).p("Ah3gGQAyANBFAAQBHAAAxgN");
	this.shape_2.setTransform(319.3,84.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,4).p("A4/qHQh7A8hUBXQhWBYgfBmQhHDkDVDLQCKCGEIBtQDZBaDpAwQBIAPC+AsQCfAlBcARQEcAzDggeQDcgdE/iIQDShZE1ijQDqh7EVjdQEDjRASg8QAThBhAgyQhKg7iPATQhnANiRAEQikAChUADQiYAFhvAnQhfAihVBEQg2AshhBlQhtBzhCA6QhPBEhSARQhVARhfgn");
	this.shape_3.setTransform(194.2,76.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#392723").s().p("AmgJnQhcgRifglQi+gshIgPQjpgwjZhaQkIhtiKiGQjVjLBHjkQAfhmBWhYQBUhXB7g8IaFKHQBfAnBVgRQBSgRBPhEQBCg6BthzQBhhlA2gsQBVhEBfgiQBvgnCYgFQBUgDCkgCQCRgEBngNQCPgTBKA7QBAAygTBBQgSA8kDDRQkVDdjqB7Qk1CjjSBZQk/CIjcAdQhUAMhZAAQicAAizghg");
	this.shape_4.setTransform(194.2,76.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,0,0,4).p("AJ+GtQg7gegqhaQgNgbg4igQgth8gvhIQhDhnhlg0QlCili7gVQgzgGhqABQhpABhMgJ");
	this.shape_5.setTransform(144.4,42.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#392723").s().p("ApvmiQBMAJBpgCQBqgBAzAHQC7AUFCCmQBlA0BDBnQAvBGAtB+QA4CgANAbQAfBCAoAig");
	this.shape_6.setTransform(142.8,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,390.5,143.5);


(lib.otterbackLegL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("ACNgJQAnAUARAeQATAkgGA5Qg1AKgWADQglAEgagOQBMArhBBtQg7BkiNBrQiRBsiIAtQiaAzhHg5QhnhTAiiRQAbh0B4ipQAvhCCvjVQB/icAbhBQARgoARg5QAQg0AJgTQAeg9BogoQBkglCQAFQCUAFBbAvQBkA0AzBbQAzBbgJBwQg2AHg0gTQgwgRgogkQAzAxgEAlQgEAhgqALQgpAKgqgUQgGgDgFgDQgmgWgOgrQAVAVAdApQABABABACQAQAXAdAqQg7AYg5gBQgiAAgcgJQAgAUANAaQASAlgbAgQgaAeg0AGQgwAFgxgUQgJgEgJgFAH3lUIADACAEYiRQgagIgVgP");
	this.shape.setTransform(70.2,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#392723").s().p("ApvKDQhnhTAiiRQAbh0B4ipQAvhCCvjVQB/icAbhBQARgoARg5QAQg0AJgTQAeg9BogoQBkglCQAFQCUAFBbAvQBkA0AzBbQAzBbgJBwQg2AHg0gTQgwgRgogkQAzAxgEAlQgEAhgqALQgpAKgqgUIgLgGIgCgDQgdgpgVgVQAOArAmAWIAtBBQg7AYg5gBQgiAAgcgJQgagIgVgPQAVAPAaAIQAgAUANAaQASAlgbAgQgaAeg0AGQgwAFgxgUQAnAUARAeQATAkgGA5Qg1AKgWADQglAEgagOQBMArhBBtQg7BkiNBrQiRBsiIAtQhJAYg2AAQg8AAgmgegACNgJIgSgJIASAJgAH6lSIgDgCgAFpkhQAVAVAdApIACADQgmgWgOgrg");
	this.shape_1.setTransform(70.2,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,142.4,136.7);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#915E28").s().p("EgWkApAQntjCikmzQgohpgpjaQgnjggPg+Qgdh7gMjuQgOkHAuAfIhCidQgxg/gukdQgnj2AAh7QAAhOBDkKIBDj6IDSmWQgIBcCNkVQCyleAggoQA1hBCIhOQCPhSAMgMQANgOAig+QAnhIAbgmQA/hXBIgYQB1gnBNghQBdgoA/gsQApgdC/hOQC5hMC+hDQEHheA3AAQA0AABSAGQBRADBjgJQBDgHDdgsQCzgkApAJQAkAHAbASQAhAVA1AQQA9ASCCAMQCRAMAXAFQAmAICKAOQB+ASAbAmQA6BRC3FKQDWF/AmCDQAhBugVBsQgOBFgCAQQgGAxAKAzQAQBTBQBbQApAwANASQAZAlAFAkQAGAsgMDfQgLDTARBFQAYBlhOEpQhUE+h0C8QhbCSiyF1Qi1F7gsBHQg2BYihCvQjPDhjrDBQqrIwpZAoQiWAKiLAAQoWAAl1iTg");
	this.shape.setTransform(249.7,282.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.1,489.4,554.3);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E260E").s().p("EgX2ApAQnujCikmzQgohpgpjaQgmjggPg+Qgeh7gMjuQgNkHAuAfQAUANAICdQAQE7ADAkQArIRC8CoQDcDFEXCNQDzB7DHAnQDpAuDBAHQEUAKDwg/QCFgjDChcQDBhaDFh3QHIkTCMjKQFnoGCqkaQGNqUBMmNQAki9gloxQgioGgoiaQgjiIiak1QiflChkh7QhVhplJgsQhDgJjBgSQiUgOg8gNQinglnlBBQlYAvjFA8IiQA4QA6gdBWgbQBOgdBQgcQEIheA1AAQA1AABSAGQBRADBigJQBDgHDdgsQCzgkApAJQAlAHAbASQAgAVA2AQQA8ASCDAMQCQAMAYAFQAlAICKAOQB+ASAcAmQA5BRC4FKQDVF/AnCDQAhBugWBsQgOBFgBAQQgGAxAKAzQAQBTBPBbQAqAwAMASQAZAlAFAkQAGAsgLDfQgLDTAQBFQAZBlhPEpQhUE+h0C8QhaCSizF1Qi1F7grBHQg2BYiiCvQjODhjsDBQqrIwpYAoQiWAKiLAAQoWAAl1iTgEgiIgQ5QAFg7CKioIAegjQCOkVAdgkQA0hBCJhOQCPhSAMgMQANgOAig+QAmhIAcgmQA/hXBIgYQB1gnBNghQBdgoA/gsQAogdC/hOIBKgeIgBABQoWERooIJQjEC5iHCgIgoBNQhqDQgWAAQgHAAACgXg");
	this.shape.setTransform(241.4,282.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.1,472.9,554.3);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA8A38").s().p("EgLsAmmIlogjQk1gdkojJQhihDhyhjQhyhlgrgkQB6AyDoBhQDJBTCJAtQF1B+EsgMQFwgPF2jWQGkjuHkoCQLPr5CSsZQAwkFgPkHQgFhRgMhiIgOhzQgNjIhZk6QhnlphphyQhJhOjBg8Qi4g6j3gbQj6gbj0ANQkGANjBA4QmFBxpKFMQj2CMjHCGIjKCiQiYB6AgggQBghiDSiPIAQgLIDGidQKQoFDPhbQCLg9EYg7QFRhHFHgOQGXgSEwBOQFsBdC7DfQDEDqAwKcQATD+gIEIQgIDqgXCOQg9F7ieGOQiSFxiPCxQgfAniUDCQiPC8hiB4QlDGNi4BxQoZFMm/A2QhpANh2AAQhLAAhRgFg");
	this.shape.setTransform(213.4,252.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,416.8,495.1);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A46F29").s().p("EgQwAjcQhxgZhihBQhMgzh2hyIj7jyQj9jqgDloQgBhwAYhvIAZhZIgHBXQgHBpADBdQAHEpBeA7QAoAZBrBjQCIB+BCA2QEYDmDBgTQFqgkE4iHQHxjYGbnUQEblCC3k+QEsoJCWqOQAYhrgVjNQgUjFg2jaQg6jkhLirQhTi9hVhJQitiSnSAfQm6AemEChQmsCxpHHMQkkDmjODCQAsg8BWhhQCrjBDRi1QKbpCMWjsQDGg7HJAXQF2ATDSAsQCIAdCEBvQBiBTBJBqQAxBIAzCOQBMDUAaD5QBQLkl0M3QjOHJliGHQkyFRmJEHQlSDhlXCHQkzB5jKAJQgrACgmAAQiBAAhcgVg");
	this.shape.setTransform(203.5,233.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,397.1,457.8);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA8A38").s().p("AvLdNQiZgShpipIhKiFQgphJgfgcQhBg7AahgQAIgeARgeIAOgYQAmCBByB2QB/CEB9AAQB2AADghZQCbg+CvhbQBug5DXkaQCkjUCYjuQB7jACSnIQCdnuAQk1QAQkoiokOQhEhthWhVQhPhNhIgmQhwg6sdIqQmQEVl5EgQD2jdELjsQIYnWBuhDQBBgoC7grQC5gqDVgZQDlgbCiAHQC5AHAxAxQA+A/BBBsQBPCFA2CfQCOGphYHXQhcHmmZJcQimD0i/DeQiuDKiVCDQkDDkl3B+QkLBYi/AAQguAAgpgFg");
	this.shape.setTransform(147.3,192.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,284.6,375);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E260E").s().p("AncWJQgpgEirgtQgxgMgOgiQgKgXADgyQADg1gCgYQALANAMALQBoBeDLg1QDIg1B3i9QAegxA6h0QAzhrAkg0QBZiCB2ldQBakHA+j3QAsiyhNk9QgiiMgvhrQgzhygzgsQhYhLm1FRQhsBThnBVQBghSBlhUQGtlhBugVQBYgQCXg9QB3gmA1A8QBABJA6EdQA4EVAADcQAACmiEFLIhyEUQhBCjghBxQhFDwkREnQhpBxhsBeQhkBVg8AfQhOAphaAAQgYAAgYgDgAsSRmIgMgjQAiAdAHAvIAAAFQgRgVgMgZg");
	this.shape.setTransform(85,147.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5.2,160,284.2);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E260E").s().p("AkJSYQgOg2gKgLQgKgMhGgKQg7gIgUg7QgKglgIgUQgOgkgYgdQgxg6gukJQgnjkAAh0QAAhJBDj0IBDjpQBqifFTlFQDfjZDFiqQAxgqAcABQAaAAAVAlQAKAUAeBOQAgBSAdA4QBDCCgRE3QgJCwgpFTQgVDUjrHPQhfC7hZCPQhaCQgnAbQhMA3hcAAQhbAAgXg3g");
	this.shape.setTransform(69,128.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,128,246.2);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BA8A38").s().p("AjLRQQgLgzgHgKQgIgLg2gKQgtgHgPg4QgXhVgUgdQgmg2gjj5QgejXAAhtQAAhEAzjlIA0jaQBRiWEEkxQCtjOCVidQAlgoAWABQAUABAQAiQAIATAXBJQAYBNAWA1QAzB6gMEkQgEBkgOCXIgVDoQgQDHi0GzQhJCvhECGQhFCIgeAZQg6AzhGAAQhGAAgSgzg");
	this.shape.setTransform(54.1,120.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,5,98.2,231.1);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#8F9194","#6E6F72","#5A5B5D","#57585A","#4E4E50","#434345"],[0,0.396,0.686,0.824,0.929,1],-5.4,-1.8,0,-5.4,-1.8,244.1).s().p("EgV5ApYQn8ibixmbQgqhjgvjRQgtjWgQg8Qghh0gSjnQgUj+AwAbIhHiUQg1g7g7jkQg2jRgChpQgChMA/kEIA/j3IDNm+QgGBbCJkEQCylSAbgjQAug6BOh3QBEhoAWgYQAHgHBpgrQBkgqAfgrQA9hZBKgcQAwgTAWgrQAPgeAGg5QAJhMADgOQALgvAdgVQAYgSDkg1QEGg9CIg3QELhsA5gEQBFgFChgXIEVgrQBDgKDhg6QC2gvAqAGQAlAFAcAPQAhASA4AMQA9AOCGACQCTADAZADQAmAFCNAEQCBAJAdAkQA9BLDCEzQDiFmArB7QAkBpgUBqQgMBEgCAPQgEAxALAxQASBPBTBTQAsArAMARQAbAiAGAjQAHAqgHDaQgGDMASBCQAbBhhJEnQhOE3hzC+QhYCUiuF2QiwF6grBIQg1BaigC0QjODojsDLQqrJMpkBOQkhAmj6AAQmGAAkmhbg");
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


(lib.Ottermussel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.shelltop();
	this.instance.parent = this;
	this.instance.setTransform(-90,-15.9,1,1,0,0,0,-1.4,95.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// bottom
	this.instance_1 = new lib.Path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-11,0.342,0.342,0,0,0,255,278.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,0.149)",4,4,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.6,-117.6,197.2,217.1);


(lib.Otter_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// otter-FrontPaw-R
	this.instance = new lib.otterFrontPawR("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(141.2,248.2,1,1,0,0,0,31.7,136.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:61.7,regY:71.4,rotation:-1,x:170,y:182.8},0).wait(1).to({rotation:-2,x:168.9,y:182.3},0).wait(1).to({rotation:-3,x:167.7,y:181.8},0).wait(1).to({rotation:-4,x:166.6,y:181.4},0).wait(1).to({rotation:-5,x:165.4,y:181},0).wait(1).to({rotation:-6,x:164.2,y:180.6},0).wait(1).to({rotation:-7,x:163,y:180.2},0).wait(1).to({rotation:-8,x:161.9,y:179.8},0).wait(1).to({rotation:-9,x:160.6,y:179.4},0).wait(1).to({rotation:-6.2,x:164,y:180.5},0).wait(1).to({rotation:-3.3,x:167.3,y:181.7},0).wait(1).to({rotation:-0.5,x:170.6,y:183.1},0).wait(1).to({rotation:2.3,x:173.8,y:184.6},0).wait(1).to({rotation:5.2,x:176.9,y:186.3},0).wait(1).to({rotation:3.9,x:175.4,y:185.5},0).wait(1).to({rotation:2.6,x:174.1,y:184.8},0).wait(1).to({rotation:1.3,x:172.6,y:184.1},0).wait(1).to({rotation:0,x:171.2,y:183.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// mussel
	this.instance_1 = new lib.Ottermussel("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(233.6,121.1,0.566,0.566,0,0,0,-0.1,-20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-0.9,regY:-13.8,rotation:-2.2,x:231.4,y:123.5},0).wait(1).to({rotation:-4.3,x:229.7,y:122.3},0).wait(1).to({rotation:-6.5,x:228,y:121.1},0).wait(1).to({rotation:-8.6,x:226.3,y:120},0).wait(1).to({rotation:-10.8,x:224.6,y:118.7},0).wait(1).to({rotation:-13,x:222.9,y:117.5},0).wait(1).to({rotation:-15.1,x:221.2,y:116.3},0).wait(1).to({rotation:-17.3,x:219.5,y:115.1},0).wait(1).to({rotation:-19.5,x:217.8,y:113.9},0).wait(1).to({rotation:-12.7,x:219.4,y:116.8},0).wait(1).to({rotation:-5.9,x:221,y:119.7},0).wait(1).to({rotation:0.9,x:222.6,y:122.5},0).wait(1).to({rotation:7.6,x:224.2,y:125.3},0).wait(1).to({rotation:14.4,x:225.8,y:128},0).wait(1).to({rotation:10.8,x:227.6,y:127.2},0).wait(1).to({rotation:7.2,x:229.5,y:126.4},0).wait(1).to({rotation:3.6,x:231.3,y:125.5},0).wait(1).to({rotation:0,x:233.1,y:124.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// otter-frontPaw-L
	this.instance_2 = new lib.otterfrontPawL("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(298.8,112,1,1,0,0,0,68,59);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:38.7,regY:32.4,rotation:-1.8,x:268.7,y:86.3},0).wait(1).to({rotation:-3.6,x:267.9,y:87.2},0).wait(1).to({rotation:-5.4,x:267.1,y:88.2},0).wait(1).to({rotation:-7.2,x:266.4,y:89.2},0).wait(1).to({rotation:-9,x:265.7,y:90.3},0).wait(1).to({rotation:-10.8,x:265,y:91.3},0).wait(1).to({rotation:-12.6,x:264.4,y:92.4},0).wait(1).to({rotation:-14.4,x:263.8,y:93.5},0).wait(1).to({rotation:-16.2,x:263.2,y:94.6},0).wait(1).to({rotation:-12.4,x:264.4,y:92.3},0).wait(1).to({rotation:-8.7,x:265.8,y:90.1},0).wait(1).to({rotation:-4.9,x:267.3,y:88},0).wait(1).to({rotation:-1.1,x:269,y:85.9},0).wait(1).to({rotation:2.6,x:270.7,y:84},0).wait(1).to({rotation:2,x:270.5,y:84.4},0).wait(1).to({rotation:1.3,x:270.1,y:84.7},0).wait(1).to({rotation:0.7,x:269.8,y:85},0).wait(1).to({rotation:0,x:269.5,y:85.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// otter-backLeg-R
	this.instance_3 = new lib.otterbackLegR("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(468.6,341.3,1,1,0,0,0,32.3,20.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:194.2,regY:70.8,scaleX:0.99,rotation:0.7,x:628.3,y:393.3},0).wait(1).to({scaleX:0.98,rotation:1.5,x:626.1,y:395.3},0).wait(1).to({scaleX:0.98,rotation:2.2,x:623.9,y:397.4},0).wait(1).to({scaleX:0.97,rotation:3,x:621.6,y:399.3},0).wait(1).to({scaleX:0.96,rotation:3.7,x:619.3,y:401.2},0).wait(1).to({scaleX:0.95,rotation:4.5,x:617.1,y:403.1},0).wait(1).to({scaleX:0.95,rotation:5.2,x:614.8,y:404.9},0).wait(1).to({scaleX:0.94,rotation:5.9,x:612.4,y:406.7},0).wait(1).to({scaleX:0.93,rotation:6.7,x:610.1,y:408.4},0).wait(1).to({scaleX:0.95,rotation:6.4,x:614,y:408.2},0).wait(1).to({scaleX:0.97,rotation:6.2,x:617.9,y:407.8},0).wait(1).to({scaleX:0.99,rotation:6,x:621.9,y:407.6},0).wait(1).to({scaleX:1.01,rotation:5.7,x:625.8,y:407.2},0).wait(1).to({scaleX:1.02,rotation:5.5,x:629.8,y:406.9},0).wait(1).to({scaleX:1.02,rotation:4.1,x:630,y:402.9},0).wait(1).to({scaleX:1.01,rotation:2.7,x:630.3,y:399},0).wait(1).to({scaleX:1.01,rotation:1.4,x:630.4,y:395.1},0).wait(1).to({scaleX:1,rotation:0,x:630.5,y:391.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// otter-head
	this.instance_4 = new lib.otterhead("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(126,77.4,1,1,0,0,0,93.2,81.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,4).p("AjdgIQB+g6B1ANQCDAOBDBh");
	this.shape.setTransform(113.7,158.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#392723").s().p("AjcgJQB/g6B0ANQCDAOBDBhg");
	this.shape_1.setTransform(113.6,158.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(45));

	// Layer 14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8B38C").s().p("EAmUAc+Qh5hchZiXQgagshqjgQhNihhKhTQhoh0ifgyQlYhth0gfQj5hDjggYQjFgVlUgCQmWgDiHgHQkvgRjgg7QkThJjYiVQh9hXjWi8QjhjFhwhRQhEgxh3hNIi/h9QjgiYh4iNQiaiug9hJQhmh5gfhLQglhdArhMQAvhSCZhTIISlxQAmAIAaAvQAcAzAiANQC8BIDMC8QA4A0BvBpQBjBcBSA6QBrBMCuA/QB/AuDdA5IF9BkQDeA+CfBCQHAC6IZC2QGbCLJRCzQDVA+DRCFQDSCFCoCzQCwC7BkDPQBtDdAIDbQAHCthWCEQhIBuiABGQhsA6hyAPQghAEgbAAQg5AAgagTg");
	this.shape_2.setTransform(416.9,246.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(45));

	// otter-backLeg-L
	this.instance_5 = new lib.otterbackLegL("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(723.2,374.7,1,1,0,0,0,12.2,131.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:70.2,regY:67.3,rotation:1,x:782.3,y:311.5},0).wait(1).to({rotation:1.9,x:783.3,y:312.5},0).wait(1).to({rotation:2.9,x:784.3,y:313.4},0).wait(1).to({rotation:3.8,x:785.3,y:314.4},0).wait(1).to({rotation:4.8,x:786.3,y:315.3},0).wait(1).to({rotation:5.7,x:787.3,y:316.3},0).wait(1).to({rotation:6.7,x:788.2,y:317.3},0).wait(1).to({rotation:7.6,x:789.2,y:318.3},0).wait(1).to({rotation:8.6,x:790.1,y:319.3},0).wait(1).to({rotation:6.6,x:788.2,y:317},0).wait(1).to({rotation:4.7,x:786.2,y:314.7},0).wait(1).to({rotation:2.7,x:784.2,y:312.5},0).wait(1).to({rotation:0.8,x:782.1,y:310.4},0).wait(1).to({rotation:-1.2,x:779.9,y:308.4},0).wait(1).to({rotation:0.8,x:782.1,y:310.4},0).wait(1).to({rotation:2.7,x:784.2,y:312.5},0).wait(1).to({rotation:4.7,x:786.2,y:314.7},0).wait(1).to({rotation:6.6,x:788.2,y:317},0).wait(1).to({rotation:8.6,x:790.1,y:319.3},0).wait(1).to({rotation:7.2,x:788.8,y:317.6},0).wait(1).to({rotation:5.8,x:787.4,y:316},0).wait(1).to({rotation:4.4,x:785.9,y:314.4},0).wait(1).to({rotation:3,x:784.5,y:312.9},0).wait(1).to({rotation:1.6,x:783,y:311.3},0).wait(1).to({rotation:0.2,x:781.5,y:309.9},0).wait(1).to({rotation:-1.2,x:779.9,y:308.4},0).wait(1).to({rotation:0.1,x:781.3,y:309.6},0).wait(1).to({rotation:1.3,x:782.6,y:311},0).wait(1).to({rotation:2.5,x:783.9,y:312.3},0).wait(1).to({rotation:3.7,x:785.2,y:313.6},0).wait(1).to({rotation:4.9,x:786.5,y:315},0).wait(1).to({rotation:6.2,x:787.8,y:316.4},0).wait(1).to({rotation:7.4,x:788.9,y:317.9},0).wait(1).to({rotation:8.6,x:790.1,y:319.3},0).wait(1).to({rotation:7.7,x:789.3,y:318.4},0).wait(1).to({rotation:6.9,x:788.5,y:317.5},0).wait(1).to({rotation:6,x:787.6,y:316.6},0).wait(1).to({rotation:5.2,x:786.7,y:315.7},0).wait(1).to({rotation:4.3,x:785.8,y:314.8},0).wait(1).to({rotation:3.4,x:784.9,y:314},0).wait(1).to({rotation:2.6,x:784,y:313.1},0).wait(1).to({rotation:1.7,x:783.1,y:312.3},0).wait(1).to({rotation:0.9,x:782.2,y:311.5},0).wait(1).to({rotation:0,x:781.2,y:310.7},0).wait(1));

	// Layer 16
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,0,0,4).p("ArMgfQiNiVgxhXQhcikBThvQBBhWCwgNQCFgLCJAeQDdAwDsCiQCKBeEKDRQCEBgCzEHQC7EVAAB7");
	this.shape_3.setTransform(665.2,282.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#392723").s().p("ArMghQiNiWgxhXQhcikBThvQBBhVCwgOQCFgKCJAdQDdAwDsCjQCKBeEKDRQCEBfCzEHQC7EVAAB8g");
	this.shape_4.setTransform(665.2,282.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(45));

	// Layer 17
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#392723").s().p("EAh1AgPQqUhboQi7QiJgxkIhrQjxhhiIguQhxgli0gTQjcgRh4gMQjVgUijgpQjXg1i9hlQmGjPj6jZQi/iliMjMQgrg+hAhoQhDhvgegtQh0iqiRhtQiXhyhliGQhPhphHiWQhNixgshfQhOiohYiDIAUmuQDwhpCAgyQHdi4FcgTQHbgaD4ETQDUDqC+CBQCTBkCqA7QBhAhC7A1QCmA3CHBbQCIBeCqAlQA9AOBYALICVASQC5AYCBA2QC2BLCtCjQB2BwEtBgQB7AnHQB2QF5BgC2BMQEJBtBKCPQB+D1AgBFQBHCfAWB6QAaCRghCQQgjCdhsC3QjbFzjRCNQi7B9j5AAQhIAAhOgKg");
	this.shape_5.setTransform(392.5,254.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(45));

	// Otter-tai.
	this.instance_6 = new lib.Ottertai("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(690.1,402.2,1,1,0,0,0,60.6,24.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:68.6,regY:148.3,scaleY:1,skewX:1.7,skewY:0.9,x:694.2,y:526.4},0).wait(1).to({skewX:3.4,skewY:1.9,x:690.2,y:526.5},0).wait(1).to({scaleY:1,skewX:5.1,skewY:2.8,x:686.3},0).wait(1).to({skewX:6.7,skewY:3.7,x:682.4,y:526.4},0).wait(1).to({scaleY:1,skewX:8.4,skewY:4.6,x:678.5,y:526.1},0).wait(1).to({skewX:10.1,skewY:5.6,x:674.6,y:525.8},0).wait(1).to({scaleY:1,skewX:11.8,skewY:6.5,x:670.8,y:525.4},0).wait(1).to({scaleY:1.01,skewX:9.1,skewY:5,x:676.3,y:526.5},0).wait(1).to({scaleY:1.01,skewX:6.3,skewY:3.6,x:681.9,y:527.4},0).wait(1).to({scaleY:1.01,skewX:3.6,skewY:2.1,x:687.6,y:527.9},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:0.9,skewY:0.7,x:693.3,y:528.2},0).wait(1).to({scaleY:1.01,skewX:-1.9,skewY:-0.8,x:699.1},0).wait(1).to({scaleY:1.01,skewX:-4.6,skewY:-2.2,x:704.8,y:527.9},0).wait(1).to({scaleY:1.02,skewX:-7.4,skewY:-3.7,x:710.5,y:527.4},0).wait(1).to({scaleY:1.02,skewX:-10.1,skewY:-5.1,x:716.2,y:526.6},0).wait(1).to({scaleY:1.02,skewX:-12.8,skewY:-6.5,x:721.9,y:525.4},0).wait(1).to({scaleY:1.02,skewX:-15.6,skewY:-8,x:727.5,y:524},0).wait(1).to({scaleY:1.02,skewX:-18.3,skewY:-9.4,x:733,y:522.3},0).wait(1).to({scaleY:1.02,skewX:-21,skewY:-10.9,x:738.6,y:520.3},0).wait(1).to({scaleY:1.03,skewX:-23.8,skewY:-12.3,x:744,y:518.1},0).wait(1).to({scaleY:1.03,skewX:-26.5,skewY:-13.8,x:749.2,y:515.5},0).wait(1).to({scaleY:1.03,skewX:-29.2,skewY:-15.2,x:754.4,y:512.7},0).wait(1).to({skewX:-26.5,skewY:-14.5,x:748.9,y:515.7},0).wait(1).to({skewX:-23.8,skewY:-13.7,x:743.3,y:518.4},0).wait(1).to({scaleY:1.03,skewX:-21.2,skewY:-12.9,x:737.4,y:520.9},0).wait(1).to({skewX:-18.5,skewY:-12.1,x:731.6,y:523},0).wait(1).to({skewX:-15.8,skewY:-11.3,x:725.6,y:525},0).wait(1).to({skewX:-13.1,skewY:-10.5,x:719.5,y:526.6},0).wait(1).to({skewX:-10.4,skewY:-9.7,x:713.4,y:528},0).wait(1).to({skewX:-7.7,skewY:-9,x:707.2,y:529.1},0).wait(1).to({skewX:-5,skewY:-8.2,x:701,y:529.9},0).wait(1).to({skewX:-2.3,skewY:-7.4,x:694.8,y:530.5},0).wait(1).to({skewX:0.4,skewY:-6.6,x:688.5,y:530.7},0).wait(1).to({skewX:3.1,skewY:-5.8,x:682.2},0).wait(1).to({skewX:5.8,skewY:-5,x:676,y:530.4},0).wait(1).to({skewX:8.4,skewY:-4.2,x:669.8,y:529.9},0).wait(1).to({scaleY:1.03,skewX:7.4,skewY:-3.7,x:673.4,y:529.6},0).wait(1).to({scaleY:1.02,skewX:6.3,skewY:-3.2,x:677,y:529.2},0).wait(1).to({scaleY:1.02,skewX:5.3,skewY:-2.7,x:680.5,y:528.8},0).wait(1).to({scaleY:1.01,skewX:4.2,skewY:-2.1,x:684,y:528.4},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:3.2,skewY:-1.6,x:687.6,y:527.9},0).wait(1).to({scaleY:1.01,skewX:2.1,skewY:-1.1,x:691.1,y:527.4},0).wait(1).to({scaleY:1,skewX:1.1,skewY:-0.5,x:694.6,y:526.8},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:698.1,y:526.3},0).wait(1));

	// Layer 4
	this.instance_7 = new lib.otterWaterDip("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(404.4,296.5,7.755,3.221,15.1,0,0,-0.1,0.1);
	this.instance_7.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13.3,-4.3,839.1,678.9);


// stage content:
(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// otter
	this.instance = new lib.Otter_mc("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(970.4,994.6,0.428,0.428,6.3,0,0,430.6,277.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:405.3,regY:296.4,x:950,y:992.4,startPosition:1},0).wait(1).to({rotation:6.1,x:941.2,y:983.6,startPosition:2},0).wait(1).to({rotation:5.9,x:932.4,y:974.8,startPosition:3},0).wait(1).to({rotation:5.7,x:923.6,y:966,startPosition:4},0).wait(1).to({rotation:5.5,x:914.8,y:957.2,startPosition:5},0).wait(1).to({rotation:5.3,x:906.1,y:948.4,startPosition:6},0).wait(1).to({rotation:5.1,x:897.3,y:939.6,startPosition:7},0).wait(1).to({rotation:4.8,x:888.5,y:930.7,startPosition:8},0).wait(1).to({rotation:4.6,x:879.8,y:922,startPosition:9},0).wait(1).to({rotation:4.4,x:871,y:913.1,startPosition:10},0).wait(1).to({rotation:4.2,x:862.2,y:904.3,startPosition:11},0).wait(1).to({rotation:4,x:853.4,y:895.5,startPosition:12},0).wait(1).to({rotation:3.8,x:844.7,y:886.7,startPosition:13},0).wait(1).to({rotation:3.6,x:835.9,y:877.9,startPosition:14},0).wait(1).to({rotation:3.4,x:827.1,y:869.1,startPosition:15},0).wait(1).to({rotation:3.2,x:818.3,y:860.3,startPosition:16},0).wait(1).to({rotation:3,x:809.6,y:851.5,startPosition:17},0).wait(1).to({rotation:2.8,x:800.7,y:842.6,startPosition:18},0).wait(1).to({rotation:2.6,x:792,y:833.9,startPosition:19},0).wait(1).to({rotation:2.4,x:783.2,y:825,startPosition:20},0).wait(1).to({rotation:2.2,x:774.4,y:816.2,startPosition:21},0).wait(1).to({rotation:2,x:765.6,y:807.5,startPosition:22},0).wait(1).to({rotation:1.8,x:756.9,y:798.6,startPosition:23},0).wait(1).to({rotation:1.6,x:748.1,y:789.8,startPosition:24},0).wait(1).to({rotation:1.4,x:739.4,y:781,startPosition:25},0).wait(1).to({rotation:1.2,x:730.6,y:772.2,startPosition:26},0).wait(1).to({rotation:1,x:721.8,y:763.4,startPosition:27},0).wait(1).to({rotation:0.7,x:713,y:754.6,startPosition:28},0).wait(1).to({rotation:0.5,x:704.2,y:745.8,startPosition:29},0).wait(1).to({rotation:0.3,x:695.5,y:736.9,startPosition:30},0).wait(1).to({rotation:0.1,x:686.7,y:728.1,startPosition:31},0).wait(1).to({rotation:-0.1,x:677.9,y:719.3,startPosition:32},0).wait(1).to({rotation:-0.3,x:669.1,y:710.5,startPosition:33},0).wait(1).to({rotation:-0.5,x:660.4,y:701.7,startPosition:34},0).wait(1).to({rotation:-0.7,x:651.6,y:692.9,startPosition:35},0).wait(1).to({rotation:-0.9,x:642.8,y:684.1,startPosition:36},0).wait(1).to({rotation:-1.1,x:634.1,y:675.3,startPosition:37},0).wait(1).to({rotation:-1.3,x:625.3,y:666.5,startPosition:38},0).wait(1).to({rotation:-1.5,x:616.5,y:657.7,startPosition:39},0).wait(1).to({rotation:-1.7,x:607.8,y:648.8,startPosition:40},0).wait(1).to({rotation:-1.9,x:599,y:640.1,startPosition:41},0).wait(1).to({rotation:-2.1,x:590.2,y:631.3,startPosition:42},0).wait(1).to({x:584,y:629.3,startPosition:43},0).wait(1).to({rotation:-2,x:577.8,y:627.3,startPosition:44},0).wait(1).to({x:571.6,y:625.3,startPosition:0},0).wait(1).to({x:565.5,y:623.3,startPosition:1},0).wait(1).to({rotation:-1.9,x:559.4,y:621.3,startPosition:2},0).wait(1).to({x:553.2,y:619.4,startPosition:3},0).wait(1).to({rotation:-1.8,x:547,y:617.4,startPosition:4},0).wait(1).to({x:540.8,y:615.4,startPosition:5},0).wait(1).to({rotation:-1.7,x:534.6,y:613.4,startPosition:6},0).wait(1).to({x:528.5,y:611.4,startPosition:7},0).wait(1).to({x:522.3,y:609.4,startPosition:8},0).wait(1).to({rotation:-1.6,x:516.1,y:607.5,startPosition:9},0).wait(1).to({x:509.9,y:605.5,startPosition:10},0).wait(1).to({rotation:-1.5,x:503.7,y:603.5,startPosition:11},0).wait(1).to({x:497.5,y:601.5,startPosition:12},0).wait(1).to({x:491.3,y:599.5,startPosition:13},0).wait(1).to({rotation:-1.4,x:485.2,y:597.6,startPosition:14},0).wait(1).to({x:479,y:595.6,startPosition:15},0).wait(1).to({rotation:-1.3,x:472.9,y:593.6,startPosition:16},0).wait(1).to({x:466.7,y:591.6,startPosition:17},0).wait(1).to({x:460.5,y:589.6,startPosition:18},0).wait(1).to({rotation:-1.2,x:454.4,y:587.7,startPosition:19},0).wait(1).to({x:448.2,y:585.7,startPosition:20},0).wait(1).to({rotation:-1.1,x:442,y:583.7,startPosition:21},0).wait(1).to({x:435.8,y:581.7,startPosition:22},0).wait(1).to({rotation:-1,x:429.6,y:579.7,startPosition:23},0).wait(1).to({x:423.4,y:577.7,startPosition:24},0).wait(1).to({x:417.3,y:575.8,startPosition:25},0).wait(1).to({rotation:-0.9,x:411.1,y:573.8,startPosition:26},0).wait(1).to({x:404.9,y:571.8,startPosition:27},0).wait(1).to({rotation:-0.8,x:398.7,y:569.8,startPosition:28},0).wait(1).to({x:392.5,y:567.8,startPosition:29},0).wait(1).to({x:386.3,y:565.8,startPosition:30},0).wait(1).to({rotation:-0.7,x:380.2,y:563.9,startPosition:31},0).wait(1).to({x:374,y:561.9,startPosition:32},0).wait(1).to({rotation:-0.6,x:367.8,y:559.9,startPosition:33},0).wait(1).to({x:361.6,y:558,startPosition:34},0).wait(1).to({rotation:-0.5,x:355.5,y:555.9,startPosition:35},0).wait(1).to({x:349.3,y:554,startPosition:36},0).wait(1).to({x:343.1,y:552,startPosition:37},0).wait(1).to({rotation:-0.4,x:337,y:550,startPosition:38},0).wait(1).to({x:330.8,y:548,startPosition:39},0).wait(1).to({rotation:-0.3,x:324.6,y:546.1,startPosition:40},0).wait(1).to({x:318.4,y:544.1,startPosition:41},0).wait(1).to({x:312.2,y:542.1,startPosition:42},0).wait(1).to({rotation:-0.2,x:306,y:540.1,startPosition:43},0).wait(1).to({x:299.9,y:538.1,startPosition:44},0).wait(1).to({rotation:-0.1,x:293.7,y:536.1,startPosition:0},0).wait(1).to({x:287.5,y:534.2,startPosition:1},0).wait(1).to({rotation:0,x:281.3,y:532.2,startPosition:2},0).wait(1).to({x:275.1,y:530.2,startPosition:3},0).wait(1).to({x:269,y:528.2,startPosition:4},0).wait(1).to({rotation:0.1,x:262.8,y:526.2,startPosition:5},0).wait(1).to({x:256.6,y:524.2,startPosition:6},0).wait(1).to({rotation:0.2,x:250.5,y:522.3,startPosition:7},0).wait(1).to({x:244.3,y:520.3,startPosition:8},0).wait(1).to({rotation:-0.3,x:227,y:509.7,startPosition:9},0).wait(1).to({rotation:-0.8,x:209.7,y:499.3,startPosition:10},0).wait(1).to({rotation:-1.3,x:192.4,y:488.7,startPosition:11},0).wait(1).to({rotation:-1.8,x:175.2,y:478.2,startPosition:12},0).wait(1).to({rotation:-2.3,x:157.9,y:467.6,startPosition:13},0).wait(1).to({rotation:-2.9,x:140.5,y:457.1,startPosition:14},0).wait(1).to({rotation:-3.4,x:123.3,y:446.6,startPosition:15},0).wait(1).to({rotation:-3.9,x:106,y:436,startPosition:16},0).wait(1).to({rotation:-4.4,x:88.7,y:425.5,startPosition:17},0).wait(1).to({rotation:-4.9,x:71.4,y:414.9,startPosition:18},0).wait(1).to({rotation:-5.4,x:54.1,y:404.4,startPosition:19},0).wait(1).to({rotation:-5.9,x:36.8,y:393.9,startPosition:20},0).wait(1).to({rotation:-6.4,x:19.6,y:383.3,startPosition:21},0).wait(1).to({rotation:-6.9,x:2.3,y:372.7,startPosition:22},0).wait(1).to({rotation:-7.4,x:-15.1,y:362.2,startPosition:23},0).wait(1).to({rotation:-7.9,x:-32.3,y:351.7,startPosition:24},0).wait(1).to({rotation:-8.5,x:-49.6,y:341.2,startPosition:25},0).wait(1).to({rotation:-9,x:-66.9,y:330.6,startPosition:26},0).wait(1).to({rotation:-9.5,x:-84.1,y:320.1,startPosition:27},0).wait(1).to({rotation:-10,x:-101.4,y:309.5,startPosition:28},0).wait(1).to({rotation:-10.5,x:-118.7,y:298.9,startPosition:29},0).wait(1).to({rotation:-11,x:-136,y:288.4,startPosition:30},0).wait(1).to({rotation:-11.5,x:-153.3,y:277.8,startPosition:31},0).wait(1).to({rotation:-12,x:-170.6,y:267.3,startPosition:32},0).wait(1).to({rotation:-12.5,x:-187.8,y:256.7,startPosition:33},0).wait(1).to({rotation:-13,x:-205.1,y:246.2,startPosition:34},0).wait(1).to({rotation:-13.6,x:-222.4,y:235.6,startPosition:35},0).wait(1).to({rotation:-14.1,x:-239.7,y:225.1,startPosition:36},0).wait(1).to({rotation:-14.6,x:-256.9,y:214.5,startPosition:37},0).wait(1).to({rotation:-15.1,x:-274.2,y:203.9,startPosition:38},0).wait(1).to({rotation:-15.6,x:-291.5,y:193.4,startPosition:39},0).to({_off:true},1).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1179.9,1372.1,354.4,317.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;