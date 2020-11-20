import React from 'react';
import ShapeDivider1 from '../shared/shape-dividers/ShapeDivider1';
import ShapeDivider2 from '../shared/shape-dividers/ShapeDivider2';
import FooterItemContainer from './footer/FooterItemContainer';
import SubToNews from './footer/SubToNews';

const Footer = () => {
  return (
    <footer className="text-dark mt-5 bg-dark">
      <div className="position-relative w-100 mb-3">
        <ShapeDivider2 />
      </div>

      <div className="container-fluid footer-main">
        <SubToNews />
        <FooterItemContainer />
      </div>

      <div className="position-relative w-100 d-md-none">
        <ShapeDivider1 />
      </div>
    </footer>
  );
}

export default Footer;