import GameBoard from "./src/gameBoard.js";
import Player from "./src/player.js";
import Point from "./src/point.js";
import Monster from "./src/monster.js";
import Combat from "./src/combat.js";

const b = new GameBoard();
b.printBoard()
let notfinished = true;

let m = new Monster(4,5);
let p = new Player();
let c = new Combat(p,m);
c.startCombat();
while (notfinished){
    // b.setPlayerLocation(0,1);   
    
    
}








