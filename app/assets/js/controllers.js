'use strict';

/* Controllers */

var deckApp = angular.module('deckApp', []);

deckApp.controller('DeckCtrl', function ($scope,$http) {
    $http.get('assets/lib/deck/cards.json').success(function(data) {
        $scope.deck = data;
        //console.log(JSON.stringify(data));
    });

    $scope.orderProp = ['-rank','suit_rank'];
});
