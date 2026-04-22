package Domain;

// NOTE: Shopper class sets role to Role.SHOPPER. See `Domain/User.java` for login/logout/updateProfile implementation.
// Completed: Role assignment done in constructor.

import java.util.List;
import java.util.ArrayList;

public class Shopper extends User {
    private List<GroceryOrder> orderHistory;

    public Shopper() {
        super("", "shopper", "", Role.SHOPPER);
        this.orderHistory = new ArrayList<>();
    }

    public void placeOrder() {}
    public void viewOrders() {}
    public void trackDelivery() {}

    public List<GroceryOrder> getOrderHistory() { return orderHistory; }
    public void setOrderHistory(List<GroceryOrder> orderHistory) { this.orderHistory = orderHistory; }
}
