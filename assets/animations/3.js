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
		{src:"assets/animations/images/WildCelery_PQ_atlas_.png", id:"WildCelery_PQ_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"WildCelery_PQ_atlas_", frames: [[0,0,3046,1050],[3048,260,10,10],[3048,272,10,10],[3048,284,10,10],[3048,296,10,10],[3048,308,10,10],[3048,320,10,10],[3048,148,54,54],[3048,204,54,54],[3048,0,72,72],[3048,74,72,72]]}
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
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch2 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch3 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch6 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch7_1 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.NewPatternSwatch8 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.USGS21IntricateSurface_1 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.USGS22GravelBeach_1 = function() {
	this.spriteSheet = ss["WildCelery_PQ_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.WildCelery = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7CD61").s().p("Ap8FtQApglA4ghIIPk7QABABDhiPQDsiUA3gnQA3gkAxgVQAogSBBgTQgrA3gdAdQgoAng2AkQg3AnjtCVQjkCOgBgCQm2EKhYAzQg5AigyATQgpAOhDARQAug1Aggbg");
	this.shape.setTransform(282.8,70.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7CD61").s().p("Aq6PmQAXhKBAhrIAyhPIBKhzQAzhWB3jQQB1jJBwiyQgEgCDyl0QD6l/BGhaQA9hXA+hEQApgtBWhRQgsBeglBCQgqBKg/BcQhGBbj5F8QjwFyAEADQhwCwh1DIQh0DNg2BbIhLB1IgyBMQhIBzgdAxQgvBQgZBOQgIheAchXg");
	this.shape_1.setTransform(345.2,164.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7CD61").s().p("Au8VUQAxh+A4h8QBPiwA1hxQB0jxBnizQCckaCdj1IBlieQB8i9B3ijQB8iuCmjIQB8iXBUhbQBnhwBchQQBJhBB5hYQhjB/g2BCQhPBfhjBtQhTBch7CUQijDGh7CsQh3Chh6C8IhlCcQgmA+g7BeQh1DBhgCvQhmCxhyDvIiFEfQhDCQg6BjQg3BehTBvQA6icAdhKg");
	this.shape_2.setTransform(358.8,118.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B7CD61").s().p("Ax6XjICekHIC2k3QCbkGB8jEQDBk3C7kRIB5ivQCTjVCLi0QCSjBDCjeQCSinBkhlQB2h6BthZQBShDCQhkQhsB7hPBVQhZBjh5B9QhnBqiLCfQjCDeiQC+QiKCziUDTIh3CuQi5EQjBE1Qh5DAidEJIi3E3QhgCehRBiQhTBkh1BjQBLhoBOiAg");
	this.shape_3.setTransform(360.3,75.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B7CD61").s().p("EgjeAgNQBJi/CZkBQBaibDwlHQEKlrEJlAQDqkaElkqQCSiVBhhcID6jqQExkaEfjmQHCl1K/n0QDfidDAh4QCNhYD2iNQjXCriMBqQiwCFjiCgQknDTiuCCQmHEikhDvQkbDkkyEZIj4DoQhhBciQCUQkjEojoEXQkFE8kLFrQjtFFhaCYQijEShOCcQheDBhHDeQAnjzBLjDg");
	this.shape_4.setTransform(376.8,-25.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B7CD61").s().p("AwgTWQAhhwBFiGQA2iNFtn4QB7iqB7ijQBuiOACABIBwiOQCIirCBiTQCIieCqi2QCGiQBPhOQBlhnBdhMQBDg3B8haQhWBvhABKQhLBXhoBqQhUBViACJQiqC2iGCcQiACRiHCqQhFBVgrA4QgBgChtCOQh6Cih8CqQlpH1gzCGQhQCagmBNQg0BngxBwQASiKAdhig");
	this.shape_5.setTransform(-500.2,-60.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7CD61").s().p("ArAV/QAdhwAuiGIBikbQBUjvBCi0QBBiyBPjHIBDihIBEiiQBXjHBSipQBZi2B7jTQBfikA+hdQBRh4BKhXQA+hHBmhgQhTCPgiA6Qg+BnhKBxQg9BbhfCjQh5DQhYC0QhTCohUDEQgqBhgaBAIhCCgQhPDGhACxQhBCxhVDxIhjEbQguCGgvBpQgmBShCB+QAbiOAWhVg");
	this.shape_6.setTransform(-425.2,-26.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B7CD61").s().p("A/PYCIB+huIEakBQA5gyENkBQExknCyiiQDTjBDzjQQB5hmBQhBIDLimQD8jIDlinQD4i1EvjDQD2ifCJhNQC7hrCahIQB/g7DEhKQjJB+hfA6QiXBdiyBnQiJBNjzCdQktDDj2CzQjjClj7DHIjKClQhQBBh5BmQjxDOjSDBQiwCgkyEnQkMECg8AzQiYCKiTBqQhpBIgmAVQhYAuhUAHQBPgXBLg6g");
	this.shape_7.setTransform(-169.2,-155.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7CD61").s().p("EghkAcCQBQiyCRjeQBWiMDpkhQEFlBEEkSQDjj4EUkFQCJiDBchSIDrjOQEdj3EOjMQEajZFnj2QEIi1C0hwQDWiICzhhQCOhNDihsQjRCSiCBYQioByjUCHQi7B2j/CvQlmD2kXDWQkNDMkcD0QjtDLAEACQhaBRiJCDQkSEDjhD2QkEESkCE9QjmEehVCJQiaDrhWCUQhfCmhaDGQA8jgBLimg");
	this.shape_8.setTransform(-67.2,-91.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B7CD61").s().p("A+gecQAcjGBfjuQAjhWA2hrQBIiMBWiFQCej5Erl8QDQkED6kSQB9iKBUhWIDXjbQEHkHD2jcQGgl8JFnEQDDiWCohwQB/hWDXiCQi0CciABpQiWB8jHCbQpSHRmOFrQj2DbkEEGIjWDZQgDgEjODjQj3EPjOEDQkoF3idD3QhUCDhGCIQg1BngiBUQheDqgtC3QgoCmgYDlQgQjsAYiqg");
	this.shape_9.setTransform(135.5,-7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B7CD61").s().p("A6wLpQBZhfCOhqQB/hzJ4lKQDShsDVhqQC6hcABACIC6hZQDmhrDMhXQDfhgEGhmQDbhXBvgnQCag4CHgjQBegZCtgjQiOBEhqAuQh3AziiA8QhvAnjaBWQkEBnjfBeQjMBYjkBpIi5BYQAAgDi5BdQjUBojSBuQp1FIh4BuQioB8hHA4QhoBThlBfQBTiDBUhZg");
	this.shape_10.setTransform(114.3,148.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7CD61").s().p("Ay5N6QAvhhBThzQA2hPB/iSQCViuCPiLQB/h+CYiLIB7hyIB/hwQCbiHCShsQCch1DKh2QCfhcBhgrQB+g7BqgeQBXgZCEgVIjHBjQhxA4hpAyQhiAsiYBZQjHB0iYByQiQBpiZCGIh8BuIh8BzQiXCLh+B8QiMCJiUCqQh7CPg2BOIiQDDQhIBig5BTQAmh8AqhWg");
	this.shape_11.setTransform(91.3,86.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B7CD61").s().p("AyWRzQA8hoBYh3QBIhiB3iTQCgjFCMiaQCBiQCciiICAiAICAiAQCgidCOiEQD4joFEkdQBvhiBfhGQBLg5B8hQQhhBxhABCQhTBXhtBhQleE3jcDNQiQCFidCaIiACAIh/B/QiaCgiACQQiLCZieDDQh4CThHBgQhXB1hLBcQg6BFhkBxQBAiGAuhRg");
	this.shape_12.setTransform(88.8,-6.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B7CD61").s().p("EgkgAeSQCMi/ChjMQDnkjCFigQE3l0EIkNQD8kIEykYQCYiNBkhXIEDjeQE7kJEnjcQEvjnGNkNQEBiuDjiQQDpiTDDhqQCahUD1h4QjjCeiPBfQi5B7jmCTQjmCSj8CrQmLEMkuDmQkkDak9EIIj/DcQhkBYiXCLQkxEXj6EGQkEEKk2F0QhdBukQFSQiyDhiKCeQh/CTivC3QDIkeA5hQg");
	this.shape_13.setTransform(15.8,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B7CD61").s().p("A/ue7QBIi/B3jqQBai3C0khQDpl4DjkfQDPkOEIkfQCDiPBXhaIDijhQEUkPEFjeQEQjsFikNQD8jAC5iCQDSiUCyhsQCLhUDjh6QjUCih6BbQioB+jPCTQi+CGj0C6QlhENkODqQkDDckTENIjgDfQhXBZiBCOQkFEejOELQjhEdjmFzQiwEdhbC2Qh/D1hSCnQhTCqhhDPQBCjvA+ihg");
	this.shape_14.setTransform(-108.7,-3.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B7CD61").s().p("Av5TLQAlhuBAiDQAxhnBeilQB5jXB0ipQBqieCEiuIBtiLQAsg3BEhUQCIimCAiPQDej6EmkpQBlhnBahKQBGg7BzhVQhXBzg7BGQhKBYhkBmQktEzjUDuQh/CNiICmQhEBTgrA2IhrCKQiDCthoCcQhyCmh4DUQhdCigxBnQg9B7g5BqQgjBAhQCMQAgiKAehZg");
	this.shape_15.setTransform(-426.7,91.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B7CD61").s().p("AsHT1QgJhsAdiMQAOhVBGi9QBMjKBbi5QBNihBkixIBTiOQAhg4A1hWQBrirBjiTQBricCJi6QBliIBGhZQBShpBLhPQA6g9BkhbQhDB0guBIQg7BahRBqQjjEli5EOQifDqiDDeIhSCMQhiCvhNCfQhYC1hLDHQhFC5gNBPQgeCSgIBVQgLBlAIByQguhzgJhkg");
	this.shape_16.setTransform(-483.6,12.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B7CD61").s().p("EgPdAh1IgXgjQgVgjgQgnQgchHgLhUQgVibArjOQAPhFAcheQAih3Ath3QAkhgBMi1QBYjQAhhTQBhj0CAkLIBtjXQArhVBIiCQCQkDCMjdQCWjrDIkPQCajRBkh3QB9iZBvhxQBZhaCRiBQh4CkhHBdQhhB/h5CWQhjB2iZDQQjGEMiVDqQiLDaiPEBQhHCAgrBUIhrDWQh/EJhgDyQggBRhZDTQhMCzgjBfQgtB1ghBzQgcBcgNBBQgrDGABCPQABBUANBCQAHAlAOAmIAPAnQgBAHAMgHQAKgFAHgHIgOARQgFAEgGAAQgFAAgGgFg");
	this.shape_17.setTransform(-418.4,38.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B7CD61").s().p("A0OaPQA6ivA9iWQAkhWAdg/QA1h1A6hlQC5k1CIjHQCMjTCtjpICOi7QDgknEHk5QETlHGAmrQCAiNBwhsQBXhTCQh/QhuCXhPBiQhfB3iBCQQmbHLj2ElQkGE3jfElIiNC7QisDoiMDRQiJDKi0EtQg4Bhg0BzQgcA+gkBUQhVDQg1BtQhCCJhXCIQARgtBTj6g");
	this.shape_18.setTransform(-286.2,49.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B7CD61").s().p("AwmZkQAYh9BMizQAxhvBvjeQCCkEB6jhQBtjKCHjlIBvi4IBxi5QCJjgB/jBQCGjNCrj5QB7izBXh7QBliOBbhtQBGhUB3iBQhUCWg7BhQhJB3hlCPQkZGPjoFjQjME2isEhIhuC3QiGDjhtDLQh5DfiCEDQhvDggwBqQhZDQgbBPQgtCEgSCNQgSiYAaiIg");
	this.shape_19.setTransform(-231.6,60.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BDCD7A").s().p("A1gXVQA/iABnifQBAhkCfjYQCxjxCqjWQCXi/CwjUQBYhoA6hDICUirQC1jRClixQCti8DgjfQChigB1htQCGh9B0hcQBchHCXhoQh8CHhRBTQhnBpiEB9Qh8B1iXCXQjgDfisC7QikCvi2DQIiSCqIiRCrQixDViUC9QipDTixDxQicDVhBBlQhNB1hpCbIimD3QA8iiA5hyg");
	this.shape_20.setTransform(148.8,79.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BDCD7A").s().p("EgZ7AgzIAAgEIADgcIAFgsQANhhAXhKQAuilBnjMQBCiBCekRQDSl1CNjUQCej0DIkEQBkiCBDhSQgEgCCwjOQDSj2DMjUQDUjcEVj/QDFi1CUh8QCjiMCShoQBphLDAh6QiQCIh1BqQh4BsivCWQiUB9jBCyQkVD+jRDbQjLDRjRD1QiuDLADADQhCBRhjB/QjFEFidDxQiRDajLFsQidENhCCBQhtDTg4CMQgcBCgeBeIgMApIgBAFQAYgTAeglIgZAqQgOAWgQAPIgKAJg");
	this.shape_21.setTransform(61.3,44.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8EAE64").s().p("ArLIbQAlg2A5g6QA3g/EBjfQD4jXAEAFQgCgDEDjGQEKjLBIgxQBBgvA7gfQAtgXBOgfQg1BBglAkQguAuhBAwQhJAykHDJQkCDGABACQgEgFj1DUQj9Ddg3A/Qg4A3g0AoQgoAfhGAuQAmhJAfgrg");
	this.shape_22.setTransform(361.8,212.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8EAE64").s().p("A7FS7QgHABgDgIQgDgIAGgDIAEgFIADgLQACAEgDAEIgCADQgDANAIAAQAKAAANgSQAQgPAegmQAXgdA3hQQAZgmA0hTQAzhNAzg7QBlh8CHibQDEjjCoiuQChipDDirQCjiPADAGICtiBQDUiXDPhrQDYh0EahpQDLhKCSgnQCpguCKgWQBugRCsgMQilA1hoAgQiFApilAuQiWApjBBHQkXBnjSBxQjLBpjQCUIiqB+QgEgEifCLQi/CoifCnQkSEclDGHQgnAuhABTQg8BPgfAjQg3A9gsAkQglAegVANIgQALQgIAFgHAAQgDAAgDgBg");
	this.shape_23.setTransform(367.7,153.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8EAE64").s().p("AtdLmQAXhQAwhdQAkhJBMh0QBhiVBhhwQBXhpBwhsQA4g3AlgiIBghUQBzhmBuhTQDGiXD2ibQBXg2BMgjQA8gbBigjQhNBHgzAoQhCAzhVA3QkCCli0CJQhtBShxBjIheBUQglAhg2A2QhsBphWBmQheBtheCQQhKBwgiBHQgsBTgtBNIhUCRQANhlAThDg");
	this.shape_24.setTransform(259.8,150.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8EAE64").s().p("A6MbHQBPicB1i7QBbiVCijrQDUk0DAjyQCxjkDYj5QBsh8BGhOIC4jGQDfjxDRjJQDajXEaj5QDPi2COh1QCqiLCPhlQByhQC4hyQinCahfBVQiGB3ilCIQiQB3jLCzQkYD4jaDVQjPDIjeDvIi2DFQhHBOhrB6QjWD4iwDjQi+DwjUEzQieDlheCYQhvCxhkCZQg+BeiHDJQBTjFBAh/g");
	this.shape_25.setTransform(209.8,61.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8EAE64").s().p("A7ofnQB/kDBIiDQBDiADXkuQDVksDxk0QDIj/DrkWQB2iJBNhYQEylkFjl4QGYm0HancQCpirCSiDQBwhmC7idQiZC3hpB0QiCCQirCtQoPIWlhF4QjdDrjyEPIjEDgQhNBYh2CJQjpEVjHD+QjuEvjWEtQjWEuhAB5QiuE3gqBFQhtCuh/CQQBTiGBmjUg");
	this.shape_26.setTransform(-39.2,3.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8EAE64").s().p("EgYwAjxQAvgHASgxQAPg9AOgbIAihQQATguANgiQAZhAAmhsIBJjKQAlh+CUkxQCWk4CtkvQCQkBC1kZICYjjQA8hZBhiIQDBkSC5jjQDEj1EBkZQDBjUCAh/QCaibCMh2QBjhTC6iNQiFCShxB3QhuB0inCqQiECDi8DPQj/EYjCDyQi4DijAEPQhgCHg8BZIiWDhQi0EXiQEAQirEuiUE0QiRErgmB+QhYDuhECDQgaAzhABmQgJANgMAYIgVApQgKAXgWAOQgWANgXAAIgEAAg");
	this.shape_27.setTransform(-231.2,97.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8EAE64").s().p("AwrWQQAah+A4iaQAph2BbjEQB1j5B4jEQBsi4CLjIIB0igQAug/BJhgQCRjACKikQDbkGFQlwQBsh2BehZQBKhDB8hpQhbCBhABSQhQBlhsB3QldGBjKDzQiKCjiQC+QhIBfguA/IhyCeQiJDHhsC1Qh2DBhzD1QhYC/gpB1IhlENQg1CJgmBrQANiaAXhqg");
	this.shape_28.setTransform(-358.2,28.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8EAE64").s().p("EgKOAgTIgBgKQgIgsgCgiQgJiRArijQgDBdAIBWIAGgqQAOhTAgk0QAznjALhkQAaj6A9kVIA4jjQAYhXAsiGQBXkQBjjlQBjjxCSklQBbi1BdiqQBaikBVh+QBBhjBxiXQhMCqg1BsQhBCHhbClQkOHyibF7QhiDjhWEMQgrCCgYBXIg3DfQg7ERgaD3Ig9JGQghE0gPBWQgFAqgKA0IgQBWIgOBDIAAABIAAAAIhCABg");
	this.shape_29.setTransform(-548.5,-33);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8EAE64").s().p("AsKWJQAVhxAziNQAmiMESosIEJoOQgFgDEboFQEjoTBRiEQBHh8BFhhQAyhJBdh1Qg1CFgoBVQgyBphJB/QhSCHkgIOQkaIEAFADIkJIMQkQIqgmCGIhaD0QgvB+ghBfQAHiKAThjg");
	this.shape_30.setTransform(-302.2,29.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8EAE64").s().p("AtnUmIBCj3QAUhDAQgyQAghdAnhOQBYi7B3jTQBcilB0i4IBgiTIBjiUQB4iyByiYQDRkcD7kzQBahuBThTQA9g+BuhiQhLB5g1BMQhBBehaBvQkRFRi5D7QhwCXh4CyQg9BYgmA5IheCSQh0C3haCjQh5DXhUCzQgmBKgdBYQgRAwgTBCQg0CpgjBMQgyBthSBXQAuhcAgh8g");
	this.shape_31.setTransform(-302.7,3.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8EAE64").s().p("As/XcQAMh8AjiaQAYh1A8jIQBNj+BUjNQBMjBBljTIBVirQAihDA4hnQBvjNBrixQByi6CXjdQBwijBNhnQBch9BUhdQBChJBxhsQhSCIgzBPQhFBqhaB8QhVBzhmCWQiYDchvC4QhqCuhuDLQg4BmghBDIhUCoQhkDShLC+QhSDJhMD8Qg6C/gbB5QggCKghCEIhAD0QgCiXAJhng");
	this.shape_32.setTransform(-427.7,-5.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8EAE64").s().p("AtXWTQACh5AbiZQATh0A3jEQBHj6BWjHQBMi6BqjMIBYijQAkhAA6hiQB2jEBxilQB4iwChjNQB1iWBUhhQBjh1BYhTQBIhEB0hdQhaB/g3BIQhKBihgByQhbBrhsCKQihDNh2CsQhvCjh0DCQg6BhgkA/IhXChQhoDJhLC3QhUDDhFD2Qg2C+gTBzIgyEIQgYCCgSBwQgQiRAChmg");
	this.shape_33.setTransform(-406.4,76.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8EAE64").s().p("AyfU8QAaiAA6ibQAnhxBnjJQB9j1CGjBQB5i2CRi/QB4ihACACQAwg/BOheQCci+CRidQCbipDPi8QCbiNBqhRQCAhmBwhDQBbg3CQhFQiNB4g9AzQhoBXh5BgQhqBTiWCJQjNC5iZCnQiRCbiZC8QhMBdgwA+Ih5CeQiQC/h4CyQiCC+h8DxQhkDCgoBwQhxEohJDfQAJidAVhrg");
	this.shape_34.setTransform(-283.2,31.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8EAE64").s().p("A2RcaQAGgPAliHQA4jRAniJQA+jhA9i0QB0lWCQjoQCDjpC3jyQBah5A/hKQA9hMBmhwQDLjgDEi1QDLi9ERjaQCtiLCih2QChh2CKhVQBqhBCzhgQiWB+hmBSQh8BjiiB3QimB7imCFQkQDZjIC7QjDCzjHDcQhkBvg8BKQg/BKhZB3QizDuiADlQiNDkhyFNQg8Cwg+DgQhADbg0B8QgqBpgaAqQgxBQhJAkQA9gxAghSg");
	this.shape_35.setTransform(-152.7,58.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8EAE64").s().p("A4IWOQBAiAB1imQAqg/DMj/QD2k0B3ieQCcjKC5jWQCaizABACICgitQDDjQC7isQDHi5EBjGQDKibB+hPQCghoCKhEQBug2CxhEQmAD/ifBoQh9BQjECXQkADEjEC3Qi5CqjCDOIidCrQgDgCiYCyQi3DUibDJQh6Cij0ExQjLD/gpA8QiRDNgxBIQhWCAhJCHQAuilA/h/g");
	this.shape_36.setTransform(13.8,53.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8EAE64").s().p("A4PWqQBKh0COieQAzg3DjjsQDqj6CgjDQEKk0D8kOICfitQDHjSC0ixQC/i+D3jbQCzifB/hmQCUh4CDhVQBjhCCqheQiNB9heBQQhzBjiVB5QiABoiwCcQj2DZi8C9QizCwjHDRIieCsQgDgEoBJGQojJvh/BxQi1DIgtA2QhlB5hPCCQA1ieBQh+g");
	this.shape_37.setTransform(255.8,53.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8EAE64").s().p("AyPOEQAXhhBIiCQA5hjBgiJQCFi8B/iKQB1iBCXiHQBKhDAygpICAhoQCdh6CThhQCahoDGh0QCHhQBsg6QBzg+BlgpQBKgeCCgsQhoBNhKAvQhXA5h2BBQhuA8iCBNQjFBziXBmQiSBfiaB5Ih+BlQgxAphJBBQiTCDhzCBQh7CFiCC5QhdCEg5BiQhWCbgWAyQgrBggNBqQgXhxAYhqg");
	this.shape_38.setTransform(107.2,117.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9ACC57").s().p("A12WrQA0h8BwijQBeiKH1pUQD6kkDuj/QgFgEH6oRQH+oSCUiRQCAiABrhgQBWhMCNhxQhuCNhMBYQheBuh+CBQiXCVn6IOQn6IPAGAEQjuD+j4EjQn5JahWB+QiAC4gxBTQhIB8gxCLQAQifA2iBg");
	this.shape_39.setTransform(-93.7,117.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9ACC57").s().p("A9+b0QA9h4AYgiQBViTCHi+IEPl8QDylXC2jSQDDjhDyjnQB5h0BRhHQBRhICAhsQD+jVDwixQDvizFFjjQCsh4DViSQC0h7CahgQBwhFDJh0QikCNhzBbQiLBsi5CBImAEKQlHDkjrCwQjvCvj8DUQh/BrhPBHQhRBHh4BzQjwDki/DeQi3DTjtFQIkQF8QhvCeh8ClQgKALhfCCQhABXhAAxQAyg3Ayhjg");
	this.shape_40.setTransform(-191.7,120.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9ACC57").s().p("EgmyAiQIAAgBIgCgIQgEgQgBgMQgHgzAKg/QAPhdA2hzIBkjLQBBiBBBhmQBbieDxk2QEUljETkkQD5kIE3kKQCbiFBohQQBnhTClh4QFGjxE1jAQHok3LnmLQDuh9DIhdQCXhFD/hrQjeCIieBbQi4BqjzCCQrfGHnrE4QkzC/lEDvQijB3hmBSQhoBQiaCEQkzEGj2EGQkQEhkSFgQjvEzhZCaQg5BZhMCHQhQCPghA1Qg+BqgZBSQgRA5gBAwIABAcIAAABIAHgFQAhgWAPgNQgIAKgNAMIgWAUIgKAKIgCACQgMgDABgBg");
	this.shape_41.setTransform(-329,20.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9ACC57").s().p("AsdbnQADguAAgVQACgnAMhWQAQiCAliZQAsizAniSQBJkUBIjIQBFjHBdjgIBOizQAghGAzhsQBojbBji4QBojDCQjsQBhidBTh/QBXiEBShkQA/hMBuh2QhKCLg0BYQhABuhXCEQkBGNinE4QhjC4hmDXQg0BrgeBGIhOCyQhcDbhEDGQhGDFhKETQgmCQgsCzQgqCogfBsIgTA7IgSA8QgFAVgNApQgJAlAIAdQgQgbgBgog");
	this.shape_42.setTransform(-514.5,-2.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9ACC57").s().p("EgEKAiGIhKiIQhLiFhBjFQg3iWgukCQg7lQALkaQADkKA5knQA3jtgBAAQAXheAviNQBdkbBwjwQBwj3CnkvQBTiVB+jSQBjimBdiGQBBhcB+imQhPCog/B4QhHCIhnCtQh9DThSCTQimEuhuDyQhwDthbEWQguCLgXBbQABAAg1DpQg3EggDEDQgLEUA6FIQArD4A2CVQBFDRAxB5QAlBeAQA2QAYBVAEBPQgUhJgnhPg");
	this.shape_43.setTransform(-459.9,33.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9ACC57").s().p("AsCWYQhHhqggifQgMg5gChMQgEhjANhjQAMhsAph8QAoh2A7hwQBgi1CLi7QB2iSgCgBQgDgEGMnaQFNmNC0jTQBih0BUhZQBChGBuhqQhOCEg2BQQhFBmhhB1IoBJhQmLHZADACQACABh0CRQiIC4hcCuQg5BsglBuQgnBzgLBmQgMBdADBcQACBGALA0QAfCXAtBkQAtBhBWBsQh1hThAheg");
	this.shape_44.setTransform(-322.6,104.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#9ACC57").s().p("A2fUsQAliEBaijQAxhgCfjVQCljdC1jPQCXiwC8i7QBdhdA+g7ICeiUQDAixC1iWQC1iZDzjAIEijjQCLhrB2hPQBZg8CZhcQh7B6hUBLQhpBeiKBsIkiDjQjzDBi0CXQi0CWi/CvQieCRACACQg+A6hcBdQi5C4iWCvQiyDNikDaQidDRgtBcQhhCsguBnQg1B6gnCQQADigAkh9g");
	this.shape_45.setTransform(212.3,37.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#9ACC57").s().p("EgkPAgQQAChKAiiHQA9jZCMjaQAyhPBPhnQBkiCBzh8QDfjzFslKQEBjoEzj4QCZh8BkhOQgFgHNTp8QOvrCCTh0QDHicCviCQBvhSDqipQi2C1h+ByQicCMjPCjQiYB6urK9QtSJ8AFAGQhkBOiXB8QkxD2kBDnQluFNjXDrQhwB5hjCAQhMBjgxBOQiHDPhNDLQgyCPgIAyQgTByAwBeQhBhYADh6g");
	this.shape_46.setTransform(154.2,34.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9ACC57").s().p("EgidAVtID6lbQBSh9D+j6QERkMEcjhQD3jFEpjIQCUhkBig9QgCgED9iVQEvi0EbiTQEkiZF2ivQDyhwDVheQDXheC2hDQCIgyDnhKQjMBsiNBFQioBSjcBhQqfEsm8DpQkaCSkwCyQj5CVADADQhiA8iSBkQkmDEj1DFQkaDgkMEIQj6D1hQB6QjDD+hIBRQiECUidBvQB3h5B9iug");
	this.shape_47.setTransform(115.3,77.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9ACC57").s().p("A5DS2QBCiBBqiYQBPh1Cdi6QDIjuC+ixQCtimDVitQBphXBGg1ICziIQDaiiDKiFQFKjcHckYQCchaCEhAQBlgxCqhIQiTBrhfA/Qh6BRicBcQngEblBDXQjJCEjYCgIiyCGQhFA2hpBVQjSCrirClQi7CujGDqQiaC3hOBzIi5EJQhUB5hSB7QA9ikA3htg");
	this.shape_48.setTransform(8.3,50.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9ACC57").s().p("Am2fMQhUiIhHi8Qg9iQgukGQg7lRAYkbQAQkJBGkjQAWhZAZhSIAThAQAchcA1iLQBqkVB9jqQB+j3C6kcQCGjKBriKQB5ieBshyQBZheCPiBIi8EDQhjCHhwCUQhqCLiDDFQi4Eah9DyQh6DnhpEQQg0CIgbBbQABAAhCDlQhFEdgOECQgYETA5FGQAsD8A7CNQBHC8A+CIQA4B8BWChQh8iShFhwg");
	this.shape_49.setTransform(-140.1,-27.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9ACC57").s().p("AxbZrQABiRAgi2QAViLBIjqQBbkpBzjpQBmjaCOjqQBHh1AxhJQAwhKBOhvQCdjgCXi6QCejFDUjoQCPidB3h4QB+iCBvhfQBXhKCRhtQh4CPhIBRQhhBvh8B/Qh3B6iNCaQjSDnidDCQiVC5icDdQhOBugvBJQgwBIhGByQiMDohkDWQhxDkhZEkQhGDjgVCJQgjC/gSB/QgTCEgPCfQgYitABh7g");
	this.shape_50.setTransform(-147.3,59.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9ACC57").s().p("EgjOAmAQgIgWgCgmQgCgoALhKQAPhZAmh+QA+jIB7kKQBijYCdk1QBrjZBWicQB4jbBzijQDOkyEek0QCOiZBjhcID/jmQE9kQEwjSQEyjaGnj5QCEhOF3jSIGyj0QA0geCMhJQA4geAighQAIgHALgNIAHgIIgDgBQgLgCgRADIgeAHIAdgLQARgHANABQABABAIAAQAFAAAAAMIgIANQgMATgFAFQgfAng2AoIi0B8Qi3B9jzCKQmWDlhjA6QmkD4kwDZQkwDQk3EMIj8DkQhiBaiMCYQkZEtjMEvQhyCkh0DTQhUCZhrDbQieE1hiDUQiGEihDCkQgzB7gYBPQgUBKgDAiQgDAlADAUQAGAgAYAQQgbgMgLgig");
	this.shape_51.setTransform(-107,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-615.2,-317.8,1230.6,644);


(lib.singleBubble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3399CC").ss(2,1,1).p("AFLlKQCKCJAADBQAADCiKCJQiJCKjCAAQjBAAiJiKQiKiJAAjCQAAjBCKiJQCJiKDBAAQDCAACJCKg");
	this.shape.setTransform(0.2,0.2,6.959,6.959);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABYDEQAAgyg8iyQgNgpg5g7Qg1g0gjgSQA5gGBJAwQApAaBDA0QAnAagaCSQgJA0gMAlQgIAYgDAAQgBAAAAgHg");
	this.shape_1.setTransform(140.6,-108.9,6.959,6.959);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CCFF").s().p("AlKFLQiKiJAAjCQAAjBCKiJQCJiKDBAAQDCAACJCKQCKCJAADBQAADCiKCJQiJCKjCAAQjBAAiJiKgABGlmQAjARA0A1QA7A7AOApQA8C0AAAwQAAATALgkQAMgkAJgzQAaiVgmgZQhEg1gpgaQhCgqgzAAIgOABg");
	this.shape_2.setTransform(0.2,0.2,6.959,6.959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-327.4,-327.4,655.2,655.2);


(lib.flower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C7BCAC","#DAD3C8","#EAE6E0","#F6F4F2","#FDFCFC","#FFFFFF"],[0,0.161,0.345,0.537,0.745,1],1,-8.3,-1.2,8.3).s().p("AgsAuQgXghABgWQABgXAVgbQAVgcARAEQAbAGgVAYQgFAIgDATIgHAnQgEATAJARQAEAJAFAFQALgZAHgVQADgGgGg1QgFgrAPAGQAYAKAMAeQAOAkgSAkQgIATgcASIgYAOQgTgGgVggg");
	this.shape.setTransform(44.4,-224.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C7BCAC","#DAD3C8","#EAE6E0","#F6F4F2","#FDFCFC","#FFFFFF"],[0,0.161,0.345,0.537,0.745,1],-9.2,-1,9.5,1.5).s().p("AgSBDQgXgBgbgVQgcgWADgQQAGgbAZAUQAJAHASAFQAMAEAZAGQAUAFAYgGQAQgEAMgHQAJgFhLgZQgHgCg0AIQgrAGAGgQQAJgXAfgMQAkgOAkASQASAJAcAfQAOAPAKANQgFASgqATQgnARgXAAIgDAAg");
	this.shape_1.setTransform(53.8,-231.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#C7BCAC","#DAD3C8","#EAE6E0","#F6F4F2","#FDFCFC","#FFFFFF"],[0,0.161,0.345,0.537,0.745,1],4.9,7,-6.6,-8).s().p("AgRBLQgjgQgOgnQgHgUADgoIAEgmQAQgJArARQAoAQASATQAPARAFAgQAEAjgOAJQgZAQgCggQgBgMgIgQQgGgMgQgVQgJgSgUgMQgPgJgNgDQgKgDAiBGQADAGAqAhQAjAagPAHQgKAEgMAAQgNAAgRgHg");
	this.shape_2.setTransform(41.6,-239.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ADC64A").s().p("AhRB3QgegvAEgdQAFghApgKIAKgBIgOgBQgugEgRgXQgIgKgEgzQgEgxADgOQAEgOA0ASQA2ATASAaQAOAZgHATQgMAZAAADIANgNQAPgOAWAAQAsgCAiAjQAQARAQAcQAGAMgrAVQgqAUgSgBQgMAAgYggIgTgfIAKAhQAGAkgFAQQgHAYgsArQgQgRgPgYg");
	this.shape_3.setTransform(49,-232.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0)","rgba(92,130,64,0)","#5C8240","#557C3E","#3F622E"],[0,0.796,0.796,0.82,1],32.8,2.6,-41.2,-10.5).s().p("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");
	this.shape_4.setTransform(-3.9,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FBE8BF","#FBE8BF","#FAE09F","#F9DA86","#F8D675","#F8D46A","#F8D367","#C6C85E","#A8C258","#A3BE56","#95B252","#7D9E4B","#5C8240","rgba(92,130,64,0)","rgba(0,0,0,0)"],[0,0,0.024,0.051,0.078,0.106,0.141,0.325,0.431,0.506,0.6,0.698,0.796,0.796,1],32.8,2.6,-41.2,-10.5).s().p("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");
	this.shape_5.setTransform(-3.9,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-248.1,126.7,496.4);


(lib.blackout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E2435").s().p("EhP/A8AMAAAh3/MCf/AAAMAAAB3/g");
	this.shape.setTransform(-79.5,-72.4,1.212,1.057,90);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.2,-693,811.4,1241.2);


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


(lib.FadeIn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// celery
	this.instance = new lib.WildCelery();
	this.instance.parent = this;
	this.instance.setTransform(-174.3,353.7,1,1,0,0,0,-71.8,295.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:4.1,skewX:0.1,x:-101.8,y:61.9},0).wait(1).to({skewX:0.3,x:-101.1},0).wait(1).to({skewX:0.4,x:-100.4},0).wait(1).to({skewX:0.6,x:-99.7},0).wait(1).to({skewX:0.7,x:-99},0).wait(1).to({skewX:0.8,x:-98.3},0).wait(1).to({skewX:1,x:-97.6},0).wait(1).to({skewX:1.1,x:-96.9},0).wait(1).to({skewX:1.2,x:-96.2},0).wait(1).to({skewX:1.4,x:-95.5},0).wait(1).to({skewX:1.5,x:-94.7},0).wait(1).to({skewX:1.7,x:-94},0).wait(1).to({skewX:1.4,x:-95.4},0).wait(1).to({skewX:1.1,x:-96.7},0).wait(1).to({skewX:0.9,x:-98},0).wait(1).to({skewX:0.6,x:-99.3},0).wait(1).to({skewX:0.4,x:-100.6},0).wait(1).to({skewX:0.1,x:-101.9,y:62},0).wait(1).to({skewX:-0.5,x:-104.9,y:61.9},0).wait(1).to({scaleY:1,skewX:-1.1,x:-107.9,y:61.8},0).wait(1).to({skewX:-1.7,x:-111,y:61.7},0).wait(1).to({skewX:-2.2,x:-114},0).wait(1).to({scaleY:1,skewX:-2.8,x:-117},0).wait(1).to({skewX:-3.4,x:-120,y:61.8},0).wait(1).to({scaleY:1,skewX:-4,x:-123,y:61.9},0).wait(1).to({skewX:-4.6,x:-126,y:62},0).wait(1).to({skewX:-4.2,x:-123.8,y:61.8},0).wait(1).to({skewX:-3.7,x:-121.6,y:61.7},0).wait(1).to({skewX:-3.3,x:-119.4,y:61.5},0).wait(1).to({skewX:-2.9,x:-117.3,y:61.4},0).wait(1).to({skewX:-2.5,x:-115,y:61.3},0).wait(1).to({skewX:-2,x:-112.9,y:61.2},0).wait(1).to({skewX:-1.6,x:-110.7},0).wait(1).to({skewX:-1.2,x:-108.5,y:61.1},0).wait(1).to({skewX:-0.7,x:-106.3},0).wait(1).to({skewX:-0.3,x:-104.1},0).wait(1).to({skewX:0.1,x:-101.9},0).wait(1).to({skewX:0.5,x:-99.7},0).wait(1).to({skewX:1,x:-97.5},0).wait(1).to({skewX:1.4,x:-95.3,y:61.2},0).wait(1).to({skewX:1.8,x:-93.2,y:61.3},0).wait(1).to({skewX:2.3,x:-91,y:61.4},0).wait(1).to({skewX:2.7,x:-88.8,y:61.5},0).wait(1).to({skewX:3.1,x:-86.6,y:61.6},0).wait(1).to({skewX:3.5,x:-84.4,y:61.7},0).wait(1).to({skewX:4,x:-82.2,y:61.9},0).wait(1).to({skewX:4.4,x:-80,y:62},0).wait(1).to({scaleY:1,skewX:3.8,x:-83.1,y:61.9},0).wait(1).to({skewX:3.2,x:-86.3,y:61.7},0).wait(1).to({skewX:2.6,x:-89.4,y:61.6},0).wait(1).to({skewX:2,x:-92.5},0).wait(1).to({skewX:1.4,x:-95.6,y:61.5},0).wait(1).to({scaleY:1,skewX:0.8,x:-98.7},0).wait(1).to({skewX:0.1,x:-101.7,y:61.6},0).wait(1).to({skewX:-0.5,x:-104.8},0).wait(1).to({skewX:-1.1,x:-107.9,y:61.7},0).wait(1).to({skewX:-1.7,x:-111.1,y:61.9},0).wait(1).to({scaleY:1,skewX:-2.3,x:-114.2,y:62.1},0).wait(1).to({skewX:-1.9,x:-112,y:62},0).wait(1).to({skewX:-1.4,x:-109.8,y:61.9},0).wait(1).to({skewX:-1,x:-107.6},0).wait(1).to({skewX:-0.6,x:-105.4},0).wait(1).to({skewX:-0.2,x:-103.3},0).wait(1).to({skewX:0.3,x:-101.1},0).wait(1).to({skewX:0.7,x:-98.9,y:62},0).wait(1).to({skewX:1.1,x:-96.8},0).wait(1).to({skewX:1.6,x:-94.6,y:62.1},0).wait(1).to({skewX:1.1,x:-97,y:62},0).wait(1).to({skewX:0.6,x:-99.5,y:61.9},0).wait(1).to({skewX:0.1,x:-101.9,y:61.8},0).wait(1).to({skewX:-0.4,x:-104.3},0).wait(1).to({scaleY:1,skewX:-0.8,x:-106.8,y:61.7},0).wait(1).to({skewX:-1.3,x:-109.3},0).wait(1).to({skewX:-1.8,x:-111.7,y:61.8},0).wait(1).to({skewX:-1.3,x:-109.3,y:61.6},0).wait(1).to({skewX:-0.9,x:-106.9,y:61.5},0).wait(1).to({scaleY:1,skewX:-0.4,x:-104.4},0).wait(1).to({skewX:0.1,x:-102,y:61.4},0).wait(1).to({skewX:0.6,x:-99.5},0).wait(1).to({skewX:1.1,x:-97.1},0).wait(1).to({skewX:1.5,x:-94.6},0).wait(1).to({skewX:2,x:-92.2},0).wait(1).to({scaleY:1,skewX:2.5,x:-89.8},0).wait(1).to({skewX:3,x:-87.3,y:61.5},0).wait(1).to({skewX:3.5,x:-84.9,y:61.6},0).wait(1).to({skewX:3.9,x:-82.5,y:61.7},0).wait(1).to({skewX:4.4,x:-80,y:61.8},0).wait(1).to({skewX:4.9,x:-77.5,y:62},0).wait(1).to({scaleY:1,skewX:5.4,x:-75.1,y:62.1},0).wait(1).to({skewX:5.5,x:-74.6},0).wait(1).to({skewX:5.6,x:-74},0).wait(1).to({skewX:5.7,x:-73.5},0).wait(1).to({skewX:5.8,x:-72.9},0).wait(1).to({scaleY:1,skewX:5.9,x:-72.4},0).wait(1).to({skewX:6,x:-71.9},0).wait(1).to({skewX:6.1,x:-71.3},0).wait(1).to({skewX:6.2,x:-70.8},0).wait(1).to({skewX:6.3,x:-70.2},0).wait(1).to({skewX:6.4,x:-69.6},0).wait(1).to({scaleY:1.01,skewX:6.5,x:-69.1,y:62.2},0).wait(1).to({skewX:6.6,x:-68.6},0).wait(1).to({skewX:6.7,x:-68},0).wait(1).to({skewX:6.9,x:-67.5},0).wait(1).to({skewX:7,x:-66.9},0).wait(1).to({skewX:6.5,x:-69,y:62.1},0).wait(1).to({scaleY:1,skewX:6.1,x:-71.2},0).wait(1).to({skewX:5.7,x:-73.3,y:62},0).wait(1).to({scaleY:1,skewX:5.3,x:-75.4},0).wait(1).to({scaleY:1,skewX:4.9,x:-77.5},0).wait(1).to({skewX:4.5,x:-79.6},0).wait(1).to({scaleY:1,skewX:4.1,x:-81.7},0).wait(1).to({skewX:3.7,x:-83.8},0).wait(1).to({scaleY:1,skewX:3.3,x:-85.9,y:62.1},0).wait(1).to({scaleY:1,skewX:2.8,x:-88},0).wait(1).to({skewX:2.4,x:-90.1,y:62.2},0).wait(1).to({skewX:2.6,x:-89.4},0).wait(1).to({skewX:2.7,x:-88.6},0).wait(1).to({skewX:2.9,x:-87.9},0).wait(1).to({scaleY:1,skewX:3,x:-87.1,y:62.1},0).wait(1).to({skewX:3.2,x:-86.4},0).wait(1).to({skewX:3.3,x:-85.6},0).wait(1).to({skewX:3.5,x:-84.9},0).wait(1).to({skewX:3.6,x:-84.1},0).wait(1).to({skewX:3.8,x:-83.3},0).wait(1).to({scaleY:1,skewX:3.9,x:-82.6},0).wait(1).to({skewX:4.1,x:-81.8},0).wait(1).to({skewX:4.2,x:-81.1},0).wait(1).to({skewX:4.4,x:-80.3},0).wait(1).to({skewX:4.5,x:-79.5,y:62.2},0).wait(1).to({skewX:4.6,x:-78.8},0).wait(1).to({scaleY:1,skewX:4.8,x:-78.1},0).wait(1).to({skewX:4.9,x:-77.3},0).wait(1).to({skewX:5.1,x:-76.5},0).wait(1).to({skewX:4.7,x:-78.5,y:62.1},0).wait(1).to({scaleY:1,skewX:4.3,x:-80.5},0).wait(1).to({skewX:3.9,x:-82.5,y:62},0).wait(1).to({skewX:3.5,x:-84.4},0).wait(1).to({scaleY:1,skewX:3.2,x:-86.4},0).wait(1).to({skewX:2.8,x:-88.4},0).wait(1).to({skewX:2.4,x:-90.3},0).wait(1).to({scaleY:1,skewX:2,x:-92.3},0).wait(1).to({skewX:1.6,x:-94.3,y:62.1},0).wait(1).to({skewX:1.2,x:-96.3},0).wait(1).to({scaleY:1,skewX:0.8,x:-98.2,y:62.2},0).wait(1).to({skewX:0.5,x:-100.2,y:62.3},0).wait(2));

	// celery copy
	this.instance_1 = new lib.WildCelery();
	this.instance_1.parent = this;
	this.instance_1.setTransform(577.4,338,1,0.999,0,0.3,0,-71.5,295.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:4.1,skewX:0.8,x:653.1,y:47.2},0).wait(1).to({scaleY:1,skewX:1.2,x:655.1,y:47.1},0).wait(1).to({skewX:1.6,x:657.1},0).wait(1).to({skewX:2,x:659,y:47},0).wait(1).to({scaleY:1,skewX:2.4,x:661},0).wait(1).to({skewX:2.8,x:662.9},0).wait(1).to({skewX:3.2,x:664.9},0).wait(1).to({scaleY:1,skewX:3.5,x:666.9},0).wait(1).to({skewX:3.9,x:668.8},0).wait(1).to({skewX:4.3,x:670.8,y:47.1},0).wait(1).to({scaleY:1,skewX:4.7,x:672.8},0).wait(1).to({skewX:5.1,x:674.8,y:47.2},0).wait(1).to({skewX:4.9,x:674},0).wait(1).to({skewX:4.8,x:673.2},0).wait(1).to({scaleY:1,skewX:4.6,x:672.5},0).wait(1).to({skewX:4.5,x:671.8,y:47.1},0).wait(1).to({skewX:4.4,x:671},0).wait(1).to({skewX:4.2,x:670.2},0).wait(1).to({skewX:4.1,x:669.5},0).wait(1).to({skewX:3.9,x:668.7},0).wait(1).to({scaleY:1,skewX:3.8,x:668},0).wait(1).to({skewX:3.6,x:667.2},0).wait(1).to({skewX:3.5,x:666.5},0).wait(1).to({skewX:3.3,x:665.7},0).wait(1).to({skewX:3.2,x:664.9},0).wait(1).to({skewX:3,x:664.2},0).wait(1).to({scaleY:1,skewX:2.9,x:663.5},0).wait(1).to({skewX:2.7,x:662.7,y:47.2},0).wait(1).to({skewX:2.6,x:661.9},0).wait(1).to({skewX:2.4,x:661.2},0).wait(1).to({skewX:2.8,x:663.3,y:47.1},0).wait(1).to({scaleY:1,skewX:3.3,x:665.4},0).wait(1).to({scaleY:1,skewX:3.7,x:667.5,y:47},0).wait(1).to({skewX:4.1,x:669.6},0).wait(1).to({scaleY:1,skewX:4.5,x:671.7},0).wait(1).to({skewX:4.9,x:673.8},0).wait(1).to({scaleY:1,skewX:5.3,x:675.9},0).wait(1).to({scaleY:1,skewX:5.7,x:678},0).wait(1).to({skewX:6.1,x:680.1},0).wait(1).to({scaleY:1.01,skewX:6.5,x:682.3,y:47.1},0).wait(1).to({skewX:7,x:684.4,y:47.2},0).wait(1).to({skewX:6.9,x:683.8},0).wait(1).to({skewX:6.7,x:683.3},0).wait(1).to({skewX:6.6,x:682.7},0).wait(1).to({skewX:6.5,x:682.2,y:47.1},0).wait(1).to({scaleY:1,skewX:6.4,x:681.6},0).wait(1).to({skewX:6.3,x:681.1},0).wait(1).to({skewX:6.2,x:680.5},0).wait(1).to({skewX:6.1,x:680},0).wait(1).to({skewX:6,x:679.4},0).wait(1).to({skewX:5.9,x:678.9},0).wait(1).to({scaleY:1,skewX:5.8,x:678.4},0).wait(1).to({skewX:5.7,x:677.8},0).wait(1).to({skewX:5.6,x:677.3},0).wait(1).to({skewX:5.5,x:676.7},0).wait(1).to({skewX:5.4,x:676.2},0).wait(1).to({scaleY:1,skewX:4.9,x:673.8,y:47},0).wait(1).to({skewX:4.4,x:671.3,y:46.8},0).wait(1).to({skewX:3.9,x:668.9,y:46.7},0).wait(1).to({skewX:3.5,x:666.4,y:46.6},0).wait(1).to({skewX:3,x:664,y:46.5},0).wait(1).to({skewX:2.5,x:661.5,y:46.4},0).wait(1).to({scaleY:1,skewX:2,x:659.1},0).wait(1).to({skewX:1.5,x:656.7},0).wait(1).to({skewX:1.1,x:654.2,y:46.3},0).wait(1).to({skewX:0.6,x:651.8,y:46.4},0).wait(1).to({skewX:0.1,x:649.4},0).wait(1).to({skewX:-0.4,x:647,y:46.5},0).wait(1).to({scaleY:1,skewX:-0.9,x:644.5},0).wait(1).to({skewX:-1.3,x:642.1,y:46.6},0).wait(1).to({skewX:-1.8,x:639.7,y:46.8},0).wait(1).to({skewX:-1.3,x:642.1,y:46.7},0).wait(1).to({skewX:-0.8,x:644.5},0).wait(1).to({scaleY:1,skewX:-0.4,x:647,y:46.8},0).wait(1).to({skewX:0.1,x:649.4},0).wait(1).to({skewX:0.6,x:651.9,y:46.9},0).wait(1).to({skewX:1.1,x:654.3,y:47},0).wait(1).to({skewX:1.6,x:656.8,y:47.1},0).wait(1).to({skewX:1.1,x:654.6,y:47},0).wait(1).to({skewX:0.7,x:652.4,y:46.9},0).wait(1).to({skewX:0.3,x:650.3},0).wait(1).to({skewX:-0.2,x:648.1},0).wait(1).to({skewX:-0.6,x:645.9},0).wait(1).to({skewX:-1,x:643.7},0).wait(1).to({skewX:-1.4,x:641.6},0).wait(1).to({skewX:-1.9,x:639.4,y:47},0).wait(1).to({skewX:-2.3,x:637.2},0).wait(1).to({scaleY:1,skewX:-1.7,x:640.3,y:46.9},0).wait(1).to({skewX:-1.1,x:643.4,y:46.7},0).wait(1).to({skewX:-0.5,x:646.5,y:46.6},0).wait(1).to({skewX:0.1,x:649.6},0).wait(1).to({skewX:0.8,x:652.7,y:46.5},0).wait(1).to({scaleY:1,skewX:1.4,x:655.8},0).wait(1).to({skewX:2,x:658.9,y:46.6},0).wait(1).to({skewX:2.6,x:662},0).wait(1).to({skewX:3.2,x:665.1,y:46.7},0).wait(1).to({skewX:3.8,x:668.2,y:46.9},0).wait(1).to({scaleY:1,skewX:4.4,x:671.3,y:47},0).wait(1).to({skewX:4,x:669.1,y:46.8},0).wait(1).to({skewX:3.5,x:666.9,y:46.7},0).wait(1).to({skewX:3.1,x:664.8,y:46.6},0).wait(1).to({skewX:2.7,x:662.5,y:46.4},0).wait(1).to({skewX:2.3,x:660.4,y:46.3},0).wait(1).to({skewX:1.8,x:658.2},0).wait(1).to({skewX:1.4,x:656,y:46.2},0).wait(1).to({skewX:1,x:653.8,y:46.1},0).wait(1).to({skewX:0.5,x:651.6},0).wait(1).to({skewX:0.1,x:649.4},0).wait(1).to({skewX:-0.3,x:647.2},0).wait(1).to({skewX:-0.7,x:645.1},0).wait(1).to({skewX:-1.2,x:642.9},0).wait(1).to({skewX:-1.6,x:640.7,y:46.2},0).wait(1).to({skewX:-2,x:638.5},0).wait(1).to({skewX:-2.5,x:636.3,y:46.3},0).wait(1).to({skewX:-2.9,x:634.1,y:46.4},0).wait(1).to({skewX:-3.3,x:632,y:46.5},0).wait(1).to({skewX:-3.7,x:629.7,y:46.7},0).wait(1).to({skewX:-4.2,x:627.6,y:46.8},0).wait(1).to({skewX:-4.6,x:625.4,y:47},0).wait(1).to({skewX:-4,x:628.4,y:46.9},0).wait(1).to({scaleY:1,skewX:-3.4,x:631.4,y:46.8},0).wait(1).to({skewX:-2.8,x:634.4,y:46.7},0).wait(1).to({scaleY:1,skewX:-2.2,x:637.4},0).wait(1).to({skewX:-1.7,x:640.4},0).wait(1).to({skewX:-1.1,x:643.5,y:46.8},0).wait(1).to({scaleY:1,skewX:-0.5,x:646.4,y:46.9},0).wait(1).to({skewX:0.1,x:649.4,y:47},0).wait(1).to({skewX:0.4,x:650.7,y:46.9},0).wait(1).to({skewX:0.6,x:652},0).wait(1).to({skewX:0.9,x:653.4},0).wait(1).to({skewX:1.1,x:654.6},0).wait(1).to({skewX:1.4,x:656},0).wait(1).to({skewX:1.7,x:657.3},0).wait(1).to({skewX:1.5,x:656.6},0).wait(1).to({skewX:1.4,x:655.9},0).wait(1).to({skewX:1.2,x:655.2},0).wait(1).to({skewX:1.1,x:654.5},0).wait(1).to({skewX:1,x:653.8},0).wait(1).to({skewX:0.8,x:653.1},0).wait(1).to({skewX:0.7,x:652.4},0).wait(1).to({skewX:0.6,x:651.7},0).wait(1).to({skewX:0.4,x:650.9},0).wait(1).to({skewX:0.3,x:650.3},0).wait(1).to({skewX:0.1,x:649.6},0).wait(1).to({skewX:0,x:648.9},0).wait(2));

	// flower
	this.instance_2 = new lib.flower();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-236,332.1,0.999,0.999,4.5,0,0,-16,243.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:4.7,x:-200.3,y:90.6},0).wait(1).to({rotation:4.8,x:-199.8},0).wait(1).to({scaleY:1,rotation:4.9,x:-199.2},0).wait(1).to({rotation:5,x:-198.7},0).wait(1).to({rotation:5.2,x:-198.1},0).wait(1).to({rotation:5.3,x:-197.6,y:90.7},0).wait(1).to({scaleY:1,rotation:5.4,x:-197.1},0).wait(1).to({rotation:5.5,x:-196.5},0).wait(1).to({rotation:5.7,x:-196},0).wait(1).to({rotation:5.8,x:-195.5,y:90.8},0).wait(1).to({scaleY:1,rotation:5.9,x:-194.9},0).wait(1).to({rotation:6,x:-194.4},0).wait(1).to({rotation:6.2,x:-193.9},0).wait(1).to({rotation:6.3,x:-193.3,y:90.9},0).wait(1).to({scaleY:1,rotation:6.4,x:-192.8},0).wait(1).to({rotation:6.6,x:-192.2},0).wait(1).to({rotation:6.7,x:-191.7,y:91},0).wait(1).to({rotation:6.8,x:-191.2},0).wait(1).to({scaleY:1,rotation:6.9,x:-190.6,y:91.1},0).wait(1).to({rotation:7.1,x:-190.1},0).wait(1).to({rotation:7.2,x:-189.6},0).wait(1).to({rotation:7.3,x:-189,y:91.2},0).wait(1).to({scaleY:1.01,rotation:7.4,x:-188.5},0).wait(1).to({rotation:7.6,x:-187.9,y:91.3},0).wait(1).to({scaleX:1,rotation:7.3,x:-188.9,y:91},0).wait(1).to({rotation:7.1,x:-189.9,y:90.7},0).wait(1).to({scaleY:1.01,rotation:6.8,x:-190.9,y:90.5},0).wait(1).to({rotation:6.6,x:-191.9,y:90.2},0).wait(1).to({rotation:6.4,x:-192.9,y:90},0).wait(1).to({rotation:6.1,x:-193.9,y:89.8},0).wait(1).to({scaleY:1.01,rotation:5.9,x:-194.9,y:89.5},0).wait(1).to({rotation:5.6,x:-195.9,y:89.3},0).wait(1).to({rotation:5.4,x:-197,y:89.1},0).wait(1).to({scaleY:1.01,rotation:5.2,x:-198,y:88.8},0).wait(1).to({rotation:4.9,x:-199,y:88.6},0).wait(1).to({rotation:4.7,x:-200,y:88.4},0).wait(1).to({rotation:4.5,x:-201,y:88.2},0).wait(1).to({scaleY:1.01,rotation:4.2,x:-202,y:88},0).wait(1).to({rotation:4.1,x:-202.6,y:87.8},0).wait(1).to({rotation:3.9,x:-203.2,y:87.7},0).wait(1).to({rotation:3.8,x:-203.8,y:87.6},0).wait(1).to({scaleY:1.01,rotation:3.7,x:-204.4,y:87.4},0).wait(1).to({rotation:3.5,x:-205,y:87.3},0).wait(1).to({rotation:3.4,x:-205.6,y:87.1},0).wait(1).to({rotation:3.2,x:-206.1,y:87},0).wait(1).to({scaleY:1.01,rotation:3.1,x:-206.7,y:86.9},0).wait(1).to({rotation:3,x:-207.3,y:86.7},0).wait(1).to({rotation:2.8,x:-207.9,y:86.6},0).wait(1).to({rotation:2.7,x:-208.5,y:86.5},0).wait(1).to({scaleY:1.01,rotation:2.5,x:-209.1,y:86.3},0).wait(1).to({rotation:2.4,x:-209.7,y:86.2},0).wait(1).to({rotation:2.3,x:-210.3,y:86.1},0).wait(1).to({rotation:2.1,x:-210.9,y:86},0).wait(1).to({scaleY:1.01,rotation:2,x:-211.5,y:85.8},0).wait(1).to({scaleY:1.01,rotation:1.6,x:-213.3,y:85.4},0).wait(1).to({scaleY:1.02,rotation:1.2,x:-215,y:84.9},0).wait(1).to({scaleY:1.02,rotation:0.7,x:-216.8,y:84.4},0).wait(1).to({scaleY:1.02,rotation:0.3,x:-218.6,y:84},0).wait(1).to({scaleY:1.02,rotation:-0.1,x:-220.4,y:83.5},0).wait(1).to({scaleY:1.02,rotation:-0.5,x:-222.2,y:83.1},0).wait(1).to({scaleY:1.02,rotation:-0.9,x:-223.9,y:82.7},0).wait(1).to({scaleY:1.02,rotation:-1.3,x:-225.7,y:82.3},0).wait(1).to({scaleY:1.02,rotation:-1.7,x:-227.5,y:81.9},0).wait(1).to({scaleY:1.03,rotation:-2.1,x:-229.4,y:81.5},0).wait(1).to({scaleY:1.03,rotation:-2.5,x:-231.2,y:81.2},0).wait(1).to({scaleY:1.03,rotation:-3,x:-233,y:80.8},0).wait(1).to({scaleY:1.03,rotation:-2.3,x:-230.3,y:80.5},0).wait(1).to({scaleY:1.03,rotation:-1.7,x:-227.6,y:80.3},0).wait(1).to({scaleY:1.03,rotation:-1.1,x:-224.9,y:80.1},0).wait(1).to({scaleY:1.03,rotation:-0.5,x:-222.2,y:79.9},0).wait(1).to({scaleY:1.04,rotation:0.1,x:-219.5,y:79.7},0).wait(1).to({scaleY:1.04,rotation:0.7,x:-216.8,y:79.6},0).wait(1).to({scaleY:1.04,rotation:1.3,x:-214.1,y:79.5},0).wait(1).to({scaleY:1.04,rotation:2,x:-211.4},0).wait(1).to({scaleY:1.04,rotation:2.6,x:-208.7,y:79.4},0).wait(1).to({scaleY:1.04,rotation:3.2,x:-205.9},0).wait(1).to({scaleY:1.04,rotation:3.8,x:-203.2},0).wait(1).to({scaleY:1.05,rotation:4.4,x:-200.5,y:79.5},0).wait(1).to({scaleY:1.05,rotation:5,x:-197.7},0).wait(1).to({scaleY:1.05,rotation:5.6,x:-195,y:79.7},0).wait(1).to({scaleY:1.05,rotation:6.3,x:-192.3,y:79.8},0).wait(1).to({scaleY:1.05,rotation:6.1,x:-192.9,y:79.4},0).wait(1).to({scaleY:1.05,rotation:6,x:-193.5,y:78.9},0).wait(1).to({scaleX:1,scaleY:1.05,rotation:5.8,x:-194.2,y:78.5},0).wait(1).to({scaleY:1.05,rotation:5.7,x:-194.8,y:78.1},0).wait(1).to({scaleY:1.06,rotation:5.5,x:-195.4,y:77.7},0).wait(1).to({scaleY:1.06,rotation:5.4,x:-196.1,y:77.2},0).wait(1).to({scaleY:1.06,rotation:5.2,x:-196.7,y:76.8},0).wait(1).to({scaleY:1.06,rotation:5.1,x:-197.4,y:76.4},0).wait(1).to({scaleY:1.06,rotation:4.9,x:-198,y:76},0).wait(1).to({scaleY:1.06,rotation:4.8,x:-198.7,y:75.5},0).wait(1).to({scaleY:1.06,rotation:4.6,x:-199.3,y:75.1},0).wait(1).to({scaleY:1.07,rotation:4.5,x:-200,y:74.7},0).wait(1).to({scaleY:1.07,rotation:4.3,x:-200.6,y:74.3},0).wait(1).to({scaleY:1.07,rotation:4.2,x:-201.3,y:73.9},0).wait(1).to({scaleY:1.07,rotation:4,x:-201.9,y:73.5},0).wait(1).to({scaleY:1.07,rotation:4.6,x:-199.2},0).wait(1).to({scaleY:1.07,rotation:5.2,x:-196.5,y:73.6},0).wait(1).to({scaleY:1.07,rotation:5.8,x:-193.8,y:73.7},0).wait(1).to({scaleY:1.07,rotation:6.4,x:-191.1,y:73.9},0).wait(1).to({scaleY:1.08,rotation:7,x:-188.4,y:74},0).wait(1).to({scaleY:1.08,rotation:7.6,x:-185.7,y:74.2},0).wait(1).to({scaleY:1.08,rotation:8.2,x:-183,y:74.4},0).wait(1).to({scaleY:1.08,rotation:8.8,x:-180.3,y:74.7},0).wait(1).to({scaleY:1.08,rotation:9.3,x:-177.5,y:75},0).wait(1).to({scaleY:1.08,rotation:9.9,x:-174.8,y:75.3},0).wait(1).to({scaleY:1.08,rotation:10.5,x:-172.1,y:75.6},0).wait(1).to({scaleY:1.08,rotation:10.2,x:-173.6,y:75.8},0).wait(1).to({scaleY:1.08,rotation:9.9,x:-175,y:75.9},0).wait(1).to({scaleY:1.08,rotation:9.6,x:-176.5,y:76.1},0).wait(1).to({scaleY:1.08,rotation:9.3,x:-177.9,y:76.3},0).wait(1).to({scaleY:1.07,rotation:9,x:-179.4,y:76.5},0).wait(1).to({scaleY:1.07,rotation:8.7,x:-180.8,y:76.8},0).wait(1).to({scaleY:1.07,rotation:8.4,x:-182.2,y:77},0).wait(1).to({scaleY:1.07,rotation:8.1,x:-183.7,y:77.2},0).wait(1).to({scaleY:1.06,rotation:7.8,x:-185.1,y:77.5},0).wait(1).to({scaleY:1.06,rotation:7.5,x:-186.5,y:77.7},0).wait(1).to({scaleY:1.06,rotation:7.2,x:-187.9,y:78},0).wait(1).to({scaleY:1.06,rotation:6.9,x:-189.4,y:78.2},0).wait(1).to({scaleX:1,scaleY:1.06,rotation:6.6,x:-190.8,y:78.5},0).wait(1).to({scaleY:1.05,rotation:6.3,x:-192.2,y:78.8},0).wait(1).to({scaleY:1.05,rotation:6,x:-193.6,y:79.1},0).wait(1).to({scaleY:1.05,rotation:5.6,x:-195,y:79.4},0).wait(1).to({scaleY:1.05,rotation:5.3,x:-196.4,y:79.7},0).wait(1).to({scaleY:1.05,rotation:5,x:-197.8,y:80},0).wait(1).to({scaleY:1.04,rotation:4.7,x:-199.1,y:80.3},0).wait(1).to({scaleY:1.04,x:-199.2,y:80.8},0).wait(1).to({scaleY:1.04,x:-199.3,y:81.3},0).wait(1).to({scaleY:1.04,x:-199.4,y:81.8},0).wait(1).to({scaleY:1.03,x:-199.5,y:82.4},0).wait(1).to({scaleY:1.03,x:-199.6,y:82.9},0).wait(1).to({scaleY:1.03,x:-199.7,y:83.4},0).wait(1).to({scaleY:1.03,y:83.9},0).wait(1).to({scaleY:1.02,x:-199.8,y:84.4},0).wait(1).to({scaleY:1.02,rotation:4.6,x:-199.9,y:84.9},0).wait(1).to({scaleY:1.02,x:-200,y:85.4},0).wait(1).to({scaleY:1.02,x:-200.1,y:85.9},0).wait(1).to({scaleY:1.02,x:-200.2,y:86.5},0).wait(1).to({scaleY:1.01,y:87},0).wait(1).to({scaleY:1.01,x:-200.3,y:87.5},0).wait(1).to({scaleX:1,scaleY:1.01,x:-200.4,y:88},0).wait(1).to({scaleY:1.01,x:-200.5,y:88.5},0).wait(1).to({scaleY:1.01,x:-200.6,y:89},0).wait(1).to({scaleY:1,x:-200.7,y:89.5},0).wait(1).to({scaleY:1,rotation:4.5,y:90},0).wait(1).to({scaleY:1,x:-200.8,y:90.6},0).wait(1));

	// flower
	this.instance_3 = new lib.flower();
	this.instance_3.parent = this;
	this.instance_3.setTransform(320,226,0.826,0.826,0,0,0,-16.1,243.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,rotation:0.3,x:334.3,y:24.8},0).wait(1).to({rotation:0.6,x:335.2},0).wait(1).to({rotation:0.8,x:336.2,y:24.9},0).wait(1).to({rotation:1.1,x:337.2,y:25},0).wait(1).to({rotation:1.4,x:338.1,y:25.1},0).wait(1).to({rotation:1.7,x:339.1,y:25.2},0).wait(1).to({rotation:1.9,x:340.1,y:25.3},0).wait(1).to({rotation:2.2,x:341,y:25.4},0).wait(1).to({rotation:2.5,x:342,y:25.5},0).wait(1).to({rotation:2.8,x:343,y:25.6},0).wait(1).to({rotation:3,x:343.9,y:25.7},0).wait(1).to({rotation:3.3,x:344.9,y:25.8},0).wait(1).to({rotation:3.6,x:345.9,y:25.9},0).wait(1).to({rotation:3.9,x:346.8,y:26.1},0).wait(1).to({rotation:4.1,x:347.8,y:26.2},0).wait(1).to({rotation:4.4,x:348.7,y:26.3},0).wait(1).to({rotation:4.7,x:349.7,y:26.5},0).wait(1).to({rotation:5,x:350.7,y:26.6},0).wait(1).to({rotation:5.2,x:351.6,y:26.8},0).wait(1).to({rotation:5.5,x:352.6,y:26.9},0).wait(1).to({rotation:5.8,x:353.5,y:27.1},0).wait(1).to({rotation:5.4,x:352,y:26.8},0).wait(1).to({rotation:4.9,x:350.5,y:26.6},0).wait(1).to({rotation:4.5,x:349,y:26.4},0).wait(1).to({rotation:4.1,x:347.5,y:26.1},0).wait(1).to({rotation:3.6,x:346,y:25.9},0).wait(1).to({rotation:3.2,x:344.5,y:25.8},0).wait(1).to({rotation:2.8,x:343,y:25.6},0).wait(1).to({rotation:2.3,x:341.4,y:25.4},0).wait(1).to({rotation:1.9,x:339.9,y:25.2},0).wait(1).to({rotation:1.5,x:338.4,y:25.1},0).wait(1).to({rotation:1,x:336.9,y:25},0).wait(1).to({rotation:0.6,x:335.4,y:24.8},0).wait(1).to({rotation:0.2,x:333.8,y:24.7},0).wait(1).to({rotation:-0.3,x:332.3,y:24.6},0).wait(1).to({rotation:0,x:333.3,y:24.7},0).wait(1).to({rotation:0.3,x:334.3,y:24.8},0).wait(1).to({rotation:0.6,x:335.3},0).wait(1).to({rotation:0.8,x:336.3,y:24.9},0).wait(1).to({rotation:1.1,x:337.3,y:25},0).wait(1).to({rotation:1.4,x:338.3,y:25.1},0).wait(1).to({rotation:1.7,x:339.3,y:25.2},0).wait(1).to({rotation:2,x:340.2,y:25.3},0).wait(1).to({rotation:2.3,x:341.2,y:25.4},0).wait(1).to({rotation:2.5,x:342.2,y:25.5},0).wait(1).to({rotation:2.8,x:343.2,y:25.6},0).wait(1).to({rotation:3.1,x:344.2,y:25.7},0).wait(1).to({rotation:3.4,x:345.2,y:25.8},0).wait(1).to({rotation:3.7,x:346.2,y:26},0).wait(1).to({rotation:4,x:347.2,y:26.1},0).wait(1).to({rotation:4.2,x:348.1,y:26.2},0).wait(1).to({rotation:4.5,x:349.1,y:26.4},0).wait(1).to({rotation:4.7,x:349.8,y:26.5},0).wait(1).to({rotation:4.9,x:350.6,y:26.6},0).wait(1).to({rotation:5.1,x:351.3,y:26.7},0).wait(1).to({rotation:5.3,x:352,y:26.8},0).wait(1).to({rotation:5.6,x:352.7,y:26.9},0).wait(1).to({rotation:5.8,x:353.4,y:27},0).wait(1).to({rotation:6,x:354.1,y:27.2},0).wait(1).to({rotation:6.2,x:354.8,y:27.3},0).wait(1).to({rotation:6.4,x:355.6,y:27.4},0).wait(1).to({rotation:6.6,x:356.3,y:27.5},0).wait(1).to({rotation:6.8,x:357,y:27.7},0).wait(1).to({rotation:7,x:357.7,y:27.8},0).wait(1).to({rotation:7.2,x:358.4,y:28},0).wait(1).to({rotation:7.4,x:359.1,y:28.1},0).wait(1).to({rotation:7.6,x:359.8,y:28.2},0).wait(1).to({rotation:7.8,x:360.5,y:28.4},0).wait(1).to({rotation:8,x:361.2,y:28.5},0).wait(1).to({rotation:7.6,x:359.7,y:28.2},0).wait(1).to({rotation:7.1,x:358.1,y:27.9},0).wait(1).to({rotation:6.6,x:356.5,y:27.6},0).wait(1).to({rotation:6.2,x:354.9,y:27.3},0).wait(1).to({rotation:5.7,x:353.3,y:27},0).wait(1).to({rotation:5.3,x:351.7,y:26.8},0).wait(1).to({rotation:4.8,x:350.1,y:26.5},0).wait(1).to({rotation:4.4,x:348.6,y:26.3},0).wait(1).to({rotation:3.9,x:347,y:26.1},0).wait(1).to({rotation:3.4,x:345.4,y:25.9},0).wait(1).to({rotation:3.6,x:345.8},0).wait(1).to({rotation:3.7,x:346.3,y:26},0).wait(1).to({rotation:3.8,x:346.8},0).wait(1).to({rotation:4,x:347.3,y:26.1},0).wait(1).to({rotation:4.1,x:347.7,y:26.2},0).wait(1).to({rotation:4.3,x:348.2},0).wait(1).to({rotation:4.4,x:348.7,y:26.3},0).wait(1).to({rotation:4.5,x:349.1,y:26.4},0).wait(1).to({rotation:4.7,x:349.6},0).wait(1).to({rotation:4.8,x:350.1,y:26.5},0).wait(1).to({rotation:4.9,x:350.6,y:26.6},0).wait(1).to({rotation:5.1,x:351,y:26.7},0).wait(1).to({rotation:5.2,x:351.5},0).wait(1).to({rotation:5.3,x:352,y:26.8},0).wait(1).to({rotation:5.5,x:352.5,y:26.9},0).wait(1).to({rotation:5.6,x:352.9,y:27},0).wait(1).to({rotation:5.7,x:353.4},0).wait(1).to({rotation:5.9,x:353.9,y:27.1},0).wait(1).to({rotation:6,x:354.3,y:27.2},0).wait(1).to({rotation:6.2,x:354.8,y:27.3},0).wait(1).to({rotation:6.3,x:355.3,y:27.4},0).wait(1).to({rotation:6.4,x:355.7,y:27.5},0).wait(1).to({rotation:6.6,x:356.2},0).wait(1).to({rotation:6.7,x:356.7,y:27.6},0).wait(1).to({rotation:6.8,x:357.2,y:27.7},0).wait(1).to({rotation:7,x:357.6,y:27.8},0).wait(1).to({rotation:7.1,x:358.1,y:27.9},0).wait(1).to({rotation:6.7,x:356.6,y:27.6},0).wait(1).to({rotation:6.2,x:355.1,y:27.3},0).wait(1).to({rotation:5.8,x:353.5,y:27.1},0).wait(1).to({rotation:5.3,x:352,y:26.8},0).wait(1).to({rotation:4.9,x:350.5,y:26.6},0).wait(1).to({rotation:4.5,x:349,y:26.3},0).wait(1).to({rotation:4,x:347.4,y:26.1},0).wait(1).to({rotation:3.6,x:345.9,y:25.9},0).wait(1).to({rotation:3.2,x:344.4,y:25.7},0).wait(1).to({rotation:2.7,x:342.8,y:25.6},0).wait(1).to({rotation:2.9,x:343.6},0).wait(1).to({rotation:3.1,x:344.3,y:25.7},0).wait(1).to({rotation:3.3,x:345,y:25.8},0).wait(1).to({rotation:3.6,x:345.8,y:25.9},0).wait(1).to({rotation:3.8,x:346.5,y:26},0).wait(1).to({rotation:4,x:347.2,y:26.1},0).wait(1).to({rotation:4.2,x:348,y:26.2},0).wait(1).to({rotation:4.4,x:348.7,y:26.3},0).wait(1).to({rotation:4.6,x:349.4,y:26.4},0).wait(1).to({rotation:4.8,x:350.2,y:26.5},0).wait(1).to({rotation:5,x:350.9,y:26.6},0).wait(1).to({rotation:5.2,x:351.6,y:26.8},0).wait(1).to({rotation:5.4,x:352.4,y:26.9},0).wait(1).to({rotation:5.7,x:353.1,y:27},0).wait(1).to({rotation:5.9,x:353.8,y:27.1},0).wait(1).to({rotation:6.1,x:354.5,y:27.2},0).wait(1).to({rotation:6.3,x:355.3,y:27.4},0).wait(1).to({rotation:6.5,x:356,y:27.5},0).wait(1).to({rotation:6.1,x:354.7,y:27.3},0).wait(1).to({rotation:5.8,x:353.4,y:27},0).wait(1).to({rotation:5.4,x:352.1,y:26.8},0).wait(1).to({rotation:5,x:350.8,y:26.6},0).wait(1).to({rotation:4.6,x:349.5,y:26.4},0).wait(1).to({rotation:4.3,x:348.2,y:26.2},0).wait(1).to({rotation:3.9,x:346.9,y:26.1},0).wait(1).to({rotation:3.5,x:345.6,y:25.9},0).wait(1).to({rotation:3.1,x:344.3,y:25.7},0).wait(1).to({rotation:2.8,x:343,y:25.6},0).wait(1).to({rotation:2.4,x:341.7,y:25.4},0).wait(1).to({rotation:2,x:340.4,y:25.3},0).wait(1));

	// bkgr
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#88744C","#574109","#3A2600"],[0,0.498,1],0,127.5,0,-127.4).s().p("APVSvQmAhNsMglIqGgaQl+gQkJgXQrMg9sJgnQivgIlfAIQleAIivgJQmegbjQgKQlsgSkFAOQhTAMgpABQhJABgjgtQgkguAHh7QADg8ATh1QAHgrAeiGQAYhvAHhDQAEgugDhwQgEhmAKg5QANhSA/imQA7icAKhfQALhngMg9QgNhAgxhSIFehQQA5gGBngjQBygnAvgJQBOgPB0ANIDDAVQBBADBtgGQB/gHAvAAQBjAACOAPIDvAZQAmADDdAcQCdATBpAAQBvABDSguQDRgtBvAAQCEACD8AFQDaABCngZQCbgWEzgxQELgiDHAMQDSAND1BGQCRApCZAPQB/ANCzgCQDlgBF0goQHUgyCFgJQC4gLFEAJQFaAJCkgHQC4gIKlAAQIVgBFGghQBJgHCSgRQCAgMBdAIQA1AFBkAVQBmAWAyAFQDeAWCmgpQAGMbhFLIQgGA6gSCEQgQB6gGBEQgCAaAGB+QAFBpgNAoQgbBUjlBGQhMAXhrAXIiMAeQkIA8lEAEQkZADk4gnQkYgjlnAPQitAIm+AnQm+AmkmADIgUAAQkfAAlzhLg");
	this.shape.setTransform(76.9,361.3,1.31,1.387);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(147));

	// bubbles
	this.instance_4 = new lib.bubbles("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.8,50.7,0.151,0.151,0,0,0,118.2,-768.5);
	this.instance_4.alpha = 0.301;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).wait(1).to({regX:118.8,regY:-770.1,scaleX:0.15,scaleY:0.15,x:100.4,y:11.8,alpha:0.3,startPosition:1},0).wait(1).to({scaleX:0.15,scaleY:0.15,x:98.9,y:-27,startPosition:2},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:97.3,y:-65.7,startPosition:3},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:95.8,y:-104.4,startPosition:4},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:94.3,y:-143.1,startPosition:5},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:92.8,y:-181.8,startPosition:6},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:91.3,y:-220.5,startPosition:7},0).wait(1).to({scaleX:0.16,scaleY:0.16,x:89.8,y:-259.2,startPosition:8},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:88.3,y:-298,startPosition:9},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:86.8,y:-336.7,startPosition:10},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:85.3,y:-375.4,startPosition:11},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:83.7,y:-414.1,startPosition:12},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:82.2,y:-452.8,startPosition:13},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:80.7,y:-491.5,startPosition:14},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:79.2,y:-530.3,startPosition:15},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:77.7,y:-569,startPosition:16},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:76.2,y:-607.7,startPosition:17},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:74.7,y:-646.4,startPosition:18},0).wait(1).to({scaleX:0.18,scaleY:0.18,x:73.2,y:-685.1,startPosition:19},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:71.7,y:-723.9,startPosition:20},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:70.1,y:-762.5,startPosition:21},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:68.6,y:-801.3,startPosition:22},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:67.1,y:-840,startPosition:23},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:65.6,y:-878.7,startPosition:24},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:64.1,y:-917.5,startPosition:25},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:62.6,y:-956.1,startPosition:26},0).wait(1).to({scaleX:0.2,scaleY:0.2,x:61,y:-994.9,startPosition:27},0).to({_off:true},1).wait(36).to({_off:false,regX:106.5,regY:-190.7,scaleX:0.12,scaleY:0.12,x:-397.4,y:175.1,alpha:0.309,startPosition:0},0).wait(1).to({regX:118.8,regY:-770.1,scaleX:0.12,scaleY:0.12,x:-396.3,y:64.1,alpha:0.31,startPosition:1},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-396.7,y:21.6,startPosition:2},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-397,y:-20.9,startPosition:3},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-397.4,y:-63.3,startPosition:4},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-397.8,y:-105.8,startPosition:5},0).wait(1).to({scaleX:0.12,scaleY:0.12,x:-398.2,y:-148.2,startPosition:6},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-398.5,y:-190.6,startPosition:7},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-398.9,y:-233.2,startPosition:8},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-399.3,y:-275.7,startPosition:9},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-399.6,y:-318.1,startPosition:10},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-400,y:-360.6,startPosition:11},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-400.4,y:-403.1,startPosition:12},0).wait(1).to({x:-400.7,y:-445.6,startPosition:13},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-401.1,y:-488,startPosition:14},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-401.5,y:-530.5,startPosition:15},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-401.8,y:-573,startPosition:16},0).wait(1).to({scaleX:0.13,scaleY:0.13,x:-402.2,y:-615.5,startPosition:17},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-402.6,y:-658,startPosition:18},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-403,y:-700.4,startPosition:19},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-403.3,y:-742.9,startPosition:20},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-403.7,y:-785.4,startPosition:21},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-404.1,y:-827.9,startPosition:22},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-404.5,y:-870.3,startPosition:23},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-404.8,y:-912.8,startPosition:24},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-405.2,y:-955.3,startPosition:25},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-405.6,y:-997.8,startPosition:26},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:-406,y:-1040.3,startPosition:27},0).to({_off:true},1).wait(47));

	// bubbles
	this.instance_5 = new lib.bubbles("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(423.2,160.9,0.176,0.176,0,0,0,107,-188.1);
	this.instance_5.alpha = 0.309;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).wait(1).to({regX:118.8,regY:-770.1,x:425.4,y:19.1,alpha:0.31,startPosition:1},0).wait(1).to({x:425.6,y:-20.1,startPosition:2},0).wait(1).to({x:425.7,y:-59.3,startPosition:3},0).wait(1).to({x:425.9,y:-98.5,startPosition:4},0).wait(1).to({x:426,y:-137.7,startPosition:5},0).wait(1).to({x:426.2,y:-176.9,startPosition:6},0).wait(1).to({x:426.3,y:-216,startPosition:7},0).wait(1).to({x:426.5,y:-255.2,startPosition:8},0).wait(1).to({x:426.6,y:-294.4,startPosition:9},0).wait(1).to({x:426.8,y:-333.6,startPosition:10},0).wait(1).to({x:427,y:-372.8,startPosition:11},0).wait(1).to({x:427.1,y:-412,startPosition:12},0).wait(1).to({x:427.3,y:-451.2,startPosition:13},0).wait(1).to({x:427.4,y:-490.4,startPosition:14},0).wait(1).to({x:427.6,y:-529.6,startPosition:15},0).wait(1).to({x:427.7,y:-568.8,startPosition:16},0).wait(1).to({x:427.9,y:-608,startPosition:17},0).wait(1).to({x:428,y:-647.2,startPosition:18},0).wait(1).to({x:428.2,y:-686.4,startPosition:19},0).wait(1).to({x:428.4,y:-725.6,startPosition:20},0).wait(1).to({x:428.5,y:-764.7,startPosition:21},0).wait(1).to({x:428.7,y:-803.9,startPosition:22},0).wait(1).to({x:428.8,y:-843.1,startPosition:23},0).wait(1).to({x:429,y:-882.3,startPosition:24},0).wait(1).to({x:429.1,y:-921.5,startPosition:25},0).wait(1).to({x:429.3,y:-960.7,startPosition:26},0).wait(1).to({x:429.4,y:-999.9,startPosition:27},0).to({_off:true},1).wait(65));

	// Layer 3
	this.instance_6 = new lib.blackout();
	this.instance_6.parent = this;
	this.instance_6.setTransform(167.2,-157.2,1.403,1.316);
	this.instance_6.alpha = 0.441;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-717.8,-1069,1985,1633.1);


// stage content:
(lib._20161028_FWWPQ_v01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Wild Celery
	this.instance = new lib.FadeIn("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(404.6,717.6,0.689,0.689,0,0,0,84.2,24.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:285.8,regY:-429.3,x:543.5,y:404.6,alpha:0.077,startPosition:1},0).wait(1).to({alpha:0.154,startPosition:2},0).wait(1).to({alpha:0.231,startPosition:3},0).wait(1).to({alpha:0.308,startPosition:4},0).wait(1).to({alpha:0.385,startPosition:5},0).wait(1).to({alpha:0.462,startPosition:6},0).wait(1).to({alpha:0.538,startPosition:7},0).wait(1).to({alpha:0.615,startPosition:8},0).wait(1).to({alpha:0.692,startPosition:9},0).wait(1).to({alpha:0.769,startPosition:10},0).wait(1).to({alpha:0.846,startPosition:11},0).wait(1).to({alpha:0.923,startPosition:12},0).wait(1).to({alpha:1,startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({alpha:0.921,startPosition:117},0).wait(1).to({alpha:0.842,startPosition:118},0).wait(1).to({alpha:0.762,startPosition:119},0).wait(1).to({alpha:0.683,startPosition:120},0).wait(1).to({alpha:0.604,startPosition:121},0).wait(1).to({alpha:0.525,startPosition:122},0).wait(1).to({alpha:0.446,startPosition:123},0).wait(1).to({alpha:0.367,startPosition:124},0).wait(1).to({alpha:0.287,startPosition:125},0).wait(1).to({alpha:0.208,startPosition:126},0).wait(1).to({alpha:0.129,startPosition:127},0).wait(1).to({alpha:0.05,startPosition:128},0).to({_off:true},1).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(236,475.8,1367.8,1125.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;