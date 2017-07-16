(function (){
'use strict';

angular.module("MyFirstApp",[])
	.controller("MyFirstController", MyFirstController)
	.filter("loves",LovesFilter)
	.filter("truth", TruthFilter);

MyFirstController.$inject = ['$scope','lovesFilter'];

 function MyFirstController($scope,lovesFilter){

	$scope.name = "Bala";
	$scope.msg = "Hello Coder. Hope you like this example!";
	$scope.sayHello = function (){
		return "HHEELLOO WWOORRLLD!";
	};

	$scope.showMsg = function(){
		return $scope.msg;
	};

	$scope.showFilteredMsg = function() {
		return lovesFilter($scope.msg);
	};
	$scope.cost = .10;
	console.log("Angular");
}

function LovesFilter() {
	return function(input){
		input = input || "";
		input = input.replace("like","love");
		return input;
	};
}

function TruthFilter() {
	return function(input, target, replace){
		input = input || "";
		console.log(target);
		console.log(replace);
		console.log(input.replace(target,replace));
		return input.replace(target,replace);
	};
}
})();
