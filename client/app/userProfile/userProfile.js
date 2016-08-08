angular.module('NeighborPool.UserProfile',['infinite-scroll'])

.config(function($stateProvider){

  $stateProvider
  // the state will go on the html that you want route the user.
  .state('userProfile', {
    url: '/userProfile',
    templateUrl: 'app/userProfile/userProfile.html',
    controller: function($scope, $http, $window, $location){

      // Make a Get resquest to get all of the users to display below map
      $http({
        method: 'GET',
        url: '/userProfile',
        contentType: 'application/json'
      })
      .then(function(resp){
        $scope.allUsers = resp.data;
      })
      .catch(function(error){
        console.log(error);
      });

      $scope.signOut = function(){
        $window.localStorage.removeItem('NeighborPool');
        $location.path('/login');
      }

      $scope.changeColor = false;

      $scope.changeThumbColor = function(){
      
        $('.thumbs').click(function(){
          var thumbsUp = $(this);
          if (!$scope.changeColor) {
            thumbsUp.css({'background-color': 'green'});
            $scope.changeColor = true;
          }else{
            thumbsUp.css({'background-color': 'white'});
            $scope.changeColor = false;
          }
        });
      };

      $scope.alerting = function(){
        alert('this will be a pop up box.')
      }

    },
    controllerAs: 'userProfileCtrl'
  });

})