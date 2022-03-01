'use strict';

export default class Maze {
    constructor(cellMatrix) {
        this.cellMatrix = cellMatrix;
    }

    getCell(column, row) {
        return this.cellMatrix[column][row];
    }

    getWidth() {
        return this.cellMatrix[0].length;
    }

    getHeight() {
        return this.cellMatrix.length;
    }

    draw(sketch) {
        let rows = this.getHeight();
        let cols = this.getWidth();

        sketch.fill('rgb(0, 0, 0)');
        for (let i = 0; i < rows; ++i) {
            let cellHeight = sketch.height / rows;
            let yPosition = cellHeight * i;

            for (let j = 0; j < cols; ++j) {
                let cellWidth = sketch.width / cols;
                let xPosition = cellWidth * j;
                this.cellMatrix[i][j].draw(
                    sketch, xPosition, yPosition, cellWidth, cellHeight);
            }
        }
    }
}
