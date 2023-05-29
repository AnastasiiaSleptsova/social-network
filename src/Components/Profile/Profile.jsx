import PersonalInfo from './ PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Common/Preloader/Preloader';

const Profile = (props) => {
  const hasProfile = !!Object.keys(props.profile).length

  if (!hasProfile) {
    return <Preloader />
  }
  return (
    <div>
      <PersonalInfo
        profile={props.profile}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus} 
        myId={props.myId}
        />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;