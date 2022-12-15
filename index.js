import GameBoard from "./src/gameBoard.js";
import Player from "./src/player.js";
import Point from "./src/point.js";
import Monster from "./src/monster.js";
import readline from"node:readline";

const b = new GameBoard();
//console.log(readline);
//readline.emitKeypresssEvents(process.stdin);
process.stdin.on("data",(d)=>{
    console.log(d)
    b.printBoard();

    //process.exsit()
})
b.printBoard()
const moveUp =()=>{
}
 process.stdin
const moveDown =()=>{
    
}
const moveRight =()=>{
    
}
const move =(sometask)=>{
    if (!sometask) {
        if (keycode == 37 || keycode == 65) {
            this.location.setPoint();
        }
        if (keycode == 38 || keycode == 87) {
            this.location.setPoint();
        }
        if (keycode == 39 || keycode == 68) {
            this.location.setPoint();
        }
        if (keycode == 40 || keycode == 83) {
            this.location.setPoint();
        }
      }
}

 
//this.init = function() {
    //keys = {};

//{
// this.trgt = ()=>{
    //if(this.event.target === myContainer.querySelector('#start')) {
       //myModel.startGame();
       //window.addEventListener('keydown', self.keyDown);
       //window.addEventListener('keyup', self.keyUp);
    //}
   
 //}