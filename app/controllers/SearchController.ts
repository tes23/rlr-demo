/**
 * Created by acsikor on 5/3/16.
 */
module rlr.controllers {
    //var app = angular.module("myApp");

    import Find = rlr.models.Find;
    export class SearchController {

        static $inject = [
            '$scope', '$mdSidenav', 'rlrService', '$timeout'
        ];

        private _expanded:boolean = false;
        private model:Find;
        private loadingProgress:boolean = false;

        private parties =   [
            { bupa: 'Duni', partyName: 'Duni 1' },
            { bupa: 'Duni', partyName: 'Duni 2' },
            { bupa: 'Duni', partyName: 'Duni 3' },
            { bupa: 'Mogule', partyName: 'Mogule 1' },
            { bupa: 'Mogule', partyName: 'Mogule 2' },
            { bupa: 'Mogule', partyName: 'Mogule 3' },
            { bupa: 'Mogule', partyName: 'Mogule 4' }
        ];
        /*$scope.reports =   [
        { id: 1, name: 'Runtime Report' },
        { id: 2, name: 'Shipment Destinations' }
    ];*/

        constructor(private $scope:ng.IScope, private $mdSidenav:angular.material.ISidenavService, private rlrService:services.RLRService, private $timeout:angular.ITimeoutService) {
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
            this.toggleSearch();
            this.loadingProgress = true;
            this.model = null;

            this.$timeout(()=> {
                this.loadingProgress = false;
            }, 2500);
            /*this.rlrService.search().then(response =>{
                this.loadingProgress = false;
                this.model = response;
                console.log("response arrived:" + response.category);
            });*/
        }

        private init():void {
            console.log("init called");
            var _this:SearchController = this;

            this.$scope.$on('openSearch', function () {
                _this.toggleSearch();
            });

            //this.$scope.$on('response', function (event, data) {
            //    _this.model = data;
            //    console.log('SearchController:model' + _this.model.category);
            //});
        }

    }
}