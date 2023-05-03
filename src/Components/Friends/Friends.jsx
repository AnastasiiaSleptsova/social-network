import classes from './Friends.module.css'
import React from 'react';
import FriendsItem from './FriendItem';
import Preloader from '../Preloader/Preloader';

const Friends = (props) => {
    return (
        <div className={classes.friendList} >
            <div className={classes.allUsers}>
                <div className={classes.friends}>
                {props.friends.map((friend, idx) => (
                    <FriendsItem
                        key={friend.id}
                        friend={friend}
                        toogleFollowing={props.toogleFollowing}
                        toggleFollowingProgress = {props.toggleFollowingProgress}
                        followingInProgress = {props.followingInProgress}
                    />
                ))
                }
                {props.isFetching && <Preloader />}
                </div>
                <div className={classes.users}>
                    <span>Возможно, вы знакомы?</span>
                </div>
            </div>
            <button
                className={classes.button}
                onClick={props.fetchMoreFriends}
            >
                Show more
            </button>
        </div >
    )

}

export default Friends;
