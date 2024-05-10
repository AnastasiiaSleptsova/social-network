import React from 'react';
import { addNewMessage, } from '../../redux/messagesReducer';
import Messages from './Messages';
import { connect } from 'react-redux';
import withAuthNavigate from '../HOC/withAuthNavigate';
import { compose } from 'redux';
import {
    getMessagesPage,
  } from '../../redux/messagesSelectors';

const mapStateToProps = (state) => {
    return {
        messagesPage: getMessagesPage(state),
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthNavigate
)(Messages);