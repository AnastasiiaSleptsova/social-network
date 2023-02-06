import classes from './FrendList.module.css'
import { NavLink } from 'react-router-dom';

const FrendList = (props) => {

    return (
        <div className={classes.avatarWrapper}>
            <NavLink to='/Frend'>
                <img className={classes.avatar} src={props.avatarItem} alt={props.alt} />
            </NavLink>
        </div>
    );
}

export default FrendList;