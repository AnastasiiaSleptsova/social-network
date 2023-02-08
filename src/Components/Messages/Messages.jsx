
import DialogList from './DialogList/DialogList';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css'
import React from 'react';


const Messages = (props) => {
    let dialogs = props.state.dialogsData.map(dialogs => <DialogList dialogName={dialogs.name} id={dialogs.id} />);

    let messages = props.state.messageList.map(messages => <MessageItem message={messages.message} name={messages.name} />);

    let newPastElement = React.createRef();

    let onClickHandler = () => {
        let text = newPastElement.current.value;
        props.addMessage(text);
        newPastElement.current.value = ""
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
            <form className={classes.sendMessage} action='#' name='message'>
                <input className={classes.input} type='text' ref={newPastElement} placeholder="message..." />
                <br />
                <button className={classes.button} type="submit" name="sendMessage" onClick={onClickHandler}>send</button>
            </form>
        </div>
    )
}

export default Messages;