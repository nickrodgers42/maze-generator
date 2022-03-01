'use strict';

import Cell from "./cell.js"
import Maze from "./maze.js"

export default class MazeFactory {
    static create(width=10, height=10) {
        let cellGrid = [];

        for (let i = 0; i < height; ++i) {
            cellGrid.push([]);
            for (let j = 0; j < width; ++j) { 
                cellGrid[i].push(new Cell(i, j));
            }
        }

        return new Maze(cellGrid);
    }
}
