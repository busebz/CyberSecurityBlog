import classes from "./Info.module.css";
import InfoPost from "./InfoPost.js";

function Info(props) {
  return (
    <div className={classes.info}>
      <h2>Info</h2>
      {props.infoData.map((info) => (
        <InfoPost name={info.name}></InfoPost>
      ))}
    </div>
  );
}

export default Info;
