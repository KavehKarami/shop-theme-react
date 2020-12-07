import React from 'react';

const Input = (props) => {
  return (
    <div className="form-group">
      <input className={props.className} type={props.type || "text"} id={props.id} name={props.name || props.id} required={props.isRequired} />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default Input;