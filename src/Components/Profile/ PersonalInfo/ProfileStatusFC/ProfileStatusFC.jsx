import React, { useEffect, useState } from 'react'
import classes from './ProfileStatusFC.module.css'

const ProfileStatusFC = ({ myId, profileId, updateProfileStatus, status: statusFromBackend }) => {
    const [isEdtiMode, setIsEdtiMode] = useState(false)
    const [localStatus, setLocalStatus] = useState('')

    const doubleClickHandler = () => {
        const canEditStatus = myId === profileId;
        if (canEditStatus) {
            setIsEdtiMode(true)
        }
    }

    const deactivateEditMode = () => {
        setIsEdtiMode(false)
        updateProfileStatus(localStatus);
        setLocalStatus('')
    }

    const onStatusChange = (e) => {
        setLocalStatus(e.currentTarget.value);
    }

    return (
        <>
            {isEdtiMode &&
                <input
                    className={classes.input}
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={localStatus}
                />
            }
            {!isEdtiMode &&
                <span
                    className={classes.status}
                    onDoubleClick={doubleClickHandler}
                ><em>
                    {statusFromBackend || 'Status does not specified'}
                </em>
                </span>
            }
        </>
    )
}

export default ProfileStatusFC;