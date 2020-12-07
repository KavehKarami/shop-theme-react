import React from 'react';

const PostBoxItem = (props) => {
  return (
    <a href={props.href || "/blog/single/#"} className={`post-item ${props.className}`}>
      <div className="imgBx">
        <img src={props.imgURL} alt="" />
      </div>
      <div className="detailsBx">
        <div className="title font-weight-bold">{props.title}</div>
        <div className="date-added">
          {props.dateTime}
        </div>
      </div>
    </a>
  );
}

export default PostBoxItem;