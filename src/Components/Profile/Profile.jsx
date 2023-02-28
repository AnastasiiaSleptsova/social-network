import PersonalInfo from './ PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return (
    <div>
      <PersonalInfo />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;