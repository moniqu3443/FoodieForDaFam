package Service;

import Domain.User;
import Domain.Role;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.Optional;

public class UserService {
    private final Map<String, User> users = new HashMap<>();
    // username -> id map for credential lookups
    private final Map<String, String> usernameIndex = new HashMap<>();
    private User loggedInUser = null;

    public User register(String userName, String email) {
        return register(userName, email, Role.USER);
    }

    public User register(String userName, String email, Role role) {
        return registerWithPassword(userName, email, role, null);
    }

    public User registerWithPassword(String userName, String email, Role role, char[] password) {
        String id = UUID.randomUUID().toString();
        String salt = null;
        String hash = null;
        if (password != null) {
            salt = PasswordUtil.generateSalt();
            hash = PasswordUtil.hashPassword(password, salt);
        }
        User user = new User(id, userName, email, role, hash, salt);
        users.put(id, user);
        usernameIndex.put(userName, id);
        return user;
    }

    public Optional<User> findByUsername(String userName) {
        String id = usernameIndex.get(userName);
        if (id == null) return Optional.empty();
        return Optional.ofNullable(users.get(id));
    }

    public boolean loginById(String id) {
        User user = users.get(id);
        if (user != null) {
            user.login();
            loggedInUser = user;
            return true;
        }
        return false;
    }

    public boolean loginByCredentials(String userName, char[] password) {
        Optional<User> maybe = findByUsername(userName);
        if (maybe.isEmpty()) return false;
        User user = maybe.get();
        if (user.getPasswordSalt() == null || user.getPasswordHash() == null) return false;
        boolean ok = PasswordUtil.verifyPassword(password, user.getPasswordSalt(), user.getPasswordHash());
        if (ok) {
            user.login();
            loggedInUser = user;
            return true;
        }
        return false;
    }

    public boolean logout() {
        if (loggedInUser != null) {
            loggedInUser.logout();
            loggedInUser = null;
            return true;
        }
        return false;
    }

    public boolean updateProfile(String id, String newUserName, String newEmail) {
        User user = users.get(id);
        if (user != null) {
            user.updateProfile(newUserName, newEmail);
            return true;
        }
        return false;
    }

    public User getUser(String id) {
        return users.get(id);
    }
}
