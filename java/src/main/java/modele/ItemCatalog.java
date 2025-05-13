package modele;

import java.util.ArrayList;
import java.util.List;

public class ItemCatalog {
    private List<ReservableItem> items = new ArrayList<>();

    public ItemCatalog(){
        //default object
        items.add(new Car("Car"));
        items.add(new House("House"));
        items.add(new Plate("Plate"));
    }
    public void addItem(ReservableItem item) {
        items.add(item);

    }

    public List<ReservableItem> getItems() {
        return items;
    }

    public ReservableItem getItem(int index) {
        if (index >= 0 && index < items.size()) {
            return items.get(index);
        }
        throw new IllegalArgumentException("Objet invalide.");
    }
}
