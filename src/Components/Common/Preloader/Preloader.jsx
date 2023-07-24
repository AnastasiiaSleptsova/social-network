
import React from 'react';
import preloader from '../../../img/Spinner-1s-200px.gif';
import classes from './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.box}>
        <div className={classes.fadingLines}></div>
      </div>
    </div>
  )
}
export default Preloader;