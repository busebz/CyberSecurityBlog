import React,{useState, useEffect} from 'react';
import classes from './Categories.module.css'

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://blogloginapi.onrender.com/api/category", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "categoryData");
        setCategories(data);
      });
  }, []);
  
  return (
    <div className={classes.categories}>
      <h3>Categories</h3>
      <ul className={classes.list}>
        {categories.map((category) => (
          <li key={category._id} className={classes.item}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
