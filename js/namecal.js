(function (){
'use strict';

angular.module("NameCalculator",[]).controller("NameCalculatorController", function($scope){

	$scope.name = "";
	$scope.totalValue = 0;
	$scope.displayValue = function (){
		var totalValue = calculateNumericForString($scope.name);
		$scope.totalValue = totalValue;

	}

	function calculateNumericForString(str){
		var totalStrValue = 0;
		for(var i=0;i<str.length;i++) {
			console.log("Old Value : "+totalStrValue+" | Char Value : "+str.charCodeAt(i));
			totalStrValue += str.charCodeAt(i);
		}
		return totalStrValue;
	}
	console.log("Angular");
});

})();