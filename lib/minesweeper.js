'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        row = [];
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
    var board = [];
    for (var i = 0; i < numberOfRows; i++) {
        row = null;
        for (var j = 0; j < numberOfColumns; j++) {
            row.push(' ');
        }
        board.push(row);
    }
    var numberOfBombsPlaced = 0;
    while (numberOfBombsPlaced < numberOfBombs) {
        //maybe some bombs will be placed at the same place
        var randomRowIndex = Math.floor(Math.random() * numberOfRows);
        var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
        board[randomRowIndex][randomColumnIndex] = "B";
        numberOfBombsPlaced++;
    }
    return board;
};

var printBoard = function printBoard(board) {
    console.log(board.map(function (row) {
        return row.join(' | ');
    }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ' + printBoard(playerBoard));
console.log('Bomb Board: ' + printBoard(bombBoard));