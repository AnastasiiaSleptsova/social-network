import axios from 'axios';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "cfc6a4aa-5aaa-4793-bd4b-eea8791afc40"
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
    followOnUser(userID) {
        return instance.post(`follow/${userID}`)
            .then(resp => {
                return resp.data;
            });
    },
    unFollowOnUser(userID) {
        return instance.delete(`follow/${userID}`)
            .then(resp => {
                return resp.data;
            });
    },
    setUserData() {
        return instance.get(`auth/me`, {withCredentials: true})
            .then(resp => {
                return resp.data;
            });
    },
    // setProfileFrend(friendId) {
    //     return instance.get(`profile/` + friendId)
    //         .then(resp => {
    //             return resp.data;
    //         });
    // },
}


