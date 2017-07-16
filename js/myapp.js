(function(){
'use strict';

angular.module("MyModule",[]).controller("MyController", MyController);

MyController.$inject = ['$scope'];

function MyController($scope) {
	$scope.msg = "My Digest Watcher";
  $scope.count  = 0;
  $scope.counter = 0;

  $scope.numberOfWacher = function () {
    console.log("Number of watchers : "+$scope.$$watchersCount);
  };

  $scope.assignValue = function() {
    $scope.count = 1;
  };

  $scope.increment = function(){
    $scope.counter++;
  };

  $scope.$watch('count',function(newValue, oldValue){
    console.log("count oldValue : "+oldValue);
    console.log("count newValue : "+newValue);
  });

  $scope.$watch('counter',function(newValue, oldValue){
    console.log("counter oldValue : "+oldValue);
    console.log("counter newValue : "+newValue);
  });
}

})()
