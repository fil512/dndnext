'use strict';


function CharCtrl($scope) {
	var stepTitle = [
		"Determine Ability Scores",
		"Choose a Race",
		"Choose a Subrace",
		"Choose a Class",
		"Choose a Subclass",
	];
	
	var stepDesc = [
	Desc["attr"],
	Desc["race"],
	Desc["subrace"]
	];
	
	$scope.size = {
		"dwarf" : "medium",
		"elf" : "medium",
		"halfling" : "small",
		"human" : "medium"		
	};
	
	$scope.speed = {
		"dwarf" : 25,
		"elf" : 30,
		"halfling" : 25,
		"human" : 30		
	};
	
	$scope.race_wis = {
		"dwarf" :1
	};
	
	$scope.race_int = {
		"elf" :1
	};
	
	$scope.race_features = {
		"dwarf" : ["low-light vision", "dwarven resilience", "stonecunning"],
		"elf" : ["low-light vision", "free spirit", "trance"],
		"halfling" : ["lucky", "halfling nimbleness"],
		"human" : []		
	};
	$scope.languages = {

		"dwarf" : ["common", "dwarvish"],
		"elf" : ["common", "elvish"],
		"halfling" : ["common", "halfling"],
		"human" : ["common"]		
	};
	
	$scope.race_skills = {
		"dwarf" : ["Knowledge	(dungeoneering)"],
		"elf" : ["Listen", "Spot"],
		"halfling" : [],
		"human" : []
	};
	
	// TODO race weapon training
	// TODO race armor mastery
	// TODO elf cantrip
	// TODO human attributes
	
	var subraces = {
		"dwarf" : ["hill dwarf", "mountain dwarf"],
		"elf" : ["high elf", "wood elf"],
		"halfling" : ["lightfoot", "stout"],
		"human" : ["human"]
	};
	
	
	$scope.stepTitle = function() {
		return stepTitle[$scope.step];
	}
	
	$scope.roll = function() {
		$scope.str = Dice.roll();
		$scope.dex = Dice.roll();
		$scope.con = Dice.roll();
		$scope.int = Dice.roll();
		$scope.wis = Dice.roll();
		$scope.cha = Dice.roll();
		$scope.race = "";
		$scope.subrace = "";
	}
	
	$scope.reset = function() {
		$scope.step=0;	
		$scope.str = "";
		$scope.dex = "";
		$scope.con = "";
		$scope.int = "";
		$scope.wis = "";
		$scope.cha = "";
	}
	
	$scope.next = function() {
		++$scope.step;
		$scope.desc = stepDesc[$scope.step];
	} 
	
	$scope.clickAttr = function(event) {
		var field = event.target.getAttribute("ng-model");
		$scope.desc = Desc[field];
	}
	
	$scope.changeRace = function() {
		$scope.desc = Desc[$scope.race];
		$scope.subraces = subraces[$scope.race];
	}
	
	$scope.reset();
}
