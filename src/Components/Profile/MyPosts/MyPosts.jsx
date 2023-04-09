import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profileReducer';


const MyPosts = (props) => {

  const posts = props.postList.map(post => <Post text={post.text} like={post.like} />);

  const newPastElement = React.createRef();

  const onClickHandler = () => {
    props.dispatch(addPostActionCreator());
  }

  const onPostChange = () => {
    const text = newPastElement.current.value;
    const action = updateNewPostActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.heading}>My posts</h2>
      <div className={classes.yuorNews}>
        <textarea
          className={classes.input}
          ref={newPastElement}
          onChange={onPostChange}
          value={props.newPostText}
          placeholder="your news..."
        />
        <button className={classes.button} type="submit" name="button-post" onClick={onClickHandler}>send</button>
      </div>
      {posts}

    </div>
  )
}

export default MyPosts;