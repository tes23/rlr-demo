/**
 * Created by acsikor on 5/4/16.
 */
module rlr.services {
    import Find = rlr.models.Find;

    export class RLRService {
        static $inject = ['$http', '$q'];

        private url = "/rlr/?category=valami";
        //private model:Find;

        constructor(private $http:ng.IHttpService, private $q:ng.IQService) {}

        //public search = () => this.$http.get<IModel[]>(this.url);
        public search():ng.IPromise<Find> {
            var deferred = this.$q.defer();
            //var model = this.model;
            //var _this = this;
            this.$http.get<Find>(this.url).then(function(response){
                console.log("Response code: " + response.status);

                var model:Find = response.data;
                console.log("Number of docs found: " + model.category);
                deferred.resolve(model);
                //_this.$scope.$broadcast("response", model);
            });

            return deferred.promise;
        }
    }

    angular.module('myApp').service('rlrService', rlr.services.RLRService);
}