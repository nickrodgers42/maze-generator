'use strict';

import Maze from "../src/maze.js"
import Cell from "../src/cell.js"
import { jest } from '@jest/globals'


jest.mock("../src/cell")

test("Able to create a maze object", () => {
    new Maze([[new Cell()]]);
})

test("Able to intitialize a 10 x 10 maze", () => {
    let mazeGrid = []
    for (let i = 0; i < 10; ++i) {
        mazeGrid.push([]);
        for (let j = 0; j < 10; ++j) {
            mazeGrid[i].push(new Cell(i, j));
        }
    }
    let maze = new Maze(mazeGrid);
    expect(maze.getWidth()).toBe(10);
    expect(maze.getHeight()).toBe(10);
})

test("Able to access an individual cell", () => {
    let maze = new Maze([[new Cell(0, 0)]]);
    expect(maze.getCell(0, 0)).toBeDefined();
    expect(maze.getCell(0, 0).x).toBe(0);
})


