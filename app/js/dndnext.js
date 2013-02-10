'use strict';



function CharCtrl($scope) {
	var stateDesc = {
		0 : "Determine Ability Scores",
		1 : "Choose a Race",
		2 : "Choose a Subrace",
		3 : "Choose a Class",
		4 : "Choose a Subclass",
	}
	
	$scope.step=0;
	
	$scope.stepDesc = function() {
		return stateDesc[$scope.step];
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
	} 
	
	$scope.clicky = function(event) {
		var field = event.target.getAttribute("ng-model");
		$scope.desc = Desc[field];
	}
}
