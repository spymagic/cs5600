(function(){ 
	  angular
		.module("FormBuilderApp")
		.controller("RegisterController", RegisterController);
})();

function RegisterController($scope, $rootScope, $location, UserService){

	$scope.register = function (){
		var newUser = $scope.newUser;
		if(newUser.password != newUser.confirmPassword)
			alert("Your password and comfirm don't match, try again")
		else{
			delete newUser['confirmPassword'];

			UserService.createUser(newUser).then(
				function(users){
					for(var i=0; i<users.length; i++) {
						if(newUser.username == users[i].username && newUser.password == users[i].password) {
							$rootScope.user = users[i];
							$location.path('/profile');
						}
					}
			})
		}
	}
}