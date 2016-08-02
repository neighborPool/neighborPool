angular.module('NeighborPool.Signup',[])

.config(function($stateProvider){

	$stateProvider
	// the state will go on the html that you want route the user.
	.state('signup', {
		url: '/signup',
		templateUrl: 'app/signup/signup.html',
		userService: function($http){
			// return $http.POST('signup');
		},
		controller: function($scope, $http, $location, $window){
			$scope.saveUser = function(){
				
				
				$http({
					method: 'POST',
					url: '/signup',
					data: $scope.user
				})
			}
		},
		controllerAs: 'LoginCtrl'
	});
<<<<<<< HEAD

})


=======
})



>>>>>>> pr/31
