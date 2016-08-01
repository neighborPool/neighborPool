
angular.module('NeighborPool.Login',[])

.config(function($stateProvider){

	$stateProvider
	// the state will go on the html that you want route the user.
	.state('login', {
		url: '/login',
		templateUrl: 'app/login/login.html',
		userService: function($http){
			// return $http.get('signup');
		},
		controller: function($scope, $http, $location, $window){
			$scope.signin = function(){
				// var user1 = new User({username: $scope.user.username, password: $scope.user.password});
				// console.log(user1);
			}
		},
		controllerAs: 'LoginCtrl'
	});

})