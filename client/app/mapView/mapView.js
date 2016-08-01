angular.module('MapView',[])
.config(function($stateProvider){
    $stateProvider
    // the state will go on the html that you want route the user.
    .state('mapView', {
        url: '/mapView',
        templateUrl: 'app/mapView/mapView.html',
        controller: function($scope){
        },
        controllerAs: 'LoginCtrl'
    });
})