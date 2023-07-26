import { usersAPI } from "../api/api"

const TOOGLE_FOLLOWING = 'users/TOOGLE_FOLLOWING'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const FETCH_MORE_USERS = 'users/FETCH_MORE_USERS'
const INCREMENT_CURRENT_PAGE = 'users/INCREMENT_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const CLEAR_USERS = 'users/CLEAR_USERS'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_FOLLOWING: {
            const newUsers = state.users.map(user => user.id === action.payload.id
                ? { ...user, followed: !user.followed }
                : user
            )
            return {
                ...state,
                users: newUsers,
            }
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.payload.users], }
        }

        case CLEAR_USERS: {
            return { ...state, users: [] }
        }
        case INCREMENT_CURRENT_PAGE: {
            const newCurrentPage = state.currentPage + 1
            return { ...state, currentPage: newCurrentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.payload.totalCount }
        }
        case FETCH_MORE_USERS: {
            return state
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.payload.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id != action.payload.userId)
            }
        }
        default:
            return state;
    }
};

export const toogleFollowingUsers = (id) => ({ type: TOOGLE_FOLLOWING, payload: { id, } })
export const setUsers = (users) => ({ type: SET_USERS, payload: { users } })
export const clearUsers = () => ({ type: CLEAR_USERS })
export const incrementCurrentPage = () => ({ type: INCREMENT_CURRENT_PAGE })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: { totalCount } })
export const fetchMoreUsers = () => ({ type: FETCH_MORE_USERS })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, payload: { isFetching, userId } })

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    const data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

export const getUsersMore = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(incrementCurrentPage());

    const data = await usersAPI.getUsersMore(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
};

export const toogleFollowing = (users) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, users.id));
    if (users.followed) {
        let resp = await usersAPI.unFollowOnUser(users.id)
        if (resp.resultCode === 0) {
            dispatch(toogleFollowingUsers(users.id));
        }
        dispatch(toggleFollowingProgress(false, users.id));
    }
    else {
        let resp = await usersAPI.followOnUser(users.id)
        if (resp.resultCode === 0) {
            dispatch(toogleFollowingUsers(users.id));
        }
        dispatch(toggleFollowingProgress(false, users.id));
    };
}



export default usersReducer;