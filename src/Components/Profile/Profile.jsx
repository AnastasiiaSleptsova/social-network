import PersonalInfo from './ PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Common/Preloader/Preloader';
import classes from './Profile.module.css'

const Profile = ({profile, status, updateProfileStatus, myId, savePhoto, }) => {
  const hasProfile = !!Object.keys(profile).length

  if (!hasProfile) {
    return <Preloader />
  }
  return (
    <div className={classes.profile}>
      <PersonalInfo
        profile={profile}
        status={status}
        updateProfileStatus={updateProfileStatus} 
        myId={myId}
        savePhoto={savePhoto}
        />
      <MyPostsContainer/>
    </div>
  )
}

export default Profile;