/**
 * Created by acsikor on 5/3/16.
 */
var rlr;
(function (rlr) {
    var models;
    (function (models) {
        var Search = (function () {
            function Search(fromDate, toDate) {
                this.fromDate = fromDate;
                this.toDate = toDate;
            }
            Search.prototype.search = function () {
                console.log("Search:search called:" + this.fromDate + "; " + this.toDate);
            };
            return Search;
        }());
        models.Search = Search;
    })(models = rlr.models || (rlr.models = {}));
})(rlr || (rlr = {}));
//# sourceMappingURL=Search.js.map