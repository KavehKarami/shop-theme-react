import React from 'react';

const CardContainer = (props) => {

  return (
    <div className={props.className || "col-12 col-sm-6"}>
      <div className={props.boxClass || "row flex-md-column flex-lg-row"}>
        {props.children}
      </div>
    </div>
  );
}

export default CardContainer;