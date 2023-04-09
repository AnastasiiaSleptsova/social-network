import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import Messages from './Messages';


const MessagesContainer = ({ dispatch, messagesPage }) => {

    const addNewMessage = () => {
        dispatch(addMessageActionCreator());
    }

    const onMessageInputChange = (text) => {
        dispatch(updateNewMessageActionCreator(text));
    }

    return (
        <Messages
            messagesPage={messagesPage}
            addNewMessage={addNewMessage}
            onMessageInputChange={onMessageInputChange}
        />
    )
}

export default MessagesContainer;