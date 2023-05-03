import { usersAPI } from "../api/api"

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_FRIENDS_PROFILE = 'SET_FRIENDS_PROFILE';


const initialState = {
    postList: [
        { id: 1, text: 'Hi! Who is here?', like: '5' },
        { id: 2, text: 'Hello, it\'s me', like: '3' }
    ],
    newPostText: '',
    profile: {},
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.postList.length + 1,
                text: state.newPostText,
                like: '0'
            }
            return {
                ...state,
                postList: [...state.postList, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { ...state, newPostText: action.payload.text }
        }
        case SET_FRIENDS_PROFILE: {
            return { ...state, profile: action.payload.profile }
        }
        default:
            return state;
    }

};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, payload: { text } });
export const setFriendProfile = (profile) => ({ type: SET_FRIENDS_PROFILE, payload: { profile } });

export const getFriendProfile = (friendId) => {
    return (dispatch) => {
        usersAPI.getProfileFrend(friendId).then(resp => {
            dispatch(setFriendProfile(resp));
        });
    }
}

export default profileReducer;

