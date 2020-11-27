import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { mobileNavRouter, routes } from '../../../routes';
import OtherIcon from '../../shared/icons/OtherIcon';
import CustomLink from '../../utils/CustomLink';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    handleTabBar();
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
    const condition = (!!e.target.id && !!((e.target.id === "otherIcon" || "otherBtn" || "mobileMenu")));

    if (!condition && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  window.addEventListener('click', handleMenu);

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
            <div id="otherBtn" className="tab-item-inner d-flex flex-column">
              <OtherIcon />
              سایر
            </div>
          </div>

          {mobileNavRouter.map((route, index) => <CustomLink key={index} path={route.path} exact={route.exact} label={route.label} icon={route.icon} />)}
        </div>
      </nav>

      <section className={isMenuOpen ? "mobile-menu open-menu" : "mobile-menu"} id="mobileMenu">
        <ul className="menu-box my-5 mx-3">
          {routes.map((route, index) => (
            <li className={!route.label ? "d-none" : undefined} key={index}><Link className={location.pathname === route.path ? "menu menu-active" : "menu"} to={route.path}>{route.label}</Link></li>
          ))}
        </ul>
      </section>
    </React.Fragment>
  );
}

export default MobileNav;