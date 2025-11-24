import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "../../interfaces/interfaceTypes";


const initialState: AuthState = {
    loading: false,
    success: false,
    error: null,
    token: localStorage.getItem("token") || null,
    user: {},
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRequest: (state, _action: any) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action: any) => {
        
            state.loading = false;
            state.token = action.payload.accessToken;
            state.success = action.payload.message;
            state.user = action.payload.user;
        },
        loginFailure: (state, action: any) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.token = null;
            state.success = false
            localStorage.removeItem("token");
        },
        signupRequest: (state, _action: any) => {
            state.loading = true;
            state.error = null;
            _action.payload.mobile = Number(_action.payload.mobile)
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.success = action.payload.message;
        },
        signupFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { loginRequest, loginSuccess, loginFailure, logout, signupRequest,
    signupSuccess, signupFailure } = authSlice.actions;

export default authSlice.reducer;
