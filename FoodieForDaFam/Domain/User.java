package Domain;

// NOTE: Login, logout, and updateProfile functionality implemented.
// NOTE: Role enum integrated into User (field + constructor + messages).
// Completed: credential storage added (passwordHash + passwordSalt) and accessors.

import Contracts.Persistable;
import Domain.Role;

public class User implements Persistable {
    private String id;
    private String userName;
    private String email;
    private Role role;
    private String passwordHash;
    private String passwordSalt;

    public User(String id, String userName, String email, Role role) {
        this(id, userName, email, role, null, null);
    }

    public User(String id, String userName, String email, Role role, String passwordHash, String passwordSalt) {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.role = role == null ? Role.USER : role;
        this.passwordHash = passwordHash;
        this.passwordSalt = passwordSalt;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void login() {
        System.out.println(userName + " (" + role + ") logged in.");
    }

    public void logout() {
        System.out.println(userName + " (" + role + ") logged out.");
    }

    public void updateProfile(String newUserName, String newEmail) {
        if (newUserName != null && !newUserName.isBlank()) {
            this.userName = newUserName;
        }
        if (newEmail != null && !newEmail.isBlank()) {
            this.email = newEmail;
        }
        System.out.println("Profile updated for " + userName + ": " + email);
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public String getPasswordSalt() {
        return passwordSalt;
    }

    public void setPasswordSalt(String passwordSalt) {
        this.passwordSalt = passwordSalt;
    }
}
