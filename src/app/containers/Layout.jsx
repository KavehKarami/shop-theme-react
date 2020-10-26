import React from 'react';
// import Header from "../components/layout/Header"
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Sidebar';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Header /> */}
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;