'use strict';

/* App Module */

angular
    .module('deckApp', [/*'deckFilters'*/])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/deck',
            {
                templateUrl: 'partials/card-list.html',
                controller: DeckCtrl
            }
        ).otherwise({redirectTo: '/deck'});
    }
]);
