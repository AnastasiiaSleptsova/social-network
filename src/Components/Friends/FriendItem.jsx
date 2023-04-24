import classes from './Friends.module.css'
import React from 'react';
import AvatarPlug from '../../img/avatar1.webp';
import { Link, } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const FriendsItem = ({ friend, toogleFollowing, forwardRef, followingInProgress }) => {

    const correctSrc = friend.photos.small || AvatarPlug;
    const handleClick = () => {
        toogleFollowing(friend);
    }

    return (
        <div className={classes.friend} ref={forwardRef}>
            <Link
                to={{
                    pathname: `/Profile/${friend.id}`,
                }}
            >
                <img className={classes.avatar} src={correctSrc} />
            </Link>
            <div className={classes.data}>
                <div className={classes.name}>{friend.name}</div>
                <button className={classes.writeMessage}>Написать сообщение</button>
                <button
                    className={classes.dropdown}
                    disabled={followingInProgress.some(id => id === friend.id)}
                    onClick={handleClick}
                >
                    {friend.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    )
}

export default FriendsItem;
