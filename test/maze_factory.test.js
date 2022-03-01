import Maze from "../src/maze"
import MazeFactory from "../src/maze_factory"

test("Creates a 15 x 20 maze", () => {
    let maze = MazeFactory.create(15, 20);

    expect(maze).toBeInstanceOf(Maze);
    expect(maze.getWidth()).toBe(15);
    expect(maze.getHeight()).toBe(20);

    const cell = maze.getCell(6, 4);
    expect(cell.x).toBe(6);
    expect(cell.y).toBe(4);
});
