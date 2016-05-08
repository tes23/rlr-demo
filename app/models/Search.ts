/**
 * Created by acsikor on 5/3/16.
 */
module rlr.models {
    export class Find {
        private _category: string;
        private count: number;
        private date: Date;


        constructor(category:string, count:number, date:Date) {
            this._category = category;
            this.count = count;
            this.date = date;
        }


        get category():string {
            return this._category;
        }

//search() {
        //    console.log("Search:search called:" + this.fromDate + "; " + this.toDate);
        //}
    }
}