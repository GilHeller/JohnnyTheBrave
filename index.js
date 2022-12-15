import GameBoard from "./src/gameBoard.js";
import Player from "./src/player.js";
import Point from "./src/point.js";
import Monster from "./src/monster.js";
import Combat from "./src/combat.js";
import readline from "node:readline"; 

const b = new GameBoard();
b.printBoard()
let notfinished = true;

let m = new Monster(4,5);
let p = new Player();
let c = new Combat(p,m);
let isBattleStarted = true;

c.startCombat();
// b.setPlayerLocation(0,1);   

process.stdin.on("data", (d) => {
    if(isBattleStarted){
        c.startCombat();
        if (!c.checkMonsterHP()){
            isBattleStarted = false;
            b.monsterDefated();
        }

        else if (!c.checkPlayerHP()){
            isBattleStarted = false;
            b.isGameOver();
        }

        if(d.at(0) === 32){
            console.log('Let the games begin');
            c.punchMonster();
            c.checkMonsterHP();
            c.punchPlayer();
            c.checkPlayerHP();
        }
    }
})
