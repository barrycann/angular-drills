angular.module('firstApp').service('firstService',function($q){
   var deferred = $q.defer();

   this.readyYet = function(){
      setTimeout(function(){
         var readyNow = "Okay, I'm ready now :D";
         deferred.resolve(readyNow);
         return 
      }, 5000);
      return deferred.promise;  
   }

});
