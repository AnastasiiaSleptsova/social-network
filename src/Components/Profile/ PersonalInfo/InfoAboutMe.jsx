import classes from './PersonalInfo.module.css'
import AvatarPlug from '../../../img/avatar1.webp';
import ProfileStatusFC from './ProfileStatusFC/ProfileStatusFC'
import ProfileStatus from './ProfileStatus/ProfileStatus';

const InfoAboutMe = ({ profile, myId, status, updateProfileStatus, savePhoto, }) => {
  const correctSrc = profile.photos?.large || AvatarPlug;
  const canEditPhoto = myId === profile.userId
  const jobStatus = profile.lookingForAJob
    ? 'Yes'
    : 'No'

  const aboutMeStatus = (profile) => {
    if (!profile.aboutMe) {
      return profile.aboutMe
    } else {
      return 'Пусто'
    }
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (
    <div className={classes.mainContent}>
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
            <em>
              <div>
                About me: {aboutMeStatus}
              </div>
              <div>
                Looking for a job: {jobStatus}
              </div>
              <div>
                My professional skils: {profile.lookingForAJobDescription}
              </div>
              <div>
                <h1>Contacts:</h1>
                {Object.keys(profile.contacts).map(key => {
                 return <Contact key = {key} contactTitle = {key} contactValue={profile.contacts[key]}/>
                })}
              </div>
            </em>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return <div><b>{contactTitle}</b>:{contactValue}</div>
}
export default InfoAboutMe;