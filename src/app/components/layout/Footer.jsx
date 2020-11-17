import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import DashedInput from '../shared/inputs/DashedInput';
import FollowUs from '../shared/sections/FollowUs';
import ShapeDivider1 from '../shared/shape-dividers/ShapeDivider1';

const Footer = () => {
  return (
    <footer className="text-dark mt-5 pt-5 bg-dark">
      <div className="container-fluid">

        <section className="row sub-to-news">
          <DashedInput className="mb-2" placeholder="example: asd@asd.com" />
          <div className="mb-4">با عضویت در خبرنامه از آخرین تخفیفات و آفر های ما باخبر باشید.</div>
          <FollowUs />
        </section>

        <div className="row pt-3">
          <div className="col-12 my-4 mb-1">
            <div className="footer-link-title">درباره ما</div>
            <div className="footer-about-us">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-6  mt-3 mb-5">
            <div className="footer-link-title">تماس با ما</div>
          </div>
          <div className="col-6  mt-3 mb-5">
            <div className="footer-link-title">دسترسی سریع</div>
            <ul>
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