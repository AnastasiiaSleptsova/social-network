import React, { useEffect, useState } from 'react'
import classes from './ProfileStatusFC.module.css'

const ProfileStatusFC = ({ myId, profileId, updateProfileStatus, status: statusFromBackend }) => {
    const [isEdtiMode, setIsEdtiMode] = useState(false)
    const [status, setStatus] = useState(statusFromBackend)

    const doubleClickHandler = () => {
        const canEditStatus = myId === profileId;
        if (canEditStatus) {
            setIsEdtiMode(true)
        }
    }

    const deactivateEditMode = () => {
        setIsEdtiMode(false)
        updateProfileStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    useEffect(() => {
        setStatus(statusFromBackend)
    }, [])

    return (
        <>
            {isEdtiMode &&
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                />
            }
            {!isEdtiMode &&
                <span
                    className={classes.status}
                    onDoubleClick={doubleClickHandler}
                >
                    {status || 'Status does not specified'}
                </span>
            }
        </>
    )
}

export default ProfileStatusFC;