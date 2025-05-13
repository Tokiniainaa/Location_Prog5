
const Reservation = require("./modele/reservation");

class ReservationService {
  constructor() {
    this.allReservations = [];
  }

  makeReservation(name, email, item, start, end) {
    if (!item.isAvailable(start, end)) {
      throw new Error("Object already reserved");
    }

    const reservation = new Reservation(name, email, start, end);
    item.addReservation(reservation);
    this.allReservations.push({ item: item.name, reservation });
  }

  printReservations() {
    if (this.allReservations.length === 0) {
      console.log("No reservation yet");
      return;
    }

    for (const { item, reservation } of this.allReservations) {
      console.log(`📝 ${item} :`);
      reservation.display();
    }
  }
}


module.exports= ReservationService;
