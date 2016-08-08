angular.module('NeighborPool.UserProfile',[])

.config(function($stateProvider){

  $stateProvider
  // the state will go on the html that you want route the user.
  .state('userProfile', {
    url: '/userProfile',
    templateUrl: 'app/userProfile/userProfile.html',
    controller: function($scope, $http, $window, $location, $uibModal, $log){

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

      

      $scope.animationsEnabled = true;

      $scope.open = function (size) {

        var modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed ');
        });
      };

      

    },
    controllerAs: 'userProfileCtrl'
  });


})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {

  
  $scope.selected = {
    item: 'item1'
  };

  $scope.send = function () {
    console.log('this is your message',$scope.message)

    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});


