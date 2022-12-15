import Point from "./point.js";

export default class Slot {
    constructor(x, y) {
        this.location = new Point(x, y)
        this.sign = "[ ]";
    }

    getLocation(){
        return this.location;
    }

    // getSign(){
    //     return this.sign;
    // }
}