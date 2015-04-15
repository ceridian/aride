app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login-setup.html',
      controller: 'LoginSetup',
      controllerAs: 'login'
    })
    .when('/route', {
      templateUrl: 'views/route-plot.html',
      controller: 'RoutePlot',
      controllerAs: 'route'
    })
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomePage',
      controllerAs: 'home'
    });

    $locationProvider.html5Mode(true);

}]);
