import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadAuthState, saveAuthState } from './authPersist';


export interface UserInfo {
    role: 'admin' | 'student';
    username: string;
}


export interface AuthState {
    user?: UserInfo;
}


const initialState: AuthState = loadAuthState() || {
    user: {
        role: "admin",
        username: "admin"
    },
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserInfo>) => {
            state.user = action.payload;
            saveAuthState(state);
        },
        logout: (state) => {
            state.user = undefined;
            saveAuthState(state);
        },
    },
});


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;