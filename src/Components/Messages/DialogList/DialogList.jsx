
import classes from './DialogList.module.css'

const DialogList = (props) => {
    return (
            <li className={classes.dialogItem}>&deg; {props.dialogName}</li>
    )
}

export default DialogList;