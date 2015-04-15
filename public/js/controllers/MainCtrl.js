angular.module('aride', []).controller('MainCtrl', function($scope, UserService) {

  $scope.user = UserStatus.getUser();

  $scope.setUser = function(u){
    $scope.user = u;
    UserStatus.setUser(u);
  }

});
