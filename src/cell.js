export const directions = {
    NORTH: "north",
    SOUTH: "south",
    EAST: "east",
    WEST: "west"
}


export default class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.walls = {
            north: true,
            south: true,
            east: true,
            west: true
        };
    }

    setWall(wallDirection, hasWall) {
        this.walls[wallDirection] = hasWall;
    }

    draw(sketch, topLeftX, topLeftY, width, height) {
        sketch.stroke("rgb(0, 0, 0)");
        sketch.strokeWeight(4);
        sketch.fill("rgb(255, 255, 255)");
        sketch.rect(topLeftX, topLeftY, width, height);
    }
}

