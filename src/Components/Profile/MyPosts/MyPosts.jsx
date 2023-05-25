import classes from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form'

const MyPosts = ({ postList, addNewPost, }) => {

  const posts = postList.map(post => <Post text={post.text} key={post.id} like={post.like} />);

  const newPastElement = React.createRef();

  const onAddPost = (value) => {
    addNewPost(value.newPostText);
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.heading}>My posts</h2>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      {posts}
    </div>
  )
}

const AddNewPostForm = (props) => {
  return (
    <form className={classes.yourNews} onSubmit={props.handleSubmit}>
      <Field
        className={classes.input}
        component='textarea'
        name='newPostText'
        placeholder="your news..."
      />
      <button
        className={classes.button}
        type="submit"
        name="button-post"
      >send</button>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;