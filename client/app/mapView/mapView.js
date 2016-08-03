angular.module('MapView',[])
.config(function($stateProvider){
<<<<<<< 89db8b9ca81f3f8a2aaa54b5df6ff7d5c1a1701a
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
=======
    $stateProvider
    // the state will go on the html that you want route the user.
    .state('mapView', {
        url: '/mapView',
        templateUrl: 'app/mapView/mapView.html',
        controller: function($scope){
        	$scope.map = { center: { latitude: 38, longitude: -122 }, zoom: 15 };
            $scope.output = document.getElementById("loc");
            $scope.maker = {};

            $scope.coords = false;

            $scope.loading = true;

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
                   $scope.coords = true; 
                   $scope.loading = false;
                   document.getElementById('loc').click(); //simulate click in order to load map
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
>>>>>>> map working
})