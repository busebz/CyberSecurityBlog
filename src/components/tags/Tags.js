import React,{useEffect, useState} from 'react';
import classes from './Tags.module.css'

const Tags = () => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    fetch("https://blogloginapi.onrender.com/api/tags", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "tagData");
        setTags(data);
      });
  }, []);

  return (
    <div className={classes.tags}>
      <h3>Tags</h3>
      <ul className={classes.list}>
        {tags.map((tag, index) => (
          <li key={index} className={classes.item}>
            <p>{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
