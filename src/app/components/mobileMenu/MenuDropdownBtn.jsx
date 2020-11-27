import React from 'react';
import LeftArrowIcon from '../shared/icons/LeftArrowIcon';

const MenuDropdownBtn = (props) => {
  return (
    <button className="mobile-menu-dropdown menu-dont-close">
      <span className="menu-dont-close">{props.title}</span>
      <span className="iconBx menu-dont-close">
        <LeftArrowIcon />
      </span>
    </button>
  );
}

export default MenuDropdownBtn;