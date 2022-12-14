import Slot from "./slot.js";

export default class Player extends Slot{
    constructor (){
        super(0, 0)
        this.healthPoints = 100;
        this.attackPoints = 10;
        this.sign = '[*]';
    }
    setHealthPoint(x){
        this.healthPoints = x;
    }
    setAttackPoint(x){
        this.attackPoints = x;
    }
    setLocation(x,y){
        this.location.setPoint(x,y);
    }
    getHealthPoint(){
        return this.healthPoints;
    }
    getAttackPoint(){
        return this.attackPoints;
    }
    getLocation(){
        return this.location;
    }
    getSign(){
        return this.sign;
    }

}