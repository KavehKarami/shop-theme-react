import React from 'react';

const FooterContactItem = (props) => {
  return (
    <div className="footer-items footer-contact-box d-flex mb-3 align-items-center justify-content-start">
      {props.icon}

      <a href={props.href} className="mr-3 footer-contact-text">
        {props.hrefTitle}
      </a>
    </div>
  );
}

export default FooterContactItem;