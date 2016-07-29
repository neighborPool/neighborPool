angular.module('NeighborPool.UserProfile',[])

.config(function($stateProvider){

	$stateProvider
	// the state will go on the html that you want route the user.
	.state('userProfile', {
		url: '/userProfile',
		templateUrl: 'app/userProfile/userProfile.html',
		controller: function($scope, $http){

		},
		controllerAs: 'userProfileCtrl'
	});

})