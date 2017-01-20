angular.module('arrayApp').controller('arrayCtrl', function($scope, arrayService){
   $scope.getMyData = function(){
      $scope.data = arrayService.getMyData();
   }

   $scope.getMyData();


});