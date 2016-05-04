/**
 * Created by acsikor on 5/4/16.
 */
module rlr.directives {
    var app = angular.module('myApp', ['ngMaterial', 'ngAnimate', 'ui.bootstrap', 'ngResource']);

    export class HeaderDirective implements ng.IDirective {
        public restrict:string = "E";
        public controller:any = controllers.HeaderController;
        public controllerAs:string = "hc";
        templateUrl:string = "./views/header.html";
        public replace:boolean = true;
    }

    app.directive("headerDirective", [() => new rlr.directives.HeaderDirective()]);
}