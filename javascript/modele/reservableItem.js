class ReservableItem {
    constructor(name) {
      this.name = name;
      this.reservations = [];
    }
  
    isAvailable(start, end) {
      return this.reservations.every(res =>
        end < res.start || start > res.end
      );
    }
  
    addReservation(reservation) {
      this.reservations.push(reservation);
    }
  
    displayDetails(index) {
      console.log(`${index + 1}. ${this.name}`);
    }
  }
  module.exports = ReservableItem;
  