import readline from "readline-sync";
import ReservationService from "./service/reservationService";
import ItemCatalog from "./modele/itemCatalog";

const service = new ReservationService();
const catalog = new ItemCatalog();

while (true) {
  console.log("\n--- MENU ---");
  console.log("1. Faire une réservation");
  console.log("2. Voir les réservations");
  console.log("3. Quitter");
  const choice = readline.question("Choix : ");

  switch (choice) {
    case "1":
      try {
        const name = readline.question("Nom : ");
        const email = readline.question("Email : ");

        const items = catalog.getItems();
        console.log("\n--- Choisissez un objet à réserver ---");
        items.forEach((item, i) => item.displayDetails(i));
        const itemChoice = parseInt(readline.question("Numéro de l'objet : "), 10);

        const item = catalog.getItem(itemChoice - 1);
        const start = new Date(readline.question("Date de début (yyyy-mm-dd) : "));
        const end = new Date(readline.question("Date de fin (yyyy-mm-dd) : "));

        service.makeReservation(name, email, item, start, end);
      } catch (err: any) {
        console.log("❌ Erreur : " + err.message);
      }
      break;

    case "2":
      service.printReservations();
      break;

    case "3":
      console.log("👋 Bye!");
      process.exit(0);

    default:
      console.log("Choix invalide.");
  }
}
