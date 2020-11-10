import React from 'react';

const CardContainer = (props) => {

  return (
    <div className="col-12 col-sm-6">
      <div className="row flex-md-column flex-lg-row">
        {props.children}
      </div>
    </div>
  );
}

export default CardContainer;