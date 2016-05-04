/**
 * Created by acsikor on 5/3/16.
 */
module rlr.directives {
    var app = angular.module('myApp');

    export class SearchDirective implements ng.IDirective {
        public restrict:string = "E";
        public controller:any = controllers.SearchController;
        public controllerAs:string = "sc";
        templateUrl:string = "./views/search.html";
        public replace:boolean = true;
    }

    app.directive("searchDirective", [() => new rlr.directives.SearchDirective()]);
}