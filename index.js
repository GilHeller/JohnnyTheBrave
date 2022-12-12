import GameBoard from "./src/gameBoard.js";
import Player from "./src/player.js";
import Point from "./src/point.js";
import Monster from "./src/monster.js";

const b = new GameBoard();
b.printBoard()
b.setPlayerLocation(0,1);
b.printBoard()
