import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './ PersonalInfo/PersonalInfo';


const Profile = (props) => {
  
  

  return (
    <div>
      <PersonalInfo />
      <MyPosts postText={props.postText}/>
    </div>
  )
}

export default Profile;