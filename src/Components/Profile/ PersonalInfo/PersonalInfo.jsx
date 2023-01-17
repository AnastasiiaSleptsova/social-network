import classes from './PersonalInfo.module.css'
import foto from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/photoNasstya.jpg'
import fon from '/Users/olegsleptsov/Desktop/react-kabzda-kak-prosto/01-first-project/react-kabzda-1/src/img/fon.jpg'

const PersonalInfo = () => {
  return (
    <div className={classes.mainContent}>
      <div className={classes.picture}>
        <img className={classes.fon} src={fon} alt='background image' />
      </div>
      <div className={classes.personalData}>
        <img className={classes.photo} src={foto} alt='avatar' />
        <div className={classes.text}>
          <h2 className={classes.name}> Nastya S.</h2>
          <div className={classes.info}> Data of Birth: 1 June <br></br> City: St-Petersburg <br></br> Sex: Female</div>
        </div>
      </div>
      </div>
      )
}

      export default PersonalInfo;