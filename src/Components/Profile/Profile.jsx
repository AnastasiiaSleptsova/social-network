import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './ PersonalInfo/PersonalInfo';


const Profile = (props) => {

  return (
    <div>
      <PersonalInfo />
      <MyPosts postText={props.state.postText}
      addPost={props.addPost}/>
    </div>
  )
}

export default Profile;