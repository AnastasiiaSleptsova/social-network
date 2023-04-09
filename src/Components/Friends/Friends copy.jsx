import classes from './Friends.module.css'
import React from 'react';
import FriendsItem from './FriendItem';
import axios from 'axios';

const getFriends = (number) => new Array(number).fill(null).map((el, idx) => ({
    // id: idx + 1,
    // firstName: `Nastya_${idx + 1}`,
    // lastName: idx % 2 === 0 ? 'Иванова' : 'Петрова',
    // avatar: 'https://itbizlab.ru/wp-content/uploads/salemanager.png',
    // isFriend: idx % 3 === 0 ? true : false,
    // nikname: `myNik ${idx + 1}`


    // id: 28315,
    // followed: false,
    // name: "Sereban",
    // photos: { small: null, large: null },
    // status: null,
    // uniqueUrlName: null
}))


class Friends extends React.Component {

    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(Response => {
            this.props.setFriends(resp.data.items);
        })
    }

    render() {
        return (
            <div className={classes.frendList} >
                {
                    this.props.friends.map(friend => (
                        <FriendsItem
                            key={this.props.friend.id}
                            friend={this.props.friend}
                            toogleFollowing={this.props.toogleFollowing}
                        />
                    ))
                }
                < button className={classes.button} > Show more</button>
            </div >
        )
    }
}

export default Friends;
