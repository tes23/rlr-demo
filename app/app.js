'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute', 'ngMaterial', 'ngAnimate', 'ui.bootstrap'
]).controller('mainCtrl', function($scope, $mdSidenav, $timeout){
    var self = this;
    $scope.isCollapsed = false;
    $scope.selectedParties = [];
    //$scope.parties = null;
    $scope.parties =   [
        { bupa: 'Duni', partyName: 'Duni 1' },
        { bupa: 'Duni', partyName: 'Duni 2' },
        { bupa: 'Duni', partyName: 'Duni 3' },
        { bupa: 'Mogule', partyName: 'Mogule 1' },
        { bupa: 'Mogule', partyName: 'Mogule 2' },
        { bupa: 'Mogule', partyName: 'Mogule 3' },
        { bupa: 'Mogule', partyName: 'Mogule 4' }
    ];
    $scope.reports =   [
        { id: 1, name: 'Runtime Report' },
        { id: 2, name: 'Shipment Destinations' }
    ];


    self.toggleSearch = toggleSearchMenu;

    function toggleSearchMenu() {
        $mdSidenav('left').toggle();
    }

    $scope.loadParties = function() {
        // Use timeout to simulate a 650ms request.
        return $timeout(function() {
            $scope.parties =  [
                        { bupa: 'Duni', partyName: 'Duni 1' },
                        { bupa: 'Duni', partyName: 'Duni 2' },
                        { bupa: 'Duni', partyName: 'Duni 3' },
                        { bupa: 'Mogule', partyName: 'Mogule 1' },
                        { bupa: 'Mogule', partyName: 'Mogule 2' },
                        { bupa: 'Mogule', partyName: 'Mogule 3' },
                        { bupa: 'Mogule', partyName: 'Mogule 4' }
                    ];
        }, 650);
    };
});