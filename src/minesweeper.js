const generatePlayerBoard = ( numberOfRows, numberOfColumns) => {
    board = [];
    for(let i=0; i < numberOfRows; i++){
        row = [];
        for (let j=0; j < numberOfColumns; j++){
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    board = [];
    for(let i=0; i < numberOfRows; i++){
        row = [];
        for (let j=0; j < numberOfColumns; j++){
            row.push(null);
        }
        board.push(row);
    }
    let numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        let randomRowIndex = Math.floor(Math.random() * numberOfRows);
        let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        if (!board[randomRowIndex][randomColumnIndex] ==='B'){
            board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced ++;
        }
        
        /*NOTE: The code in your while loop has the potential to place bombs 
        on top of already existing bombs. This will be fixed when you learn 
        about control flow.*/
    }
    return board;
};
const getNumberOfNeighborBombs = (bombBoard, rowIndex,columnIndex) =>{
   const neighbourOffsets = [
       [-1,-1],
       [-1,0],
       [-1,1],
       [0,-1],
       [0,1],
       [1,-1],
       [1,0],
       [1,1]
   ] ;
   const numberOfRows = bombBoard.length;
   const numberOfColumns = bombBoard[0].length;
}

const printBoard = board => {
    console.log(board.map(row => row.join(' | ')).join('\n'));

};
let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: '+ printBoard(playerBoard));
console.log('  Bomb Board: '+ printBoard(bombBoard));
