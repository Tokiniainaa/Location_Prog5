from datetime import datetime

class Reservation:
    def __init__(self, name, email, start_date, end_date):
        self.name = name
        self.email = email
        self.start = start_date
        self.end = end_date

    def display(self):
        print(f"Name: {self.name}, Email: {self.email}, From: {self.start.strftime('%Y-%m-%d')}, To: {self.end.strftime('%Y-%m-%d')}")
