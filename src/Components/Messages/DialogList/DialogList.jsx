
import classes from './DialogList.module.css'
import { NavLink } from 'react-router-dom';

const DialogList = (props) => {
    const generateClassName = (navData) => navData.isActive ? `${classes.dialogItem} ${classes.active}` : classes.dialogItem
    const path = "/Messages/DialogList/" + props.id;

    return (
        <div className={classes.dialog}>
            &deg;
            <NavLink className={generateClassName} to={path}>{props.dialogName}</NavLink>
        </div>
    )
}

export default DialogList;