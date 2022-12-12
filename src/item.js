import Point from "./point.js";

export default class Item {
    constructor(x, y, type, value) {
        this.type = type;
        this.value = value;
        this.location = new Point(x, y);
    }
    getType() {
        return this.type;
    }
    getValue() {
        return this.value;
    }
    getLocation(){
        return this.location;
    }

}