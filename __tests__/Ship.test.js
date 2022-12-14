const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
describe("Ship", () => {
  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Ship);
  });
  it("has starting port", () => {
    const ship = new Ship("Dover");
    expect(ship.startingPort).toBe("Dover");
  });
  it("can set sail", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
  });
});
