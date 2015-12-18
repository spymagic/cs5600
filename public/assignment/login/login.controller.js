(function(){ 
	  angular
		.module("FormBuilderApp")
		.controller("LoginController", LoginController);
})();

function LoginController($scope, $rootScope, $location, UserService){
	$scope.login = function (){
				
		username = $scope.username;
		password = $scope.password;

		UserService.findUserByUsernameAndPassword(username, password)
			.then(function(user){
				console.log(user)
				if(user == null)
					alert("Sorry, The usrename or password is invalid")
				else{
					console.log(user)
					$rootScope.user = user;
					$location.path('/profile');
				}
			});
	}
}