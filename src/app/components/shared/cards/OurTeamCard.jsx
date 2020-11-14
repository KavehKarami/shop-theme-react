import React from 'react';

const OurTeamCard = (props) => {
  return (
    <div className="our-team-card">
      <div className="imgBx" style={{ backgroundImage: `url(${props.imgURL})` }}></div>

      <div className="card-footer">
        <h3>{props.person}</h3>
        <h3 className="italic">{props.position}</h3>
      </div>
    </div>
  );
}

export default OurTeamCard;