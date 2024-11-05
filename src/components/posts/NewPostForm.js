import { useEffect, useState, useRef } from "react";
import { Form, redirect, json, useNavigate } from "react-router-dom";
import classes from "./NewPostForm.module.css";

function NewPostForm() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://blogloginapi.onrender.com/api/category", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "categoryData");
        setCategories(data);
      });
  }, []);

  const title = useRef();
  const content = useRef();
  const category = useRef();
  const tags = useRef();

  async function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = title.current.value;
    const enteredContent = content.current.value;
    const enteredCategory = category.current.value;
    const enteredTags = tags.current.value;

    const res = await fetch("https://blogloginapi.onrender.com/api/addPost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        //"Acces-Allow-Control-Origin": '*',
      },
      body: JSON.stringify({
        title: enteredTitle,
        content: enteredContent,
        category: enteredCategory,
        tags: enteredTags,
      }),
    });

    if (res.status === 422) {
      return res;
    }

    if (!res.ok) {
      throw json({ message: "Could not save event." }, { status: 500 });
    }
    return navigate(`/`) 
  }

  return (
    <Form method="POST" className={classes.form} onSubmit={submitHandler}>
      <h4>New Post</h4>
      <div className={classes.input}>
        <p>Title: </p>
        <input type="text" name="title" ref={title}></input>
      </div>
      <div className={classes.input}>
        <p>Content: </p>
        <input type="text" name="content" ref={content}></input>
      </div>
      <div className={classes.input}>
        <p>Category: </p>
        <select name="category" ref={category} className={classes.select}>
          {categories.map((category) => {
            return (
              <option key={category.name} value={`${category.name}`}>
                {category.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={classes.input}>
        <p>Tags: </p>
        <input type="text" name="tags" ref={tags} />
      </div>
      <div>
        <button className={classes.button}>Submit</button>
      </div>
    </Form>
  );
}

export default NewPostForm;
