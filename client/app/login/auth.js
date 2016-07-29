angular.module('NeighborPool.Login',[])

.config(function($stateProvider){

	$stateProvider
	// the state will go on the html that you want route the user.
	.state('login', {
		url: '/login',
		templateUrl: 'app/login/login.html',
		controller: function($scope, $http, $location, $window){


		scope.signin =function (username, password){
			var newUser = {
				username: usename,
				password: password
			}
			
			$http({
				method: 'POST',
				url: '/signin',
				data: newUser
			}).then(function(resp){
				var token = resp.data
				$window.localStorage.revomeItem('token')
			})


			$scope.usename ='';
		  $scope.usename ='';

		}

		},
		controllerAs: 'LoginCtrl'
	});

})