import { profileAPI } from "../api/api"

const ADD_POST = 'profile/ADD_POST';
const SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SACCESS = 'profile/SAVE_PHOTO_SACCESS'
const initialState = {
    postList: [
        { id: 1, text: 'Hi! Who is here?', like: '5' },
        { id: 2, text: 'Hello, it\'s me', like: '3' }
    ],
    profile: {},
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.postList.length + 1,
                text: action.payload.newPostText,
                like: '0'
            }
            return {
                ...state,
                postList: [...state.postList, newPost],
                newPostText: ''
            }
        }
        case SET_USERS_PROFILE: {
            return { ...state, profile: action.payload.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.payload.status }
        }
        case SAVE_PHOTO_SACCESS : {
            return { ...state, profile: {...state.profile, photos: action.payload.photos}}
        }
        default:
            return state;
    }

};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, payload: { newPostText } });
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, payload: { profile } });
export const setStatus = (status) => ({ type: SET_STATUS, payload: { status } });
export const savePhotosSaccess = (photos) => ({ type: SAVE_PHOTO_SACCESS, payload: { photos } });


export const getUserProfile = (userId) => async (dispatch) => {
    const resp = await profileAPI.getProfileFrend(userId)
    dispatch(setUserProfile(resp));
};

export const getProfileStatus = (userId) => async (dispatch) => {
    const resp = await profileAPI.getProfileStatus(userId)
    dispatch(setStatus(resp.data));
};

export const updateProfileStatus = (status) => async (dispatch) => {
    const resp = await profileAPI.updateProfileStatus(status)
    if (resp.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    const resp = await profileAPI.savePhoto(file)
    if (resp.data.resultCode === 0) {
        dispatch(savePhotosSaccess(resp.data.data.photos));
    }
};

export default profileReducer;

