from abc import ABC, abstractmethod
from datetime import datetime

class ReservableItem(ABC):
    def __init__(self, name):
        self.name = name
        self.reservations = []

    @abstractmethod
    def display_details(self):
        pass

    def is_available(self, start_date, end_date):
        for res in self.reservations:
            if (start_date <= res['end'] and end_date >= res['start']):
                return False
        return True

    def add_reservation(self, reservation):
        self.reservations.append(reservation)
