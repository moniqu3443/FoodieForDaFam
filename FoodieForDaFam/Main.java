import Service.UserService;
import Domain.User;
import Domain.Role;

public class Main {
    public static void main(String[] args) {
    UserService svc = new UserService();

    // register with password
    char[] password = "s3cr3t".toCharArray();
    User alice = svc.registerWithPassword("alice", "alice@example.com", Role.CHEF, password);
    System.out.println("Registered user id=" + alice.getId());
    System.out.println("Registered user role=" + alice.getRole());

    // login by credentials
    boolean logged = svc.loginByCredentials("alice", "s3cr3t".toCharArray());
    System.out.println("Login successful: " + logged);

    svc.updateProfile(alice.getId(), "alice2", "alice2@example.com");

    svc.logout();
    }
}
