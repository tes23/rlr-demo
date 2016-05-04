/**
 * Created by acsikor on 5/3/16.
 */
module rlr.controllers {
    //var app = angular.module("myApp");

    export class SearchController {

        //static $inject = [
        //    "$mdSidenav"
        //];

        private _expanded:boolean = false;

        constructor(private $mdSidenav: angular.material.ISidenavService){}

        public toggleSearch():void {
            this.$mdSidenav('left').toggle();
        }

        collapseExpand() {
            console.log("SearchController:collapseExpand called");
            this._expanded = !this._expanded;
        }

        //get isExpanded():boolean {
        //    return this._expanded;
        //}

        search() {
            console.log("SearchController:search called");
        }
    }

    //app.controller("SearchController", rlr.controllers.SearchController);
}