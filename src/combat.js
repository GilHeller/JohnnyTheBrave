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
        this.player.getHealthPoint() -= ((this.monster.getAttackPoint()) * 0.10);
    }

    punchMonster(){
        this.monster.getHealthPoint() -= ((this.player.getAttackPoint()) * 0.05);
    }
    
    checkPlayerHP(){
        return this.player.getHealthPoint() > 0;
    }

    checkMonsterHP(){
        return this.monster.getHealthPoint() > 0;
    }

    async startCombat(){
        console.log(`NEW COMBAT`);
        // console.log(' ${this.player.getName()} .Vs. Monster');
        console.log(`Click on space button to start the combat\n`);
        document.addEventListener('keyup',event => {
            if (event.code === 'Space'){
                console.loglog('Space Pressed')
            }
        });
        
        let randomBeginner = Math.floor(Math.random() * 2);
        switch(randomBeginner){
            case 0 :
                while (this.player.getHealthPoint() > 0 && this.monster.getHealthPoint() > 0){
                    this.punchPlayer();
                    if(this.checkPlayerHP()){
                        // wait for player press
                        this.punchMonster();
                    }
                    else return -1;
                    
                }
            case 1:
                while (this.player.getHealthPoint() > 0 && this.monster.getHealthPoint() > 0){
                    //wait for key press
                    this.punchMonster();
                    if (this.checkMonsterHP()){

                        this.punchPlayer();
                    }
                    else return 0;
                }
        }        
    }     
} 
    
   

    // isStarted(event){
    //     if (event.key === 'Space'){
    //         console.log(`Let the games begin`); 
    //     }
    // }
    



