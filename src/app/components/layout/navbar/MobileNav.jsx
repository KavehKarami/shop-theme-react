import React from 'react';
import { Link } from "react-router-dom"
import AboutUsIcon from '../../shared/icons/AboutUsIcon';
import HomeIcon from '../../shared/icons/HomeIcon';
import OtherIcon from '../../shared/icons/OtherIcon';
import PriceIcon from '../../shared/icons/PriceIcon';

const MobileNav = () => {
  function handleTabBar() {
    // var tabBar = document.querySelectorAll(".tab-bar");
    var tabBarActive = document.querySelector(".tab-item.active");
    var tabItems = document.querySelectorAll(".tab-bar .tab-item");
    var tabIndicator = document.getElementsByClassName("tab-indicator")[0];

    var distance = Math.floor(tabBarActive.offsetLeft - 30);

    tabIndicator.style.transform = "translateX(" + distance + "px)";

    Array.prototype.forEach.call(tabItems, function (el, i) {
      el.addEventListener("click", function (e) {
        e.preventDefault();

        distance = Math.floor(el.offsetLeft - 30);

        tabIndicator.style.transform = "translateX(" + distance + "px)";

        [].forEach.call(tabItems, function (el) {
          el.classList.remove("active");
          // el.classList.remove('upAndScale')
        });
        el.classList.add("active");
        // el.classList.add("upAndScale");
      });
    });
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
        <div className="tab-item">
          <div className="tab-item-inner d-flex flex-column">
            <OtherIcon />
            سایر
          </div>
        </div>
        <Link to="/about-us" className="tab-item">
          <div className="tab-item-inner d-flex flex-column">
            <AboutUsIcon />
            درباره ما
          </div>
        </Link>
        <Link to="/pricing" className="tab-item">
          <div className="tab-item-inner d-flex flex-column">
            <PriceIcon />
            ‌تعرفه ها
          </div>
        </Link>
        <Link to="/" className="tab-item active">
          <div className="tab-item-inner d-flex flex-column">
            <HomeIcon />
            خانه
          </div>
        </Link>

      </div>
    </nav>
  );
}

export default MobileNav;