import { timeEnd } from "node:console";
import { exit } from "node:process";
import readline from "node:readline"; 

export default class Combat{
    constructor (player,monster){
        this.player = player;
        this.monster = monster;
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
        console.log(`NEW COMBAT`);
        console.log(`Click on enter button to start the combat\n`);
    }
    
    startPunch(){
        let randomBeginner = Math.floor(Math.random() * 2);
        switch(randomBeginner){
            case 0 :
                while (this.player.getHealthPoint() > 0 && this.monster.getHealthPoint() > 0){
                    this.punchPlayer();
                    if(this.checkPlayerHP()){
                        document.addEventListener('keyup',event => {
                            if (event.code === 'Space'){
                                console.loglog('Space Pressed')
                            }
                        });
                        this.punchMonster();
                    }
                    else return -1; 
                }
                break;
            case 1:
                while (this.player.getHealthPoint() > 0 && this.monster.getHealthPoint() > 0){
                    document.addEventListener('keyup',event => {
                        if (event.code === 'Space'){
                            console.loglog('Space Pressed')
                        }
                    });
                    this.punchMonster();
                    if (this.checkMonsterHP()){

                        this.punchPlayer();
                    }
                    else return 0;
                }
                break;
        }   
    }   
} 
    



