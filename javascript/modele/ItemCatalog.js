const Car = require("./car");
const Home = require("./home");
const Plate = require("./plate");

class ItemCatalog {
  constructor() {
    this.items = [
      new Car("Car"),
      new Home("Home"),
      new Plate("Plate")
    ];
  }

  getItems() {
    return this.items;
  }

  getItem(index) {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    throw new Error("Object invalid");
  }
}

module.exports = ItemCatalog;
