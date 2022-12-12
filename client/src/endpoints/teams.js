import axios from 'axios';
import { teamsV1 } from './settings';

export async function httpGetAllTeams() {
    try {
        let response = await axios.get(teamsV1, {withCredentials: true});
        return response.data;
    } catch (e) {
        console.log(e.response.data);
        return;
    }
}

export async function httpCreateTeam(data) {
    try {
        let response = await axios.post(teamsV1,
            {
                data: {
                    name: data
                }
            },
            {withCredentials: true}
        );
        return response.data;
    } catch (e) {
        console.log(e.response.data);
        return;
    }
}

export async function httpUpdateTeam(data) {
    try {
        let response = await axios.put(`${teamsV1}/${data.id}`,
            {
                data: {
                    name: data
                }
            },
            {withCredentials: true}
        );
        return response.data;
    } catch (e) {
        console.log(e.response.data);
        return;
    }
}

export async function httpDeleteTeam(id) {
    try {
        let response = await axios.delete(`${teamsV1}/${id}`, {withCredentials: true});
        return response.data;
    } catch (e) {
        console.log(e.response.data);
        return;
    }
}