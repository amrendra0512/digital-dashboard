import axios from "axios";
import { LOGIN_API, SIGNUP_API } from "./commonApi";
import { encryptAES } from "../components/common/utilityService";

export const loginApi = async (payload: { email: string; password: string }) => {
    const encryptedLoginData = encryptAES(payload);
    try {
        const res = await axios.post(LOGIN_API, { data: encryptedLoginData }, {
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
    const encryptedSignupData = encryptAES(payload);
    try {
        const res = await axios.post(SIGNUP_API, { password: encryptedSignupData }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res?.data;
    } catch (err) {
        throw err;
    }
}