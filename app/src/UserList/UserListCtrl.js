'use strict'

userApp.controller('UserListCtrl', function ($scope, $q, UsersService, PostsService) {
  $scope.userLoader = false;
  $scope.postLoader = false;
  const requestUsers = UsersService.getUsers();
  const requestPosts = PostsService.getPosts();
  $q.all([requestUsers, requestPosts])
    .then(function (response) {
      $scope.users = response[0].data;
      $scope.userLoader = true;
      $scope.posts = response[1].data;
      $scope.postLoader = true;
    });


  /*   UsersService.getUsers().then(function (response) {
      $scope.users = response.data
      return PostsService.getPosts()
    }).then(function (response) {
      $scope.posts = response.data
    }) */

});
