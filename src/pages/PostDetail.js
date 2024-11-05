import PostDetail from "../components/posts/PostDetail";
import {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
function PostDetailPage() {
  const { postId } = useParams();

  const [post, setPost] = useState([]);
  
  useEffect(() => {
    fetch("https://blogloginapi.onrender.com/api/posts/"+postId, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "postDetailData");
        setPost(data);
      });
  }, [postId]);

  return <PostDetail post={post} />;
}

export default PostDetailPage;


