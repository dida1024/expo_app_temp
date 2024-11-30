import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState, LoginCredentials, RegisterCredentials } from '../../types/auth';
import { authService } from '../../services/auth'; 

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials) => {
    console.log("loginUser",credentials);
    const response = await authService.login(credentials);
    return response;
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterCredentials) => {
    const response = await authService.register(credentials);
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      //开始登录
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // 登录成功
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      // 登录失败
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '登录失败';
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;