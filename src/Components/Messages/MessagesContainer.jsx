import React from 'react';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import withAuthNavigate from '../HOC/withAuthNavigate';
import { compose } from 'redux';


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Messages);