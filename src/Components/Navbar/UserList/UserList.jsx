import classes from './UserList.module.css'
import { NavLink } from 'react-router-dom';

const UserList = (props) => {

    return (
        <div className={classes.avatarWrapper}>
            <NavLink to='/User'>
                <img className={classes.avatar} src={props.avatarItem} alt={props.alt} />
            </NavLink>
        </div>
    );
}

export default UserList;