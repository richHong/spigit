var app = angular.module('myApp', ['ngMaterial']);

app.controller('listController', function($scope, dataFactory){

  $scope.data = {};

  //Grabs data from server
  dataFactory.getData().then(function(data){
    $scope.data.activities = data.recentActivities;
    console.log($scope.data);
  });
  
});

app.factory('dataFactory', function($http){

  var getData = function(){
    return $http({
      method: 'GET',
      url: '/api/data'
    }).then(function(response){
      return response.data.data;
    });
  };

  return {
    getData: getData
  };
});