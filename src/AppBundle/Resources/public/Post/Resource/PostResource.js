(function () {
    'use strict';

    angular
        .module('app')
        .factory('Post', Post);

    Post.$inject = ['$resource'];
    function Post($resource) {
        return $resource('/app_dev.php/api/v1/post/:id', {id: '@id'}, {

        });
    }
})();