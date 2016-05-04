/**
 * Created by acsikor on 5/4/16.
 */
module rlr.services {

    export interface IModel { id: number; }

    export class RLRService {
        static $inject = ["$http"];

        private url = "/CUSTOMER/";
        private model:IModel[];

        constructor(private $http:ng.IHttpService) {}

        //public search = () => this.$http.get<IModel[]>(this.url);
        public search() {
            var model = this.model;
            this.$http.get<IModel[]>(this.url).then(function(response){
                console.log("Response code: " + response.status);
                model = response.data;
                console.log("Number of docs found: " + response.data);

            });
        }
    }

    angular.module('myApp').service('rlrService', rlr.services.RLRService);
}