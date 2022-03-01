import Cell, { directions } from "../src/cell"

test("Able to create a cell instance", () => {
    new Cell();
});

test("Able to specify a cell's coordinates", () => {
    let cell = new Cell(2, 5);
    expect(cell.x).toBe(2);
    expect(cell.y).toBe(5);

    const cell2 = new Cell(5, 4);
    expect(cell2.x).toBe(5);
    expect(cell2.y).toBe(4);
});

test("Creates a cell with all walls", () => {
    let cell = new Cell(10, 10);
    expect(cell.walls).toMatchObject({
        north: true,
        south: true,
        east: true,
        west: true
    });
});

test("Can toggle a wall", () => {
    let cell = new Cell(5, 5);
    expect(cell.walls).toMatchObject({
        north: true,
        south: true,
        east: true,
        west: true
    });
    cell.setWall(directions.SOUTH, false);
    expect(cell.walls).toMatchObject({
        north: true,
        south: false,
        east: true,
        west: true
    });
    cell.setWall(directions.SOUTH, true);
    expect(cell.walls).toMatchObject({
        north: true,
        south: true,
        east: true,
        west: true
    });
});
