import classes from './Friends.module.css'
import React from 'react';
import FriendsItem from './FriendItem';

const Friends = ({ friends, toogleFollowing }) => {
    return (
        <div className={classes.frendList}>
            {friends.map(friend => (
                <FriendsItem
                    key={friend.id}
                    avatar={friend.avatar}
                    nikname={friend.nikname}
                    isFriend={friend.isFriend}
                    toogleFollowing={toogleFollowing}
                    id={friend.id}
                />
            ))}

            <button className={classes.button}>Show more</button>
        </div>
    )
}

export default Friends;
