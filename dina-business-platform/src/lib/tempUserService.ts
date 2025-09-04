// نظام إدارة المستخدمين المؤقت باستخدام متغير عام
interface TempUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

declare global {
  var tempUsersStore: Map<string, TempUser> | undefined;
}

const tempUsersStore: Map<string, TempUser> = globalThis.tempUsersStore ?? new Map<string, TempUser>();

if (process.env.NODE_ENV !== 'production') globalThis.tempUsersStore = tempUsersStore;

export { tempUsersStore };

export const TempUserService = {
  save: (user: TempUser) => {
    tempUsersStore.set(user.email, user);
  },
  
  findByEmail: (email: string): TempUser | undefined => {
    return tempUsersStore.get(email);
  },
  
  getAll: (): TempUser[] => {
    return Array.from(tempUsersStore.values());
  },
  
  clear: () => {
    tempUsersStore.clear();
  }
};
