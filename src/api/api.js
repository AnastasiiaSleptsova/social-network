import axios from 'axios';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        headers: {
            "API-KEY": "c93503c5-f080-4741-9673-76aa6a3b3c2d"
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
}

export const profileAPI = {
    getProfileFrend(userId) {
        return instance.get(`profile/` + userId)
            .then((resp) => {
                return resp.data;
            })
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateProfileStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    },
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(resp => {
                return resp.data;
            });
    },
    login({ email, password, rememberMe = false }) {
        // return instance.post(`auth/login`, { email: 'am89650731404@gmail.com', password: "social1931", rememberMe });
        return instance.post(`auth/login`, {email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    },
}
