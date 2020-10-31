import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { mobileNavRouter } from '../../../routes';
import OtherIcon from '../../shared/icons/OtherIcon';
import CustomLink from '../../utils/CustomLink';


const MobileNav = () => {
  const location = useLocation();

  useEffect(() => {
    handleTabBar()
  }, [location])

  function handleTabBar() {
    var tabBarActive = document.querySelector(".tab-item.active");
    var tabIndicator = document.getElementsByClassName("tab-indicator")[0];
    var distance = Math.floor(tabBarActive.offsetLeft - 30);
    tabIndicator.style.transform = "translateX(" + distance + "px)";
  }

  document.addEventListener("DOMContentLoaded", handleTabBar);
  document.getElementsByTagName("BODY")[0].onresize = function () { handleTabBar() };

  return (
    <nav className="tab-bar-box d-md-none">
      <div className="tab-bar">
        <div className="tab-indicator">
          <div className="tab-indicator-left"></div>
          <div className="tab-indicator-right"></div>
        </div>
        <div className="tab-others">
          <div className="tab-item-inner d-flex flex-column">
            <OtherIcon />
            سایر
          </div>
        </div>

        {mobileNavRouter.map((route, index) => <CustomLink key={index} path={route.path} exact={route.exact} label={route.label} icon={route.icon} />)}
      </div>
    </nav>
  );
}

export default MobileNav;