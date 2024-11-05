import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

const Post = ({ posts }) => {
  const token = window.localStorage.getItem("token");
  return (
    <>
      {posts.map((post) => {
        return (
          <div className={classes.post}>
            <div key={post._id}>
              <Link to={`${post._id}`}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </Link>
              <Link to={`${post._id}`}>
                <h4 className={classes.category}>
                  Category: <span>{post.category}</span>
                </h4>
                <h4 className={classes.tag}>
                  Tag: <span>{post.tags}</span>
                </h4>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
