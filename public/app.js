var app = angular.module('myApp', ['ngMaterial']);

app.controller('listController', function($scope, dataFactory) {

  //app data model
  $scope.data = {};

  //Grabs data from server
  dataFactory.getData().then(function(data) {
    $scope.data.activities = data.recentActivities;
    console.log($scope.data);
  });

});

app.factory('dataFactory', function($http) {

  //Makes request to backend api
  var getData = function(){
    return $http({
      method: 'GET',
      url: '/api/data'
    }).then(function(response) {
      return response.data.data;
    });
  };

  return {
    getData: getData
  };

});

//Filter for adding comment type
app.filter('typeString', function() {
  return function(string) {
    if(string === "Comment"){
      return " commented on the idea";
    } else if (string === "Idea") {
      return " posted an idea";
    } else if (string === "Reply") {
      return " replied to a comment on the idea";
    }
  };
}); 

//Filter for converting time to string
app.filter('convertTime', function() {
  return function(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  };
});