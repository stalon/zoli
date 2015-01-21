(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('xsdmessages', {
            url: '/xsdmessages',
            views: {
                "main": {
                    controller: 'XsdmessagesController as model',
                    templateUrl: 'xsdmessages/xsdmessages.tpl.html'
                }
            },
            data:{ pageTitle: 'Xsdmessages' }
        });
    });

}(angular.module("zoli.xsdmessages", [
    'ui.router'
])));
