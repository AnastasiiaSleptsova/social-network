import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';


const MyPosts = ({ postList, newPostText, addNewPost, onPostInputChange }) => {

  const posts = postList.map(post => <Post text={post.text} key={post.id} like={post.like} />);

  const newPastElement = React.createRef();

  const onPostChange = () => {
    const text = newPastElement.current.value;
    onPostInputChange(text);
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.heading}>My posts</h2>
      <div className={classes.yuorNews}>
        <textarea
          className={classes.input}
          ref={newPastElement}
          onChange={onPostChange}
          value={newPostText}
          placeholder="your news..."
        />
        <button className={classes.button} type="submit" name="button-post" onClick={addNewPost}>send</button>
      </div>
      {posts}

    </div>
  )
}

export default MyPosts;