import classes from './Friends.module.css'
import React from 'react';
import AvatarPlug from '../../img/avatar1.webp';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { usersAPI } from '../../api/api';

const FriendsItem = ({ friend, toogleFollowing, forwardRef, toggleFollowingProgress, followingInProgress }) => {

    const correctSrc = friend.photos.small || AvatarPlug;
    const handleClick = () => {
        toggleFollowingProgress(true, friend.id);
        if (friend.followed) {
            usersAPI.unFollowOnUser(friend.id)
                .then(resp => {
                    if (resp.resultCode === 0) {
                        toogleFollowing(friend.id);
                    }
                    toggleFollowingProgress(false, friend.id);
                })
        } else {
            usersAPI.followOnUser(friend.id)
                .then(resp => {
                    if (resp.resultCode === 0) {
                        toogleFollowing(friend.id);
                    }
                    toggleFollowingProgress(false, friend.id);
                })
        }

        // axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${friend.id}`, {}, {
        //     withCredentials: true,
        //     headers: {
        //         "API-KEY": "cfc6a4aa-5aaa-4793-bd4b-eea8791afc40"
        //     }
        // })
        // .then(resp => {
        //         if (resp.data.resultCode == 0) {
        //             toogleFollowing(friend.id);
        //         }
        //         toggleFollowingProgress(false, friend.id);
        //     })
        // toggleFollowingProgress(true, friend.id);

        // axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${friend.id}`, {
        //     withCredentials: true,
        //     headers: {
        //         "API-KEY": "cfc6a4aa-5aaa-4793-bd4b-eea8791afc40"
        //     }
        // })
        //     .then(resp => {
        //         if (resp.data.resultCode == 0) {
        //             toogleFollowing(friend.id);
        //         }
        //         toggleFollowingProgress(false, friend.id);
        //     })
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


// onClick={() => {
//     toggleFollowingProgress(true, friend.id);
//     usersAPI.getUsers2(friend.id).then(resp => {
//             if (resp.data.resultCode == 0) {
//                 toogleFollowing(friend.id);
//             }
//             toggleFollowingProgress(false, friend.id);
//         })
//     toggleFollowingProgress(true, friend.id);

//     usersAPI.getUsers3(friend.id).then(resp => {
//             if (resp.data.resultCode == 0) {
//                 toogleFollowing(friend.id);
//             }
//             toggleFollowingProgress(false, friend.id);
//         })

// }}