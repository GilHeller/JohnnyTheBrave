import Point from "./point.js";
import Player from "./player.js";

export default class GameBoard {
    constructor() {
        this.boardSize = 5;
        this.player = new Player(0, 0);
        this.endLocation = new Point(this.boardSize - 1, this.boardSize - 1);
        this.board = this.initBoard()
    }

    setPlayerLocation(x, y) {
        this.board[this.playerLocation.y][this.playerLocation.x] = "[ ]";
        this.playerLocation.setPoint(x, y);
        this.board[this.playerLocation.y][this.playerLocation.x] = "[*]";
    }

    initBoard() {
        let board = Array(this.boardSize);
        for (let row = 0; row < board.length; row++) {
            board[row] = new Array(this.boardSize)
            board[row].fill("[ ]")
        }
        board[this.playerLocation.x][this.playerLocation.y] = "[*]";
        return board
    }

    printBoard() {
        console.log("-------------------------");
        const boardString = this.board.map(row => row.join(" | ")).join("\n");
        console.log(boardString);
    }
}
