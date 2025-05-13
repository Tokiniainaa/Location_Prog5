from modele.reservation import Reservation

class ReservationService:
    def __init__(self):
        self.all_reservations = []

    def make_reservation(self, name, email, item, start_date, end_date):
        if not item.is_available(start_date, end_date):
            raise Exception("Object already reserved")

        reservation = Reservation(name, email, start_date, end_date)
        item.add_reservation(reservation)
        self.all_reservations.append({"item": item.name, "reservation": reservation})

    def print_reservations(self):
        if not self.all_reservations:
            print("No reservation yet")
            return

        for entry in self.all_reservations:
            print(f"📝 {entry['item']} :")
            entry['reservation'].display()
