import Reservation from "../modele/reservation";
import ReservableItem from "../modele/reservableItem";

export default class ReservationService {
  private allReservations: { item: string; reservation: Reservation }[] = [];

  makeReservation(name: string, email: string, item: ReservableItem, start: Date, end: Date): void {
    if (!item.isAvailable(start, end)) {
      throw new Error("Object already reserved");
    }

    const reservation = new Reservation(name, email, start, end);
    item.addReservation(reservation);
    this.allReservations.push({ item: item.name, reservation });
  }

  printReservations(): void {
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
