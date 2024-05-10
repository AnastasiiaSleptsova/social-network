// import React, { useEffect, useState } from 'react'
// import classes from './ProfileName.module.css'

// const ProfileName = ({ fullName, myId, profileId, updateProfileName, status: nameFromBackend }) => {

//     const [isEdtiMode, setIsEdtiMode] = useState(false)
//     const [localName, setLocalName] = useState('')

//     const doubleClickHandler = () => {
//         const canEditName = myId === profileId;
//         if (canEditName) {
//             setIsEdtiName(true)
//         }
//     }

//     const deactivateEditMode = () => {
//         setIsEdtiMode(false)
//         updateProfileName(localName);
//         setLocalName('')
//     }

//     const onNameChange = (e) => {
//         setLocalName(e.currentTarget.value);
//     }

//     return (
//         <>
//             {isEdtiMode &&
//                 <input
//                     className={classes.input}
//                     onChange={onNameChange}
//                     autoFocus={true}
//                     onBlur={deactivateEditMode}
//                     value={localName}
//                 />
//             }
//             {!isEdtiMode &&
//                 <span
//                     className={classes.status}
//                     onDoubleClick={doubleClickHandler}
//                 ><em>
//                     {nameFromBackend || {fullName}}
//                 </em>
//                 </span>
//             }
//         </>
//     )
// }

// export default ProfileName;