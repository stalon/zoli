(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {
        connected = true;

        login = function() {
          connected=true;
          console.log("connected");
        };

        logout = function() {
          connected=false;
          console.log("déconnecté");
        };
    });

}(angular.module("zoli", [
    'zoli.home',
    'zoli.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'zoli.l10nmessages',
    'zoli.messagecatalog',
    'zoli.xsdmessages',
    'zoli.applixml',
])));
