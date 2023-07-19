import { usersAPI } from "../api/api"

const TOOGLE_FOLLOWING = 'TOOGLE_FOLLOWING'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const FETCH_MORE_USERS = 'FETCH_MORE_USERS'
const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CLEAR_USERS = 'CLEAR_USERS'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

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

export const toogleFollowingUsers  = (id) => ({ type: TOOGLE_FOLLOWING, payload: { id, } })
export const setUsers = (users) => ({ type: SET_USERS, payload: { users } })
export const clearUsers = () => ({ type: CLEAR_USERS })
export const incrementCurrentPage = () => ({ type: INCREMENT_CURRENT_PAGE })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, payload: { totalCount } })
export const fetchMoreUsers = () => ({ type: FETCH_MORE_USERS })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, payload: { isFetching, userId } })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const getUsersMore = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(incrementCurrentPage());

        usersAPI.getUsersMore(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}
export const toogleFollowing = (users) => { 
   return (dispatch) => {
    dispatch(toggleFollowingProgress(true, users.id));
    if (users.followed) {
        usersAPI.unFollowOnUser(users.id)
            .then(resp => {
                if (resp.resultCode === 0) {
                    dispatch(toogleFollowingUsers(users.id));
                }
                dispatch(toggleFollowingProgress(false, users.id));
            })
    } else {
        usersAPI.followOnUser(users.id)
            .then(resp => {
                if (resp.resultCode === 0) {
                    dispatch(toogleFollowingUsers(users.id));
                }
                dispatch(toggleFollowingProgress(false, users.id));
            })
    }
   }
}


export default usersReducer;