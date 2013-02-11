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
