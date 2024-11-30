import axios from 'axios';
import { LoginCredentials, RegisterCredentials, User } from '../types/auth';

const API_URL = 'YOUR_API_URL';

export const authService = {
  async login(credentials: LoginCredentials): Promise<User> {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    return response.data;
  },
  async register(credentials: RegisterCredentials): Promise<User> {
    const response = await axios.post(`${API_URL}/auth/register`, credentials);
    return response.data;
  },
};