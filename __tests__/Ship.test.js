const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
describe("Ship", () => {
  xit("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Ship);
  });
  xit("has starting port", () => {
    const ship = new Ship("Dover");
    expect(ship.startingPort).toBe("Dover");
  });
  it("can set sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(port);
  });

  xit("can dock at a different port", () => {
    const dover = new Port("Dover");
    const ship = new Ship(dover);

    const calais = new Port("Calais");
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);
  });
});
