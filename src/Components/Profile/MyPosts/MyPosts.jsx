import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  const posts = props.postList.map(post => <Post text={post.text} like={post.like} />);

  const newPastElement = React.createRef();

  const onClickHandler = () => {
    const text = newPastElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.heading}>My posts</h2>
      <form className={classes.yuorNews} action='#' name='your-news'>
        <input className={classes.input} type='text' ref={newPastElement} placeholder="your news..." />
        <br />
        <button className={classes.button} type="submit" name="button-post" onClick={onClickHandler}>send</button>
      </form>
      {posts}

    </div>
  )
}

export default MyPosts;