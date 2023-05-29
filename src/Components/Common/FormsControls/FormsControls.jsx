import React from 'react';
import classes from './FormsControls.module.css'
import classNames from 'classnames';


export const Textarea = (props) => {

    const hasError = props.meta.touched && props.meta.error;

    return (
        <div className={classNames(classes.formControl, (hasError ? classes.error : ""))}>
            <div>
                <textarea {...props.input} />
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}