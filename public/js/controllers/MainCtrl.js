angular.module('mc', []).controller('MainCtrl', function($scope, UserStatus) {

  $scope.user = UserStatus.getUser();

  $scope.setUser = function(u){
    $scope.user = u;
    UserStatus.setUser(u);
  }

});
