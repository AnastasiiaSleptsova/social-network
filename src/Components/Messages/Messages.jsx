
import DialogList from './DialogList/DialogList';
import MessageItem from './MessageItem/MessageItem';
import classes from './Messages.module.css'

const Messages = () => {

    let dialogsData = [
        { id: 1, name: "Andrey " },
        { id: 2, name: "Dima " },
        { id: 3, name: "Alex " },
        { id: 4, name: "Anastasiia" },
        { id: 5, name: "Jake " },
        { id: 6, name: "Molly " },
        { id: 7, name: "Arianna " },
        { id: 8, name: "Avery " },
        { id: 9, name: "Gabriella " },
        { id: 10, name: "User not found " }
    ]
    let dialogs = dialogsData.map(dialogs => <DialogList dialogName={dialogs.name} id={dialogs.id} />);

    let messageList = [
        { message: 'Hello', name: 'Me' },
        { message: 'Hi!', name: 'Anastasiia' },
        { message: 'How are you?', name: 'Me' },
        { message: 'I\'m fine! What about you?', name: 'Anastasiia' },
        { message: 'I\'m fine too, thanks.', name: 'Me' }
    ]
    let messages = messageList.map(messages => <MessageItem message={messages.message} name={messages.name} />);

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