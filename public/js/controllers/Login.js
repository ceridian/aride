angular.module('Login', []).controller('LoginSetup', function($scope){
  this.login = function(main){
    console.log(email, pass);
		$http.post('/login', {email: email, pass: pass}).success(function(data, status, headers, config){
			console.log(data, status);
    }).error(function(data, status, headers, config) {
			console.log(data.status);
		});
  }
});
