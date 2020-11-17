import React from 'react';

const DashedInput = (props) => {
  return (
    <div className={`${props.className} dashed-input-gp input-group w-auto`}>

      <input type="email" placeholder={props.placeholder} required />

      <div className="hover-border-right"></div>
      <div className="hover-border-y"></div>

      <button>
        <div className="arrow-box">
          <div className="arrow arrow--frist">
            <img src="https://i.ibb.co/SyHKZF6/arrow-right.png" alt="" />
          </div>
          <div className="arrow arrow--hover">
            <img src="https://i.ibb.co/SyHKZF6/arrow-right.png" alt="" />
          </div>
        </div>
      </button>

      {props.children}
    </div>
  );
}

export default DashedInput;