// create main angular module, connect to other modules and router. This is a basic set up as your application grows you can refactor as you wish.
angular.module('NeighborPool',["ui.router",  ,'uiGmapgoogle-maps','NeighborPool.Login', 'MapView', 'NeighborPool.UserProfile'])

// make your route configurations using uiRouter, the config func takes in a callback with two parameter $stateProvider, $urlRouterProvider. the parameter are objects. read what methods they have.
.config(function($stateProvider, $urlRouterProvider ){
// $urlRouterProvider make dericts your urls
    $urlRouterProvider.otherwise('/login');
//  $stateProvider has a state property so you can set your state options, it takes two paramater a name of the state it can be banana and object. The object takes a url property and the url as a value. A templateUrl propety with the path to the static file.

    $stateProvider
    // the state will go on the html that you want route the user.
    .state('home', {
        url: '/home',
        templateUrl: 'app/mapView/mapView.html',
        resolve: {
            userService: function($http){
                // return $http.get('/home');
            }
        },
        controller: function($scope, userService, $location){
               
        },
        controllerAs: 'HomeController'
    });
})