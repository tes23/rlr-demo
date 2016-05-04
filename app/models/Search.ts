/**
 * Created by acsikor on 5/3/16.
 */
module rlr.models {
    export class Search {

        constructor(private fromDate:Date, private toDate:Date) {
        }

        search() {
            console.log("Search:search called:" + this.fromDate + "; " + this.toDate);
        }
    }
}