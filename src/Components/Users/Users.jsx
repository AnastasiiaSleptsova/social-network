import classes from './Users.module.css'
import React from 'react';
import UsersItem from './UserItem';
import Preloader from '../Common/Preloader/Preloader';


const Users = (props) => {
    return (
        <div className={classes.userList} >
            <div className={classes.users}>
                {props.users.map((user, idx) => (
                    <UsersItem
                        key={user.id}
                        user={user}
                        toogleFollowing={props.toogleFollowing}
                        toggleFollowingProgress={props.toggleFollowingProgress}
                        followingInProgress={props.followingInProgress}
                    />
                ))
                }
                {props.isFetching && <Preloader /> }
            </div>
            <button
                className={classes.button}
                onClick={props.fetchMoreUsers}
            >
                Show more
            </button>
        </div >
    )

}

export default Users;
