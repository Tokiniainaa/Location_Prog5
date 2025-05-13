"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const reservationService_1 = __importDefault(require("./service/reservationService"));
const itemCatalog_1 = __importDefault(require("./modele/itemCatalog"));
const service = new reservationService_1.default();
const catalog = new itemCatalog_1.default();
while (true) {
    console.log("\n--- MENU ---");
    console.log("1. Faire une réservation");
    console.log("2. Voir les réservations");
    console.log("3. Quitter");
    const choice = readline_sync_1.default.question("Choix : ");
    switch (choice) {
        case "1":
            try {
                const name = readline_sync_1.default.question("Nom : ");
                const email = readline_sync_1.default.question("Email : ");
                const items = catalog.getItems();
                console.log("\n--- Choisissez un objet à réserver ---");
                items.forEach((item, i) => item.displayDetails(i));
                const itemChoice = parseInt(readline_sync_1.default.question("Numéro de l'objet : "), 10);
                const item = catalog.getItem(itemChoice - 1);
                const start = new Date(readline_sync_1.default.question("Date de début (yyyy-mm-dd) : "));
                const end = new Date(readline_sync_1.default.question("Date de fin (yyyy-mm-dd) : "));
                service.makeReservation(name, email, item, start, end);
            }
            catch (err) {
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
