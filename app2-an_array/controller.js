angular.module('arrayApp')
.controller('arrayController', function($scope, arrayService){
    $scope.example1 = "it works";

    $scope.getData = function(){
        $scope.arrayData = arrayService.getData();
    }

    $scope.getData();
});