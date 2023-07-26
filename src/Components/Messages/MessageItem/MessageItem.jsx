import classes from './MessageItem.module.css';


const MessageItem = ({name, message}) => {

    return (
            <li className={classes.messageItem}>
                <div className={classes.withHow}>
                    <span className={classes.smile}>&#9786; </span>
                    <span className={classes.name}>{name}</span>
                </div>
                <span className={classes.message}>{message}</span>
            </li>
           
    )
}

export default MessageItem;