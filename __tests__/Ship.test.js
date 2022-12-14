const { object } = require("prop-types");
const Itinerary = require("../src/Itinerary");
const port = require("../src/Port.js");
const Port = require("../src/Port.js");
const Ship = require("../src/Ship.js");
describe("Ship", () => {
  xit("can be instantiated", () => {
    const new port = new Port ("Dover");
    const itinerary = new Itinerary ([port]);
    const ship = new Ship (itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it("has a starting port", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
  it("can set sail", () => {
    const port = new Port("Dover");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  it("can dock at a different port", () => {
    const dover = new Port("Dover");
    const calais = new Port("Calais");
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });
  it('can\'t sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover, calais]);
    const ship = new Ship(itinerary);
  
    ship.setSail();
    ship.dock();
  
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});
