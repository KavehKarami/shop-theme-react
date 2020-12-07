import React from 'react';

const LinkBox = (props) => {
  return (
    <div className={props.className}>
      <div className="box-title">{props.title}</div>

      {/* REVIEW  use cloneElement for pass parent props ro childern*/}
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { isArchive: props.isArchive, className: props.childClass })
      })}
    </div>
  );
}

export default LinkBox;