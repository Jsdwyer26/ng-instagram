var app = angular.module('instagramSearchApp', ['ngRoute'] );

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/search.html',
      controller: 'SearchCtrl'
    })
    .when('/favorites', {
      templateUrl: 'templates/favorites.html',
      controller: 'FavoritesCtrl'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);

app.controller('SearchCtrl', ['$scope', '$http', function($scope){
  $scope.test = "This is the Search Ctrl";
}]);

app.controller('FavoritesCtrl', ['$scope', '$http', function($scope){
  $scope.test = "This is the Favorites Ctrl";
}]);