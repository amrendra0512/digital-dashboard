import axios from "axios";
import { LOGIN_API, SIGNUP_API } from "./commonApi";

export const loginApi = async (payload: { email: string; password: string }) => {
    try {
        const res = await axios.post(LOGIN_API, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res.data;
    } catch (err) {
        throw err;
    }
}

export const signupApi = async (payload: { email: string; password: string; name: string; mobile: Number }) => {
    try {
        const res = await axios.post(SIGNUP_API, payload, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res?.data;
    } catch (err) {
        throw err;
    }
}