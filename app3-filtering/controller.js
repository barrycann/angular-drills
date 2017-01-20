angular.module('filterApp').controller('filterController', function($scope, filterService){
   $scope.getData = function(){
      $scope.data = filterService.getData();
   }

   $scope.datSort = "name";

   $scope.sortObj = [{
      name: "Name",
      value: "name"
   },
   {
      name: "Email",
      value: "email"
   },
   {
      name: "Date Emp",
      value: "dateEmployed"
   },
   {
      name: "Phone",
      value: "phone"
   }]

   $scope.getData();


});