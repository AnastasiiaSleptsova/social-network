import classes from './Users.module.css'
import React from 'react';
import AvatarPlug from '../../img/avatar1.webp';
import { Link, } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const UsersItem = ({ user, toogleFollowing, forwardRef, followingInProgress }) => {

    const correctSrc = user.photos.small || AvatarPlug;
    const handleClick = () => {
        toogleFollowing(user);
    }

    return (
        <div className={classes.user} ref={forwardRef}>
            <Link
                to={{
                    pathname: `/Profile/${user.id}`,
                }}
            >
                <img className={classes.avatar} src={correctSrc} />
            </Link>
            <div className={classes.data}>
                <div className={classes.name}>{user.name}</div>
                <button className={classes.writeMessage}>Написать сообщение</button>
                <button
                    className={classes.dropdown}
                    disabled={followingInProgress.some(id => id === user.id)}
                    onClick={handleClick}
                >
                    {user.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    )
}

export default UsersItem;
