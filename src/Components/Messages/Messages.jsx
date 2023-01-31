
import DialogList from './DialogList/DialogList';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css'

const Messages = (props) => {
debugger;
    let dialogs = props.state.dialogsData.map(dialogs => <DialogList dialogName={dialogs.name} id={dialogs.id} />);

    let messages = props.state.messageList.map(messages => <MessageItem message={messages.message} name={messages.name} />);

    return (
        <div className={classes.messageWrapper}>
            <ul className={classes.dialogList}>
                <dl className={classes.title}>DIALOGS</dl>
                {dialogs}
            </ul>
            <ul className={classes.messageList}>
                {messages}
            </ul>
        </div>
    )
}

export default Messages;