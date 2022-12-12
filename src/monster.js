import Point from "./point.js";
import Item from "./item.js";

export default class Monster extends Item{
    constructor(){
        this.healthPoint = 50;
        this.attackPoint = 7;
        // this.location = new Point(x,y); 
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
    // getLocation(){
    //     return this.location;
    // }
}