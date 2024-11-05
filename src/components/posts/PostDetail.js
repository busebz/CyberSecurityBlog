import classes from "./PostDetail.module.css";
import { useParams, redirect, json, useNavigate } from "react-router-dom";

function PostDetail({ post }) {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const { postId } = useParams();

  const deletePostHandler = async () => {
    console.log(postId);
    await fetch("https://blogloginapi.onrender.com/api/delete/" + postId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw json({ message: "Could not delete post." }, { status: 204 });
        }
      })
      .catch((e) => {
        console.log(e);
      });

    return navigate("/");
  };

  return (
    <div className={classes.post}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className={classes.details}>
        <div className={classes.categoryandtag}>
          <h4 className={classes.category}>
            Category: <span>{post.category}</span>
          </h4>
          <h4 className={classes.tag}>
            Tag: <span>{post.tags}</span>
          </h4>
        </div>
        {token && (
          <div className={classes.buttons}>
            <button
              onClick={() => navigate(`/${post._id}/edit`)}
              className={classes.updatebtn}
            >
              Update
            </button>
            <button onClick={deletePostHandler} className={classes.deletebtn}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostDetail;
