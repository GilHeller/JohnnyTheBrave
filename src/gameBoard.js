import Point from "./point.js";
import Player from "./player.js";
import Monster from "./monster.js";

export default class GameBoard {
    constructor() {
        this.boardSize = 5;
        this.nuberOfMonsters = 5
        this.emptySlot = "[ ]";
        this.monsters = new Array(this.nuberOfMonsters);
        this.player = new Player(0, 0);
        this.endLocation = new Point(this.boardSize - 1, this.boardSize - 1);
    
        for (let index = 0; index < this.monsters.length; index++) {
            this.monsters[index] = new Monster(
                Math.floor(Math.random() * this.boardSize),
                Math.floor(Math.random() * this.boardSize)
            );
        }

        this.board = this.initBoard()
        console.log(this.monsters);
    }

    setPlayerLocation(x, y) {
        this.board[this.player.location.y][this.player.location.x] = this.emptySlot;
        this.player.location.setPoint(x, y);
        this.board[this.player.location.y][this.player.location.x] = this.player.sign;
        this.printBoard();
    }

    initBoard() {
        let board = Array(this.boardSize);
        for (let row = 0; row < board.length; row++) {
            board[row] = new Array(this.boardSize)
            board[row].fill(this.emptySlot)
        }
        this.monsters.map(monster => {
            console.log(monster.location.getY());
            board[monster.location.getY()][monster.location.getX()] = Monster.sign;
        })
        board[this.player.location.y][this.player.location.x] = this.player.sign;
        return board
    }

    printBoard() {
        // console.clear();
        console.log("------------------------------------------------------");
        const boardString = this.board.map(row => row.join(" | ")).join("\n");
        console.log(boardString);
    }
}
