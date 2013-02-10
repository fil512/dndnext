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
	
	$scope.step=0;
	
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
	}
}
