const TOOGLE_FOLLOWING = 'TOOGLE_FOLLOWING'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT'
const FETCH_MORE_FRIENDS = 'FETCH_MORE_FRIENDS'
const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const CLEAR_FRIENDS = 'CLEAR_FRIENDS'

const initialState = {
    friends: [],
    pageSize: 7,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: false,
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
        default:
            return state;
    }
};

export const toogleFollowing = (id) => ({ type: TOOGLE_FOLLOWING, payload: { id, } })

export const setFriends = (friends) => ({ type: SET_FRIENDS, payload: { friends } })

export const clearFriends = () => ({ type: CLEAR_FRIENDS })

export const incrementCurrentPage = () => ({ type: INCREMENT_CURRENT_PAGE })

export const setTotalFriendsCount = (totalCount) => ({ type: SET_TOTAL_FRIENDS_COUNT, payload: { totalCount } })

export const fetchMoreFriends = () => ({ type: FETCH_MORE_FRIENDS })

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, payload: { isFetching } })

export default friendsReducer;