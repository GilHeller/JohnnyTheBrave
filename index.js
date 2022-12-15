import GameBoard from "./src/gameBoard.js";

console.log(`
Welcome!
Help Johnny The Brave (*) to get to the end point acroos the board.\n
You may collect good and bad items (@)\n
Be careful about the monsters. They look exectly like items.\n
\n
Use A,W,D,S & ENTER keys to move across th board.\n
Use SPACE & ENTER keys to strike monsters in combats.\n
--PRESS ENTER TO START--\n
`);
const b = new GameBoard();
b.run();
