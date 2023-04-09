import PersonalInfo from './ PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

  return (
    <div>
      <PersonalInfo />
      <MyPostsContainer
        postList={props.profilePage.postList}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile;