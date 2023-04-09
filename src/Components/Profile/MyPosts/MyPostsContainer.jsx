import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = ({ postList, dispatch, newPostText }) => {

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  }

  const onPostInputChange = (text) => {
    const action = updateNewPostActionCreator(text)
    dispatch(action);
  }

  return (
    <MyPosts
      postList={postList}
      newPostText={newPostText}
      addNewPost={addNewPost}
      onPostInputChange={onPostInputChange}
    />
  )
}

export default MyPostsContainer;