import React from 'react';
import WorkSampleSection from "../components/home/WorkSampleSection";
import WhyUsSection from "../components/whyUs/WhyUsSection";

const Pricing = () => {
  return (
    <React.Fragment>
      <section className="container pt-3 mb-5 pricing-section d-flex justify-content-center align-items-center flex-wrap">

        <article className="pricing-card">

          <div className="iconBx">
            <img src="https://i.ibb.co/YXTWzVQ/bronze.png" alt="" />
          </div>

          <div className="card-title">Lorem Ipusem</div>

          <ul className="pricing-feature">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>

          </ul>

          <div className="btnBx">
            <button>
              Order Now!
            </button>
          </div>

        </article>

        <article className="pricing-card gold-product">

          <div className="iconBx">
            <img src="https://i.ibb.co/5v5VtTh/gold.png" alt="" />
          </div>

          <div className="card-title">Lorem Ipusem</div>

          <ul className="pricing-feature">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>

          </ul>

          <div className="btnBx">
            <button>
              Order Now!
            </button>
          </div>

        </article>

        <article className="pricing-card">

          <div className="iconBx">
            <img src="https://i.ibb.co/Ht9p6cb/silver.png" alt="" />
          </div>

          <div className="card-title">Lorem Ipusem</div>

          <ul className="pricing-feature">
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>
            <li className="doesnt-have">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, illum!</li>

          </ul>

          <div className="btnBx">
            <button>
              Order Now!
            </button>
          </div>

        </article>

      </section>

      <WorkSampleSection />
      <WhyUsSection />

    </React.Fragment>
  );
}

export default Pricing;