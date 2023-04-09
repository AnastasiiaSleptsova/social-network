
import React from 'react';
import preloader from '../../img/Spinner-1s-200px.gif';
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={preloader}>
            <img src={preloader} />
        </div>
    )
}
export default Preloader ;