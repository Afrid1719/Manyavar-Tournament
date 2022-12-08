import axios from 'axios';
import { adminV1Auth, adminV1Logout } from "./settings";

export async function authenticate(data) {
    try {
        let response = await axios.post(adminV1Auth, data, {withCredentials: true});
        return response.data;
    } catch (e) {
        return e.response.data;
    }
}

export async function logoutAdmin() {
    try {
        let response = await axios.get(adminV1Logout, {withCredentials: true});
        return response.data;
    } catch (e) {
        return e.response.data;
    }
}