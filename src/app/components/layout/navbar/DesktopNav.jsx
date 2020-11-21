import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../routes';

const DesktopNav = () => {
  return (
    <nav className="main-navigation d-none d-md-flex">
      <ul>
        {routes.map((route, index) =>
          <li key={index}><Link to={route.path}>{route.label}</Link></li>
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