
import DialogList from './DialogList/DialogList';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css'
import React from 'react';


const Messages = (props) => {
    const dialogs = props.messagesPage.dialogsData.map(dialogs => <DialogList dialogName={dialogs.name} id={dialogs.id} />);

    const messages = props.messagesPage.messageList.map(messages => <MessageItem message={messages.message} name={messages.name} />);

    const newPastElement = React.createRef();

    const onClickHandler = () => {
        let text = newPastElement.current.value;
        props.addMessage(text);
        newPastElement.current.value = ""
    }

    const onMessageChange = () => {
        const text = newPastElement.current.value;
        props.updateNewMessageText(text);
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
            <div className={classes.sendMessage}>
                <textarea
                    className={classes.input}
                    ref={newPastElement}
                    onChange={onMessageChange}
                    value={props.messagesPage.newMessageText}
                    placeholder="message..." ></textarea>
                <button className={classes.button} type="submit" name="sendMessage" onClick={onClickHandler}>send</button>
            </div>
        </div>
    )
}

export default Messages;