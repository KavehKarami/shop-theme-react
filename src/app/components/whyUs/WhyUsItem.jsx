import React from 'react';

const WhyUsItem = (props) => {
  return (
    <article className={props.leftImg ? "why-us-item left-img" : "why-us-item"}>
      <div className="imgBx">
        <img src={props.imgURL} alt="" />
      </div>
      <div className="description">
        {props.description}
      </div>
    </article>
  );
}

export default WhyUsItem;