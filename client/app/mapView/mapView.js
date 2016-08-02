angular.module('MapView',[])
.config(function($stateProvider){
<<<<<<< HEAD
  $stateProvider
  // the state will go on the html that you want route the user.
  .state('mapView', {
    url: '/mapView',
    templateUrl: 'app/mapView/mapView.html',
    controller: function($scope){
        // The map object has the coords for the map when it renders and the zoom.
    	$scope.map = { center: { latitude: 37, longitude: -122 }, zoom: 15 };
        // show message if location is not supported or found.
        $scope.output = document.getElementById("loc");
        // This object will be used to store the cordinates of the user when the button is clicked, and display the marker
        $scope.marker = {};
        $scope.control = {};
      
        // mock data to display users below map.
        $scope.mockUsers = [{username: 'young', mess: 'I need a ride at 9am'},{username: 'young', mess: 'I need a ride at 9am'}, {username: 'young', mess: 'I need a ride at 9am'}]
        // Function to get location 
        $scope.getlocation = function(){
            // if the geolocation is not available display message.
            if (!navigator.geolocation){
              output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
              return;
            }
            // invoke the geolocation to get the current location.
            navigator.geolocation.getCurrentPosition(function(position){
              console.log('current position',position.coords)
              // Add the coords to the map object.
               $scope.map.center.latitude = position.coords.latitude;
               $scope.map.center.longitude = position.coords.longitude;
            }, function(){
                // error handling.
              $scope.output.innerHTML = "Unable to retrieve your location";
            });
=======
    $stateProvider
    // the state will go on the html that you want route the user.
    .state('mapView', {
        url: '/mapView',
        templateUrl: 'app/mapView/mapView.html',
        controller: function($scope){
<<<<<<< HEAD
        	$scope.map = { center: { latitude: 37, longitude: -122 }, zoom: 15 };
=======
          $scope.map = { center: { latitude: 37, longitude: -122 }, zoom: 15 };
>>>>>>> pr/31
            $scope.output = document.getElementById("loc");
            $scope.maker = {};
>>>>>>> Dev

        }();
        // function to request ride
         $scope.myRide = function(){
            // Add the map coords to the marker object.
            $scope.marker.latitude = $scope.map.center.latitude;
            $scope.marker.longitude = $scope.map.center.longitude;
         }
    },
    controllerAs: 'LoginCtrl'
  });
})