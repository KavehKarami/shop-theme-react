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

      <div className="btnBx">
        <button>
          سفارش دهید
        </button>
      </div>
    </article>
  );
}

export default PricingCard;