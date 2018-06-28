angular
  .module('UserApp')
  .factory('UserPostsService', function ($resource) {
    return $resource('https://jsonplaceholder.typicode.com/users/:userId/posts', {
      userId: '@userId'
    });
  });
