'use strict';

angular.module('ahre.home',
  ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  });
}])

.controller('HomeController', ['$scope', function($scope) {
  $scope.message = "hey there!";
}]);
