
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
                console.log('im on the click')
                $http({
                    method: 'POST',
                    url: '/login',
                    data: $scope.user
                }).then(function(res){
                    $window.localStorage.setItem('NeighborPool.login', res.data.token);
                    $location.path('/mapView')
                })
            }
        },
        controllerAs: 'LoginCtrl'
    });
})