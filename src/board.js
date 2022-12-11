import Point from "./point.js";

export default class Board {
    constructor() {
        this.boardSize = 5
        this.playerLocation = new Point(0, 0);
        this.playerSign = "*";
        this.endLocation = new Point(this.boardSize - 1, this.boardSize - 1);
        this.endLocation = "X";
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

