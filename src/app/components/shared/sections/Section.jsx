import React from 'react';

const Section = (props) => {
  return (
    <section className={props.container ? "container" : "container-fluid"}>
      {props.title && <h1 className="text-dark text-center card-title">{props.title}</h1>}

      <div className={props.className || "row mb-3"}>
        {props.children}
      </div>
    </section>
  );
}

export default Section;