package modele;

import java.time.LocalDate;
import java.util.Objects;

public class Reservation {
    private final Tenant tenant;
    private final ReservableItem item;
    private final LocalDate startDate;
    private final LocalDate endDate;


    public Reservation(Tenant tenant, ReservableItem item, LocalDate startDate, LocalDate endDate) {
        if (startDate.isAfter(endDate)) {
            throw new IllegalArgumentException("endDate must be after startDate");
        }
        this.item = item;
        this.tenant = tenant;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public Tenant getTenant() {
        return tenant;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }
    public boolean overlaps(Reservation other) {
        return item.getName().equals(other.item.getName())
                && startDate.isBefore(other.endDate)
                && endDate.isAfter(other.startDate);
    }
    public void display() {
        System.out.println("Réservation: " + item.getName() + " par " + tenant.getName()
                + " du " + startDate + " au " + endDate);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Reservation that = (Reservation) o;
        return Objects.equals(tenant, that.tenant) && Objects.equals(item, that.item) && Objects.equals(startDate, that.startDate) && Objects.equals(endDate, that.endDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(tenant, item, startDate, endDate);
    }

    @Override
    public String toString() {
        return "Reservation{" +
                "tenant=" + tenant +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                '}';
    }
}
