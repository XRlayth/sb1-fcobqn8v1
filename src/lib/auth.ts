interface User {
  id: string;
  name: string;
  email: string;
  provider: 'email' | 'google';
  createdAt: Date;
  twoFactorEnabled?: boolean;
}

interface VerificationToken {
  id: string;
  userId: string;
  token: string;
  type: string;
  expiresAt: Date;
  createdAt: Date;
  isUsed: boolean;
}

interface BackupCode {
  id: string;
  userId: string;
  code: string;
  isUsed: boolean;
  createdAt: Date;
  usedAt?: Date;
}

class AuthService {
  private static instance: AuthService;
  private users: User[] = [];
  private currentUser: User | null = null;
  private verificationTokens: VerificationToken[] = [];
  private backupCodes: BackupCode[] = [];

  private constructor() {
    // Load data from localStorage
    const savedUsers = localStorage.getItem('users');
    const savedTokens = localStorage.getItem('verificationTokens');
    const savedCodes = localStorage.getItem('backupCodes');

    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
    if (savedTokens) {
      this.verificationTokens = JSON.parse(savedTokens);
    }
    if (savedCodes) {
      this.backupCodes = JSON.parse(savedCodes);
    }

    // Check for existing session
    const session = localStorage.getItem('session');
    if (session) {
      this.currentUser = JSON.parse(session);
    }
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  private saveTokens(): void {
    localStorage.setItem('verificationTokens', JSON.stringify(this.verificationTokens));
  }

  private saveCodes(): void {
    localStorage.setItem('backupCodes', JSON.stringify(this.backupCodes));
  }

  private saveSession(user: User | null): void {
    if (user) {
      localStorage.setItem('session', JSON.stringify(user));
    } else {
      localStorage.removeItem('session');
    }
    this.currentUser = user;
  }

  public async signUp(name: string, email: string, password: string): Promise<User> {
    // Check if user already exists
    if (this.users.some(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      name,
      email,
      provider: 'email',
      createdAt: new Date(),
      twoFactorEnabled: false
    };

    this.users.push(newUser);
    this.saveUsers();
    this.saveSession(newUser);

    return newUser;
  }

  public async signIn(email: string, password: string): Promise<User> {
    const user = this.users.find(u => u.email === email);
    if (!user) {
      throw new Error('User not found');
    }

    this.saveSession(user);
    return user;
  }

  public signOut(): void {
    this.saveSession(null);
  }

  public getCurrentUser(): User | null {
    return this.currentUser;
  }

  public isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  public updateUserProfile(userId: string, data: Partial<User>): User {
    const userIndex = this.users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...data
    };

    this.users[userIndex] = updatedUser;
    this.saveUsers();

    if (this.currentUser?.id === userId) {
      this.saveSession(updatedUser);
    }

    return updatedUser;
  }

  public async createVerificationToken(userId: string, type: string): Promise<string> {
    const token = crypto.randomUUID();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1); // Token expires in 1 hour

    const verificationToken: VerificationToken = {
      id: crypto.randomUUID(),
      userId,
      token,
      type,
      expiresAt,
      createdAt: new Date(),
      isUsed: false
    };

    this.verificationTokens.push(verificationToken);
    this.saveTokens();

    return token;
  }

  public async sendVerificationEmail(email: string, token: string, type: string): Promise<void> {
    // In a real application, this would send an actual email
    console.log(`Sending verification email to ${email} with token ${token} for ${type}`);
  }

  public async enable2FA(userId: string): Promise<void> {
    const userIndex = this.users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    this.users[userIndex].twoFactorEnabled = true;
    this.saveUsers();

    if (this.currentUser?.id === userId) {
      this.saveSession(this.users[userIndex]);
    }
  }

  public async disable2FA(userId: string): Promise<void> {
    const userIndex = this.users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    this.users[userIndex].twoFactorEnabled = false;
    this.saveUsers();

    if (this.currentUser?.id === userId) {
      this.saveSession(this.users[userIndex]);
    }

    // Remove any existing backup codes for this user
    this.backupCodes = this.backupCodes.filter(code => code.userId !== userId);
    this.saveCodes();
  }

  public async generateBackupCodes(userId: string): Promise<string[]> {
    // Remove any existing unused backup codes for this user
    this.backupCodes = this.backupCodes.filter(
      code => code.userId !== userId || code.isUsed
    );

    const codes: string[] = [];
    for (let i = 0; i < 10; i++) {
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      codes.push(code);

      this.backupCodes.push({
        id: crypto.randomUUID(),
        userId,
        code,
        isUsed: false,
        createdAt: new Date()
      });
    }

    this.saveCodes();
    return codes;
  }
}

export const auth = AuthService.getInstance();

// Export the required functions
export const createVerificationToken = async (userId: string, type: string): Promise<string> => {
  return auth.createVerificationToken(userId, type);
};

export const sendVerificationEmail = async (email: string, token: string, type: string): Promise<void> => {
  return auth.sendVerificationEmail(email, token, type);
};

export const enable2FA = async (userId: string): Promise<void> => {
  return auth.enable2FA(userId);
};

export const disable2FA = async (userId: string): Promise<void> => {
  return auth.disable2FA(userId);
};

export const generateBackupCodes = async (userId: string): Promise<string[]> => {
  return auth.generateBackupCodes(userId);
};