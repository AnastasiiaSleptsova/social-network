import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  let postText = [
    { text: 'Hi! Who is here?', like: '5' },
    { text: 'Hello, it\'s me', like: '3' }
  ]

  let posts = postText.map(post => <Post text={post.text} like={post.like} />);

  return (
    <div className={classes.posts}>
      <h2 className={classes.heading}>My posts</h2>
      <form className={classes.yuorNews} action='#' name='your-news'>
        <input className={classes.input} type='text' placeholder="your news..." />
        <br />
        <button className={classes.button} type="submit" name="button-post">send</button>
      </form>
      {posts}

    </div>
  )
}

export default MyPosts;