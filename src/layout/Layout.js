import { Fragment, useEffect } from "react";
import { cursor, stickyNav } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import Preloader from "./Preloader";
const Layout = ({ children, noHeader }) => {
  useEffect(() => {
    cursor();
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);

  return (
    <Fragment>
      <Preloader />
      {/* Container */}
      <div className="container">
        {/* Cursor */}
        <div className="cursor-follower" />
        {/* Header */}
        {!noHeader && <Header />}

        {/* Wrapper */}
        <div className="wrapper">
          {/* Section Started */}
          {children}
        </div>
        {/* Footer */}
        <Footer />
        {/* Lines */}
        <div className="lines">
          <div className="content">
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
            <div className="line-col" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
