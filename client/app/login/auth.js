
angular.module('NeighborPool.Login',[])
.config(function($stateProvider){
  $stateProvider
  // the state will go on the html that you want route the user.
  .state('login', {
    url: '/login',
    templateUrl: 'app/login/login.html',
    controller: function($scope, $http, $location, $window){
        
      $scope.signin = function(username, password){
        $scope.user = {
          username: username,
          password: password
        };
          $http({
            method: 'POST',
            url: '/login',
            data: $scope.user
          }).then(function(res){
            $window.localStorage.setItem('NeighborPool.login', res.data.token);
            $location.path('/mapView')
        })
        .catch(function(error){
          console.log(error)
        });

        $scope.username = '';
        $scope.password = '';
      }
    },
    controllerAs: 'LoginCtrl'
  });
})