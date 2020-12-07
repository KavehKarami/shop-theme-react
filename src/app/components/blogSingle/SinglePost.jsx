import React from 'react';

const SinglePost = (props) => {
  return (
    <React.Fragment>
      <h1 className="title mb-4">{props.title}</h1>
      <div className="imgBx align-self-center align-self-md-start">
        <img src={props.imgURL} alt="" />
        <div className="calendar">
          <div className="day">{props.day}</div>
          <div className="month">{props.month}</div>
        </div>
      </div>
      <div className="description my-4">
        {props.description}
      </div>
    </React.Fragment>
  );
}

export default SinglePost;