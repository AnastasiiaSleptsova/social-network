import { usersAPI } from "../api/api"

const TOOGLE_FOLLOWING = 'TOOGLE_FOLLOWING'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT'
const FETCH_MORE_FRIENDS = 'FETCH_MORE_FRIENDS'
const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CLEAR_FRIENDS = 'CLEAR_FRIENDS'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
    friends: [],
    pageSize: 7,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_FOLLOWING: {
            const newFriends = state.friends.map(friend => friend.id === action.payload.id
                ? { ...friend, followed: !friend.followed }
                : friend
            )

            return {
                ...state,
                friends: newFriends,
            }
        }
        case SET_FRIENDS: {
            return { ...state, friends: [...state.friends, ...action.payload.friends], }
        }

        case CLEAR_FRIENDS: {
            return { ...state, friends: [] }
        }
        case INCREMENT_CURRENT_PAGE: {
            const newCurrentPage = state.currentPage + 1
            return { ...state, currentPage: newCurrentPage }
        }
        case SET_TOTAL_FRIENDS_COUNT: {
            return { ...state, totalFriendsCount: action.payload.totalCount }
        }
        case FETCH_MORE_FRIENDS: {
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
export const setFriends = (friends) => ({ type: SET_FRIENDS, payload: { friends } })
export const clearFriends = () => ({ type: CLEAR_FRIENDS })
export const incrementCurrentPage = () => ({ type: INCREMENT_CURRENT_PAGE })
export const setTotalFriendsCount = (totalCount) => ({ type: SET_TOTAL_FRIENDS_COUNT, payload: { totalCount } })
export const fetchMoreFriends = () => ({ type: FETCH_MORE_FRIENDS })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, payload: { isFetching, userId } })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setFriends(data.items));
            dispatch(setTotalFriendsCount(data.totalCount));
        })
    }
}
export const getUsersMore = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(incrementCurrentPage());

        usersAPI.getUsersMore(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setFriends(data.items));
        })
    }
}
export const toogleFollowing = (friend) => { 
   return (dispatch) => {
    dispatch(toggleFollowingProgress(true, friend.id));
    if (friend.followed) {
        usersAPI.unFollowOnUser(friend.id)
            .then(resp => {
                if (resp.resultCode === 0) {
                    dispatch(toogleFollowingUsers(friend.id));
                }
                dispatch(toggleFollowingProgress(false, friend.id));
            })
    } else {
        usersAPI.followOnUser(friend.id)
            .then(resp => {
                if (resp.resultCode === 0) {
                    dispatch(toogleFollowingUsers(friend.id));
                }
                dispatch(toggleFollowingProgress(false, friend.id));
            })
    }
   }
}


export default friendsReducer;