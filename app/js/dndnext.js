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
}
