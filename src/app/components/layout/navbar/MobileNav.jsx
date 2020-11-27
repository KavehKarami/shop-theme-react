import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mobileNavRouter, routes } from '../../../routes';
import LeftArrowIcon from '../../shared/icons/LeftArrowIcon';
import OtherIcon from '../../shared/icons/OtherIcon';
import CustomLink from '../../utils/CustomLink';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    handleTabBar();

    var dropdown = document.getElementsByClassName("dropdown-btn");
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
  }, [location]) // eslint-disable-line react-hooks/exhaustive-deps

  function handleTabBar() {
    let others = document.querySelector(".tab-others");
    others.classList.add('active');
    let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
    let distance = Math.floor(others.offsetLeft - 30);
    tabIndicator.style.transform = "translateX(" + distance + "px)";

    mobileNavRouter.find(route => {
      if (route.path === location.pathname) {
        others.classList.remove('active');
        let tabBarActive = document.querySelector(".tab-item.active");
        let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
        let distance = Math.floor(tabBarActive.offsetLeft - 30);
        tabIndicator.style.transform = "translateX(" + distance + "px)";
        return true;
      }
      return false;
    })
  }

  const handleMenu = (e) => {
    const condition = !!((e.target).classList.contains("menu-dont-close"));

    if (!condition && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  window.addEventListener('click', handleMenu, false);

  const handleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  document.addEventListener("DOMContentLoaded", handleTabBar);
  document.getElementsByTagName("BODY")[0].onresize = function () { handleTabBar() };

  return (
    <React.Fragment>
      <nav className="tab-bar-box d-md-none">
        <div className="tab-bar">
          <div className="tab-indicator">
            <div className="tab-indicator-left"></div>
            <div className="tab-indicator-right"></div>
          </div>
          <div className="tab-others" onClick={handleMobileMenu}>
            <div id="otherBtn" className="tab-item-inner d-flex flex-column menu-dont-close">
              <OtherIcon />
              سایر
            </div>
          </div>

          {mobileNavRouter.map((route, index) => <CustomLink key={index} path={route.path} exact={route.exact} label={route.label} icon={route.icon} />)}
        </div>
      </nav>

      <section className={isMenuOpen ? "mobile-menu menu-dont-close open-menu" : "mobile-menu menu-dont-close"} id="mobileMenu">
        <ul className="menu-box my-5 mx-3">
          {routes.map((route, index) => (
            <li className={!route.label ? "d-none menu-dont-close" : "menu-dont-close"} key={index}><Link className={location.pathname === route.path ? "menu menu-active menu-dont-close" : "menu menu-dont-close"} to={route.path}>{route.label}</Link></li>
          ))}

          <li className="menu-dont-close">
            <button className="dropdown-btn menu-dont-close">
              <span className="menu-dont-close">سایر</span>
              <span className="iconBx menu-dont-close">
                <LeftArrowIcon />
              </span>
            </button>
            <div className="dropdown-container menu-dont-close">
              <a href="/#" className="menu-dont-close">تم ها</a>
              <a href="/#" className="menu-dont-close">افزونه ها</a>

              <button className="dropdown-btn menu-dont-close">
                <span className="menu-dont-close">پست های متفرقه</span>
                <span className="iconBx menu-dont-close">
                  <LeftArrowIcon />
                </span>
              </button>

              <div className="dropdown-container menu-dont-close">
                <a href="/#" className="menu-dont-close">نظرات</a>
                <a href="/#" className="menu-dont-close">پرتفولیو</a>
              </div>
            </div>
          </li>


        </ul>


      </section>
    </React.Fragment>
  );
}

export default MobileNav;