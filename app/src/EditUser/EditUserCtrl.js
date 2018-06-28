'use strict';

userApp.controller('EditUserCtrl', function ($scope, $routeParams, UsersService) {
  $scope.user = JSON.parse($routeParams.user);
  $scope.editUser = function (user) {
    UsersService.editUser(user).then(function (response) {
      console.log(response);
      $scope.editSuccess = true;
    })
  }
});
