
package Domain;

// NOTE: Volunteer class should set role to Role.VOLUNTEER. See `Domain/User.java` for login/logout/updateProfile implementation.
// Completed: Role integration handled in the base User class.

import java.util.List;
import java.util.ArrayList;

public class Volunteer extends User {
    private List<String> deliveries;

    public Volunteer() {
        super("", "volunteer", "", Role.VOLUNTEER);
        this.deliveries = new ArrayList<>();
    }

    public void signUpForDelivery() {}
    public void completeDelivery() {}
    public void viewOpportunities() {}

    public List<String> getDeliveries() { return deliveries; }
    public void setDeliveries(List<String> deliveries) { this.deliveries = deliveries; }
}
