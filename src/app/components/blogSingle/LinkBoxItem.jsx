import React from 'react';

const LinkBoxItem = (props) => {
  return (
    <a href={props.href || "/blog/single/#"} className={props.isArchive ? `archive-item ${props.className}` : `category-item ${props.className}`}>
      <span>{props.title}</span>
      <span>{props.number}</span>
    </a>
  );
}

export default LinkBoxItem;