angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login-setup.html',
      controller: 'LoginSetup',
    })
    .when('/route', {
      templateUrl: 'views/route-plot.html',
      controller: 'RoutePlot',
    })
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomePage',
    });

    $locationProvider.html5Mode(true);

}]);
