/**
 * Created by acsikor on 5/3/16.
 */
var rlr;
(function (rlr) {
    var directives;
    (function (directives) {
        var app = angular.module('myApp', ['ngMaterial', 'ngAnimate', 'ui.bootstrap']);
        var SearchDirective = (function () {
            function SearchDirective() {
                this.restrict = "E";
                this.controller = rlr.controllers.SearchController;
                this.controllerAs = "sc";
                this.templateUrl = "./views/search.html";
                this.replace = true;
            }
            return SearchDirective;
        }());
        directives.SearchDirective = SearchDirective;
        app.directive("searchDirective", [function () { return new rlr.directives.SearchDirective(); }]);
    })(directives = rlr.directives || (rlr.directives = {}));
})(rlr || (rlr = {}));
//# sourceMappingURL=SearchDirective.js.map