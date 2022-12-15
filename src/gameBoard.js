import Player from "./player.js";
import Monster from "./monster.js";
import Slot from "./slot.js";
import Combat from "./combat.js";
import EndSlot from "./endSlot.js";
import Item from "./item.js";
import Point from "./point.js";

export default class GameBoard {
    constructor() {
        this.boardSize = 25;
        this.nuberOfSuprises = this.boardSize * this.boardSize;
        this.player = new Player(0, 0);
        this.endPoint = new EndSlot(this.boardSize - 1, this.boardSize - 1);
        this.isCombatStarted = false;
        this.gameOver = false;
        this.monsterInFight = null;
        this.combat = null;

        this.initBoard();
        this.initSurprises();
        this.initEndPoint();
        this.initPlayer();
    }

    getIsCombatStarted() {
        return this.isCombatStarted;
    }
    endCombat() {
        this.isCombatStarted = false;
    }

    getPlayer() {
        return this.player;
    }

    setPlayerLocation(x, y) {
        this.player.location.setPoint(x, y);
        this.printBoard();
    }

    initPlayer() {
        this.board[this.player.location.x][this.player.location.y] = this.player;
    }

    initEndPoint() {
        this.board[this.endPoint.location.x][this.endPoint.location.y] = this.endPoint;
    }

    randomSurprise(x, y) {
        const numOfSurprisesTypes = 3;
        const randomSurpriseNumber = Math.floor(Math.random() * numOfSurprisesTypes);
        switch (randomSurpriseNumber) {
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

    isGameOver() {
        console.log(`YOU ARE A LOSER ⚰💔`);
    }

    monsterDefated() {
        console.log(`Monster defated, KEEP GOING CHAMP!🥇`);
    }

    playerAcheivedEndPoint() {
        if (this.getPlayer().getLocation().isSamePoint(this.endPoint.location))
            console.log(`YOU ROCK WINNER 🚀`);
    }

    printMyPickup(item) {
        if (item.getValue() > 0)
            console.log(`YOU GOT POWER`);
        if (item.getValue() < 0)
            console.log(`YOU LOST POWER`);
    }

    movePlayerUp() {
        const playerY = this.player.location.getY();
        const playerX = this.player.location.getX();
        const newY = playerY - 1;
        if (playerY === 0) {
            return;
        }
        this.player.setLocation(playerX, newY);
        this.pickUpItem(playerX, newY);
        this.board[playerY][playerX] = new Slot(playerX, playerY);
        this.board[newY][playerX] = this.player;
    }

    movePlayerDown() {
        const playerY = this.player.location.getY();
        const playerX = this.player.location.getX();
        const newY = playerY + 1;
        if (playerY === this.boardSize - 1) {
            return;
        }
        this.player.setLocation(playerX, newY);
        this.pickUpItem(playerX, newY);
        this.board[playerY][playerX] = new Slot(playerX, playerY);
        this.board[newY][playerX] = this.player;
    }
    movePlayerRight() {
        const playerY = this.player.location.getY();
        const playerX = this.player.location.getX();
        const newX = playerX + 1;
        if (playerX === this.boardSize - 1) {
            return;
        }
        this.player.setLocation(newX, playerY);
        this.pickUpItem(newX, playerY);
        this.board[playerY][playerX] = new Slot(playerX, playerY);
        this.board[playerY][newX] = this.player;
    }
    movePlayerLeft() {
        const playerY = this.player.location.getY();
        const playerX = this.player.location.getX();
        const newX = playerX - 1;
        if (playerX === 0) {
            return;
        }
        this.player.setLocation(newX, playerY);
        this.pickUpItem(newX, playerY)
        this.board[playerY][playerX] = new Slot(playerX, playerY);
        this.board[playerY][newX] = this.player;
    }

    pickUpItem(x, y) {
        const slot = this.board[y][x];
        switch (slot.constructor.name) {
            case "Player":
                break;
            case "Item":
                this.printMyPickup(slot);
                this.player.setHealthPoint(this.player.getHealthPoint() + slot.value);
                break;
            case "Monster":
                this.monsterInFight = slot;
                this.combat = new Combat(this.player, this.monsterInFight);
                this.isCombatStarted = true;
                break;
            case "EndSlot":
                this.gameOver = true;
                break;
            default:
                console.error("No Item");
                this.board[y][x] = new Slot(x, y);
        }
    }

    run() {
        process.stdin.on("data", (d) => {
            if (this.gameOver) {
                this.playerAcheivedEndPoint();
                process.exit();
            }
            else if (this.isCombatStarted) {
                console.log("--FIGHT--");
                this.combat.startCombat();
                if (!this.combat.checkMonsterHP()) {
                    this.endCombat()
                    this.monsterDefated();
                }

                else if (!this.combat.checkPlayerHP()) {
                    this.isBattleStarted = false;
                    this.isGameOver();
                    this.gameOver = true;
                }

                else if (d.at(0) === 32) {
                    console.log('Press SPACE & Enter to strike!');
                    this.combat.punchMonster();
                    this.combat.checkMonsterHP();
                    this.combat.punchPlayer();
                    this.combat.checkPlayerHP();
                }
            }
            else {
                switch (d.at(0)) {
                    case 119:
                    case 87:    //W or w
                        this.movePlayerUp();
                        break;
                    case 115:
                    case 83:   //S or s
                        this.movePlayerDown();
                        break;
                    case 97:
                    case 65:   //A or a
                        this.movePlayerLeft();
                        break;
                    case 100:
                    case 68:   //D or d
                        this.movePlayerRight();
                        break;
                    default:
                        console.log(d);
                }
                this.printBoard();
            }

        })
    }
}
