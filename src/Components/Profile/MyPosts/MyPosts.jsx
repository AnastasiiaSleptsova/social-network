import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return <div className={classes.posts}>
  <h1 className={classes.heading}>My posts</h1>
  <form className={classes.yuorNews} action='#' name='your-news'>
    <input className={classes.input} type='text' placeholder="your news..."/>
    <br/>
    <button className={classes.button} type="submit" name="button-post">send</button>
  </form>
  <Post text='Hi! Who is here?' like='5'/>
  <Post text="Hello, it's me" like='3'/>
  
</div>
}

export default MyPosts;