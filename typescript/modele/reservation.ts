export default class Reservation {
    name: string;
    email: string;
    start: Date;
    end: Date;
  
    constructor(name: string, email: string, start: Date, end: Date) {
      this.name = name;
      this.email = email;
      this.start = start;
      this.end = end;
    }
  
    display(): void {
      console.log(`👤 ${this.name} (${this.email}) - 📅 ${this.start.toDateString()} à ${this.end.toDateString()}`);
    }
  }
  