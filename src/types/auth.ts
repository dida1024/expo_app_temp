export interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

export interface User {
    id: string;
    email: string;
    token: string;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }

  export interface RegisterCredentials {
    email: string;
    authCode: string;
    password: string;
  }
