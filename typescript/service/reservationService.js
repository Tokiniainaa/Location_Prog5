"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_1 = __importDefault(require("../modele/reservation"));
class ReservationService {
    constructor() {
        this.allReservations = [];
    }
    makeReservation(name, email, item, start, end) {
        if (!item.isAvailable(start, end)) {
            throw new Error("Object already reserved");
        }
        const reservation = new reservation_1.default(name, email, start, end);
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
exports.default = ReservationService;
