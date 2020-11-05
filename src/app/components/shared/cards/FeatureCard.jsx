import React from 'react';

const FeatureCard = (props) => {

  return (
    <div className="feature-card">

      <div className="face card-header">
        <div className="content">
          <img src={props.imgURL} alt="" />
          <h3>{props.title}</h3>
        </div>
      </div>

      <div className="face card-footer">
        <p>
          {props.description}
        </p>
      </div>

    </div>
  );
}

export default FeatureCard;