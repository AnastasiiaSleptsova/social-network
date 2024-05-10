
import classes from './DialogList.module.css'
import { NavLink } from 'react-router-dom';

const DialogList = ({id, dialogName}) => {
    const generateClassName = (navData) => navData.isActive ? `${classes.dialogItem} ${classes.active}` : classes.dialogItem
    const path = "/Messages/DialogList/" + id;

    return (
        <div>
            &deg;
            <NavLink className={generateClassName} to={path}>{dialogName}</NavLink>
        </div>
    )
}

export default DialogList;