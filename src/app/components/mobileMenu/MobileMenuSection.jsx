import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../routes';
import MenuDropdownBx from './MenuDropdownBx';

const MobileMenuSection = (props) => {
  useEffect(() => {
    var dropdown = document.getElementsByClassName("mobile-menu-dropdown");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.opacity === "1") {
          dropdownContent.style.opacity = '0';
          dropdownContent.style.visibility = "hidden";
        } else {
          dropdownContent.style.opacity = '1';
          dropdownContent.style.visibility = "visible";
        }
      });
    }
  }, [])

  return (
    <section className={props.isMenuOpen ? "mobile-menu menu-dont-close open-menu" : "mobile-menu menu-dont-close"} id="mobileMenu">
      <ul className="menu-box my-5 mx-3">
        {routes.map((route, index) => (
          <li className={!route.label ? "d-none menu-dont-close" : "menu-dont-close"} key={index}><Link className={props.path === route.path ? "menu menu-active menu-dont-close" : "menu menu-dont-close"} to={route.path}>{route.label}</Link></li>
        ))}

        <MenuDropdownBx />
      </ul>
    </section>
  );
}

export default MobileMenuSection;