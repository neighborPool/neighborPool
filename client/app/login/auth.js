angular.module('NeighborPool.Login',[])

.config(function($stateProvider){

	$stateProvider
	// the state will go on the html that you want route the user.
	.state('login', {
		url: '/login',
		templateUrl: 'app/login/login.html',
		controller: function($scope, $http, $location, $window){

		},
		controllerAs: 'LoginCtrl'
	});

})