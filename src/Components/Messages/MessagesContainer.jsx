import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageInputChange: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;