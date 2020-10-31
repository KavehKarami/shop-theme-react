import React from 'react';
import { Link } from 'react-router-dom';

const BtnWater = (props) => {
  return (
    <div className={props.parentClass || "d-flex justify-content-center"}>
      <Link to={props.href} className="btn-water">
        {props.title}
      </Link>
    </div>
  );
}

export default BtnWater;