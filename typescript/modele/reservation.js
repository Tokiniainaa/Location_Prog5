"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Reservation {
    constructor(name, email, start, end) {
        this.name = name;
        this.email = email;
        this.start = start;
        this.end = end;
    }
    display() {
        console.log(`👤 ${this.name} (${this.email}) - 📅 ${this.start.toDateString()} à ${this.end.toDateString()}`);
    }
}
exports.default = Reservation;
