import React from 'react';

const PostAuthor = (props) => {
  return (
    <div className="post-author">
      <div className="author-img-box">
        <img className="author-img" src={props.imgURL} alt="" />
      </div>
      <div className="author-about">
        <div className="author-name">{props.title}</div>
        <div className="author-description">{props.description}</div>
      </div>
    </div>
  );
}

export default PostAuthor;