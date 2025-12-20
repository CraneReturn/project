import type { AuthState } from './authSlice';


export const loadAuthState = (): AuthState | undefined => {
    try {
        const serialized = localStorage.getItem('auth');
        return serialized ? JSON.parse(serialized) : undefined;
    } catch {
        return undefined;
    }
};


export const saveAuthState = (state: AuthState) => {
    try {
        localStorage.setItem('auth', JSON.stringify(state));
    } catch { }
};