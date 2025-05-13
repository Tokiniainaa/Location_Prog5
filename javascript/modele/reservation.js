class Reservation {
    constructor(tenantName, tenantEmail, start, end) {
      this.tenantName = tenantName;
      this.tenantEmail = tenantEmail;
      this.start = start;
      this.end = end;
    }
  
    display() {
      console.log(`${this.tenantName} (${this.tenantEmail}) - du ${this.start} au ${this.end}`);
    }
  }
  
  module.exports = Reservation;
  