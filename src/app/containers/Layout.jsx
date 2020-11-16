import React from 'react';
// import Header from "../components/layout/Header"
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Sidebar';

const Layout = (props) => {
  return (
    <div className="mb-md-0 mb-120">
      <Navbar />
      {/* <Header /> */}
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;