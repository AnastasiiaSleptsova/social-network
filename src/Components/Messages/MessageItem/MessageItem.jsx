import classes from './MessageItem.module.css'

const MessageItem = (props) => {
    return (
                <li className={classes.messageItem}>
                    <div className={classes.withHow}>
                        <span className={classes.smile}>&#9786; </span>
                        <span className={classes.name}>{props.name}</span>
                    </div>
                    <span className={classes.message}>{props.message}</span>
                </li>
    )
}

export default MessageItem;