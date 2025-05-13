from modele.reservable_item import ReservableItem

class Car(ReservableItem):
    def __init__(self, name):
        super().__init__(name)

    def display_details(self):
        print(f"Car: {self.name}")
