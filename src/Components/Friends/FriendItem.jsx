import classes from './Friends.module.css'
import React from 'react';

const FriendsItem = ({ id, avatar, nikname, isFriend, toogleFollowing }) => {
    return (
        <div className={classes.frend}>
            <img className={classes.avatar} src={avatar} />
            <div className={classes.data}>
                <div className={classes.name}>{nikname}</div>
                <button className={classes.writeMessage}>Написать сообщение</button>
                <button className={classes.dropdown} onClick={() => toogleFollowing(id)}>{isFriend ? 'Unfollow' : 'Follow'}</button>
            </div>
        </div>
    )
}

export default FriendsItem;