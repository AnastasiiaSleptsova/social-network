import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './ PersonalInfo/PersonalInfo';

const Profile = () => {
  return (
    <div>
      <PersonalInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;