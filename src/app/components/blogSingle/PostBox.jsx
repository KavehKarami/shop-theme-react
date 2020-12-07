import React from 'react';

const PostBox = (props) => {
  return (
    <div className={`${props.className} posts-box`}>
      <div className="box-title">{props.title}</div>

      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, { className: props.childClass })
      })}

    </div>
  );
}

export default PostBox;