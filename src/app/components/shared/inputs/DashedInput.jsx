import React from 'react';

const DashedInput = (props) => {
  return (
    <div className={`${props.className} dashed-input-gp input-group w-auto`}>

      <input type="email" placeholder={props.placeholder} required />

      <div class="hover-border-right"></div>
      <div class="hover-border-y"></div>

      <button>
        <div class="arrow-box">
          <div class="arrow arrow--frist">
            <img src="https://i.ibb.co/SyHKZF6/arrow-right.png" alt="" />
          </div>
          <div class="arrow arrow--hover">
            <img src="https://i.ibb.co/SyHKZF6/arrow-right.png" alt="" />
          </div>
        </div>
      </button>

      {props.children}
    </div>
  );
}

export default DashedInput;