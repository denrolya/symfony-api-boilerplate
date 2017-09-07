(function(){

  angular
    .module('app')
    .controller('PostListController', PostListController);

  PostListController.$inject = ['$scope', 'Post']
  function PostListController($scope, Post) {
    var vm = this;

      vm.selected = [];

      vm.query = {
          order: 'id',
          limit: 5,
          page: 1
      };

      function success(items) {
          $scope.items = items;
      }

      vm.getPosts = function () {
          vm.promise = Post.get(function(response) {
              vm.posts = response.posts;
          });
      };

      vm.getPosts();
  }

})();
