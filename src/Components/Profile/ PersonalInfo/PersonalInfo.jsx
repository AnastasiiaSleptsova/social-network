import classes from './PersonalInfo.module.css'
import fon from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/fon.jpg'
import AvatarPlug from '../../../img/avatar1.webp';
import ProfileStatusFC from './ProfileStatusFC/ProfileStatusFC'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const PersonalInfo = ({ profile, myId, status, updateProfileStatus, savePhoto }) => {
  const correctSrc = profile.photos?.large || AvatarPlug;
  const canEditPhoto = myId === profile.userId

  const jobStatus = profile.lookingForAJob
    ? 'Да'
    : 'Нет'

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={classes.mainContent}>
      <div className={classes.picture}>
        <img className={classes.fon} src={fon} alt='background image' />
      </div>
      <div className={classes.personalData}>
        <div className={classes.photoPart} >
          <img className={classes.photo} src={correctSrc} alt='avatar' />
          {canEditPhoto && <input className={classes.input} type='file' onChange={onMainPhotoSelected} />}
        </div>
        <div className={classes.text}>
          <h2 className={classes.name}>{profile.fullName}</h2>
          {/* Логика с классовой компонентой */}
          {/* <ProfileStatus
            profileId={props.profile.userId}
            status={props.status}
            updateProfileStatus={props.updateProfileStatus}
            myId={props.myId}
          /> */}
          <ProfileStatusFC
            profileId={profile.userId}
            status={status}
            updateProfileStatus={updateProfileStatus}
            myId={myId}
          />
          <div className={classes.info}>
            {profile.aboutMe}
            <br />
            В поисках работы: {jobStatus}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;