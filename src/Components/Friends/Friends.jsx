import classes from './Friends.module.css'
import React from 'react';
import FriendsItem from './FriendItem';
import Preloader from '../Preloader/Preloader';

const Friends =(props) => {
        return (
            <div className={classes.frendList} >
                {
                    props.friends.map((friend, idx) => (
                        <FriendsItem
                            key={friend.id}
                            friend={friend}
                            toogleFollowing={props.toogleFollowing}
                        />
                    ))
                }
                {props.isFetching && <Preloader />}
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
