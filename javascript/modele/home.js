const ReservableItem = require("../modele/reservableItem");


class Home extends ReservableItem {
  constructor(name) {
    super(name);  // Appel au constructeur de la classe parent
  }

  displayDetails(index) {
    super.displayDetails(index);
  }
}
module.exports = Home;
