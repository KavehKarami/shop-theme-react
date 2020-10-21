import React from 'react';
import Header from "../components/layout/Header"
import Navbar from '../components/layout/Navbar';
// import Sidebar from "../components/layout/Sidebar"
import Footer from '../components/layout/Sidebar';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      {/* <Sidebar /> */}
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;