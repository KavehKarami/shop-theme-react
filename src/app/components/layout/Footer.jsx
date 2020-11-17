import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';

const Footer = () => {
  return (
    <footer className="container-fluid text-dark mt-5 bg-dark">
      <section className="row sub-to-news">
        <div className="input-group">
          <input type="text" />
          <button className="text-dark"> عضویت </button>
        </div>

        <div className="follow-us">
          <i>tw</i>
          <i>insta</i>
          <i>git hub</i>
        </div>
      </section>

      <div className="row mt-3">
        <div className="col-4">
          <div class="footer-link-title">درباره ما</div>
        </div>
        <div className="col-4">
          <div class="footer-link-title">تماس با ما</div>
        </div>
        <div className="col-4">
          <div class="footer-link-title">دسترسی سریع</div>
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>{route.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;