import DialogList from './DialogList/DialogList';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css'
import React from 'react';
import { Field, reduxForm } from 'redux-form'

const Messages = ({ messagesPage, addNewMessage,}) => {
    const dialogs = messagesPage.dialogsData.map(dialogs => <DialogList dialogName={dialogs.name} key={dialogs.id} id={dialogs.id} />);

    const messages = messagesPage.messageList.map(messages => <MessageItem message={messages.message} key={messages.id} name={messages.name} />);

    const newPastElement = React.createRef();

    let addMessage = (value) => {
        addNewMessage(value.newMessageText);
    }
    
    return (
        <div>
            <div className={classes.messageWrapper}>
                <ul className={classes.dialogList}>
                    <dl className={classes.title}>DIALOGS</dl>
                    {dialogs}
                </ul>
                <ul className={classes.messageList}>
                    {messages}
                </ul>
            </div>
            <AddMessageReduxForm onSubmit={addMessage} />
        </div>
    )
}

const AddMessageForm = ({handleSubmit, }) => {
    return (
        <form className={classes.sendMessage} onSubmit={handleSubmit}>
            <Field
                className={classes.input}
                component='textarea'
                name='newMessageText'
                placeholder="message..." />
            <button
                className={classes.button}
                type="submit"
                name="sendMessage"
            >send</button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Messages;