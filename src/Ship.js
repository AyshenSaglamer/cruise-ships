function Ship(startingPort) {
  this.startingPort = startingPort;
}

Ship.prototype.dock = function (portName) {
  this.currentPort = portName;
};
Ship.prototype.setSail = function () {
  this.startingPort = null;
};
module.exports = Ship;
