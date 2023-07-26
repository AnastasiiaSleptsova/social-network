import PersonalInfo from './ PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Common/Preloader/Preloader';

const Profile = ({profile, status, updateProfileStatus, myId}) => {
  const hasProfile = !!Object.keys(profile).length

  if (!hasProfile) {
    return <Preloader />
  }
  return (
    <div>
      <PersonalInfo
        profile={profile}
        status={status}
        updateProfileStatus={updateProfileStatus} 
        myId={myId}
        />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;