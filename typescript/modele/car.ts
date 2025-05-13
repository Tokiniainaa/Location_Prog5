import ReservableItem from "./reservableItem";

export default class Car extends ReservableItem {
  constructor(name: string) {
    super(name);
  }
}
