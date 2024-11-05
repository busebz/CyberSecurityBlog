import classes from "./InfoPost.module.css";

function InfoPost({ name, number }) {
  return (
    <div className={classes.post}>
      <h3>{name}</h3>
    </div>
  );
}

export default InfoPost;
