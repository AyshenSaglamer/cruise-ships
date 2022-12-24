function Ship(startingPort) {
  this.startingPort = startingPort;
}

Ship.prototype.dock = function (portName) {
  this.currentPort = portName;
};
function Ship(currentPort) {
  this.currentPort = currentPort;
  this.previousPort = null;

  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  };
}
Ship.prototype.dock = function (port) {
  this.currentPort = port;
};
module.exports = Ship;
