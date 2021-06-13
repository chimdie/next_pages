import { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Head from "next/head";
import Footer from "./Footer";
import navButtons from "../config/button";

export const appTitle = "next|pages";
const Layout = ({ children }) => {
  const [isNav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);

  const resize = () => {
    setNav(window.innerWidth <= 760);
  };
  
  return (
    <div className="Layout">
      <Head>
        <title>{appTitle}</title>
      </Head>
      <Header>
        appTitle={appTitle}
        {/* {isNav ? <></> : navButtons={navButtons}} */}
      </Header>
      <div className="Content">{children}</div>
      {isNav ? <NavBar navButtons={navButtons} /> : <Footer />}
    </div>
  );
};
export default Layout;
