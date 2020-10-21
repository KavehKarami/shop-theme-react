import React from 'react';

const Navbar = (props) => {

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
          el.classList.remove('fadeUp')
        });
        el.classList.add("active");
        el.classList.add("fadeUp");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", handleTabBar);
  document.getElementsByTagName("BODY")[0].onresize = function () { handleTabBar() };

  return (
    <nav className={`${props.className || ""} tab-bar-box`}>
      <div className="tab-bar">
        <div className="tab-indicator">
          <div className="tab-indicator-left"></div>
          <div className="tab-indicator-right"></div>
        </div>
        <a href="/#" className="tab-item">
          <div className="tab-item-inner">one</div>
        </a>
        <a href="/#" className="tab-item">
          <div className="tab-item-inner">two</div>
        </a>
        <a href="/#" className="tab-item active">
          <div className="tab-item-inner">three</div>
        </a>
        <a href="/#" className="tab-item">
          <div className="tab-item-inner">Four</div>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;