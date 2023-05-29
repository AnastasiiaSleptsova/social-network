import { required , maxLengthCreator, } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls';
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

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form className={classes.yourNews} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name='newPostText'
        placeholder="your news..."
        validate={[required, maxLength10, ]}
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