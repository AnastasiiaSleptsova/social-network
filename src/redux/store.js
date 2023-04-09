import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import profileReducer from './profileReducer';
import avatar1 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar1.webp'
import avatar2 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar2.jpg';
import avatar3 from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/avatar3.jpg';

const store = {
    _state: {
        profilePage: {
            postList: [
                { id: 1, text: 'Hi! Who is here?', like: '5' },
                { id: 2, text: 'Hello, it\'s me', like: '3' }
            ],
            newPostText: '',
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: "Andrey " },
                { id: 2, name: "Dima " },
                { id: 3, name: "Alex " },
                { id: 4, name: "Anastasiia" },
                { id: 5, name: "Jake " },
                { id: 6, name: "Molly " },
                { id: 7, name: "Arianna " },
                { id: 8, name: "Avery " },
                { id: 9, name: "Gabriella " },
                { id: 10, name: "User not found " },
            ],
            messageList: [
                { id: 1, message: 'Hello', name: 'Me' },
                { id: 2, message: 'Hi!', name: 'Anastasiia' },
                { id: 3, message: 'How are you?', name: 'Me' },
                { id: 4, message: 'I\'m fine! What about you?', name: 'Anastasiia' },
                { id: 5, message: 'I\'m fine too, thanks.', name: 'Me' },
            ],
            newMessageText: '',
        },
        navbarPage: {
            avatarList: [
                { avatarka: avatar1, altAvatar: 'Avatar1' },
                { avatarka: avatar2, altAvatar: 'Avatar2' },
                { avatarka: avatar3, altAvatar: 'Avatar3' },
                { avatarka: avatar1, altAvatar: 'Avatar1' },
            ],
        }
    },

    _callSubscriber() {
        console.log("!!! state changed");
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);
        this._callSubscriber(this._state);
    }
}


window.store = store;
export default store;