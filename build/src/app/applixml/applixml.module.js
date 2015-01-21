(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('applixml', {
            url: '/applixml',
            views: {
                "main": {
                    controller: 'ApplixmlController as model',
                    templateUrl: 'applixml/applixml.tpl.html'
                }
            },
            data:{ pageTitle: 'Applixml' }
        });
    });

}(angular.module("zoli.applixml", [
    'ui.router'
])));
