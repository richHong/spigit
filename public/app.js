var app = angular.module('myApp', []);

app.controller('listController', function($scope, dataFactory){
  $scope.data = {text: 'Hello World'};
  dataFactory.getData().then(function(data){
    console.log(data);
    $scope.data.activities = data.recentActivities;
    console.log($scope.data)
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