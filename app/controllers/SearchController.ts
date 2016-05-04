/**
 * Created by acsikor on 5/3/16.
 */
module rlr.controllers {
    //var app = angular.module("myApp");

    export class SearchController {

        static $inject = [
            '$scope', '$mdSidenav', 'rlrService'
        ];

        private _expanded:boolean = false;

        constructor(private $scope:ng.IScope, private $mdSidenav:angular.material.ISidenavService, private rlrService:services.RLRService) {
            this.init();
        }

        toggleSearch():void {
            this.$mdSidenav('left').toggle();
        }

        collapseExpand():void {
            console.log("SearchController:collapseExpand called");
            this._expanded = !this._expanded;
        }

        search():void {
            console.log("SearchController:search called");
            this.rlrService.search();
        }

        private init():void {
            console.log("init called");
            var _this:SearchController = this;

            this.$scope.$on('openSearch', function () {
                _this.toggleSearch();
            });
        }

    }
}