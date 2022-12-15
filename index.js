import GameBoard from "./src/gameBoard.js";
import Player from "./src/player.js";
import Point from "./src/point.js";
import Monster from "./src/monster.js";
import readline from "node:readline";

const b = new GameBoard();

// console.log(readline);
// readline.emitKeypressEvents(process.stdin.on("data", (d) => console.log(d)));
process.stdin.on("data", (d) => {
    console.log(d)
    b.printBoard();

    // process.exit();
})
// while (true) {
    
    // readline.emitKeypressEvents(process.stdin.on("data", (d) => console.log(d)));
    // if (process.stdin.isTTY) process.stdin.setRawMode(true);
    // process.stdin.on("data", data => {
        // console.log(data);
        // 
    // });
// }
// b.setPlayerLocation(0,1);
