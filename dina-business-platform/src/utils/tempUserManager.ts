// نظام إدارة المستخدمين المؤقت
export interface TempUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export class TempUserManager {
  private static STORAGE_KEY = 'dina_temp_users';

  static saveUser(user: Omit<TempUser, 'id' | 'createdAt'>): TempUser {
    const users = this.getAllUsers();
    const newUser: TempUser = {
      ...user,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    return newUser;
  }

  static findUserByEmail(email: string): TempUser | null {
    const users = this.getAllUsers();
    return users.find(user => user.email === email) || null;
  }

  static getAllUsers(): TempUser[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const users = localStorage.getItem(this.STORAGE_KEY);
      return users ? JSON.parse(users) : [];
    } catch {
      return [];
    }
  }

  static clearAllUsers(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
