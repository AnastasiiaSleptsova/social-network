import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './ PersonalInfo/PersonalInfo';


const Profile = (props) => {

  return (
    <div>
      <PersonalInfo />
      <MyPosts
        postList={props.state.postList}
        addPost={props.addPost}
      />
    </div>
  )
}

export default Profile;