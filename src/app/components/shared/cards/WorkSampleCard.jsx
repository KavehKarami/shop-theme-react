import React from 'react';

const WorkSampleCard = (props) => {
  return (
    <div className="work-sample-card">
      <div className="imgBx" style={{ backgroundImage: `url(${props.imgURL})` }}></div>

      <div className="content">
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
        <a href={props.href || "/"} target="_blank" rel="noopener noreferrer">برای دیدن کلیک کنید</a>
      </div>

      <div className="titr">
        <h1>{props.titr}</h1>
      </div>
    </div>
  );
}

export default WorkSampleCard;