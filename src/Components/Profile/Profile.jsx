import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './ PersonalInfo/PersonalInfo';


const Profile = (props) => {

  return (
    <div>
      <PersonalInfo />
      <MyPosts
        postList={props.profilePage.postList}
        newPostText={props.profilePage.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile;