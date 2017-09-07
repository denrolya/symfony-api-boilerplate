'use strict';

angular
    .module('app', ['ngResource', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router', 'ngMaterial',
    'nvd3', 'ngMaterial', 'md.data.table'])

    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider,
                      $mdIconProvider) {
        $stateProvider
            .state('app', {
                url: '',
                templateUrl: '/bundles/app/General/View/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                abstract: true
            })
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: '/bundles/app/General/View/dashboard.html',
                data: {
                    title: 'Dashboard'
                }
            })
            .state('app.profile', {
                url: '/profile',
                templateUrl: '/bundles/app/General/View/profile.html',
                controller: 'ProfileController',
                controllerAs: 'vm',
                data: {
                    title: 'Profile'
                }
            });

        $urlRouterProvider.otherwise('/dashboard');

        $mdThemingProvider
            .theme('default')
            .primaryPalette('grey', {
                'default': '600'
            })
            .accentPalette('teal', {
                'default': '500'
            })
            .warnPalette('defaultPrimary');

        $mdThemingProvider.theme('dark', 'default')
            .primaryPalette('defaultPrimary')
            .dark();

        $mdThemingProvider.theme('grey', 'default')
            .primaryPalette('grey');

        $mdThemingProvider.theme('custom', 'default')
            .primaryPalette('defaultPrimary', {
                'hue-1': '50'
            });

        $mdThemingProvider.definePalette('defaultPrimary', {
            '50':  '#FFFFFF',
            '100': 'rgb(255, 198, 197)',
            '200': '#E75753',
            '300': '#E75753',
            '400': '#E75753',
            '500': '#E75753',
            '600': '#E75753',
            '700': '#E75753',
            '800': '#E75753',
            '900': '#E75753',
            'A100': '#E75753',
            'A200': '#E75753',
            'A400': '#E75753',
            'A700': '#E75753'
        });

        $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
    });
