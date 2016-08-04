angular.module('NeighborPool.Signup',[])

.config(function($stateProvider){

	$stateProvider
	// the state will go on the html that you want route the user.
	.state('signup', {
		url: '/signup',
		templateUrl: 'app/signup/signup.html',
		controller: function($scope, $http, $location, $window){
				
				// create user and http requestf
				$scope.submit = function(usern, passwrd){
					$scope.newUser = {
						username: usern,
						password: passwrd,
					}
					console.log('New user', $scope.newUser)
					$http({
						method: 'POST',
						url: '/signup',
						contentType: 'application/json',
						data: $scope.newUser
					})
					.then(function(resp){
						console.log('this is resp++++',resp)
						$window.localStorage.setItem('OneStop', resp.data.token); 
						$location.path('/mapView')
					})
					.catch(function(error){
		        console.log(error)
		    	});

					$scope.username = '';
					$scope.password = '';
				}
		},
		controllerAs: 'SignupCtrl'
	})


})






