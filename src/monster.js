import Item from "./item.js";

export default class Monster extends Item{
    constructor(x, y){
        super(x, y, "Monster", 5);
        this.healthPoint = 50;
        this.attackPoint = 7;
    }
    setHealthPoint(x){
        this.healthPoint = x;
    }
    setAttackPoint(x){
        this.attackPoint = x;
    }
    getHealthPoint(){
        return this.healthPoint;
    }
    getAttackPoint(){
        return this.attackPoint;
    }
}