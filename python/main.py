import datetime
from modele.car import Car
from service.reservation_service import ReservationService

def main():
    service = ReservationService()
    car = Car("Toyota")

    while True:
        print("\n--- MENU ---")
        print("1. Make reservation")
        print("2. Watch reservations")
        print("3. Exit")
        choice = input("Choice: ")

        if choice == "1":
            try:
                name = input("Name: ")
                email = input("Email: ")

                start_date = input("Start date (yyyy-mm-dd): ")
                end_date = input("End date (yyyy-mm-dd): ")

                start_date = datetime.datetime.strptime(start_date, "%Y-%m-%d")
                end_date = datetime.datetime.strptime(end_date, "%Y-%m-%d")

                service.make_reservation(name, email, car, start_date, end_date)

            except Exception as e:
                print(f"❌ Error: {e}")

        elif choice == "2":
            service.print_reservations()

        elif choice == "3":
            print("👋 Goodbye!")
            break

        else:
            print("Invalid choice.")

if __name__ == "__main__":
    main()
