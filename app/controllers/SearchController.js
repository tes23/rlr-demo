/**
 * Created by acsikor on 5/3/16.
 */
var rlr;
(function (rlr) {
    var controllers;
    (function (controllers) {
        var app = angular.module("myApp");
        var SearchController = (function () {
            function SearchController($mdSidenav) {
                this.$mdSidenav = $mdSidenav;
                this._expanded = false;
            }
            SearchController.prototype.toggleSearch = function () {
                this.$mdSidenav('left').toggle();
            };
            SearchController.prototype.collapseExpand = function () {
                this._expanded = !this._expanded;
            };
            Object.defineProperty(SearchController.prototype, "isExpanded", {
                get: function () {
                    return this._expanded;
                },
                enumerable: true,
                configurable: true
            });
            SearchController.prototype.search = function () {
                console.log("SearchController:search called");
            };
            SearchController.$inject = [
                "$mdSidenav"
            ];
            return SearchController;
        }());
        controllers.SearchController = SearchController;
        app.controller("SearchController", rlr.controllers.SearchController);
    })(controllers = rlr.controllers || (rlr.controllers = {}));
})(rlr || (rlr = {}));
//# sourceMappingURL=SearchController.js.map