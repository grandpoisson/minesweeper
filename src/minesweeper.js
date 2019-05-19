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
generatePlayerBoard(4,4);
console.log(board);