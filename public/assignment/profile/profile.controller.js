(function(){ 
	  angular
		.module("FormBuilderApp")
		.controller("ProfileController", ProfileController);
})();

function ProfileController($scope, $rootScope, $location, UserService){
	var user = $rootScope.user;
	$scope.user = user; 
	$scope.update = function (user){

		UserService.updateUser(user._id, user)
			.then(function(users){
				for(var i=0; i<users.length; i++){
					if(users[i]._id === user._id){
						$scope.user = users[i];
						break;
					}
				}
			})
	}
}