import classes from './Post.module.css'
import Like from './Like.png'

const Post = (props) => {
  return (
    <div className={classes.post}>
      <article className={classes.item}>
        &#128993; {props.text} </article>
      <div className={classes.like}>
        <img className={classes.img} src={Like} alt='like' /> {props.like} Like
      </div>
    </div>
  )
}

export default Post;