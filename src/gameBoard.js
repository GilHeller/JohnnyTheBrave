import Player from "./player.js";
import Monster from "./monster.js";
import Slot from "./slot.js";
import Combat from "./combat.js";
import EndSlot from "./endSlot.js";
import Item from "./item.js";

export default class GameBoard {
    constructor() {
        this.boardSize = 5;
        this.nuberOfSuprises = 5;
        this.player = new Player(0, 0);
        this.endPoint = new EndSlot(this.boardSize - 1, this.boardSize - 1);
        
        this.initBoard();
        this.initSurprises();
        this.initEndPoint();
        this.initPlayer();
    }

    getPlayer(){
        return this.player;
    }

    setPlayerLocation(x, y) {
        this.player.location.setPoint(x, y);
        this.printBoard();
    }

    initPlayer() {
        this.board[this.player.location.x][this.player.location.y] = this.player;
    }

    initEndPoint(){
        this.board[this.endPoint.location.x][this.endPoint.location.y] = this.endPoint;
    }

    randomSurprise(x, y) {
        const numOfSurprisesTypes = 3;
        const randomSurpriseNumber = Math.floor(Math.random() * numOfSurprisesTypes);
        switch(randomSurpriseNumber){
            case 0:
                return new Monster(x, y);
            case 1:
                return new Item(x, y, "good", 5);
            case 2:
                return new Item(x, y, "bad", -5);
            default:
                console.error(`Error: expected 1/2/3 but got ${randomSurpriseNumber}`);
        }
    }

    initSurprises() {
        for (let index = 0; index <= this.nuberOfSuprises; index++) {
            const supriseX = Math.floor(Math.random() * this.boardSize);
            const supriseY = Math.floor(Math.random() * this.boardSize);
            this.board[supriseX][supriseY] = this.randomSurprise(supriseX, supriseY);
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
                else if (column === this.boardSize - 1 && row === this.boardSize - 1) {
                    board[row][column] = this.endPoint
                }
            }
        }
        this.board = board;
    }

    printBoard() {
        console.log("------------------------------------------------------");
        // console.clear();
        const arrayOfRowsStrings = this.board.map(row => row.map(slot => slot.sign).join(" | "))
        const boardString = arrayOfRowsStrings.join("\n");
        console.log(boardString);
        console.log(`HP: ${this.player.getHealthPoint()} | Attack: ${this.player.getAttackPoint()}`);
    }

    isGameOver(){
        console.log(`YOU ARE A LOSER ⚰💔`);
    }

    monsterDefated(){
        console.log(`Monster defated, KEEP GOING CHAMP!🥇`);
    }

    playerAcheivedEndPoint(){
    //
    // TO DO: change foramt to new point
        if(b.getPlayer().getLocation().isSamePoint(new Point(this.boardSize,this.boardSize)))
            console.log(`YOU ROCK WINNER 🚀`);
    }

    printMyPickup(item){
    // Des: check which item player pick from board and print a message for knowing him
    // TO DO: get from Gil a list of relvant item
        if (item.getValue() > 0)
            console.log(`YOU GOT POWER`);
        if (item.getValue() < 0)
            console.log(`YOU LOST POWER`);
    }
}
