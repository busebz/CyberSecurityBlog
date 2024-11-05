import React, { useState, useEffect } from "react";
import Post from "./posts/Post";
import classes from "./MainContainer.module.css";

const MainContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://blogloginapi.onrender.com/api/post", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "postData");
        setPosts(data);
      });
  }, []);

  return (
    <main className={classes.maincontainer}>
      <Post posts={posts} />
    </main>
  );
};

export default MainContainer;
