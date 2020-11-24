import React from 'react';

const PricingCard = (props) => {
  return (
    <article className={props.isGold ? "pricing-card gold-product" : "pricing-card"}>

      <div className="iconBx">
        <img src={props.imgURL} alt="" />
      </div>

      <div className="card-title">{props.title}</div>

      <ul className="pricing-feature">
        {props.children}
      </ul>

      <div className="price text-center my-3">
        <span className="font-weight-bold">قیمت : </span>
        {props.isGold && <span>از </span>}
        <span className="faNum text-light">{props.price}</span>
        <span> میلیون تومان</span>
      </div>

      <div className="btnBx">
        <button>
          سفارش دهید
        </button>
      </div>
    </article>
  );
}

export default PricingCard;