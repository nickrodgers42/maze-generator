'use strict';

import Cell from "./cell"
import Maze from "./maze"

export default class MazeFactory {
    static create(width=10, height=10) {
        const cellGrid = [];

        for (let i = 0; i < height; ++i) {
            cellGrid.push([]);
            for (let j = 0; j < width; ++j) { 
                cellGrid[i].push(new Cell());
            }
        }

        return new Maze(cellGrid);
    }
}
