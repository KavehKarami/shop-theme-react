import React from 'react';
import MenuDropdownBtn from './MenuDropdownBtn';
import MenuDropdownContainer from './MenuDropdownContainer';

const MenuDropdownBx = () => {
  return (
    <li className="menu-dont-close">
      {/* NOTE for using dropdown and items we should [ MenuDropdownBtn ] and [ MenuDropdownContainer ] as sibling */}
      <MenuDropdownBtn title="سایر" />
      <MenuDropdownContainer>
        <a href="/#" className="menu-dont-close">تم ها</a>
        <a href="/#" className="menu-dont-close">افزونه ها</a>

        <MenuDropdownBtn title="پست های متفرقه" />
        <MenuDropdownContainer>
          <a href="/#" className="menu-dont-close">نظرات</a>
          <a href="/#" className="menu-dont-close">پرتفولیو</a>
        </MenuDropdownContainer>
      </MenuDropdownContainer>
    </li>
  );
}

export default MenuDropdownBx;