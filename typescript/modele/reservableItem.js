"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReservableItem {
    constructor(name) {
        this.reservations = [];
        this.name = name;
    }
    isAvailable(start, end) {
        return this.reservations.every(r => end <= r.start || start >= r.end);
    }
    addReservation(reservation) {
        this.reservations.push(reservation);
    }
    displayDetails(index) {
        console.log(`${index + 1}. ${this.name}`);
    }
}
exports.default = ReservableItem;
