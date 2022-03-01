'use strict';

import MazeFactory from "./maze_factory.js"

new p5((sketch) => {
    let maze;

    sketch.preload = () => {
    }

    sketch.setup = () => {
        sketch.createCanvas(500, 500);
        maze = MazeFactory.create(10, 10);
    }

    sketch.draw = () => {
        sketch.clear();
        sketch.fill('rgb(0, 255, 255)');
        sketch.rect(50, 50, 20, 20);
        maze.draw(sketch);
    }
});



