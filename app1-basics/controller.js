angular.module('firstApp').controller('firstCtrl', function($scope, firstService, $timeout){
   
   $scope.myName = 'Barry';
   $scope.ready = "I'm not ready yet.";
   $scope.countdown = '';

   $scope.countdownTimer = function(){
      $scope.countdown = 5;
      for(var i=0;i>=0;i--){
         $timeout(timer(i), 1000 * (5-i));
      }

      function timer(i){
         return function(){
            $scope.countdown = i;
         }
      }
   }

   $scope.readyYet = function(){
      $scope.countdownTimer();
      firstService.readyYet().then(function(response){
         $scope.ready = response;
         $scope.countdown = '';
      });
   }
});