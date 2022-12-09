import axios from 'axios';
import { saveBallV1 } from './settings';

export async function saveBall(data) {
    try {
        console.log(data);
        let response = await axios.post(saveBallV1, {
            data: data
        }, {withCredentials: true});
        return response.data;
    } catch (e) {
        return e.response.data;
    }
}

