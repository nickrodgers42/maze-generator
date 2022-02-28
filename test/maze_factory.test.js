import Maze from "../src/maze"
import MazeFactory from "../src/maze_factory"

test("Creates a maze", () => {
    expect(MazeFactory.create()).toBeInstanceOf(Maze);
});
