import EditPost from "../components/posts/EditPost";
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function EditPostPage() {
  const {postId} = useParams()
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://blogloginapi.onrender.com/api/posts/" + postId, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "postData");
        setPost(data);
      });
  }, []);
  return <EditPost postInfo={post} />;
}

export default EditPostPage;
