(function(module) {

    module.config(function ($stateProvider) {
        $stateProvider.state('l10nmessages', {
            url: '/l10nmessages',
            views: {
                "main": {
                    controller: 'L10nmessagesController as model',
                    templateUrl: 'l10nmessages/l10nmessages.tpl.html'
                }
            },
            data:{ pageTitle: 'L10nmessages' }
        });
    });

}(angular.module("zoli.l10nmessages", [
    'ui.router'
])));
