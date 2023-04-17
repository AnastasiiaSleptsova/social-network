import axios from 'axios';

const instance = axios.create (
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            " API-KEY": "cfc6a4aa-5aaa-4793-bd4b-eea8791afc40"
        },
    }
)

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(resp => {
                return resp.data;
            });
    },
    getUsersMore(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage + 1}&count=${pageSize}`)
        .then(resp => {
            return resp.data;
        });
    },
    getUsers2(id) {
        return instance.post(`/follow/${id}`)
            .then(resp => {
                return resp.data;
            });
    },
}




