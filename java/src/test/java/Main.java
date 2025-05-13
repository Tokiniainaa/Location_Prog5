import modele.*;
import service.ReservationService;

import java.time.LocalDate;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ReservationService service = new ReservationService();
        Car car = new Car("car");



        while (true) {
            System.out.println("\n--- MENU ---");
            System.out.println("1. Make reservation");
            System.out.println("2. Watch reservation");
            System.out.println("3. Leave");
            System.out.print("Choice: ");
            String choice = scanner.nextLine();
            ItemCatalog catalog = new ItemCatalog();

            switch (choice) {
                case "1":
                    try {
                        List<ReservableItem> items = catalog.getItems();
                        System.out.println("\nChoose an object to reserve:");
                        for (int i = 0; i < items.size(); i++) {
                            System.out.println((i + 1) + ". " + items.get(i).getName());
                        }

                        System.out.print("Enter number: ");
                        int index = Integer.parseInt(scanner.nextLine()) - 1;
                        ReservableItem chosenItem = catalog.getItem(index);


                        System.out.print("Name: ");
                        String name = scanner.nextLine();

                        System.out.print("Email : ");
                        String email = scanner.nextLine();

                        Tenant tenant = new Tenant(name, email);

                        System.out.print("Start date (yyyy-mm-dd) : ");
                        LocalDate start = LocalDate.parse(scanner.nextLine());

                        System.out.print("End date (yyyy-mm-dd) : ");
                        LocalDate end = LocalDate.parse(scanner.nextLine());
                        service.makeReservation(tenant, car, start, end);
                    } catch (Exception e) {
                        System.out.println("❌ Error : " + e.getMessage());
                    }
                    break;

                case "2":
                    service.printReservations();
                    break;

                case "3":
                    System.out.println("👋 Bye!");
                    return;

                default:
                    System.out.println("Wrong choice.");
            }
        }
    }
}
