import axios from "axios";

export const loginApi = async (payload: { email: string; password: string }) => {
    try {
        const res = await axios.post("http://localhost:5000/auth/v1/login", payload, {
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
        const res = await axios.post("http://localhost:5000/auth/v1/signup", payload, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res?.data;
    } catch (err) {
        throw err;
    }
}