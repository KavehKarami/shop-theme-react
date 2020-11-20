import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import MailIcon from '../shared/icons/MailIcon';
import PhoneIcon from '../shared/icons/PhoneIcon';
import DashedInput from '../shared/inputs/DashedInput';
import FollowUs from '../shared/sections/FollowUs';
import ShapeDivider1 from '../shared/shape-dividers/ShapeDivider1';
import ShapeDivider2 from '../shared/shape-dividers/ShapeDivider2';

const Footer = () => {
  return (
    <footer className="text-dark mt-5 bg-dark">
      <div className="position-relative w-100 mb-3">
        <ShapeDivider2 />
      </div>

      <div className="container-fluid footer-main">

        <section className="row sub-to-news mb-md-5 flex-column flex-md-row-reverse">
          <div className="position-relative">
            <DashedInput className="mb-2 mb-md-0 mr-md-5" placeholder="example: asd@asd.com" />
            <div className="mb-4 mb-md-0 mt-md-3 pr-md-5  input-caption">با عضویت در خبرنامه از آخرین تخفیفات و آفر های ما باخبر باشید.</div>
          </div>
          <FollowUs />
        </section>

        <div className="row pt-3 justify-content-md-between">
          <div className="col-12 col-md-4 my-4 mb-1">
            <div className="footer-link-title">درباره ما</div>
            <div className="footer-items">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </div>
          </div>

          <div className="col-12 col-md-3   mt-3 mb-5">

            <div className="footer-link-title">تماس با ما</div>

            <div className="footer-items footer-contact-box d-flex mb-3 align-items-center justify-content-start">
              <PhoneIcon />

              <a href="callto:+989186948289" className="mr-3 footer-contact-text">
                +(98)918-694-8289
              </a>
            </div>

            <div className="footer-items footer-contact-box d-flex mb-3 align-items-center justify-content-start">
              <MailIcon />

              <a href="maillto:Kaveh.Karami.KK@gmail.com" className="mr-3 footer-contact-text">
                Kaveh.Karami.KK@gmail.com
              </a>
            </div>

          </div>

          <div className="col-6 col-md-2 mt-3 mb-5 d-none d-md-block">
            <div className="footer-link-title">دسترسی سریع</div>
            <ul className="footer-items">
              {routes.map((route, index) => (
                <li key={index}>
                  <Link className="text-light" to={route.path}>{route.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="position-relative w-100 d-md-none">
        <ShapeDivider1 />
      </div>
    </footer>
  );
}

export default Footer;