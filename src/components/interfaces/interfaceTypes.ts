
export interface LoginPayload {
  email: string;
  password: string;
  remember?: boolean;
}

export interface AuthState {
  loading: boolean;
  error: string | null;
  token: string | null;
  user: any | null;
  success: boolean;
  message: string;
}
