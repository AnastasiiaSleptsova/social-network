const TOOGLE_FOLLOWING = 'TOOGLE_FOLLOWING'
const SET_FRIENDS = 'SET_FRIENDS'

const initialState = {
    friends: [],
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_FOLLOWING: {
            console.log('ловим экшен тайпы');
            const newFriends = state.friends.map(friend => friend.id === action.payload.id
                ? { ...friend, followed: !friend.followed }
                : friend
            )

            return {
                ...state,
                friends: newFriends,
            }
            console.log('возвращаем новый стейт');
        }
        case SET_FRIENDS: {
            return { ...state, friends: [...state.friends, ...action.payload.friends], }
        }

        default:
            return state;
    }
};

export const toogleFollowingAC = (id) => {
    console.log('вызвался AC')
    return ({ type: TOOGLE_FOLLOWING, payload: { id, } })
}
export const setFriendsAC = (friends) => ({ type: SET_FRIENDS, payload: { friends } })


export default friendsReducer;