const Ship = require('../src/Ship.js');
describe('Ship',() => {
xit('can be instantiated',() => {
    expect(new Ship()).toBeInstanceOf(Object);
});
});
xit('has a starting port',() => {
    const ship = new Ship('Dover');
})
it('can set sail',() => {
    const ship = new Ship ('Dover');
    ship.setSail();
    expect(ship.startingPort).toBeFalsy();
})