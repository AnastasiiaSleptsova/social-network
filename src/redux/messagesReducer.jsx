const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (state.newMessageText) {
                const newMessage = {
                    id: state.messageList.length + 1,
                    message: state.newMessageText,
                    name: 'Me'
                }
                state.messageList.push(newMessage);
                state.newMessageText = '';
            };
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text, });

export default messagesReducer;