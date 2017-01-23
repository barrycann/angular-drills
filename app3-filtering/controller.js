angular.module('filterApp')
.controller('filterController', function($scope, filterService){
    $scope.getData = function(){
        $scope.theData = filterService.getData();
    }


    $scope.getData();
});