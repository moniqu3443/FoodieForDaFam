export type Role = 'USER' | 'CHEF' | 'SHOPPER' | 'VOLUNTEER';

export interface User {
  id: string;
  userName: string;
  email: string;
  role: Role;
  passwordHash?: string;
  passwordSalt?: string;
  isLoggedIn: boolean;
}

export interface RegisterForm {
  userName: string;
  email: string;
  role: Role;
  password: string;
}
