const ReservableItem = require("../modele/reservableItem");


class Car extends ReservableItem {
  constructor(name) {
    super(name);  // Appel au constructeur de la classe parent
  }

  displayDetails(index) {
    super.displayDetails(index);
  }
}

module.exports = Car;
