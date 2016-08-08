angular.module('MapView',[])
.config(function($stateProvider){

  $stateProvider
  // the state will go on the html that you want route the user.
  .state('mapView', {
    url: '/mapView',
    templateUrl: 'app/mapView/mapView.html',
    controller: function($scope, $window, $http, $location){
      // Make a Get resquest to get all of the users to display below map
      $http({
        method: 'GET',
        url: '/mapView',
        contentType: 'application/json'
      })
      .then(function(resp){
        $scope.allUsers = resp.data;
      })
      .catch(function(error){
        console.log(error);
      });


      //Setting some coordinates to get the map to render but they will change in findLocation function.
      $scope.map = { center: { latitude: 38, longitude: -122 }, zoom: 15 };
      $scope.output = document.getElementById("loc");
      $scope.maker = {};

      $scope.coords = false;

     // $scope.options = {url: '//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'};
      $scope.options = {url: '/assets/flag.png'};

      $scope.loading = true;
      // Retrive the location of the user. 
      $scope.findLocation = function(){
          if (!navigator.geolocation){
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
            return;
          }
          navigator.geolocation.getCurrentPosition(function(position){
            $scope.map.center.latitude = position.coords.latitude;
            $scope.map.center.longitude = position.coords.longitude;
            $scope.coords = true; 
            $scope.loading = false;
            document.getElementById('loc').click(); //simulate click in order to load map
          }, function(){
            $scope.output.innerHTML = "Unable to retrieve your location";
          });
      }();
      // This handles the request ride button by adding the lat, lon to the maker making it render on the map.
      $scope.RequestRideButton = function(){
        $scope.maker.latitude = $scope.map.center.latitude;
        $scope.maker.longitude = $scope.map.center.longitude;
      }
      // Signout the user and remove the token and redirect them to the login in page.
      $scope.signOut = function(){
        $window.localStorage.removeItem('NeighborPool');
        $location.path('/login');
      }
    },
    controllerAs: 'LoginCtrl'
  });
})