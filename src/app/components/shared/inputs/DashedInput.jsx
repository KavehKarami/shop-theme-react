import React from 'react';

const DashedInput = (props) => {
  return (
    <div className={`${props.className} ${props.rtl ? "dashed-input-gp-rtl input-group w-auto" : "dashed-input-gp input-group w-auto"}`}>

      <input type={props.inputType || "email"} placeholder={props.placeholder} required />

      <div className="hover-border-right"></div>
      <div className="hover-border-y"></div>

      <button>
        <div className="arrow-box">
          <div className="arrow arrow--frist">
            {props.iconComponent ? props.icon : <img src={props.icon || "https://i.ibb.co/SyHKZF6/arrow-right.png"} alt="" />}
          </div>
          <div className="arrow arrow--hover">
            {props.iconComponent ? props.icon : <img src={props.icon || "https://i.ibb.co/SyHKZF6/arrow-right.png"} alt="" />}
          </div>
        </div>
      </button>

      {props.children}
    </div>
  );
}

export default DashedInput;