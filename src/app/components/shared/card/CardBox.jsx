import React from 'react';

const CardBox = (props) => {
  return (
    <article className={props.className || "col-12 col-lg-6 card-box"}>
      {props.children}
    </article>
  );
}

export default CardBox;