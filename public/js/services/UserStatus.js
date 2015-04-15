angular.module('UserService').service('UserStatus', function(){
	var user = false;
	return {
		getUser: function(){
			return user;
		},
		setUser: function(value){
			user = value;
		}
	}
});
