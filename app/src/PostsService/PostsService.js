angular
  .module('UserApp')
  .factory('PostsService', function ($resource) {
    return $resource('https://jsonplaceholder.typicode.com/posts');
  });
