const TOOGLE_FOLLOWING = 'TOOGLE_FOLLOWING'

const getFriends = (number) => new Array(number).fill(null).map((el, idx) => ({
    id: idx + 1,
    firstName: `Nastya_${idx + 1}`,
    lastName: idx % 2 === 0 ? 'Иванова' : 'Петрова',
    avatar: 'https://itbizlab.ru/wp-content/uploads/salemanager.png',
    isFriend: idx % 3 === 0 ? true : false,
    nikname: `myNik ${idx + 1}`
}))

const friends = getFriends(10)

const initialState = {
    friends: friends,
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_FOLLOWING: {
            const newFriends = state.friends.map(friend => friend.id === action.payload.id
                ? { ...friend, isFriend: !friend.isFriend }
                : friend
            )

            return {
                ...state,
                friends: newFriends,
            }
        }

        default:
            return state;
    }
};

export const toogleFollowingAC = (id) => ({ type: TOOGLE_FOLLOWING, payload: { id, } })

export default friendsReducer;