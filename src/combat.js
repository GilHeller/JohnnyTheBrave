import { timeEnd } from "node:console";
import { exit } from "node:process";
import readline from "node:readline"; 

export default class Combat{
    constructor (player,monster){
        this.player = player;
        this.monster = monster;
        this.newComabat = false;
        console.log('Let the games begin');
        console.log("FIGHT");
    }

    getPlayer(){
        return this.player;
    }

    getMonster(){
        return this.monster;
    }
    
    punchPlayer(){
        let point = this.monster.getAttackPoint();
        this.player.setHealthPoint(this.player.getHealthPoint() - point);
        console.log(`You lost: ${this.player.getHealthPoint()} | Player current HP: ${this.player.getHealthPoint()}`);
    }

    punchMonster(){
        let point = this.player.getAttackPoint();
        this.monster.setHealthPoint(this.monster.getHealthPoint() - point);
        console.log(`Monster lost: ${this.monster.getHealthPoint()} | Monster current HP: ${this.monster.getHealthPoint()}`);
    }
    
    checkPlayerHP(){
        return this.player.getHealthPoint() > this.monster.getAttackPoint();
    }

    checkMonsterHP(){
        return this.monster.getHealthPoint() > this.player.getAttackPoint();
    }

    startCombat(){
        if (this.newCombat){
            console.log(`NEW COMBAT`);
            console.log(`Click on enter button to start the combat\n`);
            this.newComabat = false;
        }
    }
} 
    



