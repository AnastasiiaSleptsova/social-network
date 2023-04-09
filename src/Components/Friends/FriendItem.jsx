import classes from './Friends.module.css'
import React from 'react';
import AvatarPlug from '../../img/avatar1.webp';

const FriendsItem = ({ friend, toogleFollowing, forwardRef }) => {
    const correctSrc = friend.photos.small || AvatarPlug;
    return (
        <div className={classes.frend} ref={forwardRef}>
            <img className={classes.avatar} src={correctSrc} />
            <div className={classes.data}>
                <div className={classes.name}>{friend.name}</div>
                <button className={classes.writeMessage}>Написать сообщение</button>
                <button
                    className={classes.dropdown}
                    onClick={() => {
                        toogleFollowing(friend.id)
                    }}
                >
                    {friend.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
        </div>
    )
}

export default FriendsItem;