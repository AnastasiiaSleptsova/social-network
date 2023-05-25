const ADD_MESSAGE = 'ADD_MESSAGE';


const initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: state.messageList.length + 1,
                message: action.newMessageText,
                name: 'Me'
            } 
            return {
                ...state,
                messageList: [...state.messageList, newMessage],
            } ;
        }
        default:
            return state;
    }

};

export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText });

export default messagesReducer;