'use strict'

userApp.controller('UserListCtrl', function ($scope, UsersService, PostsService) {
  $scope.userLoader = false;
  $scope.postLoader = false;
  UsersService.getUsers().then(function (response) {
    $scope.users = response.data;
    $scope.userLoader = true;
  })

  PostsService.getPosts().then(function (response) {
    $scope.posts = response.data;
    $scope.postLoader = true;
  })


/*   UsersService.getUsers().then(function (response) {
    $scope.users = response.data
    return PostsService.getPosts()
  }).then(function (response) {
    $scope.posts = response.data
  }) */

})
