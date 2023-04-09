import PersonalInfo from './ PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Preloader/Preloader'

const Profile = (props) => {
  const hasProfile = !!Object.keys(props.profile).length

  if (!hasProfile) {
    return <Preloader />
  }
  return (
    <div>
      <PersonalInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;