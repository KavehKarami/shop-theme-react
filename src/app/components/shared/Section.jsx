import React from 'react';

const Section = (props) => {
  return (
    <section className="container-fluid">
      {props.title && <h1 className="text-dark text-center card-title">{props.title}</h1>}

      <div className="row mb-3">
        {props.children}
      </div>
    </section>
  );
}

export default Section;