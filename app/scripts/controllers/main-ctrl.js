(function() {
    /**
     * @file A file where simple controllers are defined.
     *
     * @author Rubens Gomes [rubens.s.gomes@gmail.com]
     * @version $Id: main-ctrl.js 428 2015-09-21 18:47:38Z rubens_gomes $
     */

    'use strict';

    angular
        .module('app-core')
        .controller('AboutController', AboutController)
        .controller('HomeController', HomeController);

    function AboutController($rootScope) {
        $rootScope.title = 'About';
    }

    function HomeController($rootScope) {
        $rootScope.title = 'Welcome';

        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.loading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            $rootScope.loading = false;
        });
    }

    AboutController.$inject = ['$rootScope'];
    HomeController.$inject = ['$rootScope'];

})();