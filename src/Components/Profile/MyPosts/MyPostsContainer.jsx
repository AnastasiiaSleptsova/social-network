import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer2 = ({ postList, dispatch, newPostText }) => {

//   const addNewPost = () => {
//     dispatch(addPostActionCreator());
//   }

//   const onPostInputChange = (text) => {
//     const action = updateNewPostActionCreator(text)
//     dispatch(action);
//   }

//   return (
//     <MyPosts
//       postList={postList}
//       newPostText={newPostText}
//       addNewPost={addNewPost}
//       onPostInputChange={onPostInputChange}
//     />
//   )
// }

const mapStateToProps = (state) => {
  return {
    postList: state.profilePage.postList,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostInputChange: (text) => {
      const action = updateNewPostActionCreator(text);
      dispatch(action);
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;