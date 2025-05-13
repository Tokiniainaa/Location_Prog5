const ReservableItem = require("../modele/reservableItem");


class Plate extends ReservableItem {
  constructor(name) {
    super(name);  // Appel au constructeur de la classe parent
  }

  displayDetails(index) {
    super.displayDetails(index);
  }
}

module.exports = Plate;
