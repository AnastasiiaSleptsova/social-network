import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div className={classes.mainContent}>
    <div className={classes.picture}>
      <img className={classes.fon} src='https://avatars.mds.yandex.net/i?id=e8ceb477013274657d24d0375eaa3b4c-5205087-images-thumbs&ref=rim&n=33&w=480&h=160' alt='background image'/>
    </div>
    <div className={classes.personalData}>
      <img className={classes.photo} src='https://avatars.dzeninfra.ru/get-zen_doc/1712117/pub_5e1310f2e6cb9b00ad1e2cb0_5e1311fce4fff000addebb6f/scale_1200' alt='avatar'/>
      <div className={classes.text}>
        <h2 className={classes.name}> Nastya S.</h2>
        <div className={classes.info}> Data of Birth: 1 June <br></br> City: St-Petersburg <br></br> Sex: Female</div>
      </div>
    </div>
    <MyPosts/>
  </div>
}

export default Profile;