(function(){
    'use strict';

    angular
    .module('bikesGallery')
    .config(configure)
    .run(runBlock);

    configure.$inject = ['$urlRouterProvider', '$httpProvider', '$locationProvider'];

    function configure($urlRouterProvider, $httpProvider, $locationProvider) {

        $locationProvider.hashPrefix('!');

        // This is required for Browser Sync to work poperly
        $httpProvider.defaults.withCredentials = true;
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

        $urlRouterProvider
        .otherwise('/');

    }

    runBlock.$inject = ['$rootScope', '$state', '$stateParams'];

    function runBlock($rootScope, $state, $stateParams ) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

})();
