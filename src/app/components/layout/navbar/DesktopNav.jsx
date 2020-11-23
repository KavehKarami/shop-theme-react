import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../../routes';

const DesktopNav = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState();

  useEffect(() => {
    const path = location.pathname === "/";
    setIsHome(path);

  }, [location, isHome]);

  return (
    <nav className={isHome ? "main-navigation d-none d-md-flex" : "main-navigation d-none d-md-flex otherPathNav"}>
      <ul className="mr-4" >
        {routes.map((route, index) =>
          <li key={index}><Link className={location.pathname === route.path ? "link-active" : "text-white"} to={route.path}>{route.label}</Link></li>
        )}
        <li><a href="/#">سایر</a>
          <ul>
            <li><a href="/#">تم ها</a></li>
            <li><a href="/#">افزونه ها</a>
              <ul>
                <li><a href="/#">ری‌اکت جی‌اس</a></li>
                <li><a href="/#">وردپرس</a></li>
              </ul>
            </li>
            <li><a href="/#">پست های متفرقه</a>
              <ul>
                <li><a href="/#">پرتفولیو</a></li>
                <li><a href="/#">نظرات</a>
                  <ul>
                    <li><a href="/#">مشتریان</a></li>
                    <li><a href="/#">کارفرمایان</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default DesktopNav;