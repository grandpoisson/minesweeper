class Game {
    constructor(numberOfRows,numberOfColumns,numberOfBombs){
        this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
    }
    playMove(rowIndex,ColumnIndex){
        this._board.flipTile(rowIndex,ColumnIndex)
        if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
            console.log('Boom! Game Over');
            this.board.print
        } else if (!this._board.hasSafeTiles) {
            console.log('Congratulations - you survived!')
        } else {
            console.log('Current Board:');
            this._board.print;
        }
    }
}


class Board {
   constructor(numberOfRows,numberOfColumns,numberOfBombs) {
        this._numberOfBombs = numberOfBombs;
        this._numberOfTiles = numberOfRows * numberOfColumns;
        this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
        this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
   } 
   get playerBoard(){
       return this._playerBoard;
   }

    flipTile = (rowIndex, columnIndex) => {
        if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
            console.log('This tile has already been flipped!');
            return;
        } 
        else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
            this._playerBoard[rowIndex][columnIndex] = 'B';
        } 
        else {
            this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighbourBombs(rowIndex, columnIndex);
            this._numberOfTiles--;
        };
    };
    getNumberOfNeighbourBombs = function(rowIndex,columnIndex) 
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
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighbourOffsets.forEach(offset => {
     const neighbourRowIndex =  rowIndex + offset[0];
     const neighbourColumnIndex = columnIndex + offset[1];
     if (neighbourRowIndex >= 0 && 
         neighbourRowIndex < numberOfRows && 
         neighbourColumnIndex >= 0 && 
         neighbourColumnIndex < numberOfColumns) {
           if (this._bombBoard[neighbourRowIndex][neighbourColumnIndex] === 'B') {
               numberOfBombs ++;
            }; 
        };
    });
    return numberOfBombs;
    hasSafeTiles() {
        return (this._numberOfTiles !== this._numberOfBombs) ;  
    };
    print() {
        console.log(board.map(row => row.join(' | ')).join('\n'));
    
    };
    static generatePlayerBoard = function( numberOfRows, numberOfColumns) {
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
    static generateBombBoard = function(numberOfRows, numberOfColumns, numberOfBombs)  {
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
            if (board[randomRowIndex][randomColumnIndex] !=='B'){
                board[randomRowIndex][randomColumnIndex] = 'B';
            numberOfBombsPlaced ++;
            }
            
            /*NOTE: The code in your while loop has the potential to place bombs 
            on top of already existing bombs. This will be fixed when you learn 
            about control flow.*/
        }
        return board;
    };

}











 
this._playerBoard = generatePlayerBoard(3,4);
this._bombBoard = generateBombBoard(3,4,5);
console.log('Player Board: '+ print(this._playerBoard));
console.log('  Bomb Board: '+ print(this._bombBoard));
flipTile(this._playerBoard, this._bombBoard,1,1);
console.log('Updated Player Board:');
print(this._playerBoard);

const g = new Game(3,3,3);
g.playMove(0,0);
