import classes from './Users.module.css'
import React from 'react';
import UsersItem from './UserItem';
import Preloader from '../Common/Preloader/Preloader';


const Users = ({users, toogleFollowing, toggleFollowingProgress, followingInProgress, isFetching, fetchMoreUsers}) => {
    return (
        <div className={classes.userList} >
            <div className={classes.users}>
                {users.map((user, idx) => (
                    <UsersItem
                        key={user.id}
                        user={user}
                        toogleFollowing={toogleFollowing}
                        toggleFollowingProgress={toggleFollowingProgress}
                        followingInProgress={followingInProgress}
                    />
                ))
                }
                {isFetching && <Preloader /> }
            </div>
            <button
                className={classes.button}
                onClick={fetchMoreUsers}
            >
                Show more
            </button>
        </div >
    )

}

export default Users;
