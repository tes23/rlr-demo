/**
 * Created by acsikor on 5/4/16.
 */
module rlr.controllers {
    export class HeaderController {
        static $inject = ['$scope'];

        constructor(private $scope:ng.IScope){
        }

        public openSearch():void {
            console.log("HeaderController:openSearch called");
            this.$scope.$broadcast("openSearch");
        }
    }
}