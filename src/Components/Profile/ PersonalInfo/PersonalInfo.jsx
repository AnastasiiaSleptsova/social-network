import classes from './PersonalInfo.module.css'
import fon from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/fon.jpg'
import AvatarPlug from '../../../img/avatar1.webp';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const PersonalInfo = (props) => {
  console.log('!!! props =', props);
  const correctSrc = props.profile.photos?.small || AvatarPlug;

  const jobStatus = props.profile.lookingForAJob
    ? 'Да'
    : 'Нет'

  return (
    <div className={classes.mainContent}>
      <div className={classes.picture}>
        <img className={classes.fon} src={fon} alt='background image' />
      </div>
      <div className={classes.personalData}>
        <img className={classes.photo} src={correctSrc} alt='avatar' />
        <div className={classes.text}>
          <h2 className={classes.name}>{props.profile.fullName}</h2>
          <ProfileStatus
            profileId={props.profile.userId}
            status={props.profile.status}
            updateProfileStatus={props.updateProfileStatus} />
          <div className={classes.info}>
            {props.profile.aboutMe}
            <br />
            В поисках работы: {jobStatus}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo;