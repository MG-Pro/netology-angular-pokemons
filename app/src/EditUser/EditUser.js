'use strict';

userApp.controller('EditUserCtrl', function ($scope, $routeParams, UsersService) {

  UsersService.getUser($routeParams['userId']).then(function (response) {
    $scope.user = response.data;
    $scope.userLoaded = true;
  });

  $scope.editUser = function (myUser) {


    $scope.creationSuccess = false;

    UsersService.createUser(myUser).then(function (response) {
      $scope.newUser = {};

      $scope.newUserId = response.data.id;
      $scope.creationSuccess = true;
    })
  }
});
