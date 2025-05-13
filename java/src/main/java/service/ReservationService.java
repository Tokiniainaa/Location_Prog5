package service;

import modele.Reservation;
import modele.Tenant;
import modele.ReservableItem;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class ReservationService {
    private final List<Reservation> reservations = new ArrayList<>();

    public void makeReservation(Tenant tenant, ReservableItem item, LocalDate start, LocalDate end) {
        Reservation newReservation = new Reservation(tenant, item, start, end);

        for (Reservation existing : reservations) {
            if (existing.overlaps(newReservation)) {
                throw new IllegalStateException("Conflict: " + item.getName() + " is already reserved from "
                        + existing.getStartDate() + " to " + existing.getEndDate());
            }
        }

        reservations.add(newReservation);
        System.out.println("✅ Reservation confirmed: " + newReservation);
    }

    public void printReservations() {
        if (reservations.isEmpty()) {
            System.out.println("No reservations found.");
            return;
        }

        System.out.println("\n--- Current Reservations ---");
        for (Reservation r : reservations) {
            r.display();
        }
    }
}

