import React from 'react';

const CategoriesAndTags = (props) => {
  return (
    <div className={props.className}>
      <span>{props.title}</span>
      {props.children}
    </div>
  );
}

export default CategoriesAndTags;