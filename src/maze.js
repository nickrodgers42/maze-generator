'use strict';

export default class Maze {
    constructor(cellMatrix) {
        this.cellMatrix = cellMatrix;
    }

    getCell(column, row) {
        return this.cellMatrix[column][row];
    }

    getWidth() {
        return this.cellMatrix.length;
    }

    getHeight() {
        return this.cellMatrix[0].length;
    }

    draw() {
        
    }
}
