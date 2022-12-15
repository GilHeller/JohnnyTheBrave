import Slot from "./slot.js";

export default class EndSlot extends Slot {
    constructor(x, y) {
        super(x, y);
        this.sign = "[X]"
    }
}