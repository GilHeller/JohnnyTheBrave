import Slot from "./slot.js";

export default class Item extends Slot{
    constructor(x, y, type, value) {
        super(x, y)
        this.type = type;
        this.value = value;
        this.sign = "[@]";
    }

    getType() {
        return this.type;
    }
    
    getValue() {
        return this.value;
    }
}