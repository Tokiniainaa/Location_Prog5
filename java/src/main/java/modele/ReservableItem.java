package modele;

public class ReservableItem {
    private final String name;

    public ReservableItem(String name) {
        this.name = name;
    }


    public String getName() {
        return name;
    }
    public void display() {
        System.out.println(name);
    }
}
