// import avatar1 from './img/avatar1.webp'
// import avatar2 from './img/avatar2.jpg';
// import avatar3 from './img/avatar3.jpg';

// const ADD_MESSAGE = 'navbar/ADD_MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'navbar/UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    avatarList: [
        { id: 1, avatarka: '1', altAvatar: 'Avatar1' },
        { id: 2, avatarka: '2', altAvatar: 'Avatar2' },
        { id: 3, avatarka: '3', altAvatar: 'Avatar3' },
        { id: 4, avatarka: '4', altAvatar: 'Avatar1' },
    ],
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;