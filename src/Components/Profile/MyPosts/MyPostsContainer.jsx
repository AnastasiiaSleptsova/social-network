import React from 'react';
import { addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    postList: state.profilePage.postList,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;