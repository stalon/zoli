(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('messagecatalog', {
            url: '/messagecatalog',
            views: {
                "main": {
                    controller: 'MessagecatalogController as model',
                    templateUrl: 'messagecatalog/messagecatalog.tpl.html'
                }
            },
            data:{ pageTitle: 'Messagecatalog' }
        });
    });

}(angular.module("zoli.messagecatalog", [
    'ui.router'
])));
