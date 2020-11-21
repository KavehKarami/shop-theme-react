import React from 'react';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';

const Navbar = () => {
  return (
    <React.Fragment>
      <MobileNav />
      <DesktopNav />
    </React.Fragment>
  );
}

export default Navbar;