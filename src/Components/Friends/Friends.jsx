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




// import classes from './Friends.module.css'
// import React from 'react';
// import FriendsItem from './FriendItem';
// import axios from 'axios';

// const getFriends = (number) => new Array(number).fill(null).map((el, idx) => ({
//     // id: idx + 1,
//     // firstName: `Nastya_${idx + 1}`,
//     // lastName: idx % 2 === 0 ? 'Иванова' : 'Петрова',
//     // avatar: 'https://itbizlab.ru/wp-content/uploads/salemanager.png',
//     // isFriend: idx % 3 === 0 ? true : false,
//     // nikname: `myNik ${idx + 1}`
    
    
//     // id: 28315,
//     // followed: false,
//     // name: "Sereban",
//     // photos: { small: null, large: null },
//     // status: null,
//     // uniqueUrlName: null
// }))


// const Friends = ({ friends, toogleFollowing, setFriends }) => {



//     if (friends.length === 0) {
//         // setFriends(getFriends(10))
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then((resp) => {
//             setFriends(resp.data.items)
//         });
//     }


//     return (
//         <div className={classes.frendList}>
//             {friends.map(friend => (
//                 <FriendsItem
//                     key={friend.id}
//                     friend={friend}
//                     toogleFollowing={toogleFollowing}
//                 />
//             ))}
//             <button className={classes.button}>Show more</button>
//         </div>
//     )
// }

// export default Friends;
