import React from 'react';

const FooterItemSection = (props) => {
  return (
    <div className={props.className}>
      <div className="footer-link-title">{props.title}</div>
      {props.children}
    </div>
  );
}

export default FooterItemSection;