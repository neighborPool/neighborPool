angular.module('NeighborPool.UserProfile',['infinite-scroll'])

.config(function($stateProvider){

	$stateProvider
	// the state will go on the html that you want route the user.
	.state('userProfile', {
		url: '/userProfile',
		templateUrl: 'app/userProfile/userProfile.html',
		controller: function($scope, $http){
			$scope.mockUsers = [{username: 'youghdgfng', mess: 'I needzc a ride at 9am'},{username: 'youfgsng', mess: 'I needcvz a ride at 9am'}, {username: 'yoghdung', mess: 'I need vzcxa ride at 9am'}, {username: 'young', mess: 'I need a ride at 9am'},{username: 'yodghdung', mess: 'I need acvzc ride at 9am'}, {username: 'you zdgng', mess: 'I need a ride at 9am'},{username: 'youfsgsfng', mess: 'I needcvz a ride at 9am'},{username: 'youfgsng', mess: 'I need a ride at 9am'}, {username: 'yodhjung', mess: 'I need a rifsgde at 9am'}, {username: 'youfgng', mess: 'I need a rfsgside at 9am'},{username: 'df', mess: 'I needsfg a ride at 9am'}, {username: 'yougsfng', mess: 'I need a risfgde at 9am'},{username: 'dfd', mess: 'I need a ridesfg at 9am'},{username: 'young', mess: 'I need a ride at 9am'}, {username: 'youdfsng', mess: 'I need a ride atfdf 9am'}, {username: 'fs', mess: 'I need a ride at 9am'},{username: 'df', mess: 'I njkjeed a ridsdfae at 9am'}, {username: 'yfgsoung', mess: 'I df a ride at 9am'},{username: 'sdf', mess: 'I need a rsfgsfide at 9am'},{username: 'df', mess: 'I need asfgs ride at 9am'}, {username: 'fd', mess: 'I need a risfgsde at 9am'}, {username: 'w', mess: 'I need a ride sfdgsat 9am'},{username: 'ybfgoung', mess: 'I need a rsfgside at 9am'}, {username: 'younsfgg', mess: 'I need a risfgsfde at 9am'}];

			$scope.addMore = [];
			$scope.show = 5;
			$scope.start = 0;
			$scope.loadMore = function(){
				
				console.log($scope.show)
				if ($scope.show > $scope.mockUsers.length ) { return}
				for (var i = $scope.start; i < $scope.show; i++) {
					
					$scope.addMore.push($scope.mockUsers[i]);
				}
				$scope.start = $scope.show;
				$scope.show += $scope.show;
			};

		},
		controllerAs: 'userProfileCtrl'
	});

})