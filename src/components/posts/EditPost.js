import classes from "./EditPost.module.css";

import { Form, useParams, json,useNavigate } from "react-router-dom";
import { useRef, useState, useEffect} from "react";

function EditPost({ postInfo }) {
  const navigate = useNavigate()
  const { postId } = useParams();
  const [categories, setCategories] = useState([]);

  const title = useRef();
  const content = useRef();
  const category = useRef();
  const tags = useRef();

  useEffect(() => {
    fetch("https://blogloginapi.onrender.com/api/category", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "categoryData");
        setCategories(data);
      });
  }, []);

  async function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = title.current.value;
    const enteredContent = content.current.value;
    const enteredCategory = category.current.value;
    const enteredTags = tags.current.value;

    const response = await fetch(
      "https://blogloginapi.onrender.com/api/updatePost/" + postId,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Acces-Allow-Control-Origin": "*",
        },
        body: JSON.stringify({
          title: enteredTitle,
          content: enteredContent,
          category: enteredCategory,
          tags: enteredTags,
        }),
      }
    );

    if (response.status === 422) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save event." }, { status: 500 });
    }

    return navigate('/')
  }

  return (
    <Form
      method="patch"
      className={classes.form}
      onSubmit={submitHandler}
      action={"/"}
    >
      <h4>Edit Post</h4>
      <div className={classes.input}>
        <p>Title: </p>
        <input
          type="text"
          name="title"
          ref={title}
          defaultValue={postInfo.title}
        ></input>
      </div>
      <div className={classes.input}>
        <p>Content: </p>
        <input
          type="text"
          name="content"
          ref={content}
          defaultValue={postInfo.content}
        ></input>
      </div>
      <div className={classes.input}>
        <p>Category: </p>
        <select
          name="category"
          ref={category}
          className={classes.select}
          value={postInfo.category}
        >
          {categories.map((category) => {
            return <option key={category.name}>{category.name}</option>;
          })}
        </select>
      </div>
      <div className={classes.input}>
        <p>Tags: </p>
        <input
          type="text"
          name="tags"
          ref={tags}
          defaultValue={postInfo.tags}
        />
      </div>
      <div>
        <button className={classes.button}>Update</button>
      </div>
    </Form>
  );
}

export default EditPost;
