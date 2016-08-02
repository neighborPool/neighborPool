angular.module('MapView',[])
.config(function($stateProvider){
    $stateProvider
    // the state will go on the html that you want route the user.
    .state('mapView', {
        url: '/mapView',
        templateUrl: 'app/mapView/mapView.html',
        controller: function($scope){
          $scope.map = { center: { latitude: 37, longitude: -122 }, zoom: 15 };
            $scope.output = document.getElementById("loc");
            $scope.maker = {};

            $scope.mockUsers = [{username: 'young', mess: 'I need a ride at 9am'},{username: 'young', mess: 'I need a ride at 9am'}, {username: 'young', mess: 'I need a ride at 9am'}]

            $scope.location = function(){
                if (!navigator.geolocation){
                  output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
                  return;
                }
                navigator.geolocation.getCurrentPosition(function(position){
                  console.log('current position',position.coords)
                   $scope.map.center.latitude = position.coords.latitude;
                   $scope.map.center.longitude = position.coords.longitude;
                }, function(){
                  $scope.output.innerHTML = "Unable to retrieve your location";
                });
            }()

             $scope.myRide = function(){
                $scope.maker.latitude = $scope.map.center.latitude;
                $scope.maker.longitude = $scope.map.center.longitude;
             }
        },
        controllerAs: 'LoginCtrl'
    });
})