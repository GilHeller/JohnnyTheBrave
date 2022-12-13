import Point from "./point.js";
import Player from "./player.js";
import Monster from "./monster.js";
import Slot from "./slot.js";

export default class GameBoard {
    constructor() {
        this.boardSize = 5;
        this.nuberOfMonsters = 5
        this.emptySlot = "[ ]";
        // this.monsters = new Array(this.nuberOfMonsters);
        this.player = new Player(0, 0);
        this.endLocation = new Point(this.boardSize - 1, this.boardSize - 1);

        this.initBoard();
        this.initMonsters();
        this.initPlayer();
    }

    setPlayerLocation(x, y) {
        this.player.location.setPoint(x, y);
        this.printBoard();
    }

    initPlayer() {
        this.board[this.player.location.x][this.player.location.y] = this.player;
    }

    initMonsters() {
        for (let index = 0; index < this.nuberOfMonsters; index++) {
            const monsterX = Math.floor(Math.random() * this.boardSize);
            const monsterY = Math.floor(Math.random() * this.boardSize);
            const monster = new Monster(monsterX, monsterY);
            // this.monsters[index] = monster;
            this.board[monsterX][monsterY] = monster
        }
    }

    initBoard() {
        const board = []
        for (let row = 0; row < this.boardSize; row++) {
            board[row] = []
            for (let column = 0; column < this.boardSize; column++) {
                board[row][column] = new Slot(row, column);
                if (column === 0 && row === 0) {
                    board[row][column] = this.player
                }
            }
        }
        this.board = board;
    }

    printBoard() {
        console.log("------------------------------------------------------");
        const arrayOfRowsStrings = this.board.map(row => row.map(slot => slot.getSign()).join(" | "))
        const boardString = arrayOfRowsStrings.join("\n");
        console.log(boardString);
        console.log(`HP: ${this.player.getHealthPoint()} | Attack: ${this.player.getAttackPoint()}`);
    }
}
