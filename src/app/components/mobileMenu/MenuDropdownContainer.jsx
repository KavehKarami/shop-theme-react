import React from 'react';

const MenuDropdownContainer = (props) => {
  return (
    <div className="mobile-menu-dropdown-container menu-dont-close">
      {props.children}
    </div>
  );
}

export default MenuDropdownContainer;