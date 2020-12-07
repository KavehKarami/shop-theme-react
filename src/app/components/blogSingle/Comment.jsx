import React from 'react';
import BtnWater from '../shared/buttons/BtnWater';

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="intro">
        <div className="itro-img-bx">
          <img src={props.imgURL} alt="" />
        </div>

        <div className="comment-detail">
          <div className="person-name mb-2 font-weight-bold">{props.person}</div>
          <div className="comment-date">{props.dateTime}</div>
        </div>
      </div>
      <div className="comment-text">{props.comment}</div>
      <BtnWater parentClass="reply-btn mt-3 d-flex justify-content-start" title="پاسخ" href={props.href || "/blog/single"} />
      {props.children}
    </div>
  );
}

export default Comment;