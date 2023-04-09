
import DialogList from './DialogList/DialogList';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css'
import React from 'react';

const Messages = ({ messagesPage, addNewMessage, onMessageInputChange }) => {
    const dialogs = messagesPage.dialogsData.map(dialogs => <DialogList dialogName={dialogs.name} key={dialogs.id} id={dialogs.id} />);

    const messages = messagesPage.messageList.map(messages => <MessageItem message={messages.message} key={messages.id} name={messages.name} />);

    const newPastElement = React.createRef();

    const onMessageChange = () => {
        const text = newPastElement.current.value;
        onMessageInputChange(text);
    }

    const onClickHandler = () => newPastElement.current.value && addNewMessage()

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
            <div className={classes.sendMessage}>
                <textarea
                    className={classes.input}
                    ref={newPastElement}
                    onChange={onMessageChange}
                    value={messagesPage.newMessageText}
                    placeholder="message..." ></textarea>
                <button className={classes.button} type="submit" name="sendMessage" onClick={onClickHandler}>send</button>
            </div>
        </div>
    )
}

export default Messages;