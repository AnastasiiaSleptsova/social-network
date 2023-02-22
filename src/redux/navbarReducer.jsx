import avatar1 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar1.webp'
import avatar2 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar2.jpg';
import avatar3 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar3.jpg';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
    avatarList: [
        { avatarka: avatar1, altAvatar: 'Avatar1' },
        { avatarka: avatar2, altAvatar: 'Avatar2' },
        { avatarka: avatar3, altAvatar: 'Avatar3' },
        { avatarka: avatar1, altAvatar: 'Avatar1' },
    ],
};

const navbarReducer = (state = initialState, action) => {
    return state;
};

export default navbarReducer;