(function () {
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider) {
            $stateProvider
                .state('app.post', {
                    url: '/post',
                    controller: 'PostListController',
                    controllerAs: 'vm',
                    templateUrl: '/bundles/app/Post/View/postList.html',
                    data: {
                        title: 'Posts'
                    }
                });
        })
})();