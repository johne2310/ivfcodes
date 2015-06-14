var ivfCodes = angular.module('ivfCodes', ['ionic', 'ivfCodes.controllers', 'ivfCodes.services', ]);

ivfCodes.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
});

ivfCodes.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('tab.codes', {
            url: '/codes',
            views: {
                'tab-codes': {
                    templateUrl: 'templates/tab-codes.html',
                    controller: 'codesCtrl'
                }
            }
        })
        .state('tab.detail', {
            url: '/codes/:codeId',
            views: {
                'tab-codes': {
                    templateUrl: 'templates/tab-detail.html',
                    controller: 'DetailCtrl'
                }
            }
        })

    .state('tab.about', {
        url: '/about',
        views: {
            'tab-about': {
                templateUrl: 'templates/tab-about.html',
                controller: 'AboutCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/home');

});
