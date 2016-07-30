angular.module('NeighborPool.Signup', [])

.config(function($stateProvider){
	$stateProvider

		.state('signup', {
			url: '/signup',
			templateUrl: 'app/signup/signup.html',
			resolve: {
				controller: function($scope, $http, $location, $window){
					$scope.username = '';
					$scope.password = '';
				}
			}
		})
});


