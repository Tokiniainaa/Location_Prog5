const prompt = require("prompt-sync")({ sigint: true });
const ItemCatalog = require("./modele/ItemCatalog");
const ReservationService = require("./ReservationService");
const Tenant = require("./modele/tenant");

const catalog = new ItemCatalog();
const service = new ReservationService();

while (true) {
  console.log("\n--- MENU ---");
  console.log("1. make reservation");
  console.log("2. watch reservation");
  console.log("3. leave ");
  const choice = prompt("Choice : ");

  switch (choice) {
    case "1":
      try {
        const name = prompt("Name : ");
        const email = prompt("Email : ");
        const tenant = new Tenant(name, email);

        console.log("\n--- Object ---");
        const items = catalog.getItems();
        items.forEach((item, index) => item.displayDetails(index));

        const itemChoice = parseInt(prompt("Choose : ")) - 1;
        const item = catalog.getItem(itemChoice);

        const start = new Date(prompt("start date (yyyy-mm-dd) : "));
        const end = new Date(prompt("end date  (yyyy-mm-dd) : "));

        if (isNaN(start) || isNaN(end)) throw new Error("invalid date .");
        if (end <= start) throw new Error("reservation should more than 1 day.");

        service.makeReservation(name, email, item, start, end);
        console.log("✅ Réservation maked !");
      } catch (e) {
        console.log("❌ Error : " + e.message);
      }
      break;

    case "2":
      service.printReservations();
      break;

    case "3":
      console.log("👋 Bye !");
      process.exit(0);

    default:
      console.log("Wrong choice.");
  }
}
