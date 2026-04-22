import { User, Role, RegisterForm } from '../types';

export class UserService {
  private users: Map<string, User> = new Map();
  private usernameIndex: Map<string, string> = new Map();
  private loggedInUser: User | null = null;

  registerWithPassword(form: RegisterForm): User {
    const id = crypto.randomUUID();
    // Mock salt/hash (in real app, use proper crypto)
    const salt = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
    const encoder = new TextEncoder();
    const data = encoder.encode(form.password + salt);
    crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hash = btoa(String.fromCharCode(...hashArray));
      const user: User = { id, userName: form.userName, email: form.email, role: form.role, passwordHash: hash, passwordSalt: salt, isLoggedIn: false };
      this.users.set(id, user);
      this.usernameIndex.set(form.userName, id);
      console.log('Registered:', user.userName);
    });
    // Sync fallback for demo
    const user: User = { id, userName: form.userName, email: form.email, role: form.role, isLoggedIn: false };
    this.users.set(id, user);
    this.usernameIndex.set(form.userName, id);
    return user;
  }

  loginByCredentials(userName: string, password: string): boolean {
    const id = this.usernameIndex.get(userName);
    if (!id || !this.users.has(id)) return false;
    const user = this.users.get(id)!;
    if (user.passwordHash && user.passwordSalt) {
      // Mock verify
      return true; // Simplified
    }
    return false;
  }

  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  logout(): void {
    if (this.loggedInUser) {
      this.loggedInUser.isLoggedIn = false;
      this.loggedInUser = null;
    }
  }
}

export const userService = new UserService();
