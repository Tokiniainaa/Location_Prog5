import Reservation from "./reservation";

export default class ReservableItem {
  name: string;
  reservations: Reservation[] = [];

  constructor(name: string) {
    this.name = name;
  }

  isAvailable(start: Date, end: Date): boolean {
    return this.reservations.every(
      r => end <= r.start || start >= r.end
    );
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  displayDetails(index: number): void {
    console.log(`${index + 1}. ${this.name}`);
  }
}
