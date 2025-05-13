import Car from "./car";
import House from "./house";
import Plate from "./plate";
import ReservableItem from "./reservableItem";

export default class ItemCatalog {
  private items: ReservableItem[] = [];

  constructor() {
    this.items.push(new Car("Car"));
    this.items.push(new House("House"));
    this.items.push(new Plate("Plate"));
  }

  getItems(): ReservableItem[] {
    return this.items;
  }

  getItem(index: number): ReservableItem {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    }
    throw new Error("Objet invalide.");
  }
}
