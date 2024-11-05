import React from 'react';
import Categories from './categories/Categories';
import Tags from './tags/Tags';
import classes from './RightBar.module.css'

const RightBar = () => {
  // Replace the sample data with your own data source or an API call
  const sampleTags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5','tag6','tag7'];

  return (
    <div className={classes.rightbar}>
      <Categories />
      <Tags tags={sampleTags} />
    </div>
  );
};

export default RightBar;
